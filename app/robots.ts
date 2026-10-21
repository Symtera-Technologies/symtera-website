import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

/**
 * The wildcard rule below already allows every crawler, AI ones included, so
 * these named groups do not change what any bot may fetch today. They are here
 * to state the intent explicitly: several AI crawlers look for their own
 * user-agent before falling back to *, and publishing the decision means a
 * future tightening has to be a deliberate edit to this list rather than an
 * accident of the wildcard.
 *
 * Grouped by what they do, because the answer may differ later: the first group
 * trains and answers, the second only fetches a page a user has asked about.
 */
const AI_CRAWLERS = [
  // Training and retrieval-augmented answers.
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
  'PerplexityBot',
  'CCBot',
  'Bytespider',
  'Meta-ExternalAgent',
  // Fetch-on-demand, when a person asks the assistant about a specific URL.
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-User',
  'Claude-SearchBot',
  'Perplexity-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: '/api/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
