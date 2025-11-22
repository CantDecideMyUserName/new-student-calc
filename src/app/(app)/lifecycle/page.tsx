import LifecyclePage from '@/modules/lifecycle';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Student Loan Lifecycle Guide: Pre-University to Retirement | 2025",
    description: "Complete student loan lifecycle guide covering every stage from choosing university through graduation, career, and retirement write-off.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan lifecycle",
        "university choice loans",
        "student loan journey",
        "loan repayment timeline",
        "graduation loans",
        "career progression student loans",
        "loan write-off",
        "foundation year costs",
        "gap year implications",
        "dropping out loans",
        "placement year funding",
        "first job repayment",
        "retirement loans",
        "student finance lifecycle",
        "40-year loan journey"
    ],
    creator: "Student Loan Calculator UK",
    publisher: "Student Loan Calculator UK",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://studentloancalculator.uk/lifecycle/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const LifecycleHubPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema]} />
            <div>
                <LifecyclePage />
            </div>
        </>
    )
}

export default LifecycleHubPage
