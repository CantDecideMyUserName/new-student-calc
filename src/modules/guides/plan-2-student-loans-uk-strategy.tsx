import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const Plan2StudentLoansStrategy: React.FC = () => {
  const tocItems = [
    { id: "plan2-cohort", title: "The Plan 2 Cohort: Who You Are", level: 2 },
    { id: "interest-mechanics", title: "Interest Rate Mechanics: RPI + Up to 3%", level: 2 },
    { id: "30-year-writeoff", title: "The 30-Year Write-Off: Your Finish Line", level: 2 },
    { id: "why-never-repay", title: "Why Most Plan 2 Borrowers Will Never Repay in Full", level: 2 },
    { id: "career-decisions", title: "Strategic Career Decisions for Plan 2 Borrowers", level: 2 },
    { id: "overpayment-question", title: "The Overpayment Question for Plan 2", level: 2 },
    { id: "tax-treatment", title: "Tax Treatment and Financial Planning", level: 2 },
    { id: "comparing-plans", title: "Comparing Plan 2 to Other Plans", level: 2 },
    { id: "psychological-challenge", title: "The Psychological Challenge", level: 2 },
    { id: "taking-control", title: "Taking Control of Your Plan 2 Strategy", level: 2 },
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
                  Plan 2 Student Loans Strategy
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Plan 2 Student Loans: Strategic Repayment for 2012-2023 Starters
          </h1>
          <p className="text-xl text-gray-600">
            Complete Plan 2 student loan strategy for 2012-2023 starters. Understand write-off, overpayment decisions, and career planning with RPI+3% rates.
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
                Plan 2 student loans represent one of the most financially significant cohorts in UK higher education history. If you started university between September 2012 and August 2023, you&apos;re on Plan 2, and your loan operates under rules that are fundamentally different from earlier plans (Plan 1) or the newer Plan 5. Understanding these specific rules isn&apos;t just academic. It determines whether you should overpay, how you should think about career choices, and most importantly, whether you&apos;ll ever actually repay your loan in full.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The defining features of Plan 2 are three-fold: relatively high interest rates (RPI plus up to 3% based on income), a 30-year write-off period, and a £27,295 threshold. These combine to create a situation where most Plan 2 borrowers will never repay their loans in full. Research from the Institute for Fiscal Studies consistently shows that approximately 75% of Plan 2 borrowers will have some or all of their debt written off after 30 years. This isn&apos;t a failure of the system. It&apos;s how it was designed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What this means practically is that Plan 2 borrowers need to think about their loans completely differently than traditional debt. This isn&apos;t a mortgage you need to aggressively pay down. For most people, it&apos;s effectively a graduate tax that runs for 30 years then disappears. Every strategic decision, from career choices to whether to overpay, should be viewed through this lens.
              </p>
            </section>

            {/* The Plan 2 Cohort */}
            <section id="plan2-cohort" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Plan 2 Cohort: Who You Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 2 applies to anyone who started undergraduate study in England or Wales between September 2012 and August 2023. This captures a massive cohort:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Plan 2 includes:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Those who started in 2012 when fees increased to £9,000</li>
                  <li>Everyone who graduated between 2015 and 2023</li>
                  <li>Millions of borrowers currently in repayment</li>
                  <li>Many still studying or recently graduated</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The cohort is diverse, but shares common features:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Most borrowed close to maximum amounts (£9,000-£9,250 per year tuition plus maintenance loans)</li>
                  <li>Typical graduate balances range from £35,000 to £60,000</li>
                  <li>Started repaying from April following graduation (or when income exceeded threshold)</li>
                  <li>Face 30 years of repayments before write-off</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  If you started in 2012, your write-off date is 2042 (you&apos;ll be in your 50s). If you started in 2023, write-off is 2053 (you&apos;ll be approaching 60). This is a substantial portion of your working life, but it&apos;s also finite. The loan doesn&apos;t follow you forever.
                </p>
              </div>
            </section>

            {/* Interest Rate Mechanics */}
            <section id="interest-mechanics" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Interest Rate Mechanics: RPI + Up to 3%
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 2&apos;s interest structure is more complex than other plans and significantly impacts how your balance grows:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">While studying:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Interest rate: RPI + 3%</li>
                    <li>This is the maximum rate</li>
                    <li>Your balance grows rapidly while you&apos;re at university</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">After graduating:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Income up to £27,295: RPI only (currently around 3-4%)</li>
                    <li>Income £27,295 to £49,130: RPI + progressive addition from 0% to 3%</li>
                    <li>Income above £49,130: RPI + 3% (maximum rate)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <p className="text-gray-700 text-sm mb-2">
                  The progressive addition works on a sliding scale. At the exact midpoint (approximately £38,213), you pay RPI + 1.5%. The rate increases proportionally as income rises.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">What this means in practice:</h3>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Graduate A earning £30,000:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>Slightly above threshold</li>
                    <li>Interest rate: approximately RPI + 0.5% = 3.5% to 4%</li>
                    <li>Annual interest on £45,000 balance: £1,575 to £1,800</li>
                    <li>Annual repayment: (£30,000 - £27,295) × 9% = £243.45</li>
                    <li><strong className="text-red-600">Balance grows by approximately £1,330 annually</strong></li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Graduate B earning £50,000:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>Well above threshold, past the £49,130 maximum rate point</li>
                    <li>Interest rate: RPI + 3% = 6% to 7%</li>
                    <li>Annual interest on £45,000 balance: £2,700 to £3,150</li>
                    <li>Annual repayment: (£50,000 - £27,295) × 9% = £2,443.45</li>
                    <li><strong className="text-orange-600">Balance shrinks by approximately £0-£250 annually (barely making progress)</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Graduate C earning £70,000:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>High earner</li>
                    <li>Interest rate: RPI + 3% = 6% to 7%</li>
                    <li>Annual interest on £45,000 balance: £2,700 to £3,150</li>
                    <li>Annual repayment: (£70,000 - £27,295) × 9% = £3,843.45</li>
                    <li><strong className="text-green-600">Balance shrinks by approximately £700-£1,150 annually (meaningful progress)</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  These examples show why most Plan 2 borrowers never repay in full. Unless you&apos;re earning £60,000+ consistently, you&apos;re barely making progress against the balance or it&apos;s actually growing despite your payments.
                </p>
              </div>
            </section>

            {/* The 30-Year Write-Off */}
            <section id="30-year-writeoff" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The 30-Year Write-Off: Your Finish Line
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 2 loans are written off 30 years after the April you were first due to repay. For someone who graduated in 2015, this means April 2045. For someone graduating in 2024, it&apos;s April 2054.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This 30-year period is crucial for strategic thinking:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Early in the 30 years (years 1-10):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Your balance is likely growing due to interest exceeding repayments</li>
                    <li>Don&apos;t panic about this growth</li>
                    <li>Focus on career development and earnings growth</li>
                    <li>Avoid voluntary overpayments in most cases</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Middle period (years 10-20):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>You might be earning enough that balance stabilizes or slowly decreases</li>
                    <li>Write-off is still far enough away that overpayment rarely makes sense</li>
                    <li>Focus on other financial priorities (house deposit, pension, investments)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Late period (years 20-30):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Write-off is approaching</li>
                    <li>If you&apos;re on track to have balance written off, definitely don&apos;t overpay now</li>
                    <li>If you&apos;re a very high earner who might pay off before write-off, consider whether final push makes sense</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At write-off:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Whatever balance remains is completely written off</li>
                    <li>No tax implications</li>
                    <li>Your credit record isn&apos;t affected</li>
                    <li>You&apos;re free of the obligation entirely</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  The key insight is that for most people, the write-off is your actual finish line, not &quot;paying off the loan.&quot; Strategy should optimize your financial position over those 30 years, not minimize total repaid.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/calculators/loan-writeoff-checker/"> Loan Write-Off Checker </Link> helps you estimate whether you&apos;re likely to repay in full or have the balance written off, fundamentally changing how you should think about your loan.
                </p>
              </div>
            </section>

            {/* Why Most Plan 2 Borrowers Will Never Repay in Full */}
            <section id="why-never-repay" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Most Plan 2 Borrowers Will Never Repay in Full
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The mathematics are straightforward but often misunderstood. For write-off to matter (meaning you don&apos;t repay in full), you need interest to outpace or roughly match repayments throughout much of the 30 years.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example trajectory for typical Plan 2 borrower:</h3>

                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Starting situation:</h4>
                  <ul className="text-gray-700 text-sm">
                    <li>Graduated 2020 with £50,000 loan balance</li>
                    <li>Starting salary £25,000</li>
                    <li>Write-off date: 2050 (30 years)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Career progression:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>Age 22-25: £25,000-£28,000 (below or near threshold, minimal repayments, balance growing)</li>
                    <li>Age 25-30: £28,000-£35,000 (modest repayments, balance still growing due to interest)</li>
                    <li>Age 30-40: £35,000-£45,000 (larger repayments, balance stabilizes)</li>
                    <li>Age 40-50: £45,000-£55,000 (significant repayments, balance slowly decreasing)</li>
                  </ul>
                </div>

                <div className="mt-3 p-3 bg-blue-100 rounded">
                  <p className="text-gray-700 text-sm">
                    <strong>At age 52 (write-off):</strong> After paying approximately £40,000-£50,000 over 30 years, they still have £35,000-£45,000 balance written off. They&apos;ve paid substantial amounts but never cleared the debt because interest kept pace with or exceeded repayments for the first 15-20 years.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  This pattern holds for anyone who doesn&apos;t reach consistently high earnings (£60,000+) until their 30s or later. Since most graduates follow this trajectory, most never repay in full.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Who does repay in full:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>High earners from early career (doctors, lawyers, finance, tech)</li>
                    <li>Those reaching £70,000+ by their 30s and staying there</li>
                    <li>People with smaller balances (£30,000 or less) who maintain steady middle-class earnings</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    For these borrowers, overpayment might make sense.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">For everyone else:</h3>
                  <p className="text-gray-700 text-sm">
                    Overpayment is throwing money away. The system is designed so that most borrowers will have significant balances written off after 30 years, regardless of how much they pay during that period.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategic Career Decisions */}
            <section id="career-decisions" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Career Decisions for Plan 2 Borrowers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding that you&apos;ll likely never repay in full changes how you should think about career:
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Don&apos;t avoid career progression due to student loan impact:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Yes, earning £55,000 means paying maximum interest rate and higher monthly deductions (51% marginal tax rate). But if the loan will be written off anyway, you&apos;re just paying the equivalent of 9% higher tax for those 30 years. The absolute amount you pay doesn&apos;t matter. What matters is your net financial position over your lifetime.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Taking the £55,000 role over staying at £35,000 to avoid higher student loan costs would be irrational. The higher salary provides substantially better financial position even after the increased student loan deductions.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Early career: Prioritize earnings growth</h3>
                  <p className="text-gray-700 text-sm">
                    Your 20s and early 30s are when career trajectory gets established. Take jobs that build skills, networks, and position you for higher earnings in your 30s and 40s. Don&apos;t turn down opportunities because of student loan implications.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Mid-career: Optimize total compensation</h3>
                  <p className="text-gray-700 text-sm">
                    By your 30s and 40s, you might be earning enough that structure matters. Use salary sacrifice, negotiate for pensions and benefits, and optimize how you&apos;re paid. But still prioritize roles that advance your career and increase earnings.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Late career: Write-off is approaching</h3>
                  <p className="text-gray-700 text-sm">
                    By your 40s, if you&apos;re on Plan 2, you&apos;re getting closer to write-off. The loan&apos;s end is in sight. Maintain your career trajectory and avoid any temptation to overpay just to &quot;clear it before the end.&quot; Let write-off happen.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/salary-growth-impact-calculator/" className="text-blue-600 underline hover:text-blue-800"> Salary Growth Impact Calculator </Link> to model how different career paths affect your loan balance and whether reaching higher earnings actually results in paying more total or just speeding up reaching write-off.
                </p>
              </div>
            </section>

            {/* The Overpayment Question */}
            <section id="overpayment-question" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Overpayment Question for Plan 2
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Should you voluntarily overpay your Plan 2 loan? For the vast majority of Plan 2 borrowers, the answer is no.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Why not to overpay:</h3>

                <div className="space-y-3 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Reason 1: Write-off likelihood</h4>
                    <p className="text-gray-700 text-sm">
                      If you&apos;re likely to have the loan written off (most people), every pound you overpay is a pound you&apos;ll never get back. You&apos;re voluntarily repaying debt that would have been forgiven.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Reason 2: Opportunity cost</h4>
                    <p className="text-gray-700 text-sm mb-1">Money used to overpay could go into:</p>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Pension (with tax relief giving immediate 25-67% return)</li>
                      <li>ISAs (growing tax-free and accessible)</li>
                      <li>House deposit (leveraging into property ownership)</li>
                      <li>Emergency fund (providing security)</li>
                    </ul>
                    <p className="text-gray-700 text-sm mt-1">
                      All these provide better returns than overpaying a loan with 6-7% interest that will likely be written off.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Reason 3: Interest rate isn&apos;t that bad</h4>
                    <p className="text-gray-700 text-sm">
                      6-7% sounds high but remember: this is debt that gets written off after 30 years. The effective interest rate considering write-off is much lower. For someone who pays £30,000 over 30 years then has £40,000 written off, they&apos;ve effectively borrowed £70,000 and repaid £30,000. The &quot;real&quot; interest they paid was minimal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Who might consider overpaying:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Only very high earners with relatively small balances who are certain they&apos;ll repay in full well before write-off should consider overpayment. Specifically:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Earning £70,000+ consistently</li>
                  <li>Balance under £35,000</li>
                  <li>On track to clear balance within 15 years</li>
                  <li>No better use for the money (already maxing pensions, have house deposit, etc.)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  Even for this group, overpayment is questionable because pension contributions (especially through salary sacrifice) provide better returns and reduce current student loan deductions simultaneously.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>For 95% of Plan 2 borrowers, overpayment is financially irrational.</strong> Focus money on pensions, savings, and investments instead.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/student-loan-overpayment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Student Loan Overpayment Calculator </Link> compares overpayment against alternative uses of the money to show which provides better financial outcomes.
                </p>
              </div>
            </section>

            {/* Tax Treatment and Financial Planning */}
            <section id="tax-treatment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tax Treatment and Financial Planning
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loans aren&apos;t considered debt for most financial planning purposes:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Mortgages:</h3>
                  <p className="text-gray-700 text-sm">
                    Student loan repayments reduce your take-home pay, which affects affordability calculations. But the loan itself isn&apos;t debt in the traditional sense that mortgage lenders consider. Having £50,000 in student loans doesn&apos;t prevent you getting a £300,000 mortgage the way £50,000 in credit card debt would.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Credit scores:</h3>
                  <p className="text-gray-700 text-sm">
                    Student loans don&apos;t appear on credit reports and don&apos;t affect credit scores. Being in repayment, being in deferment, or having a large balance doesn&apos;t impact your creditworthiness.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Financial statements:</h3>
                  <p className="text-gray-700 text-sm">
                    For personal net worth calculations, many financial advisors suggest ignoring student loan balances entirely if you&apos;re likely to have write-off. It&apos;s not really debt in the way a mortgage or car loan is. It&apos;s a future claim on a portion of your income above a threshold.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax planning:</h3>
                  <p className="text-gray-700 text-sm">
                    Student loans integrate with income tax and National Insurance. The combined effect creates marginal rates of 41-51% depending on income. This affects decisions around salary sacrifice, bonuses, and income structure but doesn&apos;t change the fundamental write-off dynamics.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparing Plan 2 to Other Plans */}
            <section id="comparing-plans" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Comparing Plan 2 to Other Plans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding what makes Plan 2 unique helps contextualize your situation:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2 vs Plan 1:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Plan 1: Lower threshold (£24,990), lower interest (RPI or BoE rate + 1%, whichever lower)</li>
                    <li>Plan 1 write-off: 25 years or age 65 (varies by cohort)</li>
                    <li>Plan 1 borrowers more likely to repay in full due to lower interest</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2 vs Plan 5 (post-2023):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Plan 5: Lower threshold (£25,000), much lower interest (RPI only, no +3%)</li>
                    <li>Plan 5 write-off: 40 years (longer)</li>
                    <li>Plan 5 borrowers might repay more total due to longer repayment period and lower interest allowing more progress</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Plan 2 vs Postgraduate:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>PG loans: £21,000 threshold, 6% deduction rate, 30-year write-off</li>
                    <li>PG loans often combine with Plan 2, creating 15% deduction rate above both thresholds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Plan 2 has the worst interest rate dynamics (RPI+3%) but middle-ground write-off period. For high earners, Plan 1&apos;s lower interest means they&apos;re more likely to clear their balance. For moderate earners, Plan 5&apos;s lower interest means more progress, but 40-year term means longer repayment. Plan 2 sits in a particular sweet spot where interest is high enough that most people won&apos;t repay in full, but write-off is soon enough (30 years) that treating it as finite makes sense.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Check our <Link target="_blank" className="text-blue-600 hover:underline" href="https://studentloancalculator.uk/guides/"> plan comparison guides </Link> to understand exactly how Plan 2 works for your situation.
                </p>
              </div>
            </section>

            {/* The Psychological Challenge */}
            <section id="psychological-challenge" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Psychological Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 2 creates a unique psychological burden. You have a large debt that&apos;s growing despite paying substantial amounts. You see £50,000+ balances and feel like you&apos;re failing financially. Understanding the system intellectually doesn&apos;t always ease the emotional response.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Reframing strategies:</h3>

                <div className="space-y-3 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Think of it as a tax, not debt:</h4>
                    <p className="text-gray-700 text-sm">
                      You&apos;re paying 9% higher marginal tax rate for 30 years. That&apos;s the reality. Thinking of it as debt to be cleared creates stress. Thinking of it as a temporary tax bracket is more accurate.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Focus on write-off date, not balance:</h4>
                    <p className="text-gray-700 text-sm">
                      Your finish line is April 2042 (or whenever your specific write-off date is), not &quot;£0 balance.&quot; Working toward 2042 is finite and achievable. Working toward £0 balance feels impossible.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Track net worth excluding student loans:</h4>
                    <p className="text-gray-700 text-sm">
                      When calculating your financial position, exclude student loan balance from debts. Include pensions, savings, home equity, investments. Your student loan isn&apos;t really part of your net worth because write-off will handle it.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Remember 75% never repay in full:</h4>
                    <p className="text-gray-700 text-sm">
                      You&apos;re not alone. This isn&apos;t a personal failure. It&apos;s how the system works for most people. The design ensures write-off for most borrowers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Taking Control of Your Plan 2 Strategy */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Your Plan 2 Strategy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plan 2 loans require specific strategies different from other plans and different from traditional debt:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Strategic principles:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Don&apos;t overpay unless you&apos;re a very high earner certain to repay in full</li>
                  <li>Prioritize pension contributions over loan overpayments</li>
                  <li>Use salary sacrifice to reduce current deductions while building retirement savings</li>
                  <li>Focus career decisions on maximizing earnings and opportunities, not minimizing student loan impact</li>
                  <li>Accept that your balance will likely grow or stay high for many years</li>
                  <li>Plan toward your write-off date, not toward £0 balance</li>
                  <li>Keep good records and monitor your loan annually</li>
                  <li>Understand that write-off will likely handle most or all of your remaining balance</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The Plan 2 system is counterintuitive. It looks like debt but functions like a time-limited graduate tax. Success means optimizing your financial position over the 30-year period, not minimizing what you repay. For most Plan 2 borrowers, every pound paid above the required PAYE deductions is a pound wasted.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Focus on building wealth through pensions and savings, advancing your career, and reaching your financial goals. Your Plan 2 loan will take care of itself through PAYE deductions and eventual write-off. That&apos;s not avoiding responsibility. It&apos;s using the system exactly as designed.
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

export default Plan2StudentLoansStrategy;