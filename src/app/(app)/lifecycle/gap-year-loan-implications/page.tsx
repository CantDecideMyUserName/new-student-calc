import GapYearLoanImplications from '@/modules/lifecycle/gap-year-loan-implications';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gap Year Student Loan Implications: Deferring University Entry | 2025",
    description: "Complete guide to gap years and student loans. Understand loan timing, work experience value, strategic savings, and financial trade-offs of deferring university entry.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "gap year student loans",
        "deferring university entry",
        "gap year loan timing",
        "student loan interest gap year",
        "gap year work experience value",
        "saving money gap year",
        "gap year vs direct entry",
        "deferred entry student finance",
        "gap year financial planning",
        "university deferral loans"
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
        canonical: "https://studentloancalculator.uk/lifecycle/gap-year-loan-implications/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const GapYearPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Gap Year Loan Implications", item: "https://studentloancalculator.co.uk/lifecycle/gap-year-loan-implications" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Gap Year Student Loan Implications: Deferring University Entry",
        description: "Understanding how gap years affect student loan timing, work experience value, and strategic financial planning before university.",
        url: "https://studentloancalculator.co.uk/lifecycle/gap-year-loan-implications",
        datePublished: "2025-11-22",
        dateModified: "2025-11-22",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/lifecycle/gap-year-loan-implications",
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
        wordCount: 3200,
        articleSection: "Student Loan Lifecycle",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Does taking a gap year increase my student loan debt?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, taking a gap year doesn't increase your total student loan debt. Your loan timeline shifts by one year—you start borrowing one year later and your write-off date moves forward one year. However, you also start your graduate career one year later, which means one fewer year of graduate earnings (approximately £25,000-£35,000 lost gross income). For most students under Plan 5 who won't fully repay their loans, this timing shift is financially neutral in terms of total repayment.",
                },
            },
            {
                "@type": "Question",
                name: "Should I take a gap year to save money for university?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "It depends on your circumstances. Working full-time during a gap year (while living at home) can yield £10,000-£15,000 in savings, which can reduce your need for maintenance loans or provide an emergency fund during university. However, this is only financially beneficial if you'll be a high earner who fully repays your loan. For moderate earners who'll reach write-off, reducing your loan by £10,000 has minimal impact on total repayment. The key question is whether the gap year work provides career-relevant experience that increases your graduate starting salary.",
                },
            },
            {
                "@type": "Question",
                name: "Does gap year work experience help with employment after graduation?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "High-value gap year work experience in your target industry can increase graduate starting salaries by £3,000-£5,000 and significantly improve employment prospects. Examples include internships in finance, software engineering roles, or industry placements. However, general retail or hospitality work doesn't meaningfully improve graduate outcomes compared to part-time work during university. The career benefit depends entirely on the relevance and quality of the work experience, not simply taking a gap year.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <GapYearLoanImplications />
            </div>
        </>
    )
}

export default GapYearPage
