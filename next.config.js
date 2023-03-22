
/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withAntdLess = require('next-plugin-antd-less')
const path = require('path');

const nextConfig = {
  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }
    return config
  },
  cleanDistDir: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ]
  }
}
module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ['jpeg', 'png', 'gif', 'svg', 'ico']
  }],
  withAntdLess({modifyVars:{}}),
  withFonts
], nextConfig)


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // plugins: [
  //   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  // ],
  experimental: {
    forceSwcTransforms: true,
  }
};
module.exports = nextConfig
