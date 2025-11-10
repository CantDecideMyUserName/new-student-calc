import PostgradCalculatorPage from '@/modules/calculator/postgraduate-loan-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Postgraduate Loan Calculator UK - Master's & PhD Repayments",
  description: "Calculate your UK postgraduate loan repayments for Master's and Doctoral degrees. Estimate monthly payments with our accurate repayment calculator.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "postgraduate loan calculator",
    "masters loan calculator",
    "phd loan calculator",
    "doctoral loan calculator",
    "uk student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/postgraduate-loan-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Postgraduate Loan Calculator UK - Master's & PhD Repayments",
    description: "Calculate your UK postgraduate loan repayments for Master's and Doctoral degrees. Estimate monthly payments with our accurate repayment calculator.",
    url: "https://studentloancalculator.uk/calculators/postgraduate-loan-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Postgraduate Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postgraduate Loan Calculator UK",
    description: "Calculate your postgraduate loan repayments. Free calculator for Master's and PhD students.",
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

const PostGraduateLoanCalculator = () => {
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
        name: "Postgraduate Calculator",
        item: "https://studentloancalculator.co.uk/calculators/postgraduate-loan-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Postgraduate Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/postgraduate-loan-calculator",
    description: "Calculate monthly repayments for UK postgraduate loans based on your income and loan type.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I repay on a postgraduate loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You repay 6% of your income above £21,000 per year (£1,750 per month). Your monthly repayment amount changes with your income, and your loan is written off after 30 years regardless of how much you've repaid.",
        },
      },
      {
        "@type": "Question",
        name: "What is the interest rate on postgraduate loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Postgraduate loans accrue interest at RPI + 3%. This is currently around 7.6% and is applied from the day you receive your first payment until the loan is repaid in full or written off.",
        },
      },
      {
        "@type": "Question",
        name: "Do I make separate repayments if I have an undergraduate and a postgraduate loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, repayments are taken together through the tax system. If you have both types of loans, you'll repay 9% of income above the undergraduate threshold plus 6% of income above the postgraduate threshold simultaneously.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <PostgradCalculatorPage />
      </div>
    </>
  )
}

export default PostGraduateLoanCalculator