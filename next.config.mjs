/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Increase upload limit
    },
  },
  images: {
    remotePatterns: [
      // Pinata App Dashboard URLs (rarely used for embeds)
      {
        protocol: 'https',
        hostname: 'app.pinata.cloud',
      },
      // Pinata Gateway (recommended)
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
      },
      // Custom Pinata subdomains
      {
        protocol: 'https',
        hostname: '*.mypinata.cloud',
      },
      { protocol: 'https', hostname: 'gold-naval-hare-377.mypinata.cloud' },
    ],
  },
};

export default nextConfig;
