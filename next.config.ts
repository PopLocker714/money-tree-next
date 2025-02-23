import type { NextConfig } from "next";
// import { seed } from "./src/lib/db/seed";

// seed()

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/static/:path*',
  //       // destination: '/static/:path*',
  //       destination: "http://localhost:4000/static/uploads/:path*", // Использует локальный сервер
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
