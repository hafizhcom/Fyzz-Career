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
];

// 1. Install - simpen file penting ke cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    }),
  );
  self.skipWaiting();
});

// 2. Activate - hapus cache lama
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// 3. Fetch
self.addEventListener("fetch", (event) => {
  // Hanya tangani request GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Jika ada di cache, gunakan cache
      if (cachedResponse) {
        return cachedResponse;
      }

      // Jika tidak ada, ambil dari internet
      return fetch(event.request)
        .then((networkResponse) => {
          // Simpan hasil fetch ke cache
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          // Jika offline dan request halaman
          if (event.request.mode === "navigate") {
            return caches.match("/no-connect.html");
          }
        });
    })
  );
});
