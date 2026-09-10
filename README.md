# Senty Landing Page

Landing page e ambiente di prototipazione front-end di **Senty**, prodotto di sentiment intelligence sviluppato per trasformare recensioni, commenti e feedback in insight leggibili e azionabili.

Questo README è pensato come documento di handoff: una persona che non conosce il progetto deve poter capire rapidamente cosa contiene il repository, come avviarlo, dove intervenire, come sono gestiti gli asset, quali convenzioni rispettare e come funziona il deploy.

## Stato del progetto

- Versione corrente: `0.7.6`
- Stack: React + TypeScript + Vite + CSS nativo
- Branch principale: `main`
- Deploy principale: Vercel
- Demo production: https://senty-sigma.vercel.app

La versione corrente consolida il layout hero, la sezione Metodo, il comportamento responsive e la gestione dei visual tramite asset presenti in `public` con fallback nativi quando l'asset non è disponibile.

## Obiettivo della landing

La pagina racconta Senty attraverso cinque passaggi principali:

1. **Raccogli** — centralizzazione di recensioni, commenti, survey e feedback.
2. **Analizza** — classificazione, sentiment e pattern tramite AI.
3. **Comprendi** — lettura di driver, temi e segnali emergenti.
4. **Confronta** — benchmark temporali e competitivi.
5. **Restituisci** — sintesi e priorità operative da condividere con i team.

La landing non è soltanto una pagina marketing: viene usata anche come ambiente di prototipazione visuale e di validazione progressiva delle scelte di UI, contenuto e responsive.

## Struttura del repository

I file principali sono:

- [`./src/App.tsx`](./src/App.tsx) — struttura React della landing, componenti, contenuti principali e logiche di interazione.
- [`./src/main.tsx`](./src/main.tsx) — bootstrap React e import dei fogli di stile.
- [`./src/styles.css`](./src/styles.css) — stili di base storici del progetto.
- [`./src/v05.css`](./src/v05.css), [`./src/v06.css`](./src/v06.css), [`./src/v07.css`](./src/v07.css) — iterazioni precedenti ancora caricate per compatibilità.
- [`./src/v071.css`](./src/v071.css), [`./src/v072.css`](./src/v072.css), [`./src/v073.css`](./src/v073.css), [`./src/v074.css`](./src/v074.css), [`./src/v075.css`](./src/v075.css) — layer incrementali delle versioni intermedie.
- [`./src/v076.css`](./src/v076.css) — override e consolidamenti della versione `0.7.6`.
- [`./src/v076-assets.css`](./src/v076-assets.css) — styling generico dei visual caricati da `public`, senza path specifici hardcoded.
- [`./src/client-logos.css`](./src/client-logos.css) — gestione visuale della fascia loghi cliente.
- [`./public/`](./public/) — asset statici serviti direttamente da Vite.
- [`./docs/ITERATIONS.md`](./docs/ITERATIONS.md) — storico delle principali iterazioni.
- [`./docs/SENTY_LP_BASELINE.md`](./docs/SENTY_LP_BASELINE.md) — baseline progettuale.
- [`./package.json`](./package.json) — dipendenze, script e versione applicativa.
- [`./vite.config.ts`](./vite.config.ts) — configurazione Vite.
- [`./vercel.json`](./vercel.json) — configurazione Vercel.

## Requisiti locali

Per lavorare sul progetto servono:

- Node.js 18 o superiore;
- npm;
- accesso al repository GitHub;
- accesso al progetto Vercel solo se si devono verificare o gestire i deploy.

Verifica l'ambiente con:

```bash
node -v
npm -v
```

## Installazione

Clonare il repository e installare le dipendenze:

```bash
git clone <repository-url>
cd Senty
npm install
```

Non inserire nel codice URL assoluti verso il repository. Il repository può cambiare owner, dominio o ambiente: i riferimenti interni devono rimanere relativi.

## Avvio locale

Avviare il server di sviluppo:

```bash
npm run dev
```

Vite mostrerà nel terminale l'indirizzo locale da aprire nel browser.

Per creare una build production:

```bash
npm run build
```

Per verificare localmente la build generata:

```bash
npm run preview
```

## Gestione degli asset

Gli asset statici sono contenuti in [`./public/`](./public/).

Per la sezione Metodo vale una convenzione nominale precisa: il nome del file corrisponde al nome della fase in minuscolo.

| Fase | File atteso |
| --- | --- |
| Raccogli | `public/raccogli.jpg` |
| Analizza | `public/analizza.jpg` |
| Comprendi | `public/comprendi.jpg` |
| Confronta | `public/confronta.jpg` |
| Restituisci | `public/restituisci.jpg` |

Nella versione `0.7.6` risultano presenti gli asset `raccogli.jpg`, `comprendi.jpg` e `restituisci.jpg`. Quando un asset non esiste, il componente usa il fallback UI già previsto in [`./src/App.tsx`](./src/App.tsx).

### Regola obbligatoria per URL e asset

Non devono essere introdotti path assoluti applicativi come:

```tsx
<img src="/raccogli.jpg" />
```

