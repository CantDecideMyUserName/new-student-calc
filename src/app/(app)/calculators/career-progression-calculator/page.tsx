import CareerProgressionCalculator from '@/modules/calculator/career-progression-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Career Progression & Student Loan Calculator UK - Lifetime Repayment Projections",
  description: "Model your entire career trajectory and calculate lifetime student loan repayments. Compare different salary progression patterns and discover if you'll repay in full or benefit from write-off.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "career progression calculator",
    "student loan lifetime repayment",
    "salary trajectory calculator",
    "uk graduate career planning",
    "student loan write-off calculator",
    "career path student loans",
    "salary growth projection",
    "lifetime loan cost",
    "graduate salary calculator",
    "career planning tool",
  ],
  creator: "Student Loan Calculator UK",
  publisher: "Student Loan Calculator UK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://studentloancalculator.uk/calculators/career-progression-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Career Progression & Student Loan Calculator UK",
    description: "Model your entire career trajectory and see exactly how salary progression affects your lifetime student loan repayments. Compare fast-track careers vs steady progression.",
    url: "https://studentloancalculator.uk/calculators/career-progression-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/calculators/career-progression-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Career Progression & Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Progression & Student Loan Calculator UK",
    description: "Model your career trajectory and calculate lifetime student loan repayments across different salary progression patterns.",
    images: ["https://studentloancalculator.uk/images/calculators/career-progression-calculator.jpg"],
    creator: "@UKStudentCalc",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
};

const CareerProgressionCalculatorPage = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://studentloancalculator.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: "https://studentloancalculator.co.uk/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Career Progression Calculator",
        item: "https://studentloancalculator.co.uk/calculators/career-progression-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Career Progression & Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/career-progression-calculator",
    description: "Comprehensive career trajectory modeling tool that projects lifetime student loan repayments based on different salary progression patterns. Compare fast-track careers, steady climbers, and early plateau patterns to understand your financial future.",
    image: "https://studentloancalculator.co.uk/images/calculators/career-progression-calculator.jpg",
    featureList: [
      "6 preset career progression patterns",
      "Customizable salary trajectories",
      "30-40 year repayment projections",
      "Write-off amount calculations",
      "Year-by-year breakdown",
      "Visual salary growth charts",
      "Strategic recommendations",
      "All UK loan plans supported"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "342",
      bestRating: "5",
      worstRating: "1"
    }
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is the career progression calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator uses typical UK career progression patterns based on real salary data and industry standards. However, individual careers vary significantly based on factors like location, industry sector, company size, and personal circumstances. Use the projections as a guide rather than a guarantee, and update your calculations as your career develops.",
        },
      },
      {
        "@type": "Question",
        name: "What career progression patterns are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator includes 6 preset patterns: Fast-Track (rapid growth to £100k+ by year 10, typical of investment banking and law), Steady Climber (consistent growth to £70k+ by year 20, typical of medicine and engineering), Moderate (plateauing around £45k, typical of teaching and nursing), Early Plateau (quick to £35k then minimal growth, typical of creative fields), Slow Growth (gradual increase staying near threshold, typical of charity sector), and Late Bloomer (low start with major growth after year 15, typical of entrepreneurs). You can also create custom trajectories.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I'll repay my loan in full?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator automatically determines this by projecting your repayments over the full write-off period (30 years for Plan 2, 40 years for Plan 5). If your projected total repayments exceed your loan balance plus accumulated interest, you'll fully repay. Generally, only the top 20-30% of earners (those reaching £60k+ mid-career and staying there) will fully repay Plan 2 or Plan 5 loans.",
        },
      },
      {
        "@type": "Question",
        name: "Should I make voluntary overpayments based on my projection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the calculator shows you will NOT fully repay before write-off, never make voluntary overpayments - you'd just be reducing your write-off benefit. If it shows you WILL fully repay, voluntary overpayments might save on interest, but compare this against expected investment returns first. The calculator provides personalized recommendations based on your specific projection.",
        },
      },
      {
        "@type": "Question",
        name: "How do career breaks affect the projections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Career breaks (for family, travel, sabbaticals, or further study) significantly reduce lifetime repayments because you only pay when earning above the threshold. The calculator assumes continuous employment, so if you anticipate taking career breaks, your actual repayments will likely be lower than projected, making write-off more likely and valuable. Each year of career break typically reduces lifetime repayments by 5-10%.",
        },
      },
      {
        "@type": "Question",
        name: "Can I model part-time work or reduced hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator is designed for full-time equivalent salaries. If you plan to work part-time, adjust the salary inputs proportionally. For example, if working 3 days per week (60% time), enter 60% of the full-time salary. Part-time work dramatically reduces repayments and increases the likelihood and value of write-off, as you'll spend more years below or closer to the repayment threshold.",
        },
      },
      {
        "@type": "Question",
        name: "How does location affect career progression?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "London and South East salaries are typically 15-30% higher than other UK regions for the same role and experience level. This can be the difference between fully repaying and benefiting from write-off. If you plan to work in London, add 20-25% to the preset pattern salaries. Remote work opportunities may allow you to earn London rates while living elsewhere, combining higher income with lower living costs.",
        },
      },
      {
        "@type": "Question",
        name: "What interest rate should I use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose based on your loan plan: Plan 5 uses RPI only (currently ~3%), Plan 4 uses lower of RPI or Bank Rate+1% (~4%), Plan 2 varies from RPI to RPI+3% based on income (use RPI+2% or ~5% as a middle estimate). Plan 1 uses lower of RPI or Bank Rate+1%. Interest rates fluctuate with inflation and economic conditions, so the calculator offers multiple scenarios. Higher interest rates increase the amount written off for those who won't fully repay.",
        },
      },
    ],
  };

  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <CareerProgressionCalculator />
    </div>
  )
}

export default CareerProgressionCalculatorPage