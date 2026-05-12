import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.gipecrea.fr",
      },
      {
        protocol: "https",
        hostname: "api.gipecrea.fr",
      },
    ],
  },
};

export default nextConfig;
