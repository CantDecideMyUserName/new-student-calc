import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const FirstJobRepaymentShock: React.FC = () => {
    const tocItems = [
        { id: "repayment-shock-reality", title: "The First Payslip Shock", level: 2 },
        { id: "when-repayments-start", title: "When Repayments Actually Start", level: 2 },
        { id: "paye-deduction-mechanics", title: "How PAYE Deductions Work", level: 2 },
        { id: "calculating-your-deduction", title: "Calculating Your Monthly Deduction", level: 2 },
        { id: "take-home-reality", title: "Take-Home Pay Reality Check", level: 2 },
        { id: "common-misconceptions", title: "Common Graduate Misconceptions", level: 2 },
        { id: "checking-deductions", title: "Checking Your Deductions Are Correct", level: 2 },
        { id: "budgeting-with-deductions", title: "Budgeting as a Graduate", level: 2 },
        { id: "below-threshold-scenarios", title: "What If You Earn Below £25,000?", level: 2 },
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
                                    First Job Repayment Shock
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        First Job Repayment Shock: When Student Loan Deductions Begin
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding first payslip deductions, Plan 5 repayment start timeline, and managing graduate salary expectations
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
                                You&apos;ve graduated, secured your first proper job at £30,000, and you&apos;re mentally planning how to spend your new salary. Rent upgrade? New car? Save for a deposit? Then your first payslip arrives and reality hits: after income tax (£1,000/month), National Insurance (£350/month), and student loan (£37.50/month), your £2,500 gross monthly salary becomes £1,112.50 net. Welcome to graduate life.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Many graduates are genuinely shocked when student loan deductions begin. During university, the loans felt abstract—numbers on a Student Finance England portal you rarely checked. Suddenly they&apos;re real deductions reducing your take-home pay every single month. Understanding exactly when repayments start, how PAYE deductions work, and what your actual take-home will be helps you budget realistically and avoid the common mistake of overcommitting financially based on gross salary.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This guide explains the repayment start date rules, breaks down your first payslip line by line, shows you how to calculate exact deductions, and provides a reality check on take-home pay at different graduate salary levels. If you&apos;re about to start your first graduate job—or you&apos;ve already started and are confused by the deductions—this explains everything.
                            </p>
                        </section>

                        {/* Repayment Shock Reality */}
                        <section id="repayment-shock-reality" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The First Payslip Shock
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The transition from student to graduate employee brings an immediate collision with the UK tax system. Most students have only worked part-time during university, often earning below the tax threshold. Your first graduate job typically crosses multiple deduction thresholds simultaneously.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Three Simultaneous Shocks:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Income Tax (20%):</strong> Anything you earn over £12,570 (personal allowance) gets taxed at 20%. At £30k, you pay ~£3,486/year in income tax.
                                    </li>
                                    <li>
                                        <strong>National Insurance (12%):</strong> Earnings between £12,570 and £50,270 face 12% NI. At £30k, you pay ~£2,086/year in National Insurance.
                                    </li>
                                    <li>
                                        <strong>Student Loan (9%):</strong> Earnings over £25,000 trigger 9% student loan deductions. At £30k, you pay £450/year in loan repayments.
                                    </li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Combined impact:</strong> Your marginal rate between £25k-£50k is 41% (20% + 12% + 9%). For every £1,000 salary increase in this range, you take home only £590. This is why that £30k job offer feels disappointing when the first payslip arrives.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Real Graduate Payslip Example:</h3>
                                <div className="bg-white p-4 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 mb-3">£30,000 Annual Salary Breakdown</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between py-1 border-b border-gray-200">
                                            <span className="text-gray-700">Gross Monthly Salary</span>
                                            <span className="font-semibold text-gray-900">£2,500.00</span>
                                        </div>
                                        <div className="flex justify-between py-1 text-red-600">
                                            <span>Income Tax (20%)</span>
                                            <span>-£290.50</span>
                                        </div>
                                        <div className="flex justify-between py-1 text-red-600">
                                            <span>National Insurance (12%)</span>
                                            <span>-£173.80</span>
                                        </div>
                                        <div className="flex justify-between py-1 text-red-600">
                                            <span>Student Loan (9% above £25k)</span>
                                            <span>-£37.50</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-t-2 border-gray-900 font-bold text-gray-900">
                                            <span>Net Monthly Take-Home</span>
                                            <span>£1,998.20</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-xs mt-3">
                                        <strong>Reality check:</strong> That £2,500 monthly salary you negotiated? You actually receive £1,998.20. The difference (£501.80 or 20% of gross) goes to tax, NI, and student loans. This is before pension contributions, which would reduce take-home further.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why Graduates Feel Poor Despite &quot;Good&quot; Salaries:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    The UK graduate starting salary average is ~£27,000-£30,000. This sounds reasonable until you realize:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>You take home only £1,800-£2,000/month after all deductions</li>
                                    <li>London rent easily costs £800-£1,200/month for a room</li>
                                    <li>Student loan deductions continue for potentially 40 years</li>
                                    <li>You&apos;re probably still living like a student while trying to act like a professional</li>
                                    <li>Friends who didn&apos;t go to university (no debt, 3 years work experience) may be earning similar or more</li>
                                </ul>
                            </div>
                        </section>

                        {/* When Repayments Start */}
                        <section id="when-repayments-start" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                When Repayments Actually Start
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Plan 5 loans (for students who started in September 2023 or later) have specific rules about when repayments begin. Understanding the timing helps you anticipate when deductions will appear.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Core Rule:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    <strong>Repayments begin the April after you finish your course OR when you start earning above £25,000, whichever is later.</strong>
                                </p>
                                <p className="text-gray-700 text-sm">
                                    This means you get a grace period between finishing university and April of the following year where you don&apos;t make repayments even if earning above the threshold. This gives new graduates breathing room to establish themselves financially.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Timeline Examples:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Example 1: Standard Graduate Timeline</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>June 2024:</strong> Graduate from university</li>
                                            <li>• <strong>September 2024:</strong> Start job at £30,000</li>
                                            <li>• <strong>September 2024 - March 2025:</strong> No student loan deductions (grace period)</li>
                                            <li>• <strong>April 2025:</strong> Repayments begin automatically</li>
                                            <li>• <strong>First deduction:</strong> April 2025 payslip shows £37.50 SL deduction</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            This is the most common scenario. You get ~9 months of full salary (minus just tax and NI) before student loan deductions start.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Example 2: Start Job After April</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>June 2024:</strong> Graduate from university</li>
                                            <li>• <strong>June 2024 - April 2025:</strong> Travel, job hunting, earning below £25k</li>
                                            <li>• <strong>May 2025:</strong> Start job at £32,000</li>
                                            <li>• <strong>May 2025:</strong> Repayments begin immediately (past April, earning above threshold)</li>
                                            <li>• <strong>First deduction:</strong> May 2025 payslip shows £52.50 SL deduction</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            Because you started the job after the April following graduation, repayments begin immediately since you&apos;re already past the grace period.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Example 3: Low Starting Salary</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>June 2024:</strong> Graduate from university</li>
                                            <li>• <strong>September 2024:</strong> Start job at £23,000</li>
                                            <li>• <strong>April 2025:</strong> Still earning £23,000 (below threshold)</li>
                                            <li>• <strong>April 2025 onwards:</strong> No repayments (below £25k threshold)</li>
                                            <li>• <strong>March 2026:</strong> Promoted to £28,000</li>
                                            <li>• <strong>March 2026:</strong> Repayments begin at £22.50/month</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            If you&apos;re earning below £25k when April comes, you don&apos;t start repaying. Deductions only begin once you cross the threshold, regardless of when that happens.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Example 4: Gap Year Before Employment</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>June 2024:</strong> Graduate from university</li>
                                            <li>• <strong>June 2024 - June 2025:</strong> Travel, earn nothing or part-time below £25k</li>
                                            <li>• <strong>April 2025:</strong> Repayment liability technically begins, but you&apos;re not earning</li>
                                            <li>• <strong>September 2025:</strong> Start job at £30,000</li>
                                            <li>• <strong>September 2025:</strong> Repayments begin immediately</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            Gap years don&apos;t delay your repayment start date—it&apos;s still the April after you finish. But if you&apos;re not earning, there&apos;s nothing to deduct.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What &quot;Finish Your Course&quot; Means:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Your repayment start date is based on when you complete or leave your course, not when you graduate:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Completed degree:</strong> The month your last exam/submission is, not graduation ceremony</li>
                                    <li><strong>Dropped out:</strong> The month you formally withdrew</li>
                                    <li><strong>June finishers:</strong> Repayments start following April (9-month grace period)</li>
                                    <li><strong>December finishers:</strong> Repayments start following April (4-month grace period)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Important:</strong> Student Finance England tracks your course end date automatically through your university. You don&apos;t need to notify them you&apos;ve finished—they know.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How Your Employer Knows to Deduct:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    You don&apos;t need to tell your employer about student loans. HMRC informs them automatically:
                                </p>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Student Finance England notifies HMRC when your course ends</li>
                                    <li>HMRC updates your tax code with student loan plan information</li>
                                    <li>When you start a job, you provide your National Insurance number</li>
                                    <li>Employer checks HMRC database and sees you have student loan</li>
                                    <li>Payroll system automatically deducts the correct percentage</li>
                                </ol>
                                <p className="text-gray-700 text-sm mt-2">
                                    This happens seamlessly. Your payslip will show the deduction starting from the correct month.
                                </p>
                            </div>
                        </section>

                        {/* PAYE Deduction Mechanics */}
                        <section id="paye-deduction-mechanics" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How PAYE Deductions Work
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student loan repayments through PAYE (Pay As You Earn) happen automatically. Your employer calculates and deducts the amount, sending it directly to HMRC, who forward it to Student Finance England. You never see the money—it comes straight out of your gross pay.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The PAYE Deduction Process:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            1
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Employer Receives Tax Code</p>
                                            <p>HMRC provides your employer with your tax code, which includes information about student loan plan type (Plan 5 for recent graduates).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            2
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Monthly Calculation</p>
                                            <p>Payroll system calculates: (Your gross salary for this pay period - £25,000/12) × 9% = Student loan deduction</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            3
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Deduction Applied</p>
                                            <p>The calculated amount is deducted from your gross pay alongside tax and National Insurance. You see &quot;SL&quot; or &quot;Student Loan&quot; on your payslip.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            4
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">Payment to HMRC</p>
                                            <p>Your employer sends the deducted amount to HMRC along with your tax and NI. This happens monthly or quarterly depending on employer size.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                                            5
                                        </div>
                                        <div className="ml-3 text-sm text-gray-700">
                                            <p className="font-semibold text-gray-900">HMRC Forwards to Student Finance England</p>
                                            <p>HMRC allocates the payment to your student loan account. You can see it credited (with 2-3 month delay) in your SFE online account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Appears on Your Payslip:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Look for these lines on your monthly payslip:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200 font-mono text-xs">
                                    <div className="space-y-1">
                                        <div className="flex justify-between border-b pb-1">
                                            <span className="text-gray-700">BASIC SALARY</span>
                                            <span className="font-semibold">£2,500.00</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>TAX</span>
                                            <span>-£290.50</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>NI</span>
                                            <span>-£173.80</span>
                                        </div>
                                        <div className="flex justify-between text-red-600">
                                            <span>SL (Student Loan)</span>
                                            <span>-£37.50</span>
                                        </div>
                                        <div className="flex justify-between border-t-2 border-black pt-1 font-bold">
                                            <span>NET PAY</span>
                                            <span>£1,998.20</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    Some payslips show &quot;SL&quot;, others show &quot;Student Loan&quot; or &quot;SL5&quot; (indicating Plan 5). The line might also show your year-to-date total deducted.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common PAYE Questions:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <div>
                                        <p className="font-semibold text-gray-800">Q: Can I opt out of PAYE deductions?</p>
                                        <p className="text-xs">A: No. If you&apos;re employed and earning above £25k, deductions are mandatory. The only way to avoid them is to earn below threshold or be self-employed (where you pay through Self Assessment instead).</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Q: What if I change jobs mid-year?</p>
                                        <p className="text-xs">A: Your new employer picks up where the old one left off. Your P45 (leaving certificate) shows year-to-date deductions. New employer continues deducting based on your annual salary.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Q: Can I pay extra to clear the loan faster?</p>
                                        <p className="text-xs">A: Yes, but only if you&apos;ll definitely repay the full balance. You can make voluntary payments to Student Finance England. But for most graduates heading for write-off, extra payments are wasted money.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Q: Do bonuses get deducted?</p>
                                        <p className="text-xs">A: Yes. Any income above £25k gets the 9% deduction, including bonuses, commission, and overtime. That £5k Christmas bonus? You&apos;ll pay £450 in student loan deductions on it.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Calculating Your Deduction */}
                        <section id="calculating-your-deduction" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Calculating Your Monthly Deduction
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding the exact calculation helps you budget accurately and verify your payslip deductions are correct.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Simple Formula:</h3>
                                <div className="bg-white p-4 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 text-center mb-3">Monthly Student Loan Payment =</p>
                                    <p className="text-center text-lg font-mono bg-gray-50 p-3 rounded">
                                        (Annual Salary - £25,000) × 9% ÷ 12
                                    </p>
                                    <p className="text-gray-700 text-sm mt-3 text-center">
                                        Or for monthly: (Monthly Salary - £2,083.33) × 9%
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Calculation Examples at Common Graduate Salaries:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Annual Salary</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Above Threshold</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Annual Deduction</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Monthly Deduction</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Daily Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">£25,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£0</td>
                                                <td className="px-3 py-2 border-b text-xs">£0</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£0</td>
                                                <td className="px-3 py-2 border-b text-xs">£0</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">£26,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£90</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£7.50</td>
                                                <td className="px-3 py-2 border-b text-xs">£0.25</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">£28,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£3,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£270</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£22.50</td>
                                                <td className="px-3 py-2 border-b text-xs">£0.74</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">£30,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£5,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£450</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£37.50</td>
                                                <td className="px-3 py-2 border-b text-xs">£1.23</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">£35,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£10,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£900</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£75.00</td>
                                                <td className="px-3 py-2 border-b text-xs">£2.47</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">£40,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£15,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£1,350</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£112.50</td>
                                                <td className="px-3 py-2 border-b text-xs">£3.70</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">£50,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£25,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£2,250</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£187.50</td>
                                                <td className="px-3 py-2 border-b text-xs">£6.16</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">£60,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£35,000</td>
                                                <td className="px-3 py-2 border-b text-xs">£3,150</td>
                                                <td className="px-3 py-2 border-b text-xs font-semibold">£262.50</td>
                                                <td className="px-3 py-2 border-b text-xs">£8.63</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Key observation:</strong> Every £1,000 salary increase adds £7.50/month in student loan deductions. This is on top of the £60/month in additional income tax and NI you&apos;ll pay.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Quick Mental Math Trick:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    To quickly estimate your monthly student loan payment:
                                </p>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Take your salary (e.g., £32,000)</li>
                                    <li>Subtract £25,000 = £7,000</li>
                                    <li>Take 10% of this (easier than 9%) = £700</li>
                                    <li>Divide by 12 = £58.33</li>
                                    <li>Your actual deduction is ~10% less: ~£52.50</li>
                                </ol>
                                <p className="text-gray-700 text-sm mt-2">
                                    Or even simpler: Take the amount above £25k, divide by 10, then divide by 12. Close enough for budgeting.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Raises and Bonuses Impact:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>If you get a £3,000 raise from £30k to £33k:</strong>
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Gross increase: £250/month</li>
                                    <li>Income tax increase: £50/month (20%)</li>
                                    <li>NI increase: £30/month (12%)</li>
                                    <li>Student loan increase: £22.50/month (9%)</li>
                                    <li><strong>Net increase: £147.50/month (59% of gross)</strong></li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    This is why raises feel disappointing. Your marginal rate is 41%, so £1,000 gross raise = £590 net increase.
                                </p>
                            </div>
                        </section>

                        {/* Take-Home Reality */}
                        <section id="take-home-reality" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Take-Home Pay Reality Check
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding the gap between gross and net salary helps you budget realistically and avoid overcommitting to rent, car payments, or other fixed costs based on inflated expectations.
                            </p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-200 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700">Annual Salary</th>
                                            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700">Monthly Gross</th>
                                            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700">All Deductions</th>
                                            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700">Monthly Net</th>
                                            <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-700">% Take-Home</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 border-b text-xs">£25,000</td>
                                            <td className="px-4 py-2 border-b text-xs">£2,083</td>
                                            <td className="px-4 py-2 border-b text-xs">-£387</td>
                                            <td className="px-4 py-2 border-b text-xs font-semibold">£1,696</td>
                                            <td className="px-4 py-2 border-b text-xs">81%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b text-xs">£28,000</td>
                                            <td className="px-4 py-2 border-b text-xs">£2,333</td>
                                            <td className="px-4 py-2 border-b text-xs">-£484</td>
                                            <td className="px-4 py-2 border-b text-xs font-semibold">£1,849</td>
                                            <td className="px-4 py-2 border-b text-xs">79%</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 border-b text-xs">£30,000</td>
                                            <td className="px-4 py-2 border-b text-xs">£2,500</td>
                                            <td className="px-4 py-2 border-b text-xs">-£502</td>
                                            <td className="px-4 py-2 border-b text-xs font-semibold">£1,998</td>
                                            <td className="px-4 py-2 border-b text-xs">80%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b text-xs">£35,000</td>
                                            <td className="px-4 py-2 border-b text-xs">£2,917</td>
                                            <td className="px-4 py-2 border-b text-xs">-£631</td>
                                            <td className="px-4 py-2 border-b text-xs font-semibold">£2,286</td>
                                            <td className="px-4 py-2 border-b text-xs">78%</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-2 border-b text-xs">£40,000</td>
                                            <td className="px-4 py-2 border-b text-xs">£3,333</td>
                                            <td className="px-4 py-2 border-b text-xs">-£760</td>
                                            <td className="px-4 py-2 border-b text-xs font-semibold">£2,573</td>
                                            <td className="px-4 py-2 border-b text-xs">77%</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b text-xs">£50,000</td>
                                            <td className="px-4 py-2 border-b text-xs">£4,167</td>
                                            <td className="px-4 py-2 border-b text-xs">-£1,018</td>
                                            <td className="px-4 py-2 border-b text-xs font-semibold">£3,149</td>
                                            <td className="px-4 py-2 border-b text-xs">76%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The 30% Rule and Why It Doesn&apos;t Work for Graduates:</h3>
                                <p className="text-gray-700 text-sm mb-3">
                                    Financial advisors often recommend spending no more than 30% of income on rent. For graduates with student loans, this is based on net income, not gross.
                                </p>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">£30,000 Graduate in London:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Monthly net: £1,998</li>
                                            <li>• 30% for rent: £599</li>
                                            <li>• <strong>Reality: London rent £800-£1,200</strong></li>
                                            <li>• Actual rent burden: 40-60% of income</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">£35,000 Graduate Outside London:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Monthly net: £2,286</li>
                                            <li>• 30% for rent: £686</li>
                                            <li>• <strong>Reality: Regional rent £400-£700</strong></li>
                                            <li>• Achievable with careful budgeting</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>This is why London-based graduates on typical salaries struggle.</strong> The combination of high rent, student loan deductions, and tax means most spend 40-50%+ of net income on housing alone.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Budget Template for £30k Graduate:</h3>
                                <div className="bg-white p-4 rounded border border-gray-200">
                                    <p className="font-semibold text-gray-800 mb-3">Monthly Net Income: £1,998</p>
                                    <div className="space-y-1 text-sm">
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Rent (London zone 3-4)</span>
                                            <span className="text-gray-900">£900</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Utilities & Council Tax</span>
                                            <span className="text-gray-900">£150</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Transport (Zone 1-3 monthly)</span>
                                            <span className="text-gray-900">£180</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Food & Groceries</span>
                                            <span className="text-gray-900">£250</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Phone & Internet</span>
                                            <span className="text-gray-900">£40</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Entertainment & Social</span>
                                            <span className="text-gray-900">£150</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Clothing & Misc</span>
                                            <span className="text-gray-900">£80</span>
                                        </div>
                                        <div className="flex justify-between py-1 border-b">
                                            <span className="text-gray-700">Emergency Fund / Savings</span>
                                            <span className="text-gray-900">£50</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-t-2 font-semibold text-red-600">
                                            <span>Monthly Shortfall</span>
                                            <span>-£202</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-xs mt-3">
                                        This budget is TIGHT and still £200 short. London graduates often supplement with parental support, credit cards, or reduce quality of life (cheaper food, no social life, skip holidays).
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Common Misconceptions */}
                        <section id="common-misconceptions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Common Graduate Misconceptions
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Many graduates have incorrect beliefs about student loan repayments that lead to poor financial decisions or unnecessary stress.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Misconception 1: &quot;I should pay off my loan early&quot;</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Reality:</strong> For most graduates, voluntary overpayments are wasted money. Under Plan 5, if you&apos;re unlikely to repay the full balance before 40-year write-off, extra payments just give the government money you&apos;d never have repaid anyway.
                                    </p>
                                    <p className="text-gray-700 text-xs">
                                        <strong>When it makes sense:</strong> Only if you&apos;re a very high earner (£70k+) on track to fully repay, AND you have no other debts, AND you&apos;ve already maximized pension contributions. For 70%+ of graduates, voluntary overpayment is financial mistake.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Misconception 2: &quot;My credit score will suffer from student debt&quot;</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Reality:</strong> Student loans don&apos;t appear on your credit file and don&apos;t affect your credit score. They&apos;re completely separate from commercial credit.
                                    </p>
                                    <p className="text-gray-700 text-xs">
                                        However, mortgage lenders DO consider student loan repayments when calculating affordability. That £112/month deduction at £40k salary reduces how much you can borrow.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Misconception 3: &quot;I don&apos;t need to worry about it—it&apos;s automatically sorted&quot;</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Reality:</strong> While PAYE deductions are automatic, you should still check:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-xs">
                                        <li>Your payslip shows correct deduction amount</li>
                                        <li>Your Student Finance England account shows payments credited</li>
                                        <li>You&apos;re not being deducted if earning below £25k</li>
                                        <li>If you change jobs, new employer has correct tax code</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Misconception 4: &quot;If I work abroad, I don&apos;t have to repay&quot;</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Reality:</strong> You&apos;re still obligated to repay even if living abroad. You must notify Student Finance England of overseas employment and make payments through their international repayment system.
                                    </p>
                                    <p className="text-gray-700 text-xs">
                                        Enforcement is difficult, but UK loans stay on your record. If you return to UK employment, all missed payments become due immediately.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Misconception 5: &quot;My employer pays this, not me&quot;</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Reality:</strong> Your employer deducts it from YOUR earnings. It&apos;s not an additional employer cost like employer NI contributions—it&apos;s money that would otherwise be in your pocket.
                                    </p>
                                    <p className="text-gray-700 text-xs">
                                        This matters for salary negotiations. When you negotiate a £30k salary, you&apos;ll take home £1,998/month. The student loan is your cost, not the employer&apos;s.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Checking Deductions */}
                        <section id="checking-deductions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Checking Your Deductions Are Correct
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Errors in student loan deductions happen. You might be deducted when earning below threshold, deducted too much, or not deducted when you should be. Here&apos;s how to verify and fix issues.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Monthly Verification Checklist:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Check your payslip amount matches formula:</strong> (Monthly gross - £2,083.33) × 9% should equal SL deduction shown
                                    </li>
                                    <li>
                                        <strong>If earning under £25k, confirm zero deduction:</strong> Below threshold means £0 should be taken
                                    </li>
                                    <li>
                                        <strong>Log into Student Finance England account:</strong> Check your loan balance is decreasing by the amount you&apos;re paying (note: 2-3 month delay in showing)
                                    </li>
                                    <li>
                                        <strong>Verify your tax code includes loan indicator:</strong> Your tax code should show student loan plan (e.g., 1257L with note about Plan 5)
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common Errors and How to Fix Them:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Error: Deducted when earning below £25k</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Cause:</strong> Your employer has wrong tax code or HMRC hasn&apos;t updated your threshold
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            <strong>Fix:</strong> Contact your payroll department and HMRC. Provide evidence of salary. Request refund of overpaid amounts. Can take 6-12 weeks to correct.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Error: Deducted wrong percentage (e.g., 12% instead of 9%)</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Cause:</strong> Wrong loan plan assigned (Plan 1/2/4 instead of Plan 5)
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            <strong>Fix:</strong> Contact Student Finance England immediately to confirm your correct plan. They&apos;ll notify HMRC to update records. Overpayments will be refunded.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Error: Not being deducted despite earning £30k+</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Cause:</strong> Employer doesn&apos;t have your correct NI number or HMRC hasn&apos;t flagged your account for deductions
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            <strong>Fix:</strong> Don&apos;t worry—this will catch up. Once corrected, you&apos;ll owe the backdated amount, but Student Finance England usually accepts payment plan rather than lump sum.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Error: Payments not showing on SFE account</p>
                                        <p className="text-gray-700 text-xs mb-2">
                                            <strong>Cause:</strong> Normal 2-3 month delay between PAYE deduction and SFE account update
                                        </p>
                                        <p className="text-gray-700 text-xs">
                                            <strong>Fix:</strong> If it&apos;s been 4+ months and still not showing, contact Student Finance England with copies of payslips showing deductions. They&apos;ll investigate with HMRC.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Getting Refunds for Overpayments:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    If you&apos;ve been overcharged:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Contact Student Finance England (0300 100 0611) with evidence</li>
                                    <li>Provide payslips showing incorrect deductions</li>
                                    <li>They&apos;ll calculate refund amount</li>
                                    <li>Refund credited to your bank account within 6-8 weeks</li>
                                    <li>Future deductions corrected going forward</li>
                                </ul>
                            </div>
                        </section>

                        {/* Budgeting with Deductions */}
                        <section id="budgeting-with-deductions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Budgeting as a Graduate
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Successfully managing money as a graduate requires adjusting to significant regular deductions and avoiding lifestyle inflation.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Budgeting Principles for Graduates:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Always budget based on NET income, not gross:</strong> Your £30k salary becomes £1,998/month take-home. Base all financial commitments on this number.
                                    </li>
                                    <li>
                                        <strong>Factor in the student loan deduction permanently:</strong> Don&apos;t think of it as temporary. For most graduates, it&apos;s a 9% tax for 40 years. Build your lifestyle around income minus this deduction.
                                    </li>
                                    <li>
                                        <strong>Avoid lifestyle inflation in first 2 years:</strong> Your salary will likely increase 10-20% in your first few years. Save/invest the raises rather than upgrading lifestyle.
                                    </li>
                                    <li>
                                        <strong>Account for the pension contribution:</strong> Most employers require 5% minimum pension contribution. This further reduces take-home.
                                    </li>
                                    <li>
                                        <strong>Build emergency fund before any discretionary spending:</strong> 3-6 months expenses in savings. You&apos;re one redundancy away from financial crisis.
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Recommended Budget Allocations:</h3>
                                <p className="text-gray-700 text-sm mb-3">Based on net monthly income:</p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Housing: 30-40%</strong> (rent, utilities, council tax)</li>
                                    <li><strong>Food: 10-15%</strong> (groceries and occasional eating out)</li>
                                    <li><strong>Transport: 10-15%</strong> (car/public transport/cycling)</li>
                                    <li><strong>Savings: 10-20%</strong> (emergency fund, then investments)</li>
                                    <li><strong>Entertainment: 5-10%</strong> (social, hobbies, subscriptions)</li>
                                    <li><strong>Clothing/Personal: 5%</strong></li>
                                    <li><strong>Other: 5-10%</strong> (medical, gifts, misc)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Note:</strong> These percentages are difficult to achieve on £25k-£30k salaries in expensive cities. Many graduates spend 40-50% on housing out of necessity.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Tips for Managing on Limited Graduate Income:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>House-share:</strong> Living with 2-3 others cuts rent significantly (£600-£800 vs £1,200+ for studio)</li>
                                    <li><strong>Cycle to work:</strong> Bike commuting saves £150-£200/month vs public transport or car</li>
                                    <li><strong>Meal prep:</strong> Cooking at home costs ~£150/month vs £400+ eating out regularly</li>
                                    <li><strong>Cancel unused subscriptions:</strong> Netflix, Spotify, gym memberships add up to £100+/month</li>
                                    <li><strong>Maximize workplace benefits:</strong> Free food, gym, travel loans, cycle-to-work schemes</li>
                                    <li><strong>Don&apos;t finance lifestyle:</strong> Avoid credit cards, car finance, Klarna for non-essentials</li>
                                    <li><strong>Remember: You&apos;re at career start:</strong> Current salary isn&apos;t permanent. It will grow.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Below Threshold Scenarios */}
                        <section id="below-threshold-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                What If You Earn Below £25,000?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Not all graduates immediately earn above the repayment threshold. Some start on lower salaries, work part-time, or face unemployment. Here&apos;s what happens to your loan in these scenarios.
                            </p>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Zero Repayment Scenarios:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                                    <li>
                                        <strong>Earning exactly £25,000 or below:</strong> £0 deducted. Your loan balance continues accruing interest but you make no payments. This is completely normal and expected.
                                    </li>
                                    <li>
                                        <strong>Unemployed or between jobs:</strong> £0 deducted. No requirement to notify Student Finance England. Repayments automatically stop when you&apos;re not employed.
                                    </li>
                                    <li>
                                        <strong>Part-time work below threshold:</strong> If working 3 days/week earning £18k annually, you pay nothing. The threshold applies to total annual income, not hourly rate.
                                    </li>
                                    <li>
                                        <strong>Maternity/paternity leave:</strong> Statutory pay (£184/week = ~£9,568/year) is below threshold. Zero deductions during leave.
                                    </li>
                                    <li>
                                        <strong>Self-employed earning under £25k:</strong> No payments through Self Assessment. You report £0 due.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Happens to Your Balance:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    During periods of zero repayment:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Interest continues accruing at RPI + 0-3% (currently ~3-4% for below-threshold earners)</li>
                                    <li>Your balance grows each month you don&apos;t make payments</li>
                                    <li>This is mathematically fine—you&apos;ll likely never repay the full balance anyway</li>
                                    <li>Once you earn over £25k, repayments automatically begin</li>
                                    <li>No penalties, no enforcement action for not paying while below threshold</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Example:</strong> Graduate with £50k debt, earns £22k for 3 years. Makes zero repayments. Balance grows to ~£56k with interest. Then gets promoted to £30k, repayments begin at £37.50/month. Nothing wrong with this—it&apos;s how the system works.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Should You Make Voluntary Payments When Below Threshold?</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    <strong>Almost never.</strong> If you&apos;re earning below £25k, you have more urgent financial priorities:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li>Build emergency fund (3-6 months expenses)</li>
                                    <li>Pay off high-interest debt (credit cards, overdrafts)</li>
                                    <li>Invest in skills/education to increase earning potential</li>
                                    <li>Save for immediate goals (car, house deposit)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    Making voluntary student loan payments when earning £22k is financial mismanagement. That money is better spent building financial security or investing in career growth.
                                </p>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                First payslip shock is real—but predictable
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Under Plan 5, repayments begin the April after you finish your course or when you earn over £25,000, whichever is later. Your employer deducts 9% of income above £25k automatically via PAYE. That £30,000 salary becomes £1,998 monthly take-home after tax, NI, and student loan deductions. Budget based on net income, verify your deductions are correct, and remember: most graduates never repay the full balance anyway. The deductions feel significant now but become background noise as your salary grows.
                            </p>
                            <p className="text-gray-700 font-semibold">
                                Check your first payslip carefully, understand the deductions, and budget realistically from day one.
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

export default FirstJobRepaymentShock;