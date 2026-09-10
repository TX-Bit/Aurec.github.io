import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SEO_PAGES } from '../src/data/seoPagesData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const APP_STORE_URL = 'https://apps.apple.com/us/app/aurec/id6759679586'

function renderPageHtml(page) {
  const otherPages = SEO_PAGES.filter(p => p.slug !== page.slug)

  const heroImageSrc = page.heroImage ? page.heroImage.src : '/screenshots/iphone/recorder.png'
  const heroImageFullUrl = `https://www.aurec.site${heroImageSrc}`
  const heroImageAlt = page.heroImage ? page.heroImage.alt : `Aurec interface screenshot for ${page.h1}`
  const isIpad = page.heroImage?.device === 'ipad'
  const heroImageWidth = isIpad ? 360 : 280
  const heroImageHeight = isIpad ? 480 : 608

  // JSON-LD Schemas
  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Aurec',
    'description': page.metaDescription,
    'operatingSystem': 'iOS, iPadOS',
    'applicationCategory': 'UtilitiesApplication',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
    },
    'url': APP_STORE_URL,
    'image': heroImageFullUrl,
    'featureList': page.coreFeatures.map(f => f.title),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.aurec.site/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': page.badge || page.h1,
        'item': `https://www.aurec.site${page.path}`,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': page.faq.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a,
      },
    })),
  }

  const specsHtml = page.technicalSpecs.map(spec => `
    <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 18px; padding: 24px 20px; text-align: center;">
      <div style="font-size: 12px; color: rgba(255, 255, 255, 0.45); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">${spec.label}</div>
      <div style="font-size: 18px; font-weight: 700; color: #fff;">${spec.value}</div>
    </div>
  `).join('\n')

  const guideSectionsHtml = (page.guideSections || []).map(sec => `
    <div style="margin-bottom: 48px;">
      <h2 style="font-size: clamp(1.5rem, 3.2vw, 2.1rem); font-weight: 700; color: #fff; margin-bottom: 18px; line-height: 1.25;">
        ${sec.heading}
      </h2>
      ${sec.paragraphs.map(para => `
        <p style="font-size: 16px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 16px;">
          ${para}
        </p>
      `).join('\n')}
    </div>
  `).join('\n')

  const disclaimerHtml = page.disclaimer ? `
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px; padding: 16px 20px; margin-bottom: 36px; font-size: 13px; line-height: 1.6; color: rgba(255, 255, 255, 0.7);">
      <span style="font-weight: 600; color: #fff;">Important Notice: </span>
      ${page.disclaimer}
    </div>
  ` : ''

  const featuresHtml = page.coreFeatures.map((feat, idx) => `
    <div class="glow-card" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div class="feature-icon-wrapper ${idx === 0 ? 'accent' : ''}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${idx === 0 ? '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' : ''}
            ${idx === 1 ? '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>' : ''}
            ${idx === 2 ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>' : ''}
            ${idx === 3 ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>' : ''}
          </svg>
        </div>
        <h3 class="feature-title">${feat.title}</h3>
        <p class="feature-desc">${feat.description}</p>
      </div>
    </div>
  `).join('\n')

  const workflowHtml = page.workflowSteps.map(step => `
    <div class="glow-card" style="padding: 36px 28px; position: relative;">
      <div style="font-size: 32px; font-weight: 800; font-family: var(--font-heading); color: rgba(242, 49, 69, 0.4); margin-bottom: 16px;">${step.step}</div>
      <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #fff;">${step.title}</h3>
      <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">${step.description}</p>
    </div>
  `).join('\n')

  const faqHtml = page.faq.map(item => `
    <details style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
      <summary style="padding: 20px 24px; color: #fff; cursor: pointer; font-size: 16px; font-weight: 600; list-style: none; display: flex; justify-content: space-between; align-items: center;">
        <span>${item.q}</span>
        <span style="color: var(--accent-color); font-size: 20px; font-weight: bold;">+</span>
      </summary>
      <div style="padding: 0 24px 20px; font-size: 14px; line-height: 1.7; color: var(--text-secondary); border-top: 1px solid rgba(255, 255, 255, 0.04); padding-top: 16px;">
        ${item.a}
      </div>
    </details>
  `).join('\n')

  const relatedHtml = otherPages.map(guide => `
    <a href="${guide.path}" style="display: block; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 24px 20px; transition: all 0.3s ease;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-color); margin-bottom: 8px;">${guide.badge}</div>
      <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 8px;">${guide.h1}</div>
      <div style="font-size: 13px; color: rgba(255, 255, 255, 0.5); line-height: 1.5;">${guide.metaDescription.slice(0, 110)}...</div>
    </a>
  `).join('\n')

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary SEO -->
    <title>${page.title}</title>
    <meta name="description" content="${page.metaDescription}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="author" content="Aurec" />
    <link rel="canonical" href="https://www.aurec.site${page.path}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.aurec.site${page.path}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.metaDescription}" />
    <meta property="og:image" content="${heroImageFullUrl}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Aurec" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.metaDescription}" />
    <meta name="twitter:image" content="${heroImageFullUrl}" />

    <!-- Apple / iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Aurec" />
    <meta name="apple-itunes-app" content="app-id=6759679586" />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VP3J8LT6KK"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VP3J8LT6KK');
    </script>

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- JSON-LD Structured Data: SoftwareApplication -->
    <script type="application/ld+json">
    ${JSON.stringify(softwareAppSchema, null, 2)}
    </script>

    <!-- JSON-LD Structured Data: BreadcrumbList -->
    <script type="application/ld+json">
    ${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>

    <!-- JSON-LD Structured Data: FAQPage -->
    <script type="application/ld+json">
    ${JSON.stringify(faqSchema, null, 2)}
    </script>
  </head>
  <body>
    <div id="root">
      <!-- Pre-rendered Static Content for Search Engines & Instant Load -->
      <div class="seo-page-root">
        <header class="navbar">
          <nav class="container navbar-inner" aria-label="Main Navigation">
            <a href="/" class="nav-logo" title="Aurec - Back to Home">
              <span class="nav-logo-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="3" fill="white" />
                  <circle cx="7" cy="7" r="5.5" stroke="white" stroke-width="1.2" stroke-opacity="0.4" fill="none" />
                </svg>
              </span>
              <span>Aurec</span>
            </a>
            <ul class="nav-links">
              <li><a href="/" class="nav-link">Home</a></li>
              <li><a href="#features" class="nav-link">Features</a></li>
              <li><a href="#specs" class="nav-link">Specs</a></li>
              <li><a href="#workflow" class="nav-link">Workflow</a></li>
              <li><a href="#faq" class="nav-link">FAQ</a></li>
              <li><a href="#guides" class="nav-link">Guides</a></li>
            </ul>
            <div class="nav-actions">
              <a href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer" class="nav-btn" onclick="if(window.gtag) gtag('event', 'app_store_click', { event_category: 'conversion', event_label: 'navbar_download', source_page: '${page.path}', page_location: window.location.href, page_path: window.location.pathname });">
                Download
              </a>
            </div>
          </nav>
        </header>

        <main style="padding-top: 80px;">
          <div class="container" style="padding-top: 20px; padding-bottom: 10px;">
            <nav aria-label="Breadcrumbs" style="font-size: 13px; color: rgba(255,255,255,0.4); display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <a href="/" style="color: rgba(255,255,255,0.7);">Home</a>
              <span>/</span>
              <span style="color: rgba(255,255,255,0.4);">Guides</span>
              <span>/</span>
              <span style="color: var(--accent-color); font-weight: 500;" aria-current="page">${page.badge || page.h1}</span>
            </nav>
          </div>

          <section class="hero" style="min-height: auto; padding: 40px 0 80px;">
            <div class="hero-bg-mesh"></div>
            <div class="container" style="position: relative; z-index: 10; width: 100%;">
              <div class="hero-content">
                <div class="hero-text">
                  <div class="hero-badge">
                    <span class="rec-dot"></span>
                    ${page.badge}
                  </div>
                  <h1 class="hero-title" style="font-size: clamp(2.4rem, 5vw, 4.2rem);">
                    ${page.h1}
                  </h1>
                  <p class="hero-desc" style="max-width: 600px;">
                    ${page.heroSubtitle}
                  </p>
                  <div class="hero-ctas">
                    <a href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer" class="btn-primary" onclick="if(window.gtag) gtag('event', 'app_store_click', { event_category: 'conversion', event_label: 'hero_cta', source_page: '${page.path}', page_location: window.location.href, page_path: window.location.pathname });">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Download on the App Store
                    </a>
                    <a href="#features" class="btn-secondary">
                      Explore Details
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="margin-left: 6px;">
                        <path d="M1 7h12M8 2.5l4.5 4.5L8 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hero-visual">
                  <div class="hero-mockup-wrapper ${isIpad ? 'hero-mockup-ipad-wrapper' : ''}">
                    <div class="hero-mockup-glow"></div>
                    <img src="${heroImageSrc}" alt="${heroImageAlt}" class="hero-mockup-img${isIpad ? ' hero-mockup-ipad' : ''}" width="${heroImageWidth}" height="${heroImageHeight}" loading="eager" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="specs" class="container" style="padding: 20px 24px 60px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
              ${specsHtml}
            </div>
          </section>

          <section class="container" style="padding: 20px 24px 60px; max-width: 840px; margin: 0 auto;">
            ${disclaimerHtml}
            ${guideSectionsHtml}
          </section>

          <section id="features" class="section container" style="padding-top: 60px; padding-bottom: 80px;">
            <div class="text-center">
              <span class="eyebrow">Key Capabilities</span>
              <h2 class="section-title">
                Engineered for Sound.<br />
                <span class="gradient-text">Zero Compromises.</span>
              </h2>
              <p class="section-subtitle">
                Every tool in Aurec is built directly into native iOS audio frameworks for low latency, high dynamic range, and rock-solid stability.
              </p>
            </div>
            <div class="features-grid" style="margin-top: 48px;">
              ${featuresHtml}
            </div>
          </section>

          <section id="workflow" class="section container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="text-center">
              <span class="eyebrow">How It Works</span>
              <h2 class="section-title">Simple 3-Step Workflow</h2>
              <p class="section-subtitle">From the initial burst of inspiration to finished, uncompressed stems ready for your DAW.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 48px;">
              ${workflowHtml}
            </div>
          </section>

          <section id="faq" class="section container" style="padding-top: 40px; padding-bottom: 80px;">
            <div class="text-center" style="margin-bottom: 48px;">
              <span class="eyebrow">Questions & Answers</span>
              <h2 class="section-title">Frequently Asked Questions</h2>
              <p class="section-subtitle">Common questions about using Aurec for ${page.badge.toLowerCase()} on iOS.</p>
            </div>
            <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
              ${faqHtml}
            </div>
          </section>

          <section id="guides" class="section container" style="padding-top: 40px; padding-bottom: 80px; border-top: 1px solid rgba(255, 255, 255, 0.06);">
            <div class="text-center" style="margin-bottom: 40px;">
              <span class="eyebrow">Explore Aurec</span>
              <h2 class="section-title">Related Audio Recording Guides</h2>
              <p class="section-subtitle">Discover all the capabilities of Aurec for musicians, podcasters, and sound creators.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">
              ${relatedHtml}
            </div>
            <div style="text-align: center; margin-top: 36px;">
              <a href="/" style="font-size: 14px; color: var(--accent-color); font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
                &larr; Return to Aurec Homepage
              </a>
            </div>
          </section>

          <section class="container" style="padding-bottom: 100px;">
            <div style="background: radial-gradient(circle at center, rgba(242, 49, 69, 0.15) 0%, rgba(10, 11, 26, 0.6) 80%); border: 1px solid rgba(242, 49, 69, 0.25); border-radius: 32px; padding: 60px 24px; textAlign: center; box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(242, 49, 69, 0.1);">
              <span class="eyebrow">Get Aurec for iOS</span>
              <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 16px; color: #fff;">
                Ready to record with studio-grade clarity?
              </h2>
              <p style="max-width: 560px; margin: 0 auto 36px; color: var(--text-secondary); font-size: 16px;">
                Download Aurec on the App Store today. No accounts, no subscriptions, and complete offline privacy.
              </p>
              <a href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 18px 36px; font-size: 17px;" onclick="if(window.gtag) gtag('event', 'app_store_click', { event_category: 'conversion', event_label: 'banner_cta', source_page: '${page.path}', page_location: window.location.href, page_path: window.location.pathname });">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
            </div>
          </section>
        </main>

        <footer style="position: relative; border-top: 1px solid rgba(255,255,255,0.06);">
          <div style="border-top: 1px solid rgba(255,255,255,0.05);">
            <div class="container" style="padding: 32px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span class="nav-logo-icon" style="width: 24px; height: 24px;">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="3" fill="white" />
                    <circle cx="7" cy="7" r="5.5" stroke="white" stroke-width="1.2" stroke-opacity="0.4" fill="none" />
                  </svg>
                </span>
                <a href="/" style="color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500;">Aurec</a>
                <span style="color: rgba(255,255,255,0.15); font-size: 14px;">·</span>
                <span style="color: rgba(255,255,255,0.3); font-size: 14px;">&copy; ${new Date().getFullYear()}</span>
              </div>
              <nav style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
                <a href="/" style="font-size: 14px; color: rgba(255,255,255,0.5);">Home</a>
                <a href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer" style="font-size: 14px; color: rgba(255,255,255,0.5);" onclick="if(window.gtag) gtag('event', 'app_store_click', { event_category: 'conversion', event_label: 'footer_download', source_page: '${page.path}', page_location: window.location.href, page_path: window.location.pathname });">App Store</a>
                <a href="https://tx-bit.github.io/Aurec-privacy/" target="_blank" rel="noopener noreferrer" style="font-size: 14px; color: rgba(255,255,255,0.5);">Privacy Policy</a>
                <a href="https://tx-bit.github.io/aurec-support/" target="_blank" rel="noopener noreferrer" style="font-size: 14px; color: rgba(255,255,255,0.5);">Support</a>
                <a href="mailto:rndoldtech@gmail.com" style="font-size: 14px; color: rgba(255,255,255,0.5);">Contact</a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <script>
      window.SEO_PAGE_SLUG = "${page.slug}";
    </script>
    <script type="module" src="/src/seo-main.jsx"></script>
  </body>
</html>`
}

export function generateAllSeoPages() {
  console.log(`Generating ${SEO_PAGES.length} pre-rendered SEO pages...`)
  for (const page of SEO_PAGES) {
    const dir = path.join(rootDir, page.slug)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    const htmlPath = path.join(dir, 'index.html')
    const htmlContent = renderPageHtml(page)
    fs.writeFileSync(htmlPath, htmlContent, 'utf-8')
    console.log(`✓ Generated ${htmlPath}`)
  }
}

generateAllSeoPages()
