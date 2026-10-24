import type { Metadata } from 'next';
import { SITE_URL } from './site-url';
import { hasOgCard, ogSlug } from './og-pages';

export const SITE_NAME = 'Symtera Technologies';

/** The title template in app/layout.tsx, applied here for og:title and twitter:title. */
export const fullTitle = (title: string) => (title === SITE_NAME ? title : `${title} — ${SITE_NAME}`);

export const absoluteUrl = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

/**
 * The page's own 1200x630 share card, prerendered by app/og/[slug]/route.tsx.
 *
 * Every page used to point at the one generic card, so a link to a product
 * page looked identical to a link to the home page wherever it was shared.
 * Anything without a card of its own falls back to app/og/route.tsx.
 */
function ogImageFor(path: string, title: string) {
  const url = hasOgCard(path) ? `${SITE_URL}/og/${ogSlug(path)}` : `${SITE_URL}/og`;
  return {
    url,
    width: 1200,
    height: 630,
    alt: `${title} — ${SITE_NAME}`,
  };
}

/**
 * Roughly where Google stops rendering a description. Past this the sentence
 * is cut mid-clause in the result, which reads worse than a shorter one that
 * finishes.
 */
const MAX_DESCRIPTION = 155;

/**
 * Trim a description to {@link MAX_DESCRIPTION} on a word boundary.
 *
 * Pages that set their own description are written to length and pass through
 * untouched. This exists for the ones that fall back to the first paragraph of
 * body copy, where whoever wrote the paragraph had no reason to think about
 * how wide a search result is — without it a 653-character intro reaches the
 * SERP and is cut mid-word.
 */
export function clampDescription(text: string): string {
  const s = text.replace(/\s+/g, ' ').trim();
  if (s.length <= MAX_DESCRIPTION) return s;
  const head = s.slice(0, MAX_DESCRIPTION + 1);
  const lastSpace = head.lastIndexOf(' ');
  const cut = head.slice(0, lastSpace > 0 ? lastSpace : MAX_DESCRIPTION);
  // Drop a dangling connector so the ellipsis follows a word, not a comma.
  return `${cut.replace(/[\s,;:—–-]+$/, '')}…`;
}

/** Per-page metadata: self-referencing canonical, Open Graph and Twitter card. */
export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  /** Page title without the brand suffix; the layout template adds it. */
  title: string;
  description: string;
  path: string;
  /** Home page only: use the title as given instead of the layout template. */
  absolute?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = absolute ? title : fullTitle(title);
  const desc = clampDescription(description);
  const ogImage = ogImageFor(path, title);
  return {
    title: absolute ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: desc,
      images: [ogImage.url],
    },
  };
}
