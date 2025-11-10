import Link from 'next/link'
import React from 'react'

const Plan4vsPlan5Page = () => {
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Plan 4 vs Plan 5</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Plan 4 vs Plan 5 Student Loans Comparison
                    </h1>
                    <p className="text-xl text-gray-600">
                        Compare Scottish (Plan 4) and English post-2023 (Plan 5) student loans to understand key differences in
                        repayment thresholds, interest rates, and loan write-off periods.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="prose max-w-none">
                    <p>
                        Plan 4 and Plan 5 are two different student loan plans in the UK, with Plan 4 applying to Scottish students
                        and Plan 5 being the newest plan for English and Welsh students who started university from September 2023
                        onwards. While both are income-contingent loans, they have key differences that can significantly impact your
                        repayments over time.
                    </p>
                    <p>
                        This comparison guide helps you understand these differences and what they mean for your finances, whether you’re
                        deciding which country to study in or simply want to understand the differences between the plans.
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
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Plan 4 (Scottish)</th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Plan 5 (English/Welsh, 2023+)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Repayment Threshold</td>
                                <td className="px-6 py-4 text-gray-600">£27,660 per year</td>
                                <td className="px-6 py-4 text-gray-600">£25,000 per year</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Interest Rate</td>
                                <td className="px-6 py-4 text-gray-600">Lower of RPI or Bank Rate + 1%</td>
                                <td className="px-6 py-4 text-gray-600">RPI only</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Repayment Percentage</td>
                                <td className="px-6 py-4 text-gray-600">9% of income above threshold</td>
                                <td className="px-6 py-4 text-gray-600">9% of income above threshold</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Written Off After</td>
                                <td className="px-6 py-4 text-gray-600">30 years from April after graduation</td>
                                <td className="px-6 py-4 text-gray-600">40 years from April after graduation</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Maximum Loan Term</td>
                                <td className="px-6 py-4 text-gray-600">30 years</td>
                                <td className="px-6 py-4 text-gray-600">40 years</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Applies To</td>
                                <td className="px-6 py-4 text-gray-600">Scottish students who started after Sept 1998</td>
                                <td className="px-6 py-4 text-gray-600">English/Welsh students who started after Sept 2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Which plan is better */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Which Plan Is Better?</h2>
                <div className="prose max-w-none">
                    <h3>Lower Monthly Repayments with Plan 4</h3>
                    <p>
                        With a higher repayment threshold of £27,660 (compared to £25,000 for Plan 5), Scottish Plan 4 loans result in
                        lower monthly repayments for the same salary level. For example:
                    </p>
                    <ul>
                        <li><strong>On a £30,000 salary:</strong> Plan 4 repayments are about £17/month, while Plan 5 is about £37/month.</li>
                    </ul>

                    <h3>Lower Interest with Plan 4</h3>
                    <p>
                        Plan 4 uses the lower of either RPI or Bank Rate + 1%, which is often more favourable than Plan 5’s RPI-only
                        calculation.
                    </p>

                    <h3>Earlier Loan Write-Off with Plan 4</h3>
                    <p>
                        Any remaining balance on Plan 4 is written off after 30 years (versus 40 years on Plan 5), meaning 10 fewer
                        years of potential repayments.
                    </p>

                    <h3>For Most Students, Plan 4 Is More Favourable</h3>
                    <p>
                        Thanks to the higher threshold, potentially lower interest, and earlier write-off, Plan 4 is typically more
                        financially advantageous than Plan 5. That said, your career path, salary growth, and total borrowing will
                        determine your actual lifetime cost.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                    <p className="text-lg text-blue-100">Compare your potential student loan repayments under different plans</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/student-loan-income-comparison/"
                        >
                            Use Our Comparison Calculator
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/plan-4/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 4 Loans Explained</h3>
                        <p className="text-gray-600">Complete guide to Scottish Plan 4 student loans, including how they work and repayment details.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/plan-5/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 5 Loans Explained</h3>
                        <p className="text-gray-600">In-depth information on the newest English Plan 5 student loans introduced in 2023.</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Plan4vsPlan5Page