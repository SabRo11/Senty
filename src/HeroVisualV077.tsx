const signals = [
  { source: 'Google', quote: 'Prodotto ottimo, consegna lenta.', sentiment: 'Misto', tone: 'neutral' },
  { source: 'Instagram', quote: 'Esperienza super intuitiva ✨', sentiment: 'Positivo', tone: 'positive' },
  { source: 'Survey', quote: 'Vorrei tempi di risposta più rapidi.', sentiment: 'Negativo', tone: 'negative' },
] as const

export default function HeroVisualV077() {
  return (
    <div className="hero-visual-v077" aria-label="Esempio di segnali trasformati in insight da Senty">
      <div className="hero-orbit-v077" aria-hidden="true" />
      <div className="hero-signal-stack-v077">
        {signals.map((signal, index) => (
          <article className={`hero-signal-card-v077 hero-signal-card-v077--${index + 1}`} key={signal.quote}>
            <div className="hero-signal-card-v077__topline">
              <span>{signal.source}</span>
              <span className={`hero-sentiment-v077 is-${signal.tone}`}>{signal.sentiment}</span>
            </div>
            <p>{signal.quote}</p>
          </article>
        ))}
      </div>
      <article className="hero-insight-card-v077">
        <span className="hero-insight-card-v077__badge">◆ Senty ha trovato un pattern</span>
        <h2>Il servizio sta diventando il principale driver del sentiment.</h2>
        <p>+18% menzioni nelle ultime 4 settimane</p>
      </article>
    </div>
  )
}
