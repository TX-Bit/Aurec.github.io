import { useInView } from '../hooks/useInView'

const APP_STORE_URL = 'https://apps.apple.com'

const PRO_FEATURES = [
  'Expanded editing tools',
  'Advanced export options',
  'Pro recording workflows',
  'Priority support',
]

export default function ProSection() {
  const ref = useInView()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(232,67,58,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="reveal glass-card rounded-3xl p-10 md:p-14 text-center">
          <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">Pro</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-white mb-4">
            Aurec Pro —{' '}
            <span className="text-white/35">More control for serious recording</span>
          </h2>
          <p className="text-white/40 text-base leading-relaxed max-w-lg mx-auto mb-10">
            Unlock advanced tools for frequent use, including expanded editing, export options, and pro workflows.
          </p>

          <ul className="flex flex-wrap justify-center gap-3 mb-10">
            {PRO_FEATURES.map(f => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-white/50 bg-white/[0.05] border border-white/[0.07] rounded-full px-4 py-1.5"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#E8433A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[15px] px-7 py-3.5 rounded-2xl hover:bg-accent/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-accent/20"
          >
            Upgrade to Pro
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2.5l4.5 4.5L8 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
