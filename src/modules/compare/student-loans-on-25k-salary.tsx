import Link from 'next/link'
import React from 'react'

const StudentLoansOn25kSalaryPage = () => {
    return (
        <main className="space-y-12 pb-16">
            {/* Hero / breadcrumb */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </li>
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/compare/">
                                    Compare
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </li>
                            <li>
                                <span className="font-medium text-gray-800" aria-current="page">
                                    Student Loans on £25k Salary
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Student Loans on a £25,000 Salary
                    </h1>
                    <p className="text-xl text-gray-600">
                        A detailed comparison of student loan repayments for UK graduates
                        earning £25,000 per year.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="prose max-w-none">
                    <p>
                        If you&apos;re earning £25,000 per year, your student loan repayments
                        will vary significantly depending on which plan you&apos;re on. This
                        guide breaks down exactly what you&apos;ll pay at this salary level
                        across all UK student loan plans.
                    </p>
                    <p>
                        £25,000 is a particularly interesting salary to analyze because it
                        sits at the exact repayment threshold for Plan 5 loans. This means
                        if you&apos;re on Plan 5 and earning £25,000, you&apos;re just at
                        the point where repayments would begin.
                    </p>
                </div>
            </section>

            {/* Comparison table */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Repayments at £25,000: All Loan Plans Compared
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">
                                    Loan Plan
                                </th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">
                                    Repayment Threshold
                                </th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">
                                    Monthly Repayment
                                </th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">
                                    Annual Repayment
                                </th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">
                                    % of Gross Salary
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 1</td>
                                <td className="px-6 py-4 text-gray-600">£22,015</td>
                                <td className="px-6 py-4 text-gray-600">£22.39</td>
                                <td className="px-6 py-4 text-gray-600">£268.65</td>
                                <td className="px-6 py-4 text-gray-600">1.07%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 2</td>
                                <td className="px-6 py-4 text-gray-600">£27,295</td>
                                <td className="px-6 py-4 text-gray-600">£0</td>
                                <td className="px-6 py-4 text-gray-600">£0</td>
                                <td className="px-6 py-4 text-gray-600">0%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 4</td>
                                <td className="px-6 py-4 text-gray-600">£27,660</td>
                                <td className="px-6 py-4 text-gray-600">£0</td>
                                <td className="px-6 py-4 text-gray-600">£0</td>
                                <td className="px-6 py-4 text-gray-600">0%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 5</td>
                                <td className="px-6 py-4 text-gray-600">£25,000</td>
                                <td className="px-6 py-4 text-gray-600">£0</td>
                                <td className="px-6 py-4 text-gray-600">£0</td>
                                <td className="px-6 py-4 text-gray-600">0%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    Postgraduate Loan
                                </td>
                                <td className="px-6 py-4 text-gray-600">£21,000</td>
                                <td className="px-6 py-4 text-gray-600">£20</td>
                                <td className="px-6 py-4 text-gray-600">£240</td>
                                <td className="px-6 py-4 text-gray-600">0.96%</td>
                            </tr>
                            <tr className="bg-blue-50">
                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    Plan 2 + Postgraduate
                                </td>
                                <td className="px-6 py-4 text-gray-600">Multiple thresholds</td>
                                <td className="px-6 py-4 text-gray-600">£20</td>
                                <td className="px-6 py-4 text-gray-600">£240</td>
                                <td className="px-6 py-4 text-gray-600">0.96%</td>
                            </tr>
                            <tr className="bg-blue-50">
                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    Plan 5 + Postgraduate
                                </td>
                                <td className="px-6 py-4 text-gray-600">Multiple thresholds</td>
                                <td className="px-6 py-4 text-gray-600">£20</td>
                                <td className="px-6 py-4 text-gray-600">£240</td>
                                <td className="px-6 py-4 text-gray-600">0.96%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    Note: Calculations are based on 2023/24 thresholds. Monthly figures
                    rounded to the nearest pound or pence where appropriate.
                </p>
            </section>

            {/* Analysis */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Analysis of Repayments at £25,000
                </h2>
                <div className="prose max-w-none">
                    <h3>Plan 1 Loans</h3>
                    <p>
                        On a Plan 1 loan, with its lower threshold of £22,015, you&apos;ll
                        be making repayments of £22.39 per month. This is calculated as 9%
                        of the amount you earn above the threshold:
                    </p>
                    <ul>
                        <li>Income: £25,000</li>
                        <li>Amount above threshold: £25,000 - £22,015 = £2,985</li>
                        <li>Yearly repayment: 9% of £2,985 = £268.65</li>
                        <li>Monthly repayment: £268.65 ÷ 12 = £22.39</li>
                    </ul>

                    <h3>Plan 2 and Plan 4 Loans</h3>
                    <p>
                        If you&apos;re on Plan 2 or Plan 4, you won&apos;t make any
                        repayments at a £25,000 salary because the repayment thresholds
                        (£27,295 and £27,660 respectively) are higher than your income. You
                        only start repaying once you earn above these thresholds.
                    </p>

                    <h3>Plan 5 Loans</h3>
                    <p>
                        At exactly £25,000, you&apos;re at the Plan 5 repayment threshold,
                        meaning you won&apos;t make any repayments. However, it&apos;s
                        important to note that if your salary increases slightly to £25,001,
                        you would start making small repayments. The Plan 5 threshold puts
                        you at the tipping point where repayments could begin with any
                        minimal salary increase.
                    </p>

                    <h3>Postgraduate Loans</h3>
                    <p>
                        With a Postgraduate Loan, you&apos;d repay £20 per month, as the
                        threshold is £21,000. The calculation works as:
                    </p>
                    <ul>
                        <li>Income: £25,000</li>
                        <li>Amount above threshold: £25,000 - £21,000 = £4,000</li>
                        <li>Yearly repayment: 6% of £4,000 = £240</li>
                        <li>Monthly repayment: £240 ÷ 12 = £20</li>
                    </ul>

                    <h3>Combined Plans</h3>
                    <p>
                        If you have both an undergraduate and postgraduate loan, at £25,000
                        you would only be making repayments toward your postgraduate loan
                        (£20 monthly), as you&apos;re below the repayment threshold for Plan
                        2 and Plan 5 undergraduate loans.
                    </p>
                </div>
            </section>

            {/* Take-home pay */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Impact on Your Take-Home Pay
                </h2>
                <div className="prose max-w-none">
                    <p>
                        Here&apos;s how your monthly take-home pay would be affected by
                        student loan repayments at £25,000 per year (after tax and National
                        Insurance, but before other deductions):
                    </p>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 my-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    Without Student Loan
                                </h3>
                                <p className="text-2xl font-bold text-gray-800">£1,779</p>
                                <p className="text-gray-600 text-sm">Monthly take-home pay</p>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        With Plan 1 Loan
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-800">£1,757</p>
                                    <p className="text-gray-600 text-sm">£22 less per month</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        With Postgraduate Loan
                                    </h3>
                                    <p className="text-2xl font-bold text-gray-800">£1,759</p>
                                    <p className="text-gray-600 text-sm">£20 less per month</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                        As you can see, Plan 1 loans have the most significant impact on
                        take-home pay at this salary level, reducing your monthly income by
                        £22. Postgraduate loans reduce it by £20, while Plan 2, 4, and 5
                        have no impact as you&apos;re below their repayment thresholds.
                    </p>
                </div>
            </section>

            {/* What if salary increases */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    What If Your Salary Increases?
                </h2>
                <div className="prose max-w-none">
                    <p>
                        If your salary increases even slightly above £25,000, your repayment
                        situation could change, particularly for Plan 5 loans:
                    </p>

                    <h3>At £26,000</h3>
                    <ul>
                        <li>
                            <strong>Plan 1:</strong> £29.89 monthly (up from £22.39)
                        </li>
                        <li>
                            <strong>Plan 2:</strong> Still £0 (below threshold)
                        </li>
                        <li>
                            <strong>Plan 4:</strong> Still £0 (below threshold)
                        </li>
                        <li>
                            <strong>Plan 5:</strong> £7.50 monthly (9% of £1,000)
                        </li>
                        <li>
                            <strong>Postgraduate Loan:</strong> £25 monthly (up from £20)
                        </li>
                    </ul>

                    <p>
                        The key takeaway is that a £25,000 salary puts you right at the Plan
                        5 threshold. Any increase in salary will trigger Plan 5 repayments,
                        while you would need to earn over £27,295 to start repaying a Plan 2
                        loan.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Calculate Your Exact Repayments
                    </h2>
                    <p className="text-lg text-blue-100">
                        See how your student loan affects your monthly take-home pay at
                        different salary levels
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/student-loan-income-comparison/"
                        >
                            Use Our Calculator
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Related Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                        href="/compare/student-loans-on-50k-salary/"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Student Loans on £50k Salary
                        </h3>
                        <p className="text-gray-600">
                            See how your repayments would change with a higher salary of
                            £50,000.
                        </p>
                    </Link>
                    <Link
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                        href="/guides/student-loans-low-income/"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Student Loans on Low Income
                        </h3>
                        <p className="text-gray-600">
                            Learn how student loans work when you&apos;re earning below the
                            repayment thresholds.
                        </p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default StudentLoansOn25kSalaryPage