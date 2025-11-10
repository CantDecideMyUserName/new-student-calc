import SAUnearnedIncomeCalculator from '@/modules/calculator/hmrc-calculator/sa-unearned-income-student-loan-impact';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Unearned Income Student Loan Calculator UK - £2,000 Threshold Self Assessment",
  description: "Calculate how unearned income (dividends, rental, savings interest) affects student loan repayments through Self Assessment. Understand the critical £2,000 all-or-nothing threshold rule.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "unearned income student loan",
    "£2000 threshold student loan",
    "dividends student loan repayment",
    "rental income student loan",
    "self assessment unearned income",
    "savings interest student loan",
    "property income student loan UK",
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
    canonical: "https://studentloancalculator.uk/calculators/sa-unearned-income-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Unearned Income Student Loan Calculator UK - £2,000 Threshold Self Assessment",
    description: "Calculate how unearned income (dividends, rental, savings interest) affects student loan repayments through Self Assessment. Understand the critical £2,000 all-or-nothing threshold rule.",
    url: "https://studentloancalculator.uk/calculators/sa-unearned-income-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unearned Income Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unearned Income Student Loan Calculator UK",
    description: "Calculate student loan impact of unearned income with the £2,000 threshold rule.",
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


const SaUnearnedIncomeStudentLoanImpact = () => {
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
        name: "Unearned Income Student Loan Calculator",
        item: "https://studentloancalculator.co.uk/calculators/sa-unearned-income-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Self Assessment Unearned Income Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/sa-unearned-income-calculator",
    description: "Calculate the impact of unearned income (dividends, rental income, savings interest, pensions) on your student loan repayments through Self Assessment. Essential for understanding the critical £2,000 all-or-nothing threshold rule.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the £2,000 unearned income threshold for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The £2,000 threshold is an 'all or nothing' rule for unearned income in student loan calculations. If your total unearned income is £2,000 or less in a tax year, it's completely ignored for student loan purposes. However, if your unearned income exceeds £2,000 by even £1, the entire amount (not just the excess) is included in your student loan repayment calculation. For example, £1,999 unearned income = £0 counted. But £2,001 unearned income = £2,001 counted, not just the £1 over the threshold.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as unearned income for student loan calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unearned income includes: dividends from shares (before the dividend allowance), savings interest from banks and building societies (before the personal savings allowance), rental income from property (after expenses but after the property allowance), pension income, and trading profits after the trading allowance. Importantly, these figures are the gross amounts before any tax allowances. For example, if you receive £3,000 in dividends, the full £3,000 counts toward the £2,000 threshold, not £1,000 after the dividend allowance.",
        },
      },
      {
        "@type": "Question",
        name: "How does rental income affect student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rental income is included as unearned income after deducting allowable expenses and the £1,000 property allowance. For example, if you receive £9,000 in rent with £3,000 in allowable expenses, your rental profit is £6,000. Since this exceeds £2,000, the entire £6,000 is added to your earned income for student loan calculations. With a salary of £25,000 and Plan 2 loans, your total income becomes £31,000. You'd owe 9% of (£31,000 - £28,470) = £228 in student loan repayments through Self Assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Do dividends from my limited company count as unearned income?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all dividend income counts as unearned income for student loan purposes, including dividends from your own limited company. This is crucial for contractors and company directors. If you take a small salary of £12,570 (below the Plan 2 threshold) plus £20,000 in dividends, your total income for student loan purposes is £32,570. Since dividends exceed £2,000, you'd owe 9% of (£32,570 - £28,470) = £369 through Self Assessment, even though your PAYE salary triggered no deductions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I keep my unearned income below £2,000 to avoid student loan payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While legally permissible to structure affairs to minimize tax and student loan liabilities, keeping unearned income below £2,000 requires careful planning. You could: limit dividend extraction to £1,999, use ISAs for savings interest (ISA income is tax-exempt and doesn't count), defer rental income by delaying rent collection, or spread income across tax years. However, this must be genuine restructuring, not tax evasion. For example, deliberately keeping dividends at £1,999 annually while accumulating retained profits in your company is legal tax planning.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <SAUnearnedIncomeCalculator />
    </div>
  )
}


export default SaUnearnedIncomeStudentLoanImpact
