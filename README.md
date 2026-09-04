# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.1.0`  
**Demo live:** https://senty-sigma.vercel.app

## Baseline v0.1.0

La `v0.1.0` è la base di partenza validata per le successive iterazioni di contenuto e design. Riprende l'architettura narrativa del primo prototipo HTML e la riallinea all'identità reale del prodotto.

### Direzione visiva

- font principale: **Manrope**;
- font di identità/accento: **MuseoModerno**;
- colore primario: **Blue Orchid `#2B3DFA`** e relativa scala tonale;
- UI ispirata alla dashboard Senty: card leggere, bordi sottili, ampi spazi bianchi, dati leggibili;
- responsive come requisito strutturale;
- motion usata per spiegare il flusso, non come decorazione.

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
- **PATCH** (`0.1.1`) — correzioni e micro-affinamenti;
- **MINOR** (`0.2.0`) — nuove sezioni o revisioni significative di design/contenuto;
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

Le decisioni di identità e gli asset di riferimento sono documentati in `docs/SENTY_LP_BASELINE.md`.
