# 301 Redirect Map: symteratech.com

**Date:** September 30, 2026 **Source:** 175 old WordPress URLs discovered via Wayback Machine CDX API **Total redirects:** 122

---

## Implementation

### Option A: Next.js `next.config.js` (Recommended)

Copy the `redirects()` function below into your `next.config.js`.

### Option B: Nginx / Apache

Use the Nginx or Apache config blocks at the end of this document.

---

## Next.js Redirects Config

```js
// next.config.js
module.exports = {
  async redirects() {
    return [
      { source: '/about-company', destination: '/about', permanent: true }, // Company info → About
      { source: '/about-us', destination: '/about', permanent: true }, // Company info → About
      { source: '/management-team', destination: '/about/leadership', permanent: true }, // Team → Leadership
      { source: '/professional-team', destination: '/about/leadership', permanent: true }, // Team → Leadership
      { source: '/board-of-advisory', destination: '/about/leadership', permanent: true }, // Advisory → Leadership
      { source: '/gina-bruno', destination: '/about/leadership', permanent: true }, // Team member → Leadership
      { source: '/certifications', destination: '/about/certifications', permanent: true }, // Direct match
      { source: '/our-affiliations', destination: '/about/affiliations', permanent: true }, // Direct match
      { source: '/our-client', destination: '/clients', permanent: true }, // Clients → Clients
      { source: '/our-process', destination: '/about', permanent: true }, // Process → About
      { source: '/ai-services', destination: '/ai', permanent: true }, // AI services → AI hub
      { source: '/cybersecurity', destination: '/partners', permanent: true }, // Cybersecurity (partner products) → Partners
      { source: '/networking', destination: '/services/it-infrastructure', permanent: true }, // Networking → IT Infrastructure
      { source: '/it-infrastructure', destination: '/services/it-infrastructure', permanent: true }, // Direct match
      { source: '/it-infrastructure-blog', destination: '/services/it-infrastructure', permanent: true }, // IT infra blog → IT infra service
      { source: '/cloud-computing', destination: '/services/cloud-services', permanent: true }, // Cloud → Cloud services
      { source: '/cloud-services', destination: '/services/cloud-services', permanent: true }, // Direct match
      { source: '/software-development', destination: '/services/software-development', permanent: true }, // Direct match
      { source: '/app-development', destination: '/services/software-development', permanent: true }, // App dev → Software dev
      { source: '/e-commerce-development', destination: '/services/e-commerce-development', permanent: true }, // Direct match
      { source: '/it-services/web-development', destination: '/services/software-development', permanent: true }, // Web dev → Software dev
      { source: '/seo', destination: '/services/seo', permanent: true }, // Direct match
      { source: '/pay-per-click', destination: '/services/seo', permanent: true }, // PPC → SEO/SEM
      { source: '/content-marketing', destination: '/services/seo', permanent: true }, // Content marketing → SEO
      { source: '/social-media', destination: '/services/social-media', permanent: true }, // Direct match
      { source: '/ssl-compliance', destination: '/partners', permanent: true }, // SSL → Partners (SSL section)
      { source: '/cloud-email', destination: '/cloud/enterprise-email-solutions', permanent: true }, // Email → Enterprise email
      { source: '/enterprise-email-solutions', destination: '/cloud/enterprise-email-solutions', permanent: true }, // Direct match
      { source: '/cloud-enterprise-server', destination: '/cloud/cloud-enterprise-server', permanent: true }, // Direct match
      { source: '/linux-hosting', destination: '/cloud/linux-hosting', permanent: true }, // Direct match
      { source: '/window-hosting', destination: '/cloud/windows-hosting', permanent: true }, // Windows hosting (old typo) → Windows hosting
      { source: '/shared-hosting', destination: '/cloud/shared-hosting-plus', permanent: true }, // Shared hosting → Shared Hosting Plus
      { source: '/shared-hosting-with-enterprise-email', destination: '/cloud/shared-hosting-plus', permanent: true }, // Shared+email → Shared Hosting Plus
      { source: '/symscan', destination: '/products/symscan', permanent: true }, // Direct match
      { source: '/job-management-system', destination: '/products/job-management-system', permanent: true }, // Direct match
      { source: '/patient-management-system', destination: '/products/patient-management-system', permanent: true }, // Direct match
      { source: '/assets-management-system', destination: '/products/assets-management-system', permanent: true }, // Direct match
      { source: '/our-partners', destination: '/partners', permanent: true }, // Partners hub
      { source: '/our-partners/network-security', destination: '/partners', permanent: true }, // Category → Partners
      { source: '/our-partners/network-security/fortinet', destination: '/partners', permanent: true }, // Fortinet → Partners
      { source: '/our-partners/network-security/sophos', destination: '/partners', permanent: true }, // Sophos → Partners
      { source: '/our-partners/network-security/sonicwall', destination: '/partners', permanent: true }, // SonicWall → Partners
      { source: '/our-partners/network-security/barracuda', destination: '/partners', permanent: true }, // Barracuda → Partners
      { source: '/our-partners/network-security/sangfor', destination: '/partners', permanent: true }, // Sangfor → Partners
      { source: '/our-partners/network-security/safeutm', destination: '/partners', permanent: true }, // SafeUTM → Partners
      { source: '/our-partners/end-point-security', destination: '/partners', permanent: true }, // Category → Partners
      { source: '/our-partners/end-point-security/bitdefender', destination: '/partners', permanent: true }, // Bitdefender → Partners
      { source: '/our-partners/end-point-security/kaspersky', destination: '/partners', permanent: true }, // Kaspersky → Partners
      { source: '/our-partners/compliance-partners', destination: '/partners', permanent: true }, // Category → Partners
      { source: '/our-partners/compliance-partners/digicert-ssl-certificates', destination: '/partners', permanent: true }, // DigiCert → Partners
      { source: '/our-partners/compliance-partners/geo-trust-ssl-certificates', destination: '/partners', permanent: true }, // GeoTrust → Partners
      { source: '/our-partners/compliance-partners/sectigo-ssl-certificates', destination: '/partners', permanent: true }, // Sectigo → Partners
      { source: '/our-partners/compliance-partners/ssl-com-ssl-certificates', destination: '/partners', permanent: true }, // SSL.com → Partners
      { source: '/our-partners/compliance-partners/thawte-ssl-certificates', destination: '/partners', permanent: true }, // Thawte → Partners
      { source: '/our-partners/godaddy-ssl-certificates', destination: '/partners', permanent: true }, // GoDaddy → Partners
      { source: '/our-partners/other-brand-partners', destination: '/partners', permanent: true }, // Category → Partners
      { source: '/our-partners/other-brand-partners/amazon-web-services', destination: '/partners', permanent: true }, // AWS → Partners
      { source: '/our-partners/other-brand-partners/cisco', destination: '/partners', permanent: true }, // Cisco → Partners
      { source: '/our-partners/other-brand-partners/cpanel', destination: '/partners', permanent: true }, // cPanel → Partners
      { source: '/our-partners/other-brand-partners/d-link', destination: '/partners', permanent: true }, // D-Link → Partners
      { source: '/our-partners/other-brand-partners/dell', destination: '/partners', permanent: true }, // Dell → Partners
      { source: '/our-partners/other-brand-partners/grandstream', destination: '/partners', permanent: true }, // Grandstream → Partners
      { source: '/our-partners/other-brand-partners/hikvision', destination: '/partners', permanent: true }, // Hikvision → Partners
      { source: '/our-partners/other-brand-partners/hp', destination: '/partners', permanent: true }, // HP → Partners
      { source: '/our-partners/other-brand-partners/huawei', destination: '/partners', permanent: true }, // Huawei → Partners
      { source: '/our-partners/other-brand-partners/lenovo', destination: '/partners', permanent: true }, // Lenovo → Partners
      { source: '/our-partners/other-brand-partners/microsoft', destination: '/partners', permanent: true }, // Microsoft → Partners
      { source: '/our-partners/other-brand-partners/ubiquiti', destination: '/partners', permanent: true }, // Ubiquiti → Partners
      { source: '/our-partners/other-brand-partners/veeam', destination: '/partners', permanent: true }, // Veeam → Partners
      { source: '/blog', destination: '/', permanent: true }, // Blog hub → Homepage (until /blog is created)
      { source: '/blog-grid', destination: '/', permanent: true }, // Blog grid → Homepage
      { source: '/2017/04/11/seo-101-on-page-and-off-page-ranking-factors', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2018/05/24/5-best-free-seo-tools-for-small-businesses', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/05/12/how-to-google-my-business-optimization', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/06/20/seo-best-practice-5-seo-audit-must-haves', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/07/10/what-to-look-for-in-an-seo-consultant', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/08/28/best-practices-seo-syndicated-content', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/09/24/a-guide-to-google-seo-algorithm-updates', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/11/21/15-seo-best-practices-website-architecture', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2019/11/21/seo-best-practices-mobile-friendliness', destination: '/services/seo', permanent: true }, // SEO blog → SEO service
      { source: '/2021/07/13/when-its-time-for-a-business-to-change-old-tech-with-the-new-tech-of-business-it-solutions', destination: '/solutions', permanent: true }, // IT solutions blog → Solutions
      { source: '/2021/07/14/how-managed-it-solutions-can-leverage-my-business', destination: '/solutions', permanent: true }, // IT solutions blog → Solutions
      { source: '/choose-right-business-server-dell-hp-lenovo', destination: '/services/it-infrastructure', permanent: true }, // Server blog → IT infra
      { source: '/dv-vs-ov-vs-ev-ssl-certificates-comparison', destination: '/partners', permanent: true }, // SSL comparison → Partners
      { source: '/on-premises-vs-cloud-migration-benefits', destination: '/services/cloud-services', permanent: true }, // Cloud blog → Cloud services
      { source: '/protect-business-from-ransomware-guide', destination: '/partners', permanent: true }, // Security blog → Partners
      { source: '/sd-wan-vs-mpls-comparison-guide', destination: '/services/it-infrastructure', permanent: true }, // Networking blog → IT infra
      { source: '/faqs', destination: '/faq', permanent: true }, // Old FAQ → New FAQ
      { source: '/contacts', destination: '/contact', permanent: true }, // Old contact → New contact
      { source: '/career', destination: '/contact', permanent: true }, // Career → Contact (no careers page on new site)
      { source: '/job-openings', destination: '/contact', permanent: true }, // Jobs → Contact
      { source: '/jobs', destination: '/contact', permanent: true }, // Jobs → Contact
      { source: '/jobs/accountant', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/jobs/digital-marketing-manager', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/jobs/flutter-developer', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/jobs/junior-laravel-developer', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/jobs/marketing-analyst', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/jobs/python-ai-ml-developer', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/jobs/sales-executive', destination: '/contact', permanent: true }, // Job listing → Contact
      { source: '/portfolio-grid', destination: '/clients', permanent: true }, // Portfolio grid → Clients
      { source: '/portfolio-grid-2', destination: '/clients', permanent: true }, // Portfolio grid → Clients
      { source: '/portfolio-masonry', destination: '/clients', permanent: true }, // Portfolio masonry → Clients
      { source: '/cart', destination: '/', permanent: true }, // WooCommerce cart → Homepage
      { source: '/checkout', destination: '/', permanent: true }, // WooCommerce checkout → Homepage
      { source: '/shop', destination: '/products', permanent: true }, // Shop → Products
      { source: '/my-account', destination: '/contact', permanent: true }, // Account → Contact
      { source: '/sample-page', destination: '/', permanent: true }, // Sample page → Homepage
      { source: '/elements', destination: '/', permanent: true }, // Theme demo → Homepage
      { source: '/typography', destination: '/', permanent: true }, // Theme demo → Homepage
      { source: '/coming-soon', destination: '/', permanent: true }, // Coming soon → Homepage
      { source: '/scatter', destination: '/', permanent: true }, // Unknown → Homepage
      { source: '/parousia', destination: '/', permanent: true }, // Unknown → Homepage
      { source: '/registrations', destination: '/contact', permanent: true }, // Registration → Contact
      { source: '/category/:path*', destination: '/', permanent: true }, // WordPress categories → Homepage
      { source: '/tag/:path*', destination: '/', permanent: true }, // WordPress tags → Homepage
      { source: '/author/:path*', destination: '/about/leadership', permanent: true }, // Author pages → Leadership
      { source: '/portfolio/:path*', destination: '/clients', permanent: true }, // Portfolio → Clients
      { source: '/portfolio-cat/:path*', destination: '/clients', permanent: true }, // Portfolio categories → Clients
      { source: '/portfolio-tag/:path*', destination: '/clients', permanent: true }, // Portfolio tags → Clients
      { source: '/job-category/:path*', destination: '/contact', permanent: true }, // Job categories → Contact
      { source: '/job-location/:path*', destination: '/contact', permanent: true }, // Job locations → Contact
      { source: '/job-type/:path*', destination: '/contact', permanent: true }, // Job types → Contact
      // WordPress asset catch-all (return 410 Gone via middleware or ignore)
      // { source: '/wp-content/:path*', destination: '/', permanent: true },
      // { source: '/wp-admin/:path*', destination: '/', permanent: true },
    ];
  },
};

```

