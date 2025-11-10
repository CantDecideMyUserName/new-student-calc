import SLCVoluntaryVSSACalculator from '@/modules/calculator/hmrc-calculator/overpayment-slc-vs-sa-topup';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Student Loan Overpayment vs Voluntary Payment Calculator UK - SLC vs SA",
  description: "Compare voluntary overpayments to SLC versus Self Assessment top-up payments. Understand the difference between refundable overpayments and non-refundable voluntary payments.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan overpayment vs voluntary payment",
    "SLC voluntary repayment",
    "self assessment student loan top up",
    "refundable student loan overpayment",
    "voluntary payment non-refundable",
    "student loan extra payments",
    "overpayment refund eligibility",
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
    canonical: "https://studentloancalculator.uk/calculators/slc-vs-sa-calcualtor/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Overpayment vs Voluntary Payment Calculator UK - SLC vs SA",
    description: "Compare voluntary overpayments to SLC versus Self Assessment top-up payments. Understand the difference between refundable overpayments and non-refundable voluntary payments.",
    url: "https://studentloancalculator.uk/calculators/slc-vs-sa-calcualtor/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Overpayment vs Voluntary Payment Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Overpayment vs Voluntary Payment Calculator UK",
    description: "Compare voluntary overpayments versus Self Assessment top-up payments.",
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


const OverpaymentSLCvsSATopup = () => {
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
        name: "Overpayment vs Voluntary Payment Calculator",
        item: "https://studentloancalculator.co.uk/calculators/slc-vs-sa-calcualtor",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Overpayment vs Voluntary Payment Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/slc-vs-sa-calcualtor",
    description: "Compare the critical differences between refundable PAYE/Self Assessment overpayments and non-refundable voluntary payments to the Student Loans Company. Understand which type of payment you're making and the implications for refund eligibility.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between an overpayment and a voluntary payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An overpayment occurs when your annual income is below the threshold but you made repayments through PAYE or Self Assessment during high-earning months. These are refundable. A voluntary payment is an intentional extra payment you make directly to the Student Loans Company to pay off your loan faster. Voluntary payments are non-refundable. For example, if you earn £25,000 annually but paid £300 due to a bonus month, the £300 is an overpayment you can reclaim. If you deliberately pay an extra £500 to reduce your balance, that's a voluntary payment you cannot reclaim.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a refund on voluntary payments to SLC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, voluntary payments made directly to the Student Loans Company are non-refundable once processed. This is stated explicitly in the student loan terms and conditions. Once you've made a voluntary lump sum or set up additional monthly payments through your SLC account, that money is permanently applied to your loan balance and cannot be returned, even if your circumstances change. This is why it's crucial to be certain before making voluntary payments - unlike PAYE overpayments, you cannot get this money back.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Self Assessment top-up payment for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Self Assessment top-up payment is an additional student loan repayment you owe through your tax return when your total annual income exceeds the threshold but not enough was deducted through PAYE. This commonly happens with multiple jobs, self-employment income, or side income. For example, if you have two jobs paying £15,000 each (total £30,000), no PAYE deductions occur, but you owe approximately £135 for Plan 2 through Self Assessment. This top-up payment is mandatory, not voluntary, and is due by 31 January.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my payment is refundable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A payment is refundable if it meets all these criteria: (1) it was deducted automatically through PAYE by your employer or calculated through Self Assessment, (2) your total annual income is below the yearly threshold for your loan plan, and (3) you didn't deliberately make extra voluntary payments to SLC. Check your P60 - if it shows deductions but your total pay is below the threshold (£28,470 for Plan 2), you can claim a refund. Payments made through your SLC online account as 'voluntary' or 'additional' payments are never refundable.",
        },
      },
      {
        "@type": "Question",
        name: "Do voluntary payments reduce my monthly PAYE deductions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, voluntary payments to the Student Loans Company do not reduce your monthly PAYE deductions. Your employer will continue deducting 9% of your income above the threshold regardless of your remaining loan balance or any voluntary payments you've made. This is different from conventional loans where extra payments typically reduce monthly obligations. For example, if you make a £5,000 voluntary payment, you'll still pay the same percentage through PAYE based on your income - the voluntary payment only potentially reduces how long you'll be repaying, not the monthly amount.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <SLCVoluntaryVSSACalculator/>
    </div>
  )
}


export default OverpaymentSLCvsSATopup
