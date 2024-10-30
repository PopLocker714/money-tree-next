import type { NextConfig } from "next";
import { seed } from "./app/lib/db/seed";

seed()

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
