import { useEffect, useState } from 'react'

const sources = [
  {
    type: 'Recensione',
    time: 'Oggi',
    text: '“La nuova esperienza è molto più semplice da usare.”',
    meta: '★★★★★',
    sentiment: 'Positivo',
  },
  {
    type: 'Commento',
    time: '12 min',
    text: '“Mi piace l’aggiornamento, ma i prezzi non sono ancora chiarissimi.”',
    meta: 'Social',
    sentiment: 'Misto',
  },
  {
    type: 'Reazione',
    time: 'Live',
    text: 'Le reazioni positive sono in crescita rispetto alla scorsa settimana.',
    meta: '184 reazioni',
    sentiment: 'In crescita',
  },
]

const topics = [
  ['Facilità d’uso', '32%'],
  ['Qualità del prodotto', '26%'],
  ['Prezzo', '21%'],
  ['Customer care', '14%'],
]

const clients = [
  {
    name: 'Leroy Merlin',
    slug: 'leroy',
    src: 'https://www.leroymerlin.it/lmit-site/6.66.0/static/logos/adeo-brands/leroy-merlin.svg',
  },
  {
    name: 'Eataly',
    slug: 'eataly',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eataly_-_logo_(Italy,_2004).svg',
  },
  {
    name: 'Dior',
    slug: 'dior',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dior_Logo_2022.svg',
  },
  {
    name: 'Lindt',
    slug: 'lindt',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lindt_sprungli_textlogo.png',
  },
]

