import { getLocale } from './i18n'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ValueSection from './components/ValueSection'
import FeaturesSection from './components/FeaturesSection'
import BuiltForSection from './components/BuiltForSection'
import TrustSection from './components/TrustSection'
import Footer from './components/Footer'

export default function App() {
  const locale = getLocale()

  return (
    <div className="min-h-screen bg-[#080808] text-white antialiased">
      <Navbar locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <ValueSection locale={locale} />
        <FeaturesSection locale={locale} />
        <BuiltForSection locale={locale} />
        <TrustSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
