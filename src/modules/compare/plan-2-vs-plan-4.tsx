import Link from 'next/link'
import React from 'react'

const Plan2vsPlan4Page = () => {
    return (
        <main className="min-h-screen">
            {/* Hero / breadcrumb */}
            <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12 mt-6">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-purple-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center">
                                <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><Link className="hover:text-purple-700 hover:underline" href="/compare/">Compare</Link></li>
                            <li className="flex items-center">
                                <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Plan 2 vs Plan 4</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Plan 2 vs Plan 4 Student Loans
                    </h1>
                    <p className="text-xl text-gray-600">
                        Comparing undergraduate and postgraduate UK student loan repayment plans
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
                                <th className="border px-4 py-2 text-left bg-purple-50">Plan 2</th>
                                <th className="border px-4 py-2 text-left bg-indigo-50">Plan 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Who has it?</td>
                                <td className="border px-4 py-2 bg-purple-50">
                                    Undergraduate students who started between Sept 2012 and Aug 2023 in England/Wales
                                </td>
                                <td className="border px-4 py-2 bg-indigo-50">
                                    Postgraduate loan borrowers in England/Wales (from 2016 onwards)
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Loan Type</td>
                                <td className="border px-4 py-2 bg-purple-50">Undergraduate tuition and maintenance</td>
                                <td className="border px-4 py-2 bg-indigo-50">Postgraduate Master&apos;s loan</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Repayment Threshold</td>
                                <td className="border px-4 py-2 bg-purple-50">£27,295 per year</td>
                                <td className="border px-4 py-2 bg-indigo-50">£21,000 per year</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Repayment Rate</td>
                                <td className="border px-4 py-2 bg-purple-50">9% of income above threshold</td>
                                <td className="border px-4 py-2 bg-indigo-50">6% of income above threshold</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Interest Rate</td>
                                <td className="border px-4 py-2 bg-purple-50">
                                    Variable from RPI to RPI+3% depending on income
                                </td>
                                <td className="border px-4 py-2 bg-indigo-50">
                                    Variable from RPI to RPI+3% depending on income
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Write-off Period</td>
                                <td className="border px-4 py-2 bg-purple-50">30 years after graduation</td>
                                <td className="border px-4 py-2 bg-indigo-50">30 years after graduation</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Maximum Loan Amount</td>
                                <td className="border px-4 py-2 bg-purple-50">£40,000-£60,000 (varies by course length)</td>
                                <td className="border px-4 py-2 bg-indigo-50">Up to £12,167 (2024/25)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-8">
                    <p className="text-gray-600">
                        Plan 2 and Plan 4 serve different purposes in the UK student loan system. Plan 2 covers undergraduate
                        tuition fees and maintenance, while Plan 4 provides additional funding for postgraduate Master&apos;s degrees.
                        Many graduates find themselves repaying both plans simultaneously, which is an important consideration
                        when planning your finances.
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
                        Understanding how Plan 2 and Plan 4 differ in repayment structure is crucial, especially if you have
                        both loans. Plan 4 has a lower threshold (£21,000) but a lower repayment rate (6%), while Plan 2 has
                        a higher threshold (£27,295) but a higher rate (9%).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Monthly Repayment Comparison</h3>

                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2 text-left">Annual Salary</th>
                                <th className="border px-4 py-2 text-left bg-purple-50">Plan 2 Monthly Repayment</th>
                                <th className="border px-4 py-2 text-left bg-indigo-50">Plan 4 Monthly Repayment</th>
                                <th className="border px-4 py-2 text-left">Combined Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">£25,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£0</td>
                                <td className="border px-4 py-2 bg-indigo-50">£20.00</td>
                                <td className="border px-4 py-2 font-medium">£20.00</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£30,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£20.29</td>
                                <td className="border px-4 py-2 bg-indigo-50">£45.00</td>
                                <td className="border px-4 py-2 font-medium">£65.29</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£35,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£57.79</td>
                                <td className="border px-4 py-2 bg-indigo-50">£70.00</td>
                                <td className="border px-4 py-2 font-medium">£127.79</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£40,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£95.29</td>
                                <td className="border px-4 py-2 bg-indigo-50">£95.00</td>
                                <td className="border px-4 py-2 font-medium">£190.29</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£50,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£170.29</td>
                                <td className="border px-4 py-2 bg-indigo-50">£145.00</td>
                                <td className="border px-4 py-2 font-medium">£315.29</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">£60,000</td>
                                <td className="border px-4 py-2 bg-purple-50">£245.29</td>
                                <td className="border px-4 py-2 bg-indigo-50">£195.00</td>
                                <td className="border px-4 py-2 font-medium">£440.29</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="bg-gray-50 p-6 rounded-lg my-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Takeaway on Combined Repayments</h4>
                        <p>
                            If you have both Plan 2 and Plan 4 loans, you&apos;ll make repayments on both simultaneously once your
                            income exceeds each threshold. This means:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Plan 4 repayments start at £21,000 annual salary (6% above threshold)</li>
                            <li>Plan 2 repayments start at £27,295 annual salary (9% above threshold)</li>
                            <li>Above £27,295, you&apos;ll pay both loans simultaneously</li>
                            <li>Combined rate above £27,295 is effectively 15% (9% + 6%) on income above £27,295, plus the Plan 4 contribution on the £21,000-£27,295 band</li>
                            <li>At £40,000 salary, combined repayments are £190.29 per month (£2,283.48 per year)</li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg my-6">
                        <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Important for Postgraduate Students
                        </h4>
                        <p className="text-amber-900">
                            If you completed an undergraduate degree with a Plan 2 loan and then took out a Plan 4 loan for
                            postgraduate study, you&apos;ll be repaying both loans simultaneously. This significantly increases
                            your monthly repayment obligations once you earn above the Plan 2 threshold. Factor this into your
                            career planning and budget accordingly.
                        </p>
                    </div>
                </div>
            </section>

            {/* When to consider a postgraduate loan */}
            <section className="max-w-6xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    When to Consider a Postgraduate Loan
                </h2>

                <div className="prose max-w-none text-gray-600">
                    <p>
                        A Plan 4 postgraduate loan can be a valuable investment in your career, but it&apos;s important to consider
                        the financial implications, especially if you already have a Plan 2 undergraduate loan.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Good reasons to take Plan 4
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your Master&apos;s will significantly increase earning potential</li>
                                <li>Required for your chosen career path (e.g., teaching, social work)</li>
                                <li>Lower repayment rate (6%) makes it more manageable than Plan 2</li>
                                <li>Same 30-year write-off period as Plan 2</li>
                                <li>Smaller loan amount than undergraduate (max £12,167)</li>
                            </ul>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Consider carefully if
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You already have a large Plan 2 loan balance</li>
                                <li>Expected salary increases won&apos;t justify the cost</li>
                                <li>You could fund the Master&apos;s through savings or employer sponsorship</li>
                                <li>Combined 15% repayment rate would strain your budget</li>
                                <li>Your career doesn&apos;t require a postgraduate qualification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white p-8 mt-10">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                    <p className="text-lg text-purple-100">
                        Use our calculators to see exactly how much you&apos;ll repay on your specific loan plan
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/plan-2-student-loan-calculator/">
                            Plan 2 Calculator
                        </Link>
                        <Link className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/plan-4-student-loan-calculator/">
                            Plan 4 Calculator
                        </Link>
                        <Link className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/combined-repayment-calculator/">
                            Combined Calculator
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="max-w-6xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/plan-2/">
                        <div className="mb-4 text-purple-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Guide</h3>
                        <p className="text-gray-600">Complete guide to undergraduate student loans</p>
                    </Link>

                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/plan-4/">
                        <div className="mb-4 text-indigo-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 4 Guide</h3>
                        <p className="text-gray-600">Complete guide to postgraduate Master&apos;s loans</p>
                    </Link>

                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/plan-2-vs-plan-5/">
                        <div className="mb-4 text-blue-600">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 vs Plan 5 Comparison</h3>
                        <p className="text-gray-600">Compare the newer undergraduate loan plans</p>
                    </Link>
                </div>
            </section>

            {/* Related calculators */}
            <section className="max-w-6xl mx-auto mt-10 px-4 mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Calculators</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/plan-2-student-loan-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Plan 2 Calculator</h3>
                        <p className="text-sm text-gray-600">Calculate undergraduate repayments</p>
                    </Link>
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/plan-4-student-loan-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Plan 4 Calculator</h3>
                        <p className="text-sm text-gray-600">Calculate postgraduate repayments</p>
                    </Link>
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/combined-repayment-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Combined Repayment Calculator</h3>
                        <p className="text-sm text-gray-600">Calculate both loans together</p>
                    </Link>
                    <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/total-loan-cost-calculator/">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Total Cost Calculator</h3>
                        <p className="text-sm text-gray-600">Estimate lifetime repayments</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Plan2vsPlan4Page