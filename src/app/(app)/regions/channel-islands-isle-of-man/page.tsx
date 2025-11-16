import ChannelIslandsIsleOfManPage from '@/modules/regions/channel-islands-isle-of-man'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Channel Islands & Isle of Man Student Finance Guide | Crown Dependencies",
  description: "Complete guide to student finance in Jersey, Guernsey, and Isle of Man. Compare Crown Dependency funding with UK student loans, understand repayment terms, and plan your university finances.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "Channel Islands student finance",
    "Isle of Man student loans",
    "Jersey student funding",
    "Guernsey student finance",
    "Crown Dependencies education funding",
    "island student loans UK",
    "Jersey tuition fees",
    "Guernsey maintenance grant",
    "Isle of Man student awards",
    "Crown Dependency loan repayment",
    "student finance comparison UK",
    "regional student loan differences",
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
    canonical: "https://studentloancalculator.uk/regions/channel-islands-isle-of-man/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Channel Islands & Isle of Man Student Finance | Crown Dependencies Guide",
    description: "Understand student funding in Jersey, Guernsey, and Isle of Man. Compare Crown Dependency loans with UK mainland student finance systems.",
    url: "https://studentloancalculator.uk/regions/channel-islands-isle-of-man/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/crown-dependencies.jpg",
        width: 1200,
        height: 630,
        alt: "Channel Islands and Isle of Man Student Finance Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Channel Islands & Isle of Man Student Finance Explained",
    description: "Complete guide to Crown Dependency student funding - Jersey, Guernsey & Isle of Man vs UK mainland",
    images: ["https://studentloancalculator.uk/images/og/regions/crown-dependencies.jpg"],
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

const ChannelIslandsIsleOfMan = () => {
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
        name: "Channel Islands & Isle of Man", 
        item: "https://studentloancalculator.uk/regions/channel-islands-isle-of-man" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Student Finance in Channel Islands & Isle of Man: Complete Guide",
    description:
      "Comprehensive guide to student funding systems in Jersey, Guernsey, and Isle of Man, including eligibility, repayment terms, and comparisons with UK mainland student finance.",
    url: "https://studentloancalculator.uk/regions/channel-islands-isle-of-man",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/crown-dependencies.jpg",
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
      "@id": "https://studentloancalculator.uk/regions/channel-islands-isle-of-man"
    },
    articleSection: "Regional Student Finance",
    keywords: "Channel Islands student finance, Isle of Man student loans, Jersey Guernsey education funding, Crown Dependencies",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Channel Islands students apply for UK student finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, students from Jersey, Guernsey, and the Isle of Man cannot apply for funding from the UK Student Loans Company. They must apply directly to their island education authorities. However, they are eligible for UK home fee status when studying at UK universities.",
        },
      },
      {
        "@type": "Question",
        name: "How does Isle of Man student finance differ from UK mainland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Isle of Man students must pay at least £2,500 per year towards tuition fees personally, with a government grant covering up to £6,750. They can take a loan for their £2,500 contribution. Maintenance support is primarily grant-based and heavily means-tested. Loan repayments start at £25,000 income with 9% repayment rate, and interest is capped at the lower of Bank of England Base Rate or 3.5%.",
        },
      },
      {
        "@type": "Question",
        name: "What are the attendance requirements for Guernsey student finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Students receiving funding from Guernsey must maintain an attendance rate of at least 85%. If attendance falls below this threshold, the States of Guernsey may ask students to repay funding in part or in full. Students must discuss any periods of ill health with their course tutor for accurate record keeping.",
        },
      },
      {
        "@type": "Question",
        name: "Do Crown Dependency student loans get written off?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Unlike UK student loans which are written off after 25-40 years, Crown Dependency loans such as the Isle of Man tuition fee loan are often lifelong loans without automatic write-off periods. However, they typically have lower interest rates than UK student loans. Specific terms vary by island, so check with your local education authority.",
        },
      },
      {
        "@type": "Question",
        name: "What additional costs should Channel Islands students budget for?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Island students face additional expenses including regular travel costs for flights or ferries during term breaks, UK storage for belongings during summer, initial relocation and shipping costs, and potential exchange rate fluctuations for islands with their own currencies. These costs can be substantial and should be factored into financial planning.",
        },
      },
      {
        "@type": "Question",
        name: "How are Crown Dependency loan repayments collected if working in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Crown Dependency loan repayments may need to be made through Self Assessment tax returns rather than automatic PAYE deductions. You must inform your island authority of your employment status and income, and different documentation requirements apply compared to UK Student Loans Company repayments.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <ChannelIslandsIsleOfManPage />
      </div>
    </>
  )
}

export default ChannelIslandsIsleOfMan