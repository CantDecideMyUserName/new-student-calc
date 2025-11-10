import P60ReconciliationCalculator from '@/modules/calculator/hmrc-calculator/p60-p45-student-loan-reconciliation';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "P60 & P45 Student Loan Verification Calculator UK - Check Annual Deductions",
  description: "Verify student loan deductions shown on your P60 or P45. Calculate if your year-to-date student loan payments are correct and check eligibility for refunds.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "P60 student loan verification",
    "P45 student loan deduction",
    "verify student loan payments P60",
    "check student loan deductions",
    "P60 year to date student loan",
    "student loan refund P60",
    "annual student loan verification",
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
    canonical: "https://studentloancalculator.uk/calculators/p60-p45-student-loan-reconciliation-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "P60 & P45 Student Loan Verification Calculator UK - Check Annual Deductions",
    description: "Verify student loan deductions shown on your P60 or P45. Calculate if your year-to-date student loan payments are correct and check eligibility for refunds.",
    url: "https://studentloancalculator.uk/calculators/p60-p45-student-loan-reconciliation-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "P60 & P45 Student Loan Verification Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P60 & P45 Student Loan Verification Calculator UK",
    description: "Verify student loan deductions on your P60 or P45 and check refund eligibility.",
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


const P60P45StudentLoan = () => {
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
        name: "P60/P45 Student Loan Verification",
        item: "https://studentloancalculator.co.uk/calculators/p60-p45-student-loan-reconciliation-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "P60 & P45 Student Loan Verification Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/p60-p45-student-loan-reconciliation-calculator",
    description: "Verify student loan deductions shown on your P60 or P45 end-of-year documents. Calculate whether your year-to-date student loan payments are correct based on your annual income and loan plan, and determine if you're eligible for a refund.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where do I find student loan deductions on my P60?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loan deductions appear as a separate line item on your P60, typically labeled 'Student Loan Deductions' or 'SL Deductions.' Your P60 shows the total amount deducted for the entire tax year (6 April to 5 April). For Plan 2 loans, this amount should be clearly separated from postgraduate loan deductions if you have both. The P60 is issued by your employer by 31 May each year and summarizes all your tax-year earnings, tax paid, National Insurance contributions, and student loan repayments.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify if my P60 student loan deductions are correct?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To verify your P60 deductions, calculate 9% of your annual income above the threshold for your loan plan. For Plan 2 loans in 2024/25, if your P60 shows total pay of £32,000 and the threshold is £27,295, your deductions should be approximately £423.45 (9% of £4,705). Compare this calculated amount with the student loan deductions shown on your P60. If there's a significant difference, you may have been on the wrong loan plan, had part-year employment, or be eligible for a refund.",
        },
      },
      {
        "@type": "Question",
        name: "What does the student loan indicator on P45 mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Box 5 on your P45 contains the student loan indicator, marked with 'Y' if student loan deductions should continue with your new employer. However, the P45 doesn't specify which plan type (Plan 1, 2, 4, or 5) you're on. You must inform your new employer which plan you have so they apply the correct threshold. If you don't specify, your employer will default to Plan 1, which has a lower threshold (£24,990 vs £27,295 for Plan 2), potentially causing overpayments.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use my P60 to claim a student loan refund?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, your P60 is the primary evidence needed to claim a student loan refund. If your P60 shows total annual income below the annual threshold but includes student loan deductions, you're entitled to a full refund. For example, if you earned £25,000 (below the Plan 2 threshold of £27,295) but your P60 shows £200 in student loan deductions due to high-earning months with bonuses, contact the Student Loans Company with your P60 as proof to claim a refund of the full £200.",
        },
      },
      {
        "@type": "Question",
        name: "What if my P45 and P60 show different student loan amounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You shouldn't compare P45 and P60 amounts directly unless you left employment exactly at the tax year end. A P45 shows student loan deductions up to your leaving date, while a P60 covers the full tax year (6 April to 5 April). If you had multiple jobs in a tax year, you'll have multiple P45s but only one P60 from your employer on 5 April. When filing Self Assessment, you'll need to add up student loan deductions from all P45s and your final P60 to get your total annual amount deducted through PAYE.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <P60ReconciliationCalculator/>
    </div>
  )
}


export default P60P45StudentLoan
