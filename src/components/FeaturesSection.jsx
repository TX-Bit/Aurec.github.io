import { useInView } from '../hooks/useInView'
import { copy } from '../i18n'

// ─── Feature icons — inline SVG ───────────────────────────────────────────────
const IconLightning = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 13h7l-2 7 9-11h-7l2-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconScissors = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6.5L17 12M7 15.5L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 10l2-1.5M17 12l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconEar = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M10 2C6.69 2 4 4.69 4 8c0 2.2 1.08 4.13 2.75 5.3V16.5h6.5V13.3C14.92 12.13 16 10.2 16 8c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="16.5" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconFolder = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconShare = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2v12M6 7l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 14v4a1 1 0 001 1h12a1 1 0 001-1v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FEATURE_ICONS = [
  { icon: <IconLightning />, accent: true },
  { icon: <IconScissors />, accent: false },
  { icon: <IconEar />, accent: false },
  { icon: <IconFolder />, accent: false },
  { icon: <IconShare />, accent: false },
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
export default function FeaturesSection({ locale }) {
  const titleRef = useInView()
  const t = copy[locale].features
  const features = FEATURE_ICONS.map((feature, i) => ({
    ...feature,
    ...t.items[i],
  }))

  return (
    <section id="features" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">{t.eyebrow}</p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white">
            {t.title1}
            <br />
            <span className="text-white/35">{t.title2}</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
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
