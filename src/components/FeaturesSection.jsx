import { useInView } from '../hooks/useInView'

// ─── Feature icons — inline SVG ───────────────────────────────────────────────
const IconWaveform = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M1 11h2.5M18.5 11H21M5.5 6v10M8 3v16M10.5 7v8M13 4v14M15.5 7v8M18.5 6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconLightning = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 13h7l-2 7 9-11h-7l2-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconHeadphones = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 14v-3a8 8 0 0116 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="1.5" y="13" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="16.5" y="13" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const IconFolder = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconSparkle = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.93 4.93l2.12 2.12M14.95 14.95l2.12 2.12M4.93 17.07l2.12-2.12M14.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const IconLayers = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 8l9-5 9 5-9 5-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 14l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Feature data ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <IconWaveform />,
    title: 'High-quality audio',
    description: 'Record at up to 48 kHz / 32-bit float. Crystal-clear capture for every situation — from whispered notes to live performances.',
    accent: true,
  },
  {
    icon: <IconLightning />,
    title: 'Auto Record',
    description: 'Set a silence threshold and let Aurec start recording automatically when sound is detected. Never miss a moment.',
    accent: false,
  },
  {
    icon: <IconHeadphones />,
    title: 'Live Monitoring',
    description: 'Hear yourself in real time through your headphones while you record. Zero compromise on latency.',
    accent: false,
  },
  {
    icon: <IconFolder />,
    title: 'Session Organisation',
    description: 'Every recording lives in a clean session view. Group by project, date, or create your own structure.',
    accent: false,
  },
  {
    icon: <IconSparkle />,
    title: 'Smart Naming',
    description: 'Aurec names recordings intelligently using the time, location, or a quick note you leave right after stopping.',
    accent: false,
  },
  {
    icon: <IconLayers />,
    title: 'Powerful, not complex',
    description: 'Advanced settings live one level deep. The main screen stays clear. More power is always there when you need it.',
    accent: false,
  },
]

// ─── Feature card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, description, accent, delayClass }) {
  const ref = useInView()

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} group glass-card rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300`}
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
          accent
            ? 'bg-accent/15 text-accent-light group-hover:bg-accent/20'
            : 'bg-white/[0.05] text-white/50 group-hover:text-white/70 group-hover:bg-white/[0.07]'
        }`}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-[13.5px] text-white/40 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// ─── Features Section ─────────────────────────────────────────────────────────
export default function FeaturesSection() {
  const titleRef = useInView()

  return (
    <section id="features" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">Features</p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white">
            Everything you need.
            <br />
            <span className="text-white/35">Nothing you don't.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delayClass={`reveal-delay-${(i % 3) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
