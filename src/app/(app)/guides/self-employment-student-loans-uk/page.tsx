import SelfEmploymentStudentLoans from '@/modules/guides/self-employment-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Self-Employment Student Loans UK: Freelancer's Guide 2025/26",
    description: "Complete guide to UK student loan repayments for self-employed and freelancers. Self Assessment calculations, profit vs revenue, and avoiding penalties.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "student loan calculator",
        "uk student loan",
        "self employed student loans",
        "freelancer student loans",
        "self assessment",
        "student finance",
        "loan repayments",
        "self employment strategy",
        "freelancer guide",
        "profit vs revenue",
        "business expenses",
        "self assessment deadline",
        "mixed income",
        "employment self employment",
        "late payment penalties",
        "hmrc penalties",
        "setting aside money",
        "quarterly payments",
        "payments on account",
        "sole trader",
        "limited company",
        "partnership",
        "business structure",
        "record keeping",
        "allowable expenses",
        "non allowable expenses",
        "tax codes",
        "moving abroad self employed",
        "self employment losses",
        "business deductions",
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
        canonical: "https://studentloancalculator.uk/guides/self-employment-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const SelfEmploymentStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Self-Employment Student Loans", item: "https://studentloancalculator.co.uk/guides/self-employment-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Self-Employment Student Loans UK: Freelancer's Guide 2025/26",
        description: "Complete guide to UK student loan repayments for self-employed and freelancers. Self Assessment calculations, profit vs revenue, and avoiding penalties.",
        url: "https://studentloancalculator.co.uk/guides/self-employment-student-loans-uk",
        datePublished: "2025-10-27",
        dateModified: "2025-10-27",
        image: "https://studentloancalculator.co.uk/images/guides/self-employment-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/self-employment-student-loans-uk",
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
        wordCount: 8500,
        articleSection: "Student Loan Guides",
        about: [
            {
                "@type": "Thing",
                name: "Self-Employed Student Loan Repayments",
                description: "UK student loan obligations for freelancers and self-employed individuals through Self Assessment"
            },
            {
                "@type": "Thing", 
                name: "Self Assessment Tax Returns",
                description: "Annual tax filing requirements for self-employed people including student loan calculations"
            },
            {
                "@type": "Thing",
                name: "Business Expense Deductions",
                description: "Allowable business expenses that reduce profit and student loan obligations for self-employed"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do student loans work for self-employed people?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Self-employed people calculate their own student loan obligations based on profit (not revenue), report it through Self Assessment, and pay annually by January 31st. No automatic deductions occur - you're responsible for calculating 9% of profit above your plan threshold (e.g., £27,295 for Plan 2) and setting aside money throughout the year. Business expenses reduce your profit and therefore your student loan obligation.",
                },
            },
            {
                "@type": "Question",
                name: "What's the difference between revenue and profit for student loan calculations?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Revenue is all money received from clients before expenses. Profit is revenue minus legitimate business expenses - this is what student loans are calculated on. Example: £45,000 revenue minus £8,500 business expenses = £36,500 profit. Student loans are calculated on the £36,500, not the £45,000, potentially saving hundreds in student loan payments. Only allowable business expenses (wholly and exclusively for business) count.",
                },
            },
            {
                "@type": "Question",
                name: "How much money should I set aside for student loans as self-employed?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Set aside 40-50% of profit for all taxes and student loans combined. For basic rate taxpayers: 20% income tax + 9% National Insurance + 9% student loans = 38% total. For higher rate taxpayers: 40% income tax + 2% NI + 9% student loans = 51% total. Open a separate savings account and transfer this percentage immediately when paid by clients to avoid January payment shock.",
                },
            },
            {
                "@type": "Question",
                name: "What happens if I have both employment and self-employment income?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Both incomes are combined for student loan calculations through Self Assessment. PAYE deductions from employment may not cover your full obligation once self-employment profit is added. Example: £20,000 employment (below threshold, £0 PAYE deductions) + £15,000 self-employment profit = £35,000 total, meaning you owe £693 through Self Assessment despite neither income individually triggering repayments.",
                },
            },
            {
                "@type": "Question",
                name: "What are the penalties for late Self Assessment filing or payment?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Late filing: £100 immediate penalty, then £10/day for 3 months (max £900), then 5% of tax due if over 6 months late. Late payment: 5% of unpaid amount if 30 days late, another 5% at 6 months, another 5% at 12 months, plus daily interest at ~7-8%. Example: £6,500 owed, 6 weeks late = £100 filing + £325 payment penalty + ~£50 interest = £475 extra cost. Always file and pay by January 31st.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <SelfEmploymentStudentLoans />
            </div>
        </>
    )
}

export default SelfEmploymentStudentLoansPage