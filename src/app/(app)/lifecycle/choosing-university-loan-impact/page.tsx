import ChoosingUniversityLoanImpact from '@/modules/lifecycle/choosing-university-loan-impact';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Choosing University: How Your Decision Affects 40 Years of Student Loan Debt | 2025",
    description: "Complete guide to university choice and student loan impact. Russell Group vs polytechnic costs, London premium analysis, and course-specific ROI calculations.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: [
        "choosing university student loans",
        "Russell Group loan cost",
        "polytechnic vs Russell Group",
        "London university premium",
        "university choice ROI",
        "course specific earnings",
        "graduate salary by university",
        "student loan impact university choice",
        "expensive university worth it",
        "maintenance loan by city",
        "accommodation costs student",
        "university prestige earnings",
        "degree subject earnings",
        "LSE vs other universities cost",
        "Oxbridge loan debt"
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
        canonical: "https://studentloancalculator.uk/lifecycle/choosing-university-loan-impact/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const ChoosingUniversityPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Choosing University: Loan Impact", item: "https://studentloancalculator.co.uk/lifecycle/choosing-university-loan-impact" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Choosing University: How Your Decision Affects 40 Years of Student Loan Debt",
        description: "Complete guide to university choice and student loan impact, covering Russell Group vs polytechnic costs, London premium analysis, and course-specific ROI calculations.",
        url: "https://studentloancalculator.co.uk/lifecycle/choosing-university-loan-impact",
        datePublished: "2025-11-22",
        dateModified: "2025-11-22",
        image: "https://studentloancalculator.co.uk/images/lifecycle/choosing-university.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://studentloancalculator.co.uk/lifecycle/choosing-university-loan-impact",
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
        wordCount: 3500,
        articleSection: "Student Loan Lifecycle",
        about: [
            {
                "@type": "Thing",
                name: "University Choice and Student Loans",
                description: "How choosing between universities affects total student loan debt and repayment over 40 years"
            },
            {
                "@type": "Thing",
                name: "Russell Group Premium",
                description: "Cost-benefit analysis of attending prestigious Russell Group universities vs other institutions"
            },
            {
                "@type": "Thing",
                name: "London Student Living Costs",
                description: "Impact of studying in London on student loan debt and maintenance loan adequacy"
            }
        ],
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Does attending a Russell Group university affect my student loan repayment?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The impact depends on your subject and career. For high-earning careers like investment banking, consulting, or corporate law, Russell Group universities often lead to £8,000-£15,000 higher starting salaries, justifying the extra debt. However, for careers with standardized pay (teaching, nursing, NHS medicine), university choice doesn't affect earnings or repayment. The extra debt from London living costs may never be repaid if you're unlikely to earn above £40,000 consistently.",
                },
            },
            {
                "@type": "Question",
                name: "Is studying in London worth the extra £8,000+ debt?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "London adds approximately £8,000-£10,000 to your total 3-year student debt due to higher living costs that exceed the increased maintenance loan. This is worthwhile if: (1) the London university is significantly stronger for your subject (e.g., LSE for economics, Imperial for engineering), (2) you're targeting careers where London universities have demonstrably better recruitment (finance, consulting, law), or (3) you'll realistically earn £45,000+ within 5 years, making the extra debt immaterial. For standardized-pay careers or moderate earnings, the London premium rarely delivers positive ROI.",
                },
            },
            {
                "@type": "Question",
                name: "How much does university choice affect my lifetime earnings?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Subject choice matters more than university choice for most careers. A computer science graduate from any university typically earns £32,000-£42,000 five years post-graduation, with university tier having minimal impact. However, for economics, law, and some business degrees, Russell Group graduates can earn £8,000-£12,000 more initially, though this gap often narrows over time. Medicine, dentistry, teaching, and nursing show almost zero university tier earnings differential due to standardized NHS and public sector pay scales.",
                },
            },
            {
                "@type": "Question",
                name: "What's the cheapest UK city to study in for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most affordable UK university cities for student accommodation are Stoke, Wolverhampton, Hull, Sunderland, Preston, and Lancaster, with typical rent of £85-£135 per week. These cities allow the maximum maintenance loan (£196/week outside London) to cover rent plus living expenses, potentially requiring zero parental contribution. This contrasts with London (£200-£350/week), Oxford/Cambridge (£180-£280/week), and Brighton or Edinburgh (£150-£240/week), where significant parental contributions or part-time work are necessary.",
                },
            },
            {
                "@type": "Question",
                name: "Should I choose university based on student loan minimization?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For most students under Plan 5 (post-2023 starters), minimizing debt only matters if you're on track to fully repay your loan. If your realistic career path suggests earnings under £40,000 for most of your career, you'll likely never fully repay regardless of whether you borrow £45,000 or £65,000—both scenarios reach the 40-year write-off. In this case, choose the university that offers the best educational experience within reason. However, if you're targeting high-earning careers (£50,000+ within 10 years), minimizing debt through cheaper accommodation can save you £10,000-£20,000 in actual repayments.",
                },
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div>
                <ChoosingUniversityLoanImpact />
            </div>
        </>
    )
}

export default ChoosingUniversityPage
