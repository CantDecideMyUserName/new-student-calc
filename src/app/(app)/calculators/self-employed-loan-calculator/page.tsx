import React from 'react'
import { Metadata } from 'next';
import SelfEmployedCalculator from '@/modules/calculator/self-employed-loan-calculator';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Self-Employed Student Loan Calculator UK - How Does It Affect My Loan?",
    description: "Find out how being self-employed affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
        canonical: "https://studentloancalculator.uk/calculators/self-employed-loan-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Self-Employed Student Loan Calculator UK - How Does It Affect My Loan?",
        description: "Find out how being self-employed affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
        url: "https://studentloancalculator.uk/calculators/self-employed-loan-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Self-Employed Student Loan Calculator UK - How Does It Affect My Loan?",
        description: "Find out how being self-employed affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const SelfEmployedLoanCalculator = () => {
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
                name: "Self-Employed Student Loan Calculator",
                item: "https://studentloancalculator.uk/calculators/self-employed-loan-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Self-Employed Student Loan Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/self-employed-loan-calculator",
        description: "Calculate self-employed student loan repayments through UK Self-Assessment for 2025/26. Estimate annual repayments based on taxable profits minus business expenses using the formula: (Profit - Threshold) × 9% for Plan 1/2/4/5 or 6% for Postgraduate loans. Determine payment dates (31 January after tax year), understand how pension contributions affect repayments, and plan for payments on account.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do self-employed student loan repayments work in the UK?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Self-employed graduates repay student loans through Self-Assessment tax returns rather than PAYE. HMRC calculates your repayment based on your annual taxable profits (revenue minus allowable business expenses) minus your plan's threshold. You pay 9% of income above the threshold for Plan 1/2/4/5 loans, or 6% for Postgraduate loans. For example, £35,000 profit on Plan 2 (£28,470 threshold) means £693.45 annual repayment. Repayments are due 31 January following the tax year end, alongside your tax bill. If you submit your return before 30 September, HMRC calculates the amount automatically.",
                },
            },
            {
                "@type": "Question",
                name: "Do business expenses reduce student loan repayments for self-employed?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, legitimate business expenses reduce your taxable profit and therefore your student loan repayment amount. If you earn £40,000 revenue but have £10,000 in allowable expenses, your taxable profit is £30,000—this is what determines your repayment. On Plan 2 with £30,000 profit, you'd pay £243 annually (9% of £2,705 above £28,470 threshold) rather than £1,039 on the full £40,000 revenue. However, pension contributions made through Self-Assessment reduce student loan calculations, while contributions to private pensions do not. The Personal Allowance doesn't reduce student loan repayments, only tax.",
                },
            },
            {
                "@type": "Question",
                name: "When do self-employed people pay student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Self-employed student loan repayments are due 31 January following the tax year (which runs April 6 to April 5). For the 2024/25 tax year, repayments are due 31 January 2026 alongside your tax bill. You may also need to make payments on account—advance payments toward next year's repayments—on 31 January and 31 July if your bill exceeds £1,000. This differs from PAYE employees who pay monthly through salary deductions. If you're both self-employed and employed, you pay through PAYE on employment income and Self-Assessment on self-employment income, potentially making repayments throughout the year and at year-end.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if my self-employed income varies throughout the year?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Variable income means your actual repayment is calculated annually based on your total tax year profits, unlike PAYE which adjusts monthly. If you earn £18,000 one year, you pay nothing (below all thresholds). If you earn £45,000 the next year on Plan 2, you'd pay £1,487 (9% of £16,530 above threshold) due 31 January. This can create cash flow challenges—earning £45,000 across 12 months means averaging £3,750 monthly, but the full £1,487 repayment is due in one payment. Many self-employed graduates set aside 9-15% of profits above thresholds monthly to avoid January bill shock. You cannot spread payments across the year unless making voluntary overpayments to SLC.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <SelfEmployedCalculator />
            </div>
        </>
    )
}

export default SelfEmployedLoanCalculator
