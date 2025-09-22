import React from 'react'
import HeroSection from './Components/Hero'
import BusinessStruggleComponent from './Components/BusinessStruggleComponent'
import PricingPlans from './Components/PricingPlans'
import WhyChooseSection from './Components/WhyChooseSection'
import CTASection from './Components/CTASection'

function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessStruggleComponent />
      <PricingPlans />
      <WhyChooseSection />
      <CTASection />
    </div>
  )
}

export default Home