import React from 'react'
import Link from 'next/link'

const UndergraduatevsPostgraduatePage = () => {
    return (
        <main className="space-y-12 pb-16">
            {/* Hero / breadcrumb */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/compare/">Compare</Link></li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Undergraduate vs Postgraduate</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Undergraduate vs Postgraduate Loans - Comparison Guide
                    </h1>
                    <p className="text-xl text-gray-600">
                        Compare undergraduate and postgraduate student loans in the UK, including how they work together if you have both.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="prose max-w-none">
                    <p>
                        Undergraduate loans in the UK fall under several “plans” depending on where and when you studied (e.g. Plan 1/2/4/5).
                        Postgraduate loans (PGL) have their own rules. Both are income-contingent, but they use different thresholds,
                        interest calculations, and write-off periods—so having both can change how much you repay each month.
                    </p>
                    <p>
                        This guide highlights the key differences and explains how combined repayments work at a glance. For an exact figure,
                        use the calculators linked below.
                    </p>
                </div>
            </section>

            {/* Key differences table */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Differences at a Glance</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Feature</th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Undergraduate</th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Postgraduate (PGL)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Repayment Threshold</td>
                                <td className="px-6 py-4 text-gray-600">
                                    Plan-dependent (e.g. Plan 1/2/4/5 each has a different annual threshold)
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    Separate PGL threshold (you only repay when income exceeds this level)
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Repayment Rate</td>
                                <td className="px-6 py-4 text-gray-600">9% of income over the plan’s threshold</td>
                                <td className="px-6 py-4 text-gray-600">6% of income over the PGL threshold</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Interest</td>
                                <td className="px-6 py-4 text-gray-600">
                                    Varies by plan (e.g. RPI-linked or RPI with caps/tiers depending on plan)
                                </td>
                                <td className="px-6 py-4 text-gray-600">Typically RPI plus a fixed margin for PGL</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Write-off</td>
                                <td className="px-6 py-4 text-gray-600">Plan-dependent (e.g. 25/30/40 years or age-based on older plans)</td>
                                <td className="px-6 py-4 text-gray-600">Usually written off after 30 years (PGL rules)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">If You Have Both</td>
                                <td className="px-6 py-4 text-gray-600">
                                    UG and PGL repayments are calculated separately and taken at the same time via PAYE/Self Assessment
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    You’ll pay 9% (UG) + 6% (PGL) on the portions of income above each threshold, respectively
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* How combined repayments feel */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">How Combined Repayments Work</h2>
                <div className="prose max-w-none">
                    <p>
                        If your income exceeds both thresholds, HMRC will collect undergraduate and postgraduate repayments together.
                        Each plan’s repayment is calculated independently using its own threshold and rate, then deducted in your payslip.
                    </p>
                    <p>
                        Because the thresholds differ, you might repay only one of them (e.g. PGL only) for a while, or both once your income rises.
                        The calculators can show exactly when each kicks in for your numbers.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                    <p className="text-lg text-blue-100">See your monthly amounts for UG only, PGL only, or both together</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all" href="/calculators/combined-repayment-calculator/">
                            Combined Repayment Calculator
                        </Link>
                        <Link className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all" href="/calculators/postgraduate-loan-calculator/">
                            Postgraduate Loan Calculator
                        </Link>
                        <Link className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all" href="/calculators/">
                            All Calculators
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UndergraduatevsPostgraduatePage