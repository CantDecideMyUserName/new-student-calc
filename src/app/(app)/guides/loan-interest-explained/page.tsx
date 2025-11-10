import LoanInterestExplainedPage from '@/modules/guides/loan-interest-explained'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, WithContext, WebPage } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loan Interest Explained - UK Guide",
  description: "Learn how student loan interest works in the UK, how it's calculated, and how it affects your repayments and total loan cost.",
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
    canonical: "https://studentloancalculator.uk/guides/loan-interest-explained/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Interest Explained - UK Guide",
    description: "Learn how student loan interest works in the UK, how it's calculated, and how it affects your repayments and total loan cost.",
    url: "https://studentloancalculator.uk/guides/loan-interest-explained/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
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

const LoanInterestExplained = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      { "@type": "ListItem", position: 3, name: "Loan Interest Explained", item: "https://studentloancalculator.co.uk/guides/loan-interest-explained" },
    ],
  };

  const webPageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Student Loan Interest Rates Explained",
    description:
      "Comprehensive guide to understanding how interest works on UK student loans, including RPI, variable rates, and impact on total repayment amount.",
    url: "https://studentloancalculator.co.uk/guides/loan-interest-explained",
    datePublished: "2025-05-09T05:42:41.431Z",
    dateModified: "2025-05-09T05:42:41.431Z",
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, webPageSchema]} />
      <div>
        <LoanInterestExplainedPage />
      </div>
    </>
  )
}

export default LoanInterestExplained