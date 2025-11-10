import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const CrossingStudentLoanThresholds: React.FC = () => {
  const tocItems = [
    { id: "plan-thresholds", title: "The Plan-Specific Thresholds", level: 2 },
    { id: "cost-crossing", title: "The Cost of Crossing Your Threshold", level: 2 },
    { id: "50k-cliff", title: "The £50,000 Cliff Edge for Plan 2", level: 2 },
    { id: "net-benefit", title: "Net Benefit Analysis: Is Crossing Worth It?", level: 2 },
    { id: "negotiation-frameworks", title: "Strategic Negotiation Frameworks", level: 2 },
    { id: "negotiation-language", title: "Specific Negotiation Language", level: 2 },
    { id: "ignore-thresholds", title: "When to Ignore Thresholds Entirely", level: 2 },
    { id: "long-term-cost", title: "The Long-Term Cost of a £1,000 Salary Increase", level: 2 },
    { id: "multiple-thresholds", title: "Multiple Threshold Complications", level: 2 },
    { id: "using-calculators", title: "Using Calculators for Negotiation Preparation", level: 2 },
    { id: "employer-perspective", title: "Employer Perspective on Threshold Negotiations", level: 2 },
    { id: "taking-control", title: "Taking Control of Threshold Negotiations", level: 2 },
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
                  Crossing Student Loan Thresholds
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Crossing Student Loan Thresholds: Strategic Salary Negotiation Guide
          </h1>
          <p className="text-xl text-gray-600">
            Strategic salary negotiation for UK student loan thresholds. Learn when crossing £25K-£50K thresholds impacts take-home and how to optimize offers.
          </p>
        </div>
      </section>

      {/* Main Content */}
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
                Salary negotiation typically focuses on getting the highest number possible. But when you&apos;re repaying student loans, certain salary levels act as financial trip wires. Cross them, and you face either the start of student loan deductions or dramatically higher effective costs. Understanding these thresholds transforms salary negotiation from &quot;how much can I get&quot; to &quot;what&apos;s the optimal structure for my total compensation.&quot;
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most critical threshold sits at £27,295 for Plan 2 borrowers (£25,000 for Plan 5, £24,990 for Plan 1). Below this, you pay nothing toward your student loan through PAYE. One pound above it, and 9% deductions start. A salary negotiation that moves you from £27,000 to £28,000 looks like a £1,000 raise on paper, but it triggers £63 in annual student loan deductions that weren&apos;t happening before, reducing the benefit to £937.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The second critical threshold is £50,000 for Plan 2 borrowers specifically. Cross this point and your student loan interest rate jumps from a progressive rate below RPI+3% to the maximum RPI+3%. For someone with a large loan balance, this interest rate increase can cost more annually than the benefit of the salary increase itself.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Strategic negotiation isn&apos;t about staying poor to avoid student loans. It&apos;s about understanding where thresholds sit, what crossing them actually costs you, and how to structure compensation to maximize what lands in your account rather than just maximizing the salary number on your contract.
              </p>
            </section>

            {/* The Plan-Specific Thresholds */}
            <section id="plan-thresholds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Plan-Specific Thresholds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each student loan plan has its own threshold, and knowing yours precisely is essential for negotiation:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 1: £24,990 annually</h3>
                  <p className="text-gray-700 text-sm mb-2">(£2,082.50 monthly)</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Typically applies to those who started before 2012 in England/Wales, or Scottish students</li>
                    <li>9% on income above threshold</li>
                    <li>Write-off after 25 years or at age 65</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2: £27,295 annually</h3>
                  <p className="text-gray-700 text-sm mb-2">(£2,274.58 monthly)</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Started 2012-2023 in England/Wales</li>
                    <li>9% on income above threshold</li>
                    <li>Interest: RPI to RPI+3% based on income</li>
                    <li>Write-off after 30 years</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 4: £31,395 annually</h3>
                  <p className="text-gray-700 text-sm mb-2">(£2,616.25 monthly)</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Scottish students who started from 2007</li>
                    <li>9% on income above threshold</li>
                    <li>Write-off after 30 years</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5: £25,000 annually</h3>
                  <p className="text-gray-700 text-sm mb-2">(£2,083.33 monthly)</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Started 2023+ in England</li>
                    <li>9% on income above threshold</li>
                    <li>Interest: RPI only (no +3% addition)</li>
                    <li>Write-off after 40 years</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 md:col-span-2 lg:col-span-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Postgraduate: £21,000 annually</h3>
                  <p className="text-gray-700 text-sm mb-2">(£1,750 monthly)</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Master&apos;s or Doctoral loans</li>
                    <li>6% on income above threshold</li>
                    <li>Write-off after 30 years</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> If you have both undergraduate and postgraduate loans, both thresholds apply separately. You pay 9% on income above the undergraduate threshold and 6% on income above £21,000. Combined, you could face 15% deductions on income above the higher threshold.
                </p>
              </div>
            </section>

            {/* The Cost of Crossing Your Threshold */}
            <section id="cost-crossing" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Cost of Crossing Your Threshold
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When your salary sits just below your threshold, crossing it triggers deductions on all income above that point. The psychological impact is immediate. You were paying zero in student loans. Now you&apos;re paying something every month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Let&apos;s model crossing the Plan 2 threshold specifically:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At £27,000 salary:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Monthly gross: £2,250</li>
                    <li>Below threshold by £24.58</li>
                    <li><strong>Student loan deduction: £0</strong></li>
                    <li><strong>Annual student loan: £0</strong></li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At £28,000 salary:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Monthly gross: £2,333.33</li>
                    <li>Above threshold by £58.75</li>
                    <li><strong>Student loan deduction: £5.29 per month</strong></li>
                    <li><strong>Annual student loan: £63.45</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  That £1,000 raise nets you £936.55 after student loan deductions start, plus you still lose 32% to tax and National Insurance. The actual increase in take-home is approximately £636 annually, or £53 per month. You&apos;re keeping 64% of the raise. That&apos;s not terrible, but it&apos;s noticeably less than the 68% you&apos;d keep if you were already above the threshold and this was just an incremental increase.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The impact compounds as you move further above the threshold:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">At £30,000 salary:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Above threshold by £2,705</li>
                    <li>Annual student loan: £243.45</li>
                    <li>Monthly deduction: £20.29</li>
                  </ul>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">At £35,000 salary:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Above threshold by £7,705</li>
                    <li>Annual student loan: £693.45</li>
                    <li>Monthly deduction: £57.79</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  The transition from £27,000 (zero deductions) to £35,000 (£693 annual deductions) means that £8,000 of gross salary increase only nets you approximately £5,000 in take-home after accounting for tax, National Insurance, and student loans starting from zero.
                </p>
              </div>
            </section>

            {/* The £50,000 Cliff Edge for Plan 2 */}
            <section id="50k-cliff" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The £50,000 Cliff Edge for Plan 2
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The £50,000 mark represents a double threshold for Plan 2 borrowers. First, you cross into the higher rate tax band (40% on income above £50,270). Second, your student loan interest rate hits maximum RPI+3% at £49,130.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The interest rate cliff matters enormously if you have a large loan balance:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At £48,000 salary:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Student loan interest rate: approximately RPI+2.7%</li>
                    <li>With RPI at 3.5%, total interest: 6.2%</li>
                    <li><strong>On £45,000 balance: £2,790 annual interest</strong></li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At £52,000 salary:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Student loan interest rate: RPI+3% (maximum)</li>
                    <li>With RPI at 3.5%, total interest: 6.5%</li>
                    <li><strong>On £45,000 balance: £2,925 annual interest</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Reality Check:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  The salary increase of £4,000 also increases your annual repayment from £1,863 to £2,223 (additional £360). But your interest increased by £135 annually. The net progress toward reducing your balance is only £225 more per year despite earning £4,000 more.
                </p>
                <p className="text-gray-700 text-sm">
                  From a pure take-home perspective, the £4,000 raise is worth approximately £1,960 after all deductions (49% marginal rate). From a student loan progress perspective, you&apos;re barely making more headway against the balance.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Alternative Structure Comparison:</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Traditional Negotiation (£48,000 to £52,000):</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Gross increase: £4,000</li>
                      <li>Take-home increase: £1,960</li>
                      <li>Student loan progress: minimal additional impact due to higher interest offsetting higher repayments</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Alternative Structure:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Salary: £48,000</li>
                      <li>Employer pension contribution increase: £2,000</li>
                      <li>Additional benefits: £2,000 value</li>
                      <li>Total package value: £52,000</li>
                      <li><strong>Result: Similar take-home, lower interest rate, growing pension</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Net Benefit Analysis */}
            <section id="net-benefit" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Net Benefit Analysis: Is Crossing Worth It?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before accepting or negotiating for a salary that crosses a threshold, calculate the net benefit using this framework:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1: Calculate new take-home</h3>
                  <p className="text-gray-700 text-sm">
                    Use your current take-home and add (gross increase × 0.59) if below £50,270, or (gross increase × 0.49) if crossing above £50,270.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2: Consider increased costs</h3>
                  <p className="text-gray-700 text-sm mb-2">Higher salary might affect:</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Child Benefit clawback (starts at £60,000)</li>
                    <li>Means-tested benefits if applicable</li>
                    <li>Student loan interest rate (Plan 2 only)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3: Evaluate non-financial factors</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Additional responsibility or stress</li>
                    <li>Additional hours or expectations</li>
                    <li>Career progression value</li>
                    <li>Skill development</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 4: Calculate the true hourly rate</h3>
                  <p className="text-gray-700 text-sm">
                    If the new role requires 5-10 extra hours weekly, factor this in. A £3,000 raise that only nets £1,800 take-home while adding 10 hours weekly means you&apos;re effectively working for £3.46 per hour for those extra hours.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example Analysis:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Current role:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>£26,500, 37.5 hours weekly, £2,023 monthly take-home</li>
                    </ul>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1 mt-2">Offer:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>£29,000, 40 hours weekly, requires evening work occasionally</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Net benefit calculation:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Gross increase: £2,500</li>
                      <li>Crosses threshold: triggers £153 annual student loan</li>
                      <li>Net take-home increase: approximately £1,600 annually (£133 monthly)</li>
                      <li>Additional hours: 130 hours annually (2.5 × 52 weeks)</li>
                      <li><strong>Effective hourly rate for additional work: £12.31</strong></li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-2 italic">
                  Is £12.31 per hour for extra work, plus the stress of evening availability, worth it? Only you can answer that, but at least you have the actual numbers rather than being dazzled by the £2,500 gross increase.
                </p>
              </div>
            </section>

            {/* Strategic Negotiation Frameworks */}
            <section id="negotiation-frameworks" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Negotiation Frameworks
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When negotiating around thresholds, several strategies can maximize your benefit:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy 1: Stay just below the threshold intentionally</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    If you&apos;re offered £28,000 but you&apos;re currently at £26,000, counter with: &quot;I&apos;d prefer to structure this as £26,500 salary plus additional benefits worth £1,500 rather than the full £28,000 as salary.&quot;
                  </p>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Benefits that don&apos;t trigger student loan thresholds:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Additional annual leave</li>
                    <li>Flexible working arrangements (work from home days)</li>
                    <li>Professional development budget</li>
                    <li>Health insurance or gym membership</li>
                    <li>Technology allowance</li>
                    <li>Travel allowance (if genuine work-related)</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    You stay below the threshold (no student loan deductions), but get equivalent value through benefits. Your take-home is actually higher than if you&apos;d taken the full £28,000 as salary.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy 2: Negotiate for benefits to offset threshold crossing</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If crossing the threshold is unavoidable (you&apos;re being promoted to a role that has a set salary of £32,000), negotiate for offsetting benefits:
                  </p>
                  <p className="text-gray-700 text-sm italic mb-2">
                    &quot;I understand the role is set at £32,000. Given that this crosses my student loan threshold and triggers deductions I&apos;m not currently paying, could we structure £2,000 of that as employer pension contribution and £30,000 as salary?&quot;
                  </p>
                  <p className="text-gray-700 text-sm">
                    Through salary sacrifice, the effective salary for student loan purposes becomes £30,000, reducing deductions from £423 to £243 annually, a £180 saving, while you still receive the full £2,000 pension benefit.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy 3: Threshold-aware stepping</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If progressing from £25,000 to £32,000 over two years, negotiate the path:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Year 1: £27,000 (just below threshold)</li>
                    <li>Year 2: £32,000 (accept crossing at this point)</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    This gives you one more year without student loan deductions, saving £423. It&apos;s not a huge amount, but it&apos;s £423 you wouldn&apos;t have had if you&apos;d crossed to £28,000 in year one.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy 4: Front-load non-salary benefits early career</h3>
                  <p className="text-gray-700 text-sm">
                    When you&apos;re below the threshold, you benefit less from salary increases (they&apos;d trigger threshold crossing) but benefit fully from non-salary perks. Negotiate heavily for benefits early in your career when you&apos;re below or near the threshold, then shift to salary focus once you&apos;re comfortably above and the threshold becomes less relevant.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our  <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> help you model different salary and benefits combinations to see which structures maximize your actual financial position.
                </p>
              </div>
            </section>

            {/* Specific Negotiation Language */}
            <section id="negotiation-language" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Specific Negotiation Language
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                How you phrase threshold-aware negotiation matters. You don&apos;t want to sound like you&apos;re trying to avoid contributing to your loan, which could come across poorly. Frame it around optimizing the total compensation package:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Poor framing:</h3>
                  <p className="text-gray-700 text-sm italic">
                    &quot;I don&apos;t want to pay student loans, so can you keep me below £27,295?&quot;
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Better framing:</h3>
                  <p className="text-gray-700 text-sm italic">
                    &quot;I&apos;m very excited about this role. Looking at the total compensation package, I&apos;d like to discuss structuring it in a way that maximizes the value to me. Given the interaction between salary and various deductions, could we consider a mix of base salary and benefits rather than pure salary increase?&quot;
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Poor framing:</h3>
                  <p className="text-gray-700 text-sm italic">
                    &quot;The student loan interest rate increases above £50,000, so I&apos;d rather stay below that.&quot;
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Better framing:</h3>
                  <p className="text-gray-700 text-sm italic">
                    &quot;I want to make sure I&apos;m getting maximum value from this promotion. Could we structure part of the compensation as increased pension contributions or other benefits? That way the total package is equivalent but structured more tax-efficiently.&quot;
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-gray-700 text-sm">
                  Employers understand tax efficiency. Most will respect a candidate who thinks carefully about compensation structure rather than just grabbing the highest salary number. Those same employers are likely paying attention to tax-efficient compensation for themselves.
                </p>
              </div>
            </section>

            {/* When to Ignore Thresholds Entirely */}
            <section id="ignore-thresholds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When to Ignore Thresholds Entirely
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite everything above, there are situations where threshold considerations should be secondary or ignored:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Major career opportunities</h3>
                  <p className="text-gray-700 text-sm">
                    If a role offers substantially better career progression, skills development, or positioning for future earnings, take it regardless of threshold effects. A role at £35,000 that positions you for £55,000 in three years is worth more than optimizing around the £27,295 threshold today.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Significant gross increases</h3>
                  <p className="text-gray-700 text-sm">
                    A jump from £25,000 to £40,000 is transformational even after student loan deductions start. You&apos;re going from £1,900 monthly take-home to approximately £2,650. Don&apos;t negotiate down to £27,000 to avoid the threshold. The threshold impact is real but small relative to the overall increase.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Career trajectory matters more</h3>
                  <p className="text-gray-700 text-sm">
                    Your salary at age 25 sets your baseline for age 30, which sets your baseline for age 35. Taking £28,000 now positions you for £35,000 in three years. Trying to stay at £27,000 to avoid thresholds might keep you at lower salary bands throughout your career, costing far more than you save on student loans.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Write-off likelihood</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;re likely to have your loan written off anyway (most Plan 2 borrowers with large balances), then total repayment doesn&apos;t matter. The write-off happens regardless. In this case, maximize income because you&apos;re just paying 9% extra &quot;tax&quot; on income above threshold, but the absolute amounts don&apos;t affect your long-term financial picture since the loan disappears eventually.
                  </p>
                </div>
              </div>
            </section>

            {/* The Long-Term Cost of a £1,000 Salary Increase */}
            <section id="long-term-cost" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Long-Term Cost of a £1,000 Salary Increase
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding the lifetime impact of crossing thresholds helps put short-term decisions in perspective.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Someone who crosses the Plan 2 threshold from £27,000 to £28,000 will pay:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Side:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>£63.45 annually in student loans</li>
                    <li>Over 30 years (until write-off): £1,903.50 total</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Benefit Side:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>£636 annually after all deductions</li>
                    <li>Over 30 years: £19,080 total benefit</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  So yes, crossing the threshold costs £1,903 over 30 years. But the benefit of the £1,000 increase is £19,080. The threshold crossing reduces the benefit by 10%, not 100%.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  For the £50,000 interest rate cliff, the calculation is more complex and depends on your balance, but even in worst cases, the salary increase still provides net benefit. It just provides less benefit than you might expect.
                </p>
              </div>
            </section>

            {/* Multiple Threshold Complications */}
            <section id="multiple-thresholds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Multiple Threshold Complications
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have both undergraduate and postgraduate loans, you face two thresholds:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Dual Threshold Structure:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Postgraduate: £21,000 (6% deduction starts)</li>
                    <li>Undergraduate: £27,295 for Plan 2 (9% deduction starts)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Three Salary Bands:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Below £21,000: 32% (tax + NI only)</li>
                    <li>£21,000-£27,295: 38% (tax + NI + 6% PG loan)</li>
                    <li>Above £27,295: 47% (tax + NI + 6% PG + 9% UG loan)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Expensive Dual Crossing Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Crossing from £26,000 to £28,000 when you have both loans is particularly expensive:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>At £26,000: paying 6% on £5,000 (£300 annually)</li>
                  <li>At £28,000: paying 6% on £7,000 and 9% on £705 (£420 + £63 = £483 annually)</li>
                  <li>Increase in deductions: £183 from a £2,000 raise</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  The marginal rate on that £2,000 is effectively 59% (£1,820 kept, £180 lost to increased student loans, plus tax and NI). Combined with tax and NI, you might keep just 41% of the raise.
                </p>
              </div>
            </section>

            {/* Using Calculators for Negotiation Preparation */}
            <section id="using-calculators" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Using Calculators for Negotiation Preparation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before entering salary negotiations, use tools to understand your specific situation. Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/income-threshold-alert-calculator/" className="text-blue-600 underline hover:text-blue-800">Income Threshold Alert Calculator</Link> shows exactly how different salary levels affect your deductions.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Model these scenarios:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Staying at current salary with benefit increases</li>
                  <li>Accepting offered salary as pure salary increase</li>
                  <li>Hybrid approach with part salary, part benefits</li>
                  <li>Future trajectory if you accept the offer vs decline</li>
                </ol>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-gray-700 text-sm">
                  The calculator shows monthly and annual take-home for each scenario, letting you walk into negotiation with precise numbers rather than rough estimates. Similarly, use the <Link target="_blank" href="https://studentloancalculator.uk/calculators/monthly-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Monthly Repayment Calculator </Link> to show exactly how much will come out of your paycheck at different salary levels. This helps you budget and understand the true value of offers.
                </p>
              </div>
            </section>

            {/* Employer Perspective on Threshold Negotiations */}
            <section id="employer-perspective" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Employer Perspective on Threshold Negotiations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding how employers view these requests helps you negotiate effectively:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Neutrality</h3>
                  <p className="text-gray-700 text-sm">
                    Employers generally don&apos;t care about structuring compensation tax-efficiently for you. It doesn&apos;t cost them more or less whether they pay you £30,000 salary or £28,000 salary plus £2,000 pension. In fact, pension contributions might save them National Insurance.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Precedent and Fairness</h3>
                  <p className="text-gray-700 text-sm">
                    They do care about precedent and fairness. If they give you special treatment, other employees might expect the same. Frame your request as optimizing the package structure, not as getting more than others.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategic Thinking</h3>
                  <p className="text-gray-700 text-sm">
                    They value employees who think strategically. Someone who understands marginal rates, thresholds, and total compensation demonstrates financial literacy. This can be viewed positively, not as someone trying to game the system.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Knowledge Gaps</h3>
                  <p className="text-gray-700 text-sm">
                    They might not know the details of student loan thresholds. You may need to educate HR or your manager about why structuring matters. Come prepared with specific numbers showing how different structures affect your take-home.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Flexibility Constraints</h3>
                  <p className="text-gray-700 text-sm">
                    They have limited flexibility on base salary. Many roles have set salary bands. But they often have more flexibility on benefits, pension contributions, or other perks. Negotiating for these might be easier than negotiating the salary number itself.
                  </p>
                </div>
              </div>
            </section>

            {/* Taking Control of Threshold Negotiations */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Threshold Negotiations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loan thresholds are real and they affect your financial outcome from salary negotiations. But they shouldn&apos;t paralyze you or cause you to reject opportunities that move your career forward.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The goal isn&apos;t to stay below thresholds forever. It&apos;s to understand where they are, what crossing them costs, and how to structure compensation to minimize the impact while maximizing your total benefit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Think of thresholds as information to use strategically in negotiation, not as walls you can never cross. Sometimes crossing is clearly worth it. Sometimes you can negotiate structure to reduce the impact. Sometimes staying below makes sense temporarily.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Calculate the actual numbers for your situation. Model different scenarios using our tools. Walk into negotiations informed about what different salary levels actually mean for your monthly budget. And remember that career progression over decades matters more than optimizing around thresholds in any single year. The thresholds are there. Understanding them gives you power in negotiation. Use that power to maximize your financial position while building the career you want.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                A £1,000 raise that crosses the threshold only puts £636 in your pocket - negotiate benefits and structure to maximize value.
              </h3>
            </section>

            <DrLilaDesc />
          </div>


          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-80 lg:flex-shrink-0">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div >
    </div >
  );
};

export default CrossingStudentLoanThresholds;