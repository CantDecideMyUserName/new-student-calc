import HowStudentLoansWorkUKPage from '@/modules/guides/how-student-loans-work-uk'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "How UK Student Loans Work - Complete Guide",
  description: "Understand how UK student loans work, including repayment, interest, thresholds, and what happens if you don't repay in full.",
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
    canonical: "https://studentloancalculator.uk/guides/how-student-loans-work-uk/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "How UK Student Loans Work - Complete Guide",
    description: "Understand how UK student loans work, including repayment, interest, thresholds, and what happens if you don't repay in full.",
    url: "https://studentloancalculator.uk/guides/how-student-loans-work-uk/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/guides/how-student-loans-work.jpg",
        width: 1200,
        height: 630,
        alt: "UK Student Loan Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "How UK Student Loans Really Work - Complete Guide",
    description: "Everything you need to know about UK student loans - repayments, interest, thresholds & more",
    images: ["https://studentloancalculator.uk/images/og/guides/how-student-loans-work.jpg"],
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

const HowStudentLoansWork = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      { "@type": "ListItem", position: 3, name: "How Student Loans Work", item: "https://studentloancalculator.co.uk/guides/how-student-loans-work-uk" },
    ],
  };

  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How UK Student Loans Work",
    description:
      "Comprehensive guide to understanding the UK student loan system, including repayment methods, interest calculations, and long-term implications.",
    url: "https://studentloancalculator.co.uk/guides/how-student-loans-work-uk",
    datePublished: "2023-10-01",
    dateModified: "2023-11-15",
    image: "https://studentloancalculator.co.uk/images/og/guides/how-student-loans-work.jpg",
    step: [
      {
        "@type": "HowToStep",
        name: "Understand your loan plan type",
        text:
          "Identify which plan type applies to you based on when and where you studied - Plan 1, Plan 2, Plan 4, Plan 5, or Postgraduate.",
      },
      {
        "@type": "HowToStep",
        name: "Know your repayment threshold",
        text:
          "Learn the income threshold at which you start repaying your loan, which varies by plan type.",
      },
      {
        "@type": "HowToStep",
        name: "Calculate your monthly repayments",
        text:
          "Understand how to calculate your repayments as 9% of income above the repayment threshold.",
      },
      {
        "@type": "HowToStep",
        name: "Understand the interest structure",
        text:
          "Learn how interest is calculated for your specific loan plan and how it affects your balance over time.",
      },
      {
        "@type": "HowToStep",
        name: "Know your loan write-off date",
        text:
          "Understand when your loan will be automatically written off regardless of how much you've repaid.",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do student loans affect your credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, UK student loans do not appear on your credit file and do not affect your credit score. Lenders may ask about them when assessing affordability for mortgages, but they don't impact your credit rating.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have to pay student loans if you're earning below the threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, you only make repayments when your income exceeds the threshold for your plan type. If your income drops below the threshold, repayments automatically stop.",
        },
      },
      {
        "@type": "Question",
        name: "Will most people pay off their entire student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For Plan 2 and Plan 5, government figures suggest that only around 20-30% of borrowers will fully repay their loans before they're written off. For Plan 1, the percentage is higher due to the lower loan amounts and thresholds.",
        },
      },
      {
        "@type": "Question",
        name: "Should I pay off my student loan before saving?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For most graduates, it's usually more financially advantageous to build emergency savings, contribute to a pension, or invest rather than making voluntary loan repayments, unless you're a high earner likely to pay off your loan in full.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[ breadcrumbSchema, howToSchema, faqSchema]} />
      <div>
        <HowStudentLoansWorkUKPage />
      </div>
    </>
  )
}

export default HowStudentLoansWork