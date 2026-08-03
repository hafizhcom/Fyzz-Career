self.addEventListener("install", (e) => {
  console.log("SW terinstall");
});

const CACHE_NAME = "fyzz-v6"; // penting! ganti tiap deploy biar cache ke-reset
const urlsToCache = [
  "https://fyzz-career.vercel.app/",
  "https://fyzz-career.vercel.app/toko.html",
  "https://fyzz-career.vercel.app/manifest.json",
  "https://fyzz-career.vercel.app/favicon-192.png",
  "https://fyzz-career.vercel.app/favicon-512.png",
  "/no-connect.html",
  "/no-internet.gif",
];


// =======================
// INSTALL
// =======================
self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(urlsToCache);
    })
  );

  self.skipWaiting();
});

// =======================
// ACTIVATE
// =======================
self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// =======================
// FETCH
// =======================
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Jika request halaman (membuka website)
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Simpan halaman terbaru
          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(async () => {
          // Tidak ada internet
          return await caches.match("/no-connect.html");
        })
    );

    return;
  }

  // Untuk CSS, JS, gambar, font, dll.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const clone = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          // Jika gambar gagal dimuat saat offline
          if (event.request.destination === "image") {
            return caches.match("/no-internet.gif");
          }
        });
    })
  );
});
