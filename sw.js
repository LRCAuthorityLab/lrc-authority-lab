const CACHE_NAME = 'stockdemand-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o motor
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta as requisições para rodar liso
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
