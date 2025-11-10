import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const MultipleJobsStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "why-problems", title: "Why Multiple Jobs Create Student Loan Problems", level: 2 },
    { id: "primary-secondary", title: "Understanding Primary and Secondary Employment", level: 2 },
    { id: "monthly-trap", title: "The Monthly Threshold Trap", level: 2 },
    { id: "split-codes", title: "Split Tax Codes: Can Your Threshold Be Divided?", level: 2 },
    { id: "both-employers", title: "When Both Employers Apply the Full Threshold", level: 2 },
    { id: "notifying-hmrc", title: "Notifying HMRC About Multiple Employments", level: 2 },
    { id: "self-assessment", title: "The Self Assessment Requirement", level: 2 },
    { id: "overpayment", title: "The Overpayment Scenario", level: 2 },
    { id: "check-deductions", title: "How to Check Your Multiple Job Deductions", level: 2 },
    { id: "tax-code-changes", title: "Requesting Tax Code Changes", level: 2 },
    { id: "using-calculators", title: "Using Calculators to Plan Ahead", level: 2 },
    { id: "special-situations", title: "Special Situations: Three or More Jobs", level: 2 },
    { id: "consolidating-jobs", title: "When to Consider Consolidating Jobs", level: 2 },
    { id: "taking-control", title: "Taking Control of Multiple Employment Student Loans", level: 2 },
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
                  Multiple Jobs Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Managing Student Loans with Multiple Jobs: Split Codes and Thresholds
          </h1>
          <p className="text-xl text-gray-600">
            Why Second Jobs Cause Systematic Overpayments: The BR Code Problem
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
                Having more than one job is increasingly common in the UK, whether it&apos;s a second part-time
                role to boost income, freelance work alongside employment, or multiple part-time positions. But
                when you&apos;re repaying student loans, multiple jobs create a complex problem that most people
                don&apos;t discover until they&apos;ve already lost money. The issue is simple to state but difficult to solve:
                your student loan threshold applies to your total income, but each employer calculates
                deductions based only on what they pay you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This mismatch between how thresholds work (annually, across all income) and how PAYE
                operates (monthly, per employer) creates two opposite problems. Either you have no deductions
                taken because each job individually falls below the threshold, leaving you with a surprise Self
                Assessment bill. Or you have deductions taken by multiple employers as if each income stream
                gets its own threshold, causing serious overpayments every single month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Neither HMRC nor your employers will necessarily flag these problems. The system expects
                you to understand how multiple employment affects student loans and to take action if
                necessary. Most people don&apos;t, and they pay the price.
              </p>
            </section>

            {/* Why Multiple Jobs Create Problems */}
            <section id="why-problems" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Multiple Jobs Create Student Loan Problems
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The core issue stems from a fundamental design feature of PAYE. Each employer only knows
                about the income they pay you. They have no visibility into your other jobs, your total earnings,
                or whether you&apos;re above or below the threshold when everything is added together.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your Plan 2 threshold is £27,295 annually or £2,274.58 monthly. But this is one threshold for all
                your income combined, not a separate threshold for each job.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Tom&apos;s Two Part-Time Jobs</h3>
                <ul className="list-disc ml-6 text-gray-700 mb-2">
                  <li>Job A: £1,500 per month</li>
                  <li>Job B: £1,200 per month</li>
                  <li><strong>Total income: £2,700 per month (£32,400 annually)</strong></li>
                </ul>

                <div className="mt-4 space-y-2">
                  <p className="text-gray-700"><strong>What should happen:</strong></p>
                  <p className="text-gray-700 text-sm">
                    Tom earns £32,400 annually, which is £5,105 above the Plan 2 threshold of £27,295.
                    He should pay £5,105 × 9% = £459.45 for the year, or roughly £38.29 per month.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                What actually happens depends on his tax codes:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 1: Both apply full threshold</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Job A: £1,500 - £2,274.58 = below threshold, £0 deduction</li>
                    <li>Job B: £1,200 - £2,274.58 = below threshold, £0 deduction</li>
                    <li><strong>Total deduction: £0 per month</strong></li>
                  </ul>
                  <p className="text-red-600 text-sm mt-2">
                    Tom pays nothing through PAYE but will owe £459.45 through Self Assessment.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 2: BR codes applied</h3>
                  <p className="text-gray-700 text-sm">
                    If both employers apply deductions using BR codes, there&apos;s potential for both to deduct
                    as if each income gets its own threshold, causing overpayment.
                  </p>
                </div>
              </div>
            </section>

            {/* Primary and Secondary Employment */}
            <section id="primary-secondary" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding Primary and Secondary Employment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC designates one job as your &quot;primary employment&quot; and others as &quot;secondary
                employment&quot;. This distinction matters for tax codes and affects student loan deductions.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Primary Employment</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Typically receives your full Personal Allowance. Your tax code will be something like &quot;1257L SL&quot;,
                    meaning you get £12,570 tax-free and have student loan deductions.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Secondary Employment</h3>
                  <p className="text-gray-700 text-sm">
                    Usually gets a BR (Basic Rate) tax code, meaning no tax-free allowance. All income from this
                    job is taxed at 20%. The code might be &quot;BR SL&quot;, indicating that student loans also apply.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The theory is that your primary job applies the threshold for student loans, while your secondary
                job deducts at the full 9% rate on all income because you&apos;ve already used your threshold at the
                primary job.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How this should work for Tom:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Job A (primary): code 1257L SL, monthly threshold £2,274.58
                    <ul className="list-disc ml-6 text-sm mt-1">
                      <li>£1,500 - £2,274.58 = below threshold, no deduction</li>
                    </ul>
                  </li>
                  <li>Job B (secondary): code BR SL, no threshold
                    <ul className="list-disc ml-6 text-sm mt-1">
                      <li>£1,200 × 9% = £108 deduction</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-red-600 mt-2 font-medium">
                  This would collect £108 monthly or £1,296 annually. But Tom only owes £459.45 annually.
                  He&apos;d be overpaying by £836.55 per year.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The problem is that the BR code approach treats the secondary job as if all of it is above the
                threshold, which isn&apos;t accurate when your primary job is also below the threshold individually.
              </p>
            </section>

            {/* Monthly Threshold Trap */}
            <section id="monthly-trap" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Monthly Threshold Trap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE applies thresholds monthly. Each month stands alone in the calculation. This creates
                issues when your income varies or when you have multiple jobs that individually fall below the
                monthly threshold.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Monthly Calculation Problem:</h3>
                <p className="text-gray-700 mb-2">
                  The monthly Plan 2 threshold is £2,274.58. If you earn £2,000 from one job and £1,000 from
                  another (£3,000 total), each employer sees:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Job paying £2,000: below £2,274.58, no deduction</li>
                  <li>Job paying £1,000: below £2,274.58, no deduction</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  But your actual monthly income is £3,000, which is £725.42 above the monthly threshold.
                  You should pay £725.42 × 9% = £65.29 monthly. Instead, you pay nothing through PAYE.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This underpayment accumulates all year. By April, you&apos;ve underpaid by £783.48, which
                becomes a Self Assessment bill in January, potentially with interest if you didn&apos;t realize you
                needed to file.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The monthly calculation can&apos;t see across employers. Each operates independently, applying
                their own threshold to their own payment. There&apos;s no automatic mechanism to aggregate your
                income and apply one threshold correctly.
              </p>
            </section>

            {/* Split Tax Codes */}
            <section id="split-codes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Split Tax Codes: Can Your Threshold Be Divided?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In theory, HMRC can split your tax-free Personal Allowance between multiple employers. You
                might have 1000L at one job and 257L at another, totaling 1257 (the standard £12,570
                allowance divided by 10).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But student loan thresholds don&apos;t split the same way. You can&apos;t have one employer apply £1,500
                of threshold and another apply £774.58 to total the £2,274.58 monthly Plan 2 threshold. The
                system doesn&apos;t work that way.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">HMRC&apos;s typical approach:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Primary job: gets tax allowance and student loan threshold</li>
                  <li>Secondary jobs: get BR code (no tax allowance) with or without SL marker</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                If your secondary job gets &quot;BR SL&quot;, you&apos;re paying 9% on all income from that job without any
                threshold relief. This works correctly only if your primary job alone exceeds the threshold. If it
                doesn&apos;t, you overpay.
              </p>
            </section>

            {/* Both Employers Apply Full Threshold */}
            <section id="both-employers" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Both Employers Apply the Full Threshold
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sometimes both employers end up with your standard tax code including SL marker. This
                happens when:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>HMRC hasn&apos;t designated one as primary/secondary correctly</li>
                <li>You started both jobs around the same time</li>
                <li>Information hasn&apos;t synchronized properly</li>
                <li>You didn&apos;t inform HMRC about having multiple jobs</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Double Threshold Problem:</h3>
                <p className="text-gray-700 mb-2">
                  When both use standard codes like &quot;1257L SL&quot;, both apply the full monthly threshold:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employer A: applies £2,274.58 threshold</li>
                  <li>Employer B: applies £2,274.58 threshold</li>
                  <li><strong>Effective threshold: £4,549.16 (double what it should be)</strong></li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Example 1: Both jobs below individual threshold</h3>
                  <p className="text-gray-700 text-sm mb-2">If you earn £1,800 from each job (£3,600 total):</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Employer A: £1,800 - £2,274.58 = below threshold, no deduction</li>
                    <li>Employer B: £1,800 - £2,274.58 = below threshold, no deduction</li>
                  </ul>
                  <p className="text-red-600 text-sm mt-2">
                    You should pay £119.29 monthly. Instead you pay nothing. Annual underpayment: £1,431.48.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Example 2: One job above threshold</h3>
                  <p className="text-gray-700 text-sm mb-2">If you earn £2,500 from one job and £1,500 from another:</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Employer A: £2,500 - £2,274.58 = £20.29 deduction</li>
                    <li>Employer B: £1,500 - £2,274.58 = below threshold, no deduction</li>
                  </ul>
                  <p className="text-red-600 text-sm mt-2">
                    You should pay £155.29 monthly but pay only £20.29. Underpaying by £1,620 annually.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                The double threshold application almost always causes underpayment because most people
                with multiple jobs don&apos;t earn enough in any single job to exceed the monthly threshold.
              </p>
            </section>

            {/* Notifying HMRC */}
            <section id="notifying-hmrc" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Notifying HMRC About Multiple Employments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC needs to know about all your employments to assign correct tax codes and student loan
                markers. When you start a second job, you should inform them through your Personal Tax
                Account online or by calling the Income Tax helpline.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">What you need to tell HMRC:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Details of both (or all) employments</li>
                  <li>Which you consider your main job (usually the higher-paying one)</li>
                  <li>Start dates for each</li>
                  <li>Expected income from each</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC will then issue updated tax codes. Typically:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Main job: 1257L SL (or appropriate number with SL)</li>
                <li>Second job: BR SL</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                The BR SL code on your second job means 20% tax plus 9% student loan on all income from
                that employment, with no Personal Allowance and no student loan threshold.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700">
                  Many people don&apos;t notify HMRC because they don&apos;t realize they need to. They assume the
                  system will figure it out automatically. It doesn&apos;t. Both employers report your income to HMRC,
                  but this information flow happens monthly with delays. By the time HMRC notices and updates
                  codes, you might have underpaid or overpaid for months.
                </p>
              </div>
            </section>

            {/* Self Assessment Requirement */}
            <section id="self-assessment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Self Assessment Requirement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having multiple jobs often triggers a Self Assessment requirement, especially if your second job
                is self-employment or if your total student loan underpayment through PAYE exceeds £3,000.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">You must register for Self Assessment if:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Your non-primary employment income exceeds certain thresholds (approximately £2,500)</li>
                  <li>You&apos;re also self-employed (even with small amounts)</li>
                  <li>HMRC can&apos;t collect everything owed through PAYE</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Many people with two PAYE jobs assume Self Assessment isn&apos;t relevant to them. They think it&apos;s
                only for self-employed people. But multiple employments commonly require it, particularly when
                student loan underpayments occur.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self Assessment becomes the mechanism to reconcile everything. You report total income from
                all sources, and HMRC calculates what you should have paid in student loans. They credit what
                you did pay through PAYE and bill you for the shortfall.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Tom&apos;s Self Assessment Example:</h3>
                <p className="text-gray-700 mb-2">
                  For Tom earning £32,400 across two jobs with no PAYE deductions:
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Self Assessment calculates: £459.45 owed</li>
                  <li>PAYE credits: £0</li>
                  <li><strong>Bill: £459.45 due by 31 January</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                If Tom didn&apos;t realize he needed to file Self Assessment, he&apos;d miss the deadline, face penalties,
                and potentially have interest charged on the unpaid student loan amount.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> help you model multiple job scenarios and understand whether you
                need Self Assessment and how much to budget.
              </p>
            </section>

            {/* Overpayment Scenario */}
            <section id="overpayment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Overpayment Scenario
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While underpayment is most common with multiple jobs, overpayment happens when the BR
                SL code system applies to jobs that collectively don&apos;t exceed the threshold by much.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Sarah&apos;s Overpayment</h3>
                <p className="text-gray-700 mb-2">Sarah has two jobs:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Job A (primary): £2,100 monthly, code 1257L SL → Below threshold, no deduction</li>
                  <li>Job B (secondary): £700 monthly, code BR SL → All income treated as above threshold: £700 × 9% = £63 deduction</li>
                </ul>

                <div className="mt-4 space-y-2">
                  <p className="text-gray-700 text-sm">Sarah&apos;s total income is £2,800 monthly (£33,600 annually)</p>
                  <p className="text-gray-700 text-sm">Amount above Plan 2 threshold: £33,600 - £27,295 = £6,305</p>
                  <p className="text-gray-700 text-sm">Correct annual student loan: £6,305 × 9% = £567.45, or £47.29 monthly</p>
                  <p className="text-gray-700 text-sm">Through PAYE she pays £63 monthly or £756 annually</p>
                  <p className="text-red-600 text-sm font-medium">She&apos;s overpaying by £188.55 per year</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The overpayment occurs because the BR SL code assumes all secondary income is above
                threshold when in reality only £525.42 of her total monthly income exceeds the threshold
                (£2,800 - £2,274.58). Over several years without realizing, this adds up to substantial
                unnecessary deductions.
              </p>
            </section>

            {/* How to Check Deductions */}
            <section id="check-deductions" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Check Your Multiple Job Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have more than one job, check the following every time you&apos;re paid:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review all payslips</h3>
                    <p className="text-gray-700 text-sm">
                      Look at student loan deductions from each employer. Are both deducting? Is only one
                      deducting? Are neither deducting?
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check tax codes</h3>
                    <p className="text-gray-700 text-sm">
                      What codes do each employer have? Are they appropriate for primary and secondary
                      employment? Do they include SL or PGL markers as they should?
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Calculate manually</h3>
                    <p className="text-gray-700 text-sm">
                      Add up your total gross income from all jobs for the month. Subtract the monthly threshold.
                      Multiply by 9%. Compare this to the total student loan deductions actually taken across all payslips.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Track cumulative totals</h3>
                    <p className="text-gray-700 text-sm">
                      Most payslips show year-to-date figures. Add these up across all employments to see your
                      total annual deductions so far. Does this track correctly against your total income year-to-date?
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                If you notice discrepancies, act quickly. Contact HMRC to update tax codes before months of
                incorrect deductions accumulate.
              </p>
            </section>

            {/* Requesting Tax Code Changes */}
            <section id="tax-code-changes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Requesting Tax Code Changes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your tax codes aren&apos;t working correctly for student loans across multiple jobs, you can
                request changes through HMRC:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact HMRC</h3>
                  <p className="text-gray-700">
                    Call 0300 200 3300 or use your Personal Tax Account. Explain you have multiple employments
                    and believe your student loan deductions are incorrect.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Provide details</h3>
                  <p className="text-gray-700">
                    Give information about all your jobs, including how much you earn from each and what your
                    current tax codes are.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Request specific codes</h3>
                  <p className="text-gray-700">
                    If you understand what codes would work correctly, you can suggest them. For example, &quot;I&apos;d
                    like my main job to have 1257L SL and my second job to have BR with no student loan marker
                    because my total income only slightly exceeds the threshold.&quot;
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Explain the problem</h3>
                  <p className="text-gray-700">
                    Make clear whether you&apos;re underpaying or overpaying and why. HMRC can adjust codes more
                    effectively if they understand the specific issue.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700">
                  Be aware that HMRC&apos;s default approach is to put BR SL on secondary employments, which
                  causes overpayment for many people. You might need to push back and explain why you want
                  the secondary job to have BR without the SL marker, or even a 0T code if appropriate.
                </p>
              </div>
            </section>

            {/* Using Calculators */}
            <section id="using-calculators" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Using Calculators to Plan Ahead
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Multiple job situations are complex enough that manual calculations become error-prone. Using
                specialized calculators helps you understand what should be happening versus what is
                happening.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/multiple-jobs-paye-split-calculator/" className="text-blue-600 underline hover:text-blue-800">Multiple Jobs PAYE Split Calculator</Link> models different tax code scenarios across multiple
                employments. Enter your income from each job and your current tax codes, and it shows what
                deductions each employer will take and whether the total is correct for your actual liability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The <Link target="_blank" href="https://studentloancalculator.uk/calculators/paye-period-threshold-calculator/" className="text-blue-600 underline hover:text-blue-800">PAYE Period Threshold Calculator</Link> helps you understand monthly versus annual threshold
                calculations, which is particularly important when income varies across the year or between jobs.
              </p>
            </section>

            {/* Special Situations */}
            <section id="special-situations" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Special Situations: Three or More Jobs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Everything becomes more complicated with three or more jobs. HMRC&apos;s primary/secondary
                designation works reasonably well for two jobs but struggles with multiple secondary
                employments.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">If you have one main job and two smaller jobs:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Main job: standard code with threshold</li>
                  <li>Second job: typically BR SL</li>
                  <li>Third job: also typically BR SL</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  Now you have potentially three different deduction scenarios, and the likelihood that the total
                  matches your actual liability is very low. Self Assessment becomes essential for year-end reconciliation.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Variable Hours and Zero-Hours Contracts
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Multiple jobs often involve variable hours, making the monthly calculations even more
                unpredictable. One month you might earn £1,800 from Job A and £600 from Job B. Next month
                it&apos;s £1,200 and £1,000.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE calculates each month independently. Variable income creates situations where:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>High months from Job A trigger deductions when combined with Job B you&apos;re well above threshold</li>
                <li>Low months from both mean no deductions even though your annual income will exceed the annual threshold</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                This monthly volatility means end-of-year reconciliation almost certainly finds either
                overpayment or underpayment. Budget for potential Self Assessment adjustments.
              </p>
            </section>

            {/* Consolidating Jobs */}
            <section id="consolidating-jobs" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When to Consider Consolidating Jobs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If managing student loans across multiple jobs becomes too complex and you&apos;re consistently
                underpaying or overpaying, consider whether consolidation makes sense:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Can you increase hours at your main job rather than maintaining a second job?</li>
                <li>Would one full-time role provide similar income with simpler tax treatment?</li>
                <li>Are the administrative headaches and potential tax bills worth the additional income from multiple jobs?</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                This isn&apos;t always possible or desirable, but it&apos;s worth considering if the multiple-job complexity
                is causing significant problems with student loan deductions.
              </p>
            </section>

            {/* Conclusion */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Multiple Employment Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Multiple jobs don&apos;t have to mean multiple problems with student loans, but they require active
                management. The PAYE system isn&apos;t designed to handle this situation seamlessly, so you need
                to intervene.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check your payslips from all jobs every month. Understand what tax codes you have and
                whether they&apos;re producing correct deductions. Use calculators to verify the total is right. Contact
                HMRC if codes need adjustment. And budget for potential Self Assessment bills if you&apos;ve been
                underpaying.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The threshold applies once to your total income, but each employer calculates independently.
                This mismatch is the root cause of all multiple-job student loan problems. Once you understand
                this, you can take action to ensure you&apos;re paying the right amount, neither losing money to
                overpayments nor facing surprise bills for underpayments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your income might come from multiple sources, but your student loan liability is calculated on
                the total. Make sure the deductions happening in reality match the liability you actually have.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Monitor all your payslips monthly to catch multiple job student loan errors before they cost you hundreds.
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

export default MultipleJobsStudentLoans;