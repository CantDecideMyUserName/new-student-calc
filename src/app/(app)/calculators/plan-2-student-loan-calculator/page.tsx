import Plan2CalculatorPage from '@/modules/calculator/plan-2-student-loan-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts'; 
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Plan 2 Student Loan Calculator UK - Monthly Repayment Estimator",
  description: "Calculate your Plan 2 student loan repayments if you started university between 2012-2023 in England and Wales. See monthly payments and repayment timeline.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan calculator",
    "uk student loan",
    "plan 2 calculator",
    "2012-2023 student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/plan-2-student-loan-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 2 Student Loan Calculator UK - Monthly Repayment Estimator",
    description: "Calculate your Plan 2 student loan repayments if you started university between 2012-2023 in England and Wales. See monthly payments and repayment timeline.",
    url: "https://studentloancalculator.uk/calculators/plan-2-student-loan-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 2 Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan 2 Student Loan Calculator UK",
    description: "Calculate your Plan 2 student loan repayments. Free calculator for 2012-2023 students.",
    images: ["https://studentloancalculator.uk/og-image.jpg"],
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

const Plan2Calculator = () => {
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
        name: "Plan 2 Calculator",
        item: "https://studentloancalculator.co.uk/calculators/plan-2-student-loan-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Plan 2 Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Windows, macOS, iOS, Android, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
    url: "https://studentloancalculator.co.uk/calculators/plan-2-student-loan-calculator",
    description: "Calculate monthly repayments for a Plan 2 student loan based on your income and loan balance.",
    image: "https://studentloancalculator.co.uk/images/og/calculators/plan-2-calculator.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "156",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "UK Plan 2 student loan calculation",
      "Monthly repayment projections",
      "Lifetime repayment forecasts",
      "Total cost analysis",
      "Accurate threshold and interest calculations",
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I repay on a Plan 2 student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You repay 9% of your income above £27,295 per year (£2,274 per month). Your monthly repayment amount changes with your income, and your loan is written off after 30 years regardless of how much you've repaid.",
        },
      },
      {
        "@type": "Question",
        name: "What is the interest rate on Plan 2 student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The interest rate varies with your income. While studying and until the April after graduation, it's RPI+3%. After that, it ranges from RPI (for incomes below £27,295) to RPI+3% (for incomes above £49,130), with a sliding scale between these thresholds.",
        },
      },
      {
        "@type": "Question",
        name: "Will I pay off my Plan 2 student loan in full?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Around 80% of Plan 2 borrowers are not expected to fully repay their loans before the 30-year write-off period. Whether you pay in full depends on your starting salary, career progression, and loan balance. Higher earners are more likely to repay in full.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <Plan2CalculatorPage />
      </div>
    </>

  )
}

export default Plan2Calculator