né riferimenti legati a un dominio specifico, a un ambiente o a un sottopath fisso.

Usare invece il base path fornito da Vite:

```tsx
const assetSrc = `${import.meta.env.BASE_URL}${filename}`
```

Esempio generico:

```tsx
const filename = `${label.toLocaleLowerCase('it-IT')}.jpg`
const assetSrc = `${import.meta.env.BASE_URL}${filename}`
```

La stessa regola vale per logo, immagini, eventuali file JSON e altri asset statici.

Questo rende il progetto compatibile con:

- dominio root su Vercel;
- sottocartelle;
- preview deploy;
- GitHub Pages;
- eventuali ambienti futuri.

## Gestione dei link interni

I link di navigazione della landing devono essere relativi alla pagina e basati su anchor, per esempio:

```tsx
<a href="#method">Metodo</a>
<a href="#insight">Insight</a>
<a href="#features">Funzionalità</a>
```

Non devono puntare al dominio production.

Per file e documentazione interna usare sempre path relativi al repository, per esempio:

```text
./src/App.tsx
./public/raccogli.jpg
./docs/ITERATIONS.md
```

Per collegamenti esterni realmente esterni al progetto è invece ammesso un URL assoluto, ma deve essere dichiarato esplicitamente e non duplicato inutilmente in più punti del codice.

## Sezione Metodo

Il comportamento principale è gestito in [`./src/App.tsx`](./src/App.tsx).

Le cinque fasi sono definite nell'array `moments`. Lo stato `activeMoment` controlla quale fase è attiva.

Su desktop:

- la parte testuale rimane nello sticky layout;
- i trigger verticali aggiornano la fase durante lo scroll;
- le label sono cliccabili;
- il visual cambia mantenendo un unico canvas.

Su mobile:

- le fasi vengono mostrate in sequenza;
- ogni step include testo e relativo visual;
- i visual non devono essere croppati in modo da perdere porzioni significative di UI.

## Strategia dei visual del Metodo

La logica corrente prova prima a caricare un asset statico dalla cartella [`./public/`](./public/) usando il nome della fase.

Se il file esiste:

- viene renderizzata l'immagine;
- il wrapper applica `overflow: hidden` e border radius;
- eventuali angoli bianchi dell'export JPEG vengono quindi mascherati dal contenitore.

Se il file non esiste o genera errore di caricamento:

- viene mostrato il fallback React/HTML/CSS corrispondente.

Questa logica permette di aggiungere o sostituire un visual senza introdurre una mappa di path hardcoded.

## Qualità delle immagini

Per visual che contengono testo o UI incorporata:

- preferire export almeno `2x` rispetto alla dimensione prevista a schermo;
- evitare compressione JPEG aggressiva;
- non applicare `transform: scale(...)`, `filter`, blur o zoom permanenti al raster;
- usare `object-fit` coerente con il layout;
- verificare sempre desktop standard, retina e mobile;
- se la UI incorporata nel raster non è sufficientemente nitida, ricostruirla fedelmente in HTML/CSS/SVG mantenendo la fotografia come layer separato.

La fedeltà visuale rispetto agli asset approvati ha priorità sulla reinterpretazione creativa.

## Hero

La hero attuale è contenuta principalmente in [`./src/App.tsx`](./src/App.tsx) e rifinita da [`./src/v076.css`](./src/v076.css).

Principi attuali:

- visore centrale con ampio respiro laterale;
- headline centrata;
- altezza volutamente inferiore alla viewport per suggerire lo scroll;
- CTA demo integrata nel visore;
- fascia clienti immediatamente successiva;
- comportamento responsive preservato.

Quando si interviene sulla hero, evitare di aumentare l'altezza al punto da nascondere completamente il contenuto successivo sotto la fold.

## UI system

Direzione visuale corrente:

- font principale: Manrope;
- MuseoModerno solo per micro-accenti dove previsto;
- Blue Orchid `#2B3DFA`;
- navy `#171D70` e `#0D103A`;
- radius generosi;
- card morbide;
- ombre leggere;
- tipografia ad alto contrasto;
- motion discreto e subordinato alla leggibilità;
- pieno supporto a `prefers-reduced-motion` dove applicabile.

## Responsive

Ogni modifica deve essere validata almeno su:

- desktop ampio;
- laptop;
- tablet portrait;
- mobile circa 390 px;
- mobile circa 360 px.

Controllare in particolare:

- nessun testo tagliato;
- nessun visual con UI importante fuori dal crop;
- nessun overflow orizzontale;
- CTA sempre utilizzabili;
- radius corretti;
- spaziature coerenti;
- nessun elemento sticky che blocchi la navigazione.

## Versioning

La versione applicativa è definita in [`./package.json`](./package.json).

Quando viene approvata una nuova iterazione:

1. aggiornare `version` in `package.json`;
2. aggiornare la label versione nel footer se ancora presente;
3. documentare le modifiche rilevanti in [`./docs/ITERATIONS.md`](./docs/ITERATIONS.md);
4. evitare di modificare retroattivamente i file di versioni precedenti se l'override può essere isolato nel nuovo layer;
5. usare commit message descrittivi.

