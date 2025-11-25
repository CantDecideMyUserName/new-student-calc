import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const DroppingOutLoanConsequences: React.FC = () => {
    const tocItems = [
        { id: "dropout-reality", title: "The Reality of Dropping Out", level: 2 },
        { id: "partial-degree-debt", title: "Partial Degree Debt: What You Owe", level: 2 },
        { id: "no-refund-policy", title: "No Refunds: Understanding the Rules", level: 2 },
        { id: "repayment-without-degree", title: "Repayment Without a Degree", level: 2 },
        { id: "career-impact", title: "Career and Earning Impact Without Qualification", level: 2 },
        { id: "re-enrolling-options", title: "Re-Enrolling and Further Loan Eligibility", level: 2 },
        { id: "alternatives-to-dropping-out", title: "Alternatives to Dropping Out", level: 2 },
        { id: "real-scenarios", title: "Real Dropout Scenarios and Outcomes", level: 2 },
        { id: "decision-framework", title: "Decision Framework: Should You Drop Out?", level: 2 },
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
                                <Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">
                                    Student Loan Lifecycle
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
                                    Dropping Out: Loan Consequences
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Dropping Out: Student Loan Consequences and Repayment Obligations
                    </h1>
                    <p className="text-xl text-gray-600">
                        Financial impact of leaving university early, partial degree debt, and repayment without a qualification
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
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Approximately 6-7% of UK undergraduates drop out before completing their degree—that&apos;s about 1 in 15 students. If you&apos;re considering dropping out or have already left, understanding your student loan obligations is critical. The harsh reality: you owe every penny borrowed up to the point you left, regardless of whether you completed your degree. No refunds, no cancellations, no special treatment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                But here&apos;s the crucial detail: your repayment terms are identical to graduates. You still pay 9% of income above £25,000, still get write-off at 40 years, still have the same protections. The system doesn&apos;t punish dropouts with harsher repayment terms—it just leaves you with debt and potentially without the qualification that makes higher earnings achievable.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide explains exactly what debt you&apos;ll carry if you drop out at different points, how repayment works without a degree, the true cost in lost lifetime earnings, and critically, what alternatives exist that might preserve your investment in education while addressing whatever crisis prompted you to consider leaving.
                            </p>
                        </section>

                        {/* Dropout Reality */}
                        <section id="dropout-reality" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The Reality of Dropping Out
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Dropping out doesn&apos;t erase the financial commitment you&apos;ve already made. The moment Student Finance England disbursed funds to your university and your bank account, you became obligated to repay them under the standard income-contingent terms.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Happens Immediately When You Drop Out:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Funding stops:</strong> No further tuition or maintenance loan payments for current or future years</li>
                                    <li><strong>Debt remains:</strong> All loans already disbursed remain your obligation in full</li>
                                    <li><strong>Interest continues:</strong> Your balance keeps accruing interest at RPI + 0-3% (currently ~4-7%)</li>
                                    <li><strong>Repayment begins:</strong> Once you earn over £25k, PAYE deductions start (or Self Assessment if self-employed)</li>
                                    <li><strong>No degree:</strong> You leave without the qualification that typically justifies the debt</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common Reasons Students Drop Out:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Financial pressure (25-30%):</strong> Can&apos;t afford living costs despite maintenance loan, need to work full-time, family financial crisis</p>
                                    <p><strong>Academic difficulty (20-25%):</strong> Course too hard, failing modules, can&apos;t keep up with workload</p>
                                    <p><strong>Mental health (15-20%):</strong> Depression, anxiety, burnout, stress overwhelming ability to function</p>
                                    <p><strong>Wrong course choice (15-20%):</strong> Realized degree doesn&apos;t match interests or career goals</p>
                                    <p><strong>Personal/family crisis (10-15%):</strong> Illness, bereavement, caring responsibilities, relationship breakdown</p>
                                    <p><strong>Other (10%):</strong> Pregnancy, offered job opportunity, moving abroad, simply not enjoying university life</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Point About Timing:</h3>
                                <p className="text-gray-700 text-sm">
                                    If you&apos;re going to drop out, timing affects your debt significantly. Leaving in October (before census date) for a year you haven&apos;t yet paid for means that year doesn&apos;t count against your funding entitlement and you might not receive that year&apos;s loans. Leaving in March means you&apos;ve borrowed the full year&apos;s tuition and most maintenance but gained little academic credit. The &quot;best&quot; time to drop out (if you must) is immediately upon realizing university isn&apos;t working—every extra month adds debt without benefit.
                                </p>
                            </div>
                        </section>

                        {/* Partial Degree Debt */}
                        <section id="partial-degree-debt" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Partial Degree Debt: What You Owe
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your debt depends entirely on when you dropped out and what loans you received. Unlike commercial debt, there&apos;s no &quot;early settlement discount&quot; or pro-rata refund for incomplete years.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Typical Debt by Dropout Timing:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Drop out during/after Year 1:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Tuition loan: £9,250</li>
                                            <li>• Maintenance loan: £9,500-£13,022 (depending on circumstances)</li>
                                            <li>• <strong>Total borrowed: £18,750-£22,272</strong></li>
                                            <li>• With one year&apos;s interest: <strong>~£19,500-£23,000</strong></li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Drop out during/after Year 2:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Tuition loan: £18,500 (2 years)</li>
                                            <li>• Maintenance loan: £19,000-£26,044 (2 years)</li>
                                            <li>• <strong>Total borrowed: £37,500-£44,544</strong></li>
                                            <li>• With two years&apos; interest: <strong>~£40,000-£48,000</strong></li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Drop out during/after Year 3 (nearly finished!):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Tuition loan: £27,750 (3 years)</li>
                                            <li>• Maintenance loan: £28,500-£39,066 (3 years)</li>
                                            <li>• <strong>Total borrowed: £56,250-£66,816</strong></li>
                                            <li>• With three years&apos; interest: <strong>~£62,000-£73,000</strong></li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Note:</strong> These figures assume maximum maintenance loan. Your actual debt depends on your household income (which determines maintenance loan amount) and whether you studied in London. London students typically have £3,000-£4,000 more maintenance loan per year.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Year 3 Tragedy:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Dropping out in Year 3 is particularly painful. You&apos;ve invested three years of time and accumulated £60k-£73k in debt—almost identical to completing the degree. But without the final year and the degree certificate, you have no qualification to show employers. Many Year 3 dropouts later regret not pushing through the final 8 months.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <strong>If you&apos;re in Year 3 and considering dropping out:</strong> Speak with university student support urgently. Options like intermission, reduced course load, deadline extensions, or exceptional circumstances provisions might let you complete without formally dropping out.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Interest Continues Accumulating:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Even after you drop out, interest accrues on your balance at RPI + 0-3% depending on your income:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Earning under £25k: RPI only (currently ~3-4%)</li>
                                    <li>Earning £25k-£50k: RPI + sliding scale to 3% (total ~4-7%)</li>
                                    <li>Earning £50k+: RPI + 3% (total ~6-7%)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    Drop out with £40k debt, earn £22k for 5 years (below threshold = no repayments), your balance grows to ~£48k-£52k purely from interest. This is normal and expected—you&apos;re not making repayments because you&apos;re not earning enough.
                                </p>
                            </div>
                        </section>

                        {/* No Refund Policy */}
                        <section id="no-refund-policy" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                No Refunds: Understanding the Rules
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Many students assume that because they didn&apos;t complete the degree, they shouldn&apos;t owe the full amount borrowed. This is a misunderstanding of how student loans work.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why There Are No Refunds:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Tuition was already paid to university:</strong> Student Finance England paid your university the £9,250 per year on your behalf. The university provided teaching, facilities, and services for the time you attended. You consumed that education—it can&apos;t be &quot;returned.&quot;
                                    </li>
                                    <li>
                                        <strong>Maintenance loan was spent:</strong> The maintenance loan went to your bank account for living costs. You used it for rent, food, books, transport. That money is gone—you can&apos;t return consumed services.
                                    </li>
                                    <li>
                                        <strong>Student loans aren&apos;t performance-based:</strong> The loan isn&apos;t contingent on graduation. It&apos;s funding for attempting higher education, not a success bonus.
                                    </li>
                                    <li>
                                        <strong>No commercial cancellation right:</strong> Unlike consumer purchases with cooling-off periods, student loans are government financing with no cancellation clause once disbursed.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What About Partial Year Refunds?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Question:</strong> &quot;I dropped out in December of Year 2. Do I owe the full year&apos;s tuition?&quot;
                                </p>
                                <p className="text-gray-700 text-sm mb-3">
                                    <strong>Answer:</strong> Yes, in almost all cases. Student Finance England pays universities in installments, but once you&apos;re enrolled past the census date (usually late September/early October), you&apos;re liable for that year&apos;s tuition. Universities don&apos;t prorate tuition for partial year attendance.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <strong>Exception:</strong> If you formally withdraw before the census date at the start of a year, that year&apos;s tuition loan may not be disbursed or may be cancelled. But if you&apos;re already enrolled and receiving teaching, you owe that year&apos;s costs.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Can I Challenge the Debt?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Realistically, no. You could only challenge if:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Student Finance England made an administrative error and overpaid you</li>
                                    <li>The university never enrolled you but loans were paid</li>
                                    <li>Fraud occurred (identity theft, unauthorized application)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    Normal circumstances of &quot;I decided university wasn&apos;t for me&quot; or &quot;I found it too hard&quot; or &quot;I ran out of money&quot; don&apos;t provide grounds for debt cancellation. The debt is valid and enforceable.
                                </p>
                            </div>
                        </section>

                        {/* Repayment Without Degree */}
                        <section id="repayment-without-degree" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Repayment Without a Degree
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your repayment obligations are identical to graduates. You pay 9% of income above £25,000, it comes out via PAYE if employed or Self Assessment if self-employed, and you get write-off after 40 years. Student Finance England doesn&apos;t track whether you graduated—only your income.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How Repayment Works for Dropouts:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Same threshold (£25,000):</strong> You don&apos;t pay anything until earning over £25k, just like graduates.
                                    </li>
                                    <li>
                                        <strong>Same rate (9%):</strong> When you do earn over £25k, it&apos;s 9% of the excess, not a penny more.
                                    </li>
                                    <li>
                                        <strong>Same write-off (40 years):</strong> Your loan writes off 40 years after the April you were first due to repay, exactly like graduates.
                                    </li>
                                    <li>
                                        <strong>Same protections:</strong> Unemployment, maternity leave, low income all reduce/suspend repayments automatically.
                                    </li>
                                    <li>
                                        <strong>Same death cancellation:</strong> If you die, the loan is cancelled with no estate liability, exactly like graduates.
                                    </li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>The system is income-contingent, not credential-contingent.</strong> Your degree status is irrelevant to repayment mechanics.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Repayment Scenarios for Dropouts:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 1: Year 1 Dropout, Low Earnings Career</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Debt: £20,000</li>
                                            <li>• Career: Retail, hospitality, admin (£22k-£32k range)</li>
                                            <li>• Annual repayment: £0-£630</li>
                                            <li>• Balance grows to ~£28k-£32k over 40 years (interest outpaces repayments)</li>
                                            <li>• <strong>Total paid: £12,000-£20,000</strong></li>
                                            <li>• Write-off: £12,000-£20,000</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Analysis:</strong> Never repays the principal. Pays less than original amount borrowed, then write-off. The low debt (from dropping out early) combined with low earnings means minimal total repayment. But lifetime earnings are ~£400k less than graduate equivalent.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 2: Year 2 Dropout, Moderate Earnings</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Debt: £40,000</li>
                                            <li>• Career: Skilled trades, sales, junior management (£28k-£42k)</li>
                                            <li>• Annual repayment: £270-£1,530</li>
                                            <li>• Balance grows to ~£55k-£65k (interest slightly outpaces repayments)</li>
                                            <li>• <strong>Total paid: £25,000-£40,000</strong></li>
                                            <li>• Write-off: £25,000-£40,000</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Analysis:</strong> Pays similar amount to what was borrowed, then write-off cancels the inflated balance. Two years at university generated £40k debt but no qualification. Earnings are moderate because without degree, senior positions are limited.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 3: Year 3 Dropout, Higher Earner (Self-Taught Tech)</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Debt: £60,000</li>
                                            <li>• Career: Self-taught developer, progress to senior roles (£35k-£65k)</li>
                                            <li>• Annual repayment: £900-£3,600</li>
                                            <li>• Balance initially grows to ~£68k, then slowly reduces</li>
                                            <li>• <strong>Might repay fully by year 30-35, or write-off with £10k-£15k remaining</strong></li>
                                            <li>• <strong>Total paid: £60,000-£75,000</strong></li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Analysis:</strong> Through skills and experience, achieved good salary despite no degree. Will pay similar total to graduates because earnings are similar. The lack of degree didn&apos;t hurt career in tech industry. But invested 3 years and £60k for no credential—would likely have similar earnings if had completed degree.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Paradox of Early Dropout Debt:</h3>
                                <p className="text-gray-700 text-sm">
                                    Counterintuitively, dropping out in Year 1 often means you pay less total student loan than someone who graduates. Year 1 dropout with £20k debt earning £30k career pays ~£18k total over 40 years. Graduate with £55k debt earning £35k career pays ~£36k total. The dropout pays £18k less! But the graduate earns an extra £200k-£400k over their lifetime. So while the loan cost is lower, the opportunity cost is massive. This is why dropout &quot;savings&quot; on loan repayment is a false economy.
                                </p>
                            </div>
                        </section>

                        {/* Career Impact */}
                        <section id="career-impact" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Career and Earning Impact Without Qualification
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The real cost of dropping out isn&apos;t the student loan debt—it&apos;s the lost lifetime earnings from not having a degree. UK graduates earn approximately £100,000-£500,000 more over their careers than non-graduates, depending on subject and career path.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Earnings Gap:</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Age Range</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Non-Graduate</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Graduate</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Annual Gap</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">22-25</td>
                                                <td className="px-3 py-2 border-b text-xs">£20k-£25k</td>
                                                <td className="px-3 py-2 border-b text-xs">£24k-£30k</td>
                                                <td className="px-3 py-2 border-b text-xs">~£4k-£5k</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">26-35</td>
                                                <td className="px-3 py-2 border-b text-xs">£24k-£32k</td>
                                                <td className="px-3 py-2 border-b text-xs">£30k-£45k</td>
                                                <td className="px-3 py-2 border-b text-xs">~£8k-£13k</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">36-50</td>
                                                <td className="px-3 py-2 border-b text-xs">£28k-£38k</td>
                                                <td className="px-3 py-2 border-b text-xs">£38k-£55k</td>
                                                <td className="px-3 py-2 border-b text-xs">~£12k-£17k</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">51-65</td>
                                                <td className="px-3 py-2 border-b text-xs">£30k-£40k</td>
                                                <td className="px-3 py-2 border-b text-xs">£40k-£60k</td>
                                                <td className="px-3 py-2 border-b text-xs">~£12k-£20k</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">Lifetime Total</td>
                                                <td className="px-3 py-2 border-b text-xs">~£1.1M-£1.4M</td>
                                                <td className="px-3 py-2 border-b text-xs">~£1.5M-£2.2M</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">~£400k-£800k</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Key insight:</strong> Even after accounting for student loan repayments of £30k-£80k, graduates come out £350k-£750k ahead over their lifetime. The degree is financially justified for most people purely on earnings differential.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Career Limitations Without a Degree:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Graduate schemes closed:</strong> Most graduate training programs require a degree. These offer structured progression and higher starting salaries.
                                    </li>
                                    <li>
                                        <strong>Professional careers inaccessible:</strong> Teaching, law, medicine, engineering (chartered status), accountancy (many firms), architecture all require degrees.
                                    </li>
                                    <li>
                                        <strong>Promotion ceilings:</strong> Many companies have glass ceilings for non-graduates. Senior management often requires degree qualification.
                                    </li>
                                    <li>
                                        <strong>Application filtering:</strong> Automated recruitment systems filter out non-graduates. Your CV doesn&apos;t reach human reviewers.
                                    </li>
                                    <li>
                                        <strong>International mobility limited:</strong> Work visas for many countries require degree qualifications. Emigration options narrow.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Exceptions: Careers Where Degrees Matter Less:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Tech/Software:</strong> Self-taught developers can earn £40k-£80k+ with portfolio and experience</li>
                                    <li><strong>Sales:</strong> Commission-based roles reward performance over credentials (£30k-£100k+)</li>
                                    <li><strong>Skilled trades:</strong> Electricians, plumbers, builders (£30k-£50k+, no degree needed)</li>
                                    <li><strong>Entrepreneurship:</strong> Starting your own business doesn&apos;t require a degree</li>
                                    <li><strong>Creative industries:</strong> Portfolio often matters more than degree in design, writing, music</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    These paths can lead to high earnings without a degree, but they require exceptional drive, talent, or business acumen. Most people follow more conventional career paths where degrees significantly help.
                                </p>
                            </div>
                        </section>

                        {/* Re-enrolling Options */}
                        <section id="re-enrolling-options" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Re-Enrolling and Further Loan Eligibility
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Dropping out doesn&apos;t permanently bar you from higher education. You can return to complete your original degree, start a new degree, or pursue different qualifications. But your previous funded years count against your remaining entitlement.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Funding Rules for Dropouts Returning:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Remember: Student Finance England gives you length of course + 1 year funding. Years you already used (including dropout years) count against this.
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Example 1: Returning to Same Course</p>
                                        <p className="text-gray-700 text-xs">
                                            Dropped out after completing Year 2 of 3-year Biology. Original entitlement: 4 years (3+1). Used: 2 years. Remaining: 2 years. Want to return to complete Biology (need 1 more year). ✓ Have enough funding.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Example 2: Starting New Degree After Dropout</p>
                                        <p className="text-gray-700 text-xs">
                                            Dropped out after Year 1 of History. Want to start fresh with Computer Science (3-year course). Original entitlement: 4 years. Used: 1 year. Remaining: 3 years. Need: 3 years. ✓ Have exact funding needed.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Example 3: Insufficient Funding</p>
                                        <p className="text-gray-700 text-xs">
                                            Dropped out after 2 years of Engineering. Want to start Medicine (6 years). Original entitlement: 5 years (4+1). Used: 2 years. Remaining: 3 years. Need: 6 years. ✗ Short by 3 years. Must self-fund final 3 years (~£55k tuition + living costs).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Debt Accumulation When Returning:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Critical point:</strong> Your dropout debt doesn&apos;t disappear when you re-enroll. It adds to your new degree debt.
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Real Example:</p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Year 1 Business (dropped out): £19,000 debt</li>
                                        <li>• 2-year gap (working, interest accrued): Balance grows to £21,500</li>
                                        <li>• Years 1-3 Computer Science: £56,250 new debt</li>
                                        <li>• <strong>Total at graduation: £77,750</strong></li>
                                        <li>• This is £22,750 more than if you&apos;d started CS directly</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    For most careers, this extra £22k makes little practical difference to total repayment because you&apos;ll likely reach write-off anyway. But if you&apos;re a high earner who&apos;ll repay fully, the dropout year costs you real money.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Best Time to Return:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Immediately next academic year:</strong> Minimal gap, skills fresh, easier to adapt back to study</li>
                                    <li><strong>After gaining work experience (1-3 years):</strong> Brings maturity, financial cushion, clearer career goals</li>
                                    <li><strong>Avoid very long gaps (5+ years):</strong> Study skills decay, life circumstances (family, mortgage) make return difficult</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Statistics:</strong> About 25-30% of students who drop out eventually return to complete a degree. Those who return within 3 years have ~70% completion rate. Those who return after 5+ years have ~40% completion rate.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Process for Re-Enrolling:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li><strong>Check remaining entitlement:</strong> Log into Student Finance England to see years remaining</li>
                                    <li><strong>Apply to universities:</strong> Through UCAS, declaring all previous study</li>
                                    <li><strong>Apply for funding:</strong> Student Finance application, clearly stating previous study</li>
                                    <li><strong>Provide evidence:</strong> Academic transcripts from previous institution</li>
                                    <li><strong>Consider credit transfer:</strong> Some universities accept credits from incomplete degrees</li>
                                </ol>
                            </div>
                        </section>

                        {/* Alternatives to Dropping Out */}
                        <section id="alternatives-to-dropping-out" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Alternatives to Dropping Out
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Before making the irreversible decision to drop out, explore alternatives that might address your concerns while preserving your educational investment. Most universities have extensive support systems designed to help students through difficult periods.
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">1. Intermission/Suspension of Studies</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Take authorized time off (usually 1-2 years) while keeping your place and pausing your funding clock.
                                    </p>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">How it works:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Apply through your university (usually requires brief explanation)</li>
                                            <li>• Notify Student Finance England of intermission</li>
                                            <li>• Funding stops for intermission period (no debt accumulated)</li>
                                            <li>• Return within agreed timeframe (1-2 years typical)</li>
                                            <li>• Resume studies where you left off</li>
                                            <li>• Unused funding years remain available</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Good for:</p>
                                        <ul className="text-gray-700 text-xs">
                                            <li>• Mental health issues requiring extended treatment</li>
                                            <li>• Family crisis or caring responsibilities</li>
                                            <li>• Serious illness requiring recovery time</li>
                                            <li>• Financial crisis (work for a year to save, then return)</li>
                                            <li>• Burnout (need break to regain motivation)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">2. Switching Courses (Internal or External)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Transfer to a different degree program that better matches your interests/abilities.
                                    </p>
                                    <div className="bg-green-50 p-3 rounded mb-2">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Advantages over dropping out:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Keep your student status and funding</li>
                                            <li>• May transfer some credits (especially Year 1 core modules)</li>
                                            <li>• Graduate with a degree instead of nothing</li>
                                            <li>• Stay on track for career progression</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        See our <Link href="/lifecycle/changing-course-loan-adjustments" className="text-blue-600 underline hover:text-blue-800">comprehensive guide on changing courses</Link> for full details on the transfer process and funding implications.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">3. Part-Time Study</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Switch from full-time to part-time enrollment, allowing you to work alongside study.
                                    </p>
                                    <div className="bg-purple-50 p-3 rounded mb-2">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">How it helps:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Earn income while studying (addresses financial pressure)</li>
                                            <li>• Reduced study load (addresses overwhelm/difficulty)</li>
                                            <li>• Still get degree, just takes longer (4-6 years)</li>
                                            <li>• Part-time tuition loans available (pro-rated)</li>
                                            <li>• More manageable if juggling caring responsibilities</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-xs mt-2">
                                        <strong>Note:</strong> Part-time students get tuition loans but reduced/no maintenance loans. You&apos;ll need to cover living costs through work.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">4. University Support Services (Use Them!)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Most students considering dropout haven&apos;t fully utilized available support systems.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="bg-orange-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Academic Support:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Personal tutors/academic advisors</li>
                                                <li>• Study skills workshops</li>
                                                <li>• Disability support (dyslexia, ADHD, etc.)</li>
                                                <li>• Extension requests and mitigating circumstances</li>
                                                <li>• Subject-specific tutoring</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Wellbeing Support:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Mental health counseling</li>
                                                <li>• Financial hardship funds</li>
                                                <li>• Housing support</li>
                                                <li>• Chaplaincy/faith support</li>
                                                <li>• Student unions advocacy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-3">
                                        <strong>Many students drop out thinking they have no options, when in fact they never engaged with support services.</strong> Book appointments with your personal tutor and student support advisors before making any final decisions.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">5. Reduced Course Load / Module Deferrals</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Some universities allow you to defer specific modules to next year while continuing with others.
                                    </p>
                                    <div className="bg-yellow-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs">
                                            If you&apos;re overwhelmed but not failing everything, you might defer 1-2 modules and carry lighter load this year, completing deferred modules next year. This extends your degree by a semester or year but keeps you enrolled and progressing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Before You Drop Out, Ask Yourself:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>Have I spoken to my personal tutor about alternatives?</li>
                                    <li>Have I accessed university mental health/counseling services?</li>
                                    <li>Have I explored intermission as an option?</li>
                                    <li>Could switching courses solve my problem?</li>
                                    <li>Have I applied for hardship funds if financial?</li>
                                    <li>Am I making this decision during a crisis, or after calm reflection?</li>
                                    <li>Have I discussed with family/friends whose judgment I trust?</li>
                                    <li>What will I do if I drop out? Do I have a clear plan?</li>
                                </ol>
                                <p className="text-gray-700 text-sm mt-3 font-semibold">
                                    If you haven&apos;t said yes to at least questions 1-5, you&apos;re dropping out without exploring all options. Give yourself that much.
                                </p>
                            </div>
                        </section>

                        {/* Real Scenarios */}
                        <section id="real-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Dropout Scenarios and Outcomes
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here are realistic scenarios showing different dropout situations and their long-term consequences:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Year 1 Dropout - Wrong Choice</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Tom started Law because parents wanted it. Hated it, struggled, dropped out November of Year 1.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Debt: £19,000 (full year despite dropping out November)</li>
                                            <li>• Took gap year, then started Computer Science elsewhere</li>
                                            <li>• CS degree: £56,250 additional debt</li>
                                            <li>• Total at graduation: £78,000</li>
                                            <li>• Career: Developer starting £35k, progressing to £65k</li>
                                            <li>• Will fully repay in 20-25 years</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Analysis:</strong> The Year 1 Law debt becomes a £19k &quot;mistake tax&quot; that adds to his total repayment. But at £65k career earnings, he&apos;ll repay fully anyway. The extra £19k costs him ~£25k total with interest. Expensive lesson, but finding right career path justified it.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: Year 2 Dropout - Mental Health Crisis</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Emma had breakdown in Year 2, dropped out, never returned to university.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Debt: £40,000 (2 years Biology)</li>
                                            <li>• Worked retail/admin jobs: £22k-£29k career</li>
                                            <li>• Annual repayment: £0-£360</li>
                                            <li>• Balance grows to ~£55k over 40 years</li>
                                            <li>• Total paid: ~£10,000</li>
                                            <li>• Write-off: £45,000</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Analysis:</strong> £40k debt, only pays back £10k, then write-off. Low earnings mean minimal repayment. But lifetime earnings ~£1.1M vs ~£1.6M if had completed degree. The £40k loan cost is trivial compared to £500k lifetime earnings loss. Tragic because with intermission and mental health support, might have completed degree.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Year 3 Dropout - Family Emergency</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> James&apos;s father had serious accident in March of Year 3. James dropped out to help with family business. Returned 3 years later to complete final year.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Years 1-3 Engineering: £57,750 debt</li>
                                            <li>• 3 year gap (interest accrued): Balance grew to £67,000</li>
                                            <li>• Year 3 completion: £19,250 additional debt</li>
                                            <li>• Total at graduation: £86,250</li>
                                            <li>• Career: Engineer £32k-£55k</li>
                                            <li>• Borderline full repayment vs write-off</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Analysis:</strong> The gap year cost him ~£10k in interest accumulation, but he got his degree. If he&apos;d taken intermission instead of dropping out, the year wouldn&apos;t have accrued interest. But family emergency was legitimate reason. Extra £10k in interest is worth having completed the degree.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: Year 1 Dropout - Went to High-Earning Career</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Sarah dropped out after Year 1 History, started working in sales, discovered she&apos;s exceptional at it.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Debt: £19,000 (Year 1)</li>
                                            <li>• Career: Sales rep → Sales director (£25k → £75k over 15 years)</li>
                                            <li>• Annual repayment: £0 → £4,500 as she progressed</li>
                                            <li>• Balance initially grew, then paid off in year 18</li>
                                            <li>• Total paid: ~£32,000 (with interest)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Analysis:</strong> Rare success story of dropout who achieved high earnings anyway. Sales is one career where degree often doesn&apos;t matter—performance does. She fully repaid despite early dropout. But she&apos;s an exception—most dropouts don&apos;t reach £75k careers without degrees.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 5: Multiple Dropouts - Worst Case</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Michael started Business, dropped out Year 1. Tried Engineering, dropped out Year 1. Finally completed Hospitality Management.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1 Business: £19,000</li>
                                            <li>• Year 1 Engineering: £19,250</li>
                                            <li>• Years 1-3 Hospitality: £56,250</li>
                                            <li>• Total debt: £94,500</li>
                                            <li>• Career: Hotel management £26k-£38k</li>
                                            <li>• Annual repayment: £90-£1,170</li>
                                            <li>• Definite write-off, pays ~£30k total</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Analysis:</strong> £94k debt from 5 years of university to get 3-year degree. But hospitality management salary means he&apos;ll pay similar total as if he had £55k debt. Both reach write-off. The two failed starts added £38k debt that will never be repaid. Financially, the extra debt didn&apos;t hurt him because of write-off. But 5 years for 3-year degree meant 2 years of lost earnings (~£50k opportunity cost).
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Decision Framework */}
                        <section id="decision-framework" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Decision Framework: Should You Drop Out?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Dropping out is a major decision with lifelong consequences. Use this framework to think through your situation clearly:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Step 1: Identify the Real Problem</h3>
                                <p className="text-gray-700 text-sm mb-2">What&apos;s making you want to drop out? Be specific:</p>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Financial:</strong> Can&apos;t afford rent/food? → Hardship funds, part-time work, cheaper accommodation</p>
                                    <p><strong>Academic:</strong> Failing? → Academic support, extension requests, reduced load, course change</p>
                                    <p><strong>Mental health:</strong> Depressed/anxious/burned out? → Counseling, intermission, reduced workload</p>
                                    <p><strong>Wrong course:</strong> Hate your subject? → Internal transfer, external transfer</p>
                                    <p><strong>Life circumstances:</strong> Family crisis? → Intermission with return date</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Step 2: Explore All Alternatives</h3>
                                <p className="text-gray-700 text-sm mb-2"><strong>Have you tried:</strong></p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Speaking with personal tutor about your situation?</li>
                                    <li>University counseling or mental health services?</li>
                                    <li>Applying for financial hardship funds?</li>
                                    <li>Requesting intermission to take time out?</li>
                                    <li>Exploring course transfers?</li>
                                    <li>Switching to part-time study?</li>
                                    <li>Getting medical evidence for mitigating circumstances?</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>If you haven&apos;t tried these, you&apos;re not ready to drop out.</strong> These options exist specifically to prevent dropout.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Step 3: Calculate the True Cost</h3>
                                <p className="text-gray-700 text-sm mb-2">Consider all costs, not just the debt:</p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Dropping Out Costs:</p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Debt you owe: £20k-£60k depending on timing</li>
                                        <li>• Lost lifetime earnings: £200k-£500k (graduate premium)</li>
                                        <li>• Closed career paths: Many professional careers require degrees</li>
                                        <li>• Promotion ceiling: Non-graduates hit glass ceilings</li>
                                        <li>• Time wasted: 1-3 years invested with no credential</li>
                                        <li>• <strong>Total cost: Often £300k-£600k in reduced lifetime earnings</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Step 4: Make a Time-Bound Decision</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Don&apos;t decide impulsively, but don&apos;t defer indefinitely:
                                </p>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>Give yourself 2-4 weeks to explore all alternatives</li>
                                    <li>Schedule meetings with student support, personal tutor, counseling</li>
                                    <li>Apply for available support (hardship funds, intermission, extensions)</li>
                                    <li>Talk to family and friends whose judgment you trust</li>
                                    <li>Set a decision date, then commit to following through</li>
                                </ol>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Dropping Out Might Be Right:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Dropping out can be the right decision if:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>You have a concrete, attractive alternative (job offer, apprenticeship, business opportunity)</li>
                                    <li>You&apos;ve exhausted all university support options and they haven&apos;t helped</li>
                                    <li>Medical professionals advise you cannot continue for health reasons</li>
                                    <li>You&apos;re certain after calm reflection (not mid-crisis) that university isn&apos;t right</li>
                                    <li>You have a clear plan for what happens next (not just &quot;I&apos;ll figure it out&quot;)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>But be honest:</strong> Are you dropping out TO something better, or AWAY from difficulty? Running away rarely solves underlying problems.
                                </p>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Dropping out doesn&apos;t erase student debt—only earnings
                            </h3>
                            <p className="text-gray-700 mb-4">
                                You keep all debt borrowed. Repayment terms are identical to graduates—9% above £25k for 40 years, then write-off. The real cost isn&apos;t the debt you carry, but the £200k-£500k in lifetime earnings you lose without a degree. Before you drop out, exhaust every alternative: intermission, course changes, support services, reduced load. University has tools to help you succeed—use them.
                            </p>
                            <p className="text-gray-700 font-semibold">
                                If you&apos;re struggling right now, contact your university&apos;s student support services immediately. They exist to prevent dropout.
                            </p>
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

export default DroppingOutLoanConsequences;