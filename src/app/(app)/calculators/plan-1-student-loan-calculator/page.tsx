import Plan1CalculatorPage from '@/modules/calculator/plan-1-student-loan-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Plan 1 Student Loan Calculator UK - Pre-2012 Repayment Estimator",
  description: "Calculate your Plan 1 student loan repayments if you started university before 2012 in England and Wales. See monthly payments and repayment timeline.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan calculator",
    "uk student loan",
    "plan 1 calculator",
    "pre-2012 student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/plan-1-student-loan-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 1 Student Loan Calculator UK - Pre-2012 Repayment Estimator",
    description: "Calculate your Plan 1 student loan repayments if you started university before 2012 in England and Wales. See monthly payments and repayment timeline.",
    url: "https://studentloancalculator.uk/calculators/plan-1-student-loan-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg", // Update to production URL
        width: 1200,
        height: 630,
        alt: "Plan 1 Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan 1 Student Loan Calculator UK",
    description: "Calculate your Plan 1 student loan repayments. Free calculator for pre-2012 students.",
    images: ["https://studentloancalculator.uk/og-image.jpg"], // Update to production URL
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

const Plan1Calculator = () => {
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
        name: "Plan 1 Calculator",
        item: "https://studentloancalculator.co.uk/calculators/plan-1-student-loan-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Plan 1 Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/plan-1-student-loan-calculator",
    description: "Calculate monthly repayments for a Plan 1 student loan based on your income and loan balance.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I repay on a Plan 1 student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You repay 9% of your income above £22,015 per year (£1,834 per month). Your monthly repayment amount changes with your income, and your loan is written off after 25 years regardless of how much you've repaid.",
        },
      },
      {
        "@type": "Question",
        name: "What is the interest rate on Plan 1 student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 1 loans have a simpler interest structure than later plans. The interest rate is the lower of the RPI (Retail Price Index) or the Bank of England base rate plus 1%.",
        },
      },
      {
        "@type": "Question",
        name: "Will I pay off my Plan 1 student loan in full?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Due to the lower threshold and interest rates, Plan 1 borrowers are more likely to fully repay their loans compared to Plan 2 borrowers. However, this depends on your starting salary, career progression, and initial loan balance.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <Plan1CalculatorPage />
      </div>
    </>
  )
}

export default Plan1Calculator