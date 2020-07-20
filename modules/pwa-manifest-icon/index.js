const PwaManifestIconWebpackPlugin = require('@nuxtjs/pwa/lib/icon/module.js')

module.exports = function () {
    const { pwa = {} } = this.options
    return PwaManifestIconWebpackPlugin.call(this, pwa)
}