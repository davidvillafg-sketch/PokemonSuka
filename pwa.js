if ('serviceWorker' in navigator) {
    let refreshing = false;

    // Quando il nuovo Service Worker prende il controllo, ricarica una sola
    // volta la pagina per usare subito HTML, CSS e JavaScript aggiornati.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
    });

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './' })
            .then(registration => {
                // Controlla se è stata pubblicata una nuova versione.
                registration.update();

                // Gestisce anche il caso in cui il nuovo worker fosse già
                // installato e in attesa prima del caricamento di questa pagina.
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }

                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // Chiede al nuovo worker di diventare attivo
                                // senza attendere la chiusura manuale della PWA.
                                newWorker.postMessage({ type: 'SKIP_WAITING' });
                            } else {
                                console.log('Service Worker installato.');
                            }
                        }
                    });
                });
            })
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}