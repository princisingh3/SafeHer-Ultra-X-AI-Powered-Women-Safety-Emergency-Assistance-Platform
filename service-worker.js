// =====================================
// SafeHer Ultra X - Service Worker
// =====================================

const CACHE_NAME = "safeher-ultra-x-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",

  "./css/style.css",

  "./js/app.js",
  "./js/sos.js",
  "./js/location.js",
  "./js/contacts.js",
  "./js/emergency.js",
  "./js/alarm.js",
  "./js/fake-call.js",
  "./js/medical.js",
  "./js/voice-sos.js",
  "./js/checkin.js",
  "./js/trip-monitor.js",
  "./js/settings.js",

  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );

  self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {

        if (response) {
          return response;
        }

        return fetch(event.request);

      })
  );

});
