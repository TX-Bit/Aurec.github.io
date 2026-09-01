import { useInView } from '../hooks/useInView'
import { copy } from '../i18n'

const BASE = import.meta.env.BASE_URL

export default function ValueSection({ locale }) {
  const ref = useInView()
  const screensRef = useInView()
  const t = copy[locale].value
  
  const screens = [
    { src: `${BASE}screenshots/iphone/01-recorder.png`, ...t.screens[0] },
    { src: `${BASE}screenshots/ipad/04-multitrack.png`, ...t.screens[1] },
    { src: `${BASE}screenshots/iphone/02-recordings.png`, ...t.screens[2] },
    { src: `${BASE}screenshots/iphone/03-audio-editor.png`, ...t.screens[3] },
  ]

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div ref={ref} className={`text-center reveal ${ref.current ? 'visible' : ''}`} style={{ marginBottom: '80px' }}>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="section-title" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            {t.title}
          </h2>
          <p className="section-subtitle">
            {t.body1}
          </p>
          <p className="section-subtitle" style={{ marginTop: '16px' }}>
            {t.body2}
          </p>
        </div>

        {/* 4-column grid */}
        <div ref={screensRef} className={`reveal delay-1 ${screensRef.current ? 'visible' : ''}`}>
          <div className="screens-grid">
            {screens.map(({ src, label, description }, i) => (
              <div key={label} className="gallery-item">
                <div className={`gallery-img-wrapper ${i === 0 ? 'highlight' : ''}`}>
                  <img src={src} alt={label} className="gallery-img" loading="lazy" />
                </div>
                <div>
                  <div className="gallery-label">{label}</div>
                  <div className="gallery-desc">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
