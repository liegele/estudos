let deferredPrompt;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err));
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired!');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

/* if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service worker registered!');
  });
} */
