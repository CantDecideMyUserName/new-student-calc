import Plan2vsPlan4Page from '@/modules/compare/plan-2-vs-plan-4';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import { Article, BreadcrumbList, WithContext } from 'schema-dts';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Plan 2 vs Plan 4 - UK Student Loan Comparison | Student Loan Calculator UK",
    description:
        "Compare Plan 2 undergraduate and Plan 4 postgraduate student loans. See repayment differences, combined repayment calculations, thresholds, and interest rates.",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 4 calculator",
        "postgraduate loan",
        "student finance",
        "loan repayments",
        "combined repayment",
        "undergraduate vs postgraduate loan",
    ],
    alternates: { canonical: "/compare/plan-2-vs-plan-4/" },
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
        title: "Plan 2 vs Plan 4 - UK Student Loan Comparison",
        description:
            "Compare Plan 2 undergraduate and Plan 4 postgraduate student loans. Understand combined repayments, thresholds, and rates for both loan types.",
        url: "https://studentloancalculator.uk/compare/plan-2-vs-plan-4/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "article",
        images: [
            {
                url: "https://studentloancalculator.uk/images/og/compare/plan-2-vs-plan-4.jpg",
                width: 1200,
                height: 630,
                alt: "Plan 2 vs Plan 4 Student Loans Comparison",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@UKStudentCalc",
        title: "Plan 2 vs Plan 4 Student Loans: Undergraduate vs Postgraduate",
        description:
            "Compare Plan 2 undergraduate and Plan 4 postgraduate loans. See combined repayment rates, thresholds, and total costs.",
        images: ["https://studentloancalculator.uk/images/og/compare/plan-2-vs-plan-4.jpg"],
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

const Plan2vsPlan4 = () => {
    const breadcrumbLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.uk" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://studentloancalculator.uk/compare" },
            { "@type": "ListItem", position: 3, name: "Plan 2 vs Plan 4", item: "https://studentloancalculator.uk/compare/plan-2-vs-plan-4" },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Plan 2 vs Plan 4 Student Loans Comparison",
        description:
            "A detailed comparison of Plan 2 undergraduate and Plan 4 postgraduate student loans in the UK, highlighting key differences in repayment thresholds, interest rates, combined repayments, and write-off terms.",
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            logo: { "@type": "ImageObject", url: "https://studentloancalculator.uk/logo.png" },
        },
        url: "https://studentloancalculator.uk/compare/plan-2-vs-plan-4",
        datePublished: "2024-01-15",
        dateModified: "2024-01-15",
        image: "https://studentloancalculator.uk/images/og/compare/plan-2-vs-plan-4.jpg",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.uk/compare/plan-2-vs-plan-4" },
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd]} />
            <div>
                <Plan2vsPlan4Page />
            </div>
        </>
    )
}

export default Plan2vsPlan4

