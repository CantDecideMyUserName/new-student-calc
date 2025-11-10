import Link from "next/link";

import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Page Not Found - Student Loan Calculator UK",
    description: "The requested page could not be found. Browse our other guides on UK student loans.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "plan 2 calculator",
        "plan 5 calculator",
        "student finance",
        "loan repayments",
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
        canonical: "https://studentloancalculator.uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Page Not Found - Student Loan Calculator UK",
        description: "The requested page could not be found. Browse our other guides on UK student loans.",
        url: "https://studentloancalculator.uk/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Student Loan Calculator UK",
        description: "Calculate your UK student loan repayments with our free calculators.",
        images: ["https://studentloancalculator.uk/og-image.jpg"], // Update to production URL
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

export default function NotFound() {
    return (
        <main className="flex-grow">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Basic robots hint for crawlers. In the App Router, global
           robots are typically set in layout/metadata, but this is a
           harmless per-page fallback. */}
                <meta name="robots" content="index, follow" />

                <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold mb-4">Page not found</h1>

                        <div className="text-lg mb-8">
                            <p className="mb-4">
                                Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been
                                moved, deleted, or the URL might have been mistyped.
                            </p>
                            <p>You might want to check out our calculators or return to the homepage.</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                ← Back to Homepage
                            </Link>
                            <Link
                                href="/calculators/"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-600 hover:bg-blue-50"
                            >
                                Explore Calculators
                            </Link>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-xl font-semibold mb-4">Popular Resources</h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/calculators/plan-2-student-loan-calculator/"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Plan 2 Student Loan Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/calculators/plan-5-student-loan-calculator/"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Plan 5 Student Loan Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/guides/how-student-loans-work-uk/"
                                        className="text-blue-600 hover:underline"
                                    >
                                        How UK Student Loans Work
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faqs/" className="text-blue-600 hover:underline">
                                        Frequently Asked Questions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
}
