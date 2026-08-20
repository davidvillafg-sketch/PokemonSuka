# Manuale Ufficiale — Pokémon Personalizzato

Questo documento è la documentazione ufficiale e completa del gioco. Contiene tutte le regole, le meccaniche, i tipi, gli stati, i terreni/climi e la scheda completa di ogni Pokémon disponibile nel pool attuale. È pensato per essere leggibile sia da chi conosce già Pokémon competitivo sia da chi si approccia per la prima volta a questo sistema custom.

## Indice

1. [Formato di Gioco](#1-formato-di-gioco)
2. [Statistiche e Livelli](#2-statistiche-e-livelli)
3. [Stage delle Statistiche](#3-stage-delle-statistiche)
4. [Calcolo dei Danni](#4-calcolo-dei-danni)
5. [Priorità e Ordine dei Turni](#5-priorità-e-ordine-dei-turni)
6. [Targeting delle Mosse](#6-targeting-delle-mosse)
7. [Tipi ed Efficacia di Tipo](#7-tipi-ed-efficacia-di-tipo)
8. [Stati Alterati](#8-stati-alterati)
9. [Terreni e Climi](#9-terreni-e-climi)
10. [Mosse di Protezione Certa](#10-mosse-di-protezione-certa)
11. [Regole Generali Aggiuntive](#11-regole-generali-aggiuntive)
12. [Glossario Categorie di Mosse](#12-glossario-categorie-di-mosse)
13. [Elenco Pokémon](#13-elenco-pokémon)

---

## 1. Formato di Gioco

- Il gioco si svolge in stile **VGC**: lotte in **doppio** (2 Pokémon per squadra in campo contemporaneamente per lato).
- Ogni allenatore prepara una squadra di **6 Pokémon**, di cui ne sceglie **4** da portare effettivamente in partita.
- Tutti i Pokémon si intendono al **Livello 50**, come negli standard competitivi.
- **Nature** e **EV** non vanno considerati/applicati.
- Gli **IV** di tutti i Pokémon sono considerati **31 in ogni statistica** (IV perfetti).
- Il pool di Pokémon utilizzabili è, al momento, esclusivamente quello elencato in questo documento (sezione 13).

## 2. Statistiche e Livelli

Ogni Pokémon possiede 6 statistiche base:

| Sigla | Nome Esteso | Significato |
|---|---|---|
| HP | Punti Vita | Quantità di danno che il Pokémon può subire prima di andare KO |
| Atk | Attacco Fisico | Determina il danno delle mosse Fisiche usate |
| Def | Difesa Fisica | Riduce il danno subito dalle mosse Fisiche |
| SpA | Attacco Speciale | Determina il danno delle mosse Speciali usate |
| SpD | Difesa Speciale | Riduce il danno subito dalle mosse Speciali |
| Spe | Velocità | Determina l'ordine di esecuzione delle mosse (a parità di priorità) |

Le statistiche riportate nelle schede dei Pokémon (sezione 13) sono le **statistiche base**; il valore effettivo in battaglia deriva da queste secondo le formule standard di livello 50, IV 31, senza Nature né EV.

## 3. Stage delle Statistiche

Le variazioni di Atk, Def, SpA, SpD e Spe causate da mosse o abilità sono espresse in **stage**, da un minimo di **-6** a un massimo di **+6**. Ogni stage corrisponde alla seguente moltiplicazione sul valore della statistica:

| Stage | Moltiplicatore |
|---|---|
| -6 | x0.25 |
| -5 | x0.286 |
| -4 | x0.33 |
| -3 | x0.4 |
| -2 | x0.5 |
| -1 | x0.75 |
| 0 | x1 |
| +1 | x1.5 |
| +2 | x2 |
| +3 | x2.5 |
| +4 | x3 |
| +5 | x3.5 |
| +6 | x4 |

Note importanti sugli stage:

- Non è possibile scendere sotto -6 né salire sopra +6.
- Quando un Pokémon **esce dal campo** (viene ritirato o cade KO), **tutte le sue variazioni di stage vengono azzerate**. Rientrando, riparte da 0 in ogni statistica.
- Uscendo dal campo si azzerano anche eventuali **contatori temporali** legati a mosse/abilità (es. il contatore dell'Iperavvelenamento, o i turni "obbligati" imposti da mosse come *Prenotata* o *Alla Lavagna!*).
- Gli **stati** (Burn, Sleep, Iperavvelenato, Frozen, Fungo, DA) **non** si azzerano quando il Pokémon esce dal campo (eccetto lo stato Confuso, che termina sempre all'uscita dal campo), anche se i loro contatori interni di turni ripartono da zero al rientro.

## 4. Calcolo dei Danni

Il danno segue la logica classica dei giochi Pokémon principali:

- Per le **mosse Fisiche**: il danno dipende da Potenza Base (BP) della mossa, **Atk** di chi attacca e **Def** del bersaglio.
- Per le **mosse Speciali**: il danno dipende da BP della mossa, **SpA** di chi attacca e **SpD** del bersaglio.
- Il danno calcolato viene sottratto direttamente agli HP correnti del bersaglio.
- Si applicano poi eventuali modificatori aggiuntivi attivi al momento (abilità, stage, stati, terreni, climi, effetti di mosse, STAB, efficacia di tipo, ecc.), tutti cumulabili secondo le regole specifiche di ciascun effetto.
- **STAB**: se il tipo della mossa corrisponde a uno dei tipi del Pokémon che la usa, il danno riceve il consueto bonus da Same-Type-Attack-Bonus, salvo diversamente specificato da abilità o mosse (es. *goblin* di Altini rende STAB qualunque mossa; *Bomba 'e Maradona* di Salvo è sempre considerata STAB).
- **Brutto Colpo**: quando una mossa "fa sempre Brutto Colpo" (es. *pisello storto* di Steo), il danno finale viene moltiplicato per **x1.5** e **ignora completamente** qualsiasi riduzione di danno dovuta a: aumenti di stage difensivi del bersaglio, schermi, abilità difensive o qualunque altra riduzione di danno.
- **Mosse ad area** (target *All Opponents* o *All Pokemon*): il danno inflitto a ciascun bersaglio colpito è ridotto del **25%**, a meno che la mossa colpisca effettivamente **un solo** Pokémon (ad esempio perché gli altri bersagli sono già KO), nel qual caso il danno è pieno, non ridotto.
- **Elusione**: rappresenta la probabilità che un attacco subito venga evitato del tutto.
- **Efficacia di tipo**: vedi sezione 7. I moltiplicatori di efficacia si combinano moltiplicandoli tra loro quando un Pokémon o una mossa hanno più tipi coinvolti (es. Debole x2 su un tipo e Resistente x0.5 sull'altro = x1, effetto neutro).

## 5. Priorità e Ordine dei Turni

- Ogni mossa ha una **priorità**. Se non specificata, la priorità di una mossa è **0**.
- Le mosse con priorità più alta vengono eseguite per prime, indipendentemente dalla Velocità dei Pokémon coinvolti.
- A **parità di priorità**, agisce per primo il Pokémon con **Velocità (Spe) più alta**.
- Qualsiasi effetto legato a contatori di turni consecutivi (mosse che non si possono ripetere per N turni, mosse che obbligano a un'azione per N turni, ecc.) viene **annullato** se il Pokémon interessato esce dal campo durante quel periodo.

## 6. Targeting delle Mosse

Le mosse possono avere diversi tipi di bersaglio:

| Target | Significato |
|---|---|
| Single Target | Un singolo Pokémon scelto, alleato o avversario a seconda della mossa |
| Self | Chi usa la mossa |
| All Allies | Tutti i Pokémon alleati in campo (spesso incluso chi usa la mossa) |
| All Opponents | Tutti i Pokémon avversari in campo |
| All Pokemon | Tutti i Pokémon in campo, alleati e avversari |

Regole di targeting particolari:

- Se il bersaglio designato di una mossa viene **sostituito** prima che la mossa venga eseguita, il nuovo Pokémon che entra al suo posto **diventa il nuovo bersaglio**.
- Se il bersaglio designato **va KO** prima che la mossa venga eseguita, il nuovo bersaglio diventa un eventuale **alleato ancora in campo** del bersaglio originale. Se non c'è nessun alleato in campo, la mossa **fallisce**.
- Le mosse di **redirect** (come *Svenimento* di Ksenija, che forza gli avversari a colpire solo chi l'ha usata) **non hanno alcun effetto** sulle mosse ad area (*All Opponents*, *All Pokemon*): queste ultime mantengono sempre il loro targeting normale, ignorando qualsiasi redirect attivo.

## 7. Tipi ed Efficacia di Tipo

Nel gioco esistono 11 tipi: **Puro, Ingegno, Alcol, Fumo, Chill, Lercio, Cibo, Fitness, Terrone, Dittatore, Esotico**.

Ogni Pokémon (e ogni mossa) può avere uno o due tipi. Le combinazioni di efficacia contro Pokémon con doppio tipo si calcolano **moltiplicando** i moltiplicatori dei due tipi (esattamente come nei giochi Pokémon principali). Esempio: una mossa Superefficace (x2) su un tipo e Poco Efficace (x0.5) sull'altro tipo del bersaglio dà un risultato Neutro (x2 · x0.5 = x1).

Tabella delle efficacie: per ciascun **tipo difensore** (colonna a sinistra), sono elencati i tipi d'attacco a cui è Debole (x2 danno), Resistente (x0.5 danno) o Immune (x0 danno). I tipi non menzionati per un dato difensore sono Neutri (x1).

| Tipo Difensore | Debole a (x2) | Resistente a (x0.5) | Immune a (x0) |
|---|---|---|---|
| Puro | Esotico, Fumo, Alcol | Lercio, Dittatore | — |
| Ingegno | Chill, Alcol | Ingegno, Fitness, Terrone | — |
| Alcol | Puro, Cibo, Dittatore | Alcol, Ingegno, Lercio | — |
| Fumo | Fitness, Ingegno, Terrone | Chill, Esotico, Alcol | — |
| Chill | Esotico, Fitness, Terrone | Fumo | Dittatore |
| Lercio | Esotico, Puro, Alcol | Fitness | Cibo |
| Cibo | Lercio, Fumo | Esotico, Terrone, Alcol | — |
| Fitness | Cibo, Fumo, Chill | Ingegno, Fitness, Puro | — |
| Terrone | Ingegno, Fitness, Dittatore | Lercio, Cibo, Fumo | — |
| Dittatore | Puro, Lercio, Ingegno | Terrone, Esotico | — |
| Esotico | Terrone, Lercio | Puro | Fumo |

## 8. Stati Alterati

I Pokémon possono essere colpiti da diversi status. **Burn, Sleep, Iperavvelenato e Frozen sono mutualmente esclusivi**: se un Pokémon ne ha già uno di questi quattro, non può riceverne un altro finché il primo non termina — vale sempre il primo status imposto tra questi quattro.

| Stato | Effetto |
|---|---|
| **Confuso** | Ogni turno, prima di agire, il Pokémon ha il 33% di probabilità di colpirsi da solo invece di eseguire la mossa scelta. Ogni turno ha inoltre il 25% di probabilità di guarire spontaneamente dalla confusione. Lo stato termina immediatamente se il Pokémon esce dal campo (è l'unico stato che si azzera in questo modo). |
| **Fungo** | Il Pokémon perde 1/8 dei suoi HP totali a ogni turno. Chiunque colpisca con una mossa Fisica un Pokémon già affetto da Fungo, contrae a sua volta lo stato Fungo. |
| **Frozen** | Il Pokémon non può agire (salvo mosse che lo specificano esplicitamente). Ogni turno, incluso quello in cui viene assunto lo stato, c'è il 50% di probabilità di liberarsene. |
| **Iperavvelenato** | A fine turno il Pokémon perde HP pari a una frazione dei suoi HP totali che raddoppia ogni turno, partendo da 1/16 al primo turno (poi 1/8, 1/4, ecc.). |
| **Sleep** | Il Pokémon non può agire (salvo mosse che lo specificano). Al secondo turno in questo stato ha il 50% di probabilità di svegliarsi; al terzo turno si sveglia con certezza. |
| **Burn** | L'Atk del Pokémon è dimezzato per tutta la durata dello stato. A fine turno perde inoltre 1/16 dei suoi HP totali. |
| **DA** | Il Pokémon non può recuperare HP in alcun modo (mosse, abilità, strumenti, ecc.) e non può utilizzare alcun tipo di strumento. Questo stato termina non appena il Pokémon esce dal campo. |

Regole generali sugli stati:

- Tutti gli stati (eccetto Confuso) **permangono** anche se il Pokémon viene ritirato dal campo, sebbene eventuali contatori di turni interni si azzerino al rientro.
- Effetti che impongono stati "ad area" o multipli seguono le normali regole di targeting (sezione 6).

## 9. Terreni e Climi

Terreni e Climi sono due categorie di effetti di campo **indipendenti tra loro**: un Terreno non sovrascrive un Clima e viceversa, ma un nuovo Terreno sovrascrive sempre il Terreno precedente (stessa cosa per i Climi tra loro). Ogni Terreno o Clima dura **5 turni** dal momento in cui viene imposto, e i suoi effetti sono applicati **istantaneamente e in modo continuativo** finché resta attivo.

| Nome | Tipo | Effetto |
|---|---|---|
| **Terreno Alcol** | Terreno | Riduce del 10% la precisione delle mosse NON di tipo Alcol usate da Pokémon che NON sono di tipo Alcol. Raddoppia la durata dello stato Confuso. |
| **Terreno Chill** | Terreno | Aumenta di 1 stage Def e SpD dei Pokémon di tipo Chill. |
| **Terreno Calabro** | Terreno | Aumenta di 1 stage Atk e SpA di tutti i Pokémon di tipo Terrone. |
| **Clima Fumo** | Clima | Infligge 1/16 degli HP totali a ogni turno a tutti i Pokémon non di tipo Fumo; infligge invece 1/10 degli HP totali ai Pokémon di tipo Fitness o Puro. Riduce del 10% i danni subiti dai Pokémon di tipo Fumo. |

## 10. Mosse di Protezione Certa

Mosse come *Sorriso* (Pie), *Balzata* (Altini, Brillo) o simili, che garantiscono protezione certa dagli attacchi, hanno probabilità di fallire crescente se usate consecutivamente:

| Utilizzo consecutivo | Probabilità di fallimento |
|---|---|
| 1° utilizzo | 0% (non può fallire) |
| 2° utilizzo consecutivo | 50% |
| 3° utilizzo consecutivo | 99% |
| 4° utilizzo consecutivo (e successivi) | 100% |

## 11. Regole Generali Aggiuntive

- Se non diversamente specificato, una mossa ha **0% di probabilità di fallire** (Accuracy non indicata = mossa che non può mancare per motivi legati alla precisione).
- Gli aumenti percentuali si sommano in modo **relativo/additivo** sulla base già esistente: ad esempio, 40% base + 50% di aumento = 60% totale; 40% base + 25% di aumento = 50% totale.
- Ogni volta che una mossa/abilità impone un nuovo Terreno o Clima, questo **sovrascrive** l'eventuale Terreno/Clima dello stesso tipo di categoria già attivo.
- I moltiplicatori di efficacia di tipo per Pokémon a doppio tipo si calcolano come **prodotto** dei moltiplicatori sui singoli tipi.

## 12. Glossario Categorie di Mosse

Ogni mossa appartiene a una **Categoria** (Fisica, Speciale o Stato) oltre che a un **Tipo**:

- **Fisica**: il danno si calcola con Atk dell'attaccante e Def del bersaglio.
- **Speciale**: il danno si calcola con SpA dell'attaccante e SpD del bersaglio.
- **Stato**: la mossa non infligge danno diretto tramite BP, ma applica altri effetti (buff, debuff, stati, cure, terreni/climi, ecc.).

---

## 13. Elenco Pokémon

Di seguito la scheda completa di ogni Pokémon attualmente disponibile nel pool di gioco. Tutte le statistiche sono statistiche **base**; per ogni Pokémon sono indicati Tipo/i, Abilità e le 4 mosse conosciute.

### Pie [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 90 | 76 | 85 | 103 | 85 | 81 | 520 |

**Tipo:** Lercio, Chill

**Abilità — Fascino di Pie:** tutti i Pokémon Femmina hanno precisione ridotta del 20% finché Pie è in campo, e i danni subiti da Pie inflitti da Pokémon Femmina sono ridotti del 20%. Pie è immune a Veleno e a Iperavvelenamento.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Peto Tossico | Lercio | Speciale | 15 | All Pokemon | Impone stato "Iperavvelenato" a tutti i Pokémon circostanti |
| Sorriso | Chill | Stato | — | Self | Priorità +3. Come Protect: protegge da qualsiasi attacco. Impone anche Terreno Chill |
| Sguardo | Chill | Stato | — | Single Target | Riduce Atk e SpA del bersaglio di 1 stage |
| Attacco Fungo | Lercio | Stato | — | Single Target | Assegna lo stato "Fungo" |

---

### Isco [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 75 | 100 | 110 | 65 | 110 | 60 | 520 |

**Tipo:** Alcol, Esotico

**Abilità — Giro di Shot:** mette in campo Terreno Alcol e assegna stato "Confuso" a tutti i Pokémon in campo.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Lattina | Alcol | Fisico | 90 | Single Target | — |
| Anguria Drum | Esotico | Stato | — | Self | Dimezza gli HP rimanenti e massimizza Atk a +6 stage |
| Birra | Alcol | Stato | — | Self | Recupera tutti gli HP, ma chi la usa riduce la propria precisione del 50% |
| Medusa | Esotico | Stato | — | Single Target | Confonde tutti i Pokémon in campo e riduce di 1 stage Def e SpD al bersaglio |

---

### Feb [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 70 | 170 | 61 | 82 | 56 | 81 | 520 |

**Tipo:** Fumo, Fitness

**Abilità — Scopiamo:** per ogni Pokémon Femmina in campo nel momento in cui Feb entra, aumenta di 1 stage il proprio Atk; tuttavia Feb deve attaccare obbligatoriamente quelle Femmine finché sono in campo.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Fermii | Fumo | Stato | — | All Opponents | Per tutto il turno, i Pokémon che devono ancora agire tentennano. Utilizzabile solo se è la prima mossa del turno di chi la usa |
| Contrasto Letale | Fitness | Fisico | 150 | Single Target | Contraccolpo: chi la usa perde il 33% del danno inflitto |
| Drift | Fumo | Stato | — | Self | Accuracy 50%. Aumenta di 6 stage la propria Spe e imposta Clima Fumo; se fallisce, perde 1/3 degli HP |
| Rutto | Lercio | Speciale | 60 | Single Target | Priorità +1. Riduce Atk del bersaglio di 1 stage |

---

### Giana [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 89 | 10 | 60 | 161 | 80 | 120 | 520 |

**Tipo:** Fumo, Ingegno

**Abilità — Ottimizzazione:** nel calcolo del danno, quando Giana usa una mossa Speciale: SpA effettiva = SpA + 0.5·Atk + 0.25·Def + 0.25·SpD. Quando subisce una mossa Speciale: SpD effettiva = SpD + 0.5·Def + 0.25·Atk + 0.25·SpA. Quando subisce una mossa Fisica: Def effettiva = Def + 0.5·SpD + 0.25·Atk + 0.25·SpA. Tutte le variazioni da stage o altro si applicano prima di questi calcoli. Giana non può usare mosse che infliggono danno per due turni consecutivi.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Punto Chill | Chill | Stato | — | Single Target | Su un alleato: +1 stage Atk, SpA, Def, SpD. Su un avversario: -1 stage Atk, SpA, Def, SpD. Su sé stesso: +1 stage Def e SpD, ma -1 stage Spe |
| Disturbo Alimentare | Cibo | Speciale | 70 | All Opponents | Impone stato "DA" a tutti i colpiti; considerata sempre STAB per Giana |
| Pausa Siga | Fumo | Stato | — | Self | Priorità +3. Impone Clima Fumo ed esce dal campo lasciando il posto a un alleato per un turno; Giana rientra a inizio turno successivo. Fallisce se non ci sono alleati disponibili non già in campo. Non riutilizzabile per 2 turni dopo l'uso |
| Argomentazione | Ingegno | Speciale | 70 | Single Target | Aumenta di 1 stage Def e SpD di chi la usa |

---

### Poppe [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 80 | 110 | 78 | 110 | 78 | 64 | 520 |

**Tipo:** Ingegno, Fitness

**Abilità — Richiamo di Becchio:** aumenta Def e SpD di 1 stage; se Becchio è in campo, SpD riceve un ulteriore stage.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Posing | Fitness | Stato | — | Self | Aumenta di 2 stage Atk e Def, riduce di 1 stage Spe di chi la usa |
| Corto Circuito | Ingegno | Speciale | 130 | All Pokemon | Assegna stato "Burn" a tutti i colpiti |
| Attacco Squalo Limone | Esotico | Fisico | 80 | Single Target | Priorità +1. Aumenta di 1 stage Spe di chi la usa |
| Cucciolone | Puro | Stato | — | Single Target | Riduce di 1 stage Def, SpD e Spe del bersaglio |

---

### Andra [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 80 | 150 | 110 | 45 | 55 | 95 | 520 |

**Tipo:** Terrone, Fitness

**Abilità — Grounding:** su qualsiasi terreno aumenta di 1 stage Spe; se è attivo Clima Fumo, Def e Spe diminuiscono del 10% (gli effetti si possono sovrapporre).

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Make it Gold Rain | Terrone | Fisico | 120 | All Opponents | Accuracy 90%. Riduce di 1 stage SpA di chi la usa |
| Shadow Boxing | Fitness | Stato | — | Self | Aumenta di 1 stage Atk e Def di chi la usa |
| Pugni Merda | Lercio | Fisico | 90 | Single Target | Riduce di 1 stage Def e SpD di chi la usa |
| Bomba d'Acqua | Lercio | Fisico | 140 | Single Target | Riduce di 1 stage Atk, SpA, Def, SpD, Spe di chi la usa |

---

### Steo [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 65 | 165 | 90 | 45 | 60 | 95 | 520 |

**Tipo:** Fitness, Dittatore

**Abilità — Camerata:** aumenta di 1 stage Atk e Spe se il compagno in campo è Maschio; riduce di 1 stage Atk se il compagno in campo è di tipo Terrone o Esotico. Gli effetti sono cumulabili tra loro.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Pisello Storto | Fitness | Fisico | 40 | Single Target | Fa sempre "Brutto Colpo" (vedi sezione 4) |
| Viva il Duce | Dittatore | Fisico | 40 (base) | Single Target | BP base 40, +20 per ogni altro Pokémon Maschio nella squadra |
| Arhhhh | Dittatore | Speciale | 65 | Single Target | — |
| Squarta Neri | Dittatore | Fisico | 30 | Single Target | Danno triplo contro Pokémon di tipo Esotico e Terrone |

---

### Lalla [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 100 | 88 | 110 | 75 | 86 | 61 | 520 |

**Tipo:** Puro, Terrone

**Abilità — Infermiera:** cura tutti i problemi di stato a tutti gli alleati appena Lalla entra in campo; finché Lalla resta in campo, i danni subiti dai compagni sono ridotti del 15%.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Accudire | Puro | Stato | — | All Allies | Fa recuperare il 20% degli HP agli alleati in campo (Lalla inclusa) e cura i loro problemi di stato |
| Baffetto | Terrone | Stato | — | All Pokemon | Chi la usa assume sesso "Maschio"; riduce di 1 stage Atk di tutti i Maschi avversari in campo |
| Urlo Terrone | Terrone | Speciale | 90 | Single Target | — |
| Reginetta | Puro | Stato | — | All Allies | Aumenta di 1 stage Atk, SpA, SpD e Def di tutte le Femmine della propria squadra in campo (Lalla inclusa) |

---

### Ksenija [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 90 | 90 | 115 | 80 | 115 | 30 | 520 |

**Tipo:** Puro, Esotico

**Abilità — Poliglotta:** appena entra in campo, vengono mostrate a schermo tutte le mosse dei Pokémon avversari.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Rutto | Lercio | Speciale | 60 | Single Target | Priorità +1. Riduce Atk del bersaglio di 1 stage |
| Svenimento | Puro | Stato | — | Self | Chi la usa perde metà HP, ma per 3 turni tutti gli avversari in campo possono colpire solo lei (non vale per mosse ad area, vedi sezione 6) |
| Calcio Balcanico | Esotico | Fisico | 110 | Single Target | 30% di probabilità di ridurre Def del bersaglio di 1 stage |
| Riposino | Puro | Stato | — | Self | Recupera tutti gli HP, ma chi la usa assume stato "Sleep" |

---

### Franca [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 70 | 80 | 80 | 130 | 80 | 80 | 520 |

**Tipo:** Puro, Cibo

**Abilità — Discussione:** al suo ingresso in campo, il Pokémon avversario nello slot di fronte assume stato "Confuso" e subisce una riduzione di 1 stage a Def e SpD.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Spara Sushi | Cibo | Speciale | 30 | Single Target | Colpisce da 2 a 5 volte con probabilità uniforme |
| Prenotata | Puro | Stato | — | Single Target | Costringe il bersaglio a ripetere per 3 turni una mossa scelta da chi ha usato Prenotata |
| Squarta Neri | Dittatore | Fisico | 30 | Single Target | Danno triplo contro Pokémon di tipo Esotico e Terrone |
| Pollo Arrosto | Cibo | Stato | — | Self | Recupera tutti gli HP |

---

### Fera [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 70 | 51 | 100 | 130 | 100 | 69 | 520 |

**Tipo:** Terrone, Puro

**Abilità — Gran Voce:** potenzia del 50% le mosse di categoria "Suono".

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Cannata!!! | Terrone | Speciale | 50 | Single Target | Accuracy 80%. Mossa "Suono". Diventa mossa OHKO che ignora qualsiasi protezione se il bersaglio ha l'abilità "Scopiamo", assumendo in tal caso Priorità +4 |
| Altini Marito | Puro | Stato | — | Single Target | Se il bersaglio è Altini: +1 stage Atk, SpA, Def, SpD. Se il bersaglio è Maschio e non è Altini: -1 stage Atk, SpA, Def, SpD. Fallisce sempre su bersagli Femmina |
| Croste | Terrone | Speciale | 60 | Single Target | Assegna stato "Frozen" e impedisce al bersaglio di uscire dal campo finché Fera è in campo |
| Nuvole | Puro | Speciale | 80 | Single Target | Mossa "Suono". Assegna stato "Confuso" a chi la subisce |

---

### Altini [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 65 | 132 | 52 | 132 | 54 | 85 | 520 |

**Tipo:** Puro, Dittatore

**Abilità — Goblin:** tutte le mosse usate da Altini sono considerate STAB.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Bomba Pesto | Cibo | Speciale | 100 | Single Target | — |
| Balzata | Puro | Stato | — | Self | Priorità +3. Come Protect |
| Squarta Neri | Dittatore | Fisico | 30 | Single Target | Danno triplo contro Pokémon di tipo Esotico e Terrone |
| Low Cortisol | Chill | Stato | — | Self | Riduce di 1 stage Spe, aumenta di 1 stage SpD e Def di chi la usa |

---

### Matte Iliev [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 90 | 120 | 90 | 60 | 80 | 80 | 520 |

**Tipo:** Cibo, Fitness

**Abilità — Baffo:** aumenta di 1 stage Def e Atk se l'alleato in campo è Maschio.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Pescare | Cibo | Fisico | 70 | Single Target | Il bersaglio colpito non può più lasciare il campo |
| Kart | Fitness | Stato | — | All Allies | Aumenta di 1 stage Spe a sé stesso e agli alleati in campo |
| Bibitone | Fitness | Stato | — | Self | Recupera metà HP, aumenta di 1 stage Def e Atk di chi la usa |
| All In | Lercio | Fisico | — | Single Target | Accuracy 50%. Se va a segno, manda KO il bersaglio; se fallisce, chi la usa va KO |

---

### Ressa [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 70 | 54 | 60 | 120 | 140 | 56 | 500 |

**Tipo:** Fumo, Alcol

**Abilità — Consegna delle Verifiche:** appena Ressa entra in campo, impone Clima Fumo.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Alla Lavagna! | Ingegno | Stato | — | All Opponents | Accuracy 75%. Tutti gli avversari devono ripetere la mossa appena usata per 2 turni |
| Whisky | Alcol | Stato | — | Single Target | Il bersaglio assume stato "Confuso" e diventa di tipo Alcol; chi la usa recupera il 15% degli HP totali |
| Mignolo Appuntito | Lercio | Fisico | 40 | Single Target | Dimezza Atk del bersaglio |
| Signorina D'Aloia | Ingegno | Speciale | 50 | All Pokemon | Danno triplicato contro Pokémon Femmina |

---

### Becchio [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 70 | 55 | 70 | 130 | 110 | 65 | 500 |

**Tipo:** Dittatore, Ingegno

**Abilità — Poppe A Casa!:** se Poppe è in campo, riduce a Poppe di 1 stage Atk e SpA ma aumenta di 1 stage Def e SpD. Se Poppe non è in campo, riduce di 1 stage Def dei Pokémon avversari in campo.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Esame a Sorpresa | Ingegno | Speciale | 40 | All Pokemon | Tutti i Pokémon di tipo Ingegno in campo subiscono -1 stage a Spe, SpA, SpD |
| Gender Pay Gap | Ingegno | Stato | — | All Pokemon | Tutti i Maschi in campo: -1 stage Atk, SpA. Tutte le Femmine in campo: +1 stage Atk, SpA |
| Subito a Casa! | Dittatore | Stato | — | Single Target | Forza il bersaglio a switchare; fallisce se non può farlo o l'avversario non ha altri Pokémon disponibili |
| Insulto Gratuito | Dittatore | Speciale | 80 | Single Target | — |

---

### Salvo [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 75 | 130 | 130 | 85 | 60 | 40 | 520 |

**Tipo:** Cibo, Alcol

**Abilità — Doppiatore:** i cambi di stage del proprio alleato hanno il 60% di probabilità di essere raddoppiati se ottenuti mentre Salvo è in campo.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Bomba 'e Maradona | Terrone | Fisico | 90 | Single Target | Considerata sempre STAB, anche quando normalmente non lo sarebbe |
| Step Back | Fitness | Stato | — | Self | Chi la usa perde il tipo Cibo e assume il tipo Fitness; aumenta di 2 stage Spe di chi la usa |
| Pizza Time | Cibo | Stato | — | Self | Recupera metà degli HP totali |
| Whisky | Alcol | Stato | — | Single Target | Il bersaglio assume stato "Confuso" e diventa di tipo Alcol |

---

### Rebi [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 75 | 90 | 90 | 95 | 90 | 80 | 520 |

**Tipo:** Puro, Terrone

**Abilità — Innocenza:** finché Rebi è in campo, impedisce qualsiasi nuova modifica agli stage delle statistiche di tutti i Pokémon in campo. Non blocca variazioni alle statistiche non dovute a stage. Le variazioni di stage ottenute prima dell'ingresso di Rebi restano invariate.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Bang! | Puro | Fisico | 80 | Single Target | Non può essere evitata in nessun modo |
| Briscola Gigante | Terrone | Stato | — | All Pokemon | Impone Terreno Calabro |
| Rifiuto | Puro | Stato | — | Self | Priorità +3. Protegge da qualsiasi attacco proveniente da Pokémon Maschi; chiunque attacchi in quel turno chi ha usato Rifiuto subisce -1 stage Atk |
| Depilazione Laser | Puro | Speciale | 120 | Single Target | Riduce di 1 stage Def e SpD di chi la usa |

---

### Mimmuzzo [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 130 | 120 | 130 | 35 | 65 | 20 | 500 |

**Tipo:** Cibo, Terrone

**Abilità — Soppressata:** appena entra in campo, impone Terreno Calabro.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Cinematografo | Esotico | Stato | — | All Pokemon | Impone stato "Confuso" a tutti i Pokémon in campo, tranne a chi usa la mossa |
| Ringraziando Iddio | Terrone | Stato | — | All Allies | Riduce del 20% i danni subiti dalla squadra per 3 turni |
| Cuscino Peloso | Terrone | Stato | — | Single Target | Addormenta il bersaglio, ma lo cura da ogni condizione/stato e gli restituisce tutti gli HP |
| Colpo di Salame | Terrone | Fisico | 80 | Single Target | — |

---

### Sara [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 85 | 70 | 110 | 80 | 105 | 70 | 520 |

**Tipo:** Chill, Fumo

**Abilità — Divano e Canna:** all'ingresso in campo impone Terreno Chill e Clima Fumo contemporaneamente; Sara subisce danni ridotti del 25% dalle mosse di tipo Terrone.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Morso di Zack | Lercio | Fisico | 40 | Single Target | Impone stato "Iperavvelenato" al bersaglio |
| Scenerata | Fumo | Speciale | 75 | Single Target | Impone stato "Burn" al bersaglio |
| Ordine su Glovo | Cibo | Stato | — | Self | Priorità -6. Aumenta di 3 stage Def e SpD e recupera 1/3 degli HP totali |
| Serie TV | Chill | Speciale | 20 | All Opponents | Riduce di 1 stage Spe dei colpiti |

---

### Elena [Femmina]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 75 | 75 | 75 | 100 | 95 | 100 | 520 |

**Tipo:** Chill, Puro

**Abilità — Tolleranza:** finché Elena è in campo, tutti i Pokémon di tipo Esotico e Terrone in campo ricevono +2 stage a Def e SpD.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Riposino | Puro | Stato | — | Self | Recupera tutti gli HP, ma chi la usa assume stato "Sleep" |
| Colpo di Padel | Fitness | Speciale | 40 | Single Target | Colpisce 2-4 volte con probabilità uniforme |
| Heets | Fumo | Speciale | 80 | Single Target | Impone stato "Confuso" al bersaglio; sempre considerata STAB |
| Grattini | Puro | Stato | — | Single Target | Aumenta di 1 stage Def e SpD al bersaglio (2 stage se il bersaglio è Steo) |

---

### Brillo [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 70 | 75 | 75 | 120 | 110 | 70 | 520 |

**Tipo:** Ingegno

**Abilità — Passato Oscuro:** con Clima Fumo e/o Terreno Alcol attivi, aumenta la propria Spe di 1 stage e riduce i danni subiti del 15% (effetti non cumulabili tra loro).

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Scoordinato | Fitness | Fisico | 90 | Single Target | Chi la usa assume stato "Confuso" |
| Fluidodinamica | Ingegno | Speciale | 90 | Single Target | Danno doppio contro Pokémon di tipo Alcol |
| Lavoro di Gruppo | Ingegno | Stato | — | All Allies | Aumenta di 1 stage Spe, SpD e SpA degli alleati di tipo Ingegno |
| Balzata | Puro | Stato | — | Self | Priorità +3. Come Protect |

---

### Murru [Maschio]

| HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|
| 80 | 95 | 95 | 70 | 70 | 90 | 500 |

**Tipo:** Esotico

**Abilità — Gluten Free:** riduce del 25% i danni subiti dalle mosse di tipo Alcol e Cibo.

| Mossa | Tipo | Categoria | Potenza | Bersaglio | Effetto |
|---|---|---|---|---|---|
| Insulto Maschilista | Esotico | Fisico | 80 | Single Target | Danno dimezzato se il bersaglio è Maschio |
| Scoordinato | Fitness | Fisico | 90 | Single Target | Chi la usa assume stato "Confuso" |
| Scambio Geografico | Ingegno | Stato | — | All Allies | Priorità +2. Scambia di posto sé stesso e l'alleato in campo, invertendo i target previsti dalle mosse avversarie |
| Puttana! | Esotico | Stato | — | Single Target | Ha effetto solo su bersagli Femmina (altrimenti fallisce). Se va a segno: -1 stage Def e SpD, +1 stage Atk, SpA e Spe al bersaglio |

---

## Tabella Riassuntiva delle Statistiche Base

| Pokémon | Sesso | Tipo | HP | Atk | Def | SpA | SpD | Spe | Tot |
|---|---|---|---|---|---|---|---|---|---|
| Pie | M | Lercio/Chill | 90 | 76 | 85 | 103 | 85 | 81 | 520 |
| Isco | M | Alcol/Esotico | 75 | 100 | 110 | 65 | 110 | 60 | 520 |
| Feb | M | Fumo/Fitness | 70 | 170 | 61 | 82 | 56 | 81 | 520 |
| Giana | M | Fumo/Ingegno | 89 | 10 | 60 | 161 | 80 | 120 | 520 |
| Poppe | M | Ingegno/Fitness | 80 | 110 | 78 | 110 | 78 | 64 | 520 |
| Andra | M | Terrone/Fitness | 80 | 150 | 110 | 45 | 55 | 95 | 520 |
| Steo | M | Fitness/Dittatore | 65 | 165 | 90 | 45 | 60 | 95 | 520 |
| Lalla | F | Puro/Terrone | 100 | 88 | 110 | 75 | 86 | 61 | 520 |
| Ksenija | F | Puro/Esotico | 90 | 90 | 115 | 80 | 115 | 30 | 520 |
| Franca | F | Puro/Cibo | 70 | 80 | 80 | 130 | 80 | 80 | 520 |
| Fera | F | Terrone/Puro | 70 | 51 | 100 | 130 | 100 | 69 | 520 |
| Altini | M | Puro/Dittatore | 65 | 132 | 52 | 132 | 54 | 85 | 520 |
| Matte Iliev | M | Cibo/Fitness | 90 | 120 | 90 | 60 | 80 | 80 | 520 |
| Ressa | M | Fumo/Alcol | 70 | 54 | 60 | 120 | 140 | 56 | 500 |
| Becchio | F | Dittatore/Ingegno | 70 | 55 | 70 | 130 | 110 | 65 | 500 |
| Salvo | M | Cibo/Alcol | 75 | 130 | 130 | 85 | 60 | 40 | 520 |
| Rebi | F | Puro/Terrone | 75 | 90 | 90 | 95 | 90 | 80 | 520 |
| Mimmuzzo | M | Cibo/Terrone | 130 | 120 | 130 | 35 | 65 | 20 | 500 |
| Sara | F | Chill/Fumo | 85 | 70 | 110 | 80 | 105 | 70 | 520 |
| Elena | F | Chill/Puro | 75 | 75 | 75 | 100 | 95 | 100 | 520 |
| Brillo | M | Ingegno | 70 | 75 | 75 | 120 | 110 | 70 | 520 |
| Murru | M | Esotico | 80 | 95 | 95 | 70 | 70 | 90 | 500 |

---

*Fine del manuale. Per qualsiasi combo o interazione non esplicitamente coperta da questo documento, si applica il buon senso seguendo le logiche degli altri effetti già descritti, dando priorità alle regole più specifiche su quelle più generali.*
