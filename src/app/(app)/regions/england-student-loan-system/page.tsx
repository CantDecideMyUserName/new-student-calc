import EnglandStudentLoanSystemPage from '@/modules/regions/england-student-loan-system'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "England Student Loan System - Complete Guide to Plan 2 & Plan 5",
  description: "Comprehensive guide to England's student finance system. Understand Plan 2 and Plan 5 loans, repayment thresholds, interest rates, and how England differs from Scotland, Wales, and Northern Ireland.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "england student loan",
    "plan 5 student loan england",
    "plan 2 student loan england",
    "student finance england",
    "england loan repayments",
    "england student loan calculator",
    "england vs scotland student loans",
    "england tuition fees",
    "student loans company england",
    "plan 5 calculator",
    "england student loan threshold",
    "student finance england repayment",
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
    canonical: "https://studentloancalculator.uk/regions/england-student-loan-system/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "England Student Loan System - Plan 2 & Plan 5 Complete Guide",
    description: "Everything you need to know about England's student loan system: Plan 2, Plan 5, repayment thresholds, interest rates, and regional differences across the UK.",
    url: "https://studentloancalculator.uk/regions/england-student-loan-system/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/england-student-loans.jpg",
        width: 1200,
        height: 630,
        alt: "England Student Loan System Guide - Plan 2 and Plan 5",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "England Student Loans: Plan 2 & Plan 5 Explained",
    description: "Complete guide to England's student finance system - understand Plan 2, Plan 5, thresholds, and how England differs from other UK nations",
    images: ["https://studentloancalculator.uk/images/og/regions/england-student-loans.jpg"],
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

const EnglandStudentLoanSystem = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { 
        "@type": "ListItem", 
        position: 1, 
        name: "Home", 
        item: "https://studentloancalculator.uk" 
      },
      { 
        "@type": "ListItem", 
        position: 2, 
        name: "Regional Guides", 
        item: "https://studentloancalculator.uk/regions" 
      },
      { 
        "@type": "ListItem", 
        position: 3, 
        name: "England Student Loan System", 
        item: "https://studentloancalculator.uk/regions/england-student-loan-system" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to England's Student Loan System",
    description:
      "Comprehensive guide to understanding England's student finance system, including Plan 2 and Plan 5 loans, repayment thresholds, interest rates, and how England's system differs from Scotland, Wales, and Northern Ireland.",
    url: "https://studentloancalculator.uk/regions/england-student-loan-system",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/england-student-loans.jpg",
    author: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://studentloancalculator.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://studentloancalculator.uk/regions/england-student-loan-system",
    },
    keywords: [
      "England student loans",
      "Plan 2 England",
      "Plan 5 England",
      "Student Finance England",
      "England student loan repayment",
      "England vs Scotland student loans",
      "England tuition fees",
      "England loan threshold",
    ],
    articleSection: "Regional Student Finance Guides",
    wordCount: 5000,
    about: [
      {
        "@type": "Thing",
        name: "Student Loans England",
        description: "Income-contingent repayment loans for higher education in England",
      },
      {
        "@type": "Thing",
        name: "Plan 5 Student Loan",
        description: "England's current student loan system for courses starting from 2023",
      },
      {
        "@type": "Thing",
        name: "Plan 2 Student Loan",
        description: "England's legacy student loan system for courses from 2012-2023",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Plan 2 and Plan 5 in England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 5 (England's current system from 2023) has a lower repayment threshold (£25,000 vs £27,295), simplified interest rate (RPI only vs RPI to RPI+3%), and longer write-off period (40 years vs 30 years). Plan 5 is designed so more graduates fully repay their loans, with government estimates suggesting 52-65% will repay in full compared to only 25-27% under Plan 2.",
        },
      },
      {
        "@type": "Question",
        name: "How does England's student loan system differ from Scotland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "England charges up to £9,250 in tuition fees while Scottish students at Scottish universities pay no tuition fees. English graduates typically borrow £45,000-£50,000 while Scottish graduates borrow only £20,000-£25,000 for maintenance. England uses Plan 5 with a 40-year write-off, while Scotland uses Plan 4 with a 30-year write-off. England's Plan 5 threshold is £25,000 compared to Scotland's £27,660.",
        },
      },
      {
        "@type": "Question",
        name: "When did Plan 5 start in England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 5 launched in England on August 1, 2023, and applies to students starting undergraduate courses from the 2023/24 academic year onward. Students won't begin repaying Plan 5 loans until April 2026 at the earliest. Plan 5 is exclusive to England; Wales continues to use Plan 2.",
        },
      },
      {
        "@type": "Question",
        name: "What is the repayment threshold for England's Plan 5 loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "England's Plan 5 repayment threshold is £25,000 per year (£2,083 per month or £480 per week) for the 2026-27 tax year. This is £2,295 lower than Plan 2's threshold of £27,295, meaning Plan 5 graduates start repaying at lower salaries. You repay 9% of income above this threshold.",
        },
      },
      {
        "@type": "Question",
        name: "How much are tuition fees in England compared to other UK nations?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "England has the highest tuition fees in the UK at up to £9,250 per year for undergraduate courses. By comparison, Wales charges up to £9,000, Northern Ireland charges up to £4,855, and Scotland charges no tuition fees for Scottish students at Scottish universities. England's fees have been frozen at £9,250 since 2017.",
        },
      },
      {
        "@type": "Question",
        name: "What interest rate applies to England's Plan 5 student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "England's Plan 5 loans charge interest at RPI (Retail Price Index) only, currently 3.2% as of September 2025. This is simpler than Plan 2's variable rate of RPI to RPI+3% based on income. The RPI-only rate means your loan grows with inflation but without additional interest charges, benefiting higher earners significantly compared to Plan 2.",
        },
      },
      {
        "@type": "Question",
        name: "Will England adopt Scotland's free tuition model?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "There are no current government plans for England to adopt Scotland's free tuition model. The 2022 reforms that created Plan 5 maintain England's loan-based system with £9,250 fees. England's approach focuses on income-contingent repayment rather than upfront government funding. Any move to free tuition would require significant policy change and additional government expenditure.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to write off student loans in England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "England's Plan 5 loans are written off after 40 years from the April you became eligible to repay, making it the longest write-off period in the UK. England's legacy Plan 2 loans are written off after 30 years. By comparison, Scotland (Plan 4) has 30 years, Wales (Plan 2) has 30 years, and Northern Ireland (Plan 1) has 25 years.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <EnglandStudentLoanSystemPage />
      </div>
    </>
  )
}

export default EnglandStudentLoanSystem