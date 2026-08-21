const APP_VERSION = '18';

if ('serviceWorker' in navigator) {
    let refreshing = false;
    let updateWaitingForBattleEnd = false;

    function isBattleInProgress() {
        const battleScreen = document.getElementById('battle-screen');
        if (!battleScreen || battleScreen.classList.contains('hidden')) return false;

        // La schermata resta visibile anche dopo la fine della partita:
        // in quel caso il pulsante "Termina Partita" indica che non c'è più
        // una battaglia attiva da proteggere.
        return !document.getElementById('end-game-btn');
    }

    function reloadWhenSafe() {
        if (refreshing) return;

        if (isBattleInProgress()) {
            updateWaitingForBattleEnd = true;
            return;
        }

        refreshing = true;
        window.location.reload();
    }

    function checkPendingUpdate() {
        if (updateWaitingForBattleEnd && !isBattleInProgress()) {
            reloadWhenSafe();
        }
    }

    function reloadIfNewVersionIsPublished() {
        // Il parametro variabile evita che il vecchio Service Worker o la
        // cache HTTP restituiscano sempre lo stesso index.html.
        const cacheBuster = `?app-version-check=${Date.now()}`;
        fetch(`./index.html${cacheBuster}`, { cache: 'no-store' })
            .then(response => response.ok ? response.text() : null)
            .then(html => {
                if (!html) return;
                const match = html.match(/meta name="app-version" content="([^"]+)"/);
                if (match && match[1] !== APP_VERSION) {
                    reloadWhenSafe();
                }
            })
            .catch(() => {
                // Offline: si continua a usare la copia locale già installata.
            });
    }

    // Quando il nuovo Service Worker prende il controllo, aggiorna subito
    // solo se non è in corso una battaglia.
    navigator.serviceWorker.addEventListener('controllerchange', reloadWhenSafe);

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(`./sw.js?rev=${APP_VERSION}`, { scope: './' })
            .then(registration => {
                registration.update();
                reloadIfNewVersionIsPublished();

                // Controlla gli aggiornamenti anche quando la PWA resta aperta.
                window.setInterval(() => {
                    reloadIfNewVersionIsPublished();
                    checkPendingUpdate();
                }, 60000);

                // Gestisce anche il caso in cui il nuovo worker fosse già
                // installato e in attesa prima del caricamento della pagina.
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }

                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
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