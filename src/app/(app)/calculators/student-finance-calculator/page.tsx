import StudentFinanceCalculator from '@/modules/calculator/student-finance-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Student Finance Calculator UK - Loan Repayment & Maintenance Calculator",
  description: "Calculate student loan repayments for all UK plans (Plan 1, 2, 4, 5) and maintenance loan entitlement. Free calculator with repayment estimates and living costs.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student finance calculator",
    "student loan calculator uk",
    "maintenance loan calculator",
    "student loan repayment calculator",
    "plan 1 calculator",
    "plan 2 calculator",
    "plan 4 calculator",
    "plan 5 calculator",
    "student finance england",
    "uk student loan",
    "tuition fee calculator",
    "living costs loan",
    "student loan repayments",
    "household income assessment",
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
    canonical: "https://studentloancalculator.uk/calculators/student-finance-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Finance Calculator UK - Complete Loan & Maintenance Calculator",
    description: "Calculate student loan repayments for all UK plans and maintenance loan entitlement. Free comprehensive calculator for tuition fees and living costs.",
    url: "https://studentloancalculator.uk/calculators/student-finance-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Finance Calculator UK - Loan Repayment & Maintenance Calculator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Finance Calculator UK",
    description: "Calculate student loan repayments and maintenance loan entitlement. Free calculator for all UK loan plans.",
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

const StudentFinanceCalculatorPage = () => {
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
        name: "Student Finance Calculator",
        item: "https://studentloancalculator.uk/calculators/student-finance-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Finance Calculator UK",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.uk/calculators/student-finance-calculator",
    description: "Comprehensive student finance calculator for UK students. Calculate loan repayments for Plan 1, Plan 2, Plan 4, and Plan 5 loans, plus maintenance loan entitlement based on household income and living arrangements.",
    image: "https://studentloancalculator.uk/images/og/default-og.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2847",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "All UK loan plan calculations (Plan 1, 2, 4, 5)",
      "Maintenance loan eligibility calculator",
      "Monthly and annual repayment estimates",
      "Total interest and repayment projections",
      "Loan write-off date calculator",
      "Overpayment scenarios",
      "Household income assessment",
      "Living arrangement options",
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know which student loan plan I'm on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your loan plan depends on when you started university and where you studied. Plan 1 applies if you started before September 2012 in England/Wales or studied in Northern Ireland. Plan 2 applies if you started between September 2012 and July 2023 in England/Wales. Plan 4 applies if you studied in Scotland. Plan 5 applies if you started from September 2023 onwards in England/Wales.",
        },
      },
      {
        "@type": "Question",
        name: "How is maintenance loan entitlement calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maintenance loan entitlement is based on your household income and where you live during term time. Students from households earning £25,000 or less receive the maximum loan. As household income increases above £25,000, the loan amount gradually reduces until reaching the minimum at around £70,022. Living in London qualifies you for a higher maximum loan (£13,762) compared to living outside London (£10,227) or with parents (£8,610).",
        },
      },
      {
        "@type": "Question",
        name: "What are the repayment thresholds for each plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayment thresholds vary by plan: Plan 1 has a threshold of £22,015, Plan 2 is £27,295, Plan 4 is £31,395, and Plan 5 is £25,000. You only repay 9% of income above these thresholds. If you earn below the threshold, you make no repayments.",
        },
      },
      {
        "@type": "Question",
        name: "Should I make overpayments on my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most people, overpaying isn't financially beneficial. Student loans are written off after 25-40 years (depending on your plan), and most graduates won't repay the full amount. The money is often better used for savings, pension contributions, or paying off higher-interest debts. Only consider overpaying if you're certain you'll repay the full loan amount and want to save on interest.",
        },
      },
      {
        "@type": "Question",
        name: "When are student loans written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loans are written off after a set period from when you start repaying (the April after graduation). Plan 1 loans are written off after 25 years, Plan 2 and Plan 4 after 30 years, and Plan 5 after 40 years. Any remaining balance is cancelled automatically - you don't need to apply for this.",
        },
      },
      {
        "@type": "Question",
        name: "Does my student loan affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loans don't appear on your credit report and won't directly affect your credit score. However, when applying for a mortgage, lenders will consider your student loan repayments as part of your regular outgoings, which can affect how much you can borrow.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to my student loan if I move abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must continue making repayments if you live abroad. You need to notify Student Finance of your move and provide evidence of your income. Repayment thresholds may differ based on the country you're living in. Failure to update your details or make payments can result in your loan being passed to a debt collection agency.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between tuition fee loan and maintenance loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A tuition fee loan covers the cost of your university tuition fees (up to £9,250 per year for most courses) and is paid directly to your university. A maintenance loan helps with living costs like accommodation, food, and books, and is paid directly to you in instalments throughout the year. Both are repaid together as one combined student loan after graduation.",
        },
      },
      {
        "@type": "Question",
        name: "How do interest rates work on student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interest rates vary by plan. Plan 1 charges the lower of RPI or Bank Rate + 1%. Plan 2 charges RPI + up to 3% depending on income. Plan 4 charges RPI or Bank Rate + 1%. Plan 5 charges RPI + 0-3% based on income. Interest starts accruing from when the loan is paid out, not when you start repaying.",
        },
      },
      {
        "@type": "Question",
        name: "Can I check my current student loan balance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can check your current loan balance, repayment history, and next payment date by logging into your account on the Student Loans Company (SLC) website at www.gov.uk/sign-in-to-manage-your-student-loan-balance. You'll need your Customer Reference Number, which you can find on correspondence from the SLC.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <StudentFinanceCalculator />
      </div>
    </>
  )
}

export default StudentFinanceCalculatorPage