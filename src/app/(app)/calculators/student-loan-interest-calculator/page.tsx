import StudentLoanInterestCalculatorPage from '@/modules/calculator/student-loan-interest-calculator'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Student Loan Interest Calculator UK - See How Interest Builds Up",
  description: "Calculate how interest accumulates on your UK student loan. See how your balance grows over time for Plan 1, 2, 4, 5, and Postgraduate loans.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan interest calculator",
    "uk student loan interest",
    "loan interest accumulation",
    "student loan balance growth",
    "compound interest calculator",
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
    canonical: "https://studentloancalculator.uk/calculators/student-loan-interest-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Interest Calculator UK - See How Interest Builds Up",
    description: "Calculate how interest accumulates on your UK student loan. See how your balance grows over time for Plan 1, 2, 4, 5, and Postgraduate loans.",
    url: "https://studentloancalculator.uk/calculators/student-loan-interest-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Interest Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Interest Calculator UK",
    description: "Calculate how interest accumulates on your UK student loan over time.",
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

const StudentLoanInterestCalculator = () => {
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
        name: "Interest Calculator",
        item: "https://studentloancalculator.co.uk/calculators/student-loan-interest-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Interest Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/student-loan-interest-calculator",
    description: "Calculate how interest accumulates on your UK student loan based on your plan type, income, and loan balance.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is interest calculated on student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interest rates vary by loan plan. Plan 1 uses the lower of RPI or Bank Rate +1%. Plan 2 uses RPI to RPI+3% depending on income. Plan 4 uses the same method as Plan 1. Plan 5 uses RPI only. Postgraduate loans use RPI+3% regardless of income.",
        },
      },
      {
        "@type": "Question",
        name: "Does interest start accumulating immediately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, interest starts accumulating from the day the loan is paid into your account or to your university, not from when you start making repayments.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my loan balance keep increasing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are not earning above the repayment threshold or if your repayments are lower than the interest being added, your loan balance will increase over time as interest accumulates.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />

      <div>
        <StudentLoanInterestCalculatorPage />
      </div>
    </>
  )
}

export default StudentLoanInterestCalculator