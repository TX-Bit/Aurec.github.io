// ─── App Store URL — replace with real link ───────────────────────────────────
const APP_STORE_URL = 'https://apps.apple.com/us/app/aurec/id6759679586'

const LINKS = [
  {
    label: 'App Store',
    href: APP_STORE_URL,
    external: true,
  },
  {
    label: 'Privacy Policy',
    href: 'https://tx-bit.github.io/Aurec-privacy/',
    external: true,
  },
  {
    label: 'Support',
    href: 'https://tx-bit.github.io/aurec-support/',
    external: true,
  },
  {
    label: 'Contact',
    href: 'mailto:rndoldtech@gmail.com',
    external: false,
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* CTA banner */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-xs text-white/25 tracking-[0.2em] uppercase mb-5">Get started</p>
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-0.03em] text-white mb-4">
          Start recording today
        </h2>
        <p className="text-white/35 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Download Aurec on the App Store and capture your ideas before they fade.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#080808] font-semibold text-[15px] px-7 py-4 rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-black/40"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center shadow-md shadow-accent/20">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="3" fill="white" />
                <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              </svg>
            </span>
            <span className="text-white/50 text-sm font-medium">Aurec</span>
            <span className="text-white/15 text-sm">·</span>
            <span className="text-white/20 text-sm">&copy; {new Date().getFullYear()}</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {LINKS.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
