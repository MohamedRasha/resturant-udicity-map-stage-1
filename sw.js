self.addEventListener('install', function (event) {
// Perform install steps
}); var CACHE_NAME = 'restaurant-cache';
var urlsToCache = [
  './resturant_stage1',
  './resturant_stage1/index.html',
  './resturant_stage1/restaurant.html',
  './resturant_stage1/css/styles.css',
  './resturant_stage1/js/dbhelper.js',
  './resturant_stage1/js/main.js',
  './resturant_stage1/js/restaurant_info.js',
  './resturant_stage1/data/restaurants.json',
  './resturant_stage1/img/1.jpg',
  './resturant_stage1/img/2.jpg',
  './resturant_stage1/img/3.jpg',
  './resturant_stage1/img/4.jpg',
  './resturant_stage1/img/5.jpg',
  './resturant_stage1/img/6.jpg',
  './resturant_stage1/img/7.jpg',
  './resturant_stage1/img/8.jpg',
  './resturant_stage1/img/9.jpg',
  './resturant_stage1/img/10.jpg',
];

self.addEventListener('install', function (event) {
// Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => console.log(err, event.request))
  );
});