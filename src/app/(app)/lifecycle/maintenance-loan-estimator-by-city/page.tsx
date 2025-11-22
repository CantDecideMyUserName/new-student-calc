import MaintenanceLoanEstimatorByCity from '@/modules/lifecycle/maintenance-loan-estimator-by-city';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Maintenance Loan by City: University Living Costs Comparison 2025",
    description: "Complete city-by-city analysis of whether maintenance loans cover rent and living expenses. Compare London, Manchester, Birmingham, and affordable university cities.",
    keywords: ["maintenance loan by city", "student living costs UK", "university accommodation costs", "London student costs", "maintenance loan adequacy", "cheapest university cities"],
    alternates: { canonical: "https://studentloancalculator.uk/lifecycle/maintenance-loan-estimator-by-city/" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const MaintenanceLoanByCityPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Maintenance Loan by City", item: "https://studentloancalculator.co.uk/lifecycle/maintenance-loan-estimator-by-city" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Maintenance Loan Estimator by City: Rent vs Loan Adequacy",
        url: "https://studentloancalculator.co.uk/lifecycle/maintenance-loan-estimator-by-city",
        datePublished: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/maintenance-loan-estimator-by-city" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK" },
        wordCount: 2600,
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema]} />
            <div><MaintenanceLoanEstimatorByCity /></div>
        </>
    )
}

export default MaintenanceLoanByCityPage