---

## Full Redirect Map by Category

### Partner pages (32 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/our-partners/` | → | `/partners` | Partners hub |
| `/our-partners/network-security/` | → | `/partners` | Category → Partners |
| `/our-partners/network-security/fortinet/` | → | `/partners` | Fortinet → Partners |
| `/our-partners/network-security/sophos/` | → | `/partners` | Sophos → Partners |
| `/our-partners/network-security/sonicwall/` | → | `/partners` | SonicWall → Partners |
| `/our-partners/network-security/barracuda/` | → | `/partners` | Barracuda → Partners |
| `/our-partners/network-security/sangfor/` | → | `/partners` | Sangfor → Partners |
| `/our-partners/network-security/safeutm/` | → | `/partners` | SafeUTM → Partners |
| `/our-partners/end-point-security/` | → | `/partners` | Category → Partners |
| `/our-partners/end-point-security/bitdefender/` | → | `/partners` | Bitdefender → Partners |
| `/our-partners/end-point-security/kaspersky/` | → | `/partners` | Kaspersky → Partners |
| `/our-partners/compliance-partners/` | → | `/partners` | Category → Partners |
| `/our-partners/compliance-partners/digicert-ssl-certificates/` | → | `/partners` | DigiCert → Partners |
| `/our-partners/compliance-partners/geo-trust-ssl-certificates/` | → | `/partners` | GeoTrust → Partners |
| `/our-partners/compliance-partners/sectigo-ssl-certificates/` | → | `/partners` | Sectigo → Partners |
| `/our-partners/compliance-partners/ssl-com-ssl-certificates/` | → | `/partners` | SSL.com → Partners |
| `/our-partners/compliance-partners/thawte-ssl-certificates/` | → | `/partners` | Thawte → Partners |
| `/our-partners/godaddy-ssl-certificates/` | → | `/partners` | GoDaddy → Partners |
| `/our-partners/other-brand-partners/` | → | `/partners` | Category → Partners |
| `/our-partners/other-brand-partners/amazon-web-services/` | → | `/partners` | AWS → Partners |
| `/our-partners/other-brand-partners/cisco/` | → | `/partners` | Cisco → Partners |
| `/our-partners/other-brand-partners/cpanel/` | → | `/partners` | cPanel → Partners |
| `/our-partners/other-brand-partners/d-link/` | → | `/partners` | D-Link → Partners |
| `/our-partners/other-brand-partners/dell/` | → | `/partners` | Dell → Partners |
| `/our-partners/other-brand-partners/grandstream/` | → | `/partners` | Grandstream → Partners |
| `/our-partners/other-brand-partners/hikvision/` | → | `/partners` | Hikvision → Partners |
| `/our-partners/other-brand-partners/hp/` | → | `/partners` | HP → Partners |
| `/our-partners/other-brand-partners/huawei/` | → | `/partners` | Huawei → Partners |
| `/our-partners/other-brand-partners/lenovo/` | → | `/partners` | Lenovo → Partners |
| `/our-partners/other-brand-partners/microsoft/` | → | `/partners` | Microsoft → Partners |
| `/our-partners/other-brand-partners/ubiquiti/` | → | `/partners` | Ubiquiti → Partners |
| `/our-partners/other-brand-partners/veeam/` | → | `/partners` | Veeam → Partners |

