import type { NextConfig } from 'next';

const repo = 'personal-website';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',

  // no experimental.serverActions here

  compiler: { styledComponents: true },
  productionBrowserSourceMaps: false,
  images: { unoptimized: true, domains: ['images.unsplash.com'] },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
  webpack: (config) => config,
};

export default nextConfig;
