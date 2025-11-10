import Link from 'next/link'
import React from 'react'

const StudentLoansCareerProgressionPage = () => {
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Career Progression Impact</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        How Career Progression Affects Student Loan Repayments
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understand how different salary growth patterns impact your lifetime student loan costs. Compare fast-track 
                        careers versus steady progression and discover the critical earnings thresholds.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="prose max-w-none">
                    <p>
                        Your career progression path is one of the most important factors determining how much you&apos;ll ultimately repay 
                        on your student loan. Two graduates with identical starting salaries can end up paying vastly different amounts 
                        depending on how their careers develop over the 30-40 year repayment period.
                    </p>
                    <p>
                        This guide explores different career progression patterns and their impact on student loan repayments, helping 
                        you understand what your career trajectory might mean for your finances.
                    </p>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-gray-700 text-sm">
                        <strong>Key Insight:</strong> The shape of your salary growth curve matters more than your starting salary. 
                        A graduate earning £25,000 with rapid progression to £80,000 will repay far more than someone starting at 
                        £35,000 but plateauing at £50,000, even though the latter has higher early earnings.
                    </p>
                </div>
            </section>

            {/* Why Career Progression Matters */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Why Career Progression Matters More Than Starting Salary
                </h2>
                <div className="prose max-w-none">
                    <p>
                        Because student loan repayments are calculated as 9% of income above the threshold, what matters most is your 
                        total earnings above the threshold over your entire repayment period, not your starting point.
                    </p>

                    <h3>The Mathematics of Career Progression</h3>
                    <p>
                        Student loan repayments accumulate based on the area under your salary curve that exceeds the repayment threshold. 
                        This means:
                    </p>
                    <ul>
                        <li><strong>Higher peak salary</strong> = more months of higher repayments</li>
                        <li><strong>Faster salary growth</strong> = reaching peak earnings sooner, meaning more years at high repayment levels</li>
                        <li><strong>Early plateauing</strong> = potentially never reaching full repayment, benefiting from write-off</li>
                        <li><strong>Late career increases</strong> = less time at peak earnings before write-off</li>
                    </ul>

                    <h3>The Critical Break-Even Point</h3>
                    <p>
                        For most Plan 2 loans, there&apos;s a critical salary level (typically around £45,000-55,000 sustained over many years) 
                        that determines whether you&apos;ll repay in full. Careers that consistently exceed this level will fully repay, while 
                        those that hover below it will benefit from write-off.
                    </p>
                </div>
            </section>

            {/* Career Progression Patterns */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Common Career Progression Patterns
                </h2>
                <div className="prose max-w-none mb-6">
                    <p>
                        UK careers typically follow one of several distinct progression patterns. Understanding which pattern matches 
                        your likely trajectory helps predict your student loan outcomes.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Fast-Track High Earners */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Fast-Track High Earners</h3>
                            <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Full Repayment</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Pattern:</strong> Rapid salary growth in first 5-10 years, reaching high salaries relatively young
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Typical trajectory:</strong> £30,000 → £50,000 (Year 3) → £80,000 (Year 7) → £120,000+ (Year 12)
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Examples:</strong> Investment banking, management consulting, corporate law, tech at FAANG companies
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Impact on Student Loans:</p>
                            <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                                <li>Will definitely repay full loan plus significant interest</li>
                                <li>Peak repayment years come early, maximizing total repayment</li>
                                <li>Typical repayment period: 10-18 years</li>
                                <li>Total repayment: 120-180% of original loan (principal + interest)</li>
                                <li>May benefit from voluntary overpayments to reduce interest</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                            <p className="text-sm text-gray-700">
                                <strong>Example:</strong> £50,000 Plan 2 loan, reaching £100,000 salary by year 10. Expected to repay 
                                full loan plus £25,000 interest. Monthly repayments peak at £545/month.
                            </p>
                        </div>
                    </div>

                    {/* Steady Professional Climbers */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Steady Professional Climbers</h3>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Likely Full Repayment</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Pattern:</strong> Consistent steady growth throughout career, reaching senior positions mid-career
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Typical trajectory:</strong> £28,000 → £38,000 (Year 5) → £52,000 (Year 12) → £70,000 (Year 20)
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Examples:</strong> Medicine (GPs, hospital consultants), civil engineering, senior accountancy, 
                                mid-tier law firms
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Impact on Student Loans:</p>
                            <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                                <li>Will likely repay full loan, outcome depends on peak salary achieved</li>
                                <li>Moderate repayments in early career, increasing steadily</li>
                                <li>Typical repayment period: 18-28 years</li>
                                <li>Total repayment: 105-140% of original loan</li>
                                <li>Borderline cases where voluntary overpayments may or may not make sense</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                            <p className="text-sm text-gray-700">
                                <strong>Example:</strong> £55,000 Plan 2 loan, steady progression to £65,000 by mid-career. Expected to 
                                repay most of loan, possibly 85-100% depending on exact progression. Monthly repayments reach £280-340/month.
                            </p>
                        </div>
                    </div>

                    {/* Moderate Progressors */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Moderate Progressors</h3>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Partial Repayment</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Pattern:</strong> Moderate growth to comfortable middle-class income, plateauing mid-career
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Typical trajectory:</strong> £25,000 → £32,000 (Year 5) → £42,000 (Year 12) → £48,000 (Year 20+)
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Examples:</strong> Teachers, nurses, social workers, junior/mid-level engineers, many public 
                                sector roles
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Impact on Student Loans:</p>
                            <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                                <li>Will repay 40-80% of loan before write-off</li>
                                <li>Steady but modest monthly repayments</li>
                                <li>Repayment continues for full 30-40 year period until write-off</li>
                                <li>Total repayment: 40-80% of original loan amount</li>
                                <li>Should never make voluntary overpayments - significant write-off benefit</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                            <p className="text-sm text-gray-700">
                                <strong>Example:</strong> £45,000 Plan 2 loan, plateauing around £45,000 salary. Expected to repay 
                                £25,000-30,000 over 30 years before £15,000-20,000 write-off. Monthly repayments around £130-160/month.
                            </p>
                        </div>
                    </div>

                    {/* Early Plateau */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Early Plateau Careers</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Minimal Repayment</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Pattern:</strong> Quick progression to comfortable level, then minimal further growth
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Typical trajectory:</strong> £22,000 → £30,000 (Year 3) → £35,000 (Year 7) → £38,000 (Year 15+)
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Examples:</strong> Many creative industries, journalism, marketing roles at SMEs, hospitality 
                                management, retail management
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Impact on Student Loans:</p>
                            <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                                <li>Will repay 20-50% of loan before write-off</li>
                                <li>Low to moderate monthly repayments</li>
                                <li>Significant write-off amount (50-80% of original loan)</li>
                                <li>Total repayment: 20-50% of original loan amount</li>
                                <li>No financial downside to borrowing maximum amount</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                            <p className="text-sm text-gray-700">
                                <strong>Example:</strong> £50,000 Plan 2 loan, salary plateaus at £38,000. Expected to repay 
                                £18,000-22,000 over 30 years before £28,000-32,000 write-off. Monthly repayments around £80/month.
                            </p>
                        </div>
                    </div>

                    {/* Slow and Steady */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Slow and Steady Growth</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Minimal Repayment</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Pattern:</strong> Very gradual growth throughout career, staying below or near threshold
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Typical trajectory:</strong> £20,000 → £24,000 (Year 5) → £28,000 (Year 12) → £32,000 (Year 20)
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Examples:</strong> Charity sector, arts and entertainment, some education support roles, 
                                part-time professionals, portfolio careers
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Impact on Student Loans:</p>
                            <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                                <li>Will repay 10-30% of loan before write-off</li>
                                <li>Very low monthly repayments or periods of no repayment</li>
                                <li>Massive write-off amount (70-90% of original loan)</li>
                                <li>Total repayment: 10-30% of original loan amount</li>
                                <li>Student loan system is extremely generous for these careers</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                            <p className="text-sm text-gray-700">
                                <strong>Example:</strong> £45,000 Plan 2 loan, salary stays near £30,000. Expected to repay only 
                                £8,000-12,000 over 30 years before £33,000-37,000 write-off. Monthly repayments around £20-40/month.
                            </p>
                        </div>
                    </div>

                    {/* Late Bloomers */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Late Bloomers</h3>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Partial Repayment</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Pattern:</strong> Low earnings early, significant growth later in career
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Typical trajectory:</strong> £22,000 → £26,000 (Year 7) → £45,000 (Year 15) → £70,000 (Year 22)
                            </p>
                            <p className="text-gray-600 text-sm mb-3">
                                <strong>Examples:</strong> Entrepreneurs after startup phase, academics reaching senior positions, 
                                creatives who build reputations, career changers to high-paying fields
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-800 mb-2">Impact on Student Loans:</p>
                            <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                                <li>Will repay 50-90% of loan, depending on timing and peak</li>
                                <li>Minimal early repayments, substantial later repayments</li>
                                <li>Less time at peak earnings means lower total repayment than fast-trackers</li>
                                <li>Total repayment: 50-90% of original loan amount</li>
                                <li>Interest accumulates during low-earning years, increasing balance</li>
                            </ul>
                        </div>
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-3">
                            <p className="text-sm text-gray-700">
                                <strong>Example:</strong> £48,000 Plan 2 loan growing to £65,000 with interest over first 15 years, then 
                                salary increases substantially. May repay £35,000-45,000 before write-off of remaining £20,000-30,000.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Factors */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Key Factors That Shape Your Career Progression
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Industry and Sector</h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc ml-4">
                            <li><strong>Finance and Tech:</strong> Steepest salary curves, highest peaks</li>
                            <li><strong>Professional Services:</strong> Structured progression, high peaks</li>
                            <li><strong>Public Sector:</strong> Predictable increments, moderate peaks</li>
                            <li><strong>Creative/Charity:</strong> Flattest curves, lowest peaks</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Geographic Location</h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc ml-4">
                            <li><strong>London:</strong> 15-30% salary premium, faster progression</li>
                            <li><strong>South East:</strong> 10-20% premium over other regions</li>
                            <li><strong>Other UK cities:</strong> Moderate salaries, regional variation</li>
                            <li><strong>Remote work:</strong> Can access London rates from anywhere</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Career Interruptions</h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc ml-4">
                            <li><strong>Parental leave:</strong> Typically reduces lifetime earnings by 10-30%</li>
                            <li><strong>Career breaks:</strong> Each year out delays progression</li>
                            <li><strong>Part-time work:</strong> Proportionally reduces repayments</li>
                            <li><strong>Further study:</strong> Delays earnings but may increase peak</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Company Size and Type</h3>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc ml-4">
                            <li><strong>Large corporations:</strong> Structured progression, good benefits</li>
                            <li><strong>SMEs:</strong> Variable progression, potential for rapid growth</li>
                            <li><strong>Startups:</strong> High risk/reward, potential equity value</li>
                            <li><strong>Self-employment:</strong> Highest variation, tax planning opportunities</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Strategic Implications */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Strategic Implications for Financial Planning
                </h2>
                <div className="prose max-w-none">
                    <h3>If You&apos;re on a Fast-Track Pattern:</h3>
                    <ul>
                        <li>You&apos;ll likely repay in full - consider voluntary overpayments vs. investing</li>
                        <li>Your loan balance matters significantly - minimize unnecessary borrowing</li>
                        <li>Compare loan interest rate with investment returns to optimize strategy</li>
                        <li>Consider whether overpaying will save meaningful amounts on interest</li>
                    </ul>

                    <h3>If You&apos;re on a Moderate or Plateau Pattern:</h3>
                    <ul>
                        <li>Never make voluntary overpayments - you&apos;ll benefit from write-off</li>
                        <li>Your loan balance doesn&apos;t matter - borrow what you need</li>
                        <li>Focus excess funds on investing, emergency fund, pension, or house deposit</li>
                        <li>Your student loan functions as a graduate tax, not traditional debt</li>
                    </ul>

                    <h3>If You&apos;re Unsure About Your Trajectory:</h3>
                    <ul>
                        <li>Default to not overpaying - you can always change strategy later</li>
                        <li>Review your situation every 3-5 years as your career develops</li>
                        <li>Use our calculators to model different scenarios</li>
                        <li>Remember that investments remain accessible, overpayments don&apos;t</li>
                    </ul>

                    <h3>Career Breaks and Flexibility:</h3>
                    <p>
                        If you anticipate taking career breaks (for family, travel, sabbaticals, or pursuing passion projects), you&apos;re 
                        more likely to benefit from write-off. The income-contingent system protects you during these periods - you 
                        simply don&apos;t make payments when earning below the threshold.
                    </p>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Career Progression Patterns: Quick Comparison
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Pattern</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Peak Salary</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Years to Peak</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Expected Repayment</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Overpayment Strategy</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800">Fast-Track</td>
                                <td className="px-4 py-3 text-sm text-gray-600">£100,000+</td>
                                <td className="px-4 py-3 text-sm text-gray-600">8-12 years</td>
                                <td className="px-4 py-3 text-sm text-gray-600">100%+ (with interest)</td>
                                <td className="px-4 py-3 text-sm text-gray-600">Consider carefully</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800">Steady Climber</td>
                                <td className="px-4 py-3 text-sm text-gray-600">£60,000-£80,000</td>
                                <td className="px-4 py-3 text-sm text-gray-600">15-20 years</td>
                                <td className="px-4 py-3 text-sm text-gray-600">85-100%</td>
                                <td className="px-4 py-3 text-sm text-gray-600">Probably not worth it</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800">Moderate Progressor</td>
                                <td className="px-4 py-3 text-sm text-gray-600">£45,000-£55,000</td>
                                <td className="px-4 py-3 text-sm text-gray-600">12-18 years</td>
                                <td className="px-4 py-3 text-sm text-gray-600">40-80%</td>
                                <td className="px-4 py-3 text-sm text-gray-600">Never overpay</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800">Early Plateau</td>
                                <td className="px-4 py-3 text-sm text-gray-600">£35,000-£45,000</td>
                                <td className="px-4 py-3 text-sm text-gray-600">5-10 years</td>
                                <td className="px-4 py-3 text-sm text-gray-600">20-50%</td>
                                <td className="px-4 py-3 text-sm text-gray-600">Never overpay</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800">Slow Growth</td>
                                <td className="px-4 py-3 text-sm text-gray-600">£30,000-£40,000</td>
                                <td className="px-4 py-3 text-sm text-gray-600">20+ years</td>
                                <td className="px-4 py-3 text-sm text-gray-600">10-30%</td>
                                <td className="px-4 py-3 text-sm text-gray-600">Never overpay</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-sm font-medium text-gray-800">Late Bloomer</td>
                                <td className="px-4 py-3 text-sm text-gray-600">£60,000-£90,000</td>
                                <td className="px-4 py-3 text-sm text-gray-600">18-25 years</td>
                                <td className="px-4 py-3 text-sm text-gray-600">50-90%</td>
                                <td className="px-4 py-3 text-sm text-gray-600">Probably not worth it</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Model Your Career Progression</h2>
                    <p className="text-lg text-blue-100">
                        Use our advanced calculators to project your specific career trajectory and see exactly how it affects 
                        your lifetime student loan costs
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                            href="/calculators/career-progression-calculator/"
                        >
                            Career Progression Calculator
                        </Link>
                        <Link
                            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                            href="/calculators/total-loan-cost-calculator/"
                        >
                            Total Loan Cost Calculator
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/student-loans-by-profession/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans by Profession</h3>
                        <p className="text-gray-600">Compare specific professions and their typical career progression patterns.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/guides/should-i-overpay-loan/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Should You Overpay Your Loan?</h3>
                        <p className="text-gray-600">Detailed analysis of when voluntary overpayments make sense based on your career.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/guides/investing-vs-loan-repayment/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Investing vs. Loan Repayment</h3>
                        <p className="text-gray-600">Compare returns from investing versus paying off your loan faster.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/guides/how-student-loans-work-uk/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
                        <p className="text-gray-600">Complete guide to the UK student loan system and income-contingent repayments.</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default StudentLoansCareerProgressionPage