import ClearingLateApplicationLoans from '@/modules/lifecycle/clearing-late-application-loans';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clearing Student Loans: Late University Application Emergency Funding | 2025",
    description: "Complete guide to student loans through Clearing. Emergency funding, last-minute applications, accommodation costs, and rapid loan processing.",
    keywords: ["clearing student loans", "late application funding", "emergency student finance", "clearing accommodation costs", "last minute student loans", "clearing hardship funds"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/clearing-late-application-loans/" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
};

const ClearingLateApplicationPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Clearing: Late Application Loans", item: "https://studentloancalculator.co.uk/lifecycle/clearing-late-application-loans" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Clearing and Late Student Loan Applications: Emergency Funding Guide",
        url: "https://studentloancalculator.co.uk/lifecycle/clearing-late-application-loans",
        datePublished: "2025-11-22",
        dateModified: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/clearing-late-application-loans" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 2800,
        articleSection: "Student Loan Lifecycle",
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><ClearingLateApplicationLoans /></div>
        </>
    )
}

export default ClearingLateApplicationPage
