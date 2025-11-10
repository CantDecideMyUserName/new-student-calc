import PAYEPeriodConverter from '@/modules/calculator/hmrc-calculator/paye-period-threshold-converter';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "PAYE Period Threshold Converter UK - Weekly, Monthly, Annual Student Loan",
  description: "Convert student loan repayment thresholds between weekly, monthly, and annual pay periods. Essential for understanding PAYE deductions across different payment frequencies.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan threshold converter",
    "weekly monthly threshold calculator",
    "PAYE period threshold",
    "student loan weekly threshold",
    "monthly threshold student loan",
    "annual threshold converter",
    "pay period threshold calculator",
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
    canonical: "https://studentloancalculator.uk/calculators/paye-period-threshold-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "PAYE Period Threshold Converter UK - Weekly, Monthly, Annual Student Loan",
    description: "Convert student loan repayment thresholds between weekly, monthly, and annual pay periods. Essential for understanding PAYE deductions across different payment frequencies.",
    url: "https://studentloancalculator.uk/calculators/paye-period-threshold-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PAYE Period Threshold Converter UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAYE Period Threshold Converter UK",
    description: "Convert student loan thresholds between weekly, monthly, and annual pay periods.",
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


const PayePeriodThresholdConverter = () => {
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
        name: "PAYE Period Threshold Converter",
        item: "https://studentloancalculator.co.uk/calculators/paye-period-threshold-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PAYE Period Threshold Converter",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/paye-period-threshold-calculator",
    description: "Convert student loan repayment thresholds between weekly, monthly, and annual pay periods for all UK loan plans. Essential tool for understanding PAYE deductions when switching between different payment frequencies or comparing jobs with different pay schedules.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the monthly and weekly thresholds for Plan 2 loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Plan 2 loans in 2025/26, the annual threshold is £28,470, which converts to £2,372.50 per month or £547.50 per week. These thresholds are calculated by dividing the annual amount by 12 (for monthly) or 52 (for weekly). Your employer uses the threshold that matches your pay frequency. If you earn £2,500 monthly, you'd pay 9% of (£2,500 - £2,372.50) = £11.48. If you earn £600 weekly, you'd pay 9% of (£600 - £547.50) = £4.73.",
        },
      },
      {
        "@type": "Question",
        name: "Why do employers use different thresholds for different pay periods?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAYE operates on a period-by-period basis, not cumulative like income tax. Employers must apply the threshold appropriate to each pay period to ensure fairness. If weekly employees used the monthly threshold of £2,372.50, they'd never pay student loans because no single week's pay would reach that amount. Similarly, monthly employees couldn't use the weekly threshold of £547.50 or they'd overpay massively. The system ensures equivalent treatment: someone earning £28,470 annually pays the same whether paid weekly (£547.50 × 52) or monthly (£2,372.50 × 12).",
        },
      },
      {
        "@type": "Question",
        name: "How do I convert annual threshold to fortnightly or 4-weekly pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For fortnightly (2-weekly) pay, divide the annual threshold by 26. For 4-weekly pay, divide by 13. For Plan 2's £28,470 annual threshold: fortnightly is £1,095 (£28,470 ÷ 26) and 4-weekly is £2,190 (£28,470 ÷ 13). Some employers use these less common pay frequencies, particularly in healthcare and retail. If you're paid fortnightly earning £1,200, you'd pay 9% of (£1,200 - £1,095) = £9.45 per pay period.",
        },
      },
      {
        "@type": "Question",
        name: "What are the current thresholds for all loan plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For 2025/26: Plan 1 is £26,065 annually (£2,172 monthly, £501 weekly). Plan 2 is £28,470 annually (£2,372.50 monthly, £547.50 weekly). Plan 4 is £32,745 annually (£2,729 monthly, £630 weekly). Plan 5 is £25,000 annually (£2,083 monthly, £481 weekly). Postgraduate Loan is £21,000 annually (£1,750 monthly, £404 weekly). All undergraduate plans use a 9% repayment rate, while Postgraduate Loans use 6%.",
        },
      },
      {
        "@type": "Question",
        name: "Do irregular pay periods affect student loan calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, irregular pay can significantly affect student loan deductions. If you have varying income each period, PAYE calculates deductions independently for each pay period using that period's threshold. For example, with Plan 2 monthly pay, if you earn £2,000 one month (below £2,372.50), you pay nothing. But if you earn £5,000 the next month due to overtime or bonus, you pay 9% of £2,627.50 = £236.48. This period-by-period calculation can result in paying student loans in some months but not others, even if your average annual income is below the yearly threshold.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <PAYEPeriodConverter />
    </div>
  )
}


export default PayePeriodThresholdConverter
