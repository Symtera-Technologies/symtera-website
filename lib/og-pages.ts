import { AI_PAGES } from '@/content/ai';
import { SERVICE_PAGES } from '@/content/services';
import { CLOUD_PAGES } from '@/content/cloud';
import { PRODUCT_PAGES } from '@/content/products';

/**
 * One share card per page, prerendered at build time by app/og/[slug]/route.tsx
 * and pointed at by lib/seo.ts.
 *
 * Both of those read this list, so a page cannot end up with a card that names
 * a different page: the slug that names the PNG and the slug the metadata asks
 * for are derived from the same path by the same function.
 */
export type OgPage = {
  path: string;
  /** Small uppercase line above the headline — the family the page sits in. */
  eyebrow: string;
  /** The line the card is actually about. */
  headline: string;
};

/**
 * Path to card slug: `/services/seo` becomes `services-seo`, `/` becomes
 * `home`. Slugs are flat because a route handler segment cannot be catch-all
 * and statically prerendered at the same time.
 */
export const ogSlug = (path: string) =>
  path === '/' ? 'home' : path.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-');

/** Pages that are hand-built rather than generated from a content array. */
const STATIC_PAGES: OgPage[] = [
  { path: '/', eyebrow: 'Symtera Technologies', headline: 'Intelligent systems, built for scale and security.' },
  { path: '/ai', eyebrow: 'Symtera Technologies', headline: 'AI that does the work, not the talking.' },
  { path: '/services', eyebrow: 'Symtera Technologies', headline: 'Services' },
  { path: '/cloud', eyebrow: 'Symtera Technologies', headline: 'Cloud hosting and email' },
  { path: '/solutions', eyebrow: 'Symtera Technologies', headline: 'Solutions' },
  { path: '/products', eyebrow: 'Symtera Technologies', headline: 'Ready-made systems, built by Symtera.' },
  { path: '/contact', eyebrow: 'Symtera Technologies', headline: 'Talk to us' },
  { path: '/faq', eyebrow: 'Symtera Technologies', headline: 'Frequently asked questions' },
  { path: '/about', eyebrow: 'About', headline: 'About Symtera Technologies' },
  { path: '/about/leadership', eyebrow: 'About', headline: 'Management team' },
  { path: '/about/certifications', eyebrow: 'About', headline: 'Certifications' },
  { path: '/about/affiliations', eyebrow: 'About', headline: 'Affiliations' },
  { path: '/partners', eyebrow: 'About', headline: 'Technology partners' },
  { path: '/clients', eyebrow: 'About', headline: 'Our clients' },
];

export const OG_PAGES: OgPage[] = [
  ...STATIC_PAGES,
  ...AI_PAGES.map((p): OgPage => ({ path: `/ai/${p.slug}`, eyebrow: 'AI', headline: p.seoTitle ?? p.nav })),
  ...SERVICE_PAGES.map((p): OgPage => ({ path: `/services/${p.slug}`, eyebrow: 'Services', headline: p.seoTitle ?? p.nav })),
  ...CLOUD_PAGES.map((p): OgPage => ({ path: `/cloud/${p.slug}`, eyebrow: 'Cloud', headline: p.seoTitle ?? p.nav })),
  ...PRODUCT_PAGES.map((p): OgPage => ({ path: `/products/${p.slug}`, eyebrow: 'Products', headline: p.seoTitle ?? p.nav })),
];

const BY_SLUG = new Map(OG_PAGES.map((p) => [ogSlug(p.path), p]));

export const ogPageBySlug = (slug: string) => BY_SLUG.get(slug);

/** True for a path that has its own card; anything else falls back to /og. */
export const hasOgCard = (path: string) => BY_SLUG.has(ogSlug(path));
