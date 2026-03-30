import { useRef, useEffect } from 'react'

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

function QuoteCard() {
  const ref = useCardRef()
  return (
    <div
      ref={ref}
      className="reveal reveal-delay-3 glass-card rounded-2xl p-7 flex flex-col justify-between border-dashed border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300"
    >
      <p className="text-2xl font-bold text-white/20 leading-snug tracking-tight">
        "Simple when you want it. Powerful when you need it."
      </p>
      <div className="mt-6 text-sm text-white/20">— Aurec</div>
    </div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionTitle() {
  const ref = useCardRef()
  return (
    <div ref={ref} className="reveal text-center mb-16">
      <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">Built For</p>
      <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white">
        One recorder.
        <br />
        <span className="text-white/35">Every situation.</span>
      </h2>
    </div>
  )
}

// ─── Audience data ────────────────────────────────────────────────────────────
const AUDIENCES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18V6l12-2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Musicians',
    description: 'Capture rehearsals, demos, and spontaneous ideas at full fidelity. Aurec gets out of your way so you can stay in the moment.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14s-4 1-4 5h16c0-4-4-5-4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 8h2M3 8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Interviews',
    description: 'Built-in live monitoring and smart auto-levels make interview recording reliable. Focus on the conversation, not the tech.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Meetings',
    description: 'Auto Record starts when the room gets loud. Smart naming keeps your archive organised without any extra effort.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Field Recording',
    description: 'Unlimited recording length, lossless WAV output, and a clean low-latency engine — ready for anything from city soundscapes to wildlife.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 1a4 4 0 014 4v7a4 4 0 11-8 0V5a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Voice Notes',
    description: 'One tap, instant recording. Aurec is the fastest way to capture a fleeting thought, shopping list, or idea on the fly.',
  },
]

const DELAY_CLASSES = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

// ─── Built For Section ────────────────────────────────────────────────────────
export default function BuiltForSection() {
  return (
    <section id="built-for" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCES.map(({ icon, title, description }, i) => (
            <AudienceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              delayClass={DELAY_CLASSES[i % 3]}
            />
          ))}
          <QuoteCard />
        </div>
      </div>
    </section>
  )
}
