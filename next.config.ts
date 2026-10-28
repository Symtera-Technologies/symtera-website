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
  // Verified answering 200 on 24 Oct 2026, so this one is safe to make permanent.
  { path: 'kashif', host: 'kashif.symteratech.com', permanent: true },
  // Still NXDOMAIN. Stays temporary until it resolves.
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
   * Thirty days, with no `includeSubDomains` and no `preload`.
   *
   * Raised from five minutes on 28 October 2026, when both conditions the old
   * comment set were finally met: plain HTTP now 301s to HTTPS on every route
   * (cPanel's Force HTTPS Redirect, which runs in the vhost ahead of Passenger
   * -- see the redirect note further down), and the Let's Encrypt certificate
   * renewed cleanly on 22 October, valid to 20 January 2027.
   *
   * Thirty days rather than a year because that is one observed renewal on a
   * shared host, and a browser that has seen a long HSTS header cannot reach
   * the site at all if the certificate later lapses. Thirty days already
   * protects every returning visitor. Go to `max-age=31536000` after the
   * renewal due around 21 December 2026 lands without help.
   *
   * `includeSubDomains` stays off deliberately: other hostnames under this
   * domain are not all ours to guarantee. Browsers ignore this header over
   * plain HTTP, so sending it always is safe.
   */
  { key: "Strict-Transport-Security", value: "max-age=2592000" },
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
       * Defence in depth only — plain HTTP is handled in Apache now, not here.
       *
       * Measured against production on 28 Oct 2026, in this order:
       *
       * 1. An .htaccess RewriteRule redirected plain HTTP, but only for paths
       *    Apache serves itself. Passenger takes the app's routes before
       *    mod_rewrite runs, so static files 301'd and every HTML page stayed
       *    reachable over plain HTTP.
       * 2. This rule was proven to work in isolation — a request carrying
       *    `x-forwarded-proto: http` is answered with a 308 to HTTPS — but
       *    Passenger never sets that header, so it never fired on real traffic.
       *    The scheme was known to Apache and invisible to Node.
       * 3. cPanel → Domains → Force HTTPS Redirect fixed it. That writes into
       *    the vhost, which runs ahead of Passenger, so it covers app routes
       *    too. Every route now 301s to HTTPS in one hop; www takes two.
       *
       * So this rule is redundant today. It is kept because it cannot loop (an
       * absent header matches nothing) and it is the backstop if that cPanel
       * toggle is ever lost — adding these two lines to .htaccess would also
       * re-arm it, since mod_headers runs before Passenger takes the request:
       *
       *   RequestHeader set X-Forwarded-Proto "http"
       *   RequestHeader set X-Forwarded-Proto "https" env=HTTPS
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
