import ThresholdInterestBrowser from '@/modules/calculator/new/tax-year-threshold-interest-browser';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Student Loan Threshold by Tax Year UK - Historical Thresholds 2000-2026",
  description: "Find UK student loan repayment thresholds for any tax year from 2000 to 2026. Check historical threshold values for Plan 1, 2, 4, 5, and Postgraduate Loans.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan threshold by year",
    "historical student loan thresholds",
    "student loan threshold 2024",
    "student loan threshold 2025",
    "plan 2 threshold history",
    "tax year threshold lookup",
    "student loan repayment threshold changes",
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
    canonical: "https://studentloancalculator.uk/calculators/tax-year-threshold-interest-browser/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Threshold by Tax Year UK - Historical Thresholds 2000-2026",
    description: "Find UK student loan repayment thresholds for any tax year from 2000 to 2026. Check historical threshold values for Plan 1, 2, 4, 5, and Postgraduate Loans.",
    url: "https://studentloancalculator.uk/calculators/tax-year-threshold-lookup/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Threshold by Tax Year UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Threshold by Tax Year UK",
    description: "Find historical student loan repayment thresholds for any tax year.",
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


const TaxYearThreshold = () => {
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
        name: "Tax Year Threshold Lookup",
        item: "https://studentloancalculator.co.uk/calculators/tax-year-threshold-lookup",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Tax Year Threshold Lookup",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/tax-year-threshold-lookup",
    description: "Look up historical and current student loan repayment thresholds for any UK tax year from 2000 to 2026. Essential for calculating past repayments, checking refund eligibility, and understanding threshold changes across Plan 1, 2, 4, 5, and Postgraduate Loans.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the student loan threshold for 2025/26?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For the 2025/26 tax year (6 April 2025 to 5 April 2026), the repayment thresholds are: Plan 1 - £26,065, Plan 2 - £28,470, Plan 4 - £32,745, Plan 5 - £25,000, and Postgraduate Loan - £21,000. Plan 2 and Postgraduate thresholds increased for the first time since 2021, while Plan 1 and 4 thresholds continue their annual RPI-based increases.",
        },
      },
      {
        "@type": "Question",
        name: "Why was the Plan 2 threshold frozen from 2021 to 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Plan 2 threshold was frozen at £27,295 from April 2021 to April 2025 as a government policy decision to increase student loan repayments and reduce taxpayer subsidy. During this 4-year freeze period, inflation increased significantly (reaching over 10% in 2022), meaning real-terms earnings thresholds decreased substantially. The freeze ended in April 2025 when the threshold increased to £28,470.",
        },
      },
      {
        "@type": "Question",
        name: "How have Plan 1 thresholds changed over time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 1 thresholds have increased from £10,000 (2000-2005) to £15,000 (2005-2012), then gradually rising with inflation: £15,795 (2012/13), £17,495 (2016/17), £19,895 (2021/22), £24,990 (2024/25), and £26,065 (2025/26). The threshold typically increases each April based on RPI inflation, though increases were more modest during the 2010s.",
        },
      },
      {
        "@type": "Question",
        name: "What was the initial Plan 2 threshold when it launched?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan 2 loans launched in September 2012 with a repayment threshold of £21,000 per year, which remained in place from April 2016 to April 2018. The threshold increased significantly to £25,000 in April 2018, then gradually rose to £27,295 by April 2021 where it remained frozen until April 2025. The initial £21,000 threshold was substantially higher than Plan 1's £15,795 at the time.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find the threshold for a specific past tax year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find historical thresholds, you need to know which plan you're on and the specific tax year (which runs from 6 April to 5 April). For example, if you want the 2020/21 threshold for Plan 2, it was £26,575. The GOV.UK website maintains a complete table of previous annual repayment thresholds dating back to 2000. This information is essential for calculating whether you were eligible for refunds in past years or verifying your historical repayments were correct.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <ThresholdInterestBrowser />
    </div>
  )
}


export default TaxYearThreshold
