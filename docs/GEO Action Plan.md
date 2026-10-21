# Symtera Technologies — SEO / GEO Action Plan
Domain: https://symteratech.com  |  Prepared 2026-10-21

A prioritized plan tying together every finding from the SEO/GEO audit, the full
36-URL crawl, and the generated fix files. Work top-down: P0 first.

--------------------------------------------------------------------------------
EXECUTIVE SUMMARY
--------------------------------------------------------------------------------
The site is technically reachable, server-side rendered, and has a clean sitemap
(35 URLs) with keyword-aligned titles on most pages. However, external checks show
Google has indexed almost nothing (only the homepage and one OLD-structure partner
page appeared), the homepage is missing its <title> tag, robots.txt and llms.txt are
absent, there's no structured data, and the currently-indexed URLs use an OLD path
structure that no longer matches the sitemap. The priorities below fix discoverability
first, then on-page SEO, then GEO (AI-engine optimisation).

--------------------------------------------------------------------------------
P0 — CRITICAL (do this week)
--------------------------------------------------------------------------------
1. Verify Google Search Console + submit sitemap.
   - Authoritative indexing data; everything else depends on it.
   - File: google-search-console-guide.md
2. Fix the missing homepage <title> (+ meta/canonical/OG/Twitter).
   - File: homepage-head.html
3. Export the GSC "Pages" list and finalise 301 redirects old->new.
   - Confirmed: /our-partners/network-security/sophos/ -> /partners
   - Inferred patterns ready in: redirects.htaccess / redirects-nginx.conf
   - Needs the real old-URL list from GSC to become an exact 1:1 map.
4. Deploy robots.txt at the site root (references sitemap, allows AI crawlers).
   - File: robots.txt

--------------------------------------------------------------------------------
P1 — HIGH (next 1-2 weeks)
--------------------------------------------------------------------------------
5. Shorten the 9 over-length page titles (>60 chars truncate in results).
   - File: rewritten-titles.txt
6. Add JSON-LD Organization structured data (site-wide ideally).
   - File: organization-jsonld.html  (update logo, og-image, sameAs, verify NAP)
7. Expand the thin service pages so they can rank and be quoted by AI:
   - /services/seo  -> copy-services-seo.md
   - /services/social-media -> copy-services-social-media.md
   - Consider the same treatment for /clients (add client logos + more copy).
8. Confirm every page has a unique meta description (audit showed titles are good;
   meta descriptions were not detectable via fetch — verify in GSC/Screaming Frog).

--------------------------------------------------------------------------------
P2 — GEO / AI-ENGINE OPTIMISATION (next 2-4 weeks)
--------------------------------------------------------------------------------
9. Deploy llms.txt at the site root.
   - File: llms.txt
10. Add FAQPage schema to /faq and to the new FAQ sections on the service pages.
11. Add Service / Product schema to the respective /services/* and /products/* pages.
12. Strengthen off-site entity consistency (NAP) across Crunchbase, ZoomInfo,
    LinkedIn, SignalHire, DesignRush — same name, address, phone everywhere.

--------------------------------------------------------------------------------
P3 — DATA HYGIENE & ONGOING
--------------------------------------------------------------------------------
13. Reconcile founding year: site says 2019; some directories list 2020. Pick one.
14. Reconcile HQ description: homepage says "USA / Lahore / New Jersey"; directories
    say Oakhurst, NJ. Make the site's wording and schema match the legal address.
15. Set up monthly reporting: track Indexed-page count, impressions, clicks, average
    position in GSC; watch 404s trend to zero after redirects.
16. Internal linking: ensure new/expanded pages are linked from relevant hubs
    (e.g. /services links to /services/seo and /services/social-media).

--------------------------------------------------------------------------------
GENERATED FIX FILES (in this folder)
--------------------------------------------------------------------------------
robots.txt                      -> site root
llms.txt                        -> site root
homepage-head.html              -> homepage <head> (fixes missing title)
organization-jsonld.html        -> <head>, site-wide
rewritten-titles.txt            -> apply per-page titles
redirects.htaccess              -> Apache 301 rules
redirects-nginx.conf            -> Nginx 301 rules
copy-services-seo.md            -> body copy for /services/seo
copy-services-social-media.md   -> body copy for /services/social-media
google-search-console-guide.md  -> GSC setup, sitemap, Pages export
README.md                       -> deployment guide
SEO-GEO-ACTION-PLAN.md          -> this document

--------------------------------------------------------------------------------
WHAT STILL NEEDS YOUR INPUT
--------------------------------------------------------------------------------
- GSC Pages export (to finalise the exact redirect map).
- Real asset URLs: logo, 1200x630 OG image.
- Verified social/profile URLs for schema sameAs[].
- Final decision on founding year (2019 vs 2020).
