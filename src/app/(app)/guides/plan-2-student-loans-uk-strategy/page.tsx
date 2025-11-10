import Plan2StudentLoansStrategy from '@/modules/guides/plan-2-student-loans-uk-strategy'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Plan 2 Student Loans UK: Strategic Repayment Guide 2025/26",
    description: "Complete Plan 2 student loan strategy for 2012-2023 starters. Understand write-off, overpayment decisions, and career planning with RPI+3% rates.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 2 student loans",
        "student finance",
        "loan repayments",
        "plan 2 strategy",
        "student loan overpayments",
        "plan 2 write off",
        "30 year write off",
        "RPI plus 3%",
        "plan 2 interest rates",
        "2012-2023 starters",
        "plan 2 threshold",
        "£27295 threshold",
        "student loan career decisions",
        "plan 2 vs plan 1",
        "plan 2 vs plan 5",
        "graduate tax",
        "student loan psychology",
        "salary sacrifice",
        "pension contributions",
        "opportunity cost",
        "marginal tax rates",
        "student loan balance growth",
        "high earners student loans",
        "when to overpay",
        "financial planning",
        "net worth calculation",
        "mortgage affordability",
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
        canonical: "https://studentloancalculator.uk/guides/plan-2-student-loans-uk-strategy/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const Plan2StudentLoansStrategyPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Plan 2 Student Loans Strategy", item: "https://studentloancalculator.co.uk/guides/plan-2-student-loans-uk-strategy" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Plan 2 Student Loans UK: Strategic Repayment Guide 2025/26",
        description: "Complete Plan 2 student loan strategy for 2012-2023 starters. Understand write-off, overpayment decisions, and career planning with RPI+3% rates.",
        url: "https://studentloancalculator.co.uk/guides/plan-2-student-loans-uk-strategy",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/plan-2-student-loans-uk-strategy.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/plan-2-student-loans-uk-strategy",
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
        wordCount: 5800,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Plan 2 Student Loans",
                description: "UK student loans for 2012-2023 university starters with RPI+3% interest and 30-year write-off"
            },
            {
                "@type": "Thing", 
                name: "Student Loan Strategy",
                description: "Financial planning and decision-making for Plan 2 borrowers regarding overpayments and career choices"
            },
            {
                "@type": "Thing",
                name: "Write-off System",
                description: "30-year loan forgiveness mechanism for Plan 2 student loans in the UK"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Should I overpay my Plan 2 student loan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For 95% of Plan 2 borrowers, overpayment is financially irrational. Most Plan 2 loans will be written off after 30 years, so overpaying means voluntarily repaying debt that would be forgiven. Money is better invested in pensions (25-67% immediate return through tax relief), ISAs, house deposits, or emergency funds. Only very high earners (£70,000+) with small balances (under £35,000) who are certain to repay in full should consider overpaying.",
                },
            },
            {
                "@type": "Question",
                name: "Why do most Plan 2 borrowers never repay their loans in full?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 2's high interest rates (RPI+3%, currently 6-7%) mean that unless you earn £60,000+ consistently, your loan balance grows or barely decreases despite payments. Research shows 75% of Plan 2 borrowers will have loans written off. For example, someone earning £30,000 pays £243 annually but accrues £1,575+ in interest, so their balance grows by £1,330 yearly despite making payments.",
                },
            },
            {
                "@type": "Question",
                name: "How should Plan 2 loans affect my career decisions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Don't avoid career progression due to student loan impact. Since most loans will be written off after 30 years, you're essentially paying 9% higher tax for that period regardless of total amount paid. Taking a £55,000 role over £35,000 to 'avoid higher student loan costs' is irrational - the higher salary provides substantially better financial position even after increased deductions. Focus on maximizing earnings and opportunities throughout your career.",
                },
            },
            {
                "@type": "Question",
                name: "What is the Plan 2 interest rate structure?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 2 interest rates are: RPI+3% while studying (maximum rate), then after graduation: RPI only on income up to £27,295, RPI + progressive addition (0% to 3%) on income £27,295-£49,130, and RPI+3% (maximum rate) on income above £49,130. Currently this means roughly 3-4% for low earners up to 6-7% for high earners. The progressive scale increases proportionally - at £38,213 you pay RPI+1.5%.",
                },
            },
            {
                "@type": "Question",
                name: "When are Plan 2 loans written off?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 2 loans are written off 30 years after the April you were first due to repay. For someone graduating in 2015, write-off is April 2045. For 2024 graduates, it's April 2054. At write-off, any remaining balance is completely forgiven with no tax implications and no impact on credit records. This 30-year timeline is your actual 'finish line' - focus on optimizing your financial position over this period rather than minimizing total repaid.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <Plan2StudentLoansStrategy />
            </div>
        </>
    )
}

export default Plan2StudentLoansStrategyPage