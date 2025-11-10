import React from 'react'
import { Metadata } from 'next';
import RepaymentStartCalculator from '@/modules/calculator/repayment-start-date-calculator';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Repayment Start Date Calculator UK - When Do I Start Repaying?",
    description: "Calculate your student loan repayment start date based on your plan type and graduation year. All Plan 1, 2, 4, 5 and Postgraduate loans covered.",
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
        canonical: "https://studentloancalculator.uk/calculators/repayment-start-date-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Repayment Start Date Calculator UK - When Do I Start Repaying?",
        description: "Calculate your student loan repayment start date based on your plan type and graduation year. All Plan 1, 2, 4, 5 and Postgraduate loans covered.",
        url: "https://studentloancalculator.uk/calculators/repayment-start-date-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        images: [
            {
                url: "https://studentloancalculator.uk/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Repayment Start Date Calculator UK",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Repayment Start Date Calculator UK - When Do I Start Repaying?",
        description: "Calculate your student loan repayment start date based on your plan type and graduation year. All Plan 1, 2, 4, 5 and Postgraduate loans covered.",
        images: ["https://studentloancalculator.uk/og-image.jpg"],
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

const RepaymentStartDateCalculatorPage = () => {
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
                name: "Calculators",
                item: "https://studentloancalculator.uk/calculators",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Repayment Start Date Calculator",
                item: "https://studentloancalculator.uk/calculators/repayment-start-date-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Repayment Start Date Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/repayment-start-date-calculator",
        description: "Calculate when your UK student loan repayments begin based on course completion date, loan plan type (Plan 1, 2, 4, 5, Postgraduate), and study mode (full-time or part-time). Determine your exact repayment start date: the April after graduation for full-time students, the April 4 years after course start for part-time students on courses longer than 4 years, or April 2026 minimum for Plan 5 borrowers.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "When do I start repaying my student loan after graduation?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For full-time students on Plan 1, 2, 4, and Postgraduate loans, repayments begin the April after you finish or leave your course, but only if you're earning above your plan's threshold. For example, if you graduate in July 2025, repayments start April 6, 2026. Plan 5 borrowers (starting courses from August 2023) have a special rule: repayments cannot begin before April 2026 regardless of when you finish. You'll only make actual payments once your income exceeds your plan's threshold (Plan 1: £26,065, Plan 2: £28,470, Plan 4: £32,745, Plan 5: £25,000).",
                },
            },
            {
                "@type": "Question",
                name: "When do part-time students start repaying student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Part-time students start repaying the April after they finish or leave their course, OR the April four years after the course started if studying longer than 4 years—whichever comes first. For example, if you started a 6-year part-time course in September 2022, you'd start repaying in April 2026 (4 years after start) even though you're still studying until 2028. This 4-year rule prevents indefinite deferral of repayments. Once repayments begin, the same income thresholds apply as full-time graduates, and you'll only pay when earning above your plan's threshold.",
                },
            },
            {
                "@type": "Question",
                name: "What if I start earning above the threshold before my repayment start date?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You don't make any student loan repayments until your official repayment start date, even if you're earning well above the threshold. If you graduate in July 2025 and immediately start a job earning £35,000, you still don't begin repayments until April 6, 2026. During this grace period, interest continues to accrue on your loan balance at your plan's applicable rate, but no deductions are taken from your salary. Once April arrives, PAYE automatically starts deducting 9% of your income above the threshold (or 6% for Postgraduate loans) from your monthly pay.",
                },
            },
            {
                "@type": "Question",
                name: "Can I delay my student loan repayment start date?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you cannot delay your repayment start date beyond the official date (the April after finishing your course, or April 2026 for Plan 5, or 4 years after start for part-time). However, if your income is below the threshold on your repayment start date, you automatically make no payments through PAYE. If you're unemployed or earning below the threshold, repayments simply don't happen—no action needed. You can apply for deferment if living overseas. There's no option to request a delay if you're earning above the threshold; repayments are mandatory and automatic through PAYE or self-assessment.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <RepaymentStartCalculator/>
            </div>
        </>
    )
}

export default RepaymentStartDateCalculatorPage
