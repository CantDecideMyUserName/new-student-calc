import CombinedUGPGCalculator from '@/modules/calculator/new/combined-ug-pg-repayment-allocator';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Combined Undergraduate & Postgraduate Loan Calculator UK - 15% Repayment",
  description: "Calculate combined repayments when you have both undergraduate and postgraduate student loans in the UK. See the 15% total deduction from your salary.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "undergraduate postgraduate loan combined",
    "plan 2 postgraduate loan calculator",
    "15% student loan repayment",
    "masters undergraduate loan together",
    "combined student loan repayment",
    "dual student loan calculator",
    "plan 2 plus postgraduate",
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
    canonical: "https://studentloancalculator.uk/calculators/combined-ug-pg-repayment-allocator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Combined Undergraduate & Postgraduate Loan Calculator UK - 15% Repayment",
    description: "Calculate combined repayments when you have both undergraduate and postgraduate student loans in the UK. See the 15% total deduction from your salary.",
    url: "https://studentloancalculator.uk/calculators/combined-ug-pg-repayment-allocator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Combined Undergraduate & Postgraduate Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Combined Undergraduate & Postgraduate Loan Calculator UK",
    description: "Calculate combined undergraduate and postgraduate student loan repayments.",
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


const CombinedUgPg = () => {
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
        name: "Combined UG & PG Calculator",
        item: "https://studentloancalculator.co.uk/calculators/combined-ug-pg-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Combined Undergraduate & Postgraduate Loan Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/combined-ug-pg-calculator",
    description: "Calculate your total monthly student loan repayments when you have both undergraduate (Plan 1, 2, 4, or 5) and postgraduate master's loans. Understand how the combined 15% deduction affects your take-home pay.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do I repay with both undergraduate and postgraduate loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With both loans, you repay 9% of income above your undergraduate loan threshold (£28,470 for Plan 2) plus 6% of income above £21,000 for the postgraduate loan. This means a combined maximum deduction of 15% of your income above the respective thresholds. For example, earning £35,000 with Plan 2 and postgraduate loans results in approximately £128 monthly repayment (£694 for Plan 2 + £840 for postgraduate annually).",
        },
      },
      {
        "@type": "Question",
        name: "Are undergraduate and postgraduate loan repayments combined or separate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The loans are repaid simultaneously but calculated separately using different thresholds. Your undergraduate loan uses a 9% rate above its plan threshold (£28,470 for Plan 2, £26,065 for Plan 1, £32,745 for Plan 4, £25,000 for Plan 5), while your postgraduate loan uses 6% above £21,000. Both deductions are taken from your salary at the same time through PAYE, but they're tracked as separate loan balances.",
        },
      },
      {
        "@type": "Question",
        name: "When do I start repaying my postgraduate loan alongside my undergraduate loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You start repaying your postgraduate loan in the April after you finish your master's course or four years after you started, whichever comes first. Your undergraduate loan repayments begin from the April after you graduate from your bachelor's degree. If you do a master's immediately after your undergraduate, you'll likely be repaying both loans at once once you finish your master's degree.",
        },
      },
      {
        "@type": "Question",
        name: "How much will I pay monthly with Plan 2 and postgraduate loans on £30,000?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On £30,000 annual salary (£2,500 monthly) with Plan 2 and postgraduate loans: Plan 2 repayment is 9% of (£2,500 - £2,372.50) = £11.48 monthly. Postgraduate repayment is 6% of (£2,500 - £1,750) = £45 monthly. Your total monthly student loan deduction would be approximately £56.48, or £678 annually. This represents about 2.3% of your gross income going toward student loans.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay off one loan before the other to reduce my 15% repayment rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can make voluntary extra payments toward either loan. Many graduates choose to pay off their postgraduate loan first because it's typically smaller (maximum £29,390) and has the lower threshold of £21,000. Paying off the postgraduate loan eliminates the 6% deduction, reducing your total repayment rate from 15% to 9%. However, for most graduates who won't repay in full before write-off (30-40 years), voluntary overpayments usually aren't financially optimal.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <CombinedUGPGCalculator />
    </div>
  )
}


export default CombinedUgPg
