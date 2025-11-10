import MaternityLeaveCalculatorPage from '@/modules/calculator/maternity-paternity-leave-adjustment-calculator'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Maternity & Paternity Leave Adjustment Calculator UK - How Does It Affect My Loan?",
    description: "Find out how maternity and paternity leave affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
        canonical: "https://studentloancalculator.uk/calculators/maternity-paternity-leave-adjustment-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Maternity & Paternity Leave Adjustment Calculator UK - How Does It Affect My Loan?",
        description: "Find out how maternity and paternity leave affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
        url: "https://studentloancalculator.uk/calculators/maternity-paternity-leave-adjustment-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Maternity & Paternity Leave Adjustment Calculator UK - How Does It Affect My Loan?",
        description: "Find out how maternity and paternity leave affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const MaternityLeaveCalculator = () => {
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
                name: "Maternity & Paternity Leave Adjustment Calculator",
                item: "https://studentloancalculator.uk/calculators/maternity-paternity-leave-adjustment-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Maternity & Paternity Leave Adjustment Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/maternity-paternity-leave-adjustment-calculator",
        description: "Calculate how maternity and paternity leave affects your UK student loan repayments. Estimate reduced monthly payments during periods of Statutory Maternity Pay (SMP), Statutory Paternity Pay, or enhanced maternity pay, and determine if you're eligible for refunds when annual income falls below repayment thresholds for Plan 1, 2, 4, 5, and Postgraduate loans.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do I still pay student loan repayments on maternity or paternity leave?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, student loan repayments continue through PAYE based on your actual earnings each month. If you receive enhanced maternity pay equal to your full salary, you'll pay the same as before. When on Statutory Maternity Pay (£187.18 per week) or reduced pay, your repayments will automatically decrease or stop if you earn below the threshold. You cannot pause repayments while earning above the threshold, but if your total annual income falls below your plan's threshold, you can claim a refund after the tax year ends.",
                },
            },
            {
                "@type": "Question",
                name: "How much will my student loan repayments be during maternity leave?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Repayments are calculated on your monthly income through PAYE. During full enhanced maternity pay, you'll pay your normal amount. When receiving Statutory Maternity Pay (approximately £810 per month), most people earn below repayment thresholds and pay nothing. For mixed pay periods (part full salary, part SMP), repayments adjust automatically. For example, on Plan 2, if you receive £2,000 full pay plus £800 SMP in one month (£2,800 total), you'd pay 9% of the amount above £2,372.50 monthly threshold, which equals approximately £38 for that month.",
                },
            },
            {
                "@type": "Question",
                name: "Can I get a refund if I overpaid during maternity or paternity leave?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, if your total annual income falls below your plan's repayment threshold, you can claim a refund after the tax year ends. Many parents on maternity leave make payments during enhanced pay periods early in the tax year, then earn below the threshold for the remaining months. You can apply online through the Student Loans Company, and refunds typically range from £100-£400. The refunded amount is added back to your loan balance and continues accruing interest, but you receive immediate cash flow relief.",
                },
            },
            {
                "@type": "Question",
                name: "What is the student loan motherhood penalty?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The motherhood penalty refers to women paying more in total student loan repayments due to career breaks, reduced hours, and the gender pay gap. Women who take maternity leave continue accruing interest while making reduced or no repayments, increasing their loan balance. However, they also benefit from lower lifetime repayments due to reduced earnings. Research shows that despite paying more in interest over time, women often pay less overall because their loans are more likely to be written off. The system creates financial gender inequality where career interruptions for childcare disproportionately affect women.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <MaternityLeaveCalculatorPage />
            </div>
        </>
    )
}

export default MaternityLeaveCalculator
