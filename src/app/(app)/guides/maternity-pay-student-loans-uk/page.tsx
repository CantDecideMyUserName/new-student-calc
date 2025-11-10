import MaternityPayStudentLoans from '@/modules/guides/maternity-pay-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Maternity Pay Student Loans UK: Budgeting Guide 2025/26",
    description: "How maternity pay affects UK student loan deductions. Budget for SMP, understand PAYE calculations, and avoid overpayments during leave.",
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
        "maternity pay",
        "statutory maternity pay",
        "SMP",
        "maternity leave",
        "student loan deductions",
        "PAYE calculations",
        "maternity pay threshold",
        "enhanced maternity pay",
        "unpaid maternity leave",
        "year end reconciliation",
        "student loan refunds",
        "overpayments",
        "shared parental leave",
        "maternity allowance",
        "phased return to work",
        "part time return",
        "monthly threshold",
        "annual threshold",
        "tax year timing",
        "P60 refunds",
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
        canonical: "https://studentloancalculator.uk/guides/maternity-pay-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const MaternityPayStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Maternity Pay and Student Loans", item: "https://studentloancalculator.co.uk/guides/maternity-pay-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Maternity Pay Student Loans UK: Budgeting Guide 2025/26",
        description: "How maternity pay affects UK student loan deductions. Budget for SMP, understand PAYE calculations, and avoid overpayments during leave.",
        url: "https://studentloancalculator.co.uk/guides/maternity-pay-student-loans-uk",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/maternity-pay-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/maternity-pay-student-loans-uk",
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
        wordCount: 4800,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Maternity Pay",
                description: "Statutory Maternity Pay and enhanced employer schemes during maternity leave"
            },
            {
                "@type": "Thing", 
                name: "Student Loan Deductions",
                description: "How PAYE calculates student loan deductions during periods of reduced income"
            },
            {
                "@type": "Thing",
                name: "PAYE System",
                description: "Pay As You Earn tax and student loan deduction calculations"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Do I still pay student loans during maternity leave?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, if your maternity pay exceeds the monthly threshold. During the first 6 weeks at 90% pay, you may pay student loans if this amount exceeds your plan's monthly threshold. During weeks 7-39 at statutory rate (£797/month), most people pay nothing as this falls below all thresholds. Enhanced employer schemes may extend the period of paying student loans.",
                },
            },
            {
                "@type": "Question",
                name: "How much is the statutory maternity pay rate and does it trigger student loan deductions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Statutory Maternity Pay is £184.03 per week (approximately £797 per month) for weeks 7-39. This amount is below all student loan thresholds (Plan 1: £2,082.50, Plan 2: £2,274.58, Plan 5: £2,083.33, Postgraduate: £1,750), so no student loan deductions apply during the statutory rate period.",
                },
            },
            {
                "@type": "Question",
                name: "Can I get a refund if I overpaid student loans during maternity leave?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, if your total annual income falls below the annual threshold. PAYE calculates monthly, but annual reconciliation may show overpayments. If you worked part-year then took maternity leave, your annual income might be below £27,295 (Plan 2) despite monthly deductions. Contact HMRC with your P60 to claim refunds, which can be £200-£400 for mothers who worked only part of the tax year.",
                },
            },
            {
                "@type": "Question",
                name: "How do enhanced maternity pay schemes affect student loan deductions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Enhanced schemes (full pay, half pay, or service-based) extend the period where student loan deductions continue. If your enhanced pay exceeds the monthly threshold, you'll pay 9% on the excess. For example, 6 months at full pay on a £36,000 salary means £65.29 monthly student loan deductions (£391.74 total), compared to zero during statutory rate periods.",
                },
            },
            {
                "@type": "Question",
                name: "What happens to student loans during unpaid maternity leave and phased returns?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unpaid leave means zero income and zero student loan deductions. When returning part-time, if your reduced salary falls below the monthly threshold, student loan deductions remain at zero. For example, returning at 50% of a £30,000 salary (£1,250/month) stays below the Plan 2 threshold of £2,274.58, providing several months without student loan payments while rebuilding your work routine.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <MaternityPayStudentLoans />
            </div>
        </>
    )
}

export default MaternityPayStudentLoansPage