import MultipleJobsCalculator from '@/modules/calculator/new/multiple-jobs-side-income-calculator'
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
    title: "Multiple Jobs & Side Income Student Loan Calculator UK - Two Jobs",
    description: "Calculate student loan repayments when you have multiple jobs or side income in the UK. Understand how PAYE treats separate jobs and when you need Self Assessment.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "multiple jobs student loan",
        "two jobs student loan UK",
        "side income student loan",
        "part time jobs student loan",
        "combined income student loan",
        "second job student loan",
        "freelance student loan repayment",
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
        canonical: "https://studentloancalculator.uk/calculators/multiple-jobs-side-income-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Multiple Jobs & Side Income Student Loan Calculator UK - Two Jobs",
        description: "Calculate student loan repayments when you have multiple jobs or side income in the UK. Understand how PAYE treats separate jobs and when you need Self Assessment.",
        url: "https://studentloancalculator.uk/calculators/multiple-jobs-side-income-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        images: [
            {
                url: "https://studentloancalculator.uk/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Multiple Jobs & Side Income Student Loan Calculator UK",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Multiple Jobs & Side Income Student Loan Calculator UK",
        description: "Calculate student loan repayments for multiple jobs and side income.",
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

const MultipleJobSide = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://studentloancalculator.co.uk",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Calculators",
                item: "https://studentloancalculator.co.uk/calculators",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Multiple Jobs & Side Income Calculator",
                item: "https://studentloancalculator.co.uk/calculators/multiple-jobs-side-income-calculator",
            },
        ],
    };


    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Multiple Jobs & Side Income Student Loan Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.co.uk/calculators/multiple-jobs-side-income-calculator",
        description: "Calculate your student loan repayments when you have multiple PAYE jobs, freelance income, or side hustles. Understand the difference between PAYE per-job calculations and Self Assessment combined income calculations.",
        image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
    };


    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How are student loan repayments calculated when you have two jobs?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Under PAYE, each employer calculates student loan deductions separately based only on what they pay you. If you have two jobs paying £1,500 and £1,200 per month (Plan 2), neither exceeds the monthly threshold of £2,373, so no deductions are made - even though your combined income of £2,700 is above the threshold. Each job is treated independently unless you complete a Self Assessment tax return.",
                },
            },
            {
                "@type": "Question",
                name: "Do I have to pay student loan on my second job?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You only pay student loan deductions through PAYE on a second job if that specific job pays above the monthly threshold. For Plan 2 loans in 2025/26, the monthly threshold is £2,373. If your second job pays £800 per month, no student loan deductions will be taken from it, regardless of your total combined income from all jobs. However, if you file a Self Assessment, your total income will be combined and you may owe additional repayments.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if my combined income exceeds the threshold but individual jobs don't?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Under PAYE alone, you won't make any student loan repayments if neither individual job exceeds the threshold, even if your combined income does. For example, with two jobs earning £22,000 and £9,000 (total £31,000), neither exceeds the Plan 2 annual threshold of £28,470 individually, so no PAYE deductions occur. However, the Student Loans Company may contact you to register for Self Assessment, which would calculate repayments on your combined £31,000 income.",
                },
            },
            {
                "@type": "Question",
                name: "Does side income or freelance work affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Side income from freelancing, self-employment, or gig economy work is not subject to automatic PAYE deductions. However, you must register for Self Assessment if your side income exceeds £1,000 per year. When you file Self Assessment, all income sources are combined - employment, self-employment, and side income - and student loan repayments are calculated on your total earnings at 9% above the annual threshold.",
                },
            },
            {
                "@type": "Question",
                name: "Should I voluntarily register for Self Assessment with multiple jobs?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You are not legally required to register for Self Assessment solely because you have multiple jobs, unless you have other reasons like self-employment income over £1,000. However, the Student Loans Company may contact you if they suspect your combined income exceeds the threshold but you're not making repayments through PAYE. If your combined income is above the threshold, you will eventually need to make up the difference, so registering voluntarily can help avoid a large bill later.",
                },
            },
        ],
    };


    return (
        <div>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <MultipleJobsCalculator />
        </div>
    )
}


export default MultipleJobSide
