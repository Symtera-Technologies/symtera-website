import type { MetadataRoute } from 'next';
import { AI_PAGES } from '@/content/ai';
import { SERVICE_PAGES } from '@/content/services';
import { CLOUD_PAGES } from '@/content/cloud';
import { PRODUCT_PAGES } from '@/content/products';
import { SITE_URL } from '@/lib/site-url';

/**
 * Tells search engines about the new URL set, which is what lets them move the
 * old WordPress rankings across the redirects in lib/legacy-redirects.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: [path: string, priority: number][] = [
    ['/', 1],
    ['/ai', 0.9],
    ['/services', 0.9],
    ['/solutions', 0.8],
    ['/products', 0.8],
    ['/contact', 0.8],
    ['/faq', 0.7],
    ['/about', 0.7],
    ['/about/leadership', 0.6],
    ['/about/certifications', 0.6],
    ['/about/affiliations', 0.5],
    ['/partners', 0.6],
    ['/clients', 0.6],
    ...AI_PAGES.map((p): [string, number] => [`/ai/${p.slug}`, 0.8]),
    ...SERVICE_PAGES.map((p): [string, number] => [`/services/${p.slug}`, 0.8]),
    ...CLOUD_PAGES.map((p): [string, number] => [`/cloud/${p.slug}`, 0.7]),
    ...PRODUCT_PAGES.map((p): [string, number] => [`/products/${p.slug}`, 0.7]),
  ];

  return pages.map(([path, priority]) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
