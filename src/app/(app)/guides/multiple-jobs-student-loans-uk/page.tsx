import MultipleJobsStudentLoans from '@/modules/guides/multiple-jobs-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Multiple Jobs Student Loans UK: Split Codes & Thresholds 2025/26",
    description: "Managing UK student loans with multiple jobs. Understand BR codes, threshold splits, overpayment risks, and how PAYE handles second employment.",
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
        canonical: "https://studentloancalculator.uk/guides/multiple-jobs-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const MultipleJobsStudentLoanPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Multiple Jobs Student Loans", item: "https://studentloancalculator.co.uk/guides/multiple-jobs-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Multiple Jobs Student Loans: Split Codes and Thresholds",
        description:
            "Managing UK student loans with multiple jobs. Understand BR codes, threshold splits, overpayment risks, and how PAYE handles second employment.",
        url: "https://studentloancalculator.co.uk/guides/multiple-jobs-student-loans-uk",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/multiple-jobs-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/multiple-jobs-student-loans-uk",
        },
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div>
                <MultipleJobsStudentLoans />
            </div>
        </>
    )
}

export default MultipleJobsStudentLoanPage