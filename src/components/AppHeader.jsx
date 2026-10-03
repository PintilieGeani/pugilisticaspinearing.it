import { useEffect, useRef, useState } from 'react'
import logoNuovo from '../assets/loghi/logo-nuovo.webp'
import logoFpi from '../assets/loghi/logo-fpi.png'

function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const mobileQuery = window.matchMedia('(max-width: 600px)')
    const handleBreakpointChange = () => setIsMenuOpen(false)

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    mobileQuery.addEventListener('change', handleBreakpointChange)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      mobileQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [isMenuOpen])

  useEffect(() => {
    let previous = window.scrollY > 0
    const handleScroll = () => {
      const next = window.scrollY > 0
      if (next === previous) return
      previous = next
      setIsScrolled(next)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header ref={headerRef} className={`app-header${isScrolled ? ' app-header--scrolled' : ''}${isMenuOpen ? ' app-header--menu-open' : ''}`}>
      <a className="app-header__brand" href="#hero" onClick={() => setIsMenuOpen(false)}>
        <img className="app-header__logo rounded-logo" src={logoNuovo} alt="Pugilistica Spinea Ring" />
      </a>
      <div className="app-header__secondary-logo">
        <img className="app-header__logo" src={logoFpi} alt="Federazione Pugilistica Italiana" />
      </div>
      <button
        ref={menuButtonRef}
        type="button"
        className="app-header__menu-toggle"
        aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        aria-expanded={isMenuOpen}
        aria-controls="header-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav id="header-navigation" aria-label="Navigazione principale">
        <div className="app-header__nav-links" onClick={() => setIsMenuOpen(false)}>
        <a className="app-header__link font-oswald" href="#hero">
          Home
        </a>
        <a className="app-header__link font-oswald" href="#storia">
          La nostra storia
        </a>
        <a className="app-header__link font-oswald" href="#obiettivi">
          Obiettivi
        </a>
        <a className="app-header__link font-oswald" href="#contatti">
          Contatti
        </a>
        </div>
      </nav>
      
    </header>
  )
}

export default AppHeader
