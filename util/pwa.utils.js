const pwaUtils = {
  enable: undefined,

  report (status) {
    // status 注册状态 0失败 1成功 2不支持
    console.log('[util/pwa.utils.js] report status ', status)
  },

  register (url = '/sw.js', scope = '/') {
    navigator.serviceWorker
      .register(url, { scope })
      .then((registration) => {
        this.report(1)
        window.$sw = registration
      })
      .catch((error) => {
        this.report(0)
        console.error('[util/pwa.utils.js] Service worker registration failed:', error)
      })
  },

  unregister () {
    window.navigator.serviceWorker.getRegistrations().then((registrations) => {
      console.log('[util/pwa.utils.js] registrations ', registrations)
      for (const registration of registrations) {
        const res = registration.unregister()
        console.log('res ', res)
      }
    })
  }
}

export default pwaUtils
