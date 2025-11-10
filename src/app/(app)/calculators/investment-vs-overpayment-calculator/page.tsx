import InvestmentVsOverpaymentCalculatorPage from '@/modules/calculator/investment-vs-overpayment-calculator'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
  title: "Investment vs Student Loan Overpayment Calculator UK - Should You Invest or Overpay?",
  description: "Compare investing extra money vs overpaying your student loan. Calculate potential returns and loan savings to make the best financial decision for your situation.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "investment vs loan overpayment",
    "student loan overpayment calculator",
    "should i invest or pay off student loan",
    "investment vs debt repayment",
    "student loan investment comparison",
    "financial planning calculator",
    "loan overpayment vs isa",
    "uk student loan investment",
    "debt vs investment strategy",
    "student finance planning",
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
    canonical: "https://studentloancalculator.uk/calculators/investment-vs-overpayment-calculator/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Investment vs Student Loan Overpayment Calculator UK - Should You Invest or Overpay?",
    description: "Compare investing extra money vs overpaying your student loan. Calculate potential returns and loan savings to make the best financial decision.",
    url: "https://studentloancalculator.uk/calculators/investment-vs-overpayment-calculator/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Investment vs Student Loan Overpayment Calculator UK",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment vs Student Loan Overpayment Calculator UK",
    description: "Compare investing vs overpaying your student loan to make the best financial decision.",
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

const InvestmentVsOverpaymentCalculator = () => {
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
        name: "Investment vs Overpayment",
        item: "https://studentloancalculator.co.uk/calculators/investment-vs-overpayment-calculator",
      },
    ],
  };

  const softwareSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Investment vs Student Loan Overpayment Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    url: "https://studentloancalculator.co.uk/calculators/investment-vs-overpayment-calculator",
    description: "Compare the financial benefits of investing extra money versus using it to overpay your UK student loan. Calculate potential returns and loan savings.",
    image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I invest or overpay my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your loan's interest rate, risk tolerance, and financial goals. If you can earn more from investments than your loan's interest rate, investing may be better. However, overpaying provides guaranteed savings equal to the interest rate.",
        },
      },
      {
        "@type": "Question",
        name: "What factors should I consider when deciding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key factors include: your loan's interest rate vs potential investment returns, risk tolerance, likelihood of loan write-off, tax implications, emergency fund status, and other debts. Plan 1 loans often have lower rates making investing more attractive.",
        },
      },
      {
        "@type": "Question",
        name: "Is it guaranteed I'll save money by overpaying my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Overpaying provides guaranteed savings equal to your loan's interest rate, but only if you wouldn't benefit from loan write-off. Many Plan 1, 2, and 5 loans are written off after 25-40 years, so overpaying might not always be beneficial.",
        },
      },
      {
        "@type": "Question",
        name: "What investment returns should I expect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Historical stock market returns average 7-8% annually, but investments carry risk. Conservative options like Cash ISAs might return 3-5%, while aggressive equity portfolios could return 8-10% but with higher volatility.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do both - invest and overpay my loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! A hybrid approach can work well. You might split surplus money between both strategies, prioritize by interest rates, or use different approaches for regular savings vs windfalls. Consider maximizing ISA allowances while making strategic overpayments.",
        },
      },
      {
        "@type": "Question",
        name: "When should I definitely choose overpaying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consider overpaying if you have: high loan interest rates (Plan 2/Postgraduate), low risk tolerance, large loan balances unlikely to be written off, high current income, or strong preference for being debt-free.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />

      <div>
        <InvestmentVsOverpaymentCalculatorPage />
      </div>
    </>
  )
}

export default InvestmentVsOverpaymentCalculator