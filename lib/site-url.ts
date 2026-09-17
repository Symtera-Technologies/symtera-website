/**
 * The canonical origin used in the sitemap and robots.txt. Set SITE_URL when
 * building for another host; it defaults to the production domain.
 */
export const SITE_URL = (process.env.SITE_URL || 'https://symteratech.com').replace(/\/+$/, '');
