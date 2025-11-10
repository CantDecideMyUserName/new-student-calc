import Plan5Content from '@/modules/plan/plan-5'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext, Article, Organization, WebPage, WebSite, ImageObject } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Plan 5 Student Loans UK - Complete Guide to Post-2023 Loans",
  description: "Everything you need to know about Plan 5 student loans in the UK including repayment thresholds, interest rates, and how the new system works for students starting from 2023.",
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
    canonical: "https://studentloancalculator.uk/plans/plan-5/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Calculator UK - Free Repayment Calculator & Guides",
    description: "Calculate your UK student loan repayments with our free calculators. Accurate repayment estimates for all loan types.",
    url: "https://studentloancalculator.co.uk/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "http://localhost:3000/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Calculator UK",
    description: "Calculate your UK student loan repayments with our free calculators.",
    images: ["http://localhost:3000/og-image.jpg"],
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

const Plan5Page = () => {
  const site = "https://studentloancalculator.uk";
  const page = `${site}/plans/plan-5/`;
  const logo: ImageObject = { "@type": "ImageObject", url: `${site}/logo.png` };
  const ogImage: ImageObject = { "@type": "ImageObject", url: `${site}/images/og/plans/plan-5.jpg` };

  const publisher: Organization = {
    "@type": "Organization",
    name: "Student Loan Calculator UK",
    logo,
    url: site,
  };

  const website: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Student Loan Calculator UK",
    url: site,
    publisher,
  };

  const webPage: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Plan 5 Student Loans UK - Complete Guide",
    description:
      "Everything you need to know about Plan 5 student loans in the UK: thresholds, interest, write-off period, and how repayments work for students starting from 2023.",
    url: page,
    isPartOf: { "@type": "WebSite", url: site },
    primaryImageOfPage: ogImage,
    datePublished: "2025-05-09",
    dateModified: "2025-05-09",
  };

  const breadcrumb: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${site}/plans/` },
      { "@type": "ListItem", position: 3, name: "Plan 5", item: page },
    ],
  };

  const article: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Plan 5 Student Loans UK - Complete Guide to Post-2023 Loans",
    description:
      "Comprehensive guide to Plan 5 student loans: repayment threshold (£25,000), 9% repayment rate, RPI-only interest, and 40-year write-off.",
    image: ogImage,
    author: publisher,
    publisher,
    url: page,
    mainEntityOfPage: { "@type": "WebPage", "@id": page },
    datePublished: "2025-05-09",
    dateModified: "2025-05-09",
  };

  const howTo: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Plan 5 Student Loans Work",
    description:
      "Step-by-step overview of Plan 5: eligibility, thresholds, repayment formula, interest and write-off rules.",
    url: page,
    image: ogImage,
    step: [
      {
        "@type": "HowToStep",
        name: "Check eligibility",
        text: "Plan 5 applies to students who started courses in England or Wales from September 2023 onwards.",
      },
      {
        "@type": "HowToStep",
        name: "Know the repayment threshold",
        text: "You repay 9% of income above £25,000 per year.",
      },
      {
        "@type": "HowToStep",
        name: "Calculate your repayment",
        text:
          "Annual repayment = 0.09 × (salary − £25,000) if positive; divide by 12 for the monthly figure.",
      },
      {
        "@type": "HowToStep",
        name: "Understand interest",
        text: "Plan 5 uses RPI-only interest (no extra %), both during study and after graduation.",
      },
      {
        "@type": "HowToStep",
        name: "Write-off timing",
        text: "Any remaining balance is written off 40 years after the April you become liable to repay.",
      },
    ],
  };

  const faq: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are Plan 5 loans better or worse than Plan 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It depends on earnings: high earners may benefit from lower interest under Plan 5; many low/mid earners may pay for longer due to the lower threshold and 40-year term.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the Plan 5 repayment threshold?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "£25,000 per year (approximately £2,083 monthly). You pay 9% of income above this level.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Plan 5 interest rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RPI only (no additional percentage), both during study and after graduation.",
        },
      },
      {
        "@type": "Question",
        name: "When is a Plan 5 loan written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After 40 years from the April you become liable to repay, or earlier in certain circumstances (e.g., death or permanent disability).",
        },
      },
      {
        "@type": "Question",
        name: "If I started before 2023 but haven’t graduated yet, which plan am I on?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You remain on Plan 2. Plan 5 only applies to new starters from September 2023.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumb, howTo, faq, article, website, webPage]} />
      <div>
        <Plan5Content />
      </div>
    </>
  )
}

export default Plan5Page