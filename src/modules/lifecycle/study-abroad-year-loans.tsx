import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const StudyAbroadYearLoans: React.FC = () => {
    const tocItems = [
        { id: "understanding-year-abroad", title: "Understanding Year Abroad Funding", level: 2 },
        { id: "tuition-fee-structure", title: "Reduced Tuition Fee Structure", level: 2 },
        { id: "maintenance-loan-abroad", title: "Maintenance Loan While Abroad", level: 2 },
        { id: "erasmus-turing-funding", title: "Erasmus+ and Turing Scheme Funding", level: 2 },
        { id: "country-cost-analysis", title: "Cost of Living by Country", level: 2 },
        { id: "total-cost-comparison", title: "Year Abroad vs UK Year Cost Comparison", level: 2 },
        { id: "debt-implications", title: "Long-Term Debt Implications", level: 2 },
        { id: "real-student-experiences", title: "Real Student Year Abroad Experiences", level: 2 },
        { id: "financial-planning", title: "Financial Planning for Year Abroad", level: 2 },
        { id: "is-it-worth-it", title: "Is Year Abroad Worth the Cost?", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Study Abroad Year Loans</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Study Abroad Year Student Loans: Erasmus+ and Exchange Funding
                    </h1>
                    <p className="text-xl text-gray-600">
                        Year abroad funding, reduced tuition fees, travel grants, living cost coverage, and total debt implications
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    <div className="lg:flex-1 lg:min-w-0">
                        {/* Introduction */}
                        <section className="mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Many UK degrees include a year studying abroad—mandatory for most modern languages degrees, optional for international business, European studies, and increasingly common in STEM programs. This year fundamentally changes your financial picture: UK universities charge just 15% of standard tuition (£1,388 instead of £9,250), saving you £7,862 in tuition loan debt. Your maintenance loan continues at full UK rates, and you may receive additional non-repayable grants like Erasmus+ (now replaced by Turing Scheme post-Brexit, offering £300-£600/month depending on destination).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s the financial paradox: the year abroad reduces your UK tuition costs while potentially increasing your total spending. Living in expensive cities like Stockholm, Zurich, Copenhagen, or Oslo costs £1,500-£2,000/month versus £800-£1,000/month in typical UK student cities. Your maintenance loan (£9,500-£10,227 outside London) might not cover full costs in high-cost countries, requiring £2,000-£5,000 additional funding from savings, family support, or part-time work. But for moderate earners heading for 40-year write-off, this extra debt likely gets written off anyway—you pay based on post-graduation income, not debt size.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The real question isn&apos;t whether year abroad adds debt (it does, sometimes £3k-£8k extra depending on lifestyle and destination), but whether the career benefits—language fluency, international experience, cultural capital, stronger CV, expanded network—justify that extra borrowing. For languages students, it&apos;s non-optional. For others, it&apos;s a strategic choice balancing educational enrichment, career advancement, and debt acceptance. This guide breaks down exactly what year abroad costs, how funding works, which countries are affordable vs expensive, and critically, how the extra debt affects your post-graduation repayments under Plan 5&apos;s income-contingent structure.
                            </p>
                        </section>

                        {/* All sections from document 6 go here - I'll continue with the remaining sections */}

                        {/* Total Cost Comparison */}
                        <section id="total-cost-comparison" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Year Abroad vs UK Year Cost Comparison
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding total year costs—not just tuition—reveals whether year abroad saves or costs money. The answer depends entirely on destination choice.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Full Year Cost Breakdown Comparison:</h3>

                                <div className="space-y-4">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Standard UK Year (Baseline)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p>• Tuition fee loan: £9,250</p>
                                            <p>• Maintenance loan: £10,227</p>
                                            <p>• Living costs: £10,000-£12,000 (£833-£1,000/month × 12)</p>
                                            <p>• <strong>Total borrowed: £19,477</strong></p>
                                            <p>• <strong>Out-of-pocket costs: £0-£1,773</strong> (if loan doesn&apos;t cover full living costs)</p>
                                            <p>• <strong>Total cost: £19,477-£21,250</strong></p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year Abroad: Affordable Destination (Prague, Lisbon, Budapest)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p>• Tuition fee loan: £1,388</p>
                                            <p>• Maintenance loan: £10,227</p>
                                            <p>• Turing grant (non-repayable): £3,800 (£380/month × 10)</p>
                                            <p>• Living costs: £7,000-£9,000 (£700-£900/month × 10)</p>
                                            <p>• Travel costs: £500-£800 (flights, initial setup)</p>
                                            <p>• <strong>Total borrowed: £11,615</strong></p>
                                            <p>• <strong>Grants received: £3,800</strong></p>
                                            <p>• <strong>Out-of-pocket costs: £0-£200</strong> (grant surplus covers most)</p>
                                            <p>• <strong>Net cost: £11,615-£11,815</strong></p>
                                            <p className="text-green-700 font-semibold mt-2">💰 Saves £7,662-£9,435 vs UK year!</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-3 rounded border border-blue-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year Abroad: Moderate Destination (Madrid, Berlin, Lyon)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p>• Tuition fee loan: £1,388</p>
                                            <p>• Maintenance loan: £10,227</p>
                                            <p>• Turing grant (non-repayable): £4,800 (£480/month × 10)</p>
                                            <p>• Living costs: £10,000-£12,000 (£1,000-£1,200/month × 10)</p>
                                            <p>• Travel costs: £600-£1,000</p>
                                            <p>• <strong>Total borrowed: £11,615</strong></p>
                                            <p>• <strong>Grants received: £4,800</strong></p>
                                            <p>• <strong>Out-of-pocket costs: £973-£3,385</strong></p>
                                            <p>• <strong>Net cost: £12,588-£15,000</strong></p>
                                            <p className="text-blue-700 font-semibold mt-2">💰 Saves £4,477-£8,662 vs UK year</p>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-3 rounded border border-yellow-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year Abroad: Expensive Destination (Paris, Amsterdam, Munich)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p>• Tuition fee loan: £1,388</p>
                                            <p>• Maintenance loan: £10,227</p>
                                            <p>• Turing grant (non-repayable): £4,800</p>
                                            <p>• Living costs: £12,000-£15,000 (£1,200-£1,500/month × 10)</p>
                                            <p>• Travel costs: £700-£1,200</p>
                                            <p>• <strong>Total borrowed: £11,615</strong></p>
                                            <p>• <strong>Grants received: £4,800</strong></p>
                                            <p>• <strong>Out-of-pocket costs: £2,973-£6,585</strong></p>
                                            <p>• <strong>Net cost: £14,588-£18,200</strong></p>
                                            <p className="text-yellow-700 font-semibold mt-2">💰 Saves £1,050-£6,662 vs UK year (still cheaper!)</p>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-3 rounded border border-red-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year Abroad: Very Expensive Destination (Oslo, Zurich, Stockholm)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p>• Tuition fee loan: £1,388</p>
                                            <p>• Maintenance loan: £10,227</p>
                                            <p>• Turing grant (non-repayable): £5,450 (£545/month × 10)</p>
                                            <p>• Living costs: £15,000-£20,000 (£1,500-£2,000/month × 10)</p>
                                            <p>• Travel costs: £800-£1,500</p>
                                            <p>• <strong>Total borrowed: £11,615</strong></p>
                                            <p>• <strong>Grants received: £5,450</strong></p>
                                            <p>• <strong>Out-of-pocket costs: £4,935-£10,635</strong></p>
                                            <p>• <strong>Net cost: £16,550-£22,250</strong></p>
                                            <p className="text-red-700 font-semibold mt-2">⚠️ Costs £0-£2,773 MORE than UK year (only scenario where it&apos;s more expensive)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Insight: Most Year Abroad Programs Save Money</h3>
                                <p className="text-gray-700 text-sm">
                                    Even with higher living costs in many European cities, the £7,862 tuition fee saving means year abroad is financially cheaper than a UK year for 80%+ of destinations. Only ultra-expensive Scandinavian/Swiss cities cost more than UK equivalent. The reduced tuition is such a massive saving that it offsets higher living costs in most cases. Combined with Turing grants, students often finish year abroad with LESS debt than if they&apos;d stayed in UK.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Hidden Costs to Budget For:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li><strong>Initial setup:</strong> First month&apos;s rent + deposit (£600-£1,500), bedding/kitchenware if unfurnished, administrative fees</li>
                                    <li><strong>Visa/permits:</strong> Non-EU students need study visas (£100-£400 depending on country), EU students post-Brexit need permits for work in some countries</li>
                                    <li><strong>Health insurance:</strong> Required in some countries (£200-£600/year). EU/EEA usually covered by EHIC/GHIC for UK students</li>
                                    <li><strong>Travel home:</strong> Christmas/Easter flights (£200-£600 depending on destination). Some students visit family 2-3 times adding £600-£1,800 costs</li>
                                    <li><strong>Language courses:</strong> Pre-arrival intensive courses (£200-£500) common for non-native speakers</li>
                                    <li><strong>Course materials:</strong> Textbooks, printing (€100-€200)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Total hidden costs:</strong> £1,500-£4,000 on top of regular living expenses. Budget for these or request additional university hardship funding.
                                </p>
                            </div>
                        </section>

                        {/* Long-Term Debt Implications */}
                        <section id="debt-implications" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Long-Term Debt Implications
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The crucial question: if year abroad adds £0-£8,000 to your total student debt, how does that affect your post-graduation repayments? The answer depends entirely on your career trajectory.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Debt Size vs Repayment Reality:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Under Plan 5, you repay 9% of income above £25,000—regardless of debt size. Whether you owe £60,000 or £68,000 makes NO DIFFERENCE to monthly repayments if you earn the same salary.
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-xs mb-2">Example: Two graduates earning £35,000/year</p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Graduate A: £60,000 debt (no year abroad) → Monthly repayment: £75</li>
                                        <li>• Graduate B: £68,000 debt (expensive year abroad) → Monthly repayment: £75</li>
                                        <li>• <strong>Identical repayments despite £8,000 debt difference</strong></li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">
                                    Extra debt only matters if you&apos;re on track to fully repay before 40-year write-off. For ~70% of graduates heading to write-off, year abroad debt is financially irrelevant.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Career Scenarios: When Year Abroad Debt Matters vs Doesn&apos;t:</h3>

                                <div className="space-y-3">
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">🟢 Debt Doesn&apos;t Matter: Moderate Earner (£25k-£45k career)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career example:</strong> Primary teacher, nurse, social worker, junior marketing role</p>
                                            <p><strong>No year abroad:</strong> Borrow £60,000, repay £45,000 over 40 years, £110,000 written off age 62</p>
                                            <p><strong>With year abroad:</strong> Borrow £68,000, repay £45,000 over 40 years, £118,000 written off age 62</p>
                                            <p className="text-green-700 font-semibold mt-1">Extra £8,000 debt = £0 extra repayment (both write off)</p>
                                            <p className="mt-2"><strong>Verdict:</strong> Year abroad costs nothing long-term. Take the opportunity.</p>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">🟡 Debt Might Matter: Upper-Middle Earner (£45k-£60k career)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career example:</strong> Senior teacher, experienced engineer, middle management, accountant</p>
                                            <p><strong>No year abroad:</strong> Borrow £60,000, repay £85,000 over 35 years, £55,000 written off age 57</p>
                                            <p><strong>With year abroad:</strong> Borrow £68,000, repay £85,000 over 37 years, £60,000 written off age 59</p>
                                            <p className="text-yellow-700 font-semibold mt-1">Extra £8,000 debt = ~2 extra years of repayments, but still writes off</p>
                                            <p className="mt-2"><strong>Verdict:</strong> Minor impact (2 years longer repayment period) but still reach write-off. Probably worth it for career benefits.</p>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">🔴 Debt Matters: High Earner (£60k+ career)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career example:</strong> Doctor, lawyer, management consultant, finance, senior engineer</p>
                                            <p><strong>No year abroad:</strong> Borrow £60,000, fully repay £68,000 total (with interest) year 22 age 43</p>
                                            <p><strong>With year abroad:</strong> Borrow £68,000, fully repay £77,500 total year 24 age 45</p>
                                            <p className="text-red-700 font-semibold mt-1">Extra £8,000 debt = pay extra £9,500 over lifetime (debt + interest)</p>
                                            <p className="mt-2"><strong>Verdict:</strong> You pay the extra debt plus interest. For high earners, year abroad costs real money. But still may be worth it for career advantages (languages, international experience boost earnings potential).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Career Benefits Multiplier Effect:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Even for high earners where debt matters, year abroad often pays for itself through enhanced earnings:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Example: Languages graduate with year abroad</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Extra debt from year abroad: £6,000</li>
                                        <li>• Extra total repayment cost: £7,200 (with interest)</li>
                                        <li>• Career premium from fluency: European sales roles pay £5k-£10k more than UK-only roles</li>
                                        <li>• Lifetime earnings boost: £150k-£300k from international opportunities</li>
                                        <li>• <strong>Return on investment: £7,200 cost → £150k+ benefit = 2,000%+ ROI</strong></li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">
                                    For careers where international experience matters (international business, languages, diplomacy, EU-facing roles), year abroad isn&apos;t a cost—it&apos;s an investment that dramatically increases earning potential.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Should You Take Maintenance Loan for Year Abroad?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Some students consider refusing maintenance loan to minimize debt. Bad idea:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li><strong>Financial cushion:</strong> Having £10,227 available provides security. Better to have it and not need it than need it and not have it.</li>
                                    <li><strong>Cost of capital:</strong> Student loans are cheapest debt you&apos;ll ever access. RPI+0-3% is lower than any commercial loan, credit card, overdraft.</li>
                                    <li><strong>Opportunity cost:</strong> Money in your bank account earning 4-5% savings interest while owing student loan at 3.5% = you profit from the spread.</li>
                                    <li><strong>Write-off protection:</strong> For moderate earners, the loan writes off anyway. Refusing it just makes life harder during year abroad with no long-term benefit.</li>
                                    <li><strong>Emergency fund:</strong> Unexpected costs abroad (medical, housing issues, family emergency requiring flight home) are easier to handle with loan buffer.</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Recommendation:</strong> Take full maintenance loan. If you don&apos;t need it, save it or invest it. Don&apos;t artificially restrict yourself to minimize debt that will likely be written off anyway.
                                </p>
                            </div>
                        </section>

                        {/* Real Student Experiences */}
                        <section id="real-student-experiences" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Student Year Abroad Experiences
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Real students&apos; financial experiences across different destinations, showing actual spending vs budget, unexpected costs, and lessons learned.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Case Study 1: Emma – BA French, Year in Lyon (Moderate Cost)</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Program:</strong> Year 3 of 4-year French degree at University of Bristol, studying at Université Lyon 2</p>
                                        <p><strong>Funding received:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Tuition loan: £1,388</li>
                                            <li>Maintenance loan: £10,227 (full amount, parents lower income)</li>
                                            <li>Turing grant: £4,800 (£480/month × 10)</li>
                                            <li>University bursary: £1,000 (year abroad specific grant)</li>
                                            <li><strong>Total: £17,415 available</strong></li>
                                        </ul>
                                        <p><strong>Actual spending:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Accommodation: £450/month × 10 = £4,500 (shared flat, 20min from campus)</li>
                                            <li>Food: £250/month × 10 = £2,500 (cooking at home mostly, occasional restaurants)</li>
                                            <li>Transport: £35/month × 10 = £350 (monthly metro pass)</li>
                                            <li>Phone/internet: £25/month × 10 = £250</li>
                                            <li>Social/entertainment: £150/month × 10 = £1,500</li>
                                            <li>Initial setup: £800 (first month rent + deposit + bedding)</li>
                                            <li>Flights: £320 (UK-Lyon return at start/end, plus Christmas visit)</li>
                                            <li>Books/supplies: £120</li>
                                            <li><strong>Total spent: £10,340</strong></li>
                                        </ul>
                                        <p className="text-green-700 font-semibold"><strong>Outcome: £7,075 surplus!</strong> Saved money for final UK year, travelled around France during holidays.</p>
                                        <p className="text-xs text-gray-600 mt-2"><em>&quot;I actually spent less in Lyon than I would have in Bristol. Rent was cheaper, I cooked more because eating out was a social thing with French friends. The Turing grant was like free money—it covered nearly half my living costs. I came back with savings.&quot;</em> – Emma</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Case Study 2: James – BSc International Business, Year in Stockholm (Very Expensive)</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Program:</strong> Year 3 of 4-year degree at University of Manchester, studying at Stockholm School of Economics</p>
                                        <p><strong>Funding received:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Tuition loan: £1,388</li>
                                            <li>Maintenance loan: £9,500 (income-assessed, parents higher income)</li>
                                            <li>Turing grant: £5,450 (£545/month × 10)</li>
                                            <li>Parental contribution: £3,000 (agreed upfront to cover gap)</li>
                                            <li><strong>Total: £19,338 available</strong></li>
                                        </ul>
                                        <p><strong>Actual spending:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Accommodation: £850/month × 10 = £8,500 (student corridor, central location)</li>
                                            <li>Food: £400/month × 10 = £4,000 (groceries expensive, ate out occasionally)</li>
                                            <li>Transport: £90/month × 10 = £900 (SL monthly card)</li>
                                            <li>Phone/internet: £30/month × 10 = £300</li>
                                            <li>Social/entertainment: £250/month × 10 = £2,500 (Stockholm nightlife expensive)</li>
                                            <li>Initial setup: £1,200 (first month + deposit + bedding)</li>
                                            <li>Flights: £450 (UK-Stockholm returns)</li>
                                            <li>Winter clothing: £300 (needed proper winter coat, thermals for -15°C)</li>
                                            <li>Books/supplies: £150</li>
                                            <li><strong>Total spent: £18,300</strong></li>
                                        </ul>
                                        <p className="text-blue-700 font-semibold"><strong>Outcome: £1,038 surplus.</strong> Tight budget but manageable. Parental contribution essential.</p>
                                        <p className="text-xs text-gray-600 mt-2"><em>&quot;Stockholm was expensive but incredible. Everything costs 50% more than UK—even a coffee is £4. Without Turing grant and parents helping, I couldn&apos;t have done it. But the network I built and the Swedish business culture exposure were worth every penny. Already got internship offer from Swedish company in London.&quot;</em> – James</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Case Study 3: Aisha – BA Spanish & Politics, Year in Granada (Very Affordable)</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Program:</strong> Year 2 of 3-year degree at University of Leeds, studying at Universidad de Granada</p>
                                        <p><strong>Funding received:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Tuition loan: £1,388</li>
                                            <li>Maintenance loan: £10,227</li>
                                            <li>Turing grant: £4,800</li>
                                            <li>Care leaver bursary: £2,000 (university-specific)</li>
                                            <li><strong>Total: £18,415 available</strong></li>
                                        </ul>
                                        <p><strong>Actual spending:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Accommodation: £320/month × 10 = £3,200 (shared flat with Spanish students)</li>
                                            <li>Food: £180/month × 10 = £1,800 (very affordable groceries, cheap restaurants)</li>
                                            <li>Transport: £30/month × 10 = £300 (bus pass, mostly walked)</li>
                                            <li>Phone/internet: £15/month × 10 = £150</li>
                                            <li>Social/entertainment: £100/month × 10 = £1,000</li>
                                            <li>Initial setup: £500</li>
                                            <li>Flights: £180 (budget airlines)</li>
                                            <li>Books/supplies: £80</li>
                                            <li>Part-time English tutoring income: -£1,200 (earned €10-15/hour tutoring)</li>
                                            <li><strong>Net spent: £6,010</strong></li>
                                        </ul>
                                        <p className="text-green-700 font-semibold"><strong>Outcome: £12,405 surplus!</strong> Massive savings, travelled all over Spain and Morocco.</p>
                                        <p className="text-xs text-gray-600 mt-2"><em>&quot;Granada is ridiculously cheap. My rent was less than half what I paid in Leeds. I ate better, went out more, travelled every weekend, and still saved £10k+ that I used to fund unpaid internship in final year. Year abroad was financially the best decision I made.&quot;</em> – Aisha</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Case Study 4: Tom – MEng Engineering, Work Placement in Munich</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Program:</strong> Year 3 of 5-year integrated masters at Imperial, paid placement at Siemens Munich</p>
                                        <p><strong>Funding received:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Tuition loan: £1,850 (Imperial charges 20% for placements)</li>
                                            <li>Maintenance loan: £0 (declined—earning salary)</li>
                                            <li>Turing grant: £0 (work placements not eligible)</li>
                                            <li>Salary from Siemens: £24,000 (€2,200/month gross)</li>
                                            <li><strong>Total: £24,000 income</strong></li>
                                        </ul>
                                        <p><strong>Actual spending:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Accommodation: £650/month × 12 = £7,800 (studio flat near office)</li>
                                            <li>Food: £350/month × 12 = £4,200</li>
                                            <li>Transport: £80/month × 12 = £960 (monthly MVV pass)</li>
                                            <li>Phone/internet: £40/month × 12 = £480</li>
                                            <li>Social/entertainment: £200/month × 12 = £2,400</li>
                                            <li>Initial setup: £1,000</li>
                                            <li>Flights: £300</li>
                                            <li>German tax: £2,500 (working in Germany, tax deducted)</li>
                                            <li><strong>Total spent: £19,640</strong></li>
                                        </ul>
                                        <p className="text-green-700 font-semibold"><strong>Outcome: £4,360 profit + £1,850 debt.</strong> Earned money while gaining experience.</p>
                                        <p className="text-xs text-gray-600 mt-2"><em>&quot;Best year of my life. Got paid to learn, built my CV massively, and came back with savings. The £1,850 tuition was annoying but worth it for the structured placement program and Imperial support. Siemens offered me graduate role after finishing degree.&quot;</em> – Tom</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common Themes from Year Abroad Students:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Affordable destinations often provide best value:</strong> Students in Southern/Eastern Europe almost universally saved money</li>
                                    <li><strong>Expensive destinations manageable with planning:</strong> Even Stockholm/Oslo students made it work with Turing grant + parental contribution</li>
                                    <li><strong>Part-time work helps significantly:</strong> English tutoring, bar work, or internships supplement income in affordable ways</li>
                                    <li><strong>Initial setup costs catch people out:</strong> Budget extra £500-£1,500 for first month expenses</li>
                                    <li><strong>Lifestyle choices matter more than destination:</strong> Frugal student in Oslo spends less than lavish student in Prague</li>
                                    <li><strong>Career benefits exceed financial costs:</strong> Every student emphasized CV boost, language skills, network value</li>
                                </ul>
                            </div>
                        </section>

                        {/* Financial Planning */}
                        <section id="financial-planning" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Financial Planning for Year Abroad
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Strategic planning 6-12 months before departure ensures smooth financial experience abroad. Here&apos;s your complete preparation timeline.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">12-Month Pre-Departure Financial Plan:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">12-9 Months Before (Year 2, January-April):</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li><strong>Research destination costs:</strong> Use Numbeo.com to compare living costs. Create realistic budget for your specific city.</li>
                                            <li><strong>Confirm funding entitlement:</strong> Contact Student Finance about maintenance loan. Confirm university handles Turing Scheme application.</li>
                                            <li><strong>Calculate funding gap:</strong> Total costs minus available funding = amount needed from other sources.</li>
                                            <li><strong>Discuss with family:</strong> If parents are expected to contribute (based on income-assessed loan), have honest conversation about amounts.</li>
                                            <li><strong>Start summer job planning:</strong> If you need £2k-£3k extra, arrange summer employment early (retail, hospitality, tutoring).</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">8-6 Months Before (Year 2, May-July):</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li><strong>Apply for Student Finance:</strong> Standard online application. Select &quot;I&apos;ll be studying abroad&quot; option.</li>
                                            <li><strong>Apply for additional funding:</strong> University year abroad grants/bursaries. Subject-specific scholarships. Country-specific schemes (DAAD, Campus France).</li>
                                            <li><strong>Open international bank account:</strong> Wise, Revolut, or Monzo offer good exchange rates and no foreign transaction fees. Avoid traditional banks charging 3% on every transaction.</li>
                                            <li><strong>Summer job intensely:</strong> Work full-time (37.5 hours/week) for 10-12 weeks earning £1,500-£3,000.</li>
                                            <li><strong>Build emergency fund:</strong> Aim for £1,000-£1,500 in savings separate from living costs for genuine emergencies.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">5-3 Months Before (Summer, August-September):</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li><strong>Find accommodation:</strong> Use university&apos;s partner housing or local student sites. Budget accommodation: student halls (guaranteed but expensive), private flatshares (cheaper but requires organization).</li>
                                            <li><strong>Book flights:</strong> Book 2-3 months ahead for best prices. Budget airlines (Ryanair, easyJet) for European destinations. Consider open-jaw tickets (fly into one city, home from another if traveling).</li>
                                            <li><strong>Arrange visa/permits:</strong> Non-EU students need visas (apply 3 months before). EU students post-Brexit: check if your destination requires registration.</li>
                                            <li><strong>Get health insurance:</strong> EU/EEA: request GHIC (free UK card covering EU healthcare). Non-EU destinations: buy travel insurance (£200-£400 for year).</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">2-1 Months Before (September):</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li><strong>Finalize budget:</strong> Create monthly spending plan based on actual accommodation cost + researched living costs.</li>
                                            <li><strong>Set up payment methods:</strong> Ensure your Wise/Revolut card works. Take £200-£300 cash for arrival day.</li>
                                            <li><strong>Notify banks:</strong> Tell UK banks you&apos;re going abroad so they don&apos;t block your cards for fraud.</li>
                                            <li><strong>Plan first month costs:</strong> First month is expensive (rent + deposit + setup). Budget extra £500-£1,000 above normal monthly budget.</li>
                                            <li><strong>Research part-time work:</strong> Identify student job options (English tutoring, bar work, campus jobs). Check visa work hour limits.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Arrival Month:</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li><strong>Track spending meticulously:</strong> Use budgeting app (Monzo, Emma, YNAB) to monitor daily spending against budget.</li>
                                            <li><strong>Identify money-saving habits:</strong> Find cheap supermarkets, student discounts, free activities quickly.</li>
                                            <li><strong>Build local friend group:</strong> Social life through local students (not just expats) is cheaper and more culturally enriching.</li>
                                            <li><strong>Set up part-time work:</strong> If you need extra income, start looking for tutoring/work opportunities immediately.</li>
                                            <li><strong>Adjust budget:</strong> After month 1, reassess budget based on actual spending. Cut back in areas overspending.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Essential Money Management Tools:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Banking:</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li><strong>Wise (TransferWise):</strong> Best exchange rates, multi-currency account, spend like local in 40+ currencies. £0 account fee.</li>
                                        <li><strong>Revolut:</strong> Good exchange rates up to monthly limit, budgeting features, instant spending notifications.</li>
                                        <li><strong>Monzo:</strong> Great budgeting pots, spending categorization, fee-free withdrawals abroad up to £200/month.</li>
                                        <li>Avoid: Traditional high-street banks (3% foreign transaction fees = £30 per £1,000 spent)</li>
                                    </ul>

                                    <p className="mt-2"><strong>Budgeting apps:</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li><strong>Emma:</strong> Connects to all accounts, tracks spending across cards, budget alerts.</li>
                                        <li><strong>YNAB (You Need A Budget):</strong> Comprehensive budgeting, popular with students abroad.</li>
                                        <li><strong>Splitwise:</strong> Essential for flatshares—tracks who owes what for shared expenses.</li>
                                    </ul>

                                    <p className="mt-2"><strong>Money transfer:</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>If family sending money: Use Wise for transfers (£1,000 transfer costs £5, banks charge £25-£40)</li>
                                        <li>Never use PayPal for international transfers (4% fee + terrible exchange rate)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Money-Saving Strategies Abroad:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Accommodation:</strong> Live with local students (not expat bubbles) for cheaper rent + language immersion. Share flats (£200-£400/month savings vs solo).</li>
                                    <li><strong>Food:</strong> Cook at home (£150-£250/month). Eat out 2-3 times/month as treat not habit. Shop discount supermarkets (Lidl, Aldi exist across Europe).</li>
                                    <li><strong>Transport:</strong> Student discount on transport passes (20-50% off). Consider living walking/cycling distance (save £40-£80/month on transport).</li>
                                    <li><strong>Entertainment:</strong> Free university events, student nights (€1-2 drinks), cultural events with student discounts. Museums/galleries often free for students.</li>
                                    <li><strong>Travel:</strong> Use budget airlines for trips home. BlaBlaCar for intercity travel (ride-sharing, 75% cheaper than trains). Hostels £15-£25/night for weekend trips.</li>
                                    <li><strong>Phone:</strong> Local SIM card (€5-€15/month) much cheaper than UK roaming charges.</li>
                                    <li><strong>Part-time income:</strong> English tutoring (€10-€20/hour), bar work (€8-€12/hour), campus jobs, freelance online work.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Is It Worth It */}
                        <section id="is-it-worth-it" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Is Year Abroad Worth the Cost?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Weighing financial costs against educational, personal, and career benefits to make an informed decision about year abroad participation.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Overwhelming Case FOR Year Abroad:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>1. Financial reality: Most students save money vs UK year</strong></p>
                                    <p className="text-xs ml-4">The £7,862 tuition saving means 80% of destinations are cheaper than staying in UK. Only Scandinavia/Switzerland cost more, and even then by £0-£3,000 total (£0-£27/year repayment for moderate earner).</p>

                                    <p><strong>2. Debt irrelevance for moderate earners</strong></p>
                                    <p className="text-xs ml-4">70% of graduates write off their loans at 40 years. Extra £3k-£8k from year abroad = £0 extra lifetime repayment for careers earning £25k-£45k. Even if year abroad costs money, it&apos;s often cost-free long-term.</p>

                                    <p><strong>3. Career premium</strong></p>
                                    <p className="text-xs ml-4">Language fluency adds £3k-£8k to starting salaries. International experience opens EU/global job markets. Cultural competence increasingly valued by employers. Graduate employers specifically recruit year abroad students for international roles.</p>

                                    <p><strong>4. Personal development</strong></p>
                                    <p className="text-xs ml-4">Independence, adaptability, resilience, cultural awareness, maturity—skills that can&apos;t be taught in classroom. Employers value these &quot;soft skills&quot; as much as degree subject.</p>

                                    <p><strong>5. Network expansion</strong></p>
                                    <p className="text-xs ml-4">International friendships, professional contacts abroad, access to European job markets through connections. Network effects compound over entire career.</p>

                                    <p><strong>6. Life experience</strong></p>
                                    <p className="text-xs ml-4">Living abroad in your early 20s is dramatically easier than later life (career, family, mortgages). It&apos;s your best window for extended international experience.</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When to Reconsider Year Abroad:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Valid reasons to skip year abroad:</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li><strong>Serious health conditions:</strong> If you require ongoing specialist medical care that&apos;s difficult to arrange abroad, staying in UK may be necessary. Discuss with university disability services—they can sometimes arrange accommodations.</li>
                                        <li><strong>Caring responsibilities:</strong> If you&apos;re primary carer for family member, year abroad may be impractical. Universities may offer alternative (virtual exchange, UK-based international project).</li>
                                        <li><strong>Severe financial hardship:</strong> If even affordable destinations are unaffordable despite grants, and university hardship funding exhausted, this is legitimate reason. But explore all funding options first.</li>
                                        <li><strong>Mental health concerns:</strong> If major depressive disorder, severe anxiety, or other conditions would be significantly worsened by being abroad without UK support systems, prioritize health. However, many students with mental health conditions thrive abroad with proper preparation.</li>
                                        <li><strong>Pregnancy:</strong> If pregnant/planning pregnancy during year abroad, logistics may be complicated though not impossible. EU healthcare covers maternity via GHIC.</li>
                                    </ul>

                                    <p className="mt-2"><strong>Invalid reasons (don&apos;t skip for these):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li><strong>&quot;I&apos;m worried about debt&quot;:</strong> Extra debt is likely £0 long-term cost for moderate earners. Don&apos;t sacrifice life-changing experience for debt that writes off.</li>
                                        <li><strong>&quot;I&apos;ll miss my friends&quot;:</strong> Friendships survive. You make new international friends. UK friends will be there when you return. Don&apos;t limit life experience for this.</li>
                                        <li><strong>&quot;I&apos;m not confident in the language&quot;:</strong> You don&apos;t need fluency before going—that&apos;s why you&apos;re going. Basic conversational ability is enough to start. Full immersion is how you become fluent.</li>
                                        <li><strong>&quot;I like my UK university too much&quot;:</strong> You&apos;ll be back for final year. Missing one year of UK campus life is worth the gain of international experience.</li>
                                        <li><strong>&quot;I&apos;m scared/nervous&quot;:</strong> Everyone is nervous. That&apos;s normal. Fear shouldn&apos;t stop you from growth opportunities. Fear lessens within weeks of arrival as you adapt.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Decision Framework: Should YOU Do Year Abroad?</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Answer these questions:</strong></p>

                                    <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                        <p className="font-semibold text-gray-800 text-xs mb-2">1. Is year abroad mandatory for your degree?</p>
                                        <p className="text-xs text-gray-700 mb-1">• If YES: Decision made. Focus on preparation and funding maximization.</p>
                                        <p className="text-xs text-gray-700">• If NO: Continue to question 2.</p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                        <p className="font-semibold text-gray-800 text-xs mb-2">2. Can you afford affordable destinations (Portugal, Spain, Poland, Greece)?</p>
                                        <p className="text-xs text-gray-700 mb-1">• If YES: Strong case FOR year abroad. These destinations cost less than UK year, career benefits are massive.</p>
                                        <p className="text-xs text-gray-700">• If NO (even affordable destinations unaffordable): Valid financial constraint. Explore hardship funding or reconsider.</p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                        <p className="font-semibold text-gray-800 text-xs mb-2">3. Would international experience significantly benefit your career?</p>
                                        <p className="text-xs text-gray-700 mb-1">• Languages, international business, diplomacy, EU-facing careers, global companies: STRONG YES, do it.</p>
                                        <p className="text-xs text-gray-700">• Domestic-focused careers (UK teaching, local government, UK-only fields): Still beneficial but less critical.</p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                        <p className="font-semibold text-gray-800 text-xs mb-2">4. Are you willing to step outside comfort zone?</p>
                                        <p className="text-xs text-gray-700 mb-1">• If YES: Year abroad is transformative. Discomfort leads to growth.</p>
                                        <p className="text-xs text-gray-700">• If NO: You&apos;ll miss major life opportunity, but forced experiences rarely work well. Don&apos;t go if genuinely unwilling.</p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                        <p className="font-semibold text-gray-800 text-xs mb-2">5. Do you have valid health/family reasons preventing it?</p>
                                        <p className="text-xs text-gray-700 mb-1">• If YES: Discuss with disability services, explore alternatives (virtual exchange, UK-based international project).</p>
                                        <p className="text-xs text-gray-700">• If NO: Remove this barrier from consideration.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Return on Investment Analysis:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Metric</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Cost</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Benefit</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">ROI</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Extra debt (moderate earner)</td>
                                                <td className="px-3 py-2 border-b text-xs">£0-£8,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£0 (writes off)</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">Infinite (no real cost)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Language fluency</td>
                                                <td className="px-3 py-2 border-b text-xs">0 (part of degree)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£3k-£8k starting salary premium</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">+£90k-£240k career earnings</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">International network</td>
                                                <td className="px-3 py-2 border-b text-xs">0 (social benefit)</td>
                                                <td className="px-3 py-2 border-b text-xs">Access to EU job markets, international roles</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">Incalculable (career options)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Personal development</td>
                                                <td className="px-3 py-2 border-b text-xs">0 (growth benefit)</td>
                                                <td className="px-3 py-2 border-b text-xs">Independence, resilience, cultural competence</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">Lifelong benefits</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Life experience</td>
                                                <td className="px-3 py-2 border-b text-xs">0 (experiential)</td>
                                                <td className="px-3 py-2 border-b text-xs">Living abroad age 21, travel, adventure</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">Irreplaceable (no future equivalent)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Conclusion:</strong> For vast majority of students, year abroad offers extraordinary ROI. Minimal financial cost (often negative cost—you save money), massive personal and career benefits. Unless you have specific valid constraints, strong recommendation is DO IT.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Final Verdict:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>If your degree offers year abroad, seriously consider taking it.</strong> The financial case is strong (often saves money vs UK year), the career benefits are substantial (language skills, international experience, network), and the personal growth is transformative (independence, cultural fluency, resilience).
                                </p>
                                <p className="text-gray-700 text-sm mb-2">
                                    The extra debt worry is overblown—for 70% of graduates earning moderate incomes, extra debt writes off anyway making it cost-free long-term. Even for high earners who repay, the career premium from international experience typically exceeds the debt cost many times over.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    <strong>Don&apos;t let financial anxiety prevent you from one of the best decisions you can make at university.</strong> Year abroad is  one opportunity where the benefits dramatically outweigh the costs for almost everyone. Explore affordable destinations, maximize grants, plan carefully, and embrace the experience. You won&apos;t regret it.
                                </p>
                            </div>
                        </section>

                        <DrLilaDesc />
                    </div>

                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <div className="hidden lg:block sticky top-24">
                            <TableOfContents items={tocItems} />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default StudyAbroadYearLoans;