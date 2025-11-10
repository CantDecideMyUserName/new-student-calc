import PensionVsStudentLoanOverpayments from '@/modules/guides/pension-vs-student-loan-overpayments-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

 export const metadata: Metadata = {
    title: "Pension vs Student Loan Overpayments: Which is Better? UK Guide",
    description: "Should you overpay student loans or increase pension contributions? Compare tax relief, write-off likelihood, and salary sacrifice benefits for UK borrowers.",
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
        "pension contributions",
        "student loan overpayments",
        "salary sacrifice",
        "pension tax relief",
        "student loan write off",
        "compound interest",
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
        canonical: "https://studentloancalculator.uk/guides/pension-vs-student-loan-overpayments-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const PensionVsStudentLoanOverpaymentsPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Pension vs Student Loan Overpayments", item: "https://studentloancalculator.co.uk/guides/pension-vs-student-loan-overpayments-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Pension vs Student Loan Overpayments: Which is Better? UK Guide",
        description: "Should you overpay student loans or increase pension contributions? Compare tax relief, write-off likelihood, and salary sacrifice benefits for UK borrowers.",
        url: "https://studentloancalculator.co.uk/guides/pension-vs-student-loan-overpayments-uk",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/pension-vs-student-loan-overpayments-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/pension-vs-student-loan-overpayments-uk",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Should I overpay my student loan or increase pension contributions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For most UK borrowers, pension contributions are financially superior to student loan overpayments. Pensions provide immediate tax relief (25% for basic rate taxpayers, 67% for higher rate), compound growth over decades, and 75% of Plan 2 borrowers will have loans written off anyway. Salary sacrifice also reduces current student loan payments while building retirement wealth.",
                },
            },
            {
                "@type": "Question",
                name: "How does salary sacrifice affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Salary sacrifice reduces your gross salary before PAYE calculations, which directly reduces student loan deductions. For example, sacrificing £3,600 annually can save £324 per year in student loan payments for someone earning £35,000, while also providing tax relief and building pension wealth - a double benefit overpayments can't match.",
                },
            },
            {
                "@type": "Question",
                name: "What is the student loan write-off and how does it affect overpayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Student loans are automatically written off after 30 years (Plan 2), 40 years (Plan 5), or 25 years (Plan 1). Around 75% of Plan 2 borrowers will have some or all debt written off. This means overpayments often represent money you'll never get back, as you're voluntarily repaying debt that would have been forgiven anyway.",
                },
            },
            {
                "@type": "Question",
                name: "At what age should I prioritize pensions over student loan overpayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Under 30: Pensions win decisively due to 30+ years of compound growth and high write-off likelihood. Ages 30-40: Still favor pensions for most borrowers. Ages 40-50: Case by case, but pensions usually still win. Over 50: Pensions often win unless you're certain of full loan repayment and already maximizing pension contributions.",
                },
            },
            {
                "@type": "Question",
                name: "How much tax relief do I get on pension contributions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tax relief depends on your rate: Basic rate taxpayers (20%) get immediate 25% returns (£80 becomes £100), higher rate taxpayers (40%) get 67% returns (£60 becomes £100), and additional rate taxpayers (45%) get 82% returns (£55 becomes £100). This immediate government contribution far exceeds student loan interest rates.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <PensionVsStudentLoanOverpayments />
            </div>
        </>
    )
}

export default PensionVsStudentLoanOverpaymentsPage