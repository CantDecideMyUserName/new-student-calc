import StudentLoansOn25kSalaryPage from '@/modules/compare/student-loans-on-25k-salary'
import React from 'react'
import { Metadata } from 'next';
import { JsonLd } from '@/modules/seo/json-ld';
import { BreadcrumbList, Article, WithContext } from 'schema-dts';

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title:
        "Student Loans on a £25,000 Salary - UK Repayment Comparison Guide | Student Loan Calculator UK",
    description:
        "How much student loan will you repay on a £25,000 salary? Compare monthly and annual payments across different UK loan plans at this income level.",
    applicationName: "Student Loan Calculator UK",
    keywords: [
        "student loan calculator",
        "UK student loan",
        "plan 1 calculator",
        "plan 2 calculator",
        "plan 4 calculator",
        "plan 5 calculator",
        "postgraduate loan",
        "student finance",
        "loan repayments",
        "25k salary",
    ],
    alternates: {
        canonical: "/compare/student-loans-on-25k-salary/",
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
        url: "https://studentloancalculator.uk/compare/student-loans-on-25k-salary/",
        siteName: "Student Loan Calculator UK",
        locale: "en_GB",
        title: "Student Loans on a £25,000 Salary | UK Repayment Guide",
        description:
            "Detailed breakdown of student loan repayments for graduates earning £25k. See how much you'll pay on each plan type and the impact on your take-home pay.",
        images: [
            {
                url: "https://studentloancalculator.uk/images/compare/student-loans-on-25k-salary.jpg",
                width: 1200,
                height: 630,
                alt: "Repayment comparison at a £25k salary across UK student loan plans",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@UKStudentCalc",
        title: "Student Loans on a £25,000 Salary | UK Repayment Guide",
        description:
            "Detailed breakdown of student loan repayments for graduates earning £25k, by plan type and impact on take-home pay.",
        images: [
            "https://studentloancalculator.uk/images/compare/student-loans-on-25k-salary.jpg",
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


const StudentLoansOn25kSalary = () => {
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
                name: "Student Loans on £25k Salary",
                item:
                    "https://studentloancalculator.co.uk/compare/student-loans-on-25k-salary",
            },
        ],
    };

    const articleLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Student Loan Repayments on a £25,000 Salary - UK Comparison",
        description:
            "Complete comparison of UK student loan repayments for graduates earning £25,000 per year across all plan types, including take-home pay impact.",
        author: { "@type": "Organization", name: "Student Loan Calculator UK" },
        publisher: {
            "@type": "Organization",
            name: "Student Loan Calculator UK",
            logo: {
                "@type": "ImageObject",
                url: "https://studentloancalculator.co.uk/logo.png",
            },
        },
        url: "https://studentloancalculator.co.uk/compare/student-loans-on-25k-salary",
        datePublished: "2023-10-01",
        dateModified: "2023-12-10",
        image:
            "https://studentloancalculator.co.uk/images/compare/student-loans-on-25k-salary.jpg",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
                "https://studentloancalculator.co.uk/compare/student-loans-on-25k-salary",
        },
    };

    return (
        <>
            <JsonLd code={[breadcrumbLd, articleLd]} />
            <div>
                <StudentLoansOn25kSalaryPage />
            </div>
        </>
    )
}

export default StudentLoansOn25kSalary