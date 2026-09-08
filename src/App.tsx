import { useEffect, useState } from 'react'

const clients = [
  { name: 'Leroy Merlin', slug: 'leroy', src: 'https://www.leroymerlin.it/lmit-site/6.66.0/static/logos/adeo-brands/leroy-merlin.svg' },
  { name: 'Eataly', slug: 'eataly', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eataly_-_logo_(Italy,_2004).svg' },
  { name: 'Dior', slug: 'dior', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dior_Logo_2022.svg' },
  { name: 'Lindt', slug: 'lindt', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lindt_sprungli_textlogo.png' },
]

const moments = [
  {
    label: 'Raccogli',
    title: 'Ogni voce entra nello stesso flusso.',
    copy: 'Recensioni, commenti, survey e feedback confluiscono in un unico spazio, mantenendo fonte e contesto.',
  },
  {
    label: 'Analizza',
    title: 'L’AI trasforma il rumore in segnali.',
    copy: 'Senty classifica grandi volumi di contenuti, legge il sentiment e fa emergere pattern in modo rapido e coerente.',
  },
  {
    label: 'Comprendi',
    title: 'Capisci subito cosa muove il sentiment.',
    copy: 'Temi, driver, rating e segnali emergenti diventano leggibili a colpo d’occhio, senza perdersi tra decine di grafici.',
  },
  {
    label: 'Confronta',
    title: 'Leggi il dato nel tempo. E rispetto agli altri.',
    copy: 'Confronta periodi, trend e performance del tuo brand con i competitor per dare ai numeri un contesto reale.',
  },
  {
    label: 'Restituisci',
    title: 'Dall’insight alla prossima decisione.',
    copy: 'Senty sintetizza ciò che conta in priorità e indicazioni chiare, pronte da condividere con i team che devono agire.',
  },
]

const phonePhoto = 'https://images.unsplash.com/photo-1777256005646-289df314bd3b?auto=format&fit=crop&fm=jpg&q=84&w=1800'
const teamPhoto = 'https://images.unsplash.com/photo-1758873268745-dd2cf0d677b5?auto=format&fit=crop&fm=jpg&q=84&w=1800'

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

function CollectScene({ offset }: { offset: number }) {
  return (
    <div className="scene collect-scene" style={{ backgroundImage: `url(${phonePhoto})` }}>
      <article className="signal-card" style={{ transform: `translate3d(0, ${offset * -14}px, 0)` }}>
        <div className="signal-card__top"><span>Segnali raccolti oggi</span><strong>12.480</strong></div>
        <div className="signal-sources">
          <div className="signal-source"><b>Recensioni</b><small>4.830 segnali</small></div>
          <div className="signal-source"><b>Social</b><small>3.940 segnali</small></div>
          <div className="signal-source"><b>Survey</b><small>2.140 segnali</small></div>
          <div className="signal-source"><b>Customer care</b><small>1.570 segnali</small></div>
        </div>
        <div className="signal-card__foot">Fonte e contesto restano collegati a ogni feedback.</div>
      </article>
    </div>
  )
}

function AnalyzeScene({ offset }: { offset: number }) {
  return (
    <div className="scene analyze-scene-v06">
      <article className="sentiment-card" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <div className="sentiment-card__head"><span>Sentiment analysis</span><b>Ultimi 30 giorni</b></div>
        <div className="sentiment-card__body">
          <div className="sentiment-ring"><div><strong>72%</strong><span>positivo</span></div></div>
          <div className="sentiment-summary">
            <div><strong>+8,4%</strong><span>vs periodo precedente</span></div>
            <div><strong>14%</strong><span>feedback negativo</span></div>
            <small>12.480 feedback analizzati automaticamente</small>
          </div>
        </div>
      </article>
    </div>
  )
}

function UnderstandScene({ offset }: { offset: number }) {
  return (
    <div className="scene understand-scene-v06">
      <article className="driver-card" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <div className="driver-card__head"><span>Driver del sentiment</span><b>AI clustering</b></div>
        <div className="driver-focus"><div><span>Driver più rilevante</span><strong>Service</strong></div><b>+24</b></div>
        <div className="driver-chart">
          <div className="driver-row"><span>Service</span><i><em style={{ width: '88%' }} /></i><b>+24</b></div>
          <div className="driver-row"><span>Esperienza</span><i><em style={{ width: '72%' }} /></i><b>+17</b></div>
          <div className="driver-row"><span>Prodotto</span><i><em style={{ width: '58%' }} /></i><b>+11</b></div>
          <div className="driver-row is-negative"><span>Pricing</span><i><em style={{ width: '46%' }} /></i><b>-9</b></div>
        </div>
      </article>
    </div>
  )
}

function CompareScene({ offset }: { offset: number }) {
  return (
    <div className="scene compare-scene-v06">
      <article className="compare-dashboard" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <div className="compare-dashboard__head"><span>Brand comparison</span><b>12 mesi</b></div>
        <div className="compare-legend"><span><i />Il tuo brand</span><span><i />Competitor</span></div>
        <svg className="compare-chart" viewBox="0 0 560 240" role="img" aria-label="Confronto illustrativo del sentiment nel tempo tra brand e competitor">
          <path className="grid" d="M10 50 H550 M10 110 H550 M10 170 H550 M10 230 H550" />
          <path className="brand-line" d="M12 182 C70 170 80 126 132 138 S212 176 266 106 S350 76 398 88 S470 54 548 42" />
          <path className="competitor-line" d="M12 150 C68 142 96 154 138 130 S220 108 268 126 S345 142 402 116 S484 108 548 94" />
        </svg>
        <div className="compare-axis"><span>Ott</span><span>Gen</span><span>Apr</span><span>Lug</span><span>Oggi</span></div>
        <div className="compare-callout">+12 pt sopra benchmark</div>
      </article>
    </div>
  )
}

function ReturnScene({ offset }: { offset: number }) {
  return (
    <div className="scene return-scene-v06" style={{ backgroundImage: `url(${teamPhoto})` }}>
      <div className="action-stack" style={{ transform: `translate3d(0, ${offset * -14}px, 0)` }}>
        <article className="ai-action-card">
          <span className="ai-badge">✦ Senty AI</span>
          <strong>Il prezzo è il principale driver negativo nel segmento nuovi clienti.</strong>
          <p>La percezione del valore è sotto benchmark. Priorità suggerita: rendere più chiaro il beneficio dell’offerta nei primi touchpoint.</p>
          <div className="action-tags"><span>Priorità alta</span><span>Nuovi clienti</span><span>Pricing</span></div>
        </article>
      </div>
    </div>
  )
}

function MomentVisual({ active, offset = 0 }: { active: number; offset?: number }) {
  return (
    <div className="moment-canvas" aria-live="polite">
      <div className={active === 0 ? 'moment-panel is-active' : 'moment-panel'}><CollectScene offset={offset} /></div>
      <div className={active === 1 ? 'moment-panel is-active' : 'moment-panel'}><AnalyzeScene offset={offset} /></div>
      <div className={active === 2 ? 'moment-panel is-active' : 'moment-panel'}><UnderstandScene offset={offset} /></div>
      <div className={active === 3 ? 'moment-panel is-active' : 'moment-panel'}><CompareScene offset={offset} /></div>
      <div className={active === 4 ? 'moment-panel is-active' : 'moment-panel'}><ReturnScene offset={offset} /></div>
    </div>
  )
}

const insightItems = [
  { title: 'Cosa sta cambiando', copy: 'Individua variazioni di sentiment, trend e segnali deboli prima che diventino evidenti.', label: 'Sentiment positivo', value: '+18%' },
  { title: 'Cosa lo sta causando', copy: 'Collega emozioni e percezioni ai temi che generano consenso o frizione, anche rispetto ai competitor.', label: 'Driver critico', value: 'Pricing' },
  { title: 'Dove agire adesso', copy: 'Trasforma analisi e confronti in priorità concrete, sintesi leggibili e indicazioni condivisibili con il team.', label: 'Senty AI', value: 'Priorità alta' },
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
    const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-method-step]'))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveMoment(Number((entry.target as HTMLElement).dataset.methodStep || 0))
      }),
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
    )
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-insight-step]'))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveInsight(Number((entry.target as HTMLElement).dataset.insightStep || 0))
      }),
      { rootMargin: '-30% 0px -42% 0px', threshold: 0 },
    )
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false
    const update = () => {
      const method = document.querySelector<HTMLElement>('#method')
      if (method) {
        const rect = method.getBoundingClientRect()
        const viewport = window.innerHeight || 1
        const raw = (viewport * .5 - rect.top) / Math.max(rect.height, 1)
        setParallax(Math.max(-1, Math.min(1, raw * 2 - .2)))
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

  const active = moments[activeMoment]

  return (
    <div className="site-shell v05-shell v06-shell">
      <header className={showNav ? 'floating-nav is-visible' : 'floating-nav'}>
        <a className="floating-brand" href="#top" aria-label="Senty home"><img src="/senty-logo.svg" alt="Senty" /></a>
        <nav aria-label="Navigazione principale">
          <a href="#method">Metodo</a>
          <a href="#insight">Insight</a>
          <a href="#features">Funzionalità</a>
        </nav>
        <a className="floating-cta" href="#demo">Richiedi una demo</a>
      </header>

      <main>
        <section className="hero v05-hero v06-hero" id="hero" aria-labelledby="hero-title">
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

        <section className="story-section method-section" id="method" aria-labelledby="story-title">
          <div className="section-intro method-intro">
            <h2 id="story-title">Ascolta tutto. Capisci cosa conta.</h2>
          </div>

          <div className="method-scroll">
            <div className="method-sticky">
              <div className="method-copy-panel">
                <div className="method-labels" aria-label="Fasi del metodo Senty">
                  {moments.map((moment, index) => (
                    <div className={activeMoment === index ? 'method-label is-active' : 'method-label'} key={moment.label}>
                      {moment.label}
                    </div>
                  ))}
                </div>
                <div className="method-description" key={active.label}>
                  <h3>{active.title}</h3>
                  <p>{active.copy}</p>
                </div>
              </div>
              <div className="method-visual"><MomentVisual active={activeMoment} offset={parallax} /></div>
            </div>
            <div className="method-triggers" aria-hidden="true">
              {moments.map((moment, index) => <div className="method-trigger" data-method-step={index} key={moment.label} />)}
            </div>
          </div>

          <div className="method-mobile">
            {moments.map((moment, index) => (
              <article className="method-mobile-step" key={moment.label}>
                <span>{moment.label}</span>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
                <div className="method-mobile-visual"><MomentVisual active={index} /></div>
              </article>
            ))}
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
                  <div className={`insight-viz insight-viz-${index}`} aria-hidden="true"><i /><i /><i /><i /><i /></div>
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
        <div className="footer-bottom"><span>SENTY-LP v0.6.0</span><span>Sentiment intelligence, resa semplice.</span></div>
      </footer>
    </div>
  )
}
