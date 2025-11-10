import GuidesPage from '@/modules/guides'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, WithContext, WebPage } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loan Guides UK - Tips, Strategies & Explanations",
  description: "Comprehensive guides explaining UK student loans, repayment strategies, and financial planning for graduates and current students.",
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
    canonical: "https://studentloancalculator.uk/guides/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Calculator UK - Free Repayment Calculator & Guides",
    description: "Calculate your UK student loan repayments with our free calculators. Accurate repayment estimates for all loan types.",
    url: "https://studentloancalculator.uk/guides/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg", // Update to production URL
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

const GuideListPage = () => {
  const webPageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "UK Student Loan Guides",
    description:
      "Collection of comprehensive guides on UK student loans, repayment strategies, and financial planning.",
    url: "https://studentloancalculator.co.uk/guides",
    datePublished: "2025-05-09T05:42:41.239Z",
    dateModified: new Date().toISOString(),
  };

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
        name: "Guides",
        item: "https://studentloancalculator.co.uk/guides",
      },
    ],
  };

  return (
    <>
      <JsonLd code={[webPageSchema, breadcrumbSchema]} />
      <div>
        <GuidesPage />
      </div>
    </>
  )
}

export default GuideListPage