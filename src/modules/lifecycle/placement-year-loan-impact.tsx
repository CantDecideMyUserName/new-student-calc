import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const PlacementYearLoanImpact: React.FC = () => {
    const tocItems = [
        { id: "placement-year-overview", title: "Understanding Placement Years", level: 2 },
        { id: "financial-structure", title: "Placement Year Financial Structure", level: 2 },
        { id: "reduced-tuition", title: "Reduced Tuition Fee Advantage", level: 2 },
        { id: "earning-analysis", title: "Earning While Still a Student", level: 2 },
        { id: "total-degree-cost", title: "Impact on Total Degree Cost", level: 2 },
        { id: "loan-decisions", title: "Should You Take Maintenance Loan on Placement?", level: 2 },
        { id: "career-benefits", title: "Career Benefits Beyond Finances", level: 2 },
        { id: "securing-placement", title: "Finding and Securing Placements", level: 2 },
        { id: "financial-management", title: "Managing Money During Placement Year", level: 2 },
        { id: "real-scenarios", title: "Real Placement Year Financial Outcomes", level: 2 },
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
                                    Placement Year Loan Impact
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Placement Year Student Loan Impact: Working While Studying
                    </h1>
                    <p className="text-xl text-gray-600">
                        Reduced tuition fees, earning during placement, and loan accumulation for sandwich year students
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
                                Placement years (also called sandwich years or industrial placements) are optional work placements typically between Year 2 and Year 3 of your degree, extending your course from 3 years to 4 years total. During this year, you work full-time for a company in a role relevant to your degree, earning a salary (typically £16,000-£22,000) while maintaining your student status. Your tuition fees drop dramatically to £1,850 (20% of standard rate), and critically, you pay zero student loan repayments despite earning above the £25,000 threshold because you&apos;re still classified as a student.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This creates a unique financial situation: you&apos;re earning £16k-£22k gross (approximately £1,250-£1,700 net per month after tax and National Insurance), paying only £1,850 in tuition, and accumulating minimal additional student loan debt. Many placement students save £5,000-£10,000 during their placement year, use this to reduce final year borrowing, and graduate with less total debt than 3-year direct students. Beyond finances, placements dramatically improve graduate employment outcomes—students with placement experience have 15-20% higher starting salaries and significantly better job offer rates.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide breaks down the complete financial picture of placement years: how reduced tuition works, whether to take maintenance loans during placement, the career value proposition, and real student financial outcomes. If you&apos;re considering whether to do a placement year, understanding the financial advantages helps you make an informed decision.
                            </p>
                        </section>

                        {/* Placement Year Overview */}
                        <section id="placement-year-overview" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Understanding Placement Years
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Placement years are structured work experiences integrated into degree programs, most commonly in STEM subjects (Engineering, Computer Science, Sciences) but increasingly available across business, languages, and social sciences.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Qualifies as a Placement Year:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Full-time employment (typically 9-12 months):</strong> You work standard 35-40 hour weeks as a regular employee, not as a student on work experience.
                                    </li>
                                    <li>
                                        <strong>Relevant to your degree:</strong> Engineering students work as engineering interns, Computer Science students as software developers, Business students in business analyst roles.
                                    </li>
                                    <li>
                                        <strong>University-approved:</strong> Your university must approve the placement as meeting academic requirements. Most universities have placement offices that vet employers and roles.
                                    </li>
                                    <li>
                                        <strong>Assessed for credit:</strong> You typically submit reports, presentations, or reflective portfolios. The placement year counts toward your degree but usually doesn&apos;t affect your final classification (pass/fail only).
                                    </li>
                                    <li>
                                        <strong>Maintains student status:</strong> Throughout the placement, you remain enrolled at your university as a student, which has significant financial implications.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Typical Placement Year Timeline:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year 1 (September - June):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Standard first year, decide whether to pursue placement</li>
                                            <li>• Attend placement workshops and application training</li>
                                            <li>• Begin researching companies that offer placements</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year 2 (September - December):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Active application period (September-November peak season)</li>
                                            <li>• Submit applications, attend interviews (October-December)</li>
                                            <li>• Accept placement offer (usually by December-January)</li>
                                            <li>• Notify university of placement plans</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year 2 (January - June):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Complete second year exams and coursework</li>
                                            <li>• Make arrangements for placement (accommodation, transport)</li>
                                            <li>• Apply for placement year tuition fee loan (£1,850)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Placement Year (July/September - August):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Work full-time at placement company</li>
                                            <li>• Earn salary (£16k-£22k typical)</li>
                                            <li>• Complete university-required reports/assessments</li>
                                            <li>• University visit/assessment (usually 1-2 times)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Year 3 (Final Year - September - June):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Return to university for final year</li>
                                            <li>• Often have job offer from placement company or leverage experience for applications</li>
                                            <li>• Graduate one year later than 3-year students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Subjects Where Placements Are Common:</h3>
                                <div className="grid md:grid-cols-2 gap-3 text-xs">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">Highly Common (50-70% take placements):</p>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Engineering (all disciplines)</li>
                                            <li>• Computer Science</li>
                                            <li>• Business/Management</li>
                                            <li>• Chemistry</li>
                                            <li>• Physics</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 mb-2">Less Common but Available:</p>
                                        <ul className="text-gray-700 space-y-1">
                                            <li>• Mathematics</li>
                                            <li>• Modern Languages</li>
                                            <li>• Geography</li>
                                            <li>• Economics</li>
                                            <li>• Biology</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Placement vs Internship vs Gap Year Work:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Placement year:</strong> Integrated into degree, reduced tuition (£1,850), maintains student status, counts toward degree, university-approved role.</p>
                                    <p><strong>Summer internship:</strong> 10-12 weeks during summer holidays, full tuition still applies for main year, not formally part of degree structure.</p>
                                    <p><strong>Gap year work:</strong> Working between A-levels and university or taking year out mid-degree. Not part of degree, no tuition fees, lose student status and benefits.</p>
                                </div>
                            </div>
                        </section>

                        {/* Financial Structure */}
                        <section id="financial-structure" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Placement Year Financial Structure
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The placement year&apos;s unique financial structure—reduced tuition, salary income, maintained student status—creates significant financial advantages over standard academic years.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Complete Financial Breakdown:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Component</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Standard Year</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Placement Year</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Difference</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Tuition Fees</td>
                                                <td className="px-3 py-2 border-b text-xs">£9,250</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,850</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">-£7,400</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Tuition Fee Loan</td>
                                                <td className="px-3 py-2 border-b text-xs">£9,250</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,850</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">-£7,400 debt</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Maintenance Loan (Optional)</td>
                                                <td className="px-3 py-2 border-b text-xs">£10,227</td>
                                                <td className="px-3 py-2 border-b text-xs">£10,227 (but most decline)</td>
                                                <td className="px-3 py-2 border-b text-xs">Same if taken</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Income from Work</td>
                                                <td className="px-3 py-2 border-b text-xs">£0 (full-time study)</td>
                                                <td className="px-3 py-2 border-b text-xs">£16k-£22k gross</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold text-green-600">+£16k-£22k</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Student Loan Repayments</td>
                                                <td className="px-3 py-2 border-b text-xs">£0 (student status)</td>
                                                <td className="px-3 py-2 border-b text-xs">£0 (still student!)</td>
                                                <td className="px-3 py-2 border-b text-xs">Same</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Tax & NI on Earnings</td>
                                                <td className="px-3 py-2 border-b text-xs">£0</td>
                                                <td className="px-3 py-2 border-b text-xs">~£2k-£3k</td>
                                                <td className="px-3 py-2 border-b text-xs text-red-600">-£2k-£3k</td>
                                            </tr>
                                            <tr className="font-semibold">
                                                <td className="px-3 py-2 border-b text-xs">Net Financial Position</td>
                                                <td className="px-3 py-2 border-b text-xs">-£19,477 (loans borrowed)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£13k-£18k (earnings - tax)</td>
                                                <td className="px-3 py-2 border-b text-xs text-green-600">+£32k-£37k better!</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Critical insight:</strong> The placement year transforms you from net borrower (-£19k standard year) to net earner (+£13k-£18k), a swing of £32k-£37k. This assumes you decline maintenance loan during placement since your salary covers living costs.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why No Student Loan Repayments During Placement?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Even though you&apos;re earning £16k-£22k (potentially above the £25k repayment threshold for Plan 5), you pay zero student loan repayments during placement year because:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>You remain enrolled as a student at your university</li>
                                    <li>Student loan repayments only begin the April after you finish your course</li>
                                    <li>Placement year is formally part of your course, so you haven&apos;t finished yet</li>
                                    <li>Your employer doesn&apos;t deduct student loan repayments via PAYE</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Example:</strong> Placement student earning £20k pays income tax (~£1,488/year) and National Insurance (~£870/year) but zero student loan deductions. A graduate earning £20k would pay zero student loan (below £25k threshold). So placement students are in an even better position than if they were graduates earning the same amount.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Does Placement Year Count Against Funding Entitlement?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Yes, but this is expected and accounted for.</strong> Your funding entitlement is &quot;length of course + 1 year.&quot;
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                    <p className="text-gray-700 text-xs mb-2">Example: 3-year BSc Computer Science with placement becomes 4-year course</p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Length of course: 4 years</li>
                                        <li>• Funding entitlement: 4 + 1 = 5 years</li>
                                        <li>• Years used: 4 (including placement year)</li>
                                        <li>• Remaining: 1 year spare</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">
                                    The placement year counts as one of your funded years, but since it&apos;s part of your degree structure, this is normal. You still have one spare year of funding left if you needed to repeat a year or change course.
                                </p>
                            </div>
                        </section>

                        {/* Reduced Tuition */}
                        <section id="reduced-tuition" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Reduced Tuition Fee Advantage
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The £1,850 placement year tuition fee (exactly 20% of the standard £9,250) is one of the placement year&apos;s biggest financial benefits, saving you £7,400 in tuition debt for that year.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why Placement Tuition is Reduced:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>You&apos;re not receiving teaching:</strong> During placement, you&apos;re working full-time at a company. The university isn&apos;t providing lectures, seminars, or labs. Their only involvement is placement approval, occasional visits, and marking your placement reports.
                                    </li>
                                    <li>
                                        <strong>Government regulation:</strong> The Office for Students caps placement year fees at 20% of full-time tuition. This applies to all UK universities—it&apos;s not optional or university-specific.
                                    </li>
                                    <li>
                                        <strong>Fairness principle:</strong> You shouldn&apos;t pay full tuition fees when you&apos;re not receiving full-time teaching. The £1,850 covers administrative costs (insurance, placement coordination, assessment).
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Tuition Fee Loan for Placement Year:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    You apply for placement year tuition fee loan separately, once you&apos;ve secured your placement:
                                </p>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Application Process:</p>
                                        <ol className="list-decimal ml-4 text-gray-700 text-xs space-y-1">
                                            <li>Secure placement and notify your university (usually January-March of Year 2)</li>
                                            <li>University confirms your placement year enrollment to Student Finance England</li>
                                            <li>Log into Student Finance account, update your course to include placement year</li>
                                            <li>Apply for £1,850 tuition fee loan for placement year</li>
                                            <li>Loan pays directly to university at start of placement year</li>
                                        </ol>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Key Points:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Automatic approval if you&apos;re already receiving student finance</li>
                                            <li>• The £1,850 pays directly to university—you never see this money</li>
                                            <li>• No option to &quot;pay upfront&quot; instead—everyone uses tuition fee loan</li>
                                            <li>• This £1,850 debt is subject to same repayment terms as rest of your loan (9% above £25k)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Impact on Total Degree Debt:</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">3-Year Direct Degree:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Tuition: £9,250 × 3 = £27,750</li>
                                            <li>• Maintenance: £10,227 × 3 = £30,681</li>
                                            <li>• <strong>Total borrowed: £58,431</strong></li>
                                            <li>• With interest: ~£65k at graduation</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">4-Year With Placement (no maintenance loan on placement):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Tuition: £9,250 × 3 + £1,850 = £29,600</li>
                                            <li>• Maintenance: £10,227 × 3 = £30,681</li>
                                            <li>• <strong>Total borrowed: £60,281</strong></li>
                                            <li>• With interest: ~£70k at graduation</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Placement students borrow only £1,850 more than 3-year students</strong> (if they decline maintenance loan during placement). But they graduate one year later, earn £16k-£22k during placement, and often save money. The extra year of delayed graduate entry is the main &quot;cost&quot;—but career benefits usually outweigh this.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What the £1,850 Covers:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Placement coordination:</strong> University staff who approve placements, maintain employer relationships, provide placement advice</li>
                                    <li><strong>University visits:</strong> Tutor visits your placement (1-2 times) to check on your progress and meet your supervisor</li>
                                    <li><strong>Insurance:</strong> University provides liability insurance covering you during placement</li>
                                    <li><strong>Assessment:</strong> Marking your placement reports, presentations, and portfolio work</li>
                                    <li><strong>Student status maintenance:</strong> You remain enrolled, keep student benefits (NUS card, library access, email)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Earning Analysis */}
                        <section id="earning-analysis" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Earning While Still a Student
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Placement year salaries vary significantly by industry, company size, and location, but most fall within £16,000-£22,000 range. Understanding realistic earning potential and how to maximize savings is key to making the most of your placement year financially.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Typical Placement Salaries by Sector:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Sector</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Typical Salary Range</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Monthly Net</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Engineering (Aerospace, Auto)</td>
                                                <td className="px-3 py-2 border-b text-xs">£18k-£22k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,400-£1,650</td>
                                                <td className="px-3 py-2 border-b text-xs">Large companies pay higher end</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Technology/Software</td>
                                                <td className="px-3 py-2 border-b text-xs">£20k-£28k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,500-£2,000</td>
                                                <td className="px-3 py-2 border-b text-xs">Big tech pays most (£25k-£28k)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Finance/Banking</td>
                                                <td className="px-3 py-2 border-b text-xs">£22k-£35k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,650-£2,400</td>
                                                <td className="px-3 py-2 border-b text-xs">Investment banks pay premium</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Consulting</td>
                                                <td className="px-3 py-2 border-b text-xs">£25k-£32k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,850-£2,200</td>
                                                <td className="px-3 py-2 border-b text-xs">MBB pays most, boutiques less</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Pharma/Chemical</td>
                                                <td className="px-3 py-2 border-b text-xs">£18k-£22k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,400-£1,650</td>
                                                <td className="px-3 py-2 border-b text-xs">Standard across sector</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Consumer Goods/Retail</td>
                                                <td className="px-3 py-2 border-b text-xs">£16k-£20k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,250-£1,500</td>
                                                <td className="px-3 py-2 border-b text-xs">Lower but widely available</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Public Sector/Government</td>
                                                <td className="px-3 py-2 border-b text-xs">£16k-£18k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,250-£1,400</td>
                                                <td className="px-3 py-2 border-b text-xs">Lower pay, high job security</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">SMEs/Startups</td>
                                                <td className="px-3 py-2 border-b text-xs">£14k-£18k</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,150-£1,400</td>
                                                <td className="px-3 py-2 border-b text-xs">Variable, negotiate carefully</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Understanding Your Take-Home Pay:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Your gross placement salary isn&apos;t what you receive monthly. Here&apos;s the breakdown:
                                </p>

                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Example: £20,000 Annual Placement Salary</p>
                                    <div className="space-y-1 text-xs">
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Gross Monthly Salary</span>
                                            <span className="font-semibold">£1,667</span>
                                        </div>
                                        <div className="flex justify-between py-1 text-red-600">
                                            <span>Income Tax (20% on income above £12,570)</span>
                                            <span>-£124</span>
                                        </div>
                                        <div className="flex justify-between py-1 text-red-600">
                                            <span>National Insurance (12% on income above £12,570)</span>
                                            <span>-£74</span>
                                        </div>
                                        <div className="flex justify-between py-1 text-green-600">
                                            <span>Student Loan Deduction</span>
                                            <span>£0 (still student!)</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-t-2 font-bold">
                                            <span>Monthly Take-Home</span>
                                            <span>£1,469</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-xs mt-2">
                                        Annual net: ~£17,628. You keep 88% of gross salary. Compare to graduates earning £20k who also keep ~88% but would be below student loan threshold anyway, so placement students are in similar position.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Realistic Savings Potential:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    How much can you realistically save during placement? This depends heavily on location and lifestyle:
                                </p>

                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 1: Living at Home (High Savings)</p>
                                        <div className="text-xs space-y-1">
                                            <div className="flex justify-between"><span>Monthly net:</span><span>£1,469</span></div>
                                            <div className="flex justify-between text-red-600"><span>Contribution to parents:</span><span>-£300</span></div>
                                            <div className="flex justify-between text-red-600"><span>Transport:</span><span>-£150</span></div>
                                            <div className="flex justify-between text-red-600"><span>Food/entertainment:</span><span>-£250</span></div>
                                            <div className="flex justify-between text-red-600"><span>Misc:</span><span>-£100</span></div>
                                            <div className="flex justify-between border-t pt-1 font-semibold text-green-600"><span>Monthly savings:</span><span>£669</span></div>
                                            <div className="flex justify-between mt-2 font-bold"><span>Annual savings:</span><span>£8,028</span></div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 2: Renting (Moderate Savings)</p>
                                        <div className="text-xs space-y-1">
                                            <div className="flex justify-between"><span>Monthly net:</span><span>£1,469</span></div>
                                            <div className="flex justify-between text-red-600"><span>Rent (inc bills):</span><span>-£550</span></div>
                                            <div className="flex justify-between text-red-600"><span>Food:</span><span>-£200</span></div>
                                            <div className="flex justify-between text-red-600"><span>Transport:</span><span>-£100</span></div>
                                            <div className="flex justify-between text-red-600"><span>Social/entertainment:</span><span>-£150</span></div>
                                            <div className="flex justify-between text-red-600"><span>Misc:</span><span>-£100</span></div>
                                            <div className="flex justify-between border-t pt-1 font-semibold text-green-600"><span>Monthly savings:</span><span>£369</span></div>
                                            <div className="flex justify-between mt-2 font-bold"><span>Annual savings:</span><span>£4,428</span></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Most placement students save £3,000-£8,000</strong> depending on living arrangements. This provides financial buffer for final year, reduces need for maintenance loan, or covers graduation expenses (job hunting, professional wardrobe, deposits for first graduate accommodation).
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Additional Financial Benefits During Placement:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Company benefits:</strong> Some employers offer subsidized accommodation, relocation assistance (£1,000-£3,000), travel expenses, or company car</li>
                                    <li><strong>Professional wardrobe:</strong> Build work-appropriate wardrobe that you&apos;ll need post-graduation anyway</li>
                                    <li><strong>Geographic flexibility:</strong> Test living in different cities without long-term commitment</li>
                                    <li><strong>Student discounts:</strong> You keep NUS card, railcard, and student bank accounts throughout placement</li>
                                    <li><strong>Pension contributions:</strong> Employers must auto-enroll you in workplace pension (3% employer + 5% employee). You can opt out, but free money if you stay in</li>
                                </ul>
                            </div>
                        </section>

                        {/* Total Degree Cost */}
                        <section id="total-degree-cost" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Impact on Total Degree Cost
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While placement years add a fourth year to your degree, the financial impact is actually minimal—and often positive—compared to 3-year direct degrees. The key is understanding both the debt side and the earnings side of the equation.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Complete Financial Comparison:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Component</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">3-Year Direct</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">4-Year + Placement</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Difference</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Tuition Fee Loans</td>
                                                <td className="px-3 py-2 border-b text-xs">£27,750</td>
                                                <td className="px-3 py-2 border-b text-xs">£29,600</td>
                                                <td className="px-3 py-2 border-b text-xs text-red-600">+£1,850</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Maintenance Loans</td>
                                                <td className="px-3 py-2 border-b text-xs">£30,681</td>
                                                <td className="px-3 py-2 border-b text-xs">£30,681</td>
                                                <td className="px-3 py-2 border-b text-xs">£0 (if decline on placement)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Interest During Study</td>
                                                <td className="px-3 py-2 border-b text-xs">~£6,500</td>
                                                <td className="px-3 py-2 border-b text-xs">~£9,000</td>
                                                <td className="px-3 py-2 border-b text-xs text-red-600">+£2,500</td>
                                            </tr>
                                            <tr className="bg-gray-50 font-semibold">
                                                <td className="px-3 py-2 border-b text-xs">Total Debt at Graduation</td>
                                                <td className="px-3 py-2 border-b text-xs">~£64,931</td>
                                                <td className="px-3 py-2 border-b text-xs">~£69,281</td>
                                                <td className="px-3 py-2 border-b text-xs text-red-600">+£4,350 more debt</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Placement Year Earnings</td>
                                                <td className="px-3 py-2 border-b text-xs">£0</td>
                                                <td className="px-3 py-2 border-b text-xs">£16k-£22k gross</td>
                                                <td className="px-3 py-2 border-b text-xs text-green-600">+£16k-£22k</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Potential Savings</td>
                                                <td className="px-3 py-2 border-b text-xs">£0</td>
                                                <td className="px-3 py-2 border-b text-xs">£3k-£8k</td>
                                                <td className="px-3 py-2 border-b text-xs text-green-600">+£3k-£8k</td>
                                            </tr>
                                            <tr className="font-semibold">
                                                <td className="px-3 py-2 border-b text-xs">Net Financial Position</td>
                                                <td className="px-3 py-2 border-b text-xs">-£64,931 debt</td>
                                                <td className="px-3 py-2 border-b text-xs">-£69,281 debt + £3k-£8k cash savings</td>
                                                <td className="px-3 py-2 border-b text-xs">Depends on savings</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Net financial outcome:</strong> Placement students graduate with ~£4,350 more debt but £3,000-£8,000 in actual savings. If you save £5k+, you&apos;re in better cash position than 3-year students despite slightly higher debt. And remember: for most graduates, that extra £4k debt adds £0 to lifetime repayments due to write-off.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Does Extra Debt Matter for Placement Students?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    The ~£4,350 extra debt from placement year has minimal impact on actual repayments:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>For write-off trajectory students (70-75%):</strong> £0 difference in lifetime repayments. Both 3-year and 4-year students pay 9% above £25k for 40 years, then write-off. The extra £4k just gets written off.</li>
                                    <li><strong>For borderline students:</strong> Might add £1k-£2k to total lifetime repayments by extending repayment period slightly.</li>
                                    <li><strong>For high earners (full repayment):</strong> Pay the extra £4k plus interest, totaling ~£5k-£6k over repayment period. But placement experience often leads to higher starting salary (+£2k-£4k), which more than offsets this cost.</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Career Impact: The Real Value Proposition</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Beyond the immediate financial picture, placement students typically see:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>15-20% higher graduate starting salaries:</strong> Placement on CV demonstrates work-readiness. Average difference of £2k-£4k starting salary.</li>
                                    <li><strong>Significantly higher job offer rates:</strong> 70-80% of placement students receive return offers from placement companies. Overall job offer rates 15-25% higher than non-placement students.</li>
                                    <li><strong>Earlier job security:</strong> Many placement students secure graduate role 6-12 months before graduation, reducing final year stress.</li>
                                    <li><strong>Better long-term career trajectories:</strong> Work experience accelerates early career progression by 6-12 months.</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Financial calculation:</strong> £4k extra debt vs £2k-£4k higher starting salary. Over 40-year career, early salary advantage compounds. Placement year typically delivers positive net present value of £50k-£150k through accelerated career progression.
                                </p>
                            </div>
                        </section>

                        {/* Loan Decisions */}
                        <section id="loan-decisions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Should You Take Maintenance Loan on Placement?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                During placement year, you&apos;re eligible for maintenance loan (same amount as other years: £9,500-£13,022 based on household income) but most students decline it since placement salary covers living costs. The decision depends on your specific circumstances.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Reasons to Decline Maintenance Loan (Most Common):</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">1. You Don&apos;t Need It</p>
                                        <p className="text-gray-700 text-xs">
                                            Your placement salary (£16k-£22k = £1,250-£1,650 net monthly) exceeds typical student living costs (£800-£1,200/month). Taking loan would be borrowing money you don&apos;t need, adding £10k debt unnecessarily.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">2. Opportunity to Reduce Total Debt</p>
                                        <p className="text-gray-700 text-xs">
                                            By declining maintenance loan during placement, you borrow £10k less over your degree. Combined with placement savings, you could graduate with £15k-£18k less total debt than 3-year students who take full loans each year.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">3. Build Savings Instead</p>
                                        <p className="text-gray-700 text-xs">
                                            Use placement earnings to save £5k-£8k, providing buffer for final year or post-graduation. This is real money in your account, not borrowed money accruing interest.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">4. Financial Discipline</p>
                                        <p className="text-gray-700 text-xs">
                                            Living on your salary during placement prepares you for graduate life. You learn to budget on actual earnings rather than relying on loan top-ups.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Reasons to Take Maintenance Loan (Less Common):</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">1. Low Placement Salary + High Cost Location</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Example:</strong> £16k placement in London. Net monthly: £1,250. Rent: £700-£900. Food/transport: £300-£400. Tight budget with no savings capacity.
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            In this scenario, maintenance loan provides financial cushion. Better to take loan than struggle on tight budget and risk placement performance suffering.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">2. Existing Financial Commitments</p>
                                        <p className="text-gray-700 text-xs">
                                            If you have rent contracts, car finance, or other commitments from previous year that continue into placement, your placement salary alone might not cover everything comfortably.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">3. Supporting Family Members</p>
                                        <p className="text-gray-700 text-xs">
                                            Some students contribute financially to family (helping parents, younger siblings). Placement salary might need supplementing with loan to maintain these commitments.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-1">4. Investment Opportunity</p>
                                        <p className="text-gray-700 text-xs">
                                            Mathematically sophisticated approach: Take maintenance loan (interest during study = RPI + 3% = ~6-7%), invest placement earnings in stocks/index funds (historical return ~7-10%). Theoretically could outperform loan interest. Risky and requires financial literacy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Decision Framework:</h3>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Calculate Your Placement Year Budget:</p>
                                    <ol className="list-decimal ml-6 text-gray-700 text-xs space-y-2">
                                        <li>
                                            <strong>Monthly net income:</strong> Take placement salary, subtract ~12% for tax/NI
                                            <p className="text-gray-600 ml-4">Example: £18k × 88% ÷ 12 = £1,320 net/month</p>
                                        </li>
                                        <li>
                                            <strong>Monthly essential costs:</strong> Rent + bills + food + transport
                                            <p className="text-gray-600 ml-4">Example: £550 + £200 + £100 = £850/month</p>
                                        </li>
                                        <li>
                                            <strong>Monthly surplus:</strong> Income - costs
                                            <p className="text-gray-600 ml-4">Example: £1,320 - £850 = £470 surplus</p>
                                        </li>
                                        <li>
                                            <strong>Decision:</strong>
                                            <ul className="list-disc ml-4 mt-1 space-y-1">
                                                <li>Surplus £300/month → Decline loan, build savings</li>
                                                <li>Surplus £100-£300/month → Borderline, consider declining but take if uncertain</li>
                                                <li>Surplus &lt; £100/month → Take maintenance loan for financial cushion</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Career Benefits */}
                        <section id="career-benefits" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Career Benefits Beyond Finances
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While this guide focuses on financial implications, the career value of placement years often exceeds the monetary benefits. Understanding the professional advantages helps contextualize whether the delayed graduation is worthwhile.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Statistical Career Advantages:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li><strong>Return offer rates:</strong> 60-70% of placement students receive graduate job offers from their placement companies. This provides job security 6-12 months before graduation.</li>
                                    <li><strong>Overall employment rates:</strong> Placement students have 90-95% graduate employment rates within 6 months vs 75-80% for non-placement students.</li>
                                    <li><strong>Starting salaries:</strong> 15-20% higher on average. For £28k median graduate salary, placement students average £32k-£34k.</li>
                                    <li><strong>Time to first job:</strong> Placement students secure graduate roles 2-3 months faster on average, reducing post-graduation unemployment gap.</li>
                                    <li><strong>Career progression:</strong> Reach mid-level roles 6-12 months faster due to year of professional experience counting toward promotion timelines.</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Practical Career Skills Gained:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Professional environment experience:</strong> Office culture, workplace norms, professional communication, meeting etiquette</li>
                                    <li><strong>Industry-specific tools and software:</strong> Learn tools used by industry that universities often don&apos;t teach (specific CAD software, enterprise systems, industry-standard practices)</li>
                                    <li><strong>Project management:</strong> Real projects with deadlines, stakeholders, and commercial implications</li>
                                    <li><strong>Teamwork and collaboration:</strong> Working in multi-disciplinary teams, navigating office politics, building professional relationships</li>
                                    <li><strong>Understanding career fit:</strong> Discover whether you actually enjoy the work you studied. Some placement students switch specializations based on placement insights.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Subject-Specific Placement Value:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Engineering:</strong> Essential. Theory-heavy degrees benefit enormously from practical application. Placement often determines specialization choice (mechanical → automotive, civil → structural, etc.).</p>
                                    <p><strong>Computer Science:</strong> Highly valuable. Learn modern tech stacks, agile methodologies, version control, code review—things universities teach poorly. Placement experience makes you significantly more employable.</p>
                                    <p><strong>Business/Management:</strong> Very valuable. See how businesses actually operate vs textbook theory. Build professional network, which matters more in business than engineering.</p>
                                    <p><strong>Sciences (Chemistry, Physics, Biology):</strong> Industry placements teach lab skills, equipment operation, safety protocols. Essential for students considering industry careers over academia.</p>
                                    <p><strong>Languages:</strong> Often involves living abroad, immersion experience that massively improves fluency. Career benefits beyond just language skills (international exposure, cultural competence).</p>
                                </div>
                            </div>
                        </section>

                        {/* Securing Placement */}
                        <section id="securing-placement" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Finding and Securing Placements
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding the placement application process helps you plan financially and academically for placement year. Applications typically run September-December of Year 2, with most offers made by January-February.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Where to Find Placements:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li><strong>University placement portal:</strong> Most universities with strong placement programs maintain databases of approved companies and current vacancies. These are pre-vetted and university-approved.</li>
                                    <li><strong>Company career websites:</strong> Large companies (BAE Systems, Rolls-Royce, IBM, Unilever, GSK) advertise placement schemes directly on their graduate recruitment pages.</li>
                                    <li><strong>RateMyPlacement.co.uk:</strong> UK-specific placement and internship job board with thousands of listings and company reviews from placement students.</li>
                                    <li><strong>University careers fairs:</strong> Companies recruiting placement students attend university careers fairs in October-November.</li>
                                    <li><strong>LinkedIn:</strong> Search &quot;placement student&quot; or &quot;industrial placement&quot; + your subject. Many companies post here.</li>
                                    <li><strong>Networking and referrals:</strong> Previous placement students (Year 4 students) often refer Year 2 students to their placement companies.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Typical Application Timeline:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">September-October (Year 2):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Placement vacancies open (many large companies open applications September 1)</li>
                                            <li>• Attend placement workshops at university (CV writing, application forms, assessment centers)</li>
                                            <li>• Start researching companies and roles</li>
                                            <li>• Prepare CV, cover letter templates</li>
                                            <li>• <strong>Action:</strong> Submit 10-20 applications (competitive, expect 5-10% response rate)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">October-December:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Invitations to assessment centers, phone interviews, video interviews</li>
                                            <li>• Assessment centers (group exercises, presentations, interviews) typically half-day or full-day</li>
                                            <li>• Offers usually made 2-6 weeks after assessment</li>
                                            <li>• <strong>Peak stress period:</strong> Balancing Year 2 coursework with applications and interviews</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">January-March:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Late applications and offers (companies that didn&apos;t fill places earlier)</li>
                                            <li>• Accept offer and notify university</li>
                                            <li>• University confirms enrollment for placement year</li>
                                            <li>• Apply for reduced tuition fee loan (£1,850)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What If You Don&apos;t Secure a Placement?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Not every student who applies secures placement. Options include:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Continue applying into January-April:</strong> Some companies recruit late, especially SMEs</li>
                                    <li><strong>Proceed to Year 3 without placement:</strong> Complete degree in 3 years as originally structured. No penalty or requirement to do placement.</li>
                                    <li><strong>Summer internship instead:</strong> 10-12 week summer internships provide similar (though shorter) experience</li>
                                    <li><strong>Gap year + graduate job:</strong> Some students take gap year between Year 2 and Year 3, work in relevant role, then return. Not officially a placement but provides experience.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Financial Management */}
                        <section id="financial-management" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Managing Money During Placement Year
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Placement year is many students&apos; first experience of full-time employment and regular salary. Smart financial management during placement sets you up for final year and post-graduation success.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Optimal Placement Year Financial Strategy:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Decline maintenance loan</strong> (if salary covers living costs comfortably)
                                    </li>
                                    <li>
                                        <strong>Set monthly savings target:</strong> Aim to save 30-40% of net income if living at home, 15-25% if renting
                                    </li>
                                    <li>
                                        <strong>Open easy-access savings account:</strong> Keep placement savings separate from student overdraft/current account. Aim for £5k-£8k by year end.
                                    </li>
                                    <li>
                                        <strong>Uses for placement savings:</strong>
                                        <ul className="list-disc ml-6 mt-1 space-y-1">
                                            <li>Final year living costs without maximum maintenance loan</li>
                                            <li>Post-graduation expenses (job hunting, professional wardrobe, accommodation deposits)</li>
                                            <li>Emergency fund for unemployment gap if graduate job search takes time</li>
                                            <li>Clearing overdraft before it converts to expensive credit post-graduation</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Pension decision:</strong> Companies must auto-enroll you (3% employer + 5% employee minimum). Consider staying enrolled—free 3% from employer, though it reduces take-home ~5%.
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common Placement Year Financial Mistakes:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Lifestyle inflation:</strong> Earning £1,500/month feels like fortune after student budgets. Many placement students overspend on eating out, new clothes, gadgets, then return to final year with no savings.
                                    </li>
                                    <li>
                                        <strong>Expensive accommodation:</strong> Renting £700/month luxury flat when £450/month house-share would work. The difference (£250/month × 12 = £3k) is your entire savings gone.
                                    </li>
                                    <li>
                                        <strong>Taking maintenance loan unnecessarily:</strong> Borrowing £10k you don&apos;t need because you can, then spending it. This £10k debt costs high earners ~£13k-£15k total repayment over career.
                                    </li>
                                    <li>
                                        <strong>Not budgeting for return to final year:</strong> Spending entire placement earnings, returning to final year with zero savings, needing maximum maintenance loan again. Lost opportunity to reduce final year borrowing.
                                    </li>
                                    <li>
                                        <strong>Buying a car on finance:</strong> Tempting with regular salary, but car finance (£200-£400/month) continues into final year when you&apos;re back to student budget. Only works if keeping car long-term.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Tax and National Insurance on Placement:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    You pay income tax and National Insurance on placement earnings like any employee:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Income tax:</strong> 20% on earnings above £12,570 personal allowance</li>
                                    <li><strong>National Insurance:</strong> 12% on earnings above £12,570 threshold</li>
                                    <li><strong>Tax code:</strong> Usually 1257L (standard tax-free allowance)</li>
                                    <li><strong>No student loan deductions:</strong> Because you&apos;re still officially a student, PAYE doesn&apos;t deduct student loan repayments</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Potential tax refund:</strong> If your placement starts part-way through tax year (e.g., July) and you had no other income April-June, you might be entitled to tax refund at year end. Check with HMRC.
                                </p>
                            </div>
                        </section>

                        {/* Real Scenarios */}
                        <section id="real-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Placement Year Financial Outcomes
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here are realistic scenarios showing how different students navigated placement year finances:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: High-Saving Placement (Living at Home)</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Emma, Mechanical Engineering at Rolls-Royce (Derby), lived at parents&apos; home 30 mins away
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial details:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Placement salary: £22,000</li>
                                            <li>• Monthly net: £1,650</li>
                                            <li>• Contribution to parents: £250/month</li>
                                            <li>• Petrol/car costs: £150/month</li>
                                            <li>• Personal spending: £350/month</li>
                                            <li>• <strong>Monthly savings: £900</strong></li>
                                            <li>• <strong>Annual savings: £10,800</strong></li>
                                            <li>• Declined maintenance loan</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Returned to final year with £10,800 savings</li>
                                            <li>• Used savings to cover final year living costs, took only £3,000 maintenance loan</li>
                                            <li>• Total degree debt: £54,000 (vs £65,000 if she&apos;d taken full loans all years)</li>
                                            <li>• Received return offer from Rolls-Royce (£32k starting salary)</li>
                                            <li>• Graduated with £11k less debt than 3-year route students</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Ideal scenario. Living at home enabled maximum savings. The £11k debt reduction will save high-earning engineer ~£15k-£18k in total repayments over career.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: Moderate Saving (Renting)</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> James, Computer Science at IBM (Portsmouth), rented house-share
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial details:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Placement salary: £20,000</li>
                                            <li>• Monthly net: £1,500</li>
                                            <li>• Rent inc bills: £500/month</li>
                                            <li>• Food: £200/month</li>
                                            <li>• Transport: £80/month</li>
                                            <li>• Social/entertainment: £200/month</li>
                                            <li>• Misc: £120/month</li>
                                            <li>• <strong>Monthly savings: £400</strong></li>
                                            <li>• <strong>Annual savings: £4,800</strong></li>
                                            <li>• Declined maintenance loan</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Returned to final year with £4,800 savings</li>
                                            <li>• Used £2,000 for final year living costs top-up, £2,000 for post-graduation (job hunting, London accommodation deposit)</li>
                                            <li>• Still took full maintenance loan final year</li>
                                            <li>• Total degree debt: £60,281 (vs £58,431 for 3-year route)</li>
                                            <li>• But graduated with £2,000 cash savings vs £0</li>
                                            <li>• Return offer from IBM declined, secured role at fintech startup (£38k)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Typical placement outcome. Saved moderately, graduated with slightly more debt than 3-year students but with cash savings and higher starting salary. Net positive financially.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Low Savings (Expensive Location + Lifestyle)</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Sophie, Business Management at London consulting firm, took maintenance loan
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial details:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Placement salary: £24,000 (London wage)</li>
                                            <li>• Monthly net: £1,800</li>
                                            <li>• Rent in London: £850/month</li>
                                            <li>• Food: £300/month</li>
                                            <li>• Transport (Zone 1-3): £180/month</li>
                                            <li>• Social/dining out: £350/month (London lifestyle)</li>
                                            <li>• Misc: £150/month</li>
                                            <li>• <strong>Monthly deficit: -£30</strong></li>
                                            <li>• Took maintenance loan (£13,022) to cover shortfall</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Used maintenance loan to cover London living costs gap</li>
                                            <li>• Returned to final year with £0 savings</li>
                                            <li>• Total degree debt: £73,303 (£1,850 placement tuition + £13,022 placement maintenance + standard loans other years)</li>
                                            <li>• Secured consulting role at placement firm (£42k starting)</li>
                                            <li>• High starting salary but high debt (£73k vs £65k for 3-year route)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> London placements are financially tighter. Taking maintenance loan was reasonable given high costs. Extra £8k debt (vs 3-year route) but £42k starting salary vs typical £28k offsets this. Career value justified financial outcome.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: Poor Financial Management</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Michael, Engineering at automotive company, overspent during placement
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>What happened:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Placement salary: £19,000</li>
                                            <li>• Monthly net: £1,450</li>
                                            <li>• Rent: £600/month</li>
                                            <li>• Bought car on finance: £280/month</li>
                                            <li>• Regular expensive spending (lifestyle inflation)</li>
                                            <li>• Took maintenance loan (£10,227) despite salary covering costs</li>
                                            <li>• Spent maintenance loan on holidays, new laptop, clothes</li>
                                            <li>• <strong>Annual savings: £0</strong></li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Returned to final year with zero savings + car finance commitment</li>
                                            <li>• Car finance continued (£280/month) while back on student budget</li>
                                            <li>• Total degree debt: £71,508 (took maintenance loan on placement unnecessarily)</li>
                                            <li>• Struggled financially final year due to car finance commitment</li>
                                            <li>• Graduated with £6k more debt than 3-year students, zero savings, ongoing car finance</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Cautionary tale. Lifestyle inflation and poor decisions (unnecessary loan, car finance) squandered placement financial advantages. Graduated in worse position than if had done 3-year route.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Placement years: The best kept secret of UK higher education
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Reduced tuition (£1,850 vs £9,250), earning £16k-£22k while maintaining student status, zero student loan repayments during placement, and potential savings of £3k-£8k make placement years financially advantageous despite adding a fourth year to your degree. Combined with 15-20% higher graduate starting salaries, better job offer rates, and accelerated career progression, placement years typically deliver £50k-£150k positive net present value over your career. The extra £4k debt you graduate with (vs 3-year route) adds £0 to lifetime repayments for write-off trajectory students and is vastly outweighed by career benefits even for high earners. If your degree offers placements, seriously consider taking one—it&apos;s one of the few ways to earn money while reducing total student debt.
                            </p>
                            <p className="text-gray-700 font-semibold">
                                Decline maintenance loan during placement if your salary covers living costs comfortably. Use placement earnings to build savings for final year.
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

export default PlacementYearLoanImpact;