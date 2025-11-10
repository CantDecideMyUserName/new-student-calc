import React from 'react'
import { Metadata } from 'next';
import InterestRateImpactCalculatorPage from '@/modules/calculator/slc-interest-rate-impact-calculator';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, FAQPage, SoftwareApplication, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    title: "SLC Interest Rate Impact Calculator UK - How Does It Affect My Loan?",
    description: "Find out how the SLC interest rate affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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
        canonical: "https://studentloancalculator.uk/calculators/slc-interest-rate-impact-calculator/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
    openGraph: {
        title: "SLC Interest Rate Impact Calculator UK - How Does It Affect My Loan?",
        description: "Find out how the SLC interest rate affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
        url: "https://studentloancalculator.uk/calculators/slc-interest-rate-impact-calculator/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SLC Interest Rate Impact Calculator UK - How Does It Affect My Loan?",
        description: "Find out how the SLC interest rate affects your UK student loan repayments. Compare Plan 1, 2, 4, 5 and Postgraduate loans to see which plan is best for you.",
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

const SLCInterestRateImpact = () => {
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
                name: "SLC Interest Rate Impact Calculator",
                item: "https://studentloancalculator.uk/calculators/slc-interest-rate-impact-calculator",
            },
        ],
    };

    const softwareSchema: WithContext<SoftwareApplication> = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SLC Interest Rate Impact Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "GBP",
        },
        url: "https://studentloancalculator.uk/calculators/slc-interest-rate-impact-calculator",
        description: "Calculate how Student Loans Company interest rates affect your UK student loan balance growth for 2025/26. Compare current rates: Plan 1 (3.2%), Plan 4 (3.2%), Plan 5 (3.2%), Plan 2 (3.2-6.2% based on income), Postgraduate (6.2%). Understand RPI-linked rate changes set annually each September, model balance accumulation over time, and determine whether interest outpaces repayments based on salary.",
        image: "https://studentloancalculator.uk/og-image.jpg",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What are the current UK student loan interest rates for 2025/26?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For September 2025 to August 2026, interest rates are: Plan 1 (3.2%, the lower of RPI or Bank Rate +1%), Plan 4 (3.2%), Plan 5 (3.2% RPI only), Plan 2 (3.2% while studying and on income under £28,470, increasing to 6.2% for earnings over £51,245), and Postgraduate loans (6.2% = RPI +3%). These rates are based on March 2025 RPI figures of 3.2%. Plan 2 uses a sliding scale between £28,471-£51,245, charging RPI plus up to 3% depending on income. Interest accrues from your first payment until full repayment or cancellation, added to your balance monthly.",
                },
            },
            {
                "@type": "Question",
                name: "How does the interest rate affect whether my student loan balance increases?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your balance increases if monthly interest exceeds monthly repayments. On Plan 2 at £35,000 salary, you repay £586/year (£49/month) but accrue approximately £258/month interest on a £50,000 balance at 6.2%, causing the balance to grow by £209/month. Lower earners typically see balances grow throughout their careers. On Plan 1 at 3.2%, a £30,000 balance accrues £80/month interest, requiring at least £80 monthly repayment (£34,065+ salary) to prevent growth. High interest rates on Plan 2 and Postgraduate loans mean most graduates below £45,000 see balances increase despite regular payments, while Plan 1, 4, and 5's lower rates allow faster balance reduction.",
                },
            },
            {
                "@type": "Question",
                name: "When and why do student loan interest rates change?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Interest rates are set annually on 1 September based on the Retail Price Index (RPI) from the previous March, though Bank of England base rate changes can affect Plan 1 rates mid-year. For 2024/25, rates were 4.3% (March 2024 RPI), dropping to 3.2% for 2025/26 (March 2025 RPI). RPI measures inflation and UK cost-of-living changes. When inflation rises, rates increase—Plan 1 peaked at 6.25% in 2023. Plan 2 borrowers saw rates as high as 7.3% (4.3% RPI +3%) in 2024/25. The rate changes reflect economic conditions, with higher inflation periods significantly increasing the cost of borrowing and balance accumulation for graduates.",
                },
            },
            {
                "@type": "Question",
                name: "Does the interest rate matter if I won't repay my loan in full?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For most Plan 2 and Plan 5 borrowers who won't repay fully before write-off, interest rates have limited practical impact on lifetime payments. You repay 9% of income above the threshold regardless of balance, and remaining debt is written off after 30-40 years. A £60,000 balance versus £80,000 makes no difference if both are written off. However, interest rates do affect psychological stress from watching balances grow, potential impacts on mortgage applications (though student loans don't appear on credit files), and outcomes for high earners who will repay fully. For those earning £50,000+, high interest rates mean significantly more paid over time—potentially £10,000-£20,000 extra due to compound interest before full repayment.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, softwareSchema, faqSchema]} />
            <div>
                <InterestRateImpactCalculatorPage/>
            </div>
        </>
    )
}

export default SLCInterestRateImpact
