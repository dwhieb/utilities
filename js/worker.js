/* global caches, self */

const cacheName = 'dlx-app';

const files = [
  '/favicon.ico',
  '/index.html',
];

// add the files in the "files" array to the cache
const addFiles = cache => cache.addAll(files);

// cache a network response for a given request
const cacheNetworkResponse = (req, res) => {
  const clonedResponse = res.clone();
  caches.open(cacheName).then(cache => cache.put(req, clonedResponse));
  return res;
};

// 1. checks the cache for the request while simultaneously making a request to the network
// 2. if match is found in cache, the cached response is returned
// 3. if network request succeeds, cache is updated
// 4. if no match is found in the cache, the network response is returned
// 5. if the network response fails, fallback to a generic error response
const cacheOrNetworkResponse = req => {

  const networkResponse = fetch(req)
  .then(res => cacheNetworkResponse(req, res))
  .catch(() => new Response('', {
    status: 503,
    statusText: 'Service Unavailable',
  }));

  return caches.match(req).then(cacheResponse => cacheResponse || networkResponse);

};

// remove any files from the cache that aren't listed in the "files" array
const removeFiles = cache => {
  return cache.keys().then(keys => {
    return Promise.all(keys.map(request => {
      if (!files.some(file => request.url.endsWith(file))) return cache.delete(request);
      return Promise.resolve();
    }));
  });
};

// wait until unnecessary files are removed before activating
self.addEventListener('activate', ev => {
  ev.waitUntil(caches.open(cacheName).then(removeFiles));
});

// wait to install the worker until all files have been cached
self.addEventListener('install', ev => {
  ev.waitUntil(caches.open(cacheName).then(addFiles));
});

// intercept server requests: return cached files first, but update cached files from network in the background
self.addEventListener('fetch', ev => {

  const req = ev.request;

  if (req.method !== 'GET') {
    return ev.respondWith(fetch(req));
  }

  return ev.respondWith(cacheOrNetworkResponse(req));

});
