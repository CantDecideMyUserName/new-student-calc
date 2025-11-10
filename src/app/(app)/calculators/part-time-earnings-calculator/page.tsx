import PartTimeEarningsCalculator from '@/modules/calculator/part-time-earnings-repayment-calculator'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Part-Time Earnings Impact Calculator UK - How Does It Affect My Loan?",
  description: "Find out how your part-time earnings affect your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
    canonical: "https://studentloancalculator.uk/calculators/part-time-earnings-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Part-Time Earnings Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your part-time earnings affect your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
    url: "https://studentloancalculator.uk/calculators/part-time-earnings-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Part-Time Earnings Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your part-time earnings affect your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const PartTimeEarningPage = () => {
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
        name: "Part-Time Earnings Impact Calculator",
        item: "https://studentloancalculator.uk/calculators/part-time-earnings-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Part-Time Earnings Impact Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.uk/calculators/part-time-earnings-calculator",
    description: "Calculate how part-time earnings affect UK student loan repayments for 2025/26. Understand how PAYE deducts 9% above thresholds per job (Plan 1: £26,065, Plan 2: £28,470, Plan 4: £32,745, Plan 5: £25,000), determine if multiple part-time jobs trigger self-assessment requirements when combined income exceeds thresholds, and estimate monthly repayments on variable part-time income including overtime and bonuses.",
    image: "https://studentloancalculator.uk/og-image.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I pay student loan repayments on part-time earnings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if your part-time earnings exceed the repayment threshold for your plan. For 2025/26: Plan 1 (£26,065/year, £2,172/month), Plan 2 (£28,470/year, £2,372/month), Plan 4 (£32,745/year, £2,728/month), Plan 5 (£25,000/year, £2,083/month), Postgraduate (£21,000/year, £1,750/month). You'll repay 9% of income above the threshold (6% for Postgraduate loans) through PAYE automatically. If you earn below the threshold, you make no repayments. Repayments adjust automatically if your hours or income change throughout the year.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I have two part-time jobs and student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each employer calculates student loan deductions separately based on that job's income alone. If you earn £21,500 at Job A and £8,000 at Job B (£29,500 combined) on Plan 2, neither employer deducts anything because each is below the £28,470 threshold. However, since your total income exceeds the threshold, you must file a self-assessment tax return, and HMRC will calculate repayments on your combined income (£29,500). You'll owe approximately £93 annually (9% of £1,030 over threshold), which you pay directly to HMRC rather than through PAYE.",
        },
      },
      {
        "@type": "Question",
        name: "How are student loan repayments calculated on variable part-time income?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayments are calculated monthly through PAYE based on that month's earnings. If you earn £2,500 one month and £1,800 the next on Plan 2, you'd pay £11.50 in the first month (9% of £127.50 above £2,372.50 threshold) and nothing in the second month (below threshold). Overtime and bonuses count toward the monthly threshold, triggering repayments even if your typical salary is below it. At year-end, if your total annual income was below the yearly threshold despite some monthly payments, you can request a refund from the Student Loans Company.",
        },
      },
      {
        "@type": "Question",
        name: "When do part-time students start repaying student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Part-time students start repaying the April after they finish or leave their course, or the April 4 years after the course started if studying longer than 4 years—whichever comes first. For Plan 5 loans, repayments don't start until April 2026 regardless. The repayment rules are identical to full-time graduates once repayments begin: you pay 9% of income above the threshold through PAYE or self-assessment. Part-time study doesn't affect repayment rates, thresholds, or write-off periods, which depend solely on your loan plan.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <div>
        <PartTimeEarningsCalculator />
      </div>
    </>
  )
}

export default PartTimeEarningPage
