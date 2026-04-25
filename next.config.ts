import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict React mode catches subtle bugs early
  reactStrictMode: true,

  // SEO redirects so old paths or common typos don't 404
  async redirects() {
    return [
      // login/signup live on the dashboard, not the marketing site
      { source: "/dashboard", destination: "https://app.waintel.io", permanent: true },
      { source: "/app", destination: "https://app.waintel.io", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
