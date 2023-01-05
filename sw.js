// HTML files: try the network first, then the cache. <- force with webfirst = 1 
// Other files: try the cache first, then the network.  <- force with webfirst = 0 
// Both: cache a fresh version if possible.
// (beware: the cache will grow and grow; there's no cleanup)

const webfirst = 1
const cacheName = 'files';

addEventListener('fetch',  fetchEvent => {
  const request = fetchEvent.request;
  if (request.method !== 'GET') {
    return;
  }
  fetchEvent.respondWith(async function() {
    const responseFromFetch = fetch(request);
    fetchEvent.waitUntil(async function() {
      const responseCopy = (await responseFromFetch).clone();
      const myCache = await caches.open(cacheName);
      await myCache.put(request, responseCopy);
    }());
    if (webfirst ?? request.headers.get('Accept').includes('text/html')) {
      try {
        return await responseFromFetch;
      }
      catch(error) {
        return caches.match(request);
      }
    } else {
      const responseFromCache = await caches.match(request);
      return responseFromCache || responseFromFetch;
    }
  }());
});
