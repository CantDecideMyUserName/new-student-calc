import BonusCalculator from '@/modules/calculator/hmrc-calculator/bonus-month-paye-student-loan';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
  title: "Bonus Month PAYE Student Loan Calculator UK - Monthly Threshold Impact",
  description: "Calculate exact student loan deductions when you receive a bonus in a specific month. See how PAYE applies monthly thresholds causing higher deductions in bonus months even if annual income is below threshold.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "bonus month student loan calculator",
    "student loan deduction bonus",
    "monthly threshold bonus payment",
    "PAYE bonus student loan UK",
    "Christmas bonus student loan",
    "one-off payment student loan",
    "monthly threshold spike",
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
    canonical: "https://studentloancalculator.uk/calculators/bonus-month-paye-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Bonus Month PAYE Student Loan Calculator UK - Monthly Threshold Impact",
    description: "Calculate exact student loan deductions when you receive a bonus in a specific month. See how PAYE applies monthly thresholds causing higher deductions in bonus months even if annual income is below threshold.",
    url: "https://studentloancalculator.uk/calculators/bonus-month-paye-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bonus Month PAYE Student Loan Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonus Month PAYE Student Loan Calculator UK",
    description: "Calculate student loan deductions in months when you receive bonuses or one-off payments.",
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


const BonusMonthPayeStudentLoan = () => {
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
        name: "Bonus Month PAYE Calculator",
        item: "https://studentloancalculator.co.uk/calculators/bonus-month-paye-calculator",
      },
    ],
  };


  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bonus Month PAYE Student Loan Calculator",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/bonus-month-paye-calculator",
    description: "Calculate your student loan deductions for months when you receive bonuses, overtime, or commission payments. Understand how PAYE applies the monthly threshold causing significant deductions in high-earning months, even when annual income is below the threshold.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };


  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is my student loan deduction so high in my bonus month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAYE calculates student loan deductions based on your earnings in that specific pay period, not your annual income. When you receive a bonus, your total income for that month exceeds the monthly threshold (£2,372 for Plan 2), triggering 9% deductions on everything above the threshold. For example, if your regular salary is £2,000 plus a £10,000 bonus in December, your total income that month is £12,000. The deduction would be 9% of (£12,000 - £2,372) = £866, even though most months you pay nothing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a refund if my bonus causes overpayment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can claim a refund if your total annual income is below the yearly threshold but bonuses triggered monthly repayments. For Plan 2, if your annual income is below £28,470 but you paid student loan deductions during high-earning months (bonuses, overtime, commission), you're entitled to a full refund of those deductions. You must wait until after the tax year ends (after 5 April) and then contact the Student Loans Company with evidence like your P60 showing annual earnings below the threshold.",
        },
      },
      {
        "@type": "Question",
        name: "How much student loan will I pay on a £15,000 bonus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On a £15,000 bonus payment, assuming you're already earning above the monthly threshold, you'll pay approximately 9% of the entire bonus amount for undergraduate loans (Plan 1, 2, 4, or 5). That's around £1,350 in student loan deductions. If you also have a Postgraduate Loan, you'll pay an additional 6% (£900), totaling £2,250 in student loan deductions that month. This deduction applies regardless of your usual monthly salary because PAYE treats each pay period independently.",
        },
      },
      {
        "@type": "Question",
        name: "Does my employer calculate bonuses differently for student loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, employers must apply the same monthly threshold calculation to all earnings in a pay period, including bonuses. There's no special treatment or averaging for one-off payments. Your employer adds the bonus to your regular salary for that month and applies 9% (or 15% if you have both undergraduate and postgraduate loans) to everything above the monthly threshold. This is why even annual bonuses paid once per year can result in substantial one-time student loan deductions of £2,000-£3,000.",
        },
      },
      {
        "@type": "Question",
        name: "Should I ask my employer to split my bonus across multiple months?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Splitting your bonus across multiple months won't reduce your total student loan repayments if your annual income exceeds the yearly threshold. However, if your annual income is below the threshold and you'd rather claim a refund later than have a large deduction upfront, receiving the bonus in one month may be preferable for cash flow. If your annual income exceeds the threshold, you'll owe the same total amount whether the bonus is paid in one month or split across several - the monthly threshold calculation ensures 9% is paid on income above threshold regardless of payment timing.",
        },
      },
    ],
  };


  return (
    <div>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
      <BonusCalculator/>
    </div>
  )
}


export default BonusMonthPayeStudentLoan
