import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const Plan5StudentLoansOptimization: React.FC = () => {
  const tocItems = [
    { id: "plan5-fundamentals", title: "The Plan 5 Fundamentals", level: 2 },
    { id: "interest-rate-impact", title: "Interest Rate Impact: RPI Only vs RPI+3%", level: 2 },
    { id: "lower-threshold", title: "The Lower Threshold: Earlier Repayments Start", level: 2 },
    { id: "40-year-writeoff", title: "The 40-Year Write-Off: Paying Until Nearly 60", level: 2 },
    { id: "who-benefits", title: "Who Benefits From Plan 5 vs Plan 2?", level: 2 },
    { id: "overpayment-strategy", title: "Overpayment Strategy for Plan 5", level: 2 },
    { id: "early-career-strategy", title: "Early Career Strategy for Plan 5 Borrowers", level: 2 },
    { id: "mid-career-optimization", title: "Mid-Career Optimization (30s and 40s)", level: 2 },
    { id: "comparing-examples", title: "Comparing Plan 5 to Plan 2 Through Examples", level: 2 },
    { id: "taking-control", title: "Taking Control as a Plan 5 Borrower", level: 2 },
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
                  Plan 5 Student Loans Optimization
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Plan 5 Student Loans: Strategic Optimization for Post-2023 Starters
          </h1>
          <p className="text-xl text-gray-600">
            Strategic guide for Plan 5 student loans (post-2023 starters). RPI-only rates, 40-year terms, and when overpayment makes sense.
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
                If you started university in England in September 2023 or later, you&apos;re on Plan 5. This is the newest student loan plan, introduced with significant changes from the Plan 2 system that preceded it. On the surface, Plan 5 looks more borrower-friendly with dramatically lower interest rates (RPI only, instead of RPI+3%). But look closer and you&apos;ll see the trade-off: you&apos;ll be repaying for 40 years instead of 30, and the threshold is £2,295 lower, meaning repayments start earlier.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The crucial question for Plan 5 borrowers is whether these changes make you better or worse off than Plan 2 borrowers. The answer isn&apos;t straightforward. It depends entirely on your career trajectory and lifetime earnings. For high earners who would have repaid Plan 2 in full anyway, Plan 5&apos;s lower interest is beneficial. You&apos;ll pay less total. For low-to-moderate earners who would have had Plan 2 written off, Plan 5&apos;s longer repayment period means you pay more over time despite the lower interest rate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding Plan 5&apos;s specific mechanics helps you optimize your strategy. Unlike Plan 2 where overpayment almost never makes sense, Plan 5 creates scenarios where early overpayment might be rational for certain earners. The lower interest rate means your payments make more progress against the balance, particularly if you&apos;re a consistent mid-range earner.
              </p>
              <p className="text-gray-700 leading-relaxed">
                But the 40-year write-off hanging over everything still means most borrowers should focus on other financial priorities rather than aggressively clearing student debt.
              </p>
            </section>

            {/* The Plan 5 Fundamentals */}
            <section id="plan5-fundamentals" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Plan 5 Fundamentals
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 5 applies to anyone starting undergraduate study in England from August 2023 onwards. If you started your course in the 2023/24 academic year or later, you&apos;re on Plan 5.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Key Plan 5 features:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Threshold: £25,000 annually (£2,083.33 monthly)</li>
                  <li>Interest rate: RPI only (currently around 3-4%, no additional percentage)</li>
                  <li>Repayment rate: 9% on income above threshold</li>
                  <li>Write-off: 40 years after the April you were first due to repay</li>
                  <li>Maximum loan: £9,250 per year tuition plus maintenance loans (varies by circumstances)</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How this differs from Plan 2:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li><strong>Threshold:</strong> £2,295 lower (£25,000 vs £27,295)</li>
                  <li><strong>Interest:</strong> Dramatically lower (RPI vs RPI+3%, a difference of 3 percentage points)</li>
                  <li><strong>Write-off:</strong> 10 years longer (40 years vs 30 years)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  These changes were politically presented as making loans &quot;fairer&quot; and reducing the burden on graduates. The reality is more complex. The lower interest helps those who repay in full. The longer write-off period and lower threshold increase what most people pay over their lifetime.
                </p>
              </div>
            </section>

            {/* Interest Rate Impact */}
            <section id="interest-rate-impact" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Interest Rate Impact: RPI Only vs RPI+3%
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most significant change from Plan 2 is the interest rate structure. Plan 5 charges RPI only, regardless of your income. With RPI currently around 3-4%, Plan 5 interest is approximately 3% lower than Plan 2&apos;s maximum rate.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2 interest reminder:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>While studying: RPI+3%</li>
                    <li>After graduation, income-dependent: RPI to RPI+3% (currently 3-7%)</li>
                    <li>High earners (£49,130+): RPI+3% maximum</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5 interest:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>While studying: RPI only (currently 3-4%)</li>
                    <li>After graduation: RPI only, regardless of income</li>
                    <li>High earners: Still just RPI (no additional percentage)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">This creates fundamentally different loan balance dynamics:</h3>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Example: Graduate with £45,000 loan balance</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 p-3 rounded">
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">Plan 2 earning £35,000:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Interest rate: approximately 4-5% (RPI+1% based on income)</li>
                      <li>Annual interest: £1,800-£2,250</li>
                      <li>Annual repayment: (£35,000 - £27,295) × 9% = £693.45</li>
                      <li><strong className="text-red-600">Balance grows by £1,100-£1,550 annually</strong></li>
                    </ul>
                  </div>

                  <div className="bg-green-100 p-3 rounded">
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">Plan 5 earning £35,000:</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>Interest rate: 3.5% (RPI only)</li>
                      <li>Annual interest: £1,575</li>
                      <li>Annual repayment: (£35,000 - £25,000) × 9% = £900</li>
                      <li><strong className="text-green-600">Balance shrinks by £675 annually (actually making progress!)</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3 text-center">
                  <strong>This is the critical difference.</strong> Plan 5 borrowers at middle-income levels make real progress against their balance where Plan 2 borrowers see their balance grow or stagnate.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Example: Graduate with £45,000 balance earning £50,000</h4>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">Plan 2:</h5>
                    <ul className="text-gray-700 text-sm">
                      <li>Interest rate: 6-7% (RPI+3%)</li>
                      <li>Annual interest: £2,700-£3,150</li>
                      <li>Annual repayment: £2,043.45</li>
                      <li>Balance roughly stable or grows slightly</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">Plan 5:</h5>
                    <ul className="text-gray-700 text-sm">
                      <li>Interest rate: 3.5%</li>
                      <li>Annual interest: £1,575</li>
                      <li>Annual repayment: £2,250</li>
                      <li><strong>Balance shrinks by £675 annually (good progress)</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Plan 5&apos;s lower interest means consistent middle and upper-middle earners make meaningful progress toward reducing their balance throughout their careers. Plan 2 borrowers at the same income levels often see balances remain high or grow for 15-20 years.
                </p>
              </div>
            </section>

            {/* The Lower Threshold */}
            <section id="lower-threshold" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Lower Threshold: Earlier Repayments Start
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 5&apos;s threshold is £25,000, compared to Plan 2&apos;s £27,295. This £2,295 difference means Plan 5 borrowers start repaying earlier in their careers and pay more at every income level.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Income £27,000:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Plan 2: (£27,000 - £27,295) = below threshold, pays £0</li>
                    <li>Plan 5: (£27,000 - £25,000) × 9% = £180 annually</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Income £30,000:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Plan 2: £243.45</li>
                    <li>Plan 5: £450</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Income £40,000:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Plan 2: £1,143.45</li>
                    <li>Plan 5: £1,350</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  <strong>At every income level, Plan 5 borrowers pay £206-£207 more annually than Plan 2 borrowers</strong> (9% of the £2,295 threshold difference). This compounds over 40 years.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  For someone earning £35,000 consistently over 40 years, the threshold difference alone means paying approximately £8,280 more in total (£207 × 40 years) compared to Plan 2. The lower interest reduces what you pay overall, but the lower threshold increases it. Which effect dominates depends on your specific income trajectory.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Career start implications:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Many graduates spend their first 2-5 years earning between £22,000 and £28,000. On Plan 2, much of this period is below threshold (zero payments). On Plan 5, you&apos;re paying from the moment you exceed £25,000.
                </p>

                <div className="mt-3 p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Graduate starting at £24,000 with 5% annual raises:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Plan 2 total over first 5 years:</h5>
                      <p className="text-gray-700 text-sm">£212.85</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Plan 5 total over first 5 years:</h5>
                      <p className="text-gray-700 text-sm">£775.35</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Plan 5 borrowers pay £562.50 more in their first five years of work</strong> at typical graduate salary progressions. That&apos;s money that could have gone to building emergency funds, saving for house deposits, or starting pensions early when compound interest has maximum effect.
                  </p>
                </div>
              </div>
            </section>

            {/* The 40-Year Write-Off */}
            <section id="40-year-writeoff" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The 40-Year Write-Off: Paying Until Nearly 60
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 5&apos;s write-off period is 40 years after the April you were first due to repay. For someone graduating in 2024, this means April 2064. If you graduated at age 22, you&apos;ll be 62 when write-off happens.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2 graduate at 22:</h3>
                  <p className="text-gray-700 text-sm">Write-off at age 52</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5 graduate at 22:</h3>
                  <p className="text-gray-700 text-sm">Write-off at age 62</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  That&apos;s 10 additional years of repayments. For someone earning £40,000 during those extra 10 years, that&apos;s approximately £13,500 in additional repayments that Plan 2 borrowers don&apos;t make (£1,350 × 10 years).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At age 52 (Plan 2 write-off), you&apos;re likely:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Peak earning years or recently past peak</li>
                    <li>Children potentially independent</li>
                    <li>Focusing on retirement planning</li>
                    <li>13-15 years from retirement</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At age 62 (Plan 5 write-off), you&apos;re likely:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Potentially already retired or close to it</li>
                    <li>Possibly earning less than peak due to semi-retirement or career wind-down</li>
                    <li>Just a few years from state pension age</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Plan 5 borrowers will be paying student loans deeper into late career and potentially into early retirement. This affects retirement planning, career transition decisions, and financial flexibility in your 50s and early 60s.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/graduation-year-impact-calculator/"> Graduation Year Impact Calculator </Link> to see exactly when your 40-year write-off date falls and how this compares to other plans.
                </p>
              </div>
            </section>

            {/* Who Benefits From Plan 5 vs Plan 2 */}
            <section id="who-benefits" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Who Benefits From Plan 5 vs Plan 2?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The lower interest vs longer write-off trade-off creates winners and losers compared to the previous Plan 2 system:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5 is better for: High earners who would repay in full</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you&apos;re on track to earn £60,000+ consistently and will repay your loan in full well before 40 years, Plan 5&apos;s lower interest means you pay significantly less total.
                  </p>

                  <div className="mt-3 p-3 bg-white rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Example: Graduate with £45,000 balance reaching £70,000 salary</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Plan 2: Pays at maximum interest (6-7%), takes 15 years to repay, pays approximately £60,000 total</li>
                      <li>Plan 5: Pays at RPI (3.5%), takes 12 years to repay, pays approximately £52,000 total</li>
                      <li><strong className="text-green-600">Plan 5 saves £8,000+</strong></li>
                    </ul>
                  </div>

                  <p className="text-gray-700 text-sm mt-2">
                    For doctors, lawyers, finance professionals, tech workers, and others with high earning trajectories, Plan 5 is genuinely better. The lower interest saves substantial money.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5 is worse for: Low-to-moderate earners who would have had write-off</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you&apos;re on track to earn £28,000-£45,000 throughout your career and would have had Plan 2 written off, Plan 5 makes you pay more total due to the longer repayment period and lower threshold.
                  </p>

                  <div className="mt-3 p-3 bg-white rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Example: Graduate with £50,000 balance earning £35,000 rising to £50,000 over 40 years</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Plan 2: Pays approximately £35,000 over 30 years, has £40,000+ written off</li>
                      <li>Plan 5: Pays approximately £48,000 over 40 years, has £25,000 written off</li>
                      <li><strong className="text-red-600">Plan 5 costs £13,000 more</strong></li>
                    </ul>
                  </div>

                  <p className="text-gray-700 text-sm mt-2">
                    Teachers, nurses, social workers, retail managers, and many other middle-income professions will pay more under Plan 5 than they would have under Plan 2, despite the &quot;lower interest&quot; headline.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 5 is roughly equivalent for: Upper-middle earners</h3>
                  <p className="text-gray-700 text-sm">
                    There&apos;s a band around £50,000-£60,000 where Plan 5 and Plan 2 produce similar total repayment amounts. The lower interest and higher repayments of Plan 5 roughly balance against the shorter repayment period and lower threshold effects of Plan 2.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/plan-5-student-loan-calculator/"> Plan 5 Student Loan Calculator </Link> to model your specific situation and our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/total-loan-cost-calculator/"> Total Loan Cost Calculator </Link> to compare long-term costs.
                </p>
              </div>
            </section>

            {/* Overpayment Strategy for Plan 5 */}
            <section id="overpayment-strategy" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Overpayment Strategy for Plan 5
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 5 changes the overpayment calculus compared to Plan 2. With Plan 2, overpayment almost never makes sense because write-off likelihood is high and interest outpaces repayments for most borrowers. Plan 5&apos;s lower interest means overpayments make more progress against the balance, potentially making early overpayment rational for some borrowers.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">When Plan 5 overpayment might make sense:</h3>

                <div className="space-y-3 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Scenario 1: Mid-high earners (£45,000-£65,000)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      If you&apos;re earning in this range and likely to repay in full within 20-25 years, overpaying early could save interest. The 3.5% interest rate isn&apos;t negligible, and reducing principal saves you that 3.5% annually on the amount overpaid.
                    </p>

                    <div className="p-3 bg-white rounded">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Example: Overpaying £5,000 when your balance is £40,000</h5>
                      <ul className="text-gray-700 text-sm">
                        <li>Saves approximately £175 annually in interest (3.5% of £5,000)</li>
                        <li>Over 15 years until full repayment, saves approximately £2,625 total</li>
                        <li>More than the £5,000 overpayment cost</li>
                      </ul>
                      <p className="text-gray-700 text-sm mt-1">
                        This calculation works for Plan 5 in ways it doesn&apos;t for Plan 2 because Plan 5&apos;s lower interest means you&apos;re more likely to repay in full and the interest saved is meaningful.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Scenario 2: Small balances</h4>
                    <p className="text-gray-700 text-sm">
                      If you have a relatively small balance (under £25,000) and decent earnings (£40,000+), you might clear the loan within 10-15 years. Early overpayment could shave years off repayment and save interest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">When Plan 5 overpayment still doesn&apos;t make sense:</h3>

                <div className="space-y-2 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">For low-to-moderate earners expecting write-off:</h4>
                    <p className="text-gray-700 text-sm">
                      If you&apos;re earning £30,000-£40,000 and expect to have a balance written off after 40 years, overpayment is still wasting money. Every pound overpaid is a pound you won&apos;t get back at write-off.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">If you have better uses for the money:</h4>
                    <p className="text-gray-700 text-sm">
                      Even for mid-high earners likely to repay in full, pension contributions usually provide better returns than overpaying at 3.5% effective interest. Tax relief of 20-45% on pensions beats 3.5% interest saving on student loans.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">If you&apos;re uncertain about income trajectory:</h4>
                    <p className="text-gray-700 text-sm">
                      If there&apos;s significant chance your career earnings will be lower than expected (career breaks, industry changes, health issues), overpayment risks wasting money on a loan that might be written off.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>The general principle:</strong> Plan 5 makes overpayment slightly more reasonable than Plan 2, particularly for consistent mid-high earners. But it still doesn&apos;t beat pension contributions for most people, and write-off possibility means caution is warranted.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/student-loan-overpayment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Student Loan Overpayment Calculator </Link> compares overpayment against alternative investments for Plan 5 specifically.
                </p>
              </div>
            </section>

            {/* Early Career Strategy */}
            <section id="early-career-strategy" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Early Career Strategy for Plan 5 Borrowers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The lower threshold means Plan 5 borrowers face deductions earlier in their careers when money is typically tightest:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Budgeting in your 20s:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Expect deductions from £25,000+ (most graduate roles exceed this)</li>
                    <li>Monthly deductions of £40-£80 are common in early career</li>
                    <li>Factor this into rent affordability, savings, and lifestyle planning</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Building emergency funds:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Despite student loan deductions, prioritize 3-6 months emergency savings</li>
                    <li>Don&apos;t reduce emergency fund contributions to overpay student loans</li>
                    <li>The lower threshold makes this harder but no less important</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pension contributions:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Start pension contributions as early as possible, even if modest (3-5%)</li>
                    <li>The compound growth from starting at 23 vs 28 is substantial</li>
                    <li>Don&apos;t skip pensions to overpay student loans, even on Plan 5</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">House deposits:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>The lower threshold reduces take-home, making deposit saving slower</li>
                    <li>Consider Help to Buy ISAs, Lifetime ISAs, or other government schemes</li>
                    <li>Student loans affect mortgage affordability (reduces disposable income), plan accordingly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  The early career financial squeeze is real for Plan 5 borrowers. You&apos;re repaying student loans 2-3 years earlier than Plan 2 borrowers would have been. This compounds with other early career challenges (high rent, building career, establishing financial stability). Strategic planning is essential.
                </p>
              </div>
            </section>

            {/* Mid-Career Optimization */}
            <section id="mid-career-optimization" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Mid-Career Optimization (30s and 40s)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By your 30s and 40s, Plan 5&apos;s lower interest means you should be making steady progress against your balance:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking progress:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Unlike Plan 2 where balances often grow for 15+ years, Plan 5 balances should decrease from early-mid career onwards</li>
                    <li>Log into Student Loans Company account annually to verify progress</li>
                    <li>Seeing balance decrease is psychologically beneficial (even if write-off remains likely)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Salary sacrifice benefits:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Plan 5 borrowers benefit equally from salary sacrifice as Plan 2 borrowers. Pension contributions through salary sacrifice reduce gross income, reducing student loan deductions. This is valuable regardless of plan.
                  </p>

                  <div className="mt-3 p-3 bg-white rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">On £45,000 salary, sacrificing £3,000 annually for pensions:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Reduces gross to £42,000 for student loan purposes</li>
                      <li>Saves (£3,000 × 9%) = £270 annually in student loan deductions</li>
                      <li>Plus saves on tax and National Insurance</li>
                      <li>Pension receives the full £3,000 plus tax relief</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Career decisions:</h3>
                  <p className="text-gray-700 text-sm">
                    Don&apos;t avoid promotions or raises due to student loan impact. Yes, earning £50,000 means paying £2,250 annually instead of £1,350 at £40,000. But the extra £10,000 gross provides £6,000+ extra net income after all deductions. Career progression remains financially beneficial despite higher student loan costs.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Check our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/pension-salary-sacrifice-effect-calculator/"> Pension Salary Sacrifice Effect Calculator </Link> to model this for your situation, and see our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/"> student loan calculator</Link> for more optimization tools.
                </p>
              </div>
            </section>

            {/* Comparing Plan 5 to Plan 2 Through Examples */}
            <section id="comparing-examples" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Comparing Plan 5 to Plan 2 Through Examples
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Real-world comparisons help illustrate the trade-offs:
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Teacher: Starting £28,000, rising to £42,000 over career</h3>

                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Plan 2:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>30 years of repayments</li>
                        <li>Total paid: approximately £28,000</li>
                        <li>Balance written off: £35,000+</li>
                        <li>Monthly deductions: £0-£110 over career</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Plan 5:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>40 years of repayments</li>
                        <li>Total paid: approximately £42,000</li>
                        <li>Balance written off: £20,000</li>
                        <li>Monthly deductions: £22-£127 over career</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-3">
                    <strong>Plan 5 costs this teacher £14,000 more over their career</strong> due to a longer repayment period and a lower threshold, despite the lower interest.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Software Engineer: Starting £35,000, rising to £80,000</h3>

                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Plan 2:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Would repay in full in approximately 18 years</li>
                        <li>Total paid: approximately £62,000</li>
                        <li>Interest paid significantly due to RPI+3%</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Plan 5:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Repays in full in approximately 14 years</li>
                        <li>Total paid: approximately £54,000</li>
                        <li>Lower interest saves approximately £8,000</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-3">
                    <strong>Plan 5 benefits this high earner substantially</strong> through lower interest, despite lower threshold.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  These examples show why Plan 5 is better characterized as &quot;better for high earners, worse for most others&quot; rather than universally better or worse than Plan 2.
                </p>
              </div>
            </section>

            {/* Taking Control as a Plan 5 Borrower */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control as a Plan 5 Borrower
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 5 differs from Plan 2 in ways that materially affect your strategy:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Key differences requiring different approaches:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Lower interest means overpayment is slightly more rational (but still usually beaten by pensions)</li>
                  <li>Lower threshold means budgeting for deductions from earlier in career</li>
                  <li>Longer write-off means planning for repayments into your 60s</li>
                  <li>Mid-high earners benefit from Plan 5; low-to-moderate earners pay more</li>
                </ol>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Optimal Plan 5 strategy for most borrowers:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Don&apos;t overpay unless you&apos;re a high earner certain to repay in full within 15 years</li>
                  <li>Prioritize pensions over overpayment even with lower interest</li>
                  <li>Use salary sacrifice to reduce current deductions</li>
                  <li>Budget for student loan payments continuing until age 62-65</li>
                  <li>Track balance annually (you should see it decreasing unlike Plan 2)</li>
                  <li>Focus career decisions on maximizing earnings, not minimizing student loan impact</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Plan 5&apos;s lower interest is genuinely beneficial compared to Plan 2, but the longer repayment period and lower threshold mean most borrowers still pay substantial amounts over their working lives. The 40-year write-off remains your finish line, not clearing the balance to £0.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Focus on building overall financial health through pensions, savings, and investments. Your Plan 5 loan will be managed through PAYE deductions and will end after 40 years regardless of remaining balance. That&apos;s not avoiding responsibility. It&apos;s working within the system you&apos;ve been given and optimizing your financial outcomes over those four decades.
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

export default Plan5StudentLoansOptimization;