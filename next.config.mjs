/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,

  images: {
    domains: [
      "lightblue-rhinoceros-219580.hostingersite.com",
      "ik.imagekit.io",
    ],
  },
};

export default nextConfig;
