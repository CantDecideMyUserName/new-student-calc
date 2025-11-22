import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const ChoosingUniversityLoanImpact: React.FC = () => {
    const tocItems = [
        { id: "university-tier-impact", title: "University Tier and Loan Repayment Reality", level: 2 },
        { id: "london-premium", title: "The London Premium: Worth the Extra £50k?", level: 2 },
        { id: "course-earning-potential", title: "Course-Specific Earning Potential", level: 2 },
        { id: "accommodation-costs", title: "Accommodation Costs and Maintenance Loans", level: 2 },
        { id: "graduate-employment-rates", title: "Graduate Employment Rates by Institution", level: 2 },
        { id: "lifetime-roi-analysis", title: "Lifetime ROI Analysis: Making the Calculation", level: 2 },
        { id: "strategic-decision-framework", title: "Strategic Decision Framework", level: 2 },
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
                                    Choosing University: Loan Impact
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Choosing University: How Your Decision Affects 40 Years of Loan Debt
                    </h1>
                    <p className="text-xl text-gray-600">
                        Russell Group vs polytechnic, London premium costs, and course-specific ROI analysis for your student loan journey
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
                                The university you choose is one of the most significant financial decisions of your life. With tuition fees fixed at £9,250 across England, you might assume all universities cost the same. But when you factor in living costs, maintenance loans, and crucially, your earning potential after graduation, the total 40-year cost of your university choice can vary by £100,000 or more.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Most prospective students focus on university rankings, course quality, and campus life. These matter. But understanding how your choice affects your lifetime student loan burden helps you make an informed decision that balances educational quality with financial reality.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide breaks down the real financial impact of university choice, from prestigious Russell Group institutions to modern polytechnics, and helps you calculate whether the extra debt is worth it for your specific situation.
                            </p>
                        </section>

                        {/* University Tier Impact */}
                        <section id="university-tier-impact" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                University Tier and Loan Repayment Reality
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The conventional wisdom says Russell Group graduates earn more, therefore their higher living costs (especially in expensive university cities like Oxford, Cambridge, Edinburgh, or London) are justified. The reality is more nuanced.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Russell Group Advantage: When It Matters</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    For certain careers, Russell Group credentials provide measurable advantages:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Investment Banking and Finance:</strong> Oxford, Cambridge, LSE, Imperial, and Warwick dominate recruitment. Starting salaries £40k-£50k vs £25k-£30k elsewhere</li>
                                    <li><strong>Management Consulting:</strong> McKinsey, Bain, BCG heavily recruit from top 10 universities. £45k starting vs £28k average</li>
                                    <li><strong>Law (Magic Circle):</strong> Top law firms prioritize Russell Group law degrees. Training contract salaries £50k+ vs £30k regional firms</li>
                                    <li><strong>Civil Service Fast Stream:</strong> While open to all, Russell Group graduates historically secure 60%+ of places</li>
                                    <li><strong>Academia and Research:</strong> PhD and research positions significantly favor Russell Group undergraduate pedigree</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Where University Matters Less: Emerging Reality</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Many high-paying careers show minimal university tier correlation:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Software Engineering:</strong> Tech companies prioritize skills over university. Self-taught developers from any university earning £40k-£60k after 2-3 years</li>
                                    <li><strong>NHS Medicine:</strong> All UK medical schools lead to same foundation year salary (£32k). Long-term earnings identical regardless of medical school prestige</li>
                                    <li><strong>Teaching:</strong> Qualified teacher salary scales are standard across England. University choice has zero financial impact</li>
                                    <li><strong>Nursing and Healthcare:</strong> NHS Agenda for Change pay scales don&apos;t differentiate by university</li>
                                    <li><strong>Most Engineering:</strong> Accredited engineering degrees from any university lead to similar starting salaries (£28k-£32k)</li>
                                    <li><strong>Creative Industries:</strong> Portfolio and experience matter far more than university name</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Loan Math:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Consider two students on Plan 5 (started September 2023+):
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 mb-2">Student A - LSE Economics (London)</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Total debt at graduation: £70,000</li>
                                            <li>• Starting salary: £45,000 (City analyst)</li>
                                            <li>• Annual repayment: £1,755 (9% above £25k threshold)</li>
                                            <li>• Salary growth: 5% annually</li>
                                            <li>• Likely outcome: Repays loan in full by year 18</li>
                                            <li>• Total paid: ~£95,000 (with interest)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 mb-2">Student B - Sheffield Hallam Economics</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Total debt at graduation: £48,000</li>
                                            <li>• Starting salary: £28,000 (regional analyst)</li>
                                            <li>• Annual repayment: £270 (9% above £25k threshold)</li>
                                            <li>• Salary growth: 3% annually</li>
                                            <li>• Likely outcome: Loan written off at 40 years</li>
                                            <li>• Total paid: ~£35,000 (never repays principal)</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Paradox:</strong> Student A pays £60,000 more in loan repayments despite earning more. But their lifetime earnings are also £400,000+ higher over 40 years. The £60,000 extra loan cost is justified by the £400,000 extra earnings.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Critical Insight:</strong> Higher debt is only a problem if you&apos;re on the margin of paying it off completely. If you&apos;ll definitely pay it all (high earner) or definitely won&apos;t (low to moderate earner), the prestige premium might not affect total repayment.
                                </p>
                            </div>
                        </section>

                        {/* London Premium */}
                        <section id="london-premium" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The London Premium: Worth the Extra £50k?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Studying in London adds approximately £15,000-£18,000 to your total student debt over three years compared to studying in a lower-cost UK city. This comes from higher accommodation costs that exceed the increased London maintenance loan.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">London University Cost Breakdown (Annual):</h3>
                                <div className="text-gray-700 text-sm space-y-1">
                                    <p>• Tuition fee: £9,250</p>
                                    <p>• Maximum maintenance loan (London, away from home): £13,022</p>
                                    <p>• Typical annual cost (rent, food, transport): £16,000-£18,000</p>
                                    <p>• <strong>Annual shortfall: £3,000-£5,000 (parental contribution or part-time work)</strong></p>
                                    <p>• Total debt per year (assuming max loan): £22,272</p>
                                    <p>• <strong>Three-year total debt: ~£66,816</strong></p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Non-London University Cost Breakdown (Annual):</h3>
                                <div className="text-gray-700 text-sm space-y-1">
                                    <p>• Tuition fee: £9,250</p>
                                    <p>• Maximum maintenance loan (outside London, away from home): £10,227</p>
                                    <p>• Typical annual cost (rent, food, transport): £9,000-£11,000</p>
                                    <p>• <strong>Annual shortfall: £0-£1,000 (manageable with part-time work)</strong></p>
                                    <p>• Total debt per year (assuming max loan): £19,477</p>
                                    <p>• <strong>Three-year total debt: ~£58,431</strong></p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Is the £8,000+ Extra London Debt Worth It?</h3>
                                <p className="text-gray-700 text-sm mb-2">The answer depends entirely on your career path:</p>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Worth it if:</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-sm">
                                            <li>you&apos;re studying finance, law, or consulting where London universities have significantly better placement records</li>
                                            <li>Your target employers heavily recruit from London campuses (LSE for economics, Imperial for STEM, UCL for architecture)</li>
                                            <li>you&apos;ll realistically earn £40k+ starting salary, making the extra debt immaterial to total repayment</li>
                                            <li>The specific London course is uniquely strong (e.g., LSE Economics, Imperial Computing, UCL Architecture)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Questionable value if:</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-sm">
                                            <li>you&apos;re studying a subject where university location doesn&apos;t affect employment (teaching, nursing, most sciences)</li>
                                            <li>You expect to earn under £35k for most of your career (the extra £8k debt likely won&apos;t be fully repaid anyway)</li>
                                            <li>You could study the same subject at a high-quality non-London Russell Group university (Manchester, Birmingham, Leeds, Edinburgh)</li>
                                            <li>The London university isn&apos;t particularly prestigious for your subject despite the London location</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Hidden Factor:</strong> London student housing is often lower quality for the price compared to purpose-built student accommodation in cities like Manchester, Nottingham, or Birmingham. you&apos;re not just paying more for the same experience—you&apos;re paying significantly more for objectively worse living conditions in many cases.
                                </p>
                            </div>
                        </section>

                        {/* Course Earning Potential */}
                        <section id="course-earning-potential" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Course-Specific Earning Potential
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your degree subject affects lifetime earnings far more than which university you attend. The Institute for Fiscal Studies produces detailed data on graduate earnings by subject. Understanding this helps you calibrate your university choice against realistic earning expectations.
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Subject Area</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Median Earnings 5 Years Post-Grad</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">University Tier Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Medicine & Dentistry</td>
                                            <td className="px-4 py-2 border-b">£46,000-£52,000</td>
                                            <td className="px-4 py-2 border-b">Minimal (NHS pay scales)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Economics</td>
                                            <td className="px-4 py-2 border-b">£36,000-£48,000</td>
                                            <td className="px-4 py-2 border-b">Very High (Russell Group premium £8k-£12k)</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Engineering</td>
                                            <td className="px-4 py-2 border-b">£30,000-£36,000</td>
                                            <td className="px-4 py-2 border-b">Low to Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Computer Science</td>
                                            <td className="px-4 py-2 border-b">£32,000-£42,000</td>
                                            <td className="px-4 py-2 border-b">Low (skills matter more than degree)</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Law</td>
                                            <td className="px-4 py-2 border-b">£28,000-£50,000</td>
                                            <td className="px-4 py-2 border-b">Very High (particularly for corporate law)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Business & Management</td>
                                            <td className="px-4 py-2 border-b">£26,000-£34,000</td>
                                            <td className="px-4 py-2 border-b">Moderate</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Biological Sciences</td>
                                            <td className="px-4 py-2 border-b">£24,000-£28,000</td>
                                            <td className="px-4 py-2 border-b">Low</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Education/Teaching</td>
                                            <td className="px-4 py-2 border-b">£27,000-£30,000</td>
                                            <td className="px-4 py-2 border-b">None (standard teacher pay)</td>
                                        </tr>
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b">Social Sciences</td>
                                            <td className="px-4 py-2 border-b">£24,000-£30,000</td>
                                            <td className="px-4 py-2 border-b">Low to Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Creative Arts</td>
                                            <td className="px-4 py-2 border-b">£20,000-£25,000</td>
                                            <td className="px-4 py-2 border-b">Very Low (portfolio matters most)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Insights:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Subject choice matters more than university choice for most students.</strong> A computer science graduate from a mid-tier university will likely out-earn a history graduate from Oxford within 10 years.
                                    </li>
                                    <li>
                                        <strong>University tier premiums are subject-specific.</strong> Paying London prices for a creative arts degree rarely makes financial sense. Paying for LSE Economics often does.
                                    </li>
                                    <li>
                                        <strong>Many high-earning professions don&apos;t differentiate by university.</strong> Medicine, dentistry, veterinary science, and teaching all have standardized pay regardless of where you studied.
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Reality Check:</strong> If you&apos;re passionate about a lower-earning subject (creative arts, social sciences, humanities), attending an expensive London university or living extravagantly will leave you with debt you&apos;ll never repay. that&apos;s mathematically fine under Plan 5—you&apos;ll pay 9% on earnings above £25k for 40 years then it&apos;s written off. But understand going in that your university choice won&apos;t significantly affect your repayment trajectory.
                                </p>
                            </div>
                        </section>

                        {/* Accommodation Costs */}
                        <section id="accommodation-costs" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Accommodation Costs and Maintenance Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                One of the biggest hidden costs affecting your total student debt is the gap between what the maintenance loan covers and what housing actually costs. This varies dramatically by city.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Most Expensive Cities (Accommodation):</h3>
                                    <ul className="text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>London:</strong> £200-£350/week
                                            <br /><span className="text-xs">Max maintenance loan: £250/week. Often insufficient even with maximum loan.</span>
                                        </li>
                                        <li>
                                            <strong>Oxford/Cambridge:</strong> £180-£280/week
                                            <br /><span className="text-xs">Colleges provide accommodation but it&apos;s expensive.</span>
                                        </li>
                                        <li>
                                            <strong>Brighton:</strong> £160-£240/week
                                            <br /><span className="text-xs">Coastal premium, limited student housing.</span>
                                        </li>
                                        <li>
                                            <strong>Edinburgh:</strong> £150-£220/week
                                            <br /><span className="text-xs">Festival city prices year-round.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Most Affordable Cities:</h3>
                                    <ul className="text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>Preston/Lancaster:</strong> £90-£130/week
                                            <br /><span className="text-xs">Max maintenance loan: £196/week. Loan easily covers rent + living.</span>
                                        </li>
                                        <li>
                                            <strong>Stoke/Wolverhampton:</strong> £85-£120/week
                                            <br /><span className="text-xs">Very low cost of living, loan surplus possible.</span>
                                        </li>
                                        <li>
                                            <strong>Hull/Sunderland:</strong> £95-£135/week
                                            <br /><span className="text-xs">Affordable Northern cities with good universities.</span>
                                        </li>
                                        <li>
                                            <strong>Nottingham/Sheffield:</strong> £110-£160/week
                                            <br /><span className="text-xs">Large student populations drive competitive pricing.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Parental Contribution Trap:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Maintenance loans are means-tested based on household income. Students from higher-income families receive less, on the assumption that parents will make up the difference. In practice:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Many parents can&apos;t or won&apos;t provide the assumed contribution</li>
                                    <li>This forces students into extensive part-time work, affecting academic performance</li>
                                    <li>Or students take private loans/overdrafts with higher interest than student loans</li>
                                    <li>Studying in a cheaper city can eliminate the parental contribution requirement entirely</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Practical Advice:</strong> Check your specific maintenance loan entitlement using the <Link href="https://www.gov.uk/student-finance-calculator" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">government calculator</Link>, then research actual accommodation costs for your target universities. If there&apos;s a £3,000+ annual gap and your parents aren&apos;t covering it, seriously consider universities in more affordable cities.
                                </p>
                            </div>
                        </section>

                        {/* Graduate Employment Rates */}
                        <section id="graduate-employment-rates" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Graduate Employment Rates by Institution
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Employment rates 15 months after graduation vary significantly by university and subject. This data, published in the Graduate Outcomes survey, helps you understand whether the prestige premium translates to employment reality.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Universities with Consistently High Graduate Employment (\u003e85%):</h3>
                                <p className="text-gray-700 text-sm mb-2">Not all are Russell Group:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Imperial College London (90%+ in professional roles)</li>
                                    <li>University of Bath (strong industry connections)</li>
                                    <li>Loughborough University (excellent for engineering/sports science)</li>
                                    <li>Durham, Exeter, Lancaster (high employment across subjects)</li>
                                    <li>Robert Gordon University (Aberdeen) - strong oil/gas industry links</li>
                                    <li>Aston University (Birmingham) - placement year programs boost employment</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Important Nuances:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Professional employment definitions vary.</strong> A graduate working in a supermarket management trainee program counts as professional employment despite £22k starting salary.
                                    </li>
                                    <li>
                                        <strong>Subject matters more than university for employment rates.</strong> A computer science graduate from almost any university has 90% employment. A philosophy graduate from Oxford faces tougher prospects.
                                    </li>
                                    <li>
                                        <strong>Universities in expensive cities often show higher salaries purely due to London weighting</strong>, not better opportunities. A £35k London salary might equal £28k in Manchester for purchasing power.
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Research Employment Data for YOUR Subject:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Use <Link href="https://discoveruni.gov.uk/" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">DiscoverUni.gov.uk</Link> to compare:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Employment rates 15 months after graduation for your specific course</li>
                                    <li>Median graduate salaries by subject and institution</li>
                                    <li>Percentage in professional vs non-professional roles</li>
                                    <li>Further study rates (important for medicine, law, academia)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Lifetime ROI Analysis */}
                        <section id="lifetime-roi-analysis" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Lifetime ROI Analysis: Making the Calculation
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The ultimate question: does the extra debt from a prestigious university in an expensive city deliver positive lifetime ROI? The answer requires calculating your specific situation.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">ROI Calculation Framework:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-3">
                                    <li>
                                        <strong>Calculate Total Debt Difference</strong>
                                        <p className="mt-1">Example: LSE (London) vs. University of Nottingham (same course)</p>
                                        <p className="mt-1">LSE 3-year debt: £66,816</p>
                                        <p>Nottingham 3-year debt: £58,431</p>
                                        <p>Difference: £8,385</p>
                                    </li>
                                    <li>
                                        <strong>Estimate Career Earning Differential</strong>
                                        <p className="mt-1">Use DiscoverUni data + industry research to estimate starting salary and 10-year earnings</p>
                                        <p className="mt-1">If LSE Economics averages £45k start vs Nottingham Economics £35k start, and this £10k gap persists (it usually narrows), the cumulative 40-year difference is £250k-£400k</p>
                                    </li>
                                    <li>
                                        <strong>Calculate Actual Repayment Impact</strong>
                                        <p className="mt-1">Under Plan 5, you pay 9% of income over £25k threshold</p>
                                        <p className="mt-1">Higher debt only matters if you&apos;re on track to repay it fully</p>
                                        <p>Use our <Link href="/" className="text-blue-600 underline hover:text-blue-800">Student Loan Calculator</Link> to model both scenarios</p>
                                    </li>
                                    <li>
                                        <strong>Factor in Write-Off</strong>
                                        <p className="mt-1">Plan 5 loans write off after 40 years</p>
                                        <p>If you won&apos;t repay fully anyway, the extra debt is irrelevant</p>
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Scenario Analysis: When Premium Universities Make Financial Sense</h3>
                                <p className="text-gray-700 text-sm mb-2"><strong>Positive ROI Scenarios:</strong></p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Studying a high-earning subject (economics, computer science, engineering) where university reputation significantly affects graduate salary</li>
                                    <li>Planning a career where university networks matter (finance, consulting, law)</li>
                                    <li>Expecting to earn £45k+ within 5 years (making you a definite full repayer regardless of debt level)</li>
                                    <li>The premium university is objectively much stronger for your subject (e.g., Imperial for engineering, LSE for economics)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3 mb-2"><strong>Negative or Neutral ROI Scenarios:</strong></p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Studying a subject where earnings are standardized (teaching, nursing, medicine)</li>
                                    <li>Realistic career expectations suggest you&apos;ll never fully repay anyway (creative arts, social sciences, many sciences)</li>
                                    <li>The premium university isn&apos;t particularly strong for your subject despite its overall reputation</li>
                                    <li>you&apos;re choosing largely for lifestyle/location rather than career prospects</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>The Brutal Truth:</strong> For most students, university choice affects quality of life during the degree more than lifetime earnings. If you&apos;re not aiming for a career where university pedigree demonstrably matters (banking, consulting, corporate law, maybe academia), study where you&apos;ll be happy and minimize debt. The difference in total loan repayment will be minimal because you won&apos;t repay fully either way.
                                </p>
                            </div>
                        </section>

                        {/* Strategic Decision Framework */}
                        <section id="strategic-decision-framework" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Strategic Decision Framework
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s a practical framework for choosing your university with student loan impact in mind:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 1: Define Career Realistic Expectations</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Research median salaries for your degree subject 5 and 10 years post-graduation. Use DiscoverUni, industry surveys, and talk to current graduates. Be realistic, not optimistic.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 2: Calculate Total Debt for Each Option</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Use our calculator and factor in:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Tuition fees (£9,250 × 3 or 4 years)</li>
                                        <li>Actual maintenance loan you&apos;ll receive (check with Student Finance)</li>
                                        <li>Real accommodation costs (not university estimates)</li>
                                        <li>Parental contribution reality (not assumptions)</li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 3: Model Your Repayment</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Use our <Link href="/" className="text-blue-600 underline hover:text-blue-800">Student Loan Calculator</Link> to project total repayment for each university option based on realistic salary expectations.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Step 4: Factor in Non-Financial Considerations</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Once you understand the financial reality, weigh:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Course quality and teaching reputation for your subject</li>
                                        <li>Location preferences and distance from family</li>
                                        <li>Campus facilities and student experience</li>
                                        <li>University culture and social opportunities</li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        If the financial difference is small (under £10k total repayment difference), choose based on these factors. If it&apos;s large (£30k+), make sure you understand why and whether it&apos;s justified.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Final Recommendation:</strong> Use our <Link href="/" className="text-blue-600 underline hover:text-blue-800">plan-specific calculators</Link> to model your exact scenarios. Input different universities, realistic starting salaries, and career progression assumptions. The calculator shows you total expected repayment, allowing you to see if paying £8,000 more in London is worth a £5,000 higher graduate salary (it&apos;s not) or a £15,000 higher graduate salary (it probably is).
                                </p>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Your university choice affects your next 40 years
                            </h3>
                            <p className="text-gray-700">
                                Make it with full understanding of the financial implications. The best university isn&apos;t always the most prestigious—it&apos;s the one that delivers the best combination of educational quality and financial sense for your specific situation.
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

export default ChoosingUniversityLoanImpact;
