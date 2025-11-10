import Plan4CalculatorPage from '@/modules/calculator/plan-4-student-loan-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { FAQPage, SoftwareApplication, WithContext, BreadcrumbList } from 'schema-dts';

export const metadata: Metadata = {
  title: "Plan 4 Student Loan Calculator UK - Scottish Student Loans",
  description: "Calculate your Plan 4 student loan repayments if you studied in Scotland. See monthly payments, total costs, and repayment timeline.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan calculator",
    "uk student loan",
    "plan 4 calculator",
    "scottish student loan",
    "student finance scotland",
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
    canonical: "https://studentloancalculator.uk/calculators/plan-4-student-loan-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 4 Student Loan Calculator UK - Scottish Student Loans",
    description: "Calculate your Plan 4 student loan repayments if you studied in Scotland. See monthly payments, total costs, and repayment timeline.",
    url: "https://studentloancalculator.uk/calculators/plan-4-student-loan-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 4 Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan 4 Student Loan Calculator UK",
    description: "Calculate your Plan 4 student loan repayments. Free calculator for Scottish students.",
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

const Plan4Calculator = () => {
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
        name: "Plan 4 Calculator",
        item: "https://studentloancalculator.co.uk/calculators/plan-4-student-loan-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Plan 4 Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/plan-4-student-loan-calculator",
    description: "Calculate monthly repayments for a Plan 4 (Scottish) student loan based on your income and loan balance.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I repay on a Plan 4 student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You repay 9% of your income above £27,660 per year (£2,305 per month). Your monthly repayment amount changes with your income, and your loan is written off after 30 years regardless of how much you've repaid.",
        },
      },
      {
        "@type": "Question",
        name: "What is the interest rate on Plan 4 student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 4 loans use the same interest calculation as Plan 1 loans. The interest rate is the lower of the RPI (Retail Price Index) or the Bank of England base rate plus 1%.",
        },
      },
      {
        "@type": "Question",
        name: "How is Plan 4 different from other student loan plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 4 is specifically for Scottish students. It has a higher repayment threshold than Plan 1 (£27,660 vs £22,015) but uses the same interest rate calculation. Compared to Plan 2, it has a higher threshold and typically lower interest rates.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <Plan4CalculatorPage />
      </div>
    </>
  )
}

export default Plan4Calculator

