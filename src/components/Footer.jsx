import { APP_STORE_URL, copy } from '../i18n'

export default function Footer({ locale }) {
  const t = copy[locale].footer
  const links = [
    { label: t.links.appStore, href: APP_STORE_URL, external: true },
    { label: t.links.privacy, href: 'https://tx-bit.github.io/Aurec-privacy/', external: true },
    { label: t.links.support, href: 'https://tx-bit.github.io/aurec-support/', external: true },
    { label: t.links.contact, href: 'mailto:rndoldtech@gmail.com', external: false },
  ]

  return (
    <footer style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section container" style={{ textAlign: 'center' }}>
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle" style={{ marginBottom: '40px' }}>{t.body}</p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '16px 28px', fontSize: '16px' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          {t.cta}
        </a>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="nav-logo-icon" style={{ width: 24, height: 24 }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="3" fill="white" />
                <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              </svg>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: 500 }}>Aurec</span>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '14px' }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '14px' }}>&copy; {new Date().getFullYear()}</span>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
