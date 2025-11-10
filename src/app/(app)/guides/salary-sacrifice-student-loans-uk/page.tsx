import SalarySacrificeStudentLoans from '@/modules/guides/salary-sacrifice-student-loans-uk'
import React from 'react'
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Salary Sacrifice & Student Loans UK: Reduce Repayments 2025/26",
    description: "How salary sacrifice reduces UK student loan deductions. Save money through pension contributions, cycle to work, EVs, and childcare vouchers.",
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
        "salary sacrifice",
        "pension salary sacrifice",
        "cycle to work scheme",
        "electric vehicle salary sacrifice",
        "childcare vouchers",
        "reduce student loan payments",
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
        canonical: "https://studentloancalculator.uk/guides/salary-sacrifice-student-loans-uk/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const SalarySacrificeStudentLoansPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Guides", item: "https://studentloancalculator.co.uk/guides" },
            { "@type": "ListItem", position: 3, name: "Salary Sacrifice and Student Loans", item: "https://studentloancalculator.co.uk/guides/salary-sacrifice-student-loans-uk" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Salary Sacrifice & Student Loans UK: Reduce Repayments 2025/26",
        description: "How salary sacrifice reduces UK student loan deductions. Save money through pension contributions, cycle to work, EVs, and childcare vouchers.",
        url: "https://studentloancalculator.co.uk/guides/salary-sacrifice-student-loans-uk",
        datePublished: "2025-05-09",
        dateModified: "2025-05-09",
        image: "https://studentloancalculator.co.uk/images/guides/salary-sacrifice-student-loans-uk.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/guides/salary-sacrifice-student-loans-uk",
        },
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How does salary sacrifice reduce student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Salary sacrifice reduces your gross salary before PAYE calculations, which directly reduces student loan deductions. Every pound you sacrifice saves 9% in student loan payments (Plan 2), plus tax and National Insurance savings. For example, a £2,400 annual pension sacrifice saves £216 in student loans on top of other deduction savings.",
                },
            },
            {
                "@type": "Question",
                name: "What salary sacrifice schemes are available in the UK?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Common salary sacrifice schemes include workplace pensions, cycle to work schemes (bikes), electric vehicle leasing, technology schemes (laptops/phones), and legacy childcare vouchers. Each reduces your gross salary and provides the benefit directly from your employer, creating tax, National Insurance, and student loan savings.",
                },
            },
            {
                "@type": "Question",
                name: "How much can I save through salary sacrifice?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Salary sacrifice typically provides a 40-45% discount on benefits through combined savings on tax (20-45%), National Insurance (12%), and student loans (9% undergraduate, 6% postgraduate). For example, a £1,000 bike through cycle to work only costs £590 of net pay after all savings.",
                },
            },
            {
                "@type": "Question",
                name: "Can I use multiple salary sacrifice schemes at once?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can typically combine multiple schemes simultaneously. For example, £3,000 pension + £1,000 cycle to work + £4,200 EV (total £8,200) on a £40,000 salary would save £738 annually in student loans alone, plus substantial tax and National Insurance savings while receiving all the benefits.",
                },
            },
            {
                "@type": "Question",
                name: "When doesn't salary sacrifice make sense for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Salary sacrifice provides minimal student loan benefit if you're already below the repayment threshold, or if sacrifice would push you below it with small savings. Also consider if you need higher net pay for mortgage applications or immediate financial pressures, though the tax and NI savings still apply.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <SalarySacrificeStudentLoans />
            </div>
        </>
    )
}

export default SalarySacrificeStudentLoansPage