### Blog posts (19 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/it-infrastructure-blog/` | → | `/services/it-infrastructure` | IT infra blog → IT infra service |
| `/blog/` | → | `/` | Blog hub → Homepage (until /blog is created) |
| `/blog-grid/` | → | `/` | Blog grid → Homepage |
| `/2017/04/11/seo-101-on-page-and-off-page-ranking-factors/` | → | `/services/seo` | SEO blog → SEO service |
| `/2018/05/24/5-best-free-seo-tools-for-small-businesses/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/05/12/how-to-google-my-business-optimization/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/06/20/seo-best-practice-5-seo-audit-must-haves/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/07/10/what-to-look-for-in-an-seo-consultant/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/08/28/best-practices-seo-syndicated-content/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/09/24/a-guide-to-google-seo-algorithm-updates/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/11/21/15-seo-best-practices-website-architecture/` | → | `/services/seo` | SEO blog → SEO service |
| `/2019/11/21/seo-best-practices-mobile-friendliness/` | → | `/services/seo` | SEO blog → SEO service |
| `/2021/07/13/when-its-time-for-a-business-to-change-old-tech-with-the-new-tech-of-business-it-solutions/` | → | `/solutions` | IT solutions blog → Solutions |
| `/2021/07/14/how-managed-it-solutions-can-leverage-my-business/` | → | `/solutions` | IT solutions blog → Solutions |
| `/choose-right-business-server-dell-hp-lenovo/` | → | `/services/it-infrastructure` | Server blog → IT infra |
| `/dv-vs-ov-vs-ev-ssl-certificates-comparison/` | → | `/partners` | SSL comparison → Partners |
| `/on-premises-vs-cloud-migration-benefits/` | → | `/services/cloud-services` | Cloud blog → Cloud services |
| `/protect-business-from-ransomware-guide/` | → | `/partners` | Security blog → Partners |
| `/sd-wan-vs-mpls-comparison-guide/` | → | `/services/it-infrastructure` | Networking blog → IT infra |