function ClientStrip() {
  return (
    <section className="client-strip" aria-label="Brand che hanno scelto Senty">
      <div className="client-strip__inner">
        <p className="client-strip__label">
          <strong>Scelto da brand</strong> che vogliono capire meglio ciò che le persone sentono.
        </p>

        <div className="client-marquee">
          <div className="client-track">
            {[0, 1].map((groupIndex) => (
              <div className="client-logo-group" aria-hidden={groupIndex === 1} key={groupIndex}>
                {clients.map((client) => (
                  <div className={`client-logo-item client-logo-item--${client.slug}`} key={`${groupIndex}-${client.name}`}>
                    <img
                      src={client.src}
                      alt={groupIndex === 0 ? client.name : ''}
                      loading="eager"
                      decoding="async"
                      onError={(event) => event.currentTarget.closest('.client-logo-item')?.classList.add('is-fallback')}
                    />
                    <span className="client-logo-fallback" aria-hidden="true">{client.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [activeSource, setActiveSource] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSource((current) => (current + 1) % sources.length)
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Senty home">
          <img src="/senty-logo.svg" alt="Senty" />
        </a>
        <nav className="site-nav" aria-label="Navigazione principale">
          <a href="#signals">Cosa fa</a>
          <a href="#product">Prodotto</a>
        </nav>
        <span className="powered">Powered by Havas</span>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow">Sentiment intelligence, resa semplice</p>
            <h1 id="hero-title">Trasforma ogni segnale in qualcosa che tutti possono capire.</h1>
            <p className="hero-intro">
              Senty riunisce commenti, recensioni, reazioni e feedback, trasformando il sentiment in dati chiari e insight guidati dall’AI.
            </p>
            <a className="primary-link" href="#signals">
              Scopri come funziona <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-visual reveal" aria-label="Dal segnale al sentiment e agli insight">
            <div className="signal-machine">
              <div className="machine-labels" aria-hidden="true">
                <span>Segnali</span>
                <span>Comprensione</span>
              </div>

              <div className="source-stack">
                {sources.map((source, index) => (
                  <article
                    className={index === activeSource ? 'source-card is-active' : 'source-card'}
                    key={source.type}
                    aria-hidden={index !== activeSource}
                  >
                    <div className="source-meta">
                      <span className="source-type">{source.type}</span>
                      <span>{source.time}</span>
                    </div>
                    <p>{source.text}</p>
                    <div className="source-foot">
                      <span>{source.meta}</span>
                      <span>{source.sentiment}</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flow-rail" aria-hidden="true">
                <span className="flow-dot" />
              </div>

              <article className="result-card">
                <div className="result-top">
                  <span className="result-kicker">Sentiment complessivo</span>
                  <span className="live-pill">Aggiornato ora</span>
                </div>
                <div className="sentiment-score">
                  <strong>68</strong><span>/100</span>
                </div>
                <div className="meter" aria-label="Punteggio sentiment illustrativo: 68 su 100">
                  <span />
                </div>
                <div className="sentiment-split">
                  <span><b>62%</b> Positivo</span>
                  <span><b>24%</b> Neutro</span>
                  <span><b>14%</b> Negativo</span>
                </div>
                <div className="ai-summary">
                  <span className="ai-label">Senty AI</span>
                  <p>Il sentiment positivo cresce grazie alla maggiore facilità d’uso. La chiarezza dei prezzi resta il principale punto di attenzione.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <ClientStrip />

        <section className="signals-section" id="signals" aria-labelledby="signals-title">
          <div className="section-heading reveal">
            <p className="eyebrow">Dal rumore alla chiarezza</p>
            <h2 id="signals-title">Segnali diversi.<br />Una visione chiara.</h2>
            <p>
              Senty raccoglie ciò che le persone dicono e il modo in cui reagiscono sui diversi canali, così i team non devono più ricostruire la storia fonte per fonte.
            </p>
          </div>

          <div className="clarity-flow reveal">
            <div className="clarity-column sources-column">
              <span className="column-label">01 / Raccogli</span>
              <div className="compact-signal"><span>Recensione</span><p>“Consegna veloce, checkout poco chiaro.”</p></div>
              <div className="compact-signal"><span>Commento</span><p>“Era esattamente ciò che aspettavo.”</p></div>
              <div className="compact-signal"><span>Feedback</span><p>“Non ho trovato l’informazione che cercavo.”</p></div>
              <div className="compact-signal"><span>Reazione</span><p>Le reazioni positive aumentano dopo il lancio.</p></div>
            </div>

            <div className="clarity-core" aria-hidden="true">
              <div className="core-mark">S</div>
              <span>Analizza</span>
            </div>

            <div className="clarity-column output-column">
              <span className="column-label">03 / Comprendi</span>
              <div className="output-block">
                <div><span>Sentiment</span><strong>Positivo</strong></div><b>+18%</b>
              </div>
              <div className="output-block">
                <div><span>Tema emergente</span><strong>Facilità d’uso</strong></div><b>↑</b>
              </div>
              <div className="output-block">
                <div><span>Area da monitorare</span><strong>Chiarezza dei prezzi</strong></div><b>!</b>
              </div>
              <p className="output-note">Un unico linguaggio visivo per feedback complessi e frammentati.</p>
            </div>
          </div>
        </section>

        <section className="product-section" id="product" aria-labelledby="product-title">
          <div className="product-heading reveal">
            <div>
              <p className="eyebrow">Il prodotto</p>
              <h2 id="product-title">Guarda il quadro completo.<br />Senza leggere ogni singolo segnale.</h2>
            </div>
            <p>
              Dashboard, trend e insight AI portano in superficie ciò che conta, mantenendo il dettaglio disponibile quando serve.
            </p>
          </div>

          <div className="product-shell reveal">
            <aside className="demo-sidebar" aria-hidden="true">
              <div className="mini-brand">S</div>
              <span className="nav-dot active" /><span className="nav-dot" /><span className="nav-dot" /><span className="nav-dot" />
              <span className="nav-dot bottom" />
            </aside>

            <div className="demo-app">
              <div className="demo-topbar">
                <div><span>Dashboard</span><strong>Brand sentiment</strong></div>
                <div className="demo-period">Ultimi 30 giorni ⌄</div>
              </div>

              <div className="demo-grid">
                <article className="demo-card score-card">
                  <span className="card-label">Recensioni totali</span>
                  <div className="big-score">8.330</div>
                  <div className="rating-row">Valutazione media <strong>4,7 ★</strong></div>
                </article>

                <article className="demo-card chart-card">
                  <div className="card-head"><span className="card-label">Trend del sentiment</span><span className="small-tag">Tutte le fonti</span></div>
                  <svg className="trend-chart" viewBox="0 0 520 180" role="img" aria-label="Grafico illustrativo del trend del sentiment">
                    <path className="grid-line" d="M0 30H520M0 90H520M0 150H520" />
                    <path className="trend-area" d="M0 132 C40 124 55 119 90 126 S145 116 180 97 S235 111 270 80 S330 88 365 67 S420 78 460 49 S500 58 520 36 L520 180 L0 180 Z" />
                    <path className="trend-line" d="M0 132 C40 124 55 119 90 126 S145 116 180 97 S235 111 270 80 S330 88 365 67 S420 78 460 49 S500 58 520 36" />
                  </svg>
                  <div className="chart-axis"><span>Set. 1</span><span>Set. 2</span><span>Set. 3</span><span>Ora</span></div>
                </article>

                <article className="demo-card topic-card">
                  <span className="card-label">Di cosa parlano le persone</span>
                  <div className="topic-list">
                    {topics.map(([label, value]) => (
                      <div key={label}><span>{label}</span><b>{value}</b></div>
                    ))}
                  </div>
                </article>

                <article className="demo-card insight-card">
                  <div className="insight-title"><span className="spark">✦</span><div><span className="card-label">Senty AI</span><strong>Cosa conta adesso</strong></div></div>
                  <p>Il sentiment migliora nelle ultime due settimane. La crescita è trainata dalla facilità d’uso, mentre il prezzo resta il tema negativo più ricorrente.</p>
                  <div className="insight-actions"><span>Usabilità ↑</span><span>Prezzo → monitora</span></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="principles-section" aria-label="Principi di Senty">
          <p className="eyebrow reveal">Pensato per essere capito</p>
          <div className="principles-grid">
            <article className="reveal"><span>01</span><h3>Raccogli</h3><p>Porta segnali e feedback frammentati in un unico posto.</p></article>
            <article className="reveal"><span>02</span><h3>Visualizza</h3><p>Trasforma il sentiment in dati leggibili a colpo d’occhio.</p></article>
            <article className="reveal"><span>03</span><h3>Semplifica</h3><p>Usa l’AI per evidenziare ciò che conta senza aggiungere complessità.</p></article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/senty-logo.svg" alt="Senty" />
        <p>Capisci come si sentono.<br />Senza perderti nei dati.</p>
        <span>SENTY-LP v0.2.0 · client trust loop</span>
      </footer>
    </div>
  )
}
