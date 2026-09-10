import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import HeroVisualV077 from './HeroVisualV077'

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

function ChannelIcon({ type }: { type: 'ig' | 'ta' | 'g' }) {
  return <span className={`channel-icon-v076 channel-icon-v076--${type}`} aria-hidden="true">{type === 'ig' ? '◎' : type === 'ta' ? '●●' : 'G'}</span>
}

function ReviewCard({ className, channel, name, age, sentiment, children }: { className: string; channel: 'ig' | 'ta' | 'g'; name: string; age: string; sentiment: string; children: ReactNode }) {
  return (
    <article className={`review-card-v076 ${className}`}>
      <div className="review-card-v076__head"><ChannelIcon type={channel} /><div><strong>{name}</strong><small>{age}</small></div><span className={`review-sentiment-v076 is-${sentiment.toLowerCase()}`}>{sentiment}</span></div>
      {children}
    </article>
  )
}

function CollectScene() {
  return (
    <div className="scene collect-scene-v076">
      <ReviewCard className="review-card-v076--one" channel="ig" name="giulia.m" age="2 giorni fa" sentiment="Positivo">
        <p>Esperienza top! ✨<br />Tutto super semplice e intuitivo</p><div className="review-social-v076"><span>♥ <b>128</b></span><span>◯ <b>12</b></span></div>
      </ReviewCard>
      <ReviewCard className="review-card-v076--two" channel="ta" name="Martina P." age="3 giorni fa" sentiment="Misto">
        <div className="review-stars-v076 is-green">★★★<span>★★</span></div><p>Ottima qualità, ma i tempi di<br />attesa potrebbero migliorare.</p>
      </ReviewCard>
      <ReviewCard className="review-card-v076--three" channel="ig" name="ale_93" age="5 giorni fa" sentiment="Negativo">
        <p>Non sono riuscito a contattare<br />il servizio clienti</p><div className="review-social-v076"><span>♥ <b>64</b></span><span>◯ <b>4</b></span></div>
      </ReviewCard>
      <ReviewCard className="review-card-v076--four" channel="g" name="Luca R." age="1 settimana fa" sentiment="Misto">
        <div className="review-stars-v076 is-orange">★★★<span>★★</span></div><p>Prezzi un po’ troppo alti rispetto<br />alla media.</p>
      </ReviewCard>
    </div>
  )
}

function AnalyzeScene() {
  return (
    <div className="scene analyze-scene-v076">
      <article className="an-total-v076"><strong>752</strong><div><b>Total<br />reviews</b><span>Average reviews<br />4,7 ★</span></div></article>
      <article className="an-sentiment-v076"><div className="an-card-head-v076"><span>Sentiment</span><b>Ultimi 30 giorni</b></div><div className="an-pie-v076" /><div className="an-legend-v076"><span><i className="positive" />Positivo <b>32%</b></span><span><i className="neutral" />Neutro <b>22%</b></span><span><i className="negative" />Negativo <b>46%</b></span></div></article>
      <article className="an-performance-v076"><div className="an-card-head-v076"><span>Performance</span><b>Ultimo semestre</b></div><div className="an-bars-v076"><i style={{'--v':'52%'} as CSSProperties}/><i style={{'--v':'24%'} as CSSProperties}/><i className="is-marked" style={{'--v':'67%'} as CSSProperties}/><i style={{'--v':'30%'} as CSSProperties}/><i style={{'--v':'91%'} as CSSProperties}/></div></article>
      <article className="an-trend-v076"><svg viewBox="0 0 560 240" role="img" aria-label="Andamento illustrativo delle recensioni"><path className="trend-grid-v076" d="M40 35H535M40 80H535M40 125H535M40 170H535M40 215H535"/><path className="trend-green-v076" d="M45 112 C70 84 77 105 94 92 S122 50 143 64 S203 112 225 128 S245 141 264 108 S281 99 295 84 S312 47 329 61 S362 104 382 121 S402 112 414 88 S433 117 448 143 S472 160 487 134 S509 111 532 163"/><path className="trend-lilac-v076" d="M45 186 L100 153 L145 184 L215 130 L300 174 L368 145 L430 184 L490 153 L532 177"/><path className="trend-orange-v076" d="M45 204 L80 183 L102 194 L145 164 L217 209 L270 178 L312 196 L365 150 L432 196 L462 165 L510 229 L532 202"/></svg><div className="trend-axis-v076"><span>01/05</span><span>08/05</span><span>15/05</span><span>22/05</span><span>31/05</span></div></article>
    </div>
  )
}

function UnderstandScene() {
  return (
    <div className="scene understand-scene-v076">
      <article className="understand-trust-v076"><div className="trust-title-v076"><span>♧</span><strong>Fiducia</strong></div><b>Fiducia variabile, influenzata da esperienze contrastanti.</b><p>Molti clienti esprimono fiducia nella qualità dei prodotti, ma ci sono anche segnalazioni di insoddisfazione riguardo al servizio clienti e alla gestione degli ordini.</p></article>
      <article className="understand-kpi-v076"><strong>↗ +65%</strong><span>Rispetto al mese precedente</span></article>
      <article className="understand-pattern-v076"><span>◆ Senty ha trovato un pattern</span><p>Le citazioni sul <b>Servizio</b> crescono insieme<br />al sentiment positivo.</p></article>
      <article className="understand-driver-v076"><div className="driver-head-v076"><span>Score by category</span><b>Ultimo anno</b></div><div className="driver-title-v076"><strong>Qualità è il driver #1</strong><b>+24</b></div><div className="driver-grid-v076"><span>Esperienza<br /><b>+ 17 → stabile</b></span><span>Qualità<br /><b>+ 24 → rialzo</b></span><span>Pricing<br /><b>- 9 → ribasso</b></span></div></article>
    </div>
  )
}

