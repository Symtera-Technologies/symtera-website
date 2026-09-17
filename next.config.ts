import type { NextConfig } from "next";
import { LEGACY_REDIRECTS, EXTERNAL_REDIRECTS } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
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
      ...legacy,
      // Stands in for the built-in slash stripping disabled above.
      { source: '/:path+/', destination: '/:path+', permanent: true },
    ];
  },
};

export default nextConfig;
