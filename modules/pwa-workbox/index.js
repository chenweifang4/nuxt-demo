const path = require('path')
const fs = require('fs')
const { GenerateSW } = require('workbox-webpack-plugin')
const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://')

module.exports = function (options) {
  const workbox = this.options.pwa.workbox
  const workboxWebpackPlugin = workbox.webpackPlugin
  this.extendBuild((config, { isClient }) => {
    if (isClient) {
      config.plugins.push(
        new GenerateSW(workboxWebpackPlugin),
        {
          apply (compiler) {
            compiler.hooks.emit.tap('gen-sw', (compilation) => {
              const { assets } = compilation
              const swKey = (Object.keys(assets).filter((key) => {
                return key.includes('sw.js')
              }) || [])[0]
              const swDest = workboxWebpackPlugin.swDest
              const swData = (assets[swKey] || {})._value || ''

              fs.writeFileSync(swDest, swData, 'utf8')
            })
          }
        }
      )
    }
  })
  const { swURL = 'sw.js', swScope = '/' } = workbox
  this.addPlugin({
    src: path.resolve(__dirname, 'service-worker.plugin.js'),
    ssr: false,
    fileName: 'sw.plugin.js',
    options: {
      swURL: fixUrl(swURL),
      swScope: fixUrl(swScope)
    }
  })
}
