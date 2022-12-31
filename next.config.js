/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https://",
        hostname: "cdn.weatherapi.com",
        port: "3000",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
