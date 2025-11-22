import DeathLoanCancellation from '@/modules/lifecycle/death-loan-cancellation';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Death Student Loan Cancellation: No Estate Recovery 2025",
    description: "Complete guide to student loan cancellation upon death. Automatic write-off, no estate liability, and family protection from inherited debt.",
    keywords: ["death student loan cancellation", "student loan estate recovery", "student loan death write-off", "inherited student loan debt", "student loan family liability"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/death-loan-cancellation/" },
    robots: { index: true, follow: true },
};

const DeathPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Death: Loan Cancellation", item: "https://studentloancalculator.co.uk/lifecycle/death-loan-cancellation" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Death and Student Loan Cancellation: No Estate Liability",
        url: "https://studentloancalculator.co.uk/lifecycle/death-loan-cancellation",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/death-loan-cancellation" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1300,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><DeathLoanCancellation /></div>
        </>
    )
}

export default DeathPage
