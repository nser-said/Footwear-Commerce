self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-cache-v3').then((cache) => {
      return cache.addAll([
        '/',
        '/manifest.json',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png'
      ]).catch((err) => {
        console.warn('⚠️ Cache addAll failed:', err);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // ✅ تجاهل روابط Chrome Extensions
  if (url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request).catch(() => caches.match('/'));
    })
  );
});
