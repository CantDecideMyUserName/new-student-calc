import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const MaintenanceLoanEstimatorByCity: React.FC = () => {
    const tocItems = [
        { id: "city-cost-comparison", title: "UK City Living Cost Comparison", level: 2 },
        { id: "maintenance-loan-reality", title: "Maintenance Loan vs Actual Costs", level: 2 },
        { id: "accommodation-breakdown", title: "City-by-City Accommodation Breakdown", level: 2 },
        { id: "budgeting-strategies", title: "City-Specific Budgeting Strategies", level: 2 },
    ];

    return (
        <div className="bg-white">
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">Student Loan Lifecycle</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Maintenance Loan by City</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Maintenance Loan Estimator by City: Rent vs Loan Adequacy
                    </h1>
                    <p className="text-xl text-gray-600">
                        City-specific cost analysis showing whether your maintenance loan covers rent and living expenses across UK universities
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    <div className="lg:flex-1 lg:min-w-0">
                        <section className="mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                The maximum maintenance loan is £9,978 (living at home) to £13,022 (London, away from home) for 2024/25. But does this actually cover living costs? The answer depends entirely on where you study. In Preston or Stoke, the maximum maintenance loan easily covers rent and living expenses. In London, Brighton, or Edinburgh, you&apos;ll face a £3,000-£5,000 annual shortfall requiring parental contributions or part-time work.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide provides city-by-city analysis of whether your maintenance loan is adequate, helping you choose a university location you can actually afford to live in.
                            </p>
                        </section>

                        <section id="city-cost-comparison" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">UK City Living Cost Comparison</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student living costs vary dramatically by city. Here&apos;s the complete picture:
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">City</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Rent (weekly)</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Annual Cost</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Max Loan</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Gap</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">
                                        <tr className="bg-red-50">
                                            <td className="px-4 py-2 border-b">London</td>
                                            <td className="px-4 py-2 border-b">£220-£350</td>
                                            <td className="px-4 py-2 border-b">£16,000-£19,000</td>
                                            <td className="px-4 py-2 border-b">£13,022</td>
                                            <td className="px-4 py-2 border-b font-semibold text-red-600">-£3,000 to -£6,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Oxford/Cambridge</td>
                                            <td className="px-4 py-2 border-b">£180-£280</td>
                                            <td className="px-4 py-2 border-b">£14,500-£17,000</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-red-600">-£4,300 to -£6,800</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="px-4 py-2 border-b">Brighton</td>
                                            <td className="px-4 py-2 border-b">£160-£240</td>
                                            <td className="px-4 py-2 border-b">£13,500-£16,000</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-red-600">-£3,300 to -£5,800</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Edinburgh</td>
                                            <td className="px-4 py-2 border-b">£150-£220</td>
                                            <td className="px-4 py-2 border-b">£13,000-£15,500</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-red-600">-£2,800 to -£5,300</td>
                                        </tr>
                                        <tr className="bg-yellow-50">
                                            <td className="px-4 py-2 border-b">Manchester</td>
                                            <td className="px-4 py-2 border-b">£130-£190</td>
                                            <td className="px-4 py-2 border-b">£11,500-£14,000</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-orange-600">-£1,300 to -£3,800</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Bristol</td>
                                            <td className="px-4 py-2 border-b">£140-£200</td>
                                            <td className="px-4 py-2 border-b">£11,800-£14,500</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-orange-600">-£1,600 to -£4,300</td>
                                        </tr>
                                        <tr className="bg-yellow-50">
                                            <td className="px-4 py-2 border-b">Birmingham</td>
                                            <td className="px-4 py-2 border-b">£120-£170</td>
                                            <td className="px-4 py-2 border-b">£10,500-£13,000</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-orange-600">-£300 to -£2,800</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Leeds</td>
                                            <td className="px-4 py-2 border-b">£110-£160</td>
                                            <td className="px-4 py-2 border-b">£10,000-£12,500</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-gray-600">+£200 to -£2,300</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Nottingham</td>
                                            <td className="px-4 py-2 border-b">£110-£160</td>
                                            <td className="px-4 py-2 border-b">£9,800-£12,200</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-green-600">+£400 to -£2,000</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Sheffield</td>
                                            <td className="px-4 py-2 border-b">£100-£150</td>
                                            <td className="px-4 py-2 border-b">£9,500-£11,800</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-green-600">+£700 to -£1,600</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Preston</td>
                                            <td className="px-4 py-2 border-b">£90-£130</td>
                                            <td className="px-4 py-2 border-b">£8,800-£10,500</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-green-600">+£1,400 to -£300</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Stoke/Hull</td>
                                            <td className="px-4 py-2 border-b">£85-£120</td>
                                            <td className="px-4 py-2 border-b">£8,500-£10,000</td>
                                            <td className="px-4 py-2 border-b">£10,227</td>
                                            <td className="px-4 py-2 border-b font-semibold text-green-600">+£1,700 to +£200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Note:</strong> Annual Cost includes rent (40 weeks), food, transport, books, and basic living expenses. Gap shows shortfall (negative) or surplus (positive) when comparing maximum maintenance loan to total annual costs.
                                </p>
                            </div>
                        </section>

                        <section id="maintenance-loan-reality" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Maintenance Loan vs Actual Costs</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The government sets maintenance loan amounts based on household income, with maximum amounts varying by location. But these maxima don&apos;t always match real living costs.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">2024/25 Maximum Maintenance Loans:</h3>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• <strong>Living at home:</strong> £9,978</li>
                                    <li>• <strong>Away from home, outside London:</strong> £10,227</li>
                                    <li>• <strong>Away from home, in London:</strong> £13,022</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    Most students don&apos;t receive the maximum. Household income above £25,000 reduces your entitlement progressively. By £60,000+ household income, you receive around 60% of the maximum.
                                </p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Parental Contribution Assumption:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    The maintenance loan system assumes parents will make up the shortfall between your loan and living costs. For example:
                                </p>
                                <div className="bg-white p-3 rounded mt-2">
                                    <p className="text-gray-700 text-sm"><strong>Scenario: Student in Manchester, household income £55,000</strong></p>
                                    <ul className="text-gray-700 text-sm space-y-1 mt-2">
                                        <li>• Maintenance loan received: ~£6,500 (reduced due to household income)</li>
                                        <li>• Actual annual costs in Manchester: ~£12,500</li>
                                        <li>• Expected parental contribution: £6,000</li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        If parents can&apos;t or won&apos;t provide this £6,000, the student must cover it through part-time work (difficult while studying full-time) or take private loans/overdrafts with higher interest rates.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Cheapest Cities = Most Loan-Sufficient:</h3>
                                <p className="text-gray-700 text-sm">
                                    If your household income is moderate (£40k-£60k) and parental contribution isn&apos;t guaranteed, studying in low-cost cities (Preston, Stoke, Hull, Sunderland) means your reduced maintenance loan still covers most expenses. This eliminates financial stress during study.
                                </p>
                            </div>
                        </section>

                        <section id="accommodation-breakdown" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">City-by-City Accommodation Breakdown</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Accommodation is your largest cost. Here&apos;s detailed city-specific pricing:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">London</h3>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• <strong>University halls (basic):</strong> £200-£250/week</li>
                                        <li>• <strong>University halls (ensuite):</strong> £280-£350/week</li>
                                        <li>• <strong>Private shared house:</strong> £180-£250/week</li>
                                        <li>• <strong>Reality:</strong> Even cheapest options (£200/week) total £8,000 for 40-week academic year. Add £4,000-£5,000 for food, transport, bills. You need £12,000-£13,000 minimum. Max London loan of £13,022 barely covers this with zero buffer.</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Manchester / Birmingham / Leeds (Major Cities)</h3>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• <strong>University halls (basic):</strong> £120-£150/week</li>
                                        <li>• <strong>University halls (ensuite):</strong> £160-£190/week</li>
                                        <li>• <strong>Private shared house:</strong> £100-£140/week</li>
                                        <li>• <strong>Reality:</strong> Budget £110-£130/week. Annual rent £4,400-£5,200 for 40 weeks. Add £3,500-£4,000 for food, transport, bills. Total: £7,900-£9,200. Max non-London loan (£10,227) provides small cushion but parental income reductions can create shortfalls.</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Nottingham / Sheffield / Preston (Affordable Cities)</h3>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• <strong>University halls:</strong> £90-£130/week</li>
                                        <li>• <strong>Private shared house:</strong> £75-£110/week</li>
                                        <li>• <strong>Reality:</strong> Budget £100/week. Annual rent £4,000 for 40 weeks. Add £3,000-£3,500 for food, transport, bills. Total: £7,000-£7,500. Max loan (£10,227) provides £2,700-£3,200 surplus for books, social activities, emergencies. This is comfortable.</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Stoke / Hull / Sunderland (Cheapest)</h3>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• <strong>University halls:</strong> £85-£110/week</li>
                                        <li>• <strong>Private shared house:</strong> £70-£95/week</li>
                                        <li>• <strong>Reality:</strong> Budget £90/week. Annual rent £3,600 for 40 weeks. Add £2,800-£3,200 for food, transport, bills. Total: £6,400-£6,800. Max loan (£10,227) provides £3,400-£3,800 surplus. Students can live comfortably without parental contribution or part-time work.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="budgeting-strategies" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">City-Specific Budgeting Strategies</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your budgeting approach depends entirely on whether you&apos;re in a loan-sufficient or loan-deficit city:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">High-Cost Cities (London, Oxford, Brighton): Deficit Budgeting</h3>
                                    <p className="text-gray-700 text-sm mb-2">you&apos;ll need £3,000-£6,000 additional funding per year. Options:</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Parental contribution (£500/month):</strong> Ideal if available</li>
                                        <li><strong>Part-time work (15-20 hours/week):</strong> Earns £800-£1,200/month but competes with study time</li>
                                        <li><strong>Mix:</strong> Parents contribute £300/month, work 10 hours/week for £500/month = covers £3,200 annual gap</li>
                                        <li><strong>Bursaries and scholarships:</strong> Research university hardship funds and subject-specific scholarships (£500-£2,000/year)</li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Mid-Cost Cities (Manchester, Birmingham, Leeds): Tight Budgeting</h3>
                                    <p className="text-gray-700 text-sm mb-2">Max loan nearly covers costs if you budget carefully:</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Choose cheaper accommodation:</strong> £120/week instead of £170/week saves £2,000/year</li>
                                        <li><strong>Cook instead of eating out:</strong> £40/week groceries vs £70/week eating out saves £1,200/year</li>
                                        <li><strong>Walk/cycle vs public transport:</strong> Saves £400-£600/year</li>
                                        <li><strong>Part-time work (8-12 hours/week):</strong> Provides buffer for social activities and emergencies</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Low-Cost Cities (Nottingham, Sheffield, Preston, Stoke): Comfortable Budgeting</h3>
                                    <p className="text-gray-700 text-sm mb-2">Max loan exceeds costs—focus on building financial habits:</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Emergency fund:</strong> Save £50-£100/month from loan surplus for unexpected costs</li>
                                        <li><strong>Minimize part-time work:</strong> Work 0-5 hours/week only if desired, maximize study focus</li>
                                        <li><strong>Avoid lifestyle inflation:</strong> Having spare money doesn&apos;t mean spend it all—avoid unnecessary debt accumulation</li>
                                        <li><strong>Experience without stress:</strong> Join societies, travel during holidays, enjoy university without constant financial worry</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Decision Point:</h3>
                                <p className="text-gray-700 text-sm">
                                    If you&apos;re from a moderate-income family (£40k-£60k household) that can&apos;t provide regular financial support, choosing a low-cost city university dramatically improves your student experience. The difference between studying in London (constant financial stress, 20+ hours weekly work, credit card debt) vs Preston (financially comfortable, minimal work, focus on studies) is life-changing, yet often ignored in university selection.
                                </p>
                            </div>
                        </section>

                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Your maintenance loan adequacy should influence university choice
                            </h3>
                            <p className="text-gray-700">
                                Choosing where to study based solely on prestige or course quality, without considering whether you can afford to live there, leads to financial stress that undermines academic performance and student experience. Check the real numbers before deciding.
                            </p>
                        </section>

                        <DrLilaDesc />
                    </div>

                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceLoanEstimatorByCity;
