import RepeatYearFunding from '@/modules/lifecycle/repeat-year-funding';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Repeat Year Student Loan Funding: Failed Year Eligibility 2025",
    description: "Complete guide to student loan funding for repeat years, resits,  and extra year eligibility limits after failing university years.",
    keywords: ["repeat year funding", "failed year student loans", "resit funding", "extra year eligibility", "student finance repeat year"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/repeat-year-funding/" },
    robots: { index: true, follow: true },
};

const RepeatYearPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Repeat Year Funding", item: "https://studentloancalculator.co.uk/lifecycle/repeat-year-funding" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Repeat Year Funding: Student Loan Eligibility for Failed Years",
        url: "https://studentloancalculator.co.uk/lifecycle/repeat-year-funding",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/repeat-year-funding" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1600,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><RepeatYearFunding /></div>
        </>
    )
}

export default RepeatYearPage
