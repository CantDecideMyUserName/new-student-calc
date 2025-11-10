import PostgraduateLoansStrategy from '@/modules/guides/postgraduate-loans-uk-strategy'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Postgraduate Loans UK: Master's & Doctoral Loan Strategy 2025/26",
    description: "Complete guide to UK postgraduate loans. How Master's and Doctoral loans interact with undergraduate debt, thresholds, and repayment strategies.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "postgraduate loans",
        "masters loan",
        "doctoral loan",
        "phd loan",
        "student finance",
        "loan repayments",
        "postgraduate strategy",
        "combined loans",
        "undergraduate postgraduate",
        "dual loans",
        "£21000 threshold",
        "6% repayment rate",
        "postgraduate overpayments",
        "PGL tax code",
        "SL PGL markers",
        "15% marginal rate",
        "salary sacrifice",
        "masters degree funding",
        "doctoral funding",
        "postgraduate write off",
        "30 year write off",
        "RPI plus 3%",
        "postgraduate interest rates",
        "combined deductions",
        "payroll errors",
        "tax code problems",
        "masters repayments",
        "doctoral repayments",
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
        canonical: "https://studentloancalculator.uk/guides/postgraduate-loans-uk-strategy/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const PostgraduateLoansStrategyPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Postgraduate Loans Strategy", item: "https://studentloancalculator.co.uk/guides/postgraduate-loans-uk-strategy" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Postgraduate Loans UK: Master's & Doctoral Loan Strategy 2025/26",
        description: "Complete guide to UK postgraduate loans. How Master's and Doctoral loans interact with undergraduate debt, thresholds, and repayment strategies.",
        url: "https://studentloancalculator.co.uk/guides/postgraduate-loans-uk-strategy",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/postgraduate-loans-uk-strategy.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/postgraduate-loans-uk-strategy",
        },
        author: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk"
        },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk"
        },
        wordCount: 7100,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Postgraduate Student Loans",
                description: "UK Master's and Doctoral loans with separate repayment terms from undergraduate loans"
            },
            {
                "@type": "Thing", 
                name: "Combined Loan Repayments",
                description: "Strategic management of both undergraduate and postgraduate loan obligations simultaneously"
            },
            {
                "@type": "Thing",
                name: "Graduate Education Financing",
                description: "Financial planning and debt management for Master's and PhD students in the UK"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do postgraduate loans differ from undergraduate student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Postgraduate loans operate independently with different terms: £21,000 threshold (vs £25,000-£27,295 for undergraduate), 6% repayment rate (vs 9%), RPI+3% interest during repayment, and 30-year write-off. They're paid directly to you as lump sums, not split between tuition and maintenance. Master's loans up to £12,167, Doctoral loans up to £28,673. If you have both undergraduate and postgraduate loans, you face combined deductions up to 15% above the higher threshold.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if I have both undergraduate and postgraduate loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Both loans operate in parallel with separate calculations. At £40,000 income with Plan 2 + postgraduate: you pay £1,143 undergraduate (9% above £27,295) + £1,140 postgraduate (6% above £21,000) = £2,283 annually total. This creates a 15% combined marginal rate, plus income tax and National Insurance. For higher rate taxpayers, this means 57% marginal tax rate (40% income tax + 2% NI + 9% + 6% student loans).",
                },
            },
            {
                "@type": "Question",
                name: "Should I overpay my postgraduate loan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generally no, even though postgraduate loans are more likely to be repaid in full than undergraduate loans. Pension contributions almost always provide better returns due to tax relief (20-45%) and compound growth. Even high earners certain to repay in full should prioritize pensions, ISAs, and mortgage overpayments. Only consider overpaying if you're earning £50,000+, will clearly repay in full, and have already maximized other tax-efficient investments.",
                },
            },
            {
                "@type": "Question",
                name: "How does salary sacrifice work with dual loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Salary sacrifice is exceptionally valuable for dual loan borrowers because it reduces both repayments simultaneously. Example: £40,000 salary sacrificing £3,000 for pension saves £450 annually in student loans (15% of sacrificed amount) plus tax and National Insurance savings. The £3,000 goes into your pension with tax relief, while reducing your student loan burden at the combined 15% rate. This makes salary sacrifice even more beneficial than for single loan borrowers.",
                },
            },
            {
                "@type": "Question",
                name: "What should I check on my payslip if I have both loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Verify your tax code shows both SL (undergraduate) and PGL (postgraduate) markers, like '1257L SL PGL'. Your payslip should show separate deductions for each loan at correct rates (9% and 6%) and thresholds (£27,295 and £21,000). Common errors include missing PGL marker, wrong rates (9% on both instead of 9%+6%), or same threshold for both loans. Contact payroll and HMRC immediately if deductions are incorrect - errors are more common with dual loans.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <PostgraduateLoansStrategy />
            </div>
        </>
    )
}

export default PostgraduateLoansStrategyPage