import CareerProgressionStudentLoans from '@/modules/guides/career-progression-student-loans-marginal-tax'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Career Progression Student Loans UK: Marginal Tax Rates 2025/26",
    description: "How UK salary increases affect student loan repayments. Understand 51%+ marginal rates, Plan 2 interest escalation, and strategic career decisions.",
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
        "career progression",
        "marginal tax rate",
        "salary increase",
        "plan 2 interest rates",
        "higher rate taxpayer",
        "student loan interest escalation",
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
        canonical: "https://studentloancalculator.uk/guides/career-progression-student-loans-marginal-tax/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const CareerProgressionStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Career Progression and Student Loans", item: "https://studentloancalculator.co.uk/guides/career-progression-student-loans-marginal-tax" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Career Progression Student Loans UK: Marginal Tax Rates 2025/26",
        description: "How UK salary increases affect student loan repayments. Understand 51%+ marginal rates, Plan 2 interest escalation, and strategic career decisions.",
        url: "https://studentloancalculator.co.uk/guides/career-progression-student-loans-marginal-tax",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/career-progression-student-loans-marginal-tax.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/career-progression-student-loans-marginal-tax",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the marginal tax rate for UK student loan borrowers?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "UK student loan borrowers face marginal tax rates of 41% below £50,270 (20% income tax + 12% National Insurance + 9% student loan) and 51% above £50,270 (40% income tax + 2% National Insurance + 9% student loan). This means every extra pound earned only puts 49-59 pence in your pocket.",
                },
            },
            {
                "@type": "Question",
                name: "How does Plan 2 interest escalation affect career progression?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 2 interest rates increase with income: RPI only up to £27,295, rising progressively to RPI+3% at £49,130+. Career progression from £30,000 to £50,000 increases interest from ~3.5% to ~6.5%, meaning loan balances can grow faster despite higher repayments. A £20,000 salary increase might only reduce loan balance by £450 more annually.",
                },
            },
            {
                "@type": "Question",
                name: "What is the £50,000 salary trap?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Around £50,000 salary, you cross into higher rate tax (51% marginal rate), hit maximum Plan 2 interest (RPI+3%), and face the frustrating situation where career success barely improves your student loan position. A £4,000 raise might only increase take-home by £1,960, with increased interest nearly cancelling out higher repayments.",
                },
            },
            {
                "@type": "Question",
                name: "Should I negotiate benefits instead of salary increases?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, especially around the £50,000 threshold. Employer pension contributions, additional holiday, flexible working, and training don't count toward student loan calculations. If offered a £5,000 raise at 51% marginal rate, negotiating £2,500 salary + £2,500 benefits often provides better value than pure salary.",
                },
            },
            {
                "@type": "Question",
                name: "How does Plan 5 differ from Plan 2 for career progression?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Plan 5 borrowers face consistent 41% marginal rates throughout their career with no interest rate escalation (RPI only). Career progression doesn't increase interest rates, making salary increases more beneficial than for Plan 2 borrowers. However, repayments start earlier (£25,000 threshold) and continue longer (40 years).",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <CareerProgressionStudentLoans />
            </div>
        </>
    )
}

export default CareerProgressionStudentLoansPage