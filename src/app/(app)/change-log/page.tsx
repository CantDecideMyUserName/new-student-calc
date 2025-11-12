import ChangelogComponent from '@/modules/change-log/change-log';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://studentloancalculator.uk"),
    title: "Change Log | New & Old Version Information",
    description: "Change log for Student Loan Calculator UK. See what's new and what's changed in our calculators, guides, and tools.",
    applicationName: "Student Loan Calculator UK",
    authors: [{ name: "Student Loan Calculator UK Team" }],
    generator: "Next.js",
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
        canonical: "https://studentloancalculator.uk/change-log/",
    },
    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },
};

const ChangeLogPage = () => {
    return (
        <div>
            <ChangelogComponent />
        </div>
    )
}

export default ChangeLogPage