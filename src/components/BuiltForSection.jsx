import { useRef, useEffect } from 'react'
import { copy } from '../i18n'

function useCardRef() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function AudienceCard({ icon, title, description, delayClass }) {
  const ref = useCardRef()
  return (
    <div
      ref={ref}
      className={`glow-card reveal ${delayClass}`}
      style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
    >
      <div className="feature-icon-wrapper" style={{ flexShrink: 0, marginBottom: 0 }}>
        {icon}
      </div>
      <div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>
    </div>
  )
}

function SectionTitle({ locale }) {
  const ref = useCardRef()
  const t = copy[locale].builtFor
  return (
    <div ref={ref} className="reveal text-center" style={{ marginBottom: '64px' }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h2 className="section-title">
        {t.title1}
        <br />
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>{t.title2}</span>
      </h2>
    </div>
  )
}

const AUDIENCE_ICONS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18V6l12-2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 1a4 4 0 014 4v5a4 4 0 11-8 0V5a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const DELAY_CLASSES = ['delay-1', 'delay-2', 'delay-3']

export default function BuiltForSection({ locale }) {
  const t = copy[locale].builtFor
  const audiences = AUDIENCE_ICONS.map((audience, i) => ({
    ...audience,
    ...t.items[i],
  }))

  return (
    <section id="built-for" className="section container">
      <SectionTitle locale={locale} />
      <div className="features-grid" style={{ marginTop: 0 }}>
        {audiences.map(({ icon, title, description }, i) => (
          <AudienceCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            delayClass={DELAY_CLASSES[i % 3]}
          />
        ))}
      </div>
    </section>
  )
}
