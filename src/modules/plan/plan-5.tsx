import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function Plan5Content() {
  const tocItems = [
    { id: "how-it-works", title: "How Plan 5 Student Loans Work", level: 2 },
    { id: "comparison", title: "How Plan 5 Compares to Other Loan Plans", level: 2 },
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
                      Plan 5
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Plan 5 Student Loans</h1>
              <p className="text-xl text-gray-600">
                Complete guide to the new post-2023 student loans in England and Wales
              </p>
            </div>
          </section>

          {/* At a Glance */}
          <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Plan 5 Loan at a Glance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Who has Plan 5?</h3>
                  <p className="text-gray-600 text-sm">
                    Students who started university in England or Wales from September 2023 onwards.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800">Repayment Threshold</h3>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">£25,000 per year</span> (£2,083 monthly, £480 weekly)
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
                    RPI only (lower than Plan 2)
                    <br />
                    No additional percentage added to RPI
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800">Written Off</h3>
                  <p className="text-gray-600 text-sm">40 years after the April after graduation (longer than Plan 2)</p>
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
                href="/calculators/plan-5-student-loan-calculator/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Calculate Your Plan 5 Repayments
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
                  How Plan 5 Student Loans Work
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    Plan 5 student loans were introduced in September 2023 as part of reforms to the student finance system
                    in England. These loans cover both tuition fees (up to £9,250 per year) and maintenance (living costs)
                    for eligible students.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Features of Plan 5 Loans</h3>
                  <p className="leading-relaxed mb-3">Plan 5 represents significant changes from the previous Plan 2 system, including:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>A lower repayment threshold (£25,000 instead of £27,295)</li>
                    <li>Lower interest rates (RPI only, no added percentage)</li>
                    <li>Longer repayment period before write-off (40 years instead of 30)</li>
                    <li>Still income-contingent, with automatic salary deductions through PAYE</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Calculating Plan 5 Repayments</h3>
                  <p className="leading-relaxed mb-3">
                    <strong>You repay 9% of your income above the threshold of £25,000 per year.</strong> For example:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2 text-sm">
                      <strong>Annual salary: £32,000</strong>
                    </p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Income above threshold: £32,000 - £25,000 = £7,000</li>
                      <li>9% of £7,000 = £630 per year</li>
                      <li>Monthly repayment: £52.50</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 5 Interest Rates</h3>
                  <p className="leading-relaxed mb-3">One of the main benefits of Plan 5 compared to Plan 2 is the lower interest rate:</p>

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
                        <td className="px-4 py-2">RPI only</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">After graduation</td>
                        <td className="px-4 py-2">RPI only</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="italic text-sm">
                    Current RPI (Retail Price Index) is subject to change. As of 2023, it stands at approximately 2.6%.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Long-Term Impact of Plan 5</h3>
                  <p className="leading-relaxed mb-3">The combination of a lower threshold, lower interest rate, and longer repayment period means:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>Higher earners may pay less overall compared to Plan 2 due to lower interest accumulation</li>
                    <li>Lower and middle earners will pay more per month and for a longer period</li>
                    <li>Fewer borrowers will have their loans written off before full repayment</li>
                    <li>The system is generally more financially sustainable for the government</li>
                  </ul>
                </div>
              </section>

              {/* Comparison table */}
              <section id="comparison" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Plan 5 Compares to Other Loan Plans
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                        <th className="px-4 py-3 text-left text-gray-800">Plan 2</th>
                        <th className="px-4 py-3 text-left text-gray-800 bg-blue-50">Plan 5</th>
                        <th className="px-4 py-3 text-left text-gray-800">Postgraduate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium">Who has it</td>
                        <td className="px-4 py-3">2012-2023 students</td>
                        <td className="px-4 py-3 bg-blue-50">Post-2023 students</td>
                        <td className="px-4 py-3">Master&apos;s &amp; PhD students</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Repayment Threshold</td>
                        <td className="px-4 py-3">£27,295</td>
                        <td className="px-4 py-3 bg-blue-50">£25,000</td>
                        <td className="px-4 py-3">£21,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Interest Rate</td>
                        <td className="px-4 py-3">RPI to RPI + 3%</td>
                        <td className="px-4 py-3 bg-blue-50">RPI only</td>
                        <td className="px-4 py-3">RPI + 3%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Written Off After</td>
                        <td className="px-4 py-3">30 years</td>
                        <td className="px-4 py-3 bg-blue-50">40 years</td>
                        <td className="px-4 py-3">30 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <Link
                    href="/compare/plan-2-vs-plan-5/"
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Compare Plan 2 vs Plan 5
                  </Link>
                  <Link
                    href="/guides/postgraduate-loans-uk-strategy/"
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Postgraduate Loans Strategy
                  </Link>
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
                      <h3 className="text-sm font-medium text-gray-800">
                        Are Plan 5 loans better or worse than Plan 2?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        It depends on your future earnings. High earners (£50,000+) may benefit from Plan 5 due to lower
                        interest rates, potentially paying less overall. However, middle and lower earners will likely pay
                        more under Plan 5 due to the lower repayment threshold and longer repayment period. Use our{" "}
                        <Link className="text-blue-600 hover:underline" href="/compare/plan-2-vs-plan-5/">
                          Plan 2 vs Plan 5 comparison calculator
                        </Link>{" "}
                        to see which would be better for your circumstances.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">Can I pay off my Plan 5 loan early?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Yes, you can make voluntary repayments at any time. With Plan 5&apos;s lower interest rate, early
                        repayment might make more financial sense for high earners compared to Plan 2. However, for many
                        graduates, it may still not be advantageous to overpay, especially if you&apos;re unlikely to repay
                        the full amount before the 40-year write-off. Use our{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/student-loan-overpayment-calculator/">
                          overpayment calculator
                        </Link>{" "}
                        to see if this makes sense for you.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        If I started before 2023 but haven&apos;t graduated yet, which plan will I be on?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        If you started your course before September 2023, you will remain on Plan 2, even if you haven&apos;t
                        graduated yet. Plan 5 only applies to new students who started their course from September 2023
                        onwards.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/faqs/"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                  >
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

              {/* CTA */}
              <section className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Plan 5 Repayments</h2>
                    <p className="text-lg text-blue-100">
                      Use our calculator to see exactly how your Plan 5 loan will affect your monthly budget
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        href="/calculators/plan-5-student-loan-calculator/"
                      >
                        Try Our Calculator
                      </Link>
                      <Link
                        className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                        href="/compare/plan-2-vs-plan-5/"
                      >
                        Compare With Plan 2
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related resources */}
              <section className="max-w-6xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Related Resources
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/guides/how-student-loans-work-uk/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
                    <p className="text-gray-600 text-sm">A comprehensive guide to the entire UK student loan system</p>
                  </Link>

                  <Link
                    href="/calculators/monthly-repayment-calculator/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-green-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly Repayment Calculator</h3>
                    <p className="text-gray-600 text-sm">
                      Compare monthly repayments across all loan plans based on your salary
                    </p>
                  </Link>

                  <Link
                    href="/guides/plan-5-student-loans-uk-optimization/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 5 Student Loans UK Optimization</h3>
                    <p className="text-gray-600 text-sm">How different loan plans compare for different earners</p>
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