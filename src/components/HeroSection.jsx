import { useEffect, useState } from 'react'
import { APP_STORE_URL, copy } from '../i18n'
import HeroHeadline from './HeroHeadline'


// ─── iPhone Mockup ────────────────────────────────────────────────────────────
function IPhoneMockup({ locale }) {
  const [seconds, setSeconds] = useState(7)
  const [level, setLevel] = useState(36)
  const t = copy[locale].hero.mockup

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setLevel(Math.floor(25 + Math.random() * 40)), 200)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  return (
    <div className="relative flex justify-center items-center select-none">
      <div className="absolute w-72 h-72 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

      {/* iPhone frame */}
      <div className="relative z-10" style={{
        width: 264, height: 572,
        borderRadius: 48,
        background: 'linear-gradient(160deg, #2a2a2e 0%, #1a1a1e 40%, #111114 100%)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.10), 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
        padding: 3,
      }}>
        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -3, top: 110, width: 3, height: 26, borderRadius: '2px 0 0 2px', background: '#2c2c30' }} />
        <div style={{ position: 'absolute', left: -3, top: 148, width: 3, height: 42, borderRadius: '2px 0 0 2px', background: '#2c2c30' }} />
        <div style={{ position: 'absolute', left: -3, top: 200, width: 3, height: 42, borderRadius: '2px 0 0 2px', background: '#2c2c30' }} />
        <div style={{ position: 'absolute', right: -3, top: 158, width: 3, height: 62, borderRadius: '0 2px 2px 0', background: '#2c2c30' }} />

        {/* Screen */}
        <div style={{
          width: '100%', height: '100%',
          borderRadius: 45, background: '#000',
          overflow: 'hidden', position: 'relative',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Dynamic Island */}
          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 88, height: 24, borderRadius: 16, background: '#000', zIndex: 10 }} />

          {/* Status bar */}
          <div style={{ height: 44, paddingTop: 14, paddingLeft: 20, paddingRight: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>2:56</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end' }}>
                {[3, 5, 7, 9].map((h, i) => (
                  <div key={i} style={{ width: 3, height: h, borderRadius: 1, background: i < 2 ? 'rgba(255,255,255,0.3)' : '#fff' }} />
                ))}
              </div>
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M1 4C2.9 2 4.6 1 6.5 1S10.1 2 12 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M3 6.5C4.2 5.4 5.3 5 6.5 5S8.8 5.4 10 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="6.5" cy="9" r="1" fill="white" />
              </svg>
              <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <div style={{ width: 20, height: 10, borderRadius: 2.5, border: '1px solid rgba(255,255,255,0.35)', padding: '1.5px' }}>
                  <div style={{ width: '85%', height: '100%', borderRadius: 1, background: '#fff' }} />
                </div>
                <div style={{ width: 2, height: 5, borderRadius: '0 1px 1px 0', background: 'rgba(255,255,255,0.35)' }} />
              </div>
            </div>
          </div>

          {/* Top buttons row */}
          <div style={{ paddingLeft: 16, paddingRight: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                <line x1="1" y1="2" x2="14" y2="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="1" y1="6.5" x2="14" y2="6.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="1" y1="11" x2="14" y2="11" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="5" cy="2" r="1.7" fill="#000" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
                <circle cx="10" cy="6.5" r="1.7" fill="#000" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
                <circle cx="5" cy="11" r="1.7" fill="#000" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 20, paddingLeft: 12, paddingRight: 14, paddingTop: 9, paddingBottom: 9 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5C4.5 1.5 2.5 3.5 2.5 6c0 1.6.8 3 2 3.9V11.5h5V9.9c1.2-.9 2-2.3 2-3.9 0-2.5-2-4.5-4.5-4.5z" stroke="rgba(255,255,255,0.65)" strokeWidth="1.1" fill="none" />
                <circle cx="7" cy="6" r="1.6" stroke="rgba(255,255,255,0.65)" strokeWidth="1" fill="none" />
                <line x1="7" y1="11.5" x2="7" y2="13" stroke="rgba(255,255,255,0.65)" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{t.monitor}</span>
            </div>
          </div>

          {/* Session pill */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 22, paddingLeft: 14, paddingRight: 12, paddingTop: 11, paddingBottom: 11 }}>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                {[0, 2.1, 4.2, 6.3, 8.4, 10.5, 12.6].map((x, i) => (
                  <rect key={i} x={x} y={[4, 2, 0, 3, 0, 2, 4][i]} width="1.6" height={[4, 8, 12, 6, 12, 8, 4][i]} rx="0.8" fill="rgba(255,255,255,0.55)" />
                ))}
              </svg>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 500, letterSpacing: '-0.01em' }}>{t.session}</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2.5 4 5.5 7.5 8.5 4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Center — timer + indicator + meter */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 22, paddingRight: 22 }}>
            <div style={{ fontSize: 70, fontWeight: 100, color: '#fff', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
              {mm}:{ss}
            </div>

            {/* Thin red line */}
            <div style={{ width: '100%', height: 1, marginTop: 12, background: 'linear-gradient(90deg, transparent 0%, rgba(232,67,58,0.18) 10%, rgba(232,67,58,0.8) 50%, rgba(232,67,58,0.18) 90%, transparent 100%)' }} />

            {/* Recording label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
              <div className="rec-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: '#E8433A', flexShrink: 0 }} />
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>{t.recording}</span>
            </div>

            {/* Level meter */}
            <div style={{ width: '100%', marginTop: 22 }}>
              <div style={{ position: 'relative', height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${level}%`,
                  background: 'linear-gradient(90deg, rgba(190,190,190,0.55) 0%, rgba(210,210,210,0.5) 45%, rgba(232,67,58,0.95) 100%)',
                  transition: 'width 0.12s ease-out',
                  borderRadius: 3,
                }} />
              </div>
              <div style={{ marginTop: 5, fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>-32 dB</div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 12, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Stop */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,255,255,0.75)' }} />
                </div>
                <span style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.4)' }}>{t.stop}</span>
              </div>

              {/* Pause */}
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#E8433A', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(232,67,58,0.55), 0 0 70px rgba(232,67,58,0.12)' }}>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <rect x="3.5" y="3" width="4.5" height="13" rx="1.8" fill="white" />
                  <rect x="11" y="3" width="4.5" height="13" rx="1.8" fill="white" />
                </svg>
              </div>

              {/* Auto Record */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.69 2 4 4.69 4 8c0 2.2 1.08 4.13 2.75 5.3V16.5h6.5V13.3C14.92 12.13 16 10.2 16 8c0-3.31-2.69-6-6-6z" fill="rgba(52,199,89,0.12)" stroke="#34C759" strokeWidth="1.25" />
                    <circle cx="10" cy="8" r="2.2" stroke="#34C759" strokeWidth="1.15" fill="none" />
                    <line x1="10" y1="16.5" x2="10" y2="18.5" stroke="#34C759" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 9.5, color: '#34C759' }}>{t.autoRecord}</span>
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div style={{ display: 'flex', paddingBottom: 16, paddingTop: 8, paddingLeft: 6, paddingRight: 6, borderTop: '0.5px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
            {t.tabs.map((label, i) => (
              <div key={label} style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                background: i === 0 ? 'rgba(255,255,255,0.09)' : 'transparent',
                borderRadius: 14, paddingTop: 7, paddingBottom: 7,
              }}>
                {i === 0 && <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="4" stroke="#007AFF" strokeWidth="1.4" /><circle cx="8.5" cy="8.5" r="1.7" fill="#007AFF" /></svg>}
                {i === 1 && <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2.5" y="4" width="12" height="1.6" rx="0.8" fill="rgba(255,255,255,0.35)" /><rect x="2.5" y="7.7" width="12" height="1.6" rx="0.8" fill="rgba(255,255,255,0.35)" /><rect x="2.5" y="11.4" width="7" height="1.6" rx="0.8" fill="rgba(255,255,255,0.35)" /></svg>}
                {i === 2 && <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="5.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" /><line x1="8.5" y1="7.5" x2="8.5" y2="11.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" /><circle cx="8.5" cy="5.8" r="0.8" fill="rgba(255,255,255,0.35)" /></svg>}
                <span style={{ fontSize: 8.5, color: i === 0 ? '#007AFF' : 'rgba(255,255,255,0.3)', fontWeight: i === 0 ? 600 : 400 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection({ locale }) {
  const [mounted, setMounted] = useState(false)
  const t = copy[locale].hero
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 60% 40%, rgba(232,67,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Left — copy */}
          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 mb-8 text-xs text-white/50 tracking-wide transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent rec-dot" />
              {t.badge}
            </div>

            {/* Headline */}
            <HeroHeadline
              locale={locale}
              className={`mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            />

            {/* Subhead */}
            <p
              className={`text-[clamp(1rem,2vw,1.2rem)] text-white/45 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {t.subhead}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {/* Primary CTA */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-[#080808] font-semibold text-[15px] px-6 py-3.5 rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/30"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t.primaryCta}
              </a>

              {/* Secondary CTA */}
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-[15px] text-white/50 hover:text-white/80 transition-colors duration-200 group"
              >
                {t.secondaryCta}
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M1 7h12M8 2.5l4.5 4.5L8 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — iPhone mockup */}
          <div
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <IPhoneMockup locale={locale} />
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 to-white/20 animate-pulse-slow" />
        </div>
      </div>
    </section>
  )
}
