import React from 'react';
import Link from 'next/link';
import DrLilaDesc from '@/components/common/dr-lila-desc';
import TableOfContents from '@/components/common/tableOfContent';

const BonusPaymentsStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "paye-calculation", title: "How PAYE Normally Calculates Student Loans", level: 2 },
    { id: "bonus-impact", title: "What Happens When You Get a Bonus", level: 2 },
    { id: "why-unfair", title: "Why This Feels Wrong and Unfair", level: 2 },
    { id: "period-1-codes", title: "Period 1 Tax Codes: Making It Worse", level: 2 },
    { id: "reconciliation", title: "Annual Reconciliation: Getting Money Back", level: 2 },
    { id: "multiple-bonuses", title: "Multiple Bonuses Through the Year", level: 2 },
    { id: "commission-pay", title: "Commission-Based Pay and Variable Bonuses", level: 2 },
    { id: "christmas-bonuses", title: "Christmas Bonuses and Timing", level: 2 },
    { id: "strategic-planning", title: "Strategic Planning Around Bonuses", level: 2 },
    { id: "claim-refunds", title: "How to Claim Refunds for Overpayments", level: 2 },
    { id: "self-assessment", title: "Comparing to Self Assessment Treatment", level: 2 },
    { id: "paye-averaging", title: "The Fair Question: Why Can't PAYE Average?", level: 2 },
    { id: "conclusion", title: "Taking Control of Bonus Month Deductions", level: 2 },
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
                  Bonus Payments and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Bonus Payments and Student Loans: Why You Pay More in Some Months
          </h1>
          <p className="text-xl text-gray-600">
            How PAYE Treats Annual Bonuses: Understanding Monthly Deduction Spikes
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
                Getting a bonus should feel like a win. Extra money for hitting targets, annual performance
                rewards, or a Christmas payment from a generous employer. But if you&apos;re repaying student
                loans, you&apos;ve probably noticed something frustrating: a large chunk of that bonus disappears
                into student loan deductions, often far more than you&apos;d expect based on your normal monthly
                payments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A £3,000 bonus might only add £2,500 to your bank account after tax and National Insurance,
                but it could trigger an additional £270 in student loan deductions on top of your regular monthly
                amount. You end up paying student loans as if you earned that much every month, even though
                it&apos;s a one-off payment. And confusingly, you might get some of this money back at year-end
                through reconciliation, but only if you notice and claim it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The problem stems from how PAYE calculates student loan deductions on a monthly basis
                without averaging across the year. When you receive a bonus, your employer treats that month
                as if it represents your normal earnings and applies the threshold accordingly. This monthly
                calculation works fine when your income is consistent but breaks down spectacularly when you
                have significant one-off payments.
              </p>
            </section>

            {/* How PAYE Normally Calculates */}
            <section id="paye-calculation" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How PAYE Normally Calculates Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a typical month with consistent salary, PAYE student loan calculations are straightforward.
                Your employer takes your gross pay, subtracts the monthly threshold for your plan, and applies
                9% (or 6% for postgraduate loans) to the remainder.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Normal Monthly Calculation (£2,800 monthly on Plan 2):</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Gross pay: £2,800</li>
                  <li>Monthly threshold: £2,274.58</li>
                  <li>Amount above threshold: £525.42</li>
                  <li>Student loan deduction: £525.42 × 9% = £47.29</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This happens every month. If your salary stays the same, you pay £47.29 each month, totaling
                £567.48 annually. The annual calculation would be: total income £33,600, minus annual
                threshold £27,295, equals £6,305 above threshold, times 9% equals £567.45. Close enough,
                accounting for rounding.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The monthly and annual calculations produce roughly the same result because your income is
                consistent. The monthly threshold of £2,274.58 is simply the annual threshold of £27,295
                divided by 12. When applied to steady income, it works correctly. But introduce a bonus, and
                this breaks down completely.
              </p>
            </section>

            {/* What Happens With Bonus */}
            <section id="bonus-impact" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Happens When You Get a Bonus
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Let&apos;s say that same person earning £2,800 monthly receives a £3,000 bonus in December. Their
                December payslip shows:
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">December Payslip with Bonus:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Regular salary: £2,800</li>
                  <li>Bonus: £3,000</li>
                  <li><strong>Total gross pay: £5,800</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE calculates student loans on this combined amount:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Bonus Month Student Loan Calculation:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Gross pay for December: £5,800</li>
                  <li>Monthly threshold: £2,274.58</li>
                  <li>Amount above threshold: £3,525.42</li>
                  <li><strong>Student loan deduction: £3,525.42 × 9% = £317.29</strong></li>
                </ul>
                <p className="text-red-600 mt-3 font-medium">
                  Compare this to a normal month where they pay £47.29. The bonus month costs an extra £270
                  in student loan deductions. That £3,000 bonus only adds £2,730 after student loan deductions.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The employer is calculating correctly according to PAYE rules. They see total income of £5,800
                for December and apply the monthly threshold. They have no way of knowing this is unusual,
                that it&apos;s a one-off payment, or that averaging it across the year would produce a different result.
              </p>
            </section>

            {/* Why This Feels Wrong */}
            <section id="why-unfair" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why This Feels Wrong and Unfair
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Intuitively, you might expect that the student loan deduction on a £3,000 bonus should be
                £3,000 × 9% = £270. After all, you&apos;re paying 9% on income above the threshold, and surely a
                bonus is just additional income?
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But PAYE doesn&apos;t work that way. The monthly threshold isn&apos;t a &quot;first £2,274.58 is free&quot; rule. It&apos;s a
                calculation applied to your total income for that pay period. When bonus and salary combine,
                the entire amount is assessed against the single monthly threshold.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How the Calculation Really Works:</h3>
                <p className="text-gray-700 mb-2">
                  In December, you&apos;re not paying 9% just on the £3,000 bonus. You&apos;re paying 9% on all income
                  above £2,274.58, which includes both your regular salary and the bonus.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Your regular salary alone was already £525.42 above the threshold</li>
                  <li>The bonus adds another £3,000 of income above threshold</li>
                  <li>Total above threshold: £3,525.42 attracting the 9% rate</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This means bonus payments are effectively taxed for student loan purposes at the full 9% rate
                on almost the entire bonus amount (minus whatever portion of the monthly threshold you hadn&apos;t
                already used up with regular salary).
              </p>
            </section>

            {/* Period 1 Tax Codes */}
            <section id="period-1-codes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Period 1 Tax Codes: Making It Worse
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most people have cumulative tax codes that track your earnings and tax-free allowance
                throughout the year. Code &quot;1257L&quot; is cumulative. In December, a cumulative code considers
                your total earnings April to December and your cumulative tax-free allowance for those nine
                months.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But some people have Period 1 (or Week 1/Month 1) tax codes, shown as &quot;1257L M1&quot; or
                &quot;1257L W1&quot;. These non-cumulative codes calculate tax and student loans based only on the
                current pay period, ignoring everything that happened in previous months.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Period 1 codes are typically assigned when:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>You start a new job without providing a P45</li>
                  <li>HMRC doesn&apos;t have complete information about your employment</li>
                  <li>Your employer specifically requests it for administrative reasons</li>
                  <li>There&apos;s been a significant change in circumstances</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                For student loans, Period 1 codes matter because they prevent spreading the impact of
                bonuses across cumulative calculations. With a cumulative code, high earnings in one month
                can sometimes be partially offset by lower earnings in previous months if your tax-free
                allowance hadn&apos;t been fully used. With a Period 1 code, that month stands entirely alone.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have a Period 1 code and receive a bonus, you&apos;ll definitely pay the full student loan
                deduction on that month&apos;s total income with no relief from cumulative calculations. The
                December payment is treated as if it&apos;s the only month that matters.
              </p>
            </section>

            {/* Annual Reconciliation */}
            <section id="reconciliation" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Annual Reconciliation: Getting Money Back
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here&apos;s the silver lining. When the tax year ends and HMRC reconciles your total annual income
                against what you actually owe, bonus month overpayments often become apparent.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Annual Reconciliation</h3>
                <p className="text-gray-700 mb-2">
                  Person earning £2,800 monthly plus a £3,000 December bonus had total annual income of:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Regular salary: £2,800 × 12 = £33,600</li>
                  <li>Bonus: £3,000</li>
                  <li><strong>Total: £36,600</strong></li>
                </ul>

                <div className="mt-4 space-y-2">
                  <p className="text-gray-700 text-sm"><strong>Annual student loan calculation:</strong></p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Total income: £36,600</li>
                    <li>Annual threshold (Plan 2): £27,295</li>
                    <li>Amount above threshold: £9,305</li>
                    <li>Student loan owed: £9,305 × 9% = £837.45</li>
                  </ul>

                  <p className="text-gray-700 text-sm mt-3"><strong>What they actually paid through PAYE:</strong></p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Regular months: £47.29 × 11 = £520.19</li>
                    <li>Bonus month: £317.29</li>
                    <li>Total paid: £837.48</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                In this specific case, the amounts are essentially identical. The person paid through PAYE
                almost exactly what they owed annually. No overpayment occurred because their regular salary
                plus bonus didn&apos;t create the kind of spike that causes problems.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Overpayment Example:</h3>
                <p className="text-gray-700 mb-2">But change the numbers slightly. Imagine they earned £2,200 monthly (below threshold individually):</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Regular months: £0 × 11 = £0</li>
                  <li>Bonus month: (£5,200 - £2,274.58) × 9% = £263.29</li>
                  <li>Total paid: £263.29</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">Annual calculation: ((£26,400 + £3,000) - £27,295) × 9% = £189.45</p>
                <p className="text-red-600 text-sm font-medium mt-2">They&apos;ve overpaid by £73.84</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The complexity of whether you overpay, underpay, or pay exactly right depends on the
                relationship between your regular salary, the bonus amount, and how they combine relative to
                both monthly and annual thresholds.
              </p>
            </section>

            {/* Multiple Bonuses */}
            <section id="multiple-bonuses" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Multiple Bonuses Through the Year
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you receive bonuses quarterly or multiple times per year, the problem compounds. Each
                bonus month triggers the same high deduction based on that month&apos;s total income.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Someone receiving four quarterly bonuses of £1,500 each would see elevated student loan
                deductions in four separate months. If their regular salary already exceeds the monthly
                threshold, each bonus month adds roughly £1,500 × 9% = £135 extra in student loan
                deductions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Annual calculation might show these deductions were correct for total income. But the cash flow
                impact is significant. Four months of the year have substantially higher deductions, while eight
                months have normal deductions. This creates budgeting challenges if you&apos;re not expecting it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> help you model bonus scenarios and understand how they affect
                your annual repayments.
              </p>
            </section>

            {/* Commission-Based Pay */}
            <section id="commission-pay" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Commission-Based Pay and Variable Bonuses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Commission structures create similar issues but with less predictability. If your commission
                varies month to month, student loan deductions swing wildly.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Commission Variability Example:</h3>
                <p className="text-gray-700 mb-2">A salesperson might earn:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-3">
                  <li>January: £2,500 base + £500 commission = £3,000 total</li>
                  <li>February: £2,500 base + £200 commission = £2,700 total</li>
                  <li>March: £2,500 base + £2,000 commission = £4,500 total</li>
                </ul>

                <p className="text-gray-700 mb-2"><strong>Student loan deductions each month:</strong></p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>January: (£3,000 - £2,274.58) × 9% = £65.29</li>
                  <li>February: (£2,700 - £2,274.58) × 9% = £38.29</li>
                  <li>March: (£4,500 - £2,274.58) × 9% = £200.29</li>
                </ul>
                <p className="text-red-600 text-sm font-medium mt-2">
                  The March deduction is more than five times the February deduction.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This variability makes budgeting difficult. You can&apos;t simply look at one payslip and assume next
                month will be similar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For commission earners, tracking cumulative year-to-date deductions against expected annual
                liability is essential. Otherwise you don&apos;t know whether the variability is resulting in overall
                overpayment or underpayment.
              </p>
            </section>

            {/* Christmas Bonuses */}
            <section id="christmas-bonuses" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Christmas Bonuses and Timing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                December bonuses are particularly common, which means December often becomes the
                highest student loan deduction month for many people. This compounds the financial pressure
                of December (gifts, holidays, celebrations) with unexpectedly low take-home pay.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some employers offer the option to defer bonus payment to January, paying it in the new
                calendar year for tax planning purposes. For student loans, timing within the tax year (April to
                April) matters rather than calendar year. A December 2025 bonus and January 2026 bonus both
                fall in the same tax year (2025/26), so deferring from December to January doesn&apos;t change
                student loan treatment for that tax year.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Bonus Spreading Strategy:</h3>
                <p className="text-gray-700">
                  However, spreading a large annual bonus across multiple months can reduce monthly spikes. If
                  your employer can pay a £6,000 annual bonus as £500 monthly supplements rather than one
                  lump sum, the student loan impact spreads more evenly. The annual total owed doesn&apos;t change,
                  but the cash flow impact is less severe.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Not all employers offer this flexibility, but it&apos;s worth asking if bonus month deductions are
                causing problems.
              </p>
            </section>

            {/* Strategic Planning */}
            <section id="strategic-planning" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Planning Around Bonuses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you know a bonus is coming, you can plan for the reduced take-home:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Budget for higher deductions</h3>
                    <p className="text-gray-700 text-sm">
                      Calculate what your student loan deduction will be on your total income for bonus month.
                      Don&apos;t just look at the bonus amount and mentally deduct 9%. Calculate the entire month&apos;s
                      income minus threshold times 9%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Save in advance</h3>
                    <p className="text-gray-700 text-sm">
                      If you rely on that bonus money for something specific (holiday, debt repayment, savings goal),
                      factor in that student loan deductions will be higher. A £3,000 bonus might only be £2,500
                      after additional student loan deductions beyond your normal monthly payment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check your tax code</h3>
                    <p className="text-gray-700 text-sm">
                      If you have a Period 1 code, consider asking HMRC to switch you to cumulative. This might
                      provide some relief in bonus months, though the difference isn&apos;t always significant for
                      student loans specifically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Track annual totals</h3>
                    <p className="text-gray-700 text-sm">
                      Keep a running total of your year-to-date income and year-to-date student loan deductions.
                      This helps you understand whether you&apos;re on track to overpay, underpay, or pay exactly right by year-end.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Claim Refunds */}
            <section id="claim-refunds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Claim Refunds for Overpayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If year-end reconciliation shows you overpaid due to bonus month calculations, claiming the
                refund requires action:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Wait for your P60</h3>
                  <p className="text-gray-700">
                    Your P60 in May shows total annual income and total student loan deductions. Calculate what
                    you should have paid based on annual income. If you paid more, you&apos;ve overpaid.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Contact HMRC</h3>
                  <p className="text-gray-700">
                    Call 0300 200 3300 or use your Personal Tax Account. Explain you&apos;ve overpaid student loans
                    due to how bonuses were calculated monthly. Provide your P60 figures.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Provide evidence</h3>
                  <p className="text-gray-700">
                    HMRC may request your P60 and payslips from bonus months to verify the overpayment. Have
                    these ready.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Wait for processing</h3>
                  <p className="text-gray-700">
                    Refunds typically take 6-8 weeks. Larger overpayments are usually paid directly rather than
                    adjusted through tax codes.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Many people don&apos;t realize they&apos;ve overpaid because the annual total seems roughly correct
                when they glance at their P60. Only careful calculation reveals the overpayment. Our
                <Link target="_blank" href="https://studentloancalculator.uk/calculators/bonus-month-paye-calculator/" className="text-blue-600 underline hover:text-blue-800"> Bonus Month PAYE Student Loan Calculator</Link> helps identify whether bonus months created
                overpayments.
              </p>
            </section>

            {/* Self Assessment Comparison */}
            <section id="self-assessment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Comparing to Self Assessment Treatment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you file Self Assessment for other reasons, bonus income is treated completely differently.
                Self Assessment calculates student loans on total annual income regardless of when in the year
                you received payments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Someone with bonus income who completes Self Assessment would simply report total
                employment income (regular salary plus bonuses) and Self Assessment would calculate one
                figure for the entire year. The monthly spikes disappear in the annual calculation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, most people receiving bonuses as part of PAYE employment don&apos;t file Self
                Assessment unless they have other income requiring it. They&apos;re stuck with monthly calculations
                that can&apos;t see the full year&apos;s picture until reconciliation happens retrospectively.
              </p>
            </section>

            {/* Why Can't PAYE Average */}
            <section id="paye-averaging" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Fair Question: Why Can&apos;t PAYE Average?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You might reasonably ask why PAYE can&apos;t average income across the year to smooth out bonus
                impacts. Some countries do have more sophisticated payroll systems that attempt this.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The UK&apos;s PAYE system was designed for relatively consistent monthly or weekly employment. It
                works well for that scenario. Extending it to handle variable income, multiple jobs, bonuses, and
                all the other complexities of modern employment would require fundamental redesign.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                More sophisticated systems also require more information sharing between employers and
                HMRC in real time, raising privacy and technical challenges. The current system prioritizes
                simplicity and operates employer by employer with limited cross-referencing until year-end.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For now, the system is what it is. Bonus months will continue triggering higher student loan
                deductions, and individuals need to understand this to manage their finances effectively.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Bonus Month Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bonuses shouldn&apos;t be a nasty surprise on your payslip, but they often are if you don&apos;t understand
                how student loan deductions work on variable income. The key is recognizing that PAYE
                calculates monthly and treats each pay period independently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you know a bonus is coming, calculate in advance what it will do to your student loan
                deduction that month. Use the <Link target="_blank" href="https://studentloancalculator.uk/calculators/paye-period-threshold-calculator/" className="text-blue-600 underline hover:text-blue-800">PAYE Period Threshold Calculator</Link> to model different scenarios
                and understand exactly how much will be deducted.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Budget accordingly so you&apos;re not disappointed when the bonus arrives with lower take-home
                than expected. And track your annual totals to ensure you claim refunds if monthly calculations
                resulted in overpayment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bonus payments are rewards for your work. Understanding how they interact with student loan
                deductions ensures you keep as much of that reward as you&apos;re entitled to, without overpaying or
                being caught off-guard by larger deductions than you expected.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Calculate bonus month deductions in advance to avoid disappointment and budget accurately.
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

export default BonusPaymentsStudentLoans;