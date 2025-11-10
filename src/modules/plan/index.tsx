import Link from "next/link";

export default function PlansPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Hero */}
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
                    <span className="font-medium text-gray-800" aria-current="page">
                      Plans
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                UK Student Loan Plans Explained
              </h1>
              <p className="text-xl text-gray-600">
                Compare the different student loan plans available in the UK to understand which applies to you and how
                they work.
              </p>
            </div>
          </section>

          {/* Plans table */}
          <section className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-md">
                <thead>
                  <tr className="bg-gray-50 border-b text-left">
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Plan Type</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Who It Applies To</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Repayment Threshold</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Interest Rate</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Write-off Period</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700" aria-label="Details"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-800">Plan 1</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      English/Welsh students who started before Sept 2012
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">£22,015 per year</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      RPI or Bank of England base rate + 1% (whichever is lower)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">25 years from repayment start date</td>
                    <td className="px-6 py-4 text-sm">
                      <Link className="text-blue-600 hover:text-blue-800" href="/plans/plan-1/">
                        Details →
                      </Link>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-800">Plan 2</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      English/Welsh students who started between Sept 2012 - Aug 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">£27,295 per year</td>
                    <td className="px-6 py-4 text-sm text-gray-600">RPI to RPI + 3% depending on income</td>
                    <td className="px-6 py-4 text-sm text-gray-600">30 years from repayment start date</td>
                    <td className="px-6 py-4 text-sm">
                      <Link className="text-blue-600 hover:text-blue-800" href="/plans/plan-2/">
                        Details →
                      </Link>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-800">Plan 4</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Scottish students who started after Sept 1998</td>
                    <td className="px-6 py-4 text-sm text-gray-600">£27,660 per year</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      RPI or Bank of England base rate + 1% (whichever is lower)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">30 years from repayment start date</td>
                    <td className="px-6 py-4 text-sm">
                      <Link className="text-blue-600 hover:text-blue-800" href="/plans/plan-4/">
                        Details →
                      </Link>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-800">Plan 5</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      English/Welsh students who started from Sept 2023 onwards
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">£25,000 per year</td>
                    <td className="px-6 py-4 text-sm text-gray-600">RPI + 0% during studies, then varies with RPI</td>
                    <td className="px-6 py-4 text-sm text-gray-600">40 years from repayment start date</td>
                    <td className="px-6 py-4 text-sm">
                      <Link className="text-blue-600 hover:text-blue-800" href="/plans/plan-5/">
                        Details →
                      </Link>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-800">Postgraduate Loan</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">Students on Master&apos;s or PhD courses</td>
                    <td className="px-6 py-4 text-sm text-gray-600">£21,000 per year</td>
                    <td className="px-6 py-4 text-sm text-gray-600">RPI + 3%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">30 years from repayment start date</td>
                    <td className="px-6 py-4 text-sm">
                      <Link className="text-blue-600 hover:text-blue-800" href="/plans/postgraduate-loan/">
                        Details →
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Help choosing a plan */}
          <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Sure Which Plan Applies to You?</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                Your student loan plan type depends on when and where you studied. If you&apos;re unsure which plan
                you&apos;re on:
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Check your payslip — it should mention your plan type if you&apos;re making repayments</li>
                  <li>
                    Log in to your{" "}
                    <a
                      href="https://www.gov.uk/sign-in-to-manage-your-student-loan-balance"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      online student loan account
                    </a>
                  </li>
                  <li>
                    Contact the{" "}
                    <a
                      href="https://www.gov.uk/contact-student-loans-company"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Student Loans Company
                    </a>{" "}
                    directly
                  </li>
                </ul>
              </div>

              <p className="text-gray-600">
                If you studied at different times, you might have multiple loan plans. Use our{" "}
                <Link className="text-blue-600 hover:underline" href="/calculators/combined-repayment-calculator/">
                  Combined Repayment Calculator
                </Link>{" "}
                to understand how multiple loans are repaid.
              </p>
            </div>
          </section>

          {/* Key differences */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Differences Between Student Loan Plans</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Repayment Rate</h3>
                <p className="text-gray-600 mb-2">
                  All undergraduate loans (Plan 1, 2, 4, and 5) use the same repayment rate of 9% on income above the
                  threshold.
                </p>
                <p className="text-gray-600">Postgraduate loans use a 6% repayment rate on income above £21,000.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Interest Rates</h3>
                <p className="text-gray-600 mb-2">Interest rates vary significantly between plans:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Plan 1 &amp; 4: Lower rates based on RPI or Bank of England base rate + 1% (whichever is lower)</li>
                  <li>Plan 2: Higher variable rates from RPI to RPI + 3%</li>
                  <li>Plan 5: RPI + 0% while studying, then varies with RPI</li>
                  <li>Postgraduate: Fixed at RPI + 3%</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Write-off Periods</h3>
                <p className="text-gray-600 mb-2">Any remaining loan balance is cancelled after:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Plan 1: 25 years</li>
                  <li>Plan 2, 4 &amp; Postgraduate: 30 years</li>
                  <li>Plan 5: 40 years</li>
                </ul>
                <p className="text-gray-600 mt-2">The longer write-off period for Plan 5 means more graduates will repay in full.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Loan Repayments</h2>
              <p className="text-lg text-blue-100">
                Use our suite of calculators to understand exactly how much you&apos;ll repay each month and over the
                lifetime of your loan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                  href="/calculators/"
                >
                  View All Calculators
                </Link>
                <Link
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                  href="/guides/how-student-loans-work-uk/"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
