import ChangingCourseLoanAdjustments from '@/modules/lifecycle/changing-course-loan-adjustments';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Changing Course: Student Loan Adjustments & Funding 2025",
    description: "Guide to switching university courses and student loan implications. Funding continuation, transfer process, and repeat year eligibility.",
    keywords: ["changing course student loans", "switching degrees funding", "course transfer loans", "changing university course", "student finance course change"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/changing-course-loan-adjustments/" },
    robots: { index: true, follow: true },
};

const ChangingCoursePage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Changing Course: Loan Adjustments", item: "https://studentloancalculator.co.uk/lifecycle/changing-course-loan-adjustments" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Changing Course: Student Loan Adjustments and Funding Implications",
        url: "https://studentloancalculator.co.uk/lifecycle/changing-course-loan-adjustments",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/changing-course-loan-adjustments" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1800,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><ChangingCourseLoanAdjustments /></div>
        </>
    )
}

export default ChangingCoursePage
