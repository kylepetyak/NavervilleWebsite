const CACHE_NAME = 'camelback-medical-v2';
const CRITICAL_CACHE = 'camelback-critical-v2';

// Critical resources for FCP optimization
const criticalResources = [
  '/',
  '/styles/globals.css',
  '/manifest.json'
];

// Non-critical resources
const urlsToCache = [
  '/static/js/bundle.js',
  '/static/css/main.css'
];

// Install service worker with critical resource prioritization
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Activate immediately
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources first for FCP
      caches.open(CRITICAL_CACHE)
        .then((cache) => {
          console.log('Caching critical resources');
          return cache.addAll(criticalResources);
        }),
      // Then cache non-critical resources
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Caching non-critical resources');
          return cache.addAll(urlsToCache);
        })
    ])
  );
});

// Optimized fetch event with stale-while-revalidate for FCP
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle critical resources with cache-first strategy
  if (criticalResources.some(resource => url.pathname === resource || url.pathname.includes(resource))) {
    event.respondWith(
      caches.match(event.request, { cacheName: CRITICAL_CACHE })
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
    return;
  }
  
  // Handle other requests with stale-while-revalidate
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version immediately if available
        if (response) {
          // Update cache in background
          fetch(event.request).then((freshResponse) => {
            if (freshResponse && freshResponse.status === 200 && freshResponse.type === 'basic') {
              const responseToCache = freshResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
          }).catch(() => {}); // Ignore network errors
          
          return response;
        }
        
        // Fetch from network if not in cache
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'booking-form') {
    event.waitUntil(syncBookingForm());
  }
});

async function syncBookingForm() {
  // Handle offline form submissions
  const db = await openDB();
  const forms = await db.getAll('pending-forms');
  
  for (const form of forms) {
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.data),
      });
      
      if (response.ok) {
        await db.delete('pending-forms', form.id);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New appointment reminder',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Camelback Medical', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/booking')
    );
  }
});

// IndexedDB helper for offline storage
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('CamelbackDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('pending-forms')) {
        const store = db.createObjectStore('pending-forms', { keyPath: 'id', autoIncrement: true });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}