import CISSelfEmployedEstimator from '@/modules/calculator/hmrc-calculator/cis-self-employed-student-loan';
import { JsonLd } from '@/modules/seo/json-ld';
import { Metadata } from 'next';
import React from 'react'
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';


export const metadata: Metadata = {
    title: "CIS Self-Employed Student Loan Calculator UK - Construction Industry Scheme",
    description: "Calculate student loan repayments for CIS subcontractors and self-employed construction workers. Understand how CIS deductions interact with student loan payments through Self Assessment.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "CIS student loan calculator",
        "construction industry scheme student loan",
        "CIS subcontractor student loan",
        "self employed construction student loan",
        "CIS deduction student loan",
        "construction worker student loan UK",
        "CIS self assessment student loan",
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
        canonical: "https://studentloancalculator.uk/calculators/cis-self-employed-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "CIS Self-Employed Student Loan Calculator UK - Construction Industry Scheme",
        description: "Calculate student loan repayments for CIS subcontractors and self-employed construction workers. Understand how CIS deductions interact with student loan payments through Self Assessment.",
        url: "https://studentloancalculator.uk/calculators/cis-self-employed-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        images: [
            {
                url: "https://studentloancalculator.uk/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CIS Self-Employed Student Loan Calculator UK",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CIS Self-Employed Student Loan Calculator UK",
        description: "Calculate student loan repayments for CIS construction workers and subcontractors.",
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


const CisSelfEmployedStudentLoan = () => {
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
                name: "CIS Self-Employed Student Loan Calculator",
                item: "https://studentloancalculator.co.uk/calculators/cis-self-employed-calculator",
            },
        ],
    };


    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "CIS Self-Employed Student Loan Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.co.uk/calculators/cis-self-employed-calculator",
        description: "Calculate student loan repayments for Construction Industry Scheme (CIS) subcontractors and self-employed construction workers. Understand how CIS deductions are offset against student loan liabilities and how to calculate total repayments through Self Assessment.",
        image: "https://studentloancalculator.co.uk/images/og/default-og.jpg",
    };


    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do CIS subcontractors pay student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "CIS subcontractors pay student loans through their Self Assessment tax return, not through automatic deductions. When you file your tax return, you must declare all your CIS income (gross amount before contractor deductions). HMRC calculates your student loan repayment as 9% of income above the annual threshold (£28,470 for Plan 2). This payment is due by 31 January following the tax year end. Unlike PAYE employees, CIS workers don't have student loan deductions taken at source by contractors.",
                },
            },
            {
                "@type": "Question",
                name: "Can I offset my CIS deductions against student loan payments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, CIS deductions you've already paid can be offset against your total tax bill, which includes student loan repayments. When contractors deduct 20% or 30% from your payments under CIS, those deductions cover tax, National Insurance, and student loans combined. On your Self Assessment, you calculate your total liability (tax + NI + student loan), then deduct the CIS amounts already paid. If your CIS deductions exceed your total liability, you get a refund. If they fall short, you pay the balance by 31 January.",
                },
            },
            {
                "@type": "Question",
                name: "Do I need to register my student loan plan with contractors?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you don't register your student loan with individual contractors. CIS contractors only deduct the standard 20% (or 30% if you're not registered) from your payments for tax and NI purposes. Student loan repayments are calculated and collected separately through your annual Self Assessment tax return. However, you must ensure HMRC knows which student loan plan you're on when completing your tax return, as this determines the correct repayment threshold and rate.",
                },
            },
            {
                "@type": "Question",
                name: "What income counts for student loan calculations if I'm on CIS?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your student loan repayment is calculated on your total self-employment profit, not your gross CIS receipts. This means your CIS income minus allowable business expenses (materials, tools, travel, etc.). For example, if you receive £40,000 in CIS payments but have £8,000 in expenses, your profit is £32,000. For Plan 2 loans, you'd pay 9% of (£32,000 - £28,470) = £318 in student loan repayments. This calculation happens through Self Assessment, where all income sources are combined.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if I have both CIS and PAYE income with a student loan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you have both CIS self-employment and PAYE employment, your student loan situation becomes more complex. Your PAYE employer will deduct student loans automatically based only on what they pay you. Your CIS income is separate. When you file Self Assessment, HMRC combines both income sources and calculates your total student loan liability. You then deduct what was already paid through PAYE. For example, with £20,000 PAYE (no deductions) and £15,000 CIS profit (total £35,000), you'd owe 9% of £6,530 = £588 through Self Assessment for Plan 2 loans.",
                },
            },
        ],
    };


    return (
        <div>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <CISSelfEmployedEstimator />
        </div>
    )
}


export default CisSelfEmployedStudentLoan
