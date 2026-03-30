import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ValueSection from './components/ValueSection'
import FeaturesSection from './components/FeaturesSection'
import BuiltForSection from './components/BuiltForSection'
import TrustSection from './components/TrustSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <FeaturesSection />
        <BuiltForSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  )
}
