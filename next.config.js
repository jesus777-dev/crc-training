/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/crc-training',
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
