import SAStudentLoanCalculator from '@/modules/calculator/hmrc-calculator/self-assessment-student-loan-balancing-payment';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Self Assessment Student Loan Balancing Payment Calculator UK",
  description: "Calculate your student loan balancing payment for Self Assessment tax returns. Work out additional repayments due after PAYE deductions for self-employed and multiple income earners.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "self assessment student loan calculator",
    "balancing payment student loan",
    "student loan tax return calculator",
    "self employed student loan repayment",
    "multiple income student loan",
    "self assessment student loan payment",
    "student loan through tax return",
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
    canonical: "https://studentloancalculator.uk/calculators/self-assessment-balancing-payment-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Self Assessment Student Loan Balancing Payment Calculator UK",
    description: "Calculate your student loan balancing payment for Self Assessment tax returns. Work out additional repayments due after PAYE deductions for self-employed and multiple income earners.",
    url: "https://studentloancalculator.uk/calculators/self-assessment-balancing-payment-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Self Assessment Student Loan Balancing Payment Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Assessment Student Loan Balancing Payment Calculator UK",
    description: "Calculate your student loan balancing payment for Self Assessment.",
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


const SelfAssessmentStudentLoanBalancingPayment = () => {
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
        name: "Self Assessment Balancing Payment Calculator",
        item: "https://studentloancalculator.co.uk/calculators/self-assessment-balancing-payment-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Self Assessment Student Loan Balancing Payment Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/self-assessment-balancing-payment-calculator",
    description: "Calculate your student loan balancing payment for Self Assessment tax returns. Essential for self-employed individuals and those with multiple income sources to determine additional repayments due on 31 January after PAYE deductions.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a student loan balancing payment in Self Assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A balancing payment is the additional student loan repayment you owe after accounting for what you've already paid through PAYE. When you complete your Self Assessment tax return, HMRC calculates your total student loan liability based on all your income sources. The balancing payment is your total liability minus what was already deducted through PAYE. This payment is due by 31 January following the end of the tax year.",
        },
      },
      {
        "@type": "Question",
        name: "Why do I have to pay extra student loan through Self Assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Self Assessment combines all your income sources (employment, self-employment, rental income over £2,000, etc.) when calculating student loan repayments. If you have multiple jobs earning below the threshold individually, or self-employment income alongside employment, your combined total income may exceed the annual threshold even though no PAYE deductions were made. For example, two jobs paying £15,000 each (total £30,000) would trigger no PAYE deductions but would require repayments through Self Assessment for Plan 2 loans.",
        },
      },
      {
        "@type": "Question",
        name: "How is the balancing payment calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, HMRC calculates your total student loan repayment by taking 9% of your combined income above the annual threshold (£28,470 for Plan 2). Then they deduct any amounts already paid through PAYE during the tax year. The remainder is your balancing payment. For example: Total income £35,000 means £585 total liability (9% of £6,530). If you paid £200 through PAYE, your balancing payment is £385, due by 31 January.",
        },
      },
      {
        "@type": "Question",
        name: "When do I have to pay my student loan balancing payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loan balancing payments are due by midnight on 31 January following the end of the tax year, along with any tax balancing payments. For the 2024/25 tax year (ending 5 April 2025), your payment is due by 31 January 2026. If you submit your tax return before 30 September, HMRC will calculate the amount for you. Student loan payments are not included in payments on account - they're only paid once per year as a balancing payment.",
        },
      },
      {
        "@type": "Question",
        name: "Does unearned income count towards student loan repayments in Self Assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but only if your unearned income exceeds £2,000 in the tax year. Unearned income includes savings interest, dividends, and rental income. If your unearned income is below £2,000, it's excluded from the student loan calculation. If it's over £2,000, the entire amount is included. For example, if you earn £29,000 from employment and £1,500 in rental income, only the employment income counts. But if rental income is £2,500, your total income of £31,500 would be used for the calculation.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <SAStudentLoanCalculator />
    </div>
  )
}


export default SelfAssessmentStudentLoanBalancingPayment
