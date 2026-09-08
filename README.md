# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.4.0`  
**Demo live:** https://senty-sigma.vercel.app

## Stato corrente

La `v0.4.0` consolida l'architettura narrativa della `v0.3.0` e riallinea tipografia, shape language, colori e motion alle linee guida reali della dashboard Senty.

### Struttura v0.4.0

1. hero più compatta, solo testuale, con form demo;
2. floating navigation dopo la hero: Metodo / Insight / Funzionalità / Demo;
3. partner loop con headline “Scelto da brand che ascoltano davvero le persone.”;
4. storytelling sticky/parallax in 4 momenti: Raccogli → Analizza → Comprendi → Restituisci;
5. confronto competitor integrato nel momento Comprendi;
6. modulo Insight dinamico: cosa cambia / cosa lo causa / dove agire;
7. capability grid finale con shape più arrotondate;
8. footer con seconda CTA.

## UI system

- font principale: **Manrope**;
- accenti: **MuseoModerno** solo per micro-elementi;
- Blue Orchid `#2B3DFA` e relativa scala tonale;
- navy `#171D70` / `#0D103A`;
- corpi testo ridotti rispetto alla v0.3.0;
- radius generosi, coerenti con la dashboard;
- bordi sottili e ombre leggere.

## Motion

- hero quasi statica;
- menu reveal dopo il superamento del visore;
- partner marquee lento;
- sticky storytelling con cambio visual e micro-parallax;
- modulo Insight scroll-driven con progressiva messa a fuoco dei contenuti;
- `prefers-reduced-motion` rispettato.

## Asset temporanei

Le fotografie lifestyle restano reference temporanee usate per validare art direction e ritmo narrativo. Andranno sostituite con asset definitivi prima della release.

## Stack

React + TypeScript + Vite + CSS nativo. GitHub gestisce codice/versioni, Vercel il deploy automatico di `main`.

Decisioni e iterazioni sono documentate in `docs/SENTY_LP_BASELINE.md`, `docs/ITERATIONS.md` e `docs/V040_NOTES.md`.
