import React from "react";
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function StudentLoansAndMortgagesContent() {
  const tocItems = [
    { id: "how-lenders-view", title: "How Mortgage Lenders View Student Loans", level: 2 },
    { id: "impact-affordability", title: "How Student Loans Impact Mortgage Affordability", level: 2 },
    { id: "strategies", title: "Strategies for Mortgage Applicants with Student Loans", level: 2 },
    { id: "common-questions", title: "Common Questions About Student Loans and Mortgages", level: 2 },
  ];

  return (
    <main className="space-y-12 pb-16">
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
                  Student Loans and Mortgages
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loans and Mortgages
          </h1>
          <p className="text-xl text-gray-600">
            How student debt affects your ability to buy a home in the UK
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
          <TableOfContents items={tocItems} />
        </div>
        <div className="lg:flex lg:gap-8 relative">
          {/* Main Content */}
          <div className="lg:flex-1 lg:min-w-0">
            {/* Intro */}
            <section className="mb-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  If you&apos;re a graduate with student loans looking to buy your first home, you might be
                  concerned about how your student debt will affect your mortgage application. The good
                  news is that UK student loans work differently from other types of debt and are
                  generally viewed more favorably by mortgage lenders.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This guide explains exactly how student loans impact mortgage applications, how lenders
                  assess affordability, and what you can do to maximize your chances of securing a
                  mortgage as a graduate with student debt.
                </p>
              </div>
            </section>

            {/* How lenders view */}
            <section id="how-lenders-view" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                How Mortgage Lenders View Student Loans
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  UK student loans are fundamentally different from other forms of debt such as credit
                  cards, personal loans, or car finance:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Loans vs. Conventional Debt</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Feature</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Student Loans</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Conventional Debt</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">Repayment Structure</td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Income-contingent (only pay when earning above threshold)
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Fixed monthly payments regardless of income
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">
                          Consequences of Non-Payment
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">None if earning below threshold</td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Missed payments affect credit score, potential legal action
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">Credit Report Impact</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Not recorded on credit files</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Fully visible on credit reports</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">Write-Off Period</td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          Yes (30-40 years, depending on plan)
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">No automatic write-off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Because of these fundamental differences, mortgage lenders generally take a more
                  favorable view of student loans compared to other types of debt. The key factors lenders
                  consider are:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    <strong>They don&apos;t appear on credit reports:</strong> Student loans don&apos;t show up on
                    your credit file as a loan, so they don&apos;t affect your credit score directly.
                  </li>
                  <li>
                    <strong>Income-based repayments:</strong> Lenders recognize that repayments
                    automatically adjust if your income decreases.
                  </li>
                  <li>
                    <strong>Lower risk profile:</strong> Student loans pose virtually no default risk,
                    unlike conventional debts.
                  </li>
                </ul>
              </div>
            </section>

            {/* Affordability */}
            <section id="impact-affordability" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                How Student Loans Impact Mortgage Affordability
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  While student loans may be viewed more favorably than other debts, they still impact how
                  much you can borrow:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Affordability Calculations</h3>
                <p className="text-gray-700 leading-relaxed mb-2">When assessing how much you can borrow, lenders typically:</p>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Calculate your gross annual income</li>
                  <li>Apply a multiplier (typically 4-5x income)</li>
                  <li>Deduct ongoing financial commitments, including student loan repayments</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your student loan repayments reduce your disposable income, which lenders use to
                  determine whether you can afford mortgage repayments. The higher your student loan
                  repayments, the lower your mortgage affordability might be.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Practical Example</h3>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Example: £40,000 Salary with Plan 2 Student Loan
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 text-sm mb-1">Monthly student loan repayment:</p>
                      <p className="font-medium text-gray-800">£95 per month</p>
                      <p className="text-sm text-gray-500">
                        (9% of amount above £27,295 threshold, divided by 12)
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm mb-1">
                        Typical mortgage affordability without student loan:
                      </p>
                      <p className="font-medium text-gray-800">Up to £200,000</p>
                      <p className="text-sm text-gray-500">(Based on 5x salary multiplier)</p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm mb-1">Estimated reduction in mortgage amount:</p>
                      <p className="font-medium text-gray-800">£17,000 - £20,000</p>
                      <p className="text-sm text-gray-500">
                        (Based on the impact of £95 monthly student loan repayment on affordability
                        calculations)
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Impact Varies by Student Loan Plan</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The impact on your mortgage affordability varies significantly depending on your student
                  loan plan and salary:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Lower salary with Plan 2 or Plan 5:</strong> Minimal impact as repayments are
                    small or zero if you&apos;re below the threshold.
                  </li>
                  <li>
                    <strong>Higher salary with Plan 1:</strong> Larger impact due to lower repayment
                    threshold and higher monthly repayments.
                  </li>
                  <li>
                    <strong>Combined undergraduate and postgraduate loans:</strong> Most significant
                    impact due to higher total monthly repayments.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Generally, for every £50 of monthly student loan repayments, your mortgage borrowing
                  capacity might be reduced by £10,000-£12,000, though this varies between lenders.
                </p>
              </div>
            </section>

            {/* Strategies */}
            <section id="strategies" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Strategies for Mortgage Applicants with Student Loans
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you&apos;re applying for a mortgage while repaying student loans, consider these
                  strategies to optimize your application:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Focus on the Deposit First</h3>
                <p className="text-gray-700 leading-relaxed mb-2">A larger deposit often has a more significant positive impact than paying off student loans:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
                  <li>Increasing your deposit from 5% to 10% typically secures better interest rates</li>
                  <li>
                    Lenders generally offer more favorable terms with higher deposits, regardless of
                    student debt
                  </li>
                  <li>
                    Using savings to boost your deposit rather than making voluntary student loan
                    repayments often makes more financial sense
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Reduce Other Debts First</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Conventional debts have a more significant negative impact on mortgage applications:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
                  <li>Clear credit card balances, personal loans, and car finance if possible</li>
                  <li>Avoid taking on new credit commitments in the 6-12 months before applying</li>
                  <li>
                    Lower credit utilization (percentage of available credit used) to improve your credit
                    score
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Consider a Joint Mortgage Application</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Applying with a partner or family member can improve affordability:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
                  <li>Combined income increases borrowing capacity</li>
                  <li>
                    If your partner doesn&apos;t have student loans, the overall impact of your student debt is
                    reduced
                  </li>
                  <li>Some lenders have specific provisions for professional couples with student debt</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Explore Professional Mortgages</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Some lenders offer special mortgage products for professionals who typically have higher
                  student debt:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
                  <li>
                    Often available to doctors, dentists, vets, lawyers, accountants, and other
                    professionals
                  </li>
                  <li>May offer higher income multiples (up to 5.5x or 6x salary)</li>
                  <li>Some lenders discount the impact of student loans for certain professions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Should You Pay Off Student Loans Before Applying?</h3>
                <p className="text-gray-700 leading-relaxed mb-2">For most graduates, prioritizing a mortgage deposit over paying off student loans makes financial sense:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>Plan 1 loans:</strong> Low interest rate (currently 1.75%) means paying these
                    off early rarely makes financial sense.
                  </li>
                  <li>
                    <strong>Plan 2 loans:</strong> Despite higher interest rates, many won&apos;t repay in full
                    before the 30-year write-off, making voluntary repayments potentially wasteful.
                  </li>
                  <li>
                    <strong>Plan 5 loans:</strong> With a 40-year term, most graduates should prioritize
                    other financial goals over early repayment.
                  </li>
                  <li>
                    <strong>Postgraduate loans:</strong> Given their smaller size and higher interest
                    rate, these might be worth paying off if you&apos;re close to clearing the balance
                    completely.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section id="common-questions" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Common Questions About Student Loans and Mortgages
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Do I need to declare my student loan on a mortgage application?
                  </h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-sm">
                      Yes, you must declare your student loan on your mortgage application. Lenders will
                      ask about your monthly repayments as part of their affordability assessment. Some
                      lenders may check your payslips to verify the repayment amount.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Will my student loan show up on my credit check?
                  </h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-sm">
                      No, student loans do not appear on your credit file and are not visible to lenders
                      when they perform a credit check. They don&apos;t directly affect your credit score,
                      either positively or negatively.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Can I get a mortgage while deferring student loan repayments?
                  </h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-sm">
                      If you&apos;re earning below the repayment threshold and not making repayments, this can
                      actually work in your favor for mortgage applications. Lenders will see that you
                      have no current repayment obligation, although they may factor in potential future
                      repayments if your income increases.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Does having a large student loan balance affect my mortgage chances?
                  </h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 text-sm">
                      The size of your total student loan balance is largely irrelevant to mortgage
                      lenders. They only consider your current monthly repayment amount, which is based on
                      your income, not your overall balance. This is different from conventional loans,
                      where the outstanding balance is a key consideration.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Mortgage Affordability</h2>
                  <p className="text-lg text-blue-100">
                    See how your student loan repayments affect your take-home pay and mortgage borrowing
                    capacity
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="/calculators/student-loan-income-comparison/"
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Income Comparison Calculator
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <DrLilaDesc />

            {/* Related resources */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Related Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  href="/guides/student-loans-high-earners/"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Student Loans for High Earners
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How student loans work when you&apos;re earning £50,000+ and implications for major
                    financial decisions.
                  </p>
                </a>

                <a
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  href="/guides/student-loans-and-taxes/"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Student Loans and Taxes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How student loan repayments interact with income tax, self-assessment, and tax code.
                  </p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-80 lg:flex-shrink-0">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </main>
  );
}