import ContractorsStudentLoansGuide from '@/modules/guides/contractors-student-loans-ir35-umbrella-cis'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contractors Student Loans UK: IR35, Umbrella & CIS Guide 2025/26",
  description: "How IR35, umbrella companies, and CIS affect UK student loan repayments for contractors. Includes calculation methods and compliance requirements.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "contractor student loan",
    "IR35 student loan",
    "umbrella company student loan",
    "CIS student loan",
    "limited company student loan",
    "inside IR35",
    "outside IR35",
    "contractor tax",
    "self employed student loan",
    "umbrella PAYE",
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
    canonical: "https://studentloancalculator.uk/guides/contractors-student-loans-ir35-umbrella-cis/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Contractors Student Loans UK: IR35, Umbrella & CIS Guide 2025/26",
    description: "How IR35, umbrella companies, and CIS affect UK student loan repayments for contractors. Includes calculation methods and compliance requirements.",
    url: "https://studentloancalculator.uk/guides/contractors-student-loans-ir35-umbrella-cis/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractors Student Loans UK: IR35, Umbrella & CIS Guide 2025/26",
    description: "How IR35, umbrella companies, and CIS affect UK student loan repayments for contractors. Includes calculation methods and compliance requirements.",
    images: ["http://localhost:3000/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },
};

const ContractorsStudentLoans = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contractors Student Loans",
        item: "https://studentloancalculator.co.uk/guides/contractors-student-loans-ir35-umbrella-cis",
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Student Loans for Contractors: IR35, Umbrella Companies, and CIS Deductions",
    description:
      "Comprehensive guide to how IR35 status, umbrella companies, and Construction Industry Scheme (CIS) affect student loan repayments for UK contractors.",
    url: "https://studentloancalculator.co.uk/guides/contractors-student-loans-ir35-umbrella-cis",
    datePublished: "2023-10-15",
    dateModified: "2025-10-25",
    author: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
    },
    publisher: {
      "@type": "Organization",
      name: "Student Loan Calculator UK",
      logo: {
        "@type": "ImageObject",
        url: "https://studentloancalculator.co.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://studentloancalculator.co.uk/guides/contractors-student-loans-ir35-umbrella-cis",
    },
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do contractors inside IR35 pay student loans automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. If you're deemed inside IR35 and work through an umbrella company, student loan deductions happen automatically through PAYE. The umbrella company treats you as an employee and deducts 9% (or 6% for postgraduate loans) on income above the threshold, just like standard employment.",
        },
      },
      {
        "@type": "Question",
        name: "Do dividends from a limited company avoid student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. While dividends don't have automatic student loan deductions at source, they count as income for Self Assessment purposes. If your total income (salary plus dividends) exceeds your student loan threshold, you must pay student loan repayments through Self Assessment in January.",
        },
      },
      {
        "@type": "Question",
        name: "How do CIS deductions affect student loan repayments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "CIS deductions (20% or 30% taken at source) cover tax and National Insurance only, not student loans. Student loan repayments under CIS are calculated separately based on your total annual income and paid through Self Assessment. The CIS deductions you've already had are credited toward your tax bill, but student loans are added on top.",
        },
      },
      {
        "@type": "Question",
        name: "Which contractor structure results in lower student loan payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The total student loan repayment is the same regardless of structure—9% of income above the threshold for Plan 2 loans. The difference is timing and cash flow. Umbrella workers have it deducted monthly automatically. Limited company contractors and CIS subcontractors pay a lump sum through Self Assessment months after earning the money.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I work through multiple umbrella companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Each umbrella company might apply the student loan threshold separately to their payments, potentially leading to underpayment or overpayment. You need to file Self Assessment to reconcile your actual total income and ensure you've paid the correct amount. HMRC will calculate what you should have paid based on combined income.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <ContractorsStudentLoansGuide />
      </div>
    </>
  );
};

export default ContractorsStudentLoans;
