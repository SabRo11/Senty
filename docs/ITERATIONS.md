# SENTY-LP — Iterazioni

## v0.2.0 — Client trust loop

### Obiettivo
Inserire una prova sociale immediata tra hero e spiegazione funzionale, senza appesantire la pagina con una sezione tradizionale di case study o testimonial.

### Soluzione
- fascia full-width sotto la hero;
- wording: **“Scelto da brand che vogliono capire meglio ciò che le persone sentono.”**;
- loop continuo di Leroy Merlin, Eataly, Dior e Lindt;
- visualizzazione monocromatica nera;
- animazione lineare lenta e seamless;
- edge fade leggero per evitare un inizio/fine visivamente brusco;
- fallback testuale se un asset remoto non viene caricato;
- `prefers-reduced-motion` rispettato: niente loop, loghi statici e centrati.

### Asset brand
- Leroy Merlin: asset SVG dal sito ufficiale Leroy Merlin;
- Eataly: vettoriale derivato dal logo Eataly e documentato come proveniente da materiale ufficiale Eataly;
- Dior: logo 2022 documentato come proveniente dal sito ufficiale Dior;
- Lindt: wordmark documentato come proveniente dal sito corporate Lindt & Sprüngli.

Gli asset sono forzati visivamente in monocromia nera via CSS per mantenere coerenza con la landing.

### Riferimento motion
La logica prende spunto dal modulo di social proof immediatamente successivo alla hero nella pagina Brandwatch Sentiment Analysis, ma viene semplificata e riallineata al linguaggio visivo di Senty.

### Versione precedente
`SENTY-LP-v0.1.0` resta la baseline iniziale e può essere recuperata dalla cronologia Git.
