import Link from 'next/link'
import React from 'react'

const Plan1vsPlan2Page = () => {
    return (
        <main className="min-h-screen">
            {/* Hero / breadcrumb */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mt-6">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center">
                                <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/compare/">Compare</Link></li>
                            <li className="flex items-center">
                                <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Plan 1 vs Plan 2</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Plan 1 vs Plan 2 Student Loans
                    </h1>
                    <p className="text-xl text-gray-600">
                        Comparing pre-2012 and post-2012 UK student loan repayment plans
                    </p>
                </div>
            </section>

            {/* Key differences */}
            <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Differences at a Glance</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2 text-left">Feature</th>
                                <th className="border px-4 py-2 text-left bg-blue-50">Plan 1</th>
                                <th className="border px-4 py-2 text-left bg-purple-50">Plan 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Who has it?</td>
                                <td className="border px-4 py-2 bg-blue-50">
                                    Students who started before Sept 2012 in England/Wales, or Northern Irish students
                                </td>
                                <td className="border px-4 py-2 bg-purple-50">
                                    Students who started between Sept 2012 and Aug 2023 in England/Wales
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Repayment Threshold</td>
                                <td className="border px-4 py-2 bg-blue-50">£22,015 per year</td>
                                <td className="border px-4 py-2 bg-purple-50">£27,295 per year</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Interest Rate</td>
                                <td className="border px-4 py-2 bg-blue-50">
                                    Lower of RPI or Bank of England base rate + 1%
                                </td>
                                <td className="border px-4 py-2 bg-purple-50">
                                    Variable from RPI to RPI+3% depending on income
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Write-off Period</td>
                                <td className="border px-4 py-2 bg-blue-50">25 years after graduation or age 65</td>
                                <td className="border px-4 py-2 bg-purple-50">30 years after graduation</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Average Loan Size</td>
                                <td className="border px-4 py-2 bg-blue-50">£12,000-£25,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£40,000-£60,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-8">
                    <p className="text-gray-600">
                        Plan 1 and Plan 2 are the two main undergraduate student loan types in the UK, introduced at
                        different times and with significantly different terms. This guide provides a detailed comparison
                        to help you understand the key differences and how they affect your repayments.
                    </p>
                </div>
            </section>

            {/* Repayment comparison */}
            <section className="max-w-6xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Repayment Comparison
                </h2>

                <div className="prose max-w-none text-gray-600">
                    <p>
                        The most obvious difference between Plan 1 and Plan 2 is when you&apos;ll start making repayments.
                        With Plan 1&apos;s lower threshold (£22,015), you&apos;ll start repaying sooner than with Plan 2 (£27,295).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Monthly Repayment Comparison</h3>

                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2 text-left">Annual Salary</th>
                                <th className="border px-4 py-2 text-left bg-blue-50">Plan 1 Monthly Repayment</th>
                                <th className="border px-4 py-2 text-left bg-purple-50">Plan 2 Monthly Repayment</th>
                                <th className="border px-4 py-2 text-left">Difference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">£25,000</td>
                                <td className="border px-4 py-2 bg-blue-50">£22.40</td>
                                <td className="border px-4 py-2 bg-purple-50">£0</td>
                                <td className="border px-4 py-2 font-medium text-red-600">£22.40 more on Plan 1</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£30,000</td>
                                <td className="border px-4 py-2 bg-blue-50">£59.89</td>
                                <td className="border px-4 py-2 bg-purple-50">£20.29</td>
                                <td className="border px-4 py-2 font-medium text-red-600">£39.60 more on Plan 1</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£35,000</td>
                                <td className="border px-4 py-2 bg-blue-50">£97.38</td>
                                <td className="border px-4 py-2 bg-purple-50">£57.79</td>
                                <td className="border px-4 py-2 font-medium text-red-600">£39.59 more on Plan 1</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£40,000</td>
                                <td className="border px-4 py-2 bg-blue-50">£134.88</td>
                                <td className="border px-4 py-2 bg-purple-50">£95.29</td>
                                <td className="border px-4 py-2 font-medium text-red-600">£39.59 more on Plan 1</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£50,000</td>
                                <td className="border px-4 py-2 bg-blue-50">£209.86</td>
                                <td className="border px-4 py-2 bg-purple-50">£170.29</td>
                                <td className="border px-4 py-2 font-medium text-red-600">£39.57 more on Plan 1</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="bg-gray-50 p-6 rounded-lg my-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Takeaway on Repayments</h4>
                        <p>
                            Plan 1 borrowers consistently pay more per month at any given salary level compared to Plan 2 borrowers.
                            This is because:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>The Plan 1 threshold is £5,280 lower than Plan 2</li>
                            <li>This creates a consistent difference of about £39.60 per month (£5,280 × 9% ÷ 12)</li>
                            <li>At salaries below the Plan 2 threshold, the difference can be even more significant</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white p-8 mt-10">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                    <p className="text-lg text-blue-100">
                        Use our calculators to see exactly how much you&apos;ll repay on your specific loan plan
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/plan-1-student-loan-calculator/">
                            Plan 1 Calculator
                        </Link>
                        <Link className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/plan-2-student-loan-calculator/">
                            Plan 2 Calculator
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="max-w-6xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/plan-1/">
                        <div className="mb-4 text-blue-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 1 Guide</h3>
                        <p className="text-gray-600">Complete guide to pre-2012 student loans</p>
                    </Link>

                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/plan-2/">
                        <div className="mb-4 text-blue-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Guide</h3>
                        <p className="text-gray-600">Complete guide to 2012-2023 student loans</p>
                    </Link>

                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/plan-2-vs-plan-5/">
                        <div className="mb-4 text-purple-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 vs Plan 5 Comparison</h3>
                        <p className="text-gray-600">Compare the newer student loan plans</p>
                    </Link>
                </div>
            </section>

            {/* Related calculators */}
            <section className="max-w-6xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Calculators</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/plan-1-student-loan-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Plan 1 Calculator</h3>
                        <p className="text-sm text-gray-600">Calculate monthly repayments</p>
                    </Link>
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/plan-2-student-loan-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Plan 2 Calculator</h3>
                        <p className="text-sm text-gray-600">Calculate monthly repayments</p>
                    </Link>
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/total-loan-cost-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Total Cost Calculator</h3>
                        <p className="text-sm text-gray-600">Estimate lifetime repayments</p>
                    </Link>
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/combined-repayment-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Combined Repayment Calculator</h3>
                        <p className="text-sm text-gray-600">For those with multiple loans</p>
                    </Link>
                </div>
            </section>
        </main>)
}

export default Plan1vsPlan2Page