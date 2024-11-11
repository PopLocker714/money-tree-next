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
    ],
  },
};

export default nextConfig;
