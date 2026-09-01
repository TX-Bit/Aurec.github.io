import { useInView } from '../hooks/useInView'
import { copy } from '../i18n'

const PILLAR_ICONS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6h6M9 10h6M9 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function TrustSection({ locale }) {
  const titleRef = useInView()
  const t = copy[locale].trust
  const pillars = PILLAR_ICONS.map((pillar, i) => ({
    ...pillar,
    ...t.items[i],
  }))

  return (
    <section className="section container">
      <div ref={titleRef} className={`text-center reveal ${titleRef.current ? 'visible' : ''}`} style={{ marginBottom: '64px' }}>
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">
          {t.title1}
          <br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>{t.title2}</span>
        </h2>
        <p className="section-subtitle">
          {t.intro}
        </p>
      </div>

      <div className="features-grid" style={{ marginTop: 0 }}>
        {pillars.map(({ icon, title, description }, i) => (
          <div
            key={title}
            className={`glow-card reveal delay-${i + 1} ${titleRef.current ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div className="feature-icon-wrapper" style={{ marginBottom: 0 }}>
              {icon}
            </div>
            <div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
