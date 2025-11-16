import WalesStudentFinancePage from '@/modules/regions/wales-student-finance'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Wales Student Finance: Grants, Loans & £1,500 Cancellation Guide",
  description: "Complete guide to Wales student finance. Understand Welsh maintenance grants, Plan 2 repayments, £1,500 partial cancellation scheme, and how Wales differs from England, Scotland, and Northern Ireland.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "wales student finance",
    "student finance wales",
    "welsh maintenance grant",
    "plan 2 wales",
    "£1500 cancellation wales",
    "wales student loans",
    "welsh government learning grant",
    "plan 2 calculator wales",
    "wales vs england student loans",
    "student finance wales threshold",
    "wales partial cancellation scheme",
    "welsh student grants",
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
    canonical: "https://studentloancalculator.uk/regions/wales-student-finance/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Wales Student Finance: Grants, Loans & £1,500 Cancellation",
    description: "Everything about Wales student finance: maintenance grants up to £8,100, Plan 2 repayments, and the unique £1,500 partial cancellation scheme.",
    url: "https://studentloancalculator.uk/regions/wales-student-finance/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/wales-student-finance.jpg",
        width: 1200,
        height: 630,
        alt: "Wales Student Finance Guide - Grants and Loans",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Wales Student Finance: Grants & £1,500 Cancellation",
    description: "Complete guide to Wales student finance - maintenance grants, Plan 2 loans, and how Welsh students save with the £1,500 cancellation",
    images: ["https://studentloancalculator.uk/images/og/regions/wales-student-finance.jpg"],
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

const WalesStudentFinance = () => {
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
        name: "Wales Student Finance", 
        item: "https://studentloancalculator.uk/regions/wales-student-finance" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Wales Student Finance: Grants, Loans & £1,500 Cancellation",
    description:
      "Comprehensive guide to understanding Wales's student finance system, including Welsh maintenance grants, Plan 2 repayments, the £1,500 partial cancellation scheme, and how Wales's system differs from England, Scotland, and Northern Ireland.",
    url: "https://studentloancalculator.uk/regions/wales-student-finance",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/wales-student-finance.jpg",
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
      "@id": "https://studentloancalculator.uk/regions/wales-student-finance",
    },
    keywords: [
      "Wales student finance",
      "Welsh maintenance grant",
      "Plan 2 Wales",
      "£1,500 cancellation",
      "Student Finance Wales",
      "Welsh Government Learning Grant",
      "Wales vs England student loans",
      "Plan 2 threshold Wales",
    ],
    articleSection: "Regional Student Finance Guides",
    wordCount: 5500,
    about: [
      {
        "@type": "Thing",
        name: "Student Finance Wales",
        description: "The agency administering student finance for Welsh students",
      },
      {
        "@type": "Thing",
        name: "Welsh Maintenance Grant",
        description: "Non-repayable grant support for Welsh students based on household income",
      },
      {
        "@type": "Thing",
        name: "Partial Cancellation Scheme",
        description: "Welsh Government scheme cancelling up to £1,500 from student loan balance",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Welsh maintenance grant and how much can I get?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Welsh Government Learning Grant (WGLG) is non-repayable support for living costs. Every eligible Welsh student receives at least £1,000 per year regardless of household income. Students from households earning £18,370 or less receive the maximum grant of £8,100 (living away from home). The grant reduces on a sliding scale for incomes between £18,371-£59,200. All Welsh students receive the same total support (grant + loan combined), only the split varies by income.",
        },
      },
      {
        "@type": "Question",
        name: "What is the £1,500 partial cancellation scheme in Wales?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Welsh Government partial cancellation scheme cancels up to £1,500 from your first maintenance loan balance when you start repaying. It applies to full-time undergraduate maintenance loans taken from 2010/11 onwards. You trigger the cancellation by making your first repayment (minimum £5) - this can be a PAYE repayment or voluntary payment. The scheme is unique to Wales and saves graduates £1,500 plus all the interest that would have accumulated on that amount.",
        },
      },
      {
        "@type": "Question",
        name: "Does Wales use Plan 2 or Plan 5 student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wales uses Plan 2 for student loan repayments, the same system as England's legacy borrowers. While England introduced Plan 5 for students starting from 2023, Wales has continued with Plan 2. Plan 2 has a £27,295 repayment threshold, 9% repayment rate, RPI to RPI+3% interest rates based on income, and a 30-year write-off period. The Welsh Government is reviewing whether to adopt Plan 5 in the future.",
        },
      },
      {
        "@type": "Question",
        name: "How do Welsh student loans compare to England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Welsh students have significant advantages over English students: Every Welsh student gets at least £1,000 in grants (England: £0). Low-income Welsh students can receive up to £8,100 in grants (England: £0). Welsh students benefit from the £1,500 partial cancellation (England: none). Wales uses Plan 2 with a £27,295 threshold vs England's Plan 5 £25,000 threshold. A Welsh student from a low-income household saves approximately £19,500 vs an English student over a 3-year degree.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Plan 2 repayment threshold in Wales?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Plan 2 repayment threshold in Wales for 2025/26 is £27,295 per year (£2,274 per month or £524 per week). Welsh graduates repay 9% of income above this threshold. This is £2,295 higher than England's Plan 5 threshold of £25,000, meaning Welsh graduates start repaying at higher salaries compared to new English graduates.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I borrow for living costs in Wales?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Welsh students can receive up to £12,345 total for living costs if living away from home (£10,480 at parental home, £15,415 in London). This combines maintenance grants and loans. All Welsh students receive the same total amount regardless of household income - only the grant/loan split varies. Lower-income households receive more as grant (up to £8,100) and less as loan, while higher-income households receive minimum £1,000 grant with the rest as loan.",
        },
      },
      {
        "@type": "Question",
        name: "How do I maximize the £1,500 cancellation in Wales?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "To maximize your £1,500 cancellation: Wait until you've borrowed at least £1,500 (typically after first year), then make a minimum £5 voluntary repayment online. Don't pay off your entire first year loan before triggering the cancellation. The cancellation applies to your first maintenance loan only and can only be claimed once. Making this strategic £5 payment early saves you £1,500 plus decades of interest accumulation.",
        },
      },
      {
        "@type": "Question",
        name: "Are Welsh tuition fees the same as England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Welsh tuition fees are capped at £9,000 per year for 2025/26 (England: £9,250). However, unlike England, Welsh students receive substantial maintenance grants and the £1,500 cancellation scheme, significantly reducing overall debt burden. Welsh students can get tuition fee loans to cover the full £9,000, paid directly to the university.",
        },
      },
      {
        "@type": "Question",
        name: "What postgraduate funding is available in Wales?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Wales offers the most generous postgraduate funding in the UK: up to £19,255 for Masters students (2025/26). This is £7,088 more than England (£12,167) and £5,355 more than Scotland (£13,900). Welsh postgraduate funding is non means-tested, paid directly to students, and can be used for tuition fees or living costs. Repayments are 6% of income above £21,000 threshold.",
        },
      },
      {
        "@type": "Question",
        name: "Can English students get Welsh maintenance grants?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, Welsh maintenance grants and the £1,500 cancellation scheme are only available to students ordinarily resident in Wales who have lived in the UK for at least 3 years before their course starts. English students studying in Wales apply through Student Finance England and follow England's loan system (no grants, no cancellation). Only Welsh-domiciled students benefit from Wales's grant system, regardless of where in the UK they study.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <WalesStudentFinancePage />
      </div>
    </>
  )
}

export default WalesStudentFinance