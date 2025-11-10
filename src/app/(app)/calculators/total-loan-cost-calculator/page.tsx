import TotalLoanCostCalculatorPage from '@/modules/calculator/total-loan-cost-calculator'
import { BreadcrumbList, FAQPage, JsonLd, SoftwareApplication, WithContext } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Total Student Loan Cost Calculator UK - Lifetime Repayment Estimator | Student Loan Calculator UK",
  description: "Calculate the total lifetime cost of your UK student loan. See how much you'll pay over the entire repayment period based on your plan, salary and loan amount.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "total student loan cost calculator",
    "lifetime loan repayment calculator",
    "total cost of student loan",
    "will I repay my student loan",
    "student loan write-off calculator",
    "uk student loan",
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
    canonical: "https://studentloancalculator.uk/calculators/total-loan-cost-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Total Student Loan Cost Calculator UK - Lifetime Repayment Estimator",
    description: "Calculate the total lifetime cost of your UK student loan. See how much you'll pay over the entire repayment period based on your plan, salary and loan amount.",
    url: "https://studentloancalculator.uk/calculators/total-loan-cost-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Total Student Loan Cost Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Student Loan Cost Calculator UK",
    description: "Calculate your total lifetime student loan repayment. See if your loan will be repaid in full or written off.",
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

const TotalLoanCostCalculator = () => {
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
        name: "Total Cost Calculator",
        item: "https://studentloancalculator.co.uk/calculators/total-loan-cost-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Total Student Loan Cost Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/total-loan-cost-calculator",
    description: "Calculate the total amount you will repay on your UK student loan over its lifetime based on your plan type, income, and loan amount.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much will I pay in total for my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The total amount you'll pay depends on your loan plan, starting salary, career progression, and loan amount. Many borrowers on Plan 2 or Plan 5 never repay the full amount before the loan is written off, while those with high incomes may repay more than they borrowed due to interest.",
        },
      },
      {
        "@type": "Question",
        name: "Will I pay more than I borrowed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This depends on your income. Higher earners often pay back more than they borrowed due to interest, while lower to middle-income earners may have their loans written off before fully repaying them, potentially paying less than the original loan amount.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a maximum amount I can repay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no cap on the total amount you can repay. If you have a high income, you may end up paying significantly more than you borrowed due to interest accumulation, especially for Plan 2 and postgraduate loans.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <TotalLoanCostCalculatorPage />
      </div>
    </>
  )
}

export default TotalLoanCostCalculator