import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const RepaymentThresholdsGuide: React.FC = () => {
    const tocItems = [
        { id: "threshold-overview", title: "2025/26 Repayment Thresholds Overview", level: 2 },
        { id: "how-thresholds-work", title: "How Repayment Thresholds Work", level: 2 },
        { id: "threshold-changes", title: "How Thresholds Change Each Year", level: 2 },
        { id: "multiple-jobs", title: "Multiple Jobs and Self-Employment", level: 2 },
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
                                    Repayment Thresholds
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        UK Student Loan Repayment Thresholds 2025/26
                    </h1>
                    <p className="text-xl text-gray-600">
                        Complete guide to when you start repaying your UK student loan
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
                                The repayment threshold is the minimum income level at which you start making student
                                loan repayments. If you earn below this amount, you make no repayments at all—regardless
                                of how much you owe or how long you&apos;ve had your loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide explains the current thresholds for all UK student loan plans, how the system
                                works, and what happens when your income crosses these important boundaries.
                            </p>
                        </section>

                        {/* Threshold Overview */}
                        <section id="threshold-overview" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                2025/26 Repayment Thresholds Overview
                            </h2>

                            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Annual Repayment Thresholds
                                </h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Loan Plan</th>
                                                <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Annual Threshold</th>
                                                <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Monthly Threshold</th>
                                                <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Weekly Threshold</th>
                                                <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Repayment Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-800 font-medium">Plan 1</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£24,990</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£2,082</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£480</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">9%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-800 font-medium">Plan 2</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£27,295</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£2,274</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£524</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">9%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-800 font-medium">Plan 4</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£31,395</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£2,616</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£603</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">9%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-800 font-medium">Plan 5</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£25,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£2,083</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£480</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">9%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 text-sm text-gray-800 font-medium">Postgraduate</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£21,000</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£1,750</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">£403</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">6%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-sm text-gray-500 mt-4">
                                    These thresholds apply for the 2025/26 tax year (April 2025 to April 2026).
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Each loan plan has a different repayment threshold, reflecting when the loan was taken
                                out and the terms agreed at that time. The thresholds are reviewed annually and may
                                change based on inflation and government policy.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Differences Between Plans</h3>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                                <li>
                                    <strong>Plan 1:</strong> For students who started before September 2012 in England
                                    and Wales, or Northern Irish students
                                </li>
                                <li>
                                    <strong>Plan 2:</strong> For English and Welsh students who started between September
                                    2012 and July 2023
                                </li>
                                <li>
                                    <strong>Plan 4:</strong> For Scottish students
                                </li>
                                <li>
                                    <strong>Plan 5:</strong> For English and Welsh students who started from August 2023
                                    onwards
                                </li>
                                <li>
                                    <strong>Postgraduate Loan:</strong> For master&apos;s and doctoral loans, with a lower
                                    threshold and 6% repayment rate
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                If you have multiple student loans (e.g., undergraduate and postgraduate), you&apos;ll
                                repay on both once your income exceeds each respective threshold.
                            </p>
                        </section>

                        {/* How Thresholds Work */}
                        <section id="how-thresholds-work" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How Repayment Thresholds Work
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding how thresholds work is crucial for managing your finances as a graduate:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">You Only Repay on Income Above the Threshold</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The threshold isn&apos;t a cliff edge where you suddenly start paying a large amount.
                                You only repay a percentage of the income that exceeds the threshold.
                            </p>

                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">Example: Plan 2 on £30,000</h4>
                                <ul className="list-none space-y-2 text-gray-700">
                                    <li>Annual salary: £30,000</li>
                                    <li>Plan 2 threshold: £27,295</li>
                                    <li>Income above threshold: £30,000 - £27,295 = £2,705</li>
                                    <li>Repayment rate: 9%</li>
                                    <li><strong>Annual repayment: 9% × £2,705 = £243.45</strong></li>
                                    <li><strong>Monthly repayment: approximately £20</strong></li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Repayments Are Taken Automatically</h3>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                If you&apos;re employed, your repayments are deducted through PAYE (Pay As You Earn)
                                alongside tax and National Insurance:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                                <li>Your employer calculates and deducts repayments from your salary</li>
                                <li>You don&apos;t need to do anything or contact the Student Loans Company</li>
                                <li>Repayments appear on your payslip as &quot;Student Loan&quot;</li>
                                <li>The deductions go directly to HMRC, who forward them to the Student Loans Company</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">What If You Earn Below the Threshold?</h3>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                If your income is below the repayment threshold:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                                <li>You make no repayments at all</li>
                                <li>Interest continues to accrue on your loan balance</li>
                                <li>There&apos;s no penalty or negative impact on your credit score</li>
                                <li>You don&apos;t need to notify anyone—the system handles this automatically</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Income That Counts Toward the Threshold</h3>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                Your repayment threshold is based on your total income before tax, including:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                                <li>Salary and wages from employment</li>
                                <li>Self-employment profits</li>
                                <li>Pension income</li>
                                <li>Rental income from property</li>
                                <li>Interest from savings (though not within ISAs)</li>
                                <li>Dividend income from investments</li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                Benefits such as Universal Credit, Housing Benefit, and Child Benefit are not included
                                in the calculation of your repayment income.
                            </p>
                        </section>

                        {/* Threshold Changes */}
                        <section id="threshold-changes" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How Thresholds Change Each Year
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Repayment thresholds are reviewed and updated annually, though the method varies by loan plan:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Plan 1 and Plan 4</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Thresholds typically increase each year in line with RPI (Retail Price Index) inflation,
                                helping to maintain the real-terms value of the threshold over time.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Plan 2</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Plan 2 threshold was frozen at £27,295 from 2021/22 to 2024/25 as a government policy
                                measure. It&apos;s expected to resume increasing with inflation from 2025/26 onwards,
                                though this depends on government decisions.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Plan 5</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 5 thresholds are set to increase annually in line with average earnings, which
                                typically grow faster than RPI inflation. This means Plan 5 graduates benefit from
                                thresholds that keep pace with wage growth.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Postgraduate Loan</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The postgraduate threshold has remained at £21,000 since the loan was introduced in 2016.
                                The government has not announced plans to increase it, meaning it has fallen significantly
                                in real terms.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">Important Note</h4>
                                <p className="text-gray-700">
                                    Threshold changes are announced by the government each year, usually in the autumn
                                    Budget. Always check the latest figures from the Student Loans Company or gov.uk,
                                    as thresholds can be changed by government policy.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Historical Threshold Changes</h3>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                To give you context on how thresholds have evolved:
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Tax Year</th>
                                            <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Plan 1</th>
                                            <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Plan 2</th>
                                            <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">Plan 4</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-800 font-medium">2020/21</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£19,390</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£26,575</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£25,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-800 font-medium">2021/22</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£19,895</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£27,295</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£25,375</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-800 font-medium">2022/23</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£20,195</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£27,295</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£25,375</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-800 font-medium">2023/24</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£22,015</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£27,295</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£27,660</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-800 font-medium">2024/25</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£24,990</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£27,295</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">£31,395</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                As you can see, Plan 2 has been frozen while other plans have increased, meaning Plan 2
                                graduates now have a relatively lower threshold compared to when the plan was introduced.
                            </p>
                        </section>

                        {/* Multiple Jobs */}
                        <section id="multiple-jobs" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Multiple Jobs and Self-Employment
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have multiple sources of income, the threshold system can work differently:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Multiple Employed Jobs</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Each employer assesses your income separately for student loan purposes:
                            </p>

                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">Example: Two Part-Time Jobs</h4>
                                <p className="text-gray-700 mb-2">You have:</p>
                                <ul className="list-none space-y-1 text-gray-700 mb-3">
                                    <li>Job A: £15,000 per year</li>
                                    <li>Job B: £15,000 per year</li>
                                    <li>Total income: £30,000</li>
                                    <li>Plan 2 threshold: £27,295</li>
                                </ul>
                                <p className="text-gray-700 mb-2">What happens:</p>
                                <ul className="list-none space-y-1 text-gray-700">
                                    <li>Neither employer deducts student loan repayments (each job is below threshold)</li>
                                    <li>However, your total income exceeds the threshold</li>
                                    <li>You should contact SLC to arrange payment on the £2,705 above threshold</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Self-Employment</h3>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                If you&apos;re self-employed, repayments work differently:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                                <li>
                                    Repayments are calculated through Self Assessment based on your annual profit
                                </li>
                                <li>
                                    You&apos;ll pay via your Self Assessment tax return, usually in January and July
                                </li>
                                <li>
                                    The threshold still applies—you only repay on profit above the threshold
                                </li>
                                <li>
                                    You can claim allowable business expenses to reduce your profit and therefore your
                                    repayment amount
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mixed Employment and Self-Employment</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you&apos;re both employed and self-employed:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                                <li>
                                    Your employer will deduct repayments through PAYE on your employed income
                                </li>
                                <li>
                                    You&apos;ll also need to declare your self-employment income via Self Assessment
                                </li>
                                <li>
                                    The Student Loans Company will consider your total income when calculating what you
                                    owe
                                </li>
                                <li>
                                    You may receive a credit for repayments already made through PAYE
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Overpayment Refunds</h3>
                            <p className="text-gray-700 leading-relaxed mb-2">
                                You can claim a refund if:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                                <li>
                                    Your employer deducted repayments but your annual income was below the threshold
                                </li>
                                <li>
                                    You made repayments after your loan was fully repaid
                                </li>
                                <li>
                                    You&apos;re not eligible to repay (e.g., living abroad and exempt)
                                </li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed">
                                Contact the Student Loans Company with evidence (payslips, P60) to claim any
                                overpayments. Refunds are usually processed within 4-6 weeks.
                            </p>
                        </section>

                        {/* CTA */}
                        <section className="mb-8">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                                <div className="text-center space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                                    <p className="text-lg text-blue-100">
                                        Use our calculator to see exactly how much you&apos;ll repay based on your income and loan plan
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link
                                            href="/"
                                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                                        >
                                            Student Loan Calculator
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <DrLilaDesc />

                        {/* Related resources */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                Related Resources
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Link
                                    href="/guides/student-loans-low-income/"
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans on Low Income</h3>
                                    <p className="text-gray-600 text-sm">
                                        Essential guidance for graduates earning below or near the repayment thresholds.
                                    </p>
                                </Link>

                                <Link
                                    href="/compare/student-loans-career-progression/"
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        Student Loans Carrer Progression
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        How different loan plans compare with salary growth from £25,000 to £60,000 over 15 years.
                                    </p>
                                </Link>
                            </div>
                        </section>
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

export default RepaymentThresholdsGuide;