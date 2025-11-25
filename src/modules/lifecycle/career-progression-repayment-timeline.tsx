import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const CareerProgressionRepaymentTimeline: React.FC = () => {
    const tocItems = [
        { id: "salary-growth-mechanics", title: "How Salary Growth Affects Repayment", level: 2 },
        { id: "career-trajectory-models", title: "Career Trajectory Models: Three Paths", level: 2 },
        { id: "tipping-point-analysis", title: "The Tipping Point: Who Repays Fully vs Write-Off", level: 2 },
        { id: "industry-specific-progressions", title: "Industry-Specific Career Progressions", level: 2 },
        { id: "full-repayment-timelines", title: "Full Repayment Timeline by Career Path", level: 2 },
        { id: "career-breaks-impact", title: "Career Breaks and Repayment Impact", level: 2 },
        { id: "salary-negotiation-strategy", title: "Salary Negotiation and Loan Strategy", level: 2 },
        { id: "strategic-career-planning", title: "Strategic Career Planning Framework", level: 2 },
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
                                    Career Progression Repayment
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Career Progression and Student Loan Repayment Timeline
                    </h1>
                    <p className="text-xl text-gray-600">
                        How salary growth affects total repayment, full repayment timelines by career, and write-off vs clearance scenarios
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
                                Your career trajectory determines whether you repay your student loan in full or reach the 40-year write-off with significant balance remaining. Start at £28,000 and plateau at £35,000? Write-off is almost certain. Start at £35,000 and progress to £60,000+? Full repayment becomes likely within 15-25 years, potentially costing you £80,000-£120,000 total.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Under Plan 5, you pay 9% of income above £25,000 while interest accrues at RPI + 0-3% depending on income. This creates a mathematical race: can your repayments outpace interest accumulation? For moderate earners, the answer is often no—your balance grows despite paying for decades. For high earners, repayments eventually overwhelm interest and you clear the debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Understanding how different career paths affect your total student loan cost helps you make informed decisions about job changes, salary negotiations, career breaks, and long-term financial planning. This guide models realistic career progressions across industries and shows exactly when and how much you&apos;ll repay—or why you won&apos;t repay at all.
                            </p>
                        </section>

                        {/* Salary Growth Mechanics */}
                        <section id="salary-growth-mechanics" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How Salary Growth Affects Repayment
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student loan repayments under Plan 5 are calculated as 9% of income above the £25,000 threshold. This means every £1,000 salary increase adds £90 to your annual repayment (£7.50 per month). As your salary grows through career progression, your repayments accelerate exponentially.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Repayment Calculation Breakdown:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>At £28,000 salary:</strong></p>
                                    <p className="ml-4">• Income above threshold: £28,000 - £25,000 = £3,000</p>
                                    <p className="ml-4">• Annual repayment: £3,000 × 9% = £270</p>
                                    <p className="ml-4">• Monthly deduction: £22.50</p>

                                    <p className="mt-3"><strong>At £35,000 salary:</strong></p>
                                    <p className="ml-4">• Income above threshold: £35,000 - £25,000 = £10,000</p>
                                    <p className="ml-4">• Annual repayment: £10,000 × 9% = £900</p>
                                    <p className="ml-4">• Monthly deduction: £75</p>

                                    <p className="mt-3"><strong>At £50,000 salary:</strong></p>
                                    <p className="ml-4">• Income above threshold: £50,000 - £25,000 = £25,000</p>
                                    <p className="ml-4">• Annual repayment: £25,000 × 9% = £2,250</p>
                                    <p className="ml-4">• Monthly deduction: £187.50</p>

                                    <p className="mt-3"><strong>At £70,000 salary:</strong></p>
                                    <p className="ml-4">• Income above threshold: £70,000 - £25,000 = £45,000</p>
                                    <p className="ml-4">• Annual repayment: £45,000 × 9% = £4,050</p>
                                    <p className="ml-4">• Monthly deduction: £337.50</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Acceleration Effect:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Notice how repayments don&apos;t just increase—they accelerate. Going from £28k to £35k (a £7k raise) adds £630/year in repayments. Going from £50k to £70k (a £20k raise) adds £1,800/year in repayments. The higher your salary, the faster you attack the principal.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Salary</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Annual Repayment</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Monthly Deduction</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">% of Gross Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b">£25,000</td>
                                                <td className="px-3 py-2 border-b">£0</td>
                                                <td className="px-3 py-2 border-b">£0</td>
                                                <td className="px-3 py-2 border-b">0%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b">£30,000</td>
                                                <td className="px-3 py-2 border-b">£450</td>
                                                <td className="px-3 py-2 border-b">£37.50</td>
                                                <td className="px-3 py-2 border-b">1.5%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b">£35,000</td>
                                                <td className="px-3 py-2 border-b">£900</td>
                                                <td className="px-3 py-2 border-b">£75</td>
                                                <td className="px-3 py-2 border-b">2.6%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b">£40,000</td>
                                                <td className="px-3 py-2 border-b">£1,350</td>
                                                <td className="px-3 py-2 border-b">£112.50</td>
                                                <td className="px-3 py-2 border-b">3.4%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b">£50,000</td>
                                                <td className="px-3 py-2 border-b">£2,250</td>
                                                <td className="px-3 py-2 border-b">£187.50</td>
                                                <td className="px-3 py-2 border-b">4.5%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b">£60,000</td>
                                                <td className="px-3 py-2 border-b">£3,150</td>
                                                <td className="px-3 py-2 border-b">£262.50</td>
                                                <td className="px-3 py-2 border-b">5.3%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b">£70,000</td>
                                                <td className="px-3 py-2 border-b">£4,050</td>
                                                <td className="px-3 py-2 border-b">£337.50</td>
                                                <td className="px-3 py-2 border-b">5.8%</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b">£100,000</td>
                                                <td className="px-3 py-2 border-b">£6,750</td>
                                                <td className="px-3 py-2 border-b">£562.50</td>
                                                <td className="px-3 py-2 border-b">6.8%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Interest vs Repayment Race:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Meanwhile, interest accrues on your outstanding balance. Under Plan 5, interest is RPI + 0-3% based on income:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Earning under £25k: RPI only (currently ~3-4%)</li>
                                    <li>Earning £25k-£50k: RPI + 0-3% sliding scale (3-7% total)</li>
                                    <li>Earning £50k+: RPI + 3% (currently ~6-7% total)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Critical insight:</strong> If you&apos;re earning £35k with £50k balance, you&apos;re paying ~£900/year but accruing ~£2,500-£3,000 in interest. Your balance grows despite paying. Only when annual repayments exceed annual interest do you start reducing principal—this typically requires £45k+ salary for most graduates.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Salary Growth Rate Matters:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Two graduates with identical starting salaries can have wildly different outcomes based on career progression speed:
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 mt-2">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Fast Progression (5-7% annual growth):</p>
                                        <p className="text-gray-700 text-xs">Start: £32k → Year 5: £42k → Year 10: £55k → Year 15: £72k</p>
                                        <p className="text-gray-700 text-xs mt-2"><strong>Outcome:</strong> Repays in full by year 18-22. Total paid: £85k-£110k</p>
                                    </div>
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Slow Progression (2-3% annual growth):</p>
                                        <p className="text-gray-700 text-xs">Start: £32k → Year 5: £35k → Year 10: £39k → Year 15: £43k</p>
                                        <p className="text-gray-700 text-xs mt-2"><strong>Outcome:</strong> 40-year write-off. Total paid: £45k-£55k</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Career Trajectory Models */}
                        <section id="career-trajectory-models" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Career Trajectory Models: Three Paths
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Most UK graduates fall into one of three career trajectory categories. Understanding which path you&apos;re on helps predict your loan outcome.
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Path 1: Lower-Middle Earners (£25k-£40k Career)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        <strong>Typical careers:</strong> Teaching, nursing, social work, admin roles, retail management, many arts/humanities graduates, civil service (lower grades)
                                    </p>

                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Career Progression Example:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 22-25: £24k-£28k (entry level, some years below threshold)</li>
                                            <li>• Age 26-35: £28k-£35k (qualified professional, slow progression)</li>
                                            <li>• Age 36-50: £35k-£40k (experienced, near career ceiling)</li>
                                            <li>• Age 51-65: £38k-£42k (minimal growth, may stagnate)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Repayment Profile:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Starting debt: £50,000 (typical undergraduate)</li>
                                            <li>• Annual repayments: £270-£1,350 (average ~£800/year)</li>
                                            <li>• Interest outpaces repayments: Balance grows to £70k-£85k</li>
                                            <li>• Total paid over 40 years: £30,000-£45,000</li>
                                            <li>• Balance at write-off: £50,000-£70,000 cancelled</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-300 p-3 rounded">
                                        <p className="text-gray-700 text-sm">
                                            <strong>Financial Reality:</strong> You&apos;ll never repay the principal. You&apos;re effectively paying a 9% graduate tax for 40 years, then it&apos;s written off. The amount you borrowed is largely irrelevant—£45k or £65k debt makes little difference to total repayment. This isn&apos;t failure; it&apos;s how the system is designed to work for moderate earners.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Path 2: Middle-High Earners (£35k-£55k Career)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        <strong>Typical careers:</strong> Accountants, software engineers, pharmacists, middle management, senior civil servants, many STEM graduates, experienced healthcare professionals
                                    </p>

                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Career Progression Example:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 22-25: £28k-£35k (entry level, decent start)</li>
                                            <li>• Age 26-32: £38k-£48k (qualified, steady progression)</li>
                                            <li>• Age 33-45: £48k-£55k (senior professional, slower growth)</li>
                                            <li>• Age 46-65: £52k-£60k (experienced, near ceiling)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Repayment Profile:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Starting debt: £50,000 (typical undergraduate)</li>
                                            <li>• Annual repayments: £900-£2,700 (average ~£1,800/year)</li>
                                            <li>• Borderline case: Repayments slowly catch interest around year 10-15</li>
                                            <li>• Possible outcomes vary: 35-40 year write-off OR full repayment year 30-38</li>
                                            <li>• Total paid: £55,000-£75,000</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-300 p-3 rounded">
                                        <p className="text-gray-700 text-sm">
                                            <strong>The Uncomfortable Middle:</strong> This is the worst financial position—earning enough that repayments hurt but not enough to clear the debt efficiently. You might pay for 35 years and still not fully repay, or you might repay in year 38 having paid £70k total. Career progression speed in your 30s-40s determines which outcome you get.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Path 3: High Earners (£40k+ Start, £60k-£100k+ Career)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        <strong>Typical careers:</strong> Medicine (post-foundation), law (corporate/magic circle), management consulting, finance/investment banking, tech (senior engineers/management), executive leadership
                                    </p>

                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Career Progression Example:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 22-26: £35k-£48k (strong entry, rapid initial growth)</li>
                                            <li>• Age 27-32: £50k-£70k (promoted to senior/specialist roles)</li>
                                            <li>• Age 33-45: £70k-£100k (management/partner/consultant level)</li>
                                            <li>• Age 46-65: £90k-£150k+ (senior leadership/partner)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Repayment Profile:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Starting debt: £50,000-£70,000 (including London living costs)</li>
                                            <li>• Annual repayments: £1,350-£6,750+ (average ~£3,500/year)</li>
                                            <li>• Repayments exceed interest from year 3-5 onwards</li>
                                            <li>• Full repayment: Year 12-20 depending on starting debt and salary curve</li>
                                            <li>• Total paid: £80,000-£120,000</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-300 p-3 rounded">
                                        <p className="text-gray-700 text-sm">
                                            <strong>The High Earner Paradox:</strong> You&apos;ll pay significantly more than you borrowed (potentially £80k-£120k on £50k debt), but your higher lifetime earnings (£1.5M-£3M more than Path 1) dwarf the loan cost. The loan functions as a reasonable graduate tax for those who benefited most from their education.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Which Path Are You On?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Honest self-assessment of your career path helps set realistic expectations:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Research median salaries for your profession at 5, 10, 20 years experience</li>
                                    <li>Look at salary data for your specific role on Glassdoor, PayScale, or industry surveys</li>
                                    <li>Consider your industry&apos;s typical progression speed and ceiling</li>
                                    <li>Be realistic, not optimistic—most people don&apos;t beat median significantly</li>
                                    <li>Use our <Link href="/" className="text-blue-600 underline hover:text-blue-800">Student Loan Calculator</Link> to model your specific scenario</li>
                                </ul>
                            </div>
                        </section>

                        {/* Tipping Point Analysis */}
                        <section id="tipping-point-analysis" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The Tipping Point: Who Repays Fully vs Write-Off
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                There&apos;s a critical salary threshold that determines whether you&apos;ll likely repay in full or reach write-off. Understanding this tipping point helps you know what to expect.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Mathematical Tipping Point:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    For a typical £50,000 starting debt with 5-6% average interest rate (RPI + 2-3%), you need to average certain annual repayments to outpace interest:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Annual repayment of £2,500+</strong> (salary ~£52,000+) consistently maintained starts reducing principal meaningfully
                                    </li>
                                    <li>
                                        <strong>Annual repayment of £3,500+</strong> (salary ~£63,000+) creates rapid paydown trajectory
                                    </li>
                                    <li>
                                        <strong>Annual repayment of £5,000+</strong> (salary ~£80,000+) clears debt in 12-15 years
                                    </li>
                                    <li>
                                        <strong>Annual repayment under £1,500</strong> (salary under £41,000) means balance likely grows despite payments
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Tipping Point Scenarios:</h3>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario A: Likely Full Repayment</p>
                                        <p className="text-gray-700 text-sm mb-2">
                                            Graduate starting £40k, reaching £65k by age 35, £75k+ by 45:
                                        </p>
                                        <ul className="text-gray-700 text-xs ml-4 space-y-1">
                                            <li>• Years 1-5: £1,350-£2,250/year (initial repayments, balance grows to £58k)</li>
                                            <li>• Years 6-10: £2,700-£3,600/year (repayments exceed interest, balance plateaus at £60k)</li>
                                            <li>• Years 11-18: £3,600-£4,500/year (aggressive paydown, balance falls)</li>
                                            <li>• <strong>Result: Fully repaid by year 18. Total paid: ~£95,000</strong></li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-4 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario B: The Borderline Case</p>
                                        <p className="text-gray-700 text-sm mb-2">
                                            Graduate starting £32k, reaching £48k by age 35, plateauing at £52k:
                                        </p>
                                        <ul className="text-gray-700 text-xs ml-4 space-y-1">
                                            <li>• Years 1-10: £630-£1,800/year (balance grows to £65k)</li>
                                            <li>• Years 11-25: £1,800-£2,430/year (balance slowly stabilizes around £70k)</li>
                                            <li>• Years 26-40: £2,430/year (very slow paydown, might clear in year 38-40)</li>
                                            <li>• <strong>Result: Either write-off at year 40 with £15k remaining, or barely clear it. Total paid: ~£65,000</strong></li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-4 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario C: Definite Write-Off</p>
                                        <p className="text-gray-700 text-sm mb-2">
                                            Graduate starting £27k, reaching £38k by age 35, plateauing at £42k:
                                        </p>
                                        <ul className="text-gray-700 text-xs ml-4 space-y-1">
                                            <li>• Years 1-10: £180-£1,170/year (balance grows to £70k)</li>
                                            <li>• Years 11-30: £1,170-£1,530/year (balance continues growing to £85k)</li>
                                            <li>• Years 31-40: £1,530/year (balance stable or still slowly growing)</li>
                                            <li>• <strong>Result: Write-off at year 40 with £70k-£85k balance. Total paid: ~£40,000</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The £50k Salary Question:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    A common question: &quot;If I earn £50k for most of my career, will I repay?&quot;
                                </p>
                                <p className="text-gray-700 text-sm mb-2">
                                    Answer: Probably not. At £50k, you&apos;re paying £2,250/year. With £50k starting debt:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Your balance will grow for the first 5-8 years as interest outpaces repayments</li>
                                    <li>Balance peaks around £60k-£65k depending on interest rates</li>
                                    <li>You&apos;ll then very slowly chip away at principal</li>
                                    <li>You might clear it in year 35-40, or it writes off with £10k-£20k remaining</li>
                                    <li>Total paid: £60k-£70k</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Key insight:</strong> The outcome depends heavily on when you reach £50k. Reach it by age 28? Likely full repayment by 50. Reach it at age 40? Definite write-off.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Use Our Calculator:</strong> The exact tipping point depends on your starting debt, interest rates during your career, and your specific salary trajectory. Model your scenario at our <Link href="/" className="text-blue-600 underline hover:text-blue-800">Student Loan Calculator</Link> with realistic career progression assumptions to see your likely outcome.
                                </p>
                            </div>
                        </section>

                        {/* Industry-Specific Progressions */}
                        <section id="industry-specific-progressions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Industry-Specific Career Progressions
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Different industries have vastly different career progression patterns. Here&apos;s how typical career paths in major sectors affect student loan repayment:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Teaching</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• NQT (Year 1): £28,000-£30,000</li>
                                                <li>• Years 2-5: £30,000-£38,000 (main pay scale)</li>
                                                <li>• Years 6-10: £38,000-£43,000 (upper pay scale)</li>
                                                <li>• Years 10+: £43,000-£49,000 (leading practitioner, slow growth)</li>
                                                <li>• Leadership: £50,000-£75,000 (limited positions)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Definite 40-year write-off for 95% of teachers
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Total paid: £35,000-£50,000</li>
                                                <li>• Balance at write-off: £40,000-£60,000</li>
                                                <li>• Classroom teachers will never repay fully</li>
                                                <li>• Headteachers earning £75k+ might repay, but rare</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Software Engineering</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Junior (Years 1-2): £25,000-£35,000</li>
                                                <li>• Mid-level (Years 3-5): £40,000-£55,000</li>
                                                <li>• Senior (Years 6-10): £55,000-£75,000</li>
                                                <li>• Lead/Principal (Years 10+): £75,000-£100,000+</li>
                                                <li>• Engineering Manager: £80,000-£120,000+</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Likely full repayment in 15-22 years
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Total paid: £75,000-£110,000</li>
                                                <li>• Fast progressors clear by year 15</li>
                                                <li>• Average progression clears by year 20</li>
                                                <li>• London tech salaries accelerate repayment further</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">NHS Medicine (Post-Foundation)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Foundation Years: £32,000-£37,000</li>
                                                <li>• Core/Specialty Training: £40,000-£52,000</li>
                                                <li>• Registrar: £52,000-£69,000</li>
                                                <li>• Consultant (entry): £88,000-£110,000</li>
                                                <li>• Consultant (experienced): £110,000-£140,000</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Full repayment in 15-25 years
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Starting debt often £70k-£100k (undergrad + postgrad)</li>
                                                <li>• Total paid: £120,000-£180,000</li>
                                                <li>• Consultant-level salaries clear debt rapidly</li>
                                                <li>• Private practice income accelerates further</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Accounting (Qualified)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Trainee: £24,000-£32,000</li>
                                                <li>• Newly Qualified: £35,000-£45,000</li>
                                                <li>• 3-5 years PQE: £45,000-£60,000</li>
                                                <li>• Manager: £60,000-£80,000</li>
                                                <li>• Senior Manager/Partner: £80,000-£150,000+</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Likely full repayment in 18-25 years
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Total paid: £70,000-£100,000</li>
                                                <li>• Big 4 progression often reaches full repayment</li>
                                                <li>• Industry accountants may be borderline</li>
                                                <li>• Partner track clears debt by year 15-20</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Law (Non-Magic Circle)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Trainee: £24,000-£28,000 (regional)</li>
                                                <li>• Newly Qualified: £30,000-£42,000</li>
                                                <li>• 3-5 years PQE: £40,000-£55,000</li>
                                                <li>• Senior Associate: £55,000-£75,000</li>
                                                <li>• Partner: £80,000-£200,000 (highly variable)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Mixed—borderline to full repayment
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Total paid: £60,000-£95,000</li>
                                                <li>• Regional solicitors often borderline</li>
                                                <li>• Partner track likely clears debt</li>
                                                <li>• Many pay for 30+ years before clearing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Civil Service</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• AO/EO: £23,000-£30,000</li>
                                                <li>• HEO/SEO: £32,000-£45,000</li>
                                                <li>• Grade 7: £50,000-£62,000</li>
                                                <li>• Grade 6: £60,000-£75,000</li>
                                                <li>• SCS: £70,000-£100,000+</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Usually 40-year write-off
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Total paid: £40,000-£60,000</li>
                                                <li>• Most civil servants remain below Grade 7</li>
                                                <li>• Slow progression means balance grows</li>
                                                <li>• Only senior civil service likely to repay fully</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Management Consulting (Big 3)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Typical Progression:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Analyst: £45,000-£55,000</li>
                                                <li>• Consultant: £65,000-£80,000</li>
                                                <li>• Manager: £85,000-£110,000</li>
                                                <li>• Principal: £130,000-£180,000</li>
                                                <li>• Partner: £200,000-£500,000+</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Loan Outcome:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                <strong>Result:</strong> Very rapid full repayment in 8-15 years
                                            </p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Total paid: £85,000-£140,000</li>
                                                <li>• High starting salaries attack principal immediately</li>
                                                <li>• Fastest repayment trajectory of common careers</li>
                                                <li>• But many leave consulting before full repayment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Key Insight:</strong> Your industry&apos;s typical salary progression matters far more than your starting salary. A teacher starting at £28k and a consultant starting at £45k both graduate with similar debt, but the consultant will pay £40k more total because their salary grows faster and higher. However, the consultant also earns £1M+ more over their career, so the extra loan cost is proportionally smaller.
                                </p>
                            </div>
                        </section>

                        {/* Full Repayment Timelines */}
                        <section id="full-repayment-timelines" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Full Repayment Timeline by Career Path
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For those on track to repay fully, here&apos;s when it typically happens based on career trajectory:
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Career Path</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Starting Debt</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Repayment Timeline</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Total Paid</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Investment Banking</td>
                                            <td className="px-4 py-2 border-b">£60,000</td>
                                            <td className="px-4 py-2 border-b">8-12 years</td>
                                            <td className="px-4 py-2 border-b">£85,000-£110,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Management Consulting</td>
                                            <td className="px-4 py-2 border-b">£55,000</td>
                                            <td className="px-4 py-2 border-b">10-15 years</td>
                                            <td className="px-4 py-2 border-b">£80,000-£105,000</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Medicine (Consultant)</td>
                                            <td className="px-4 py-2 border-b">£80,000</td>
                                            <td className="px-4 py-2 border-b">15-22 years</td>
                                            <td className="px-4 py-2 border-b">£120,000-£170,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Software Engineering (Senior+)</td>
                                            <td className="px-4 py-2 border-b">£50,000</td>
                                            <td className="px-4 py-2 border-b">15-20 years</td>
                                            <td className="px-4 py-2 border-b">£75,000-£100,000</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Corporate Law</td>
                                            <td className="px-4 py-2 border-b">£55,000</td>
                                            <td className="px-4 py-2 border-b">12-18 years</td>
                                            <td className="px-4 py-2 border-b">£80,000-£115,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Accounting (Partner Track)</td>
                                            <td className="px-4 py-2 border-b">£50,000</td>
                                            <td className="px-4 py-2 border-b">18-25 years</td>
                                            <td className="px-4 py-2 border-b">£70,000-£100,000</td>
                                        </tr>
                                        <tr className="bg-yellow-50">
                                            <td className="px-4 py-2 border-b">Engineering (Senior)</td>
                                            <td className="px-4 py-2 border-b">£50,000</td>
                                            <td className="px-4 py-2 border-b">25-35 years</td>
                                            <td className="px-4 py-2 border-b">£65,000-£85,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Pharmacy (Senior)</td>
                                            <td className="px-4 py-2 border-b">£50,000</td>
                                            <td className="px-4 py-2 border-b">30-40 years</td>
                                            <td className="px-4 py-2 border-b">£60,000-£75,000</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="px-4 py-2 border-b">Teaching (Headteacher only)</td>
                                            <td className="px-4 py-2 border-b">£50,000</td>
                                            <td className="px-4 py-2 border-b">35-40 years (borderline)</td>
                                            <td className="px-4 py-2 border-b">£55,000-£70,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Civil Service (Grade 6+)</td>
                                            <td className="px-4 py-2 border-b">£50,000</td>
                                            <td className="px-4 py-2 border-b">32-40 years (borderline)</td>
                                            <td className="px-4 py-2 border-b">£58,000-£72,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Detailed Timeline Example: Software Engineer</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Graduate with £50,000 debt, starting salary £32,000, reaching £70,000 by age 35:
                                </p>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Years 1-3 (Age 22-24):</strong> Salary £32k-£40k. Annual repayment £630-£1,350. Balance grows from £50k to £56k due to interest.</p>
                                    <p><strong>Years 4-7 (Age 25-28):</strong> Salary £45k-£55k. Annual repayment £1,800-£2,700. Balance plateaus around £58k as repayments begin matching interest.</p>
                                    <p><strong>Years 8-12 (Age 29-33):</strong> Salary £60k-£70k. Annual repayment £3,150-£4,050. Balance drops from £58k to £42k. Principal finally reducing.</p>
                                    <p><strong>Years 13-18 (Age 34-39):</strong> Salary £70k-£75k. Annual repayment £4,050-£4,500. Balance drops from £42k to £0.</p>
                                    <p className="mt-3 font-semibold"><strong>Fully repaid: Year 18 (Age 39). Total paid: ~£92,000</strong></p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>The Waiting Game:</strong> Notice how for high earners, the first 5-8 years feel frustrating—you&apos;re making substantial payments (£1,500-£2,500/year) but your balance is growing. This is normal. Once your salary crosses the critical threshold (usually £55k-£60k), the balance finally starts falling rapidly. Patience is key; the mathematics eventually work in your favor if you&apos;re on a high-earning trajectory.
                                </p>
                            </div>
                        </section>

                        {/* Career Breaks Impact */}
                        <section id="career-breaks-impact" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Career Breaks and Repayment Impact
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Career breaks, periods of unemployment, part-time work, maternity leave, sabbaticals, or career changes significantly affect loan repayment timelines. Here&apos;s how different scenarios impact your total cost:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Maternity/Paternity Leave and Childcare Years</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Taking time off for children is common and affects repayment:
                                    </p>
                                    <div className="bg-white p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario: Two years maternity leave (statutory pay ~£18k)</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Earnings below £25k threshold = £0 repayment for 2 years</li>
                                            <li>• Interest continues accruing on full balance (~£5k-£6k added)</li>
                                            <li>• Effectively adds 2-3 years to repayment timeline for high earners</li>
                                            <li>• For moderate earners heading for write-off, makes no practical difference</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Part-time work (3 days/week)</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• If full-time salary would be £50k, part-time = £30k</li>
                                            <li>• Annual repayment drops from £2,250 to £450</li>
                                            <li>• Balance grows during part-time years if previously reducing</li>
                                            <li>• Common for parents working 3-4 days/week for 5-10 years</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Redundancy and Job Seeking Periods</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Unemployment means zero repayment but interest keeps accruing:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>6 months unemployment:</strong> No repayments, ~£1,500-£2,000 interest added. Notify Student Finance England—they&apos;ll update your repayment status automatically through HMRC records.
                                        </li>
                                        <li>
                                            <strong>Jobseeker&apos;s Allowance/Universal Credit:</strong> These benefits are below the £25k threshold, so no repayments due. Your loan just accrues interest during this time.
                                        </li>
                                        <li>
                                            <strong>Career change with salary drop:</strong> Moving from £55k to £35k role (e.g., leaving corporate job for charity sector) drops annual repayment from £2,700 to £900. If you were on track to repay fully, you might now reach write-off instead.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Postgraduate Study</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Returning to full-time study (Master&apos;s, PhD) affects undergraduate loan repayment:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>Full-time student status:</strong> You can apply to defer undergraduate loan repayments while studying. No repayments due, but interest accrues on both undergraduate and any postgraduate loan.
                                        </li>
                                        <li>
                                            <strong>Part-time study while working:</strong> No deferment available. You continue repaying based on salary. Many professionals do part-time MBAs or Master&apos;s while working full-time.
                                        </li>
                                        <li>
                                            <strong>PhD stipend (~£18k-£20k):</strong> Below threshold = no repayments. PhDs effectively give you 3-4 years of zero payments while interest accrues ~£10k-£15k.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Sabbaticals and Career Breaks</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Taking a year off to travel, volunteer, or pursue personal projects:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Zero income = zero repayment, but ~£3k-£4k interest added per year</li>
                                        <li>If you were on track to repay fully, each sabbatical year adds ~1.5-2 years to repayment timeline</li>
                                        <li>If heading for write-off anyway, sabbaticals make no practical difference to total paid</li>
                                        <li>You don&apos;t need permission—just stop earning and repayments automatically stop</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Silver Lining for Moderate Earners:</h3>
                                <p className="text-gray-700 text-sm">
                                    If you&apos;re on track for 40-year write-off (earning £25k-£45k range), career breaks and part-time work actually reduce your total repayment. Taking 5 years off for childcare means 5 years of zero payments while your balance grows—but that extra balance gets written off anyway. You effectively pay less total while still getting full cancellation at year 40.
                                </p>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Example:</strong> Someone earning £38k consistently for 40 years pays ~£47k total. Someone earning £38k but taking 5 years off for childcare pays ~£41k total (5 years × £1,170 less). Both reach write-off, but the person with career breaks paid £6k less.
                                </p>
                            </div>
                        </section>

                        {/* Salary Negotiation Strategy */}
                        <section id="salary-negotiation-strategy" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Salary Negotiation and Loan Strategy
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding your loan trajectory should inform salary negotiation strategy. Counterintuitively, salary increases sometimes matter less than you think—or much more than you realize.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Salary Increases Matter Most:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Scenario: You&apos;re earning £48k-£58k and on track to potentially repay fully</strong>
                                </p>
                                <p className="text-gray-700 text-sm mb-3">
                                    This is the critical range where salary growth determines whether you repay in year 30 or year 40 (or reach write-off). Every £5k raise here:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Adds £450/year in repayments (9% of £5k)</li>
                                    <li>Could accelerate full repayment by 2-4 years</li>
                                    <li>Might be the difference between writing off £20k or repaying everything</li>
                                    <li>Push hard for raises in this salary band if you want to clear the debt</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Salary Increases Matter Less:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Scenario: You&apos;re earning £28k-£38k and will definitely reach write-off</strong>
                                </p>
                                <p className="text-gray-700 text-sm mb-3">
                                    If you&apos;re confident you won&apos;t cross into full-repayment territory, salary increases just mean more 9% tax with no benefit:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>£5k raise from £32k to £37k: You pay extra £450/year (£18k over 40 years) but still reach write-off</li>
                                    <li>The extra £5k gross becomes ~£2,800 net after income tax, NI, and student loan (effective 44% marginal rate)</li>
                                    <li>Still worth taking the raise (more lifetime earnings), but the loan makes raises less valuable</li>
                                    <li>Consider negotiating other benefits (pension, flexible working, training) alongside salary</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Salary Increases Have Maximum Impact:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Scenario: You&apos;re earning £70k+ and already repaying aggressively</strong>
                                </p>
                                <p className="text-gray-700 text-sm mb-3">
                                    At high salaries, raises accelerate repayment dramatically:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>£10k raise from £70k to £80k adds £900/year to repayments</li>
                                    <li>Could reduce repayment timeline from 18 years to 15 years</li>
                                    <li>Saves £10k-£15k in total interest paid</li>
                                    <li>Every year you clear the loan earlier is one year without 9% deductions</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Strategic Considerations:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>The 44% marginal rate trap:</strong> Between £25k-£50k, you face 20% income tax + 12% NI + 9% student loan = 41% marginal rate. From £50k-£60k, it rises to 40% income tax + 2% NI + 9% student loan = 51%. Salary increases in these bands feel less rewarding than they should.
                                    </li>
                                    <li>
                                        <strong>Pension contributions reduce student loan repayments:</strong> Salary sacrifice pension contributions reduce your gross salary for student loan purposes. £5k pension contribution = £5k less repayable income = £450/year less in loan payments. For moderate earners heading to write-off, maximizing pension can be smarter than paying down the loan.
                                    </li>
                                    <li>
                                        <strong>Job changes vs raises:</strong> Moving jobs often gives bigger jumps (£5k-£10k) than annual raises (£2k-£3k). If you&apos;re in the borderline repayment zone, strategic job moves that boost salary could save years of repayment.
                                    </li>
                                    <li>
                                        <strong>Don&apos;t turn down raises because of the loan:</strong> Even though 9% goes to loan repayment, 91% doesn&apos;t. Always take salary increases when offered—just understand the true net benefit after all deductions.
                                    </li>
                                </ol>
                            </div>
                        </section>

                        {/* Strategic Career Planning */}
                        <section id="strategic-career-planning" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Strategic Career Planning Framework
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding your loan trajectory should inform career decisions without dominating them. Here&apos;s a framework for factoring student loans into career planning:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 1: Determine Your Loan Trajectory</h3>
                                    <p className="text-gray-700 text-sm mb-2">Use our calculator to honestly model your career:</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Input realistic (not optimistic) salary progression based on your industry norms</li>
                                        <li>Include likely career breaks (maternity leave, sabbaticals)</li>
                                        <li>See whether you&apos;re heading for write-off, borderline, or full repayment</li>
                                        <li>Calculate total likely repayment over your working life</li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 2: Adopt the Right Mental Model</h3>
                                    <div className="space-y-3">
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">If heading for write-off (£25k-£40k career):</p>
                                            <p className="text-gray-700 text-xs">
                                                Think of it as a 9% graduate tax for 40 years, not a debt. The amount borrowed is irrelevant. Make career choices based on job satisfaction, work-life balance, and net take-home pay. The loan shouldn&apos;t drive major decisions—it&apos;s just a background tax that eventually disappears.
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">If borderline (£40k-£55k career):</p>
                                            <p className="text-gray-700 text-xs">
                                                You&apos;re in the most financially interesting position. Career progression in your 30s-40s matters significantly. A job that pays £50k with slow growth might lead to write-off. Same job with faster track to £60k might mean full repayment. Consider how career moves affect not just starting salary but growth trajectory.
                                            </p>
                                        </div>
                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">If definitely repaying (£60k+ trajectory):</p>
                                            <p className="text-gray-700 text-xs">
                                                The loan is real debt you&apos;ll clear in 12-25 years. Faster salary progression means earlier freedom from 9% deductions. Career moves that significantly boost salary are worth pursuing. Consider the loan as a factor in major financial decisions (mortgages, pension contributions) since it&apos;s a real liability.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 3: Factor Into Specific Decisions</h3>
                                    <div className="space-y-2 text-gray-700 text-sm">
                                        <p><strong>Job offer comparisons:</strong> Compare net take-home after all deductions, not gross salary. A £45k job and a £50k job differ by only £2,835 net after tax, NI, and student loan (not £5,000).</p>
                                        <p><strong>Career changes:</strong> If switching from high-paying corporate role (£70k) to passion project (£35k), understand you&apos;ll save £3,150/year in loan repayments. This partially offsets the £21,000 gross salary cut.</p>
                                        <p><strong>Part-time vs full-time:</strong> Going part-time (3 days) roughly cuts gross pay by 40% but cuts student loan deductions by more than 40% (because you might drop below/nearer the threshold).</p>
                                        <p><strong>Self-employment:</strong> Self-employed income has more flexibility—you can reduce loan repayments through business expense optimization and pension contributions more easily than PAYE employees.</p>
                                        <p><strong>Geographic moves:</strong> Moving to lower cost-of-living area for same salary increases net spending power, but doesn&apos;t reduce loan repayments. Moving to London for £10k more means only £5,685 extra net after deductions.</p>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 4: Revisit Every 3-5 Years</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Your trajectory can change based on career progression, life changes, or policy changes:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Unexpected promotion to £65k might shift you from write-off to full repayment</li>
                                        <li>Decision to work part-time for childcare might shift you back to write-off</li>
                                        <li>Career change to lower-paid but more satisfying role changes the calculation</li>
                                        <li>Government could change thresholds, interest rates, or write-off periods (though unlikely to be retrospective)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Final Principle: Don&apos;t Let the Loan Dominate Career Choices</h3>
                                <p className="text-gray-700 text-sm">
                                    The student loan should be one factor among many—job satisfaction, work-life balance, skills development, advancement opportunities, and quality of life matter more. Make informed decisions that account for the loan&apos;s impact, but don&apos;t sacrifice career fulfillment to minimize repayments. Whether you pay £35k or £85k over 40 years, your cumulative career earnings will differ by hundreds of thousands of pounds. The loan is a tax on your income, not a barrier to career choices.
                                </p>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Your career progression determines everything
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Fast career progression to £60k+ means full repayment in 15-25 years and total cost of £80k-£120k. Moderate progression to £40k means write-off after 40 years and total cost of £40k-£60k. Understanding your trajectory helps you plan financially and mentally for the road ahead.
                            </p>
                            <p className="text-gray-700">
                                Use our <Link href="/" className="text-blue-600 underline hover:text-blue-800 font-semibold">Student Loan Calculator</Link> to model your specific career path and see exactly when you&apos;ll repay—or why you won&apos;t.
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

export default CareerProgressionRepaymentTimeline;