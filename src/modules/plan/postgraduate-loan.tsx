import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function PostgraduateLoanContent() {
  const tocItems = [
    { id: "how-it-works", title: "How Postgraduate Loans Work", level: 2 },
    { id: "eligibility", title: "Eligibility Requirements", level: 3 },
    { id: "repayment-terms", title: "Repayment Terms", level: 3 },
    { id: "differences", title: "Differences Between Master's and Doctoral Loans", level: 3 },
    { id: "regional", title: "Regional Differences", level: 2 },
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <Link className="hover:text-blue-700 hover:underline" href="/plans/">
                      Plans
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <span className="font-medium text-gray-800" aria-current="page">
                      Postgraduate Loan
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Postgraduate Student Loans UK</h1>
              <p className="text-xl text-gray-600">
                Everything you need to know about Postgraduate Master&apos;s and Doctoral loans, including how repayments work and who is eligible.
              </p>
            </div>
          </section>

          {/* At a glance */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Postgraduate Loans at a Glance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Master&apos;s Loan</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Up to <strong>£12,167</strong> (2023/24) total loan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Paid directly to you in three installments each year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Can be used for tuition fees and living costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Repay 6% of income above £21,000 threshold</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Written off 30 years after becoming eligible to repay</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Doctoral Loan</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Up to <strong>£27,892</strong> (2023/24) total loan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Paid directly to you in installments across your course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Can be used for tuition fees and living costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Repay 6% of income above £21,000 threshold</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Written off 30 years after becoming eligible to repay</span>
                  </li>
                </ul>
              </div>
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
                <div className="prose max-w-none text-gray-700">
                  <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    How Postgraduate Loans Work
                  </h2>
                  <p className="leading-relaxed mb-4 text-sm">
                    Postgraduate loans were introduced in 2016 for Master&apos;s courses and 2018 for Doctoral courses to help more people access higher education
                    beyond undergraduate level. Unlike undergraduate loans, postgraduate funding works as a contribution toward costs rather than covering specific
                    fees.
                  </p>

                  <h3 id="eligibility" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-24">Eligibility Requirements</h3>
                  <p className="leading-relaxed mb-3 text-sm">To qualify for a UK postgraduate loan, you generally need to:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>Be under 60 years old when starting your course</li>
                    <li>Be a UK or Irish national, or have settled/pre-settled status</li>
                    <li>Normally live in England (different arrangements exist for Scotland, Wales, and Northern Ireland)</li>
                    <li>Not already have an equivalent or higher-level qualification</li>
                    <li>Be studying at an eligible university or college</li>
                    <li>Be on a full Master&apos;s degree course (taught or research) or a Doctoral program</li>
                  </ul>

                  <h3 id="repayment-terms" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-24">Repayment Terms</h3>
                  <p className="leading-relaxed mb-3 text-sm">Postgraduate loans have some key differences from undergraduate loans:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>
                      <strong>Repayment threshold:</strong> You repay 6% of your income above £21,000 per year (this threshold has been frozen since introduction)
                    </li>
                    <li>
                      <strong>Interest rate:</strong> RPI + 3% during and after your studies (same as the maximum rate for Plan 2 undergraduate loans)
                    </li>
                    <li>
                      <strong>Concurrent repayments:</strong> If you also have an undergraduate loan, you&apos;ll repay both simultaneously (which can mean 15% of
                      income above thresholds for Plan 2 + Postgraduate loan holders)
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Example: Combined Undergraduate and Postgraduate Repayments</h4>
                    <p className="text-sm mb-2">For someone earning £35,000 per year with both Plan 2 and Postgraduate loans:</p>
                    <ul className="list-none space-y-1 text-sm">
                      <li><strong>Plan 2 repayment:</strong> 9% of (£35,000 - £27,295) = £694.65/year</li>
                      <li><strong>Postgraduate repayment:</strong> 6% of (£35,000 - £21,000) = £840/year</li>
                      <li><strong>Total annual repayment:</strong> £1,534.65 (£127.89/month)</li>
                    </ul>
                  </div>

                  <h3 id="differences" className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-24">Differences Between Master&apos;s and Doctoral Loans</h3>
                  <p className="leading-relaxed mb-3 text-sm">While both loans have identical repayment terms, they differ in maximum amounts and payment structures:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>
                      <strong>Master&apos;s loans:</strong> For courses lasting 1–2 years, with payments divided equally across each year
                    </li>
                    <li>
                      <strong>Doctoral loans:</strong> For courses lasting 3–8 years, with payments divided across the course length, up to a maximum of 8 academic
                      years
                    </li>
                  </ul>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Feature</th>
                          <th className="border px-4 py-2 text-left">Master&apos;s Loan</th>
                          <th className="border px-4 py-2 text-left">Doctoral Loan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-medium">Maximum Amount</td>
                          <td className="border px-4 py-2">£12,167</td>
                          <td className="border px-4 py-2">£27,892</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-medium">Course Duration</td>
                          <td className="border px-4 py-2">1-2 years</td>
                          <td className="border px-4 py-2">3-8 years</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-medium">Repayment Rate</td>
                          <td className="border px-4 py-2">6% above £21,000</td>
                          <td className="border px-4 py-2">6% above £21,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-medium">Interest Rate</td>
                          <td className="border px-4 py-2">RPI + 3%</td>
                          <td className="border px-4 py-2">RPI + 3%</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-medium">Write-off Period</td>
                          <td className="border px-4 py-2">30 years</td>
                          <td className="border px-4 py-2">30 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Regional Differences */}
              <section id="regional" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Regional Differences</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="leading-relaxed mb-4 text-sm">Different UK nations have their own postgraduate funding schemes:</p>

                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</h4>
                      <p className="text-sm text-gray-700">
                        The Student Awards Agency Scotland (SAAS) offers tuition fee loans of up to £5,500 for Scottish/EU students, plus
                        living cost loans for Scottish students
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</h4>
                      <p className="text-sm text-gray-700">
                        Student Finance Wales offers a combined grant and loan of up to £18,025 for Welsh students, with a portion as
                        non-repayable grant
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Northern Ireland</h4>
                      <p className="text-sm text-gray-700">
                        Tuition fee loans of up to £5,500 are available for Northern Irish students
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section className="max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        Can I get a postgraduate loan if I already have an undergraduate loan?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Yes, you can have both an undergraduate and postgraduate loan at the same time. You&apos;ll repay both loans
                        simultaneously once you&apos;re earning above both thresholds. This means you could be repaying up to 15% of your income
                        above the thresholds (9% for undergraduate + 6% for postgraduate).
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        Does the postgraduate loan cover my tuition fees?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        The postgraduate loan is paid directly to you, not to your university. You can use it to cover tuition fees, living
                        costs, or a combination of both. However, the maximum amount (£12,167 for Master&apos;s or £27,892 for Doctoral) may not
                        cover all your costs, especially if tuition fees are high.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        What&apos;s the interest rate on postgraduate loans?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Postgraduate loans charge RPI + 3% interest from the day you receive your first payment. This is the same as the maximum
                        rate charged on Plan 2 undergraduate loans. Unlike Plan 2 loans, the postgraduate loan interest rate doesn&apos;t vary
                        based on your income.
                      </p>
                    </div>
                  </details>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                    <p className="text-lg text-blue-100">See how postgraduate loan repayments will affect your monthly income</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        href="/calculators/student-loan-income-comparison/"
                      >
                        Use Our Calculator
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related resources */}
              <section className="max-w-6xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/compare/undergraduate-vs-postgraduate/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Postgraduate Loans UK Strategy</h3>
                    <p className="text-gray-600 text-sm">
                      Complete guide to UK postgraduate loans. How Master&apos;s and Doctoral loans interact with undergraduate debt, thresholds, and repayment strategies.
                    </p>
                  </Link>

                  <Link
                    href="/guides/student-loans-high-earners/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans for High Earners</h3>
                    <p className="text-gray-600 text-sm">
                      How postgraduate and undergraduate loan repayments affect high-income professionals.
                    </p>
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