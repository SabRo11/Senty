import { useEffect, useState } from 'react'

const clients = [
  { name: 'Leroy Merlin', slug: 'leroy', src: 'https://www.leroymerlin.it/lmit-site/6.66.0/static/logos/adeo-brands/leroy-merlin.svg' },
  { name: 'Eataly', slug: 'eataly', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eataly_-_logo_(Italy,_2004).svg' },
  { name: 'Dior', slug: 'dior', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dior_Logo_2022.svg' },
  { name: 'Lindt', slug: 'lindt', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lindt_sprungli_textlogo.png' },
]

const moments = [
  {
    kicker: '01 / Ascolta',
    title: 'Le persone lasciano segnali ovunque.',
    copy: 'Recensioni, commenti, survey, ticket e reazioni raccontano ogni giorno come viene percepito il brand. Senty parte da lì: dalla voce reale delle persone.',
  },
  {
    kicker: '02 / Riunisci',
    title: 'Tante fonti diventano una sola lettura.',
    copy: 'Senty porta segnali diversi nello stesso spazio, li ordina e li rende confrontabili senza costringerti a ricostruire il quadro canale per canale.',
  },
  {
    kicker: '03 / Comprendi',
    title: 'Il sentiment prende forma.',
    copy: 'Trend, rating, temi emergenti e categorie rendono visibile ciò che sta cambiando, dove nasce una frizione e cosa sta facendo crescere la percezione positiva.',
  },
  {
    kicker: '04 / Attiva',
    title: 'Gli insight diventano decisioni.',
    copy: 'Senty AI sintetizza ciò che conta, evidenzia le priorità e trasforma l’analisi in indicazioni leggibili e immediatamente condivisibili con il team.',
  },
]

const phonePhoto = 'https://images.unsplash.com/photo-1777256005646-289df314bd3b?auto=format&fit=crop&fm=jpg&q=82&w=1800'
const teamPhoto = 'https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&fm=jpg&q=82&w=1800'

function DemoForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? 'demo-form is-compact' : 'demo-form'} onSubmit={(event) => event.preventDefault()}>
      <label className="sr-only" htmlFor={compact ? 'footer-email' : 'hero-email'}>Email di lavoro</label>
      <input id={compact ? 'footer-email' : 'hero-email'} type="email" placeholder="La tua email di lavoro" autoComplete="email" />
      <button type="submit">Richiedi una demo</button>
    </form>
  )
}

