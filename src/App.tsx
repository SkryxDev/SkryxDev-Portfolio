import { useEffect, useRef, useState } from 'react'
import './App.css'

const stack = [
  { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
  { name: 'macOS', icon: 'https://skillicons.dev/icons?i=apple' },
  { name: 'Proxmox', icon: 'https://cdn.simpleicons.org/proxmox/ffffff' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'ReactJS',
  'Express',
  'Proxmox',
  'LXC',
]

const projects = [
  {
    title: 'Discord Utility Bot',
    text: 'Bot fatto con discord.js con comandi utili, log moderazione e roba quality of life per server piccoli.',
  },
  {
    title: 'Mini Dashboard Web',
    text: 'Dashboard semplice per tenere sott occhio dati live, fatta senza overengineering.',
  },
  {
    title: 'Home Lab Stuff',
    text: 'Esperimenti su Proxmox e container per imparare, rompere cose e poi sistemarle meglio di prima.',
  },
]

function App() {
  const [discordCopied, setDiscordCopied] = useState(false)
  const copyTimerRef = useRef<number | null>(null)
  const discordTag = '24_7dev'

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(discordTag)
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current)
      }
      setDiscordCopied(true)
      copyTimerRef.current = window.setTimeout(() => {
        setDiscordCopied(false)
        copyTimerRef.current = null
      }, 1400)
    } catch {
      setDiscordCopied(false)
    }
  }

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current)
      }
    }
  }, [])

  return (
    <div className="page-shell">
      <div className="noise" aria-hidden="true" />
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />
      <div className="orbital" aria-hidden="true" />

      <header className="hero">
        <p className="chip">SkryxDev • 15 y/o from Italy</p>
        <h1>
          SkryxDev
          <span>Portfolio</span>
        </h1>
        <p className="lead">
          Ciao, sono Skryx, ho 15 anni e vengo dall&apos;Italia. Faccio web dev,
          bot Discord con `discord.js` e un po&apos; di proxmox shii nel tempo libero.
        </p>
      </header>

      <main className="content-grid">
        <section className="card intro-card">
          <p className="card-label">How I Work</p>
          <h2>Faccio cose semplici che funzionano.</h2>
          <p>
            Mi piace scrivere codice pulito e ordinato. Uso
            soprattutto React + TypeScript per il frontend, `discord.js` con i module exports per i
            bot e quando serve anche backend per siti con Express.
          </p>
        </section>

        <section className="card profile-card">
          <p className="card-label">Profile</p>
          <ul>
            <li>
              <strong>Age</strong>
              <span>15</span>
            </li>
            <li>
              <strong>Discord</strong>
              <span className="discord-copy-wrap">
                <span
                  className={`discord-pop ${discordCopied ? 'is-visible' : ''}`}
                  role="status"
                  aria-live="polite"
                >
                  Copiato
                </span>
                <button
                  type="button"
                  className="discord-copy-btn"
                  onClick={handleCopyDiscord}
                  aria-label="Copy Discord username"
                >
                  {discordTag}
                </button>
              </span>
            </li>
            <li>
              <strong>GitHub</strong>
              <a
                className="github-link"
                href="https://github.com/skryxdev"
                aria-label="Open SkryxDev GitHub profile"
              >
                <svg className="github-link-icon" viewBox="0 0 19 19" aria-hidden="true">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
                    clipRule="evenodd"
                  />
                </svg>
                <span>SkryxDev</span>
              </a>
            </li>
            <li>
              <strong>From</strong>
              <span>Italy, Vicenza</span>
            </li>
            <li>
              <strong>OS</strong>
              <span>macOS Tahoe</span>
            </li>
            <li>
              <strong>IDE</strong>
              <span>Visual Studio Code</span>
            </li>
          </ul>
        </section>

        <section className="card device-card">
          <p className="card-label">Primary Device</p>
          <h3>MacBook Air M4 13&quot; • Midnight Blue</h3>
          <div className="device-specs">
            <span>16GB RAM</span>
            <span>256GB Storage</span>
            <span>Apple Silicon M4</span>
          </div>
          <p>
            E il mio setup daily: leggero, silenzioso e perfetto per code,
            Discord, browser aperti e sessioni lunghe.
          </p>
        </section>

        <section className="card skills-card">
          <p className="card-label">Languages & Tech</p>
          <div className="skills-wrap">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="card contact-card">
          <p className="card-label">Contact</p>
          <a className="mail-link" href="mailto:dev@skryxdev.eu">
            dev@skryxdev.eu
          </a>
          <p>Se vuoi fare qualcosa insieme, scrivimi pure senza problemi.</p>
        </section>

        <section className="card projects-card">
          <p className="card-label">Project Mood</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-item">
                <h4>{project.title}</h4>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card icon-card">
          <p className="card-label">Current Stack</p>
          <div className="icon-grid">
            {stack.map((item) => (
              <div key={item.name} className="icon-item" aria-label={item.name}>
                <img src={item.icon} alt={item.name} loading="lazy" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
