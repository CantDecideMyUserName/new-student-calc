import ScotlandSAASLoanDifferencesPage from '@/modules/regions/scotland-saas-loan-differences'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Scotland Student Loans: SAAS, Free Tuition & Plan 4 Complete Guide",
  description: "Complete guide to Scotland's student finance system. Understand SAAS, free tuition eligibility, Plan 4 repayments, and how Scotland differs from England, Wales, and Northern Ireland.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "scotland student loans",
    "saas student finance",
    "plan 4 student loan scotland",
    "free tuition scotland",
    "scotland vs england student loans",
    "student awards agency scotland",
    "plan 4 calculator",
    "scotland student loan threshold",
    "saas application",
    "scottish student loan repayment",
    "plan 4 interest rate",
    "ruk students scotland",
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
    canonical: "https://studentloancalculator.uk/regions/scotland-saas-loan-differences/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Scotland Student Loans: SAAS, Free Tuition & Plan 4 Guide",
    description: "Everything about Scotland's student finance: free tuition through SAAS, Plan 4 repayments, and how Scottish students get a better deal than the rest of the UK.",
    url: "https://studentloancalculator.uk/regions/scotland-saas-loan-differences/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/scotland-student-loans.jpg",
        width: 1200,
        height: 630,
        alt: "Scotland Student Loan System Guide - SAAS and Plan 4",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Scotland Student Loans: Free Tuition & Plan 4 Explained",
    description: "Complete guide to Scotland's SAAS system, free tuition, Plan 4 loans, and how Scottish students save compared to England",
    images: ["https://studentloancalculator.uk/images/og/regions/scotland-student-loans.jpg"],
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

