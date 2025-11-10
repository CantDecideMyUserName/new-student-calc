import Link from "next/link";
import React from "react";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function OverpayStudentLoanGuide() {
  const tocItems = [
    { id: "recap", title: "Quick Recap: How UK Student Loans Work", level: 2 },
    { id: "when-makes-sense", title: "When Overpaying Your Student Loan Makes Financial Sense", level: 2 },
    { id: "when-disadvantageous", title: "When Overpaying Your Student Loan Is Financially Disadvantageous", level: 2 },
    { id: "decision-framework", title: "A Decision Framework for Student Loan Overpayments", level: 2 },
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
                  Should I Overpay My Loan?
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Should You Overpay Your Student Loan?
          </h1>
          <p className="text-xl text-gray-600">
            A financial analysis of when making voluntary payments makes sense — and when it
            doesn&apos;t
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
                  The question of whether to make extra payments on your student loan is more
                  complicated than it might seem. Unlike most other forms of debt, the unique nature of
                  UK student loans means that overpaying isn&apos;t always the financially optimal choice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This guide will help you determine whether putting extra money toward your student
                  loan makes financial sense for your specific situation.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-gray-700 text-sm">
                    <strong>Key Insight:</strong> Due to the income-based repayment system and eventual write-off,
                    many graduates will never repay their full student loan regardless of the amount
                    borrowed. For these individuals, making extra payments often means paying more than
                    they otherwise would have.
                  </p>
                </div>
              </div>
            </section>

            {/* Recap */}
            <section id="recap" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Quick Recap: How UK Student Loans Work
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before diving into the overpayment analysis, let&apos;s quickly recap the key aspects of
                  UK student loans that make them different from conventional loans:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>
                    <strong>Income-contingent repayments:</strong> You only make repayments when your income
                    exceeds the threshold for your loan plan
                  </li>
                  <li>
                    <strong>Automatic deductions:</strong> Repayments are deducted automatically through the tax
                    system based on your income
                  </li>
                  <li>
                    <strong>Set percentage:</strong> Repayments are 9% of your income above the threshold, regardless
                    of your loan balance
                  </li>
                  <li>
                    <strong>Eventual write-off:</strong> Any remaining balance is canceled after a set period
                    (25-40 years, depending on your plan)
                  </li>
                  <li>
                    <strong>Interest accrual:</strong> Interest rates vary by loan plan and sometimes by income
                    level
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These characteristics mean that student loans function more like a graduate tax than a
                  conventional loan for many borrowers. If your income never rises high enough to repay
                  the full amount before the write-off date, you&apos;ll never repay the full balance
                  regardless of how much you borrowed.
                </p>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {/* Key Loan Terms */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Loan Terms by Plan</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Plan</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Threshold</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Interest Rate</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Write-off Period</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 text-sm">Plan 1</td>
                          <td className="px-4 py-2 text-sm">£22,015</td>
                          <td className="px-4 py-2 text-sm">Lower of RPI or Bank Rate+1%</td>
                          <td className="px-4 py-2 text-sm">25 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm">Plan 2</td>
                          <td className="px-4 py-2 text-sm">£27,295</td>
                          <td className="px-4 py-2 text-sm">RPI to RPI+3%</td>
                          <td className="px-4 py-2 text-sm">30 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm">Plan 4</td>
                          <td className="px-4 py-2 text-sm">£27,660</td>
                          <td className="px-4 py-2 text-sm">Lower of RPI or Bank Rate+1%</td>
                          <td className="px-4 py-2 text-sm">30 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-sm">Plan 5</td>
                          <td className="px-4 py-2 text-sm">£25,000</td>
                          <td className="px-4 py-2 text-sm">RPI only</td>
                          <td className="px-4 py-2 text-sm">40 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Write-off Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Loan Write-off Calculator</h3>
                  <p className="text-gray-600 mb-4">
                    Your loan will be written off in <strong>2052</strong> if you have a Plan 2 loan that
                    became eligible for repayment in 2022.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Use our detailed calculator to determine your specific write-off date and analyze your
                    projected repayments.
                  </p>
                  <Link
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition-colors"
                    href="/calculators/loan-writeoff-checker/"
                  >
                    Calculate Your Write-off Date
                  </Link>
                </div>
              </div>
            </section>

            {/* When Overpaying Makes Sense */}
            <section id="when-makes-sense" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Overpaying Your Student Loan Makes Financial Sense
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Making voluntary extra payments on your student loan can be financially advantageous in
                  specific circumstances. Here are the scenarios where it typically makes sense:
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  1. You&apos;re Highly Likely to Repay in Full Anyway
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your income trajectory means you&apos;ll repay your full loan before the write-off date,
                  making extra payments can save you money by reducing the total interest that accrues over
                  the life of the loan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">This typically applies to:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>
                    <strong>High earners</strong> (top 20-30% of graduates) who will pay off their loan regardless
                  </li>
                  <li>
                    Those with <strong>relatively small loan balances</strong> compared to their income
                  </li>
                  <li>
                    Graduates with <strong>steep career progression</strong> early in their career
                  </li>
                  <li>
                    People with <strong>Plan 1 loans</strong>, which have lower balances and interest rates
                  </li>
                </ul>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Example: High Earner with Plan 2 Loan</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Loan balance: £50,000</li>
                    <li>Starting salary: £45,000, rising to £100,000 within 10 years</li>
                    <li>Projected to repay full loan in 19 years with standard repayments</li>
                    <li>By making an extra £10,000 payment today:</li>
                    <li>Would repay full loan 5 years earlier</li>
                    <li>Would save approximately £15,000 in interest</li>
                  </ul>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. You&apos;re Near the Tipping Point</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you&apos;re near the break-even point where you might or might not repay in full, making
                  extra payments could tip you into the &quot;will repay in full&quot; category, potentially saving
                  money in the long run.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For example, if you&apos;re projected to repay 90% of your loan before the write-off date,
                  making strategic extra payments could help you fully clear the debt and avoid paying
                  interest on the full balance for the maximum period.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. You Have Plan 1 Loans</h3>
                <p className="text-gray-700 leading-relaxed mb-3">Plan 1 loans are more likely to make sense for overpayment because:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>The repayment threshold is lower (£22,015), so you start repaying at lower income levels</li>
                  <li>Loan balances are typically smaller (£3,000-£30,000 range)</li>
                  <li>More borrowers will fully repay before the 25-year forgiveness period</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. You Have Strong Psychological Reasons</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some borrowers prefer to be debt-free even if it&apos;s not the mathematically optimal choice.
                  If having student debt causes you significant stress or anxiety, and you&apos;re in a
                  financial position to make extra payments, the psychological benefit may outweigh the
                  strict financial calculation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This is a personal choice, but it should be made with full awareness of the potential
                  financial trade-offs.
                </p>
              </div>
            </section>

            {/* When Overpaying Is Bad */}
            <section id="when-disadvantageous" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Overpaying Your Student Loan Is Financially Disadvantageous
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For many graduates, making voluntary extra payments on their student loan is actually a
                  poor financial decision. Here&apos;s why:
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  1. You Won&apos;t Repay in Full Before Write-off
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your income trajectory suggests you won&apos;t repay your full loan before the write-off
                  date, any extra payments you make simply reduce the amount that will be forgiven. You&apos;re
                  effectively paying money that you wouldn&apos;t otherwise have had to pay.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Example: Middle-Income Earner with Plan 2 Loan
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Loan balance: £50,000</li>
                    <li>Steady career with average UK salary progression (£30,000 to £45,000)</li>
                    <li>Projected to repay £35,000 over 30 years before write-off</li>
                    <li>If you make an extra £10,000 payment today:</li>
                    <li>You&apos;ll still not fully repay before write-off</li>
                    <li>You&apos;ve just given away £10,000 that you didn&apos;t need to pay</li>
                  </ul>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  2. Better Investment Opportunities Exist
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Even if you will repay your loan in full, there may be better uses for your money if the
                  expected return elsewhere exceeds the interest rate on your student loan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">Consider these alternatives and their historical returns:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>
                    <strong>Pension contributions:</strong> Tax relief boosts your effective return, with 20-45%
                    immediate &quot;return&quot; through tax savings, plus investment growth
                  </li>
                  <li>
                    <strong>Stock market investments:</strong> Long-term returns of 7-10% annually are historically
                    common
                  </li>
                  <li>
                    <strong>Employer-matched savings schemes:</strong> Instant 100% return on your contribution
                  </li>
                  <li>
                    <strong>Property deposit:</strong> Can help you get on the housing ladder sooner
                  </li>
                  <li>
                    <strong>Emergency fund:</strong> Financial security has significant value
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your student loan interest rate is lower than the potential returns from these
                  alternatives, you may be better off investing your extra money elsewhere.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. You Have Higher-Interest Debts</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have other debts with higher interest rates, such as credit cards, personal
                  loans, or car loans, it&apos;s almost always better to pay those off before making extra
                  payments on your student loan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">Priority for debt repayment should typically be:</p>
                <ol className="list-decimal ml-6 text-gray-700 text-sm mb-6">
                  <li>High-interest consumer debt (credit cards, payday loans)</li>
                  <li>Personal loans</li>
                  <li>Car loans</li>
                  <li>Student loans (only if you&apos;ll repay in full)</li>
                  <li>Mortgage</li>
                </ol>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  4. You Might Need Financial Flexibility
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once you make a voluntary overpayment on your student loan, you can&apos;t get that money
                  back if your circumstances change. If you might need to:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-6">
                  <li>Take a career break</li>
                  <li>Return to education</li>
                  <li>Start a family</li>
                  <li>Move to a lower-paying but more fulfilling job</li>
                  <li>Deal with unexpected expenses</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  It&apos;s worth considering keeping your money accessible rather than putting it toward loan
                  overpayments.
                </p>
              </div>
            </section>

            {/* Decision Framework */}
            <section id="decision-framework" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                A Decision Framework for Student Loan Overpayments
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To help determine whether overpaying is right for your situation, follow this
                  step-by-step framework:
                </p>
                <div className="bg-white shadow-md rounded-lg overflow-hidden my-6">
                  <div className="bg-blue-50 p-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Student Loan Overpayment Decision Tree
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="list-none space-y-4">
                      <li className="pl-4 border-l-4 border-gray-300">
                        <strong>Step 1: Address financial fundamentals first</strong>
                        <ul className="list-disc ml-6 text-gray-700 text-sm mt-2 space-y-2">
                          <li>
                            Do you have an emergency fund of 3-6 months&apos; expenses? If not, build this
                            first.
                          </li>
                          <li>Do you have high-interest debt? If yes, prioritize paying this off first.</li>
                          <li>
                            Are you contributing enough to your pension to get full employer matching? If
                            not, do this first.
                          </li>
                        </ul>
                      </li>
                      <li className="pl-4 border-l-4 border-blue-300">
                        <strong>Step 2: Estimate if you&apos;ll repay your loan in full</strong>
                        <ul className="list-disc ml-6 text-gray-700 text-sm mt-2 space-y-2">
                          <li>
                            Use our
                            {" "}
                            <Link
                              className="text-blue-600 hover:underline"
                              href="/calculators/total-loan-cost-calculator/"
                            >
                              total loan cost calculator
                            </Link>
                            {" "}
                            to project your lifetime repayments.
                          </li>
                          <li>
                            If you&apos;re projected to repay less than 90% of your loan before write-off,
                            overpayment is likely not financially optimal.
                          </li>
                          <li>
                            If you&apos;re projected to repay more than 110% of your loan (principal + significant
                            interest), overpayment could save you money.
                          </li>
                          <li>If you&apos;re in the 90-110% range, more detailed analysis is needed.</li>
                        </ul>
                      </li>
                      <li className="pl-4 border-l-4 border-green-300">
                        <strong>Step 3: Compare potential returns</strong>
                        <ul className="list-disc ml-6 text-gray-700 text-sm mt-2 space-y-2">
                          <li>What is the effective interest rate on your student loan?</li>
                          <li>What returns could you reasonably expect from alternative investments?</li>
                          <li>
                            Remember to consider tax advantages of alternatives (e.g., pension
                            contributions).
                          </li>
                          <li>
                            If alternative investments offer significantly higher potential returns,
                            prioritize those.
                          </li>
                        </ul>
                      </li>
                      <li className="pl-4 border-l-4 border-purple-300">
                        <strong>Step 4: Consider personal factors</strong>
                        <ul className="list-disc ml-6 text-gray-700 text-sm mt-2 space-y-2">
                          <li>How important is being debt-free to your peace of mind?</li>
                          <li>How secure is your income and career path?</li>
                          <li>Do you anticipate any major life changes that might affect your income?</li>
                          <li>How comfortable are you with investment risk?</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  For most graduates with Plan 2 or Plan 5 loans, the analysis typically points toward not
                  making voluntary overpayments. Many borrowers would be better off investing in pensions,
                  ISAs, or even enjoying a slightly higher quality of life instead.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Specific Situation</h2>
                <p className="text-lg text-blue-100">
                  Use our sophisticated loan overpayment calculator to analyze whether making extra
                  payments makes financial sense for your specific circumstances
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    href="/calculators/student-loan-overpayment-calculator/"
                  >
                    Try Our Overpayment Calculator
                  </Link>
                  <Link
                    className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                    href="/calculators/investment-vs-overpayment-calculator/"
                  >
                    Compare Investing vs. Overpaying
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
                    q: "Can I get a refund if I've already made voluntary overpayments?",
                    a:
                      "Unfortunately, voluntary overpayments to the Student Loans Company cannot generally be refunded. Once you've made an overpayment, that money is permanently applied to your loan balance. This is why it's crucial to carefully consider whether overpayment makes financial sense for your situation before proceeding.",
                  },
                  {
                    q: "Will making extra payments reduce my monthly repayments?",
                    a:
                      "No. Unlike conventional loans, making extra payments on your student loan will not reduce your monthly repayments. Your repayments are fixed at 9% of your income above the threshold, regardless of your remaining balance. Making extra payments will only potentially reduce the length of time you repay, not the monthly amount.",
                  },
                  {
                    q: "How do I make voluntary overpayments if I decide it's right for me?",
                    a:
                      "You can make voluntary overpayments to the Student Loans Company through your online account at gov.uk/repaying-your-student-loan. You can make one-off payments or set up regular additional payments. Before making an overpayment, you must specify that it's a voluntary extra payment, not an early repayment of your regular monthly amount. The minimum voluntary payment is usually £5.",
                  },
                  {
                    q: "Does making overpayments affect my credit score?",
                    a:
                      "No, UK student loans do not appear on your credit report and do not affect your credit score in any way. Neither regular repayments nor voluntary overpayments have any impact on your creditworthiness. Lenders may consider your student loan repayments when assessing affordability for mortgages and other loans, but the loan itself is not part of your credit history.",
                  },
                  {
                    q: "If I have multiple student loans, can I choose which one to overpay?",
                    a:
                      "Yes, if you have multiple student loans (for example, both undergraduate and postgraduate loans, or loans from different plan types), you can specify which loan you want to make extra payments toward. When making a voluntary payment, you'll need to indicate which loan you wish to pay off. If you don't specify, the Student Loans Company will typically allocate the payment to the loan that's accruing the highest rate of interest.",
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
                  href="/guides/loan-interest-explained/"
                >
                  <div className="mb-4 text-blue-600">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Loan Interest</h3>
                  <p className="text-gray-600">Complete guide to how interest is calculated across all UK student loan plans</p>
                </Link>

                <Link
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  href="/guides/how-student-loans-work-uk/"
                >
                  <div className="mb-4 text-green-600">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
                  <p className="text-gray-600">Comprehensive guide to the UK student loan system and repayment process</p>
                </Link>

                <Link
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  href="/guides/investing-vs-loan-repayment/"
                  >
                  <div className="mb-4 text-purple-600">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">UK Investment Basics</h3>
                  <p className="text-gray-600">Guide to investment options if you choose not to overpay your student loan</p>
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