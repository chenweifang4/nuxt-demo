import pwaUtils from '@/util/pwa.utils.js'

if ('serviceWorker' in navigator) {
  // 如果需要清除缓存，那么就
  if (pwaUtils.shouldClearCacheStorage) {
    pwaUtils.clearCache()
  }

  const bool = (
    typeof pwaUtils.enable === 'undefined' ||
    pwaUtils.enable
  ) && !pwaUtils.shouldNotRegisterServiceWorker

  if (bool) {
    pwaUtils.register('<%= options.swURL %>', '<%= options.swScope %>')
  } else {
    pwaUtils.unregister()
  }

  setTimeout(() => {
    // console.log('3000 后自定取消注册 ', 3000)
    // pwaUtils.unregister()
  }, 3000)
} else {
  pwaUtils.report(2)
  console.warn('Service workers are not supported.')
}
