import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '48 kHz', label: 'Studio-grade sample rate' },
  { value: '32-bit', label: 'Float recording depth' },
  { value: '∞', label: 'Recording length' },
]

export default function ValueSection() {
  const ref = useInView()

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Soft divider glow */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Main statement */}
        <div ref={ref} className="reveal text-center mb-24">
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

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {STATS.map(({ value, label }, i) => (
            <div
              key={value}
              className={`reveal reveal-delay-${i + 1} glass-card flex flex-col items-center justify-center py-10 px-6 text-center`}
            >
              <div className="text-[2.5rem] font-bold tracking-tight text-white mb-2">{value}</div>
              <div className="text-sm text-white/35">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
