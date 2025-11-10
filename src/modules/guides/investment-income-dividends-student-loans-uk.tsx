import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const InvestmentIncomeStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "what-counts", title: "What Counts as Income for Student Loans?", level: 2 },
    { id: "dividend-income", title: "Dividend Income and Student Loans", level: 2 },
    { id: "savings-allowance", title: "The Personal Savings Allowance", level: 2 },
    { id: "isas", title: "ISAs: The Student Loan Shelter", level: 2 },
    { id: "rental-income", title: "Buy-to-Let Rental Income", level: 2 },
    { id: "self-assessment", title: "When Investment Income Triggers Self Assessment", level: 2 },
    { id: "timing-problem", title: "The Timing Problem with Investment Income", level: 2 },
    { id: "high-earners", title: "High Earners and Investment Income", level: 2 },
    { id: "capital-gains", title: "Capital Gains: The Student Loan-Free Zone", level: 2 },
    { id: "dividend-reinvestment", title: "Dividend Reinvestment and Student Loans", level: 2 },
    { id: "reporting", title: "Platforms and Reporting", level: 2 },
    { id: "strategic", title: "Strategic Considerations for Investors", level: 2 },
    { id: "loans-end", title: "When Student Loans End", level: 2 },
    { id: "taking-control", title: "Taking Control of Investment Income and Student Loans", level: 2 },
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
                  Investment Income and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Investment Income, Dividends, and Student Loan Repayments
          </h1>
          <p className="text-xl text-gray-600">
            ISAs vs Taxable Investments: Sheltering Income from Student Loan Calculations
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
                Building an investment portfolio is a smart financial move, but if you&apos;re repaying student
                loans, there&apos;s a complication that few people understand until it&apos;s too late. Investment income
                counts toward your total income for student loan purposes. That means dividends from shares,
                interest from savings, and rental income from buy-to-let properties all get added to your
                employment income when calculating whether you&apos;re above the threshold and how much you owe.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The confusion arises because investment income doesn&apos;t have automatic deductions. When
                you receive £1,000 in dividends, the full amount arrives in your account. No tax is deducted at
                source, and certainly no student loan deduction. It looks and feels like tax-free money. But come
                Self Assessment time, those dividends get added to everything else you earned, and if the total
                pushes you above the threshold, you owe 9% on the excess.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This creates an uncomfortable reality for anyone building wealth while repaying student loans.
                The investments you&apos;re making to secure your financial future are simultaneously increasing
                your student loan repayments. And unlike employment income where deductions happen
                automatically, investment income requires you to track it, report it, and pay student loans on it
                manually through Self Assessment. Miss this, and you&apos;ll face backdated bills with interest
                and penalties.
              </p>
            </section>

            {/* What Counts as Income */}
            <section id="what-counts" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Counts as Income for Student Loans?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loan calculations include most forms of taxable income but exclude capital gains.
                Understanding the distinction is crucial.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">✅ Income that counts:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Employment income (salary, bonuses, benefits)</li>
                    <li>Self-employment profits</li>
                    <li>Dividend income from shares</li>
                    <li>Interest from savings accounts (above personal savings allowance)</li>
                    <li>Rental income from property (after allowable expenses)</li>
                    <li>Pension income</li>
                    <li>Trust income</li>
                    <li>Foreign income (in most cases)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">❌ What doesn&apos;t count:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Capital gains from selling shares, property, or other assets</li>
                    <li>ISA income (both interest and dividends within ISAs)</li>
                    <li>Premium Bond prizes</li>
                    <li>Gambling winnings</li>
                    <li>Gifts and inheritance</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The key principle is that regular, recurring income counts. One-off gains from selling assets
                don&apos;t. This distinction matters enormously for investment strategy.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Capital Gains vs Income Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If you buy shares for £5,000 and sell them five years later for £8,000:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>The £3,000 gain is a <strong>capital gain</strong>, not income</li>
                  <li>You might owe Capital Gains Tax, but it doesn&apos;t affect student loan calculations</li>
                  <li>But if those shares paid £200 in dividends each year, that £200 annual dividend <strong>is income</strong></li>
                  <li>The dividends get added to your total income and affect student loan repayments</li>
                </ul>
              </div>
            </section>

            {/* Dividend Income */}
            <section id="dividend-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Dividend Income and Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dividends are payments made by companies to shareholders from their profits. If you own
                shares in individual companies or investment funds that distribute income, you receive
                dividends.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dividends don&apos;t have tax or student loan deductions taken at source. When a company pays
                you £100 in dividends, you receive the full £100. This is different from employment income
                where deductions happen before you receive anything.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For basic rate taxpayers, dividends up to the dividend allowance (currently £500 for 2025/26)
                are tax-free. But even tax-free dividends count toward your total income for student loan
                purposes.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Rachel&apos;s Dividend Income</h3>
                <p className="text-gray-700 mb-2">
                  Rachel earns £28,000 from employment and receives £800 in dividends from shares she owns.
                  Her total income is £28,800.
                </p>

                <div className="space-y-3 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Student loan calculation:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Total income: £28,800</li>
                      <li>Plan 2 threshold: £27,295</li>
                      <li>Amount above threshold: £1,505</li>
                      <li>Student loan owed: £1,505 × 9% = £135.45</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Rachel&apos;s employer deducted through PAYE:</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Employment income above threshold: £28,000 - £27,295 = £705</li>
                      <li>PAYE deduction: £705 × 9% = £63.45</li>
                    </ul>
                  </div>

                  <p className="text-red-600 text-sm font-medium">
                    Rachel owes an additional £72 through Self Assessment on her dividend income.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This catches many people off-guard. They see &quot;dividend allowance&quot; and assume those
                dividends are completely ignored for tax purposes. They&apos;re tax-free, but they&apos;re not
                income-free for student loan purposes.
              </p>
            </section>

            {/* Personal Savings Allowance */}
            <section id="savings-allowance" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Personal Savings Allowance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Interest from savings accounts receives similar treatment. The Personal Savings Allowance
                means basic rate taxpayers can receive up to £1,000 in savings interest tax-free, and higher
                rate taxpayers get £500 tax-free.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But just like dividends, this tax-free interest still counts as income for student loans.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Interest Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If you have £20,000 in a savings account earning 5% interest, you&apos;ll receive £1,000 in
                  interest annually. As a basic rate taxpayer, this is within your Personal Savings Allowance
                  so you pay no tax on it. But it still gets added to your total income for student loan calculations.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employment income £29,000 + savings interest £1,000 = total income £30,000</li>
                  <li>You&apos;re £2,705 above the Plan 2 threshold, owing £243.45 in student loans</li>
                  <li>Your employer deducted £153.45 through PAYE</li>
                  <li><strong>You owe an additional £90 through Self Assessment on the savings interest</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Banks don&apos;t deduct student loans from interest payments. The full amount arrives in your
                account, and you&apos;re responsible for tracking it and including it in Self Assessment.
              </p>
            </section>

            {/* ISAs */}
            <section id="isas" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ISAs: The Student Loan Shelter
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Individual Savings Accounts (ISAs) are genuinely exempt from student loan calculations
                because the income they generate isn&apos;t taxable income at all. It&apos;s completely outside the
                tax system.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you hold a Cash ISA earning interest or a Stocks and Shares ISA receiving dividends
                and capital gains, nothing that happens inside the ISA wrapper affects your student loan
                obligations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This makes ISAs incredibly valuable for anyone repaying student loans. The £20,000 annual
                ISA allowance (2025/26) provides substantial room to build wealth without increasing student
                loan repayments.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">ISA vs Standard Account Comparison:</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white border border-red-200 p-3 rounded">
                    <h4 className="font-semibold text-red-700 text-sm mb-2">Scenario 1: Standard Savings Account</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>£20,000 at 5% = £1,000 interest</li>
                      <li>Gets added to total income for student loans</li>
                      <li>If already above threshold: costs £90 in extra student loan payments</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-green-200 p-3 rounded">
                    <h4 className="font-semibold text-green-700 text-sm mb-2">Scenario 2: Cash ISA</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>£20,000 at 5% = £1,000 interest</li>
                      <li>Not added to total income</li>
                      <li>No impact on student loans: saves £90</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The ISA wrapper saves you 9% of whatever income it generates. For dividend-paying
                investments, the savings are even more significant because dividends can be substantial.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you&apos;re investing while repaying student loans, maximizing ISA allowances should be a priority.
                Every pound of investment return that comes from inside an ISA is a pound that doesn&apos;t
                increase your student loan liability. Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> can help you model how different investment income levels affect
                your total repayments.
              </p>
            </section>

            {/* Buy-to-Let Rental Income */}
            <section id="rental-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Buy-to-Let Rental Income
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rental income from property you own as an investment counts toward student loan calculations.
                This is self-employment income (or unearned income, depending on how involved you are in
                management), not investment income technically, but it&apos;s closely related to investment strategy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rental income means the total rent you receive from tenants. But student loans apply to profit,
                not gross rent. Profit is rent received minus allowable expenses.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Allowable expenses include:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm grid md:grid-cols-2 gap-1">
                  <li>Mortgage interest (with recent rule limitations)</li>
                  <li>Letting agent fees</li>
                  <li>Repairs and maintenance</li>
                  <li>Insurance</li>
                  <li>Ground rent and service charges</li>
                  <li>Utilities you pay for</li>
                  <li>Safety certificates and compliance costs</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Rental Income Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If you receive £12,000 annual rent but have £4,000 in allowable expenses, your rental profit is £8,000.
                  This £8,000 gets added to your other income for student loan calculations.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employment income: £26,000</li>
                  <li>Rental profit: £8,000</li>
                  <li>Total income: £34,000</li>
                  <li>Above Plan 2 threshold: £6,705</li>
                  <li>Student loan owed: £603.45</li>
                  <li>PAYE deducted: £0 (employment below threshold)</li>
                  <li><strong>Entire £603.45 due through Self Assessment</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Rental income over £2,500 (after expenses) triggers mandatory Self Assessment registration.
                And unlike dividends or savings interest where small amounts might not push you into Self
                Assessment territory, rental income very quickly creates reporting obligations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The student loan impact makes buy-to-let less attractive as an investment while you&apos;re still
                repaying. Not only do you pay income tax on rental profit, you also pay 9% student loan on it.
                Combined with National Insurance (if it&apos;s considered self-employment rather than property
                income), your marginal rate on rental profit can exceed 40% even as a basic rate taxpayer.
              </p>
            </section>

            {/* When Investment Income Triggers Self Assessment */}
            <section id="self-assessment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Investment Income Triggers Self Assessment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having investment income doesn&apos;t automatically mean you need to complete Self Assessment.
                You only need to register if:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Dividend income exceeds £10,000</li>
                <li>Savings interest exceeds the Personal Savings Allowance by more than a small amount</li>
                <li>Rental income exceeds £2,500 (after expenses)</li>
                <li>Total untaxed income exceeds £2,500</li>
                <li>You&apos;re a higher or additional rate taxpayer with investment income</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Many people receive modest dividend and interest income that doesn&apos;t trigger Self Assessment
                requirements from a tax perspective. But if that income pushes their total income above the
                student loan threshold or significantly above it, they might still owe student loans even though
                they don&apos;t technically need to file a return.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Grey Area:</h3>
                <p className="text-gray-700 text-sm">
                  HMRC&apos;s systems aren&apos;t perfect at catching this. Banks and investment platforms report interest
                  and dividend payments to HMRC, but there&apos;s often a delay. You might receive investment income
                  that pushes you above the student loan threshold without HMRC immediately noticing and requiring
                  Self Assessment.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The safest approach is: if you have any investment income and you&apos;re anywhere near the
                student loan threshold, check carefully whether your total income requires Self Assessment and
                student loan payments.
              </p>
            </section>

            {/* Timing Problem */}
            <section id="timing-problem" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Timing Problem with Investment Income
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investment income timing differs from employment income. Salary arrives evenly through the
                year. Dividends often come in lumps, typically quarterly or bi-annually depending on the
                company&apos;s payment schedule.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This creates cash flow planning challenges. You might receive £2,000 in dividends in March,
                spend it, then in January face a Self Assessment bill that includes student loans on those
                dividends. The money is long gone but the bill remains.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Setting Aside Strategy:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Setting aside 9% of investment income when you receive it is essential:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>When £500 in dividends arrives, immediately transfer £45 to a &quot;tax and student loans&quot; savings account</li>
                  <li>For rental income, set aside a portion each month for the eventual tax and student loan bill</li>
                  <li>Don&apos;t spend the full amount and assume you&apos;ll find the money later</li>
                </ul>
              </div>
            </section>

            {/* High Earners */}
            <section id="high-earners" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                High Earners and Investment Income
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For higher earners already well above the student loan threshold, investment income creates a
                straight 9% additional charge on top of income tax and National Insurance.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">High Earner Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Someone earning £60,000 from employment is already paying maximum student loans through PAYE.
                  If they receive £5,000 in dividends:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Dividend tax (higher rate): £5,000 × 33.75% = £1,687.50</li>
                  <li>Student loan: £5,000 × 9% = £450</li>
                  <li>Total charge: £2,137.50</li>
                  <li><strong>Net kept from £5,000: £2,862.50 (42.75% effective rate)</strong></li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Combined with the fact that you&apos;ve already paid corporation tax on company profits before
                dividends (if it&apos;s a limited company you own), the total tax drag is substantial. For high earners,
                ISAs become even more valuable. That same £5,000 in dividends within an ISA wrapper saves
                not just the dividend tax but also the £450 student loan charge.
              </p>
            </section>

            {/* Capital Gains */}
            <section id="capital-gains" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Capital Gains: The Student Loan-Free Zone
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Capital gains remain one of the few ways to build wealth without affecting student loan
                repayments. Selling investments at a profit generates capital gains, not income.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can make £3,000 in capital gains (2025/26 allowance) completely tax-free, and it doesn&apos;t
                affect student loans either. Even gains above the allowance, which are subject to Capital Gains
                Tax, never appear in student loan calculations.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Strategic Investment Comparison:</h3>
                <p className="text-gray-700 text-sm mb-2">Compare two £10,000 investments:</p>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white border border-red-200 p-3 rounded">
                    <h4 className="font-semibold text-red-700 text-sm mb-2">1. High-dividend shares</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>Paying 5% annually (£500/year dividends)</li>
                      <li>Generates £500 annual income</li>
                      <li>Increases student loan payments by £45/year</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-green-200 p-3 rounded">
                    <h4 className="font-semibold text-green-700 text-sm mb-2">2. Growth shares</h4>
                    <ul className="list-disc ml-6 text-gray-700 text-sm">
                      <li>No dividends but 5% annual value increase</li>
                      <li>Generates nothing affecting student loans while held</li>
                      <li>Gains exempt from student loans when sold</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This isn&apos;t investment advice. Growth strategies carry different risks than income strategies,
                and you should never let tax considerations (including student loans) completely override sound
                investment principles. But it&apos;s a factor worth considering.
              </p>
            </section>

            {/* Dividend Reinvestment */}
            <section id="dividend-reinvestment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Dividend Reinvestment and Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many investors automatically reinvest dividends to buy more shares rather than taking the cash.
                This is called dividend reinvestment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For student loan purposes, reinvested dividends still count as income. You&apos;re treated as if you
                received the dividend, then chose to buy more shares with it. The fact that you never saw cash
                doesn&apos;t matter.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Reinvestment Reality:</h3>
                <p className="text-gray-700 text-sm">
                  If your investment fund pays £800 in dividends and automatically uses it to buy more units, that
                  £800 still gets added to your total income for the year. You owe student loans on it through Self
                  Assessment, even though you didn&apos;t receive cash. You need to find cash from elsewhere to pay
                  the student loan on dividend income you never actually received in spendable form.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This surprises many people who assume reinvested dividends are somehow different from cash
                dividends. They&apos;re not.
              </p>
            </section>

            {/* Platforms and Reporting */}
            <section id="reporting" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Platforms and Reporting
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investment platforms (like Hargreaves Lansdown, Interactive Investor, Trading 212, etc.) provide
                annual tax certificates showing how much dividend income and interest you received during the
                tax year. These documents are essential for Self Assessment.
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The certificate typically shows:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Total dividends received</li>
                  <li>Total interest received</li>
                  <li>Any foreign income and tax paid</li>
                  <li>Breakdown by source if relevant</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                When completing Self Assessment, you enter these figures in the relevant sections. The system
                then calculates your tax liability and student loan obligation based on total income from all
                sources.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Keep these certificates carefully. If HMRC queries your return, you&apos;ll need them as evidence.
                And if you use multiple platforms, you need to aggregate figures from all of them to get your
                total investment income.
              </p>
            </section>

            {/* Strategic Considerations */}
            <section id="strategic" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Considerations for Investors
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;re building an investment portfolio while repaying student loans, several strategies can
                minimize the impact:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Maximize ISA usage</h3>
                  <p className="text-gray-700 text-sm">
                    Put as much as possible in ISAs. The £20,000 annual allowance provides substantial shelter
                    from student loan charges on investment returns.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Consider growth over income</h3>
                  <p className="text-gray-700 text-sm">
                    While holding investments, growth strategies avoid triggering annual student loan charges,
                    whereas income strategies create annual liabilities.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Timing of income</h3>
                  <p className="text-gray-700 text-sm">
                    Some investments let you choose when to take income. Taking it in years when your employment
                    income is lower (sabbatical, career break, lower bonus) might reduce total student loan impact.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Expense management</h3>
                  <p className="text-gray-700 text-sm">
                    For rental property, maximizing legitimate allowable expenses reduces taxable profit and
                    therefore reduces student loan liability.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hold in tax-efficient wrappers</h3>
                  <p className="text-gray-700 text-sm">
                    ISAs and pensions both shelter investment returns from student loan implications. Pensions
                    have restrictions on access but reduce student loan liability while you&apos;re working.
                  </p>
                </div>
              </div>
            </section>

            {/* When Student Loans End */}
            <section id="loans-end" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Student Loans End
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One silver lining: investment income only affects student loans while you&apos;re still repaying. Once
                you&apos;ve either paid off your loan or reached the write-off date (30 years for Plan 2, 40 years for
                Plan 5), investment income no longer triggers the 9% charge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This means the student loan drag on investment returns is temporary. Over a 30-40 year period,
                having to pay an extra 9% on investment income for the first 10-15 years of your investing
                journey is frustrating but not devastating to long-term wealth building.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some people delay serious investing until after student loans are paid off to avoid the
                complexity. Others invest throughout, accepting the additional cost as the price of starting
                wealth building earlier. There&apos;s no universally right answer.
              </p>
            </section>

            {/* Conclusion */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Investment Income and Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investment income is one of the few income types that arrives without any automatic
                deductions, giving you full control over the money initially. But this control comes with
                responsibility. You must track it, report it accurately, and pay student loans on it through Self
                Assessment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/sa-unearned-income-calculator/" className="text-blue-600 underline hover:text-blue-800">SA Unearned Income Calculator</Link> to model how investment income affects your student
                loan obligations. And consider using our <Link target="_blank" href="https://studentloancalculator.uk/calculators/paye-vs-self-assessment-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800">PAYE vs Self Assessment Repayment Calculator</Link> to understand the full picture of what you&apos;ll owe across both systems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 9% charge on investment income while repaying student loans is frustrating, particularly
                when you&apos;re trying to build financial security for your future. But understanding exactly how it
                works, what counts as income, and how to shelter returns through ISAs helps you minimize the
                impact while still making progress toward your investment goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Investment income isn&apos;t just employment salary by another name. It has different rules, different
                reporting requirements, and different strategic implications. Master these, and you can build
                wealth effectively even while carrying student loan obligations.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Maximize ISAs and set aside 9% of investment income immediately - student loans apply to all income sources.
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

export default InvestmentIncomeStudentLoans;