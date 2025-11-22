import FirstJobRepaymentShock from '@/modules/lifecycle/first-job-repayment-shock';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "First Job Student Loan Repayment: When Deductions Begin 2025",
    description: "Complete guide to first job student loan deductions. April repayment start, Plan 5 threshold, payslip deductions, and graduate salary management.",
    keywords: ["first job student loan", "graduate loan repayments", "student loan deductions", "Plan 5 repayment start", "payslip student loan"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/first-job-repayment-shock/" },
    robots: { index: true, follow: true },
};

const FirstJobPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "First Job Repayment Shock", item: "https://studentloancalculator.co.uk/lifecycle/first-job-repayment-shock" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "First Job Repayment Shock: When Student Loan Deductions Begin",
        url: "https://studentloancalculator.co.uk/lifecycle/first-job-repayment-shock",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/first-job-repayment-shock" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 1500,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><FirstJobRepaymentShock /></div>
        </>
    )
}

export default FirstJobPage
