import type { NextConfig } from "next";

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
};

export default nextConfig;
