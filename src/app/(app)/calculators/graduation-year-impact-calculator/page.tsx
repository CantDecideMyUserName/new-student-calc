import GraduationYearCalculator from '@/modules/calculator/graduation-year-impact-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Graduation Year Impact Calculator UK - How Does It Affect My Loan?",
  description: "Find out how your graduation year affects your UK student loan. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js", 
  keywords: [
    "student loan calculator",
    "uk student loan",
    "plan 2 calculator",
    "plan 5 calculator",
    "student finance",
    "loan repayments",
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
    canonical: "https://studentloancalculator.uk/calculators/graduation-year-impact-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Graduation Year Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your graduation year affects your UK student loan. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
    url: "https://studentloancalculator.uk/calculators/graduation-year-impact-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graduation Year Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your graduation year affects your UK student loan. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
    images: ["https://studentloancalculator.uk/og-image.jpg"],
  },
};

const GraduationYearImpactCalculatorPage = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://studentloancalculator.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: "https://studentloancalculator.uk/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Graduation Year Impact Calculator",
        item: "https://studentloancalculator.uk/calculators/graduation-year-impact-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Graduation Year Impact Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.uk/calculators/graduation-year-impact-calculator",
    description: "Calculate how your graduation year affects your UK student loan repayment plan. Compare Plan 1, Plan 2, Plan 4, Plan 5, and Postgraduate loan terms, thresholds, and repayment periods based on when you started university.",
    image: "https://studentloancalculator.uk/og-image.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does my graduation year affect my student loan plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your graduation year determines which student loan plan you're on. Students who started before September 1998 are on Plan 1, those starting between 1998-2012 are on Plan 1 or 2 depending on location, 2012-2023 starters are typically on Plan 2, and students starting from September 2023 onwards are on Plan 5. Each plan has different repayment thresholds, interest rates, and write-off periods.",
        },
      },
      {
        "@type": "Question",
        name: "What are the main differences between Plan 2 and Plan 5 loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 5 loans (for students starting from September 2023) have a lower repayment threshold of £25,000 compared to Plan 2's £27,295. Plan 5 borrowers repay for 40 years instead of 30 years, and the interest rate is set at RPI rather than RPI plus up to 3%. This means Plan 5 borrowers typically pay more over their lifetime but with lower interest rates.",
        },
      },
      {
        "@type": "Question",
        name: "Which student loan plan will I pay off completely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 1 borrowers are most likely to repay in full due to lower thresholds and simpler interest. Under Plan 5, approximately 65% of borrowers are expected to repay their loans in full compared to only 27% under Plan 2. Plan 2 and Plan 4 borrowers with average salaries are less likely to repay fully before the 30-year write-off period.",
        },
      },
      {
        "@type": "Question",
        name: "Can I change my student loan repayment plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you cannot change your student loan plan. Your plan is determined by when and where you started your course. However, you can make voluntary overpayments to pay off your loan faster, though this isn't always financially beneficial depending on your plan and expected earnings.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <GraduationYearCalculator />
      </div>
    </>
  )
}

export default GraduationYearImpactCalculatorPage
