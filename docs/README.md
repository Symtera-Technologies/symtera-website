# docs

Reference material for the migration from the old WordPress site.

| File | What it is |
| --- | --- |
| `legacy-url-map.csv` | The URL inventory this project's redirects were built from, reconstructed in September 2026 from the old site's menu, the Internet Archive and Google's index. |
| `301 Redirect Map.md` | An outside SEO consultant's redirect proposal, 30 September 2026. 122 entries: 113 literal URLs and 9 patterns, plus two commented-out WordPress asset rules. |
| `JSON-LD Schemas.md` | The same consultant's structured-data proposal: FAQPage, ProfessionalService, Service ×14, BreadcrumbList. |
| `Developer Implementation Guide.md` | Their six-step plan drawn from the two documents above. |
| `Post-Migration Indexing Report.md` | Their audit of the live site. |

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
