import StudentLoanIncomeComparisonPage from '@/modules/calculator/student-loan-income-comparison'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Student Loan Income Comparison Calculator UK - Compare Repayments Across Salary Levels",
  description: "Compare student loan repayments across different income levels for Plan 1, 2, and 5 loans. See how salary changes affect your payments and find the best plan for your income.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan income comparison",
    "salary student loan calculator",
    "uk student loan repayments",
    "plan 1 vs plan 2 vs plan 5",
    "student loan salary impact",
    "income threshold calculator",
    "student finance comparison",
    "loan repayment comparison",
    "career planning student loans",
    "salary increase loan impact",
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
    canonical: "https://studentloancalculator.uk/calculators/student-loan-income-comparison/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Income Comparison Calculator UK - Compare Repayments Across Salary Levels",
    description: "Compare student loan repayments across different income levels for Plan 1, 2, and 5 loans. See how salary changes affect your payments and find the best plan for your income.",
    url: "https://studentloancalculator.uk/calculators/student-loan-income-comparison/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Income Comparison Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Income Comparison Calculator UK",
    description: "Compare student loan repayments across different income levels for all UK loan plans.",
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

const StudentLoanIncomeComparison = () => {
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
        name: "Income Comparison",
        item: "https://studentloancalculator.co.uk/calculators/student-loan-income-comparison",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Income Comparison Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/student-loan-income-comparison",
    description: "Compare student loan repayments across different income levels for Plan 1, 2, and 5 loans. Understand how salary changes affect your payments.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do different salary levels affect student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loan repayments are 9% of income above the threshold for your plan. Every £1,000 increase in salary results in an additional £90 per year (£7.50 per month) in repayments, regardless of which plan you're on.",
        },
      },
      {
        "@type": "Question",
        name: "Which student loan plan has the lowest repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your income level. Plan 1 has the lowest threshold (£22,015) so starts repayments earlier but may have lower total payments. Plan 2 has the highest threshold (£27,295) so is better for mid-range earners. Plan 5 falls between the two at £25,000.",
        },
      },
      {
        "@type": "Question",
        name: "Do higher earners always pay more in student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, higher earners always pay more per month/year in repayments since it's 9% of income above the threshold. However, they may pay off their loan faster and pay less total interest over the loan's lifetime.",
        },
      },
      {
        "@type": "Question",
        name: "How can I use this calculator for career planning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use this calculator to understand the real take-home impact of salary offers, promotions, or career changes. It helps you factor in loan repayments when making financial decisions about your career path.",
        },
      },
      {
        "@type": "Question",
        name: "What are the repayment thresholds for different loan plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 1 (pre-2012): £22,015 per year. Plan 2 (2012-2023): £27,295 per year. Plan 5 (2023+): £25,000 per year. All plans charge 9% of income above these thresholds.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />

      <div>
        <StudentLoanIncomeComparisonPage />
      </div>
    </>
  )
}

export default StudentLoanIncomeComparison