import StudentLoanInterestRates from '@/modules/guides/student-loan-interest-rates'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "UK Student Loan Interest Rates 2025: Complete Guide | All Plans",
    description: "Current UK student loan interest rates for Plan 1, 2, 4, 5, and Postgraduate loans. Understand how interest is calculated and whether it actually matters for your repayments.",
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
        "student loan interest rates",
        "plan 2 interest rate",
        "plan 5 interest rate",
        "RPI student loans",
        "student loan interest calculator",
        "postgraduate loan interest",
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
        canonical: "https://studentloancalculator.uk/guides/student-loan-interest-rates/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const StudentLoanInterestRatesPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Student Loan Interest Rates", item: "https://studentloancalculator.co.uk/guides/student-loan-interest-rates" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "UK Student Loan Interest Rates 2025: Complete Guide | All Plans",
        description: "Current UK student loan interest rates for Plan 1, 2, 4, 5, and Postgraduate loans. Understand how interest is calculated and whether it actually matters for your repayments.",
        url: "https://studentloancalculator.co.uk/guides/student-loan-interest-rates",
        datePublished: "2023-09-01",
        dateModified: "2025-11-03",
        image: "https://studentloancalculator.co.uk/images/guides/student-loan-interest-rates.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/student-loan-interest-rates",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the current interest rate on Plan 2 student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 2 student loan interest rates are variable: 7.3% (RPI + 3%) while studying, 4.3% (RPI only) after graduation if earning below £27,295, and 4.3%-7.3% on a sliding scale if earning between £27,295 and £49,130. Those earning over £49,130 pay the maximum rate of 7.3%.",
                },
            },
            {
                "@type": "Question",
                name: "What is the current interest rate on Plan 5 student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 5 student loans have a fixed interest rate of 4.3% (RPI only) throughout the entire life of the loan. Unlike Plan 2, there is no additional percentage based on income, making it more predictable for borrowers.",
                },
            },
            {
                "@type": "Question",
                name: "Does student loan interest rate affect my monthly repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, your monthly student loan repayments are based on your income above the threshold, not on your loan balance or interest rate. A higher interest rate doesn't increase monthly payments - it only affects how long it takes to repay and whether you'll fully repay before write-off.",
                },
            },
            {
                "@type": "Question",
                name: "How is student loan interest calculated in the UK?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Interest calculation depends on your loan plan. Plan 1 and 4 use the lower of RPI or Bank of England base rate + 1%. Plan 2 uses RPI to RPI + 3% depending on income. Plan 5 uses RPI only. Postgraduate loans use RPI + 3% throughout. All rates are based on the Retail Price Index (RPI) inflation measure from the previous March.",
                },
            },
            {
                "@type": "Question",
                name: "Will most students repay their loan in full?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, government figures suggest around 75-80% of recent graduates with Plan 2 loans will never fully repay before their loans are written off after 30 years. This means for most borrowers, the interest rate has minimal practical impact on their total repayments.",
                },
            },
            {
                "@type": "Question",
                name: "When does student loan interest rate matter?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Interest rates primarily matter for higher earners who are likely to fully repay their loans, those considering voluntary overpayments, and for psychological reasons when seeing the balance grow. For most average earners whose loans will be written off, the interest rate has little practical financial impact.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <StudentLoanInterestRates />
            </div>
        </>
    )
}

export default StudentLoanInterestRatesPage