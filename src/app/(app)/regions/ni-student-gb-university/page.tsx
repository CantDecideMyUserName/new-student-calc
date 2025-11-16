import NIStudentGBUniversityPage from '@/modules/regions/ni-student-gb-university'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Northern Ireland Students at GB Universities | Plan 1 Student Finance Guide",
  description: "Complete guide for NI students studying in England, Scotland, or Wales. Understand Plan 1 repayments, tuition fees, maintenance support, and how NI finance compares with GB systems.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "Northern Ireland student finance",
    "NI students GB universities",
    "Student Finance NI",
    "Plan 1 student loans",
    "NI tuition fees England",
    "Northern Ireland maintenance loan",
    "Plan 1 repayment NI",
    "NI vs GB student finance",
    "Northern Ireland student loans",
    "Student Finance NI application",
    "NI student loan calculator",
    "Plan 1 vs Plan 5",
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
    canonical: "https://studentloancalculator.uk/regions/ni-student-gb-university/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Northern Ireland Students at GB Universities | Plan 1 Finance Guide",
    description: "Understand NI student finance for studying in Great Britain - Plan 1 repayments, fees, maintenance support, and comparisons.",
    url: "https://studentloancalculator.uk/regions/ni-student-gb-university/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/ni-student-finance.jpg",
        width: 1200,
        height: 630,
        alt: "Northern Ireland Student Finance Guide for GB Universities",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "NI Students at GB Universities - Finance Guide",
    description: "Complete guide to Northern Ireland student finance and Plan 1 repayments for studying in Great Britain",
    images: ["https://studentloancalculator.uk/images/og/regions/ni-student-finance.jpg"],
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

const NIStudentGBUniversity = () => {
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
        name: "Regional Differences", 
        item: "https://studentloancalculator.uk/regions" 
      },
      { 
        "@type": "ListItem", 
        position: 3, 
        name: "NI Students at GB Universities", 
        item: "https://studentloancalculator.uk/regions/ni-student-gb-university" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Northern Ireland Students at GB Universities: Complete Student Finance Guide",
    description:
      "Comprehensive guide to student finance for Northern Ireland students studying in England, Scotland, or Wales, covering Plan 1 repayments, tuition fees, maintenance support, and comparisons with GB funding systems.",
    url: "https://studentloancalculator.uk/regions/ni-student-gb-university",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/ni-student-finance.jpg",
    author: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk"
    },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://studentloancalculator.uk/images/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://studentloancalculator.uk/regions/ni-student-gb-university"
    },
    articleSection: "Regional Student Finance",
    keywords: "Northern Ireland student finance, Plan 1 NI, Student Finance NI, GB universities",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What loan plan are Northern Ireland students on?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Northern Ireland students are on Plan 1 for loan repayment, regardless of where in the UK they study. Plan 1 features a £22,015 repayment threshold, 9% repayment rate, interest at the lower of RPI or Bank of England Base Rate + 1% (currently the lowest of all UK plans), and write-off after 25 years.",
        },
      },
      {
        "@type": "Question",
        name: "How much are tuition fees for NI students at GB universities?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NI students pay £9,250 per year at universities in England, Scotland, and Wales - the same as GB students. However, tuition fees in Northern Ireland are only £4,855 per year, saving £13,185 over a three-year degree for those who study at home.",
        },
      },
      {
        "@type": "Question",
        name: "Do NI students get maintenance grants?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, NI students from lower-income households can receive maintenance grants up to £3,475 per year. These are non-repayable and reduce the maintenance loan amount pound-for-pound. Students from households earning £19,203 or less receive the maximum grant, with amounts tapering to zero for incomes above £41,065.",
        },
      },
      {
        "@type": "Question",
        name: "Why are NI maintenance loans lower than English loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NI students receive maximum maintenance loans of £6,776 for living away from home (compared to £10,227 for English Plan 5 students). This £3,451 difference means NI students often need more family support, part-time work, or careful budgeting to cover living costs when studying in Great Britain.",
        },
      },
      {
        "@type": "Question",
        name: "Is Plan 1 better than Plan 2 or Plan 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 1 has advantages and disadvantages. Advantages include the lowest interest rates (typically 1-2% vs 4-7% on other plans), shortest write-off period (25 years vs 30-40 years), and faster debt clearance due to low interest. The main disadvantage is the lower repayment threshold (£22,015 vs £25,000-£27,295), meaning repayments start earlier. For middle to high earners, Plan 1 is often more favorable due to low interest rates.",
        },
      },
      {
        "@type": "Question",
        name: "Should NI students study at home or in GB?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "This depends on individual circumstances. Studying in NI saves £13,185 in tuition fees over three years and allows lower living costs (especially if living at home). However, GB universities may offer better options for specific courses, career prospects, or life experiences. The decision should weigh course quality, career goals, financial considerations, and personal preferences. Plan 1's income-contingent repayment means higher debt doesn't necessarily mean higher monthly payments.",
        },
      },
      {
        "@type": "Question",
        name: "Where do NI students apply for student finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "NI students must apply through Student Finance NI (studentfinanceni.co.uk) regardless of where in the UK they study. Applications typically open in February/March for September starts, with a recommended deadline of end of June to ensure funding is in place for the course start.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <NIStudentGBUniversityPage />
      </div>
    </>
  )
}

export default NIStudentGBUniversity