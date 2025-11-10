import StudentLoansCareerProgressionPage from '@/modules/compare/student-loans-career-progression'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title:
        "How Career Progression Affects Student Loan Repayments UK 2025 | Student Loan Calculator UK",
    description:
        "Discover how salary growth patterns impact student loan repayments. Compare fast-track careers vs steady progression. Learn which career paths lead to full repayment or write-off.",
    applicationName: "Student Loan Calculator UK",
    keywords: [
        "career progression student loans",
        "salary growth impact",
        "student loan career trajectory",
        "fast track career repayment",
        "graduate salary progression uk",
        "career path student loans",
        "salary curve loan repayment",
        "early career plateau",
        "late bloomer career loans",
        "career breaks student loans",
    ],
    alternates: {
        canonical: "/compare/student-loans-career-progression/",
    },
    authors: [{ name: "Student Loan Calculator UK Team" }],
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
    formatDetection: { telephone: false, address: false, email: false },
    openGraph: {
        type: "article",
        url: "https://studentloancalculator.uk/compare/student-loans-career-progression/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        title: "How Career Progression Affects Student Loan Repayments UK",
        description:
            "Comprehensive analysis of how different salary growth patterns impact student loan repayments. Compare fast-track careers, steady climbers, and early plateaus to understand your financial trajectory.",
        images: [
            {
                url: "https://studentloancalculator.uk/images/compare/student-loans-career-progression.jpg",
                width: 1200,
                height: 630,
                alt: "Career progression patterns and their impact on UK student loan repayments",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@UKStudentCalc",
        title: "How Career Progression Affects Student Loan Repayments",
        description:
            "Understand how your career trajectory impacts lifetime student loan costs. Compare different salary growth patterns.",
        images: [
            "https://studentloancalculator.uk/images/compare/student-loans-career-progression.jpg",
        ],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
    },
};


const StudentLoansCareerProgression = () => {
    const breadcrumbLd: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://studentloancalculator.co.uk",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Compare",
                item: "https://studentloancalculator.co.uk/compare",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Career Progression Impact",
                item:
                    "https://studentloancalculator.co.uk/compare/student-loans-career-progression",
            },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How Career Progression Affects Student Loan Repayments in the UK",
        description:
            "Detailed analysis of how different career progression patterns and salary growth trajectories impact student loan repayments, from fast-track high earners to steady progressors and early plateau careers.",
        author: { 
            "@type": "Organization", 
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk"
        },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            url: "https://studentloancalculator.co.uk",
            logo: {
                "@type": "ImageObject",
                url: "https://studentloancalculator.co.uk/logo.png",
            },
        },
        url: "https://studentloancalculator.co.uk/compare/student-loans-career-progression",
        datePublished: "2025-01-15",
        dateModified: "2025-01-15",
        image:
            "https://studentloancalculator.co.uk/images/compare/student-loans-career-progression.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
                "https://studentloancalculator.co.uk/compare/student-loans-career-progression",
        },
        articleSection: "Education Finance",
        keywords: [
            "career progression",
            "salary growth",
            "student loan repayment",
            "graduate careers UK",
            "income trajectory"
        ],
    };

    const faqLd: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Why does career progression matter more than starting salary for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Career progression matters more because student loan repayments are based on 9% of income above the threshold over 30-40 years. Your total lifetime earnings above the threshold determine how much you repay, not your starting point. A graduate earning £25,000 with rapid progression to £80,000 will repay far more than someone starting at £35,000 but plateauing at £50,000, even though the latter has higher early earnings. The shape of your salary growth curve and peak salary are more important than where you start."
                }
            },
            {
                "@type": "Question",
                name: "What is a fast-track career progression pattern?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fast-track progression involves rapid salary growth in the first 5-10 years, reaching high salaries relatively young. Typical trajectory: £30,000 → £50,000 (Year 3) → £80,000 (Year 7) → £120,000+ (Year 12). Examples include investment banking, management consulting, corporate law, and tech at major companies. These graduates will definitely repay their full loan plus significant interest, typically within 10-18 years, paying 120-180% of their original loan amount."
                }
            },
            {
                "@type": "Question",
                name: "What happens if my salary plateaus early in my career?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If your salary plateaus early (quick progression to around £35,000-£38,000 then minimal growth), you'll likely repay only 20-50% of your loan before write-off. This is common in creative industries, journalism, marketing at SMEs, and hospitality management. With low to moderate monthly repayments, you'll benefit from significant write-off (50-80% of original loan), meaning there's no financial downside to borrowing the maximum amount. You should never make voluntary overpayments with this pattern."
                }
            },
            {
                "@type": "Question",
                name: "How do career breaks affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Career breaks significantly reduce lifetime student loan repayments because you only repay when earning above the threshold. Taking parental leave, sabbaticals, or career breaks means periods of no repayment, which increases the likelihood you'll benefit from write-off. Each year not working delays your repayment progress but doesn't stop interest accruing. This typically reduces lifetime repayments by 10-30%, making write-off more likely and valuable. The income-contingent system protects you during these periods."
                }
            },
            {
                "@type": "Question",
                name: "What is a 'late bloomer' career pattern for student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Late bloomers have low earnings early with significant growth later in their career. Typical trajectory: £22,000 → £26,000 (Year 7) → £45,000 (Year 15) → £70,000 (Year 22). Examples include entrepreneurs after startup phase, academics reaching senior positions, and career changers. They typically repay 50-90% of their loan, with minimal early repayments but substantial later payments. Less time at peak earnings means lower total repayment than fast-trackers. Interest accumulates during low-earning years, increasing the balance before higher repayments begin."
                }
            },
            {
                "@type": "Question",
                name: "Should I make voluntary overpayments if I have moderate career progression?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. With moderate career progression (reaching £40,000-£48,000 and plateauing mid-career), you should never make voluntary overpayments. You'll typically repay only 40-80% of your loan before write-off in 30-40 years, meaning significant write-off benefit. Your loan balance doesn't matter since you won't repay it all anyway. Instead, focus excess funds on investing, emergency fund, pension, or house deposit. Your student loan effectively functions as a graduate tax, not traditional debt, with this progression pattern."
                }
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd, faqLd]} />
            <div>
                <StudentLoansCareerProgressionPage />
            </div>
        </>
    )
}

export default StudentLoansCareerProgression