function CompareScene() {
  const groups = [
    { stars: 5, brand: 49, competitor: 79 },
    { stars: 4, brand: 68, competitor: 32 },
    { stars: 3, brand: 57, competitor: 45 },
    { stars: 2, brand: 31, competitor: 15 },
    { stars: 1, brand: 46, competitor: 73 },
  ]
  return (
    <div className="scene compare-scene-v076">
      <div className="compare-top-v076"><div><span>CONFRONTO COMPETITIVO</span><h4>Star rating</h4></div><div className="compare-tabs-v076"><span>Giornaliero</span><b>Mensile</b><span>Annuale</span></div></div>
      <div className="compare-chart-v076"><div className="compare-y-v076"><span>1.000</span><span>800</span><span>600</span><span>400</span><span>200</span><span>0</span></div><div className="compare-grid-v076" />
        <div className="compare-groups-v076">{groups.map((group, index) => <div className="compare-group-v076" key={group.stars}><div className="compare-bars-pair-v076"><i className="brand" style={{ height: `${group.brand}%` }} /><i className="competitor" style={{ height: `${group.competitor}%` }} />{index === 1 && <span className="compare-tooltip-v076">● 678<br />● 371</span>}</div><div className="compare-stars-v076">{'★'.repeat(group.stars)}<span>{'★'.repeat(5-group.stars)}</span></div></div>)}</div>
      </div>
      <div className="compare-key-v076"><span><i className="brand" />Il tuo brand</span><span><i className="competitor" />Competitor</span></div>
    </div>
  )
}

function ReturnScene() {
  return (
    <div className="scene return-scene-v076">
      <article className="return-brief-v076"><span>◆ Senty Analytics</span><strong>Brief settimanale</strong><p>Insight pronto da condividere</p></article>
      <article className="return-share-v076"><strong>Cosa condividere con il team</strong><p>◎&nbsp; Tema chiave: tempi di attesa<br />♧&nbsp; Driver collegati: servizio, organizzazione<br />⚐&nbsp; Priorità: intervenire nelle sedi</p></article>
      <article className="return-alert-v076"><div><span>Priorità alta</span><b>Operations</b></div><strong>⚠ +18% <small>Mention<br />Negative</small></strong><p>Allinea le aspettative sui tempi di servizio</p></article>
      <article className="return-action-v076"><span>◆ Senty Analytics</span><strong>Il prezzo è il principale driver<br />negativo dei nuovi clienti</strong><p>○&nbsp; Condivisione il trend con il team commerciale</p></article>
    </div>
  )
}

function PublicMethodScene({ index, fallback }: { index: number; fallback: ReactNode }) {
  const [assetAvailable, setAssetAvailable] = useState(true)
  const assetSrc = `/${moments[index].label.toLocaleLowerCase('it-IT')}.jpg`

  if (!assetAvailable) return <>{fallback}</>

  return (
    <div className="scene method-public-image-scene">
      <img
        className="method-public-image"
        src={assetSrc}
        alt={`Visual ${moments[index].label}`}
        loading="eager"
        decoding="async"
        onError={() => setAssetAvailable(false)}
      />
    </div>
  )
}

function MomentVisual({ active }: { active: number }) {
  const fallbacks = [<CollectScene />, <AnalyzeScene />, <UnderstandScene />, <CompareScene />, <ReturnScene />]
  return <div className="moment-canvas" aria-live="polite">{fallbacks.map((fallback, index) => <div className={active === index ? 'moment-panel is-active' : 'moment-panel'} key={index}><PublicMethodScene index={index} fallback={fallback} /></div>)}</div>
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

  const active = moments[activeMoment]
  const jumpToMoment = (index: number) => {
    setActiveMoment(index)
    document.querySelector<HTMLElement>(`[data-method-step="${index}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="site-shell v05-shell v06-shell v07-shell v071-shell v076-shell v077-shell">
      <header className={showNav ? 'floating-nav is-visible' : 'floating-nav'}>
        <a className="floating-brand" href="#top" aria-label="Senty home"><img src="/senty-logo.svg" alt="Senty" /></a>
        <nav aria-label="Navigazione principale"><a href="#method">Metodo</a><a href="#insight">Insight</a><a href="#features">Funzionalità</a></nav>
        <a className="floating-cta" href="#demo">Richiedi una demo</a>
      </header>

      <main>
        <section className="hero v05-hero v06-hero v07-hero v071-hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-panel hero-panel-v071" id="top">
            <div className="hero-content-v071">
              <div className="hero-brand-lockup"><img src="/senty-logo.svg" alt="Senty" /><span>Powered by Havas</span></div>
              <div className="hero-main-v077">
                <div className="hero-copy"><p className="eyebrow">Sentiment intelligence per brand</p><h1 id="hero-title">Capisci cosa sentono le persone. E cosa farne.</h1><p className="hero-intro">Senty raccoglie recensioni, commenti e feedback da più canali, li analizza con l’AI e li restituisce in insight chiari, comparabili e pronti per guidare le decisioni.</p><div id="demo"><DemoForm /></div><small>Demo guidata del prodotto e overview delle funzionalità.</small></div>
                <HeroVisualV077 />
              </div>
            </div>
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
              <div className="method-visual"><MomentVisual active={activeMoment} /></div>
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

      <footer className="footer"><div className="footer-top"><div className="footer-brand"><img src="/senty-logo.svg" alt="Senty" /><span>Powered by Havas</span></div><div className="footer-cta"><h2>Vuoi capire meglio ciò che le persone sentono?</h2><DemoForm compact /></div></div><div className="footer-bottom"><span>SENTY-LP v0.7.7</span><span>Sentiment intelligence, resa semplice.</span></div></footer>
    </div>
  )
}
