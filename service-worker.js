const CACHE_NAME = 'pbh-cache-v1786612200000';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './js/app.bundle.js',
  './js/app.jsx',
  './js/babel.min.js',
  './js/chart.min.js',
  './js/html2pdf.bundle.min.js',
  './js/react-dom.production.min.js',
  './js/react.production.min.js',
  './js/tailwind.min.js',
  './service-worker.js'
];

const CRITICAL_ASSETS = [
  './index.html',
  './js/app.bundle.js',
  './js/react.production.min.js',
  './js/react-dom.production.min.js',
  './js/tailwind.min.js',
  './js/chart.min.js',
  './js/html2pdf.bundle.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // 1) Strictly cache critical assets. If any fail, abort install so developer notices.
    let criticalResult = { ok: true, failed: [] };
    try {
      await cache.addAll(CRITICAL_ASSETS.map(a => new Request(a, { cache: 'reload' })));
    } catch (err) {
      criticalResult.ok = false;
      // Determine which critical assets are missing by trying individually
      for (const asset of CRITICAL_ASSETS) {
        try {
          const req = new Request(asset, { cache: 'reload' });
          const res = await fetch(req);
          if (!res || res.status >= 400) {
            criticalResult.failed.push({ asset, status: res ? res.status : 'no-response' });
          } else {
            await cache.put(asset, res.clone());
          }
        } catch (e) {
          criticalResult.failed.push({ asset, error: e && e.message ? e.message : String(e) });
        }
      }
      // If any critical assets still failed, throw to make install fail
      if (criticalResult.failed.length) {
        console.error('Service Worker install failed: critical assets missing', criticalResult.failed);
        throw new Error('Critical assets failed to cache during install');
      }
    }

    // 2) Cache optional assets (ASSETS_TO_CACHE excluding critical) with tolerant strategy
    const optionalAssets = ASSETS_TO_CACHE.filter(a => !CRITICAL_ASSETS.includes(a));
    const settleResults = await Promise.allSettled(
      optionalAssets.map(async asset => {
        try {
          const req = new Request(asset, { cache: 'reload' });
          const res = await fetch(req);
          if (!res || res.status >= 400) {
            return { asset, ok: false, status: res ? res.status : 'no-response' };
          }
          await cache.put(asset, res.clone());
          return { asset, ok: true };
        } catch (err) {
          return { asset, ok: false, error: err && err.message ? err.message : String(err) };
        }
      })
    );

    const optionalFailed = settleResults
      .filter(r => r.status === 'fulfilled' ? r.value && r.value.ok === false : true)
      .map(r => (r.status === 'fulfilled' ? r.value : { asset: (r.reason && r.reason.asset) || null, error: r.reason }))
      .filter(x => x && x.asset);

    // 3) Create install report and store it in the cache as /install-report.json for debugging
    const report = {
      generatedAt: new Date().toISOString(),
      cacheName: CACHE_NAME,
      critical: criticalResult,
      optionalFailed,
      optionalCount: optionalAssets.length
    };
    try {
      await cache.put('./install-report.json', new Response(JSON.stringify(report, null, 2), { headers: { 'Content-Type': 'application/json' } }));
    } catch (err) {
      console.warn('Failed to write install report to cache:', err && err.message ? err.message : err);
    }

    if (optionalFailed.length) console.warn('Some optional assets failed to cache during install:', optionalFailed);
  })());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Try cache first, then network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Optionally cache new GET requests
        if (event.request.method === 'GET' && response && response.status === 200 && response.type !== 'opaque') {
          const respClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, respClone));
        }
        return response;
      }).catch(() => {
        // Fallback: return cached index.html for navigation requests
        if (event.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
