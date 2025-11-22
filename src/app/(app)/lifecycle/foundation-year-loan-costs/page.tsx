import FoundationYearLoanCosts from '@/modules/lifecycle/foundation-year-loan-costs';
import React from 'react';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Foundation Year Student Loan Costs: 4-Year Degree Implications | 2025",
    description: "Complete guide to foundation year funding, extra year costs, 4-year vs 3-year degree comparison, and alternative pathways to university.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
    keywords: ["foundation year student loans", "4-year degree costs", "foundation year funding", "extra year student debt", "foundation vs direct entry", "Year 0 loans", "Access to HE", "foundation year value", "integrated foundation year"],
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
        canonical: "https://studentloancalculator.uk/lifecycle/foundation-year-loan-costs/",
    },
};

const FoundationYearPage = () => {
    const breadcrumbSchema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
            { "@type": "ListItem", position: 2, name: "Student Loan Lifecycle", item: "https://studentloancalculator.co.uk/lifecycle" },
            { "@type": "ListItem", position: 3, name: "Foundation Year Loan Costs", item: "https://studentloancalculator.co.uk/lifecycle/foundation-year-loan-costs" },
        ],
    };

    const articleSchema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Foundation Year Student Loan Costs: 4-Year Degree Implications",
        description: "Understanding extra year funding, total cost comparison, and ROI analysis for foundation year programs.",
        url: "https://studentloancalculator.co.uk/lifecycle/foundation-year-loan-costs",
        datePublished: "2025-11-22",
        dateModified: "2025-11-22",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://studentloancalculator.co.uk/lifecycle/foundation-year-loan-costs" },
        author: { "@type": "Organization", name: "Student Loan Calculator UK", url: "https://studentloancalculator.co.uk" },
        publisher: { "@type": "Organization", name: "Student Loan Calculator UK", url: "https://studentloancalculator.co.uk" },
        wordCount: 3000,
        articleSection: "Student Loan Lifecycle",
    };

    const faqSchema: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How much more does a foundation year add to student debt?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A foundation year adds approximately £19,500 in direct additional debt (£9,250 tuition + £10,227 maintenance loan). With interest accumulation during study, foundation route graduates typically start with £22,000-£25,000 more debt than 3-year direct entry students. However, for moderate earners who won't fully repay under Plan 5, this extra debt makes no difference to total repayment—both pay 9% above the threshold until write-off."
                }
            },
            {
                "@type": "Question",
                name: "Are foundation years fundable by Student Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, foundation years (Year 0) are fully fundable by Student Finance England. You receive tuition fee loans and maintenance loans for all four years identically to your three main degree years. The foundation year counts against your total student finance eligibility (typically 4 years for 3-year courses + 1 additional year)."
                }
            }
        ]
    };

    return (
        <>
            <JsonLd code={[breadcrumbSchema, articleSchema, faqSchema]} />
            <div><FoundationYearLoanCosts /></div>
        </>
    )
}

export default FoundationYearPage
