import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, WithContext, WebPage } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'
import RegionList from '@/modules/regions';


export const metadata: Metadata = {
    title: "Compare UK Student Loans by Region | England, Scotland, Wales & NI",
    description: "Compare regional student loan differences across the UK. Plan 2, Plan 4, Plan 5, SAAS, and Student Finance Wales explained with cross-border study guidance.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "uk student loan regions",
        "scotland student loans",
        "wales student finance",
        "northern ireland student loans",
        "english student loans",
        "saas loans",
        "plan 4 loans scotland",
        "cross-border student loans",
        "uk nations student finance",
        "student finance wales",
        "student finance ni",
        "regional loan differences",
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
        canonical: "https://studentloancalculator.uk/regions/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Compare UK Student Loans by Region | England, Scotland, Wales & NI",
        description: "Compare regional student loan differences across the UK. Plan 2, Plan 4, Plan 5, SAAS, and Student Finance Wales explained with cross-border study guidance.",
        url: "https://studentloancalculator.uk/regions/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        images: [
            {
                url: "https://studentloancalculator.uk/og-image-regions.jpg",
                width: 1200,
                height: 630,
                alt: "UK Regional Student Loan Differences",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UK Regional Student Loan Differences",
        description: "Compare student loan systems across England, Scotland, Wales, and Northern Ireland.",
        images: ["https://studentloancalculator.uk/og-image-regions.jpg"],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
    },
};


const RegionListPage = () => {
    const webPageSchema: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Compare UK Student Loans by Region | England, Scotland, Wales & NI",
        description: "Compare regional student loan differences across the UK. Plan 2, Plan 4, Plan 5, SAAS, and Student Finance Wales explained with cross-border study guidance.",
        url: "https://studentloancalculator.uk/regions",
        datePublished: "2025-01-15T10:00:00.000Z",
        dateModified: new Date().toISOString(),
        inLanguage: "en-GB",
        about: {
            "@type": "Thing",
            name: "UK Student Loans Regional Variations",
            description: "Regional differences in student loan administration, repayment thresholds, and loan plans across UK nations",
        },
        keywords: "Scotland SAAS, Wales Student Finance, Northern Ireland Student Finance NI, England SLC, Plan 4, Plan 2, Plan 5, cross-border student loans",
    };


    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://studentloancalculator.uk",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Regions",
                item: "https://studentloancalculator.uk/regions",
            },
        ],
    };


    return (
        <>
            <JsonLd code={[webPageSchema, breadcrumbSchema]} />
            <div>
                <RegionList />
            </div>
        </>
    )
}


export default RegionListPage




