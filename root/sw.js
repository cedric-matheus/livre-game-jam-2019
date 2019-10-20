var cacheName = 'phaser-v3';
var filesToCache = [
  '/',
  '/index.html',
  '/public/favicon.ico',
  '/public/cursor.cur',
  '/public',
];

self.addEventListener('install', function(event) {
  console.info('sw install');
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function(cache) {
        console.info('sw caching files');
        return cache.addAll(filesToCache);
      })
      .catch(function(err) {
        console.error(err);
      })
  );
});

self.addEventListener('fetch', (event) => {
  console.info('sw fetch');
  console.info(event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
      .catch(function(error) {
        console.error(error);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.info('sw activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            console.info('sw removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});
