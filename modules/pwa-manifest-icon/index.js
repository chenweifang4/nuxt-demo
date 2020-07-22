const path = require('path')
const nuxtjsPwaVersion = require('@nuxtjs/pwa/package.json').version
const isOldNuxtjsPwaVersion = nuxtjsPwaVersion === '2.0.8'
const PwaManifestIconWebpackPlugin = isOldNuxtjsPwaVersion ? require('@nuxtjs/icon') : require('@nuxtjs/pwa/lib/icon/module.js')

module.exports = function () {
  const { pwa = {} } = this.options
  const { icon } = pwa
  if (isOldNuxtjsPwaVersion) {
    icon.iconSrc = path.resolve(this.options.srcDir, 'static', icon.iconFileName)
    PwaManifestIconWebpackPlugin.call(this, icon)
  } else {
    PwaManifestIconWebpackPlugin.call(this, pwa)
  }
}
