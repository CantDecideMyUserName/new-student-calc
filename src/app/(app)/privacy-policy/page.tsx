import React from 'react'

import type { Metadata } from "next";
import PrivacyPolicyPage from '@/modules/privacy-policy';
import { JsonLd } from '@/modules/seo/json-ld';
import { WithContext, WebPage } from 'schema-dts';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Privacy Policy | Student Loan Calculator UK | Student Loan Calculator UK",
    description:
        "Our privacy policy outlines how we collect, use, and protect your information when you use Student Loan Calculator UK.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    creator: "Student Loan Calculator UK",
    publisher: "Student Loan Calculator UK",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
    ],
    alternates: { canonical: "/privacy-policy/" },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    formatDetection: { telephone: false, address: false, email: false },
    openGraph: {
        type: "website",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        title: "Privacy Policy | Student Loan Calculator UK",
        description:
            "Our privacy policy outlines how we collect, use, and protect your information when you use Student Loan Calculator UK.",
        images: [
            {
                url: "https://studentloancalculator.co.uk/images/og/privacy-policy-og.jpg",
                width: 1200,
                height: 630,
                alt: "Privacy Policy - Student Loan Calculator UK",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Calculator UK",
        description:
            "Calculate your UK student loan repayments with our free calculators.",
        images: ["https://studentloancalculator.co.uk/images/og/privacy-policy-og.jpg"],
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


const PrivacyPolicy = () => {
    const webPageLd: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy - Student Loan Calculator UK",
        description:
            "Privacy policy for Student Loan Calculator UK, explaining data collection, cookies, and user rights under UK GDPR.",
        url: "https://studentloancalculator.co.uk/privacy-policy",
        datePublished: "2024-03-20",
        dateModified: "2024-03-20",
        image: "https://studentloancalculator.co.uk/images/og/privacy-policy-og.jpg",
    };

    return (
        <>
            <JsonLd code={[webPageLd]} />
            <div>
                <PrivacyPolicyPage />

            </div>
        </>

    )
}

export default PrivacyPolicy