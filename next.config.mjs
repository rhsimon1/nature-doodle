/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // or '25mb', pick what you need
    },
  },
};

export default nextConfig;
