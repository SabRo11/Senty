# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.7.3`  
**Demo live:** https://senty-sigma.vercel.app

## Stato corrente

La `v0.7.3` consolida hero e Metodo sulla direzione approvata, usando i visual forniti come source of truth e riducendo al minimo le reinterpretazioni della UI.

### Cosa cambia in v0.7.3

1. hero senza fotografia, con contenuti epigrafati al centro dentro un box più ampio;
2. headline scandita su tre righe: “Capisci / cosa sentono le persone. / E cosa farne.”;
3. gradiente confinato nel box hero, con linee geometriche leggere per dare profondità senza creare rumore;
4. Metodo mantiene tipografia bold e doppia interazione scroll + click;
5. Raccogli / Analizza / Comprendi / Confronta / Restituisci usano, nell’ordine, i cinque visual approvati e forniti;
6. eliminati dal Metodo i visual costruiti nelle iterazioni precedenti;
7. aggiunte microinterazioni leggere: ingresso con settle, glint controllato e micro-zoom hover sul visual attivo;
8. comportamento responsive e reduced-motion preservati.

## UI system

- font principale: **Manrope**;
- MuseoModerno solo per micro-accenti;
- Blue Orchid `#2B3DFA` e scala tonale Senty;
- navy `#171D70` / `#0D103A`;
- radius generosi e card morbide;
- visual fotografici/UI usati come elementi narrativi dominanti;
- motion discreto, subordinato alla leggibilità.

## Stack

React + TypeScript + Vite + CSS nativo. GitHub gestisce codice/versioni, Vercel il deploy automatico di `main`.

Decisioni e iterazioni sono documentate in `docs/ITERATIONS.md` e nei file di baseline/versione presenti in `docs/`.
