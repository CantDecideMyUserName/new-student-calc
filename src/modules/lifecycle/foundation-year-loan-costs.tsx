import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const FoundationYearLoanCosts: React.FC = () => {
    const tocItems = [
        { id: "foundation-year-overview", title: "Understanding Foundation Years", level: 2 },
        { id: "who-needs-foundation", title: "Who Actually Needs a Foundation Year?", level: 2 },
        { id: "total-cost-analysis", title: "Complete 4-Year vs 3-Year Cost Analysis", level: 2 },
        { id: "repayment-reality", title: "Repayment Reality: When Extra Debt Matters", level: 2 },
        { id: "lost-earnings-cost", title: "The Hidden Cost: Lost Graduate Earnings", level: 2 },
        { id: "value-assessment", title: "Foundation Year Value Assessment", level: 2 },
        { id: "alternative-pathways", title: "Alternative Pathways to Consider", level: 2 },
        { id: "subject-specific-analysis", title: "Subject-Specific Foundation Year Analysis", level: 2 },
        { id: "real-scenarios", title: "Real Foundation Year Student Scenarios", level: 2 },
        { id: "decision-framework", title: "Should You Do a Foundation Year?", level: 2 },
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
                                    Foundation Year Loan Costs
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Foundation Year Student Loan Costs: 4-Year Degree Implications
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding extra year funding, total cost comparison, and ROI analysis for foundation year programs
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
                                Foundation years (also called Year 0 or integrated foundation years) add an extra year to your degree, turning a 3-year undergraduate course into a 4-year program. This means an additional £9,250 in tuition fees, another £10,000+ in maintenance costs, and critically, an extra year of student loan debt accumulation. When you graduate with a foundation year route, you&apos;ll owe approximately £20,000-£25,000 more than someone who entered directly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                But here&apos;s the crucial nuance: under Plan 5&apos;s income-contingent repayment structure, that extra £20k-£25k debt often costs you nothing additional in actual repayments. Most graduates never fully repay their loans—they make 9% deductions on income above £25,000 for 40 years, then the balance writes off. Whether you owe £60k or £80k, if you&apos;re heading for write-off, you pay the same total amount based on your earnings, not your debt size.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The real cost of foundation years isn&apos;t the extra debt—it&apos;s the lost year of graduate earnings. Starting your career at 22 instead of 21 means losing £25,000-£35,000 in early-career salary, delayed promotions, and one fewer year of peak earnings. For most careers, this opportunity cost vastly exceeds any additional student loan repayment. This guide breaks down when foundation years make financial sense and when alternative pathways deliver better value.
                            </p>
                        </section>

                        {/* Foundation Year Overview */}
                        <section id="foundation-year-overview" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Understanding Foundation Years
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Foundation years are undergraduate programs designed to prepare students for degree-level study who don&apos;t quite meet standard entry requirements but demonstrate potential for academic success.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Foundation Years Cover:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Subject-specific introduction:</strong> Core concepts and terminology for your chosen degree subject. Engineering foundations cover basic mathematics, physics principles, and introduction to engineering disciplines.</p>
                                    <p><strong>Academic skills development:</strong> Essay writing, critical thinking, research methods, referencing, time management—skills often assumed in direct-entry students.</p>
                                    <p><strong>Knowledge gaps:</strong> If you&apos;re switching subjects (humanities A-levels but want to study science), the foundation year fills mathematical/scientific knowledge gaps.</p>
                                    <p><strong>Study skills and confidence:</strong> Particularly valuable for mature students who&apos;ve been away from education for years or students from non-traditional backgrounds.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Typical Foundation Year Structure:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year 0 (Foundation Year):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Teaching load: Similar to Year 1 (12-16 hours/week lectures + self-study)</li>
                                            <li>• Assessment: Mix of coursework, exams, presentations</li>
                                            <li>• Pass requirement: Typically 40%-50% average across modules</li>
                                            <li>• Outcome: Automatic progression to Year 1 if you meet pass requirements</li>
                                            <li>• Class size: Often smaller than main degree cohorts (30-60 students)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Years 1-3 (Main Degree):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Join standard degree program alongside direct-entry students</li>
                                            <li>• No indication on degree certificate that you did foundation year</li>
                                            <li>• Same degree classification system (First, 2:1, 2:2, Third)</li>
                                            <li>• Same graduate prospects as 3-year route students</li>
                                            <li>• Foundation year grade doesn&apos;t count toward final degree classification</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Integrated vs Standalone Foundation Years:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Integrated foundation year:</strong> You apply directly to &quot;BSc Computer Science with Foundation Year&quot; as a 4-year program. Conditional offer guarantees Year 1 place if you pass foundation. This is the most common and secure route.</p>
                                    <p><strong>Standalone foundation year:</strong> You complete separate foundation certificate, then apply to universities for Year 1. No guaranteed progression. Less common and more risky.</p>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Recommendation:</strong> Always choose integrated foundation years with guaranteed progression. Standalone foundation years leave you with £20k debt and no guaranteed university place.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Point: Foundation Years Are Fully Fundable</h3>
                                <p className="text-gray-700 text-sm">
                                    Student Finance England treats foundation years identically to standard undergraduate years. You receive full tuition fee loan (£9,250) and maintenance loan (£9,500-£13,022 depending on household income) for all four years. The foundation year counts as one of your funded years under the &quot;length of course + 1 year&quot; rule. No special applications or restrictions—it&apos;s automatic.
                                </p>
                            </div>
                        </section>

                        {/* Who Needs Foundation */}
                        <section id="who-needs-foundation" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Who Actually Needs a Foundation Year?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Foundation years serve specific student populations. Understanding whether you genuinely need one versus just preferring one is crucial for making the right financial decision.
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Genuine Need for Foundation Year:</h3>

                                    <div className="space-y-3">
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">1. Significant Qualification Gap</p>
                                            <p className="text-gray-700 text-xs">
                                                You have CCC-CDD A-levels but want to study at universities requiring ABB-AAB minimum. The gap is too large for direct entry anywhere reputable. Foundation year is your route to a proper degree.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">2. Subject Switching Without Prerequisites</p>
                                            <p className="text-gray-700 text-xs">
                                                You took all humanities A-levels (History, English, Politics) but want to study Engineering. You have zero A-level maths or physics. Foundation year provides essential mathematical/scientific foundation. Alternative would be resitting A-levels, which also takes time and money.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">3. Non-Standard Qualifications</p>
                                            <p className="text-gray-700 text-xs">
                                                You have BTEC qualifications, international qualifications not widely recognized, or professional qualifications without A-levels. Many universities only accept students with A-level equivalency or foundation year completion.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">4. Mature Student Gap (10+ Years)</p>
                                            <p className="text-gray-700 text-xs">
                                                You&apos;re 30+ years old, last formal education was GCSEs at 16. You need structured re-introduction to academic study. Access courses are alternative, but foundation years at your target university provide smoother transition and guaranteed progression.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">5. Care Leaver or Contextual Background</p>
                                            <p className="text-gray-700 text-xs">
                                                You&apos;re from severely disadvantaged background (care system, homeless, refugee) and university offers foundation year as part of widening participation. You have potential but educational disruption created qualification gaps. Foundation year levels the playing field.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Borderline Cases (Consider Alternatives First):</h3>

                                    <div className="space-y-3">
                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">1. Marginal Grade Miss (BBB vs ABB)</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                You got BBB but your firm choice wanted ABB. Before doing foundation year, consider: (a) Retaking one A-level in January (£100-£200, 3 months), (b) Finding direct-entry university accepting BBB for same subject.
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Financial comparison:</strong> A-level retake costs £200 and 3 months. Foundation year costs £20k debt and 12 months. Unless the foundation year is at significantly better university, retaking makes more sense.
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">2. University Prestige Upgrade</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                You can get direct entry to Nottingham Trent but want Manchester via foundation year. Question: Does the prestige difference justify £20k+ debt and one year delay?
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Reality check:</strong> For most subjects and careers, university ranking matters less than degree classification and work experience. Employers care more about 2:1 vs 2:2 than Manchester vs Nottingham Trent. Exceptions: Law (magic circle), consulting (Oxbridge bias), some finance roles.
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">3. Lack of Confidence</p>
                                            <p className="text-gray-700 text-xs">
                                                You meet entry requirements but feel unprepared. Foundation year seems like a &quot;safer&quot; start. This is understandable anxiety, but consider: Year 1 of direct entry is designed for students with your qualifications. Universities expect mixed preparation levels.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Poor Reasons for Foundation Year:</h3>

                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>&quot;Foundation years are easier&quot;:</strong> They have lower entry requirements but similar workloads. If you&apos;re not genuinely interested in the subject, you&apos;ll struggle with foundation year too.
                                        </li>
                                        <li>
                                            <strong>&quot;My parents want me at a prestigious university&quot;:</strong> Parental pressure for LSE/Imperial via foundation year when you could do direct entry elsewhere rarely makes financial sense unless pursuing specific careers where prestige genuinely matters.
                                        </li>
                                        <li>
                                            <strong>&quot;I don&apos;t want to retake exams&quot;:</strong> Avoiding 3 months of A-level study by doing 12-month foundation year and accumulating £20k extra debt is terrible logic.
                                        </li>
                                        <li>
                                            <strong>&quot;Foundation year gives me extra time to decide&quot;:</strong> You&apos;re still committing to a subject from day 1 of foundation year. If you&apos;re uncertain, take a gap year (costs nothing) or apply to universities with flexible first years.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Self-Assessment Questions:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>Can I get direct entry to any university for my desired subject? (If yes, foundation year is optional)</li>
                                    <li>Would retaking 1-2 A-levels give me direct entry to my target universities? (If yes, and it&apos;s only one subject, retaking is cheaper)</li>
                                    <li>Does the specific university I&apos;d attend via foundation year offer significantly better career outcomes for my subject? (Check graduate employment statistics—often the difference is minimal)</li>
                                    <li>Am I choosing foundation year to avoid direct-entry anxiety, or because I genuinely lack the prerequisite knowledge? (Anxiety is normal and doesn&apos;t justify £20k extra debt)</li>
                                </ol>
                            </div>
                        </section>

                        {/* Total Cost Analysis */}
                        <section id="total-cost-analysis" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Complete 4-Year vs 3-Year Cost Analysis
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Let&apos;s break down the complete financial picture of foundation years versus direct entry, including all debt accumulation and interest.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Total Debt at Graduation (Maximum Maintenance Loan):</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Component</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">3-Year (Outside London)</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">4-Year (Outside London)</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Difference</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Tuition Fee Loans</td>
                                                <td className="px-3 py-2 border-b text-xs">£27,750</td>
                                                <td className="px-3 py-2 border-b text-xs">£37,000</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">+£9,250</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Maintenance Loans</td>
                                                <td className="px-3 py-2 border-b text-xs">£30,681</td>
                                                <td className="px-3 py-2 border-b text-xs">£40,908</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">+£10,227</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Interest During Study</td>
                                                <td className="px-3 py-2 border-b text-xs">~£6,500</td>
                                                <td className="px-3 py-2 border-b text-xs">~£10,000</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">+£3,500</td>
                                            </tr>
                                            <tr className="bg-gray-50 font-semibold">
                                                <td className="px-3 py-2 border-b text-xs">Total at Graduation</td>
                                                <td className="px-3 py-2 border-b text-xs">~£64,931</td>
                                                <td className="px-3 py-2 border-b text-xs">~£87,908</td>
                                                <td className="px-3 py-2 border-b text-xs text-red-600">+£22,977</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>For London students:</strong> Add approximately £3,000 per year to maintenance loans (£3,000 × 3 = £9,000 extra for 3-year; £3,000 × 4 = £12,000 for 4-year). Foundation year difference becomes ~£26,000 for London-based students.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Breaking Down the £23,000 Extra Debt:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>£9,250:</strong> Additional year of tuition fees</li>
                                    <li><strong>£10,227:</strong> Additional year of living costs (maximum maintenance loan)</li>
                                    <li><strong>£3,500:</strong> Extra year of interest accumulation (RPI + 3% during study)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    This £23k extra debt sits on your loan balance from graduation day. But remember: under Plan 5, you only repay 9% of income above £25,000 regardless of total debt. The extra debt only matters if you&apos;ll fully repay the loan before 40-year write-off.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Interest Accumulation Continues After Graduation:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    The £23k extra debt continues accruing interest post-graduation at RPI + 0-3% based on your income:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Example:</strong> 10 years after graduation, moderate earner (£32k salary)</p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• 3-year route: Balance has grown from £65k to ~£88k (despite making £18k in repayments)</li>
                                        <li>• 4-year route: Balance has grown from £88k to ~£119k (despite making £18k in repayments)</li>
                                        <li>• Balance difference: £31k (originally £23k, now £31k due to compounding interest)</li>
                                        <li>• <strong>Repayment made difference: £0</strong> (both paid same 9% above threshold)</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    For most moderate earners, both balances will continue growing until write-off at 40 years. The foundation route student has larger balance, but both reach write-off paying identical amounts.
                                </p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Real Cost: Delayed Graduate Entry</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    While the £23k extra debt often costs nothing in repayments, starting your career one year later has concrete financial consequences:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Lost First Year Graduate Salary:</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Teaching: ~£30,000 gross lost</li>
                                        <li>• Nursing: ~£28,000 gross lost</li>
                                        <li>• Engineering: ~£32,000 gross lost</li>
                                        <li>• Accounting: ~£28,000 gross lost</li>
                                        <li>• Software engineering: ~£35,000 gross lost</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Over 40-year career:</strong> Starting one year later means 39 years of earnings instead of 40, delayed progression to senior roles, one fewer year of peak-earning period (ages 45-65). This compounds to £200,000-£500,000 in lost lifetime earnings depending on career trajectory.
                                </p>
                            </div>
                        </section>

                        {/* Repayment Reality */}
                        <section id="repayment-reality" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Repayment Reality: When Extra Debt Matters
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The counterintuitive truth: for most graduates, the foundation year&apos;s extra £23k debt adds £0 to total repayments. But for high earners, it can cost £30k-£40k extra. Understanding which category you&apos;ll fall into is essential.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Repayment Outcome by Career Earnings:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Low-Moderate Earners (£25k-£35k career): Extra Debt = £0 Additional Cost</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">3-Year Route:</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Graduate with £65k debt</li>
                                                    <li>• Earn £28k-£35k career</li>
                                                    <li>• Annual repayment: £270-£900</li>
                                                    <li>• 40 years of payments: £25k-£35k</li>
                                                    <li>• Balance at write-off: £95k-£110k</li>
                                                    <li>• <strong>Written off: £70k-£85k</strong></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">4-Year Route:</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Graduate with £88k debt</li>
                                                    <li>• Earn £28k-£35k career (same jobs)</li>
                                                    <li>• Annual repayment: £270-£900</li>
                                                    <li>• 40 years of payments: £25k-£35k</li>
                                                    <li>• Balance at write-off: £130k-£145k</li>
                                                    <li>• <strong>Written off: £105k-£120k</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm mt-3">
                                            <strong>Total repayment difference: £0.</strong> Both routes pay identical amounts because repayment is based on income (9% above £25k), not debt size. The extra £23k debt plus its accumulated interest simply gets written off.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Borderline Earners (£35k-£50k career): Partial Additional Cost</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">3-Year Route:</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Graduate with £65k debt</li>
                                                    <li>• Earn £38k-£50k career</li>
                                                    <li>• Annual repayment: £1,170-£2,250</li>
                                                    <li>• Borderline full repayment</li>
                                                    <li>• Likely scenario: Pay £55k-£75k, small write-off or full repayment by year 35-38</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">4-Year Route:</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Graduate with £88k debt</li>
                                                    <li>• Earn £38k-£50k career (same jobs)</li>
                                                    <li>• Annual repayment: £1,170-£2,250</li>
                                                    <li>• Extended repayment period</li>
                                                    <li>• Likely scenario: Pay £65k-£85k, write-off at 40 years or full repayment by year 39-40</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm mt-3">
                                            <strong>Total repayment difference: £10k-£15k more for foundation route.</strong> You&apos;re in the borderline zone where extra debt extends repayment period, causing some additional payments but not full £23k extra cost.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">High Earners (£50k+ career): Full Additional Cost + Interest</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">3-Year Route:</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Graduate with £65k debt</li>
                                                    <li>• Earn £45k-£80k career</li>
                                                    <li>• Annual repayment: £1,800-£4,950</li>
                                                    <li>• Full repayment by year 12-18</li>
                                                    <li>• <strong>Total paid: £80k-£110k</strong></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">4-Year Route:</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Graduate with £88k debt</li>
                                                    <li>• Earn £45k-£80k career (same jobs)</li>
                                                    <li>• Annual repayment: £1,800-£4,950</li>
                                                    <li>• Full repayment by year 16-24</li>
                                                    <li>• <strong>Total paid: £110k-£150k</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm mt-3">
                                            <strong>Total repayment difference: £30k-£40k more for foundation route.</strong> High earners repay the full extra £23k debt plus all accumulated interest over the extended repayment period.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Which Category Will You Fall Into?</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    <strong>Subject-based predictions (rough guidelines):</strong>
                                </p>
                                <div className="grid md:grid-cols-3 gap-3 text-xs">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">Low-Moderate (Extra debt = £0)</p>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Creative arts</li>
                                            <li>• Social work</li>
                                            <li>• Primary teaching</li>
                                            <li>• Humanities</li>
                                            <li>• Most social sciences</li>
                                            <li>• Sports science</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">Borderline (Extra debt = £10k-£15k)</p>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Secondary teaching</li>
                                            <li>• Nursing</li>
                                            <li>• Accounting</li>
                                            <li>• Architecture</li>
                                            <li>• Pharmacy</li>
                                            <li>• Some engineering</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">High (Extra debt = £30k-£40k)</p>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Medicine</li>
                                            <li>• Dentistry</li>
                                            <li>• Computer science</li>
                                            <li>• Economics</li>
                                            <li>• Law (commercial)</li>
                                            <li>• Management consulting</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Important caveat:</strong> Individual outcomes vary enormously within subjects. A Computer Science graduate could earn £28k (games industry, public sector) or £80k (finance tech, consulting). Your career choices matter more than your degree subject.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Paradox: When Extra Debt Doesn&apos;t Matter but Lost Year Does</h3>
                                <p className="text-gray-700 text-sm">
                                    For ~70% of Plan 5 students heading for write-off, the foundation year&apos;s extra £23k debt adds nothing to total repayments—you pay the same based on your earnings. BUT you&apos;ve still lost one year of graduate salary (£28k-£35k) and delayed career progression. So the debt is irrelevant but the opportunity cost is real. This is the critical distinction many students miss when evaluating foundation years.
                                </p>
                            </div>
                        </section>

                        {/* Lost Earnings Cost */}
                        <section id="lost-earnings-cost" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The Hidden Cost: Lost Graduate Earnings
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While most analysis focuses on the extra £23k debt, the foundation year&apos;s true financial cost is the delayed career start. This opportunity cost affects every graduate, regardless of whether they&apos;ll repay their loan fully.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Immediate Cost: Lost First Graduate Year Salary</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    The year you spend doing foundation year (ages 18-19), direct-entry students spend in Year 1 (ages 18-19). Both graduate at the same qualification level, but:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <div className="grid md:grid-cols-2 gap-3 text-xs">
                                        <div>
                                            <p className="font-semibold text-gray-800 mb-2">Direct Entry Student:</p>
                                            <ul className="text-gray-700 space-y-1">
                                                <li>• Age 21: Graduates, starts graduate job at £30k</li>
                                                <li>• Age 22: Working, earning £31k-£32k</li>
                                                <li>• Age 23: Working, earning £33k-£35k</li>
                                                <li>• Age 24: Working, earning £36k-£38k</li>
                                                <li>• Ages 21-24 earnings: ~£130k gross</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 mb-2">Foundation Year Student:</p>
                                            <ul className="text-gray-700 space-y-1">
                                                <li>• Age 21: Still completing Year 3 (student)</li>
                                                <li>• Age 22: Graduates, starts graduate job at £30k</li>
                                                <li>• Age 23: Working, earning £31k-£32k</li>
                                                <li>• Age 24: Working, earning £33k-£35k</li>
                                                <li>• Ages 21-24 earnings: ~£95k gross</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Lost earnings just in first 4 years post-graduation: ~£35,000 gross.</strong> This is real money you&apos;re not earning, not theoretical debt that might get written off.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Long-Term Cost: Career Progression Delay</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Beyond the immediate lost year, starting your career one year later creates a permanent offset in your earning trajectory:
                                </p>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Example: Engineering Career (£32k → £65k over 20 years)</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Direct Entry (Age 21-40):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Ages 21-25: Junior engineer £32k-£40k</li>
                                                    <li>• Ages 26-32: Mid-level £42k-£52k</li>
                                                    <li>• Ages 33-40: Senior £55k-£65k</li>
                                                    <li>• 20 years total: ~£980k gross earnings</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Foundation Route (Age 22-41):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Ages 22-26: Junior engineer £32k-£40k</li>
                                                    <li>• Ages 27-33: Mid-level £42k-£52k</li>
                                                    <li>• Ages 34-41: Senior £55k-£65k</li>
                                                    <li>• 20 years total: ~£980k gross earnings</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm mt-2">
                                            Wait—same total? Yes, for the 20 years measured. But the foundation route student is one year behind at every stage. They reach £65k senior salary at age 41 instead of age 40. The direct-entry student has age 41 earning at senior level while foundation student is just arriving there.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Peak Earnings Period Impact (Ages 45-65)</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            Most careers have peak earning periods in your 40s-50s when you&apos;re established, experienced, and at senior levels. The foundation year student enters this peak period one year later and exits one year earlier:
                                        </p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li>Direct entry: 40 years of career earnings (age 21-61)</li>
                                            <li>Foundation route: 39 years of career earnings (age 22-61)</li>
                                            <li>That missing year often falls in your highest-earning period</li>
                                            <li>Lost year at peak salary (£60k-£80k) = £60k-£80k lost gross income</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Compounding Effect: Pension and Career Ceiling</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Pension contributions:</strong> Starting work one year later means one fewer year of employer pension contributions. Over 40 years with compound investment growth, this could mean £50k-£100k less pension pot at retirement.</p>
                                    <p><strong>Career ceiling timing:</strong> Reaching senior positions one year later might mean missing opportunities that don&apos;t come around often (e.g., partner track at age 38 vs 39, when the role might be filled).</p>
                                    <p><strong>Experience gap:</strong> In competitive fields, having 5 years experience vs 4 years experience at the same age can determine who gets promotions.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Total Lifetime Cost Estimate:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Conservative estimate (Moderate earner, £30k-£45k career):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Lost first year salary: £30,000 gross</li>
                                        <li>Lost year at peak earning (age 60): £45,000 gross</li>
                                        <li>Lost pension contributions and growth: £50,000</li>
                                        <li><strong>Total lifetime opportunity cost: ~£125,000</strong></li>
                                    </ul>
                                    <p className="mt-3"><strong>Aggressive estimate (High earner, £40k-£80k career):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Lost first year salary: £40,000 gross</li>
                                        <li>Lost year at peak earning (age 55-60): £75,000 gross</li>
                                        <li>Lost pension contributions and growth: £100,000</li>
                                        <li>Career progression delays: £50,000</li>
                                        <li><strong>Total lifetime opportunity cost: ~£265,000</strong></li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-3 font-semibold">
                                    Compare this to the student loan cost: Even high earners only pay £30k-£40k extra on their loan. The lost earnings far exceed the loan cost for every graduate, regardless of career level.
                                </p>
                            </div>
                        </section>

                        {/* Value Assessment */}
                        <section id="value-assessment" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Foundation Year Value Assessment
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Given the costs (£23k extra debt + £125k-£265k lost earnings), when do foundation years deliver sufficient value to justify this investment?
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">High Value Scenarios:</h3>

                                    <div className="space-y-3">
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">1. Only Route to University</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Your qualifications (CDD A-levels, non-standard quals, no A-levels) don&apos;t meet any direct-entry requirements. Alternative isn&apos;t &quot;foundation vs direct entry&quot;—it&apos;s &quot;foundation vs no degree.&quot;
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Value calculation:</strong> Graduate premium over lifetime is £100k-£400k. Foundation year costs £125k-£265k opportunity cost. Still net positive if career benefits exceed costs. For most graduates, they do.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">2. Subject Switch Requiring Foundation</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                You took all arts A-levels but want to study Engineering. You need A-level Maths and Physics equivalents. Foundation year provides these plus engineering fundamentals.
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Alternative cost:</strong> Resitting 2 A-levels = 12-18 months + £300-£500. Foundation year = 12 months + £23k debt. Time cost similar, but foundation year guarantees university place while A-level resits don&apos;t.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">3. Russell Group Access via Contextual Offers</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                You&apos;re from severely disadvantaged background. University offers foundation year route to Russell Group university you couldn&apos;t access directly. Could get direct entry to post-92 university.
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Value calculation:</strong> Does Russell Group vs post-92 university affect your career outcomes enough to justify £125k+ opportunity cost? For most subjects: No. For specific careers (law, consulting, academia, some finance): Possibly yes.
                                            </p>
                                        </div>

                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">4. Mature Student Confidence Building</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                You&apos;re 35+, last formal education was GCSEs 20 years ago. Foundation year provides structured re-entry to academic study with smaller classes and dedicated support.
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Alternative:</strong> Access to HE Diploma (1 year, often free, provides direct entry). But if your target university is foundation-year-only or if you need the confidence boost, foundation year may be worth it despite Access being cheaper.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Marginal Value Scenarios:</h3>

                                    <div className="space-y-3">
                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">1. Marginal Grade Miss (BBB vs ABB)</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                You have BBB, target requires ABB. You could: (a) Foundation year at target university, (b) Retake one A-level for direct entry, (c) Direct entry to BBB-accepting university.
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Analysis:</strong> Retaking one A-level costs £150 + 3-6 months. Foundation year costs £23k + 12 months + £125k opportunity cost. Unless target university is significantly better AND that matters for your career, retaking makes more financial sense.
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">2. University Prestige Trade-Up</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Foundation at Manchester vs Direct entry at Sheffield Hallam for Computer Science.
                                            </p>
                                            <p className="text-gray-700 text-xs">
                                                <strong>Graduate outcomes:</strong> Tech sector cares about skills and portfolio more than university prestige. Starting salary difference is typically £2k-£3k. Over career, university prestige matters minimally for Computer Science compared to actual coding ability and experience. Foundation year cost (£125k+ opportunity) vastly exceeds any salary premium from slightly better university.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Low Value Scenarios:</h3>

                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>Foundation year as &quot;easier route&quot;:</strong> Foundation years have lower entry requirements but similar workloads. If you&apos;re doing foundation to avoid challenging Year 1, you&apos;ll still struggle with the actual degree. Investment of extra year + debt isn&apos;t justified by minimal difficulty reduction.
                                        </li>
                                        <li>
                                            <strong>Parental pressure for prestigious institution:</strong> Parents want you at LSE via foundation when you could do Economics at Nottingham directly. Unless you&apos;re targeting careers where LSE brand genuinely matters (very narrow set of finance/consulting/policy roles), the cost doesn&apos;t justify prestige gain.
                                        </li>
                                        <li>
                                            <strong>Avoiding A-level resits out of laziness:</strong> One failed A-level, could retake in 3 months for £100. Instead choosing foundation year to avoid studying. The 3-month investment in retaking would save you £125k+ opportunity cost.
                                        </li>
                                        <li>
                                            <strong>Subject with low graduate premium + foundation route:</strong> Creative arts foundation year when graduate premium for creative arts is minimal (£50k-£100k lifetime). The foundation year&apos;s opportunity cost (£125k) potentially exceeds the entire graduate premium for the subject.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Alternative Pathways */}
                        <section id="alternative-pathways" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Alternative Pathways to Consider
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Before committing to a foundation year, systematically evaluate these alternatives that might deliver equivalent outcomes at lower cost.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Option 1: Access to HE Diploma</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Details:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Duration:</strong> 1 year (full-time) or 2 years (part-time)</li>
                                                <li>• <strong>Cost:</strong> £0-£3,500 (often completely free via Advanced Learner Loan which is written off if you complete degree)</li>
                                                <li>• <strong>Location:</strong> Further education colleges</li>
                                                <li>• <strong>Outcome:</strong> Qualifies for direct university entry</li>
                                                <li>• <strong>Acceptance:</strong> Most universities accept it, though some Russell Group are hesitant</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">When to choose:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Mature students (21+)</li>
                                                <li>• No A-levels or very weak GCSEs</li>
                                                <li>• Need free route to qualification</li>
                                                <li>• Targeting universities that accept Access (most post-92, many pre-92)</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Value calculation:</strong> Free (or £3,500) vs £23k foundation year. Same time investment. Graduates with same degree. Access is financially superior if target universities accept it.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Option 2: A-Level Retakes</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Details:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Duration:</strong> 3-6 months (Jan or June exam sessions)</li>
                                                <li>• <strong>Cost:</strong> £100-£200 per A-level as external candidate</li>
                                                <li>• <strong>Study:</strong> Self-study or private tutoring (add £500-£2,000 if tutored)</li>
                                                <li>• <strong>Outcome:</strong> Improved grades for direct university entry</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">When to choose:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Close to required grades (BBB needing ABB)</li>
                                                <li>• One subject dragging overall profile down</li>
                                                <li>• Can self-study effectively</li>
                                                <li>• Target universities worth the 3-6 month delay</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Value calculation:</strong> £100-£200 + 3-6 months vs £23k + 12 months. If retaking gets you direct entry to same university, it&apos;s vastly superior financially.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Option 3: Direct Entry at Lower-Ranked University</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Details:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Duration:</strong> 3 years (standard degree)</li>
                                                <li>• <strong>Cost:</strong> No additional cost vs any university</li>
                                                <li>• <strong>Entry:</strong> Matches your current qualifications</li>
                                                <li>• <strong>Outcome:</strong> Same subject, same degree, graduate one year earlier</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">When to choose:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• University prestige doesn&apos;t significantly affect your career (true for most subjects)</li>
                                                <li>• Want to graduate and start working ASAP</li>
                                                <li>• Subject content matters more than institution brand</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Example:</strong> BBB gets direct entry to Engineering at Sheffield Hallam, Plymouth, or Huddersfield. Or foundation year at Manchester. Graduate outcomes for Engineering are similar (employers care about skills, not university). Direct entry saves £125k+ opportunity cost.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Option 4: HND/Foundation Degree → Top-Up</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Details:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Duration:</strong> 2 years HND + 1 year top-up = 3 years total</li>
                                                <li>• <strong>Cost:</strong> Same student loan total as 3-year degree</li>
                                                <li>• <strong>Entry:</strong> Lower requirements than degree direct entry</li>
                                                <li>• <strong>Outcome:</strong> Full bachelors degree after top-up year</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">When to choose:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Want vocational focus (HNDs are practical)</li>
                                                <li>• Can secure work placement during HND</li>
                                                <li>• Lower confidence with academic study</li>
                                                <li>• Option to stop at HND if degree unnecessary for career</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Advantage:</strong> Same time as 3-year degree, lower entry requirements, more flexible exit points, practical focus.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Option 5: Gap Year + Reapplication</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Details:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Duration:</strong> 1 year before reapplying</li>
                                                <li>• <strong>Cost:</strong> £0 (earn money during gap year)</li>
                                                <li>• <strong>Activities:</strong> Work, volunteer, retake A-levels, build portfolio/experience</li>
                                                <li>• <strong>Outcome:</strong> Stronger UCAS application + savings</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">When to choose:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Not yet ready for university emotionally</li>
                                                <li>• Want to save money for university costs</li>
                                                <li>• Can improve qualifications during gap year</li>
                                                <li>• Gain work experience relevant to degree</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Advantage:</strong> Same time delay as foundation year (1 year) but you earn £15k-£20k working full-time instead of accumulating £20k debt. Plus stronger application for next UCAS cycle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Subject-Specific Analysis */}
                        <section id="subject-specific-analysis" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Subject-Specific Foundation Year Analysis
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The value proposition of foundation years varies significantly by subject due to different graduate salary outcomes and university prestige sensitivity.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Engineering/Computer Science</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Graduate Outcomes:</p>
                                            <ul className="space-y-1">
                                                <li>• Starting salary: £28k-£35k</li>
                                                <li>• Mid-career: £40k-£55k</li>
                                                <li>• University prestige impact: Low-moderate</li>
                                                <li>• Skills University in tech hiring</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Foundation Year Assessment:</p>
                                            <ul className="space-y-1">
                                                <li>• <strong>Worth it if:</strong> Subject switch (no A-level maths/physics)</li>
                                                <li>• <strong>Not worth it if:</strong> Just for prestige upgrade</li>
                                                <li>• Portfolio/projects matter more than university</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Medicine/Dentistry</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Graduate Outcomes:</p>
                                            <ul className="space-y-1">
                                                <li>• Starting salary: £32k (FY1)</li>
                                                <li>• Mid-career: £50k-£80k</li>
                                                <li>• Peak: £100k-£150k (consultants)</li>
                                                <li>• University prestige: Minimal impact</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Foundation Year Assessment:</p>
                                            <ul className="space-y-1">
                                                <li>• <strong>Worth it if:</strong> Only route to medical school</li>
                                                <li>• <strong>Consider:</strong> Already long course (5-6 years), adding foundation makes it 6-7 years</li>
                                                <li>• High earnings mean you&apos;ll repay extra £30k-£40k</li>
                                                <li>• But £40k cost £250k lost earnings from delayed career start</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Business/Economics</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Graduate Outcomes:</p>
                                            <ul className="space-y-1">
                                                <li>• Starting salary: £24k-£32k</li>
                                                <li>• Mid-career: £35k-£55k (very wide range)</li>
                                                <li>• University prestige: High impact for consulting/finance</li>
                                                <li>• Moderate impact for general business</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Foundation Year Assessment:</p>
                                            <ul className="space-y-1">
                                                <li>• <strong>Worth it if:</strong> Targeting LSE/Warwick for consulting route</li>
                                                <li>• <strong>Not worth it if:</strong> General business careers (SME, management)</li>
                                                <li>• Wide outcome variance makes assessment difficult</li>
                                                <li>• Direct entry to decent university often better value</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Law</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Graduate Outcomes:</p>
                                            <ul className="space-y-1">
                                                <li>• Starting: £24k-£50k (massive range)</li>
                                                <li>• Magic circle: £50k starting</li>
                                                <li>• High street: £24k-£30k starting</li>
                                                <li>• University prestige: Critical for top firms</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Foundation Year Assessment:</p>
                                            <ul className="space-y-1">
                                                <li>• <strong>Worth it if:</strong> Only way to access Oxbridge/Durham/UCL (top firms care)</li>
                                                <li>• <strong>Not worth it if:</strong> Not targeting magic circle/commercial law</li>
                                                <li>• High street law doesn&apos;t care about university prestige</li>
                                                <li>• Caveat: Law requires GDL/LPC after degree (expensive), delays matter</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Teaching (Primary/Secondary)</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Graduate Outcomes:</p>
                                            <ul className="space-y-1">
                                                <li>• Starting salary: £30k (M1 pay scale)</li>
                                                <li>• Mid-career: £40k-£50k</li>
                                                <li>• Heads: £50k-£120k (but competitive)</li>
                                                <li>• University prestige: Zero impact</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Foundation Year Assessment:</p>
                                            <ul className="space-y-1">
                                                <li>• <strong>Rarely worth it</strong></li>
                                                <li>• Teaching salaries same regardless of university</li>
                                                <li>• Need PGCE after degree (another year + £10k debt)</li>
                                                <li>• Foundation → degree → PGCE = 5 years total vs 4 years direct entry route</li>
                                                <li>• Lost earnings (£30k) vastly exceed any benefit</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Creative Arts/Humanities</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Graduate Outcomes:</p>
                                            <ul className="space-y-1">
                                                <li>• Starting salary: £20k-£26k</li>
                                                <li>• Mid-career: £26k-£35k</li>
                                                <li>• University prestige: Minimal impact</li>
                                                <li>• Portfolio/network matter most</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Foundation Year Assessment:</p>
                                            <ul className="space-y-1">
                                                <li>• <strong>Hard to justify financially</strong></li>
                                                <li>• Low graduate premium (£50k-£100k lifetime)</li>
                                                <li>• Foundation opportunity cost (£125k) exceeds entire graduate premium</li>
                                                <li>• Unless essential for skill development, direct entry or alternative routes better</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Real Scenarios */}
                        <section id="real-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Foundation Year Student Scenarios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding how other students approached the foundation year decision helps clarify your own situation.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Foundation Year Success Story</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Amara, care leaver, no family academic support, achieved DDE A-levels
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Her situation:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• DDE A-levels didn&apos;t meet any direct-entry requirements for Pharmacy</li>
                                            <li>• Birmingham offered foundation year via widening participation program</li>
                                            <li>• Alternative was resitting A-levels (no family support for this) or not attending university</li>
                                            <li>• Wanted Pharmacy specifically due to career interest and stability</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Completed foundation year (58% average, needed 50%)</li>
                                            <li>• Progressed to Pharmacy degree</li>
                                            <li>• Graduated with 2:1</li>
                                            <li>• Now working as pharmacist earning £40k (rising to £50k mid-career)</li>
                                            <li>• Total debt: £95k (4-year route) vs £70k (if direct entry possible)</li>
                                            <li>• Will fully repay loan due to Pharmacy salaries (pays ~£15k extra total)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Foundation year was her only route to university and a professional career. The £15k extra loan cost + £125k opportunity cost is justified because alternative was no degree at all. Pharmacy career earns £800k-£1.2M more over lifetime than non-graduate work. Foundation year delivered massive value despite high cost.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: Questionable Foundation Year Decision</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> James, achieved BBB, wanted Business Studies at Manchester
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>His decision:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• BBB A-levels</li>
                                            <li>• Manchester Business School wanted AAB for direct entry</li>
                                            <li>• Offered foundation year route</li>
                                            <li>• Could have gotten direct entry to Business at Sheffield, Nottingham Trent, Birmingham City</li>
                                            <li>• Parents pressured him to attend &quot;prestigious&quot; university</li>
                                            <li>• Chose foundation year at Manchester</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Completed foundation year and degree (2:2 final classification)</li>
                                            <li>• Now working in retail management earning £32k</li>
                                            <li>• Started career age 22 vs friends who started age 21</li>
                                            <li>• Lost first graduate year earning (~£28k)</li>
                                            <li>• Employer didn&apos;t care Manchester vs Sheffield for retail management role</li>
                                            <li>• Total debt: £95k vs £70k (direct entry)</li>
                                            <li>• Will reach write-off, so extra debt costs £0 in repayments</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Foundation year cost him £28k lost earnings + one year of life, but added £0 to loan repayments (write-off trajectory). The Manchester prestige didn&apos;t affect his career outcome—retail management hiring doesn&apos;t prioritize university tier. Direct entry to decent university would have delivered identical career outcome one year earlier at lower opportunity cost.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Foundation Year Alternative Path</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Priya, wanted Engineering, took humanities A-levels (BBC)
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Her choices:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• BBC in History, English, Politics</li>
                                            <li>• Realized she wanted Engineering (late career decision)</li>
                                            <li>• No A-level Maths or Physics (required for Engineering)</li>
                                            <li>• <strong>Option A:</strong> Foundation year Engineering at Nottingham (4 years total)</li>
                                            <li>• <strong>Option B:</strong> Retake A-level Maths + Physics in one year, then apply (total: gap year + 3-year degree = 4 years)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>What she did:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Took gap year, worked part-time, earned £12k</li>
                                            <li>• Self-studied A-level Maths and Physics with online tutoring (£800 total)</li>
                                            <li>• Retook both in June, achieved AB</li>
                                            <li>• Applied with BBC + AB in Maths/Physics = direct entry to Sheffield Engineering</li>
                                            <li>• Total time: 4 years (same as foundation route)</li>
                                            <li>• Total debt: £70k (vs £95k foundation route)</li>
                                            <li>• Earnings: £12k from gap year work (vs £0 from foundation year)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Same time investment (4 years) but better financial outcome. Gap year route gave her £12k earnings, £25k less debt, and same degree outcome. Foundation year would have cost £37k more (£25k debt + £12k lost earnings). The gap year + retake strategy delivered superior value.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: Foundation Year Failure</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Tom, achieved CCD, attempted foundation year Computer Science
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>What happened:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• CCD A-levels, accepted to foundation year Computer Science</li>
                                            <li>• Struggled with foundation year workload (not actually easier than Year 1)</li>
                                            <li>• Achieved 38% average (needed 40% to progress)</li>
                                            <li>• Failed to progress to Year 1, dropped out</li>
                                            <li>• Left with £22k student loan debt and no qualification</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Aftermath:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• £22k debt with no degree</li>
                                            <li>• Working in retail earning £24k (below loan threshold, £0 repayments)</li>
                                            <li>• Debt will write off in 40 years, he&apos;ll likely pay £0-£5k total</li>
                                            <li>• Financial damage is minimal (low earnings = minimal repayment)</li>
                                            <li>• Emotional/confidence damage more significant than financial</li>
                                            <li>• Lost one year that could have been spent working/earning/trying alternative routes</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> The financial damage is limited (write-off protects him), but he lost a year and has debt with nothing to show. This illustrates the risk: foundation years aren&apos;t guaranteed progression. If you&apos;re choosing foundation year because you think it&apos;s easier, reconsider—the workload is similar to Year 1, just slightly less advanced.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Decision Framework */}
                        <section id="decision-framework" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Should You Do a Foundation Year?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Use this systematic framework to evaluate whether a foundation year makes sense for your specific circumstances.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 1: Assess Your Alternatives</h3>
                                    <div className="space-y-2 text-gray-700 text-sm">
                                        <p className="font-semibold text-gray-800">Ask yourself these questions in order:</p>
                                        <ol className="list-decimal ml-6 space-y-2 text-xs">
                                            <li>
                                                <strong>Can I get direct entry to ANY university for my desired subject?</strong>
                                                <p>If YES: Foundation year is optional. Consider whether the foundation route university is significantly better. If NO: Continue to question 2.</p>
                                            </li>
                                            <li>
                                                <strong>Would retaking 1-2 A-levels give me direct entry to my target universities?</strong>
                                                <p>If YES and it&apos;s only one subject: Retaking is almost always better value (£200 + 3-6 months vs £23k + 12 months). If NO or requires multiple A-levels: Continue to question 3.</p>
                                            </li>
                                            <li>
                                                <strong>Could an Access to HE Diploma get me to my target university?</strong>
                                                <p>If YES: Access is better value (free or £3,500 vs £23k). If NO (Russell Group, specific course requirements): Continue to question 4.</p>
                                            </li>
                                            <li>
                                                <strong>Is foundation year my only viable route to university?</strong>
                                                <p>If YES: Foundation year is justified. If NO: You have alternatives that likely offer better value.</p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 2: Calculate Your Specific Costs</h3>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Financial Cost Breakdown:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>Extra student loan debt:</strong> £23,000</li>
                                            <li>• <strong>Will this debt add to my repayments?</strong> Depends on career:
                                                <ul className="ml-6 mt-1 space-y-1">
                                                    <li>- Low-moderate earner (£25k-£35k): £0 extra repayment</li>
                                                    <li>- Borderline earner (£35k-£50k): £10k-£15k extra repayment</li>
                                                    <li>- High earner (£50k+): £30k-£40k extra repayment</li>
                                                </ul>
                                            </li>
                                            <li>• <strong>Lost first graduate year earnings:</strong> £28k-£35k gross</li>
                                            <li>• <strong>Total opportunity cost over lifetime:</strong> £125k-£265k</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 3: Evaluate University Prestige Premium</h3>
                                    <div className="space-y-2 text-gray-700 text-sm">
                                        <p><strong>Does the foundation year route give me access to significantly better university?</strong></p>
                                        <div className="bg-yellow-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-2">When prestige matters:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Law (magic circle firms prefer Oxbridge/Durham/LSE/UCL)</li>
                                                <li>• Management consulting (McKinsey/Bain/BCG heavily recruit from target universities)</li>
                                                <li>• Investment banking (bulge bracket firms prefer Russell Group + LSE/Imperial)</li>
                                                <li>• Academia (Russell Group PhD programs prefer Russell Group undergrads)</li>
                                            </ul>
                                            <p className="font-semibold text-gray-800 text-xs mt-2 mb-2">When prestige matters less:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Engineering (skills and experience matter more)</li>
                                                <li>• Computer Science (portfolio and ability matter more)</li>
                                                <li>• Teaching (salary identical regardless of university)</li>
                                                <li>• Nursing/healthcare (regulated profession, university irrelevant)</li>
                                                <li>• Most sciences (degree classification matters more)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 4: Make Your Decision</h3>
                                    <div className="space-y-3">
                                        <div className="bg-green-50 p-3 rounded border border-green-300">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Choose Foundation Year If:</p>
                                            <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                                <li>It&apos;s your only route to university (no direct entry options)</li>
                                                <li>Subject switching requiring prerequisites you lack</li>
                                                <li>Accessing Russell Group for careers where it genuinely matters (law, consulting)</li>
                                                <li>Mature student needing structured re-entry to education</li>
                                                <li>You&apos;ve systematically ruled out all cheaper alternatives</li>
                                            </ul>
                                        </div>

                                        <div className="bg-yellow-50 p-3 rounded border border-yellow-300">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Choose Alternative Route If:</p>
                                            <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                                <li>You can get direct entry somewhere (even if not first choice university)</li>
                                                <li>Retaking 1-2 A-levels would open direct entry options</li>
                                                <li>Access to HE Diploma accepted by target universities</li>
                                                <li>University prestige doesn&apos;t affect your career outcome</li>
                                                <li>The £125k-£265k opportunity cost exceeds any benefit from prestige upgrade</li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-50 p-3 rounded border border-blue-300">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Questions to Ask Universities Before Committing:</p>
                                            <ol className="list-decimal ml-6 text-gray-700 text-xs space-y-1">
                                                <li>What percentage of foundation students progress to Year 1? (Good: 70-85%, Poor: &lt;60%)</li>
                                                <li>What grade do I need to progress? (40%, 50%, 55%?)</li>
                                                <li>If I don&apos;t progress, what happens? (Do I keep my debt? Can I reapply?)</li>
                                                <li>Is progression guaranteed or conditional on Year 1 places available?</li>
                                                <li>Do I get the same degree certificate as direct-entry students? (Should be yes)</li>
                                                <li>What support exists for foundation students? (Study skills, tutoring, mentoring)</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Foundation years: The debt often doesn&apos;t matter, but the lost year always does
                            </h3>
                            <p className="text-gray-700 mb-4">
                                For ~70% of students, the foundation year&apos;s extra £23k debt adds £0 to total repayments due to 40-year write-off. But every graduate loses £125k-£265k in opportunity cost from delayed career start. Foundation years can be transformative when they&apos;re your only route to university or essential for subject switching. But if you have alternatives—direct entry elsewhere, A-level retakes, Access courses—those alternatives usually deliver better value. The prestige upgrade from foundation year at Russell Group rarely justifies £125k+ opportunity cost unless pursuing specific careers where university tier genuinely matters (law, consulting, finance, academia).
                            </p>
                            <p className="text-gray-700 font-semibold">
                                Systematically evaluate all alternatives before committing to the 4-year route.
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

export default FoundationYearLoanCosts;