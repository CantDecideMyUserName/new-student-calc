import Plan2Content from '@/modules/plan/plan-2'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext, Article, Organization, WebPage, WebSite } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Plan 2 Student Loans UK - Complete Guide to Post-2012 Loans",
  description: "Everything you need to know about Plan 2 student loans in the UK including repayment thresholds, interest rates, and total cost calculations.",
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
    canonical: "https://studentloancalculator.uk/plans/plan-2/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 2 Student Loans UK Guide (2012-2023 Students)",
    description: "Comprehensive explanation of Plan 2 student loans including thresholds, interest rates, repayment calculations and comparisons with other plans.",
    url: "https://studentloancalculator.uk/plans/plan-2/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/plans/plan-2.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 2 Student Loans Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Plan 2 Student Loans Explained (2012-2023)",
    description: "Everything you need to know about Plan 2 loans - thresholds, interest & calculations",
    images: ["https://studentloancalculator.uk/images/og/plans/plan-2.jpg"],
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


const Plan2Page = () => {
  const siteUrl = "https://studentloancalculator.uk";
  const pageUrl = `${siteUrl}/plans/plan-2/`;
  const ogImage = `${siteUrl}/images/og/plans/plan-2.jpg`;

  const website: WebSite = {
    "@type": "WebSite",
    name: "Student Loan Calculator UK",
    url: siteUrl,
  };

  const publisher: Organization = {
    "@type": "Organization",
    name: "Student Loan Calculator UK",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
  };

  const webPageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pageUrl,
    name: "Plan 2 Student Loans",
    description:
      "Complete guide to post-2012 Plan 2 student loans in England and Wales: thresholds, interest rates, write-off rules and repayment calculations.",
    isPartOf: website,
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${siteUrl}/plans/` },
      { "@type": "ListItem", position: 3, name: "Plan 2", item: pageUrl },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plan 2 Student Loans UK - Complete Guide to Post-2012 Loans",
    description:
      "Everything you need to know about Plan 2 student loans in the UK including repayment thresholds, interest rates, examples and total cost calculations.",
    author: publisher,
    publisher,
    url: pageUrl,
    datePublished: "2023-10-05",
    dateModified: "2023-11-20",
    image: ogImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Plan 2 Student Loans Guide",
    description:
      "Comprehensive guide to UK Plan 2 student loans for students who started university between 2012 and 2023.",
    url: pageUrl,
    datePublished: "2023-10-05",
    dateModified: "2023-11-20",
    image: ogImage,
    step: [
      {
        "@type": "HowToStep",
        name: "Understand who qualifies for Plan 2",
        text:
          "Plan 2 applies to students who started university between September 2012 and August 2023 in England or Wales.",
      },
      {
        "@type": "HowToStep",
        name: "Know your repayment threshold",
        text: "You repay 9% of income above £27,295 per year.",
      },
      {
        "@type": "HowToStep",
        name: "Calculate your monthly repayments",
        text:
          "Subtract the threshold from your gross salary, take 9% of the remainder, then divide by 12.",
      },
      {
        "@type": "HowToStep",
        name: "Understand interest accumulation",
        text:
          "Interest varies from RPI to RPI+3% depending on income and circumstances (RPI+3% while studying).",
      },
      {
        "@type": "HowToStep",
        name: "Know your loan write-off date",
        text: "Plan 2 loans are written off 30 years after the April following graduation.",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I pay off my Plan 2 loan early?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. You can make voluntary repayments at any time. For many graduates it may not be advantageous unless you’re likely to fully repay before the 30-year write-off.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to my Plan 2 loan if I move abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You must inform the Student Loans Company and provide income evidence. Thresholds are adjusted for the cost of living in your new country; a default repayment may apply if you don’t provide details.",
        },
      },
      {
        "@type": "Question",
        name: "Does my Plan 2 loan affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. UK student loans aren’t shown on credit files and don’t affect your credit score, though lenders may factor repayments into affordability checks.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, howToSchema, faqSchema, articleSchema, webPageSchema]} />
      <div>
        <Plan2Content />
      </div>
    </>
  )
}

export default Plan2Page