import CompareListPage from '@/modules/compare'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, WithContext, WebPage } from 'schema-dts';
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Compare UK Student Loan Repayments | Student Loan Calculator UK",
    description:
        "Compare student loan repayments across all UK plans. See how much you'll pay on Plan 1, Plan 2, Plan 4, Plan 5, and Postgraduate loans.",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
    ],
    alternates: { canonical: "/compare/" },
    openGraph: {
        title: "Compare UK Student Loan Repayments",
        description:
            "Compare student loan repayments across all UK plans. See how much you'll pay on Plan 1, Plan 2, Plan 4, Plan 5, and Postgraduate loans.",
        url: "https://studentloancalculator.uk/compare/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Calculator UK",
        description: "Calculate your UK student loan repayments with our free calculators.",
    },
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
    other: {
        "format-detection": "telephone=no, address=no, email=no",
    },
}

const ComparePage = () => {
    const site = "https://studentloancalculator.uk";

    const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site}` },
            { "@type": "ListItem", position: 2, name: "Compare", item: `${site}/compare` },
        ],
    };

    const webPageJsonLd: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "UK Student Loan Plan Comparisons",
        description: "Side-by-side comparisons of different UK student loan plans and repayment options.",
        url: `${site}/compare`,
        datePublished: "2025-05-09T05:42:41.305Z",
        dateModified: "2025-05-09T05:42:41.305Z",
    };

    return (
        <>
            <JsonLd code={[breadcrumbJsonLd, webPageJsonLd]} />
            <div>
                <CompareListPage />
            </div>
        </>
    )
}

export default ComparePage