import InvestmentIncomeStudentLoans from '@/modules/guides/investment-income-dividends-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Investment Income & Student Loans UK: Dividends Tax Guide 2025/26",
    description: "How investment income, dividends, and savings interest affect UK student loan repayments. Includes ISA strategies, rental income rules, and Self Assessment requirements.",
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
        "investment income student loans",
        "dividends student loans",
        "ISA student loans",
        "rental income student loans",
        "capital gains student loans",
        "savings interest student loans",
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
        canonical: "https://studentloancalculator.uk/guides/investment-income-dividends-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const InvestmentIncomeStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Investment Income and Student Loans", item: "https://studentloancalculator.co.uk/guides/investment-income-dividends-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Investment Income & Student Loans UK: Dividends Tax Guide 2025/26",
        description: "How investment income, dividends, and savings interest affect UK student loan repayments. Includes ISA strategies, rental income rules, and Self Assessment requirements.",
        url: "https://studentloancalculator.co.uk/guides/investment-income-dividends-student-loans-uk",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/investment-income-dividends-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/investment-income-dividends-student-loans-uk",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do dividends count as income for student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, dividend income from shares counts toward your total income for student loan calculations, even if the dividends are within your tax-free dividend allowance. The dividends get added to your employment income, and if the total exceeds your student loan threshold, you owe 9% on the excess through Self Assessment.",
                },
            },
            {
                "@type": "Question",
                name: "Do ISAs affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, income generated within ISAs (both Cash ISAs and Stocks & Shares ISAs) is completely exempt from student loan calculations. This makes ISAs incredibly valuable for anyone repaying student loans, as the £20,000 annual allowance provides substantial shelter from the 9% student loan charge on investment returns.",
                },
            },
            {
                "@type": "Question",
                name: "Do capital gains affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, capital gains from selling investments are not considered income for student loan purposes. You can make £3,000 in capital gains (2025/26 allowance) completely tax-free without affecting student loans. Even gains above the allowance that are subject to Capital Gains Tax never appear in student loan calculations.",
                },
            },
            {
                "@type": "Question",
                name: "How much should I set aside from investment income for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Set aside 9% of all investment income (dividends, interest, rental profit) immediately when you receive it. Investment income doesn't have automatic deductions, so you'll need to pay student loans on it through Self Assessment. Create a separate 'tax and student loans' savings account for this purpose.",
                },
            },
            {
                "@type": "Question",
                name: "Does rental income affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, rental profit (rent received minus allowable expenses) counts toward your total income for student loan calculations. If rental income exceeds £2,500 after expenses, you must register for Self Assessment. The student loan impact makes buy-to-let less attractive while repaying loans, as you pay both income tax and 9% student loan on rental profit.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <InvestmentIncomeStudentLoans />
            </div>
        </>
    )
}

export default InvestmentIncomeStudentLoansPage