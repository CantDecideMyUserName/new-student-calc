import PartYearEmploymentCalculator from '@/modules/calculator/new/part-year-employment-career-break-calculator';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Part-Year Employment Student Loan Calculator UK - Mid-Year Job Start",
  description: "Calculate student loan repayments when starting a job mid-year in the UK. Find out if you're eligible for a refund when working less than 12 months in a tax year.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "part year employment student loan",
    "mid year job start student loan",
    "student loan refund partial year",
    "graduate job mid tax year",
    "student loan overpayment refund",
    "annual threshold student loan",
    "monthly vs annual threshold",
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
    canonical: "https://studentloancalculator.uk/calculators/part-year-employment-career-break-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Part-Year Employment Student Loan Calculator UK - Mid-Year Job Start",
    description: "Calculate student loan repayments when starting a job mid-year in the UK. Find out if you're eligible for a refund when working less than 12 months in a tax year.",
    url: "https://studentloancalculator.uk/calculators/part-year-employment-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Part-Year Employment Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Part-Year Employment Student Loan Calculator UK",
    description: "Calculate student loan repayments for part-year employment and check refund eligibility.",
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


const PartYearEmployment = () => {
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
        name: "Part-Year Employment Calculator",
        item: "https://studentloancalculator.co.uk/calculators/part-year-employment-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Part-Year Employment Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/part-year-employment-calculator",
    description: "Calculate your student loan repayments and potential refunds when you start employment mid-way through the tax year. Compare monthly threshold deductions against annual income to identify overpayments.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why am I paying student loan when I started work mid-year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loan deductions through PAYE are calculated based on monthly or weekly thresholds, not annual income. When you start a job mid-year, your employer deducts 9% of earnings above the monthly threshold (e.g., £2,274 for Plan 2) regardless of when you started. This means you may pay student loan deductions even though your total annual income is below the annual threshold of £27,295.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a refund if I only worked part of the tax year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can claim a refund if your total annual income for the tax year is below the annual repayment threshold, even if you made monthly repayments. For example, if you started work in January on Plan 2 and earned £20,000 total for the tax year (below the £27,295 threshold), you can reclaim all student loan deductions made. Contact the Student Loans Company after the tax year ends to request a refund.",
        },
      },
      {
        "@type": "Question",
        name: "How do monthly and annual thresholds work for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAYE employers use monthly thresholds (annual threshold divided by 12) to calculate deductions. For Plan 2, the monthly threshold is £2,274. If you earn above this in any month, deductions are taken. However, student loan liability is actually based on your total annual income. If you work fewer than 12 months, you might pay monthly deductions but still have total annual income below the annual threshold of £27,295, making you eligible for a full refund.",
        },
      },
      {
        "@type": "Question",
        name: "What if I'm a graduate starting my first job in September?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many graduates start jobs in September or later, working only 7-8 months of the tax year (which runs April to April). If you start in September earning £30,000 annually, you'll work only 7 months that tax year, earning approximately £17,500. Since this is below the Plan 2 annual threshold of £27,295, you can claim a full refund of all student loan deductions made during those months, even though monthly deductions were correctly applied at the time.",
        },
      },
      {
        "@type": "Question",
        name: "How do I claim a student loan refund for part-year employment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wait until after the tax year ends (after 5th April). Then contact the Student Loans Company with evidence of your total annual earnings, such as your P60 or final payslip showing year-to-date figures. If your annual income is below the threshold for your loan plan, SLC will process a refund. You can call them on 0300 100 0611 or use the online refund checker at gov.uk. Refunds typically take 4-6 weeks to process.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <PartYearEmploymentCalculator />
    </div>
  )
}


export default PartYearEmployment
