# Developer Implementation Guide: Post-Migration SEO Tasks

**For:** Next.js developer working on symteratech.com**Date:** September 30, 2026**Priority:** Complete Steps 1–3 today, Steps 4–5 this week, Step 6 by end of October

---

## Context

The new site is live at symteratech.com. Google has **not yet indexed the new pages** — only the old WordPress homepage and one old partner URL appear in search results. We need to:

1. Tell Google about the new site (sitemap submission)
2. Redirect 122 old WordPress URLs so we don't lose backlink equity
3. Add structured data (JSON-LD) for rich search results

Three reference documents have been prepared:

- **301 Redirect Map** — 122 old → new URL mappings with ready-to-use Next.js config
- **JSON-LD Schemas** — FAQPage, BreadcrumbList, Service, ProfessionalService schemas
- **Post-Migration Indexing Report** — full audit of what's working and what's missing

---

## Step 1: Google Search Console (Do Today — 15 min)

**Who:** Whoever has Google Search Console access for symteratech.com

### 1.1 Verify ownership

- Go to [Google Search Console](https://search.google.com/search-console)
- If symteratech.com isn't verified, add it as a property
- Recommended verification: DNS TXT record or HTML file upload

### 1.2 Submit the sitemap

- Navigate to **Sitemaps** in the left sidebar
- Enter: `https://symteratech.com/sitemap.xml`
- Click **Submit**

### 1.3 Request indexing for priority pages

- Go to **URL Inspection** (top search bar)
- Enter each URL below, then click **"Request Indexing"**:1. `https://symteratech.com/`

1. `https://symteratech.com/ai`
2. `https://symteratech.com/services`
3. `https://symteratech.com/contact`
4. `https://symteratech.com/faq`
5. `https://symteratech.com/partners`
6. `https://symteratech.com/about`
7. `https://symteratech.com/products`
8. `https://symteratech.com/solutions`
9. `https://symteratech.com/clients`

> ⚠️ Google limits manual indexing requests. Submit the top 10 pages — the rest will be discovered via the sitemap.

### 1.4 Check for issues

- Go to **Pages** report — look for crawl errors
- Go to **Core Web Vitals** — check for any performance flags

---

## Step 2: Implement 301 Redirects (Do Today — 30 min)

**Reference:** `301_redirect_map.md`**What:** 122 old WordPress URLs need to 301-redirect to their new equivalents**Why:** Google still has old URLs indexed. Without redirects, backlink equity is lost and users hitting old URLs see wrong content.

### 2.1 Add redirects to `next.config.js`

Open your `next.config.js` and add the `redirects()` function. The full config is in the redirect map document — copy-paste the entire block.

```js
// next.config.js
module.exports = {
  // ... existing config
  async redirects() {
    return [
      // === PARTNER PAGES (32 redirects) ===
      { source: '/our-partners', destination: '/partners', permanent: true },
      { source: '/our-partners/network-security', destination: '/partners', permanent: true },
      { source: '/our-partners/network-security/fortinet', destination: '/partners', permanent: true },
      { source: '/our-partners/network-security/sophos', destination: '/partners', permanent: true },
      // ... (see 301_redirect_map.md for all 122 entries)
      
      // === WILDCARD PATTERNS ===
      { source: '/category/:path*', destination: '/', permanent: true },
      { source: '/tag/:path*', destination: '/', permanent: true },
      { source: '/author/:path*', destination: '/about/leadership', permanent: true },
      { source: '/portfolio/:path*', destination: '/clients', permanent: true },
      { source: '/job-category/:path*', destination: '/contact', permanent: true },
      { source: '/job-location/:path*', destination: '/contact', permanent: true },
      { source: '/job-type/:path*', destination: '/contact', permanent: true },
    ];
  },
};

```

### 2.2 Handle trailing slashes

Make sure the Next.js config handles both `/our-partners/network-security/sophos` and `/our-partners/network-security/sophos/`. Next.js `source` patterns match with or without trailing slashes by default, but verify in testing.

### 2.3 Test

After deploying, verify redirects work:

```bash
# Should return 301 with Location: /partners
curl -I https://symteratech.com/our-partners/network-security/sophos/

# Should return 301 with Location: /services/seo
curl -I https://symteratech.com/2019/07/10/what-to-look-for-in-an-seo-consultant/

# Should return 301 with Location: /faq
curl -I https://symteratech.com/faqs/

# Should return 301 with Location: /contact
curl -I https://symteratech.com/contacts/

```

Expected output for each:

```
HTTP/2 301
location: https://symteratech.com/<new-url>

```

### 2.4 Deploy

- Push to production
- Verify 3–5 redirects manually with `curl -I`
- Check Google Search Console in 24h for any new crawl errors

---

## Step 3: Add FAQPage JSON-LD Schema (Do Today — 20 min)

**Reference:** `jsonld_schemas_implementation.md` → Section 1**What:** Add FAQPage structured data to `/faq`**Why:** This is the highest-impact schema — enables expandable FAQ rich snippets in Google search results

### 3.1 Add to the FAQ page component

In the FAQ page component (likely `app/faq/page.tsx` or similar), add a `<script>` tag in the `<head>`:

```tsx
// app/faq/page.tsx (or wherever your FAQ page lives)
import { Metadata } from 'next';

export const metadata: Metadata = {
  // ... existing metadata
};

export default function FAQPage() {
  const faqSchema = {
    // COPY THE FULL FAQPage JSON FROM jsonld_schemas_implementation.md
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ... rest of your FAQ page JSX */}
    </>
  );
}

```

> The full JSON with all 24 Q&As is in `jsonld_schemas_implementation.md` → Section 1. Copy the entire block.

### 3.2 Validate

1. Deploy to production (or test on localhost)
2. Open Chrome DevTools → Elements → Ctrl+F → search `ld+json`
3. You should see **two** JSON-LD blocks: the existing Organization+WebSite one, and the new FAQPage one
4. Copy the FAQPage JSON and paste into [Google Rich Results Test](https://search.google.com/test/rich-results)
5. Should show: ✅ "FAQ" with 24 items detected

---

## Step 4: Add BreadcrumbList Schema — All Pages (This Week — 1 hour)

**Reference:** `jsonld_schemas_implementation.md` → Section 4**What:** Add BreadcrumbList to all 36 pages**Why:** Shows breadcrumb trails in Google search results instead of raw URLs

### 4.1 Create a reusable utility

```tsx
// lib/structured-data.ts

type BreadcrumbItem = { name: string; url: string };

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

```

### 4.2 Create a JSON-LD component

```tsx
// components/JsonLd.tsx

type Props = { data: Record<string, unknown> };

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

```

### 4.3 Add to each page's layout or page component

```tsx
// Example: app/ai/process-automation/page.tsx
import { JsonLd } from '@/components/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export default function ProcessAutomationPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://symteratech.com' },
    { name: 'AI Solutions', url: 'https://symteratech.com/ai' },
    { name: 'Process Automation', url: 'https://symteratech.com/ai/process-automation' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {/* ... page content */}
    </>
  );
}

```

### 4.4 Breadcrumb map for all 36 pages

See the full table in `jsonld_schemas_implementation.md` → Section 4 → "Breadcrumb Map". Each page's breadcrumb trail is listed there. Key examples:

| Page | Trail |
| --- | --- |
| `/` | Home |
| `/ai` | Home → AI Solutions |
| `/ai/process-automation` | Home → AI Solutions → Process Automation |
| `/services/seo` | Home → Services → SEO |
| `/about/leadership` | Home → About → Leadership |
| `/cloud/linux-hosting` | Home → Cloud → Linux Hosting |
| `/products/symscan` | Home → Products → SymScan |

---

## Step 5: Add Service + ProfessionalService Schemas (This Week — 1 hour)

**Reference:** `jsonld_schemas_implementation.md` → Sections 2 and 3

### 5.1 Service schemas (14 pages)

Each AI sub-page (`/ai/*`) and service sub-page (`/services/*`) gets a Service schema. The JSON for each is in the reference document.

Using the `JsonLd` component from Step 4:

```tsx
// Example: app/ai/ai-chatbots/page.tsx
import { JsonLd } from '@/components/JsonLd';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Chatbots & Virtual Assistants",
  "description": "24/7 support with personalised interactions, embedded in your website, app or CRM, scaling as demand grows.",
  "url": "https://symteratech.com/ai/ai-chatbots",
  "provider": {
    "@type": "Organization",
    "@id": "https://symteratech.com/#organization"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Pakistan" }
  ],
  "serviceType": "IT Services"
};

export default function AIChatbotsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {/* ... page content */}
    </>
  );
}

```

**Pages that need Service schema:**

1. `/ai/process-automation`
2. `/ai/ai-chatbots`
3. `/ai/ai-agents`
4. `/ai/document-intelligence`
5. `/ai/knowledge-rag`
6. `/ai/integration`
7. `/ai/predictive-ai`
8. `/ai/custom-ai`
9. `/services/software-development`
10. `/services/e-commerce-development`
11. `/services/seo`
12. `/services/social-media`
13. `/services/cloud-services`
14. `/services/it-infrastructure`

> Copy each page's specific JSON from `jsonld_schemas_implementation.md` → Section 3

### 5.2 ProfessionalService schema (`/contact`)

Add the ProfessionalService schema to the contact page. The full JSON is in `jsonld_schemas_implementation.md` → Section 2.

---

## Step 6: Create Blog Section (By End of October)

**What:** Create a `/blog` route with the 5 migrated posts from the old WordPress site**Why:** Preserves backlink equity from external sites linking to old blog posts**Impact:** Medium — but becomes more urgent as old blog URLs drop from Google's index

### 6.1 Minimum viable blog

- Create `/blog` listing page
- Migrate the 5 old posts (titles and content are in the Wayback Machine)
- Add to the sitemap
- Add to the main navigation or footer

### 6.2 Update redirect map

Once `/blog` exists, update these redirects to point to the actual blog:

```js
// Change from:
{ source: '/blog', destination: '/', permanent: true }
// To:
// (remove this redirect — /blog now exists)

```

And update individual blog post redirects to point to the actual migrated posts.

---

## Validation Checklist

After deploying each step, verify:

### Redirects

```bash
# Run these curl commands — expect HTTP 301 for each
curl -I https://symteratech.com/our-partners/network-security/sophos/
curl -I https://symteratech.com/faqs/
curl -I https://symteratech.com/contacts/
curl -I https://symteratech.com/about-us/
curl -I https://symteratech.com/blog/

```

### JSON-LD

1. Open any page → Chrome DevTools → Elements → search `ld+json`
2. Count the `<script type="application/ld+json">` blocks:- **Homepage:** 1 block (Organization + WebSite)

- **FAQ page:** 2 blocks (Organization+WebSite, FAQPage)
- **AI sub-pages:** 3 blocks (Organization+WebSite, BreadcrumbList, Service)
- **Contact page:** 3 blocks (Organization+WebSite, BreadcrumbList, ProfessionalService)
- **Other pages:** 2 blocks (Organization+WebSite, BreadcrumbList)

1. Paste any page's URL into [Google Rich Results Test](https://search.google.com/test/rich-results) — should show green checkmarks

### Google Search Console

- Check **Pages** report 24h after deploying redirects — crawl errors for old URLs should start resolving
- Re-submit sitemap after adding JSON-LD schemas
- Re-request indexing for `/faq` after adding FAQPage schema (for faster rich snippet activation)

---

## Timeline Summary

| Step | Task | Effort | Deadline |
| --- | --- | --- | --- |
| 1 | Google Search Console setup | 15 min | Today (Sep 30) |
| 2 | 301 redirects in next.config.js | 30 min | Today (Sep 30) |
| 3 | FAQPage JSON-LD | 20 min | Today (Sep 30) |
| 4 | BreadcrumbList (all pages) | 1 hour | This week |
| 5 | Service + ProfessionalService schemas | 1 hour | This week |
| 6 | Blog section | 4–8 hours | End of October |

**Total dev time for Steps 1–5: ~3 hours**

---

## Reference Files

All schemas and redirect configs are ready to copy-paste from these documents:

1. **301 Redirect Map** — `301_redirect_map.md` (Next.js + Nginx configs, 122 redirects)
2. **JSON-LD Schemas** — `jsonld_schemas_implementation.md` (FAQPage, BreadcrumbList, Service ×14, ProfessionalService)
3. **Indexing Report** — `post_migration_indexing_report.md` (full audit and context)

