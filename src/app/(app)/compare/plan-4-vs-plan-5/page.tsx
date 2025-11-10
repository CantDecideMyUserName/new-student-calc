import Plan4vsPlan5Page from '@/modules/compare/plan-4-vs-plan-5';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import { Article, BreadcrumbList, WithContext } from 'schema-dts';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Plan 4 vs Plan 5 Student Loans Comparison UK | Student Loan Calculator UK",
    description:
        "Compare Plan 4 (Scottish) and Plan 5 (English post-2023) student loans side by side. See differences in thresholds, interest rates, and repayment periods.",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 4",
        "plan 5",
        "student finance",
        "loan repayments",
    ],
    alternates: { canonical: "/compare/plan-4-vs-plan-5/" },
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
        title: "Plan 4 vs Plan 5 Student Loans - UK Comparison Guide",
        description:
            "Complete comparison of Plan 4 (Scottish) and Plan 5 (English post-2023) student loans. Understand which plan offers better value based on your circumstances.",
        url: "https://studentloancalculator.uk/compare/plan-4-vs-plan-5/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "article",
        images: [
            {
                url: "https://studentloancalculator.co.uk/images/compare/plan-4-vs-plan-5.jpg",
                width: 1200,
                height: 630,
                alt: "Plan 4 vs Plan 5 comparison",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Plan 4 vs Plan 5 Student Loans - UK Comparison",
        description:
            "Compare thresholds, interest, and write-off periods between Plan 4 and Plan 5 student loans.",
        images: ["https://studentloancalculator.co.uk/images/compare/plan-4-vs-plan-5.jpg"],
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

const Plan4vsPlan5 = () => {
    const breadcrumbLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://studentloancalculator.co.uk/compare" },
            { "@type": "ListItem", position: 3, name: "Plan 4 vs Plan 5", item: "https://studentloancalculator.co.uk/compare/plan-4-vs-plan-5" },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Plan 4 vs Plan 5 Student Loans - Complete Comparison",
        description:
            "Comprehensive comparison of Scottish Plan 4 and English/Welsh Plan 5 student loans, including repayment thresholds, interest rates, and write-off periods.",
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            logo: { "@type": "ImageObject", url: "https://studentloancalculator.co.uk/logo.png" },
        },
        url: "https://studentloancalculator.co.uk/compare/plan-4-vs-plan-5",
        datePublished: "2023-09-18",
        dateModified: "2023-12-05",
        image: "https://studentloancalculator.co.uk/images/compare/plan-4-vs-plan-5.jpg",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/compare/plan-4-vs-plan-5" },
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd]} />
            <div>
                <Plan4vsPlan5Page />
            </div>
        </>
    )
}

export default Plan4vsPlan5