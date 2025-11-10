import UmbrellaIR35Calculator from '@/modules/calculator/hmrc-calculator/umbrella-ir35-paye-student-loan';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Umbrella Company & IR35 Student Loan Calculator UK - PAYE Deductions",
  description: "Calculate student loan deductions when working through an umbrella company or inside IR35. Understand how PAYE deductions work for contractors with assignment rates and umbrella margins.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "umbrella company student loan calculator",
    "IR35 student loan deduction",
    "contractor student loan PAYE",
    "umbrella PAYE student loan",
    "assignment rate student loan",
    "inside IR35 student loan",
    "umbrella contractor take home pay",
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
    canonical: "https://studentloancalculator.uk/calculators/umbrella-ir35-paye-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Umbrella Company & IR35 Student Loan Calculator UK - PAYE Deductions",
    description: "Calculate student loan deductions when working through an umbrella company or inside IR35. Understand how PAYE deductions work for contractors with assignment rates and umbrella margins.",
    url: "https://studentloancalculator.uk/calculators/umbrella-ir35-paye-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Umbrella Company & IR35 Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umbrella Company & IR35 Student Loan Calculator UK",
    description: "Calculate student loan deductions for umbrella contractors and IR35 workers.",
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


const UmbrellaIR35PayeStudentLoan = () => {
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
        name: "Umbrella & IR35 Student Loan Calculator",
        item: "https://studentloancalculator.co.uk/calculators/umbrella-ir35-paye-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Umbrella Company & IR35 Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/umbrella-ir35-paye-calculator",
    description: "Calculate student loan deductions when working through an umbrella company or caught inside IR35. Shows how PAYE deductions work on your gross pay after umbrella margin, employer NI, and other employment costs are deducted from your assignment rate.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do umbrella companies handle student loan deductions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Umbrella companies deduct student loan repayments automatically through PAYE, just like regular employers. Once your gross pay (after the umbrella margin and employer costs are deducted from your assignment rate) exceeds the monthly threshold for your loan plan, they deduct 9% of the amount above the threshold. For example, with a £500/day assignment rate (£10,000 monthly), after umbrella margin, employer NI, and other costs, your gross pay might be £8,500. If you're on Plan 2, you'd pay 9% of (£8,500 - £2,372.50) = £551.48 in student loan deductions.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to register my student loan with my umbrella company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you should declare your student loan when you join an umbrella company, typically on your starter checklist or P45. You must specify which plan you're on (Plan 1, 2, 4, or 5, or Postgraduate). If you don't declare it, HMRC will eventually notify your umbrella company, and deductions will start with backdated corrections. Your umbrella receives tax code notices from HMRC that include student loan information, so even if you forget, the system will catch up with you.",
        },
      },
      {
        "@type": "Question",
        name: "How does IR35 affect my student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you're working inside IR35 through an umbrella company, your student loan deductions are handled automatically through PAYE like any employee. If you're outside IR35 running a limited company, you calculate student loan repayments through Self Assessment based on your total taxable income (salary plus dividends). Inside IR35 is actually simpler for student loans - the umbrella handles everything automatically. Outside IR35, you need to calculate 9% of your total income above the annual threshold and pay it by 31 January through your tax return.",
        },
      },
      {
        "@type": "Question",
        name: "Where does student loan appear on my umbrella payslip?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loan deductions appear in the PAYE section of your umbrella payslip, after income tax and National Insurance but before your net pay. A typical umbrella payslip shows: Assignment Rate → minus umbrella costs (margin, employer NI, apprenticeship levy, pension) → Gross Pay → minus personal deductions (income tax, employee NI, student loan, pension) → Net Take-Home Pay. For a £3,000 gross pay on Plan 2, you might see: Tax £350, NI £290, Student Loan £153.45, leaving £2,206.55 net.",
        },
      },
      {
        "@type": "Question",
        name: "Can I avoid student loan deductions by not telling my umbrella company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you cannot avoid student loan deductions by not declaring them. HMRC maintains records of all student loan borrowers and sends notifications to employers and umbrella companies electronically. If you don't declare your loan, HMRC will issue an SL1 notice to your umbrella company within a few pay periods, and deductions will start automatically with potential backdated amounts owed. Deliberately failing to declare a student loan could be considered tax evasion. The umbrella company is legally required to deduct once notified by HMRC.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <UmbrellaIR35Calculator/>
    </div>
  )
}


export default UmbrellaIR35PayeStudentLoan
