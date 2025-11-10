import PlanCohortFinder from '@/modules/calculator/new/plan-cohort-finder'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Student Loan Plan Finder UK - Which Plan Am I On? Plan 1, 2, 4, 5",
  description: "Find out which UK student loan plan you're on based on when you started university and where you live. Check if you're on Plan 1, 2, 4, 5, or Postgraduate Loan.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "which student loan plan am I on",
    "student loan plan finder",
    "plan 1 2 4 5 checker",
    "student loan cohort finder",
    "check my student loan plan",
    "UK student loan type",
    "postgraduate loan plan",
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
    canonical: "https://studentloancalculator.uk/calculators/plan-cohort-finder/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Plan Finder UK - Which Plan Am I On? Plan 1, 2, 4, 5",
    description: "Find out which UK student loan plan you're on based on when you started university and where you live. Check if you're on Plan 1, 2, 4, 5, or Postgraduate Loan.",
    url: "https://studentloancalculator.uk/calculators/plan-cohort-finder/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Plan Finder UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Plan Finder UK",
    description: "Find out which student loan plan you're on - Plan 1, 2, 4, 5, or Postgraduate.",
    images: ["https://studentloancalculator.uk/og-image.jpg"],
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


const PlanCohort = () => {
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
        name: "Calculators",
        item: "https://studentloancalculator.co.uk/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Plan Cohort Finder",
        item: "https://studentloancalculator.co.uk/calculators/plan-cohort-finder",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Plan & Cohort Finder",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/plan-cohort-finder",
    description: "Identify which UK student loan plan you're on (Plan 1, 2, 4, 5, or Postgraduate Loan) based on when you started your course and which country you applied from. Essential for calculating correct repayment thresholds.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know which student loan plan I'm on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your student loan plan depends on when you started your course and where you lived before studying. If you started an undergraduate course in England between September 2012 and July 2023, you're on Plan 2. If you started from August 2023 onwards, you're on Plan 5. Scottish students are on Plan 4, while Northern Ireland students are on Plan 1. You can check your plan by signing into your Student Loans Company account and downloading your 'active plan type letter'.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Plan 2 and Plan 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 5 applies to English students who started undergraduate courses from August 2023 onwards. The key differences are: Plan 5 has a lower repayment threshold (£25,000 vs £27,295 for Plan 2), a longer write-off period (40 years vs 30 years), and lower interest rates (RPI only vs RPI + up to 3%). Plan 5 graduates will repay more of their loan overall, with around 81p in every £1 lent being repaid compared to 56p for Plan 2.",
        },
      },
      {
        "@type": "Question",
        name: "Can I be on multiple student loan plans at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can be on multiple plans simultaneously. The most common scenario is having both an undergraduate loan (Plan 1, 2, 4, or 5) and a Postgraduate Loan (Plan 3). For example, if you did an undergraduate degree starting in 2015 and a master's starting in 2020, you'd have both Plan 2 and a Postgraduate Loan. You make repayments toward both loans at the same time - 9% on the undergraduate loan and 6% on the postgraduate loan.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my employer has me on the wrong plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your employer deducts repayments based on the wrong plan, you could overpay or underpay significantly. For example, if you're on Plan 2 but your employer uses Plan 1, you'll pay much more because Plan 1's threshold is only £24,990 vs £27,295 for Plan 2. Download your 'active plan type letter' from your Student Loans Company account and show it to your employer's payroll department immediately. You can claim a refund for any overpayments made.",
        },
      },
      {
        "@type": "Question",
        name: "Do Welsh students use Plan 2 or Plan 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Welsh undergraduate students remain on Plan 2 regardless of when they started their course. Unlike England, Wales did not introduce Plan 5 in August 2023. All Welsh undergraduates who started from September 2012 onwards stay on Plan 2, which has a higher repayment threshold of £27,295 and a 30-year write-off period. However, Welsh postgraduate students are on the Postgraduate Loan plan, the same as English students.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <PlanCohortFinder />
    </div>
  )
}


export default PlanCohort
