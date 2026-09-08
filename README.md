# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.5.0`  
**Demo live:** https://senty-sigma.vercel.app

## Stato corrente

La `v0.5.0` è un'iterazione focalizzata sui primi tre moduli della landing, senza modificare il resto della struttura validata in `v0.4.0`.

### Cosa cambia in v0.5.0

1. hero full-color costruita sulla palette Senty: Blue Orchid, toni blu e navy;
2. hero più compatta, senza immagine, con logo bianco + Powered by Havas e form demo;
3. partner loop mantenuto, con headline più contenuta e ulteriore bilanciamento ottico del logo Dior;
4. headline Metodo resa volutamente dominante: “Dal feedback all’azione, senza perdere il contesto.”;
5. modulo Metodo ricostruito con interazione scroll-driven ispirata alla reference PayPal: voci Raccogli / Analizza / Comprendi / Restituisci a sinistra, visual a destra;
6. a ogni step cambiano insieme stato attivo, descrizione e visual;
7. competitor comparison mantenuta dentro Comprendi;
8. fallback responsive: su tablet/mobile i quattro step diventano una sequenza verticale leggibile.

## UI system

- font principale: **Manrope**;
- MuseoModerno solo per micro-accenti;
- Blue Orchid `#2B3DFA` e scala tonale Senty;
- navy `#171D70` / `#0D103A`;
- corpi testo controllati e gerarchie più selettive;
- radius generosi, card morbide e bordi sottili;
- motion concentrato sul racconto del prodotto.

## Stack

React + TypeScript + Vite + CSS nativo. GitHub gestisce codice/versioni, Vercel il deploy automatico di `main`.

Decisioni e iterazioni sono documentate in `docs/SENTY_LP_BASELINE.md`, `docs/ITERATIONS.md`, `docs/V040_NOTES.md` e `docs/V050_NOTES.md`.
