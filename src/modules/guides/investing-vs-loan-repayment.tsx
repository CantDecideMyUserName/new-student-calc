import Link from "next/link";
import React from "react";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function InvestingVsLoanRepaymentGuide() {
  const tocItems = [
    { id: "understanding-trade-off", title: "Understanding the Trade-Off", level: 2 },
    { id: "mathematical-framework", title: "The Mathematical Framework", level: 2 },
    { id: "when-invest", title: "When Investing Makes More Sense", level: 2 },
    { id: "when-repay", title: "When Loan Repayment Makes More Sense", level: 2 },
    { id: "investment-vehicles", title: "Investment Vehicles to Consider", level: 2 },
    { id: "balanced-approach", title: "A Balanced Approach", level: 2 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 },
    { id: "related-resources", title: "Related Resources", level: 2 },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
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
                  Investing vs. Loan Repayment
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Should You Invest or Pay Off Your Student Loan?
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive financial analysis comparing investment returns against student loan repayment strategies
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
            {/* Intro */}
            <section className="mb-8">
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  One of the most important financial decisions UK graduates face is how to allocate extra money: should you invest it for the future, or put it toward paying off your student loan faster? The answer isn&apos;t always straightforward, and getting it wrong could cost you thousands of pounds over your lifetime.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This guide will help you understand the financial trade-offs, show you how to calculate which option is better for your situation, and provide a framework for making this crucial decision with confidence.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-gray-700 text-sm">
                    <strong>Key Insight:</strong> For most UK graduates with Plan 2 or Plan 5 loans, investing will likely provide better returns than voluntary loan overpayments. This is because the unique structure of UK student loans means many borrowers will never fully repay their balance, making overpayments effectively money given away that could have been growing in investments instead.
                  </p>
                </div>
              </div>
            </section>

            {/* Understanding the Trade-Off */}
            <section id="understanding-trade-off" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding the Trade-Off
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  At its core, the decision between investing and paying off your student loan comes down to comparing two scenarios: the guaranteed &quot;return&quot; you get from reducing your loan balance versus the expected return from investing that same money in the market.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  The Traditional Debt Repayment Logic
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With most forms of debt like credit cards, personal loans, or mortgages, the math is straightforward. If you pay off debt charging 5% interest, you&apos;re effectively earning a guaranteed 5% return on that money. If you can invest and earn more than 5%, investing wins. If your investment returns are less than 5%, paying off debt wins.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  Why Student Loans Are Different
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  UK student loans break this traditional framework in several critical ways that fundamentally change the calculation:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>
                    <strong>Income-contingent repayments:</strong> You only pay 9% of income above the threshold, regardless of your balance
                  </li>
                  <li>
                    <strong>Eventual write-off:</strong> Any remaining balance is canceled after 25-40 years, meaning you may never repay the full amount
                  </li>
                  <li>
                    <strong>Interest doesn&apos;t affect monthly payments:</strong> Higher interest increases your balance but not your monthly repayment
                  </li>
                  <li>
                    <strong>No impact on credit score:</strong> Student loans don&apos;t appear on credit reports and don&apos;t affect your creditworthiness
                  </li>
                  <li>
                    <strong>Cannot be refinanced:</strong> Unlike mortgages or other loans, you cannot shop for better rates
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These features mean that for many graduates, particularly those unlikely to fully repay their loan before the write-off date, the effective interest rate on their student loan is actually 0%. Every pound put toward voluntary overpayment is simply reducing the amount that would have been written off anyway.
                </p>
              </div>

              <div className="mt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Reality Check</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 font-semibold">1</span>
                      </div>
                      <div>
                        <p className="text-gray-700"><strong>If you&apos;ll repay your loan in full:</strong> Compare your loan interest rate against expected investment returns to decide which is better.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 font-semibold">2</span>
                      </div>
                      <div>
                        <p className="text-gray-700"><strong>If you won&apos;t repay your loan in full:</strong> Investing almost always wins because voluntary overpayments just reduce the write-off amount.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 font-semibold">3</span>
                      </div>
                      <div>
                        <p className="text-gray-700"><strong>If you&apos;re unsure:</strong> The safest default is to invest while maintaining automatic loan payments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mathematical Framework */}
            <section id="mathematical-framework" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Mathematical Framework
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To make an informed decision, you need to understand how to calculate and compare the returns from each option. Here&apos;s the mathematical framework that underpins this analysis.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  Calculating Your Effective Loan Interest Rate
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your effective interest rate is not the same as the stated interest rate on your loan. It&apos;s the actual cost you bear from interest charges, accounting for the possibility of write-off.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Effective Interest Rate Formula</h4>
                  <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm mb-4">
                    Effective Rate = (Total Interest Paid) / (Average Loan Balance × Years of Repayment)
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    If you&apos;re projected to have your loan written off:
                  </p>
                  <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm">
                    Effective Rate = 0%
                  </div>
                  <p className="text-gray-700 text-sm mt-3">
                    This is because you never actually pay the interest that accumulates on the written-off portion.
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  Expected Investment Returns
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Historical data provides guidance on what you might expect from different investment approaches over the long term:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Investment Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Historical Annual Return</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm">Global Stock Markets</td>
                        <td className="px-4 py-3 text-sm">7-10% (inflation-adjusted)</td>
                        <td className="px-4 py-3 text-sm">Medium-High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Balanced Portfolio (60/40)</td>
                        <td className="px-4 py-3 text-sm">5-7% (inflation-adjusted)</td>
                        <td className="px-4 py-3 text-sm">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Government Bonds</td>
                        <td className="px-4 py-3 text-sm">1-3% (inflation-adjusted)</td>
                        <td className="px-4 py-3 text-sm">Low</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Cash Savings (High Interest)</td>
                        <td className="px-4 py-3 text-sm">0-2% (inflation-adjusted)</td>
                        <td className="px-4 py-3 text-sm">Very Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Past performance doesn&apos;t guarantee future results, but these historical averages provide a reasonable baseline for comparison. The key is that over long periods (20+ years), diversified stock market investments have consistently delivered returns that exceed most student loan interest rates.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  The Comparison Formula
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To compare investing versus overpaying, calculate the difference in net worth after a given period under each scenario:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Net Worth Comparison</h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Scenario A: Invest the Extra Money</p>
                      <div className="bg-white p-4 rounded border border-gray-200 font-mono text-xs">
                        Net Worth = Investment Value - Remaining Loan Balance
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Scenario B: Overpay the Loan</p>
                      <div className="bg-white p-4 rounded border border-gray-200 font-mono text-xs">
                        Net Worth = £0 investments - Reduced Loan Balance
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700">
                        <strong>The winner:</strong> Whichever scenario leaves you with higher net worth (or less negative net worth) after accounting for expected write-offs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* When Investing Makes More Sense */}
            <section id="when-invest" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Investing Makes More Sense
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For the majority of UK graduates, investing extra money rather than making voluntary loan overpayments will result in greater long-term wealth. Here&apos;s when investing is clearly the better choice:
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  1. You Won&apos;t Fully Repay Your Loan Before Write-Off
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is the most common scenario. If projections show you&apos;ll have a significant balance remaining at the write-off date, investing is almost always superior.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Example: Middle-Income Graduate
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                    <li>Plan 2 loan balance: £45,000</li>
                    <li>Starting salary: £28,000, rising to £42,000 over career</li>
                    <li>Extra £5,000 available to allocate</li>
                    <li>Projected to repay £30,000 before write-off in 30 years</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700 mb-3"><strong>Option A: Overpay Loan by £5,000</strong></p>
                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                      <li>Loan balance reduced to £40,000</li>
                      <li>Still won&apos;t repay in full (£15,000 written off instead of £20,000)</li>
                      <li>Net position after 30 years: £0 (loan written off, no investments)</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-4 mb-3"><strong>Option B: Invest £5,000</strong></p>
                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                      <li>Invested in global tracker fund at 7% average annual return</li>
                      <li>After 30 years: £38,100</li>
                      <li>Net position after 30 years: £38,100 (loan written off, investments remain)</li>
                    </ul>
                    <p className="text-gray-800 font-semibold mt-4">
                      Investing leaves you £38,100 better off
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  2. Expected Investment Returns Exceed Your Loan Interest Rate
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Even if you will repay your loan in full, investing can still be the better choice if you expect higher returns from investments than the interest rate on your loan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">This typically applies when:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>You have a Plan 1 loan (lower interest rates, typically 1-2%)</li>
                  <li>You have a Plan 4 loan (lower interest rates)</li>
                  <li>You have a long time horizon for investing (20+ years)</li>
                  <li>You&apos;re comfortable with market volatility in pursuit of higher returns</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  3. You Can Benefit from Tax-Advantaged Accounts
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tax-advantaged investment vehicles can significantly boost your effective returns, making investing even more attractive:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>
                    <strong>Pension contributions:</strong> 20-45% immediate boost through tax relief, plus employer matching (often 3-5%), plus tax-free growth
                  </li>
                  <li>
                    <strong>ISAs:</strong> All gains and income completely tax-free, with £20,000 annual allowance
                  </li>
                  <li>
                    <strong>Lifetime ISAs:</strong> 25% government bonus on contributions up to £4,000 annually (if under 40 and saving for first home or retirement)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A pension contribution that receives 40% tax relief and 5% employer matching effectively gives you a 45% immediate return before any investment growth. This almost always beats the guaranteed return from loan overpayment.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  4. You&apos;re Young with a Long Investment Horizon
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The power of compound returns means that money invested early in your career has decades to grow. A £5,000 investment at age 23 could be worth over £75,000 by age 65 at 7% annual returns. That same £5,000 toward your loan might save you only a few hundred pounds in interest if you were going to repay the loan anyway.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  5. You Value Financial Flexibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Investments remain accessible (though you might face penalties for early pension withdrawal). Student loan overpayments are irreversible. If you need money for a house deposit, career change, starting a business, or any unexpected opportunity or emergency, you can access your investments but not recover loan overpayments.
                </p>
              </div>
            </section>

            {/* When Loan Repayment Makes More Sense */}
            <section id="when-repay" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Loan Repayment Makes More Sense
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  While investing is usually optimal, there are specific situations where prioritizing loan repayment makes financial sense:
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  1. You&apos;re a High Earner Who Will Definitely Repay in Full
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you&apos;re in the top 20-30% of graduate earners and will clearly repay your entire loan plus interest before the write-off date, the calculation changes. In this case, your effective loan interest rate equals the stated rate, and overpaying can save you money.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Example: High-Earning Professional
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                    <li>Plan 2 loan: £50,000 at 5.5% interest</li>
                    <li>Current salary: £65,000, rising to £120,000</li>
                    <li>Will fully repay in 15 years with standard payments</li>
                    <li>Extra £10,000 available</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700 mb-3"><strong>Option A: Invest £10,000</strong></p>
                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                      <li>15-year investment at 7% return: £27,600</li>
                      <li>Loan fully repaid with total interest of £16,500</li>
                      <li>Net position: £27,600 - £16,500 = £11,100</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-4 mb-3"><strong>Option B: Overpay Loan by £10,000</strong></p>
                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                      <li>Reduces loan balance, saves approximately £3,200 in interest</li>
                      <li>Loan repaid 2 years earlier</li>
                      <li>Net position: £3,200 saved</li>
                    </ul>
                    <p className="text-gray-800 font-semibold mt-4">
                      Investing still wins by £7,900, but the gap is smaller
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Even in this scenario, investing often still wins due to higher expected returns. But if you have a Plan 2 loan with high interest (5-7%) and prefer guaranteed returns over market volatility, overpaying can make sense.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  2. Your Loan Interest Rate Is Exceptionally High
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Plan 2 loans can charge up to RPI+3%, which in high-inflation periods might reach 7-8% or more. If your loan is accruing interest at 7%+ and you&apos;re confident you&apos;ll repay it all, the guaranteed return from overpayment becomes more attractive, especially if you&apos;re risk-averse.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  3. You&apos;re Risk-Averse and Value Certainty
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Investment returns fluctuate and aren&apos;t guaranteed. Paying off your loan provides a guaranteed reduction in debt. If you have low risk tolerance and the psychological comfort of reducing debt outweighs potential investment gains, paying down your loan might be the right choice for you, even if it&apos;s not mathematically optimal.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  4. Your Loan Affects Mortgage Affordability
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While student loans don&apos;t appear on credit reports, lenders do consider your student loan repayments when calculating how much you can borrow for a mortgage. If you&apos;re close to the edge of mortgage affordability and paying off your loan would meaningfully increase your borrowing capacity for a property you want to buy soon, this could tip the scales toward repayment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, this is rarely worth it mathematically. You&apos;d typically be better off continuing loan payments and making a larger down payment using money you would have put toward loan overpayment.
                </p>
              </div>
            </section>

            {/* Investment Vehicles */}
            <section id="investment-vehicles" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Investment Vehicles to Consider
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you decide investing is the right choice, here are the most suitable vehicles for UK graduates, listed in order of priority for most people:
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  1. Workplace Pension (Up to Employer Match)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Priority: Highest</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Always contribute enough to your workplace pension to receive the full employer match. This is literally free money, typically a 3-5% boost to your salary. With tax relief on top, this can be a 45-65% immediate return.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li><strong>Pros:</strong> Employer matching, tax relief, forced long-term savings</li>
                  <li><strong>Cons:</strong> Cannot access until age 55 (rising to 57), limited investment choices</li>
                  <li><strong>Best for:</strong> Everyone with access to employer matching</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  2. Stocks and Shares ISA
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Priority: High</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ISAs offer tax-free growth and withdrawals with no restrictions on access. Perfect for long-term investing while maintaining flexibility.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li><strong>Pros:</strong> Tax-free gains, complete flexibility, £20,000 annual allowance, wide investment choices</li>
                  <li><strong>Cons:</strong> No tax relief on contributions, no employer matching</li>
                  <li><strong>Best for:</strong> Long-term savings you might need access to before retirement</li>
                  <li><strong>Recommended investments:</strong> Low-cost global index trackers (e.g., Vanguard FTSE Global All Cap)</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  3. Lifetime ISA (LISA)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Priority: High (if under 40 and saving for first home or retirement)</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The government adds 25% to your contributions (up to £1,000 per year on £4,000 contributions), but you can only withdraw penalty-free for a first home or after age 60.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li><strong>Pros:</strong> 25% government bonus, tax-free growth</li>
                  <li><strong>Cons:</strong> £4,000 annual limit, 25% withdrawal penalty if used for other purposes, must be under 40 to open</li>
                  <li><strong>Best for:</strong> First-time homebuyers or those comfortable locking money until 60</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  4. Additional Pension Contributions
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Priority: Medium (after maxing employer match)</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After getting full employer matching, additional pension contributions still benefit from tax relief but lack the employer boost.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li><strong>Pros:</strong> Tax relief (20-45%), tax-free growth, high annual allowance (£60,000)</li>
                  <li><strong>Cons:</strong> Locked until age 55+, less flexibility than ISAs</li>
                  <li><strong>Best for:</strong> High earners, those prioritizing retirement, those who&apos;ve maxed ISA allowance</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  5. General Investment Account
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Priority: Lower (after maxing tax-advantaged accounts)</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once you&apos;ve maxed out ISAs and pension contributions, you can invest in a standard investment account.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li><strong>Pros:</strong> No contribution limits, complete flexibility</li>
                  <li><strong>Cons:</strong> Subject to capital gains tax (though £3,000 annual allowance) and dividend tax</li>
                  <li><strong>Best for:</strong> Those who&apos;ve exhausted tax-advantaged options</li>
                </ul>
              </div>

              <div className="mt-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Recommended Investment Strategy for Most Graduates</h4>
                  <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                    <li>Contribute to workplace pension up to employer match</li>
                    <li>Build emergency fund (3-6 months expenses) in accessible savings</li>
                    <li>Max out LISA if buying first home (£4,000/year)</li>
                    <li>Fill remaining ISA allowance with global index trackers (up to £20,000/year total across all ISAs)</li>
                    <li>Consider additional pension contributions if high earner or maxed ISAs</li>
                    <li>Only then consider student loan overpayments (if you&apos;ll repay in full anyway)</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Balanced Approach */}
            <section id="balanced-approach" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                A Balanced Approach: The Hybrid Strategy
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you&apos;re uncertain about your future earnings trajectory or uncomfortable committing entirely to one strategy, a balanced approach can provide both financial optimization and peace of mind.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  The 70/30 Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Allocate 70% of extra funds to investing and 30% to loan overpayment. This gives you most of the mathematical benefits of investing while still making progress on your loan for psychological comfort.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Example: £500 Monthly Extra Budget
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                    <li>£350/month → Stocks &amp; Shares ISA (global index tracker)</li>
                    <li>£150/month → Voluntary loan overpayment</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>Benefits:</strong> You&apos;re building wealth through investments while also reducing your loan balance, hedging against uncertainty about your future earnings.
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  The Annual Review Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Default to investing, but review your situation annually. If your career trajectory changes significantly (major promotion, career switch, etc.), recalculate whether loan overpayment makes sense. This approach maximizes flexibility while staying responsive to changing circumstances.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  The Milestone Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Focus on investing until you hit certain financial milestones, then consider loan overpayment:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>Emergency fund fully funded (6 months expenses)</li>
                  <li>ISA balance reaches £50,000</li>
                  <li>Pension on track for comfortable retirement</li>
                  <li>House deposit saved</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Only after securing these foundations would you shift focus to loan overpayment, and only if you&apos;re confident you&apos;ll repay in full anyway.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Optimal Strategy</h2>
                <p className="text-lg text-blue-100">
                  Use our interactive calculators to model your specific situation and see the projected outcomes of investing versus loan overpayment
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    href="/calculators/investment-vs-overpayment-calculator/"
                  >
                    Compare Investment vs. Overpayment
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What if interest rates change after I've started investing instead of overpaying?",
                    a:
                      "This is a valid concern, but remember that for most Plan 2 and Plan 5 borrowers, the stated interest rate doesn't matter much if you won't repay in full before write-off. If you will repay in full, your student loan interest rate is typically still lower than long-term expected stock market returns. However, you should review your strategy annually and adjust if circumstances change significantly. The beauty of investing is that your investments remain liquid (except pensions), so you could always sell investments to pay off your loan if the math changes.",
                  },
                  {
                    q: "Won't investing in stocks be too risky compared to the guaranteed return of paying off debt?",
                    a:
                      "It's true that investments carry more short-term volatility than debt repayment. However, over long time horizons (20+ years, which matches your loan repayment period), the risk of losing money in a diversified global stock portfolio is historically very low, and the expected return is much higher than most loan interest rates. If you're very risk-averse, you could opt for a more conservative investment mix (more bonds, less stocks) or use a hybrid strategy. But remember: if you won't repay your loan in full, there's no 'return' from overpayment at all - you're just reducing your write-off amount.",
                  },
                  {
                    q: "Should I pay off my student loan before saving for a house deposit?",
                    a:
                      "Almost never. Saving for a house deposit should take priority over voluntary student loan overpayments for most people. Getting on the property ladder sooner typically provides better financial returns (through building equity and potential property appreciation) than the interest saved from loan overpayment. Additionally, a LISA gives you a 25% government bonus on up to £4,000 per year specifically for first-time homebuyers. This 25% instant return is much better than any student loan interest rate. Focus on building your deposit first, then maintain standard loan repayments.",
                  },
                  {
                    q: "What about using a Help to Buy ISA or premium bonds instead of stocks?",
                    a:
                      "Help to Buy ISAs closed to new applicants in 2019 (replaced by LISAs). Premium Bonds are essentially a savings account with prizes instead of interest, offering an expected return of around 4.15% currently. While this is better than standard savings accounts, it's still lower than expected long-term stock market returns and offers no tax advantages beyond the prize money being tax-free. Premium Bonds are fine for your emergency fund or short-term savings, but for long-term wealth building to compare against loan overpayment, you'll likely do better with tax-advantaged stock market investments through ISAs and pensions.",
                  },
                  {
                    q: "Can I change my mind later and switch from investing to overpaying, or vice versa?",
                    a:
                      "Yes, absolutely. Your strategy isn't permanent. You can sell your investments (except pension, which is locked until 55+) to make loan overpayments if circumstances change and the math shifts. Conversely, you can stop overpaying your loan at any time and redirect that money to investments. The key is to review your situation regularly (annually is sensible) and adjust as your income, loan balance, and financial goals evolve. This flexibility is actually an advantage of investing - your money remains more accessible than if you'd irrevocably paid it toward your loan.",
                  },
                  {
                    q: "What if I get a windfall like an inheritance or bonus - should that change my strategy?",
                    a:
                      "A windfall doesn't fundamentally change the math, but it might change your priorities. Apply the same framework: if you won't repay your loan in full, investing the windfall will almost certainly leave you better off. If you will repay in full, compare your loan interest rate against expected investment returns. However, a windfall might be an opportunity to max out annual allowances (£20,000 ISA, £60,000 pension) that you couldn't normally afford. It might also be the time to address other financial priorities like building an emergency fund or paying off high-interest debt. Student loan overpayment should still generally be at the bottom of the priority list for most people.",
                  },
                ].map((item, idx) => (
                  <details key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-800">{item.q}</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <DrLilaDesc />

            {/* Related Resources */}
            <section id="related-resources" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Related Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  href="/guides/should-i-overpay-loan/"
                >
                  <div className="mb-4 text-blue-600">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Should You Overpay Your Loan?</h3>
                  <p className="text-gray-600">Analysis of when voluntary overpayments make financial sense</p>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-80 lg:flex-shrink-0">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
}