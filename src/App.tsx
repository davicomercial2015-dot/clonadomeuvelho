import HeroSection from './components/HeroSection'
import PriceSection from './components/PriceSection'
import WhatYouGetSection from './components/WhatYouGetSection'
import TestimonialsSection from './components/TestimonialsSection'
import GuaranteeSection from './components/GuaranteeSection'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PriceSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PriceSection />
    </div>
  )
}

export default App
