const { GenerateSW } = require('workbox-webpack-plugin')
const path = require('path')
const fixUrl = url => url.replace(/\/\//g, '/').replace(':/', '://')

module.exports = function (options) {
    const workbox = this.options.workbox
    const workboxWebpackPlugin = workbox.webpackPlugin
    this.extendBuild((config, { isClient, isDev }) => {
        if (isClient && !isDev) {
            config.plugins.push(
                new GenerateSW(workboxWebpackPlugin)
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
