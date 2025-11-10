import Plan1vsPlan2Page from '@/modules/compare/plan-1-vs-plan-2';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import { Article, BreadcrumbList, WithContext } from 'schema-dts';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Plan 1 vs Plan 2 - UK Student Loan Comparison | Student Loan Calculator UK",
    description:
        "Compare Plan 1 and Plan 2 student loans. See repayment differences, thresholds, interest rates, and which plan applies to you.",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
    ],
    alternates: { canonical: "/compare/plan-1-vs-plan-2/" },
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
    openGraph: {
        title: "Plan 1 vs Plan 2 - UK Student Loan Comparison",
        description:
            "Compare Plan 1 and Plan 2 student loans. See repayment differences, thresholds, interest rates, and which plan applies to you.",
        url: "https://studentloancalculator.uk/compare/plan-1-vs-plan-2/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "article",
        images: [
            {
                url: "https://studentloancalculator.uk/images/og/compare/plan-1-vs-plan-2.jpg",
                width: 1200,
                height: 630,
                alt: "Plan 1 vs Plan 2 Student Loans Comparison",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@UKStudentCalc",
        title: "Plan 1 vs Plan 2 Student Loans: Which is Better?",
        description:
            "Compare repayment thresholds, interest rates, and total costs between Plan 1 and Plan 2 UK student loans",
        images: ["https://studentloancalculator.uk/images/og/compare/plan-1-vs-plan-2.jpg"],
    },
    other: {
        "format-detection": "telephone=no, address=no, email=no",
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
    },
};

const Plan1vsPlan2 = () => {
    const breadcrumbLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://studentloancalculator.co.uk/compare" },
            { "@type": "ListItem", position: 3, name: "Plan 1 vs Plan 2", item: "https://studentloancalculator.co.uk/compare/plan-1-vs-plan-2" },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Plan 1 vs Plan 2 Student Loans Comparison",
        description:
            "A detailed comparison of Plan 1 and Plan 2 student loans in the UK, highlighting key differences in repayment thresholds, interest rates, and write-off terms.",
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            logo: { "@type": "ImageObject", url: "https://studentloancalculator.co.uk/logo.png" },
        },
        url: "https://studentloancalculator.co.uk/compare/plan-1-vs-plan-2",
        datePublished: "2023-12-01",
        dateModified: "2023-12-01",
        image: "https://studentloancalculator.co.uk/images/og/compare/plan-1-vs-plan-2.jpg",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/compare/plan-1-vs-plan-2" },
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd]} />
            <div>
                <Plan1vsPlan2Page />
            </div>
        </>
    )
}

export default Plan1vsPlan2