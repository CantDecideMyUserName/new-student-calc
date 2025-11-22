import DroppingOutLoanConsequences from '@/modules/lifecycle/dropping-out-loan-consequences';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dropping Out of University: Student Loan Consequences & Debt | 2025",
    description: "Complete guide to dropping out and student loan obligations. Partial degree debt, repayment without qualification, re-enrollment options, and alternatives.",
    keywords: ["dropping out student loans", "university dropout debt", "partial degree debt", "dropping out loan obligations", "re-enroll student finance", "student loan no degree"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/dropping-out-loan-consequences/" },
    robots: { index: true, follow: true },
};

const DroppingOutPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Dropping Out: Loan Consequences", item: "https://studentloancalculator.co.uk/lifecycle/dropping-out-loan-consequences" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Dropping Out: Student Loan Consequences and Repayment Obligations",
        url: "https://studentloancalculator.co.uk/lifecycle/dropping-out-loan-consequences",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/dropping-out-loan-consequences" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 3100,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><DroppingOutLoanConsequences /></div>
        </>
    )
}

export default DroppingOutPage
