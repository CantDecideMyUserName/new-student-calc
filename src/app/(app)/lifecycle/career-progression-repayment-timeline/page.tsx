import CareerProgressionRepaymentTimeline from '@/modules/lifecycle/career-progression-repayment-timeline';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Career Progression Student Loan Repayment: Salary Growth Timeline 2025",
    description: "How career progression affects student loan repayment. Salary growth impact, full repayment timelines, and write-off vs clearance scenarios.",
    keywords: ["career progression student loan", "salary growth repayment", "student loan repayment timeline", "high earner student loan"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/career-progression-repayment-timeline/" },
    robots: { index: true, follow: true },
};

const CareerProgressionPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Career Progression Repayment", item: "https://studentloancalculator.co.uk/lifecycle/career-progression-repayment-timeline" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Career Progression and Student Loan Repayment Timeline",
        url: "https://studentloancalculator.co.uk/lifecycle/career-progression-repayment-timeline",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/career-progression-repayment-timeline" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1500,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><CareerProgressionRepaymentTimeline /></div>
        </>
    )
}

export default CareerProgressionPage
