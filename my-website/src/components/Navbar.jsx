import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <h1 className="logo">BuildFlow Studio</h1>
          <p className="tagline">Websites. Funnels. Systems.</p>
        </div>
        
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#packages" onClick={closeMenu}>Packages</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#process" onClick={closeMenu}>Process</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
        </ul>

        <button className="cta-button" onClick={closeMenu}>Get a Quote</button>
      </div>
    </nav>
  )
}
