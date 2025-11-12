import { LowIncomeGuide } from '@/modules/guides/student-loans-low-income'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loans on Low Income - UK Guide for Graduates",
  description: "How UK student loans work on low income. Understand repayment thresholds, protections, and what happens if you earn below the threshold.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan calculator",
    "uk student loan",
    "low income student loan",
    "repayment threshold",
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
    canonical: "https://studentloancalculator.uk/guides/student-loans-low-income/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loans on Low Income | UK Graduate Guide",
    description: "Essential guidance for graduates on low incomes with UK student loans. Learn about repayment thresholds, protections, and financial support options.",
    url: "https://studentloancalculator.uk/guides/student-loans-low-income/",
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
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
};

const LowIncomeGuidePage = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      { "@type": "ListItem", position: 3, name: "Student Loans on Low Income", item: "https://studentloancalculator.co.uk/guides/student-loans-low-income" },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Student Loans on Low Income - UK Guide for Graduates",
    description:
      "Comprehensive guide for graduates on low incomes with UK student loans. Learn about repayment thresholds, protections when earning below the threshold, and financial support options.",
    author: { "@type": "Organization", name: "Student Loan Calculator UK" },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      logo: { "@type": "ImageObject", url: "https://studentloancalculator.co.uk/logo.png" },
    },
    url: "https://studentloancalculator.co.uk/guides/student-loans-low-income/",
    datePublished: "2023-10-15",
    dateModified: "2025-12-20",
    image: "https://studentloancalculator.co.uk/images/guides/student-loans-low-income.jpg",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/guides/student-loans-low-income/" },
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema]} />
      <div>
        <LowIncomeGuide />
      </div>
    </>
  )
}

export default LowIncomeGuidePage