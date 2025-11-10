import MultipleJobsPAYECalculator from '@/modules/calculator/hmrc-calculator/multiple-jobs-paye-split-student-loan';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Multiple Jobs PAYE Split Student Loan Calculator UK - Per-Job Threshold",
  description: "Calculate student loan repayments when you have multiple PAYE jobs in the UK. Understand how each employer calculates deductions separately based on individual job income, not combined earnings.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "multiple jobs PAYE student loan",
    "per job student loan threshold",
    "two jobs student loan calculator",
    "separate job student loan",
    "PAYE multiple employment student loan",
    "individual job threshold calculator",
    "student loan two part time jobs",
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
    canonical: "https://studentloancalculator.uk/calculators/multiple-jobs-paye-split-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Multiple Jobs PAYE Split Student Loan Calculator UK - Per-Job Threshold",
    description: "Calculate student loan repayments when you have multiple PAYE jobs in the UK. Understand how each employer calculates deductions separately based on individual job income, not combined earnings.",
    url: "https://studentloancalculator.uk/calculators/multiple-jobs-paye-split-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Multiple Jobs PAYE Split Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiple Jobs PAYE Split Student Loan Calculator UK",
    description: "Calculate per-job student loan deductions for multiple PAYE employments.",
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


const MultipleJobsPayeSplitStudentLoan = () => {
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
        name: "Multiple Jobs PAYE Split Calculator",
        item: "https://studentloancalculator.co.uk/calculators/multiple-jobs-paye-split-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Multiple Jobs PAYE Split Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/multiple-jobs-paye-split-calculator",
    description: "Calculate student loan repayments for each individual PAYE job when you have multiple employments. Shows how each employer applies the threshold separately, which can result in no deductions even when combined income exceeds the annual threshold.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are student loan repayments calculated per job or on combined income?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under PAYE, student loan repayments are calculated separately for each individual job, not on your combined income. Each employer only considers what they pay you when calculating deductions. This means if you have two jobs paying £21,500 and £8,000 (total £29,500), neither employer will deduct student loan repayments for Plan 2 loans because each individual salary is below the £28,470 threshold, even though your combined income exceeds it.",
        },
      },
      {
        "@type": "Question",
        name: "Why don't I pay student loan with two part-time jobs earning £30,000 total?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You won't make PAYE deductions if neither individual job exceeds the threshold for your loan plan. For example, with Plan 2 loans, if you earn £15,000 from Job A and £15,000 from Job B (total £30,000), neither job is above the £28,470 annual threshold (£2,372 monthly). Each employer calculates deductions independently, so no repayments are made through PAYE. However, the Student Loans Company may contact you to register for Self Assessment to pay the difference.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if only one of my two jobs exceeds the threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You'll only make student loan repayments from the job that exceeds the threshold. For example, if you have Plan 2 loans and earn £2,400 monthly from Job A and £500 monthly from Job B, only Job A will deduct student loan repayments because it's above the £2,372 monthly threshold. Job B won't make any deductions. You'll pay 9% of £28 (£2,400 - £2,372) = £2.52 per month from Job A only, despite your combined monthly income being £2,900.",
        },
      },
      {
        "@type": "Question",
        name: "Will HMRC or SLC contact me if my combined income exceeds the threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Student Loans Company monitors borrowers and may contact you if they believe your combined income from multiple jobs exceeds the annual threshold but you're not making sufficient repayments through PAYE. They'll typically ask you to register for Self Assessment so that all your income sources can be combined and the correct repayment calculated. You may receive a balancing payment bill due by 31 January covering the shortfall.",
        },
      },
      {
        "@type": "Question",
        name: "How does the per-job calculation work with different pay frequencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each employer applies the appropriate threshold for your pay period (weekly, monthly, or other). For Plan 2 monthly-paid jobs, the threshold is £2,372. For weekly-paid jobs, it's £547. If you have one weekly job paying £400 and one monthly job paying £2,000, neither would trigger deductions because each is below their respective threshold. The thresholds are always applied separately per employment, regardless of pay frequency differences between jobs.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <MultipleJobsPAYECalculator />
    </div>
  )
}


export default MultipleJobsPayeSplitStudentLoan
