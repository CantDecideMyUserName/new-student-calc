import PlacementYearLoanImpact from '@/modules/lifecycle/placement-year-loan-impact';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Placement Year Student Loans: Sandwich Year Funding 2025",
    description: "Guide to placement year student loans, reduced tuition fees, earning during work placement, and financial advantages of sandwich years.",
    keywords: ["placement year student loans", "sandwich year funding", "placement year tuition fees", "work placement loans", "industrial placement funding"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/placement-year-loan-impact/" },
    robots: { index: true, follow: true },
};

const PlacementYearPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Placement Year Loan Impact", item: "https://studentloancalculator.co.uk/lifecycle/placement-year-loan-impact" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Placement Year Student Loan Impact: Working While Studying",
        url: "https://studentloancalculator.co.uk/lifecycle/placement-year-loan-impact",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/placement-year-loan-impact" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1600,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><PlacementYearLoanImpact /></div>
        </>
    )
}

export default PlacementYearPage
