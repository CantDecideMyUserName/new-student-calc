import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const calculators = [
    {
        title: "Plan 5 Calculator",
        description: "For students starting from 2023 in England & Wales. Calculate your monthly repayments and total loan cost.",
        icon: <Calculator className="w-12 h-12 text-blue-600" />,
        badge: { label: "Most Popular" },
        button: "Try Now ",
        href: "/calculators/plan-5-student-loan-calculator/"
    },
    {
        title: "Write-off Calculator",
        description: "Find out when your student loan will be written off based on your plan, graduation year, and tuition.",
        icon: <Calendar className="w-12 h-12 text-blue-600" />,
        badge: { label: "Popular" },
        button: "Try Now ",
        href: "/calculators/loan-writeoff-checker/"
    },
    {
        title: "Income Comparison",
        description: "Compare your take home pay with different student loans to see how each plan impacts your monthly income.",
        icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
        badge: null,
        button: "Try Now ",
        href: "/calculators/student-loan-income-comparison/"
    },
    {
        title: "Invest or Repay?",
        description: "Should you invest your money or make voluntary student loan repayments? This calculator helps you decide the optimal strategy.",
        icon: <DollarSign className="w-12 h-12 text-blue-600" />,
        badge: null,
        button: "Try Now ",
        href: "/calculators/investment-vs-overpayment-calculator/"
    }
]

const PopularCalculator = () => {
    return (
        <section className="container mx-auto max-w-6xl px-4 py-16">
            <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">LOAN TOOLS</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Most Popular Calculators</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Quick, accurate tools to help you understand your student loan commitments
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {calculators.map((calc) => (
                    <Card
                        key={calc.title}
                        className="group relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow hover:border-1 border-transparent hover:border-secondary"
                    >
                        <div className="absolute top-0 right-0 w-15 h-15 bg-secondary/20 rounded-bl-full z-0 transition-colors duration-300 ease-in-out group-hover:bg-secondary/40" />

                        {calc.badge && (
                            <div className="absolute top-4 right-4 text-xs bg-yellow-400 text-white px-2 py-1 rounded-full">
                                {calc.badge.label}
                            </div>
                        )}

                        <CardHeader>
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
                            >
                                {calc.icon}
                            </div>
                            <CardTitle className="text-2xl">{calc.title}</CardTitle>
                            <CardDescription className="text-base">{calc.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={calc.href} className="w-full">
                                <Button className="w-full md:w-auto">{calc.button}</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Button variant="outline" className="hover:bg-primary text-primary hover:text-white px-4 py-2 border-2 border-primary">
                    <Link href="/calculators/">
                        View All Calculators
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default PopularCalculator
