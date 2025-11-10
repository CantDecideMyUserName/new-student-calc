import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const MaternityPayStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "smp-works", title: "How Statutory Maternity Pay Works", level: 2 },
    { id: "deductions-continue", title: "When Student Loan Deductions Continue", level: 2 },
    { id: "monthly-trap", title: "The Monthly Threshold Trap", level: 2 },
    { id: "enhanced-schemes", title: "Enhanced Maternity Pay Schemes", level: 2 },
    { id: "unpaid-leave", title: "Unpaid Leave and Additional Leave", level: 2 },
    { id: "reconciliation", title: "Year-End Reconciliation and Refunds", level: 2 },
    { id: "shared-parental", title: "Shared Parental Leave Considerations", level: 2 },
    { id: "maternity-allowance", title: "Maternity Allowance for Those Not Eligible for SMP", level: 2 },
    { id: "budgeting", title: "Budgeting for Maternity Leave with Student Loans", level: 2 },
    { id: "timing", title: "Strategic Timing Considerations", level: 2 },
    { id: "phased-return", title: "Returning to Work: Phased Returns", level: 2 },
    { id: "taking-control", title: "Taking Control of Maternity Leave Finances", level: 2 },
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
                  Maternity Pay and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Maternity Pay and Student Loans: Budgeting for Reduced Income
          </h1>
          <p className="text-xl text-gray-600">
            How maternity pay affects UK student loan deductions. Budget for SMP, understand PAYE calculations, and avoid overpayments during leave.
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
                Taking maternity leave is financially complex even without student loans in the picture. Your income drops significantly, often to less than half your normal salary, yet your expenses typically increase with a new baby. Add student loan deductions into the mix, and the financial picture becomes even more challenging. Many new parents are shocked to discover that student loan deductions continue during maternity leave, sometimes taking substantial amounts from already-reduced statutory pay.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The confusion stems from how PAYE handles maternity pay. The system treats each pay period independently, applying the monthly student loan threshold regardless of whether you&apos;re earning your normal salary or receiving reduced statutory maternity pay. If your SMP payment exceeds the monthly threshold (even slightly), you&apos;ll have 9% deducted on the excess. Over several months, these deductions add up, often creating overpayments that you&apos;ll need to claim back after the tax year ends.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding how maternity pay interacts with student loans helps you budget accurately for this period, identify when you&apos;re entitled to reduced or zero deductions, and claim refunds for any overpayments. It also helps you plan strategically around timing, additional leave options, and ways to structure your return to work to minimize financial disruption.
              </p>
            </section>

            {/* How Statutory Maternity Pay Works */}
            <section id="smp-works" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Statutory Maternity Pay Works
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Statutory Maternity Pay (SMP) is what most employed mothers receive during maternity leave. To qualify, you must have worked for your employer continuously for at least 26 weeks by the end of the 15th week before your baby is due, and earned at least £123 per week on average.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SMP is paid for up to 39 weeks and consists of two rates:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">First 6 weeks:</h3>
                  <p className="text-gray-700 text-sm">
                    90% of your average weekly earnings before tax. This is often close to or equal to your normal take-home pay.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Next 33 weeks:</h3>
                  <p className="text-gray-700 text-sm">
                    The lower of £184.03 per week (2025/26 rate) or 90% of your average weekly earnings.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  For most people, the 33 weeks are paid at the flat rate of £184.03 because their normal earnings exceed this amount. This translates to approximately £797 per month (£184.03 × 52 weeks ÷ 12 months).
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Rachel normally earns £32,000 annually (approximately £2,667 monthly gross)</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Weeks 1-6 of maternity leave:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>SMP: 90% of £2,667 = £2,400 per month</li>
                      <li>This exceeds the Plan 2 monthly threshold of £2,274.58</li>
                      <li>Student loan deduction: (£2,400 - £2,274.58) × 9% = £11.29 monthly</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Weeks 7-39 of maternity leave:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>SMP: £797 per month (approximately)</li>
                      <li>This is below the Plan 2 monthly threshold</li>
                      <li>Student loan deduction: £0</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  Rachel pays student loans during the first six weeks when she&apos;s at 90% pay, but nothing during the remaining 33 weeks at the statutory rate. If she extends her leave beyond 39 weeks (unpaid), she continues to pay zero student loans during the unpaid period.
                </p>
              </div>
            </section>

            {/* When Student Loan Deductions Continue */}
            <section id="deductions-continue" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Student Loan Deductions Continue
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loan deductions during maternity leave depend entirely on whether your maternity pay in any given month exceeds the monthly threshold for your plan.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 1</h3>
                  <p className="text-gray-700 text-sm">Monthly threshold £2,082.50</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2</h3>
                  <p className="text-gray-700 text-sm">Monthly threshold £2,274.58</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 4</h3>
                  <p className="text-gray-700 text-sm">Monthly threshold £2,616.25</p>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5</h3>
                  <p className="text-gray-700 text-sm">Monthly threshold £2,083.33</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 md:col-span-2 lg:col-span-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Postgraduate</h3>
                  <p className="text-gray-700 text-sm">Monthly threshold £1,750</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  For most mothers at the statutory rate of £797 per month, deductions stop after the first six weeks because statutory pay falls well below all thresholds.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                However, mothers earning higher salaries or those whose employers offer enhanced maternity pay above statutory minimums might continue having deductions throughout more of their leave:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Sarah earns £55,000 annually. Her employer offers 12 weeks at full pay, then statutory pay.</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Weeks 1-12: £4,583 monthly (full pay)</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Above Plan 2 threshold by £2,308.42</li>
                      <li>Student loan deduction: £207.76 per month</li>
                      <li>Total for 12 weeks: approximately £622 in student loan deductions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Weeks 13-39: £797 monthly (statutory rate)</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Below threshold</li>
                      <li>Student loan deduction: £0</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  Sarah pays substantial student loans during the enhanced pay period but nothing during the statutory rate period. Over her full maternity leave, she&apos;ll pay approximately £622 toward her student loan despite being off work and earning significantly less overall.
                </p>
              </div>
            </section>

            {/* The Monthly Threshold Trap */}
            <section id="monthly-trap" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Monthly Threshold Trap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The core problem with maternity pay and student loans is that PAYE calculates monthly without considering your annual income trajectory. Each month stands alone. If you earn above the monthly threshold that month, deductions happen. The system doesn&apos;t recognize that you&apos;re on reduced income temporarily and will have low annual income overall.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This creates particular issues during the transition months:
              </p>

              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">The month you start maternity leave:</h3>
                  <p className="text-gray-700 text-sm">
                    You might receive part of your normal salary for the days you worked plus the start of your maternity pay. If the combined amount exceeds the monthly threshold, you&apos;ll have student loan deductions on the excess. This can be a substantial amount if you worked most of the month before leave started.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">The month you return:</h3>
                  <p className="text-gray-700 text-sm">
                    Similar issue in reverse. You might receive the tail end of maternity pay plus your returning salary for the days worked. Again, if the combined amount exceeds the monthly threshold, deductions apply.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">The first 1-2 months back:</h3>
                  <p className="text-gray-700 text-sm">
                    Your payroll system might not immediately adjust your student loan deductions. If you were on a suspended or modified tax code during maternity leave, returning to work should trigger reinstatement of normal deductions. But payroll errors can mean either no deductions (creating underpayments you&apos;ll owe later) or excessive deductions (if cumulative codes try to &quot;catch up&quot; for missed periods).
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example transition month: Emma worked the first 10 days of May, then started maternity leave.</h3>
                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">May payslip:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Salary for 10 days: £1,000</li>
                    <li>SMP for remaining days: £1,200</li>
                    <li>Total May income: £2,200</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    Depending on how payroll calculates this, the combined payment might exceed the monthly threshold even though neither component alone would. If they process it as £2,200 in one calculation, Emma pays student loans on income that&apos;s individually below threshold but combined exceeds it.
                  </p>
                </div>
              </div>
            </section>

            {/* Enhanced Maternity Pay Schemes */}
            <section id="enhanced-schemes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Enhanced Maternity Pay Schemes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many employers offer enhanced maternity pay above statutory minimums. Common schemes include:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Full pay scheme</h3>
                  <p className="text-gray-700 text-sm">Full pay for 3-6 months, then statutory</p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Half pay scheme</h3>
                  <p className="text-gray-700 text-sm">Half pay for 3-6 months, then statutory</p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Variable schemes</h3>
                  <p className="text-gray-700 text-sm">Based on length of service</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Enhanced schemes create extended periods where student loan deductions continue because your maternity pay remains above the monthly threshold.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Full pay for 6 months (26 weeks), statutory for remaining 13 weeks.</h3>
                <p className="text-gray-700 text-sm mb-2">Someone earning £36,000 annually would receive:</p>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Months 1-6: £3,000 per month (full pay)</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Above Plan 2 threshold by £725.42</li>
                      <li>Student loan deduction: £65.29 monthly</li>
                      <li>Six months of deductions: £391.74</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Months 7-9: £797 per month (statutory rate)</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Below threshold</li>
                      <li>Student loan deduction: £0</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  This mother pays nearly £400 in student loans during maternity leave despite being on leave and caring for a newborn. While enhanced maternity pay is obviously better than statutory, the student loan deductions reduce the benefit somewhat.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  If evaluating job offers or negotiating employment terms, understanding that enhanced maternity pay above your threshold triggers continued student loan deductions helps you calculate the true value. Six months at full pay sounds generous, but if you&apos;re paying 9% student loans on amounts above threshold, the net benefit is reduced.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/maternity-paternity-leave-adjustment-calculator/"> Maternity/Paternity Leave Adjustment Calculator </Link>  shows exactly how much you&apos;ll pay in student loans during different maternity pay scenarios.
                </p>
              </div>
            </section>

            {/* Unpaid Leave and Additional Leave */}
            <section id="unpaid-leave" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Unpaid Leave and Additional Leave
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many mothers extend their leave beyond the 39 weeks of SMP by taking additional unpaid leave. Some employers allow up to 52 weeks total leave, with weeks 40-52 unpaid.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unpaid leave means zero income, which means zero student loan deductions. Your payslip shows nothing for student loans during these months because there&apos;s nothing to deduct from.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Financial Planning Consideration:</h3>
                <p className="text-gray-700 text-sm mb-2">If you&apos;re choosing between:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Returning after 39 weeks (end of SMP)</li>
                  <li>Extending to 52 weeks with 13 weeks unpaid</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  The student loan impact is neutral for those additional weeks. You&apos;re not paying loans during week 40-52 because you have no income. You&apos;re also not paying loans during weeks 7-39 if you&apos;re on statutory rate below the threshold.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-gray-700 text-sm">
                  The actual student loan cost of maternity leave primarily falls in the first six weeks at 90% pay (if your earnings are high enough that 90% exceeds the monthly threshold) or during any enhanced pay period your employer offers.
                </p>
              </div>
            </section>

            {/* Year-End Reconciliation and Refunds */}
            <section id="reconciliation" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Year-End Reconciliation and Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here&apos;s where many mothers discover they&apos;ve overpaid. Annual reconciliation compares what you actually earned for the full tax year against what you should have paid in student loans based on that annual income.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Lisa works April to October (7 months), then takes maternity leave for the rest of the tax year.</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">April-October: £30,000 annual salary, so £2,500 monthly</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Each month above Plan 2 threshold by £225.42</li>
                      <li>Student loan deduction: £20.29 per month</li>
                      <li>Seven months total: £142.03</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Maternity leave October-March:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>First 6 weeks at 90% (£2,250 monthly): Below threshold by £24.58, Student loan deduction: £0</li>
                      <li>Then statutory rate (£797 monthly): Below threshold, Student loan deduction: £0</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Lisa&apos;s annual calculation:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Seven months salary: £17,500</li>
                  <li>Six weeks enhanced SMP: £3,115 (approximately)</li>
                  <li>20 weeks statutory SMP: £3,681 (approximately)</li>
                  <li><strong>Total annual income: £24,296</strong></li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Plan 2 threshold is £27,295. Lisa&apos;s total income is £24,296, which is below the threshold. She should have paid zero student loans for the year. But she paid £142.03 through PAYE. <strong>Lisa is owed a £142.03 refund.</strong>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Many mothers in similar situations never claim this refund because they don&apos;t realize they overpaid. PAYE deducted correctly based on monthly calculations at the time, but the annual position shows overpayment.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">To claim this refund:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Wait for your P60 in May showing total annual income and total student loan deductions</li>
                  <li>Calculate what you should have paid based on annual income versus annual threshold</li>
                  <li>Contact HMRC (0300 200 3300) and explain you worked part-year plus maternity leave and have overpaid</li>
                  <li>Provide your P60 as evidence</li>
                  <li>Wait 6-8 weeks for refund processing</li>
                </ol>
                <p className="text-gray-700 text-sm mt-2">
                  These refunds can be substantial for mothers who worked only part of the year before maternity leave. Someone who worked five months then took maternity leave for seven months might be owed £200-£400 depending on their salary and circumstances.
                </p>
              </div>
            </section>

            {/* Shared Parental Leave Considerations */}
            <section id="shared-parental" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Shared Parental Leave Considerations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shared Parental Leave (SPL) allows parents to share up to 50 weeks of leave and 37 weeks of pay. Mothers must take at least 2 weeks after birth, but beyond that, leave can be split between parents however they choose.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From a student loan perspective, SPL works the same as maternity leave for whoever is taking it. If the father takes SPL at Shared Parental Pay (which matches statutory maternity pay rates), he faces the same dynamics:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">For the parent taking SPL:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>First six weeks at 90% of salary might trigger student loan deductions if above threshold</li>
                    <li>Remaining weeks at statutory rate (£184.03 weekly) typically fall below threshold, so no deductions</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategic consideration:</h3>
                  <p className="text-gray-700 text-sm">
                    If both parents are splitting leave and both have student loans, both face these calculations separately. Each pays based on their own income and threshold during their respective leave periods.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-gray-700 text-sm">
                  Strategic planning might involve the lower-earning parent taking more of the leave if both have student loans, to minimize total household student loan costs during the leave period. However, this should be balanced against career implications, bonding time, and practical family considerations. Student loan optimization shouldn&apos;t override what&apos;s best for your family.
                </p>
              </div>
            </section>

            {/* Maternity Allowance */}
            <section id="maternity-allowance" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Maternity Allowance for Those Not Eligible for SMP
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mothers who don&apos;t qualify for SMP (typically self-employed, recently changed jobs, or earning below the qualifying threshold) might receive Maternity Allowance instead. Maternity Allowance is paid by the government, not employers, for up to 39 weeks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The rate is the lower of £184.03 per week or 90% of your average earnings. For most recipients, it&apos;s the flat £184.03 (£797 monthly), the same as the statutory rate of SMP.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Student loan implications:</h3>
                <p className="text-gray-700 text-sm">
                  From a student loan perspective, Maternity Allowance below threshold means zero deductions. HMRC doesn&apos;t automatically deduct from Maternity Allowance payments. You receive the full amount, and if your annual income including Maternity Allowance stays below the threshold, you owe nothing in student loans for that year.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  If you have other income during the year (you worked before the leave, or you&apos;re self-employed with business income continuing), that income might push you above the threshold. But the Maternity Allowance itself doesn&apos;t have deductions taken at source.
                </p>
              </div>
            </section>

            {/* Budgeting for Maternity Leave with Student Loans */}
            <section id="budgeting" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Budgeting for Maternity Leave with Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accurate budgeting requires knowing exactly when student loan deductions will and won&apos;t happen:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Month before leave starts:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Normal salary</li>
                    <li>Normal student loan deductions</li>
                    <li>Budget: Regular monthly budget</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">First month of leave (possibly partial month):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Combination of salary and maternity pay</li>
                    <li>Student loan deductions might be higher than normal if combined income exceeds threshold by more than usual</li>
                    <li>Budget: Prepare for potentially higher deductions this month</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">First 6 weeks at 90% pay:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>If 90% of your salary exceeds monthly threshold, student loan deductions continue</li>
                    <li>Calculate exactly how much using: (90% of salary - monthly threshold) × 9%</li>
                    <li>Budget: Factor in these deductions when calculating available income</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Weeks 7-39 at statutory rate:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>£797 monthly, well below threshold for all plans</li>
                    <li>Zero student loan deductions</li>
                    <li>Budget: Your take-home is the full £797 (minus any tax/NI if applicable, though statutory rate is often below tax thresholds too)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Weeks 40-52 if taking unpaid leave:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Zero income</li>
                    <li>Zero student loan deductions</li>
                    <li>Budget: Living on savings or partner&apos;s income</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Month of return (possibly partial month):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Combination of maternity pay tail and returning salary</li>
                    <li>Student loan deductions restart based on combined income</li>
                    <li>Budget: Expect deductions to resume</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">First full month back:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Normal salary</li>
                    <li>Normal student loan deductions resume</li>
                    <li>Budget: Back to pre-leave monthly budget</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" className="text-blue-700 hover:underline" href="https://studentloancalculator.uk/calculators/monthly-repayment-calculator/"> Monthly Repayment Calculator </Link> to calculate exact deductions for each phase based on your specific salary and maternity pay arrangement.
                </p>
              </div>
            </section>

            {/* Strategic Timing Considerations */}
            <section id="timing" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Timing Considerations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you time your maternity leave relative to the tax year can affect student loan implications:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Starting leave early in tax year (April-June):</h3>
                  <p className="text-gray-700 text-sm">
                    You&apos;ll have worked only a few months before leave starts. Your annual income for the tax year will likely be low (part-year salary plus maternity pay). Higher chance you&apos;ll have overpaid through PAYE and be owed a refund at year-end.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Starting leave mid-tax year (July-December):</h3>
                  <p className="text-gray-700 text-sm">
                    You&apos;ll have worked approximately half the year. Depending on your salary, you might be above or below the annual threshold. Careful calculation needed to determine if you&apos;ll owe more or be owed a refund.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Starting leave late in tax year (January-March):</h3>
                  <p className="text-gray-700 text-sm">
                    You&apos;ll have worked most of the year. You&apos;re likely above the annual threshold and probably won&apos;t have overpaid. In fact, if you return to work in the next tax year, you might have &quot;lost&quot; months of earnings that would have pushed you further above threshold in the first year but now spread across two tax years.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  None of this should dictate when you actually take maternity leave (that&apos;s driven by your baby&apos;s arrival date, which you don&apos;t control precisely). But understanding the dynamics helps you anticipate whether you&apos;ll need to claim a refund, or whether you might actually owe additional student loan payments at year-end.
                </p>
              </div>
            </section>

            {/* Returning to Work: Phased Returns */}
            <section id="phased-return" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Returning to Work: Phased Returns
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many mothers return to work on reduced hours initially, building back up to full time over several months. This phased return affects student loan calculations.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Returning at 50% hours on 50% pay:</h3>
                  <p className="text-gray-700 text-sm">
                    If 50% of your salary falls below the monthly threshold, you&apos;ll have zero student loan deductions during this phase. Once you increase hours and pass the threshold, deductions restart.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Returning at 80% hours on 80% pay:</h3>
                  <p className="text-gray-700 text-sm">
                    If 80% of your salary still exceeds the monthly threshold, deductions restart immediately but at lower amounts than when you were full-time.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Normal salary £30,000 (£2,500 monthly)</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Returning at 50%: £1,250 monthly</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>£1,250 is below the Plan 2 monthly threshold of £2,274.58</li>
                      <li>Student loan deduction: £0</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Returning at 80%: £2,000 monthly</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Still below Plan 2 threshold</li>
                      <li>Student loan deduction: £0</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  This gives you several months of zero student loan payments while you&apos;re rebuilding your work routine and managing childcare. It&apos;s a financial silver lining to the reduced income of part-time work. For most people on typical graduate salaries, returning at anything less than 90% hours means falling below the monthly threshold and having zero deductions during that period.
                </p>
              </div>
            </section>

            {/* Taking Control of Maternity Leave Finances */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Maternity Leave Finances
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Maternity leave is financially challenging without student loans adding complexity. But with awareness of how the system works, you can budget accurately and ensure you&apos;re not paying more than you should.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The key insights:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Student loans continue if your maternity pay exceeds the monthly threshold</li>
                  <li>Most people at statutory rate pay nothing after the first six weeks</li>
                  <li>Enhanced schemes extend the period of paying student loans</li>
                  <li>Annual reconciliation might reveal overpayments worth claiming</li>
                  <li>Unpaid leave means zero student loan costs</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Before leave starts:</h3>
                  <p className="text-gray-700 text-sm">Calculate your expected deductions before leave starts</p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">During leave:</h3>
                  <p className="text-gray-700 text-sm">Track what actually happens during leave</p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">After year-end:</h3>
                  <p className="text-gray-700 text-sm">Check for overpayments when you receive your P60</p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">If owed refunds:</h3>
                  <p className="text-gray-700 text-sm">Claim refunds if you&apos;re owed them</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Maternity leave already reduces your income substantially. Don&apos;t let avoidable student loan overpayments reduce it further. The system isn&apos;t designed to handle maternity leave optimally, but understanding how it works means you can protect yourself from unnecessary costs and claim back money that&apos;s rightfully yours.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your focus during maternity leave should be on your new baby and your recovery, not on complex financial calculations. But taking a few hours before leave starts to understand the student loan implications helps you budget accurately and avoid nasty surprises.
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

export default MaternityPayStudentLoans;