Formato consigliato:

```text
feat: ...
fix: ...
refactor: ...
chore: ...
docs: ...
```

## Deploy Vercel

Il deploy principale è collegato al branch `main`.

Flusso standard:

```text
modifica → commit → push su main → build Vercel → production
```

Demo production:

https://senty-sigma.vercel.app

Vercel è attualmente l'ambiente di riferimento per la validazione della landing.

Prima di considerare una modifica chiusa verificare che:

- la build sia completata;
- il deploy sia `READY`;
- la pagina production carichi correttamente;
- gli asset restituiscano risposta valida;
- non siano rimasti riferimenti a file eliminati;
- il responsive non introduca regressioni.

## GitHub Pages

Il repository può essere pubblicato anche su GitHub Pages, ma una app Vite servita da un sottopath richiede un `base` corretto.

Il punto importante è non introdurre `/Senty/` direttamente nei componenti o nel CSS.

La configurazione del base path deve vivere in [`./vite.config.ts`](./vite.config.ts) o essere derivata dall'ambiente di build. Tutti i componenti devono usare URL relativi tramite `import.meta.env.BASE_URL`.

In questo modo lo stesso codice può funzionare sia su Vercel sia su GitHub Pages senza fork o sostituzioni manuali.

## Dipendenze

Le dipendenze applicative sono definite esclusivamente in [`./package.json`](./package.json).

Non aggiungere librerie per problemi risolvibili con CSS o API browser native senza una motivazione concreta. Il progetto è volutamente leggero.

Dipendenze principali attuali:

- React;
- React DOM;
- TypeScript;
- Vite;
- plugin React per Vite.

## Regole per chi prende in carico il progetto

Prima di iniziare una modifica:

- leggere questo README;
- consultare [`./docs/ITERATIONS.md`](./docs/ITERATIONS.md);
- verificare la versione corrente in [`./package.json`](./package.json);
- aprire la demo production;
- verificare gli asset presenti in [`./public/`](./public/);
- controllare quale CSS di versione viene importato per ultimo in [`./src/main.tsx`](./src/main.tsx).

Durante lo sviluppo:

- non introdurre URL applicativi hardcoded;
- non duplicare path in più componenti;
- usare nomi asset prevedibili e data-driven;
- preservare desktop e mobile contemporaneamente;
- evitare workaround specifici per una sola viewport;
- mantenere le UI fedeli alle reference approvate;
- non degradare la qualità percepita degli asset per ridurne il peso;
- preferire una soluzione strutturale a patch CSS stratificate quando il problema è architetturale.

Prima del push:

```bash
npm run build
```

La build deve completarsi senza errori.

## Dove modificare cosa

| Esigenza | File principale |
| --- | --- |
| Testi e struttura della pagina | [`./src/App.tsx`](./src/App.tsx) |
| Hero v0.7.6 | [`./src/v076.css`](./src/v076.css) |
| Metodo e scene native | [`./src/App.tsx`](./src/App.tsx), [`./src/v076.css`](./src/v076.css) |
| Rendering generico asset Metodo | [`./src/v076-assets.css`](./src/v076-assets.css) |
| Import CSS | [`./src/main.tsx`](./src/main.tsx) |
| Asset | [`./public/`](./public/) |
| Loghi cliente | [`./src/client-logos.css`](./src/client-logos.css) |
| Configurazione Vite | [`./vite.config.ts`](./vite.config.ts) |
| Configurazione Vercel | [`./vercel.json`](./vercel.json) |
| Versione e script | [`./package.json`](./package.json) |
| Storico decisioni | [`./docs/ITERATIONS.md`](./docs/ITERATIONS.md) |

## Principio architetturale sui link

La regola da mantenere nel progetto è semplice:

```text
link interno alla pagina → anchor relativa
file del repository → path relativo
asset statico runtime → import.meta.env.BASE_URL + filename
servizio esterno reale → URL assoluto centralizzato e documentato
```

Nessun componente dovrebbe dipendere dal dominio `senty-sigma.vercel.app`, dal path `/Senty/`, dal nome dell'owner GitHub o da un ambiente specifico per funzionare.

## Handoff checklist

Una nuova persona può considerarsi operativa quando riesce a:

- installare le dipendenze;
- avviare il progetto in locale;
- individuare hero, Metodo, Insight e Features in `App.tsx`;
- aggiungere un asset in `public` rispettando la naming convention;
- verificare il fallback quando un asset non esiste;
- modificare una sezione senza rompere mobile;
- eseguire una build production;
- verificare il deploy Vercel;
- capire dove documentare la nuova iterazione.

## Documentazione correlata

- [`./docs/ITERATIONS.md`](./docs/ITERATIONS.md)
- [`./docs/SENTY_LP_BASELINE.md`](./docs/SENTY_LP_BASELINE.md)
- [`./docs/V040_NOTES.md`](./docs/V040_NOTES.md)
- [`./docs/V050_NOTES.md`](./docs/V050_NOTES.md)

---

**Current release:** `SENTY-LP v0.7.6`  
**Production:** https://senty-sigma.vercel.app
