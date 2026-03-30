import { useInView } from '../hooks/useInView'

// ─── Screen placeholder data ──────────────────────────────────────────────────
const SCREENS = [
  {
    label: 'Recording',
    description: 'Main recording view',
    accent: true,
    ui: <RecordingScreen />,
  },
  {
    label: 'Library',
    description: 'Session library',
    accent: false,
    ui: <LibraryScreen />,
  },
  {
    label: 'Settings',
    description: 'Audio settings',
    accent: false,
    ui: <SettingsScreen />,
  },
]

// ─── Mini screen UIs ──────────────────────────────────────────────────────────
function RecordingScreen() {
  return (
    <div className="flex flex-col items-center justify-between h-full py-8 px-5">
      <div className="text-center">
        <div className="text-[9px] text-white/25 tracking-widest uppercase mb-1">New Recording</div>
        <div className="text-white/10 text-[9px]">Today · 44.1 kHz</div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent rec-dot" />
          <span className="text-accent text-[8px] tracking-widest uppercase font-medium">Recording</span>
        </div>
        <div className="text-white text-2xl font-extralight tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
          00:04:32
        </div>
        <div className="flex items-end gap-[2px] h-8 w-full justify-center">
          {[20, 45, 70, 55, 85, 65, 95, 80, 60, 90, 75, 55, 85, 70, 40, 60, 80, 50, 30].map((h, i) => (
            <div
              key={i}
              className="audio-bar"
              style={{
                width: 2, height: `${h}%`, borderRadius: 1,
                background: i >= 7 && i <= 11 ? '#E8433A' : 'rgba(255,255,255,0.18)',
                '--dur': `${0.7 + i * 0.04}s`,
                '--delay': `${i * 0.04}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center" style={{ boxShadow: '0 0 16px rgba(232,67,58,0.35)' }}>
        <div className="w-3.5 h-3.5 rounded-[3px] bg-white" />
      </div>
    </div>
  )
}

function LibraryScreen() {
  const items = [
    { name: 'Interview — Sarah K.', meta: '12:34 · Yesterday', dur: '12:34' },
    { name: 'Band practice', meta: '45:02 · Mon', dur: '45:02' },
    { name: 'Meeting notes', meta: '08:17 · Mon', dur: '08:17' },
    { name: 'Field recording', meta: '1:02:45 · Last week', dur: '1:02' },
    { name: 'Voice memo', meta: '00:42 · Last week', dur: '0:42' },
  ]
  return (
    <div className="flex flex-col h-full py-6 px-4">
      <div className="text-[10px] font-medium text-white/60 mb-4 tracking-tight">Recordings</div>
      <div className="flex flex-col gap-2">
        {items.map(({ name, meta }, i) => (
          <div key={i} className="flex items-center justify-between py-1.5">
            <div>
              <div className="text-[9px] text-white/70 font-medium mb-0.5 truncate max-w-[110px]">{name}</div>
              <div className="text-[8px] text-white/25">{meta}</div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M2 1.5l4 2.5-4 2.5V1.5z" fill="rgba(255,255,255,0.5)" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SettingsScreen() {
  const rows = [
    { label: 'Sample Rate', value: '48 kHz' },
    { label: 'Bit Depth', value: '32-bit' },
    { label: 'Format', value: 'WAV' },
    { label: 'Auto Gain', value: 'On' },
    { label: 'Live Monitor', value: 'On' },
    { label: 'Auto Record', value: 'Off' },
  ]
  return (
    <div className="flex flex-col h-full py-6 px-4">
      <div className="text-[10px] font-medium text-white/60 mb-4">Audio Settings</div>
      <div className="flex flex-col gap-0">
        {rows.map(({ label, value }, i) => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-white/[0.05]">
            <span className="text-[9px] text-white/45">{label}</span>
            <span className="text-[9px] text-white/70 font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Screen mockup wrapper ────────────────────────────────────────────────────
function ScreenMockup({ ui, label, description, accent, large = false }) {
  const w = large ? 200 : 160
  const h = large ? 432 : 346

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        style={{
          width: w, height: h,
          borderRadius: 32,
          background: 'linear-gradient(160deg, #222226 0%, #151518 100%)',
          boxShadow: accent
            ? '0 0 0 1px rgba(255,255,255,0.10), 0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(232,67,58,0.08)'
            : '0 0 0 1px rgba(255,255,255,0.07), 0 16px 40px rgba(0,0,0,0.5)',
          padding: 2,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '100%', height: '100%',
            borderRadius: 30,
            background: '#0c0c0f',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Dynamic Island */}
          <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 56, height: 16, borderRadius: 10, background: '#000', zIndex: 5 }} />
          <div style={{ paddingTop: 32, height: '100%' }}>{ui}</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-white/60">{label}</div>
        <div className="text-xs text-white/25 mt-0.5">{description}</div>
      </div>
    </div>
  )
}

// ─── Showcase Section ─────────────────────────────────────────────────────────
export default function ShowcaseSection() {
  const titleRef = useInView()
  const screensRef = useInView()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(232,67,58,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-20">
          <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-4">App Preview</p>
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tight text-white">
            Designed for clarity.
            <br />
            <span className="text-white/35">Built for focus.</span>
          </h2>
          <p className="mt-4 text-white/35 max-w-md mx-auto text-base leading-relaxed">
            Every screen is intentional. No noise, no clutter — just the controls you actually use.
          </p>
        </div>

        {/* Screens — replace with real screenshots by swapping the <ScreenMockup ui={...}> */}
        <div ref={screensRef} className="reveal flex items-end justify-center gap-6 flex-wrap">
          <div className="hidden md:block opacity-60 hover:opacity-80 transition-opacity duration-300" style={{ transform: 'translateY(32px)' }}>
            <ScreenMockup ui={<LibraryScreen />} label="Library" description="All your recordings" />
          </div>
          <div className="hover:scale-[1.02] transition-transform duration-300">
            <ScreenMockup ui={<RecordingScreen />} label="Record" description="Main recording view" accent large />
          </div>
          <div className="hidden md:block opacity-60 hover:opacity-80 transition-opacity duration-300" style={{ transform: 'translateY(32px)' }}>
            <ScreenMockup ui={<SettingsScreen />} label="Settings" description="Audio configuration" />
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-white/20 mt-12 tracking-wide">
          Screenshots shown are UI mockups. Replace with real app screenshots before launch.
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  )
}
