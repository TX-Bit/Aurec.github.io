import { useInView } from '../hooks/useInView'

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6h6M9 10h6M9 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Native iPhone & iPad',
    description: 'Built with native iOS APIs for a fast, stable, and familiar experience on both iPhone and iPad.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No account required',
    description: 'Start recording on first launch. No sign-up, no cloud lock-in.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Your data stays yours',
    description: 'Recordings stay on your device. No tracking, no ads.',
  },
]

export default function TrustSection() {
  const titleRef = useInView()

  return (
    <section className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">Built for iOS</p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white">
            Designed around iPhone & iPad.
            <br />
            <span className="text-white/35">Fast, stable, familiar.</span>
          </h2>
          <p className="mt-4 text-white/35 max-w-md mx-auto text-base leading-relaxed">
            Aurec is designed around native Apple capabilities for a fast, stable, and familiar experience on both iPhone and iPad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PILLARS.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} glass-card rounded-2xl p-7 flex flex-col gap-4`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-white/40 flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-[13.5px] text-white/40 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
