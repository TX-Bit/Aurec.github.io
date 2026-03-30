import { useEffect, useState } from 'react'

// ─── App Store URL placeholder ────────────────────────────────────────────────
const APP_STORE_URL = 'https://apps.apple.com'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/80 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center shadow-lg shadow-accent/30 transition-transform duration-200 group-hover:scale-105">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="white" />
              <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
            </svg>
          </span>
          <span className="text-white font-semibold tracking-tight text-[15px]">Aurec</span>
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Built For', href: '#built-for' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.13] border border-white/[0.08] px-4 py-2 rounded-full transition-all duration-200"
        >
          Download
        </a>
      </nav>
    </header>
  )
}
