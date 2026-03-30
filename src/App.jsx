import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ValueSection from './components/ValueSection'
import FeaturesSection from './components/FeaturesSection'
import ShowcaseSection from './components/ShowcaseSection'
import BuiltForSection from './components/BuiltForSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <FeaturesSection />
        <ShowcaseSection />
        <BuiltForSection />
      </main>
      <Footer />
    </div>
  )
}
