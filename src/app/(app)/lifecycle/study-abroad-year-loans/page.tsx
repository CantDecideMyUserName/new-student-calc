import StudyAbroadYearLoans from '@/modules/lifecycle/study-abroad-year-loans';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Study Abroad Year Student Loans: Erasmus+ Funding 2025",
    description: "Complete guide to student loan funding for year abroad programs. Reduced tuition fees, Erasmus+ grants, and international living costs.",
    keywords: ["study abroad student loans", "year abroad funding", "Erasmus grants UK", "exchange year loans", "study abroad costs"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/study-abroad-year-loans/" },
    robots: { index: true, follow: true },
};

const StudyAbroadPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Study Abroad Year Loans", item: "https://studentloancalculator.co.uk/lifecycle/study-abroad-year-loans" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Study Abroad Year Student Loans: Erasmus+ and Exchange Funding",
        url: "https://studentloancalculator.co.uk/lifecycle/study-abroad-year-loans",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/study-abroad-year-loans" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1600,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><StudyAbroadYearLoans /></div>
        </>
    )
}

export default StudyAbroadPage