### Service/Product pages (28 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/our-affiliations/` | → | `/about/affiliations` | Direct match |
| `/ai-services/` | → | `/ai` | AI services → AI hub |
| `/cybersecurity/` | → | `/partners` | Cybersecurity (partner products) → Partners |
| `/networking/` | → | `/services/it-infrastructure` | Networking → IT Infrastructure |
| `/it-infrastructure/` | → | `/services/it-infrastructure` | Direct match |
| `/cloud-computing/` | → | `/services/cloud-services` | Cloud → Cloud services |
| `/cloud-services/` | → | `/services/cloud-services` | Direct match |
| `/software-development/` | → | `/services/software-development` | Direct match |
| `/app-development/` | → | `/services/software-development` | App dev → Software dev |
| `/e-commerce-development` | → | `/services/e-commerce-development` | Direct match |
| `/it-services/web-development/` | → | `/services/software-development` | Web dev → Software dev |
| `/seo` | → | `/services/seo` | Direct match |
| `/pay-per-click/` | → | `/services/seo` | PPC → SEO/SEM |
| `/content-marketing/` | → | `/services/seo` | Content marketing → SEO |
| `/social-media/` | → | `/services/social-media` | Direct match |
| `/ssl-compliance/` | → | `/partners` | SSL → Partners (SSL section) |
| `/cloud-email/` | → | `/cloud/enterprise-email-solutions` | Email → Enterprise email |
| `/enterprise-email-solutions/` | → | `/cloud/enterprise-email-solutions` | Direct match |
| `/cloud-enterprise-server/` | → | `/cloud/cloud-enterprise-server` | Direct match |
| `/linux-hosting/` | → | `/cloud/linux-hosting` | Direct match |
| `/window-hosting/` | → | `/cloud/windows-hosting` | Windows hosting (old typo) → Windows hosting |
| `/shared-hosting/` | → | `/cloud/shared-hosting-plus` | Shared hosting → Shared Hosting Plus |
| `/shared-hosting-with-enterprise-email/` | → | `/cloud/shared-hosting-plus` | Shared+email → Shared Hosting Plus |
| `/symscan/` | → | `/products/symscan` | Direct match |
| `/patient-management-system/` | → | `/products/patient-management-system` | Direct match |
| `/assets-management-system/` | → | `/products/assets-management-system` | Direct match |
| `/faqs/` | → | `/faq` | Old FAQ → New FAQ |
| `/contacts/` | → | `/contact` | Old contact → New contact |

