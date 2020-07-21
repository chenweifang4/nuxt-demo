const path = require('path')
const fs = require('fs')
const PwaManifestWebpackPlugin = require('@nuxtjs/pwa/lib/manifest/module.js')

module.exports = function () {
  const { pwa = {} } = this.options
  const { manifest } = pwa
  const { manifestName = 'manifest.json' } = manifest
  PwaManifestWebpackPlugin.call(this, pwa)

  this.options.build.plugins.push({
    apply (compiler) {
      compiler.hooks.done.tap('move-manifest-position', (compilation) => {
        const resolvePath = p => path.resolve(process.cwd(), p)
        const clientPath = resolvePath('./.nuxt/dist/client')
        const fileName = fs.readdirSync(clientPath).filter(file => file.startsWith('manifest'))[0]

        if (fileName) {
          const manifestDest = `${resolvePath('./.nuxt/dist/client')}/${manifestName}`
          const manifestFile = fs.readFileSync(`${clientPath}/${fileName}`)
          fs.writeFileSync(manifestDest, manifestFile)
        }
      })
    }
  })
}
