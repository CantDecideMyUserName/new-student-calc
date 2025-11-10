import SalaryGrowthCalculator from '@/modules/calculator/salary-growth-impact-calculator'
import { Metadata } from 'next';
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "Salary Growth Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how your salary growth affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
        canonical: "https://studentloancalculator.uk/calculators/salary-growth-impact-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "Salary Growth Impact Calculator UK - How Does It Affect My Loan?",
        description: "Find out how your salary growth affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
        url: "https://studentloancalculator.uk/calculators/salary-growth-impact-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salary Growth Impact Calculator UK - How Does It Affect My Loan?",
        description: "Find out how your salary growth affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const SalaryGrowthImpactCalcPage = () => {
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
                name: "Salary Growth Impact Calculator",
                item: "https://studentloancalculator.uk/calculators/salary-growth-impact-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Salary Growth Impact Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/salary-growth-impact-calculator",
        description: "Calculate how salary increases and career progression affect your UK student loan repayments over time. Model different salary growth scenarios (2-10% annual increases) to determine total lifetime repayments, marginal tax rates including student loan deductions (up to 51% for £65,000 earners), repayment duration, and whether you'll repay in full before write-off across Plan 1, 2, 4, 5, and Postgraduate loans.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How does a salary increase affect my student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Student loan repayments increase proportionally with salary because you pay 9% of income above the threshold (6% for Postgraduate loans). For example, on Plan 2 with a £30,000 salary, you pay £138/year (9% of £1,530 above £28,470 threshold). If your salary rises to £35,000, you pay £586/year (9% of £6,530 above threshold). Each £1,000 salary increase results in £90 additional annual repayments for most plans. This means salary growth accelerates debt repayment but also reduces take-home pay increases due to the effective marginal tax rate of 37-51% when student loans combine with income tax and National Insurance.",
                },
            },
            {
                "@type": "Question",
                name: "What is the marginal tax rate with student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The marginal tax rate includes income tax, National Insurance, and student loan repayments combined. On Plan 5 earning £30,000, your marginal rate is 37% (20% income tax + 8% NI + 9% student loan) on earnings between £25,000-£30,000. Higher earners on Plan 2 at £65,000 face 51% marginal rates (40% income tax + 2% NI + 9% student loan). This means for every £100 salary increase, you only keep £49-£63 after all deductions. These high marginal rates particularly affect low-to-middle earners under Plan 5's £25,000 threshold, taking more than a third of income gains above that level.",
                },
            },
            {
                "@type": "Question",
                name: "Does faster salary growth mean I'll pay off my student loan sooner?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not necessarily—it depends on your loan plan and starting salary. Under Plan 2, only 27% of 2022/23 borrowers were expected to repay fully before the 30-year write-off, but 65% of 2023/24 Plan 5 borrowers will repay fully within 40 years due to the lower £25,000 threshold. Rapid salary growth benefits high earners who'll repay regardless, but for average earners, faster growth means paying more total before write-off without necessarily clearing the balance. Women on average pay £11,600 more under Plan 5 despite lower lifetime earnings, while high-earning men pay £3,800 less. Salary growth over 5% annually increases the likelihood of full repayment.",
                },
            },
            {
                "@type": "Question",
                name: "How does career progression affect whether I should overpay my student loan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you expect strong career progression with salaries exceeding £50,000+, you're likely to repay your loan fully before write-off, making overpayment beneficial to reduce total interest paid. However, for average earners with modest salary growth (2-3% annually), loans may never be repaid fully before write-off, meaning overpayments effectively subsidize future write-offs without personal benefit. Plan 5 borrowers with salary growth above 4% annually are more likely to benefit from overpayment. Lower earners or those in careers with flat salary trajectories should prioritize savings and investments over overpayment, as their loans will likely be written off with significant balances remaining regardless of additional payments made.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <SalaryGrowthCalculator />
            </div>
        </>
    )
}

export default SalaryGrowthImpactCalcPage
