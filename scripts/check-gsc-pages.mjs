/**
 * Compares a Google Search Console "Pages" export against the live site, so the
 * URLs Google actually knows about can be checked instead of the ones we guessed
 * at when lib/legacy-redirects.ts was reconstructed from the Internet Archive.
 *
 * This is step 3 of docs/GEO Action Plan.md. It answers one question: of the old
 * URLs Google still has, which ones do not land anywhere useful?
 *
 *   In Search Console: Indexing → Pages → Export (CSV) → "Table" sheet.
 *   Any export with a column of URLs works; the header name is not important.
 *
 * Usage:
 *   node scripts/check-gsc-pages.mjs <export.csv> [--origin https://symteratech.com]
 *
 * Output is grouped by what needs doing:
 *   DEAD      — 404/410, and no redirect rule covers it. Needs a rule, or is
 *               deliberately dead (check the list in lib/legacy-redirects.ts).
 *   REDIRECT  — resolves through a redirect. Shows the hop count; more than one
 *               hop is worth fixing, since each hop loses a little authority.
 *   OK        — 200 directly.
 *   ERROR     — could not be fetched; retry before reading anything into it.
 */

import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
const originFlag = args.indexOf('--origin');
const origin = (originFlag === -1 ? 'https://symteratech.com' : args[originFlag + 1]).replace(/\/+$/, '');

if (!file) {
  console.error('usage: node scripts/check-gsc-pages.mjs <export.csv> [--origin https://example.com]');
  process.exit(1);
}

/** Minimal CSV field splitter: handles quoted fields containing commas. */
function splitCsvLine(line) {
  const out = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const c = line[i];
    if (quoted) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i += 1; }
      else if (c === '"') quoted = false;
      else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

// Pull every URL out of the file, whichever column it sits in. Search Console
// has renamed these columns before, so matching on the value beats matching on
// the header.
const rows = readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean);
const urls = [...new Set(
  rows
    .flatMap(splitCsvLine)
    .map((f) => f.trim().replace(/^"|"$/g, ''))
    .filter((f) => /^https?:\/\//i.test(f)),
)];

if (urls.length === 0) {
  console.error(`No URLs found in ${file}. Is this the "Table" sheet of a Pages export?`);
  process.exit(1);
}

console.log(`Checking ${urls.length} URLs from ${file} against ${origin}\n`);

/** Follow redirects by hand so the chain length is visible. */
async function trace(url) {
  const chain = [];
  let current = url;
  for (let i = 0; i < 10; i += 1) {
    const res = await fetch(current, { redirect: 'manual', headers: { 'User-Agent': 'symtera-gsc-check' } });
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location');
      if (!loc) return { status: res.status, chain, final: current };
      current = new URL(loc, current).href;
      chain.push(current);
      continue;
    }
    return { status: res.status, chain, final: current };
  }
  return { status: 'LOOP', chain, final: current };
}

const buckets = { DEAD: [], REDIRECT: [], OK: [], ERROR: [] };
let done = 0;

// Small concurrency: this runs against the production host, and hammering it
// from one IP is a good way to get throttled mid-audit.
const QUEUE = [...urls];
async function worker() {
  while (QUEUE.length) {
    const url = QUEUE.shift();
    try {
      const { status, chain, final } = await trace(url);
      const rec = { url, status, hops: chain.length, final };
      if (status === 404 || status === 410) buckets.DEAD.push(rec);
      else if (chain.length > 0) buckets.REDIRECT.push(rec);
      else if (status === 200) buckets.OK.push(rec);
      else buckets.ERROR.push(rec);
    } catch (err) {
      buckets.ERROR.push({ url, status: err.code ?? 'FETCH_FAILED', hops: 0, final: url });
    }
    done += 1;
    if (done % 25 === 0) process.stderr.write(`  ...${done}/${urls.length}\n`);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));

const path = (u) => u.replace(origin, '') || '/';

// A redirect that ends on the 404 page is a deliberate drop, not a success, but
// it is worth separating from an uncovered URL: one is a decision, one is a gap.
const landsOn404 = buckets.REDIRECT.filter((r) => r.status === 404);
const realRedirects = buckets.REDIRECT.filter((r) => r.status !== 404);
const multiHop = realRedirects.filter((r) => r.hops > 1);

console.log(`\n${'='.repeat(70)}`);
console.log(`  OK, no redirect        ${buckets.OK.length}`);
console.log(`  Redirected to a page   ${realRedirects.length}${multiHop.length ? `  (${multiHop.length} take more than one hop)` : ''}`);
console.log(`  Redirected to the 404  ${landsOn404.length}`);
console.log(`  Dead, no rule          ${buckets.DEAD.length}`);
console.log(`  Could not be fetched   ${buckets.ERROR.length}`);
console.log('='.repeat(70));

if (buckets.DEAD.length) {
  console.log('\nDEAD — 404 with no redirect rule. Each needs a rule in');
  console.log('lib/legacy-redirects.ts, or a decision that it should stay dead:\n');
  for (const r of buckets.DEAD) console.log(`  ${r.status}  ${path(r.url)}`);
}

if (multiHop.length) {
  console.log('\nMULTI-HOP — resolves, but loses a little authority at each hop:\n');
  for (const r of multiHop) console.log(`  ${r.hops} hops  ${path(r.url)}  ->  ${path(r.final)}`);
}

if (landsOn404.length) {
  console.log('\nREDIRECTED TO THE 404 PAGE — deliberate for theme demos and');
  console.log('taxonomy archives; check any that are not:\n');
  for (const r of landsOn404) console.log(`  ${path(r.url)}  ->  ${path(r.final)}`);
}

if (buckets.ERROR.length) {
  console.log('\nERROR — retry these before concluding anything:\n');
  for (const r of buckets.ERROR) console.log(`  ${r.status}  ${path(r.url)}`);
}

console.log('');
