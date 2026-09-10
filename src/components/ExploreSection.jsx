import React, { useRef, useEffect } from 'react'
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function ExploreSection({ locale = 'en' }) {
  const titleRef = useCardRef()
  const t = copy[locale]?.explore || copy.en.explore

  return (
    <section id="explore" className="section container" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div ref={titleRef} className="reveal text-center" style={{ marginBottom: '56px' }}>
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">
          {t.title1}
          <br />
          <span className="gradient-text">{t.title2}</span>
        </h2>
        <p className="section-subtitle">
          {t.subtitle}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {t.items.map((item) => (
          <a
            key={item.path}
            href={`${item.path}${locale !== 'en' ? '?lang=' + locale : ''}`}
            className="glow-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '28px 24px',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent-color)',
                marginBottom: '12px',
              }}>
                <span className="rec-dot" style={{ width: 5, height: 5 }} />
                {item.badge}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {item.description}
              </p>
            </div>

            <div style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span>{t.readGuide}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
