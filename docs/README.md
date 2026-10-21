# docs

Reference material for the migration from the old WordPress site.

| File | What it is |
| --- | --- |
| `legacy-url-map.csv` | The URL inventory this project's redirects were built from, reconstructed in September 2026 from the old site's menu, the Internet Archive and Google's index. |
| `301 Redirect Map.md` | An outside SEO consultant's redirect proposal, 30 September 2026. 122 entries: 113 literal URLs and 9 patterns, plus two commented-out WordPress asset rules. |
| `JSON-LD Schemas.md` | The same consultant's structured-data proposal: FAQPage, ProfessionalService, Service ×14, BreadcrumbList. |
| `Developer Implementation Guide.md` | Their six-step plan drawn from the two documents above. |
| `Post-Migration Indexing Report.md` | Their audit of the live site. |
| `GEO Action Plan.md` | A second consultant's SEO/GEO plan, 21 October 2026. Sixteen prioritised items, P0 to P3. |

## Read the four consultant documents with this in mind

They were written against a build that predates the deployment, so parts of them
describe a site that no longer exists. An audit on 1 October 2026 checked every
claim against the repository and the live site. What it found:

- **"No 301 redirects exist"** and **"`/our-partners/network-security/sophos/`
  returns 200, a soft 404"** — both false. Every one of their 113 literal URLs
  answers with a permanent redirect in a single hop; 106 land on a live page and
  7 land on the 404 page on purpose (`/blog`, `/blog-grid`, `/sample-page`,
  `/elements`, `/typography`, `/coming-soon`, `/scatter`). The URL they name
  returns 308 to `/partners#network-security`.
- **"Missing: Service, FAQPage, BreadcrumbList, LocalBusiness schemas"** — all
  present. BreadcrumbList covered only the 23 sub-pages at the time of their
  audit and now covers every route except the home page, where a one-item trail
  would be noise.
- **Steps 2, 3, 4 and 5 of the implementation guide** are done — step 4,
  BreadcrumbList, as of 1 October 2026. Step 1 needs a Google Search Console
  session; ownership itself is already verified by DNS TXT. Step 6, the blog, is
  deliberately not being built.
- **The redirect destinations differ on purpose.** Old partner URLs land on an
  anchored section of `/partners` rather than the bare page; `/shop` goes to
  `/products`; the two July 2021 posts go to `/solutions`. Theme demo pages,
  taxonomy archives and `/wp-content/*` are left to return 404, because
  redirecting an image path or an empty tag archive to the home page is a soft
  404 in Google's eyes and a real 404 drops the URL cleanly.
- **The FAQPage JSON in their document is a copy of `content/faq.ts`**, not an
  independent source, and it reproduced two mistakes that have since been fixed
  here: the `info@` address and the reference to a "Request a Solution" page that
  no longer exists.

What the documents do not cover, and what the audit found instead, is in
`DEPLOYMENT.md` under "One hostname, over HTTPS" — four hostnames serving the
site with no redirect between them.

## The GEO Action Plan, 21 October 2026

A second consultant, writing three weeks later. Its executive summary repeats
several claims that were already false when it was written, so check before
acting on it. Verified against the live site on 21 October 2026:

- **"The homepage is missing its `<title>` tag"** — false. It had one, in
  `app/page.tsx`. It was 72 characters and so was truncated in results, which is
  a different problem, and that is what was fixed.
- **"robots.txt is absent"** — false. `app/robots.ts` has served one since the
  migration, and it already referenced the sitemap.
- **"There's no structured data"** — false. Organization and WebSite site-wide,
  plus Service, FAQPage and BreadcrumbList per route. Its items 6, 10 and 11 ask
  for schema that was already live.
- **"The currently-indexed URLs use an OLD path structure"** and the request to
  finalise 301s — the redirects exist and have since September; see the entry
  for the first consultant's redirect map above. `/our-partners/network-security/sophos/`
  returns 308, not 200.
- **Items 13 and 14, founding year and HQ wording** — no site change needed. The
  site says 2019 everywhere (`COMPANY.founded`, the clients counter, the history
  text) and gives Oakhurst, New Jersey consistently in the schema and the FAQ.
  Where directories say 2020, the directory is wrong; that is an off-site fix.

What it got right, and what was therefore implemented on 21 October 2026:

- **llms.txt was genuinely missing** — now served from `app/llms.txt/route.ts`,
  generated from the same content files as the sitemap so it cannot go stale.
- **Over-length titles** — ten, not the nine it counted, once HTML entities are
  decoded. Fixed with a `seoTitle` override rather than by editing the headings,
  because on every sub-page the title tag and the H1 are the same string.
- **Thin service pages** — `/services/seo` and `/services/social-media` carried
  about 210 words each and no FAQ. Both now have full body sections and an FAQ,
  which also gives them FAQPage schema through the existing template.
- **Explicit AI-crawler rules** — the wildcard already allowed them, so this
  changes no behaviour; it records the decision where a future edit will see it.

Still open, because they need a Google Search Console session or off-site
access: items 1, 3 (the Pages export), 8, 12 and 15.
