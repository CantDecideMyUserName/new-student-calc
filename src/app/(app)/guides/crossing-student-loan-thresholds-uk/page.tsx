import CrossingStudentLoanThresholds from '@/modules/guides/crossing-student-loan-thresholds-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Student Loan Thresholds UK: Salary Negotiation Tactics 2025/26",
    description: "Strategic salary negotiation for UK student loan thresholds. Learn when crossing £25K-£50K thresholds impacts take-home and how to optimize offers.",
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
        "salary negotiation",
        "student loan thresholds",
        "threshold crossing",
        "plan 2 threshold",
        "plan 5 threshold",
        "£27295 threshold",
        "£50000 cliff edge",
        "salary sacrifice",
        "compensation structure",
        "take home pay",
        "marginal tax rate",
        "student loan interest",
        "postgraduate loan",
        "undergraduate loan",
        "salary optimization",
        "benefits vs salary",
        "pension contributions",
        "career negotiation",
        "threshold strategy",
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
        canonical: "https://studentloancalculator.uk/guides/crossing-student-loan-thresholds-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const CrossingStudentLoanThresholdsPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Crossing Student Loan Thresholds", item: "https://studentloancalculator.co.uk/guides/crossing-student-loan-thresholds-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Student Loan Thresholds UK: Salary Negotiation Tactics 2025/26",
        description: "Strategic salary negotiation for UK student loan thresholds. Learn when crossing £25K-£50K thresholds impacts take-home and how to optimize offers.",
        url: "https://studentloancalculator.co.uk/guides/crossing-student-loan-thresholds-uk",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/crossing-student-loan-thresholds-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/crossing-student-loan-thresholds-uk",
        },
        author: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk"
        },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk"
        },
        wordCount: 4200,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Student Loan Thresholds",
                description: "Income levels at which student loan repayments begin for different UK loan plans"
            },
            {
                "@type": "Thing", 
                name: "Salary Negotiation",
                description: "Strategic approach to structuring compensation around student loan thresholds"
            },
            {
                "@type": "Thing",
                name: "Plan 2 Student Loans",
                description: "UK student loans for those who started university between 2012-2023"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What are the current UK student loan repayment thresholds for 2025?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The repayment thresholds vary by plan: Plan 1 (pre-2012): £24,990, Plan 2 (2012-2023): £27,295, Plan 4 (Scottish): £31,395, Plan 5 (2023+): £25,000, and Postgraduate loans: £21,000. You pay 9% on income above the undergraduate threshold and 6% on income above £21,000 for postgraduate loans. These thresholds trigger deductions through PAYE when crossed.",
                },
            },
            {
                "@type": "Question",
                name: "How much does crossing the £27,295 Plan 2 threshold actually cost me?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crossing from £27,000 to £28,000 triggers £63.45 in annual student loan deductions. While this looks like a £1,000 raise, you only gain £936.55 after student loans, and approximately £636 in actual take-home after tax and National Insurance. You keep about 64% of the gross increase, compared to 68% if you were already above the threshold.",
                },
            },
            {
                "@type": "Question",
                name: "What is the £50,000 cliff edge for Plan 2 borrowers?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "At £50,000, Plan 2 borrowers face two impacts: entering the 40% higher-rate tax band and reaching maximum student loan interest of RPI+3%. For someone with a £45,000 loan balance, the interest rate increase from RPI+2.7% to RPI+3% costs an extra £135 annually, while higher repayments provide minimal additional progress toward clearing the balance due to the higher interest offsetting increased payments.",
                },
            },
            {
                "@type": "Question",
                name: "What strategies can I use to negotiate around student loan thresholds?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Four key strategies: 1) Stay just below threshold by negotiating benefits instead of salary (additional leave, flexible working, professional development budget), 2) Offset threshold crossing through salary sacrifice (pension contributions, cycle to work schemes), 3) Threshold-aware stepping over multiple years, and 4) Front-load non-salary benefits early in your career when below thresholds, then shift to salary focus once comfortably above.",
                },
            },
            {
                "@type": "Question",
                name: "When should I ignore threshold considerations entirely?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ignore thresholds for major career opportunities offering significantly better progression, substantial gross increases (e.g., £25,000 to £40,000), or when career trajectory matters more than short-term optimization. Also ignore if you're likely to have your loan written off anyway, as you're just paying 9% extra 'tax' temporarily. Remember that salary at age 25 sets your baseline for future earnings - don't sacrifice long-term growth for small threshold savings.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <CrossingStudentLoanThresholds />
            </div>
        </>
    )
}

export default CrossingStudentLoanThresholdsPage