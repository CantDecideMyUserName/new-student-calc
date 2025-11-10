import StudentLoanTaxCodePayslip from '@/modules/guides/student-loan-tax-code-payslip-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Student Loan Tax Code & Payslip Guide UK 2025/26",
    description: "How to read your payslip and tax code for student loan deductions. Understanding PAYE calculations, tax code errors, and ensuring correct deductions.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "tax code",
        "payslip",
        "PAYE",
        "student finance",
        "loan repayments",
        "tax code errors",
        "payslip understanding",
        "SL marker",
        "PGL marker",
        "1257L SL",
        "1257L PGL",
        "BR SL",
        "W1 M1 codes",
        "cumulative tax",
        "non cumulative tax",
        "emergency tax code",
        "monthly threshold",
        "student loan deduction",
        "overpayment refund",
        "P45 P60",
        "year to date",
        "variable income",
        "bonus impact",
        "multiple jobs",
        "payroll errors",
        "HMRC refund",
        "tax code markers",
        "student loan verification",
        "payslip checking",
        "deduction calculation",
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
        canonical: "https://studentloancalculator.uk/guides/student-loan-tax-code-payslip-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const StudentLoanTaxCodePayslipPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Tax Code and Payslip Guide", item: "https://studentloancalculator.co.uk/guides/student-loan-tax-code-payslip-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Student Loan Tax Code & Payslip Guide UK 2025/26",
        description: "How to read your payslip and tax code for student loan deductions. Understanding PAYE calculations, tax code errors, and ensuring correct deductions.",
        url: "https://studentloancalculator.co.uk/guides/student-loan-tax-code-payslip-uk",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/student-loan-tax-code-payslip-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/student-loan-tax-code-payslip-uk",
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
        wordCount: 9200,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "UK Tax Codes for Student Loans",
                description: "Understanding tax code markers (SL, PGL) that determine student loan deductions from salary"
            },
            {
                "@type": "Thing", 
                name: "Payslip Interpretation",
                description: "How to read UK payslips to verify correct student loan deductions and identify overpayments"
            },
            {
                "@type": "Thing",
                name: "PAYE Student Loan Calculations",
                description: "Monthly calculation methods for student loan deductions through Pay As You Earn system"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What do the letters SL and PGL mean in my tax code?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "SL means Student Loan - your employer will deduct undergraduate loan repayments (9% above your plan threshold). PGL means Postgraduate Loan - your employer will deduct postgraduate loan repayments (6% above £21,000). If you have both undergraduate and postgraduate loans, your tax code should show both markers (e.g., '1257L SL PGL') and your employer deducts both separately. Missing markers mean no deductions occur, creating arrears you'll owe later with interest.",
                },
            },
            {
                "@type": "Question",
                name: "How do I calculate if my monthly student loan deduction is correct?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Take your monthly gross pay, subtract your plan's monthly threshold (Plan 2: £2,274.58, Plan 5: £2,083.33, Postgraduate: £1,750), then multiply by the repayment rate (9% for undergraduate, 6% for postgraduate). Example: £2,800 gross - £2,274.58 Plan 2 threshold = £525.42 × 9% = £47.29 monthly deduction. If your payslip shows a different amount, there may be an error in your tax code or payroll calculation.",
                },
            },
            {
                "@type": "Question",
                name: "What's the difference between cumulative and W1/M1 tax codes?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cumulative codes (normal) account for your entire tax year position, adjusting for previous months if you were over or underpaid. W1/M1 codes (emergency/non-cumulative) treat each pay period independently, often causing overpayment for variable income. Example: earning £2,000 in April/May then £3,500 in June would trigger £110 student loan deduction in June with W1/M1, but only £60.86 total for all three months with cumulative. W1/M1 codes should be temporary.",
                },
            },
            {
                "@type": "Question",
                name: "Why am I paying student loans on my second job when my total income is below the threshold?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Second jobs typically get BR SL tax codes, meaning all income from that job has student loans deducted (the BR code assumes your main job uses your personal allowance and threshold). Example: £2,000 main job (no deductions) + £800 second job with BR SL = £72 monthly student loan deductions, totaling £864 annually. But with £33,600 combined income, you should only pay £567 annually, so you're overpaying £296. Claim a refund through HMRC after year-end.",
                },
            },
            {
                "@type": "Question",
                name: "How do I claim a refund if I've overpaid student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Wait for your P60 in May, calculate your correct annual liability using (gross pay - annual threshold) × repayment rate, and compare to what you actually paid. If you overpaid by more than £25-50, contact HMRC on 0300 200 3300 or through your Personal Tax Account online. Provide your P60 as evidence and explain why you overpaid (part-year work, variable income, multiple jobs, etc.). Refunds typically take 6-8 weeks to process and are paid by bank transfer.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <StudentLoanTaxCodePayslip />
            </div>
        </>
    )
}

export default StudentLoanTaxCodePayslipPage