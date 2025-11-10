import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const SideHustlesStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "when-triggers", title: "When Side Income Triggers Student Loan Repayments", level: 2 },
    { id: "trading-allowance", title: "The £1,000 Trading Allowance Explained", level: 2 },
    { id: "allowance-vs-expenses", title: "Trading Allowance or Actual Expenses: Which to Choose?", level: 2 },
    { id: "profit-vs-turnover", title: "Profit vs Turnover: What Gets Taxed", level: 2 },
    { id: "combining-income", title: "Combining PAYE and Self-Employment", level: 2 },
    { id: "double-threshold", title: "The Double Threshold Trap", level: 2 },
    { id: "self-assessment", title: "Self Assessment Registration and Deadlines", level: 2 },
    { id: "payments-account", title: "Payments on Account for Side Hustles", level: 2 },
    { id: "setting-aside", title: "Quarterly Checks and Setting Aside Money", level: 2 },
    { id: "different-types", title: "Different Types of Side Hustles", level: 2 },
    { id: "main-income", title: "When Side Income Becomes Main Income", level: 2 },
    { id: "record-keeping", title: "Record Keeping Requirements", level: 2 },
    { id: "strategic-decisions", title: "Strategic Decisions: When to Grow vs Stay Small", level: 2 },
    { id: "taking-control", title: "Taking Control of Side Hustle Student Loans", level: 2 },
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
                  Side Hustles and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Side Hustles and Student Loans: Self-Employment Income Impact
          </h1>
          <p className="text-xl text-gray-600">
            Calculating Student Loan Obligations on Freelance Income and Business Profit
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
                The gig economy and side hustles have become standard ways to supplement income.
                Whether it&apos;s freelance writing, selling on Etsy, dog walking through an app, or consulting work in
                the evenings, millions of people in the UK earn money beyond their main employment. But if
                you&apos;re repaying student loans, that extra income comes with complications that most people
                don&apos;t discover until they receive an unexpected tax bill.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Side hustle income isn&apos;t subject to PAYE deductions. When you invoice a client for £500 of
                freelance work, that full £500 arrives in your account. No tax taken, no National Insurance
                deducted, and crucially, no student loan repayment made. It feels like pure profit. But HMRC
                and the Student Loans Company are waiting in the background, and when Self Assessment
                time comes, you&apos;ll need to account for everything.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The gap between receiving your side income in full and eventually paying student loans on it
                creates two problems. First, many people spend the money without setting aside enough for the
                eventual bill. Second, the rules around when side income triggers student loan obligations are
                complex, involving trading allowances, profit calculations, and the interaction between PAYE
                employment and self-employment income.
              </p>
            </section>

            {/* When Side Income Triggers Repayments */}
            <section id="when-triggers" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Side Income Triggers Student Loan Repayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not all side income creates student loan obligations. Whether you need to repay depends on
                total income from all sources combined, not just your side hustle earnings alone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your student loan threshold applies to your total income for the tax year. For Plan 2, that&apos;s
                £27,295. This includes:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Total Income Sources:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employment income (salary, bonuses, etc.)</li>
                  <li>Self-employment profits</li>
                  <li>Rental income</li>
                  <li>Dividend income</li>
                  <li>Interest from savings (above allowances)</li>
                  <li>Most other taxable income</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                If your total from all these sources combined exceeds your threshold, you owe student loan
                repayments on the amount above the threshold at 9% (or 6% for postgraduate loans).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The critical point is that side hustle income gets added to everything else. Even if your side
                income alone is small, it might push your total income above the threshold or increase how far
                above the threshold you are.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Example 1: Below Threshold</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Sarah earns £25,000 from employment and £1,500 from freelance graphic design.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Total income: £26,500</li>
                    <li>Plan 2 threshold: £27,295</li>
                    <li><strong>Below threshold - owes £0</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Example 2: Above Threshold</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Tom earns £30,000 from employment and £3,000 from freelance web development.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Total income: £33,000</li>
                    <li>PAYE already paid: £243.45</li>
                    <li>Should pay: £513.45</li>
                    <li><strong>Additional owed: £270</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Trading Allowance */}
            <section id="trading-allowance" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The £1,000 Trading Allowance Explained
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The trading allowance is a tax simplification that exempts small amounts of self-employment
                income from reporting requirements. If your total self-employment income is £1,000 or less, you
                can claim the trading allowance and avoid registering for Self Assessment entirely.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How the allowance works:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Self-employment income £1,000 or under: claim the allowance, report nothing</li>
                  <li>Self-employment income over £1,000: either claim the allowance as a flat £1,000
                    expense deduction, or calculate actual expenses</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Importantly, the trading allowance applies to turnover (total income received), not profit. If you
                receive £900 from freelance work, you&apos;re within the allowance regardless of your expenses. You
                don&apos;t need to register for Self Assessment, report the income, or pay any additional tax or
                student loans beyond what&apos;s already collected through PAYE.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Student Loan Trap:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Consider this scenario: You earn £27,000 from employment and £900 from freelance work.
                  The £900 is within the trading allowance, so you don&apos;t register for Self Assessment.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Your actual total income is £27,900 (£605 above threshold)</li>
                  <li>You should pay £605 × 9% = £54.45 in student loans</li>
                  <li>But HMRC doesn&apos;t know about the £900</li>
                  <li>You effectively avoid paying student loans on that income</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  This isn&apos;t fraud - you&apos;re using the trading allowance as intended. But it does mean small
                  amounts of side income can legitimately avoid student loan obligations.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Once your self-employment income exceeds £1,000, you must register for Self Assessment and
                report it. At that point, it gets added to your total income and student loans apply to any amount
                above the threshold.
              </p>
            </section>

            {/* Trading Allowance vs Actual Expenses */}
            <section id="allowance-vs-expenses" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Trading Allowance or Actual Expenses: Which to Choose?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When your self-employment income exceeds £1,000, you have a choice. Claim the trading
                allowance as a flat £1,000 deduction, or calculate actual expenses and deduct those instead.
                You can&apos;t do both.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For student loans specifically, this choice affects your taxable profit, which in turn affects your
                student loan calculation.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: £3,500 freelance income, £800 actual expenses</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white border border-purple-200 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Option 1: Trading Allowance</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Income: £3,500</li>
                      <li>Trading allowance: -£1,000</li>
                      <li><strong>Taxable profit: £2,500</strong></li>
                    </ul>
                  </div>

                  <div className="bg-white border border-purple-200 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Option 2: Actual Expenses</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Income: £3,500</li>
                      <li>Actual expenses: -£800</li>
                      <li><strong>Taxable profit: £2,700</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-700 text-sm mb-2">If employment income is £28,000:</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>With trading allowance: (£30,500 - £27,295) × 9% = £288.45</li>
                    <li>With actual expenses: (£30,700 - £27,295) × 9% = £306.45</li>
                    <li><strong>Trading allowance saves £18 in student loans</strong></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Generally, if your actual expenses are less than £1,000, claim the trading allowance. If they&apos;re
                significantly more, claim actual expenses. But run the numbers for your specific situation
                because student loans add another layer to the decision.
              </p>
            </section>

            {/* Profit vs Turnover */}
            <section id="profit-vs-turnover" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Profit vs Turnover: What Gets Taxed
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HMRC taxes profit, not turnover. This matters enormously for student loans because your
                student loan calculation uses your taxable profit from self-employment, not your gross income.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Turnover</h3>
                  <p className="text-gray-700 text-sm">
                    The total amount you receive from customers or clients. If you invoice £8,000 worth of
                    freelance work during the year, your turnover is £8,000.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Profit</h3>
                  <p className="text-gray-700 text-sm">
                    Turnover minus allowable expenses. If you had £2,000 in legitimate business expenses,
                    your profit is £6,000. This is what gets added to your income for student loans.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Allowable expenses include:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm grid md:grid-cols-2 gap-1">
                  <li>Equipment and tools needed for your work</li>
                  <li>Software and subscriptions</li>
                  <li>Professional fees (accountant, memberships)</li>
                  <li>Travel costs (with restrictions)</li>
                  <li>Marketing and advertising</li>
                  <li>Office supplies</li>
                  <li>Proportion of home bills if working from home</li>
                  <li>Professional development and training</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Expenses must be &quot;wholly and exclusively&quot; for business purposes. You can&apos;t claim personal
                expenses or split items that have both personal and business use unless you genuinely
                calculate the business proportion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For student loan purposes, understanding profit vs turnover matters when you&apos;re assessing
                whether side income will push you over the threshold. Earning £5,000 sounds significant, but if
                you had £3,000 in expenses, only £2,000 gets added to your total income for student loan
                calculations. Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> help you model how different profit levels affect your total
                repayment obligation.
              </p>
            </section>

            {/* Combining PAYE and Self-Employment */}
            <section id="combining-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Combining PAYE and Self-Employment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most common scenario is having both PAYE employment and self-employment side
                income. This creates a two-tier deduction system that confuses many people.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your employer deducts student loans through PAYE based only on your employment income.
                They have no visibility into your self-employment earnings. Then, when you complete Self
                Assessment, the system calculates student loans on your total income and credits what you&apos;ve
                already paid through PAYE.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Complete Example: Maya&apos;s Income</h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Maya&apos;s Income Sources:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Employment: £32,000 per year</li>
                    <li>Freelance bookkeeping: £6,000 turnover, £1,500 expenses, £4,500 profit</li>
                    <li><strong>Total income: £36,500</strong></li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Through PAYE (automatic):</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Amount above Plan 2 threshold: £32,000 - £27,295 = £4,705</li>
                    <li>Student loan deduction: £4,705 × 9% = £423.45</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Through Self Assessment:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Total income: £36,500</li>
                    <li>Amount above threshold: £36,500 - £27,295 = £9,205</li>
                    <li>Total student loan owed: £9,205 × 9% = £828.45</li>
                    <li>Already paid via PAYE: £423.45</li>
                    <li><strong>Additional payment due: £405.00</strong></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                On 31 January, Maya owes £405 for student loans on top of any income tax and National
                Insurance on her self-employment profit. This comes as a surprise if she didn&apos;t realize her side
                income would trigger additional student loan payments. Many people in Maya&apos;s position see
                student loan deductions on every payslip and assume they&apos;re fully covered.
              </p>
            </section>

            {/* Double Threshold Trap */}
            <section id="double-threshold" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Double Threshold Trap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A common misconception is that if your PAYE employment is below the threshold and your
                self-employment is also below the threshold (if considered separately), you don&apos;t owe student
                loans. This is completely wrong.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: David&apos;s Mistaken Thinking</h3>
                <p className="text-gray-700 text-sm mb-2">
                  David earns £25,000 from employment and £4,000 profit from self-employment (total £29,000).
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-red-200 p-3 rounded">
                    <h4 className="font-semibold text-red-700 text-sm mb-2">❌ Wrong Thinking:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Employment: £25,000 &lt; £27,295 ✓</li>
                      <li>Self-employment: £4,000 &lt; £27,295 ✓</li>
                      <li>Conclusion: I owe nothing</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-green-200 p-3 rounded">
                    <h4 className="font-semibold text-green-700 text-sm mb-2">✅ Reality:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Total income: £29,000</li>
                      <li>Above threshold: £29,000 - £27,295 = £1,705</li>
                      <li>Student loan owed: £1,705 × 9% = £153.45</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                There&apos;s only one threshold applied to total income, not separate thresholds for each income
                source. This &quot;double threshold&quot; thinking causes serious underpayment problems. People don&apos;t
                register for Self Assessment because they believe neither income source triggers obligations.
                Then HMRC catches up with them years later, demanding backdated payments with interest
                and penalties.
              </p>
            </section>

            {/* Self Assessment Registration */}
            <section id="self-assessment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Self Assessment Registration and Deadlines
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your self-employment income exceeds £1,000, you must register for Self Assessment by 5
                October following the end of the tax year in which you received the income.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  For income earned in the 2025/26 tax year (6 April 2025 to 5 April 2026):
                </h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Register by: 5 October 2026</li>
                  <li>Submit online return by: 31 January 2027</li>
                  <li>Pay any tax and student loans by: 31 January 2027</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Missing the registration deadline triggers automatic penalties (£100 initially, then escalating).
                Missing the payment deadline incurs interest charges on unpaid amounts, including unpaid
                student loans.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many people with side hustles don&apos;t realize they need to register. They think Self Assessment is
                only for people earning substantial self-employment income. But technically, any
                self-employment income over £1,000 (after trading allowance) requires registration, even if you
                ultimately owe nothing.
              </p>
            </section>

            {/* Payments on Account */}
            <section id="payments-account" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Payments on Account for Side Hustles
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your Self Assessment bill (including student loans) exceeds £1,000 and less than 80% was
                collected through PAYE, you&apos;ll need to make payments on account for the following year.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How payments on account work:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>31 January: Pay your actual liability for the previous tax year PLUS 50% of that amount
                    as advance payment for the current year</li>
                  <li>31 July: Pay another 50% advance payment for the current year</li>
                  <li>Following 31 January: Balance up with actual liability, adjusting for payments on account
                    already made</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Example: £405 student loans + £800 tax = £1,205 total
                </h3>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Year 1 payments:</h4>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>31 January 2027: Pay £1,205 (actual) + £602.50 (first payment on account)</li>
                  <li>31 July 2027: Pay £602.50 (second payment on account)</li>
                  <li><strong>Total paid in Year 1: £2,410</strong></li>
                </ul>
                <p className="text-red-600 text-sm mt-2">
                  This essentially means paying double in the first year.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Payments on account apply to student loans just like they apply to tax. You&apos;re prepaying 9% of
                expected self-employment profit above the threshold. This catches many people off-guard
                because they think about student loans as automatic PAYE deductions, not as payments they
                need to make proactively.
              </p>
            </section>

            {/* Setting Aside Money */}
            <section id="setting-aside" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Quarterly Checks and Setting Aside Money
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most common mistake with side hustle student loans is spending all the income when it
                arrives and having nothing left when the Self Assessment bill comes due months later.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Simple method</h3>
                  <p className="text-gray-700 text-sm">
                    When you receive side income, immediately transfer 9% to a separate savings account labeled
                    &quot;student loan fund.&quot; If you&apos;re also setting aside money for tax and National Insurance, you might
                    have a &quot;tax savings&quot; account where you set aside 30-40% of all self-employment income.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Quarterly calculation method</h3>
                  <p className="text-gray-700 text-sm">
                    Every three months, calculate your total income year-to-date (employment plus self-employment),
                    work out what you should have paid in student loans on the total, compare to what you&apos;ve actually
                    paid through PAYE, and ensure the difference is saved and ready for January.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Use calculators</h3>
                  <p className="text-gray-700 text-sm">
                    Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/multiple-jobs-side-income-calculator/" className="text-blue-600 underline hover:text-blue-800">Multiple Jobs Side Income Calculator</Link> and <Link target="_blank" href="https://studentloancalculator.uk/calculators/sa-unearned-income-calculator/" className="text-blue-600 underline hover:text-blue-800">SA Unearned Income Calculator</Link> help you estimate how much you&apos;ll owe based on your combined income.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                The money you set aside earns interest while sitting in savings, which helps offset the fact that
                you&apos;re effectively prepaying compared to if the same income came through PAYE with
                immediate deductions.
              </p>
            </section>

            {/* Different Types of Side Hustles */}
            <section id="different-types" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Different Types of Side Hustles
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Different side hustles have different implications for how student loans apply:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">App-based work (Uber, Deliveroo, TaskRabbit)</h3>
                  <p className="text-gray-700 text-sm">
                    Usually treated as self-employment. You receive gross income and must report it on Self
                    Assessment. Student loans apply to profit after expenses (fuel, vehicle costs, etc.).
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Online selling (eBay, Etsy, Amazon)</h3>
                  <p className="text-gray-700 text-sm">
                    Treated as self-employment if you&apos;re trading regularly rather than just clearing out your attic.
                    Profit after expenses counts toward student loan calculations. One-off sales of personal items
                    aren&apos;t taxable.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Freelancing and consulting</h3>
                  <p className="text-gray-700 text-sm">
                    Clearly self-employment income. All profit counts toward your total income for student loan purposes.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Rental income</h3>
                  <p className="text-gray-700 text-sm">
                    Not self-employment but still counts toward total income. Rental profit (rent received minus
                    allowable expenses) gets added to employment income for student loan calculations. If rental
                    profit exceeds £2,500, you must complete Self Assessment.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Investment income (dividends, interest)</h3>
                  <p className="text-gray-700 text-sm">
                    Counts toward total income for student loans but has its own tax treatment. Dividends above
                    the dividend allowance require Self Assessment and the income affects student loan calculations.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Each requires understanding specific rules, but the underlying principle is the same: profit or
                income gets added to everything else, and if the total exceeds your threshold, you owe student
                loans on the excess.
              </p>
            </section>

            {/* When Side Income Becomes Main Income */}
            <section id="main-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Side Income Becomes Main Income
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your side hustle grows to match or exceed your employment income, the dynamics change.
                You might transition from employee with side income to self-employed person with side
                employment, or even quit employment entirely.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From a student loan perspective, this shift means moving from mostly automatic PAYE
                deductions with small Self Assessment top-ups to primarily Self Assessment based repayments
                with no automatic deductions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This requires much more active management. You&apos;re setting aside 9% of all profit above the
                threshold rather than just 9% of side income above what&apos;s already covered by PAYE. The
                amounts are larger, the quarterly discipline more important, and the January payment
                significantly higher.
              </p>
            </section>

            {/* Record Keeping */}
            <section id="record-keeping" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Record Keeping Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Good records are essential for self-employment with student loans:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                    <h3 className="font-semibold text-gray-900 text-sm">Income records</h3>
                    <p className="text-gray-700 text-xs">
                      Invoices issued, payments received, bank statements showing deposits. You need to prove
                      your turnover for Self Assessment.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <h3 className="font-semibold text-gray-900 text-sm">Expense records</h3>
                    <p className="text-gray-700 text-xs">
                      Receipts, invoices, bank statements showing business payments. You need to justify any
                      expenses claimed against your profit.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                    <h3 className="font-semibold text-gray-900 text-sm">Mileage logs</h3>
                    <p className="text-gray-700 text-xs">
                      If claiming vehicle expenses, detailed mileage records showing business vs personal use.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 border border-purple-200 p-3 rounded">
                    <h3 className="font-semibold text-gray-900 text-sm">Home office calculations</h3>
                    <p className="text-gray-700 text-xs">
                      If claiming home working expenses, calculations showing the proportion of home costs
                      attributable to business use.
                    </p>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-3 rounded">
                    <h3 className="font-semibold text-gray-900 text-sm">Time tracking</h3>
                    <p className="text-gray-700 text-xs">
                      For some expenses (like equipment that has both personal and business use), time tracking
                      helps demonstrate business proportion.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Without good records, you can&apos;t accurately calculate profit. You&apos;ll either overestimate (paying
                more student loans than necessary) or underestimate (underpaying and facing later bills with
                interest). And if HMRC investigates, you can&apos;t defend your numbers without records.
              </p>
            </section>

            {/* Strategic Decisions */}
            <section id="strategic-decisions" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Decisions: When to Grow vs Stay Small
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The interaction between side hustle income and student loans creates a strange dynamic where
                earning more can feel like it&apos;s barely worth it once student loans, tax, and National Insurance are
                factored in.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Earning an extra £1,000 of self-employment profit when you&apos;re already above the threshold:
                </h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Income tax: £200 (assuming 20% band)</li>
                  <li>National Insurance Class 4: £90 (9%)</li>
                  <li>Student loan: £90 (9%)</li>
                  <li><strong>Net kept: £620 (62% of additional income)</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Some people deliberately keep side income below £1,000 to avoid Self Assessment complexity
                and additional student loan obligations. This is a legitimate choice, though it limits growth
                potential.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Others commit fully to growing the side hustle despite the tax and student loan implications,
                seeing it as a path to eventually replacing employment income entirely. There&apos;s no universally
                right answer, but understanding the financial reality of marginal income helps make informed
                decisions about how much time to invest in side work.
              </p>
            </section>

            {/* Conclusion */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Side Hustle Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Side hustles offer financial flexibility and growth potential, but they demand engagement with
                Self Assessment and understanding how additional income affects student loan obligations. The
                money arrives in full when you earn it, creating the illusion that it&apos;s all yours. It&apos;s not.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Set aside at least 9% immediately for student loans, more if you&apos;re also covering tax and
                National Insurance. Track your total income from all sources quarterly to understand what you&apos;ll
                owe in January. Register for Self Assessment by the deadline if your side income exceeds
                £1,000. And use calculators to model different scenarios before they become reality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your side hustle income isn&apos;t separate from your employment income for student loan purposes.
                It all combines into one total, and that total determines what you owe. Treat side income as if
                30-40% of it belongs to HMRC and the Student Loans Company from the moment it arrives,
                because effectively, it does. The only question is when you&apos;ll pay it.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Set aside 30-40% of side hustle income immediately - you&apos;ll owe HMRC and student loans eventually.
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

export default SideHustlesStudentLoans;