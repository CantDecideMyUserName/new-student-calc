import StudentLoansAndTaxesContent from '@/modules/guides/student-loans-and-taxes'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Loans and Taxes UK - How Loan Repayments Affect Your Tax | Student Loan Calculator UK",
  description:
    "Understand how UK student loans impact your income tax, PAYE deductions, self-assessment, and tax code. Learn about tax implications for all loan plan types.",
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
    canonical: "https://studentloancalculator.uk/guides/student-loans-and-taxes/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loans and Taxes UK - Complete Guide",
    description:
      "Comprehensive guide explaining how student loan repayments affect your tax code, PAYE deductions, and self-assessment returns in the UK tax system.",
    url: "https://studentloancalculator.uk/guides/student-loans-and-taxes/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Calculator UK",
    description:
      "Calculate your UK student loan repayments with our free calculators.",
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

const StudentLoanTaxes = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Student Loans and Taxes",
        item: "https://studentloancalculator.co.uk/guides/student-loans-and-taxes",
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Student Loans and Taxes - UK Guide",
    description:
      "Learn how UK student loans affect your income tax, PAYE deductions, self-assessment, and tax code.",
    author: { "@type": "Organization", name: "Student Loan Calculator UK" },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      logo: { "@type": "ImageObject", url: "https://studentloancalculator.co.uk/logo.png" },
    },
    url: "https://studentloancalculator.co.uk/guides/student-loans-and-taxes",
    datePublished: "2023-09-15",
    dateModified: "2023-11-28",
    image: "https://studentloancalculator.co.uk/images/guides/student-loans-and-taxes.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://studentloancalculator.co.uk/guides/student-loans-and-taxes",
    },
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema]} />
      <div>
        <StudentLoansAndTaxesContent />
      </div>
    </>
  )
}

export default StudentLoanTaxes