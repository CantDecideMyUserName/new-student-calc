import EarlyPayoffCalculator from '@/modules/calculator/early-payoff-date-calculator'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Early Payoff Date Calculator UK - How Much Can I Save?",
    description: "Calculate the impact of early loan repayments on your UK student loan. See how much you can save in interest and how long it will take to pay off your loan.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "early payoff calculator",
        "early loan repayment calculator",
        "student loan early payoff",
        "student loan early repayment",
        "student loan interest savings",
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
        canonical: "https://studentloancalculator.uk/calculators/early-payoff-date-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Early Payoff Date Calculator UK - How Much Can I Save?",
        description: "Calculate the impact of early loan repayments on your UK student loan. See how much you can save in interest and how long it will take to pay off your loan.",
        url: "https://studentloancalculator.uk/calculators/early-payoff-date-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        images: [
            {
                url: "https://studentloancalculator.uk/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Early Payoff Date Calculator UK",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Early Payoff Date Calculator UK - How Much Can I Save?",
        description: "Calculate the impact of early loan repayments on your UK student loan. See how much you can save in interest and how long it will take to pay off your loan.",
        images: ["https://studentloancalculator.uk/og-image.jpg"],
    },
};

const EarlyPayoffDateCalculatorPage = () => {

    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Calculators", item: "https://studentloancalculator.co.uk/calculators" },
            { "@type": "ListItem", position: 3, name: "Early Payoff Calculator", item: "https://studentloancalculator.co.uk/calculators/early-payoff-date-calculator" },
        ],
    };
    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Early Payoff Date Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.co.uk/calculators/early-payoff-date-calculator",
        description: "Calculate the impact of early loan repayments on your UK student loan. See how much you can save in interest and how long it will take to pay off your loan.",
        image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
    };
    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the early payoff calculator?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The early payoff calculator estimates how much you can save in interest and how long it will take to pay off your student loan by making early repayments.",
                },
            },
            {
                "@type": "Question",
                name: "How does the early payoff calculator work?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The calculator uses your current loan balance, annual salary, and the plan type to estimate how much you can save in interest and how long it will take to pay off your loan by making early repayments.",
                },
            },
            {
                "@type": "Question",
                name: "What is the difference between Plan 1, Plan 2, Plan 4, and Plan 5?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 1 is for students who started their course before 2012. Plan 2 is for students who started their course between 2012 and 2023. Plan 4 is for Scottish students. Plan 5 is for students who started their course from 2023 onwards.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <EarlyPayoffCalculator />
            </div>
        </>
    )
}

export default EarlyPayoffDateCalculatorPage