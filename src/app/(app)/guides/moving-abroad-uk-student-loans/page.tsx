import MovingAbroadStudentLoans from '@/modules/guides/moving-abroad-uk-student-loans'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Moving Abroad with UK Student Loans: Overseas Repayment Guide 2025/26",
    description: "Complete guide to UK student loan repayments when moving abroad. Notification requirements, overseas thresholds, and avoiding penalties.",
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
        "moving abroad",
        "overseas repayments",
        "student loans abroad",
        "SLC notification",
        "overseas thresholds",
        "international student loans",
        "expat student loans",
        "working abroad",
        "emigration",
        "student loan penalties",
        "country specific thresholds",
        "currency conversion",
        "overseas income assessment",
        "direct debit abroad",
        "returning to UK",
        "enforcement abroad",
        "overseas compliance",
        "notification requirements",
        "three months notice",
        "student loans company",
        "worldwide income",
        "exchange rates",
        "manual payments",
        "self employment abroad",
        "freelancing abroad",
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
        canonical: "https://studentloancalculator.uk/guides/moving-abroad-uk-student-loans/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const MovingAbroadStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Moving Abroad with Student Loans", item: "https://studentloancalculator.co.uk/guides/moving-abroad-uk-student-loans" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Moving Abroad with UK Student Loans: Overseas Repayment Guide 2025/26",
        description: "Complete guide to UK student loan repayments when moving abroad. Notification requirements, overseas thresholds, and avoiding penalties.",
        url: "https://studentloancalculator.co.uk/guides/moving-abroad-uk-student-loans",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/moving-abroad-uk-student-loans.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/moving-abroad-uk-student-loans",
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
        wordCount: 4900,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Overseas Student Loan Repayments",
                description: "System for repaying UK student loans while living and working abroad"
            },
            {
                "@type": "Thing", 
                name: "Student Loans Company",
                description: "UK government organization managing student loan repayments for overseas borrowers"
            },
            {
                "@type": "Thing",
                name: "International Tax Compliance",
                description: "Meeting UK student loan obligations while working in foreign countries"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do I need to notify the Student Loans Company before moving abroad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you're legally required to notify the SLC at least three months before leaving the UK to live or work abroad. Failure to notify can result in penalties up to £1,000 plus serious administrative problems. Contact them via your online account or call +44 141 243 3660 from abroad. You'll need to provide your departure date, destination country, contact details, and expected income.",
                },
            },
            {
                "@type": "Question",
                name: "How do overseas student loan thresholds differ from UK thresholds?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The SLC sets country-specific thresholds based on cost of living. Examples include: USA ~£30,000, Australia ~£27,000, Canada ~£26,000, UAE ~£31,000, Singapore ~£32,000, India ~£16,000, Thailand ~£15,000. Higher cost-of-living countries typically have higher thresholds, but these don't always reflect the reality of living costs, meaning you might pay more or less than you would in the UK on equivalent salaries.",
                },
            },
            {
                "@type": "Question",
                name: "How do I make student loan payments from abroad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You have two main options: Direct debit from a UK bank account (automatic monthly payments, no currency conversion fees, but requires maintaining UK banking) or manual payments via bank transfer/online payment (flexible timing, can adjust for income changes, but requires remembering obligations and may incur currency conversion fees). Most people with stable employment prefer direct debit for convenience.",
                },
            },
            {
                "@type": "Question",
                name: "What happens to my student loans if I don't pay while abroad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The SLC has limited enforcement abroad, but consequences include: continued interest accumulation, penalties up to £1,000, credit record damage, and massive arrears if you return to the UK. When you return, PAYE deductions restart plus you owe all accumulated unpaid amounts with interest. The SLC is improving international enforcement, so compliance now avoids future problems.",
                },
            },
            {
                "@type": "Question",
                name: "How does currency conversion affect my student loan calculations?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The SLC converts your overseas income to pounds sterling using their exchange rates (typically annual averages) to determine if you're above the threshold and calculate repayments. Exchange rate fluctuations can significantly impact what you owe - if the pound weakens against your currency, your sterling-equivalent income rises, increasing repayments. You typically pay in pounds, potentially facing conversion fees twice (income calculation and payment).",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <MovingAbroadStudentLoans />
            </div>
        </>
    )
}

export default MovingAbroadStudentLoansPage