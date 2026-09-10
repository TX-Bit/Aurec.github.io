import React, { useState, useEffect } from 'react'
import { APP_STORE_URL, trackAppStoreClick } from '../utils/analytics'
import { SEO_PAGES } from '../data/seoPagesData'
import { SEO_PAGES_FI } from '../data/seoPagesDataFi'

export default function SeoLandingPage({ pageData }) {
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [currentLocale, setCurrentLocale] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const params = new URLSearchParams(window.location.search)
    const forced = params.get('lang')?.toLowerCase()
    if (forced === 'fi') return 'fi'
    return 'en'
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(prev => (prev === index ? null : index))
  }

  const handleLanguageChange = (lang) => {
    setCurrentLocale(lang)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location)
      if (lang === 'en') {
        url.searchParams.delete('lang')
      } else {
        url.searchParams.set('lang', lang)
      }
      window.history.replaceState({}, '', url)
    }
  }

  const fiData = SEO_PAGES_FI[pageData.slug]
  const isFi = currentLocale === 'fi' && !!fiData
  const activeData = isFi ? { ...pageData, ...fiData } : pageData

  const otherPages = SEO_PAGES.filter(p => p.slug !== pageData.slug).map(p => {
    if (isFi && SEO_PAGES_FI[p.slug]) {
      return { ...p, ...SEO_PAGES_FI[p.slug] }
    }
    return p
  })

  const handleAppStoreClick = (placement) => {
    trackAppStoreClick(placement, pageData.path)
  }

  const homeHref = isFi ? '/fi/' : '/'

  return (
    <div className="seo-page-root">
      {/* ── Top Navigation ────────────────────────────────────── */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <nav className="container navbar-inner" aria-label="Main Navigation">
          <a href={homeHref} className="nav-logo" title="Aurec - Back to Home">
            <span className="nav-logo-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="3" fill="white" />
                <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              </svg>
            </span>
            <span>Aurec</span>
          </a>

          <ul className="nav-links">
            <li><a href={homeHref} className="nav-link">{isFi ? 'Etusivu' : 'Home'}</a></li>
            <li><a href="#features" className="nav-link">{isFi ? 'Ominaisuudet' : 'Features'}</a></li>
            <li><a href="#specs" className="nav-link">{isFi ? 'Tekniset tiedot' : 'Specs'}</a></li>
            <li><a href="#workflow" className="nav-link">{isFi ? 'Työnkulku' : 'Workflow'}</a></li>
            <li><a href="#faq" className="nav-link">{isFi ? 'UKK' : 'FAQ'}</a></li>
            <li><a href="#guides" className="nav-link">{isFi ? 'Oppaat' : 'Guides'}</a></li>
          </ul>

          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="lang-dropdown">
              <button className="nav-btn" style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer' }}>
                {currentLocale.toUpperCase()} ▼
              </button>
              <div className="lang-menu">
                {currentLocale !== 'en' && (
                  <button
                    onClick={() => handleLanguageChange('en')}
                    style={{ background: 'none', border: 'none', color: '#fff', padding: '8px 16px', textAlign: 'left', cursor: 'pointer', width: '100%', fontSize: '13px' }}
                  >
                    English (EN)
                  </button>
                )}
                {currentLocale !== 'fi' && (
                  <button
                    onClick={() => handleLanguageChange('fi')}
                    style={{ background: 'none', border: 'none', color: '#fff', padding: '8px 16px', textAlign: 'left', cursor: 'pointer', width: '100%', fontSize: '13px' }}
                  >
                    Suomi (FI)
                  </button>
                )}
              </div>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
              onClick={() => handleAppStoreClick('navbar_download')}
            >
              {isFi ? 'Lataa' : 'Download'}
            </a>
          </div>
        </nav>
      </header>

      <main style={{ paddingTop: '80px' }}>
        {/* ── Breadcrumb Navigation ─────────────────────────────── */}
        <div className="container" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
          <nav aria-label="Breadcrumbs" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <a href={homeHref} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>
              {isFi ? 'Etusivu' : 'Home'}
            </a>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>
              {isFi ? 'Oppaat' : 'Guides'}
            </span>
            <span>/</span>
            <span style={{ color: 'var(--accent-color)', fontWeight: 500 }} aria-current="page">
              {activeData.badge || activeData.h1}
            </span>
          </nav>
        </div>

        {/* ── Hero Section ──────────────────────────────────────── */}
        <section className="hero" style={{ minHeight: 'auto', padding: '40px 0 80px' }}>
          <div className="hero-bg-mesh" />
          <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
            <div className="hero-content">
              {/* Hero Text */}
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="rec-dot" />
                  {activeData.badge}
                </div>

                <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
                  {activeData.h1}
                </h1>

                <p className="hero-desc" style={{ maxWidth: '600px' }}>
                  {activeData.heroSubtitle}
                </p>

                <div className="hero-ctas">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    onClick={() => handleAppStoreClick('hero_cta')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    {isFi ? 'Lataa App Storesta' : 'Download on the App Store'}
                  </a>

                  <a href="#features" className="btn-secondary">
                    {isFi ? 'Katso lisätiedot' : 'Explore Details'}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: '6px' }}>
                      <path d="M1 7h12M8 2.5l4.5 4.5L8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hero Visual Mockup */}
              <div className="hero-visual">
                <div className={`hero-mockup-wrapper ${activeData.heroImage?.device === 'ipad' ? 'hero-mockup-ipad-wrapper' : ''}`}>
                  <div className="hero-mockup-glow" />
                  <img
                    src={activeData.heroImage?.src || '/screenshots/iphone/recorder.png'}
                    alt={activeData.heroImage?.alt || `Aurec interface screenshot for ${activeData.h1}`}
                    className={`hero-mockup-img${activeData.heroImage?.device === 'ipad' ? ' hero-mockup-ipad' : ''}`}
                    width={activeData.heroImage?.device === 'ipad' ? '360' : '280'}
                    height={activeData.heroImage?.device === 'ipad' ? '480' : '608'}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Specs Grid ──────────────────────────────── */}
        <section id="specs" className="container" style={{ padding: '20px 24px 60px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}>
            {activeData.technicalSpecs.map((spec, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '18px',
                  padding: '24px 20px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Practical Guide & Editorial Deep-Dive ─────────────── */}
        {activeData.guideSections && activeData.guideSections.length > 0 && (
          <section className="container" style={{ padding: '20px 24px 60px', maxWidth: '840px', margin: '0 auto' }}>
            {activeData.disclaimer && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '16px 20px',
                marginBottom: '36px',
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.7)',
              }}>
                <span style={{ fontWeight: 600, color: '#fff' }}>{isFi ? 'Tärkeä huomautus: ' : 'Important Notice: '}</span>
                {activeData.disclaimer}
              </div>
            )}
            {activeData.guideSections.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)', fontWeight: 700, color: '#fff', marginBottom: '18px', lineHeight: 1.25 }}>
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '16px' }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            ))}
          </section>
        )}

        {/* ── Core Features Section ─────────────────────────────── */}
        <section id="features" className="section container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
          <div className="text-center">
            <span className="eyebrow">{isFi ? 'Tärkeimmät ominaisuudet' : 'Key Capabilities'}</span>
            <h2 className="section-title">
              {isFi ? 'Suunniteltu äänenlaadulle.' : 'Engineered for Sound.'}
              <br />
              <span className="gradient-text">{isFi ? 'Ilman kompromisseja.' : 'Zero Compromises.'}</span>
            </h2>
            <p className="section-subtitle">
              {isFi
                ? 'Kaikki Aurecin työkalut hyödyntävät iOS:n natiiveja äänikehyksiä matalan viiveen ja luotettavan vakauden takaamiseksi.'
                : 'Every tool in Aurec is built directly into native iOS audio frameworks for low latency, high dynamic range, and rock-solid stability.'}
            </p>
          </div>

          <div className="features-grid" style={{ marginTop: '48px' }}>
            {activeData.coreFeatures.map((feat, idx) => (
              <div key={idx} className="glow-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className={`feature-icon-wrapper ${idx === 0 ? 'accent' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {idx === 0 && <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
                      {idx === 1 && <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />}
                      {idx === 2 && <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />}
                      {idx === 3 && <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />}
                    </svg>
                  </div>
                  <h3 className="feature-title">{feat.title}</h3>
                  <p className="feature-desc">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Workflow Steps ────────────────────────────────────── */}
        <section id="workflow" className="section container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="text-center">
            <span className="eyebrow">{isFi ? 'Työnkulku' : 'How It Works'}</span>
            <h2 className="section-title">
              {isFi ? 'Miten se toimii' : 'Simple 3-Step Workflow'}
            </h2>
            <p className="section-subtitle">
              {isFi
                ? 'Ideasta valmiiseen tallenteeseen muutamalla napautuksella.'
                : 'From the initial burst of inspiration to finished, uncompressed stems ready for your DAW.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}>
            {activeData.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="glow-card"
                style={{ padding: '36px 28px', position: 'relative' }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'rgba(242, 49, 69, 0.4)',
                  marginBottom: '16px',
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ Section (Structured Accordion) ────────────────── */}
        <section id="faq" className="section container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">{isFi ? 'Vastauksia kysymyksiin' : 'Questions & Answers'}</span>
            <h2 className="section-title">
              {isFi ? 'Usein kysytyt kysymykset' : 'Frequently Asked Questions'}
            </h2>
            <p className="section-subtitle">
              {isFi
                ? `Yleisiä kysymyksiä Aurecin käytöstä iOS-laitteilla.`
                : `Common questions about using Aurec for ${activeData.badge.toLowerCase()} on iOS.`}
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {activeData.faq.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: '#fff',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 600,
                      gap: '16px',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span style={{
                      fontSize: '20px',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: 'var(--accent-color)',
                      flexShrink: 0,
                    }}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '16px',
                    }}>
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Internal Linking: Related Guides & Topics ─────────── */}
        <section id="guides" className="section container" style={{ paddingTop: '40px', paddingBottom: '80px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="eyebrow">{isFi ? 'Jatka tutkimista' : 'Explore Aurec'}</span>
            <h2 className="section-title">
              {isFi ? 'Aiheeseen liittyvät oppaat' : 'Related Audio Recording Guides'}
            </h2>
            <p className="section-subtitle">
              {isFi
                ? 'Löydä kaikki Aurecin ominaisuudet muusikoille, laulajille ja äänittäjille.'
                : 'Discover all the capabilities of Aurec for musicians, podcasters, and sound creators.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {otherPages.map((guide) => (
              <a
                key={guide.slug}
                href={`${guide.path}${isFi ? '?lang=fi' : ''}`}
                style={{
                  display: 'block',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  transition: 'all 0.3s ease',
                }}
                className="guide-link-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(242, 49, 69, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-color)', marginBottom: '8px' }}>
                  {guide.badge}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                  {guide.h1}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.5 }}>
                  {guide.metaDescription.slice(0, 110)}...
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href={homeHref} style={{ fontSize: '14px', color: 'var(--accent-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              {isFi ? '← Palaa Aurecin etusivulle' : '← Return to Aurec Homepage'}
            </a>
          </div>
        </section>

        {/* ── App Store Download Callout Banner ─────────────────── */}
        <section className="container" style={{ paddingBottom: '100px' }}>
          <div style={{
            background: 'radial-gradient(circle at center, rgba(242, 49, 69, 0.15) 0%, rgba(10, 11, 26, 0.6) 80%)',
            border: '1px solid rgba(242, 49, 69, 0.25)',
            borderRadius: '32px',
            padding: '60px 24px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(242, 49, 69, 0.1)',
          }}>
            <span className="eyebrow">{isFi ? 'Aurec iOS:lle' : 'Get Aurec for iOS'}</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>
              {isFi ? 'Valmiina äänittämään studiotason tarkkuudella?' : 'Ready to record with studio-grade clarity?'}
            </h2>
            <p style={{ maxWidth: '560px', margin: '0 auto 36px', color: 'var(--text-secondary)', fontSize: '16px' }}>
              {isFi
                ? 'Lataa Aurec App Storesta tänään. Ei käyttäjätilejä, ei kuukausimaksuja ja täysi offline-yksityisyys.'
                : 'Download Aurec on the App Store today. No accounts, no subscriptions, and complete offline privacy.'}
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '18px 36px', fontSize: '17px' }}
              onClick={() => handleAppStoreClick('banner_cta')}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {isFi ? 'Lataa App Storesta' : 'Download on the App Store'}
            </a>
          </div>
        </section>
      </main>

      {/* ── Shared Footer ─────────────────────────────────────── */}
      <footer style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container" style={{ padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="nav-logo-icon" style={{ width: 24, height: 24 }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="3" fill="white" />
                  <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                </svg>
              </span>
              <a href={homeHref} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500 }}>Aurec</a>
              <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '14px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>&copy; {new Date().getFullYear()}</span>
            </div>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <a href={homeHref} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}>
                {isFi ? 'Etusivu' : 'Home'}
              </a>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} onClick={() => handleAppStoreClick('footer_download')}>
                App Store
              </a>
              <a href="https://tx-bit.github.io/Aurec-privacy/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}>
                {isFi ? 'Tietosuojaseloste' : 'Privacy Policy'}
              </a>
              <a href="https://tx-bit.github.io/aurec-support/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}>
                {isFi ? 'Tuki' : 'Support'}
              </a>
              <a href="mailto:rndoldtech@gmail.com" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}>
                {isFi ? 'Yhteys' : 'Contact'}
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
