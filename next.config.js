/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        hostname: "theoheartist.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
