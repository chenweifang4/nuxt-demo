const pwaUtils = {
  enable: undefined,

  isQueryExist (q) {
    return q ? !!~window?.location?.search?.indexOf(q) : false
  },

  /**
   * 通过 url 带上 clearCacheStorage 参数来判断是否清除缓存
   */
  shouldClearCacheStorage () {
    return this.isQueryExist('clearCacheStorage')
  },

  /**
   * 通过 url 带上 unRegisterServiceWorker 参数，可以直接取消 sw 的注册
   * 方便调试
   */
  shouldNotRegisterServiceWorker () {
    return this.isQueryExist('unRegisterServiceWorker')
  },

  clearCache () {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName)
      })
    })
  },

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
