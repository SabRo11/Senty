# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.2.0`  
**Demo live:** https://senty-sigma.vercel.app

## Stato corrente

La `v0.1.0` resta la baseline di partenza validata. La `v0.2.0` introduce il primo esperimento UI successivo alla baseline: una fascia di social proof a scorrimento continuo immediatamente sotto la hero.

### v0.2.0 — Client trust loop

- wording: **“Scelto da brand che vogliono capire meglio ciò che le persone sentono.”**;
- brand iniziali: Leroy Merlin, Eataly, Dior, Lindt;
- loghi visualizzati in monocromia nera;
- loop continuo e seamless, con velocità volutamente lenta;
- pausa del movimento in caso di `prefers-reduced-motion`;
- modulo inserito subito sotto la hero per aggiungere prova sociale prima della spiegazione funzionale.

## Direzione visiva

- font principale: **Manrope**;
- font di identità/accento: **MuseoModerno**;
- colore primario: **Blue Orchid `#2B3DFA`** e relativa scala tonale;
- UI ispirata alla dashboard Senty: card leggere, bordi sottili, ampi spazi bianchi, dati leggibili;
- responsive come requisito strutturale;
- motion usata per spiegare o rafforzare il racconto, non come decorazione.

## Stack e strumenti

- React + TypeScript;
- Vite;
- CSS nativo;
- GitHub: repository, cronologia e versioni;
- Vercel: deploy automatico della demo live dal branch `main`.

## Flusso di lavoro

- `main` rappresenta la versione di riferimento validata;
- ogni modifica approvata viene registrata in GitHub e pubblicata automaticamente su Vercel;
- le iterazioni di design vengono identificate come `SENTY-LP-vX.Y.Z`;
- il link della demo live viene riportato dopo ogni modifica validata.

## Versioning

- `SENTY-LP-v0.1.0` — baseline iniziale;
- `SENTY-LP-v0.2.0` — client trust loop sotto la hero;
- **PATCH** — correzioni e micro-affinamenti;
- **MINOR** — nuove sezioni o revisioni significative di design/contenuto;
- `1.0.0` — prima release completa.

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Le decisioni di identità sono documentate in `docs/SENTY_LP_BASELINE.md`; le iterazioni successive in `docs/ITERATIONS.md`.
