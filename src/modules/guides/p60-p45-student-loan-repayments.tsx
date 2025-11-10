import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const P60P45StudentLoanRepayments: React.FC = () => {
  const tocItems = [
    { id: "what-is-p60", title: "What Is a P60 and When Do You Get One?", level: 2 },
    { id: "what-is-p45", title: "What Is a P45 and When Do You Get One?", level: 2 },
    { id: "how-deductions-appear", title: "How Student Loan Deductions Appear on P60s and P45s", level: 2 },
    { id: "finding-overpayments", title: "Year-End Reconciliation: Finding Overpayments", level: 2 },
    { id: "finding-underpayments", title: "Year-End Reconciliation: Finding Underpayments", level: 2 },
    { id: "changing-jobs", title: "Changing Jobs Mid-Year: P45 Complications", level: 2 },
    { id: "spotting-errors", title: "How to Spot Errors on Your P60 and P45", level: 2 },
    { id: "getting-refunds", title: "Getting Refunds for Overpayments", level: 2 },
    { id: "self-assessment", title: "P60s, P45s and Self Assessment", level: 2 },
    { id: "part-year-employment", title: "Special Cases: Part-Year Employment", level: 2 },
    { id: "digital-documents", title: "Digital P60s and P45s", level: 2 },
    { id: "missing-documents", title: "When P60s and P45s Don't Arrive", level: 2 },
    { id: "taking-control", title: "Taking Control of Your Student Loan Records", level: 2 },
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
                <Link className="hover:text-blue-700 hover:underline" href="/guides/">
                  Guides
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
                  P60/P45 Effects on Student Loan Repayments
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            How P60 and P45 Forms Affect Your Student Loan Repayments
          </h1>
          <p className="text-xl text-gray-600">
            Using Your P60 to Identify Student Loan Overpayments and Claim Refunds
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
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Most people receive a P60 or P45 at some point during their working life and promptly file it
                away without looking closely at the numbers. But these two documents contain critical
                information about your student loan repayments. They show exactly how much has been
                deducted, whether your tax code was correct, and most importantly, whether you&apos;ve overpaid or
                underpaid throughout the year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding what these forms tell you about your student loans can mean the difference
                between losing hundreds of pounds to overpayments or facing surprise bills for underpayments.
                These aren&apos;t just administrative documents to keep in a drawer. They&apos;re your evidence of what
                you&apos;ve actually paid and your starting point for claiming refunds when things go wrong.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The confusion around P60s and P45s stems from their technical nature and the assumption that
                employers always get things right. They don&apos;t. Tax codes change, student loan statuses update,
                and communication between HMRC, the Student Loans Company, and employers breaks down
                regularly. Your P60 or P45 is often the first place you&apos;ll spot these errors, but only if you know
                what to look for.
              </p>
            </section>

            {/* What Is a P60 */}
            <section id="what-is-p60" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Is a P60 and When Do You Get One?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A P60 is an &quot;End of Year Certificate&quot; that summarizes your total pay and deductions for a
                complete tax year (April 6th to April 5th). Your employer must provide it by 31 May following the
                end of the tax year. If you were employed on April 5th, you get a P60. If you left before then, you
                don&apos;t.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The P60 shows:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Your total gross pay for the year</li>
                  <li>Total income tax deducted</li>
                  <li>Total National Insurance deducted</li>
                  <li>Total student loan deductions (if applicable)</li>
                  <li>Your tax code at year-end</li>
                  <li>Your National Insurance number</li>
                  <li>Employer details</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                For student loans, the critical figure is the &quot;Student Loan Deductions&quot; box. This shows the total
                amount deducted through PAYE during that tax year. This number should match what you
                calculate based on your annual income and your plan&apos;s threshold.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many people never look at this figure. They check their gross pay, maybe glance at the tax total,
                then file the P60 away. But that student loan deduction line is where errors become visible. If
                you finished repaying in November but deductions continued through March, your P60 will show
                you&apos;ve overpaid. If your employer used the wrong plan threshold, the total will be incorrect.
              </p>
            </section>

            {/* What Is a P45 */}
            <section id="what-is-p45" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Is a P45 and When Do You Get One?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A P45 is a &quot;Details of Employee Leaving Work&quot; form that your employer must give you when
                you leave a job. Unlike a P60 which covers a full tax year, a P45 covers the period from April 6th
                to your leaving date, or from your start date to leaving date if you joined mid-year.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The P45 has four parts:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li><strong>Part 1:</strong> Sent by employer to HMRC</li>
                  <li><strong>Part 1A:</strong> Given to you (for your records)</li>
                  <li><strong>Part 2:</strong> Given to you (for your new employer)</li>
                  <li><strong>Part 3:</strong> Given to you (for your new employer or Jobcentre Plus)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Parts 2 and 3 are crucial when starting a new job. You give them to your new employer so they
                can continue your tax and student loan deductions correctly without putting you on an
                emergency code.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The P45 shows:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Your leaving date</li>
                  <li>Total pay in the current tax year to date</li>
                  <li>Total tax deducted to date</li>
                  <li>Total student loan deductions to date</li>
                  <li>Your tax code at leaving</li>
                  <li>Week or month number when you left</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                For student loans, the &quot;Total Student Loan Deductions&quot; figure shows what&apos;s been deducted up
                to your leaving date. Your new employer uses this to continue deductions correctly. If this figure
                is wrong or if your tax code incorrectly includes or excludes SL/PGL markers, problems will
                carry forward into your new job.
              </p>
            </section>

            {/* How Deductions Appear */}
            <section id="how-deductions-appear" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Student Loan Deductions Appear on P60s and P45s
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loan deductions on both forms appear as a separate line item, distinct from tax and
                National Insurance. The label varies slightly but typically shows as:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>&quot;Student Loan Deductions&quot;</li>
                <li>&quot;Student Loan Repayments&quot;</li>
                <li>&quot;SL Deductions&quot;</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                This figure represents the cumulative total deducted through PAYE up to the document date
                (April 5th for P60, leaving date for P45). It should match the sum of all student loan deductions
                shown on your payslips for that period.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Loan Types:</h3>
                <p className="text-gray-700 mb-2">
                  If you have both undergraduate and postgraduate loans, some P60s and P45s break these
                  down separately:
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>&quot;Student Loan Deductions&quot; (undergraduate)</li>
                  <li>&quot;Postgraduate Loan Deductions&quot; (postgraduate)</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Others combine them into one total. If your form shows only one figure but you have both loans,
                  check your payslips to verify both deductions were actually taken.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The tax code shown on your P60 or P45 should include SL, PGL, or both if you&apos;re repaying. If
                your tax code is &quot;1257L&quot; with no loan markers but you have student loan deductions showing,
                something is inconsistent. Either the deductions shouldn&apos;t have been taken, or your tax code
                should show the markers.
              </p>
            </section>

            {/* Finding Overpayments */}
            <section id="finding-overpayments" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Year-End Reconciliation: Finding Overpayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The P60 triggers year-end reconciliation, where what you&apos;ve actually paid gets compared
                against what you should have paid based on annual income. This is when overpayments
                become apparent.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Finished repaying mid-year</h3>
                  <p className="text-gray-700">
                    You made your final payment in September but deductions continued through March. Your P60
                    shows six months of unnecessary deductions. If you were paying £80 monthly, that&apos;s £480 overpaid.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Wrong plan applied</h3>
                  <p className="text-gray-700 mb-2">
                    Your employer used Plan 1 thresholds (£24,990) when you&apos;re actually on Plan 2 (£27,295).
                    On a £30,000 salary, you&apos;ve been overcharged:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Plan 1 calculation: (£30,000 - £24,990) × 9% = £450.90</li>
                    <li>Plan 2 calculation: (£30,000 - £27,295) × 9% = £243.45</li>
                    <li><strong>Overpayment: £207.45 for the year</strong></li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Multiple jobs with threshold applied twice</h3>
                  <p className="text-gray-700">
                    You worked two part-time jobs, each applying the full monthly threshold. Your combined income
                    warranted deductions, but the amount taken was incorrect. The P60 from each employer shows
                    deductions, and when combined, the total exceeds what you should have paid on your actual
                    annual income.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Variable income calculated monthly not annually</h3>
                  <p className="text-gray-700">
                    You had some very high earning months and some low earning months. PAYE deducted based on
                    each month independently, not considering the annual average. Your P60 total might exceed the
                    9% of (annual income - threshold) calculation.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">To check for overpayments, do this calculation when you receive your P60:</h3>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1">
                  <li>Take your total gross pay from the P60</li>
                  <li>Subtract your plan&apos;s annual threshold (£27,295 for Plan 2, £24,990 for Plan 1, £25,000 for Plan 5, £21,000 for postgraduate)</li>
                  <li>Multiply the result by 9% (or 6% for postgraduate)</li>
                  <li>Compare this to the student loan deductions shown on your P60</li>
                </ol>
                <p className="text-gray-700 mt-2 font-medium">
                  If the P60 figure is higher than your calculation, you&apos;ve overpaid. The difference is what you can claim back.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> can help you verify these calculations and determine exactly how
                much you&apos;re owed.
              </p>
            </section>

            {/* Finding Underpayments */}
            <section id="finding-underpayments" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Year-End Reconciliation: Finding Underpayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Underpayments are less common with PAYE because deductions happen automatically, but
                they do occur:
              </p>

              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax code missing SL marker</h3>
                  <p className="text-gray-700">
                    Your employer didn&apos;t have the SL marker in your tax code, so no deductions were taken. But you
                    earned above the threshold and HMRC has you registered for student loan repayments. Your P60
                    shows £0 deductions when it should show several hundred pounds. You&apos;ll owe this through Self Assessment.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Started job mid-year on emergency code</h3>
                  <p className="text-gray-700">
                    You began work in October on an emergency tax code without SL marker. By the time your correct
                    code came through in December, you&apos;d earned four months of income above the threshold with no
                    deductions. Your P60 shows partial-year deductions that don&apos;t match your full annual liability.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Multiple jobs, neither triggering threshold individually</h3>
                  <p className="text-gray-700">
                    Each job alone was below the monthly threshold, so neither employer deducted anything. But your
                    combined annual income exceeded the annual threshold. Both P60s show £0 student loan deductions,
                    but you actually owe money through Self Assessment.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Underpayments don&apos;t appear obviously on your P60. You need to calculate what should have
                been deducted and compare it to what actually was. If you&apos;ve underpaid, expect a Self
                Assessment bill unless you proactively contact HMRC to arrange payment.
              </p>
            </section>

            {/* Changing Jobs P45 Complications */}
            <section id="changing-jobs" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changing Jobs Mid-Year: P45 Complications
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you change jobs during the tax year, your P45 becomes the critical link between old and
                new employer. Problems arise when information doesn&apos;t transfer correctly.
              </p>

              <div className="space-y-4">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 1: P45 shows SL code but new employer doesn&apos;t apply it</h3>
                  <p className="text-gray-700">
                    Your P45 clearly shows tax code &quot;1257L SL&quot; and £180 already deducted in student loans. You give
                    this to your new employer. They enter your details into their payroll system but somehow the SL
                    marker doesn&apos;t transfer. For the rest of the tax year, you have no student loan deductions from the
                    new job. You won&apos;t realize this until you check your first payslip from the new employer or receive
                    your P60 at year-end. By then, you&apos;ve underpaid for months.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 2: P45 doesn&apos;t show SL but you should be repaying</h3>
                  <p className="text-gray-700">
                    Your old employer had the wrong tax code (without SL marker). Your P45 shows no student loan
                    deductions. Your new employer uses this P45 to set up your payroll, continuing the error. Neither
                    job deducts student loans all year, and your P60s show nothing. Come Self Assessment time, you
                    owe a full year&apos;s worth of repayments.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 3: You don&apos;t provide P45 to new employer</h3>
                  <p className="text-gray-700">
                    Without your P45, your new employer puts you on an emergency tax code. Sometimes this includes
                    SL if HMRC&apos;s records show you&apos;re a student loan borrower, sometimes it doesn&apos;t. You might end up
                    on an emergency code without SL even though you&apos;re definitely repaying. The deductions stop, and
                    you accrue a debt.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700">
                  <strong>Always provide your P45 to new employers immediately and check your first payslip carefully.</strong>
                  Verify the tax code matches your P45 and includes the correct loan markers. Don&apos;t assume the
                  transfer happened correctly.
                </p>
              </div>
            </section>

            {/* Spotting Errors */}
            <section id="spotting-errors" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Spot Errors on Your P60 and P45
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you receive these documents, check the following:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tax code accuracy</h3>
                    <p className="text-gray-700 text-sm">
                      Does it include SL, PGL, or both markers as appropriate for your situation? If you&apos;ve never had a
                      postgraduate loan but the code shows PGL, that&apos;s wrong. If you finished repaying but it still shows SL, that&apos;s wrong.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Student loan deduction total</h3>
                    <p className="text-gray-700 text-sm">
                      Does the figure make sense for your income? A rough check: take your annual gross pay, subtract
                      threshold, multiply by 9%. If your P60 shows dramatically more or less, investigate why.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consistency with payslips</h3>
                    <p className="text-gray-700 text-sm">
                      Add up all the student loan deductions from your monthly payslips. Do they total to the amount on
                      your P60? If not, either payslips were wrong, or the P60 is wrong, or you&apos;re missing some payslips.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multiple jobs</h3>
                    <p className="text-gray-700 text-sm">
                      If you had more than one job during the year, get P60s or P45s from all employers. Check whether
                      both applied student loan deductions and whether the combined total makes sense for your total income.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Breaks in employment</h3>
                    <p className="text-gray-700 text-sm">
                      If you had periods of unemployment or gaps between jobs, verify that your P45 from the old job and
                      P60 from the new job together cover the full period you were employed. Make sure there are no
                      missing months of deductions that should have been taken.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Refunds */}
            <section id="getting-refunds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Getting Refunds for Overpayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;ve identified an overpayment on your P60, claiming it back requires contacting HMRC, not
                your employer or the Student Loans Company directly.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1: Gather evidence</h3>
                  <p className="text-gray-700">
                    Collect your P60, all payslips for the year, and any correspondence from the Student Loans Company
                    (especially if you finished repaying mid-year). Calculate exactly how much you overpaid and be
                    prepared to explain why.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2: Contact HMRC</h3>
                  <p className="text-gray-700">
                    Call the Income Tax helpline (0300 200 3300) or use your Personal Tax Account online. Explain that
                    you&apos;ve overpaid student loan repayments through PAYE and want to claim a refund. Reference your
                    P60 and the specific figures.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3: Provide your P60 if requested</h3>
                  <p className="text-gray-700">
                    HMRC may ask you to send your P60 as proof. Do this promptly. They can&apos;t process your refund
                    without evidence of what was actually deducted.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 4: Wait for processing</h3>
                  <p className="text-gray-700">
                    Refunds typically take 6-8 weeks to process. HMRC will check with the Student Loans Company to
                    verify your loan status and confirm you did overpay. Once approved, the refund comes via bank
                    transfer or check.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-gray-700">
                  For smaller overpayments (under £100), HMRC sometimes adjusts your tax code for the next
                  year to give you extra tax-free allowance rather than sending a refund. For larger amounts, you
                  should receive actual repayment.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                If your overpayment was due to employer error (wrong plan applied, deductions continued after
                your code was updated), you might think to ask your employer for the refund. Don&apos;t. The money
                has been sent to HMRC who forwarded it to the Student Loans Company. Only HMRC can
                retrieve it and refund you. Your employer can&apos;t give you money back directly.
              </p>
            </section>

            {/* P60s P45s and Self Assessment */}
            <section id="self-assessment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                P60s, P45s and Self Assessment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you complete Self Assessment, your P60 and any P45s become essential documents for
                accurate reporting. The Self Assessment form asks for total employment income and total PAYE
                deductions. Your P60 provides these figures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For student loans specifically, Self Assessment calculates your repayment based on total
                income from all sources, then credits you for what you&apos;ve already paid through PAYE. Your
                P60&apos;s student loan deduction figure is what gets credited.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Avoid Double Payment:</h3>
                <p className="text-gray-700">
                  If you don&apos;t enter this correctly, you might pay twice on the same income. Self Assessment
                  calculates you owe £800 in student loans on your total income. Your P60 shows you already paid
                  £600 through PAYE. You should owe £200. But if you forget to claim the £600 credit, you&apos;ll be
                  billed for £800, overpaying by £600.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Always have your P60 and P45s when completing Self Assessment. The figures must be
                entered accurately. If you had multiple jobs, you need P60s or P45s from all of them to capture
                all PAYE deductions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/p60-p45-student-loan-reconciliation-calculator/" className="text-blue-600 underline hover:text-blue-800">P60/P45 PAYE Input Reconciliation Calculator</Link> helps you check these figures match what
                you expected and identify any discrepancies before they become problems.
              </p>
            </section>

            {/* Part-Year Employment */}
            <section id="part-year-employment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Special Cases: Part-Year Employment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you worked only part of the tax year, your P60 or P45 will show partial-year figures. This
                creates potential issues with student loan deductions because the threshold applies annually,
                not proportionally.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Part-Year Employment Overpayment</h3>
                <p className="text-gray-700 mb-2">
                  You worked January to April (4 months), earning £12,000. Your employer deducted student loans
                  each month because your monthly pay exceeded the monthly threshold. Your P45 shows total
                  deductions of £120.
                </p>
                <p className="text-gray-700 font-medium">
                  But your actual annual income was only £12,000, well below the £27,295 Plan 2 threshold. You
                  shouldn&apos;t have paid anything. All £120 is overpaid and claimable.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This happens because PAYE calculates month by month without knowing whether you&apos;ll work
                the full year. Your employer had no way of knowing you&apos;d only work four months. They correctly
                applied the monthly threshold each pay period. But the annual calculation reveals you overpaid.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Always check part-year employment situations carefully. If you worked less than the full tax year
                and your total income was below the annual threshold, you&apos;re likely owed a refund of all
                deductions.
              </p>
            </section>

            {/* Digital Documents */}
            <section id="digital-documents" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Digital P60s and P45s
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Increasingly, employers provide P60s and P45s digitally through payroll portals rather than on
                paper. These have the same legal status and contain the same information. However, digital
                versions create some practical issues:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Access problems</h3>
                  <p className="text-gray-700">
                    If you leave a job and lose access to the employer&apos;s portal, you might not be able to retrieve your
                    P45 later. Always download and save digital P45s immediately when leaving.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Verification</h3>
                  <p className="text-gray-700">
                    Digital documents can sometimes have processing errors that wouldn&apos;t occur on printed forms.
                    Always review digital P60s and P45s carefully and compare them to your last payslip.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Storage</h3>
                  <p className="text-gray-700">
                    Keep digital copies in multiple locations. If you need to prove your PAYE student loan deductions
                    years later, you&apos;ll need these documents. Cloud storage or email to yourself ensures you don&apos;t lose them.
                  </p>
                </div>
              </div>
            </section>

            {/* Missing Documents */}
            <section id="missing-documents" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When P60s and P45s Don&apos;t Arrive
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Employers are legally required to provide these documents, but sometimes they don&apos;t arrive:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Missing P60</h3>
                  <p className="text-gray-700">
                    Contact your employer immediately after 31 May if you haven&apos;t received it. They must provide it.
                    If they refuse or have gone out of business, contact HMRC who can provide the information from
                    their records.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Missing P45</h3>
                  <p className="text-gray-700">
                    Request it from your employer when you leave. If they don&apos;t provide it within a reasonable time,
                    contact HMRC. You can start a new job without a P45, but you&apos;ll initially be on an emergency tax
                    code which might not include correct student loan deductions.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Without these documents, you can&apos;t verify your deductions or claim refunds effectively. Always
                pursue getting them.
              </p>
            </section>

            {/* Conclusion */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Your Student Loan Records
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your P60 and P45 aren&apos;t just paperwork to file away. They&apos;re your proof of payment, your tool for
                spotting errors, and your evidence when claiming refunds. Every number on these forms tells
                part of your student loan story for that year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you receive a P60 each May or a P45 when leaving a job, spend five minutes checking
                the student loan figures. Compare them to your payslips and calculate whether they make
                sense for your income. Those five minutes could identify hundreds of pounds in overpayments
                or prevent underpayment bills months later.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you spot errors, act quickly. HMRC can process corrections more easily when you raise them
                immediately rather than years later. Keep copies of all P60s and P45s for at least six years. You
                might need them for Self Assessment, for claiming refunds, or for resolving disputes with HMRC
                or the Student Loans Company.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The system isn&apos;t perfect, and your employer, HMRC, and the Student Loans Company don&apos;t
                always communicate correctly. Your P60 and P45 give you the information to spot when things
                have gone wrong and the evidence to put them right. Use them.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Five minutes checking your P60 could save you hundreds in overpayments or surprise bills.
              </h3>
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

export default P60P45StudentLoanRepayments;