### Company pages (9 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/about-company/` | → | `/about` | Company info → About |
| `/about-us/` | → | `/about` | Company info → About |
| `/management-team/` | → | `/about/leadership` | Team → Leadership |
| `/professional-team/` | → | `/about/leadership` | Team → Leadership |
| `/board-of-advisory/` | → | `/about/leadership` | Advisory → Leadership |
| `/gina-bruno/` | → | `/about/leadership` | Team member → Leadership |
| `/certifications/` | → | `/about/certifications` | Direct match |
| `/our-client/` | → | `/clients` | Clients → Clients |
| `/our-process/` | → | `/about` | Process → About |

### Jobs/Career (12 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/job-management-system/` | → | `/products/job-management-system` | Direct match |
| `/career/` | → | `/contact` | Career → Contact (no careers page on new site) |
| `/job-openings/` | → | `/contact` | Jobs → Contact |
| `/jobs/` | → | `/contact` | Jobs → Contact |
| `/jobs/accountant/` | → | `/contact` | Job listing → Contact |
| `/jobs/digital-marketing-manager/` | → | `/contact` | Job listing → Contact |
| `/jobs/flutter-developer/` | → | `/contact` | Job listing → Contact |
| `/jobs/junior-laravel-developer/` | → | `/contact` | Job listing → Contact |
| `/jobs/marketing-analyst/` | → | `/contact` | Job listing → Contact |
| `/jobs/python-ai-ml-developer/` | → | `/contact` | Job listing → Contact |
| `/jobs/sales-executive/` | → | `/contact` | Job listing → Contact |
| `/registrations/` | → | `/contact` | Registration → Contact |

