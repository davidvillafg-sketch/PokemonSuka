if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './' })
            .then(registration => {
                // Controlla periodicamente se GitHub Pages ha pubblicato
                // una nuova versione del Service Worker.
                registration.update();

                // Se arriva una nuova versione mentre l'app è aperta,
                // la lasciamo installare in background senza ricaricare:
                // la partita corrente non viene interrotta.
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' &&
                            navigator.serviceWorker.controller) {
                            console.log('Nuova versione disponibile. Sarà usata alla prossima apertura.');
                        }
                    });
                });
            })
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}
