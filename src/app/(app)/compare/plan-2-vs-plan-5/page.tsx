import Plan2vsPlan5Page from '@/modules/compare/plan-2-vs-plan-5';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { WebPage, WithContext, BreadcrumbList } from 'schema-dts';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Plan 2 vs Plan 5 - UK Student Loan Comparison | Student Loan Calculator UK",
    description:
        "Compare Plan 2 and Plan 5 student loans. See repayment differences, thresholds, interest rates, and which plan applies to you.",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
    ],
    alternates: { canonical: "/compare/plan-2-vs-plan-5/" },
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
        title: "Plan 2 vs Plan 5 - UK Student Loan Comparison",
        description:
            "Compare Plan 2 and Plan 5 student loans. See repayment differences, thresholds, interest rates, and which plan applies to you.",
        url: "https://studentloancalculator.uk/compare/plan-2-vs-plan-5/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Calculator UK",
        description: "Calculate your UK student loan repayments with our free calculators.",
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

const Plan2vsPlan5 = () => {
    const breadcrumbLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://studentloancalculator.co.uk/compare" },
            { "@type": "ListItem", position: 3, name: "Plan 2 vs Plan 5", item: "https://studentloancalculator.co.uk/compare/plan-2-vs-plan-5" },
        ],
    };

    const pageLd: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Plan 2 vs Plan 5 Student Loans Comparison",
        description:
            "Comprehensive comparison of Plan 2 (2012-2023) and Plan 5 (2023 onwards) student loans, including repayment thresholds, interest rates, and long-term implications.",
        url: "https://studentloancalculator.co.uk/compare/plan-2-vs-plan-5",
        datePublished: "2025-05-09T05:42:41.096Z",
        dateModified: "2025-05-09T05:42:41.097Z",
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, pageLd]} />
            <div>
                <Plan2vsPlan5Page />
            </div>
        </>
    )
}

export default Plan2vsPlan5