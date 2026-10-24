import type { NextConfig } from "next";
import { LEGACY_REDIRECTS, EXTERNAL_REDIRECTS } from "./lib/legacy-redirects";
import { SITE_URL } from "./lib/site-url";

/** Hostname only, e.g. `symteratech.com`, for the canonical-host rule below. */
const CANONICAL_HOST = new URL(SITE_URL).hostname;

/**
 * Top-level paths that now live on their own subdomain. Each sends `/name` and
 * everything beneath it to `name.symteratech.com`, keeping the rest of the path
 * and the query string.
 *
 * These are temporary redirects while the subdomains are being set up: a
 * permanent one to a host that does not answer is cached by browsers and by
 * Google, and is unpleasant to undo. Move a name into the permanent list below
 * once `curl -sI https://<name>.symteratech.com/` returns 200.
 *
 * Note that Apache resolves real paths in `public_html` before Passenger sees
 * the request, so a folder of the same name in the document root would silently
 * win over the rule.
 */
const SUBDOMAIN_MOVES: { path: string; host: string; permanent: boolean }[] = [
  { path: 'kashif', host: 'kashif.symteratech.com', permanent: false },
  { path: 'zafar', host: 'zafar.symteratech.com', permanent: false },
];

/**
 * Sent on every response. Deliberately omits Content-Security-Policy: this app
 * renders inline styles throughout and runs an inline count-up script, so a
 * useful policy needs to be measured in report-only mode against a collector
 * first, and a report-only header with nowhere to report buys nothing.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  /**
   * Five minutes, with no `includeSubDomains` and no `preload`. A browser that
   * has seen a long HSTS header cannot reach the site at all if the certificate
   * later lapses, and this domain renews on a shared host. Raise it once the
   * redirect below is confirmed and renewal has been watched through one cycle.
   * Browsers ignore this header over plain HTTP, so sending it always is safe.
   */
  { key: "Strict-Transport-Security", value: "max-age=300" },
];

const nextConfig: NextConfig = {
  /** The version it advertises is of no use to anyone but an attacker. */
  poweredByHeader: false,

  images: {
    /**
     * Every image is a right-sized local file in `public/`, the largest being
     * about 70 KB, so on-demand resizing buys us nothing. Turning it off also
     * drops the `/_next/image` endpoint and its native `sharp` dependency,
     * which is the usual cause of broken images on shared cPanel hosting.
     */
    unoptimized: true,
  },

  /**
   * Every old WordPress URL ends in a slash. Next's built-in slash stripping
   * runs before custom redirects, which would send each of them through two
   * hops, so it is switched off here and restored by the final rule below.
   */
  skipTrailingSlashRedirect: true,

  /** Old WordPress URLs → new routes. The mapping lives in lib/legacy-redirects.ts. */
  async redirects() {
    const legacy = [...LEGACY_REDIRECTS, ...EXTERNAL_REDIRECTS].map((r) => ({
      source: `${r.source}{/}?`,
      destination: r.destination,
      permanent: true,
    }));
    return [
      /**
       * Subdomain moves come first deliberately: each destination is already
       * absolute HTTPS, so www and plain-HTTP visitors reach the subdomain in
       * one hop rather than bouncing through the canonical rules below.
       */
      ...SUBDOMAIN_MOVES.map(({ path, host, permanent }) => ({
        source: `/${path}/:rest*`,
        destination: `https://${host}/:rest*`,
        permanent,
      })),
      /**
       * One hostname, over HTTPS. cPanel serves `www` from the same document
       * root, so those requests reach this same Passenger app and Next can read
       * the Host header — which is why this does not have to live in .htaccess.
       * Both rules come first so ordinary traffic takes a single hop.
       */
      {
        source: '/:path*',
        has: [{ type: 'host', value: `www.${CANONICAL_HOST}` }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      /**
       * Apache terminates TLS and forwards the original scheme. If it does not
       * send the header at all this rule never matches, so it cannot loop — but
       * if it ever sent `http` on an HTTPS request it would, which is why this
       * one is checked with a curl immediately after the first restart.
       */
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      ...legacy,
      // Stands in for the built-in slash stripping disabled above.
      { source: '/:path+/', destination: '/:path+', permanent: true },
    ];
  },

  async headers() {
    return [
      { source: '/:path*', headers: SECURITY_HEADERS },
      /**
       * Files in `public/` are served with `Cache-Control: max-age=0`, so the
       * 73 KB logo revalidates on every page of every visit. These are not
       * content-hashed the way `_next/static` is, so this is a month rather
       * than a year, and not `immutable`: replacing a logo should not be
       * invisible to anyone who has already loaded it.
       */
      {
        source: '/:all*(svg|png|jpg|jpeg|webp|avif|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
