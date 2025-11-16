import WelshStudentEnglishUniPage from '@/modules/regions/welsh-student-english-uni'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Welsh Students at English Universities | Student Finance Grant-Loan Guide",
  description: "Complete guide to Welsh student finance when studying in England. Understand the unique grant-loan combination, Plan 2 repayments, and how Welsh funding compares to English systems.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "Welsh student finance England",
    "Student Finance Wales",
    "Welsh maintenance grant",
    "Welsh student loan Plan 2",
    "grant loan combination Wales",
    "Welsh students English universities",
    "SFW funding",
    "Welsh vs English student finance",
    "maintenance grant Wales",
    "Plan 2 repayment Wales",
    "Welsh student finance calculator",
    "Student Finance Wales application",
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
    canonical: "https://studentloancalculator.uk/regions/welsh-student-english-uni/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Welsh Students at English Universities | Grant-Loan Funding Guide",
    description: "Understand Welsh student finance for studying in England - grants, loans, Plan 2 repayments, and how it compares to English funding.",
    url: "https://studentloancalculator.uk/regions/welsh-student-english-uni/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/welsh-student-finance.jpg",
        width: 1200,
        height: 630,
        alt: "Welsh Student Finance Guide for English Universities",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Welsh Students at English Universities - Finance Guide",
    description: "Complete guide to Welsh student finance grant-loan combinations and Plan 2 repayments",
    images: ["https://studentloancalculator.uk/images/og/regions/welsh-student-finance.jpg"],
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

const WelshStudentEnglishUni = () => {
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
        name: "Welsh Students at English Universities", 
        item: "https://studentloancalculator.uk/regions/welsh-student-english-uni" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Welsh Students at English Universities: Complete Student Finance Guide",
    description:
      "Comprehensive guide to the unique Welsh student finance system for students studying in England, covering grant-loan combinations, Plan 2 repayments, maintenance support, and comparisons with English funding.",
    url: "https://studentloancalculator.uk/regions/welsh-student-english-uni",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/welsh-student-finance.jpg",
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
      "@id": "https://studentloancalculator.uk/regions/welsh-student-english-uni"
    },
    articleSection: "Regional Student Finance",
    keywords: "Welsh student finance, maintenance grant Wales, Plan 2 Wales, Student Finance Wales England",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do Welsh students get grants when studying in England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Welsh students receive maintenance grants ranging from £1,000 to £8,100 per year depending on household income, regardless of where they study in the UK. This is a significant advantage over English students who receive no maintenance grants. The grant-loan combination means Welsh students borrow less overall.",
        },
      },
      {
        "@type": "Question",
        name: "What loan plan are Welsh students on?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Welsh students who started from September 2012 onwards are on Plan 2 for loan repayment. This means a repayment threshold of £27,295, repayment rate of 9% above the threshold, interest rates from RPI to RPI + 3% based on income, and write-off after 30 years.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Welsh grant-loan split work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "All Welsh students receive the same total maintenance support (£10,710 for living away from home outside London in 2024/25), but the proportion that's grant versus loan varies by household income. Lower-income students receive more grant and less loan. Even the highest-income students receive a £1,000 universal grant.",
        },
      },
      {
        "@type": "Question",
        name: "Do Welsh students pay English or Welsh tuition fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Welsh students studying at English universities pay English tuition fees of up to £9,250 per year. These are covered by a tuition fee loan from Student Finance Wales, paid directly to the university. The loan is repayable after graduation through Plan 2.",
        },
      },
      {
        "@type": "Question",
        name: "How much less debt do Welsh students have compared to English students?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For a household income of £25,000, a Welsh student completing a three-year degree graduates with approximately £19,206 less debt than an English Plan 5 student. This is because Welsh students receive £6,885 per year as non-repayable grant versus English students who receive all maintenance support as loans.",
        },
      },
      {
        "@type": "Question",
        name: "Where do Welsh students apply for student finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Welsh students must apply through Student Finance Wales (studentfinancewales.co.uk), regardless of where in the UK they study. Applications typically open in February/March for September starts, with early application deadlines in May/June to ensure funding is in place for the start of term.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Welsh student finance system better than the English system?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For most students, particularly from lower and middle-income households, the Welsh system offers significant advantages through generous grant provision (reducing total debt) and a higher repayment threshold (£27,295 vs £25,000). However, Plan 2 can charge higher interest rates than English Plan 5. The benefits are most pronounced for students from households earning under £40,000.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <WelshStudentEnglishUniPage />
      </div>
    </>
  )
}

export default WelshStudentEnglishUni