import React from 'react'

import type { Metadata } from "next";
import { JsonLd } from '@/modules/seo/json-ld';
import { WithContext, WebPage } from 'schema-dts';
import ContactPage from '@/modules/contact';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Contact | Student Loan Calculator UK | Student Loan Calculator UK",
    description:
        "Get in touch with the Student Loan Calculator UK team. We're here to help with questions about our calculators and student loan information.",
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
    alternates: { canonical: "/contact/" },
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
        title: "Contact | Student Loan Calculator UK",
        description:
            "Get in touch with the Student Loan Calculator UK team. We're here to help with questions about our calculators and student loan information.",
        images: [
            {
                url: "https://studentloancalculator.co.uk/images/og/contact-og.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Student Loan Calculator UK",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Calculator UK",
        description:
            "Calculate your UK student loan repayments with our free calculators.",
        images: ["https://studentloancalculator.co.uk/images/og/contact-og.jpg"],
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


const Contact = () => {
    const webPageLd: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Contact Student Loan Calculator UK",
        description:
            "Get in touch with the Student Loan Calculator UK team for questions about our calculators and student loan information.",
        url: "https://studentloancalculator.co.uk/contact",
        datePublished: "2025-05-09T05:42:41.293Z",
        dateModified: "2025-05-09T05:42:41.293Z",
        image: "https://studentloancalculator.co.uk/images/og/contact-og.jpg",
    };

    return (
        <>
            <JsonLd code={[webPageLd]} />
            <div>
                <ContactPage />
            </div>

        </>
    )
}

export default Contact