function ClientStrip() {
  return (
    <section className="client-strip v03-client-strip" aria-label="Brand che hanno scelto Senty">
      <div className="client-strip__inner">
        <h2 className="client-strip__headline">Scelto da brand che ascoltano davvero le persone.</h2>
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

function MomentVisual({ active }: { active: number }) {
  return (
    <div className="moment-canvas" aria-live="polite">
      <div className={active === 0 ? 'moment-panel is-active' : 'moment-panel'}>
        <div className="photo-scene phone-scene" style={{ backgroundImage: `linear-gradient(180deg, rgba(13,16,58,.03), rgba(13,16,58,.18)), url(${phonePhoto})` }}>
          <div className="floating-review">
            <span className="review-stars">★★★★★</span>
            <strong>“Molto più semplice da usare.”</strong>
            <small>Recensione · oggi</small>
          </div>
          <span className="photo-chip">Segnale reale</span>
        </div>
      </div>

      <div className={active === 1 ? 'moment-panel is-active' : 'moment-panel'}>
        <div className="signal-collector">
          <div className="collector-chip chip-a"><span>★</span> Recensioni</div>
          <div className="collector-chip chip-b"><span>●</span> Commenti</div>
          <div className="collector-chip chip-c"><span>↗</span> Social</div>
          <div className="collector-chip chip-d"><span>?</span> Survey</div>
          <div className="collector-core"><img src="/senty-logo.svg" alt="" /><span>Un’unica vista</span></div>
        </div>
      </div>

      <div className={active === 2 ? 'moment-panel is-active' : 'moment-panel'}>
        <div className="sentiment-visual">
          <div className="sentiment-card-v03">
            <span className="visual-label">Sentiment complessivo</span>
            <div className="donut-v03"><div><strong>68</strong><span>/100</span></div></div>
            <div className="sentiment-key"><span><i className="dot positive" />Positivo 62%</span><span><i className="dot neutral" />Neutro 24%</span><span><i className="dot negative" />Negativo 14%</span></div>
          </div>
          <div className="topic-card-v03">
            <span className="visual-label">Temi che stanno crescendo</span>
            <div className="topic-bar"><span>Facilità d’uso</span><i style={{ width: '82%' }} /></div>
            <div className="topic-bar"><span>Qualità</span><i style={{ width: '64%' }} /></div>
            <div className="topic-bar"><span>Prezzo</span><i style={{ width: '48%' }} /></div>
            <div className="trend-note">+18% sentiment positivo nelle ultime 2 settimane</div>
          </div>
        </div>
      </div>

      <div className={active === 3 ? 'moment-panel is-active' : 'moment-panel'}>
        <div className="photo-scene team-scene" style={{ backgroundImage: `linear-gradient(180deg, rgba(13,16,58,.05), rgba(13,16,58,.3)), url(${teamPhoto})` }}>
          <div className="ai-action-card">
            <span className="ai-badge">✦ Senty AI</span>
            <strong>Il prezzo è il principale driver negativo.</strong>
            <p>Concentra la prossima analisi su chiarezza dell’offerta e percezione del valore.</p>
            <div className="action-tags"><span>Priorità alta</span><span>Condividi insight ↗</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const [activeMoment, setActiveMoment] = useState(0)

  useEffect(() => {
    const hero = document.querySelector('#hero')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setShowNav(!entry.isIntersecting), { threshold: 0.08 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-story-step]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveMoment(Number((entry.target as HTMLElement).dataset.storyStep || 0))
        })
      },
      { rootMargin: '-34% 0px -44% 0px', threshold: 0 },
    )
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell v03-shell">
      <header className={showNav ? 'floating-nav is-visible' : 'floating-nav'}>
        <a className="floating-brand" href="#top" aria-label="Senty home"><img src="/senty-logo.svg" alt="Senty" /></a>
        <nav aria-label="Navigazione principale">
          <a href="#how">Come funziona</a>
          <a href="#value">Cosa capisci</a>
          <a href="#essentials">In sintesi</a>
        </nav>
        <a className="floating-cta" href="#demo">Richiedi una demo</a>
      </header>

      <main>
        <section className="new-hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-brand-lockup" id="top">
            <img src="/senty-logo.svg" alt="Senty" />
            <span>Powered by Havas</span>
          </div>
          <div className="new-hero-copy">
            <p className="eyebrow">Sentiment intelligence, resa semplice</p>
            <h1 id="hero-title">Capisci cosa sentono le persone. E cosa farne.</h1>
            <p>Senty riunisce recensioni, commenti, reazioni e feedback per trasformare il sentiment in insight chiari, leggibili e subito attivabili.</p>
            <div id="demo"><DemoForm /></div>
            <small>Demo su richiesta · nessun impegno</small>
          </div>
        </section>

        <ClientStrip />

        <section className="story-section" id="how" aria-labelledby="story-title">
          <div className="story-intro">
            <p className="eyebrow">Dal segnale alla decisione</p>
            <h2 id="story-title">Senty fa emergere ciò che conta, passo dopo passo.</h2>
            <p>Non vogliamo spiegare il prodotto con una lista di feature: vogliamo far vedere il percorso con cui trasforma il rumore in comprensione.</p>
          </div>

          <div className="story-layout">
            <div className="story-stage"><div className="story-stage-sticky"><MomentVisual active={activeMoment} /></div></div>
            <div className="story-steps">
              {moments.map((moment, index) => (
                <article className={index === activeMoment ? 'story-step is-active' : 'story-step'} data-story-step={index} key={moment.title}>
                  <span>{moment.kicker}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.copy}</p>
                  <div className="story-mobile-visual"><MomentVisual active={index} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="value-section" id="value" aria-labelledby="value-title">
          <div className="value-inner">
            <p className="eyebrow">Dal capire all’agire</p>
            <h2 id="value-title">Non solo come si sentono.<br />Perché. E dove intervenire.</h2>
            <div className="value-grid">
              <article><span>01</span><strong>Cosa sta cambiando</strong><p>Individua variazioni di sentiment e segnali deboli prima che diventino evidenti.</p><b>Sentiment ↑ 18%</b></article>
              <article><span>02</span><strong>Cosa le sta causando</strong><p>Collega emozioni e percezioni ai temi che generano consenso o frizione.</p><b>Pricing → attenzione</b></article>
              <article><span>03</span><strong>Dove agire adesso</strong><p>Porta al team una priorità leggibile, non un altro report da interpretare.</p><b>Insight AI → azione</b></article>
            </div>
          </div>
        </section>

        <section className="essentials-section" id="essentials" aria-labelledby="essentials-title">
          <div className="essentials-heading">
            <p className="eyebrow">Tutto in una sola vista</p>
            <h2 id="essentials-title">La complessità resta sotto.<br />Tu vedi ciò che serve.</h2>
          </div>
          <div className="capability-grid">
            <article><span>01</span><h3>Fonti</h3><p>Recensioni<br />Social<br />Survey<br />Ticket e feedback</p></article>
            <article><span>02</span><h3>Analisi</h3><p>Sentiment<br />Rating e trend<br />Categorie<br />Distribuzione geografica</p></article>
            <article><span>03</span><h3>Insight</h3><p>Temi emergenti<br />Driver positivi e negativi<br />Aree critiche<br />Confronti nel tempo</p></article>
            <article><span>04</span><h3>Attivazione</h3><p>Senty AI<br />Sintesi leggibili<br />Report<br />Priorità condivisibili</p></article>
          </div>
        </section>
      </main>

      <footer className="new-footer">
        <div className="footer-top">
          <img src="/senty-logo.svg" alt="Senty" />
          <div><h2>Vuoi capire meglio ciò che le persone sentono?</h2><DemoForm compact /></div>
        </div>
        <div className="footer-bottom"><span>Powered by Havas</span><span>SENTY-LP v0.3.0 · narrative prototype</span></div>
      </footer>
    </div>
  )
}