### Catch-all patterns (12 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/category/*` | → | `/` | WordPress categories → Homepage |
| `/tag/*` | → | `/` | WordPress tags → Homepage |
| `/author/*` | → | `/about/leadership` | Author pages → Leadership |
| `/portfolio/*` | → | `/clients` | Portfolio → Clients |
| `/portfolio-cat/*` | → | `/clients` | Portfolio categories → Clients |
| `/portfolio-tag/*` | → | `/clients` | Portfolio tags → Clients |
| `/portfolio-grid/` | → | `/clients` | Portfolio grid → Clients |
| `/portfolio-grid-2/` | → | `/clients` | Portfolio grid → Clients |
| `/portfolio-masonry/` | → | `/clients` | Portfolio masonry → Clients |
| `/job-category/*` | → | `/contact` | Job categories → Contact |
| `/job-location/*` | → | `/contact` | Job locations → Contact |
| `/job-type/*` | → | `/contact` | Job types → Contact |

### Misc/Dead pages (10 redirects)

| Old URL | → | New URL | Notes |
| --- | --- | --- | --- |
| `/cart/` | → | `/` | WooCommerce cart → Homepage |
| `/checkout/` | → | `/` | WooCommerce checkout → Homepage |
| `/shop/` | → | `/products` | Shop → Products |
| `/my-account/` | → | `/contact` | Account → Contact |
| `/sample-page/` | → | `/` | Sample page → Homepage |
| `/elements/` | → | `/` | Theme demo → Homepage |
| `/typography/` | → | `/` | Theme demo → Homepage |
| `/coming-soon/` | → | `/` | Coming soon → Homepage |
| `/scatter` | → | `/` | Unknown → Homepage |
| `/parousia/` | → | `/` | Unknown → Homepage |

---

## Nginx Config (Alternative)

