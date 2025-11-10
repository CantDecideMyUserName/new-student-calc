import MonthlyRepaymentCalculatorPage from '@/modules/calculator/monthly-repayment-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Monthly Student Loan Repayment Calculator UK - Compare All Plans",
  description: "Calculate your monthly student loan repayments for all UK loan plans. Compare Plan 1, 2, 4, 5 and Postgraduate loan monthly payments based on your salary.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "monthly student loan calculator",
    "monthly repayment calculator",
    "uk student loan monthly payment",
    "compare loan plans",
    "student loan budgeting",
    "monthly take home pay calculator",
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
    canonical: "https://studentloancalculator.uk/calculators/monthly-repayment-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Monthly Student Loan Repayment Calculator UK - Compare All Plans",
    description: "Calculate your monthly student loan repayments for all UK loan plans. Compare Plan 1, 2, 4, 5 and Postgraduate loan monthly payments based on your salary.",
    url: "https://studentloancalculator.uk/calculators/monthly-repayment-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monthly Student Loan Repayment Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Student Loan Repayment Calculator UK",
    description: "Calculate and compare monthly student loan payments across all UK loan plans.",
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

const MoneyRepaymentCalculator = () => {
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
        name: "Monthly Repayment Calculator",
        item: "https://studentloancalculator.co.uk/calculators/monthly-repayment-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Monthly Student Loan Repayment Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/monthly-repayment-calculator",
    description: "Calculate and compare monthly repayments for all UK student loan plan types based on your salary.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I pay each month for my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your monthly repayment depends on your loan plan and income. You pay a percentage of your income above the repayment threshold: 9% for Plans 1, 2, 4, and 5, and 6% for Postgraduate loans. For example, on a £30,000 salary with Plan 2, you would pay approximately £20 per month.",
        },
      },
      {
        "@type": "Question",
        name: "Do student loan repayments change if my salary changes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, your repayments automatically adjust when your income changes. If your income decreases, your repayments will decrease. If your income falls below the repayment threshold, your repayments will temporarily stop until you earn above the threshold again.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have multiple student loan repayments at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you have multiple loan types (e.g., Plan 2 and a Postgraduate loan), you'll make separate repayments for each loan simultaneously. For example, you might pay 9% above the Plan 2 threshold plus 6% above the Postgraduate loan threshold.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <MonthlyRepaymentCalculatorPage />
      </div>
    </>
  )
}

export default MoneyRepaymentCalculator