import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link';
import React from 'react'

const comparisonCards = [
    {
        left: { label: "P2", bg: "bg-blue-600" },
        right: { label: "P5", bg: "bg-green-500" },
        title: "Plan 2 vs Plan 5",
        description: "Compare Plan 2 and Plan 5 student loans side-by-side and see which is more costly for your career path.",
        href: "/compare/plan-2-vs-plan-5/"
    },
    {
        left: { label: "P5", bg: "bg-blue-600" },
        right: { label: "PG", bg: "bg-yellow-500" },
        title: "Undergraduate vs Postgraduate",
        description: "Compare undergraduate Plan 5 and postgraduate loans side-by-side and see which is more costly for your career path.",
        href: "/compare/undergraduate-vs-postgraduate/"
    },
    {
        left: { label: "£50k", bg: "bg-blue-600" },
        right: null,
        title: "Loans on £50k Salary",
        description: "See how much you'll repay as a higher earner on a £50,000 salary with detailed repayment breakdowns.",
        href: "/compare/student-loans-on-50k-salary/"
    }
];

const ComparisionSection = () => {
    return (
        <div>
            <section className="container mx-auto max-w-6xl  px-4 py-16">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">PLAN BY PLAN COMPARISON</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Different Student Loan Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See how different loan plans stack up for your career path and income level
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {comparisonCards.map(card => (
                        <Card key={card.title} className="group relative overflow-visible hover:shadow-lg transition-shadow hover:border-1 border-transparent hover:border-accent">
                            <div className="absolute top-0 right-0 w-15 h-15 bg-accent/20 rounded-bl-full z-0 transition-colors duration-300 ease-in-out group-hover:bg-accent/40" />
                            <CardHeader>
                                <div className="flex items-center rounded-lg justify-center gap-4 mb-4">
                                    <div className={`w-12 h-12 ${card.left.bg} rounded-full flex items-center justify-center text-white font-bold`}>
                                        {card.left.label}
                                    </div>
                                    {card.right && (
                                        <>
                                            <span className="text-gray-400 font-semibold">VS</span>
                                            <div className={`w-12 h-12 ${card.right.bg} rounded-full flex items-center justify-center text-white font-bold`}>
                                                {card.right.label}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <CardTitle className="text-center text-2xl">{card.title}</CardTitle>
                                <CardDescription className="text-center text-base">{card.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href={card.href}>
                                    <Button className="w-full">Compare Now →</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Button variant="outline" size="lg">
                        <Link href="/compare/">
                            View All Comparisons →
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ComparisionSection
