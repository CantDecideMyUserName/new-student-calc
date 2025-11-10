import { HighEarnersGuide } from '@/modules/guides/student-loans-high-earners'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loans for High Earners - UK Guide for £50k+ Salaries",
  description: "How UK student loans work for high earners on £50,000+ salaries. Learn about repayment accelerations, interest rates, and whether to make voluntary repayments.",
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
    canonical: "https://studentloancalculator.uk/guides/student-loans-high-earners/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loans for High Earners | UK Guide for £50k+ Salaries",
    description: "Essential advice for high-earning graduates with student loans. Discover how repayments increase with income and whether voluntary overpayments make financial sense.",
    url: "https://studentloancalculator.uk/guides/student-loans-high-earners/",
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

const HighEarnerGuidepage = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      { "@type": "ListItem", position: 3, name: "Student Loans for High Earners", item: "https://studentloancalculator.co.uk/guides/student-loans-high-earners" },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Student Loans for High Earners - UK Guide for £50k+ Salaries",
    description:
      "Comprehensive guide for high-earning graduates with UK student loans. Learn how repayments scale with income, when to consider voluntary repayments, and tax-efficient strategies.",
    author: { "@type": "Organization", name: "Student Loan Calculator UK" },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      logo: { "@type": "ImageObject", url: "https://studentloancalculator.co.uk/logo.png" },
    },
    url: "https://studentloancalculator.co.uk/guides/student-loans-high-earners",
    datePublished: "2023-10-15",
    dateModified: "2023-12-20",
    image: "https://studentloancalculator.co.uk/images/guides/student-loans-high-earners.jpg",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/guides/student-loans-high-earners" },
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema]} />
      <div>
        <HighEarnersGuide />
      </div>
    </>
  )
}

export default HighEarnerGuidepage