```nginx
# Add to server block

# → /
rewrite ^/blog/?$ / permanent;
rewrite ^/blog-grid/?$ / permanent;
rewrite ^/cart/?$ / permanent;
rewrite ^/checkout/?$ / permanent;
rewrite ^/sample-page/?$ / permanent;
rewrite ^/elements/?$ / permanent;
rewrite ^/typography/?$ / permanent;
rewrite ^/coming-soon/?$ / permanent;
rewrite ^/scatter/?$ / permanent;
rewrite ^/parousia/?$ / permanent;

# → /about
rewrite ^/about-company/?$ /about permanent;
rewrite ^/about-us/?$ /about permanent;
rewrite ^/our-process/?$ /about permanent;

rewrite ^/our-affiliations/?$ /about/affiliations permanent;
rewrite ^/certifications/?$ /about/certifications permanent;
# → /about/leadership
rewrite ^/management-team/?$ /about/leadership permanent;
rewrite ^/professional-team/?$ /about/leadership permanent;
rewrite ^/board-of-advisory/?$ /about/leadership permanent;
rewrite ^/gina-bruno/?$ /about/leadership permanent;

rewrite ^/ai-services/?$ /ai permanent;
# → /clients
rewrite ^/our-client/?$ /clients permanent;
rewrite ^/portfolio-grid/?$ /clients permanent;
rewrite ^/portfolio-grid-2/?$ /clients permanent;
rewrite ^/portfolio-masonry/?$ /clients permanent;

rewrite ^/cloud-enterprise-server/?$ /cloud/cloud-enterprise-server permanent;
# → /cloud/enterprise-email-solutions
rewrite ^/cloud-email/?$ /cloud/enterprise-email-solutions permanent;
rewrite ^/enterprise-email-solutions/?$ /cloud/enterprise-email-solutions permanent;

rewrite ^/linux-hosting/?$ /cloud/linux-hosting permanent;
# → /cloud/shared-hosting-plus
rewrite ^/shared-hosting/?$ /cloud/shared-hosting-plus permanent;
rewrite ^/shared-hosting-with-enterprise-email/?$ /cloud/shared-hosting-plus permanent;

rewrite ^/window-hosting/?$ /cloud/windows-hosting permanent;
# → /contact
rewrite ^/contacts/?$ /contact permanent;
rewrite ^/career/?$ /contact permanent;
rewrite ^/job-openings/?$ /contact permanent;
rewrite ^/jobs/?$ /contact permanent;
rewrite ^/jobs/accountant/?$ /contact permanent;
rewrite ^/jobs/digital-marketing-manager/?$ /contact permanent;
rewrite ^/jobs/flutter-developer/?$ /contact permanent;
rewrite ^/jobs/junior-laravel-developer/?$ /contact permanent;
rewrite ^/jobs/marketing-analyst/?$ /contact permanent;
rewrite ^/jobs/python-ai-ml-developer/?$ /contact permanent;
rewrite ^/jobs/sales-executive/?$ /contact permanent;
rewrite ^/my-account/?$ /contact permanent;
rewrite ^/registrations/?$ /contact permanent;

rewrite ^/faqs/?$ /faq permanent;
# → /partners
rewrite ^/cybersecurity/?$ /partners permanent;
rewrite ^/ssl-compliance/?$ /partners permanent;
rewrite ^/our-partners/?$ /partners permanent;
rewrite ^/our-partners/network-security/?$ /partners permanent;
rewrite ^/our-partners/network-security/fortinet/?$ /partners permanent;
rewrite ^/our-partners/network-security/sophos/?$ /partners permanent;
rewrite ^/our-partners/network-security/sonicwall/?$ /partners permanent;
rewrite ^/our-partners/network-security/barracuda/?$ /partners permanent;
rewrite ^/our-partners/network-security/sangfor/?$ /partners permanent;
rewrite ^/our-partners/network-security/safeutm/?$ /partners permanent;
rewrite ^/our-partners/end-point-security/?$ /partners permanent;
rewrite ^/our-partners/end-point-security/bitdefender/?$ /partners permanent;
rewrite ^/our-partners/end-point-security/kaspersky/?$ /partners permanent;
rewrite ^/our-partners/compliance-partners/?$ /partners permanent;
rewrite ^/our-partners/compliance-partners/digicert-ssl-certificates/?$ /partners permanent;
rewrite ^/our-partners/compliance-partners/geo-trust-ssl-certificates/?$ /partners permanent;
rewrite ^/our-partners/compliance-partners/sectigo-ssl-certificates/?$ /partners permanent;
rewrite ^/our-partners/compliance-partners/ssl-com-ssl-certificates/?$ /partners permanent;
rewrite ^/our-partners/compliance-partners/thawte-ssl-certificates/?$ /partners permanent;
rewrite ^/our-partners/godaddy-ssl-certificates/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/amazon-web-services/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/cisco/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/cpanel/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/d-link/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/dell/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/grandstream/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/hikvision/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/hp/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/huawei/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/lenovo/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/microsoft/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/ubiquiti/?$ /partners permanent;
rewrite ^/our-partners/other-brand-partners/veeam/?$ /partners permanent;
rewrite ^/dv-vs-ov-vs-ev-ssl-certificates-comparison/?$ /partners permanent;
rewrite ^/protect-business-from-ransomware-guide/?$ /partners permanent;

rewrite ^/shop/?$ /products permanent;
rewrite ^/assets-management-system/?$ /products/assets-management-system permanent;
rewrite ^/job-management-system/?$ /products/job-management-system permanent;
rewrite ^/patient-management-system/?$ /products/patient-management-system permanent;
rewrite ^/symscan/?$ /products/symscan permanent;
# → /services/cloud-services
rewrite ^/cloud-computing/?$ /services/cloud-services permanent;
rewrite ^/cloud-services/?$ /services/cloud-services permanent;
rewrite ^/on-premises-vs-cloud-migration-benefits/?$ /services/cloud-services permanent;

rewrite ^/e-commerce-development/?$ /services/e-commerce-development permanent;
# → /services/it-infrastructure
rewrite ^/networking/?$ /services/it-infrastructure permanent;
rewrite ^/it-infrastructure/?$ /services/it-infrastructure permanent;
rewrite ^/it-infrastructure-blog/?$ /services/it-infrastructure permanent;
rewrite ^/choose-right-business-server-dell-hp-lenovo/?$ /services/it-infrastructure permanent;
rewrite ^/sd-wan-vs-mpls-comparison-guide/?$ /services/it-infrastructure permanent;

# → /services/seo
rewrite ^/seo/?$ /services/seo permanent;
rewrite ^/pay-per-click/?$ /services/seo permanent;
rewrite ^/content-marketing/?$ /services/seo permanent;
rewrite ^/2017/04/11/seo-101-on-page-and-off-page-ranking-factors/?$ /services/seo permanent;
rewrite ^/2018/05/24/5-best-free-seo-tools-for-small-businesses/?$ /services/seo permanent;
rewrite ^/2019/05/12/how-to-google-my-business-optimization/?$ /services/seo permanent;
rewrite ^/2019/06/20/seo-best-practice-5-seo-audit-must-haves/?$ /services/seo permanent;
rewrite ^/2019/07/10/what-to-look-for-in-an-seo-consultant/?$ /services/seo permanent;
rewrite ^/2019/08/28/best-practices-seo-syndicated-content/?$ /services/seo permanent;
rewrite ^/2019/09/24/a-guide-to-google-seo-algorithm-updates/?$ /services/seo permanent;
rewrite ^/2019/11/21/15-seo-best-practices-website-architecture/?$ /services/seo permanent;
rewrite ^/2019/11/21/seo-best-practices-mobile-friendliness/?$ /services/seo permanent;

rewrite ^/social-media/?$ /services/social-media permanent;
# → /services/software-development
rewrite ^/software-development/?$ /services/software-development permanent;
rewrite ^/app-development/?$ /services/software-development permanent;
rewrite ^/it-services/web-development/?$ /services/software-development permanent;

# → /solutions
rewrite ^/2021/07/13/when-its-time-for-a-business-to-change-old-tech-with-the-new-tech-of-business-it-solutions/?$ /solutions permanent;
rewrite ^/2021/07/14/how-managed-it-solutions-can-leverage-my-business/?$ /solutions permanent;


# Catch-all patterns
rewrite ^/category/(.*)$ / permanent;
rewrite ^/tag/(.*)$ / permanent;
rewrite ^/author/(.*)$ /about/leadership permanent;
rewrite ^/portfolio/(.*)$ /clients permanent;
rewrite ^/portfolio-cat/(.*)$ /clients permanent;
rewrite ^/portfolio-tag/(.*)$ /clients permanent;
rewrite ^/job-category/(.*)$ /contact permanent;
rewrite ^/job-location/(.*)$ /contact permanent;
rewrite ^/job-type/(.*)$ /contact permanent;

```

---

## Notes

1. **All redirects are 301 (permanent)** — this tells Google to transfer ranking equity to the new URL
2. **Partner pages all redirect to **`/partners` — since the new site has a single consolidated partners page rather than individual vendor pages
3. **Blog posts redirect to the most relevant service page** — ideally, create `/blog` and redirect blog posts there instead
4. **Job/career pages redirect to **`/contact` — no careers section on the new site
5. **WordPress taxonomy pages** (categories, tags, authors) use wildcard patterns to catch all variations
6. **Test each redirect** after implementation — use `curl -I https://symteratech.com/old-url` to verify 301 status codes

