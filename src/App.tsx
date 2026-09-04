import { useState } from 'react'

type Tool = 'chat' | 'workspace'

const tools: Array<{ id: Tool; label: string }> = [
  { id: 'chat', label: 'Chat' },
  { id: 'workspace', label: 'Workspace' },
]

function ChatPanel() {
  return (
    <section className="panel" aria-labelledby="chat-title">
      <div className="panel-copy">
        <span className="eyebrow">Senty AI</span>
        <h1 id="chat-title">Da dove vuoi partire?</h1>
        <p>
          Scrivi quello che devi fare. Senty mantiene il contesto e ti porta subito
          verso il prossimo passo utile.
        </p>
      </div>

      <form className="composer" onSubmit={(event) => event.preventDefault()}>
        <label className="sr-only" htmlFor="message">
          Scrivi un messaggio
        </label>
        <textarea id="message" rows={4} placeholder="Scrivi qui…" />
        <div className="composer-footer">
          <button className="ghost-button" type="button" aria-label="Aggiungi allegato">
            +
          </button>
          <button className="primary-button" type="submit">
            Invia
          </button>
        </div>
      </form>
    </section>
  )
}

function WorkspacePanel() {
  return (
    <section className="panel" aria-labelledby="workspace-title">
      <div className="panel-copy">
        <span className="eyebrow">Secondo tool</span>
        <h1 id="workspace-title">Uno spazio semplice, senza rumore.</h1>
        <p>
          Questa area è già predisposta per il secondo strumento di Senty. Naming,
          funzioni e contenuti verranno definiti nella prossima iterazione.
        </p>
      </div>
      <div className="placeholder-card">
        <span>Struttura pronta</span>
        <strong>Contenuto da definire</strong>
      </div>
    </section>
  )
}

export default function App() {
  const [activeTool, setActiveTool] = useState<Tool>('chat')

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Senty home">
          Senty
        </a>

        <nav className="tool-switcher" aria-label="Strumenti Senty">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={activeTool === tool.id ? 'tool-button is-active' : 'tool-button'}
              type="button"
              onClick={() => setActiveTool(tool.id)}
            >
              {tool.label}
            </button>
          ))}
        </nav>

        <button className="profile-button" type="button" aria-label="Profilo">
          S
        </button>
      </header>

      <main className="content">
        {activeTool === 'chat' ? <ChatPanel /> : <WorkspacePanel />}
      </main>
    </div>
  )
}
