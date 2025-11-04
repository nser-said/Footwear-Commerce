self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((fetchResponse) => {
          return caches.open("dynamic-cache").then((cache) => {
            cache.put(event.request.url, fetchResponse.clone());
            return fetchResponse;
          });
        })
      );
    })
  );
});
