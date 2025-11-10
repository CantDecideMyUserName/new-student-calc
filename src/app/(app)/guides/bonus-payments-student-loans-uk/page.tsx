import BonusPaymentsStudentLoans from '@/modules/guides/bonus-payments-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Bonus Payments & Student Loans UK: Monthly Spike Guide 2025",
    description: " How bonuses affect UK student loan deductions. Understand monthly calculation spikes, cumulative codes, and avoid overpayments on annual bonuses.",
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
        canonical: "https://studentloancalculator.uk/guides/bonus-payments-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const BonusPaymentsStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Bonus Payments and Student Loans", item: "https://studentloancalculator.co.uk/guides/bonus-payments-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Bonus Payments & Student Loans UK: Monthly Spike Guide 2025",
        description: " How bonuses affect UK student loan deductions. Understand monthly calculation spikes, cumulative codes, and avoid overpayments on annual bonuses.",
        url: "https://studentloancalculator.co.uk/guides/bonus-payments-student-loans-uk",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/bonus-payments-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/bonus-payments-student-loans-uk",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the student loan repayment threshold?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The student loan repayment threshold is the minimum amount of income you must earn before you start repaying your student loan. For Plan 2 loans, the annual threshold is £28,470, which converts to £2,372.50 per month. If your income exceeds this threshold, you will repay 9% of the amount above the threshold.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <BonusPaymentsStudentLoans />
            </div>
        </>
    )
}

export default BonusPaymentsStudentLoansPage