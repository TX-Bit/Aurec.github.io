import { useEffect, useState } from 'react'
import { APP_STORE_URL, copy } from '../i18n'
import HeroHeadline from './HeroHeadline'

const BASE = import.meta.env.BASE_URL

export default function HeroSection({ locale }) {
  const [mounted, setMounted] = useState(false)
  const t = copy[locale].hero
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="hero">
      <div className="hero-bg-mesh" />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-content">
          {/* Left — copy */}
          <div className="hero-text">
            {/* Badge */}
            <div className={`hero-badge transition-all duration-700 ${mounted ? 'reveal visible' : 'reveal'}`}>
              <span className="rec-dot" />
              {t.badge}
            </div>

            {/* Headline */}
            <HeroHeadline
              locale={locale}
              className={`transition-all duration-700 delay-1 ${mounted ? 'reveal visible' : 'reveal'}`}
            />

            {/* Subhead */}
            <p className={`hero-desc transition-all duration-700 delay-2 ${mounted ? 'reveal visible' : 'reveal'}`}>
              {t.subhead}
            </p>

            {/* CTAs */}
            <div className={`hero-ctas transition-all duration-700 delay-3 ${mounted ? 'reveal visible' : 'reveal'}`}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t.primaryCta}
              </a>

              <a href="#features" className="btn-secondary">
                {t.secondaryCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: '6px' }}>
                  <path d="M1 7h12M8 2.5l4.5 4.5L8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — 3D floating screenshot */}
          <div className={`hero-visual transition-all duration-1000 delay-2 ${mounted ? 'reveal visible' : 'reveal'}`}>
            <div className="hero-mockup-wrapper">
              <div className="hero-mockup-glow" />
              <img src={`${BASE}screenshots/iphone/01-recorder.png`} alt="Aurec Voice Recorder" className="hero-mockup-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
