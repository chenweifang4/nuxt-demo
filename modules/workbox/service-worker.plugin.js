import pwaUtils from '@/util/pwa.utils.js'

if ('serviceWorker' in navigator) {
  const bool = typeof pwaUtils.enable === 'undefined' || pwaUtils.enable
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
