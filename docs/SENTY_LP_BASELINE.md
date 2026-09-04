# SENTY-LP — Baseline v0.1.0

## Stato

Versione di riferimento: `SENTY-LP-v0.1.0`  
Demo: https://senty-sigma.vercel.app  
Repository: `SabRo11/Senty`  
Branch di deploy: `main`

## Font

- **Manrope** — font principale per headline, body copy, navigazione e UI della landing.
- **MuseoModerno** — font secondario, riservato a micro-accenti, callout e dettagli di identità. Non va usato come font di lettura principale.
- **Roboto** — resta il riferimento della dashboard di prodotto, ma non viene usato come carattere principale della landing.

## Colore

Colore base: **Blue Orchid `#2B3DFA`**.

Scala di lavoro della landing:
- `#D2D6F8` — Blue Orchid 80 / superfici molto chiare;
- `#A6AFF5` — Blue Orchid 60;
- `#7B87F2` — Blue Orchid 40;
- `#5262F9` — Blue Orchid 20;
- `#2B3DFA` — Blue Orchid base;
- `#171D70` — tono scuro per fondi e profondità;
- `#0D103A` — navy profondo.

Colori semantici derivati dalla dashboard:
- verde `#65DC45` — positivo;
- giallo `#FFD51E` — neutro;
- arancio/rosso `#FF5536` — negativo.

## Asset e riferimenti validati

- logo ufficiale Senty fornito in formato SVG;
- dashboard Senty Analytics come riferimento per densità, card, grafici e gerarchie UI;
- trattamento cromatico Blue Orchid come riferimento per la scala tonale;
- MuseoModerno come segno tipografico di identità;
- primo prototipo HTML come riferimento per l'architettura narrativa della landing.

## Architettura v0.1.0

1. Hero — promessa + trasformazione del segnale in insight.
2. Dal rumore alla chiarezza — Raccogli → Analizza → Comprendi.
3. Prodotto — dashboard illustrativa coerente con Senty Analytics.
4. Principi — Raccogli / Visualizza / Semplifica.
5. Footer — payoff e versione.

## Regole operative

- ogni sezione deve aggiungere una nuova informazione;
- evitare ridondanza e sovraccarico SaaS;
- motion funzionale, non decorativa;
- mobile e responsive vanno considerati nella struttura, non come adattamento finale;
- dopo ogni modifica validata aggiornare versione/metadati/documentazione quando necessario e verificare il deploy Vercel.
