import P60P45StudentLoanRepayments from '@/modules/guides/p60-p45-student-loan-repayments'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "P60 & P45 Student Loans UK: How Forms Affect Repayments 2025/26",
    description: "How P60 and P45 forms affect UK student loan repayments. Verify deductions, claim refunds, and ensure correct calculations when changing jobs.",
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
        canonical: "https://studentloancalculator.uk/guides/p60-p45-student-loan-repayments/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

export default function P60P45STudentLoanPage() {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://studentloancalculator.uk",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: "https://studentloancalculator.uk/guides",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "P60/P45 Student Loan Repayments",
                item: "https://studentloancalculator.uk/guides/p60-p45-student-loan-repayments",
            },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "P60 & P45 Student Loans UK: How Forms Affect Repayments 2025/26",
        description:
            "How P60 and P45 forms affect UK student loan repayments. Verify deductions, claim refunds, and ensure correct calculations when changing jobs.",
        url: "https://studentloancalculator.co.uk/guides/p60-p45-student-loan-repayments",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/p60-p45-student-loan-repayments.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/p60-p45-student-loan-repayments",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is a P60?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A P60 is a year-end summary of your earnings and deductions from your employer. It's issued at the end of the tax year (usually in May) and is used to calculate your tax and national insurance contributions for the year.",
                },
            },
            {
                "@type": "Question",
                name: "What is a P45?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A P45 is a form that your employer must give you when you leave a job. It shows your earnings and deductions from the start of the tax year to your leaving date.",
                },
            },
            {
                "@type": "Question",
                name: "What information do P60 and P45 contain about student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Both forms show the total amount of student loan deductions taken from your pay during the relevant period. This helps you verify if the correct amount was deducted and claim refunds if necessary.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <P60P45StudentLoanRepayments />
            </div>
        </>
    )
}
