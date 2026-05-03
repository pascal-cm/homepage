const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.HOMEPAGE_BASE_PATH || "",
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
    unoptimized: true,
  },
  i18n,
};

module.exports = nextConfig;
