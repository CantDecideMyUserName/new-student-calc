import EnglandToScotlandTransferPage from '@/modules/regions/england-to-scotland-transfer'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "England to Scotland Student Finance Transfer Guide | Cross-Border Study",
  description: "Moving from England to study in Scotland? Understand how your student loan plan changes, tuition fee implications, and what happens when you study across UK borders.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "England to Scotland student finance",
    "cross-border student loans UK",
    "studying in Scotland from England",
    "Plan 2 Scotland",
    "Plan 5 Scotland",
    "Scottish university English student",
    "RUK student fees Scotland",
    "four-year degree Scotland",
    "direct entry Scotland",
    "student loan plan changes",
    "transferring universities Scotland",
    "England Scotland student loan comparison",
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
    canonical: "https://studentloancalculator.uk/regions/england-to-scotland-transfer/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "England to Scotland Student Finance Transfer | Cross-Border Study Guide",
    description: "Complete guide to student finance when moving from England to study in Scotland. Understand loan plans, tuition fees, and repayment implications.",
    url: "https://studentloancalculator.uk/regions/england-to-scotland-transfer/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/england-scotland-transfer.jpg",
        width: 1200,
        height: 630,
        alt: "England to Scotland Student Finance Transfer Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "England to Scotland Student Finance Explained",
    description: "Your complete guide to cross-border study between England and Scotland - loan plans, fees & repayments",
    images: ["https://studentloancalculator.uk/images/og/regions/england-scotland-transfer.jpg"],
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

const EnglandToScotlandTransfer = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { 
        "@type": "ListItem", 
        position: 1, 
        name: "Home", 
        item: "https://studentloancalculator.uk" 
      },
      { 
        "@type": "ListItem", 
        position: 2, 
        name: "Regional Differences", 
        item: "https://studentloancalculator.uk/regions" 
      },
      { 
        "@type": "ListItem", 
        position: 3, 
        name: "England to Scotland Transfer", 
        item: "https://studentloancalculator.uk/regions/england-to-scotland-transfer" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "England to Scotland Student Finance Transfer: Complete Cross-Border Study Guide",
    description:
      "Comprehensive guide to student finance when moving from England to study in Scotland, covering loan plan changes, tuition fees, four-year degrees, and repayment implications for cross-border students.",
    url: "https://studentloancalculator.uk/regions/england-to-scotland-transfer",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/england-scotland-transfer.jpg",
    author: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk"
    },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://studentloancalculator.uk/images/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://studentloancalculator.uk/regions/england-to-scotland-transfer"
    },
    articleSection: "Regional Student Finance",
    keywords: "England Scotland student finance, cross-border study UK, Plan 2 Plan 4 comparison, Scottish university fees",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What student loan plan am I on if I study in Scotland but live in England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If you're ordinarily resident in England, you'll be on an English loan plan (Plan 2 if you started between 2012-2023, or Plan 5 if you started from September 2023 onwards) regardless of studying in Scotland. Your loan plan is determined by where you normally live before your course starts, not where you study.",
        },
      },
      {
        "@type": "Question",
        name: "How much are tuition fees for English students studying in Scotland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "English students studying in Scotland pay the Rest of UK (RUK) rate of up to £9,250 per year, the same as English tuition fees. This is significantly higher than the £1,820 per year that Scottish-domiciled students pay. Most Scottish degrees are four years rather than three, meaning total tuition fees of £37,000 for a full degree.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get direct entry to second year at a Scottish university?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, English students with strong A-level results (typically AAA or higher) may qualify for direct entry to the second year of a Scottish degree. This reduces the course from four years to three years, saving £9,250 in tuition fees and a year of maintenance costs. Not all universities offer direct entry, so check with your chosen institution.",
        },
      },
      {
        "@type": "Question",
        name: "Does studying a four-year Scottish degree mean higher monthly repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, monthly repayments are based on your income, not your total debt. You pay 9% of income above the threshold regardless of whether you borrowed £58,000 for a three-year English degree or £78,000 for a four-year Scottish degree. Only very high earners who would fully repay their loan are affected by the higher total debt.",
        },
      },
      {
        "@type": "Question",
        name: "Can I transfer from an English university to a Scottish university mid-course?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, but it's complex. Your remaining funding depends on how many years you've already used. Student Finance England provides funding for the standard course length plus one gift year. You must ensure the Scottish university will accept your credits and that you have sufficient funding remaining for the years needed to complete the new course.",
        },
      },
      {
        "@type": "Question",
        name: "Where do I apply for student finance if I'm English but studying in Scotland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Apply through Student Finance England, NOT Student Awards Agency Scotland (SAAS). SAAS only handles Scottish-domiciled students. You follow the same application process as if studying in England, but ensure you provide correct details about your Scottish university and four-year course length.",
        },
      },
      {
        "@type": "Question",
        name: "Will working in Scotland after graduation affect my loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, your repayments remain based on your English loan plan regardless of where in the UK you work. Your Scottish employer will deduct repayments through PAYE using your Plan 2 or Plan 5 thresholds and rates. Scottish income tax rates don't affect student loan calculations as they're separate deductions.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <EnglandToScotlandTransferPage />
      </div>
    </>
  )
}

export default EnglandToScotlandTransfer