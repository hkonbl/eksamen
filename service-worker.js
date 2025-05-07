const CACHE_NAME = 'eksamen-cache-v1';
const urlsToCache = [
  '/eksamen/',
  '/eksamen/index.html',
  '/eksamen/flashcards.html',
  '/eksamen/revision.html',
  '/eksamen/manifest.json',
  '/eksamen/icon-192.png',
  '/eksamen/icon-512.png'
];

// Legg til flere filer om f.eks. CSS eller JS-eksternt

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
