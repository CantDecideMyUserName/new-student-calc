import OverpayStudentLoanGuide from '@/modules/guides/should-i-overpay-loan'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Should I Overpay My Student Loan? UK Guide",
  description: "Find out if you should make voluntary overpayments on your UK student loan. Pros, cons, and when it makes sense to pay extra.",
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
    canonical: "https://studentloancalculator.uk/guides/should-i-overpay-loan/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Should I Overpay My Student Loan? UK Guide",
    description: "Find out if you should make voluntary overpayments on your UK student loan. Pros, cons, and when it makes sense to pay extra.",
    url: "https://studentloancalculator.uk/guides/should-i-overpay-loan/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Calculator UK",
    description: "Calculate your UK student loan repayments with our free calculators.",
    images: ["http://localhost:3000/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
};

const OverpayLoan = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Should I Overpay My Loan?",
        item: "https://studentloancalculator.co.uk/guides/should-i-overpay-loan",
      },
    ],
  };

  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Should You Overpay Your UK Student Loan?",
    description:
      "A comprehensive analysis and step-by-step guide to determine whether making voluntary extra payments on your UK student loan is financially advantageous.",
    url: "https://studentloancalculator.co.uk/guides/should-i-overpay-loan",
    datePublished: "2023-10-15",
    dateModified: "2023-11-28",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
    step: [
      {
        "@type": "HowToStep",
        name: "Address financial fundamentals first",
        text:
          "Ensure you have an emergency fund, have paid off high-interest debt, and are contributing enough to your pension to get full employer matching before considering student loan overpayments.",
      },
      {
        "@type": "HowToStep",
        name: "Estimate if you'll repay your loan in full",
        text:
          "Use loan calculators to project your lifetime repayments and determine if you'll repay more than 90% of your loan before write-off.",
      },
      {
        "@type": "HowToStep",
        name: "Compare potential returns",
        text:
          "Calculate the effective interest rate on your student loan and compare with potential returns from alternative investments.",
      },
      {
        "@type": "HowToStep",
        name: "Consider personal factors",
        text:
          "Evaluate non-financial considerations such as peace of mind, income security, and risk tolerance when making your decision.",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I get a refund if I've already made voluntary overpayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Unfortunately, voluntary overpayments to the Student Loans Company cannot generally be refunded. Once you've made an overpayment, that money is permanently applied to your loan balance.",
        },
      },
      {
        "@type": "Question",
        name: "Will making extra payments reduce my monthly repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Unlike conventional loans, making extra payments on your student loan will not reduce your monthly repayments. Your repayments are fixed at 9% of your income above the threshold, regardless of your remaining balance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make voluntary overpayments if I decide it's right for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can make voluntary overpayments to the Student Loans Company through your online account at gov.uk/repaying-your-student-loan. You can make one-off payments or set up regular additional payments.",
        },
      },
      {
        "@type": "Question",
        name: "Does making overpayments affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, UK student loans do not appear on your credit report and do not affect your credit score in any way. Neither regular repayments nor voluntary overpayments have any impact on your creditworthiness.",
        },
      },
      {
        "@type": "Question",
        name: "If I have multiple student loans, can I choose which one to overpay?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, if you have multiple student loans, you can specify which loan you want to make extra payments toward. When making a voluntary payment, you'll need to indicate which loan you wish to pay off.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, howToSchema, faqSchema]} />
      <div>
        <OverpayStudentLoanGuide />
      </div>
    </>
  )
}

export default OverpayLoan