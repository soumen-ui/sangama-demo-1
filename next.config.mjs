/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8005',
        pathname: '/uploads/**',
      },
    ],
    domains: [
      'localhost',
      'byrappa.homeybites.shop'  
      // Add other domains if necessary
    ],
  },
};

export default nextConfig;
