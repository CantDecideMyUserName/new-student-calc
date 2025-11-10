import PAYEVsSelfAssessmentComparator from '@/modules/calculator/new/paye-vs-self-assessment-repayment-comparator';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "PAYE vs Self Assessment Repayment Calculator UK - Which Is Better?",
  description: "Compare PAYE and Self Assessment repayments for UK student loans. Find out which method is better for you based on your income and loan plan.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "PAYE student loan repayments",
    "self assessment student loan",
    "PAYE vs self assessment",
    "student loan repayment methods",
    "uk student loan calculator",
    "self employed student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/paye-vs-self-assessment-repayment-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "PAYE vs Self Assessment Repayment Calculator UK - Which Is Better?",
    description: "Compare PAYE and Self Assessment repayments for UK student loans. Find out which method is better for you based on your income and loan plan.",
    url: "https://studentloancalculator.uk/calculators/paye-vs-self-assessment-repayment-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PAYE vs Self Assessment Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAYE vs Self Assessment Repayment Calculator UK",
    description: "Compare PAYE and Self Assessment repayments for UK student loans.",
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


const PayevsSelfPage = () => {
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
        name: "PAYE vs Self Assessment Calculator",
        item: "https://studentloancalculator.co.uk/calculators/paye-vs-self-assessment-repayment-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PAYE vs Self Assessment Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/paye-vs-self-assessment-repayment-calculator",
    description: "Compare your student loan repayments under PAYE and Self Assessment systems to determine which method results in lower payments for your situation.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between PAYE and Self Assessment for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAYE (Pay As You Earn) automatically deducts student loan repayments from your salary through your employer. Self Assessment requires you to calculate and report your student loan repayments on your tax return, typically used by self-employed individuals. Under Self Assessment, all income sources are combined when calculating repayments, which can result in higher payments than PAYE.",
        },
      },
      {
        "@type": "Question",
        name: "Do I pay more under Self Assessment or PAYE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may pay more under Self Assessment because all your income from different sources is added together. Under PAYE, if you have multiple jobs that each pay below the repayment threshold, your earnings are not combined for student loan calculations. However, Self Assessment combines all income, potentially triggering repayments even when individual income sources are below the threshold.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have both PAYE and Self Assessment student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you are employed but also have self-employment income or other taxable income, you will make repayments through both PAYE (from your employment) and Self Assessment (for your additional income). HMRC will calculate the total repayment due through your Self Assessment tax return.",
        },
      },
      {
        "@type": "Question",
        name: "When are Self Assessment student loan repayments due?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Self Assessment student loan repayments are calculated and paid after the end of the tax year when you submit your tax return. If you submit your return before 30 September, HMRC will calculate the repayments for you. The payment is typically due on 31 January following the end of the tax year.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <PAYEVsSelfAssessmentComparator />
    </div>
  )
}


export default PayevsSelfPage
