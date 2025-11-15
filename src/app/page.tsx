import type { Metadata } from "next";
import HomePage from "@/modules/hero/templates/home";

export const metadata: Metadata = {
  title: "Student Loan Calculator UK – Repayment & Write-Offs (2025 Rules)",
  description: "UK Student Loan Calculator using 2025 repayment rules. Estimate monthly payments, lifetime cost, interest, and write-off dates for Plan 1, 2, 4, ,5 and postgraduate loans.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "student loan calculator",
    "uk student loans",
    "plan 5 calculator",
    "loan repayments",
    "student finance",
    "loan comparison",
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
    canonical: "https://studentloancalculator.uk/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Student Loan Calculator UK - Understand Your Repayments",
    description: "Trusted tools, expert guides, and calculators to understand UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans.",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.uk",
            description: "Trusted tools, expert guides, and calculators built for UK students and graduates.",
            inLanguage: "en-GB",
            publisher: {
              "@type": "Organization",
              name: "Student Loan Calculator UK",
              url: "https://studentloancalculator.uk"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://studentloancalculator.uk/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/#webpage",
            name: "UK Student Loan Calculator Homepage",
            description: "Free UK student loan calculators and guides to help students and graduates understand their loan repayments.",
            url: "https://studentloancalculator.co.uk/",
            datePublished: "2025-05-09T05:42:41.382Z",
            dateModified: "2025-11-02T00:00:00Z",
            inLanguage: "en-GB"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "@id": "https://studentloancalculator.uk/calculator#app",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.uk/calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            inLanguage: "en-GB",
            isAccessibleForFree: true,
            description: "Interactive UK student loan calculator with 2025 rules. Supports Plan 1, 2, 4, 5 and Postgraduate, salary growth, threshold growth, career breaks, and overpayments.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "GBP"
            },
            featureList: [
              "Plan 5 (2023+) and legacy plans",
              "Salary and threshold growth modelling",
              "Career break timing and duration",
              "Monthly and lump-sum overpayments",
              "Interest override option",
              "Repayment totals, monthly amount, write-off timing",
              "Projection charts"
            ],
            potentialAction: {
              "@type": "CalculateAction",
              name: "Estimate UK student loan repayments",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://studentloancalculator.uk/calculator?salary={salary}&balance={balance}&plan={plan}&gradYear={gradYear}&salaryGrowth={salaryGrowth}&thresholdGrowth={thresholdGrowth}&breakYears={breakYears}&breakStart={breakStart}&monthlyOverpay={monthlyOverpay}&lumpSum={lumpSum}&lumpSumYear={lumpSumYear}&interestOverride={interestOverride}"
              },
              "query-input": [
                "required name=salary",
                "required name=balance",
                "required name=plan",
                "required name=gradYear",
                "optional name=salaryGrowth",
                "optional name=thresholdGrowth",
                "optional name=breakYears",
                "optional name=breakStart",
                "optional name=monthlyOverpay",
                "optional name=lumpSum",
                "optional name=lumpSumYear",
                "optional name=interestOverride"
              ],
              actionApplication: { "@id": "https://studentloancalculator.uk/calculator#app" },
              instrument: [
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "salary",
                  valueRequired: true,
                  valueMin: 0,
                  valueMax: 1000000,
                  stepValue: 1,
                  valuePattern: "^[0-9]+$",
                  defaultValue: 30000,
                  description: "Current annual salary before tax in GBP"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "balance",
                  valueRequired: true,
                  valueMin: 0,
                  valueMax: 1000000,
                  stepValue: 1,
                  valuePattern: "^[0-9]+$",
                  defaultValue: 45000,
                  description: "Outstanding loan balance in GBP"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "plan",
                  valueRequired: true,
                  valueOption: [
                    "Plan 5 (Started 2023+)",
                    "Plan 2 (Started 2012-2023)",
                    "Plan 1 (Started before 2012)",
                    "Plan 4 (Scotland)",
                    "Postgraduate Loan"
                  ],
                  defaultValue: "Plan 5 (Started 2023+)",
                  description: "Student loan repayment plan"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "gradYear",
                  valueRequired: true,
                  valueMin: 2010,
                  valueMax: 2035,
                  stepValue: 1,
                  defaultValue: 2024,
                  description: "Graduation year"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "salaryGrowth",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 100,
                  stepValue: 0.1,
                  defaultValue: 2.5,
                  description: "Annual salary growth percentage"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "thresholdGrowth",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 100,
                  stepValue: 0.1,
                  defaultValue: 2.0,
                  description: "Repayment threshold growth percentage"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "breakYears",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 10,
                  stepValue: 0.5,
                  defaultValue: 0,
                  description: "Years on career break"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "breakStart",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 40,
                  stepValue: 1,
                  defaultValue: 5,
                  description: "Years after graduation when break begins"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "monthlyOverpay",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 100000,
                  stepValue: 1,
                  defaultValue: 0,
                  description: "Voluntary monthly overpayment in GBP"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "lumpSum",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 1000000,
                  stepValue: 1,
                  defaultValue: 0,
                  description: "One-off lump sum in GBP"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "lumpSumYear",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 40,
                  stepValue: 1,
                  defaultValue: 0,
                  description: "Years after graduation to apply lump sum"
                },
                {
                  "@type": "PropertyValueSpecification",
                  valueName: "interestOverride",
                  valueRequired: false,
                  valueMin: 0,
                  valueMax: 100,
                  stepValue: 0.1,
                  description: "Override interest rate percentage if set"
                }
              ]
            },
            datePublished: "2025-11-02T00:00:00Z",
            dateModified: "2025-11-02T00:00:00Z",
            mainEntityOfPage: { "@id": "https://studentloancalculator.co.uk/#webpage" }
          })
        }}
      />
      <div>
        <HomePage />
      </div>
    </>
  );
}