import Plan4Content from '@/modules/plan/plan-4'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext, Article, Organization, WebPage, WebSite } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Plan 4 Student Loans - Complete Guide | Student Loan Calculator UK",
  description: "Everything you need to know about Plan 4 student loans for Scottish students, including repayment thresholds and interest rates.",
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
    canonical: "https://studentloancalculator.uk/plans/plan-4/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 4 Student Loans - Complete Guide",
    description: "Everything you need to know about Plan 4 student loans for Scottish students, including repayment thresholds and interest rates.",
    url: "https://studentloancalculator.uk/plans/plan-4/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/plans/plan-4.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 4 Student Loans",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Plan 4 Student Loans - Complete Guide",
    description: "Everything you need to know about Plan 4 student loans for Scottish students, including repayment thresholds and interest rates.",
    images: ["https://studentloancalculator.uk/images/og/plans/plan-4.jpg"],
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

const Plan4Page = () => {
  const siteUrl = "https://studentloancalculator.uk";
  const pageUrl = `${siteUrl}/plans/plan-4/`;
  const ogImage = `${siteUrl}/images/og/plans/plan-4.jpg`;

  const website: WebSite = {
    "@type": "WebSite",
    name: "Student Loan Calculator UK",
    url: siteUrl,
  };

  const publisher: Organization = {
    "@type": "Organization",
    name: "Student Loan Calculator UK",
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
  };

  const webPageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pageUrl,
    name: "Plan 4 Student Loans - Complete Guide",
    description:
      "Everything you need to know about Plan 4 student loans for Scottish students, including repayment thresholds, interest and write-off rules.",
    isPartOf: website,
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${siteUrl}/plans/` },
      { "@type": "ListItem", position: 3, name: "Plan 4", item: pageUrl },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plan 4 Student Loans - Complete Guide",
    description:
      "Guide to Plan 4 student loans for Scottish students: thresholds, interest rates, repayments and write-off period.",
    author: publisher,
    publisher,
    url: pageUrl,
    datePublished: "2023-07-15",
    dateModified: "2023-10-25",
    image: ogImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Plan 4 Student Loans Explained",
    description:
      "Step-by-step overview of Plan 4 loans for Scottish students: who it applies to, threshold, repayments, interest and write-off.",
    url: pageUrl,
    datePublished: "2023-07-15",
    dateModified: "2023-10-25",
    image: ogImage,
    step: [
      {
        "@type": "HowToStep",
        name: "Check eligibility",
        text: "Plan 4 generally applies to Scottish students who took out loans after September 1998.",
      },
      {
        "@type": "HowToStep",
        name: "Know the repayment threshold",
        text: "Repay 9% of income above the annual threshold (e.g. £27,660 per year).",
      },
      {
        "@type": "HowToStep",
        name: "Calculate monthly repayments",
        text:
          "Annual repayment = 9% × (gross income − threshold). Divide by 12 for the monthly amount. If income is below the threshold, repayments are £0.",
      },
      {
        "@type": "HowToStep",
        name: "Understand interest",
        text:
          "Interest is capped at the lower of RPI or Bank Rate + 1% (often shown as RPI or around 1.5% depending on rates).",
      },
      {
        "@type": "HowToStep",
        name: "Write-off timing",
        text: "Any remaining balance is written off 30 years after the April you become eligible to repay.",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Plan 4 repayment threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 4 repayments begin when your income exceeds the annual threshold (e.g. £27,660). You repay 9% of earnings above that level.",
        },
      },
      {
        "@type": "Question",
        name: "How is Plan 4 interest calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Interest is set at the lower of the Retail Price Index (RPI) or the Bank of England base rate plus 1%.",
        },
      },
      {
        "@type": "Question",
        name: "When is a Plan 4 loan written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Any remaining Plan 4 balance is written off 30 years after the April you became liable to repay, or earlier in cases such as death or permanent disability.",
        },
      },
      {
        "@type": "Question",
        name: "Does a Plan 4 loan affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. UK student loans don’t appear on credit files. However, lenders may factor your monthly student loan deductions into affordability assessments.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, howToSchema, faqSchema, articleSchema, webPageSchema]} />
      <div>
        <Plan4Content />
      </div>
    </>
  )
}

export default Plan4Page