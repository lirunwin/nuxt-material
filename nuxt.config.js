const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')
const resolve = require('path').resolve

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: pkg.description
    }],
    bodyAttrs: {
      // class: 'md-scrollbar'
    },
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_735946_1dlcy717ngq.css'
      }
    ]
  },
  router: {
    linkExactActiveClass: 'active'
  },
  render: {
    resourceHints: false
  },
  generate: {
    minify:false
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [
    'vue-material/dist/vue-material.min.css',
    '@/assets/sass/main.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuematerial',
    '@/plugins/global'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/_variables.scss',
    ]],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // publicPath: '/scout-b/assets/',
    extractCSS: {
      allChunks: true,
    },
    filenames: {
      css: 'common.css',
      manifest: 'manifest.js',
      vendor: 'common.js',
      app: 'app.js',
      chunk: '[name].js'
    },
    vendor: ['vue-material'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-material/]
          })
        ]
      }
    },
    // loaders:[
    //   {
    //     test: /\.svg$/,
    //     include: /static\/svg/,
    //     loader: 'svg-sprite-loader?' + JSON.stringify({
    //       name: '[name]',
    //       prefixize: false
    //     })
    //   },
    //   {
    //     test: /\.(png|jpg|gif|svg)$/,
    //     loader: 'url-loader',
    //     exclude: /static\/svg/,
    //     options: {
    //       limit: 1000, // 1K limit
    //       name: 'img/[name].[hash:8].[ext]'
    //     }
    //   }
    // ]
  }
}
