import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", // Enable analyzer only when ANALYZE=true
});

const nextConfig: NextConfig = bundleAnalyzer({
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)", // Apply headers to image files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache static assets for 1 year
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com;", // Security policy
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevent clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevent MIME type sniffing
          },
        ],
      },
    ];
  },
  reactStrictMode: process.env.NODE_ENV !== "production", // Enable strict mode in development
});

export default nextConfig;