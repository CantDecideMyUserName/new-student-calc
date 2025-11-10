import React from 'react';
import Link from 'next/link';
import DrLilaDesc from '@/components/common/dr-lila-desc';
import TableOfContents from '@/components/common/tableOfContent';

const LoanTypesExplained: React.FC = () => {
    const tocItems = [
        { id: "quick-reference", title: "Which Student Loan Plan Do You Have? Quick Reference", level: 2 },
        { id: "comparison-table", title: "Comparison of All Student Loan Plans", level: 2 },
        { id: "plan-1-loans", title: "Plan 1 Loans", level: 2 },
        { id: "plan-2-loans", title: "Plan 2 Loans", level: 2 },
        { id: "plan-4-loans", title: "Plan 4 Loans", level: 2 },
        { id: "plan-5-loans", title: "Plan 5 Loans", level: 2 },
        { id: "postgraduate-loans", title: "Postgraduate Loans", level: 2 },
        { id: "multiple-loans", title: "Having Multiple Loan Types", level: 2 },
        { id: "checking-loan-type", title: "How to Check Which Loan Type You Have", level: 2 },
        { id: "historical-changes", title: "Historical Changes and Why Multiple Plans Exist", level: 2 },
        { id: "future-changes", title: "Future Changes to Student Loan Plans", level: 2 },
        { id: "conclusion", title: "Understanding Your Student Loan Plan", level: 2 },
    ];

    return (
        <div className="bg-white">
            {/* Header Section with Breadcrumbs */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/guides/">
                                    Guides
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li>
                                <span className="font-medium text-gray-800" aria-current="page">
                                    Loan Types Explained
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        UK Student Loan Types Explained
                    </h1>
                    <p className="text-xl text-gray-600">
                        A comprehensive guide to Plan 1, Plan 2, Plan 4, Plan 5, and Postgraduate loans - understand which plan you have and how it works
                    </p>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    {/* Main Content */}
                    <div className="lg:flex-1 lg:min-w-0">
                        {/* Introduction */}
                        <section className="mb-8">
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                The UK student loans system can be confusing due to the multiple loan plans that exist. Which plan you&apos;re on depends on when and where in the UK you studied. This guide explains each loan type, their key differences, and how to identify which plan applies to you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The way your student loan works - including repayment thresholds, interest rates, and loan term - varies significantly depending on your plan type. Understanding your loan type is crucial for planning your finances effectively and knowing what you&apos;ll pay each month.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Each plan has different rules that were introduced at different times as the government changed how student funding works. From the oldest Plan 1 loans with their lower thresholds but favorable interest rates, to the newest Plan 5 loans with their 40-year repayment periods, each plan reflects the policy priorities at the time it was introduced.
                            </p>
                        </section>

                        {/* Quick Reference */}
                        <section id="quick-reference" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Which Student Loan Plan Do You Have? Quick Reference
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your loan plan depends on when you started your course and where in the UK you studied. Here&apos;s a quick way to identify which plan applies to you:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 1</h3>
                                    <p className="text-gray-700 mb-2">You&apos;re on Plan 1 if:</p>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>You started an undergraduate course before 1 September 2012 in England or Wales</li>
                                        <li>You started an undergraduate course in Northern Ireland (any year)</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 2</h3>
                                    <p className="text-gray-700 mb-2">You&apos;re on Plan 2 if:</p>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>You started an undergraduate course between 1 September 2012 and 31 July 2023 in England or Wales</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 4</h3>
                                    <p className="text-gray-700 mb-2">You&apos;re on Plan 4 if:</p>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>You started an undergraduate or postgraduate course in Scotland on or after 1 September 1998</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 5</h3>
                                    <p className="text-gray-700 mb-2">You&apos;re on Plan 5 if:</p>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>You started an undergraduate course on or after 1 August 2023 in England or Wales</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Postgraduate Loan</h3>
                                    <p className="text-gray-700 mb-2">You have a Postgraduate Loan if:</p>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>You took out a loan for a Master&apos;s degree (available since 2016)</li>
                                        <li>You took out a loan for a Doctoral degree (available since 2018)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison-table" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Comparison of All Student Loan Plans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s a comprehensive comparison of all current student loan plans showing the key differences that affect your repayments:
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-gray-800 font-semibold">Feature</th>
                                            <th className="px-4 py-3 text-left text-gray-800 font-semibold">Plan 1</th>
                                            <th className="px-4 py-3 text-left text-gray-800 font-semibold">Plan 2</th>
                                            <th className="px-4 py-3 text-left text-gray-800 font-semibold">Plan 4</th>
                                            <th className="px-4 py-3 text-left text-gray-800 font-semibold">Plan 5</th>
                                            <th className="px-4 py-3 text-left text-gray-800 font-semibold">Postgraduate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-4 text-gray-800 font-medium">Repayment Threshold (2024/25)</td>
                                            <td className="px-4 py-4 text-gray-600">£22,015</td>
                                            <td className="px-4 py-4 text-gray-600">£27,295</td>
                                            <td className="px-4 py-4 text-gray-600">£27,660</td>
                                            <td className="px-4 py-4 text-gray-600">£25,000</td>
                                            <td className="px-4 py-4 text-gray-600">£21,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 text-gray-800 font-medium">Repayment Rate</td>
                                            <td className="px-4 py-4 text-gray-600">9%</td>
                                            <td className="px-4 py-4 text-gray-600">9%</td>
                                            <td className="px-4 py-4 text-gray-600">9%</td>
                                            <td className="px-4 py-4 text-gray-600">9%</td>
                                            <td className="px-4 py-4 text-gray-600">6%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 text-gray-800 font-medium">Interest Rate</td>
                                            <td className="px-4 py-4 text-gray-600">Lower of RPI or Bank Rate + 1%</td>
                                            <td className="px-4 py-4 text-gray-600">RPI to RPI + 3% (income dependent)</td>
                                            <td className="px-4 py-4 text-gray-600">Lower of RPI or Bank Rate + 1%</td>
                                            <td className="px-4 py-4 text-gray-600">RPI only</td>
                                            <td className="px-4 py-4 text-gray-600">RPI + 3%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 text-gray-800 font-medium">Write-off Period</td>
                                            <td className="px-4 py-4 text-gray-600">25 years or age 65</td>
                                            <td className="px-4 py-4 text-gray-600">30 years</td>
                                            <td className="px-4 py-4 text-gray-600">30 years</td>
                                            <td className="px-4 py-4 text-gray-600">40 years</td>
                                            <td className="px-4 py-4 text-gray-600">30 years</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                The table shows the current rates for 2024/25. Note that thresholds and interest rates can change annually, so it&apos;s important to check for updates each April when the new tax year begins.
                            </p>
                        </section>

                        {/* Plan 1 Loans */}
                        <section id="plan-1-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Plan 1 Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 1 is the oldest loan plan still in repayment and applies to students who started their courses before September 2012 in England and Wales, or Northern Irish students from any year.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Features of Plan 1:</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    <li><strong>Repayment threshold:</strong> £22,015 per year (as of 2024/25), which rises annually with inflation</li>
                                    <li><strong>Interest rate:</strong> The lower of either RPI inflation or the Bank of England base rate plus 1% (currently 1.75%)</li>
                                    <li><strong>Write-off period:</strong> 25 years from the April after graduation for post-2006 starters, or when you turn 65 for pre-2006 starters</li>
                                    <li><strong>Typical loan amounts:</strong> Lower than newer plans, reflecting lower historical tuition fees</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 1 loans generally have the lowest interest rates of all the plans, making them relatively favorable for borrowers. However, the repayment threshold is lower than Plans 2, 4, and 5, meaning you start repaying sooner.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Plan 1 Monthly Repayment</h3>
                                <p className="text-gray-700 mb-2">If you earn £30,000 per year:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Annual income above threshold: £30,000 - £22,015 = £7,985</li>
                                    <li>Monthly repayment: £7,985 ÷ 12 × 9% = £59.89</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                The shorter 25-year write-off period means Plan 1 borrowers are more likely to pay off their loans in full compared to those on newer plans with longer repayment periods.
                            </p>
                        </section>

                        {/* Plan 2 Loans */}
                        <section id="plan-2-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Plan 2 Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 2 applies to English and Welsh students who started their undergraduate courses between September 2012 and July 2023. This plan was introduced alongside the increase in tuition fees to £9,000 (now £9,250).
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Features of Plan 2:</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    <li><strong>Repayment threshold:</strong> £27,295 per year (frozen until 2025)</li>
                                    <li><strong>Interest rate:</strong> Variable based on income and study status</li>
                                    <li><strong>Write-off period:</strong> 30 years from the April after you finish your course</li>
                                    <li><strong>Typical loan amounts:</strong> Higher than Plan 1, reflecting increased tuition fees</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Plan 2 interest rate structure is more complex than other plans:
                            </p>

                            <div className="space-y-3 mb-4">
                                <div className="bg-white border border-gray-200 p-3 rounded">
                                    <h4 className="font-medium text-gray-900">While studying:</h4>
                                    <p className="text-gray-700 text-sm">RPI + 3% (currently around 7.3%)</p>
                                </div>
                                <div className="bg-white border border-gray-200 p-3 rounded">
                                    <h4 className="font-medium text-gray-900">After graduation, earning under threshold:</h4>
                                    <p className="text-gray-700 text-sm">RPI only (currently around 4.3%)</p>
                                </div>
                                <div className="bg-white border border-gray-200 p-3 rounded">
                                    <h4 className="font-medium text-gray-900">After graduation, earning above threshold:</h4>
                                    <p className="text-gray-700 text-sm">RPI to RPI + 3% (increases with income up to £49,130)</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Plan 2 Monthly Repayment</h3>
                                <p className="text-gray-700 mb-2">If you earn £35,000 per year:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Annual income above threshold: £35,000 - £27,295 = £7,705</li>
                                    <li>Monthly repayment: £7,705 ÷ 12 × 9% = £57.79</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Plan 2 introduced significantly higher tuition fees but has a higher repayment threshold than Plan 1, meaning you need to earn more before you start repaying. The longer 30-year write-off period means many borrowers will not repay their loans in full.
                            </p>
                        </section>

                        {/* Plan 4 Loans */}
                        <section id="plan-4-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Plan 4 Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 4 applies to Scottish students who started their course on or after 1 September 1998. Scottish students typically have lower loan amounts as tuition fees are paid by the Scottish government for Scottish students studying in Scotland.
                            </p>

                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Features of Plan 4:</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    <li><strong>Repayment threshold:</strong> £27,660 per year (slightly higher than Plan 2)</li>
                                    <li><strong>Interest rate:</strong> The lower of either RPI inflation or the Bank of England base rate plus 1% (same as Plan 1)</li>
                                    <li><strong>Write-off period:</strong> 30 years from the April after you finish your course</li>
                                    <li><strong>Typical loan amounts:</strong> Often lower due to government-funded tuition fees in Scotland</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 4 combines favorable elements from both Plan 1 (low interest rates) and Plan 2 (higher repayment threshold). This makes it one of the most borrower-friendly plans currently available.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Plan 4 Monthly Repayment</h3>
                                <p className="text-gray-700 mb-2">If you earn £35,000 per year:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Annual income above threshold: £35,000 - £27,660 = £7,340</li>
                                    <li>Monthly repayment: £7,340 ÷ 12 × 9% = £55.05</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Scottish students studying in Scotland benefit from both lower loan amounts (due to free tuition) and favorable repayment terms, making Plan 4 particularly advantageous for Scottish graduates.
                            </p>
                        </section>

                        {/* Plan 5 Loans */}
                        <section id="plan-5-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Plan 5 Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 5 is the newest undergraduate loan type, applying to English and Welsh students who started their course on or after 1 August 2023. This plan represents significant changes to student loan policy.
                            </p>

                            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Features of Plan 5:</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    <li><strong>Repayment threshold:</strong> £25,000 per year (lower than Plan 2)</li>
                                    <li><strong>Interest rate:</strong> RPI only (both during and after study) - currently around 4.3%</li>
                                    <li><strong>Write-off period:</strong> 40 years from the April after you finish your course</li>
                                    <li><strong>Typical loan amounts:</strong> Similar to Plan 2, reflecting current tuition fees</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 5 introduced three major changes: a lower repayment threshold, a simplified interest rate structure (always RPI), and a significantly longer repayment period (40 years instead of 30).
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Impact of Plan 5 Changes:</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    <li>Lower threshold means graduates start repaying sooner</li>
                                    <li>Longer 40-year period means more graduates will repay larger portions of their loans</li>
                                    <li>Simplified RPI-only interest rate makes calculations more predictable</li>
                                    <li>Government projections suggest more graduates will repay loans in full</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Plan 5 Monthly Repayment</h3>
                                <p className="text-gray-700 mb-2">If you earn £30,000 per year:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Annual income above threshold: £30,000 - £25,000 = £5,000</li>
                                    <li>Monthly repayment: £5,000 ÷ 12 × 9% = £37.50</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                The combination of a lower threshold and longer repayment period means Plan 5 graduates will typically pay more over their lifetime compared to Plan 2 graduates, even with the lower interest rate.
                            </p>
                        </section>

                        {/* Postgraduate Loans */}
                        <section id="postgraduate-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Postgraduate Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Postgraduate loans are available for Master&apos;s degrees (since 2016) and Doctoral studies (since 2018). These loans work differently from undergraduate loans and have their own repayment terms.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Features of Postgraduate Loans:</h3>
                                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                    <li><strong>Repayment threshold:</strong> £21,000 per year (frozen since introduction)</li>
                                    <li><strong>Repayment rate:</strong> 6% of income above the threshold (not 9%)</li>
                                    <li><strong>Interest rate:</strong> RPI + 3% throughout the loan (currently around 7.3%)</li>
                                    <li><strong>Write-off period:</strong> 30 years from the April after you finish your course</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Loan amounts vary by level of study:
                            </p>

                            <div className="space-y-3 mb-4">
                                <div className="bg-white border border-gray-200 p-3 rounded">
                                    <h4 className="font-medium text-gray-900">Master&apos;s degrees:</h4>
                                    <p className="text-gray-700 text-sm">Up to £12,167 total (2024/25)</p>
                                </div>
                                <div className="bg-white border border-gray-200 p-3 rounded">
                                    <h4 className="font-medium text-gray-900">Doctoral degrees:</h4>
                                    <p className="text-gray-700 text-sm">Up to £27,892 total (2024/25)</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Postgraduate Loan Monthly Repayment</h3>
                                <p className="text-gray-700 mb-2">If you earn £30,000 per year:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Annual income above threshold: £30,000 - £21,000 = £9,000</li>
                                    <li>Monthly repayment: £9,000 ÷ 12 × 6% = £45.00</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                If you have both an undergraduate and postgraduate loan, you&apos;ll repay them simultaneously. This means you could pay 9% on income above the undergraduate threshold plus 6% on income above the postgraduate threshold, potentially reaching a combined rate of 15% on higher incomes.
                            </p>
                        </section>

                        {/* Multiple Loans */}
                        <section id="multiple-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Having Multiple Loan Types
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Many people have multiple loans from different plans. This happens when you study multiple courses or when loan rules change during your studies.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Common Multiple Loan Scenarios:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>Undergraduate loan (any plan) + Postgraduate loan</li>
                                        <li>Multiple undergraduate loans if you studied different courses</li>
                                        <li>Both Plan 1 and Plan 2 if you studied before and after 2012</li>
                                        <li>Loans from different countries within the UK</li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">How Multiple Loans Are Repaid:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                        <li>Each loan maintains its own repayment terms and thresholds</li>
                                        <li>You make separate calculations for each loan type</li>
                                        <li>Deductions are combined on your payslip but tracked separately</li>
                                        <li>Each loan has its own write-off date</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Combined Repayments</h3>
                                <p className="text-gray-700 mb-2">If you have Plan 2 undergraduate + Postgraduate loans and earn £35,000:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Plan 2: (£35,000 - £27,295) × 9% = £693.45 per year</li>
                                    <li>Postgraduate: (£35,000 - £21,000) × 6% = £840.00 per year</li>
                                    <li><strong>Total annual repayment: £1,533.45 (£127.79 per month)</strong></li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/combined-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800">Combined Repayment Ccalculator</Link> can help you understand your total repayments when you have loans from different plans.
                            </p>
                        </section>

                        {/* Checking Loan Type */}
                        <section id="checking-loan-type" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How to Check Which Loan Type You Have
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you&apos;re not sure which loan plan you&apos;re on, there are several ways to find out:
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Check your payslip</h3>
                                        <p className="text-gray-700 text-sm">
                                            Your payslip should show student loan deductions with a plan number (SL01, SL02, SL04, SL05, or SLPG for postgraduate).
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Log into your Student Finance account</h3>
                                        <p className="text-gray-700 text-sm">
                                            Your online account with Student Finance England, Wales, Scotland, or Northern Ireland will show your loan details and plan type.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Check your annual statement</h3>
                                        <p className="text-gray-700 text-sm">
                                            Annual statements sent by the Student Loans Company clearly state which plan you&apos;re on and your current balance.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Use the quick reference above</h3>
                                        <p className="text-gray-700 text-sm">
                                            Based on when and where you studied, you can determine your loan plan using the quick reference section of this guide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Historical Changes */}
                        <section id="historical-changes" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Historical Changes and Why Multiple Plans Exist
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The UK student loans system has evolved significantly since its introduction. Each plan reflects the government&apos;s policy priorities at the time it was created:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">1998: Introduction of tuition fees</h3>
                                    <p className="text-gray-700 text-sm">
                                        Tuition fees introduced at £1,000 per year. Plan 1 loans created to support this change.
                                    </p>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">2006: Fees increase to £3,000</h3>
                                    <p className="text-gray-700 text-sm">
                                        Tuition fees raised to £3,000 per year. Plan 1 terms adjusted to accommodate higher borrowing.
                                    </p>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">2012: Plan 2 introduction</h3>
                                    <p className="text-gray-700 text-sm">
                                        Fees increased to £9,000. Plan 2 created with higher thresholds and longer repayment terms to make higher fees manageable.
                                    </p>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">2016-2018: Postgraduate loans</h3>
                                    <p className="text-gray-700 text-sm">
                                        Master&apos;s (2016) and Doctoral (2018) loans introduced to support postgraduate study.
                                    </p>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">2023: Plan 5 introduction</h3>
                                    <p className="text-gray-700 text-sm">
                                        Plan 5 introduced with lower thresholds, simplified interest, and longer repayment periods to increase loan repayment rates.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mt-4">
                                Each change was made without affecting existing borrowers, creating the complex multi-plan system we have today. This approach protects existing students but creates confusion for those trying to understand the system.
                            </p>
                        </section>

                        {/* Future Changes */}
                        <section id="future-changes" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Future Changes to Student Loan Plans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The student loans system continues to evolve. Recent and upcoming changes include:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 2 Threshold Freeze</h3>
                                    <p className="text-gray-700">
                                        The Plan 2 threshold is frozen at £27,295 until April 2025, after which it will rise with average earnings rather than inflation.
                                    </p>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Interest Rate Reviews</h3>
                                    <p className="text-gray-700">
                                        The government regularly reviews interest rate methodologies. Recent changes have generally reduced rates from their previous peaks.
                                    </p>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Potential Future Reforms</h3>
                                    <p className="text-gray-700">
                                        Various reforms are regularly proposed, including consolidating plans, changing interest rates, or modifying repayment terms. Any changes would likely only affect new students.
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mt-4">
                                Stay informed about changes through official channels like GOV.UK and Student Finance. Changes to existing loans are rare, but new students may face different terms as policy evolves.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Understanding Your Student Loan Plan
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding which student loan plan you&apos;re on is crucial for financial planning. Each plan has different rules that significantly affect how much you&apos;ll repay and when your loan will be written off.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The key differences to remember are repayment thresholds (when you start paying), interest rates (how much your debt grows), and write-off periods (when remaining debt is cancelled). These three factors combine to determine your total lifetime repayment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> to model how different scenarios affect your specific loan plan. Understanding your loan terms helps you make informed decisions about careers, salary negotiations, and financial planning.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Remember that loan terms can change for new students, but existing borrowers are typically protected from retrospective changes. Keep track of any policy announcements that might affect future students or any loans you might take out for further study.
                            </p>
                        </section>

                        {/* Final Call to Action */}
                        <section className="text-center py-8 border-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Know your loan plan to understand your repayments
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Use our calculators to see exactly how your specific loan plan affects your monthly payments
                            </p>
                            <Link
                                href="/calculators/"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Try Our Calculators
                            </Link>
                        </section>

                        <DrLilaDesc />
                    </div>

                    {/* Sidebar - Table of Contents */}
                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default LoanTypesExplained;