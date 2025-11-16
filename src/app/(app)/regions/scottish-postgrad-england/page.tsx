import ScottishPostgradEnglandPage from '@/modules/regions/scottish-postgrad-england'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Scottish Postgrads in England | Plan 4 to Plan 3 Transition Guide",
  description: "Complete guide for Scottish students pursuing Master's degrees in England. Understand Plan 4 undergraduate and Plan 3 postgraduate loans, combined repayments, and funding options.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "Scottish postgraduate England",
    "Plan 4 Plan 3 loans",
    "SAAS postgraduate loan",
    "Scottish Masters England",
    "Plan 4 to Plan 3 transition",
    "combined student loan repayment",
    "Scottish postgrad funding",
    "Plan 3 repayment",
    "undergraduate postgraduate loans",
    "SAAS Masters loan",
    "dual student loan plans",
    "Scottish student England",
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
    canonical: "https://studentloancalculator.uk/regions/scottish-postgrad-england/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Scottish Postgraduates in England | Plan 4 & Plan 3 Guide",
    description: "Navigate the Plan 4 to Plan 3 transition for Scottish students doing Master's in England. Combined repayments, funding, and financial planning.",
    url: "https://studentloancalculator.uk/regions/scottish-postgrad-england/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/images/og/regions/scottish-postgrad.jpg",
        width: 1200,
        height: 630,
        alt: "Scottish Postgraduate Student Finance Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@UKStudentCalc",
    title: "Scottish Postgrads in England - Plan 4 & Plan 3 Guide",
    description: "Complete guide to managing Plan 4 and Plan 3 student loans simultaneously for Scottish postgraduates",
    images: ["https://studentloancalculator.uk/images/og/regions/scottish-postgrad.jpg"],
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

const ScottishPostgradEngland = () => {
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
        name: "Scottish Postgrad in England", 
        item: "https://studentloancalculator.uk/regions/scottish-postgrad-england" 
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Scottish Postgraduates in England: Managing Plan 4 and Plan 3 Student Loans",
    description:
      "Comprehensive guide for Scottish students pursuing postgraduate degrees in England, covering the Plan 4 to Plan 3 transition, combined repayments, SAAS funding, and financial planning strategies.",
    url: "https://studentloancalculator.uk/regions/scottish-postgrad-england",
    datePublished: "2024-01-15",
    dateModified: "2025-01-15",
    image: "https://studentloancalculator.uk/images/og/regions/scottish-postgrad.jpg",
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
      "@id": "https://studentloancalculator.uk/regions/scottish-postgrad-england"
    },
    articleSection: "Regional Student Finance",
    keywords: "Plan 4 Plan 3 student loans, Scottish postgraduate, SAAS Masters, combined repayment",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens to my Plan 4 loan when I do a Master's in England?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Your Plan 4 undergraduate loan continues unchanged. It doesn't convert to Plan 3 or merge with your postgraduate loan. You'll have two separate loans operating simultaneously: Plan 4 for your undergraduate degree and Plan 3 for your postgraduate degree, each with different thresholds and repayment rates.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I borrow for postgraduate study through SAAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Scottish students can borrow up to £7,000 for postgraduate study through SAAS. This is significantly less than the £12,167 available to English students. The £7,000 loan often doesn't cover full costs, as English universities charge £10,000-£15,000+ for Master's tuition fees, meaning you'll need additional funding sources.",
        },
      },
      {
        "@type": "Question",
        name: "How do combined Plan 4 and Plan 3 repayments work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Each loan is calculated independently. Plan 4 charges 9% on income above £27,660, while Plan 3 charges 6% on income above £21,000. If earning £40,000, you'd pay £93/month on Plan 4 and £95/month on Plan 3, totaling £188/month. Combined deductions can reach up to 15% of income above the respective thresholds.",
        },
      },
      {
        "@type": "Question",
        name: "What are the interest rates for Plan 4 and Plan 3?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Plan 4 (undergraduate) charges the lower of RPI or 1.5%, currently around 1.5% - one of the lowest rates in the UK. Plan 3 (postgraduate) charges RPI + 3%, currently around 7.3%. This means Plan 3 accumulates interest approximately 5 times faster than Plan 4, making it the more expensive loan over time.",
        },
      },
      {
        "@type": "Question",
        name: "Can I prioritize paying off one loan over the other?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, you cannot choose to prioritize one loan. Both are deducted automatically through PAYE based on their respective calculations. Each payment goes to its designated loan according to Student Loans Company allocation. However, you can make voluntary overpayments to either loan if you wish to reduce the balance faster.",
        },
      },
      {
        "@type": "Question",
        name: "Should I study in Scotland or England for my Master's?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "This depends on course quality, career goals, and finances. Studying in Scotland often costs less (£7,000-£10,000 tuition vs £10,000-£15,000+ in England), and the £7,000 SAAS loan covers a larger proportion. However, specific courses or career paths may benefit from English universities. Consider total costs, funding availability, course reputation, and career prospects when deciding.",
        },
      },
      {
        "@type": "Question",
        name: "Where do I apply for postgraduate student finance as a Scottish student?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Scottish students apply through SAAS (Student Awards Agency Scotland) at www.saas.gov.uk, regardless of where in the UK they study. You do NOT apply through Student Finance England even if studying in England. Applications typically open several months before the course start date.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <ScottishPostgradEnglandPage />
      </div>
    </>
  )
}

export default ScottishPostgradEngland