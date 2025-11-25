import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const ChangingCourseLoanAdjustments: React.FC = () => {
    const tocItems = [
        { id: "course-change-overview", title: "Course Changes: What's Possible", level: 2 },
        { id: "funding-rules", title: "Funding Rules and Year Calculations", level: 2 },
        { id: "types-of-changes", title: "Types of Course Changes", level: 2 },
        { id: "financial-implications", title: "Financial Implications of Switching", level: 2 },
        { id: "repeat-year-eligibility", title: "Repeat Year Eligibility and Compelling Personal Reasons", level: 2 },
        { id: "transfer-process", title: "The Transfer Process Step-by-Step", level: 2 },
        { id: "strategic-considerations", title: "Strategic Considerations: Should You Switch?", level: 2 },
        { id: "common-scenarios", title: "Common Scenarios and Outcomes", level: 2 },
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
                                    Changing Course: Loan Adjustments
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Changing Course: Student Loan Adjustments and Funding Implications
                    </h1>
                    <p className="text-xl text-gray-600">
                        Switching degrees, funding implications, and repeat year eligibility when changing your university course
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
                                Approximately 10% of UK students change their course during their first two years of university. Your funding continues, but there&apos;s a critical rule: years spent on your original course count toward your total funding entitlement. Switch after one year of Computer Science to start Medicine? You&apos;ve used one year of funding, leaving you with five years remaining for the six-year medicine degree—you&apos;ll be one year short.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding how Student Finance England calculates remaining entitlement, which types of course changes preserve full funding, and when you might need to self-fund final years is essential for anyone considering switching courses. The debt from your original course doesn&apos;t disappear—you keep that tuition and maintenance loan balance—but you can continue borrowing for your new course subject to the year limits.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide explains the funding rules, walks through the transfer process, analyzes real-world scenarios showing how debt accumulates when switching, and helps you make informed decisions about whether changing course is worth the financial implications.
                            </p>
                        </section>

                        {/* Course Change Overview */}
                        <section id="course-change-overview" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Course Changes: What&apos;s Possible
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                UK universities and Student Finance England support course changes—they recognize that students sometimes realize their chosen degree isn&apos;t right. The system allows transfers and restarts with continued funding, but with important limitations.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Types of Course Changes:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Internal transfer (same university):</strong> Switching from one course to another at your current institution. Example: Biology to Chemistry at University of Manchester. Usually processed smoothly with minimal funding disruption.
                                    </li>
                                    <li>
                                        <strong>External transfer (different university):</strong> Leaving your current university and enrolling in a different course at another institution. Example: History at Nottingham → Law at Bristol. Requires new UCAS application and more complex funding adjustments.
                                    </li>
                                    <li>
                                        <strong>Complete restart:</strong> Withdrawing from your current course and starting a completely new degree, often after a gap. Example: Dropout from Engineering Year 1, return two years later for English Literature. Years previously attended still count against entitlement.
                                    </li>
                                    <li>
                                        <strong>Repeat year:</strong> Failing or withdrawing from a year and repeating it, either in same course or different course. May require evidence of compelling personal reasons (CPR) for continued funding.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What You Can Always Do:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Change course within your first year with minimal funding impact</li>
                                    <li>Transfer between universities if you secure a place through UCAS</li>
                                    <li>Switch to a longer course if you have sufficient years of funding remaining</li>
                                    <li>Continue getting loans for new course up to your remaining year entitlement</li>
                                    <li>Keep all previous student loan debt—it transfers with you to the new course</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Has Restrictions:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Switching to a longer course than your remaining funding years (you&apos;ll be short)</li>
                                    <li>Repeating years due to failure without compelling personal reasons</li>
                                    <li>Getting funding if you&apos;ve already completed a degree (usually limited to +1 year)</li>
                                    <li>Changing after completing two years of original course (very limited remaining funding)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Funding Rules */}
                        <section id="funding-rules" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Funding Rules and Year Calculations
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student Finance England provides funding for the length of your course plus one additional year, called the &quot;gift year.&quot; This extra year is protection against repeating a year or changing course. But once you&apos;ve used years of funding, they&apos;re gone—even if you withdraw or fail.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Core Funding Formula:</h3>
                                <div className="bg-white p-4 rounded border border-gray-200">
                                    <p className="text-gray-800 font-semibold text-sm mb-2">Total Funding Entitlement = Length of Course + 1 Year</p>
                                    <div className="space-y-2 text-gray-700 text-sm">
                                        <p><strong>3-year degree:</strong> 3 + 1 = 4 years of funding</p>
                                        <p><strong>4-year degree:</strong> 4 + 1 = 5 years of funding</p>
                                        <p><strong>5-year degree (Architecture):</strong> 5 + 1 = 6 years of funding</p>
                                        <p><strong>6-year degree (Medicine):</strong> 6 + 1 = 7 years of funding</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Critical rule:</strong> Your entitlement is based on your current course, but ALL previous years of higher education study count against it, regardless of outcome.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">How Years Are Counted:</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Years that COUNT against your entitlement:</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li>Any year where you received student loan (tuition or maintenance), even if you withdrew</li>
                                            <li>Completed years on previous courses</li>
                                            <li>Failed years where you received funding</li>
                                            <li>Years studying at any UK university in any subject</li>
                                            <li>Withdrawn years where funding was paid (even if you left in October)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Years that DON&apos;T COUNT:</p>
                                        <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                            <li>Years where you withdrew before funding was paid (usually before October census date)</li>
                                            <li>Years studied abroad (not at UK institution)</li>
                                            <li>Foundation years that weren&apos;t funded by Student Finance England</li>
                                            <li>Gap years or years out of education</li>
                                            <li>Years studying at college (rather than university) if not funded by SFE</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Practical Examples of Year Counting:</h3>
                                <div className="space-y-3 text-gray-700 text-sm">
                                    <div>
                                        <p className="font-semibold text-gray-800 mb-1">Example 1: Clean transfer after Year 1</p>
                                        <p className="text-xs">• Started: 3-year Economics (entitlement: 4 years)</p>
                                        <p className="text-xs">• Completed: Year 1 (used 1 year)</p>
                                        <p className="text-xs">• Switching to: 3-year History (requires 3 years)</p>
                                        <p className="text-xs mt-1"><strong>Remaining funding: 3 years. ✓ Fully funded.</strong></p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-800 mb-1">Example 2: Transfer to longer course after Year 1</p>
                                        <p className="text-xs">• Started: 3-year Psychology (entitlement: 4 years)</p>
                                        <p className="text-xs">• Completed: Year 1 (used 1 year)</p>
                                        <p className="text-xs">• Switching to: 5-year Architecture (requires 5 years)</p>
                                        <p className="text-xs mt-1"><strong>Remaining funding: 3 years. ✗ You&apos;ll be 2 years short. Must self-fund final 2 years (£18,500 tuition alone).</strong></p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-800 mb-1">Example 3: Transfer after completing 2 years</p>
                                        <p className="text-xs">• Started: 3-year English (entitlement: 4 years)</p>
                                        <p className="text-xs">• Completed: Years 1 & 2 (used 2 years)</p>
                                        <p className="text-xs">• Switching to: 3-year Law (requires 3 years)</p>
                                        <p className="text-xs mt-1"><strong>Remaining funding: 2 years. ✗ You&apos;ll be 1 year short. Must self-fund final year.</strong></p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-800 mb-1">Example 4: Second degree after completing first</p>
                                        <p className="text-xs">• Completed: 3-year Business degree (used 3 years)</p>
                                        <p className="text-xs">• Original entitlement: 4 years (3+1)</p>
                                        <p className="text-xs">• Applying for: 3-year Computer Science</p>
                                        <p className="text-xs mt-1"><strong>Remaining funding: 1 year only. Generally not eligible for second undergraduate degree funding except in specific circumstances (teaching, healthcare).</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Check Your Remaining Entitlement:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Before changing course, you can check your remaining funding years:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Log into your Student Finance England account</li>
                                    <li>View your &quot;Previous Study&quot; section</li>
                                    <li>Calculate: Original entitlement - Years used = Years remaining</li>
                                    <li>Compare remaining years to length of new course</li>
                                    <li>If short, you&apos;ll need to self-fund or find alternative financing</li>
                                </ul>
                            </div>
                        </section>

                        {/* Types of Changes */}
                        <section id="types-of-changes" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Types of Course Changes
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Different types of course changes have different implications for funding, logistics, and your accumulated debt. Here&apos;s how each works:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Internal Transfer (Same University)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Switching to a different course at your current institution is the smoothest type of change. The university handles most administrative work, and funding typically continues seamlessly.
                                    </p>

                                    <div className="bg-blue-50 p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Process:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>1. Speak with your current department and target department</li>
                                            <li>2. Apply through your university&apos;s internal transfer system</li>
                                            <li>3. If accepted, complete internal transfer paperwork</li>
                                            <li>4. Inform Student Finance England of course change (usually university does this)</li>
                                            <li>5. Student Finance updates your account with new course details</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Funding implications:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Usually no interruption to funding</li>
                                            <li>• Years already completed count toward new course entitlement</li>
                                            <li>• Tuition and maintenance loan balances carry forward</li>
                                            <li>• New course length determines remaining entitlement</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Best for:</strong> Students who like their university but realize their subject isn&apos;t right. Common in first year when students discover their interests.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">External Transfer (Different University)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Moving to a different university requires a new UCAS application and coordination between institutions and Student Finance England.
                                    </p>

                                    <div className="bg-green-50 p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Process:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>1. Apply through UCAS as a &quot;transfer student&quot;</li>
                                            <li>2. Disclose previous study on your application</li>
                                            <li>3. If accepted, formally withdraw from current university</li>
                                            <li>4. Notify Student Finance England within 5 days of withdrawal</li>
                                            <li>5. Apply for funding at new university (may be treated as new application)</li>
                                            <li>6. Provide evidence of previous study to avoid overpayment</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Funding implications:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Risk of funding gap if withdrawal and new enrollment don&apos;t align</li>
                                            <li>• Must inform SFE to prevent being charged for both institutions</li>
                                            <li>• All previous loan debt transfers to new institution&apos;s records</li>
                                            <li>• May need to reapply for maintenance loan at new institution</li>
                                            <li>• Timing is critical—wrong timing can cost you months of funding</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Best for:</strong> Students who want both a different course AND a different university environment. Requires advance planning.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Complete Restart (After Withdrawal/Break)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Withdrawing from your course and starting fresh, possibly after a break. This is different from transfer because there&apos;s a gap between courses.
                                    </p>

                                    <div className="bg-purple-50 p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Process:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>1. Formally withdraw from current course (if still enrolled)</li>
                                            <li>2. Notify Student Finance England of withdrawal</li>
                                            <li>3. Take gap time if needed (months or years)</li>
                                            <li>4. Apply through UCAS for new course</li>
                                            <li>5. Apply for student finance, declaring all previous study</li>
                                            <li>6. SFE calculates remaining entitlement based on years already funded</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Funding implications:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Previous funded years count against new course entitlement</li>
                                            <li>• If you withdrew early (before census date), that year might not count</li>
                                            <li>• Gap years don&apos;t use funding—you can take time to decide</li>
                                            <li>• All previous debt remains and will compound with new borrowing</li>
                                            <li>• May need to provide evidence of why you&apos;re restarting</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Best for:</strong> Students who need a break to reconsider their path, or those who tried university and weren&apos;t ready. The gap can provide clarity.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Changing from 3-Year to 4-Year Course (e.g., adding placement year)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Switching from a standard 3-year degree to a 4-year program (often with industry placement) or adding a sandwich year mid-course.
                                    </p>

                                    <div className="bg-orange-50 p-3 rounded mb-3">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Process:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>1. Request course change to placement/sandwich year version</li>
                                            <li>2. Usually done end of Year 1 or during Year 2</li>
                                            <li>3. University updates your course registration</li>
                                            <li>4. Apply to Student Finance for placement year funding (if applicable)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Funding implications:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Placement years usually have reduced tuition (£1,850 instead of £9,250)</li>
                                            <li>• You still get maintenance loan during placement</li>
                                            <li>• Uses one year of funding entitlement</li>
                                            <li>• But you earn salary during placement, often £14k-£22k</li>
                                            <li>• Can reduce total debt if planned early</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Best for:</strong> Students wanting practical experience and to earn during degree while slightly extending their studies. Often financially beneficial despite extra year.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Financial Implications */}
                        <section id="financial-implications" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Financial Implications of Switching
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Course changes always increase your total student debt because you&apos;re borrowing for additional years. Understanding the financial impact helps you make informed decisions.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Debt Accumulation Reality:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    When you change course, you don&apos;t get a &quot;refund&quot; or cancellation of previous loans. You keep all debt from your original course and add new debt from your new course.
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Example: Switching after Year 1</p>
                                    <div className="text-gray-700 text-xs space-y-1">
                                        <p><strong>Year 1 - Original Course (Biology):</strong></p>
                                        <p className="ml-4">• Tuition loan: £9,250</p>
                                        <p className="ml-4">• Maintenance loan: £9,500</p>
                                        <p className="ml-4">• Total borrowed: £18,750</p>
                                        <p className="ml-4">• With one year interest: ~£19,500</p>

                                        <p className="mt-2"><strong>Years 2-4 - New Course (Law):</strong></p>
                                        <p className="ml-4">• Tuition loan: £9,250 × 3 = £27,750</p>
                                        <p className="ml-4">• Maintenance loan: £9,500 × 3 = £28,500</p>
                                        <p className="ml-4">• Total borrowed: £56,250</p>

                                        <p className="mt-2 font-semibold"><strong>Total debt at graduation: ~£75,750</strong></p>
                                        <p className="text-xs mt-1">(Compared to £55,000 if you&apos;d started Law directly. You&apos;re carrying £20k extra debt from the switch.)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Does Extra Debt Matter? It Depends on Your Career Path:</h3>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">If you&apos;ll reach 40-year write-off (£25k-£40k career):</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Extra debt makes little practical difference.</strong> Whether you graduate with £55k or £75k, you&apos;ll pay 9% of income above £25k for 40 years, then write-off. Your total paid depends on salary, not starting debt. The £20k extra debt just gets written off alongside everything else.
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            Example: Earn £35k consistently for 40 years = pay ~£36k total regardless of whether you owe £55k or £75k.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">If you&apos;re borderline (£45k-£55k career):</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Extra debt might push you from full repayment to write-off.</strong> Starting with £55k debt, you might repay by year 35. Starting with £75k, you might reach write-off with balance remaining. This could actually save you money total.
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            Paradoxically, the course change might reduce total paid if it pushes you over the write-off threshold.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">If you&apos;ll definitely repay (£60k+ career):</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Extra debt costs you real money.</strong> £20k extra starting debt becomes £30k+ with interest by the time you repay. You&apos;ll pay this full amount plus interest.
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            Example: Starting with £75k instead of £55k might add 3-4 years to repayment timeline and cost £25k-£35k more total.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Hidden Costs of Switching:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Lost time:</strong> An extra year means one less year earning salary (opportunity cost ~£25k-£35k)</li>
                                    <li><strong>Accommodation:</strong> Extra year of rent and living costs (£8k-£12k depending on location)</li>
                                    <li><strong>Interest accumulation:</strong> Original debt accrues interest while you complete new degree</li>
                                    <li><strong>Delayed career start:</strong> Graduate one year later, potentially affecting long-term career progression</li>
                                    <li><strong>Parental contribution:</strong> If parents are supporting you, they fund extra years</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When the Cost Is Worth It:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Switching courses can be financially justified if:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>New course has significantly better earning potential (e.g., humanities → medicine/law)</li>
                                    <li>You&apos;re miserable in current course and likely to drop out entirely without switch</li>
                                    <li>Current course has very poor graduate employment rates</li>
                                    <li>You&apos;re switching early (Year 1) minimizing wasted years</li>
                                    <li>You&apos;re heading for write-off anyway so extra debt is irrelevant</li>
                                </ul>
                            </div>
                        </section>

                        {/* Repeat Year Eligibility */}
                        <section id="repeat-year-eligibility" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Repeat Year Eligibility and Compelling Personal Reasons
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you fail or need to repeat a year, getting continued funding depends on whether you have &quot;compelling personal reasons&quot; (CPR) for the poor academic performance. Without CPR, you might not get funding to repeat.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Compelling Personal Reasons (CPR) - What Qualifies:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Student Finance England requires evidence of circumstances beyond your control that affected academic performance:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Serious illness or accident:</strong> Hospitalization, surgery, chronic illness diagnosis, mental health crisis requiring treatment. Need GP/consultant letters documenting impact on studies.
                                    </li>
                                    <li>
                                        <strong>Death of close family member:</strong> Parent, sibling, partner, or close dependent during academic year. Death certificate and evidence of impact (counseling records, university support documents).
                                    </li>
                                    <li>
                                        <strong>Family crisis:</strong> Severe illness of family member requiring your care, family breakdown, domestic situation affecting studies. Social services or healthcare professional documentation helpful.
                                    </li>
                                    <li>
                                        <strong>Other exceptional circumstances:</strong> Victim of crime, serious accident, major financial crisis beyond your control. Police reports, court documents, or professional evidence required.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Usually DOESN&apos;T Qualify as CPR:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>General difficulty with course material or finding it harder than expected</li>
                                    <li>Poor time management or not attending lectures/seminars</li>
                                    <li>Working part-time jobs (unless extreme circumstances)</li>
                                    <li>Relationship breakups (unless involving abuse/crisis)</li>
                                    <li>Deciding the course isn&apos;t right for you</li>
                                    <li>Financial difficulties from lifestyle choices</li>
                                    <li>Minor illnesses or short-term issues</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">The CPR Application Process:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Document everything:</strong> Keep all medical letters, certificates, university support service records, counseling attendance, GP notes, specialist letters, etc.
                                    </li>
                                    <li>
                                        <strong>Notify university:</strong> Tell your department and student support about circumstances as they happen. Get documentation from university confirming they were aware.
                                    </li>
                                    <li>
                                        <strong>Apply for funding repeat year:</strong> Submit new student finance application marking it as repeat year and indicating CPR.
                                    </li>
                                    <li>
                                        <strong>Provide evidence:</strong> Submit all supporting documentation to Student Finance England. Write clear cover letter explaining timeline of circumstances and impact on studies.
                                    </li>
                                    <li>
                                        <strong>Await decision:</strong> SFE reviews and decides if CPR justified. They may request additional evidence or clarification.
                                    </li>
                                </ol>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Important:</strong> Apply early. Don&apos;t wait until results day—submit CPR evidence as soon as you know you&apos;ll need to repeat.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">If CPR Is Refused:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    If Student Finance England refuses your CPR claim and won&apos;t fund a repeat year, your options:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Appeal the decision:</strong> You can request reconsideration with additional evidence</li>
                                    <li><strong>Self-fund repeat year:</strong> Pay £9,250 tuition + living costs yourself or through family</li>
                                    <li><strong>Take a loan elsewhere:</strong> Bank loan or career development loan (expensive, not recommended)</li>
                                    <li><strong>Withdraw and don&apos;t repeat:</strong> Accept the failed year and pursue other options</li>
                                    <li><strong>Change course:</strong> If you have remaining funding years, apply to different course instead</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Repeat Year Funding If CPR Approved:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    When CPR is accepted:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>You receive full tuition and maintenance loan for the repeat year</li>
                                    <li>The repeated year DOES count against your total entitlement</li>
                                    <li>You effectively use your &quot;gift year&quot; for the repeat</li>
                                    <li>Your debt increases by the cost of the repeat year (~£18k-£22k)</li>
                                    <li>If you fail again, you almost certainly won&apos;t get further funding</li>
                                </ul>
                            </div>
                        </section>

                        {/* Transfer Process */}
                        <section id="transfer-process" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The Transfer Process Step-by-Step
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Successfully changing course requires coordination between you, your current university, your new university (if applicable), and Student Finance England. Here&apos;s exactly how to navigate it:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Internal Transfer Process (Same University):</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            1
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Research and Decide</p>
                                            <p>Check new course requirements, speak with department heads, understand if you can transfer credits. Most important: verify you have enough funding years remaining.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            2
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Meet with Student Support</p>
                                            <p>University student support services can advise on transfer process, funding implications, and help coordinate the change. They&apos;re experienced with course changes.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            3
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Submit Internal Transfer Application</p>
                                            <p>Complete your university&apos;s internal transfer form. Include reasons for change, academic record, and any supporting information. Target department reviews.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            4
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Acceptance and Registration</p>
                                            <p>If accepted, university updates your course registration. This usually happens within 1-2 weeks. You&apos;re now officially on the new course.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            5
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Funding Update</p>
                                            <p>University notifies Student Finance England of course change. SFE updates your account. Check your online account to confirm new course details and remaining entitlement.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Timeline:</strong> Internal transfers often complete within 2-4 weeks if done early in academic year. Minimal funding disruption expected.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">External Transfer Process (Different University):</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            1
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Research Target Universities</p>
                                            <p>Identify universities accepting transfer students. Some courses don&apos;t accept transfers. Check entry requirements—you&apos;ll need to meet standard entry criteria.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            2
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Apply Through UCAS</p>
                                            <p>Submit UCAS application for desired course. You must declare all previous study. Universities can see your academic history. Explain your reasons for transferring in personal statement.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            3
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Notify Current University</p>
                                            <p>Once you receive and accept an offer, formally notify your current university of withdrawal. Get written confirmation of withdrawal date—crucial for funding.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            4
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Inform Student Finance England IMMEDIATELY</p>
                                            <p>Within 5 days of withdrawal, notify SFE. Provide details: withdrawal date, new university, new course start date. Request transfer of funding to new institution. This is CRITICAL—delays cause funding gaps.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            5
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Apply for Funding at New University</p>
                                            <p>Submit student finance application for new course. May be treated as continuation or new application depending on circumstances. Declare all previous study to ensure correct entitlement calculation.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            6
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Enroll and Confirm Funding</p>
                                            <p>Complete enrollment at new university. Confirm with SFE that funding is active. Check first payment dates for both tuition and maintenance loan.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Timeline:</strong> External transfers take 6-12 weeks minimum. Plan ahead—ideally complete before start of new academic year to avoid funding gaps.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Timing Considerations:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Census date matters:</strong> If you withdraw before your university&apos;s census date (usually late October), that year might not count against your entitlement. After census date, it definitely counts.
                                    </li>
                                    <li>
                                        <strong>Mid-year transfers are difficult:</strong> Most transfers happen between academic years. Mid-year transfers (January) have complications with funding and course alignment.
                                    </li>
                                    <li>
                                        <strong>Funding gaps:</strong> If withdrawal from old university and enrollment at new university don&apos;t align perfectly, you may have months without maintenance loan income. Budget for this.
                                    </li>
                                    <li>
                                        <strong>Application deadlines:</strong> UCAS deadlines for transfers vary by university. Some have rolling admission, others have strict deadlines. Research early.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Documents You&apos;ll Need:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Written confirmation of withdrawal from current university (with effective date)</li>
                                    <li>Academic transcript showing courses taken and grades</li>
                                    <li>UCAS acceptance for new course (if external transfer)</li>
                                    <li>Evidence of previous student finance (your SFE customer reference number)</li>
                                    <li>ID documents (passport, birth certificate) for funding application</li>
                                    <li>Bank details for new maintenance loan payments</li>
                                    <li>Evidence of CPR if repeating year due to failure</li>
                                </ul>
                            </div>
                        </section>

                        {/* Strategic Considerations */}
                        <section id="strategic-considerations" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Strategic Considerations: Should You Switch?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Changing course is a significant decision with long-term implications. Here&apos;s a framework for deciding whether to switch:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Good Reasons to Change Course:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>Wrong subject choice:</strong> You&apos;ve realized your passion/skills lie elsewhere. Better to switch early than force through three years of misery.
                                        </li>
                                        <li>
                                            <strong>Poor career prospects:</strong> Research shows your current course has weak graduate employment. New course has significantly better outcomes.
                                        </li>
                                        <li>
                                            <strong>Unmanageable difficulty:</strong> Despite genuine effort, the course is beyond your ability (e.g., discovered you hate/can&apos;t do lab work in Chemistry).
                                        </li>
                                        <li>
                                            <strong>Clear alternative path:</strong> You&apos;ve identified a specific course that better matches your goals and abilities.
                                        </li>
                                        <li>
                                            <strong>Early timing:</strong> You&apos;re still in Year 1, minimizing wasted time and money.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Poor Reasons to Change Course:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>Temporary difficulty:</strong> One bad module or semester doesn&apos;t mean you should quit. Most courses have challenging periods.
                                        </li>
                                        <li>
                                            <strong>Social reasons:</strong> Not liking your coursemates or wanting to join friends on different course. Social circles change and adapt.
                                        </li>
                                        <li>
                                            <strong>Single lecturer:</strong> Disliking one professor isn&apos;t reason to switch—you won&apos;t have them forever.
                                        </li>
                                        <li>
                                            <strong>Grass is greener syndrome:</strong> Every course has pros and cons. Switching won&apos;t make university perfect.
                                        </li>
                                        <li>
                                            <strong>Late timing:</strong> Switching in Year 3 means restarting—that&apos;s 6 years for a 3-year degree. Rarely worth it.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Questions to Ask Yourself:</h3>
                                    <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                        <li>
                                            <strong>Is this a temporary feeling or fundamental mismatch?</strong> Wait at least one full semester before deciding. First-year adjustment is hard for everyone.
                                        </li>
                                        <li>
                                            <strong>Have I used university support services?</strong> Academic advisors, mental health services, and student support can help you succeed in your current course.
                                        </li>
                                        <li>
                                            <strong>What will the new course give me that current course can&apos;t?</strong> Be specific. &quot;I&apos;ll be happier&quot; isn&apos;t enough—what exactly will be different?
                                        </li>
                                        <li>
                                            <strong>Can I afford the extra year(s)?</strong> Not just student loans, but accommodation, opportunity cost of delayed career start.
                                        </li>
                                        <li>
                                            <strong>Am I switching TO something or AWAY from something?</strong> Running away from difficulty often leads to same issues elsewhere. Moving toward a clear goal is different.
                                        </li>
                                        <li>
                                            <strong>What do my parents/supporters think?</strong> If they&apos;re financially supporting you, their view matters. They&apos;ll fund extra years.
                                        </li>
                                        <li>
                                            <strong>Will I regret not trying harder at current course?</strong> Sometimes perseverance through difficulty is more valuable than switching.
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Alternative to Switching: Module Changes and Minor Adjustments</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Before committing to a full course change, consider:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Change optional modules:</strong> Most courses let you choose electives. Pick ones that interest you more.</li>
                                    <li><strong>Transfer to related course:</strong> Psychology → Neuroscience, or Business → Economics might preserve more credits</li>
                                    <li><strong>Add a minor:</strong> Keep your main degree but add complementary minor field</li>
                                    <li><strong>Take a year out:</strong> Sometimes a break helps you return refreshed and committed</li>
                                    <li><strong>Focus on graduate prospects:</strong> Your undergraduate degree doesn&apos;t dictate career—many graduates work in unrelated fields</li>
                                </ul>
                            </div>
                        </section>

                        {/* Common Scenarios */}
                        <section id="common-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Common Scenarios and Outcomes
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here are real-world scenarios showing how course changes play out:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Early Internal Transfer (Ideal Case)</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Sarah started Computer Science but realized after one semester she preferred Business. She transferred internally at her university.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1 CS: £18,750 borrowed (tuition + maintenance)</li>
                                            <li>• Years 2-4 Business: £56,250 borrowed</li>
                                            <li>• Total debt: £75,000 (vs £56,250 if started Business)</li>
                                            <li>• Extra cost: £18,750 plus interest</li>
                                            <li>• Graduated on time (no delay)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Relatively low cost for finding the right path. No delay to graduation. If Sarah&apos;s heading for write-off career, the extra £18k doesn&apos;t matter practically.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: External Transfer After Year 1</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> James studied History at a low-ranked university, transferred to Law at a Russell Group university after Year 1.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1 History (cheaper city): £17,500 borrowed</li>
                                            <li>• Years 2-4 Law (London): £66,816 borrowed</li>
                                            <li>• Total debt: £84,316</li>
                                            <li>• Lost 3 months rent overlap (£1,800)</li>
                                            <li>• Starting corporate law job at £50k</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> High debt but strong career prospects. Law degree from Russell Group has significantly better employment than History at lower-ranked university. The extra debt (~£28k) will likely be repaid given career path, but the career upgrade justifies the cost.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Complete Restart After Withdrawal</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Emily started Engineering, dropped out in Year 2 due to mental health crisis, took 18 months off, returned to study English Literature.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Years 1-2 Engineering: £37,500 borrowed (incomplete)</li>
                                            <li>• Years 1-3 English: £56,250 borrowed</li>
                                            <li>• Total debt: £93,750</li>
                                            <li>• Gap year: No additional debt but 18 months delayed</li>
                                            <li>• Career: Teaching (£28k-£42k)</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> High debt (£93k) but will definitely reach write-off as a teacher. Teaching salary means she&apos;ll pay similar total whether she owes £60k or £93k. The gap year was necessary for health recovery. Total paid will be ~£35k-£45k over 40 years regardless of starting debt.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: Failed Year Without CPR (Problematic)</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Mark failed Year 2 of Physics due to poor attendance and not studying. No compelling personal reasons. Applied to repeat—funding denied.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Years 1-2 borrowed: £37,500</li>
                                            <li>• No degree obtained</li>
                                            <li>• Options: (a) Self-fund repeat year at £9,250 + living costs, (b) Leave without degree</li>
                                            <li>• Chose to leave, works in retail management</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> £37,500 debt with no degree. Still repays 9% of income over £25k for 40 years. At £32k salary, pays ~£630/year for 40 years = ~£25k total, then £12k write-off. Painful outcome—debt without qualification. This illustrates importance of taking degree seriously and not relying on repeat year as safety net.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 5: Switching to Medicine After Year 1 (Short Funding)</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Situation:</strong> Lucy studied Biology Year 1, transferred to 6-year Medicine program.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Financial outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1 Biology: £18,750 borrowed (entitlement: 4 years, used 1, remaining: 3)</li>
                                            <li>• Medicine requires 6 years funding</li>
                                            <li>• Gets funding for Years 1-3 of Medicine only</li>
                                            <li>• Must self-fund Years 4-6: £27,750 tuition + £28,500 living = £56,250</li>
                                            <li>• Parents provided funding for final 3 years</li>
                                            <li>• Total debt: £75,000 (Years 1-4). Self-funded: £56,250</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Analysis:</strong> Medicine has excellent career prospects (consultant salary £88k-£140k), so the investment is justified if family can afford it. Without family support, this switch would be impossible. NHS bursaries for final years of medicine help some students but don&apos;t cover full gap. This scenario shows why switching to longer courses is financially complex.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Course changes are possible but have lasting implications
                            </h3>
                            <p className="text-gray-700">
                                Switch early if you must, understand your remaining funding entitlement, and make informed decisions weighing extra debt against career prospects. The &quot;gift year&quot; exists to give you flexibility—use it wisely. Your total debt accumulates from all years of study, but whether it matters financially depends entirely on your eventual career path.
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

export default ChangingCourseLoanAdjustments;