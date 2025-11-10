import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function Plan2Content() {
  const tocItems = [
    { id: "how-it-works", title: "How Plan 2 Student Loans Work", level: 2 },
    { id: "comparison", title: "How Plan 2 Compares to Other Loan Plans", level: 2 },
    { id: "key-considerations", title: "Key Considerations for Plan 2 Borrowers", level: 2 },
    { id: "faqs", title: "Frequently Asked Questions", level: 2 },
  ];

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 pb-16">
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
                    <Link className="hover:text-blue-700 hover:underline" href="/plans/">
                      Plans
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
                      Plan 2
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Plan 2 Student Loans</h1>
              <p className="text-xl text-gray-600">
                Complete guide to post-2012 student loans in England and Wales
              </p>
            </div>
          </section>

          {/* At a Glance */}
          <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Plan 2 Loan at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Who has Plan 2?</h3>
                  <p className="text-gray-600 text-sm">
                    Students who started university between September 2012 and August 2023 in England or Wales.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Repayment Threshold</h3>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">£27,295 per year</span> (£2,274 monthly, £524 weekly)
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Repayment Rate</h3>
                  <p className="text-gray-600 text-sm">9% of income above the threshold</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Interest Rate</h3>
                  <p className="text-gray-600 text-sm">
                    While studying: RPI + 3%
                    <br />
                    After graduation: Variable based on income, between RPI and RPI + 3%
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Written Off</h3>
                  <p className="text-gray-600 text-sm">30 years after the April after graduation</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">When Repayments Start</h3>
                  <p className="text-gray-600 text-sm">
                    The April after leaving your course, and only when income is above the threshold
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                href="/calculators/plan-2-student-loan-calculator/"
              >
                Calculate Your Plan 2 Repayments
              </Link>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
            <TableOfContents items={tocItems} />
          </div>
          <div className="lg:flex lg:gap-8 relative">
            {/* Main Content */}
            <div className="lg:flex-1 lg:min-w-0">
              {/* How it works */}
              <section id="how-it-works" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Plan 2 Student Loans Work
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    <Link className="text-blue-600 hover:text-blue-800" href="/plans/">
                      Plan 2 student loans
                    </Link>{" "}
                    were introduced in September 2012 when tuition fees in England rose to up to £9,000 per year. These loans
                    cover both tuition and maintenance (living costs) for eligible students. If you started your course after
                    2023, you&apos;ll be on the newer{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/plans/plan-5/">
                      Plan 5 system
                    </Link>{" "}
                    instead.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Features of Plan 2 Loans</h3>
                  <p className="leading-relaxed mb-3">
                    Unlike commercial loans, student loan repayments are income-contingent, meaning you only repay when your
                    income is above the threshold. This system functions more like a graduate tax than a traditional loan, as
                    explained in our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/guides/how-student-loans-work-uk/">
                      comprehensive student loans guide
                    </Link>
                    :
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>Repayments are automatically deducted from your salary through PAYE</li>
                    <li>The amount you repay depends on how much you earn, not how much you borrowed</li>
                    <li>The loan is written off after 30 years, regardless of how much has been repaid</li>
                    <li>Missing repayments due to low income does not affect your credit score</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Calculating Plan 2 Repayments</h3>
                  <p className="leading-relaxed mb-3">
                    <strong>You repay 9% of your income above the threshold of £27,295 per year.</strong> For example:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2 text-sm">
                      <strong>Annual salary: £32,000</strong>
                    </p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Income above threshold: £32,000 - £27,295 = £4,705</li>
                      <li>9% of £4,705 = £423.45 per year</li>
                      <li>Monthly repayment: £35.29</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    Use our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/calculators/plan-2-student-loan-calculator/">
                      Plan 2 calculator
                    </Link>{" "}
                    to work out your exact monthly repayments based on your salary.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 2 Interest Rates</h3>
                  <p className="leading-relaxed mb-3">
                    Plan 2 has variable interest rates depending on your circumstances (for a detailed explanation, see our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/guides/loan-interest-explained/">
                      student loan interest guide
                    </Link>
                    ):
                  </p>
                  <table className="min-w-full divide-y divide-gray-200 my-4 text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-800">Circumstance</th>
                        <th className="px-4 py-2 text-left text-gray-800">Interest Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">While studying</td>
                        <td className="px-4 py-2">RPI + 3%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Earning under £27,295</td>
                        <td className="px-4 py-2">RPI</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Earning between £27,295 and £49,130</td>
                        <td className="px-4 py-2">RPI to RPI + 3% (sliding scale)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Earning over £49,130</td>
                        <td className="px-4 py-2">RPI + 3%</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-gray-600 text-sm">
                    Current RPI (Retail Price Index) is subject to change. As of 2023, it stands at approximately 2.6%. This
                    complex interest structure is one of the main differences when{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/compare/plan-2-vs-plan-5/">
                      comparing Plan 2 vs Plan 5
                    </Link>{" "}
                    loans.
                  </p>
                </div>
              </section>

              {/* Comparison */}
              <section id="comparison" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Plan 2 Compares to Other Loan Plans
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                        <th className="px-4 py-3 text-left text-gray-800">Plan 1</th>
                        <th className="px-4 py-3 text-left text-gray-800 bg-blue-50">Plan 2</th>
                        <th className="px-4 py-3 text-left text-gray-800">Plan 5</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Who has it</td>
                        <td className="px-4 py-3">Pre-2012 students</td>
                        <td className="px-4 py-3 bg-blue-50">2012-2023 students</td>
                        <td className="px-4 py-3">Post-2023 students</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Repayment Threshold</td>
                        <td className="px-4 py-3">£22,015</td>
                        <td className="px-4 py-3 bg-blue-50">£27,295</td>
                        <td className="px-4 py-3">£25,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Interest Rate</td>
                        <td className="px-4 py-3">Lower of RPI or Bank Rate + 1%</td>
                        <td className="px-4 py-3 bg-blue-50">RPI to RPI + 3%</td>
                        <td className="px-4 py-3">RPI + 0%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Written Off After</td>
                        <td className="px-4 py-3">25 years</td>
                        <td className="px-4 py-3 bg-blue-50">30 years</td>
                        <td className="px-4 py-3">40 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-gray-600 text-sm">
                  For most graduates, the biggest differences between these plans are the repayment thresholds and interest
                  rates. For a detailed analysis of how these differences affect total repayments, see our{" "}
                  <Link className="text-blue-600 hover:text-blue-800" href="/compare/plan-2-vs-plan-5/">
                    Plan 2 vs Plan 5 comparison
                  </Link>{" "}
                  or{" "}
                  <Link className="text-blue-600 hover:text-blue-800" href="/compare/plan-1-vs-plan-2/">
                    Plan 1 vs Plan 2 comparison
                  </Link>
                  .
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <Link
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                    href="/compare/plan-1-vs-plan-2/"
                  >
                    Compare Plan 1 vs Plan 2
                  </Link>
                  <Link
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                    href="/compare/plan-2-vs-plan-5/"
                  >
                    Compare Plan 2 vs Plan 5
                  </Link>
                </div>
              </section>

              {/* Key considerations */}
              <section id="key-considerations" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Key Considerations for Plan 2 Borrowers
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Will You Repay in Full?</h3>
                  <p className="leading-relaxed mb-3">
                    Around 80% of Plan 2 borrowers aren&apos;t expected to fully repay their loans before the 30-year
                    write-off period. The likelihood of repaying in full depends on:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>Your starting salary and career progression</li>
                    <li>Your total loan amount (including interest)</li>
                    <li>Any career breaks or periods of lower income</li>
                  </ul>
                  <p className="text-sm">
                    Use our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/calculators/total-loan-cost-calculator/">
                      lifetime loan cost calculator
                    </Link>{" "}
                    to estimate whether you&apos;ll repay your loan in full.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Should You Make Extra Payments?</h3>
                  <p className="leading-relaxed mb-3">For most Plan 2 borrowers, making voluntary extra payments isn&apos;t financially advantageous. This is because:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>If you&apos;re unlikely to repay in full, extra payments just reduce the amount that would be written off</li>
                    <li>The money might provide better returns if invested elsewhere</li>
                    <li>Unlike other debts, student loans don&apos;t affect your credit score</li>
                  </ul>
                  <p className="text-sm">
                    However, if you&apos;re a high earner who will repay in full, making extra payments could save you money in the
                    long run by reducing interest. For a detailed analysis, read our guide on{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/guides/should-i-overpay-loan/">
                      whether you should overpay your student loan
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="max-w-4xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">Can I pay off my Plan 2 loan early?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Yes, you can make voluntary repayments at any time. However, for many graduates, it may not be
                        financially advantageous to pay off early, especially if you&apos;re unlikely to repay the full amount
                        before the 30-year write-off. Use our{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/student-loan-overpayment-calculator/">
                          overpayment calculator
                        </Link>{" "}
                        to see if this makes sense for you.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">What happens to my Plan 2 loan if I move abroad?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        If you move abroad, you&apos;ll still be responsible for repaying your student loan. You&apos;ll need to
                        inform the Student Loans Company of your move and provide evidence of your income. The repayment
                        threshold will be adjusted based on the cost of living in your new country of residence. 
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">Does my Plan 2 loan affect my credit score?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        No, your student loan does not appear on your credit file and does not affect your credit score.
                        However, lenders may consider your student loan repayments when assessing your affordability for
                        mortgages or other loans. For more on this topic, see our guide on{" "}
                        <Link className="text-blue-600 hover:underline" href="/guides/student-loans-and-mortgages/">
                          student loans and mortgages
                        </Link>
                        .
                      </p>
                    </div>
                  </details>
                </div>

                <div className="mt-6 text-center">
                  <Link className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm" href="/faqs/">
                    View all FAQs
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </section>

              {/* CTA band */}
              <section className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Plan 2 Repayments</h2>
                    <p className="text-lg text-blue-100">
                      Use our calculator to see exactly how your Plan 2 loan will affect your monthly budget
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        href="/calculators/plan-2-student-loan-calculator/"
                      >
                        Try Our Calculator
                      </Link>
                      <Link
                        className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                        href="/guides/should-i-overpay-loan/"
                      >
                        Should You Overpay?
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related resources */}
              <section className="max-w-6xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/guides/how-student-loans-work-uk/"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
                    <p className="text-gray-600 text-sm">A comprehensive guide to the entire UK student loan system</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/calculators/plan-2-student-loan-calculator/"
                  >
                    <div className="mb-4 text-green-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Calculator</h3>
                    <p className="text-gray-600 text-sm">Calculate your monthly and total Plan 2 loan repayments</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/compare/plan-2-vs-plan-5/"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 vs Plan 5 Comparison</h3>
                    <p className="text-gray-600 text-sm">Compare Plan 2 with the newer Plan 5 for post-2023 students</p>
                  </Link>
                </div>
              </section>

              {/* Related calculators */}
              <section className="max-w-6xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Calculators</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <Link
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100"
                    href="/calculators/plan-2-student-loan-calculator/"
                  >
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Plan 2 Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate monthly and total repayments</p>
                  </Link>
                  <Link
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100"
                    href="/calculators/total-loan-cost-calculator/"
                  >
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Total Cost Calculator</h3>
                    <p className="text-sm text-gray-600">See your lifetime loan repayments</p>
                  </Link>
                  <Link
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100"
                    href="/calculators/student-loan-interest-calculator/"
                  >
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Interest Calculator</h3>
                    <p className="text-sm text-gray-600">See how interest affects your balance</p>
                  </Link>
                  <Link
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100"
                    href="/calculators/student-loan-overpayment-calculator/"
                  >
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Overpayment Calculator</h3>
                    <p className="text-sm text-gray-600">Analyze if voluntary payments make sense</p>
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
    </main>
  );
}