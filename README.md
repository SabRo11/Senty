# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.3.0`  
**Demo live:** https://senty-sigma.vercel.app

## Stato corrente

La `v0.3.0` è una revisione strutturale della landing, costruita a partire dalla baseline `v0.1.0` e dal client trust loop `v0.2.0`.

### Struttura v0.3.0

1. hero testuale senza menu iniziale, con value proposition e form demo;
2. navigazione floating che compare solo dopo il superamento della hero;
3. social proof con client logo loop;
4. storytelling sticky in 4 momenti: Ascolta → Riunisci → Comprendi → Attiva;
5. modulo di business value: cosa cambia / perché / dove agire;
6. griglia finale di sintesi delle capacità;
7. footer con CTA.

## Direzione motion

- motion semplice, intenzionale e leggibile;
- sticky storytelling per collegare copy e visual;
- transizioni match-cut/crossfade tra i quattro momenti;
- micro-animazioni solo dove aiutano a capire un flusso;
- `prefers-reduced-motion` rispettato.

## Direzione visiva

- font principale: **Manrope**;
- accenti: **MuseoModerno**;
- colore primario: **Blue Orchid `#2B3DFA`**;
- alternanza tra fotografia lifestyle e UI/infografica;
- card e gerarchie derivate da Senty Analytics.

## Asset temporanei

Le due immagini fotografiche della `v0.3.0` sono reference temporanee da Unsplash usate esclusivamente per validare art direction e ritmo narrativo. Andranno sostituite con asset proprietari/licenziati definitivi prima della release.

## Stack

React + TypeScript + Vite + CSS nativo. GitHub gestisce codice/versioni, Vercel il deploy automatico di `main`.

Le decisioni di identità sono documentate in `docs/SENTY_LP_BASELINE.md`; le iterazioni successive in `docs/ITERATIONS.md`.
