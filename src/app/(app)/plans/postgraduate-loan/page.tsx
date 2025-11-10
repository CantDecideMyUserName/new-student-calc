import PostgraduateLoanContent from '@/modules/plan/postgraduate-loan'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, HowTo, WithContext, Article, Organization, WebPage, WebSite, ImageObject } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "UK Postgraduate Student Loans Explained - Complete Guide",
  description: "Everything you need to know about UK Postgraduate Student Loans including repayment thresholds, interest rates, eligibility and how payments work for Masters and PhD students.",
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
    canonical: "https://studentloancalculator.uk/plans/postgraduate-loan/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Postgraduate Student Loans UK - Official Guide",
    description: "Complete breakdown of Postgraduate Masters and Doctoral Loans in the UK. Learn about repayment terms, thresholds, and how they differ from undergraduate loans.",
    url: "https://studentloancalculator.uk/plans/postgraduate-loan/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
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

const PostGraduateLoanPage = () => {
  const site = "https://studentloancalculator.uk";
  const page = `${site}/plans/postgraduate-loan/`;
  const logo: ImageObject = { "@type": "ImageObject", url: `${site}/logo.png` };
  const ogImage: ImageObject = { "@type": "ImageObject", url: `${site}/images/og/plans/postgraduate-loan.jpg`};

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
    name: "UK Postgraduate Student Loans Explained - Complete Guide",
    description:
      "Everything you need to know about UK Postgraduate Master’s and Doctoral Loans: eligibility, thresholds, interest, and how repayments work.",
    url: page,
    isPartOf: { "@type": "WebSite", url: site },
    primaryImageOfPage: ogImage,
    datePublished: "2023-09-01",
    dateModified: "2023-12-20",
  };

  const breadcrumb: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site },
      { "@type": "ListItem", position: 2, name: "Plans", item: `${site}/plans/` },
      { "@type": "ListItem", position: 3, name: "Postgraduate Loan", item: page },
    ],
  };

  const article: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UK Postgraduate Student Loans Explained - Complete Guide",
    description:
      "Comprehensive guide to Postgraduate Master’s and Doctoral Loans in the UK: repayment threshold (£21,000), 6% rate, RPI+3% interest, and 30-year write-off.",
    image: ogImage,
    author: publisher,
    publisher,
    url: page,
    mainEntityOfPage: { "@type": "WebPage", "@id": page },
    datePublished: "2023-09-01",
    dateModified: "2023-12-20",
  };

  const howTo: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How UK Postgraduate Loans Work",
    description:
      "Step-by-step overview: eligibility, maximum loan amounts, repayment formula, interest, and write-off rules.",
    url: page,
    image: ogImage,
    step: [
      {
        "@type": "HowToStep",
        name: "Check eligibility",
        text:
          "Typically under 60 at course start, UK/Irish national or eligible status, ordinarily resident in England (different rules in devolved nations), and studying an eligible Master’s or Doctoral course.",
      },
      {
        "@type": "HowToStep",
        name: "Know the loan amounts",
        text:
          "Master’s Loan up to £12,167 (2023/24); Doctoral Loan up to £27,892 (2023/24). Paid directly to you in instalments.",
      },
      {
        "@type": "HowToStep",
        name: "Understand the repayment threshold",
        text: "You repay 6% of income above £21,000 per year.",
      },
      {
        "@type": "HowToStep",
        name: "Understand interest",
        text: "Interest is RPI + 3% during and after study.",
      },
      {
        "@type": "HowToStep",
        name: "Write-off timing",
        text:
          "Any remaining balance is written off 30 years after you become liable to repay.",
      },
    ],
  };

  const faq: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the repayment threshold for Postgraduate Loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You repay 6% of income above £21,000 per year. Below that, repayments are £0.",
        },
      },
      {
        "@type": "Question",
        name: "What interest rate applies?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "RPI + 3%, both during your course and after you finish.",
        },
      },
      {
        "@type": "Question",
        name: "How long until the loan is written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Any remaining balance is written off 30 years after you become liable to repay.",
        },
      },
      {
        "@type": "Question",
        name: "How do repayments work if I also have an undergraduate loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Repayments happen at the same time. For example, Plan 2 (9% above its threshold) plus Postgraduate (6% above £21,000) can total 15% across the relevant income bands.",
        },
      },
      {
        "@type": "Question",
        name: "What are the maximum loan amounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For 2023/24: Master’s up to £12,167 total; Doctoral up to £27,892 total, paid in instalments across the course.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumb, howTo, faq, article, website, webPage]} />
      <div>
        <PostgraduateLoanContent />
      </div>
    </>
  )
}

export default PostGraduateLoanPage