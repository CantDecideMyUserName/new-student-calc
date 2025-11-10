import PartTimeWorkStudentLoans from '@/modules/guides/part-time-work-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Part-Time Work Student Loans UK: Threshold Calculations 2025/26",
    description: "How part-time work affects UK student loan repayments. Understand monthly threshold calculations, variable income impacts, and overpayment risks.",
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
        "part time work",
        "part-time employment",
        "variable hours",
        "zero hours contract",
        "term time only",
        "seasonal work",
        "flexible hours",
        "multiple jobs",
        "PAYE calculations",
        "monthly threshold",
        "annual threshold",
        "student loan overpayments",
        "refund claims",
        "BR tax code",
        "secondary employment",
        "P60 refunds",
        "HMRC refunds",
        "threshold crossing",
        "hours management",
        "freelance income",
        "combined income",
        "self assessment",
        "variable income",
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
        canonical: "https://studentloancalculator.uk/guides/part-time-work-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const PartTimeWorkStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Part-Time Work and Student Loans", item: "https://studentloancalculator.co.uk/guides/part-time-work-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Part-Time Work Student Loans UK: Threshold Calculations 2025/26",
        description: "How part-time work affects UK student loan repayments. Understand monthly threshold calculations, variable income impacts, and overpayment risks.",
        url: "https://studentloancalculator.co.uk/guides/part-time-work-student-loans-uk",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/part-time-work-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/part-time-work-student-loans-uk",
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
        wordCount: 5200,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Part-Time Employment",
                description: "Variable hours, zero-hours, and term-time employment arrangements"
            },
            {
                "@type": "Thing", 
                name: "PAYE System",
                description: "Pay As You Earn calculations for student loan deductions"
            },
            {
                "@type": "Thing",
                name: "Student Loan Thresholds",
                description: "Monthly and annual income thresholds for student loan repayments"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do part-time workers get lower student loan thresholds?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, there are no pro-rata thresholds for part-time workers. The same annual threshold (£27,295 for Plan 2) applies whether you work 20 hours or 40 hours weekly. Student loan repayments are based on total income, not hours worked. If you earn above the threshold through part-time work at high hourly rates, you still pay 9% on the excess.",
                },
            },
            {
                "@type": "Question",
                name: "Why do part-time workers with variable hours often overpay student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "PAYE calculates student loans monthly, treating each month independently. If you have variable hours and earn above the monthly threshold (£2,274.58 for Plan 2) in some months but below it in others, PAYE deducts from high-earning months but not low-earning months. If your total annual income is below the annual threshold, you've overpaid and can claim a refund.",
                },
            },
            {
                "@type": "Question",
                name: "How do term-time only contracts affect student loan deductions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Term-time contracts create systematic overpayment issues. You work ~39 weeks but get paid over 9 months, making monthly payments appear higher. For example, earning £24,000 over 39 weeks means £2,667 monthly during working months, triggering deductions. But annual income of £24,000 is below the £27,295 threshold, so you should pay zero and can claim refunds of £200-£400.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if I have multiple part-time jobs?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Multiple jobs create massive overpayment risks. Your main job applies the threshold normally, but secondary jobs often use BR (Basic Rate) tax codes that treat ALL income as above the threshold. For example, if Job A pays £1,500/month (below threshold, £0 deducted) and Job B pays £800/month with BR code (£72/month deducted), you overpay £836 annually on combined income that should only owe £27.",
                },
            },
            {
                "@type": "Question",
                name: "How do I claim refunds for part-time work overpayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Calculate (Annual income - £27,295) × 9% using your P60. If negative or less than what you paid, you've overpaid. Contact HMRC on 0300 200 3300 stating you're a part-time worker whose annual income was below threshold but PAYE deducted during high-earning months. Provide your P60 as evidence. Refunds typically take 6-8 weeks and range from £50-£500 for part-time workers.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <PartTimeWorkStudentLoans />
            </div>
        </>
    )
}

export default PartTimeWorkStudentLoansPage