const ScotlandSAASLoanDifferences = () => {
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
        name: "Regions", 
        item: "https://studentloancalculator.uk/regions" 
      },
      { 
        "@type": "ListItem", 
        position: 3, 
        name: "Scotland SAAS System", 
        item: "https://studentloancalculator.uk/regions/scotland-saas-loan-differences" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Guide to Scotland's Student Finance System: SAAS, Free Tuition & Plan 4",
    description:
      "Comprehensive guide to understanding Scotland's student finance system, including SAAS administration, free tuition eligibility, Plan 4 repayments, and how Scotland's system fundamentally differs from England, Wales, and Northern Ireland.",
    url: "https://studentloancalculator.uk/regions/scotland-saas-loan-differences",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/scotland-student-loans.jpg",
    author: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      url: "https://studentloancalculator.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://studentloancalculator.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://studentloancalculator.uk/regions/scotland-saas-loan-differences",
    },
    keywords: [
      "Scotland student loans",
      "SAAS",
      "Plan 4 Scotland",
      "Free tuition Scotland",
      "Student Awards Agency Scotland",
      "Scotland vs England student loans",
      "Plan 4 threshold",
      "Scottish student finance",
    ],
    articleSection: "Regional Student Finance Guides",
    wordCount: 5200,
    about: [
      {
        "@type": "Thing",
        name: "SAAS",
        description: "Student Awards Agency Scotland - the agency administering student finance in Scotland",
      },
      {
        "@type": "Thing",
        name: "Plan 4 Student Loan",
        description: "Scotland's student loan repayment plan for all Scottish students from 1998 onwards",
      },
      {
        "@type": "Thing",
        name: "Free Tuition Scotland",
        description: "Scottish Government policy providing free university tuition to eligible Scottish students",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do Scottish students get free university tuition?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Scottish students studying at Scottish universities receive free tuition through SAAS (Student Awards Agency Scotland). SAAS pays £1,820 per year directly to the university on behalf of eligible students. To qualify, you must be ordinarily resident in Scotland, have lived in the UK for three years before your course starts, and be studying your first undergraduate degree. Free tuition has been Scotland's policy since 2008.",
        },
      },
      {
        "@type": "Question",
        name: "What is SAAS and how does it differ from Student Finance England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "SAAS (Student Awards Agency Scotland) is a Scottish Government executive agency that administers student finance for Scottish students. Unlike Student Finance England which provides loans for tuition fees, SAAS pays tuition fees directly to Scottish universities (£1,820) for eligible students. SAAS also provides maintenance loans and bursaries. Scottish students apply through SAAS regardless of where in the UK they study, while their repayments are managed by the Student Loans Company under Plan 4 terms.",
        },
      },
      {
        "@type": "Question",
        name: "What is Plan 4 and who has it?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 4 is Scotland's student loan repayment plan, introduced in April 2021. Any Scottish student who started university from September 1998 onwards has Plan 4 loans, regardless of when they graduated. Plan 4 features a £32,745 repayment threshold (highest in UK), 9% repayment rate on income above the threshold, interest at the lower of RPI or Bank of England base rate +1%, and a 30-year write-off period.",
        },
      },
      {
        "@type": "Question",
        name: "How much do Scottish students typically borrow compared to English students?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Scottish students typically borrow £20,000-£25,000 over a four-year degree for living costs only, since tuition is free. English students typically borrow £45,000-£50,000 over three years for both tuition fees (£27,750 total) and maintenance. Despite taking an extra year, Scottish students graduate with roughly half the debt of English students due to free tuition.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Plan 4 repayment threshold in Scotland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The Plan 4 repayment threshold for 2025/26 is £32,745 per year (£2,728 per month or £629 per week). This is the highest threshold in the UK - £7,745 higher than England's Plan 5 (£25,000) and £5,450 higher than Wales's Plan 2 (£27,295). Scottish graduates repay 9% of income above this threshold, meaning many Scottish graduates never make repayments or pay significantly less than graduates in other UK nations.",
        },
      },
      {
        "@type": "Question",
        name: "Can English students study in Scotland for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, students from England, Wales, and Northern Ireland (Rest of UK or RUK students) pay up to £9,250 per year in tuition fees to study at Scottish universities - the same as English universities charge. Only Scottish-domiciled students and EU students with settled status who meet residency requirements qualify for free tuition through SAAS. RUK students apply for funding through their home nation's student finance body and repay under their home plan type.",
        },
      },
      {
        "@type": "Question",
        name: "How does Scotland's Plan 4 interest rate work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 4 uses the same interest calculation as Plan 1: the lower of either RPI (Retail Price Index) or the Bank of England base rate plus 1%. As of September 2025, the Plan 4 rate is 4.3%. Unlike England's Plan 2 which varies from RPI to RPI+3% based on income, Plan 4's rate is the same for all borrowers regardless of earnings, whether studying or working.",
        },
      },
      {
        "@type": "Question",
        name: "Why do Scottish degrees take 4 years instead of 3?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Scottish degrees traditionally take four years because Scottish secondary education differs from England. Scottish students typically leave school at 17 (after completing Highers) rather than 18, and the first year of a Scottish degree provides broader foundation study before specialization in years 2-4. This structure dates back centuries in Scottish education. Despite the extra year, Scottish students still borrow less overall due to free tuition.",
        },
      },
      {
        "@type": "Question",
        name: "How long until Plan 4 student loans are written off in Scotland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 4 student loans in Scotland are written off 30 years after the April you became eligible to repay (typically the April after graduation). This is 10 years shorter than England's Plan 5 (40 years) but 5 years longer than Northern Ireland's Plan 1 (25 years), and matches England's Plan 2 and Wales's Plan 2 write-off period.",
        },
      },
      {
        "@type": "Question",
        name: "Do Scottish students pay less in student loan repayments than English students?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, significantly less. A Scottish graduate earning £40,000 repays £653.55/year under Plan 4, while an English graduate on the same salary repays £1,350/year under Plan 5. Over 30 years, this is £19,607 vs £54,000 total (though England's write-off is 40 years). The combination of lower debt (£20,000-£25,000 vs £45,000-£50,000), higher threshold (£32,745 vs £25,000), and reasonable interest rates means Scottish graduates face substantially lower lifetime repayment burden.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <ScotlandSAASLoanDifferencesPage />
      </div>
    </>
  )
}

export default ScotlandSAASLoanDifferences