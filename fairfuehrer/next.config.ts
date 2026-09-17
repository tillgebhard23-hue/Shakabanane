import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site ships as plain files, no server required. The CMS
  // binding can be added later without changing this decision.
  output: "export",
  images: {
    // The export target has no image optimisation server.
    unoptimized: true,
  },
};

export default nextConfig;
