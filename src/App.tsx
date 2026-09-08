import { useEffect, useState } from 'react'

const clients = [
  { name: 'Leroy Merlin', slug: 'leroy', src: 'https://www.leroymerlin.it/lmit-site/6.66.0/static/logos/adeo-brands/leroy-merlin.svg' },
  { name: 'Eataly', slug: 'eataly', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eataly_-_logo_(Italy,_2004).svg' },
  { name: 'Dior', slug: 'dior', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dior_Logo_2022.svg' },
  { name: 'Lindt', slug: 'lindt', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lindt_sprungli_textlogo.png' },
]

const moments = [
  {
    kicker: '01 / Raccogli',
    title: 'Tutto parte da ciò che le persone dicono.',
    copy: 'Recensioni, commenti e feedback arrivano da fonti diverse. Senty li raccoglie in un unico spazio, senza disperdere il contesto.',
  },
  {
    kicker: '02 / Analizza',
    title: 'L’AI mette ordine nel rumore.',
    copy: 'Senty analizza grandi volumi di segnali, identifica pattern, classifica i contenuti e legge il sentiment in modo rapido e coerente.',
  },
  {
    kicker: '03 / Comprendi',
    title: 'I dati diventano leggibili.',
    copy: 'Trend, categorie, rating e topic emergenti prendono forma in una dashboard chiara, utile anche per confrontare il tuo brand con i competitor.',
  },
  {
    kicker: '04 / Restituisci',
    title: 'Gli insight tornano ai team in modo chiaro.',
    copy: 'Sintesi, evidenze e confronti aiutano a capire cosa sta cambiando, perché sta succedendo e dove conviene intervenire.',
  },
]

const phonePhoto = 'https://images.unsplash.com/photo-1777256005646-289df314bd3b?auto=format&fit=crop&fm=jpg&q=82&w=1800'
const teamPhoto = 'https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&fm=jpg&q=82&w=1800'

function DemoForm({ compact = false }: { compact?: boolean }) {
  const id = compact ? 'footer-email' : 'hero-email'
  return (
    <form className={compact ? 'demo-form is-compact' : 'demo-form'} onSubmit={(event) => event.preventDefault()}>
      <label className="sr-only" htmlFor={id}>Email di lavoro</label>
      <input id={id} type="email" placeholder="Inserisci la tua email di lavoro" autoComplete="email" />
      <button type="submit">Richiedi una demo</button>
    </form>
  )
}

function ClientStrip() {
  return (
    <section className="client-strip" aria-label="Brand che hanno scelto Senty">
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

function ReviewScene({ offset }: { offset: number }) {
  return (
    <div className="scene scene-photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(13,16,58,.03), rgba(13,16,58,.18)), url(${phonePhoto})` }}>
      <div className="scene-glow" style={{ transform: `translate3d(${offset * 8}px, ${offset * -14}px, 0)` }} />
      <div className="review-stack" style={{ transform: `translate3d(0, ${offset * -18}px, 0)` }}>
        <article className="review-card review-card-main">
          <span className="review-source">Recensione · oggi</span>
          <div className="review-stars">★★★★★</div>
          <strong>“Molto più semplice da usare.”</strong>
          <p>Checkout chiaro, esperienza fluida e informazioni facili da trovare.</p>
        </article>
        <article className="review-card review-card-ghost review-card-a">Commento social</article>
        <article className="review-card review-card-ghost review-card-b">Survey</article>
      </div>
    </div>
  )
}

function AnalyzeScene({ offset }: { offset: number }) {
  return (
    <div className="scene scene-ui analyze-scene">
      <div className="collector-orbit" style={{ transform: `translate3d(0, ${offset * -12}px, 0)` }}>
        <span className="collector-chip chip-a">★ Recensioni</span>
        <span className="collector-chip chip-b">● Commenti</span>
        <span className="collector-chip chip-c">↗ Social</span>
        <span className="collector-chip chip-d">? Survey</span>
      </div>
      <div className="collector-core" style={{ transform: `translate3d(0, ${offset * 8}px, 0)` }}>
        <img src="/senty-logo.svg" alt="" />
        <span>Analisi automatica</span>
        <div className="collector-tags"><b>Sentiment</b><b>Categoria</b><b>Rating</b><b>Fonte</b></div>
      </div>
      <div className="collector-flow" aria-hidden="true"><i /><i /><i /></div>
    </div>
  )
}

function UnderstandScene({ offset }: { offset: number }) {
  return (
    <div className="scene scene-ui understand-scene">
      <div className="analytics-grid" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <article className="analytics-card score-card">
          <span>Sentiment analysis</span>
          <div className="mini-donut"><strong>68</strong></div>
          <div className="sentiment-legend"><b>62% Positivo</b><b>24% Neutro</b><b>14% Negativo</b></div>
        </article>
        <article className="analytics-card trend-card">
          <span>Average rating overtime</span>
          <svg viewBox="0 0 360 130" role="img" aria-label="Trend illustrativo del rating">
            <path d="M0 96 C28 72 42 88 70 56 S116 84 145 48 S194 70 220 41 S267 72 292 45 S333 56 360 28" />
          </svg>
          <div className="trend-axis"><i>Set. 1</i><i>Set. 2</i><i>Set. 3</i><i>Ora</i></div>
        </article>
      </div>
      <article className="compare-card" style={{ transform: `translate3d(0, ${offset * 14}px, 0)` }}>
        <div className="compare-head"><span>Brand comparison</span><b>Company vs Competitor</b></div>
        <div className="compare-row"><span>Esperienza</span><i><em style={{ width: '82%' }} /><em className="competitor" style={{ width: '61%' }} /></i><b>+21</b></div>
        <div className="compare-row"><span>Pricing</span><i><em style={{ width: '48%' }} /><em className="competitor" style={{ width: '66%' }} /></i><b>-18</b></div>
        <div className="compare-row"><span>Service</span><i><em style={{ width: '74%' }} /><em className="competitor" style={{ width: '60%' }} /></i><b>+14</b></div>
      </article>
    </div>
  )
}

function ReturnScene({ offset }: { offset: number }) {
  return (
    <div className="scene scene-photo return-scene" style={{ backgroundImage: `linear-gradient(180deg, rgba(13,16,58,.02), rgba(13,16,58,.28)), url(${teamPhoto})` }}>
      <div className="action-stack" style={{ transform: `translate3d(0, ${offset * -16}px, 0)` }}>
        <article className="ai-action-card">
          <span className="ai-badge">✦ Senty AI</span>
          <strong>Il prezzo è il principale driver negativo.</strong>
          <p>La percezione del valore è sotto benchmark rispetto ai competitor. Priorità: chiarezza dell’offerta e comunicazione del beneficio.</p>
          <div className="action-tags"><span>Priorità alta</span><span>Confronto competitor</span></div>
        </article>
        <article className="action-mini-card">Insight pronto da condividere <b>↗</b></article>
      </div>
    </div>
  )
}

function MomentVisual({ active, offset = 0 }: { active: number; offset?: number }) {
  return (
    <div className="moment-canvas" aria-live="polite">
      <div className={active === 0 ? 'moment-panel is-active' : 'moment-panel'}><ReviewScene offset={offset} /></div>
      <div className={active === 1 ? 'moment-panel is-active' : 'moment-panel'}><AnalyzeScene offset={offset} /></div>
      <div className={active === 2 ? 'moment-panel is-active' : 'moment-panel'}><UnderstandScene offset={offset} /></div>
      <div className={active === 3 ? 'moment-panel is-active' : 'moment-panel'}><ReturnScene offset={offset} /></div>
    </div>
  )
}

const insightItems = [
  {
    title: 'Cosa sta cambiando',
    copy: 'Individua variazioni di sentiment, trend e segnali deboli prima che diventino evidenti.',
    label: 'Sentiment positivo',
    value: '+18%',
  },
  {
    title: 'Cosa lo sta causando',
    copy: 'Collega emozioni e percezioni ai temi che generano consenso o frizione, anche rispetto ai competitor.',
    label: 'Driver critico',
    value: 'Pricing',
  },
  {
    title: 'Dove agire adesso',
    copy: 'Trasforma analisi e confronti in priorità concrete, sintesi leggibili e indicazioni condivisibili con il team.',
    label: 'Senty AI',
    value: 'Priorità alta',
  },
]

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const [activeMoment, setActiveMoment] = useState(0)
  const [activeInsight, setActiveInsight] = useState(0)
  const [parallax, setParallax] = useState(0)

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

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-insight-step]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveInsight(Number((entry.target as HTMLElement).dataset.insightStep || 0))
        })
      },
      { rootMargin: '-30% 0px -42% 0px', threshold: 0 },
    )
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false
    const update = () => {
      const story = document.querySelector<HTMLElement>('#method')
      if (story) {
        const rect = story.getBoundingClientRect()
        const viewport = window.innerHeight || 1
        const raw = (viewport * 0.5 - rect.top) / Math.max(rect.height, 1)
        setParallax(Math.max(-1, Math.min(1, raw * 2 - 0.2)))
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="site-shell">
      <header className={showNav ? 'floating-nav is-visible' : 'floating-nav'}>
        <a className="floating-brand" href="#top" aria-label="Senty home"><img src="/senty-logo.svg" alt="Senty" /></a>
        <nav aria-label="Navigazione principale">
          <a href="#method">Metodo</a>
          <a href="#insight">Insight</a>
          <a href="#features">Funzionalità</a>
        </nav>
        <a className="floating-cta" href="#demo">Demo</a>
      </header>

      <main>
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-brand-lockup" id="top">
            <img src="/senty-logo.svg" alt="Senty" />
            <span>Powered by Havas</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Sentiment intelligence per brand</p>
            <h1 id="hero-title">Capisci cosa sentono le persone. E cosa farne.</h1>
            <p className="hero-intro">Senty raccoglie recensioni, commenti e feedback da più canali, li analizza con l’AI e li restituisce in insight chiari, comparabili e pronti per guidare le decisioni.</p>
            <div id="demo"><DemoForm /></div>
            <small>Demo guidata del prodotto e overview delle funzionalità.</small>
          </div>
        </section>

        <ClientStrip />

        <section className="story-section" id="method" aria-labelledby="story-title">
          <div className="section-intro story-intro">
            <p className="eyebrow">Come funziona</p>
            <h2 id="story-title">Dal feedback all’azione, senza perdere il contesto.</h2>
            <p>Quattro momenti raccontano il percorso con cui Senty trasforma segnali frammentati in una lettura utile al business.</p>
          </div>

          <div className="story-layout">
            <div className="story-stage"><div className="story-stage-sticky"><MomentVisual active={activeMoment} offset={parallax} /></div></div>
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

        <section className="insight-section" id="insight" aria-labelledby="insight-title">
          <div className="insight-orb insight-orb-a" />
          <div className="insight-orb insight-orb-b" />
          <div className="insight-layout">
            <div className="insight-copy-sticky">
              <p className="eyebrow">Dal capire all’agire</p>
              <h2 id="insight-title">Non solo come si sentono.<br />Perché. E dove intervenire.</h2>
              <p>Senty non si ferma alla raccolta dei dati: mette in evidenza ciò che cambia, cosa lo sta causando e quale priorità merita attenzione.</p>
            </div>
            <div className="insight-steps">
              {insightItems.map((item, index) => (
                <article className={activeInsight === index ? 'insight-step is-active' : 'insight-step'} data-insight-step={index} key={item.title}>
                  <span className="insight-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="insight-metric"><span>{item.label}</span><strong>{item.value}</strong></div>
                  <div className={`insight-viz insight-viz-${index}`} aria-hidden="true">
                    <i /><i /><i /><i /><i />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section" id="features" aria-labelledby="features-title">
          <div className="section-intro features-heading">
            <p className="eyebrow">Funzionalità</p>
            <h2 id="features-title">La complessità resta sotto.<br />Tu vedi ciò che serve.</h2>
          </div>
          <div className="capability-grid">
            <article><span>01</span><h3>Raccolta multi-canale</h3><p>Recensioni, social, survey, ticket e feedback riuniti in un’unica vista.</p></article>
            <article><span>02</span><h3>Analisi del sentiment</h3><p>Sentiment, rating, trend, categorie e distribuzione geografica leggibili a colpo d’occhio.</p></article>
            <article><span>03</span><h3>Insight e comparazioni</h3><p>Temi emergenti, driver positivi e negativi, benchmark e confronto con i competitor.</p></article>
            <article><span>04</span><h3>Restituzione operativa</h3><p>Senty AI, sintesi, report e priorità condivisibili con i team che devono agire.</p></article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand"><img src="/senty-logo.svg" alt="Senty" /><span>Powered by Havas</span></div>
          <div className="footer-cta"><h2>Vuoi capire meglio ciò che le persone sentono?</h2><DemoForm compact /></div>
        </div>
        <div className="footer-bottom"><span>SENTY-LP v0.4.0</span><span>Sentiment intelligence, resa semplice.</span></div>
      </footer>
    </div>
  )
}
