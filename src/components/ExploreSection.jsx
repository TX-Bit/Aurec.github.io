import React, { useRef, useEffect } from 'react'
import { SEO_PAGES } from '../data/seoPagesData'

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

export default function ExploreSection() {
  const titleRef = useCardRef()

  return (
    <section id="explore" className="section container" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div ref={titleRef} className="reveal text-center" style={{ marginBottom: '56px' }}>
        <p className="eyebrow">Use Cases & Guides</p>
        <h2 className="section-title">
          Explore Aurec.
          <br />
          <span className="gradient-text">Tailored for Your Sound.</span>
        </h2>
        <p className="section-subtitle">
          Record instantly, then add tracks and edit when you need to. Discover guides for songwriters, vocalists, and creators.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {SEO_PAGES.map((page, idx) => (
          <a
            key={page.slug}
            href={page.path}
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
                {page.badge}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>
                {page.h1}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {page.metaDescription}
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
              <span>Read guide</span>
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
