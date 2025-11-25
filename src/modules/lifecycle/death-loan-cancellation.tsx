import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const DeathLoanCancellation: React.FC = () => {
    const tocItems = [
        { id: "automatic-cancellation", title: "Automatic Cancellation Upon Death", level: 2 },
        { id: "cancellation-process", title: "The Cancellation Process: Step by Step", level: 2 },
        { id: "timeline-documentation", title: "Timeline and Required Documentation", level: 2 },
        { id: "estate-protection", title: "Estate Protection: What Families Need to Know", level: 2 },
        { id: "paye-deductions", title: "PAYE Deductions Made After Death", level: 2 },
        { id: "comparison-other-debts", title: "Comparison with Other Debts", level: 2 },
        { id: "special-circumstances", title: "Special Circumstances and Edge Cases", level: 2 },
        { id: "practical-guidance", title: "Practical Guidance for Families", level: 2 },
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
                                    Death: Loan Cancellation
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Death and Student Loan Cancellation: No Estate Liability
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding automatic loan cancellation upon death, no estate recovery, and protection for families
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
                                If the borrower dies, their student loan is automatically cancelled. No repayment from the estate, no liability for family members, no inheritance reduction. Student Finance England writes off the entire outstanding balance—whether it&apos;s £5,000 or £75,000, it&apos;s completely wiped.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This is one of the most protective features of UK student loans, distinguishing them from nearly every other form of borrowing. Unlike mortgages, personal loans, credit cards, or car finance, student loans don&apos;t become a claim against the deceased&apos;s estate. Families grieving the loss of a loved one don&apos;t face the additional trauma of inheriting their educational debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Understanding how death cancellation works, the process families need to follow, and what protections exist helps provide peace of mind during life and practical guidance when it&apos;s needed most. This guide explains the cancellation process, timeline, and addresses common questions families have when dealing with student loans after a death.
                            </p>
                        </section>

                        {/* Automatic Cancellation */}
                        <section id="automatic-cancellation" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Automatic Cancellation Upon Death
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                UK student loans are income-contingent debt that exists only during the borrower&apos;s lifetime. They&apos;re fundamentally different from secured or unsecured commercial debt because they&apos;re designed as a contribution to education costs, not traditional lending.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Happens Immediately Upon Death:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Loan repayment stops:</strong> No further deductions from salary or self-assessment</li>
                                    <li><strong>Interest stops accruing:</strong> The debt is frozen at the balance at date of death</li>
                                    <li><strong>Collection activity ceases:</strong> Student Finance England doesn&apos;t pursue the estate</li>
                                    <li><strong>PAYE deductions halt:</strong> Employers are notified to stop taking loan repayments</li>
                                    <li><strong>Written-off completely:</strong> Once death certificate is processed, the entire balance is cancelled</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Applies to All Student Loan Plans:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Death cancellation is universal across all UK student loan plans:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Plan 1</strong> (pre-2012 English loans, all Scottish loans): Full cancellation</li>
                                    <li><strong>Plan 2</strong> (2012-2023 English loans): Full cancellation</li>
                                    <li><strong>Plan 4</strong> (Scottish loans): Full cancellation</li>
                                    <li><strong>Plan 5</strong> (2023+ English loans): Full cancellation</li>
                                    <li><strong>Postgraduate Loans:</strong> Full cancellation</li>
                                    <li><strong>Pre-1998 &quot;mortgage-style&quot; loans:</strong> Also cancelled (not recovered from estate)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    The cancellation policy is identical regardless of outstanding balance, repayment history, or borrower circumstances. A recent graduate with £60,000 debt receives the same cancellation as someone who&apos;s been repaying for 20 years with £3,000 remaining.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Important Distinction:</strong> This applies to UK government student loans only. Private student loans from banks or alternative lenders (rare in the UK but common for international study) follow standard debt recovery rules and may be claimed from the estate. Always confirm loan type if you&apos;re unsure—government loans will be serviced by Student Finance England, Scotland, Wales, or Northern Ireland.
                                </p>
                            </div>
                        </section>

                        {/* Cancellation Process */}
                        <section id="cancellation-process" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The Cancellation Process: Step by Step
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While the loan is automatically cancelled upon death, families or executors must notify Student Finance England to trigger the administrative process. Here&apos;s exactly how it works:
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Step-by-Step Process:</h3>
                                <ol className="space-y-4">
                                    <li className="text-gray-700 text-sm">
                                        <strong className="text-gray-900">1. Notify Student Finance England</strong>
                                        <p className="mt-1">Contact Student Finance England as soon as practical after the death. This can be done by phone, post, or online. You&apos;ll need the deceased&apos;s Customer Reference Number (found on loan statements) or their National Insurance number.</p>
                                        <p className="mt-2 text-xs bg-blue-50 p-2 rounded">
                                            Phone: 0300 100 0611 (Monday to Friday, 8am to 6pm)<br />
                                            Address: Student Loans Company, 100 Bothwell Street, Glasgow, G2 7JD
                                        </p>
                                    </li>
                                    <li className="text-gray-700 text-sm">
                                        <strong className="text-gray-900">2. Provide Death Certificate</strong>
                                        <p className="mt-1">Send a certified copy of the death certificate. Student Finance England accepts:</p>
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>Original death certificate (returned after processing)</li>
                                            <li>Certified copy from the registry office</li>
                                            <li>Solicitor-certified copy if managing probate</li>
                                        </ul>
                                        <p className="mt-2">You don&apos;t need to send other documents like the will, grant of probate, or financial statements—just the death certificate.</p>
                                    </li>
                                    <li className="text-gray-700 text-sm">
                                        <strong className="text-gray-900">3. Await Confirmation</strong>
                                        <p className="mt-1">Student Finance England will process the cancellation and send written confirmation to the executor or next of kin. This confirmation letter states:</p>
                                        <ul className="list-disc ml-6 mt-1">
                                            <li>The loan balance at date of death</li>
                                            <li>Confirmation the balance is written off</li>
                                            <li>That no further payments are due or will be collected</li>
                                            <li>Instructions for any PAYE overpayments to be refunded</li>
                                        </ul>
                                    </li>
                                    <li className="text-gray-700 text-sm">
                                        <strong className="text-gray-900">4. Notify Employer (if employed)</strong>
                                        <p className="mt-1">If the deceased was employed at the time of death, inform the employer to stop PAYE deductions. Provide them with a copy of Student Finance England&apos;s cancellation confirmation. Most employers will have already stopped deductions once informed of the death through payroll processes, but explicit confirmation ensures no further deductions occur.</p>
                                    </li>
                                    <li className="text-gray-700 text-sm">
                                        <strong className="text-gray-900">5. Claim Refund for Post-Death Deductions</strong>
                                        <p className="mt-1">If any loan repayments were deducted via PAYE after the date of death, these will be refunded to the estate. Student Finance England coordinates with HMRC to process these refunds, typically within 6-8 weeks.</p>
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>No Urgency Required:</strong> While it&apos;s advisable to notify Student Finance England reasonably soon, there&apos;s no strict deadline. The loan doesn&apos;t become enforceable against the estate if you delay notification. Focus on more immediate matters first—student loan cancellation can wait until you&apos;re ready to handle administrative tasks.
                                </p>
                            </div>
                        </section>

                        {/* Timeline and Documentation */}
                        <section id="timeline-documentation" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Timeline and Required Documentation
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding the expected timeline helps families know what to expect during an already difficult period.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Typical Timeline:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            1
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Week 1-2: Initial Notification</p>
                                            <p>Family/executor contacts Student Finance England by phone or post with basic details and death certificate.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            2
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Week 2-4: Processing</p>
                                            <p>Student Finance England processes the death certificate and updates their records. During this time, PAYE deductions should stop automatically.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            3
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Week 4-6: Written Confirmation</p>
                                            <p>Cancellation confirmation letter sent to executor/next of kin stating the balance is written off and no further action required.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            4
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Week 6-12: Refund Processing</p>
                                            <p>Any PAYE deductions made after death are refunded to the estate through HMRC and Student Finance England coordination.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Required Documentation:</h3>
                                <p className="text-gray-700 text-sm mb-2">The documentation requirements are minimal:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Essential:</strong> Death certificate (original or certified copy)</li>
                                    <li><strong>Helpful:</strong> Deceased&apos;s Customer Reference Number or National Insurance number</li>
                                    <li><strong>Not required:</strong> Grant of probate, will, financial statements, bank details</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    Student Finance England doesn&apos;t require extensive documentation because they&apos;re not making a claim—they&apos;re simply confirming the debt is cancelled.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>If Processing Takes Longer:</strong> In rare cases, processing may take longer than 6 weeks, particularly if the death occurred abroad or if there are complications with the death certificate. If you haven&apos;t received confirmation within 8 weeks, contact Student Finance England for an update. The delay doesn&apos;t affect the cancellation—it&apos;s just administrative processing time.
                                </p>
                            </div>
                        </section>

                        {/* Estate Protection */}
                        <section id="estate-protection" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Estate Protection: What Families Need to Know
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The key principle: student loans are never a claim against the estate. This means inheritance, property, savings, and other assets pass to beneficiaries unaffected by any outstanding student debt.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What This Means in Practice:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>No estate deduction:</strong> If someone dies with £50,000 in savings and £40,000 in student debt, the full £50,000 passes to beneficiaries. The student debt is simply cancelled.
                                    </li>
                                    <li>
                                        <strong>Property unaffected:</strong> Family homes, investment properties, and other real estate pass to heirs without any student loan deduction or lien.
                                    </li>
                                    <li>
                                        <strong>No priority claim:</strong> Student loans aren&apos;t secured debt, so they don&apos;t take priority over other estate debts. In fact, they don&apos;t participate in estate settlement at all.
                                    </li>
                                    <li>
                                        <strong>Beneficiaries protected:</strong> Spouses, children, parents, and other beneficiaries receive their full inheritance with no student loan reduction.
                                    </li>
                                    <li>
                                        <strong>No impact on life insurance:</strong> Life insurance payouts go entirely to named beneficiaries, not reduced by student debt.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Real-World Scenario:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    <strong>Case: Recent graduate dies unexpectedly</strong>
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-sm mb-2">
                                        • Outstanding student loan: £52,000 (tuition + maintenance from 3-year degree)<br />
                                        • Had been working for 18 months, repaid approximately £1,200<br />
                                        • Estate value: £15,000 (savings, car, personal belongings)<br />
                                        • Life insurance: £100,000 payout to parents
                                    </p>
                                    <p className="text-gray-700 text-sm font-semibold mt-3 mb-2">What happens:</p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Student loan: £52,000 cancelled completely. No claim against estate.</li>
                                        <li>Estate: Full £15,000 distributed to beneficiaries as per will</li>
                                        <li>Life insurance: Full £100,000 paid to parents, no student loan deduction</li>
                                        <li>Family receives: £115,000 total, with no student debt liability</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Compare with Other Debt:</strong> If the same person had £52,000 in credit card debt or personal loans instead of student loans, those debts would be paid from the estate before any distribution to beneficiaries. Student loans are uniquely protected—they&apos;re written off regardless of estate value.
                                </p>
                            </div>
                        </section>

                        {/* PAYE Deductions */}
                        <section id="paye-deductions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                PAYE Deductions Made After Death
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If someone dies mid-month or before payroll has fully processed, their employer may have already deducted student loan repayments for that pay period. These deductions are refunded to the estate.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How Post-Death PAYE Refunds Work:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Employer notified of death:</strong> Usually through next-of-kin or HR department. Employer processes final salary payment and any owed holiday pay.
                                    </li>
                                    <li>
                                        <strong>Final payslip may include student loan deduction:</strong> If payroll was already processed before death was confirmed, the deduction goes through to HMRC.
                                    </li>
                                    <li>
                                        <strong>Student Finance England identifies overpayment:</strong> Once death is registered, they cross-reference PAYE deductions and identify any made after the date of death.
                                    </li>
                                    <li>
                                        <strong>Refund issued to estate:</strong> Student Finance England coordinates with HMRC to refund the deduction. Payment goes to the executor or administrator of the estate.
                                    </li>
                                </ol>
                                <p className="text-gray-700 text-sm mt-3">
                                    Timeline for refund: typically 6-12 weeks after death is registered with Student Finance England.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Self-Employed or Self-Assessment Scenarios:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    If the deceased was self-employed and made student loan payments through Self Assessment:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Payments made before death are not refundable (they were legitimately due)</li>
                                    <li>Any payment on account scheduled after death should be cancelled</li>
                                    <li>Contact HMRC Self Assessment team to confirm the deceased&apos;s tax record shows date of death</li>
                                    <li>If a Self Assessment payment was taken after death, claim a refund through HMRC</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Practical Note:</strong> Refunds for post-death deductions are usually modest (one month&apos;s repayment, often £50-£300), but they&apos;re automatically processed. You don&apos;t need to specifically claim them—Student Finance England identifies and refunds them as part of the standard cancellation process.
                                </p>
                            </div>
                        </section>

                        {/* Comparison with Other Debts */}
                        <section id="comparison-other-debts" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Comparison with Other Debts
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student loans are treated fundamentally differently from other forms of borrowing when someone dies. Understanding these differences helps families and executors prioritize estate administration.
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Debt Type</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Estate Liability</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Impact on Inheritance</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">
                                        <tr className="bg-green-50">
                                            <td className="px-4 py-2 border-b font-semibold">Student Loans (UK Govt)</td>
                                            <td className="px-4 py-2 border-b">None - automatically cancelled</td>
                                            <td className="px-4 py-2 border-b">Zero impact - inheritance unaffected</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Mortgage (with insurance)</td>
                                            <td className="px-4 py-2 border-b">Paid by life insurance policy</td>
                                            <td className="px-4 py-2 border-b">Property passes to beneficiaries mortgage-free</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="px-4 py-2 border-b">Mortgage (no insurance)</td>
                                            <td className="px-4 py-2 border-b">Must be paid from estate</td>
                                            <td className="px-4 py-2 border-b">Reduces inheritance or forces property sale</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Credit Cards</td>
                                            <td className="px-4 py-2 border-b">Must be paid from estate</td>
                                            <td className="px-4 py-2 border-b">Reduces inheritance pound-for-pound</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="px-4 py-2 border-b">Personal Loans</td>
                                            <td className="px-4 py-2 border-b">Must be paid from estate</td>
                                            <td className="px-4 py-2 border-b">Priority creditor - reduces inheritance</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Car Finance</td>
                                            <td className="px-4 py-2 border-b">Must be paid or car returned</td>
                                            <td className="px-4 py-2 border-b">Reduces estate value</td>
                                        </tr>
                                        <tr className="bg-red-50">
                                            <td className="px-4 py-2 border-b">Council Tax Arrears</td>
                                            <td className="px-4 py-2 border-b">Must be paid from estate</td>
                                            <td className="px-4 py-2 border-b">Priority debt - reduces inheritance</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Private Student Loans</td>
                                            <td className="px-4 py-2 border-b">Usually claimed from estate</td>
                                            <td className="px-4 py-2 border-b">Reduces inheritance (check specific terms)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why Student Loans Are Different:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    UK student loans were designed as a social investment in education, not commercial lending. The key differences:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Income-contingent:</strong> Repayment depends on income, so death (zero future income) means zero repayment obligation</li>
                                    <li><strong>No collateral:</strong> Unlike mortgages or car finance, there&apos;s no asset to seize or claim</li>
                                    <li><strong>Government policy:</strong> Deliberately designed to prevent student debt from being inherited burden</li>
                                    <li><strong>Non-transferable:</strong> The loan is tied exclusively to the borrower—it can&apos;t pass to anyone else</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>International Comparison:</strong> This protection is unique to UK student loans. In the United States, federal student loans are cancelled on death, but private student loans often become estate liabilities. Some countries have no death discharge provision at all. UK borrowers have significant protection not found in many other student loan systems.
                                </p>
                            </div>
                        </section>

                        {/* Special Circumstances */}
                        <section id="special-circumstances" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Special Circumstances and Edge Cases
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While death cancellation is straightforward in most cases, certain situations require specific consideration:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">No Cosigners or Guarantors</h3>
                                    <p className="text-gray-700 text-sm">
                                        UK student loans don&apos;t have cosigners or guarantors. Unlike some commercial loans where a parent or family member guarantees the debt, student loans are entirely the borrower&apos;s personal obligation. Upon death, there&apos;s no one else for Student Finance England to pursue—the loan simply ends.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Married Couples and Civil Partnerships</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Each partner&apos;s student loan is independent. If one spouse dies, only their loan is cancelled. The surviving spouse&apos;s loan continues unaffected.
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        <strong>Example:</strong> If both partners have student loans and one passes away, the deceased&apos;s loan (say £35,000) is cancelled. The survivor continues repaying their own loan (say £42,000) based on their individual income. The cancelled debt doesn&apos;t affect the survivor&apos;s loan or repayment obligations.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Death Abroad</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        If a UK student loan borrower dies abroad, the same cancellation applies. Families should:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                                        <li>Obtain an official death certificate from the country where death occurred</li>
                                        <li>Have it translated to English if necessary (by certified translator)</li>
                                        <li>Register the death with the UK Consulate or Embassy if possible</li>
                                        <li>Send documentation to Student Finance England as usual</li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        Processing may take longer due to international documentation verification, but the loan is still fully cancelled.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-orange-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Multiple Loans (Undergraduate + Postgraduate)</h3>
                                    <p className="text-gray-700 text-sm">
                                        If someone has both an undergraduate student loan and a postgraduate loan, both are cancelled upon death. They&apos;re processed together—one death certificate covers all UK government student loans in the deceased&apos;s name.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">What If Someone Has Private Loans Too?</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Some students take private loans (from banks) alongside government student loans, particularly for living costs or international study. These private loans follow standard debt rules:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Check the loan agreement for death discharge provisions</li>
                                        <li>Most UK private loans will claim from the estate</li>
                                        <li>If there&apos;s a guarantor, they may become liable</li>
                                        <li>These are NOT automatically cancelled like government student loans</li>
                                    </ul>
                                    <p className="text-gray-700 text-sm mt-2">
                                        Always treat government student loans (Student Finance England) separately from private or commercial loans.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Practical Guidance */}
                        <section id="practical-guidance" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Practical Guidance for Families
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you&apos;re managing affairs after the death of someone with a student loan, here&apos;s a practical checklist and guidance:
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Immediate Actions (First 2 Weeks):</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Don&apos;t worry about the student loan urgently.</strong> It&apos;s not a priority debt and won&apos;t affect the estate. Focus on registering the death, arranging the funeral, and contacting immediate creditors like mortgage lenders or utility companies.
                                    </li>
                                    <li>
                                        <strong>Gather loan information if easily available.</strong> Look for Student Finance England correspondence or loan statements showing the Customer Reference Number. Don&apos;t stress if you can&apos;t find it—Student Finance England can locate accounts using the National Insurance number.
                                    </li>
                                    <li>
                                        <strong>Notify the employer (if applicable).</strong> This stops salary payments and prevents PAYE deductions continuing. HR departments usually handle this as part of standard deceased employee procedures.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Within First Month:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Contact Student Finance England.</strong> Call 0300 100 0611 or write to them with the death certificate. Explain you&apos;re notifying them of the death to trigger loan cancellation.
                                    </li>
                                    <li>
                                        <strong>Send certified death certificate copy.</strong> Original or certified copy is fine. Student Finance England will return the original if you send it.
                                    </li>
                                    <li>
                                        <strong>Keep a record of your notification.</strong> Note the date you contacted them, who you spoke to (if by phone), and what documents you sent. This helps if you need to follow up.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Common Questions Families Ask:</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Q: Do we need a solicitor to handle student loan cancellation?</p>
                                        <p className="text-gray-700 text-sm mt-1">A: No. The process is administrative and straightforward. Executors or next of kin can handle it directly without legal representation.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Q: Should we mention the student loan in probate documents?</p>
                                        <p className="text-gray-700 text-sm mt-1">A: You can note it for completeness, but it&apos;s not a liability of the estate, so it doesn&apos;t affect probate valuation or inheritance tax calculations. Some executors list it as &quot;cancelled upon death&quot; for record-keeping purposes.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Q: What if Student Finance England sends payment demands after death?</p>
                                        <p className="text-gray-700 text-sm mt-1">A: This occasionally happens due to administrative lag—their system hasn&apos;t processed the death yet. Call them immediately with the death certificate details. The demands will stop, and no payment is due.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Q: Can we get a refund for repayments made in the months before death?</p>
                                        <p className="text-gray-700 text-sm mt-1">A: No. Repayments made before death were legitimately due based on the borrower&apos;s income at the time. Only post-death deductions are refunded.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Q: Does cancelling the loan affect tax or benefits?</p>
                                        <p className="text-gray-700 text-sm mt-1">A: No. Student loan cancellation is not taxable income to the estate or beneficiaries, and it doesn&apos;t count as a benefit or gift for inheritance tax purposes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Final Practical Note:</h3>
                                <p className="text-gray-700 text-sm">
                                    Dealing with a loved one&apos;s affairs after death is emotionally and administratively challenging. The student loan cancellation process is designed to be as simple as possible—send the death certificate, receive confirmation, done. Student Finance England understands families are grieving and keeps the process straightforward and respectful. Don&apos;t hesitate to call them if you have questions or need support through the process.
                                </p>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Student loans end with the borrower&apos;s life
                            </h3>
                            <p className="text-gray-700">
                                No estate liability, no family burden, no inheritance reduction. This protection is automatic and universal for all UK government student loans, providing peace of mind during life and practical relief for families after death.
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

export default DeathLoanCancellation;