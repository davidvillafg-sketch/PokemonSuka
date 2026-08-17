# Regolamento Ufficiale — Pokémon Suka Edition

Documento tecnico di riferimento per tipi, mosse, abilità, stati, terreni, climi e meccaniche di combattimento.

---

## 1. Formato di Gioco

- **Formato**: stile VGC, lotte in doppio (2 vs 2 in campo).
- **Composizione squadra**: 4 Pokémon in campo scelti da una squadra iniziale di 6.
- **Livello**: tutti i Pokémon sono considerati al livello 50, come nei tornei competitivi ufficiali.
- **Statistiche**: quelle riportate nelle schede sono le statistiche *base*; le statistiche effettive in battaglia derivano da queste secondo le formule standard di livello 50.
- **Nature**: non considerate (nessun effetto).
- **EV**: non considerati (nessun effetto).
- **IV**: considerati pari a 31 per tutte le statistiche, per tutti i Pokémon.
- **Pool disponibile**: al momento, solo i Pokémon elencati in questo documento.

---

## 2. Statistiche Base

| Sigla | Nome | Ruolo |
|---|---|---|
| HP | Punti Vita | Vita totale |
| Atk | Attacco Fisico | Potenza mosse fisiche |
| Def | Difesa Fisica | Resistenza a mosse fisiche |
| SpA | Attacco Speciale | Potenza mosse speciali |
| SpD | Difesa Speciale | Resistenza a mosse speciali |
| Spe | Velocità | Determina l'ordine di azione |

**Calcolo del danno**: standard, come nei giochi Pokémon principali.
- Mosse **fisiche**: danno basato su BP mossa, Atk di chi attacca, Def del bersaglio.
- Mosse **speciali**: danno basato su BP mossa, SpA di chi attacca, SpD del bersaglio.
- Il danno si applica scalando gli HP correnti del bersaglio.
- Eventuali modificatori (abilità, stage, terreni, climi, status) si applicano sopra il calcolo base.

**Elusione**: probabilità di evitare completamente un attacco subito.

---

## 3. Stage delle Statistiche

Ogni "stage" rappresenta una variazione del **50%** rispetto al valore base della statistica. Il range consentito va da **-6** a **+6**.

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

**Regola di reset**: quando un Pokémon esce dal campo, **tutte** le variazioni di stage vengono azzerate, così come tutti i contatori temporali (es. turni di Iperavvelenamento). Gli status invece (eccetto "Confuso") **permangono**, anche se con contatori azzerati.

Allo stesso modo, qualsiasi effetto legato a contatori di turni (mosse obbligate, divieti temporanei d'uso, ecc.) viene annullato non appena il Pokémon interessato lascia il campo.

---

## 4. Tipi ed Efficacia

Ci sono 11 tipi: **Puro, Ingegno, Alcol, Fumo, Chill, Lercio, Cibo, Fitness, Terrone, Dittatore, Esotico**.

Ogni Pokémon può avere uno o due tipi. Per i Pokémon a doppio tipo, l'efficacia complessiva si calcola come **prodotto** dei moltiplicatori dei singoli tipi (es. superefficace su un tipo x2 e non molto efficace sull'altro x0.5 = x1, effetto neutro).

- **Debole** → subisce danno **x2**
- **Resistente** → subisce danno **x0.5**
- **Immune** → subisce danno **x0**

### Tavola delle Debolezze/Resistenze/Immunità (per tipo che SUBISCE)

| Tipo che subisce | Debole contro | Resistente contro | Immune a |
|---|---|---|---|
| **Puro** | Esotico, Fumo, Alcol | Lercio, Dittatore | — |
| **Ingegno** | Chill, Alcol | Ingegno, Fitness, Terrone | — |
| **Alcol** | Puro, Cibo, Dittatore | Alcol, Ingegno, Lercio | — |
| **Fumo** | Fitness, Ingegno, Terrone | Chill, Esotico, Alcol | — |
| **Chill** | Esotico, Fitness, Terrone | Fumo | Dittatore |
| **Lercio** | Esotico, Puro, Alcol | Fitness | Cibo |
| **Cibo** | Lercio, Fumo | Esotico, Terrone, Alcol | — |
| **Fitness** | Cibo, Fumo, Chill | Ingegno, Fitness, Puro | — |
| **Terrone** | Ingegno, Fitness, Dittatore | Lercio, Cibo, Fumo | — |
| **Dittatore** | Puro, Lercio, Ingegno | Terrone, Esotico | — |
| **Esotico** | Terrone, Lercio | Puro | Fumo |

