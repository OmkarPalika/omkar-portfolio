import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  optimizeFonts: true,
  // Enable CSS optimization
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
};


export default nextConfig;
