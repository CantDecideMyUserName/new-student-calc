import React from 'react'
import { Metadata } from 'next';
import RegionalComparisonCalculatorPage from '@/modules/calculator/regional-national-comparison-calculator';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Regional vs National Student Loan Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your regional vs national student loan affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
        canonical: "https://studentloancalculator.uk/calculators/regional-national-comparison-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Regional vs National Student Loan Calculator UK - How Does It Affect My Loan?",
        description: "Find out how your regional vs national student loan affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
        url: "https://studentloancalculator.uk/calculators/regional-national-comparison-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Regional vs National Student Loan Calculator UK - How Does It Affect My Loan?",
        description: "Find out how your regional vs national student loan affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const RegionalNationalComparision = () => {
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
                name: "Regional vs National Comparison Calculator",
                item: "https://studentloancalculator.uk/calculators/regional-national-comparison-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Regional vs National Comparison Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/regional-national-comparison-calculator",
        description: "Compare UK student loan systems across England, Scotland, Wales, and Northern Ireland for 2025/26. Analyze regional differences in tuition fees (England/Wales: £9,535, Scotland: free for Scottish residents, Northern Ireland: £4,855), maintenance loan amounts, repayment plans (Plan 1, Plan 2, Plan 4), thresholds, write-off periods, and total lifetime repayment costs based on your home region and study location.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What are the main differences between student loans in England, Scotland, Wales, and Northern Ireland?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "England charges £9,535 tuition (Plan 2/5 loans, £28,470 threshold, 30-40 year write-off), Scotland offers free tuition for Scottish students but Plan 4 loans for living costs (£32,745 threshold, 30 year write-off), Wales charges £9,535 tuition with the most generous maintenance support (Plan 2), and Northern Ireland charges £4,855 in-region or £9,535 elsewhere (Plan 1, £26,065 threshold, 25 year write-off). Your home region determines your funding, not where you study. England has highest fees and unit-of-resource, Scotland has free tuition but lowest per-student funding and caps on places.",
                },
            },
            {
                "@type": "Question",
                name: "Do Scottish students pay tuition fees if they study in England?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Scottish students studying in England, Wales, or Northern Ireland pay full tuition fees of £9,535/year and take out loans through SAAS (Student Awards Agency Scotland) under Plan 4 repayment terms. Only Scottish students studying in Scotland receive free tuition from SAAS with no repayment required. Scottish students studying elsewhere also receive lower maintenance loans (£11,400 maximum) compared to English students (£10,544) or Welsh students (£12,345) studying in the same location, creating financial disadvantages for Scottish students choosing to study outside Scotland.",
                },
            },
            {
                "@type": "Question",
                name: "Which UK region has the best student loan terms?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Northern Ireland offers the lowest tuition fees at £4,855 in-region with Plan 1 repayments (25-year write-off, £26,065 threshold), making it most affordable for students staying in Northern Ireland. Scotland provides free tuition for Scottish residents but has regressive loan systems where low-income students graduate with highest debts due to lack of grants. Wales offers the most generous maintenance support with grants and loans combined, though tuition is £9,535. England has highest fees but also highest per-student funding and 30-40 year write-offs meaning many never repay fully. The 'best' depends on your income trajectory—high earners benefit from Northern Ireland, average earners from England's write-offs.",
                },
            },
            {
                "@type": "Question",
                name: "How do repayment thresholds differ across UK regions for 2025/26?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "England Plan 2: £28,470 (9% repayment), Plan 5: £25,000 (9%), Scotland Plan 4: £32,745 (9%), Wales Plan 2: £28,470 (9%), Northern Ireland Plan 1: £26,065 (9%). Scottish graduates on Plan 4 start repaying at the highest threshold, meaning lower monthly payments initially but potentially longer repayment periods. Northern Ireland Plan 1 has a lower threshold but also the shortest write-off period (25 years). England's Plan 5 has the lowest threshold (£25,000) with longest write-off (40 years), designed so more graduates repay fully but lower earners benefit from eventual write-off.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <RegionalComparisonCalculatorPage />
            </div>
        </>
    )
}

export default RegionalNationalComparision
