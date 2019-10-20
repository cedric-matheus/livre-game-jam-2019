var cacheName = 'phaser-v3';
var filesToCache = [
  '/',
  '/index.html',
  '/public/favicon.ico',
  '/public/cursor.cur',
  '/public',
];

self.addEventListener('install', function(event) {
  console.log('sw install');
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function(cache) {
        console.log('sw caching files');
        return cache.addAll(filesToCache);
      })
      .catch(function(err) {
        console.log(err);
      })
  );
});
