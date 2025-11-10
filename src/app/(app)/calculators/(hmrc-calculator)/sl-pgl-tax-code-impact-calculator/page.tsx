import NoticeSimulator from '@/modules/calculator/hmrc-calculator/sl-pgl-notice-tax-code-impact';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Student Loan Tax Code Notice Calculator UK - SL1, PGL1 Impact on PAYE",
  description: "Calculate the impact of HMRC student loan (SL1) and postgraduate loan (PGL1) tax code notices on your payroll deductions. Understand how employers process loan notifications.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan tax code notice",
    "SL1 notice HMRC",
    "PGL1 postgraduate loan notice",
    "tax code student loan deduction",
    "HMRC loan notification",
    "student loan PAYE notice",
    "employer student loan notice",
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
    canonical: "https://studentloancalculator.uk/calculators/sl-pgl-tax-code-impact-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Tax Code Notice Calculator UK - SL1, PGL1 Impact on PAYE",
    description: "Calculate the impact of HMRC student loan (SL1) and postgraduate loan (PGL1) tax code notices on your payroll deductions. Understand how employers process loan notifications.",
    url: "https://studentloancalculator.uk/calculators/sl-pgl-tax-code-impact-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Tax Code Notice Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Tax Code Notice Calculator UK",
    description: "Calculate the impact of HMRC student loan and postgraduate loan tax code notices.",
    images: ["https://studentloancalculator.uk/og-image.jpg"],
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


const SlPglNoticTaxCodeImpact = () => {
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://studentloancalculator.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: "https://studentloancalculator.co.uk/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SL/PGL Tax Code Notice Calculator",
        item: "https://studentloancalculator.co.uk/calculators/sl-pgl-tax-code-impact-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Student Loan Tax Code Notice Impact Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/sl-pgl-tax-code-impact-calculator",
    description: "Calculate how HMRC student loan (SL1) and postgraduate loan (PGL1) tax code notices affect your PAYE deductions. Essential for understanding when loan repayments start or stop through payroll after receiving HMRC notifications.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an SL1 notice from HMRC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SL1 notice is a formal notification sent by HMRC to your employer instructing them to start deducting student loan repayments from your salary. The notice specifies your loan plan type (Plan 1, 2, 4, or 5) so your employer can apply the correct repayment threshold and rate. Employers typically receive these notices electronically and must implement the deductions from the first full pay period after receiving the notice. The SL1 notice is triggered when the Student Loans Company informs HMRC that you've entered repayment.",
        },
      },
      {
        "@type": "Question",
        name: "What does a PGL1 notice mean for my payslip?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A PGL1 notice tells your employer to start deducting postgraduate loan repayments at 6% of your income above £21,000 (£1,750 monthly). This is separate from any undergraduate student loan deductions you may already be making. If you receive both an SL1 and PGL1 notice, you'll see two separate deduction lines on your payslip - typically 9% for your undergraduate loan and 6% for your postgraduate loan, totaling up to 15% of income above the respective thresholds.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly does my employer act on an HMRC student loan notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employers must implement student loan deductions from the first full pay period after receiving an SL1 or PGL1 notice from HMRC. For example, if the notice is received on 10th March and your pay period runs from 1st to 31st of each month, deductions would start from your April payslip. Most employers receive these notices electronically through HMRC's online services, which speeds up the process. There's no delay or grace period - implementation must be immediate once the notice is processed by payroll.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see my student loan status in my tax code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your student loan status is tracked separately from your tax code and doesn't appear as part of your tax code letters and numbers (like 1257L). However, your payroll system will have a separate indicator showing your loan plan type. Some payslips may show 'SL' or similar notation alongside your tax code to indicate student loan deductions are active. Your employer's payroll system receives separate SL1/PGL1 notices that work independently of tax code notifications (P6, P9, etc.).",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I receive an SL2 stop notice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SL2 notice instructs your employer to stop deducting student loan repayments, typically because you've repaid your loan in full or are no longer liable to make repayments. Your employer must stop deductions from the next available pay period after receiving the notice. If deductions continue after an SL2 notice, you're entitled to a refund. Similarly, a PGL2 notice stops postgraduate loan deductions. You should check your payslip the month after receiving notification to ensure deductions have ceased.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <NoticeSimulator/>
    </div>
  )
}


export default SlPglNoticTaxCodeImpact
