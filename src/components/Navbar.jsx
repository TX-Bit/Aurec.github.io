import { useEffect, useState } from 'react'
import { APP_STORE_URL, LOCALES, copy, getLocalePath, localeNames } from '../i18n'

export default function Navbar({ locale }) {
  const [scrolled, setScrolled] = useState(false)
  const t = copy[locale]
  const otherLocales = LOCALES.filter(code => code !== locale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container navbar-inner">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="white" />
              <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
            </svg>
          </span>
          <span>Aurec</span>
        </a>

        {/* Nav links */}
        <ul className="nav-links">
          {[
            { label: t.nav.features, href: '#features' },
            { label: t.nav.builtFor, href: '#built-for' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          {otherLocales.map(code => (
            <a
              key={code}
              href={getLocalePath(code)}
              lang={code}
              title={localeNames[code]}
              className="nav-btn"
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              {code.toUpperCase()}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            {t.nav.download}
          </a>
        </div>
      </nav>
    </header>
  )
}
