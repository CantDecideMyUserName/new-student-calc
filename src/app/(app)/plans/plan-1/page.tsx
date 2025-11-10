import Plan1Content from '@/modules/plan/plan-1'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext, Article, Organization, WebPage } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Plan 1 Student Loans UK - Complete Guide to Pre-2012 Loans",
  description: "Everything you need to know about Plan 1 student loans in the UK including repayment thresholds, interest rates, and total cost calculations.",
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
    canonical: "https://studentloancalculator.uk/plans/plan-1/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Plan 1 Student Loans UK Guide (Pre-2012 Students)",
    description: "Comprehensive explanation of Plan 1 student loans including thresholds, interest rates, repayment calculations and comparisons with other plans.",
    url: "https://studentloancalculator.uk/plans/plan-1/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/plans/plan-1.jpg",
        width: 1200,
        height: 630,
        alt: "Plan 1 Student Loans Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Plan 1 Student Loans Explained (Pre-2012)",
    description: "Everything you need to know about Plan 1 loans - thresholds, interest & calculations",
    images: ["https://studentloancalculator.uk/images/og/plans/plan-1.jpg"],
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


const Plan1 = () => {
  const siteUrl = "https://studentloancalculator.uk";
  const pageUrl = `${siteUrl}/plans/plan-1/`;
  const ogImage = `${siteUrl}/images/og/plans/plan-1.jpg`;

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
    name: "Plan 1 Student Loans",
    description:
      "Complete guide to pre-2012 Plan 1 student loans in England, Wales and Northern Ireland, including thresholds, interest rates and write-off rules.",
    isPartOf: { "@type": "WebSite", name: "Student Loan Calculator UK", url: siteUrl },
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${siteUrl}/plans/` },
      { "@type": "ListItem", position: 3, name: "Plan 1", item: pageUrl },
    ],
  };

  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Plan 1 Student Loans Guide",
    description:
      "Comprehensive guide to UK Plan 1 student loans for students who started university before 2012.",
    url: pageUrl,
    datePublished: "2023-11-15",
    dateModified: "2023-11-20",
    image: ogImage,
    step: [
      {
        "@type": "HowToStep",
        name: "Understand who qualifies for Plan 1",
        text:
          "Plan 1 applies to students who started university before September 2012 in England or Wales, and to all Northern Irish students.",
      },
      {
        "@type": "HowToStep",
        name: "Know your repayment threshold",
        text: "You repay 9% of income above £22,015 per year.",
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
          "Interest is the lower of RPI or Bank of England base rate + 1%, calculated daily and applied monthly.",
      },
      {
        "@type": "HowToStep",
        name: "Know your loan write-off date",
        text:
          "Plan 1 loans are written off 25 years after the April following graduation or when you turn 65, whichever comes first.",
      },
    ],
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I pay off my Plan 1 loan early?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. You can make voluntary repayments at any time. Given the lower interest rate and shorter term, it can be advantageous—but prioritise higher-interest debts and an emergency fund first.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to my Plan 1 loan if I move abroad?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You must inform the Student Loans Company and provide income evidence. The repayment threshold is adjusted for your country’s cost of living. If you don’t provide details, a default repayment may be applied.",
        },
      },
      {
        "@type": "Question",
        name: "Does my Plan 1 loan affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. UK student loans aren’t shown on credit files and don’t affect your credit score. Lenders may still factor your monthly repayments into affordability checks.",
        },
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plan 1 Student Loans UK - Complete Guide to Pre-2012 Loans",
    description:
      "Everything you need to know about Plan 1 student loans in the UK including repayment thresholds, interest rates, calculators and write-off rules.",
    author: publisher,
    publisher,
    url: pageUrl,
    datePublished: "2023-11-15",
    dateModified: "2023-11-20",
    image: ogImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, howToSchema, faqSchema, articleSchema, webPageSchema]} />
      <div>
        <Plan1Content />
      </div>
    </>
  )
}

export default Plan1