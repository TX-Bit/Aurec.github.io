import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SeoLandingPage from './components/SeoLandingPage'
import { getSeoPageBySlug, SEO_PAGES } from './data/seoPagesData'

// Detect slug from window global or pathname
const pathSegments = window.location.pathname.split('/').filter(Boolean)
const currentSlug = window.SEO_PAGE_SLUG || pathSegments[0] || ''
const pageData = getSeoPageBySlug(currentSlug) || SEO_PAGES[0]

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <SeoLandingPage pageData={pageData} />
    </React.StrictMode>
  )
}
