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
import IntroSection from '../components/intro-section'

const HomePage = () => {
  return (
    <div>
      <StudentLoanCalculator />
      <IntroSection
         title="Understand Your UK Student Loan Repayments"
        primaryCta={{
          href: "/calculators/",
          label: "Start Calculating",
          ariaLabel: "Start calculating your student loan repayments",
          variant: "primary",
        }}
        secondaryCta={{
          href: "/guides/",
          label: "Explore Guides",
          ariaLabel: "Explore our student loan guides",
          variant: "outline",
        }}
      />
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