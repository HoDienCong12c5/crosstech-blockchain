const path = require( 'path' );

/** @type {import('next').NextConfig} */



const withFonts = require( 'next-fonts' )
const withPlugins = require( 'next-compose-plugins' )
const optimizedImages = require( 'next-optimized-images' )
const withAntdLess = require( 'next-plugin-antd-less' )

const nextConfig = {
  webpack ( config ) {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }

    /** Allows you to create global constants which can be configured
     * at compile time, which in our case is our environment variables
     */
    // config.module.rules.push({
    //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
    //   loader: 'file-loader',
    //   options: {
    //     name: '[path][name].[ext]'
    //   }
    // })

    // config.externals.push({
    //   canvas: 'canvas'
    // })

    // Returns environment variables as an object
    // const env = Object.keys(process.env).reduce((acc, curr) => {
    //   acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
    //   return acc
    // }, {})

    // config.plugins.push(new webpack.DefinePlugin(env))

    return config
  },
  cleanDistDir: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ]
  }
}
module.exports = withPlugins( [
  [optimizedImages, {
    handleImages: ['jpeg', 'png', 'gif', 'svg', 'ico']
  }],
  withFonts,
  withAntdLess( {
    // Custom antd variables here
    // List supported variables here
    // => https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    // modifyVars: {
    //   '@layout-body-background': '#fff',
    //   '@primary-color': '#21325B',
    //   '@btn-primary-bg': '#21325B',
    //   '@layout-header-background': '#f3f3f3',
    //   '@layout-footer-background': 'rgba(108, 117, 126, 0.1)',
    //   '@drawer-bg': '#F0F1F2',
    //   '@link-color': '#00A3FF',
    //   '@font-size-base': '16px',
    //   '@btn-height-base': '40px',
    //   '@btn-border-radius-base': '5px'
    // }
  } )
], nextConfig )

module.exports = {
  sassOptions: {
    includePaths: [path.join( __dirname, 'styles' )],
  },
};

module.exports = nextConfig
