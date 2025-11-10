import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Book, CircleDollarSign, Info, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const guides = [
    {
        icon: Book,
        section: "Comparison Guide",
        title: "How Student Loans Work",
        description: "A comprehensive guide to understanding the UK student loan system, including repayment methods, interest calculations, and long-term implications.",
        href: "/guides/how-student-loans-work-uk/"
    },
    {
        icon: Wallet,
        section: "Financial Planning",
        title: "Student Loans and Mortgages",
        description: "How do student loans affect your ability to get a mortgage? Learn what lenders consider and how you can apply.",
        href: "/guides/student-loans-and-mortgages/"
    },
    {
        icon: CircleDollarSign,
        section: "Investment Strategy",
        title: "Investing vs Loan Repayment",
        description: "Should you invest your money or make voluntary student loan repayments? This guide helps you decide.",
        href: "/guides/investing-vs-loan-repayment/"
    },
];

const ExpertResources = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">EXPERT GUIDES</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn How Student Loans Really Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Expert guides to help you navigate the complexities of UK student loans
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {guides.map((guide) => {
                        const Icon = guide.icon;
                        return (
                            <Card
                                key={guide.title}
                                className="group flex flex-col p-0 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl"
                            >
                                <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary to-[#5fa9f5] rounded-t-2xl">
                                    <Icon className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="flex-1 flex flex-col px-6 py-2 bg-white rounded-b-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Info className="w-4 h-4 text-yellow-400" />
                                        <span className="text-sm text-gray-500">{guide.section}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                                    <p className="text-gray-700 mb-4">{guide.description}</p>

                                    <Button
                                        variant="link"
                                        className="text-blue-700 mb-4 p-0 h-auto font-semibold text-base self-start underline-offset-2 transition-all duration-200 group-hover:underline"
                                    >
                                        <Link href={guide.href}>
                                            Read Guide
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        );
                    })}
                </div>
                <div className="text-center">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 hover:scale-105 text-base text-gray-900 px-6 py-2 font-semibold">
                        <Link href="/guides/">
                            View All Guides →
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ExpertResources
