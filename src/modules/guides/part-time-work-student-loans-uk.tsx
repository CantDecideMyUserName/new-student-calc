import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const PartTimeWorkStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "why-no-prorata", title: "Why Part-Time Work Doesn't Get Pro-Rata Thresholds", level: 2 },
    { id: "paye-monthly", title: "PAYE Monthly Calculations for Part-Time Workers", level: 2 },
    { id: "term-time", title: "Term-Time Only Contracts", level: 2 },
    { id: "zero-hours", title: "Zero-Hours Contracts", level: 2 },
    { id: "multiple-jobs", title: "Multiple Part-Time Jobs", level: 2 },
    { id: "annual-liability", title: "Calculating Your Actual Annual Liability", level: 2 },
    { id: "strategic-hours", title: "Strategic Hours Management", level: 2 },
    { id: "increasing-hours", title: "Increasing Hours: The Threshold Crossing Problem", level: 2 },
    { id: "other-income", title: "Combining Part-Time Work with Other Income", level: 2 },
    { id: "claiming-refunds", title: "Claiming Refunds for Part-Time Overpayments", level: 2 },
    { id: "take-home-reality", title: "Take-Home Reality for Part-Time Workers", level: 2 },
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
                  Part-Time Work and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Part-Time Work and Student Loans: Threshold Calculations Explained
          </h1>
          <p className="text-xl text-gray-600">
            How part-time work affects UK student loan repayments. Understand monthly threshold calculations, variable income impacts, and overpayment risks.
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
                Part-time work should mean proportionally lower student loan repayments, right? After all, if you&apos;re earning half the salary, you&apos;d expect to pay half the student loans. The reality is more complicated and often less fair. The student loan system doesn&apos;t recognize part-time work as a special category. It simply applies the same monthly or annual thresholds to whatever you earn, regardless of whether you work 15 hours or 40 hours per week.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This creates a peculiar situation where many part-time workers pay nothing in student loans because their income falls below the threshold, while others working slightly more hours suddenly face deductions that feel disproportionate to their limited earnings. There&apos;s no sliding scale, no pro-rata threshold adjustment. You&apos;re either above the threshold (paying 9%) or below it (paying nothing). The cliff edge is sharp.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The confusion deepens with variable hours contracts, zero-hours arrangements, and term-time only work. PAYE calculates student loans based on what you&apos;re paid each month, treating that month as representative of your annual earnings. But if you work 30 hours one month and 10 hours the next, PAYE deducts heavily in the high-earning month and nothing in the low-earning month. By year-end, you might have overpaid significantly because your actual annual income was below the threshold when averaged across all months.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding how part-time work interacts with student loan thresholds helps you anticipate what you&apos;ll actually pay, budget accurately for variable income, and identify overpayments that you can claim back at year-end.
              </p>
            </section>

            {/* Why Part-Time Work Doesn't Get Pro-Rata Thresholds */}
            <section id="why-no-prorata" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Part-Time Work Doesn&apos;t Get Pro-Rata Thresholds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The threshold system is built on annual income, not hours worked. The Plan 2 threshold of £27,295 applies whether you earn that amount working 40 hours weekly or 20 hours weekly. What matters is the total income, not how many hours it took to earn it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This means there&apos;s no such thing as a &quot;part-time threshold&quot; that&apos;s lower for people working fewer hours. If you work 20 hours weekly and earn £15,000 annually, you&apos;re below the £27,295 threshold and pay nothing. If you work 25 hours weekly and earn £28,000, you&apos;re above the threshold and pay 9% on the £705 excess, regardless of being &quot;part-time.&quot;
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Rationale:</h3>
                <p className="text-gray-700 text-sm">
                  Student loan repayments are based on ability to pay (measured by income), not on effort or hours worked. Someone working 20 hours at £60 per hour earns more than someone working 40 hours at £15 per hour, and the system treats them accordingly.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                But this creates situations that feel unfair:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 1: Two graduates working 25 hours weekly</h3>
                  <div className="text-gray-700 text-sm space-y-2">
                    <div>
                      <strong>Graduate A:</strong> Earns £13 per hour = £16,900 annually
                      <br />
                      <span className="text-green-600">Pays zero in student loans</span>
                    </div>
                    <div>
                      <strong>Graduate B:</strong> Earns £22 per hour = £28,600 annually
                      <br />
                      <span className="text-red-600">Pays (£28,600 - £27,295) × 9% = £117.45 annually</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    They work the same hours, but one pays student loans and one doesn&apos;t, entirely due to hourly rate.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 2: Graduate earning £28,000</h3>
                  <div className="text-gray-700 text-sm space-y-2">
                    <div>
                      <strong>Working full-time (37.5 hours):</strong> Earns £28,000, pays £63.45 in student loans
                    </div>
                    <div>
                      <strong>Working part-time (20 hours):</strong> Still earning £28,000 (higher hourly rate), still pays £63.45 in student loans
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    The hours worked are irrelevant. Only the total income matters.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-gray-700 text-sm">
                  This feels particularly harsh for part-time workers who might be juggling childcare, caring responsibilities, health issues, or study alongside work. The system doesn&apos;t differentiate.
                </p>
              </div>
            </section>

            {/* PAYE Monthly Calculations for Part-Time Workers */}
            <section id="paye-monthly" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                PAYE Monthly Calculations for Part-Time Workers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE calculates student loans monthly based on your income that month. For part-time workers with consistent hours, this works reasonably well. But for those with variable hours, it creates problems.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Consistent part-time work:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you work 20 hours every week at £15 per hour, you earn £1,200 monthly consistently. This is below the Plan 2 monthly threshold of £2,274.58, so you pay zero student loans each month.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Annual reconciliation confirms you earned £14,400 for the year, below the annual threshold of £27,295, so zero owed overall. <strong>The system works correctly.</strong>
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Variable hours work:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If your hours fluctuate between 10 and 30 hours weekly, your monthly income swings between £600 and £1,800. Some months you&apos;re at £600 (below threshold), others at £1,800 (still below threshold).
                  </p>
                  <p className="text-gray-700 text-sm">
                    PAYE correctly deducts nothing each month because you never exceed the monthly threshold.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                But now consider higher-paid variable work: You work retail management on flexible hours, earning £20 per hour.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Variable Hours Problem Example:</h3>
                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Light month:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>50 hours = £1,000</li>
                      <li>Below threshold, no deduction</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Average month:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>80 hours = £1,600</li>
                      <li>Below threshold, no deduction</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Heavy month:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>120 hours = £2,400</li>
                      <li>Above threshold by £125.42</li>
                      <li>Deduction of £11.29</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded">
                  <p className="text-gray-700 text-sm mb-2"><strong>Annual calculation:</strong></p>
                  <ul className="text-gray-700 text-sm">
                    <li>Heavy months: 3 × £2,400 = £7,200</li>
                    <li>Average months: 9 × £1,600 = £14,400</li>
                    <li><strong>Total annual income: £21,600</strong></li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    This is below the annual threshold of £27,295, so you should pay zero for the year. But PAYE deducted £33.87 (£11.29 × 3 heavy months). <strong>You&apos;ve overpaid by £33.87 and need to claim a refund.</strong>
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  The more variable your hours and the closer you are to the monthly threshold, the more likely you are to have overpayments through this mechanism.
                </p>
              </div>
            </section>

            {/* Term-Time Only Contracts */}
            <section id="term-time" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Term-Time Only Contracts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Term-time only contracts are common in education, childcare, and related sectors. You work during school terms (approximately 39 weeks) and have extended unpaid breaks during school holidays.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                These contracts create systematic overpayment issues because PAYE treats each working month as if it represents your normal earnings, without recognizing that you have months of zero income.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Sarah works term-time only as a teaching assistant, earning £20,000 over 39 weeks, paid monthly during the nine months she works.</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Working months:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>£2,222 monthly (£20,000 ÷ 9 months)</li>
                      <li>Above Plan 2 threshold by £0 (just barely)</li>
                      <li>Potential small student loan deductions some months</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Non-working months:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>£0 income</li>
                      <li>No deductions</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <p className="text-gray-700 text-sm">
                    <strong>Annual calculation:</strong> Total income: £20,000, Annual threshold: £27,295, Amount above threshold: £0, Student loan owed for year: £0
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    Sarah should pay zero for the year because her annual income is well below the threshold. But if PAYE deducted anything during her working months (even small amounts), she&apos;s overpaid.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">The issue intensifies for higher-paid term-time roles:</h3>
                <p className="text-gray-700 text-sm mb-2">Senior teaching assistant earning £24,000 over 39 weeks:</p>
                <ul className="text-gray-700 text-sm mb-2">
                  <li>Working months: £2,667 monthly</li>
                  <li>Above threshold by £392.42</li>
                  <li>Monthly deduction: £35.32</li>
                  <li><strong>Nine working months: £317.88 total deducted</strong></li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Annual income £24,000 is below the £27,295 threshold. Should pay zero. Has paid £317.88. <strong>Owes a £317.88 refund.</strong>
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Term-time workers need to vigilantly check for overpayments and claim refunds annually. The system systematically overcharges them because it can&apos;t &quot;see&quot; the unpaid months when calculating monthly deductions.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/part-time-earnings-calculator/" className="text-blue-600 underline hover:text-blue-800"> Part-Time Earnings Calculator </Link> helps you model term-time and variable hours scenarios to identify potential overpayments before year-end.
                </p>
              </div>
            </section>

            {/* Zero-Hours Contracts */}
            <section id="zero-hours" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Zero-Hours Contracts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zero-hours contracts guarantee no minimum hours, meaning your income can swing dramatically month to month. Some months you might work extensively and earn above the monthly threshold. Other months you might work hardly at all and earn well below it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE handles each month independently:
              </p>

              <div className="space-y-4 mb-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Zero-Hours Example: Monthly Variations</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li><strong>January:</strong> 100 hours at £12/hour = £1,200 (below threshold, no deduction)</li>
                        <li><strong>February:</strong> 150 hours at £12/hour = £1,800 (below threshold, no deduction)</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li><strong>March:</strong> 200 hours at £12/hour = £2,400 (above threshold by £125.42, deduction £11.29)</li>
                        <li><strong>April:</strong> 80 hours at £12/hour = £960 (below threshold, no deduction)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Annual Reconciliation Problem:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If total annual hours were 1,500 at £12/hour = £18,000 annually, you&apos;re below the £27,295 threshold and should pay zero. But PAYE might have deducted £50-£100 across various high-earning months. <strong>That&apos;s a refund you&apos;re entitled to claim.</strong>
                </p>
                <p className="text-gray-700 text-sm">
                  The unpredictability of zero-hours work makes budgeting difficult anyway, and student loan deductions add another variable. When you have a high-earning month, expect some deduction. When you have low-earning months, expect none.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Track cumulative deductions through the year against your cumulative income to anticipate whether you&apos;re likely overpaying.
                </p>
              </div>
            </section>

            {/* Multiple Part-Time Jobs */}
            <section id="multiple-jobs" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Multiple Part-Time Jobs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having two or three part-time jobs compounds the complexity. Each employer calculates student loan deductions independently based only on what they pay you. They don&apos;t know about your other jobs or your total income.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Standard approach: One job (your &quot;main&quot; job) gets your tax-free Personal Allowance and applies the student loan threshold. Additional jobs get a BR (Basic Rate) tax code, which might include SL marker for student loans.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Jobs Problem Example:</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Job A (main): £1,500 monthly, tax code 1257L SL</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Below £2,274.58 threshold</li>
                      <li><strong>Student loan deduction: £0</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Job B (secondary): £800 monthly, tax code BR SL</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>All income treated as above threshold (BR code has no threshold)</li>
                      <li><strong>Student loan deduction: £800 × 9% = £72 monthly</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded">
                  <p className="text-gray-700 text-sm mb-2"><strong>What should happen:</strong></p>
                  <ul className="text-gray-700 text-sm mb-2">
                    <li>Combined income: £2,300 monthly, £27,600 annually</li>
                    <li>You&apos;re £305 above the annual threshold</li>
                    <li>Should pay £305 × 9% = £27.45 for the year</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <strong>What actually happens:</strong> You&apos;re paying £72 monthly (£864 annually) because Job B treats all its income as above threshold. <strong>You&apos;re overpaying by £836.55 annually.</strong>
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  This is a massive overpayment that many people never realize or claim. At year-end, HMRC should reconcile this and refund you, but many people don&apos;t file Self-Assessment (thinking they don&apos;t need to for PAYE-only income) and miss the refund entirely.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  If you have multiple part-time jobs, annual reconciliation is essential. Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/multiple-jobs-paye-split-calculator/" className="text-blue-600 underline hover:text-blue-800">Multiple Jobs PAYE Split Calculator</Link> to see what you should actually be paying versus what&apos;s likely being deducted.
                </p>
              </div>
            </section>

            {/* Calculating Your Actual Annual Liability */}
            <section id="annual-liability" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Calculating Your Actual Annual Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For part-time workers, especially those with variable or term-time hours, manually calculating your annual liability helps identify overpayments:
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">5-Step Calculation Process:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                  <li>Add up total gross income from all sources for the tax year (April 6 to April 5)</li>
                  <li>Subtract your plan&apos;s annual threshold (£27,295 for Plan 2)</li>
                  <li>If the result is negative, you owe zero. If positive, multiply by 9%</li>
                  <li>Compare this to total student loan deductions shown on your P60(s)</li>
                  <li>If you paid more than the calculation shows, you&apos;ve overpaid by the difference</li>
                </ol>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example calculation:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Your figures:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Total income: £21,500</li>
                      <li>Plan 2 threshold: £27,295</li>
                      <li>£21,500 - £27,295 = -£5,795 (negative, so below threshold)</li>
                      <li><strong>Should owe: £0</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">What happened:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>P60 shows deductions: £142</li>
                      <li><strong>Overpayment: £142</strong></li>
                    </ul>
                    <p className="text-green-600 text-sm mt-2 font-semibold">
                      You&apos;re owed a £142 refund. Contact HMRC with your P60 as evidence and request the refund.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  This simple calculation catches the vast majority of overpayment situations for part-time workers. Do it every May when you receive your P60. Five minutes of calculation could identify hundreds of pounds owed to you.
                </p>
              </div>
            </section>

            {/* Strategic Hours Management */}
            <section id="strategic-hours" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Hours Management
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have control over your hours and you&apos;re hovering near the monthly threshold, strategic management might minimize student loan deductions:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Scenario: You earn £20 per hour, working variable hours.</h3>
                <p className="text-gray-700 text-sm mb-2">
                  The monthly threshold is £2,274.58, which equals 113.7 hours monthly at your rate.
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  If you need to work 120 hours this month and 100 hours next month (220 hours total over two months):
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-blue-200">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Splitting as 120/100:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>First month deduction on 6.3 hours (£11.35)</li>
                      <li>Second month no deduction</li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Splitting more evenly as 110/110:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Both months below threshold</li>
                      <li><strong>Zero deductions both months</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  By evening out your hours across months, you stay below the monthly threshold more consistently. Over the year, if your total income is below the annual threshold anyway, you avoid PAYE deductions that you&apos;d have to claim back as a refund.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  This isn&apos;t always possible (your employer controls hours in most jobs), but for freelancers, contractors, or those with flexible arrangements, strategic timing of work to stay below monthly thresholds can reduce or eliminate in-year deductions.
                </p>
              </div>
            </section>

            {/* Increasing Hours: The Threshold Crossing Problem */}
            <section id="increasing-hours" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Increasing Hours: The Threshold Crossing Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many part-time workers eventually increase hours, either gradually or through accepting a promotion or new role. When this increase pushes you above the threshold, student loan deductions start suddenly.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hours Increase Example:</h3>
                <div className="space-y-3">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">20 hours weekly at £18/hour:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Earning £18,720 annually</li>
                        <li><span className="text-green-600">Paying zero student loans</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">25 hours weekly at £18/hour:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Earning £23,400 annually</li>
                        <li><span className="text-green-600">Still below threshold, still paying zero</span></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">30 hours weekly at £20/hour (promotion):</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Earning £31,200 annually</li>
                        <li>£3,905 above the Plan 2 threshold</li>
                        <li><span className="text-red-600">Owing £351.45 annually, or £29.29 monthly</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded">
                  <p className="text-gray-700 text-sm">
                    That promotion felt like a £7,800 annual raise (from £23,400 to £31,200). But after tax, National Insurance, and student loans, the take-home increase is only about £4,800. <strong>You&apos;re keeping 62% of the raise.</strong>
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  For part-time workers crossing the threshold for the first time, the sudden appearance of student loan deductions can be jarring. You went from zero to £30+ monthly coming out of your paycheck. Budget accordingly and don&apos;t be surprised when your first payslip at the new hours shows the new deduction.
                </p>
              </div>
            </section>

            {/* Combining Part-Time Work with Other Income */}
            <section id="other-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Combining Part-Time Work with Other Income
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Part-time workers often have additional income sources: side hustles, freelance work, rental income, or benefits. All income combines for student loan calculations.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Combined Income Example:</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Through PAYE:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>£18,000 from part-time work (below threshold)</li>
                      <li><strong>£0 deducted</strong> (employment income alone is below threshold)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Through Self-Assessment:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>£18,000 part-time + £12,000 freelance = £30,000 total</li>
                      <li>(£30,000 - £27,295) × 9% = <strong>£243.45 owed</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  This catches many part-time workers by surprise. They see zero deductions on their payslip all year and assume they don&apos;t owe student loans. Then Self-Assessment time arrives, and they discover they owe £200-£500 based on their total income from all sources.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Track all income sources throughout the year. If your combined income is approaching or exceeding the threshold, set aside 9% of income above the threshold to cover the eventual Self-Assessment bill. Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> help you model this.
                </p>
              </div>
            </section>

            {/* Claiming Refunds for Part-Time Overpayments */}
            <section id="claiming-refunds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Claiming Refunds for Part-Time Overpayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most part-time workers with overpayments need to claim them manually from HMRC:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1: Get your P60</h3>
                  <p className="text-gray-700 text-sm">
                    Your P60 arrives by May 31st following the end of the tax year. It shows total income and total deductions for the year.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2: Calculate correct liability</h3>
                  <p className="text-gray-700 text-sm">
                    Use the simple formula: (Annual income - £27,295) × 9%. If the result is negative or zero, you owe nothing.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3: Identify overpayment</h3>
                  <p className="text-gray-700 text-sm">
                    Compare what you should have paid (from step 2) to what your P60 shows you actually paid. The difference is your overpayment.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 4: Contact HMRC</h3>
                  <p className="text-gray-700 text-sm">
                    Call 0300 200 3300 or use your Personal Tax Account online. State: &quot;I&apos;m a part-time worker and my annual income was below the threshold, but PAYE deducted student loans during high-earning months. I need to claim a refund.&quot;
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 5: Provide evidence</h3>
                  <p className="text-gray-700 text-sm">
                    HMRC will ask for your P60. Send it as requested. They&apos;ll verify your income and deductions.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 6: Receive refund</h3>
                  <p className="text-gray-700 text-sm">
                    Processing takes 6-8 weeks. The refund comes via bank transfer or check. For part-time workers, refunds typically range from £50-£500 depending on circumstances.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Many part-time workers never claim these refunds because they don&apos;t realize they&apos;ve overpaid. Don&apos;t leave money on the table. Check every year. Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/paye-period-threshold-calculator/" className="text-blue-600 underline hover:text-blue-800"> PAYE Period Threshold Calculator </Link>helps identify whether you&apos;re likely to have overpaid.
                </p>
              </div>
            </section>

            {/* Take-Home Reality for Part-Time Workers */}
            <section id="take-home-reality" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Take-Home Reality for Part-Time Workers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Part-time work creates unique challenges for student loan budgeting. The threshold system doesn&apos;t adjust for fewer hours, monthly calculations don&apos;t account for variable income, and multiple jobs can trigger excessive deductions.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The keys to managing this:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                  <li>Know your annual threshold and track whether your annual income will exceed it</li>
                  <li>Understand monthly deductions happen based on each month independently</li>
                  <li>For variable hours, expect some months with deductions and others without</li>
                  <li>Check for overpayments annually and claim refunds promptly</li>
                  <li>If you have multiple part-time jobs, be especially vigilant about over-deduction on secondary employment</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Part-time work shouldn&apos;t mean paying more student loans than you owe. But the system&apos;s design means part-time workers frequently overpay through PAYE&apos;s monthly calculations. With awareness and annual reconciliation, you can ensure you&apos;re only paying what you genuinely owe based on your actual annual income.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The flexibility and work-life balance of part-time employment is valuable. Don&apos;t let student loan overpayments erode the financial benefits. Five minutes of calculation each May when your P60 arrives could recover hundreds of pounds that are rightfully yours.
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

export default PartTimeWorkStudentLoans;