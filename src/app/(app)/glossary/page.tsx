import StudentLoanGlossary from '@/modules/glossary'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Student Loan Glossary - Definitions & Explanations | Student Loan Calculator UK",
    description:
        "Student Loan Glossary - Definitions & Explanations | Student Loan Calculator UK",
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
        canonical: "https://studentloancalculator.uk/glossary/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const GlossaryPage = () => {
  return (
    <div>
        <StudentLoanGlossary />
    </div>
  )
}

export default GlossaryPage