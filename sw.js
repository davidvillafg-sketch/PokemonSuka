/*
 * Pokemon Suka - Service Worker
 *
 * Strategia:
 * - cache-first per le risorse già scaricate, così l'app continua a funzionare offline;
 * - aggiornamento in background delle risorse locali;
 * - una nuova versione NON prende il controllo della pagina mentre è aperta;
 * - la nuova versione diventa attiva alla successiva apertura/ricarica dell'app.
 *
 * Non è necessario cambiare manualmente CACHE_NAME quando modifichi index.html:
 * il browser scarica una nuova copia di sw.js quando GitHub Pages la aggiorna.
 */

const CACHE_NAME = 'pokemon-suka-shell-v13';

const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './pokemon-images.js?v=11',
  './game.js?v=game-v13',
  './pwa.js',
  './manifest.json',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './pokemon-images/pie.png',
  './pokemon-images/isco.png',
  './pokemon-images/feb.png',
  './pokemon-images/giana.png',
  './pokemon-images/poppe.png',
  './pokemon-images/andra.png',
  './pokemon-images/steo.png',
  './pokemon-images/lalla.png',
  './pokemon-images/ksenija.png',
  './pokemon-images/franca.png',
  './pokemon-images/fera.png',
  './pokemon-images/altini.png',
  './pokemon-images/matte-iliev.png',
  './pokemon-images/ressa.png',
  './pokemon-images/becchio.png',
  './pokemon-images/salvo.png',
  './pokemon-images/rebi.png',
  './pokemon-images/mimmuzzo.png',
  './pokemon-images/sara.png',
  './pokemon-images/elena.png',
  './pokemon-images/brillo.png',
  './pokemon-images/murru.png'
];

// Installazione: prepariamo la nuova cache, ma NON prendiamo subito il controllo
// delle pagine già aperte.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =>
        // Un file opzionale mancante (per esempio un'icona PWA) non deve
        // impedire l'installazione dell'intera cache dell'app.
        Promise.all(
          APP_SHELL.map(resource =>
            cache.add(resource).catch(() => null)
          )
        )
      )
  );
});

// Attivazione: elimina le vecchie cache.
// NON chiamiamo clients.claim(): una partita già aperta continua quindi
// a essere servita dalla vecchia versione fino alla successiva apertura.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('pokemon-suka-shell-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

// Per le richieste GET:
// 1. se c'è una copia in cache, la usiamo subito (offline-first);
// 2. contemporaneamente proviamo ad aggiornare la copia in cache quando siamo online.
// In questo modo la prossima apertura userà già la versione aggiornata.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Gestiamo solo le risorse della stessa origine.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const networkUpdate = fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.ok) {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
          return networkResponse;
        })
        .catch(() => null);

      // Online: risposta immediata dalla cache se disponibile.
      // Offline: la cache è la fonte primaria.
      if (cachedResponse) {
        event.waitUntil(networkUpdate);
        return cachedResponse;
      }

      // Prima apertura di una risorsa non ancora presente in cache:
      // aspettiamo la rete e la memorizziamo.
      return networkUpdate.then(response => {
        if (response) return response;

        // Fallback finale per una navigazione offline.
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }

        return new Response('', {
          status: 503,
          statusText: 'Offline'
        });
      });
    })
  );
});
