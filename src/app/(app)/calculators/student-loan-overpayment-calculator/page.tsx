import StudentLoanOverpaymentCalculatorPage from '@/modules/calculator/student-loan-overpayment-calculator'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loan Overpayment Calculator UK - Is It Worth It?",
  description: "Calculate whether overpaying your UK student loan is financially beneficial. Compare interest savings and see if early repayment makes sense for your plan.",
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
    canonical: "https://studentloancalculator.uk/calculators/student-loan-overpayment-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Calculator UK - Free Repayment Calculator & Guides",
    description: "Calculate your UK student loan repayments with our free calculators. Accurate repayment estimates for all loan types.",
    url: "https://studentloancalculator.co.uk/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "http://localhost:3000/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Calculator UK",
    description: "Calculate your UK student loan repayments with our free calculators.",
    images: ["http://localhost:3000/og-image.jpg"],
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


const StudentLoanOverPaymentCalculator = () => {
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
        name: "Overpayment Calculator",
        item: "https://studentloancalculator.co.uk/calculators/student-loan-overpayment-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Overpayment Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/student-loan-overpayment-calculator",
    description: "Calculate if making voluntary overpayments on your UK student loan is financially beneficial based on your plan, income, and balance.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I make overpayments on my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your loan plan, income, and financial goals. For Plan 2 and Plan 5 loans, many graduates won't fully repay before the loan is written off, making overpayments financially inefficient. Use our calculator to analyze your specific situation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make voluntary student loan overpayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can make voluntary overpayments through your Student Loans Company online account, by bank transfer, or by contacting SLC directly. Overpayments go directly toward reducing your loan balance.",
        },
      },
      {
        "@type": "Question",
        name: "Will overpaying my student loan improve my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, UK student loans don't appear on your credit file and don't affect your credit score. Overpaying won't improve your creditworthiness, though reducing your loan balance decreases your monthly outgoings.",
        },
      },
    ],
  };
  
  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <StudentLoanOverpaymentCalculatorPage />
      </div>
    </>
  )
}

export default StudentLoanOverPaymentCalculator