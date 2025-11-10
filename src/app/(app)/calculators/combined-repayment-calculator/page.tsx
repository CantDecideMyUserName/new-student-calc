import CombinedLoanCalculatorPage from '@/modules/calculator/combined-repayment-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Combined Student Loan Calculator UK - Multiple Plan Repayments",
  description: "Calculate repayments when you have multiple UK student loan types active simultaneously, such as undergraduate and postgraduate loans.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "combined student loan calculator",
    "multiple student loans",
    "undergraduate and postgraduate loans",
    "plan 2 and postgraduate loan",
    "dual student loan repayment",
    "uk student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/combined-repayment-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Combined Student Loan Calculator UK - Multiple Plan Repayments",
    description: "Calculate repayments when you have multiple UK student loan types active simultaneously, such as undergraduate and postgraduate loans.",
    url: "https://studentloancalculator.uk/calculators/combined-repayment-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Combined Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Combined Student Loan Calculator UK",
    description: "Calculate repayments for multiple student loans simultaneously.",
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

const CombineRepaymentCalculator = () => {
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
        name: "Combined Loan Calculator",
        item: "https://studentloancalculator.co.uk/calculators/combined-repayment-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Combined Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/combined-repayment-calculator",
    description: "Calculate your total repayments when you have multiple UK student loan plans active simultaneously.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do multiple student loan plans work together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When you have multiple loan plans, you repay each one simultaneously once you earn above their respective thresholds. For undergraduate loans, you pay 9% of income above the threshold, and for postgraduate loans, you pay 6% above £21,000. This means you could pay 15% of your income above certain thresholds.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have both Plan 2 and Postgraduate loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many students have both Plan 2 (or Plan 5) undergraduate loans and Postgraduate loans. You'll make repayments toward both loans simultaneously through your salary.",
        },
      },
      {
        "@type": "Question",
        name: "Do I make separate payments for each loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all student loan repayments are automatically deducted from your salary by your employer. The Student Loans Company then allocates your payment across your different loan plans based on their respective thresholds and rates.",
        },
      },
    ],
  };

  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <CombinedLoanCalculatorPage />
    </div>
  )
}

export default CombineRepaymentCalculator