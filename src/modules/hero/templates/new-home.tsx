import React from 'react'
import PopularCalculator from '../components/popular-calc'
import ExpertResources from '../components/expert-resources'
import ComparisionSection from '../components/comparision-section'
import SiteFooter from '../components/site-footer'
import StayInformed from '../components/stay-informed-section'
import WhyTrust from '../components/why-trust-our-calculator'
import ExpertInsights from '../components/expert-insights'
import HelpfulGuides from '../components/helpful-guides'
import FAQPreview from '../components/faq-preview'
import WhyUseCalculators from '../components/why-use-our-calc'
import FeaturedCalculators from '../components/featured-calculator'
import StudentLoanCalculator from '../components/new-hero'

const HomePage = () => {
  return (
    <div>
      <StudentLoanCalculator/>
      <PopularCalculator />
      <ExpertResources />
      <ComparisionSection />
      <FeaturedCalculators />
      <WhyUseCalculators />
      <FAQPreview />
      <ExpertInsights />
      <HelpfulGuides />
      <WhyTrust />
      <StayInformed />
      <SiteFooter />
    </div>
  )
}

export default HomePage