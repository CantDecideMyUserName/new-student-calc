import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const FoundationYearLoanCosts: React.FC = () => {
    const tocItems = [
        { id: "what-is-foundation-year", title: "What is a Foundation Year?", level: 2 },
        { id: "four-vs-three-year", title: "4-Year vs 3-Year Degree Total Cost", level: 2 },
        { id: "foundation-year-value", title: "Foundation Year Value Analysis", level: 2 },
        { id: "alternative-pathways", title: "Alternative Pathways to University", level: 2 },
        { id: "loan-repayment-impact", title: "Loan Repayment Impact of Extra Year", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Foundation Year Loan Costs</span></li>
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

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    <div className="lg:flex-1 lg:min-w-0">
                        <section className="mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Foundation years (also called Year 0 or integrated foundation years) add an extra year to your degree, turning a 3-year undergraduate course into a 4-year program. This means an additional year of tuition fees, living costs, and crucially, student loan debt. Understanding whether this £20,000-£25,000 extra debt delivers value is essential before committing to a foundation year route.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Foundation years serve students who don't quite meet standard entry requirements but show potential for degree-level study. This guide examines the financial reality of foundation years, comparing 4-year total costs against 3-year degrees and alternative pathways. The question isn't whether foundation years are valuable—they absolutely can be—but whether they're the right financial decision for your specific circumstances.
                            </p>
                        </section>

                        <section id="what-is-foundation-year" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is a Foundation Year</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A foundation year is an undergraduate program designed to prepare students for degree-level study. It typically combines subject-specific content with study skills, academic writing, and core knowledge needed for your main degree.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Who Needs a Foundation Year?</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li><strong>Lower A-level grades:</strong> Typically BBB-CCC when the main degree requires AAB-ABB</li>
                                    <li><strong>Non-traditional qualifications:</strong> BTEC, Access courses, international qualifications</li>
                                    <li><strong>Subject switching:</strong>  Want to study engineering but took all humanities A-levels</li>
                                    <li><strong>Long gap since education:</strong> Mature students re-entering education after years away</li>
                                    <li><strong>Contextual admissions:</strong> Universities offering foundation years to students from disadvantaged backgrounds who show potential</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Foundation Year Structure:</h3>
                                <p className="text-gray-700 text-sm mb-2">Year 0 (Foundation):</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Introduction to subject fundamentals</li>
                                    <li>Academic skills development</li>
                                    <li>Math/science catch-up if required</li>
                                    <li>Progress to Year 1 conditional on passing (typically 40%-50% average)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3 mb-2">Years 1-3 (Main Degree):</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Standard undergraduate program</li>
                                    <li>Same degree classification as direct-entry students</li>
                                    <li>Same graduate prospects as 3-year route students</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Important:</strong> Foundation years are fully fundable by Student Finance England—you get tuition fee loans and maintenance loans for all four years. The extra year is treated identically to your three main degree years for loan purposes.
                                </p>
                            </div>
                        </section>

                        <section id="four-vs-three-year" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4-Year vs 3-Year Degree Total Cost</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The foundation year adds substantial debt. Let's compare the full financial picture:
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Total Debt Comparison (Outside London):</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 mb-3">3-Year Direct Entry Degree</p>
                                        <div className="text-gray-700 text-sm space-y-1">
                                            <p>Tuition fees: £9,250 × 3 = £27,750</p>
                                            <p>Maintenance loan: £10,227 × 3 = £30,681</p>
                                            <p className="pt-2 border-t border-gray-200 font-semibold">Total debt: £58,431</p>
                                            <p className="text-xs mt-2">Before interest accumulation during study</p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 mb-3">4-Year Foundation Route</p>
                                        <div className="text-gray-700 text-sm space-y-1">
                                            <p>Tuition fees: £9,250 × 4 = £37,000</p>
                                            <p>Maintenance loan: £10,227 × 4 = £40,908</p>
                                            <p className="pt-2 border-t border-gray-200 font-semibold">Total debt: £77,908</p>
                                            <p className="text-xs mt-2">Before interest accumulation during study</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-50 p-3 rounded mt-4">
                                    <p className="text-gray-700 text-sm">
                                        <strong>Extra debt from foundation year: £19,477</strong><br />
                                        This is before considering interest accumulation. With RPI-based interest during study, the foundation route graduate starts with approximately £22,000-£25,000 more debt than direct entry.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">But Wait—Does the Extra Debt Matter?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Under Plan 5 (post-2023 students), you repay 9% of income above £25,000 for 40 years, then the debt is written off. For most students, the foundation year's extra £22,000 debt never gets repaid:
                                </p>
                                <div className="bg-white p-3 rounded mt-2">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Scenario: Moderate Earner (£30k-£40k career)</p>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• 3-year route: Borrow £60k, repay ~£35k over 40 years, £25k written off</li>
                                        <li>• 4-year route: Borrow £80k, repay ~£35k over 40 years, £45k written off</li>
                                        <li>• <strong>Total repayment difference: £0</strong> (same 9% above threshold regardless)</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    The foundation year's extra debt only costs you more if you're a high earner who will fully repay the loan. If you're on track for write-off (true for approximately 75% of Plan 5 students), the extra £20k debt is financially irrelevant.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Real Cost: Lost Graduate Earnings</h3>
                                <p className="text-gray-700 text-sm">
                                    The foundation year's true financial cost isn't the extra debt—it's the delayed graduate entry. Starting your career at 22 instead of 21 means losing one year of graduate salary (£25,000-£35,000 gross). Over a 40-year career, this compounds through lost experience, delayed promotions, and fewer years of peak earnings. For most careers, this opportunity cost significantly exceeds the additional student loan repayment.
                                </p>
                            </div>
                        </section>

                        <section id="foundation-year-value" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Foundation Year Value Analysis</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Given the costs, when do foundation years make sense?
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Strong Case for Foundation Year:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li><strong>Only route to university:</strong> Your qualifications don't meet any direct-entry requirements. The alternative is no degree at all, not a 3-year degree.</li>
                                        <li><strong>Subject switching:</strong> You want to study engineering but have no A-level math/physics. Access courses or resitting A-levels would also cost time and money.</li>
                                        <li><strong>Mature student confidence:</strong> You've been out of education for 10+ years. The foundation year provides structured re-entry and boosts confidence.</li>
                                        <li><strong>Contextual offers from strong universities:</strong> The foundation year is your pathway to a Russell Group university that wouldn't admit you directly. The prestige gain may offset the extra year.</li>
                                        <li><strong>Guaranteed progression:</strong> Some foundation years guarantee progression to Year 1 with 40%-50% pass rates, effectively giving you a conditional offer you can actually achieve.</li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Questionable Case:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li><strong>Marginal qualification difference:</strong> You have BBB but the direct-entry requirement is ABB. Consider retaking one A-level or finding universities with BBB entry—both cost less than a foundation year.</li>
                                        <li><strong>Subject isn't specialized:</strong> Foundation year in Business Studies when you could get direct entry to Business at a different university. The university tier difference rarely justifies the extra year.</li>
                                        <li><strong>Poor projected earnings:</strong> If you're studying a subject with moderate graduate salaries (£25k-£30k), starting a year later costs you more in lost earnings than any benefit from the degree upgrade.</li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Weak Case:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li><strong>You think foundation years are "easier":</strong> Foundation years have lower entry requirements but similar workloads to Year 1. If you're not committed, you'll struggle.</li>
                                        <li><strong>Parental pressure for prestigious university:</strong> Taking a foundation year route to LSE/UCL when you could do direct entry at Sheffield/Nottingham often isn't worth the extra year for most careers.</li>
                                        <li><strong>Avoiding resits:</strong> "I'll do a foundation year instead of retaking one A-level." Retaking takes 3-6 months and costs £200-£500. Foundation year takes 12 months and costs £20,000 in extra debt plus lost graduate earnings.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Foundation Year Success Rates:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Research foundation year progression rates before committing. Good programs have 70%-85% progression to Year 1. Poor programs drop below 60%. Ask universities:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>What percentage of foundation students progress to Year 1?</li>
                                    <li>What grade do I need to progress? (40%, 50%, 55%?)</li>
                                    <li>If I don't progress, what happens to my loans? (You still owe them with no degree)</li>
                                    <li>Do Year 1 entry requirements change for foundation students? (Some universities raise them)</li>
                                </ul>
                            </div>
                        </section>

                        <section id="alternative-pathways" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Pathways to University</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Before committing to a foundation year, consider these alternatives:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Access to HE Diploma (1 Year)</h3>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Cost:</strong> £0-£3,500 (often free for eligible students)</p>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Time:</strong> 1 year part-time or full-time</p>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Outcome:</strong> Qualifies you for direct university entry</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Pros:</strong> Much cheaper than foundation year; widely accepted by universities; specifically designed for mature students or non-traditional qualifications</li>
                                        <li><strong>Cons:</strong> Not all universities accept it (particularly Russell Group); still takes a year</li>
                                        <li><strong>Best for:</strong> Mature students (21+), people with no A-levels, career changers</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">A-Level Retakes (3-6 Months)</h3>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Cost:</strong> £100-£200 per A-level as private candidate</p>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Time:</strong> January exam session (3 months) or summer (6 months)</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Pros:</strong> Very cheap; quick; improves specific weak subjects</li>
                                        <li><strong>Cons:</strong> Requires self-study discipline; only works if you're close to requirements</li>
                                        <li><strong>Best for:</strong> Students with BBC who need ABB; one subject dragging down overall grades</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Different University with Lower Requirements</h3>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Cost:</strong> £0 (apply through same UCAS process)</p>
                                    <p className="text-gray-700 text-sm mb-2"><strong>Time:</strong> No delay</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Pros:</strong> No extra year, no extra debt, same degree subject</li>
                                        <li><strong>Cons:</strong> May be "lower ranked" university (though this often doesn't matter for graduate outcomes)</li>
                                        <li><strong>Best for:</strong> Students who can get direct entry somewhere, even if not their first choice</li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Example:</strong> BBB qualifications won't get you Engineering at Imperial (AAA*) but will get you direct entry to Engineering at Sheffield Hallam, Huddersfield, or Portsmouth. Unless you're targeting careers where university prestige genuinely matters (rare in engineering), the 3-year route saves £20k debt and a year of life.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="loan-repayment-impact" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loan Repayment Impact of Extra Year</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Let's model the actual repayment implications using realistic scenarios:
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Moderate Earner (Teacher, £28k-£40k)</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">3-Year Route (Direct Entry)</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>Total debt at graduation: £58k</li>
                                            <li>Graduate at 21, start teaching</li>
                                            <li>Starting salary: £30k</li>
                                            <li>Annual repayment: £450 (9% above £25k)</li>
                                            <li>Outcome: Loan written off after 40 years</li>
                                            <li>Total paid: ~£40k</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">4-Year Route (Foundation)</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>Total debt at graduation: £78k</li>
                                            <li>Graduate at 22, start teaching</li>
                                            <li>Starting salary: £30k</li>
                                            <li>Annual repayment: £450 (9% above £25k)</li>
                                            <li>Outcome: Loan written off after 40 years</li>
                                            <li>Total paid: ~£40k</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Student loan repayment difference: £0.</strong> Both pay the same percentage of salary above the threshold. The extra £20k debt gets written off. However, the foundation route student loses one year of teacher salary (~£30k gross), which is the real cost.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: High Earner (Software Engineer, £35k-£70k)</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">3-Year Route</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>Total debt: £58k</li>
                                            <li>Starting salary: £35k</li>
                                            <li>Salary growth: 7% annually</li>
                                            <li>Outcome: Full repayment in year 14</li>
                                            <li>Total paid: ~£75k</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">4-Year Route</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>Total debt: £78k</li>
                                            <li>Starting salary: £35k</li>
                                            <li>Salary growth: 7% annually</li>
                                            <li>Outcome: Full repayment in year 18</li>
                                            <li>Total paid: ~£97k</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Student loan repayment difference: ~£22k more for foundation route.</strong> High earners pay back the extra debt plus accumulated interest. Additionally, starting career one year later means losing one year of £35k+ salary and delayed progression to senior roles (£60k-£70k+).
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Use Our Calculator:</strong> Model your specific scenario using our <Link href="/" className="text-blue-600 underline hover:text-blue-800">Student Loan Calculator</Link>. Input your expected career salary trajectory to see whether the foundation year's extra debt affects your total repayment. For most students, it doesn't—but the lost graduate earnings always do.
                                </p>
                            </div>
                        </section>

                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Foundation years can be transformative—but alternatives often deliver better value
                            </h3>
                            <p className="text-gray-700">
                                Before committing to the 4-year route, exhaust all 3-year options. The foundation year's true cost is the lost graduate earnings, not the extra £20k debt (which most students never fully repay anyway).
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

export default FoundationYearLoanCosts;
