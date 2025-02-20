import type { NextConfig } from "next";
// import { seed } from "./src/lib/db/seed";

// seed()

const nextConfig: NextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: "script-src 'self' mc.yandex.ru yastatic.net;",
  //         },
  //       ],
  //     },
  //   ];
  // },
  reactStrictMode: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "ulqumkttxuiznqmcntaj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
