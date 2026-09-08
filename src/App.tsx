import { useEffect, useState } from 'react'

const clients = [
  { name: 'Leroy Merlin', slug: 'leroy', src: 'https://www.leroymerlin.it/lmit-site/6.66.0/static/logos/adeo-brands/leroy-merlin.svg' },
  { name: 'Eataly', slug: 'eataly', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Eataly_-_logo_(Italy,_2004).svg' },
  { name: 'Dior', slug: 'dior', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dior_Logo_2022.svg' },
  { name: 'Lindt', slug: 'lindt', src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lindt_sprungli_textlogo.png' },
]

const moments = [
  { label: 'Raccogli', title: 'Ogni voce entra nello stesso flusso.', copy: 'Recensioni, commenti, survey e feedback confluiscono in un unico spazio, mantenendo fonte e contesto.' },
  { label: 'Analizza', title: 'L’AI trasforma il rumore in segnali.', copy: 'Senty classifica grandi volumi di contenuti, legge il sentiment e fa emergere pattern in modo rapido e coerente.' },
  { label: 'Comprendi', title: 'Capisci subito cosa muove il sentiment.', copy: 'Temi, driver, rating e segnali emergenti diventano leggibili a colpo d’occhio, senza perdersi tra decine di grafici.' },
  { label: 'Confronta', title: 'Leggi il dato nel tempo. E rispetto agli altri.', copy: 'Confronta periodi, trend e performance del tuo brand con i competitor per dare ai numeri un contesto reale.' },
  { label: 'Restituisci', title: 'Dall’insight alla prossima decisione.', copy: 'Senty sintetizza ciò che conta in priorità e indicazioni chiare, pronte da condividere con i team che devono agire.' },
]

const collectPhoto = '/raccogli.jpg'
const understandPhoto = '/comprendi.jpg'
const returnPhoto = '/restituisci.jpg'

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
        <div className="client-marquee"><div className="client-track">
          {[0, 1].map((groupIndex) => (
            <div className="client-logo-group" aria-hidden={groupIndex === 1} key={groupIndex}>
              {clients.map((client) => (
                <div className={`client-logo-item client-logo-item--${client.slug}`} key={`${groupIndex}-${client.name}`}>
                  <img src={client.src} alt={groupIndex === 0 ? client.name : ''} loading="eager" decoding="async" onError={(event) => event.currentTarget.closest('.client-logo-item')?.classList.add('is-fallback')} />
                  <span className="client-logo-fallback" aria-hidden="true">{client.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div></div>
      </div>
    </section>
  )
}

function CollectScene({ offset }: { offset: number }) {
  return (
    <div className="scene collect-scene-v07" style={{ backgroundImage: `url(${collectPhoto})` }}>
      <div className="collect-review-layer" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <article className="review-pop review-pop--instagram">
          <div className="review-pop__head"><span className="channel-mark channel-mark--ig">IG</span><div className="review-pop__meta"><b>Instagram</b><small>commento · oggi</small></div><span className="pop-pill pop-pill--lime review-pop__sentiment">Positivo</span></div>
          <p>“Tutto molto semplice da capire. Esperienza super fluida ✨”</p>
          <div className="review-pop__foot"><span>♥ 84</span><span>● 9 risposte</span></div>
        </article>
        <article className="review-pop review-pop--google">
          <div className="review-pop__head"><span className="channel-mark channel-mark--g">G</span><div className="review-pop__meta"><b>Google</b><small>recensione · 2 giorni fa</small></div><span className="pop-pill pop-pill--orange review-pop__sentiment">Negativo</span></div>
          <p>“Tempi di attesa un po’ lunghi. Il servizio può essere più rapido.”</p>
          <div className="review-pop__foot"><span>★★★☆☆</span><span>Attesa</span></div>
        </article>
        <article className="review-pop review-pop--tripadvisor">
          <div className="review-pop__head"><span className="channel-mark channel-mark--ta">TA</span><div className="review-pop__meta"><b>Tripadvisor</b><small>recensione · questa settimana</small></div><span className="pop-pill pop-pill--purple review-pop__sentiment">Misto</span></div>
          <p>“Personale molto gentile, ma alcune informazioni non erano chiarissime.”</p>
          <div className="review-pop__foot"><span>★★★★☆</span><span>Servizio</span><span>Chiarezza</span></div>
        </article>
      </div>
      <div className="collect-sticker"><strong>Tutto qui dentro.</strong><span>Una vista, fonti diverse.</span></div>
    </div>
  )
}

function AnalyzeScene({ offset }: { offset: number }) {
  const bars = [45, 62, 54, 76, 68, 82, 59, 88, 72, 91, 84, 96]
  return (
    <div className="scene analyze-scene-v07">
      <div className="analysis-bento" style={{ transform: `translate3d(0, ${offset * -7}px, 0)` }}>
        <article className="analysis-tile analysis-main-tile">
          <div className="analysis-tile__head"><span className="ui-kicker">Sentiment live</span><span className="pop-pill">12.4k feedback</span></div>
          <div className="analysis-ring-wrap"><div className="analysis-ring"><div className="analysis-ring__value"><strong>68%</strong><span>positivo</span></div></div><div className="analysis-ring-legend"><span><b>68%</b> positivo</span><span><b>21%</b> neutro</span><span><b>11%</b> negativo</span></div></div>
        </article>
        <article className="analysis-tile analysis-trend-tile">
          <div className="analysis-tile__head"><span className="ui-kicker">Volume analizzato</span><span className="pop-pill pop-pill--lime">+18% ↗</span></div>
          <div className="trend-number">12.480<small>ultimi 30 giorni</small></div>
          <div className="analysis-bars" aria-hidden="true">{bars.map((value, index) => <i className="analysis-bar" style={{ height: `${value}%`, animationDelay: `${index * .035}s` }} key={index} />)}</div>
        </article>
        <article className="analysis-tile analysis-topic-tile">
          <div className="analysis-tile__head"><span className="ui-kicker">Temi caldi</span><span className="pop-pill pop-pill--purple">AI cluster</span></div>
          <div className="topic-focus"><strong>Service</strong><div className="topic-row"><span>Service</span><i><em style={{ width: '88%' }} /></i><b>88</b></div><div className="topic-row"><span>Prodotto</span><i><em style={{ width: '68%' }} /></i><b>68</b></div><div className="topic-row"><span>Pricing</span><i><em style={{ width: '46%' }} /></i><b>46</b></div></div>
        </article>
        <article className="analysis-tile analysis-source-tile">
          <div className="analysis-tile__head"><span className="ui-kicker">Da dove arriva</span><span className="pop-pill pop-pill--orange">4 fonti</span></div>
          <div className="source-bubbles"><span className="source-bubble source-bubble--lg"><b>41%</b><small>Review</small></span><span className="source-bubble source-bubble--md"><b>29%</b><small>Social</small></span><span className="source-bubble source-bubble--sm"><b>18%</b><small>Survey</small></span></div>
        </article>
      </div>
    </div>
  )
}

function UnderstandScene({ offset }: { offset: number }) {
  return (
    <div className="scene understand-scene-v07" style={{ backgroundImage: `url(${understandPhoto})` }}>
      <div className="understand-ui-layer" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <div className="insight-float"><span>✦ Senty ha trovato un pattern</span><strong>Le citazioni sul servizio crescono insieme al sentiment positivo.</strong></div>
        <article className="insight-cluster-card">
          <div className="insight-cluster__top"><span className="ui-kicker">Cosa muove il sentiment</span><span className="pop-pill pop-pill--aqua">Pattern aggiornato</span></div>
          <div className="insight-cluster__title"><strong>Service è il driver #1</strong><b>+24</b></div>
          <div className="driver-pills"><div className="driver-pill"><span>Esperienza</span><b>+17 · stabile</b></div><div className="driver-pill"><span>Service</span><b>+24 · accelera</b></div><div className="driver-pill"><span>Prodotto</span><b>+11 · positivo</b></div><div className="driver-pill"><span>Pricing</span><b>-9 · da guardare</b></div></div>
        </article>
      </div>
    </div>
  )
}

function CompareScene({ offset }: { offset: number }) {
  return (
    <div className="scene compare-scene-v07">
      <div className="compare-wide-layout" style={{ transform: `translate3d(0, ${offset * -6}px, 0)` }}>
        <div className="compare-wide-head">
          <div><span className="ui-kicker">Confronto competitivo</span><h4>Sentiment nel tempo</h4></div>
          <div className="compare-controls"><span className="compare-control">3 mesi</span><span className="compare-control is-active">12 mesi</span><span className="compare-control">24 mesi</span></div>
        </div>
        <div className="compare-legend-v07"><span><i />Il tuo brand</span><span><i />Competitor A</span><span><i />Competitor B</span></div>
        <div className="compare-chart-wrap">
          <svg className="compare-chart-v07" viewBox="0 0 760 320" role="img" aria-label="Confronto illustrativo del sentiment tra brand e competitor">
            <defs><linearGradient id="brandArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2b3dfa" stopOpacity=".28" /><stop offset="1" stopColor="#2b3dfa" stopOpacity="0" /></linearGradient></defs>
            <path className="grid" d="M20 55 H740 M20 120 H740 M20 185 H740 M20 250 H740" />
            <path className="area" d="M22 238 C95 220 120 162 185 176 S292 225 360 144 S470 102 530 118 S646 80 738 58 L738 298 L22 298 Z" />
            <path className="brand-line" d="M22 238 C95 220 120 162 185 176 S292 225 360 144 S470 102 530 118 S646 80 738 58" />
            <path className="comp-a" d="M22 204 C92 194 128 208 192 176 S302 150 368 172 S470 190 536 154 S652 142 738 126" />
            <path className="comp-b" d="M22 254 C92 238 132 224 192 226 S300 196 370 210 S472 180 536 188 S650 160 738 172" />
            <circle className="brand-dot" cx="738" cy="58" r="9" /><circle className="comp-dot" cx="738" cy="126" r="8" />
          </svg>
          <div className="compare-benchmark"><b>+12 pt</b><span>sopra benchmark</span></div>
        </div>
        <div className="compare-axis-v07"><span>Ott</span><span>Dic</span><span>Feb</span><span>Apr</span><span>Giu</span><span>Ago</span><span>Oggi</span></div>
      </div>
    </div>
  )
}

function ReturnScene({ offset }: { offset: number }) {
  return (
    <div className="scene return-scene-v07" style={{ backgroundImage: `url(${returnPhoto})` }}>
      <div className="return-ui-layer" style={{ transform: `translate3d(0, ${offset * -10}px, 0)` }}>
        <article className="return-action-card">
          <div className="return-action-card__head"><span className="ai-badge">✦ Senty AI</span><span className="pop-pill pop-pill--orange">Priorità alta</span></div>
          <h4>Il prezzo è il principale driver negativo nei nuovi clienti.</h4>
          <div className="next-actions"><div className="next-action"><i>1</i><span>Chiarisci il valore nei primi touchpoint</span><b>Marketing</b></div><div className="next-action"><i>2</i><span>Verifica le frizioni nel percorso di acquisto</span><b>CX</b></div><div className="next-action"><i>3</i><span>Condividi il trend con il team commerciale</span><b>Sales</b></div></div>
        </article>
      </div>
    </div>
  )
}

function MomentVisual({ active, offset = 0 }: { active: number; offset?: number }) {
  const scenes = [<CollectScene offset={offset} />, <AnalyzeScene offset={offset} />, <UnderstandScene offset={offset} />, <CompareScene offset={offset} />, <ReturnScene offset={offset} />]
  return <div className="moment-canvas" aria-live="polite">{scenes.map((scene, index) => <div className={active === index ? 'moment-panel is-active' : 'moment-panel'} key={index}>{scene}</div>)}</div>
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
  const [methodTitleVisible, setMethodTitleVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#hero')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setShowNav(!entry.isIntersecting), { threshold: 0.08 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const title = document.querySelector('#method-heading-wrap')
    if (!title) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setMethodTitleVisible(true) }, { threshold: .28 })
    observer.observe(title)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-method-step]'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveMoment(Number((entry.target as HTMLElement).dataset.methodStep || 0)) }), { rootMargin: '-35% 0px -45% 0px', threshold: 0 })
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-insight-step]'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveInsight(Number((entry.target as HTMLElement).dataset.insightStep || 0)) }), { rootMargin: '-30% 0px -42% 0px', threshold: 0 })
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
    const onScroll = () => { if (!ticking) { window.requestAnimationFrame(update); ticking = true } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  const active = moments[activeMoment]
  const jumpToMoment = (index: number) => {
    setActiveMoment(index)
    document.querySelector<HTMLElement>(`[data-method-step="${index}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="site-shell v05-shell v06-shell v07-shell">
      <header className={showNav ? 'floating-nav is-visible' : 'floating-nav'}>
        <a className="floating-brand" href="#top" aria-label="Senty home"><img src="/senty-logo.svg" alt="Senty" /></a>
        <nav aria-label="Navigazione principale"><a href="#method">Metodo</a><a href="#insight">Insight</a><a href="#features">Funzionalità</a></nav>
        <a className="floating-cta" href="#demo">Richiedi una demo</a>
      </header>

      <main>
        <section className="hero v05-hero v06-hero v07-hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-panel" id="top">
            <div className="hero-brand-lockup"><img src="/senty-logo.svg" alt="Senty" /><span>Powered by Havas</span></div>
            <div className="hero-copy"><p className="eyebrow">Sentiment intelligence per brand</p><h1 id="hero-title">Capisci cosa sentono le persone. E cosa farne.</h1><p className="hero-intro">Senty raccoglie recensioni, commenti e feedback da più canali, li analizza con l’AI e li restituisce in insight chiari, comparabili e pronti per guidare le decisioni.</p><div id="demo"><DemoForm /></div><small>Demo guidata del prodotto e overview delle funzionalità.</small></div>
          </div>
        </section>

        <ClientStrip />

        <section className="story-section method-section" id="method" aria-labelledby="story-title">
          <div id="method-heading-wrap" className={methodTitleVisible ? 'section-intro method-intro method-intro-reveal is-visible' : 'section-intro method-intro method-intro-reveal'}>
            <h2 id="story-title"><span className="method-title-line"><span>Ascolta tutto.</span></span><span className="method-title-line"><span>Capisci cosa conta.</span></span></h2>
          </div>
          <div className="method-scroll">
            <div className="method-sticky">
              <div className="method-copy-panel">
                <div className="method-labels" aria-label="Fasi del metodo Senty">{moments.map((moment, index) => <button type="button" className={activeMoment === index ? 'method-label is-active' : 'method-label'} key={moment.label} onClick={() => jumpToMoment(index)} aria-pressed={activeMoment === index}>{moment.label}</button>)}</div>
                <div className="method-description" key={active.label}><h3>{active.title}</h3><p>{active.copy}</p></div>
              </div>
              <div className="method-visual"><MomentVisual active={activeMoment} offset={parallax} /></div>
            </div>
            <div className="method-triggers" aria-hidden="true">{moments.map((moment, index) => <div className="method-trigger" data-method-step={index} key={moment.label} />)}</div>
          </div>
          <div className="method-mobile">{moments.map((moment, index) => <article className="method-mobile-step" key={moment.label}><span>{moment.label}</span><h3>{moment.title}</h3><p>{moment.copy}</p><div className="method-mobile-visual"><MomentVisual active={index} /></div></article>)}</div>
        </section>

        <section className="insight-section" id="insight" aria-labelledby="insight-title">
          <div className="insight-orb insight-orb-a" /><div className="insight-orb insight-orb-b" />
          <div className="insight-layout"><div className="insight-copy-sticky"><p className="eyebrow">Dal capire all’agire</p><h2 id="insight-title">Non solo come si sentono.<br />Perché. E dove intervenire.</h2><p>Senty non si ferma alla raccolta dei dati: mette in evidenza ciò che cambia, cosa lo sta causando e quale priorità merita attenzione.</p></div><div className="insight-steps">{insightItems.map((item, index) => <article className={activeInsight === index ? 'insight-step is-active' : 'insight-step'} data-insight-step={index} key={item.title}><span className="insight-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p><div className="insight-metric"><span>{item.label}</span><strong>{item.value}</strong></div><div className={`insight-viz insight-viz-${index}`} aria-hidden="true"><i /><i /><i /><i /><i /></div></article>)}</div></div>
        </section>

        <section className="features-section" id="features" aria-labelledby="features-title">
          <div className="section-intro features-heading"><p className="eyebrow">Funzionalità</p><h2 id="features-title">La complessità resta sotto.<br />Tu vedi ciò che serve.</h2></div>
          <div className="capability-grid"><article><span>01</span><h3>Raccolta multi-canale</h3><p>Recensioni, social, survey, ticket e feedback riuniti in un’unica vista.</p></article><article><span>02</span><h3>Analisi del sentiment</h3><p>Sentiment, rating, trend, categorie e distribuzione geografica leggibili a colpo d’occhio.</p></article><article><span>03</span><h3>Insight e comparazioni</h3><p>Temi emergenti, driver positivi e negativi, benchmark e confronto con i competitor.</p></article><article><span>04</span><h3>Restituzione operativa</h3><p>Senty AI, sintesi, report e priorità condivisibili con i team che devono agire.</p></article></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-top"><div className="footer-brand"><img src="/senty-logo.svg" alt="Senty" /><span>Powered by Havas</span></div><div className="footer-cta"><h2>Vuoi capire meglio ciò che le persone sentono?</h2><DemoForm compact /></div></div><div className="footer-bottom"><span>SENTY-LP v0.7.0</span><span>Sentiment intelligence, resa semplice.</span></div></footer>
    </div>
  )
}
