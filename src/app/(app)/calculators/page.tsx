import React from 'react'
import type { Metadata } from "next";
import { WebPage, WithContext } from 'schema-dts';
import { JsonLd } from '@/modules/seo/json-ld';
import CalculatorsPage from '@/modules/calculator';

export const metadata: Metadata = {
  title: "Calculators - All Tools & Repayment Estimators | Student Loan Calculator UK",
  description: "Browse all calculators. Compare monthly payments, interest, total cost and more across Plan 1, 2, 4, 5 and Postgraduate loans.",
  applicationName: "Student Loan Calculator UK",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  generator: "Next.js",
  keywords: [
    "calculator",
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
    canonical: "https://studentloancalculator.uk/calculators/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    title: "Calculators - All Tools & Repayment Estimators | Student Loan Calculator UK",
    description: "Browse all calculators. Compare monthly payments, interest, total cost and more across Plan 1, 2, 4, 5 and Postgraduate loans.",
    url: "https://studentloancalculator.uk/calculators/",
    siteName: "Student Loan Calculator UK",
    locale: "en_GB",
    images: [
      {
        url: "https://studentloancalculator.uk/og-image.jpg", // Update to production URL
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
    description: "Browse all calculators. Compare monthly payments, interest, total cost and more across Plan 1, 2, 4, 5 and Postgraduate loans.",
    images: ["https://studentloancalculator.uk/og-image.jpg"], // Update to production URL
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


const CalculatorListPage = () => {
  const webPageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Calculators",
    description: "Collection of calculators for all plan types and scenarios.",
    url: "https://studentloancalculator.co.uk/calculators",
    datePublished: "2025-05-09T05:42:41.388Z",
    dateModified: new Date().toISOString(),
  };
  return (
    <div>
      <JsonLd code={webPageSchema} />
      <CalculatorsPage />
    </div>
  );
}

export default CalculatorListPage