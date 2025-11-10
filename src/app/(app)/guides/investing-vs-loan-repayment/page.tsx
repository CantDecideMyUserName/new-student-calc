import InvestingVsLoanRepaymentGuide from '@/modules/guides/investing-vs-loan-repayment'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Should You Invest or Pay Off Your Student Loan? UK Guide 2025",
    description: "Complete financial analysis comparing investment returns vs student loan repayment. Learn when investing beats overpaying UK student loans with real calculations.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan repayment vs investing",
        "invest or pay off student loan uk",
        "student loan overpayment",
        "uk student loan investing",
        "pension vs student loan",
        "isa vs student loan",
        "student finance strategy",
        "investment returns uk",
        "student loan interest rate",
        "financial planning graduates",
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
        canonical: "https://studentloancalculator.uk/guides/investing-vs-loan-repayment/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const InvestingVsLoanRepaymentPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Investing vs Loan Repayment", item: "https://studentloancalculator.co.uk/guides/investing-vs-loan-repayment" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Should You Invest or Pay Off Your Student Loan? UK Guide 2025",
        description: "Complete financial analysis comparing investment returns vs student loan repayment. Learn when investing beats overpaying UK student loans with real calculations.",
        url: "https://studentloancalculator.co.uk/guides/investing-vs-loan-repayment",
        datePublished: "2025-01-15",
        dateModified: "2025-01-15",
        image: "https://studentloancalculator.co.uk/images/guides/investing-vs-loan-repayment.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/investing-vs-loan-repayment",
        },
        author: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk",
        },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What if interest rates change after I've started investing instead of overpaying?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For most Plan 2 and Plan 5 borrowers, the stated interest rate doesn't matter much if you won't repay in full before write-off. If you will repay in full, your student loan interest rate is typically still lower than long-term expected stock market returns. Review your strategy annually and adjust if circumstances change significantly. The beauty of investing is that your investments remain liquid (except pensions), so you could always sell investments to pay off your loan if the math changes.",
                },
            },
            {
                "@type": "Question",
                name: "Won't investing in stocks be too risky compared to the guaranteed return of paying off debt?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "While investments carry more short-term volatility than debt repayment, over long time horizons (20+ years, which matches your loan repayment period), the risk of losing money in a diversified global stock portfolio is historically very low, and the expected return is much higher than most loan interest rates. If you're very risk-averse, you could opt for a more conservative investment mix or use a hybrid strategy. But remember: if you won't repay your loan in full, there's no 'return' from overpayment at all.",
                },
            },
            {
                "@type": "Question",
                name: "Should I pay off my student loan before saving for a house deposit?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Almost never. Saving for a house deposit should take priority over voluntary student loan overpayments for most people. Getting on the property ladder sooner typically provides better financial returns than the interest saved from loan overpayment. A Lifetime ISA gives you a 25% government bonus on up to £4,000 per year specifically for first-time homebuyers, which is much better than any student loan interest rate.",
                },
            },
            {
                "@type": "Question",
                name: "What about using premium bonds instead of stocks?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Premium Bonds are essentially a savings account with prizes instead of interest, offering an expected return of around 4.15% currently. While this is better than standard savings accounts, it's still lower than expected long-term stock market returns and offers no tax advantages beyond the prize money being tax-free. Premium Bonds are fine for your emergency fund or short-term savings, but for long-term wealth building, you'll likely do better with tax-advantaged stock market investments through ISAs and pensions.",
                },
            },
            {
                "@type": "Question",
                name: "Can I change my mind later and switch from investing to overpaying, or vice versa?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, absolutely. Your strategy isn't permanent. You can sell your investments (except pension, which is locked until 55+) to make loan overpayments if circumstances change. Conversely, you can stop overpaying your loan at any time and redirect that money to investments. Review your situation regularly (annually is sensible) and adjust as your income, loan balance, and financial goals evolve. This flexibility is actually an advantage of investing.",
                },
            },
            {
                "@type": "Question",
                name: "What if I get a windfall like an inheritance or bonus - should that change my strategy?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A windfall doesn't fundamentally change the math. If you won't repay your loan in full, investing the windfall will almost certainly leave you better off. If you will repay in full, compare your loan interest rate against expected investment returns. However, a windfall might be an opportunity to max out annual allowances (£20,000 ISA, £60,000 pension). Student loan overpayment should still generally be at the bottom of the priority list for most people.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <InvestingVsLoanRepaymentGuide />
            </div>
        </>
    )
}

export default InvestingVsLoanRepaymentPage