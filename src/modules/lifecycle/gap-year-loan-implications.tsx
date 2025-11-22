import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const GapYearLoanImplications: React.FC = () => {
    const tocItems = [
        { id: "deferring-entry", title: "Deferring Entry: The Mechanics", level: 2 },
        { id: "loan-timing", title: "Loan Star&quot;t Date and Interes&quot;t Implications", level: 2 },
        { id: "work-experience-value", title: "Gap Year Work Experience vs Loan Cost", level: 2 },
        { id: "savings-strategy", title: "Strategic Savings During Gap Year", level: 2 },
        { id: "multiple-gap-years", title: "Multiple Gap Years and Loan Eligibility", level: 2 },
        { id: "decision-framework", title: "Gap Year Decision Framework", level: 2 },
    ];

    return (
        <div className="bg-white">
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">Studen&quot;t Loan Lifecycle</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Gap Year Loan Implications</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Gap Year Loan Implications: Deferring Entry and Studen&quot;t Finance
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding how gap years affec&quot;t studen&quot;t loan timing, work experience value, and strategic financial planning
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
                                Taking a gap year before university is increasingly common—approximately 7% of UK students defer entry for a year. The reasons vary: travel, work experience, maturity, clarity on career goals, or financial preparation. Understanding how a gap year affects your studen&quot;t loan journey helps you make an informed decision abou&quot;t timing your university entry.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The critical insight: gap years don&apos;&quot;t reduce your total studen&quot;t loan debt, bu&quot;t they can significantly affec&quot;t your timing, interes&quot;t accumulation, and financial readiness. For some students, a gap year provides enormous value through work experience and savings. For others, i&quot;t represents a year of los&quot;t earning potential after graduation.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide breaks down exactly how gap years interac&quot;t with studen&quot;t loans, helping you decide whether deferring entry makes financial sense for your situation.
                            </p>
                        </section>

                        <section id="deferring-entry" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deferring Entry: The Mechanics</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you defer university entry, you&apos;re pushing back your entire loan timeline by one year. Your loan write-off date moves forward by exactly one year, which has minimal practical impac&quot;t for mos&quot;t students under Plan 5 (40-year write-off from firs&quot;t April after graduation).
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How Deferral Affects Your Loan Timeline:</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">Direc&quot;t Entry (No Gap Year)</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Star&quot;t university: September 2024</li>
                                            <li>• Graduate: June 2027</li>
                                            <li>• Firs&quot;t repayment: April 2028</li>
                                            <li>• Loan write-off: April 2068 (40 years)</li>
                                            <li>• Age a&quot;t write-off: ~58 years old</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">After Gap Year (Defer 1 Year)</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Star&quot;t university: September 2025</li>
                                            <li>• Graduate: June 2028</li>
                                            <li>• Firs&quot;t repayment: April 2029</li>
                                            <li>• Loan write-off: April 2069 (40 years)</li>
                                            <li>• Age a&quot;t write-off: ~59 years old</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Impact:</strong> You star&quot;t earning (and repaying) one year later, bu&quot;t your write-off date also moves one year later. For mos&quot;t students who won&apos;&quot;t fully repay anyway, this timing difference is financially neutral.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Bu&quot;t Consider This:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    While the loan timeline shifts by one year, your <strong>earning timeline</strong> also shifts. Starting your career a&quot;t 22 instead of 21 means:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>One fewer year of graduate salary (estimated loss: £25,000-£35,000 gross earnings)</li>
                                    <li>Delayed career progression milestones (promotions, experience, networking)</li>
                                    <li>Later peak earning years (significan&quot;t for high earners)</li>
                                    <li>Less time in pension accumulation before retirement</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    This matters primarily if you expec&quot;t to be a high earner who will fully repay your loan. For moderate earners reaching write-off, the delayed star&quot;t has minimal impac&quot;t on total repayment.
                                </p>
                            </div>
                        </section>

                        <section id="loan-timing" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Loan Star&quot;t Date and Interes&quot;t Implications</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Studen&quot;t loan interes&quot;t starts accruing from the momen&quot;t funds are released to you—typically the firs&quot;t term of your firs&quot;t year. If you defer entry by one year, you delay interes&quot;t accumulation by one year. However, this doesn&apos;&quot;t mean you avoid interest; you jus&quot;t shif&quot;t when i&quot;t begins.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Interes&quot;t During Gap Year: Zero</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Since you haven&apos;&quot;t taken ou&quot;t a studen&quot;t loan ye&quot;t during your gap year, no interes&quot;t accumulates. This seems obvious bu&quot;t creates an interesting scenario:
                                </p>
                                <div className="bg-white p-3 rounded mt-2">
                                    <p className="font-semibold text-gray-800 text-sm mb-1">Example: Direc&quot;t Entry vs Gap Year Interest</p>
                                    <p className="text-gray-700 text-sm mb-2">Assume both students graduate with £45,000 deb&quot;t and earn £30,000 upon graduation:</p>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• <strong>Direc&quot;t Entry Student:</strong> Has owed money since Sep&quot;t 2024; 3 years of interes&quot;t during study (~£4,000-£6,000 accrued during university)</li>
                                        <li>• <strong>Gap Year Student:</strong> Has owed money since Sep&quot;t 2025; 3 years of interes&quot;t during study (~£4,000-£6,000 accrued during university)</li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        Both accumulate the same interes&quot;t during their respective study periods. The gap year studen&quot;t doesn&apos;&quot;t avoid interest—they jus&quot;t delay when i&quot;t starts.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Real Interes&quot;t Consideration: Total Interes&quot;t Over Life of Loan</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Wha&quot;t matters more is total interes&quot;t accumulated over 40 years:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>If you&apos;ll fully repay your loan, the gap year studen&quot;t pays approximately the same total interes&quot;t (starts later bu&quot;t finishes later)</li>
                                    <li>If you&apos;ll reach write-off, both students pay similar total amounts—9% above threshold for their working years</li>
                                    <li>The only scenario where timing significantly matters is if you&apos;re close to the full repaymen&quot;t boundary—starting earlier migh&quot;t mean paying off your loan in year 17 instead of year 18, saving a year of interest</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Bottom Line:</strong> Interes&quot;t timing from gap year deferral is financially neutral for 95% of students. I&quot;t becomes relevan&quot;t only if you&apos;re in the narrow band of high earners who will fully repay bu&quot;t are on the margin of the repaymen&quot;t timeline.
                                </p>
                            </div>
                        </section>

                        <section id="work-experience-value" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gap Year Work Experience vs Loan Cost</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The mos&quot;t compelling reason for a gap year is gaining meaningful work experience. Bu&quot;t does the career benefi&quot;t justify delaying graduation by one year?
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">High-Value Gap Year Work Experience:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Placement-year equivalen&quot;t work:</strong> 12 months in your targe&quot;t industry (e.g., software engineering intern, marketing assistant, research assistant). This often leads to £3,000-£5,000 higher graduate starting salaries and significantly better employmen&quot;t prospects.
                                    </li>
                                    <li>
                                        <strong>Building professional networks:</strong> Particularly valuable in competitive fields like law, journalism, architecture, or creative industries where contacts matter.
                                    </li>
                                    <li>
                                        <strong>Skill development:</strong> Learning in-demand technical skills (coding, design software, languages) tha&quot;t make you more employable and potentially increase starting salary £2,000-£4,000.
                                    </li>
                                    <li>
                                        <strong>Career clarity:</strong> Discovering wha&quot;t you don&apos;&quot;t wan&quot;t to do before committing to a 3-year degree. This prevents expensive course changes or dropouts.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Low-Value Gap Year Work Experience:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Unrelated minimum-wage work:</strong> Working retail or hospitality for £10/hour doesn&apos;&quot;t meaningfully improve graduate employmen&quot;t prospects or starting salary. You&apos;d earn similar amounts through university part-time work.
                                    </li>
                                    <li>
                                        <strong>Extended &quot;finding yourself&quot; travel:</strong> While personally enriching, 6-12 months of backpacking rarely translates to career advantage unless you&apos;re studying travel-related subjects or developing language skills.
                                    </li>
                                    <li>
                                        <strong>Unpaid internships with no substantive responsibility:</strong> &quot;Internships&quot; tha&quot;t are essentially coffee-running add little to your CV and cos&quot;t you financially.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Calculating the Value Trade-Off:</h3>
                                <p className="text-gray-700 text-sm mb-2">Consider this equation:</p>
                                <div className="bg-white p-3 rounded">
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Cos&quot;t of Gap Year:</strong> One year of delayed graduate earnings (£25,000-£35,000 gross) + one year delayed career progression
                                    </p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Benefi&quot;t of Gap Year:</strong> Higher starting salary + better employmen&quot;t prospects + career clarity + personal development
                                    </p>
                                    <p className="text-gray-700 text-sm mt-3">
                                        <strong>Break-even analysis:</strong> If your gap year work experience increases your graduate starting salary by £3,000-£5,000 and improves employmen&quot;t probability, i&quot;t likely pays for itself within 3-5 years. If i&quot;t doesn&apos;&quot;t affec&quot;t your graduate prospects, you&apos;ve los&quot;t £25,000-£35,000 in lifetime earnings.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Reality Check:</strong> Mos&quot;t gap year work experience falls somewhere in between. I&quot;t provides maturity and life skills bu&quot;t limited direc&quot;t career boost. The exception: internships or work placements in your targe&quot;t industry, particularly in competitive fields, can be extremely valuable.
                                </p>
                            </div>
                        </section>

                        <section id="savings-strategy" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Savings During Gap Year</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Some students take gap years specifically to work full-time and save money before university. Does this reduce your studen&quot;t loan burden?
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Gap Year Savings Potential:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Working full-time a&quot;t minimum wage (£11.44/hour for 18-20 year-olds, £12.21 for 21+):
                                </p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Annual gross: ~£19,000-£22,000 (37.5 hours/week)</li>
                                    <li>• After tax/NI: ~£17,500-£20,000</li>
                                    <li>• Living a&quot;t home with minimal expenses: Could save £10,000-£15,000</li>
                                    <li>• Renting/independent: Could save £3,000-£6,000</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How to Use Gap Year Savings:</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Option 1: Reduce Maintenance Loan Borrowing</p>
                                        <p className="text-gray-700 text-sm">
                                            If you save £12,000 during your gap year, you could take £4,000 less maintenance loan per year (living on savings instead). This reduces your total deb&quot;t by £12,000, which matters if you&apos;ll fully repay your loan. For moderate earners reaching write-off, i&quot;t makes little difference to total repayment.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Option 2: Emergency Fund During University</p>
                                        <p className="text-gray-700 text-sm">
                                            Having £10,000-£15,000 in savings means you can avoid credi&quot;t card debt, overdrafts, and private loans during university. These have higher interes&quot;t rates than studen&quot;t loans. Gap year savings ac&quot;t as a buffer for unexpected costs or reduced part-time work during exam periods.
                                        </p>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">Option 3: Quality of Life During Studies</p>
                                        <p className="text-gray-700 text-sm">
                                            Using gap year savings to reduce part-time work hours during term means better grades, more time for extracurriculars, and potentially better graduate outcomes. The indirec&quot;t benefi&quot;t (higher degree classification leading to better starting salary) may outweigh the direc&quot;t savings benefit.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Parental Contribution Alternative:</h3>
                                <p className="text-gray-700 text-sm">
                                    If your parents can&apos;&quot;t (or won&apos;t) provide the expected contribution flagged by the maintenance loan means test, a gap year earning £15,000 effectively substitutes for three years of £5,000 annual parental support. This is particularly valuable for students from moderate-income families (£40,000-£60,000 household income) who receive reduced maintenance loans bu&quot;t whose parents can&apos;&quot;t bridge the gap.
                                </p>
                            </div>
                        </section>

                        <section id="multiple-gap-years" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Multiple Gap Years and Loan Eligibility</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Wha&quot;t if you take two or more gap years? Studen&quot;t Finance England imposes no formal limi&quot;t on deferral duration, bu&quot;t practical considerations arise:
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Two+ Gap Years: Compounding Costs</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Los&quot;t earning years multiply:</strong> Two gap years means entering graduate employmen&quot;t two years later, losing £50,000-£70,000 in gross lifetime earnings compared to direc&quot;t entry.
                                    </li>
                                    <li>
                                        <strong>Career progression delays:</strong> Starting your career a&quot;t 23 instead of 21 means reaching senior positions (and peak earnings) two years later, compounding the lifetime earnings impact.
                                    </li>
                                    <li>
                                        <strong>Contextual qualifications:</strong> School qualifications are valid for university applications indefinitely, bu&quot;t some competitive courses prefer recen&quot;t qualifications (medicine, sciences with lab components).
                                    </li>
                                    <li>
                                        <strong>Maturity gaps:</strong> Starting university a&quot;t 21-22 when mos&quot;t peers are 18-19 can affec&quot;t social integration, though mature students generally achieve better academic results.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Multiple Gap Years Make Sense:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>You need time to improve qualifications for competitive courses (retaking A-levels, doing Access courses)</li>
                                    <li>you&apos;re gaining truly exceptional experience (starting a business, significan&quot;t professional achievemen&quot;t in your field)</li>
                                    <li>you&apos;re dealing with health, family, or personal circumstances tha&quot;t make university inadvisable in the shor&quot;t term</li>
                                    <li>you&apos;re establishing residency for home fee status (international students considering this should verify specific requirements)</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Warning:</strong> Taking gap years &quot;to earn money for university&quot; beyond one year rarely makes financial sense. The los&quot;t graduate earnings from delayed entry outweigh savings accumulated. If you need two years to save enough, you likely can&apos;&quot;t afford university withou&quot;t studen&quot;t loans anyway—which are designed specifically to solve this problem.
                                </p>
                            </div>
                        </section>

                        <section id="decision-framework" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gap Year Decision Framework</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s a practical framework for deciding whether a gap year makes sense given studen&quot;t loan implications:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Strong Case for Gap Year:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>You have a specific, valuable work placemen&quot;t or internship opportunity in your targe&quot;t industry</li>
                                        <li>You need career clarity and have concrete plans to explore differen&quot;t fields during the year</li>
                                        <li>You can save £10,000+ while living a&quot;t home, reducing your need for maintenance loans</li>
                                        <li>Your degree subjec&quot;t values work experience (business, engineering with placements, creative industries)</li>
                                        <li>you&apos;ll develop in-demand skills tha&quot;t demonstrably increase graduate starting salary</li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Neutral Case (Personal Decision):</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>You wan&quot;t to travel or have personal developmen&quot;t experiences (financially neutral in loan terms bu&quot;t valuable personally)</li>
                                        <li>you&apos;ll work bu&quot;t no&quot;t in a career-relevan&quot;t role (neither helps nor hurts financially)</li>
                                        <li>you&apos;re unsure abou&quot;t university bu&quot;t no&quot;t actively using the gap year to decide</li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Weak Case for Gap Year:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>you&apos;re &quot;no&quot;t ready&quot; for university bu&quot;t have no specific plan for the gap year</li>
                                        <li>You think saving £5,000-£8,000 will meaningfully reduce loan burden (i&quot;t won&apos;&quot;t unless you&apos;re a definite full repayer)</li>
                                        <li>you&apos;re deferring due to fear or uncertainty rather than pursuing specific opportunities</li>
                                        <li>you&apos;re in a career track where earlier entry means faster progression (finance, consulting, tech where youth is an advantage)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Financial Calculation:</strong> Use our <Link href="/" className="text-blue-600 underline hover:text-blue-800">Studen&quot;t Loan Calculator</Link> to model:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm">
                                    <li>Scenario 1: Direc&quot;t entry, graduate a&quot;t 21, star&quot;t £28k salary</li>
                                    <li>Scenario 2: Gap year, graduate a&quot;t 22, star&quot;t £30k salary (if gap year improves prospects)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    See which scenario results in lower total repaymen&quot;t and faster loan clearing (if applicable). Remember tha&quot;t for mos&quot;t moderate earners, the loan impac&quot;t is identical—both reach write-off after paying similar total amounts.
                                </p>
                            </div>
                        </section>

                        <section className="text-center py-8 border-&quot;t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                A gap year can be life-changing—bu&quot;t understand the financial trade-offs
                            </h3>
                            <p className="text-gray-700">
                                The righ&quot;t gap year adds enormous value through experience, clarity, and skills. The wrong gap year costs a year of graduate earnings with minimal benefit. Make your decision based on specific opportunities, no&quot;t vague aspirations.
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

export default GapYearLoanImplications;
