/**
 * Permanent redirects from the old WordPress site (symteratech.com) to the new
 * routes, so bookmarks, backlinks and search rankings survive the migration.
 *
 * The inventory was rebuilt from the Internet Archive and Google's index,
 * because the live WordPress site had been replaced by spam by the time of the
 * audit (September 2026). The old URLs all ended in a slash; Next strips it
 * first, so each source below is written without one.
 *
 * Order matters: the first matching rule wins, so specific rules come before
 * the catch-alls.
 *
 * Deliberately absent, so they return the site's 404 page:
 *   - WordPress theme demo pages (/elements, /typography, /sample-page,
 *     /coming-soon, /ot_footer_builders/*, /gina-bruno, /our-process, /faqs)
 *   - blog, category, tag and author archives, which have no equivalent
 *   - /scatter, a slot-machine term captured as a redirect in January 2024,
 *     which looks like earlier spam and should not pass on any authority
 */

export interface LegacyRedirect {
  source: string;
  destination: string;
}

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  // ── Pages in the old site's navigation as of mid-2026 ──────────────────────
  { source: '/about-us', destination: '/about' },
  { source: '/management-team', destination: '/about/leadership' },
  { source: '/certifications', destination: '/about/certifications' },
  { source: '/our-affiliations', destination: '/about/affiliations' },
  { source: '/ai-services', destination: '/ai' },
  { source: '/our-client', destination: '/clients' },
  { source: '/contacts', destination: '/contact' },

  { source: '/software-development', destination: '/services/software-development' },
  { source: '/e-commerce-development', destination: '/services/e-commerce-development' },
  { source: '/seo', destination: '/services/seo' },
  { source: '/social-media', destination: '/services/social-media' },
  { source: '/cloud-services', destination: '/services/cloud-services' },
  { source: '/it-infrastructure', destination: '/services/it-infrastructure' },

  { source: '/enterprise-email-solutions', destination: '/cloud/enterprise-email-solutions' },
  { source: '/cloud-enterprise-server', destination: '/cloud/cloud-enterprise-server' },
  { source: '/linux-hosting', destination: '/cloud/linux-hosting' },
  { source: '/window-hosting', destination: '/cloud/windows-hosting' },
  { source: '/shared-hosting-with-enterprise-email', destination: '/cloud/shared-hosting-plus' },

  { source: '/symscan', destination: '/products/symscan' },
  { source: '/job-management-system', destination: '/products/job-management-system' },
  { source: '/patient-management-system', destination: '/products/patient-management-system' },
  { source: '/assets-management-system', destination: '/products/assets-management-system' },

  // Partner group and brand pages land on their section of /partners.
  { source: '/our-partners/network-security/:brand', destination: '/partners#network-security' },
  { source: '/our-partners/network-security', destination: '/partners#network-security' },
  { source: '/our-partners/end-point-security/:brand', destination: '/partners#endpoint-security' },
  { source: '/our-partners/end-point-security', destination: '/partners#endpoint-security' },
  { source: '/our-partners/compliance-partners/:brand', destination: '/partners#ssl-compliance' },
  { source: '/our-partners/compliance-partners', destination: '/partners#ssl-compliance' },
  { source: '/our-partners/godaddy-ssl-certificates', destination: '/partners#ssl-compliance' },
  {
    source: '/our-partners/other-brand-partners/:brand(veeam|cpanel|ubiquiti|grandstream|hikvision)',
    destination: '/partners#collaboration-management',
  },
  { source: '/our-partners/other-brand-partners/:brand', destination: '/partners#infrastructure-cloud' },
  { source: '/our-partners/other-brand-partners', destination: '/partners#infrastructure-cloud' },
  { source: '/our-partners', destination: '/partners' },
  { source: '/our-partners/:path+', destination: '/partners' },

  // ── Indexed pages that had dropped out of the menu ─────────────────────────
  { source: '/about-company', destination: '/about' },
  { source: '/professional-team', destination: '/about/leadership' },
  { source: '/board-of-advisory', destination: '/about/leadership' },
  { source: '/registrations', destination: '/about/certifications' },
  { source: '/it-services/web-development', destination: '/services/software-development' },
  { source: '/it-services', destination: '/services' },
  { source: '/it-services/:path+', destination: '/services' },
  { source: '/app-development', destination: '/services/software-development' },
  { source: '/pay-per-click', destination: '/services/seo' },
  { source: '/content-marketing', destination: '/services/seo' },
  { source: '/cloud-computing', destination: '/services/cloud-services' },
  { source: '/cloud-email', destination: '/cloud/enterprise-email-solutions' },
  { source: '/shared-hosting', destination: '/cloud/shared-hosting-plus' },
  { source: '/networking', destination: '/services/it-infrastructure' },
  { source: '/cybersecurity', destination: '/partners#network-security' },
  { source: '/ssl-compliance', destination: '/partners#ssl-compliance' },
  { source: '/parousia', destination: '/products' },

  // ── 2026 articles. Their content is not on the new site; nearest topic. ────
  { source: '/choose-right-business-server-dell-hp-lenovo', destination: '/services/it-infrastructure' },
  { source: '/it-infrastructure-blog', destination: '/services/it-infrastructure' },
  { source: '/sd-wan-vs-mpls-comparison-guide', destination: '/services/it-infrastructure' },
  { source: '/on-premises-vs-cloud-migration-benefits', destination: '/services/cloud-services' },
  { source: '/protect-business-from-ransomware-guide', destination: '/partners#endpoint-security' },
  { source: '/dv-vs-ov-vs-ev-ssl-certificates-comparison', destination: '/partners#ssl-compliance' },

  // ── 2017–2021 dated posts ──────────────────────────────────────────────────
  // Both July 2021 posts are about business IT solutions; every earlier post is SEO.
  { source: '/2021/07/:day(\\d{2})/:slug', destination: '/services' },
  { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug', destination: '/services/seo' },

  // ── Careers. The new site has no careers page yet. ─────────────────────────
  { source: '/:page(career|careers|job-openings|jobs)', destination: '/contact' },
  { source: '/:group(jobs|job-category|job-type|job-location)/:slug', destination: '/contact' },

  // ── Old WooCommerce and portfolio ──────────────────────────────────────────
  { source: '/:page(shop|cart|checkout|my-account)', destination: '/contact' },
  { source: '/:page(portfolio|portfolio-grid|portfolio-grid-2|portfolio-masonry)', destination: '/clients' },
  { source: '/:group(portfolio|portfolio-cat|portfolio-tag)/:slug', destination: '/clients' },
];

/** Staff reach webmail through this path, so it leaves the site entirely. */
export const EXTERNAL_REDIRECTS: LegacyRedirect[] = [
  { source: '/webmail', destination: 'https://webmail.symteratech.com/' },
];