> Tutti i tipi non elencati per una data casella sono da considerarsi **neutri** (danno normale x1).

---

## 5. Terreni

I Terreni (come i Climi) si applicano istantaneamente e in modo continuativo, in tempo reale, finché restano attivi. **Ogni nuovo Terreno sovrascrive il precedente.** Un Terreno **non** sovrascrive un Clima attivo (sono indipendenti). Durata: **5 turni** dall'imposizione.

| Terreno | Effetto |
|---|---|
| **Terreno Alcol** | Diminuisce del 10% la precisione delle mosse NON di tipo Alcol usate da Pokémon che NON sono di tipo Alcol. La Confusione dura il doppio dei turni. |
| **Terreno Chill** | Aumenta di 1 stage Def e SpD dei Pokémon di tipo Chill. |
| **Terreno Calabro** | Aumenta di 1 stage Atk e SpA di tutti i Pokémon di tipo Terrone. |

---

## 6. Climi

| Clima | Effetto |
|---|---|
| **Clima Fumo** | Danneggia di 1/16 degli HP totali tutti i Pokémon NON di tipo Fumo; danneggia di 1/10 degli HP totali i Pokémon di tipo Fitness o Puro. Riduce del 10% i danni subiti dai Pokémon di tipo Fumo. |

**Ogni nuovo Clima sovrascrive il precedente.** Durata: **5 turni** dall'imposizione. Un Clima non sovrascrive un Terreno e viceversa: possono coesistere.

---

## 7. Stati (Status Conditions)

| Stato | Effetto |
|---|---|
| **Fungo** | Riduce la vita di 1/8 degli HP totali ad ogni turno. Viene contratto automaticamente da ogni Pokémon che colpisce con una mossa fisica un Pokémon già affetto da "Fungo". |
| **Confuso** | 33% di probabilità di colpirsi da soli invece di eseguire la mossa scelta. Ogni turno, prima di agire, 25% di probabilità di guarire spontaneamente. **Termina immediatamente se il Pokémon esce dal campo** (unico stato con questa regola). |
| **Frozen** | Il Pokémon non può agire (salvo mosse che lo specificano). 50% di probabilità di liberarsene ogni turno, compreso quello in cui viene assunto. |
| **Iperavvelenato** | A fine turno si perde una quantità di HP che raddoppia turno dopo turno, partendo da 1/16 degli HP totali al primo turno. |
| **Sleep** | Il Pokémon non può agire (salvo mosse che lo specificano). Al secondo turno in questo stato, 50% di probabilità di svegliarsi; al terzo turno si sveglia con certezza. |
| **Burn** | Atk dimezzato. A fine turno si perde 1/16 degli HP totali. |
| **DA** (Disturbo Alimentare) | Impedisce di recuperare HP in qualsiasi modo (mosse, abilità, strumenti) e impedisce l'uso di strumenti. **Termina se il Pokémon esce dal campo.** |

### Regole di esclusività ed persistenza

