import Plan5StudentLoansOptimization from '@/modules/guides/plan-5-student-loans-uk-optimization'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Plan 5 Student Loans UK: Optimization Strategy 2025/26",
    description: "Strategic guide for Plan 5 student loans (post-2023 starters). RPI-only rates, 40-year terms, and when overpayment makes sense.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 5 calculator",
        "plan 5 student loans",
        "student finance",
        "loan repayments",
        "plan 5 strategy",
        "plan 5 optimization",
        "post 2023 starters",
        "RPI only interest",
        "40 year write off",
        "£25000 threshold",
        "plan 5 vs plan 2",
        "plan 5 overpayments",
        "2023 university starters",
        "plan 5 interest rates",
        "lower threshold impact",
        "longer repayment period",
        "high earners plan 5",
        "middle income plan 5",
        "plan 5 career decisions",
        "early career plan 5",
        "mid career optimization",
        "pension vs overpayment",
        "salary sacrifice plan 5",
        "graduation year 2024",
        "write off age 62",
        "plan 5 benefits",
        "plan 5 disadvantages",
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
        canonical: "https://studentloancalculator.uk/guides/plan-5-student-loans-uk-optimization/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const Plan5StudentLoansOptimizationPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Plan 5 Student Loans Optimization", item: "https://studentloancalculator.co.uk/guides/plan-5-student-loans-uk-optimization" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Plan 5 Student Loans UK: Optimization Strategy 2025/26",
        description: "Strategic guide for Plan 5 student loans (post-2023 starters). RPI-only rates, 40-year terms, and when overpayment makes sense.",
        url: "https://studentloancalculator.co.uk/guides/plan-5-student-loans-uk-optimization",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/plan-5-student-loans-uk-optimization.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/plan-5-student-loans-uk-optimization",
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
        wordCount: 6200,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Plan 5 Student Loans",
                description: "UK student loans for post-2023 university starters with RPI-only interest and 40-year write-off"
            },
            {
                "@type": "Thing", 
                name: "Student Loan Optimization",
                description: "Strategic financial planning for Plan 5 borrowers regarding overpayments and career decisions"
            },
            {
                "@type": "Thing",
                name: "RPI Interest Rates",
                description: "Retail Price Index only interest charging on Plan 5 student loans without additional percentage"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How does Plan 5 differ from Plan 2 student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 5 (post-2023 starters) has three key differences from Plan 2: Lower threshold (£25,000 vs £27,295), dramatically lower interest (RPI only vs RPI+3%), and longer write-off period (40 years vs 30 years). This means Plan 5 borrowers start paying earlier but at lower interest rates, and continue paying for 10 additional years. High earners benefit from lower interest, while moderate earners pay more due to the longer repayment period.",
                },
            },
            {
                "@type": "Question",
                name: "Should I overpay my Plan 5 student loan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 5 makes overpayment slightly more reasonable than Plan 2 due to lower interest (RPI only, ~3.5%), but it's still usually beaten by pension contributions. Overpayment might make sense for mid-high earners (£45,000-£65,000) certain to repay in full within 20-25 years, or those with small balances under £25,000. For most borrowers expecting write-off after 40 years, overpayment wastes money that could be invested elsewhere.",
                },
            },
            {
                "@type": "Question",
                name: "Who benefits from Plan 5 compared to Plan 2?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 5 benefits high earners (£60,000+) who would repay in full anyway - they save significantly due to lower interest rates (example: high earner saves £8,000+ total). Plan 5 is worse for low-to-moderate earners (£28,000-£45,000) who would have had Plan 2 written off - they pay more due to the longer 40-year repayment period and lower threshold (example: teacher pays £14,000 more over career). Upper-middle earners around £50,000-£60,000 see roughly equivalent outcomes.",
                },
            },
            {
                "@type": "Question",
                name: "How does the lower £25,000 threshold affect Plan 5 borrowers?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The £25,000 threshold means Plan 5 borrowers start paying £206-£207 more annually than Plan 2 borrowers at every income level. They begin repayments 2-3 years earlier in their careers when money is tightest. For example, a graduate with typical salary progression pays £562.50 more in their first five years - money that could have gone to emergency funds, house deposits, or early pension contributions when compound growth has maximum effect.",
                },
            },
            {
                "@type": "Question",
                name: "When are Plan 5 loans written off and how does this affect retirement planning?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 5 loans are written off 40 years after first becoming due to repay. A 2024 graduate pays until April 2064 (age 62 if graduated at 22), compared to Plan 2's 30-year write-off at age 52. This means Plan 5 borrowers pay student loans into early retirement, affecting retirement planning and career transitions. The extra 10 years of payments costs approximately £13,500 for someone earning £40,000 during that period, money that Plan 2 borrowers don't pay.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <Plan5StudentLoansOptimization />
            </div>
        </>
    )
}

export default Plan5StudentLoansOptimizationPage