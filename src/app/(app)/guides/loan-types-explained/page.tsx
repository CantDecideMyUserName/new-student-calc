import LoanTypesExplained from '@/modules/guides/loan-types-explained'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "UK Student Loan Types Explained - Complete Guide to All Plans | Student Loan Calculator UK",
    description: "Learn about all UK student loan types including Plans 1, 2, 4, 5, and Postgraduate loans. Understand repayment thresholds, interest rates, and which plan applies to you.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 1 calculator",
        "plan 2 calculator",
        "plan 4 calculator",
        "plan 5 calculator",
        "postgraduate loan",
        "student finance",
        "loan repayments",
        "loan types",
        "student loan plans",
        "repayment threshold",
        "interest rates",
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
        canonical: "https://studentloancalculator.uk/guides/loan-types-explained/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const LoanTypesExplainedPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Loan Types Explained", item: "https://studentloancalculator.co.uk/guides/loan-types-explained" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "UK Student Loan Types Explained - Complete Guide to All Plans",
        description: "Comprehensive explanation of all UK student loan types including Plans 1, 2, 4, 5, and Postgraduate loans with their terms and conditions.",
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
        url: "https://studentloancalculator.co.uk/guides/loan-types-explained",
        datePublished: "2023-09-12",
        dateModified: "2024-12-20",
        image: "https://studentloancalculator.co.uk/images/guides/loan-types-explained.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/loan-types-explained",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Which student loan plan am I on?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your student loan plan depends on when and where you started studying. Plan 1 applies to students who started before September 2012 in England/Wales or any Northern Irish students. Plan 2 applies to English/Welsh students who started between September 2012 and July 2023. Plan 4 applies to Scottish students from September 1998 onwards. Plan 5 applies to English/Welsh students starting from August 2023.",
                },
            },
            {
                "@type": "Question",
                name: "What are the repayment thresholds for different loan plans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For 2024/25: Plan 1 threshold is £22,015, Plan 2 is £27,295, Plan 4 is £27,660, Plan 5 is £25,000, and Postgraduate loans is £21,000. You repay 9% of income above these thresholds (6% for postgraduate loans).",
                },
            },
            {
                "@type": "Question",
                name: "How do interest rates differ between loan plans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 1 and Plan 4 use the lower of RPI or Bank Rate + 1%. Plan 2 uses RPI to RPI + 3% depending on income. Plan 5 uses RPI only. Postgraduate loans use RPI + 3%. Interest rates vary annually based on inflation and policy changes.",
                },
            },
            {
                "@type": "Question",
                name: "When are student loans written off?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 1 loans are written off after 25 years or at age 65. Plan 2, Plan 4, and Postgraduate loans are written off after 30 years. Plan 5 loans are written off after 40 years. All periods are calculated from the April after you finish your course.",
                },
            },
            {
                "@type": "Question",
                name: "Can I have multiple student loan plans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can have multiple loan plans if you studied different courses or have both undergraduate and postgraduate loans. Each loan maintains its own terms and thresholds, and you make separate repayments for each that are combined on your payslip.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <LoanTypesExplained />
            </div>
        </>
    )
}

export default LoanTypesExplainedPage