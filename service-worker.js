const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/estilos.css',
    '/js/efectos.js',
    '/js/jquery-1.12.3.min.js',
    '/js/ofertas.js',
    '/js/parallax.js',
    '/img/icon-192x192.jpg',
    '/img/icon-512x512.jpg'
];

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
