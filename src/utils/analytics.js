export const APP_STORE_URL = 'https://apps.apple.com/us/app/aurec/id6759679586'

/**
 * Tracks App Store button clicks in Google Analytics (gtag).
 * @param {string} placement - Identifying where the CTA was clicked (e.g. 'hero_cta', 'navbar_download', 'footer_cta')
 * @param {string} [page] - Optional page pathname or title
 */
export function trackAppStoreClick(placement, page) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'app_store_click', {
      event_category: 'conversion',
      event_label: placement || 'app_store_button',
      source_page: page || (typeof window !== 'undefined' ? window.location.pathname : '/'),
      page_location: typeof window !== 'undefined' ? window.location.href : '',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      app_name: 'Aurec',
    })
  }
}
