import StudentLoansByProfessionPage from '@/modules/compare/student-loans-by-profession'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext, FAQPage } from 'schema-dts';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title:
        "Student Loan Repayments by Profession UK: Career Impact Guide 2025 | Student Loan Calculator UK",
    description:
        "How different UK careers affect student loan repayments. Compare doctors, teachers, engineers, and more. Discover which professions lead to full repayment vs write-off.",
    applicationName: "Student Loan Calculator UK",
    keywords: [
        "student loan by profession uk",
        "doctor student loan repayment",
        "teacher student loan",
        "engineer loan repayment",
        "lawyer student loan uk",
        "nurse student loan",
        "graduate salary student loan",
        "career student loan impact",
        "profession loan repayment",
        "uk graduate careers",
        "student loan by career",
        "high earning careers student loan",
    ],
    alternates: {
        canonical: "/compare/student-loans-by-profession/",
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
        url: "https://studentloancalculator.uk/compare/student-loans-by-profession/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        title: "Student Loan Repayments by Profession: UK Career Guide 2025",
        description:
            "Comprehensive analysis of how different UK careers affect student loan repayments. Compare doctors, teachers, engineers, lawyers, and more to understand your profession's impact on lifetime loan costs.",
        images: [
            {
                url: "https://studentloancalculator.uk/images/compare/student-loans-by-profession.jpg",
                width: 1200,
                height: 630,
                alt: "Student loan repayments comparison across UK professions and careers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@UKStudentCalc",
        title: "Student Loan Repayments by Profession: UK Career Guide",
        description:
            "How different UK careers affect student loan repayments. Compare lifetime costs across professions from medicine to teaching.",
        images: [
            "https://studentloancalculator.uk/images/compare/student-loans-by-profession.jpg",
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


const StudentLoansByProfession = () => {
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
                name: "Student Loans by Profession",
                item:
                    "https://studentloancalculator.co.uk/compare/student-loans-by-profession",
            },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Student Loan Repayments by Profession: UK Career Impact Guide 2025",
        description:
            "Comprehensive analysis of how different UK careers affect student loan repayments, from high-earning professions like medicine and law to middle and lower-income careers.",
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
        url: "https://studentloancalculator.co.uk/compare/student-loans-by-profession",
        datePublished: "2025-01-15",
        dateModified: "2025-01-15",
        image:
            "https://studentloancalculator.co.uk/images/compare/student-loans-by-profession.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
                "https://studentloancalculator.co.uk/compare/student-loans-by-profession",
        },
        articleSection: "Education Finance",
        keywords: [
            "student loan by profession",
            "career impact on student loans",
            "doctor student loan",
            "teacher student loan",
            "graduate salaries UK"
        ],
    };

    const faqLd: WithContext<FAQPage> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Which professions will fully repay their student loans in the UK?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "High-earning professions typically fully repay their student loans including doctors and consultants (£85,000-£120,000+), corporate lawyers (£80,000-£150,000+), investment bankers (£120,000-£300,000+), and senior software engineers at major tech companies (£70,000-£120,000+). These graduates usually repay their full loan balance plus interest within 10-25 years, meaning voluntary overpayments could potentially save money on interest."
                }
            },
            {
                "@type": "Question",
                name: "Do teachers fully repay their student loans in the UK?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most teachers will not fully repay their student loans before the write-off period. With starting salaries of £28,000-£30,000 and mid-career salaries of £35,000-£50,000, teachers typically repay only 50-70% of their loan balance before the 30-year write-off (Plan 2) or 40-year write-off (Plan 5). This means teachers should not make voluntary overpayments and their student loan effectively functions as a graduate tax rather than traditional debt."
                }
            },
            {
                "@type": "Question",
                name: "How much do nurses repay on their student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nurses typically repay 40-60% of their student loan before write-off. With NHS Band 5 starting salaries of £28,000-£34,000 and Band 6-7 progression to £35,000-£48,000, a nurse earning £38,000 would pay approximately £80/month on a Plan 2 loan. Most nurses will benefit significantly from the loan write-off system and should focus on other financial priorities rather than voluntary loan overpayments."
                }
            },
            {
                "@type": "Question",
                name: "Which careers benefit most from student loan write-off?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lower-earning professions benefit most from loan write-off, typically repaying less than 40% of their balance. These include social workers (£26,000-£45,000 salaries), creative arts professionals (£18,000-£40,000), journalists and media workers (£20,000-£50,000), and hospitality managers (£18,000-£40,000). For these careers, student loans truly function as a graduate tax with no financial downside to borrowing the maximum amount, as most of the debt will be written off."
                }
            },
            {
                "@type": "Question",
                name: "Do accountants fully repay their student loans?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Accountants are in a 'borderline' category where outcomes vary significantly based on career path. Starting salaries range from £25,000-£35,000, with mid-career qualified accountants earning £45,000-£70,000. Those reaching senior positions at Big Four firms or in corporate finance may fully repay their loans, while accountants in industry or smaller practices will likely benefit from write-off."
                }
            },
            {
                "@type": "Question",
                name: "How do career breaks affect student loan repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Career breaks significantly reduce lifetime student loan repayments because you only repay when earning above the threshold. Working part-time or taking extended breaks for family, travel, or other reasons means less total repayment before the write-off date. This makes the loan write-off even more likely and valuable, particularly for professions where career breaks are common."
                }
            },
        ],
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd, faqLd]} />
            <div>
                <StudentLoansByProfessionPage />
            </div>
        </>
    )
}

export default StudentLoansByProfession