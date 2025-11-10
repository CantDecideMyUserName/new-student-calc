import LoanWriteOffCheckerPage from '@/modules/calculator/loan-writeoff-checker'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loan Write-Off Calculator UK - When Will My Loan Be Cancelled?",
  description: "Find out exactly when your UK student loan will be written off based on your plan type and graduation year. All Plan 1, 2, 4, 5 and Postgraduate loans covered.",
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
    canonical: "https://studentloancalculator.uk/calculators/loan-writeoff-checker/",
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


const LoanWireOffChecker = () => {
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
        name: "Write-Off Checker",
        item: "https://studentloancalculator.co.uk/calculators/loan-writeoff-checker",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Write-Off Checker",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/loan-writeoff-checker",
    description: "Calculate the exact date when your UK student loan will be written off based on your plan type and graduation year.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When are student loans written off in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The write-off period depends on your loan plan: Plan 1 loans are written off after 25 years, Plan 2 after 30 years, Plan 4 after 30 years, Plan 5 after 40 years, and Postgraduate loans after 30 years from the April after you complete your course.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to apply for my loan to be written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the write-off happens automatically. The Student Loans Company will notify you when your loan has been cancelled, and you do not need to take any action.",
        },
      },
      {
        "@type": "Question",
        name: "Will my credit score improve when my loan is written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loans do not appear on your credit file, so the write-off will not directly impact your credit score. However, it will reduce your monthly outgoings, which may improve your overall financial position.",
        },
      },
    ],
  };
  
  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <LoanWriteOffCheckerPage />
      </div>
    </>
  )
}

export default LoanWireOffChecker