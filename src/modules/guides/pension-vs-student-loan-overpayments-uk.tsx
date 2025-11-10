import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const PensionVsStudentLoanOverpayments: React.FC = () => {
  const tocItems = [
    { id: "understanding-tax-relief", title: "Understanding Tax Relief on Pensions", level: 2 },
    { id: "student-loan-writeoff", title: "Student Loan Write-Off Changes Everything", level: 2 },
    { id: "salary-sacrifice", title: "Salary Sacrifice: The Double Benefit", level: 2 },
    { id: "writeoff-likelihood", title: "The Mathematics of Write-Off Likelihood", level: 2 },
    { id: "age-strategies", title: "Age-Dependent Strategies", level: 2 },
    { id: "compound-interest", title: "Compound Interest: The Pension Superpower", level: 2 },
    { id: "high-earners", title: "The Special Case of High Earners", level: 2 },
    { id: "psychological-factor", title: "The Psychological Factor: Being Debt-Free", level: 2 },
    { id: "employer-matching", title: "Employer Matching and Free Money", level: 2 },
    { id: "using-calculators", title: "Using Calculators to Make Your Decision", level: 2 },
    { id: "when-overpayment-makes-sense", title: "When Student Loan Overpayment Might Make Sense", level: 2 },
    { id: "the-verdict", title: "The Verdict: Pensions Win for Most People", level: 2 },
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
                  Pension vs Student Loan Overpayments
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Pension Contributions vs Student Loan Overpayments: What&apos;s Better?
          </h1>
          <p className="text-xl text-gray-600">
            Why Tax Relief and Write-Off Likelihood Make Pensions Beat Overpayments
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
                You have extra money each month and a decision to make. Should you overpay your student
                loan to clear the debt faster, or should you increase your pension contributions to secure your
                retirement? Both feel like responsible financial moves, but they pull in opposite directions.
                Money can only be spent once.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The answer isn&apos;t straightforward because student loans in the UK work nothing like normal debt.
                They&apos;re written off after 30 or 40 years regardless of what you owe. Most people will never repay
                the full amount. Meanwhile, pension contributions receive generous tax relief and grow through
                compound interest over decades. These factors create a mathematical puzzle where the &quot;right&quot;
                answer depends entirely on your specific circumstances.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What complicates this decision further is that pension contributions, especially through salary
                sacrifice, actually reduce your student loan repayments immediately. Every pound you put into a
                pension through salary sacrifice is a pound that doesn&apos;t count toward the student loan threshold.
                So you&apos;re not really choosing between pension or loan repayment. You&apos;re choosing between
                reducing your loan and building retirement savings, or just paying down the loan faster while
                losing the pension benefits.
              </p>
            </section>

            {/* Understanding Tax Relief */}
            <section id="understanding-tax-relief" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding Tax Relief on Pensions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pension contributions receive tax relief at your marginal rate. This means the government adds
                money to your pension based on what you would have paid in tax on that income.
              </p>

              <div className="space-y-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Basic rate taxpayer (20%)</h3>
                  <p className="text-gray-700 text-sm">
                    If you contribute £80 to your pension, the government adds £20, making your pension pot £100.
                    You&apos;ve turned £80 of your money into £100 in your pension. That&apos;s an immediate 25% return
                    before any investment growth.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Higher rate taxpayer (40%)</h3>
                  <p className="text-gray-700 text-sm">
                    You get 20% relief automatically like basic rate taxpayers, plus you can claim an additional 20%
                    through Self Assessment or adjusted tax code. So £60 of your money becomes £100 in your pension,
                    an immediate 67% return.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Additional rate taxpayer (45%)</h3>
                  <p className="text-gray-700 text-sm">
                    £55 of your money becomes £100 in your pension, an immediate 82% return.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Compare this to overpaying your student loan:</h3>
                <p className="text-gray-700 text-sm">
                  If you pay an extra £100 toward your student loan, you reduce your debt by exactly £100. No bonus,
                  no government contribution, no immediate return. The &quot;return&quot; comes from avoiding future interest
                  charges on that £100 of debt.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Student loan interest rates vary by plan but currently range from RPI (around 3-4%) for Plan 5 to
                RPI+3% (potentially 6-7%) for Plan 2 at higher incomes. These interest rates are meaningful but
                nowhere near the immediate returns from pension tax relief. Just looking at tax relief, pensions
                appear to win decisively. But this ignores a critical feature of student loans: write-off.
              </p>
            </section>

            {/* Student Loan Write-Off */}
            <section id="student-loan-writeoff" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Student Loan Write-Off Changes Everything
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loans are written off automatically:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-4 mb-4">
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li><strong>Plan 1:</strong> After 25 years (if you started before 2006) or when you turn 65 (if you started 2006-2012)</li>
                  <li><strong>Plan 2:</strong> After 30 years</li>
                  <li><strong>Plan 4:</strong> After 30 years</li>
                  <li><strong>Plan 5:</strong> After 40 years</li>
                  <li><strong>Postgraduate:</strong> After 30 years</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This write-off means many people will never repay the full amount they borrowed plus interest.
                Research from the Institute for Fiscal Studies suggests around 75% of Plan 2 borrowers will
                have some or all of their loan written off.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Write-Off Reality:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If you&apos;re likely to have your loan written off, every extra pound you voluntarily pay toward it is
                  a pound you&apos;ll never get back. You&apos;re voluntarily repaying debt that would have been forgiven anyway.
                </p>
                <p className="text-gray-700 text-sm">
                  Think about it this way: If you overpay £5,000 toward your student loan today, but 20 years from
                  now the remaining balance (including that £5,000) gets written off, you&apos;ve essentially given away
                  £5,000 for nothing. That £5,000 could have been growing in your pension for those 20 years instead.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This transforms the question. It&apos;s not &quot;should I pay down debt vs save for retirement?&quot; It&apos;s
                &quot;should I voluntarily repay debt I might never have to fully repay, or should I take free
                government money and compound returns in my pension?&quot;
              </p>
            </section>

            {/* Salary Sacrifice */}
            <section id="salary-sacrifice" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Salary Sacrifice: The Double Benefit
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Salary sacrifice pension schemes create an additional benefit that directly reduces student loan
                deductions immediately.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With salary sacrifice, you agree to reduce your gross salary in exchange for your employer
                paying that amount directly into your pension. This happens before PAYE calculations, meaning
                your reduced salary is what gets assessed for tax, National Insurance, and student loans.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Sarah&apos;s Salary Sacrifice</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Sarah earns £35,000 annually and currently contributes £100 monthly to her pension (£1,200 annually).
                  She&apos;s considering increasing this to £300 monthly (£3,600 annually) through salary sacrifice.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white border border-red-200 p-3 rounded">
                    <h4 className="font-semibold text-red-700 text-sm mb-2">Current situation:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Gross salary: £35,000</li>
                      <li>Pension contribution: £1,200 (post-PAYE)</li>
                      <li>Above Plan 2 threshold: £35,000 - £27,295 = £7,705</li>
                      <li>Student loan payment: £7,705 × 9% = £693.45</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-green-200 p-3 rounded">
                    <h4 className="font-semibold text-green-700 text-sm mb-2">With increased salary sacrifice:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Gross salary for PAYE: £35,000 - £3,600 = £31,400</li>
                      <li>Above threshold: £31,400 - £27,295 = £4,105</li>
                      <li>Student loan payment: £4,105 × 9% = £369.45</li>
                      <li><strong>Student loan saving: £324 per year</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Sarah saves £324 annually in student loan payments while also building her pension. She&apos;s
                getting tax relief on the pension contribution (immediately turning £2,880 into £3,600 with basic
                rate relief), she&apos;s saving £324 in student loans, and the money is growing in her pension with
                compound returns.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">If she instead used that £300 monthly to overpay her student loan directly:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>She&apos;d pay an extra £3,600 per year toward the loan</li>
                  <li>No tax relief</li>
                  <li>No compound growth</li>
                  <li>Money potentially wasted if the loan would have been written off</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Salary sacrifice creates a double benefit that overpayment can never match. You reduce your
                student loan deductions AND you get tax relief on pension contributions. Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> help you model exactly how much salary sacrifice saves in loan repayments.
              </p>
            </section>

            {/* Write-Off Likelihood */}
            <section id="writeoff-likelihood" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Mathematics of Write-Off Likelihood
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you&apos;ll have your loan written off depends on several factors:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Your current loan balance</li>
                <li>Your current and projected future income</li>
                <li>Your loan plan and its interest rate</li>
                <li>Years remaining until write-off</li>
                <li>Your career trajectory</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">High likelihood of write-off:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Large loan balance (£50,000+)</li>
                    <li>Moderate income (£30,000-£45,000)</li>
                    <li>Plan 2 or Plan 5</li>
                    <li>Early in your career (20+ years until write-off)</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Low likelihood of write-off:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Smaller loan balance (under £30,000)</li>
                    <li>High income (£60,000+) expected to continue or grow</li>
                    <li>Plan 1 (lower threshold, will be written off sooner anyway)</li>
                    <li>Later in career (less time for write-off)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Example 1: Tom, likely write-off</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Age: 25</li>
                    <li>Loan balance: £55,000</li>
                    <li>Plan 2 (30-year write-off, so written off at 55)</li>
                    <li>Current income: £32,000, expecting moderate growth to £50,000 by age 40</li>
                    <li>Years to write-off: 30</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    Running the numbers through projections, Tom will repay approximately £40,000 over 30 years
                    before write-off, leaving £45,000 (including accumulated interest) written off. Every pound Tom
                    voluntarily overpays is likely wasted because he won&apos;t pay off the loan before write-off anyway.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Example 2: Amanda, likely full repayment</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Age: 28</li>
                    <li>Loan balance: £28,000</li>
                    <li>Plan 2</li>
                    <li>Current income: £55,000, expecting growth to £80,000+</li>
                    <li>High earner trajectory</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    Amanda is on track to repay her full loan within 15 years. The write-off won&apos;t matter for her
                    because she&apos;ll clear the balance before then. For Amanda, every pound of overpayment genuinely
                    reduces her debt and saves future interest. Amanda might consider overpayments, but she should
                    still compare the student loan interest rate against the returns from pension investment.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/total-loan-cost-calculator/" className="text-blue-600 underline hover:text-blue-800">Total Loan Cost Calculator</Link> to project whether you&apos;re likely to repay in full or have your
                loan written off.
              </p>
            </section>

            {/* Age-Dependent Strategies */}
            <section id="age-strategies" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Age-Dependent Strategies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your age significantly affects this decision because it determines how long your pension has to
                grow and how many years remain until loan write-off.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Under 30: Pensions win decisively</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>30+ years for pension compound growth</li>
                    <li>20-30 years until loan write-off</li>
                    <li>Very high likelihood your loan won&apos;t be fully repaid</li>
                    <li>Maximum benefit from salary sacrifice reducing current loan payments</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    Young professionals should almost always prioritize pensions over student loan overpayments.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Ages 30-40: Still favor pensions</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>20-30 years for pension growth</li>
                    <li>10-20 years until loan write-off</li>
                    <li>Still decent likelihood of write-off for most borrowers</li>
                    <li>Salary sacrifice benefits remain strong</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    Most people in this age range should still prioritize pensions, though the calculation becomes
                    closer for very high earners with smaller loan balances.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Ages 40-50: Case by case</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>10-20 years until loan write-off</li>
                    <li>If you&apos;ve been repaying for 20 years already, you can better assess whether you&apos;ll clear the balance</li>
                    <li>Pension still has 15-25 years to grow</li>
                    <li>Write-off approaching but not immediate</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    This age range requires careful calculation. For most borrowers, pensions still win because
                    15-25 years is substantial time for compound growth.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Over 50: Approaching write-off</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Less than 10 years to write-off for most plans</li>
                    <li>Pension has less time to grow but still valuable</li>
                    <li>Can see clearly whether full repayment is likely</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    Even here, pensions often win unless you&apos;re absolutely certain you&apos;ll repay the loan in full
                    before write-off and you&apos;re already maximizing pension contributions.
                  </p>
                </div>
              </div>
            </section>

            {/* Compound Interest */}
            <section id="compound-interest" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Compound Interest: The Pension Superpower
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compound interest is why pensions are so powerful. Money invested in your 20s and 30s has
                30-40 years to grow exponentially.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Power of Compound Interest:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Imagine investing £200 monthly from age 25 to 65 (40 years) with 7% average annual returns:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Total contributions: £96,000</li>
                  <li>Final pension pot: approximately £525,000</li>
                  <li><strong>Growth from compound interest: £429,000</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Now imagine instead using that £200 monthly to overpay student loans. You pay down your
                debt faster, saving perhaps £15,000 in interest charges over the life of the loan. But you&apos;ve
                missed out on £429,000 of investment growth.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Earlier, The Better:</h3>
                <p className="text-gray-700 text-sm">
                  £100 invested at age 25 becomes approximately £1,500 by age 65 at 7% returns. The same £100
                  invested at age 45 only becomes £387. Every year you delay pension contributions costs you
                  multiplicative returns. Every year you overpay student loans that might be written off costs
                  you those lost returns.
                </p>
              </div>
            </section>

            {/* High Earners */}
            <section id="high-earners" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Special Case of High Earners
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                High earners face different mathematics. If you earn £70,000+ and have a modest loan balance,
                you might genuinely repay the full amount well before write-off.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For these borrowers, the question becomes: is the pension return (after tax relief, investment
                growth) better than the student loan interest rate I&apos;m avoiding?
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Even for high earners, pensions usually win because:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Higher rate tax relief (40% or 45%) is substantial</li>
                  <li>Investment returns historically exceed student loan interest rates</li>
                  <li>Salary sacrifice still reduces current student loan payments</li>
                  <li>Pension money is locked away until retirement (which might be a benefit for forced savings)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The only scenario where student loan overpayment might compete is if you&apos;re a higher rate
                taxpayer with a small loan balance, planning to pay it off in just a few years anyway, and you
                value being debt-free over maximizing financial returns. But mathematically, most high earners
                should still prioritize pensions, especially through salary sacrifice arrangements.
              </p>
            </section>

            {/* Psychological Factor */}
            <section id="psychological-factor" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Psychological Factor: Being Debt-Free
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Numbers don&apos;t capture everything. There&apos;s genuine psychological value in being debt-free, even
                if the debt is &quot;good debt&quot; like student loans.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some people find the mental burden of having a £40,000 student loan balance outweighs the
                mathematical benefits of pension investment. They&apos;d rather clear the debt and feel free, even if
                it costs them financially in the long run.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">A middle ground might be:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Maximize salary sacrifice pension contributions to get the immediate double benefit</li>
                  <li>Once you&apos;ve maxed reasonable pension contributions, then consider loan overpayments if debt bothers you</li>
                  <li>Never sacrifice pension contributions to overpay loans</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This is a legitimate personal choice, but it should be made with eyes open to the financial cost.
                If being debt-free is worth £50,000+ of lost pension growth to you, that&apos;s your decision. But
                understand what you&apos;re giving up.
              </p>
            </section>

            {/* Employer Matching */}
            <section id="employer-matching" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Employer Matching and Free Money
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many employers match pension contributions up to a certain percentage (often 4-6% of salary).
                This is literally free money.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Critical Priority:</h3>
                <p className="text-gray-700 text-sm">
                  Always, always maximize employer matching before considering any form of student loan overpayment.
                  If your employer matches up to 6% and you&apos;re only contributing 3%, you&apos;re leaving 3% of your
                  salary on the table in free money.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                If your employer matches up to 5% and you&apos;re currently contributing 5%, increasing to 7% means
                only the additional 2% gets matched. But that 2% employer contribution is still valuable. However,
                if you&apos;re not maximizing employer matching, you should absolutely do that before even considering
                student loan overpayments.
              </p>
            </section>

            {/* Using Calculators */}
            <section id="using-calculators" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Using Calculators to Make Your Decision
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Given the complexity, using specialized calculators helps enormously. Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/pension-salary-sacrifice-effect-calculator/" className="text-blue-600 underline hover:text-blue-800">Pension Salary Sacrifice Effect Calculator</Link> shows exactly how much salary sacrifice reduces your student
                loan payments while building your pension.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Combined with the <Link target="_blank" href="https://studentloancalculator.uk/calculators/student-loan-overpayment-calculator/" className="text-blue-600 underline hover:text-blue-800">Student Loan Overpayment Calculator</Link>, you can model both scenarios side by side
                and see the projected outcomes.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Input your:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Current age</li>
                  <li>Loan balance</li>
                  <li>Income and projected income growth</li>
                  <li>Current pension contributions</li>
                  <li>Years until write-off</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The calculators project what happens under different scenarios, helping you make an informed
                decision rather than guessing.
              </p>
            </section>

            {/* When Overpayment Might Make Sense */}
            <section id="when-overpayment-makes-sense" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Student Loan Overpayment Might Make Sense
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are limited scenarios where overpayment could be justified:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 1: Small balance, high income, definite full repayment</h3>
                  <p className="text-gray-700 text-sm">
                    If you have £15,000 remaining and earn £65,000, you&apos;ll clearly repay in full within a few years.
                    Overpaying might make sense to clear it faster, though pension still likely wins mathematically.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 2: Planning to leave the UK permanently</h3>
                  <p className="text-gray-700 text-sm">
                    Student loan obligations continue when you move abroad, but enforcement is inconsistent. If you&apos;re
                    leaving the UK and want to fully clear the obligation before going, overpayment might be strategic.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 3: Strong psychological need to be debt-free</h3>
                  <p className="text-gray-700 text-sm">
                    If the debt genuinely causes you distress beyond what the numbers justify, paying it off might
                    be worth the financial cost. Mental health has value.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 4: Already maximizing pensions</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;re hitting the annual pension allowance (currently £60,000) or lifetime allowance concerns,
                    and you have additional money to deploy, overpaying the student loan becomes more reasonable.
                    But this applies to very few people.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                For the vast majority of borrowers, pension contributions through salary sacrifice are financially
                superior to student loan overpayments.
              </p>
            </section>

            {/* The Verdict */}
            <section id="the-verdict" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Verdict: Pensions Win for Most People
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Looking at the mathematical reality:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Tax relief provides immediate returns overpayment can&apos;t match</li>
                <li>Compound interest over decades is exponentially powerful</li>
                <li>Salary sacrifice reduces current loan payments while building pensions</li>
                <li>Most borrowers will have loans written off, making overpayments wasted money</li>
                <li>Even those who fully repay usually see better returns from pension investment</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                The only real exceptions are borrowers who will definitely repay in full, have strong
                psychological needs to be debt-free, or are already maximizing pension contributions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For the typical graduate with £40,000-£60,000 in student loans earning £30,000-£50,000,
                pensions are the clear winner. Use salary sacrifice to reduce current student loan costs while
                building retirement wealth. Let the loan run its course and accept that whatever remains will be
                written off in 30 or 40 years.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every pound you put in your pension today, especially through salary sacrifice, does double
                duty: it reduces the student loan you&apos;re paying now and it grows for decades through compound
                interest. Every pound you overpay on your student loan does neither. It just reduces debt you
                might never fully repay anyway. The numbers are clear. For most people, pensions beat student
                loan overpayments decisively.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Maximize pension contributions first - tax relief and compound growth beat paying debt that might be written off.
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

export default PensionVsStudentLoanOverpayments;