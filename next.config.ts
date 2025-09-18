import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
  
  compiler: { 
    styledComponents: true 
  },
  
  productionBrowserSourceMaps: false,
  
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com'] 
  },
  
  // Only use basePath and assetPrefix for GitHub Pages deployment
  ...(isGitHubPages && {
    basePath: '/personal-website',
    assetPrefix: '/personal-website/',
  }),
  
  trailingSlash: true,
  
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
