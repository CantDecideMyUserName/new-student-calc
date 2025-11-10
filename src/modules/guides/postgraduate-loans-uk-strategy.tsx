import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const PostgraduateLoansStrategy: React.FC = () => {
    const tocItems = [
        { id: "postgraduate-basics", title: "Postgraduate Loan Basics", level: 2 },
        { id: "repayment-terms", title: "Postgraduate Repayment Terms", level: 2 },
        { id: "combining-loans", title: "Combining Undergraduate and Postgraduate Loans", level: 2 },
        { id: "interest-rate", title: "Interest Rate on Postgraduate Loans", level: 2 },
        { id: "should-you-take", title: "Strategic Decisions: Should You Take a Postgraduate Loan?", level: 2 },
        { id: "overpayment-strategy", title: "Overpayment Strategy for Postgraduate Loans", level: 2 },
        { id: "salary-sacrifice", title: "Salary Sacrifice and Dual Loans", level: 2 },
        { id: "tax-codes-payslips", title: "Tax Codes and Payslips with Both Loans", level: 2 },
        { id: "writeoff-likelihood", title: "Write-Off Likelihood for Postgraduate Loans", level: 2 },
        { id: "taking-control", title: "Taking Control of Postgraduate Loan Strategy", level: 2 },
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
                                    Postgraduate Loans Strategy
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Postgraduate Loans: Strategic Repayment for Master&apos;s and Doctoral Borrowers
                    </h1>
                    <p className="text-xl text-gray-600">
                        Complete guide to UK postgraduate loans. How Master&apos;s and Doctoral loans interact with undergraduate debt, thresholds, and repayment strategies.
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
                                Postgraduate loans operate under completely different rules than undergraduate student loans, yet many people with both loans don&apos;t fully understand how they interact. If you&apos;ve taken out a postgraduate Master&apos;s loan or a Doctoral loan, you&apos;re not on Plan 1, 2, 4, or 5. You&apos;re on a separate postgraduate loan system with its own threshold (£21,000), its own repayment rate (6%), and its own 30-year write-off period.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The complexity intensifies if you have both undergraduate and postgraduate loans. The two systems run in parallel, each with their own threshold and repayment rate. You can face combined deductions of 15% on income above the higher threshold (9% undergraduate plus 6% postgraduate). This creates marginal tax rates that can exceed 60% when combined with income tax and National Insurance, fundamentally changing how you should think about salary negotiations, career decisions, and financial planning.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                What catches most postgraduate borrowers off-guard is the lower threshold. While undergraduate Plan 2 starts at £27,295, postgraduate repayments begin at just £21,000. For many Master&apos;s graduates, this means repayments start immediately upon entering even entry-level professional roles. A graduate entering teaching, social work, or junior management on £24,000 pays nothing on their undergraduate loan but pays £270 annually (£22.50 monthly) on their postgraduate loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Understanding postgraduate loan mechanics, how they combine with undergraduate loans, and how to optimize repayments across both requires careful attention to the specific rules that govern each loan type.
                            </p>
                        </section>

                        {/* Postgraduate Loan Basics */}
                        <section id="postgraduate-basics" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Postgraduate Loan Basics
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Postgraduate loans were introduced in 2016 for Master&apos;s degrees and 2018 for Doctoral degrees. They&apos;re available to help with the costs of postgraduate study, but unlike undergraduate loans, they&apos;re lump sum payments directly to you (not split between tuition and maintenance), and you decide how to use the money.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Master&apos;s Loans:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Available up to £12,167 (2024/25) for Master&apos;s degree courses</li>
                                        <li>Paid in three instalments across the academic year</li>
                                        <li>Paid directly to you, not your university</li>
                                        <li>Can be used for tuition fees, living costs, or both</li>
                                        <li>Available for courses up to age 60</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Doctoral Loans:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Available up to £28,673 (2024/25) for PhD or other doctoral degrees</li>
                                        <li>Paid in six instalments across the doctoral study period</li>
                                        <li>Paid directly to you</li>
                                        <li>Available for courses up to age 60</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Eligibility:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Must be a UK resident (or meet residency criteria)</li>
                                    <li>Must not already hold a qualification at the level you&apos;re applying for or higher</li>
                                    <li>Must be under 60 at the start of your course</li>
                                    <li>Course must be eligible (most taught Master&apos;s and research doctoral degrees qualify)</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    Unlike undergraduate loans where most people borrow similar amounts (maximum fees plus maintenance), postgraduate loan amounts vary enormously. Someone might borrow £5,000 to cover part of their fees while working, while another borrows the full £12,167 and uses it for both fees and living costs.
                                </p>
                            </div>
                        </section>

                        {/* Postgraduate Repayment Terms */}
                        <section id="repayment-terms" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Postgraduate Repayment Terms
                            </h2>

                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key terms (apply to both Master&apos;s and Doctoral loans):</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li><strong>Threshold:</strong> £21,000 annually (£1,750 monthly)</li>
                                    <li><strong>Repayment rate:</strong> 6% on income above the threshold</li>
                                    <li><strong>Write-off:</strong> 30 years after the April you were first due to repay</li>
                                    <li><strong>Interest:</strong> RPI from November before course starts until April following graduation, then RPI+3% during repayment</li>
                                </ul>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Examples of monthly repayments:</h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £25,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £4,000</li>
                                        <li>Annual: £240</li>
                                        <li><strong>Monthly: £20</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £30,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £9,000</li>
                                        <li>Annual: £540</li>
                                        <li><strong>Monthly: £45</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £40,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £19,000</li>
                                        <li>Annual: £1,140</li>
                                        <li><strong>Monthly: £95</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £60,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £39,000</li>
                                        <li>Annual: £2,340</li>
                                        <li><strong>Monthly: £195</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    The 6% rate is lower than the 9% rate on undergraduate loans, but the much lower threshold (£21,000 vs £25,000-£27,295) means postgraduate repayments start earlier and affect more of your income.
                                </p>
                            </div>
                        </section>

                        {/* Combining Undergraduate and Postgraduate Loans */}
                        <section id="combining-loans" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Combining Undergraduate and Postgraduate Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The real complexity emerges when you have both undergraduate and postgraduate loans simultaneously. The two systems operate independently, each checking your income against their respective thresholds and applying their repayment rates.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How combined repayments work:</h3>
                            <p className="text-gray-700 text-sm mb-3">If you have Plan 2 undergraduate (threshold £27,295) and postgraduate (threshold £21,000):</p>

                            <div className="space-y-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £20,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Below both thresholds</li>
                                        <li><strong>Pay nothing on either loan</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £24,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Below undergraduate threshold (Plan 2): Pay £0</li>
                                        <li>Above postgraduate threshold by £3,000: Pay £180 annually (£15 monthly)</li>
                                        <li><strong>Total: £180 annually</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £30,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above undergraduate threshold by £2,705: Pay £243.45 annually</li>
                                        <li>Above postgraduate threshold by £9,000: Pay £540 annually</li>
                                        <li><strong>Total: £783.45 annually (£65.29 monthly)</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Income £40,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above undergraduate threshold by £12,705: Pay £1,143.45 annually</li>
                                        <li>Above postgraduate threshold by £19,000: Pay £1,140 annually</li>
                                        <li><strong>Total: £2,283.45 annually (£190.29 monthly)</strong></li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        At £40,000 income, someone with both loans pays nearly £2,300 annually in student loan deductions. That&apos;s £190 per month coming out of their paycheck.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The 15% marginal rate:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Once you&apos;re above both thresholds, you face a 15% marginal rate on additional income (9% undergraduate + 6% postgraduate). Combined with:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mt-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Basic rate taxpayer with both loans:</h4>
                                        <p className="text-gray-700 text-sm">20% income tax + 12% NI + 9% undergrad + 6% postgrad = <strong>47% marginal rate</strong></p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Higher rate taxpayer with both loans:</h4>
                                        <p className="text-gray-700 text-sm">40% income tax + 2% NI + 9% undergrad + 6% postgrad = <strong>57% marginal rate</strong></p>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Nearly 60 pence of every additional pound earned goes to deductions</strong> if you&apos;re a higher rate taxpayer with both loans. This dramatically affects salary negotiation, bonus valuation, and career decisions.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/combined-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Multiple Student Loans Combined Impact Calculator </Link> shows exactly what you&apos;ll pay with combined undergraduate and postgraduate loans at different income levels.
                                </p>
                            </div>
                        </section>

                        {/* Interest Rate on Postgraduate Loans */}
                        <section id="interest-rate" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Interest Rate on Postgraduate Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Postgraduate loan interest has two phases:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">While studying and before repayment starts:</h3>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Interest rate: RPI from the November before your course starts</li>
                                        <li>This is lower than the RPI+3% that Plan 2 undergraduate borrowers pay while studying</li>
                                        <li>Your balance grows more slowly during study than undergraduate Plan 2 balances</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">During repayment (from April after graduation):</h3>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Interest rate: RPI+3%</li>
                                        <li>This is the maximum rate, applied regardless of income</li>
                                        <li>Unlike undergraduate Plan 2, there&apos;s no lower rate for low earners</li>
                                        <li>Everyone pays RPI+3% throughout repayment</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">
                                    With RPI currently around 3-4%, postgraduate loan interest during repayment is approximately 6-7%, the same as Plan 2&apos;s maximum rate. This high interest rate means postgraduate loan balances often grow despite repayments, particularly for borrowers earning below £35,000.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Example: Master&apos;s borrower with £10,000 loan balance</h3>

                            <div className="space-y-4">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Earning £26,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £5,000</li>
                                        <li>Annual repayment: £300</li>
                                        <li>Annual interest at 6.5%: £650</li>
                                        <li><strong className="text-red-600">Balance grows by £350 annually</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Earning £35,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £14,000</li>
                                        <li>Annual repayment: £840</li>
                                        <li>Annual interest at 6.5%: £650</li>
                                        <li><strong className="text-yellow-600">Balance shrinks by £190 annually (slow progress)</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Earning £50,000:</h4>
                                    <ul className="text-gray-700 text-sm">
                                        <li>Above threshold by £29,000</li>
                                        <li>Annual repayment: £1,740</li>
                                        <li>Annual interest at 6.5%: £650</li>
                                        <li><strong className="text-green-600">Balance shrinks by £1,090 annually (good progress)</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Only at incomes above approximately £32,000 do repayments start meaningfully exceeding interest on even a modest £10,000 postgraduate loan balance. For larger balances, you need even higher income to make real progress.
                                </p>
                            </div>
                        </section>

                        {/* Strategic Decisions: Should You Take a Postgraduate Loan? */}
                        <section id="should-you-take" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Strategic Decisions: Should You Take a Postgraduate Loan?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The availability of postgraduate loans has made Master&apos;s degrees more accessible, but the debt implications are significant. The decision to borrow requires careful analysis.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When postgraduate loans make sense:</h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Career requirement:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If your target career requires a Master&apos;s degree (e.g., clinical psychology, certain engineering specializations, teaching in some subjects), the loan enables the necessary qualification.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Significant salary increase:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If the Master&apos;s degree leads to roles paying £15,000-£25,000 more than you&apos;d earn without it, the increased earnings justify the loan cost.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">No alternative funding:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you don&apos;t have savings, family support, or employer funding for the Master&apos;s, the loan might be your only route to the qualification.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When postgraduate loans might not make sense:</h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Unclear career benefit:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If the Master&apos;s is &quot;interesting&quot; but doesn&apos;t clearly improve career prospects or earnings, you&apos;re borrowing £12,000+ for uncertain return.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Already high undergraduate debt:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you have £50,000+ undergraduate debt that will likely be written off, adding £12,000 more starts a separate 30-year repayment journey. You&apos;re extending your repayment obligations and increasing monthly deductions.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Low earning potential field:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If your field typically pays £25,000-£35,000, you&apos;ll make minimal progress against the postgraduate loan while paying on it for 30 years. Consider whether the qualification justifies the long-term cost.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Alternative funding available:</h4>
                                            <p className="text-gray-700 text-sm">
                                                Scholarships, employer sponsorship, part-time study while working, or using savings might be better options if available.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Run projections using our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> to estimate whether the likely salary increase from the Master&apos;s justifies the loan cost and extended repayment obligations.
                                </p>
                            </div>
                        </section>

                        {/* Overpayment Strategy for Postgraduate Loans */}
                        <section id="overpayment-strategy" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Overpayment Strategy for Postgraduate Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Should you voluntarily overpay your postgraduate loan? The analysis differs from undergraduate loans due to different write-off likelihood.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Postgraduate loans are more likely to be repaid in full:</h3>
                                <p className="text-gray-700 text-sm mb-2">Postgraduate loans have:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Lower average balances (£8,000-£12,000 typically)</li>
                                    <li>Borrowers with generally higher earning potential (having already completed undergraduate)</li>
                                    <li>30-year write-off, same as undergraduate Plan 2</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    Someone borrowing £10,000 for a Master&apos;s who goes on to earn £45,000+ is likely to repay the postgraduate loan in full within 15-20 years. Write-off is less relevant than for undergraduate loans where balances are larger and earnings projections are more varied.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When overpaying postgraduate loans might make sense:</h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">High earners on track to repay in full:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you&apos;re earning £50,000+ and will clearly repay the postgraduate loan in full, overpaying saves the 6-7% interest. But compare this against pension contributions (with 20-45% tax relief), ISA investments (potentially higher returns), or mortgage overpayments.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Small balances near the end:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you have £2,000 remaining and can clear it easily, doing so eliminates the administrative hassle of tracking one more loan. But financially, letting it run through PAYE until naturally paid off is equivalent.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When overpaying doesn&apos;t make sense:</h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Low-to-moderate earners:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you&apos;re earning £28,000-£38,000, your postgraduate loan balance might grow or stay flat for years due to interest exceeding repayments. Overpaying is risky because you might never repay in full even with overpayments.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Combined with large undergraduate debt:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you have £50,000 undergraduate debt plus £10,000 postgraduate debt, focus on building wealth through pensions and savings rather than targeting either loan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>General recommendation:</strong> Even for postgraduate loans where full repayment is likely, pension contributions almost always provide better financial outcomes than overpayment due to tax relief and compound growth benefits.
                                </p>
                            </div>
                        </section>

                        {/* Salary Sacrifice and Dual Loans */}
                        <section id="salary-sacrifice" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Salary Sacrifice and Dual Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Salary sacrifice creates particularly valuable benefits for borrowers with both undergraduate and postgraduate loans because it reduces both repayments simultaneously:
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Example: Earning £40,000, sacrificing £3,000 annually for pension</h3>

                                <div className="grid md:grid-cols-2 gap-4 mt-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Without salary sacrifice:</h4>
                                        <ul className="text-gray-700 text-sm">
                                            <li>Gross salary: £40,000</li>
                                            <li>Undergraduate repayment: (£40,000 - £27,295) × 9% = £1,143.45</li>
                                            <li>Postgraduate repayment: (£40,000 - £21,000) × 6% = £1,140</li>
                                            <li><strong>Total student loans: £2,283.45</strong></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">With £3,000 salary sacrifice:</h4>
                                        <ul className="text-gray-700 text-sm">
                                            <li>Gross salary for student loan purposes: £37,000</li>
                                            <li>Undergraduate repayment: (£37,000 - £27,295) × 9% = £873.45</li>
                                            <li>Postgraduate repayment: (£37,000 - £21,000) × 6% = £960</li>
                                            <li><strong>Total student loans: £1,833.45</strong></li>
                                            <li><strong className="text-green-600">Student loan saving: £450 annually</strong></li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    The £3,000 sacrifice saves £450 in student loans (15% of the sacrificed amount) plus tax and National Insurance savings. You&apos;re getting substantial benefit while building pension wealth.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    For dual loan borrowers, salary sacrifice is even more valuable than for single loan borrowers because you&apos;re saving at the combined 15% rate.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Check our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/pension-salary-sacrifice-effect-calculator/"> Pension Salary Sacrifice Effect Calculator </Link> to see exact savings for your situation.
                                </p>
                            </div>
                        </section>

                        {/* Tax Codes and Payslips with Both Loans */}
                        <section id="tax-codes-payslips" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Tax Codes and Payslips with Both Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your tax code includes markers for student loans:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Tax code markers:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li><strong>SL marker:</strong> Undergraduate loan (Plan 1 or 2)</li>
                                    <li><strong>PGL marker:</strong> Postgraduate loan</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    If you have both loans, your tax code should show both markers, something like: <strong>1257L SL PGL</strong>
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Check your payslip carefully:</h3>
                                <p className="text-gray-700 text-sm mb-2">Your payslip should show separate lines for:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Student loan deduction (undergraduate)</li>
                                    <li>Postgraduate loan deduction</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    If your payslip only shows one deduction or doesn&apos;t differentiate between the two, contact your payroll department immediately. You might be underpaying one loan (creating arrears you&apos;ll owe later) or overpaying (if they&apos;re deducting at the wrong rate).
                                </p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common payroll errors with dual loans:</h3>

                                <div className="space-y-3 mt-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 1: Missing PGL marker</h4>
                                        <ul className="text-gray-700 text-sm">
                                            <li>Tax code shows SL but not PGL</li>
                                            <li>Only undergraduate loan gets deducted</li>
                                            <li>Postgraduate loan accumulates as unpaid</li>
                                            <li><strong>Fix:</strong> Contact HMRC to update tax code</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 2: Wrong repayment rates</h4>
                                        <ul className="text-gray-700 text-sm">
                                            <li>Sometimes payroll systems deduct 9% on both loans instead of 9% and 6%</li>
                                            <li>Or deduct 15% combined instead of calculating separately</li>
                                            <li><strong>Fix:</strong> Contact payroll with evidence of correct rates from Student Loans Company</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 3: Wrong thresholds applied</h4>
                                        <ul className="text-gray-700 text-sm">
                                            <li>Might use same threshold for both loans instead of different ones</li>
                                            <li><strong>Fix:</strong> Contact payroll and HMRC to correct</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    Always verify your deductions match the correct calculations. Errors with dual loans are more common than with single loans because payroll systems must handle two separate calculations.
                                </p>
                            </div>
                        </section>

                        {/* Write-Off Likelihood for Postgraduate Loans */}
                        <section id="writeoff-likelihood" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Write-Off Likelihood for Postgraduate Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Postgraduate loans have higher write-off likelihood than undergraduate Plan 1 but lower than undergraduate Plan 2:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Likely to repay in full:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>High earners (£60,000+) with typical £8,000-£12,000 postgraduate balances</li>
                                        <li>Those without undergraduate loans who only have postgraduate debt</li>
                                        <li>Very high earners (£80,000+) who clear it within 10-15 years</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Likely to have write-off:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Low-to-moderate earners (£28,000-£40,000) where interest keeps pace with repayments</li>
                                        <li>Those with both large undergraduate and postgraduate balances</li>
                                        <li>Anyone whose balance is still growing after 10-15 years of repayment</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    The key variable is whether you&apos;re making meaningful progress against the balance. If your balance is decreasing by £500+ annually, you&apos;ll probably repay in full eventually. If it&apos;s flat or growing, write-off is likely.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/loan-writeoff-checker/"> Loan Write-Off Checker </Link> helps you assess write-off likelihood for both loans individually and combined.
                                </p>
                            </div>
                        </section>

                        {/* Taking Control of Postgraduate Loan Strategy */}
                        <section id="taking-control" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Taking Control of Postgraduate Loan Strategy
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Postgraduate loans require strategic thinking, particularly when combined with undergraduate debt:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key strategic principles:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Understand the 15% combined rate:</strong> If you have both loans, accept that 15% of income above the higher threshold goes to student loans. This is your reality for up to 30 years.</li>
                                    <li><strong>Don&apos;t overpay either loan:</strong> Focus money on pensions and savings. Tax relief and compound growth beat paying down loans that might be written off.</li>
                                    <li><strong>Use salary sacrifice aggressively:</strong> For dual loan borrowers, salary sacrifice saves at the combined 15% rate plus tax and NI savings. It&apos;s exceptionally valuable.</li>
                                    <li><strong>Check payslips monthly:</strong> Errors are more common with dual loans. Verify both loans are deducted correctly at correct rates and thresholds.</li>
                                    <li><strong>Career decisions:</strong> The 15% rate makes raises less valuable (keeping only 53% if basic rate, 43% if higher rate). But career progression is still financially beneficial. Don&apos;t turn down opportunities due to student loan impact.</li>
                                    <li><strong>Plan for 30 years:</strong> Your postgraduate loan runs for 30 years, same as undergraduate Plan 2. That&apos;s potentially until your mid-50s. Budget and plan accordingly.</li>
                                    <li><strong>Consider postgraduate borrowing carefully:</strong> Before taking a postgraduate loan, model the career benefit against the 30-year cost. Make sure the qualification delivers sufficient earnings increase to justify the debt.</li>
                                </ol>
                            </div>

                            <p className="text-gray-700 leading-relaxed mt-4">
                                Postgraduate loans add complexity to an already complex student loan system. But with understanding of how they work, how they combine with undergraduate loans, and how to optimize around the rules, you can manage them effectively while building wealth through other financial priorities. The dual loan burden is real, but it&apos;s manageable with the right strategy and shouldn&apos;t prevent you from achieving broader financial goals.
                            </p>
                        </section>

                        {/* Final Call to Action */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Focus on building wealth through pensions and savings while managing your postgraduate loan obligations through PAYE. The complexity is manageable with the right understanding and strategic approach.
                            </h3>
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

export default PostgraduateLoansStrategy;