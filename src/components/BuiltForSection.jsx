import { useRef, useEffect } from 'react'
import { copy } from '../i18n'

// ─── useInView (inline — avoids hook-in-map violations) ──────────────────────
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

// ─── Audience card ────────────────────────────────────────────────────────────
function AudienceCard({ icon, title, description, delayClass }) {
  const ref = useCardRef()
  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} group glass-card rounded-2xl p-7 flex gap-5 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300`}
    >
      <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-white/40 flex items-center justify-center shrink-0 group-hover:text-white/60 group-hover:bg-white/[0.07] transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-[13.5px] text-white/40 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionTitle({ locale }) {
  const ref = useCardRef()
  const t = copy[locale].builtFor
  return (
    <div ref={ref} className="reveal text-center mb-16">
      <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">{t.eyebrow}</p>
      <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white">
        {t.title1}
        <br />
        <span className="text-white/35">{t.title2}</span>
      </h2>
    </div>
  )
}

// ─── Audience data ────────────────────────────────────────────────────────────
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

const DELAY_CLASSES = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

// ─── Built For Section ────────────────────────────────────────────────────────
export default function BuiltForSection({ locale }) {
  const t = copy[locale].builtFor
  const audiences = AUDIENCE_ICONS.map((audience, i) => ({
    ...audience,
    ...t.items[i],
  }))

  return (
    <section id="built-for" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle locale={locale} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
    </section>
  )
}