- **Burn, Sleep, Iperavvelenato e Frozen sono mutuamente esclusivi**: se un Pokémon ne ha già uno, non può contrarne un altro di questo gruppo finché non guarisce dal primo.
- Questi quattro stati **permangono anche se il Pokémon viene ritirato dal campo** (a differenza di "Confuso" e "DA", che invece terminano all'uscita).

---

## 8. Meccaniche ed Effetti Speciali Trasversali

- **Brutto Colpo**: moltiplica il danno inflitto per **x1.5** e ignora qualsiasi riduzione del danno dovuta a boost delle difese del bersaglio, Schermi, abilità o altri effetti riduttivi.
- **Mosse ad area** (All Opponents / All Pokemon): infliggono danno ridotto del **25%** su ciascun bersaglio colpito quando colpiscono più di un target. Se, per qualsiasi motivo (es. alleati già KO), una mossa ad area finisce per colpire un solo Pokémon, questo subisce danno **pieno**, non ridotto.
- **Mosse di redirect** (es. "Svenimento"): non hanno alcun effetto sulle mosse ad area (All Opponents/All Pokemon), che mantengono il target previsto dalla norma.
- **Priorità**: le mosse senza priorità specificata hanno priorità **0**. A parità di priorità, agisce prima il Pokémon più veloce.
- **Mosse di protezione certa** (es. Sorriso, Balzata): il primo utilizzo consecutivo non può fallire. Dal secondo utilizzo consecutivo in poi, la probabilità di fallimento è: **50%** (2° utilizzo), **99%** (3° utilizzo), **100%** (4° utilizzo e successivi).
- **Accuracy**: le mosse per cui non è specificata un'Accuracy hanno base **0% di probabilità di fallire**, salvo modificatori esterni (terreni, abilità, ecc.).
- **Aumenti percentuali**: sono sempre relativi al valore attuale (es. 40% base + 50% relativo = 60%; 40% base + 25% relativo = 50%).
- **Cambio target per KO**: se il bersaglio selezionato di una mossa va KO prima che questa venga eseguita, il nuovo bersaglio diventa un eventuale alleato del bersaglio originale ancora in campo. Se non c'è nessun alleato disponibile, la mossa fallisce.
- **Cambio target per switch**: se il bersaglio selezionato viene sostituito con uno switch, il Pokémon che entra al suo posto diventa il nuovo target.

---

## 9. Abilità e Mosse: Note di Lettura

Ogni mossa è definita da:
- **Tipo** (uno degli 11 tipi elencati)
- **Categoria**: Fisico / Speciale / Stato
- **Target**: Single Target / All Opponents / All Pokemon / All Allies / Self
- **BP** (Base Power, se applicabile)
- **Priorità** (se diversa da 0)
- **Accuracy** (se diversa da 100%/senza fallimento)
- Eventuali effetti aggiuntivi

---

## 10. Elenco Pokémon

### Pie [Maschio]
**HP** 90 · **Atk** 76 · **Def** 85 · **SpA** 103 · **SpD** 85 · **Spe** 81 · **TOT** 520
**Tipo**: Lercio, Chill

**Abilità — Fascino di Pie**: tutti i Pokémon Femmina in campo hanno precisione ridotta del 20% finché Pie è in campo; inoltre Pie riceve danni ridotti del 20% dai Pokémon Femmina. Pie è immune a Veleno e a Iperavvelenamento.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Peto Tossico | Lercio | Speciale | All Pokemon | 15 | Mette status "Iperavvelenato" a tutti i Pokémon circostanti |
| Sorriso | Chill | Stato | Self (Priorità +3) | — | Come Protect: prioritaria, protegge da qualsiasi attacco; impone Terreno Chill |
| Sguardo | Chill | Stato | Single Target | — | Riduce Atk e SpA del bersaglio di 1 stage |
| Attacco Fungo | Lercio | Stato | Single Target | — | Assegna status "Fungo" |

---

### Isco [Maschio]
**HP** 75 · **Atk** 100 · **Def** 110 · **SpA** 65 · **SpD** 110 · **Spe** 60 · **TOT** 520
**Tipo**: Alcol, Esotico

**Abilità — Giro di Shot**: all'ingresso in campo, mette in campo "Terreno Alcol" e assegna status "Confuso" a tutti i Pokémon in campo.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Lattina | Alcol | Fisico | Single Target | 90 | — |
| Anguria Drum | Esotico | Stato | Self | — | Dimezza gli HP rimanenti; massimizza Atk a +6 stage |
| Birra | Alcol | Stato | Self | — | Recupera tutta la vita; chi la usa diminuisce la propria precisione del 50% |
| Medusa | Esotico | Stato | Single Target | — | Confonde tutti i Pokémon in campo; riduce di 1 stage Def e SpD del bersaglio |

---

### Feb [Maschio]
**HP** 70 · **Atk** 170 · **Def** 61 · **SpA** 82 · **SpD** 56 · **Spe** 81 · **TOT** 520
**Tipo**: Fumo, Fitness

**Abilità — Scopiamo**: per ogni Pokémon Femmina in campo nel momento in cui Feb entra, aumenta di 1 stage il proprio Atk; tuttavia Feb è costretto ad attaccare quei Pokémon finché restano in campo.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Fermii | Fumo | Stato | All Opponents | — | Tutti i Pokémon che devono ancora agire tentennano per il turno; usabile solo come prima mossa del turno da parte di chi la usa |
| Contrasto Letale | Fitness | Fisico | Single Target | 150 | Recoil: -33% degli HP inflitti come danno, subito da chi attacca |
| Drift | Fumo | Stato | Self · Accuracy 50% | — | Aumenta di 6 stage la propria Velocità e imposta Clima Fumo; se fallisce, perde 1/3 degli HP |
| Rutto | Lercio | Speciale | Single Target (Priorità +1) | 60 | Riduce Atk del bersaglio di 1 stage |

---

### Giana [Maschio]
**HP** 89 · **Atk** 10 · **Def** 60 · **SpA** 161 · **SpD** 80 · **Spe** 120 · **TOT** 520
**Tipo**: Fumo, Ingegno

**Abilità — Ottimizzazione**: nel calcolo dei danni,
- quando Giana usa una mossa speciale: SpA effettiva = SpA + 0.5×Atk + 0.25×Def + 0.25×SpD
- quando subisce una mossa speciale: SpD effettiva = SpD + 0.5×Def + 0.25×Atk + 0.25×SpA
- quando subisce una mossa fisica: Def effettiva = Def + 0.5×SpD + 0.25×Atk + 0.25×SpA

Tutte le variazioni di stage o altro sono applicate **prima** di questi calcoli. Giana non può usare mosse che infliggono danno per due turni consecutivi.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Punto Chill | Chill | Stato | Single Target | — | Su alleato: +1 stage Atk/SpA/Def/SpD. Su avversario: -1 stage Atk/SpA/Def/SpD. Su se stesso: +1 Def/SpD, -1 Spe |
| Disturbo Alimentare | Cibo | Speciale | All Opponents | 70 | Mette stato "DA" su tutti i colpiti; considerata STAB per Giana |
| Pausa Siga | Fumo | Stato | Self (Priorità +3) | — | Mette Clima Fumo; Giana esce dal campo per tutto il turno lasciando spazio a un alleato, rientra prima del turno successivo. Fallisce se non ci sono alleati disponibili. Non riutilizzabile per 2 turni dopo l'uso |
| Argomentazione | Ingegno | Speciale | Single Target | 70 | Aumenta di 1 stage Def e SpD di chi la usa |

---

### Poppe [Maschio]
**HP** 80 · **Atk** 110 · **Def** 78 · **SpA** 110 · **SpD** 78 · **Spe** 64 · **TOT** 520
**Tipo**: Ingegno, Fitness

**Abilità — Richiamo di Becchio**: aumenta Def e SpD di 1 stage; se in campo c'è Becchio, aumenta SpD di un ulteriore stage.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Posing | Fitness | Stato | Self | — | +2 stage Atk e Def; -1 stage Spe |
| Corto Circuito | Ingegno | Speciale | All Pokemon | 130 | Assegna status "Burn" a tutti i colpiti |
| Attacco Squalo Limone | Esotico | Fisico | Single Target (Priorità +1) | 80 | Aumenta di 1 stage Spe di chi la usa |
| Cucciolone | Puro | Stato | Single Target | — | Abbassa di 1 stage Def, SpD e Spe del bersaglio |

---

### Andra [Maschio]
**HP** 80 · **Atk** 150 · **Def** 110 · **SpA** 45 · **SpD** 55 · **Spe** 95 · **TOT** 520
**Tipo**: Terrone, Fitness

**Abilità — Grounding**: su qualsiasi Terreno attivo, aumenta di 1 stage la Velocità. Se è attivo Clima Fumo, diminuiscono del 10% Def e Spe (gli effetti possono sovrapporsi).

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Make It Gold Rain | Terrone | Fisico | All Opponents · Accuracy 90% | 120 | Abbassa di 1 stage SpA di chi la usa |
| Shadow Boxing | Fitness | Stato | Self | — | Aumenta di 1 stage Atk e Def di chi la usa |
| Pugni Merda | Lercio | Fisico | Single Target | 90 | Diminuisce di 1 stage Def e SpD di chi la usa |
| Bomba d'Acqua | Lercio | Fisico | Single Target | 140 | Diminuisce di 1 stage Atk, SpA, Def, SpD, Spe di chi la usa |

---

### Steo [Maschio]
**HP** 65 · **Atk** 165 · **Def** 90 · **SpA** 45 · **SpD** 60 · **Spe** 95 · **TOT** 520
**Tipo**: Fitness, Dittatore

**Abilità — Camerata**: aumenta di 1 stage Atk e Spe se il compagno in campo è Maschio; diminuisce di 1 stage Atk se il compagno in campo è di tipo Terrone o Esotico. Gli effetti sono eventualmente sovrapponibili.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Pisello Storto | Fitness | Fisico | Single Target | 40 | Applica sempre l'effetto "Brutto Colpo" |
| Viva il Duce | Dittatore | Fisico | Single Target | 40 base | +20 BP per ogni altro Pokémon Maschio nella propria squadra |
| Arhhhh | Dittatore | Speciale | Single Target | 65 | — |
| Squarta Neri | Dittatore | Fisico | Single Target | 30 | Danno triplo ai Pokémon di tipo Esotico e Terrone |

---

### Lalla [Femmina]
**HP** 100 · **Atk** 88 · **Def** 110 · **SpA** 75 · **SpD** 86 · **Spe** 61 · **TOT** 520
**Tipo**: Puro, Terrone

**Abilità — Infermiera**: cura tutti i problemi di stato a tutti gli alleati appena Lalla entra in campo; per ogni turno in cui Lalla resta in campo, i danni subiti dagli alleati sono ridotti del 15%.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Accudire | Puro | Stato | All Allies | — | Recupera il 20% degli HP agli alleati in campo (se stessa compresa) e cura i loro problemi di stato |
| Baffetto | Terrone | Stato | All Pokemon | — | Chi la usa assume sesso "Maschio"; riduce di 1 stage Atk di tutti i Maschi avversari in campo |
| Urlo Terrone | Terrone | Speciale | Single Target | 90 | — |
| Reginetta | Puro | Stato | All Allies | — | Aumenta di 1 stage Atk, SpA, SpD e Def di tutte le Femmine della propria squadra in campo (se stessa compresa) |

---

### Ksenija [Femmina]
**HP** 90 · **Atk** 90 · **Def** 115 · **SpA** 80 · **SpD** 115 · **Spe** 30 · **TOT** 520
**Tipo**: Puro, Esotico

**Abilità — Poliglotta**: appena entra in campo, mostra a schermo tutte le mosse dei Pokémon avversari.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Rutto | Lercio | Speciale | Single Target (Priorità +1) | 60 | Riduce Atk del bersaglio di 1 stage |
| Svenimento | Puro | Stato | Self | — | Perde metà HP; per 3 turni tutti gli avversari possono colpire solo chi ha usato la mossa |
| Calcio Balcanico | Esotico | Fisico | Single Target | 110 | 30% di probabilità di ridurre Def del bersaglio di 1 stage |
| Riposino | Puro | Stato | Self | — | Recupera tutti gli HP; chi la usa assume stato "Sleep" |

---

### Franca [Femmina]
**HP** 70 · **Atk** 80 · **Def** 80 · **SpA** 130 · **SpD** 80 · **Spe** 80 · **TOT** 520
**Tipo**: Puro, Cibo

**Abilità — Discussione**: all'ingresso in campo, il Pokémon nello slot di fronte assume status "Confuso" e subisce una diminuzione di 1 stage a Def e SpD.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Spara Sushi | Cibo | Speciale | Single Target | 30 | Colpisce da 2 a 5 volte, probabilità uniforme |
| Prenotata | Puro | Stato | Single Target | — | Costringe il bersaglio a ripetere per 3 turni una mossa scelta da chi usa Prenotata |
| Squarta Neri | Dittatore | Fisico | Single Target | 30 | Danno triplo ai Pokémon di tipo Esotico e Terrone |
| Pollo Arrosto | Cibo | Stato | Self | — | Recupera tutti gli HP |

---

### Fera [Femmina]
**HP** 70 · **Atk** 51 · **Def** 100 · **SpA** 130 · **SpD** 100 · **Spe** 69 · **TOT** 520
**Tipo**: Terrone, Puro

**Abilità — Gran Voce**: potenzia le mosse di tipo "Suono" del 50%.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Cannata!!! | Terrone | Speciale | Single Target · Accuracy 80% | 50 | Mossa "Suono". Se il bersaglio ha abilità "Scopiamo", diventa mossa OHKO che ignora qualsiasi protezione e ottiene Priorità +4 |
| Altini Marito | Puro | Stato | Single Target | — | Se il bersaglio è Altini: +1 stage Atk/SpA/Def/SpD. Se è Maschio e non è Altini: -1 stage Atk/SpA/Def/SpD. Su Femmine, fallisce sempre |
| Croste | Terrone | Speciale | Single Target | 60 | Assegna status "Frozen"; impedisce l'uscita dal campo finché Fera è in campo |
| Nuvole | Puro | Speciale | Single Target | 80 | Mossa "Suono"; assegna status "Confuso" |

---

### Altini [Maschio]
**HP** 65 · **Atk** 132 · **Def** 52 · **SpA** 132 · **SpD** 54 · **Spe** 85 · **TOT** 520
**Tipo**: Puro, Dittatore

**Abilità — Goblin**: tutte le mosse usate sono considerate STAB.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Bomba Pesto | Cibo | Speciale | Single Target | 100 | — |
| Balzata | Puro | Stato | Self (Priorità +3) | — | Come Protect |
| Squarta Neri | Dittatore | Fisico | Single Target | 30 | Danno triplo ai Pokémon di tipo Esotico e Terrone |
| Low Cortisol | Chill | Stato | Self | — | -1 stage Spe; +1 stage SpD e Def |

---

### Matte Iliev [Maschio]
**HP** 90 · **Atk** 120 · **Def** 90 · **SpA** 60 · **SpD** 80 · **Spe** 80 · **TOT** 520
**Tipo**: Cibo, Fitness

**Abilità — Baffo**: aumenta di 1 stage Def e Atk se l'alleato in campo è Maschio.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Pescare | Cibo | Fisico | Single Target | 70 | Il bersaglio non può più lasciare il campo |
| Kart | Fitness | Stato | All Allies | — | Aumenta di 1 stage Spe a sé stesso e agli alleati in campo |
| Bibitone | Fitness | Stato | Self | — | Recupera metà HP; +1 stage Def e Atk |
| All In | Lercio | Fisico | Single Target · Accuracy 50% | — | Se va a segno, manda KO il bersaglio; se fallisce, chi la usa va KO |

---

### Ressa [Maschio]
**HP** 70 · **Atk** 54 · **Def** 60 · **SpA** 120 · **SpD** 140 · **Spe** 56 · **TOT** 500
**Tipo**: Fumo, Alcol

**Abilità — Consegna delle Verifiche**: appena Ressa entra in campo, mette in campo Clima Fumo.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Alla Lavagna! | Ingegno | Stato | All Opponents · Accuracy 75% | — | Tutti gli avversari devono ripetere la mossa appena usata per 2 turni |
| Whisky | Alcol | Stato | Single Target | — | Il bersaglio assume status "Confuso" e diventa di tipo Alcol; chi la usa recupera il 15% degli HP totali |
| Mignolo Appuntito | Lercio | Fisico | Single Target | 40 | Dimezza Atk del bersaglio |
| Signorina D'Aloia | Ingegno | Speciale | All Pokemon | 50 | Danno triplicato contro Pokémon Femmina |

---

### Becchio [Femmina]
**HP** 70 · **Atk** 55 · **Def** 70 · **SpA** 130 · **SpD** 110 · **Spe** 65 · **TOT** 500
**Tipo**: Dittatore, Ingegno

**Abilità — Poppe A Casa!**: se in campo c'è Poppe, gli riduce di 1 stage Atk e SpA ma gli aumenta di 1 stage Def e SpD. Se Poppe non è in campo, riduce di 1 stage Def dei Pokémon avversari in campo.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Esame a Sorpresa | Ingegno | Speciale | All Pokemon | 40 | Tutti i Pokémon di tipo Ingegno in campo subiscono -1 stage a Spe, SpA, SpD |
| Gender Pay Gap | Ingegno | Stato | All Pokemon | — | Tutti i Maschi in campo: -1 stage Atk/SpA. Tutte le Femmine in campo: +1 stage Atk/SpA |
| Subito a Casa! | Dittatore | Stato | Single Target | — | Forza lo switch del bersaglio; fallisce se non può farlo o l'avversario non ha altri Pokémon |
| Insulto Gratuito | Dittatore | Speciale | Single Target | 80 | — |

---

### Salvo [Maschio]
**HP** 75 · **Atk** 130 · **Def** 130 · **SpA** 85 · **SpD** 60 · **Spe** 40 · **TOT** 520
**Tipo**: Cibo, Alcol

**Abilità — Doppiatore**: i cambi di stage del proprio alleato hanno il 60% di probabilità di essere raddoppiati, mentre Salvo è in campo.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Bomba 'e Maradona | Terrone | Fisico | Single Target | 90 | Considerata sempre STAB, anche quando non lo sarebbe |
| Step Back | Fitness | Stato | Self | — | Salvo perde il tipo Cibo e assume il tipo Fitness; +2 stage Spe |
| Pizza Time | Cibo | Stato | Self | — | Recupera metà degli HP totali |
| Whisky | Alcol | Stato | Single Target | — | Il bersaglio assume status "Confuso" e diventa di tipo Alcol |

---

### Rebi [Femmina]
**HP** 75 · **Atk** 90 · **Def** 90 · **SpA** 95 · **SpD** 90 · **Spe** 80 · **TOT** 520
**Tipo**: Puro, Terrone

**Abilità — Innocenza**: finché Rebi è in campo, impedisce nuove modifiche agli stage delle statistiche di tutti i Pokémon in campo. Non blocca cambiamenti alle statistiche non dovuti a stage. Le variazioni di stage ottenute prima dell'ingresso di Rebi restano invariate.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Bang! | Puro | Fisico | Single Target | 80 | Non può essere evitata in nessun modo |
| Briscola Gigante | Terrone | Stato | All Pokemon | — | Mette Terreno Calabro in campo |
| Rifiuto | Puro | Stato | Self (Priorità +3) | — | Protegge da qualsiasi attacco di Pokémon Maschi; chi attacca in questo turno chi ha usato Rifiuto subisce -1 stage Atk |
| Depilazione Laser | Puro | Speciale | Single Target | 120 | Diminuisce di 1 stage Def e SpD di chi la usa |

---

### Mimmuzzo [Maschio]
**HP** 130 · **Atk** 120 · **Def** 130 · **SpA** 35 · **SpD** 65 · **Spe** 20 · **TOT** 500
**Tipo**: Cibo, Terrone

**Abilità — Soppressata**: appena entra in campo, mette Terreno Calabro.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Cinematografo | Esotico | Stato | All Pokemon | — | Mette status "Confuso" a tutti in campo, tranne a chi usa la mossa |
| Ringraziando Iddio | Terrone | Stato | All Allies | — | Riduce del 20% i danni subiti dalla squadra per 3 turni |
| Cuscino Peloso | Terrone | Stato | Single Target | — | Addormenta il bersaglio, ma lo cura da ogni condizione/status e gli restituisce tutti gli HP |
| Colpo di Salame | Terrone | Fisico | Single Target | 80 | — |

---

### Sara [Femmina]
**HP** 85 · **Atk** 70 · **Def** 110 · **SpA** 80 · **SpD** 105 · **Spe** 70 · **TOT** 520
**Tipo**: Chill, Fumo

**Abilità — Divano e Canna**: all'ingresso in campo impone Terreno Chill e Clima Fumo; Sara subisce danni ridotti del 25% dalle mosse di tipo Terrone.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Morso di Zack | Lercio | Fisico | Single Target | 40 | Mette status "Iperavvelenato" sul bersaglio |
| Scenerata | Fumo | Speciale | Single Target | 75 | Mette status "Burn" sul bersaglio |
| Ordine su Glovo | Cibo | Stato | Self (Priorità -6) | — | +3 stage Def, SpD; recupera 1/3 degli HP totali |
| Serie TV | Chill | Speciale | All Opponents | 20 | Diminuisce di 1 stage Spe dei colpiti |

---

### Elena [Femmina]
**HP** 75 · **Atk** 75 · **Def** 75 · **SpA** 100 · **SpD** 95 · **Spe** 100 · **TOT** 520
**Tipo**: Chill, Puro

**Abilità — Tolleranza**: finché Elena è in campo, tutti i Pokémon di tipo Esotico e Terrone in campo hanno +2 stage Def e SpD.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Riposino | Puro | Stato | Self | — | Recupera tutti gli HP; chi la usa assume stato "Sleep" |
| Colpo di Padel | Fitness | Speciale | Single Target | 40 | Colpisce 2-4 volte, probabilità uniforme |
| Heets | Fumo | Speciale | Single Target | 80 | Mette status "Confuso"; sempre considerata STAB |
| Grattini | Puro | Stato | Single Target | — | +1 stage Def e SpD del bersaglio; se il bersaglio è Steo, l'aumento è di un ulteriore stage |

---

### Brillo [Maschio]
**HP** 70 · **Atk** 75 · **Def** 75 · **SpA** 120 · **SpD** 110 · **Spe** 70 · **TOT** 520
**Tipo**: Ingegno

**Abilità — Passato Oscuro**: con Clima Fumo e/o Terreno Alcol attivi, +1 stage Spe e -15% danni subiti (gli effetti non si cumulano tra loro).

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Scoordinato | Fitness | Fisico | Single Target | 90 | Chi la usa assume status "Confuso" |
| Fluidodinamica | Ingegno | Speciale | Single Target | 90 | Danno doppio ai Pokémon di tipo Alcol |
| Lavoro di Gruppo | Ingegno | Stato | All Allies | — | +1 stage Spe, SpD e SpA degli alleati di tipo Ingegno |
| Balzata | Puro | Stato | Self (Priorità +3) | — | Come Protect |

---

### Murru [Maschio]
**HP** 80 · **Atk** 95 · **Def** 95 · **SpA** 70 · **SpD** 70 · **Spe** 90 · **TOT** 500
**Tipo**: Esotico

**Abilità — Gluten Free**: riduce del 25% i danni subiti da mosse di tipo Alcol e Cibo.

| Mossa | Tipo | Cat. | Target | BP | Effetto |
|---|---|---|---|---|---|
| Insulto Maschilista | Esotico | Fisico | Single Target | 80 | Danno dimezzato se il bersaglio è Maschio |
| Scoordinato | Fitness | Fisico | Single Target | 90 | Chi la usa assume status "Confuso" |
| Scambio Geografico | Ingegno | Stato | All Allies (Priorità +2) | — | Scambia posto con l'alleato in campo, invertendo i target previsti dalle mosse avversarie |
| Puttana! | Esotico | Stato | Single Target | — | Effetto solo su Femmine (altrimenti fallisce): -1 stage Def/SpD, +1 stage Atk/SpA/Spe |

---

## 11. Riepilogo Rapido — Tabella Pokémon

| Nome | Sesso | Tipo | HP | Atk | Def | SpA | SpD | Spe | TOT |
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

## 12. Glossario Regole Generali (Riferimento Rapido)

- Qualsiasi effetto di Terreni o Climi è applicato in modo istantaneo e continuativo, in tempo reale, finché il Terreno o Clima è attivo.
- Ogni nuovo Terreno sovrascrive il precedente; stessa cosa per i Climi. Terreni e Climi non si sovrascrivono a vicenda e possono coesistere. Durata: 5 turni.
- Le mosse ad area hanno danno ridotto del 25% per bersaglio quando colpiscono più di un target; se ne colpiscono uno solo, danno pieno.
- Le mosse di redirect non influenzano le mosse ad area.
- Le mosse senza priorità indicata hanno priorità 0; a parità di priorità agisce prima chi è più veloce.
- Le mosse di protezione certa falliscono con probabilità crescente ad usi consecutivi: 0% (1°), 50% (2°), 99% (3°), 100% (4°+).
- Le mosse senza Accuracy indicata hanno 0% di probabilità base di fallire, salvo modificatori esterni.
- Gli aumenti percentuali sono relativi al valore attuale, non assoluti.
- Se il bersaglio di una mossa viene sostituito con uno switch, il nuovo Pokémon diventa il nuovo target.
- Se il bersaglio va KO prima dell'esecuzione della mossa, il nuovo target è un alleato ancora in campo; se non ce ne sono, la mossa fallisce.
- All'uscita dal campo: si azzerano tutti gli stage e i contatori temporali (inclusi quelli di mosse a turni consecutivi). Gli status persistono, tranne "Confuso" e "DA", che invece terminano.
- Burn, Sleep, Iperavvelenato e Frozen sono mutuamente esclusivi tra loro e persistono anche fuori dal campo.
- "Brutto Colpo": danno x1.5, ignora riduzioni da difese, Schermi, abilità o altro.