import RetirementOutstandingLoans from '@/modules/lifecycle/retirement-outstanding-loans';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Retirement Student Loan Write-Off: Outstanding Balances 2025",
    description: "Complete guide to student loan write-off at retirement. 40-year cancellation, outstanding balances, and pension freedom from loan deductions.",
    keywords: ["retirement student loan", "student loan write-off retirement", "40-year write-off", "pension student loan deductions", "outstanding student loan retirement"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/retirement-outstanding-loans/" },
    robots: { index: true, follow: true },
};

const RetirementPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Retirement: Outstanding Loans", item: "https://studentloancalculator.co.uk/lifecycle/retirement-outstanding-loans" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Retirement with Outstanding Student Loans: 40-Year Write-Off",
        url: "https://studentloancalculator.co.uk/lifecycle/retirement-outstanding-loans",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/retirement-outstanding-loans" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1400,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><RetirementOutstandingLoans /></div>
        </>
    )
}

export default RetirementPage
