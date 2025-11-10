import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function HowStudentLoansWorkUKPage() {
  const tocItems = [
    { id: "plan-types", title: "UK Student Loan Plan Types", level: 2 },
    { id: "repayments", title: "How Student Loan Repayments Work", level: 2 },
    { id: "interest", title: "Student Loan Interest Rates Explained", level: 2 },
    { id: "early-repayment", title: "Early Repayment & Loan Write-Off", level: 2 },
    { id: "special-circumstances", title: "Special Circumstances", level: 2 },
    { id: "myths", title: "Common Myths & Misconceptions", level: 2 },
  ];

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 pb-16">
          {/* Hero / Breadcrumbs */}
          <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
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
                      How Student Loans Work
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                How Student Loans Work in the UK
              </h1>
              <p className="text-xl text-gray-600">
                A comprehensive guide to the UK student loan system for all plan types
              </p>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
            <TableOfContents items={tocItems} />
          </div>
          <div className="lg:flex lg:gap-8 relative">
            {/* Main Content */}
            <div className="lg:flex-1 lg:min-w-0">
              {/* Intro */}
              <section className="max-w-4xl mx-auto mb-12">
                <div className="prose max-w-none text-gray-600">
                  <p className="lead text-lg">
                    UK student loans are fundamentally different from other types of borrowing. They function more like a
                    graduate tax than a traditional loan, with repayments contingent on income and automatic write-off after
                    a set period.
                  </p>
                  <p>
                    This guide explains how all aspects of UK student loans work, including the different plan types,
                    repayment mechanisms, interest calculations, and long-term implications for graduates.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Note: This guide covers England and Wales student finance primarily. While Scotland (Plan 4) and
                      Northern Ireland (Plan 1) have some differences, the core repayment mechanics are similar.
                    </p>
                  </div>
                </div>
              </section>

              {/* Plan Types */}
              <section id="plan-types" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  UK Student Loan Plan Types
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>There are currently five main student loan plans in the UK, determined by when and where you studied:</p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Plan Type</th>
                          <th className="px-4 py-3 text-left text-gray-800">Who Has It</th>
                          <th className="px-4 py-3 text-left text-gray-800">Repayment Threshold</th>
                          <th className="px-4 py-3 text-left text-gray-800">Interest Rate</th>
                          <th className="px-4 py-3 text-left text-gray-800">Written Off After</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">
                            <Link href="/plans/plan-1/" className="text-blue-600 hover:underline">
                              Plan 1
                            </Link>
                          </td>
                          <td className="px-4 py-3">Students who started before Sept 2012 in England/Wales, or NI students</td>
                          <td className="px-4 py-3">£22,015</td>
                          <td className="px-4 py-3">Lower of RPI or Bank Rate + 1%</td>
                          <td className="px-4 py-3">25 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">
                            <Link href="/plans/plan-2/" className="text-blue-600 hover:underline">
                              Plan 2
                            </Link>
                          </td>
                          <td className="px-4 py-3">England/Wales students who started between 2012-2023</td>
                          <td className="px-4 py-3">£27,295</td>
                          <td className="px-4 py-3">RPI to RPI + 3%</td>
                          <td className="px-4 py-3">30 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">
                            <Link href="/plans/plan-4/" className="text-blue-600 hover:underline">
                              Plan 4
                            </Link>
                          </td>
                          <td className="px-4 py-3">Scottish students</td>
                          <td className="px-4 py-3">£27,660</td>
                          <td className="px-4 py-3">RPI or 1.5%</td>
                          <td className="px-4 py-3">30 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">
                            <Link href="/plans/plan-5/" className="text-blue-600 hover:underline">
                              Plan 5
                            </Link>
                          </td>
                          <td className="px-4 py-3">England/Wales students who started from Sept 2023</td>
                          <td className="px-4 py-3">£25,000</td>
                          <td className="px-4 py-3">RPI only</td>
                          <td className="px-4 py-3">40 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">
                            <Link href="/plans/postgraduate-loan/" className="text-blue-600 hover:underline">
                              Postgraduate
                            </Link>
                          </td>
                          <td className="px-4 py-3">Master&apos;s and PhD students</td>
                          <td className="px-4 py-3">£21,000</td>
                          <td className="px-4 py-3">RPI + 3%</td>
                          <td className="px-4 py-3">30 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    You can have multiple loan plans if you&apos;ve studied different courses. For example, you might have a
                    Plan 2 undergraduate loan and a Postgraduate loan.
                  </p>
                </div>
              </section>

              {/* Repayments */}
              <section id="repayments" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Student Loan Repayments Work
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Repayment Process</h3>
                  <p>Unlike conventional loans, student loan repayments are:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Income-contingent:</strong> You only make repayments when your income exceeds the threshold for
                      your plan type
                    </li>
                    <li>
                      <strong>Automatically deducted:</strong> Repayments are taken directly from your salary through PAYE,
                      like income tax
                    </li>
                    <li>
                      <strong>Based on earnings, not borrowing:</strong> How much you repay depends on your income, not how
                      much you borrowed
                    </li>
                    <li>
                      <strong>Time-limited:</strong> Any remaining balance is written off after a specified period, regardless
                      of how much you&apos;ve repaid
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Calculating Your Repayments</h3>
                  <p>
                    For all plan types, repayments are calculated as <strong>9% of your income above the threshold</strong>.
                    If you have a postgraduate loan as well, you&apos;ll pay an additional 6% on income above the postgraduate
                    threshold.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example for Plan 2 (threshold £27,295):</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Annual salary: £35,000</li>
                      <li>Income above threshold: £35,000 - £27,295 = £7,705</li>
                      <li>Annual repayment: 9% of £7,705 = £693.45</li>
                      <li>Monthly repayment: £57.79</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example for Plan 5 (threshold £25,000):</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Annual salary: £35,000</li>
                      <li>Income above threshold: £35,000 - £25,000 = £10,000</li>
                      <li>Annual repayment: 9% of £10,000 = £900</li>
                      <li>Monthly repayment: £75</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">When Repayments Start</h3>
                  <p>
                    Repayments begin from the April after you graduate or leave your course, but only if your income is above
                    the threshold. If your income drops below the threshold at any point, repayments automatically stop.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">If You Have Multiple Loan Plans</h3>
                  <p>
                    If you have loans under different plans (e.g., Plan 2 and Postgraduate), you&apos;ll make repayments for
                    each loan when your income exceeds their respective thresholds:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example with Plan 2 and Postgraduate loans:</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Annual salary: £40,000</li>
                      <li>Plan 2 repayment: 9% of (£40,000 - £27,295) = 9% of £12,705 = £1,143.45 per year</li>
                      <li>Postgraduate repayment: 6% of (£40,000 - £21,000) = 6% of £19,000 = £1,140 per year</li>
                      <li>Total annual repayment: £2,283.45 (£190.29 monthly)</li>
                    </ul>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/combined-repayment-calculator/"
                    >
                      Try Our Combined Loans Calculator
                    </Link>
                  </div>
                </div>
              </section>

              {/* Interest */}
              <section id="interest" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Student Loan Interest Rates Explained
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Interest rates vary significantly between different plan types and can also vary based on your
                    circumstances and income. Most plans use the Retail Price Index (RPI) as a base for interest
                    calculations.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 1 Interest Rates</h3>
                  <p>
                    Plan 1 has the simplest interest rate structure: the lower of either the RPI rate or the Bank of England
                    base rate plus 1%. This is currently one of the lowest interest rates among all plan types.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 2 Interest Rates</h3>
                  <p>Plan 2 has a variable interest rate that depends on your income:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>While studying and until the April after graduation: RPI + 3%</li>
                    <li>After graduation, earning under £27,295: RPI only</li>
                    <li>Earning between £27,295 and £49,130: Interest increases gradually from RPI to RPI + 3%</li>
                    <li>Earning over £49,130: RPI + 3%</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 5 Interest Rates</h3>
                  <p>Plan 5 has a simplified interest rate structure compared to Plan 2:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>While studying and after graduation: RPI only (no added percentage)</li>
                  </ul>
                  <p>
                    This lower interest rate is one of the benefits of Plan 5 compared to Plan 2, particularly for higher
                    earners who might accumulate significant interest under Plan 2.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Postgraduate Loan Interest</h3>
                  <p>
                    Postgraduate loans have a fixed interest rate of RPI + 3%, regardless of income or whether you&apos;re
                    studying or have graduated.
                  </p>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/student-loan-interest-calculator/"
                    >
                      Calculate Your Loan Interest
                    </Link>
                  </div>
                </div>
              </section>

              {/* Early Repayment & Write-off */}
              <section id="early-repayment" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Early Repayment &amp; Loan Write-Off
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Should You Pay Your Loan Off Early?</h3>
                  <p>
                    You can make voluntary extra payments to your student loan at any time. However, for many graduates, this
                    may not be financially beneficial:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      If you&apos;re unlikely to pay off your loan before it&apos;s written off, making extra payments
                      effectively means paying money you wouldn&apos;t otherwise have had to pay
                    </li>
                    <li>The money might provide better returns if invested elsewhere or used to pay down higher-interest debts</li>
                    <li>
                      Unlike other loans, student loans don&apos;t affect your credit score and don&apos;t impact mortgage
                      applications in the same way as other debts
                    </li>
                  </ul>
                  <p>
                    Generally, early repayment makes the most sense for high earners with Plan 2 loans who are certain to pay
                    off their loan before the 30-year write-off period.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Loan Write-Off Periods</h3>
                  <p>All UK student loans are automatically written off after a set period, even if you haven&apos;t repaid a penny:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Plan 1: 25 years after repayments became due</li>
                    <li>Plan 2: 30 years after repayments became due</li>
                    <li>Plan 4: 30 years after repayments became due</li>
                    <li>Plan 5: 40 years after repayments became due</li>
                    <li>Postgraduate: 30 years after repayments became due</li>
                  </ul>
                  <p>Loans are also written off if you become permanently disabled or pass away.</p>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/loan-writeoff-checker/"
                    >
                      Check Your Loan Write-Off Date
                    </Link>
                  </div>
                </div>
              </section>

              {/* Special Circumstances */}
              <section id="special-circumstances" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Special Circumstances
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Moving Abroad</h3>
                  <p>
                    If you move overseas, you&apos;ll still need to repay your student loan. The repayment threshold will be
                    adjusted based on the cost of living in your new country of residence. You&apos;ll need to:
                  </p>
                  <ol className="list-decimal pl-6 mt-3 mb-6">
                    <li>Inform the Student Loans Company (SLC) that you&apos;re moving abroad</li>
                    <li>Complete an Overseas Income Assessment Form</li>
                    <li>Provide evidence of your income or means of support</li>
                  </ol>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Self-Employment &amp; Freelancing</h3>
                  <p>
                    If you&apos;re self-employed or have freelance income, you&apos;ll make student loan repayments through
                    your Self Assessment tax return. The same threshold and percentage apply as for employed graduates.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maternity Leave &amp; Career Breaks</h3>
                  <p>
                    During maternity leave or career breaks, repayments automatically stop if your income drops below the
                    threshold. There are no penalties for this, and interest will continue to accrue at the rate determined by
                    your circumstances.
                  </p>
                </div>
              </section>

              {/* Myths */}
              <section id="myths" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Common Myths &amp; Misconceptions
                </h2>

                <div className="space-y-4">
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-800">
                        &quot;Student loans affect your credit score&quot;
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        <strong>False.</strong> Student loans do not appear on your credit file and do not affect your credit
                        score. Lenders may ask about them when assessing affordability for mortgages, but they don&apos;t
                        impact your credit rating.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-800">
                        &quot;You have to pay even if you&apos;re earning below the threshold&quot;
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        <strong>False.</strong> You only make repayments when your income exceeds the threshold for your plan
                        type. If your income drops below the threshold, repayments automatically stop.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-800">
                        &quot;Most people will pay off their entire loan&quot;
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        <strong>False for many.</strong> Government figures suggest that only around 25% of Plan 2 borrowers
                        will fully repay their loans before they&apos;re written off. For Plan 5, estimates suggest more
                        borrowers will fully repay due to the lower interest rate and longer repayment period.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-lg font-medium text-gray-800">
                        &quot;You should pay off your student loan before saving&quot;
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        <strong>Often false.</strong> Unless you&apos;re a high earner likely to pay off your loan in full,
                        it&apos;s usually more financially advantageous to build emergency savings, contribute to a pension,
                        or invest rather than making voluntary loan repayments.
                      </p>
                    </div>
                  </details>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Loan Repayments</h2>
                  <p className="text-lg text-blue-100">
                    Use our suite of calculators to apply what you&apos;ve learned to your specific situation
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/"
                    >
                      Try Our Calculators
                    </Link>
                    <Link
                      className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                      href="/plans/"
                    >
                      Explore Loan Plans
                    </Link>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related Resources */}
              <section className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Related Resources
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/guides/loan-interest-explained/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Student Loan Interest</h3>
                    <p className="text-gray-600">An in-depth explanation of how interest accumulates on different loan types</p>
                  </Link>

                  <Link
                    href="/guides/should-i-overpay-loan/"
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Should You Overpay Your Loan?</h3>
                    <p className="text-gray-600">A detailed analysis of when making additional payments makes financial sense</p>
                  </Link>

                  <Link
                    href="/compare/plan-2-vs-plan-5/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 vs Plan 5 Comparison</h3>
                    <p className="text-gray-600">Compare the two most common loan plans for recent students</p>
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