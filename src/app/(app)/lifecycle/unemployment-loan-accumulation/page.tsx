import UnemploymentLoanAccumulation from '@/modules/lifecycle/unemployment-loan-accumulation';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Unemployment Student Loan: Interest Accumulation & Zero Repayments 2025",
    description: "Guide to student loans during unemployment. Zero repayment obligation, RPI interest accumulation, and long-term debt impact.",
    keywords: ["unemployment student loan", "student loan no income", "student loan interest unemployment", "zero repayments student loan"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/unemployment-loan-accumulation/" },
    robots: { index: true, follow: true },
};

const UnemploymentPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Unemployment: Loan Accumulation", item: "https://studentloancalculator.co.uk/lifecycle/unemployment-loan-accumulation" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Unemployment and Student Loan Accumulation: Interest Without Repayments",
        url: "https://studentloancalculator.co.uk/lifecycle/unemployment-loan-accumulation",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/unemployment-loan-accumulation" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1500,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><UnemploymentLoanAccumulation /></div>
        </>
    )
}

export default UnemploymentPage
