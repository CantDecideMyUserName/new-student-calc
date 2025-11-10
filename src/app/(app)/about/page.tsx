import AboutPage from '@/modules/about';
import { JsonLd } from '@/modules/seo/json-ld';
import { WebPage, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title:
        "About Student Loan Calculator UK - Our Mission & Team | Student Loan Calculator UK",
    description:
        "Learn about Student Loan Calculator UK, our mission to help students understand their loans, and how our calculators work. Built by education policy experts.",
    applicationName: "Student Loan Calculator UK",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
    ],
    alternates: { canonical: "/about/" },
    authors: [{ name: "Student Loan Calculator UK Team" }],
    creator: "Student Loan Calculator UK",
    publisher: "Student Loan Calculator UK",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': "large",
            'max-snippet': -1,
        },
    },
    formatDetection: { telephone: false, address: false, email: false },
    openGraph: {
        type: "website",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        title: "About Student Loan Calculator UK - Our Mission & Team",
        description:
            "Learn about Student Loan Calculator UK, our mission to help students understand their loans, and how our calculators work. Built by education policy experts.",
        images: [
            {
                url: "https://studentloancalculator.co.uk/images/og/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "About Student Loan Calculator UK",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Calculator UK",
        description:
            "Calculate your UK student loan repayments with our free calculators.",
        images: ["https://studentloancalculator.co.uk/images/og/about-og.jpg"],
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

const AboutUs = () => {
    const webPageLd: WithContext<WebPage> = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "About Student Loan Calculator UK",
        description:
            "Learn about Student Loan Calculator UK, our mission to help students understand their loans, and how our calculators work.",
        url: "https://studentloancalculator.co.uk/about",
        datePublished: "2025-05-09T05:42:41.175Z",
        dateModified: "2025-05-09T05:42:41.175Z",
        image: "https://studentloancalculator.co.uk/images/og/about-og.jpg",
    };

    return (
        <>
            <JsonLd code={[webPageLd]} />
            <div>
                <AboutPage />
            </div>

        </>
    )
}

export default AboutUs