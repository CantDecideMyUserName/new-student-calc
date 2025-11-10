import Plan5CalculatorPage from '@/modules/calculator/plan-5-student-loan-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Plan 5 Student Loan Calculator UK - 2023+ Repayment Estimator",
  description: "Calculate your Plan 5 student loan repayments if you started university from September 2023 onwards in England and Wales. See monthly payments and 40-year timeline.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan calculator",
    "uk student loan",
    "plan 5 calculator",
    "2023 student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/plan-5-student-loan-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 5 Student Loan Calculator UK - 2023+ Repayment Estimator",
    description: "Calculate your Plan 5 student loan repayments if you started university from September 2023 onwards in England and Wales. See monthly payments and 40-year timeline.",
    url: "https://studentloancalculator.uk/calculators/plan-5-student-loan-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 5 Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan 5 Student Loan Calculator UK",
    description: "Calculate your Plan 5 student loan repayments. Free calculator for 2023+ students.",
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

const Plan5Calculator = () => {
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
        name: "Plan 5 Calculator",
        item: "https://studentloancalculator.co.uk/calculators/plan-5-student-loan-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Plan 5 Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/plan-5-student-loan-calculator",
    description: "Calculate monthly repayments for Plan 5 student loans (2023+ starts) based on your income and loan balance.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I repay on a Plan 5 student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You repay 9% of your income above £25,000 per year. Your monthly repayment amount changes with your income, and your loan is written off after 40 years regardless of how much you've repaid.",
        },
      },
      {
        "@type": "Question",
        name: "What is the interest rate on Plan 5 student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 5 loans only charge RPI (Retail Price Index) interest with no additional percentage, making it lower than Plan 2 loans which charge RPI + up to 3%.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between Plan 5 and Plan 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 5 has a lower threshold (£25,000 vs £27,295), lower interest (RPI only vs RPI+3%), and longer write-off period (40 years vs 30 years). This means lower monthly payments but potentially paying more over time.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <Plan5CalculatorPage />
      </div>
    </>
  )
}

export default Plan5Calculator