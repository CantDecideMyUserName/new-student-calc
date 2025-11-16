import NorthernIrelandLoansPage from '@/modules/regions/northern-ireland-loans'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Northern Ireland Student Loans: Lowest Fees, Plan 1 & 25-Year Write-Off",
  description: "Complete guide to Northern Ireland student finance. Understand £4,855 tuition fees, Plan 1 repayments, maintenance grants, 25-year write-off, and how NI differs from England, Scotland, and Wales.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "northern ireland student loans",
    "student finance ni",
    "plan 1 northern ireland",
    "ni tuition fees £4855",
    "northern ireland maintenance grant",
    "plan 1 calculator",
    "ni vs england student loans",
    "student finance northern ireland",
    "25 year write off",
    "ni student loan threshold",
    "republic of ireland student loan",
    "sfni",
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
    canonical: "https://studentloancalculator.uk/regions/northern-ireland-loans/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Northern Ireland Student Loans: £4,855 Fees, Plan 1 & 25-Year Write-Off",
    description: "Everything about Northern Ireland student finance: lowest UK fees at £4,855, Plan 1 repayments, maintenance grants, and the UK's shortest 25-year write-off.",
    url: "https://studentloancalculator.uk/regions/northern-ireland-loans/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/northern-ireland-loans.jpg",
        width: 1200,
        height: 630,
        alt: "Northern Ireland Student Loans Guide - Plan 1",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Northern Ireland Loans: Lowest Fees & Fastest Write-Off",
    description: "Complete guide to NI student finance - £4,855 fees, Plan 1, and 25-year write-off make NI the most affordable after Scotland",
    images: ["https://studentloancalculator.uk/images/og/regions/northern-ireland-loans.jpg"],
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

