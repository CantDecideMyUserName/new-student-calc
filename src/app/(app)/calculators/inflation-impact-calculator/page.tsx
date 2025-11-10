import InflationImpactCalculatorPage from '@/modules/calculator/inflation-impact-calculator'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Inflation Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how inflation affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
        canonical: "https://studentloancalculator.uk/calculators/inflation-impact-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Inflation Impact Calculator UK - How Does It Affect My Loan?",
        description: "Find out how inflation affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
        url: "https://studentloancalculator.uk/calculators/inflation-impact-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Inflation Impact Calculator UK - How Does It Affect My Loan?",
        description: "Find out how inflation affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const InflationImpactCalculator = () => {
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
                name: "Inflation Impact Calculator",
                item: "https://studentloancalculator.uk/calculators/inflation-impact-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Inflation Impact Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/inflation-impact-calculator",
        description: "Calculate how RPI inflation affects your UK student loan interest rates and total debt. Compare the impact across Plan 1 (RPI or Bank Rate +1%), Plan 2 (RPI +3%), Plan 4 (RPI or Bank Rate +1%), Plan 5 (RPI), and Postgraduate loans (RPI +3%) for 2025/26.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How does inflation affect student loan interest rates?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "UK student loan interest rates are directly linked to RPI (Retail Price Index) inflation. For 2024/25, the RPI was 4.3%. Plan 1 and Plan 4 charge the lower of RPI or Bank Base Rate +1%. Plan 5 charges RPI only. Plan 2 charges RPI plus up to 3% based on income (RPI while studying, RPI +3% earning over £28,470). Postgraduate loans charge RPI +3%. Higher inflation means your loan balance grows faster through interest charges.",
                },
            },
            {
                "@type": "Question",
                name: "Why did my student loan balance increase despite making payments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you're on Plan 2 or Postgraduate loans, interest accrues faster than many graduates can repay, especially early in careers. With RPI at 4.3% plus up to 3%, Plan 2 borrowers face up to 7.3% annual interest. If your monthly repayments don't exceed the monthly interest accrual, your balance grows. For example, a £44,000 loan can grow to £54,000 even with regular repayments due to compound interest outpacing repayment amounts.",
                },
            },
            {
                "@type": "Question",
                name: "How does inflation affect repayment thresholds and maintenance loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Repayment thresholds increase annually with inflation to maintain real-term value. For 2025/26, thresholds rose by 3.1% in line with RPIX inflation: Plan 1 to £26,065, Plan 2 to £28,470, and Plan 4 to £32,745. Maintenance loans also increased by 3.1%, providing up to £414 extra per year for lowest-income students. Plan 5 thresholds (£25,000) are reviewed annually based on average earnings rather than inflation.",
                },
            },
            {
                "@type": "Question",
                name: "Will inflation cause me to pay more in total over my loan lifetime?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Higher inflation increases both loan interest and repayment thresholds. While higher interest means your balance grows faster, higher thresholds mean you start repaying later and potentially repay less per month. The net effect varies by plan and income. Plan 1 borrowers benefit from capped interest rates. Plan 2 and Postgraduate borrowers face higher interest that often exceeds repayments, but most won't repay fully before write-off (30-40 years), meaning inflation primarily affects higher earners who repay in full.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <InflationImpactCalculatorPage />
            </div>
        </>
    )
}

export default InflationImpactCalculator
