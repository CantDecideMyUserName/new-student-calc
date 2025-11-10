import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'
import StudentLoanTaxCodePage from '@/modules/guides/student-loan-tax-codes';

export const metadata: Metadata = {
  title: "UK Student Loan Tax Codes: SL, PGL & Number Codes Explained",
  description: "Decode UK student loan tax codes: SL, PGL markers, and what numbers mean. Learn how codes affect payroll deductions and spot errors on your payslip.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan tax code",
    "SL tax code",
    "PGL tax code",
    "tax code explained",
    "student loan deductions",
    "PAYE student loan",
    "1257L SL",
    "BR PGL",
    "student loan payslip",
    "wrong tax code",
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
    canonical: "https://studentloancalculator.uk/guides/student-loan-tax-codes/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "UK Student Loan Tax Codes: SL, PGL & Number Codes Explained",
    description: "Decode UK student loan tax codes: SL, PGL markers, and what numbers mean. Learn how codes affect payroll deductions and spot errors on your payslip.",
    url: "https://studentloancalculator.uk/guides/student-loan-tax-codes/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Student Loan Tax Codes: SL, PGL & Number Codes Explained",
    description: "Decode UK student loan tax codes: SL, PGL markers, and what numbers mean. Learn how codes affect payroll deductions and spot errors on your payslip.",
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

const StudentLoanTaxCodes = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Student Loan Tax Codes",
        item: "https://studentloancalculator.co.uk/guides/student-loan-tax-codes",
      },
    ],
  };

  const articleSchema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Student Loan Tax Codes: SL, PGL, and Number Codes Complete Guide",
    description:
      "Comprehensive guide to understanding UK student loan tax codes including SL and PGL markers, what the numbers mean, and how to fix errors on your payslip.",
    url: "https://studentloancalculator.co.uk/guides/student-loan-tax-codes",
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
      "@id": "https://studentloancalculator.co.uk/guides/student-loan-tax-codes",
    },
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can my employer change my tax code?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Only HMRC can change your tax code. Your employer must use the code that HMRC provides to them. If you believe your code is wrong, you need to contact HMRC directly, not your employer. Your employer will receive the updated code from HMRC once the change has been processed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take for HMRC to update my tax code?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Once you contact HMRC about an incorrect tax code, they typically update it within 1-2 weeks. Your employer will then receive the new code and should apply it from your next payslip. However, during busy periods (especially April and May), it may take longer. You can check the status through your Personal Tax Account online.",
        },
      },
      {
        "@type": "Question",
        name: "Will I automatically get a refund if I've overpaid?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Not always. If you've overpaid student loans due to an incorrect tax code, you need to actively request a refund from HMRC. They won't automatically refund you just because they've corrected your code going forward. You'll need to provide evidence (payslips) showing the incorrect deductions and request a backdated refund for up to four years.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I ignore an incorrect tax code?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "If your tax code is wrong and causing overpayments, you'll continue to lose money every month until you fix it. The longer you wait, the more you'll overpay. If your code is missing student loan markers when it should have them, you'll eventually owe the money through Self Assessment, possibly with interest and penalties added.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have different tax codes for different jobs?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, and you should. If you have multiple jobs, your main job will typically have your full Personal Allowance (1257L), while your second job will usually have a BR code (no personal allowance). Student loan markers (SL/PGL) should appear appropriately on the jobs where you're earning above the threshold. If all your jobs have the same code, it's likely wrong and you should contact HMRC.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
      <div>
        <StudentLoanTaxCodePage />
      </div>
    </>
  );
};

export default StudentLoanTaxCodes;
