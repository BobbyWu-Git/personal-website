import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  
  compiler: { 
    styledComponents: true 
  },
  
  productionBrowserSourceMaps: false,
  
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com'] 
  },
  
  basePath: '/personal-website',
  assetPrefix: '/personal-website/',
  trailingSlash: true,
  
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
