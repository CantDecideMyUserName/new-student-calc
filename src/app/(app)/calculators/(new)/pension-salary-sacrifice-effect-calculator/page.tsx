import PensionSalarySacrificeCalculator from '@/modules/calculator/new/pension-salary-sacrifice-effect-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Pension Salary Sacrifice Student Loan Calculator UK - Reduce Repayments",
  description: "Calculate how pension salary sacrifice reduces your UK student loan repayments. See exact savings on monthly deductions, tax, and National Insurance contributions.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "pension salary sacrifice student loan",
    "reduce student loan repayments",
    "salary sacrifice pension UK",
    "lower student loan payments",
    "pension contributions student loan",
    "salary exchange student loan",
    "workplace pension student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/pension-salary-sacrifice-effect-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Pension Salary Sacrifice Student Loan Calculator UK - Reduce Repayments",
    description: "Calculate how pension salary sacrifice reduces your UK student loan repayments. See exact savings on monthly deductions, tax, and National Insurance contributions.",
    url: "https://studentloancalculator.uk/calculators/pension-salary-sacrifice-effect-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pension Salary Sacrifice Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pension Salary Sacrifice Student Loan Calculator UK",
    description: "Calculate how pension salary sacrifice reduces your student loan repayments.",
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


const PensionSalaryCalculator = () => {
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
        name: "Pension Salary Sacrifice Calculator",
        item: "https://studentloancalculator.co.uk/calculators/pension-salary-sacrifice-effect-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pension Salary Sacrifice Student Loan Effect Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/pension-salary-sacrifice-effect-calculator",
    description: "Calculate how pension salary sacrifice schemes reduce your student loan repayments by lowering your gross income. See combined savings on tax, National Insurance, and student loan deductions.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does salary sacrifice reduce student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, salary sacrifice pension contributions reduce your student loan repayments. When you sacrifice salary into your pension, your gross income is reduced before tax and National Insurance calculations. Since student loan repayments are calculated on gross income, a lower gross salary means lower monthly student loan deductions. For example, sacrificing £1,750 annually could save you approximately £13 per month on student loan repayments.",
        },
      },
      {
        "@type": "Question",
        name: "How does salary sacrifice work with student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salary sacrifice (also called salary exchange) is a contractual arrangement where you agree to reduce your gross salary by a certain amount, which your employer then pays directly into your pension. Because your gross salary is reduced before student loan calculations, you pay 9% (Plan 2, 4, or 5) of a lower income amount. This means smaller monthly student loan deductions while also saving on tax and National Insurance.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between salary sacrifice and relief at source for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salary sacrifice reduces your gross income before student loan calculations, which lowers your repayments. Relief at source pension contributions do not reduce your gross income - they only provide tax relief. With relief at source, you still pay the full student loan amount based on your original gross salary. Only salary sacrifice schemes reduce student loan repayments.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use salary sacrifice to reduce my student loan payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your circumstances. If you're unlikely to repay your loan in full before it's written off (30-40 years), reducing payments through salary sacrifice means you pay less overall while boosting your pension. However, if you're a high earner likely to repay in full, reducing payments extends the repayment period and may increase total interest paid. The tax and National Insurance savings make salary sacrifice beneficial regardless, but the student loan impact varies by individual.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my pension uses salary sacrifice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check your payslip or ask your HR department. If your pension contributions are taken before tax and National Insurance calculations (reducing your gross pay), you're using salary sacrifice. If contributions are deducted after tax calculations but you get tax relief added back, you're using relief at source. Many workplace pensions in the UK use salary sacrifice, but it's not universal. Your payslip should show a reduced gross salary if salary sacrifice is in place.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <PensionSalarySacrificeCalculator />
    </div>
  )
}


export default PensionSalaryCalculator
