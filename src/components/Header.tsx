import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  function closeMenu() { setOpen(false) }
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Festival Horizon, accueil"><span className="brand-mark" aria-hidden="true">FH</span><span>Festival <strong>Horizon</strong></span></a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>Menu</button>
      <nav id="main-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
        <a href="/programme" onClick={closeMenu}>Programme</a><a href="/artistes/northern-lights" onClick={closeMenu}>Artistes</a><a href="/billetterie" onClick={closeMenu}>Billetterie</a><a href="/infos-pratiques" onClick={closeMenu}>Infos pratiques</a>
      </nav>
      <a className="button button-small header-cta" href="/billetterie">Prendre un billet <span aria-hidden="true">↗</span></a>
    </header>
  )
}
