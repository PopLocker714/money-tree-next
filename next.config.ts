import type { NextConfig } from "next";
// import { seed } from "./src/lib/db/seed";

// seed()

const nextConfig: NextConfig = {
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
