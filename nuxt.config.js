const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

export default {
  server: {
    host: '127.0.0.1',
    port: '3001',
  },
  dev: isDev,
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    './assets/scss/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/scss/colors.scss'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '~/modules/workbox',
    '~/modules/pwa-manifest-icon',
    '~/modules/pwa-manifest',
    // '@nuxtjs/pwa/lib/manifest/module.js',
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** Nuxt.js lets you customize the webpack configuration for building your web application as you want.
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /**
     * reference: https://redonion.se/en/css-modules-in-nuxt-js/
     */
    cssModules: {
      modules: {
        localIdentName: '[local]--[Frida]_[hash:base64:4]'
      }
    },
    filenames: {
      app: ({ isDev, isModern }) => {
          return isDev ? `${isModern ? 'modern-' : ''}[name].js` : '[chunkhash].js?max_age=31536000'
      },
      chunk: ({ isDev, isModern }) => {
          return isDev ? `${isModern ? 'modern-' : ''}[name].js` : '[chunkhash].js?max_age=31536000'
      },
      css: ({ isDev }) => {
          return isDev ? '[name].css' : '[contenthash].css?max_age=31536000'
      },
      img: ({ isDev }) => {
          return isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]?max_age=31536000'
      },
      font: ({ isDev }) => {
          return isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]?max_age=31536000'
      },
      video: ({ isDev }) => {
          return isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]?max_age=31536000'
      }
    },
    publicPath: '/a/b/c'
  },
  /*
  ** Overwrite's generated manifest values
  */
  // manifest: {
  //   name: 'NUXT-DEMO',
  //   short_name: 'ND',
  //   display: 'standalone'
  // },
  // workbox: {
  //   swDest: path.resolve('static', 'sw.js'),
  //   skipWaiting: true,
  //   clientsClaim: true,
  //   // include: [/\.js\?max_age\.*/],

  //   runtimeCaching: [
  //     {
  //       urlPattern: /https:\/\/img\.yzcdn\.cn\/\.*/,
  //       handler: 'StaleWhileRevalidate',
  //       options: {
  //         cacheableResponse: {
  //           statuses: [0, 200]
  //         }
  //       }
  //     },
  //     {
  //       urlPattern: /https:\/\/egame\.gtimg\.cn\/\.*/,
  //       handler: 'StaleWhileRevalidate',
  //       options: {
  //         cacheableResponse: {
  //           statuses: [0, 200]
  //         }
  //       }
  //     }
  //   ]
  // }
  pwa: {
    workbox: {
      webpackPlugin: {
        swDest: path.resolve('static', 'sw.js'),
        // importWorkboxFrom: 'local',
        inlineWorkboxRuntime: true,
        skipWaiting: true,
        clientsClaim: true,
        include: [/\.js\?max_age\.*/],
        runtimeCaching: [
          {
            urlPattern: /https:\/\/img\.yzcdn\.cn\/\.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /https:\/\/egame\.gtimg\.cn\/\.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      swURL: 'sw.js',
      swScope: '/', 
    },
    manifest: {
      name: 'NUXT-DEMO',
      short_name: 'ND'
    },
    icon: {
      // publicPath: '/d/e/f',
      // iconSrc: '//img.yzcdn.cn/vant/leaf.jpg',
      // iconSrc: '/static/',
      iconFileName: '03_egame_symbol.png'
      // iconFileName: 'leaf.jpg'
    }
  }
}
