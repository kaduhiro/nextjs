/** @type {import('next').NextConfig} */
const path = require('path');

const urlPrefix = process.env.URL_PREFIX ?? '';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ['@']: path.join(__dirname, 'src'),
    };

    return config;
  },
};

module.exports = nextConfig;
