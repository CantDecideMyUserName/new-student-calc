import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Plan2vsPlan5Page = () => {
    return (
        <main className="min-h-screen">
            {/* Hero / breadcrumb */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12 max-w-7xl mx-auto mt-6">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/">Home</Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </li>
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/compare/">Compare</Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Plan 2 vs Plan 5</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Plan 2 vs Plan 5 Student Loans
                    </h1>
                    <p className="text-xl text-gray-600">
                        Compare the differences between pre-2023 and post-2023 student loan plans
                    </p>

                    <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mt-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Based on 2023–2024 student loan thresholds
                    </div>
                </div>
            </section>

            {/* Author row */}
            <section className="max-w-4xl mx-auto px-4 mt-6">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-6">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-3xl">👩‍🎓</span>
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">James Wilson</p>
                            <p className="text-sm text-gray-600">Student Finance Analyst</p>
                            <Link className="text-sm text-blue-600 hover:underline" href="/about/">About our experts</Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center border-b border-gray-200 pb-4 mb-6">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">
                            Last updated: <time dateTime="2024-01-10">2024-01-10</time>
                        </p>
                    </div>
                </div>
            </section>

            {/* Key differences table */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Key Differences at a Glance
                </h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Feature</th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold bg-blue-50">Plan 2</th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold bg-green-50">Plan 5</th>
                                <th className="px-6 py-3 text-left text-gray-800 font-semibold">Better Option</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 font-medium">Who has it</td>
                                <td className="px-6 py-4 bg-blue-50">Students starting between 2012-2023</td>
                                <td className="px-6 py-4 bg-green-50">Students starting from Sept 2023</td>
                                <td className="px-6 py-4">N/A (based on when you studied)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Repayment Threshold</td>
                                <td className="px-6 py-4 bg-blue-50">£27,295 per year</td>
                                <td className="px-6 py-4 bg-green-50">£25,000 per year</td>
                                <td className="px-6 py-4">Plan 2 (higher threshold means less monthly repayment)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Interest Rate</td>
                                <td className="px-6 py-4 bg-blue-50">
                                    RPI to RPI + 3%
                                    <br />(varies by income)
                                </td>
                                <td className="px-6 py-4 bg-green-50">
                                    RPI only
                                    <br />(regardless of income)
                                </td>
                                <td className="px-6 py-4">Plan 5 (lower interest means less debt growth)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">Write-off Period</td>
                                <td className="px-6 py-4 bg-blue-50">30 years</td>
                                <td className="px-6 py-4 bg-green-50">40 years</td>
                                <td className="px-6 py-4">Plan 2 (shorter period means debt cleared sooner)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">
                                    Monthly Payment
                                    <br />(on £35,000 salary)
                                </td>
                                <td className="px-6 py-4 bg-blue-50">£58 per month</td>
                                <td className="px-6 py-4 bg-green-50">£75 per month</td>
                                <td className="px-6 py-4">Plan 2 (lower monthly payments)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-xs text-gray-500 italic mt-2">
                    <p>
                        Source:{" "}
                        <Link
                            className="underline hover:text-gray-700"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.gov.uk/guidance/plan-5-undergraduate-loan-repayment"
                        >
                            Student Finance England
                        </Link>{" "}
                        (January 2024)
                    </p>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-gray-700">
                        <strong>Note:</strong> Which plan is &quot;better&quot; depends on your individual circumstances,
                        particularly your expected career earnings. Low to middle earners typically pay more under Plan 5,
                        while high earners may benefit from its lower interest rates.
                    </p>
                </div>

                <div className="mt-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-gray-800 mb-3">Why Trust This Comparison?</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <span className="mr-2 text-blue-600">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                Based on official UK loan plans
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <span className="mr-2 text-blue-600">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </span>
                                Regularly updated with latest rates
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <span className="mr-2 text-blue-600">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                Data-driven comparison
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Detailed comparison */}
            <section className="max-w-6xl mx-auto px-4 mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Detailed Comparison</h2>

                <div className="prose max-w-none text-gray-600">
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayment Thresholds</h3>
                    <p>
                        <strong>Plan 2</strong> has a higher repayment threshold (£27,295) compared to <strong>Plan 5</strong> (£25,000).
                        This £2,295 difference means:
                    </p>
                    <ul className="list-disc pl-6 mt-3 mb-6">
                        <li>Plan 5 borrowers start repaying at lower income levels</li>
                        <li>At the same salary, Plan 5 borrowers repay more each month</li>
                        <li>For someone earning £30,000, the difference is £17 more per month under Plan 5</li>
                    </ul>
                    <p>
                        You can calculate your exact monthly repayments using our{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/plan-2-student-loan-calculator/">
                            Plan 2 calculator
                        </Link>{" "}
                        or{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/plan-5-student-loan-calculator/">
                            Plan 5 calculator
                        </Link>.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Interest Rates</h3>
                    <p>The interest rate structure is significantly different between the two plans:</p>

                    <div className="overflow-x-auto my-4">
                        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-800">Circumstance</th>
                                    <th className="px-4 py-2 text-left text-gray-800 bg-blue-50">Plan 2 Interest</th>
                                    <th className="px-4 py-2 text-left text-gray-800 bg-green-50">Plan 5 Interest</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4 py-2">While studying</td>
                                    <td className="px-4 py-2 bg-blue-50">RPI + 3%</td>
                                    <td className="px-4 py-2 bg-green-50">RPI only</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">After graduation, earning under threshold</td>
                                    <td className="px-4 py-2 bg-blue-50">RPI only</td>
                                    <td className="px-4 py-2 bg-green-50">RPI only</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Earning between threshold and £49,130</td>
                                    <td className="px-4 py-2 bg-blue-50">
                                        RPI to RPI + 3%
                                        <br />(sliding scale)
                                    </td>
                                    <td className="px-4 py-2 bg-green-50">RPI only</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Earning over £49,130</td>
                                    <td className="px-4 py-2 bg-blue-50">RPI + 3%</td>
                                    <td className="px-4 py-2 bg-green-50">RPI only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        For a complete explanation of how interest works, read our{" "}
                        <Link className="text-blue-600 hover:underline" href="/guides/student-loan-interest-rates/">
                            student loan interest rates guide
                        </Link>{" "}
                        or try the{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/student-loan-interest-calculator/">
                            interest calculator
                        </Link>.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Write-off Period</h3>
                    <p>
                        <strong>Plan 2</strong> loans are written off 30 years after you become eligible to repay, while{" "}
                        <strong>Plan 5</strong> loans are written off after 40 years.
                    </p>
                    <p>This extended period means:</p>
                    <ul className="list-disc pl-6 mt-3 mb-6">
                        <li>Plan 5 borrowers may be repaying into their 60s</li>
                        <li>More Plan 5 borrowers will fully repay before write-off</li>
                        <li>Total lifetime repayments can be higher for some Plan 5 borrowers</li>
                    </ul>
                    <p>
                        Use our{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/loan-writeoff-checker/">
                            write-off calculator
                        </Link>{" "}
                        to estimate cancellation year and total paid.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 my-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            Example: Low to Middle Earner (£30,000 with 2% annual growth)
                        </h4>
                        <ul className="list-disc pl-6">
                            <li><strong>Plan 2:</strong> ~£22,000 over 30 years before write-off</li>
                            <li><strong>Plan 5:</strong> ~£37,000 over 40 years before write-off</li>
                            <li><strong>Difference:</strong> Plan 5 costs ~£15,000 more over the lifetime</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">
                            Based on internal calculations using official thresholds and interest rates.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 my-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            Example: High Earner (£50,000 with 3% annual growth)
                        </h4>
                        <ul className="list-disc pl-6">
                            <li><strong>Plan 2:</strong> ~£83,000 (includes significant interest)</li>
                            <li><strong>Plan 5:</strong> ~£65,000 (lower interest)</li>
                            <li><strong>Difference:</strong> Plan 5 saves ~£18,000</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">
                            Based on internal calculations using official thresholds and interest rates.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8 mt-10">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Compare Your Personal Repayments</h2>
                    <p className="text-lg text-blue-100">
                        Use our calculator to see exactly how each plan would affect you based on your expected salary
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/monthly-repayment-calculator/">
                            Try Our Comparison Calculator
                        </Link>
                        <Link className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                            href="/calculators/total-loan-cost-calculator/">
                            Calculate Lifetime Cost
                        </Link>
                    </div>
                </div>
            </section>

            {/* More tools */}
            <section className="max-w-4xl mx-auto mt-12 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    More Tools and Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                        href="/calculators/combined-repayment-calculator/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Combined Repayment Calculator</h3>
                        <p className="text-gray-600">
                            Compare Plan 2 and Plan 5 repayments side-by-side with personalized projections.
                        </p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                        href="/guides/how-student-loans-work-uk/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Guide to UK Student Loans</h3>
                        <p className="text-gray-600">
                            Understand the fundamentals of how the UK student loan system works.
                        </p>
                    </Link>
                </div>
            </section>

            {/* Sources + disclaimer */}
            <section className="max-w-4xl mx-auto px-4 mt-12">
                <div className="bg-gray-50 border-l-4 border-blue-400 p-4 text-sm text-gray-600">
                    <p className="font-medium mb-1">Disclaimer:</p>
                    <p>
                        This guide provides general information based on current student finance policies.
                        Individual circumstances may vary. The information was accurate at the time of publication
                        but is subject to change.
                    </p>
                </div>

                <section className="border-t border-gray-200 pt-6 mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Sources &amp; References</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-gray-500 mr-2">1.</span>
                            <div>
                                <Link target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium" href="https://www.gov.uk/repaying-your-student-loan">
                                    Student Loan Repayment
                                </Link>
                                <p className="text-sm text-gray-600">GOV.UK</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-500 mr-2">2.</span>
                            <div>
                                <Link target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium" href="https://www.gov.uk/guidance/plan-5-undergraduate-loan-repayment">
                                    Plan 5 Student Loans Explained
                                </Link>
                                <p className="text-sm text-gray-600">GOV.UK</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-500 mr-2">3.</span>
                            <div>
                                <Link target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium" href="https://www.gov.uk/government/collections/sfe-student-loan-repayment">
                                    Student Loan Repayment Thresholds and Interest Rates
                                </Link>
                                <p className="text-sm text-gray-600">Student Finance England</p>
                            </div>
                        </li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">
                        Our content is based on the latest information from official UK government sources.
                        The calculators use current repayment thresholds and interest rates as defined by Student Finance England and equivalent bodies.
                    </p>
                </section>
            </section>
        </main>)
}

export default Plan2vsPlan5Page