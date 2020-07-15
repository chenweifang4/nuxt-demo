if ('serviceWorker' in navigator) {
  console.log('Hello sw.plugin.js');
  navigator.serviceWorker.register('<%= options.swURL %>', {
      scope: '<%= options.swScope %>'
  }).then(function (registration) {
      window.$sw = registration;
  }).catch(function (error) {
      console.error('Service worker registration failed:', error);
  })
} else {
  console.error('Service workers are not supported.');
}
