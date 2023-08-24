const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  // openAnalyzer: false,
});

const plugins = [withBundleAnalyzer];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  output: 'export', // static
  distDir: 'docs',
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
    // nextScriptWorkers: true,
  },
};

// eslint-disable-next-line no-unused-vars
module.exports = (_phase, { defaultConfig }) =>
  plugins.reduce((acc, next) => next(acc), nextConfig);
