import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  compiler: {
    // Enable styled-components support
    styledComponents: true,
  },
  // Enable source maps in development
  productionBrowserSourceMaps: false,
  // Configure images
  images: {
    domains: ['images.unsplash.com'], // Add any other domains you need
  },
  // Configure webpack
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
