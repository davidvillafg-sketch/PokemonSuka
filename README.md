# Pokemon Suka — pacchetto pronto per GitHub

Questa cartella contiene la versione aggiornata del gioco.

## Struttura da mantenere

Carica nella root della repository questi file:

- `index.html`
- `game.js`
- `styles.css`
- `manifest.json`
- `pwa.js`
- `sw.js`
- `pokemon-images.js`

Carica anche l'intera cartella:

```text
images/pokemon/
```

Non rinominare i file e non spostare la cartella delle immagini: i percorsi
sono utilizzati da `pokemon-images.js`.

## Caricamento dal sito GitHub

1. Estrai l'archivio ZIP.
2. Apri la repository GitHub e scegli **Add file → Upload files**.
3. Trascina nella pagina il contenuto della cartella estratta, compresa
   `images/pokemon/`.
4. Scegli **Commit changes**.

Il file `sw.js` è alla versione `v5`, quindi la nuova cache verrà distinta
da quella precedente. L'aggiornamento del Service Worker avviene in
background e viene utilizzato alla successiva apertura dell'app.

## Caricamento con Git

Se la repository è già clonata in locale, copia il contenuto di questa
cartella nella root del progetto, poi esegui:

```bash
git add index.html game.js styles.css manifest.json pwa.js sw.js pokemon-images.js images/pokemon
git commit -m "Aggiungi immagini ai Pokemon"
git push
```
