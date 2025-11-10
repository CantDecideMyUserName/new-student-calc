import React from 'react';
import Link from 'next/link';
import DrLilaDesc from '@/components/common/dr-lila-desc';
import TableOfContents from '@/components/common/tableOfContent';

const CareerProgressionStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "marginal-tax-rate", title: "The Marginal Effective Tax Rate Explained", level: 2 },
    { id: "interest-escalation", title: "Plan 2 Interest Rate Escalation", level: 2 },
    { id: "salary-trap", title: "The £50,000 Salary Trap", level: 2 },
    { id: "progression-vs-growth", title: "Career Progression vs Loan Balance Growth", level: 2 },
    { id: "strategic-timing", title: "Strategic Timing of Promotions and Raises", level: 2 },
    { id: "non-salary-benefits", title: "Negotiating Non-Salary Benefits Instead", level: 2 },
    { id: "worth-it", title: "When Higher Salary Is Still Worth It", level: 2 },
    { id: "plan-5-difference", title: "The Plan 5 Difference", level: 2 },
    { id: "taking-control", title: "Taking Control of Career Decisions", level: 2 },
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
                  Career Progression and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Career Progression and Student Loans: Marginal Effective Tax Rate
          </h1>
          <p className="text-xl text-gray-600">
            The 51% Marginal Rate Reality: How Student Loans Reduce Salary Increase Value
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
                Career progression should always feel like a win. You work hard, get promoted, receive a raise,
                and your financial situation improves. But if you&apos;re repaying student loans in the UK, there&apos;s a
                strange and frustrating reality: earning more doesn&apos;t always mean keeping proportionally more.
                In fact, certain salary bands create situations where a £5,000 raise might only increase your
                monthly take-home by £200.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This happens because student loan repayments stack on top of income tax and National Insurance,
                creating effective marginal tax rates that can exceed 50%. Between £50,000 and £60,000, some
                people face a marginal rate of 60% or higher when you account for all deductions including
                student loans. Every additional pound you earn only puts 40 pence in your pocket.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For those on Plan 2 specifically, there&apos;s an additional complication. The interest rate you&apos;re
                charged isn&apos;t fixed. It increases as your salary rises, ranging from RPI (around 3-4%) at the
                threshold up to RPI+3% (potentially 6-7%) at £49,130 and above. This means career progression
                doesn&apos;t just increase your monthly repayments. It also makes your loan grow faster through
                higher interest charges, even as you&apos;re paying more toward it each month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding these dynamics doesn&apos;t mean you should turn down promotions or refuse raises.
                But it does mean you need to think strategically about career progression, negotiation tactics,
                and whether the actual financial benefit of moving up is as large as the headline salary increase
                suggests.
              </p>
            </section>

            {/* Marginal Effective Tax Rate */}
            <section id="marginal-tax-rate" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Marginal Effective Tax Rate Explained
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your marginal effective tax rate is the percentage of any additional income you earn that goes to
                deductions rather than landing in your bank account. It&apos;s not your average tax rate across all
                income. It&apos;s specifically about what happens to the next pound you earn.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Someone earning £30,000 on Plan 2:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Income tax on additional income: 20%</li>
                    <li>National Insurance: 12%</li>
                    <li>Student loan: 9%</li>
                    <li><strong>Total marginal rate: 41%</strong></li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    Every extra pound earned only increases take-home by 59 pence.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">At £50,270 (higher rate threshold):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Income tax: 40%</li>
                    <li>National Insurance: 2% (rate drops above £50,270)</li>
                    <li>Student loan: 9%</li>
                    <li><strong>Total marginal rate: 51%</strong></li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    Every extra pound earned only increases take-home by 49 pence.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sarah&apos;s Promotion Example: £48,000 to £55,000 (£7,000 raise)</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">At £48,000:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Monthly gross: £4,000</li>
                      <li>Income tax: £578</li>
                      <li>National Insurance: £354</li>
                      <li>Student loan (Plan 2): £155</li>
                      <li><strong>Monthly net: £2,913</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">At £55,000:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Monthly gross: £4,583</li>
                      <li>Income tax: £811</li>
                      <li>National Insurance: £365</li>
                      <li>Student loan: £208</li>
                      <li><strong>Monthly net: £3,199</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="text-red-600 text-sm font-medium mt-3">
                  Result: Sarah&apos;s £7,000 raise only puts £3,432 extra in her pocket annually. She&apos;s keeping 49%
                  of the raise, with 51% going to deductions.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This isn&apos;t unusual. This is the reality for anyone crossing the higher rate threshold while repaying
                student loans.
              </p>
            </section>

            {/* Plan 2 Interest Rate Escalation */}
            <section id="interest-escalation" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Plan 2 Interest Rate Escalation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The marginal tax rate issue affects everyone repaying student loans. But Plan 2 borrowers
                (those who started university between 2012 and 2023) face an additional problem: their interest
                rate increases with their income.
              </p>

              <div className="bg-purple-50 border border-purple-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Plan 2 interest rates work on a sliding scale:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Income up to £27,295 (the threshold): RPI only</li>
                  <li>Income between £27,295 and £49,130: RPI + progressive addition up to 3%</li>
                  <li>Income above £49,130: RPI + 3%</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">With RPI currently around 3-4%, this means:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>At £30,000: approximately 3.5% interest</li>
                  <li>At £40,000: approximately 5% interest</li>
                  <li>At £50,000+: approximately 6-7% interest</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Career progression from £30,000 to £50,000 doesn&apos;t just increase your monthly repayments by
                £180 (from £243 to £2,043 annually). It also increases your interest rate from roughly 3.5% to
                6.5%, meaning your loan balance grows faster despite paying more toward it each month.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Interest Impact Example (£45,000 loan balance):</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>At 3.5% interest: £1,575 annual interest</li>
                  <li>At 6.5% interest: £2,925 annual interest</li>
                  <li><strong>Difference: £1,350 more interest per year</strong></li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  Your annual repayment increased by £1,800 due to the higher salary, but your annual interest
                  increased by £1,350. The net progress toward reducing your balance is only £450 more per year
                  despite earning £20,000 more.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This creates a frustrating dynamic where career success makes you pay more without making
                meaningful progress toward clearing the debt. For many Plan 2 borrowers, this is why loan
                balances continue growing even as they pay thousands annually.
              </p>
            </section>

            {/* The £50,000 Salary Trap */}
            <section id="salary-trap" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The £50,000 Salary Trap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The area around £50,000 is particularly painful for Plan 2 borrowers. You cross into the higher
                rate tax band, your student loan interest hits the maximum RPI+3%, and your marginal effective
                tax rate exceeds 50%.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">James&apos;s Promotion: £48,000 to £52,000</h3>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Immediate effects:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Monthly repayment increases from £1,863 to £2,223 annually (£360 more)</li>
                    <li>Interest rate increases from approximately 5.8% to 6.5%</li>
                    <li>Marginal tax rate on the £4,000 raise: 51%</li>
                    <li>Actual take-home increase: approximately £1,960 annually (from £4,000 gross)</li>
                  </ul>
                </div>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Long-term effects:</h4>
                  <p className="text-gray-700 text-sm">
                    If James has a £50,000 loan balance, the higher interest rate means approximately £350 more
                    annual interest. His increased repayments of £360 are almost entirely consumed by the higher
                    interest. His loan balance barely changes despite earning £4,000 more and paying £360 more
                    toward the loan.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                James is working harder, taking on more responsibility, and earning significantly more, but his
                student loan situation has barely improved. In fact, depending on inflation and exact interest
                calculations, his balance might still be growing. This is the £50,000 trap. You&apos;ve reached a
                salary that sounds successful, but student loan mathematics means you&apos;re paying maximum
                interest while the debt continues to grow.
              </p>
            </section>

            {/* Career Progression vs Loan Balance Growth */}
            <section id="progression-vs-growth" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Career Progression vs Loan Balance Growth
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For many graduates, career progression creates a race between growing income (which increases
                repayments) and growing loan balance (through interest accumulating faster than repayments).
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Graduate A: Steady moderate earner</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Starting salary: £25,000</li>
                    <li>Career progression to £35,000 over 10 years</li>
                    <li>Average income: below or slightly above threshold</li>
                    <li>Repayments: modest, mostly below or near threshold</li>
                    <li>Interest: RPI to RPI+1%, relatively low</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <strong>Loan balance after 10 years:</strong> slightly higher than starting balance despite repayments
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Graduate B: Strong career progression</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Starting salary: £28,000</li>
                    <li>Career progression to £55,000 over 10 years</li>
                    <li>Repayments: increasing from £72 to £2,493 annually</li>
                    <li>Interest: escalating from RPI+0.5% to RPI+3%</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <strong>Loan balance after 10 years:</strong> similar to or higher than starting balance despite paying £15,000+
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Graduate C: High earner</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Starting salary: £35,000</li>
                    <li>Career progression to £70,000 over 10 years</li>
                    <li>Repayments: consistently high, £702 to £3,843 annually</li>
                    <li>Interest: RPI+2% to RPI+3% throughout</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <strong>Loan balance after 10 years:</strong> finally starting to decrease
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                The paradox is that Graduate B&apos;s career success hasn&apos;t translated to student loan progress. They&apos;ve
                paid substantial amounts but the balance remains stubbornly high. Graduate A, earning less,
                actually has similar loan balance outcomes because they&apos;ve been charged less interest throughout.
                Only Graduate C, earning significantly above £50,000 for extended periods, starts making real
                progress toward reducing the balance. Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/salary-growth-impact-calculator/" className="text-blue-600 underline hover:text-blue-800">Salary Growth Impact Calculator</Link> models how different career trajectories affect your loan
                balance over time.
              </p>
            </section>

            {/* Strategic Timing */}
            <section id="strategic-timing" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Timing of Promotions and Raises
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding these dynamics allows for strategic thinking about when and how to accept
                career progression. This doesn&apos;t mean refusing promotions. But it does mean considering:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Early career raises (below £40,000)</h3>
                  <p className="text-gray-700 text-sm">
                    Accept enthusiastically. The marginal rate is 41%, which is high but not devastating. You&apos;re
                    building skills, experience, and positioning yourself for future earnings. Student loan impact is moderate.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mid-career raises (£40,000-£50,000)</h3>
                  <p className="text-gray-700 text-sm">
                    Still generally accept, but this is where the interest rate escalation starts becoming painful.
                    Each £1,000 increase in salary pushes you further up the interest rate scale. Consider whether
                    some of the raise could come as non-salary benefits.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Raises crossing £50,000</h3>
                  <p className="text-gray-700 text-sm">
                    Think carefully about the actual financial benefit. A raise from £48,000 to £52,000 is worth
                    roughly £1,960 of actual take-home, not £4,000. If the promotion comes with significantly more
                    responsibility, stress, or hours, evaluate whether £1,960 annually compensates adequately.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Raises above £50,000</h3>
                  <p className="text-gray-700 text-sm">
                    The marginal rate stabilizes at 51%, and you&apos;re already paying maximum interest. Further raises
                    are still only giving you 49 pence per pound, but at least the interest rate isn&apos;t climbing higher.
                  </p>
                </div>
              </div>
            </section>

            {/* Negotiating Non-Salary Benefits */}
            <section id="non-salary-benefits" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Negotiating Non-Salary Benefits Instead
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When facing promotions or raises that cross into high marginal rate territory, consider
                negotiating for benefits rather than pure salary increases. Many benefits either aren&apos;t counted as
                salary for tax purposes or are provided more tax-efficiently.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pension contributions</h3>
                  <p className="text-gray-700 text-sm">
                    Employer pension contributions don&apos;t count as salary for student loan purposes. A £3,000 increase in employer pension contribution is worth more than a £3,000 salary increase because you don&apos;t pay tax, National Insurance, or student loans on employer contributions. The £3,000 goes straight into your pension without any deductions.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Salary sacrifice arrangements</h3>
                  <p className="text-gray-700 text-sm">
                    We covered this in depth in a previous article, but it bears repeating. Converting part of a raise into salary sacrifice pension, EV scheme, or other benefits reduces your gross salary for student loan purposes while still providing the benefit. You can check our  <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> for tools to model this.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Additional holiday</h3>
                  <p className="text-gray-700 text-sm">
                    Extra annual leave doesn&apos;t count as taxable income. If you&apos;re at 51% marginal rate, five
                    additional days holiday (approximately £1,000 value) would only cost you £490 in take-home if
                    you took it as cash, but as holiday, you get the full value.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible working arrangements</h3>
                  <p className="text-gray-700 text-sm">
                    The value of working from home two extra days per week might be worth £2,000 annually in
                    commute costs and time. This benefit costs your employer nothing but provides substantial value
                    without any tax, NI, or student loan implications.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Training and development</h3>
                  <p className="text-gray-700 text-sm">
                    Employer-paid courses, conferences, or certifications build your skills and CV without counting
                    as taxable income.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Negotiation Strategy:</h3>
                <p className="text-gray-700 text-sm">
                  If you&apos;re offered a £5,000 raise that crosses into the 51% band, counter with: &quot;Could we
                  structure this as £2,500 salary increase plus £2,500 in additional pension contribution or other
                  benefits?&quot; You&apos;ll likely come out ahead financially.
                </p>
              </div>
            </section>

            {/* When Higher Salary Is Still Worth It */}
            <section id="worth-it" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Higher Salary Is Still Worth It
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite the marginal rate pain, there are strong reasons to pursue career progression and
                accept raises even when the take-home benefit is disappointing:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Future earnings</h3>
                  <p className="text-gray-700 text-sm">
                    Today&apos;s promotion and raise set your baseline for future negotiations. Taking a job at £52,000
                    with 51% marginal rate positions you for a future role at £65,000, where the marginal rate
                    remains 51% but the absolute numbers are larger.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Loan write-off</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;re likely to have your loan written off (most Plan 2 borrowers are), then your total
                    repayment doesn&apos;t matter. The 30-year clock is ticking regardless. Every extra pound you keep
                    through career progression is a pound gained.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Skills and experience</h3>
                  <p className="text-gray-700 text-sm">
                    Career progression isn&apos;t just about immediate salary. You&apos;re gaining skills, building networks,
                    and creating opportunities that pay off over decades. Refusing promotions because of 51%
                    marginal rates could limit your lifetime earnings far more than the short-term deduction impact.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Salary after loans end</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;re on Plan 2 and likely to repay in full before 30 years, there&apos;s a future point where
                    your salary continues but student loan deductions stop. Building toward higher salary before
                    that point maximizes benefit afterward.
                  </p>
                </div>
              </div>
            </section>

            {/* Plan 5 Difference */}
            <section id="plan-5-difference" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Plan 5 Difference
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Borrowers on <Link target="_blank" href="https://studentloancalculator.uk/plans/plan-5/" className="text-blue-600 underline hover:text-blue-800">Plan 5</Link> (started university in 2023 or later) face different mathematics. Plan 5 has
                lower interest (RPI only, no +3% addition) but longer write-off (40 years) and lower threshold (£25,000).
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">For Plan 5 borrowers:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Marginal rate remains 41% throughout career (20% tax + 12% NI + 9% loan below £50,270)</li>
                  <li>No interest rate escalation as income rises</li>
                  <li>Career progression doesn&apos;t make your interest rate worse</li>
                  <li>But repayments start earlier and continue longer</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The strategic considerations differ. Plan 5 borrowers should focus more on career progression
                because the interest rate won&apos;t punish them for earning more. The loan is still likely to be written
                off for most, but the path there is less painful than Plan 2.
              </p>
            </section>

            {/* Taking Control */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Career Decisions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Career progression while repaying student loans requires thinking beyond the headline salary
                number. A £5,000 raise isn&apos;t worth £5,000. Between £50,000 and £60,000, it&apos;s worth
                approximately £2,450 annually. That&apos;s still worth having, but it&apos;s not transformational money.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Use this knowledge strategically:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li><strong>In negotiations:</strong> Understand the actual value to you and push for benefits or structure that maximizes take-home</li>
                  <li><strong>In career planning:</strong> Don&apos;t avoid progression because of high marginal rates, but don&apos;t overvalue it either</li>
                  <li><strong>In financial planning:</strong> Budget based on actual take-home from raises, not the gross increase</li>
                  <li><strong>In perspective:</strong> Remember that for most Plan 2 borrowers, the loan will be written off</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The system is frustrating. Career success should feel more rewarding financially than it does
                when 51% of your raise disappears. But understanding exactly how it works lets you make
                strategic decisions and avoid disappointment when that £7,000 promotion only adds £3,400 to
                your annual take-home. Career progression is still worth pursuing. Just do it with eyes open to
                what you&apos;re actually gaining, and negotiate smartly to maximize the benefit within the constraints
                of the system you&apos;re operating in.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                A £5,000 raise at 51% marginal rate only puts £2,450 in your pocket - negotiate benefits instead of pure salary.
              </h3>
            </section>

            <DrLilaDesc />
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <TableOfContents items={tocItems} />
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CareerProgressionStudentLoans;