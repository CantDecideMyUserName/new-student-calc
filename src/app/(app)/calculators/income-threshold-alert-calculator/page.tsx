import React from 'react'
import { Metadata } from 'next';
import IncomeThresholdAlertCalculator from '@/modules/calculator/income-threshold-alert-calculator';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Income Threshold Alert Calculator UK - How Does It Affect My Loan?",
  description: "Find out how your income threshold affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
    canonical: "https://studentloancalculator.uk/calculators/income-threshold-alert-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Income Threshold Alert Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your income threshold affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
    url: "https://studentloancalculator.uk/calculators/income-threshold-alert-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Threshold Alert Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your income threshold affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const IncomeThresholdAlertCalculatorPage = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://studentloancalculator.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: "https://studentloancalculator.uk/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Income Threshold Alert Calculator",
        item: "https://studentloancalculator.uk/calculators/income-threshold-alert-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Income Threshold Alert Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.uk/calculators/income-threshold-alert-calculator",
    description: "Calculate when you'll start making student loan repayments based on income thresholds for 2025/26. Compare Plan 1 (£26,065), Plan 2 (£28,470), Plan 4 (£32,745), Plan 5 (£25,000), and Postgraduate (£21,000) thresholds to understand your repayment obligations.",
    image: "https://studentloancalculator.uk/og-image.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the income thresholds for student loan repayments in 2025/26?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For 2025/26, the annual income thresholds are: Plan 1 - £26,065, Plan 2 - £28,470, Plan 4 - £32,745, Plan 5 - £25,000, and Postgraduate loans - £21,000. You only start repaying when your income exceeds these thresholds. Plan 1, 2, 4, and 5 require 9% repayment on income above the threshold, while Postgraduate loans require 6%.",
        },
      },
      {
        "@type": "Question",
        name: "How much will I repay if I earn above the threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You repay 9% of your income above the threshold for Plan 1, 2, 4, and 5 loans, or 6% for Postgraduate loans. For example, if you're on Plan 2 earning £30,000 annually, you'd repay 9% of £1,530 (£30,000 - £28,470), which equals £138 per year or £11.50 per month. Your repayments automatically adjust if your income changes.",
        },
      },
      {
        "@type": "Question",
        name: "Do income thresholds change each year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most income thresholds are reviewed annually and typically increase with inflation. Plan 1 increased from £24,990 to £26,065, Plan 2 rose from £27,295 to £28,470, and Plan 4 went from £31,395 to £32,745 between 2024/25 and 2025/26. The Postgraduate threshold has remained frozen at £21,000. Plan 5 thresholds are reviewed and adjusted annually based on average earnings.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my income drops below the threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your income falls below the repayment threshold, your student loan deductions will automatically stop through PAYE. Self-employed individuals should inform HMRC to pause repayments. There are no penalties for stopping and restarting repayments, and your loan continues to accrue interest during non-repayment periods until it's written off after 25-40 years depending on your plan.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <IncomeThresholdAlertCalculator />
      </div>
    </>
  )
}

export default IncomeThresholdAlertCalculatorPage
