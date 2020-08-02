const path = require('path')
const fs = require('fs')
const nuxtjsPwaVersion = require('@nuxtjs/pwa/package.json').version
const isOldNuxtjsPwaVersion = nuxtjsPwaVersion === '2.0.8'
const PwaManifestWebpackPlugin = isOldNuxtjsPwaVersion ? require('@nuxtjs/manifest') : require('@nuxtjs/pwa/lib/manifest/module.js')

const resolvePath = p => path.resolve(process.cwd(), p)

module.exports = function () {
  const { pwa = {} } = this.options
  const { manifest } = pwa
  const { manifestName = 'manifest.json' } = manifest
  PwaManifestWebpackPlugin.call(this, isOldNuxtjsPwaVersion ? manifest : pwa)

  this.extendBuild((config, { isClient, isDev }) => {
    if (isClient) {
      config.plugins.push({
        apply (compiler) {
          compiler.hooks.done.tap('gen-manifest', (compilation = {}) => {
            const { assets } = compilation.compilation || {}
            const manifestAssetKey = (Object.keys(assets).filter((key) => {
              return /^manifest.*.json/.test(key)
            }) || [])[0]
            if (manifestAssetKey) {
              const manifestAsset = assets[manifestAssetKey] || { source: () => '' }
              const manifestFile = manifestAsset.source()
              const manifestDest = resolvePath(isDev ? `static/${manifestName}` : `.nuxt/dist/client/${manifestName}`)
              fs.writeFileSync(manifestDest, manifestFile, 'utf8')
            }
          })
        }
      })
    }
  })
}
