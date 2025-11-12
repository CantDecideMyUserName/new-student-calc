import RepaymentThresholdsGuide from '@/modules/guides/repayment-thresholds'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "UK Student Loan Repayment Thresholds 2025/26 - Complete Guide",
    description: "Complete guide to UK student loan repayment thresholds for 2025/26. Learn when you start repaying for Plan 1, 2, 4, 5, and Postgraduate loans.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "repayment threshold",
        "plan 1 threshold",
        "plan 2 threshold",
        "plan 4 threshold",
        "plan 5 threshold",
        "postgraduate loan threshold",
        "student finance",
        "loan repayments",
        "£24990 threshold",
        "£27295 threshold",
        "£31395 threshold",
        "£25000 threshold",
        "£21000 threshold",
        "when do I start paying",
        "repayment threshold 2025",
        "repayment threshold 2026",
        "monthly threshold",
        "weekly threshold",
        "annual threshold",
        "threshold changes",
        "RPI increase",
        "frozen threshold",
        "multiple jobs threshold",
        "self employment threshold",
        "PAYE threshold",
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
        canonical: "https://studentloancalculator.uk/guides/repayment-thresholds/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const RepaymentThresholdsGuidePage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Repayment Thresholds", item: "https://studentloancalculator.co.uk/guides/repayment-thresholds" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "UK Student Loan Repayment Thresholds 2025/26 - Complete Guide",
        description: "Comprehensive guide to UK student loan repayment thresholds for 2025/26. Learn when you start repaying for Plan 1, 2, 4, 5, and Postgraduate loans with detailed examples.",
        url: "https://studentloancalculator.co.uk/guides/repayment-thresholds",
        datePublished: "2023-10-15",
        dateModified: "2024-12-20",
        image: "https://studentloancalculator.co.uk/images/guides/repayment-thresholds.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/repayment-thresholds",
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
        wordCount: 4500,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Student Loan Repayment Thresholds",
                description: "Income levels at which UK student loan repayments begin for different loan plans"
            },
            {
                "@type": "Thing",
                name: "PAYE Deductions",
                description: "How student loan repayments are automatically deducted through Pay As You Earn system"
            },
            {
                "@type": "Thing",
                name: "Student Loan Repayment Rates",
                description: "Percentage of income above threshold that must be repaid for different loan plans"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What are the UK student loan repayment thresholds for 2025/26?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For 2025/26: Plan 1 threshold is £24,990, Plan 2 is £27,295, Plan 4 is £31,395, Plan 5 is £25,000, and Postgraduate Loan is £21,000. You only start repaying once your annual income exceeds these amounts. Repayment rates are 9% for all undergraduate plans and 6% for Postgraduate Loans, calculated only on income above the threshold.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if I earn below the repayment threshold?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you earn below your loan plan's repayment threshold, you make no repayments at all. Interest continues to accrue on your loan balance, but there's no penalty, no negative impact on your credit score, and no need to contact anyone. The system handles this automatically through your employer or Self Assessment. Your loan will eventually be written off after the designated period (25-40 years depending on your plan).",
                },
            },
            {
                "@type": "Question",
                name: "How do repayment thresholds work with multiple jobs?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Each employer assesses your income separately for student loan purposes. If you have two part-time jobs each paying £15,000 (total £30,000), neither employer might deduct repayments if each job is below the threshold. However, your total income exceeds the threshold, so you should contact the Student Loans Company to arrange payment on the amount above the threshold. This prevents arrears building up that you'll owe later.",
                },
            },
            {
                "@type": "Question",
                name: "Do student loan repayment thresholds increase each year?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Thresholds typically increase annually but the method varies: Plan 1 and Plan 4 increase with RPI inflation. Plan 2 was frozen at £27,295 from 2021-2025 and is expected to resume increasing. Plan 5 increases with average earnings (faster than RPI). The Postgraduate threshold has remained at £21,000 since 2016 with no announced increases. Always check the latest figures from the Student Loans Company as government policy can change thresholds.",
                },
            },
            {
                "@type": "Question",
                name: "What income counts toward the student loan repayment threshold?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your repayment threshold is based on total income before tax, including: salary and wages, self-employment profits, pension income, rental income from property, interest from savings (except ISAs), and dividend income from investments. Benefits such as Universal Credit, Housing Benefit, and Child Benefit are NOT included in repayment calculations. Salary sacrifice for pensions reduces your income for student loan purposes.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <RepaymentThresholdsGuide />
            </div>
        </>
    )
}

export default RepaymentThresholdsGuidePage