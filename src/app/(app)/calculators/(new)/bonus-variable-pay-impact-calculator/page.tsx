import BonusVariablePayCalculator from '@/modules/calculator/new/bonus-variable-pay-impact-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Bonus & Variable Pay Student Loan Calculator UK - Impact on Repayments",
  description: "Calculate how bonuses, overtime, and variable pay affect your UK student loan repayments. See the exact deduction from one-off payments and annual income.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "bonus student loan calculator",
    "overtime student loan repayment",
    "variable pay student loan",
    "bonus impact on student loan",
    "uk student loan bonus",
    "one-off payment student loan",
    "commission student loan deduction",
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
    canonical: "https://studentloancalculator.uk/calculators/bonus-variable-pay-impact-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Bonus & Variable Pay Student Loan Calculator UK - Impact on Repayments",
    description: "Calculate how bonuses, overtime, and variable pay affect your UK student loan repayments. See the exact deduction from one-off payments and annual income.",
    url: "https://studentloancalculator.uk/calculators/bonus-variable-pay-impact-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bonus & Variable Pay Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonus & Variable Pay Student Loan Calculator UK",
    description: "Calculate how bonuses and variable pay affect your student loan repayments.",
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


export default function BonusVariablePage () {
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
        name: "Bonus & Variable Pay Calculator",
        item: "https://studentloancalculator.co.uk/calculators/bonus-variable-pay-impact-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bonus & Variable Pay Student Loan Impact Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/bonus-variable-pay-impact-calculator",
    description: "Calculate the exact impact of bonuses, overtime, commission, and other variable pay on your UK student loan repayments. Understand how one-off payments affect your monthly deductions.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does a bonus affect my student loan repayment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bonuses are treated as regular income for student loan repayments. If you receive a bonus, you'll pay 9% of the bonus amount above your monthly or weekly threshold in that pay period. For example, if you get a £1,600 bonus and you're already above the threshold, you'll pay approximately £144 extra in student loan deductions that month.",
        },
      },
      {
        "@type": "Question",
        name: "Will overtime pay increase my student loan repayment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, overtime pay is included in your income for that pay period. If overtime pushes your weekly or monthly earnings above the repayment threshold, you'll make student loan repayments on 9% of everything above the threshold, including the overtime amount. This happens even if your annual salary is below the threshold.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a refund if a bonus causes me to overpay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can claim a refund if your total annual income is below the yearly threshold but one-off payments like bonuses triggered repayments during specific months. You need to contact the Student Loans Company to request a refund, providing evidence that your annual income was below the threshold.",
        },
      },
      {
        "@type": "Question",
        name: "Are commission payments treated the same as bonuses for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, commission payments are treated exactly like bonuses and regular salary. They're included in your gross income for that pay period, and you'll pay 9% on anything above the monthly or weekly threshold. Variable commission can cause your student loan deductions to fluctuate significantly month to month.",
        },
      },
      {
        "@type": "Question",
        name: "How much will I pay on my student loan if I get a bonus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You'll pay 9% of your bonus amount if you're already earning above the threshold. Additionally, if you have a Postgraduate Loan, you'll pay an extra 6% on the bonus (15% total). For those with Plan 2 loans earning above the threshold, a £5,000 bonus would result in approximately £450 in student loan deductions.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <BonusVariablePayCalculator />
    </div>
  )
}
