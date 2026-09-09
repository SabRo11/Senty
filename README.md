# Senty_LP

Landing page e ambiente di prototipazione front-end di Senty.

**Versione corrente:** `SENTY-LP-v0.7.1`  
**Demo live:** https://senty-sigma.vercel.app

## Stato corrente

La `v0.7.1` chiude il rework dei primi moduli della landing: hero e Metodo sono stati riallineati alle reference condivise, mantenendo il sistema visuale Senty e la doppia interazione scroll/click.

### Cosa cambia in v0.7.1

1. hero su pagina bianca, con gradiente contenuto interamente nel box rounded;
2. hero a due colonne: copy in negativo + fotografia lifestyle con focus smartphone e due UI sintetiche;
3. headline “Ascolta tutto. Capisci cosa conta.” mantiene il reveal on-scroll validato;
4. typography del Metodo riportata a una scala più bold e leggibile;
5. voci Raccogli / Analizza / Comprendi / Confronta / Restituisci cliccabili oltre che scroll-driven;
6. Raccogli ricostruisce in HTML responsive la composizione fotografica + recensioni multicanale approvata;
7. Analizza adotta una bentobox più bold, ispirata alla dashboard reference e tradotta nella palette Senty;
8. Comprendi usa il crop fotografico sul gesto/tablet e mantiene la UI di pattern/driver in sovraimpressione;
9. Confronta mantiene il grafico wide ma aumenta gerarchie, spessori e benchmark;
10. Restituisci forza una singola fotografia di background senza tiling, con card operativa Senty AI in overlay.

## UI system

- font principale: **Manrope**;
- MuseoModerno solo per micro-accenti;
- Blue Orchid `#2B3DFA` e scala tonale Senty;
- navy `#171D70` / `#0D103A`;
- radius generosi e card morbide;
- fotografia fresca, con enfasi su gesti, device e props più che sui volti;
- accenti lime, aqua, purple e orange come layer pop;
- motion concentrato su transizioni narrative e dati.

## Stack

React + TypeScript + Vite + CSS nativo. GitHub gestisce codice/versioni, Vercel il deploy automatico di `main`.

Decisioni e iterazioni sono documentate in `docs/ITERATIONS.md` e nei file di baseline/versione presenti in `docs/`.
