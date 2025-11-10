import Link from 'next/link'
import React from 'react'

const Studentloanson50ksalaryPage = () => {
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
                                    Student Loans on £50k Salary
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Student Loans on a £50,000 Salary
                    </h1>
                    <p className="text-xl text-gray-600">
                        A detailed comparison of student loan repayments for UK graduates
                        earning £50,000 per year.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="prose max-w-none">
                    <p>
                        At £50,000 per year, you&apos;re earning significantly above the UK
                        average salary and well above all student loan repayment thresholds.
                        This means you&apos;ll be making substantial repayments regardless
                        of which plan you&apos;re on.
                    </p>
                    <p>
                        This guide provides a detailed breakdown of exactly what you&apos;ll
                        pay at this salary level, how it impacts your take-home pay, and
                        whether you should consider making voluntary repayments to clear your
                        loan faster.
                    </p>
                </div>
            </section>

            {/* Comparison table */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Repayments at £50,000: All Loan Plans Compared
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
                                <td className="px-6 py-4 text-gray-600">£209.89</td>
                                <td className="px-6 py-4 text-gray-600">£2,518.65</td>
                                <td className="px-6 py-4 text-gray-600">5.04%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 2</td>
                                <td className="px-6 py-4 text-gray-600">£27,295</td>
                                <td className="px-6 py-4 text-gray-600">£170.29</td>
                                <td className="px-6 py-4 text-gray-600">£2,043.45</td>
                                <td className="px-6 py-4 text-gray-600">4.09%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 4</td>
                                <td className="px-6 py-4 text-gray-600">£27,660</td>
                                <td className="px-6 py-4 text-gray-600">£167.70</td>
                                <td className="px-6 py-4 text-gray-600">£2,012.40</td>
                                <td className="px-6 py-4 text-gray-600">4.02%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">Plan 5</td>
                                <td className="px-6 py-4 text-gray-600">£25,000</td>
                                <td className="px-6 py-4 text-gray-600">£187.50</td>
                                <td className="px-6 py-4 text-gray-600">£2,250.00</td>
                                <td className="px-6 py-4 text-gray-600">4.50%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    Postgraduate Loan
                                </td>
                                <td className="px-6 py-4 text-gray-600">£21,000</td>
                                <td className="px-6 py-4 text-gray-600">£145.00</td>
                                <td className="px-6 py-4 text-gray-600">£1,740.00</td>
                                <td className="px-6 py-4 text-gray-600">3.48%</td>
                            </tr>
                            <tr className="bg-blue-50">
                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    Plan 2 + Postgraduate
                                </td>
                                <td className="px-6 py-4 text-gray-600">Multiple thresholds</td>
                                <td className="px-6 py-4 text-gray-600">£315.29</td>
                                <td className="px-6 py-4 text-gray-600">£3,783.45</td>
                                <td className="px-6 py-4 text-gray-600">7.57%</td>
                            </tr>
                            <tr className="bg-blue-50">
                                <td className="px-6 py-4 text-gray-800 font-medium">
                                    Plan 5 + Postgraduate
                                </td>
                                <td className="px-6 py-4 text-gray-600">Multiple thresholds</td>
                                <td className="px-6 py-4 text-gray-600">£332.50</td>
                                <td className="px-6 py-4 text-gray-600">£3,990.00</td>
                                <td className="px-6 py-4 text-gray-600">7.98%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    Note: Calculations are based on 2023/24 thresholds. Monthly figures
                    rounded to the nearest penny where appropriate.
                </p>
            </section>

            {/* Analysis */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Analysis of Repayments at £50,000
                </h2>
                <div className="prose max-w-none">
                    <h3>Substantial Repayments Across All Plans</h3>
                    <p>At £50,000, you&apos;re making significant repayments regardless of your loan plan:</p>
                    <ul>
                        <li>
                            <strong>Plan 1 loans</strong> have the highest monthly repayment at £209.89 because they
                            have the lowest threshold (£22,015), meaning more of your income is subject to the 9%
                            repayment rate.
                        </li>
                        <li>
                            <strong>Plan 5 loans</strong> have the second-highest repayment at £187.50 monthly, due to
                            their relatively low threshold of £25,000.
                        </li>
                        <li>
                            <strong>Plan 2 and Plan 4 loans</strong> have similar repayments (£170.29 and £167.70 respectively)
                            because of their similar thresholds.
                        </li>
                        <li>
                            <strong>Postgraduate loans</strong> have the lowest single repayment at £145.00 monthly, as they&apos;re
                            calculated at 6% rather than 9%, despite having a low threshold of £21,000.
                        </li>
                    </ul>

                    <h3>Combined Plan Repayments</h3>
                    <p>
                        If you have both an undergraduate and postgraduate loan, your repayments are particularly substantial -
                        nearly 8% of your gross salary for Plan 5 + Postgraduate combinations:
                    </p>
                    <ul>
                        <li>Plan 2 + Postgraduate: £315.29 monthly (£3,783.45 annually)</li>
                        <li>Plan 5 + Postgraduate: £332.50 monthly (£3,990.00 annually)</li>
                    </ul>
                    <p>This significant deduction can have a major impact on your take-home pay and budgeting.</p>

                    <h3>Calculation Examples</h3>
                    <p>Let&apos;s break down how these calculations work for a £50,000 salary:</p>

                    <h4>Plan 2 Example:</h4>
                    <ul>
                        <li>Income: £50,000</li>
                        <li>Amount above threshold: £50,000 - £27,295 = £22,705</li>
                        <li>Yearly repayment: 9% of £22,705 = £2,043.45</li>
                        <li>Monthly repayment: £2,043.45 ÷ 12 = £170.29</li>
                    </ul>

                    <h4>Postgraduate Loan Example:</h4>
                    <ul>
                        <li>Income: £50,000</li>
                        <li>Amount above threshold: £50,000 - £21,000 = £29,000</li>
                        <li>Yearly repayment: 6% of £29,000 = £1,740</li>
                        <li>Monthly repayment: £1,740 ÷ 12 = £145</li>
                    </ul>
                </div>
            </section>

            {/* Take-home pay */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Impact on Your Take-Home Pay
                </h2>
                <div className="prose max-w-none">
                    <p>
                        Here&apos;s how your monthly take-home pay is affected by student loan repayments at £50,000 per
                        year (after tax and National Insurance, but before other deductions):
                    </p>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 my-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Without Student Loan</h3>
                                <p className="text-2xl font-bold text-gray-800">£3,168</p>
                                <p className="text-gray-600 text-sm">Monthly take-home pay</p>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">With Plan 1 Loan</h3>
                                    <p className="text-2xl font-bold text-gray-800">£2,958</p>
                                    <p className="text-gray-600 text-sm">£210 less per month</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">With Plan 2 Loan</h3>
                                    <p className="text-2xl font-bold text-gray-800">£2,998</p>
                                    <p className="text-gray-600 text-sm">£170 less per month</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">With Plan 5 Loan</h3>
                                    <p className="text-2xl font-bold text-gray-800">£2,980</p>
                                    <p className="text-gray-600 text-sm">£188 less per month</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>
                        Student loans create a substantial deduction from your take-home pay at this salary level.
                        If you have combined loans (undergraduate + postgraduate), the impact is even greater:
                    </p>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 my-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Combined Loans Impact</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-800">Plan 2 + Postgraduate</h4>
                                <p className="text-2xl font-bold text-gray-800">£2,853</p>
                                <p className="text-gray-600 text-sm">£315 less per month</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800">Plan 5 + Postgraduate</h4>
                                <p className="text-2xl font-bold text-gray-800">£2,835</p>
                                <p className="text-gray-600 text-sm">£333 less per month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Voluntary repayments */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Should You Make Voluntary Repayments at £50,000?
                </h2>
                <div className="prose max-w-none">
                    <p>
                        At a £50,000 salary, you&apos;re in the income range where voluntary repayments become more worth
                        considering, especially for certain loan types:
                    </p>

                    <h3>Considerations by Loan Type</h3>
                    <h4>Plan 1 Loans</h4>
                    <p>
                        Despite having the highest monthly repayments, Plan 1 loans have a very low interest rate (currently
                        1.75%). This means:
                    </p>
                    <ul>
                        <li>You&apos;re likely to pay off the loan eventually through salary deductions</li>
                        <li>The low interest rate means there&apos;s less financial benefit to early repayment</li>
                        <li>You may be better off investing spare cash rather than making voluntary repayments</li>
                    </ul>

                    <h4>Plan 2 Loans</h4>
                    <p>At £50,000, Plan 2 loans have important considerations:</p>
                    <ul>
                        <li>You&apos;ll be charged the maximum interest rate of RPI+3% (currently 7.3%)</li>
                        <li>
                            You&apos;re in the &quot;maybe&quot; zone for full repayment - depending on your loan balance,
                            career progression, and time until write-off
                        </li>
                        <li>
                            Voluntary repayments become more attractive if your salary is likely to continue rising significantly
                        </li>
                    </ul>

                    <h4>Plan 5 Loans</h4>
                    <p>With Plan 5 loans:</p>
                    <ul>
                        <li>The interest rate is lower than Plan 2 (RPI only, currently 4.3%)</li>
                        <li>The 40-year repayment term means many won&apos;t repay in full, even at higher salaries</li>
                        <li>
                            At £50,000, voluntary repayments are generally less attractive unless you expect very significant salary
                            growth
                        </li>
                    </ul>

                    <h4>Postgraduate Loans</h4>
                    <p>For Postgraduate loans:</p>
                    <ul>
                        <li>The high interest rate (RPI+3%, currently 7.3%) makes voluntary repayments more attractive</li>
                        <li>The relatively small loan size (maximum £11,570) means full repayment is more feasible</li>
                        <li>At £50,000, voluntary repayments should be seriously considered if you have spare cash</li>
                    </ul>

                    <h3>Key Factors in Your Decision</h3>
                    <p>When deciding whether to make voluntary repayments at £50,000, consider:</p>
                    <ul>
                        <li>
                            <strong>Loan balance:</strong> Larger balances are less likely to be fully repaid before write-off
                        </li>
                        <li>
                            <strong>Years until write-off:</strong> Fewer years remaining makes voluntary repayments less attractive
                        </li>
                        <li>
                            <strong>Career trajectory:</strong> Expected significant salary increases make voluntary repayments more
                            worthwhile
                        </li>
                        <li>
                            <strong>Other financial priorities:</strong> High-interest debt, pension contributions, and emergency
                            savings should usually take precedence
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Exact Repayments</h2>
                    <p className="text-lg text-blue-100">
                        Compare your take-home pay with different student loan plans and evaluate whether voluntary repayments
                        make sense
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/student-loan-income-comparison/"
                        >
                            Income Comparison Calculator
                        </Link>
                        <Link
                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/investment-vs-overpayment-calculator/"
                        >
                            Investment vs Overpayment Calculator
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
                        href="/guides/student-loans-high-earners/"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Student Loans for High Earners
                        </h3>
                        <p className="text-gray-600">
                            Comprehensive guide to managing student loans when earning £50,000 and above.
                        </p>
                    </Link>
                    <Link
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                        href="/compare/student-loans-on-25k-salary/"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Student Loans on £25k Salary
                        </h3>
                        <p className="text-gray-600">
                            See how repayments differ at a lower salary level compared to £50,000.
                        </p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Studentloanson50ksalaryPage