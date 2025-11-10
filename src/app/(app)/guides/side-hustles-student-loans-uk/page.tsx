import SideHustlesStudentLoans from '@/modules/guides/side-hustles-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Side Hustles & Student Loans UK: Self-Employment Impact 2025/26",
    description: "How side hustles affect UK student loan repayments. Calculate obligations on freelance income, understand Self Assessment requirements, and track expenses.",
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
        "side hustle student loans",
        "self employment student loans",
        "freelance student loans",
        "trading allowance",
        "self assessment student loans",
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
        canonical: "https://studentloancalculator.uk/guides/side-hustles-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const SideHustlesStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Side Hustles and Student Loans", item: "https://studentloancalculator.co.uk/guides/side-hustles-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Side Hustles & Student Loans UK: Self-Employment Impact 2025/26",
        description: "How side hustles affect UK student loan repayments. Calculate obligations on freelance income, understand Self Assessment requirements, and track expenses.",
        url: "https://studentloancalculator.co.uk/guides/side-hustles-student-loans-uk",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/side-hustles-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/side-hustles-student-loans-uk",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do I need to pay student loans on side hustle income?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, if your total income from all sources (employment, self-employment, rental, etc.) exceeds your student loan threshold. For Plan 2 loans, if your combined income exceeds £27,295 annually, you owe 9% on the amount above the threshold. Side hustle income gets added to your employment income to determine your total liability.",
                },
            },
            {
                "@type": "Question",
                name: "What is the £1,000 trading allowance for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The trading allowance exempts up to £1,000 of self-employment income from Self Assessment reporting requirements. If your side hustle income is £1,000 or less, you can claim this allowance and avoid registering for Self Assessment, which effectively means no student loan obligations on that income.",
                },
            },
            {
                "@type": "Question",
                name: "When do I need to register for Self Assessment with a side hustle?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You must register for Self Assessment by 5 October following the tax year if your self-employment income exceeds £1,000 (after trading allowance). For the 2025/26 tax year, you must register by 5 October 2026 and submit your return by 31 January 2027.",
                },
            },
            {
                "@type": "Question",
                name: "How much should I set aside from side hustle income for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Set aside at least 9% immediately for student loans, but consider saving 30-40% of all self-employment income to cover student loans, income tax, and National Insurance. This ensures you have enough when your Self Assessment bill arrives in January.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <SideHustlesStudentLoans />
            </div>
        </>
    )
}

export default SideHustlesStudentLoansPage