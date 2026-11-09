import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Festival Horizon, accueil">
        <span className="brand-mark" aria-hidden="true">FH</span>
        <span>Festival <strong>Horizon</strong></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      <nav id="main-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
        <a href="#programme" onClick={() => setMenuOpen(false)}>Programme</a>
        <a href="#artistes" onClick={() => setMenuOpen(false)}>Artistes</a>
        <a href="#billetterie" onClick={() => setMenuOpen(false)}>Billetterie</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      </nav>
      <a className="button button-small header-cta" href="#billetterie">Prendre un billet <span aria-hidden="true">↗</span></a>
    </header>
  )
}
