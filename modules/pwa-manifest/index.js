const PwaManifestWebpackPlugin = require('@nuxtjs/pwa/lib/manifest/module.js')

module.exports = function () {
    const { pwa = {} } = this.options
    return PwaManifestWebpackPlugin.call(this, pwa)
}