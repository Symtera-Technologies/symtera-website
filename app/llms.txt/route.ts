import { AI_PAGES } from '@/content/ai';
import { SERVICE_PAGES } from '@/content/services';
import { CLOUD_PAGES } from '@/content/cloud';
import { PRODUCT_PAGES } from '@/content/products';
import { COMPANY, OFFICES } from '@/content/company';
import { FAQ_ALL } from '@/content/faq';
import { SITE_URL } from '@/lib/site-url';
import { decode } from '@/lib/html';
import type { AiPage, ServicePage } from '@/content/types';

/**
 * /llms.txt — the llmstxt.org convention: one Markdown page that tells an AI
 * crawler what this site covers and where each topic lives, so an assistant
 * answering "who does X in New Jersey" can quote us instead of guessing.
 *
 * Built from the same content files as the sitemap and the page bodies rather
 * than hand-written, because a hand-written copy would quietly go stale the
 * first time a service page was renamed.
 */

/**
 * Nothing here reads the request, so it is prerendered at build time alongside
 * robots.txt and the sitemap rather than rendered per fetch.
 */
export const dynamic = 'force-static';

/** First sentence of a page's intro, flattened for a one-line description. */
function summarise(intro: string[]): string {
  const text = decode(intro[0] ?? '').replace(/\s+/g, ' ').trim();
  const stop = text.search(/[.:]\s|[.:]$/);
  const first = stop > 0 ? text.slice(0, stop) : text;
  return first.length > 170 ? `${first.slice(0, 167).trimEnd()}…` : first;
}

const link = (base: string) => (p: AiPage | ServicePage) =>
  `- [${decode(p.nav)}](${SITE_URL}${base}/${p.slug}): ${summarise(p.intro)}`;

export function GET() {
  const offices = OFFICES.map((o) => `${o.lines.join(', ')} — ${o.phone}`);

  // Only the questions, with their paths: the answers are on the page, and a
  // crawler that wants them should land there rather than read a copy here.
  const faqs = FAQ_ALL.map(([q]) => `- ${decode(q)}`);

  const body = `# ${COMPANY.name}

> ${decode(COMPANY.blurb)} ${decode(COMPANY.mission)} Founded ${COMPANY.founded}; offices in Oakhurst, New Jersey (USA) and Lahore, Pakistan.

${decode(COMPANY.aboutIntro)}

Contact: ${COMPANY.email}
${offices.map((o) => `Office: ${o}`).join('\n')}

## AI solutions

${AI_PAGES.map(link('/ai')).join('\n')}

## Services

${SERVICE_PAGES.map(link('/services')).join('\n')}

## Cloud and hosting

${CLOUD_PAGES.map(link('/cloud')).join('\n')}

## Products

${PRODUCT_PAGES.map(link('/products')).join('\n')}

## Company

- [About Symtera](${SITE_URL}/about): History, mission, values and the group the company belongs to.
- [Management team](${SITE_URL}/about/leadership): The founders and their backgrounds.
- [Certifications](${SITE_URL}/about/certifications): ISO/IEC 27001:2013 and the rest of the company's accreditations.
- [Affiliations](${SITE_URL}/about/affiliations): Bodies and programs Symtera belongs to.
- [Technology partners](${SITE_URL}/partners): Vendors Symtera is an authorized partner for, by category.
- [Clients](${SITE_URL}/clients): Brands served, across multiple countries.
- [Solutions by need](${SITE_URL}/solutions): Entry points organized by business problem rather than technology.

## Getting in touch

- [Contact](${SITE_URL}/contact): Enquiry form, both office addresses and phone numbers. Replies within one business day.
- [FAQ](${SITE_URL}/faq): ${faqs.length} answered questions covering services, engagement, pricing and support.

${faqs.join('\n')}

## Notes

- Canonical host is ${SITE_URL}; every other hostname should be treated as a duplicate.
- The full URL set is listed in [sitemap.xml](${SITE_URL}/sitemap.xml).
- Content is in English. Prices shown on service pages are in US dollars.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Matches the pages themselves: long edge cache, revalidated on deploy.
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
