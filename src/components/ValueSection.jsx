import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '48 kHz', label: 'Studio-grade sample rate' },
  { value: '32-bit', label: 'Float recording depth' },
  { value: '∞', label: 'Recording length' },
]

const BASE = import.meta.env.BASE_URL

const SCREENS = [
  {
    src: `${BASE}screenshots/Recording.png`,
    label: 'One-tap recording',
    description: 'Start instantly, stop anytime',
  },
  {
    src: `${BASE}screenshots/ipad-autorec.png`,
    label: 'Records automatically',
    description: 'Auto-Rec detects sound and starts',
  },
  {
    src: `${BASE}screenshots/recordings.png`,
    label: 'Smart organization',
    description: 'Sessions keep everything tidy',
  },
  {
    src: `${BASE}screenshots/settings.png`,
    label: 'Full control',
    description: 'Pro settings, one tap away',
  },
]

export default function ValueSection() {
  const ref = useInView()
  const screensRef = useInView()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Main statement */}
        <div ref={ref} className="reveal text-center mb-20">
          <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6">What is Aurec</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-white max-w-3xl mx-auto">
            High-quality audio.{' '}
            <span className="text-white/35">Effortless workflow.</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Aurec is built around a single idea: recording should feel natural. Pick it up, hit record,
            and focus on what matters. Everything else happens quietly in the background.
          </p>
        </div>

        {/* Screenshots */}
        <div ref={screensRef} className="reveal mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-end">
            {SCREENS.map(({ src, label, description }, i) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4"
                style={{ transform: i % 2 === 0 ? 'translateY(0)' : 'translateY(32px)' }}
              >
                <div
                  className="w-full rounded-[28px] overflow-hidden"
                  style={{
                    boxShadow: i === 0
                      ? '0 0 0 1px rgba(255,255,255,0.12), 0 32px 80px rgba(0,0,0,0.8), 0 0 50px rgba(232,67,58,0.10)'
                      : '0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px rgba(0,0,0,0.6)',
                  }}
                >
                  <img src={src} alt={label} className="w-full h-auto block" loading="lazy" />
                </div>
                <div className="text-center">
                  <div className="text-[13px] font-medium text-white/70">{label}</div>
                  <div className="text-[11px] text-white/30 mt-0.5">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={value}
              className={`reveal reveal-delay-${i + 1} glass-card rounded-2xl flex flex-col items-center justify-center py-10 px-6 text-center`}
            >
              <div className="text-[2.5rem] font-bold tracking-tight text-white mb-2">{value}</div>
              <div className="text-sm text-white/35">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