const NorthernIrelandLoans = () => {
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
        name: "Regions", 
        item: "https://studentloancalculator.uk/regions" 
      },
      { 
        "@type": "ListItem", 
        position: 3, 
        name: "Northern Ireland Loans", 
        item: "https://studentloancalculator.uk/regions/northern-ireland-loans" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Northern Ireland Student Loans: Lowest Fees & Plan 1",
    description:
      "Comprehensive guide to understanding Northern Ireland's student finance system, including £4,855 tuition fees, Plan 1 repayments, maintenance grants, the 25-year write-off period, and how Northern Ireland's system differs from England, Scotland, and Wales.",
    url: "https://studentloancalculator.uk/regions/northern-ireland-loans",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/northern-ireland-loans.jpg",
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
      "@id": "https://studentloancalculator.uk/regions/northern-ireland-loans",
    },
    keywords: [
      "Northern Ireland student loans",
      "Plan 1 Northern Ireland",
      "£4,855 tuition fees",
      "Student Finance NI",
      "25-year write-off",
      "NI maintenance grant",
      "NI vs England student loans",
      "SFNI",
    ],
    articleSection: "Regional Student Finance Guides",
    wordCount: 5400,
    about: [
      {
        "@type": "Thing",
        name: "Student Finance Northern Ireland",
        description: "The agency administering student finance for Northern Irish students",
      },
      {
        "@type": "Thing",
        name: "Plan 1 Student Loan",
        description: "The original UK student loan repayment plan, still used exclusively in Northern Ireland",
      },
      {
        "@type": "Thing",
        name: "Northern Ireland Tuition Fees",
        description: "£4,855 annual tuition fees - the lowest in the UK after Scotland's free tuition",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much are tuition fees in Northern Ireland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Northern Irish students studying in Northern Ireland pay £4,855 per year in tuition fees (2025/26), the lowest in the UK after Scotland's free tuition. This is approximately half of England's £9,250 fees. If NI students study in England, Scotland, or Wales, they pay the higher fees those nations charge (up to £9,535) but can still get tuition fee loans through Student Finance NI.",
        },
      },
      {
        "@type": "Question",
        name: "What is Plan 1 in Northern Ireland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 1 is the student loan repayment plan used exclusively in Northern Ireland. All NI students have Plan 1 loans regardless of when they started their course. Plan 1 features a £26,065 repayment threshold (2025/26), 9% repayment rate, interest at the lower of RPI or Bank of England base rate +1% (currently 4.3%), and a 25-year write-off period - the shortest in the UK.",
        },
      },
      {
        "@type": "Question",
        name: "How long until student loans are written off in Northern Ireland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Northern Ireland student loans are written off after 25 years from the April you became eligible to repay. This is the shortest write-off period in the UK - 5 years shorter than Scotland and Wales (30 years) and 15 years shorter than England's Plan 5 (40 years). For loans taken before 2006/07, they're written off when you turn 65 instead.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Plan 1 repayment threshold in Northern Ireland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Plan 1 repayment threshold in Northern Ireland for 2025/26 is £26,065 per year (£2,172 per month or £501 per week). Northern Irish graduates repay 9% of income above this threshold. This is £6,680 higher than Scotland's £32,745 but £1,230 lower than Wales's £27,295 and £1,065 higher than England's Plan 5 (£25,000).",
        },
      },
      {
        "@type": "Question",
        name: "Do Northern Irish students get maintenance grants?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Northern Irish students from households earning £41,065 or less can receive maintenance grants up to £3,475 per year. The maximum grant goes to students whose household income is £19,203 or below, with the grant tapering down as income increases. Unlike Wales, NI doesn't have a universal minimum grant - you only get a grant if your household income is under £41,065.",
        },
      },
      {
        "@type": "Question",
        name: "How do Northern Ireland student loans compare to England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Northern Irish students have significant advantages over English students: NI tuition fees are £4,855 vs England's £9,250 (saving £13,185 over 3 years). NI has a 25-year write-off vs England's 40 years. NI students pay £804/year at £35,000 salary vs England's £900/year. However, NI students receive less maintenance support (max £6,776 vs England's £10,544 away from home) and have a lower threshold (£26,065 vs £27,295 for Plan 2).",
        },
      },
      {
        "@type": "Question",
        name: "Can Northern Irish students study in Republic of Ireland with student finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Northern Irish students can receive student finance to study in the Republic of Ireland. Student Finance NI provides a Student Contribution Loan of up to €3,000 to cover the ROI student contribution charge (equivalent to tuition fees). NI students also receive the same maintenance grants and loans for ROI study as they would for UK study. Repayment is under Plan 1 terms (£26,065 threshold, 25-year write-off).",
        },
      },
      {
        "@type": "Question",
        name: "What is the Special Support Grant in Northern Ireland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Special Support Grant (SSG) in Northern Ireland is a non-repayable grant of up to £3,475 for students in specific circumstances: lone parents, students aged 60+, students with disabilities receiving certain benefits, or those eligible for income-related benefits. The key advantage of SSG over the regular maintenance grant is that it does NOT reduce your maintenance loan entitlement, meaning you get both the full SSG and full loan.",
        },
      },
      {
        "@type": "Question",
        name: "Why are Northern Ireland tuition fees so much lower than England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Northern Ireland chose not to follow England's 2012 tuition fee reforms that tripled fees from £3,000 to £9,000. NI maintained lower fees due to political consensus about accessible higher education, concerns about debt burden on NI graduates (who have lower average incomes than GB), and devolved education policy allowing a distinct approach. The £4,855 cap has remained while England increased to £9,250.",
        },
      },
      {
        "@type": "Question",
        name: "What are the advantages of Northern Ireland's student loan system?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Northern Ireland's system offers several advantages: Lowest UK tuition fees after Scotland (£4,855 vs £9,250 England), shortest write-off period (25 years vs 40 in England), maintenance grants up to £3,475 reduce repayable debt, lower interest rates than England's Plan 2 maximum, significantly lower total debt than England or Wales, and unique access to student finance for Republic of Ireland study.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <NorthernIrelandLoansPage />
      </div>
    </>
  )
}

export default NorthernIrelandLoans