import PayeVsSelfAssessmentGuide from '@/modules/guides/paye-vs-self-assessment-student-loans'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "PAYE vs Self Assessment Student Loans UK: Which Applies? 2025/26",
  description: "Compare PAYE and Self Assessment for UK student loan repayments. Understand automatic deductions, filing requirements, and mixed income scenarios.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "PAYE student loan",
    "Self Assessment student loan",
    "student loan deductions",
    "self employed student loan",
    "tax return student loan",
    "student loan repayment",
    "PAYE vs self assessment",
    "student loan tax",
    "freelance student loan",
    "rental income student loan",
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
    canonical: "https://studentloancalculator.uk/guides/paye-vs-self-assessment-student-loans/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "PAYE vs Self Assessment Student Loans UK: Which Applies? 2025/26",
    description: "Compare PAYE and Self Assessment for UK student loan repayments. Understand automatic deductions, filing requirements, and mixed income scenarios.",
    url: "https://studentloancalculator.uk/guides/paye-vs-self-assessment-student-loans/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAYE vs Self Assessment Student Loans UK: Which Applies? 2025/26",
    description: "Compare PAYE and Self Assessment for UK student loan repayments. Understand automatic deductions, filing requirements, and mixed income scenarios.",
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

const PayeVsSelfAssessment = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: "PAYE vs Self Assessment",
        item: "https://studentloancalculator.co.uk/guides/paye-vs-self-assessment-student-loans",
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PAYE vs Self Assessment for Student Loan Repayments",
    description:
      "Comprehensive comparison of PAYE and Self Assessment systems for UK student loan repayments, including timing differences, calculation methods, and combined income scenarios.",
    url: "https://studentloancalculator.co.uk/guides/paye-vs-self-assessment-student-loans",
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
      "@id": "https://studentloancalculator.co.uk/guides/paye-vs-self-assessment-student-loans",
    },
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I pay student loans through PAYE or Self Assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If you only have employment income, you pay through PAYE with automatic deductions from your payslip. If you have self-employment, rental, or investment income above certain thresholds, you must file Self Assessment and pay any additional student loan repayments with your tax bill.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my Self Assessment student loan bill so high?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Self Assessment calculates repayments on your total income from all sources, not just employment. If you have rental income, dividends, or self-employment income on top of your salary, these push your total income higher and increase your student loan repayment. Additionally, payments on account can double your January bill if you owe over £1,000.",
        },
      },
      {
        "@type": "Question",
        name: "Can I be charged student loan deductions twice?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, if HMRC doesn't properly credit your PAYE deductions when calculating your Self Assessment bill. Always check your Self Assessment calculation shows the correct amount already paid through PAYE. If it doesn't, you need to manually claim these credits to avoid paying twice on the same income.",
        },
      },
      {
        "@type": "Question",
        name: "What are payments on account for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If your Self Assessment bill (including student loans) exceeds £1,000, HMRC requires advance payments for the following year. You pay half on 31 January and half on 31 July. This means you're prepaying student loan repayments on income you haven't earned yet, which can create significant cash flow problems.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to register for Self Assessment if I freelance part-time?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If your self-employment income exceeds £1,000 in a tax year, you must register for Self Assessment by 5 October following the tax year end. This applies even if freelancing is just a side income. Failure to register results in penalties.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <PayeVsSelfAssessmentGuide />
      </div>
    </>
  );
};

export default PayeVsSelfAssessment;
