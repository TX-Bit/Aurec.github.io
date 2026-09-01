import { useInView } from '../hooks/useInView'
import { copy } from '../i18n'

const IconLightning = () => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 13h7l-2 7 9-11h-7l2-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconScissors = () => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 6.5L17 12M7 15.5L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 10l2-1.5M17 12l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconEar = () => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <path d="M10 2C6.69 2 4 4.69 4 8c0 2.2 1.08 4.13 2.75 5.3V16.5h6.5V13.3C14.92 12.13 16 10.2 16 8c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="16.5" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconFolder = () => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <path d="M2 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconShare = () => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
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

function FeatureCard({ icon, title, description, accent, delayClass }) {
  const ref = useInView()

  return (
    <div
      ref={ref}
      className={`glow-card reveal ${delayClass} ${ref.current ? 'visible' : ''}`}
    >
      <div className={`feature-icon-wrapper ${accent ? 'accent' : ''}`}>
        {icon}
      </div>
      <div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>
    </div>
  )
}

export default function FeaturesSection({ locale }) {
  const titleRef = useInView()
  const t = copy[locale].features
  const features = FEATURE_ICONS.map((feature, i) => ({
    ...feature,
    ...t.items[i],
  }))

  return (
    <section id="features" className="section container">
      <div ref={titleRef} className={`text-center reveal ${titleRef.current ? 'visible' : ''}`}>
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">
          {t.title1}
          <br />
          <span className="gradient-text">{t.title2}</span>
        </h2>
      </div>

      <div className="features-grid">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            delayClass={`delay-${(i % 3) + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
