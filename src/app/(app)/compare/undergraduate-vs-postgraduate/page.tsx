import UndergraduatevsPostgraduatePage from '@/modules/compare/undergraduate-vs-postgraduate';
import { JsonLd } from '@/modules/seo/json-ld';
import React from 'react'
import { BreadcrumbList, Article, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Undergraduate vs Postgraduate Loans - Comparison Guide | Student Loan Calculator UK",
    description:
        "Compare undergraduate and postgraduate student loans in the UK, including how they work together when you have both types.",
    applicationName: "Student Loan Calculator UK",
    keywords: [
        "student loan calculator",
        "UK student loan",
        "undergraduate vs postgraduate",
        "postgraduate loan calculator",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
    ],
    alternates: {
        canonical: "/compare/undergraduate-vs-postgraduate/",
    },
    authors: [{ name: "Student Loan Calculator UK Team" }],
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
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        type: "article",
        url: "https://studentloancalculator.uk/compare/undergraduate-vs-postgraduate/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        title: "Undergraduate vs Postgraduate Loans - Comparison Guide",
        description:
            "Compare undergraduate and postgraduate student loans in the UK, including how they work together when you have both types.",
        images: [
            {
                url: "https://studentloancalculator.uk/images/og/compare/undergraduate-vs-postgraduate.jpg",
                width: 1200,
                height: 630,
                alt: "Undergraduate vs Postgraduate Comparison",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@UKStudentCalc",
        title: "Undergraduate vs Postgraduate Loans - Comparison Guide",
        description:
            "Compare undergraduate and postgraduate student loans in the UK, including how they work together when you have both types.",
        images: [
            "https://studentloancalculator.uk/images/og/compare/undergraduate-vs-postgraduate.jpg",
        ],
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

const UndergraduatevsPostgradute = () => {
    const breadcrumbLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://studentloancalculator.co.uk/compare" },
            { "@type": "ListItem", position: 3, name: "Undergraduate vs Postgraduate", item: "https://studentloancalculator.co.uk/compare/undergraduate-vs-postgraduate" },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Undergraduate vs Postgraduate Loans - Comparison Guide",
        description:
            "Compare undergraduate and postgraduate UK student loans, including how thresholds, interest, write-off rules, and combined repayments work when you have both.",
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            logo: { "@type": "ImageObject", url: "https://studentloancalculator.co.uk/logo.png" },
        },
        url: "https://studentloancalculator.co.uk/compare/undergraduate-vs-postgraduate",
        datePublished: "2023-07-20",
        dateModified: "2025-01-10",
        image: "https://studentloancalculator.co.uk/images/og/compare/undergraduate-vs-postgraduate.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/compare/undergraduate-vs-postgraduate",
        },
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd]} />
            <div>
                <UndergraduatevsPostgraduatePage />
            </div>

        </>
    )
}

export default UndergraduatevsPostgradute