import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function Plan1Content() {
  const tocItems = [
    { id: "how-it-works", title: "How Plan 1 Student Loans Work", level: 2 },
    { id: "repayment-calculations", title: "Plan 1 Repayment Calculations", level: 2 },
    { id: "interest-rates", title: "Plan 1 Interest Rates", level: 2 },
    { id: "write-off", title: "Plan 1 Loan Cancellation and Write-off", level: 2 },
    { id: "understanding-writeoffs", title: "Understanding Student Loan Write-Offs", level: 2 },
    { id: "comparison", title: "How Plan 1 Compares to Other Loan Plans", level: 2 },
    { id: "faqs", title: "Frequently Asked Questions about Plan 1 Loans", level: 2 },
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
                      Plan 1
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Plan 1 Student Loans</h1>
              <p className="text-xl text-gray-600">Complete guide to pre-2012 student loans in England and Wales</p>
            </div>
          </section>

          {/* At a Glance */}
          <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Plan 1 Loan at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Who has Plan 1?</h3>
                  <p className="text-gray-600 text-sm">
                    Students who started university before September 2012 in England or Wales, or Northern Irish students
                    at any time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Repayment Threshold</h3>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">£22,015 per year</span> (£1,834 monthly, £423 weekly)
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
                  <p className="text-gray-600 text-sm">Lower of RPI or Bank of England base rate plus 1%</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Written Off</h3>
                  <p className="text-gray-600 text-sm">
                    25 years after the April after graduation, or when you turn 65 (whichever comes first)
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">When Repayments Start</h3>
                  <p className="text-gray-600 text-sm">The April after leaving your course, and only when income is above the threshold</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                href="/calculators/plan-1-student-loan-calculator/"
              >
                Calculate Your Plan 1 Repayments
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
                  How Plan 1 Student Loans Work
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    <Link className="text-blue-600 hover:text-blue-800" href="/plans/">
                      Plan 1 student loans
                    </Link>{" "}
                    were provided to students who started university before September 2012 in England and Wales. They&apos;re
                    also the standard loan plan for all Northern Irish students regardless of when they studied. These loans
                    covered both tuition fees (which were lower, typically around £3,000 per year) and maintenance costs.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Features of Plan 1 Loans</h3>
                  <p className="leading-relaxed mb-3">
                    Like all UK student loans, Plan 1 repayments are income-contingent, meaning you only repay when earning
                    above the threshold. Key features that differentiate Plan 1 from newer plans include:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>Lower repayment threshold (£22,015 compared to £27,295 for Plan 2)</li>
                    <li>Lower interest rates (capped at the lower of RPI or Bank of England base rate plus 1%)</li>
                    <li>Shorter repayment period (25 years vs 30 years for Plan 2)</li>
                    <li>Generally smaller loan amounts (due to lower tuition fees)</li>
                  </ul>
                  <p className="leading-relaxed mb-4">
                    These differences mean that Plan 1 loans may be relatively easier to repay in full compared to the newer
                    loan plans, although the lower threshold means you&apos;ll start repaying sooner and at lower income
                    levels.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 1 Repayment Calculator</h3>
                  <p className="leading-relaxed">
                    To estimate your Plan 1 loan repayments, use our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/calculators/plan-1-student-loan-calculator/">
                      Plan 1 calculator
                    </Link>
                    . You can also check our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/calculators/total-loan-cost-calculator/">
                      Total Loan Cost Calculator
                    </Link>{" "}
                    to estimate whether you&apos;re likely to repay your loan in full before it&apos;s written off.
                  </p>
                </div>
              </section>

              {/* Calculations */}
              <section id="repayment-calculations" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 1 Repayment Calculations
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How Much Will You Repay Each Month?</h3>
                  <p className="leading-relaxed mb-3">
                    For Plan 1 loans, you repay 9% of your income above the threshold of £22,015 per year. Here&apos;s how to
                    calculate your monthly repayment:
                  </p>
                  <ol className="list-decimal ml-6 space-y-1 mb-6 text-sm">
                    <li>Take your annual salary before tax</li>
                    <li>Subtract the annual threshold (£22,015)</li>
                    <li>If the result is zero or negative, your repayment is £0</li>
                    <li>If positive, multiply by 9%</li>
                    <li>Divide by 12 to get your monthly repayment</li>
                  </ol>

                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Example Calculation</h4>
                    <p className="text-sm mb-2">For someone earning £30,000 per year:</p>
                    <ul className="list-none space-y-1 text-sm">
                      <li>Annual salary: £30,000</li>
                      <li>Minus threshold: £30,000 - £22,015 = £7,985</li>
                      <li>Multiply by 9%: £7,985 × 0.09 = £718.65 per year</li>
                      <li>
                        Divide by 12: £718.65 ÷ 12 = <strong>£59.89 per month</strong>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayment Table for Different Salaries</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Annual Salary</th>
                          <th className="border px-4 py-2 text-left">Monthly Plan 1 Repayment</th>
                          <th className="border px-4 py-2 text-left">Annual Plan 1 Repayment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">£20,000</td>
                          <td className="border px-4 py-2">£0</td>
                          <td className="border px-4 py-2">£0</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">£25,000</td>
                          <td className="border px-4 py-2">£22.40</td>
                          <td className="border px-4 py-2">£268.65</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">£30,000</td>
                          <td className="border px-4 py-2">£59.89</td>
                          <td className="border px-4 py-2">£718.65</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">£35,000</td>
                          <td className="border px-4 py-2">£97.38</td>
                          <td className="border px-4 py-2">£1,168.65</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">£40,000</td>
                          <td className="border px-4 py-2">£134.88</td>
                          <td className="border px-4 py-2">£1,618.65</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">£50,000</td>
                          <td className="border px-4 py-2">£209.86</td>
                          <td className="border px-4 py-2">£2,518.35</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm">
                    Note that Plan 1 repayments begin at a lower salary than other loan plans, which may impact your take-home
                    pay more significantly at lower income levels.
                  </p>
                </div>
              </section>

              {/* Interest */}
              <section id="interest-rates" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 1 Interest Rates
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-3">
                    One of the most favorable aspects of Plan 1 loans is their interest rate formula, which is typically lower
                    than that of newer plans. For Plan 1 loans, the interest rate is set at the lower of:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>The Retail Price Index (RPI) inflation rate, or</li>
                    <li>The Bank of England base rate plus 1%</li>
                  </ul>
                  <p className="leading-relaxed mb-4">
                    This means that during periods when the base rate is low, Plan 1 borrowers can benefit from very favorable
                    interest rates. Interest is calculated daily and applied to your balance monthly.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="font-medium text-yellow-800 text-sm mb-1">Current Plan 1 Interest Rate</p>
                    <p className="text-yellow-800 text-sm">
                      The current interest rate for Plan 1 loans is 7.1% (from September 2023). Interest rates are updated
                      annually, typically in September.
                    </p>
                  </div>

                  <p className="leading-relaxed mb-4">
                    Unlike Plan 2 and Plan 5 loans, Plan 1 interest rates do not vary based on your income. The same rate
                    applies to all Plan 1 borrowers regardless of salary.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Historical Plan 1 Interest Rates</h3>
                  <p className="leading-relaxed mb-3">
                    Plan 1 interest rates have varied considerably over time, reflecting changes in RPI and the Bank of
                    England base rate:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Time Period</th>
                          <th className="border px-4 py-2 text-left">Plan 1 Interest Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">Sep 2022 - Aug 2023</td>
                          <td className="border px-4 py-2">2.75%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">Sep 2021 - Aug 2022</td>
                          <td className="border px-4 py-2">1.1%</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Sep 2020 - Aug 2021</td>
                          <td className="border px-4 py-2">1.1%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">Sep 2019 - Aug 2020</td>
                          <td className="border px-4 py-2">1.75%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm">
                    For help understanding how interest affects your loan over time, try our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/calculators/student-loan-interest-calculator/">
                      Student Loan Interest Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Write-off & cancellation (Plan 1 specific) */}
              <section id="write-off" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 1 Loan Cancellation and Write-off
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-3">Plan 1 loans are automatically cancelled under the following conditions:</p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>
                      <strong>25 years after repayments began</strong> - typically the April after you graduated
                    </li>
                    <li>
                      <strong>When you reach age 65</strong> (whichever comes first)
                    </li>
                    <li>If you become permanently disabled and unable to work</li>
                    <li>If you pass away</li>
                  </ul>
                  <p className="leading-relaxed mb-4">
                    The 25-year cancellation period for Plan 1 is shorter than the 30-year period for Plan 2 and the 40-year
                    period for Plan 5, providing Plan 1 borrowers with earlier loan relief if they haven&apos;t repaid in full.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Calculate Your Write-off Date</h4>
                    <p className="text-gray-600 text-sm">
                      To find your specific write-off date, use our{" "}
                      <Link className="text-blue-600 hover:underline" href="/calculators/loan-writeoff-checker/">
                        Loan Write-off Checker
                      </Link>
                      . Simply enter your graduation year and loan plan to see when your loan will be automatically cancelled.
                    </p>
                  </div>
                </div>
              </section>

              {/* NEW: General write-off explainer (your requested extra section) */}
              <section id="understanding-writeoffs" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Understanding Student Loan Write-Offs
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    A key feature of the UK student loan system is that all loans are automatically written off after a set
                    period, regardless of how much you&apos;ve repaid or how much is left. This is sometimes called the
                    &quot;forgiveness period.&quot;
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How Write-Offs Work</h3>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>You&apos;ll no longer need to make any repayments</li>
                    <li>Any remaining balance is completely cleared</li>
                    <li>You&apos;ll receive confirmation from the Student Loans Company</li>
                    <li>The write-off happens automatically – you don&apos;t need to apply</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Different Plans, Different Write-Off Periods</h3>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>Plan 1: 25 years from the April after you finish your course</li>
                    <li>Plan 2: 30 years from the April after you finish your course</li>
                    <li>Plan 4: 30 years from the April after you finish your course</li>
                    <li>Plan 5: 40 years from the April after you finish your course</li>
                    <li>Postgraduate Loan: 30 years from the April after you finish your course</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Should You Wait for Write-Off?</h3>
                  <p className="leading-relaxed mb-4">
                    For many borrowers—especially those on Plan 2 and Plan 5 with moderate incomes—waiting for the loan to be
                    written off can be sensible. However, higher earners may repay in full before the write-off date. If that
                    could be you, consider modelling voluntary overpayments to reduce total interest.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 my-6">
                    <Link
                      href="/calculators/total-loan-cost-calculator/"
                      className="block rounded-lg border border-gray-200 p-4 hover:shadow-sm transition"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">Total Cost Calculator</h4>
                      <p className="text-sm text-gray-600">Calculate how much you&apos;ll pay before the write-off date</p>
                    </Link>
                    <Link
                      href="/calculators/student-loan-interest-calculator/"
                      className="block rounded-lg border border-gray-200 p-4 hover:shadow-sm transition"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">Interest Calculator</h4>
                      <p className="text-sm text-gray-600">See how interest accumulates until your write-off date</p>
                    </Link>
                    <Link
                      href="/calculators/student-loan-overpayment-calculator/"
                      className="block rounded-lg border border-gray-200 p-4 hover:shadow-sm transition"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">Overpayment Calculator</h4>
                      <p className="text-sm text-gray-600">Test if extra payments save you money overall</p>
                    </Link>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">FAQs</h3>
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden mb-3">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <span className="text-sm font-medium text-gray-800">When are student loans written off in the UK?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 text-gray-600 text-sm">
                      The write-off period depends on your plan (see list above). Timing starts from the April after you
                      complete your course.
                    </div>
                  </details>
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden mb-3">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <span className="text-sm font-medium text-gray-800">Do I need to apply for my loan to be written off?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 text-gray-600 text-sm">
                      No—write-off happens automatically. The Student Loans Company will confirm when your balance is
                      cancelled.
                    </div>
                  </details>
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <span className="text-sm font-medium text-gray-800">
                        Can I get partial loan forgiveness before the write-off date?
                      </span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 text-gray-600 text-sm">
                      The UK doesn&apos;t offer occupation-based partial forgiveness. The main exception is disability-related
                      cancellation if you become permanently unable to work.
                    </div>
                  </details>
                </div>
              </section>

              {/* Comparison */}
              <section id="comparison" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Plan 1 Compares to Other Loan Plans
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">Plan 1 has several differences compared to the newer loan plans. Here&apos;s a quick comparison:</p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Feature</th>
                          <th className="border px-4 py-2 text-left">Plan 1</th>
                          <th className="border px-4 py-2 text-left">Plan 2</th>
                          <th className="border px-4 py-2 text-left">Plan 5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">When introduced</td>
                          <td className="border px-4 py-2">Before 2012</td>
                          <td className="border px-4 py-2">2012-2023</td>
                          <td className="border px-4 py-2">From 2023</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">Repayment threshold</td>
                          <td className="border px-4 py-2">£22,015</td>
                          <td className="border px-4 py-2">£27,295</td>
                          <td className="border px-4 py-2">£25,000</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Interest rate</td>
                          <td className="border px-4 py-2">Lower of RPI or base rate+1%</td>
                          <td className="border px-4 py-2">RPI to RPI+3%</td>
                          <td className="border px-4 py-2">RPI only</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">Write-off period</td>
                          <td className="border px-4 py-2">25 years</td>
                          <td className="border px-4 py-2">30 years</td>
                          <td className="border px-4 py-2">40 years</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Typical loan size</td>
                          <td className="border px-4 py-2">£12,000-£25,000</td>
                          <td className="border px-4 py-2">£40,000-£60,000</td>
                          <td className="border px-4 py-2">£40,000-£60,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm">
                    For a detailed comparison between Plan 1 and Plan 2, visit our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/compare/plan-1-vs-plan-2/">
                      Plan 1 vs Plan 2 comparison page
                    </Link>
                    .
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What If I Have Multiple Loan Plans?</h3>
                  <p className="leading-relaxed mb-3">
                    If you studied for multiple qualifications (for example, an undergraduate degree before 2012 and a
                    postgraduate course after), you may have multiple loan plans. In this case:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>You&apos;ll make repayments toward both loans simultaneously</li>
                    <li>Each loan will follow its own repayment rules</li>
                    <li>Your effective repayment rate could be higher (e.g., 9% for Plan 1 plus 6% for a Postgraduate Loan)</li>
                  </ul>
                  <p className="text-sm">
                    Use our{" "}
                    <Link className="text-blue-600 hover:text-blue-800" href="/calculators/combined-repayment-calculator/">
                      Combined Repayment Calculator
                    </Link>{" "}
                    to understand how multiple loans affect your monthly repayments.
                  </p>
                </div>
              </section>

              {/* FAQs (Plan 1 specific) */}
              <section id="faqs" className="max-w-4xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Frequently Asked Questions about Plan 1 Loans
                </h2>
                <div className="space-y-4">
                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">Can I pay off my Plan 1 loan early?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Yes, you can make voluntary repayments at any time. For Plan 1 loans, with their lower interest rates
                        and shorter repayment terms, it may be financially advantageous to pay off early if you have the means
                        to do so. However, always consider your broader financial situation—paying off higher-interest debts or
                        building an emergency fund often takes priority.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">What happens to my Plan 1 loan if I move abroad?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        If you move abroad, you&apos;ll still be responsible for repaying your student loan. You&apos;ll need to
                        inform the Student Loans Company of your move and provide evidence of your income. The repayment
                        threshold will be adjusted based on the cost of living in your new country of residence. If you don&apos;t
                        keep the SLC informed, they may apply a default monthly repayment rate.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">Does my Plan 1 loan affect my credit score?</h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        No, your student loan does not appear on your credit file and does not affect your credit score.
                        However, lenders may consider your student loan repayments when assessing affordability for mortgages or
                        other loans.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        Can Plan 1 loans be written off if I declare bankruptcy?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        No, student loans (including Plan 1) cannot be written off through bankruptcy in the UK. They are
                        specifically excluded from debts that can be discharged through bankruptcy proceedings.
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
                    <h2 className="text-2xl md:text-3xl font-bold">Ready to Calculate Your Plan 1 Loan?</h2>
                    <p className="text-lg text-blue-100">
                      Use our calculators to see how much you&apos;re likely to repay and when your loan might be written off
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        href="/calculators/plan-1-student-loan-calculator/"
                      >
                        Plan 1 Calculator
                      </Link>
                      <Link
                        className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                        href="/calculators/total-loan-cost-calculator/"
                      >
                        Total Cost Calculator
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
                    href="/compare/plan-1-vs-plan-2/"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 1 vs Plan 2 Comparison</h3>
                    <p className="text-gray-600 text-sm">See how the different loan plans compare in terms of thresholds and interest</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/guides/crossing-student-loan-thresholds-uk/"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loan Thresholds</h3>
                    <p className="text-gray-600 text-sm">Current and historical repayment thresholds for all plans</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/guides/how-student-loans-work-uk/"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How Student Loans Work</h3>
                    <p className="text-gray-600 text-sm">A comprehensive overview of the UK student loan system</p>
                  </Link>
                </div>
              </section>

              {/* Related calculators */}
              <section className="max-w-6xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Calculators</h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/plan-1-student-loan-calculator/">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Plan 1 Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate monthly repayments</p>
                  </Link>
                  <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/total-loan-cost-calculator/">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Total Cost Calculator</h3>
                    <p className="text-sm text-gray-600">Estimate lifetime repayments</p>
                  </Link>
                  <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/loan-writeoff-checker/">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Loan Write-off Checker</h3>
                    <p className="text-sm text-gray-600">Find your write-off date</p>
                  </Link>
                  <Link className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 border border-gray-100" href="/calculators/combined-repayment-calculator/">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Combined Repayment Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate for multiple loans</p>
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