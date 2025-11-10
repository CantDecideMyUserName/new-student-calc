import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function LoanInterestExplainedPage() {
  const tocItems = [
    { id: "rpi-role", title: "The Role of RPI in Student Loan Interest", level: 2 },
    { id: "interest-by-plan", title: "Interest Rates by Plan Type", level: 2 },
    { id: "caps-market-rates", title: "Interest Rate Caps & Market Rates", level: 2 },
    { id: "interest-starts", title: "When Interest Starts Accruing", level: 2 },
    { id: "interest-calculation", title: "How Interest Is Calculated and Added", level: 2 },
    { id: "when-rates-dont-matter", title: "When Interest Rates Don't Matter", level: 2 },
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
                    <Link className="hover:text-blue-700 hover:underline" href="/">Home</Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                  <li>
                    <Link className="hover:text-blue-700 hover:underline" href="/guides">Guides</Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                  <li>
                    <span className="font-medium text-gray-800" aria-current="page">
                      Loan Interest Explained
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Understanding Student Loan Interest
              </h1>
              <p className="text-xl text-gray-600">
                A complete guide to how interest is calculated across all UK student loan plans
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
              <section className="mb-8">
                <div className="prose max-w-none text-gray-600">
                  <p className="lead text-lg">
                    Interest on student loans can be confusing, with different rules for each loan plan and
                    circumstances. Understanding how interest is calculated is crucial for making informed
                    decisions about your student loans.
                  </p>
                  <p>
                    This guide explains exactly how interest works across all UK student loan plans, how it
                    accumulates, and why it might matter less than you think for many borrowers.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                    <p className="font-medium">
                      Note: Interest rates are updated annually, typically in September, based on the RPI
                      figure from the previous March. This guide uses the most recent rates available.
                    </p>
                  </div>
                </div>
              </section>

              {/* RPI Section */}
              <section id="rpi-role" className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  The Role of RPI in Student Loan Interest
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Most UK student loan interest rates are based on the <strong>Retail Price Index (RPI)</strong>,
                    a measure of inflation that tracks the changing cost of a representative sample of retail
                    goods and services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What is RPI?</h3>
                  <p>
                    RPI is one of several measures of inflation used in the UK. Unlike the Consumer Price Index
                    (CPI), RPI includes housing costs like mortgage interest payments and council tax. RPI is
                    typically higher than CPI by around 0.7–1% per year.
                  </p>
                  <p>
                    For student loans, the RPI figure from March is used to set interest rates starting from the
                    following September. For example, the March 2023 RPI figure (around 2.6%) was used to set
                    student loan interest rates from September 2023 to August 2024.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Does RPI Matter?</h3>
                  <p>RPI forms the basis for all student loan interest calculations:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>For Plan 1, interest is the lower of RPI or the Bank of England base rate plus 1%</li>
                    <li>For Plan 2, interest ranges from RPI to RPI + 3% depending on income</li>
                    <li>For Plan 5, interest is fixed at RPI only</li>
                    <li>For Postgraduate loans, interest is fixed at RPI + 3%</li>
                  </ul>
                  <p>
                    When RPI increases, student loan interest rates increase as well, meaning your loan will grow
                    faster if you&apos;re not making repayments that cover at least the interest.
                  </p>
                </div>
              </section>

              {/* Interest by Plan */}
              <section id="interest-by-plan" className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Interest Rates by Plan Type
                </h2>
                <div className="prose max-w-none text-gray-600">
                  {/* Plan 1 */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 1 Interest Rates</h3>
                  <p>Plan 1 has the simplest interest structure of all student loan plans:</p>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium">Interest Rate: The lower of:</p>
                    <ul className="list-disc pl-6">
                      <li>The RPI inflation rate from March of the previous year</li>
                      <li>The Bank of England base rate + 1%</li>
                    </ul>
                  </div>
                  <p>
                    This approach provides a form of interest cap for Plan 1 borrowers. For example, when RPI
                    was high at 11.9% in March 2022, Plan 1 borrowers still paid just 4.5% interest (bank rate +
                    1% at that time), which was significantly lower.
                  </p>
                  <p>
                    The Plan 1 interest rate applies regardless of your income or whether you&apos;re studying or have
                    graduated.
                  </p>

                  {/* Plan 2 */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 2 Interest Rates</h3>
                  <p>
                    Plan 2 has the most complex interest structure, with rates that vary based on your
                    circumstances and income:
                  </p>
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-800">Circumstance</th>
                          <th className="px-4 py-2 text-left text-gray-800">Interest Rate</th>
                          <th className="px-4 py-2 text-left text-gray-800">Current Rate Example</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2">While studying and until the April after graduation</td>
                          <td className="px-4 py-2">RPI + 3%</td>
                          <td className="px-4 py-2">2.6% + 3% = 5.6%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">After graduation, earning under £27,295</td>
                          <td className="px-4 py-2">RPI only</td>
                          <td className="px-4 py-2">2.6%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Earning between £27,295 and £49,130</td>
                          <td className="px-4 py-2">Sliding scale from RPI to RPI + 3%</td>
                          <td className="px-4 py-2">2.6% to 5.6% (increases with income)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Earning over £49,130</td>
                          <td className="px-4 py-2">RPI + 3%</td>
                          <td className="px-4 py-2">2.6% + 3% = 5.6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    The sliding scale for middle-income earners is calculated proportionally based on where your
                    income falls in the range. For example, if you earn exactly halfway between the lower and
                    upper thresholds, your interest rate will be RPI + 1.5% (halfway between RPI and RPI + 3%).
                  </p>

                  {/* Plan 5 */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 5 Interest Rates</h3>
                  <p>
                    Plan 5, introduced for students starting university from September 2023, has a simplified
                    interest structure:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium">Interest Rate: RPI only</p>
                    <p>Current example: 2.6% (based on March 2023 RPI)</p>
                  </div>
                  <p>
                    Unlike Plan 2, the interest rate for Plan 5 does not vary based on your income or whether
                    you&apos;re studying or have graduated. This makes it easier to understand and predict growth in
                    your loan balance.
                  </p>
                  <p>
                    This lower interest rate is one of the benefits of Plan 5 compared to Plan 2, particularly
                    for higher earners or those with large loan balances, though it comes with other trade-offs
                    like a lower repayment threshold and longer repayment period.
                  </p>

                  {/* Postgrad */}
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Postgraduate Loan Interest Rates</h3>
                  <p>Postgraduate loans (for Master&apos;s and PhD study) have a fixed interest structure:</p>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium">Interest Rate: RPI + 3%</p>
                    <p>Current example: 2.6% + 3% = 5.6% (based on March 2023 RPI)</p>
                  </div>
                  <p>
                    This rate applies from the day the first payment is made to you until the loan is fully
                    repaid or written off. It does not vary based on income.
                  </p>
                </div>
              </section>

              {/* Caps & Market Rates */}
              <section id="caps-market-rates" className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Interest Rate Caps &amp; Market Rates
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    During periods of high inflation, there can be substantial gaps between student loan
                    interest rates and prevailing market interest rates. To address this, the government may
                    apply caps on student loan interest.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Prevailing Market Rate Cap</h3>
                  <p>
                    By law, student loan interest cannot exceed the &quot;prevailing market rate&quot; for comparable
                    unsecured personal loans. This is designed to prevent student loan interest from becoming
                    excessively high during periods of high inflation.
                  </p>
                  <p>
                    For example, when RPI reached 11.9% in March 2022, this would have meant Plan 2 and
                    Postgraduate loan interest rates of 14.9% (11.9% + 3%). The government instead applied a
                    cap, reducing the maximum interest rate to around 7.3%.
                  </p>
                  <p>These caps are applied automatically when necessary and do not require any action from borrowers.</p>
                </div>
              </section>

              {/* When Interest Starts Accruing */}
              <section id="interest-starts" className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  When Interest Starts Accruing
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    A common misconception is that interest only begins after graduation. In reality, interest
                    starts accruing on your student loan from the moment the first payment is made to you.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Interest During Study</h3>
                  <p>
                    For all plan types, interest begins accumulating at the relevant rate as soon as the Student
                    Loans Company makes the first payment to you or your university. This applies to both tuition
                    fee loans and maintenance loans.
                  </p>
                  <p>
                    For Plan 2 loans, this means interest accrues at RPI + 3% throughout your entire study
                    period, potentially adding thousands of pounds to your loan balance before you even graduate.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Example: Interest During a 3-Year Course (Plan 2)
                    </h4>
                    <ul className="list-disc pl-6">
                      <li>Total borrowed over 3 years: £50,000</li>
                      <li>Interest rate while studying: RPI + 3% (average of 5.5%)</li>
                      <li>Approximate interest accrued by graduation: £8,000+</li>
                    </ul>
                  </div>

                  <p>
                    While this initial interest can seem alarming, remember that it only impacts you financially
                    if you&apos;re likely to repay your loan in full before the write-off period.
                  </p>
                </div>
              </section>

              {/* How Interest Is Calculated */}
              <section id="interest-calculation" className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Interest Is Calculated and Added
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Student loan interest is calculated daily and added to your balance monthly. This means
                    compound interest applies – you&apos;ll pay interest on your interest.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Calculation Process</h3>
                  <ol className="list-decimal pl-6 mt-3 mb-6">
                    <li>Your annual interest rate is divided by 365 to give a daily rate</li>
                    <li>This daily rate is applied to your outstanding balance each day</li>
                    <li>At the end of each month, the interest is added to your balance</li>
                    <li>The next month&apos;s interest is calculated on this new, higher balance</li>
                  </ol>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <h4 className="font-medium text-gray-800 mb-2">Example: Monthly Interest Calculation (Plan 2)</h4>
                    <ul className="list-disc pl-6">
                      <li>Loan balance: £45,000</li>
                      <li>Interest rate: 5.5% (RPI + 3%)</li>
                      <li>Daily interest: £45,000 × (5.5% ÷ 365) = £6.78</li>
                      <li>Monthly interest (30 days): £6.78 × 30 = £203.40</li>
                      <li>New balance: £45,203.40</li>
                      <li>Next month&apos;s daily interest: £45,203.40 × (5.5% ÷ 365) = £6.81</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Income-Based Rate Changes</h3>
                  <p>
                    For Plan 2 loans, where the interest rate varies by income, the SLC reassesses your interest
                    rate at the end of each tax year based on your actual earnings. During the tax year, they use
                    an estimated interest rate, which may be adjusted retroactively once your actual earnings are
                    known.
                  </p>
                </div>
              </section>

              {/* When Rates Don't Matter */}
              <section id="when-rates-dont-matter" className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  When Interest Rates Don&apos;t Matter
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    One of the most important aspects of student loan interest to understand is that for many
                    borrowers, especially those with Plan 2 or Plan 5 loans, the interest rate has <strong>no
                      impact on how much they&apos;ll actually repay</strong>.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                    Why Interest Often Doesn&apos;t Affect Total Repayments
                  </h3>
                  <p>
                    You only repay based on your income (9% above threshold), not your balance. If you won&apos;t
                    repay your loan in full before it&apos;s written off, the interest rate is largely irrelevant to
                    your total repayment amount.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <h4 className="font-medium text-gray-800 mb-2">Example: Lower Earner with Plan 2 Loan</h4>
                    <ul className="list-disc pl-6">
                      <li>Loan balance at graduation: £50,000</li>
                      <li>Salary: £30,000, growing with inflation</li>
                      <li>Monthly repayment: approx. £20</li>
                      <li>Total repaid after 30 years: approx. £25,000</li>
                      <li>Loan written off: approx. £125,000 (including accumulated interest)</li>
                      <li>If interest rates were 0%: Would still repay the same £25,000</li>
                    </ul>
                  </div>

                  <p>
                    In this example, the interest rate could be 0% or 10% – it wouldn&apos;t change how much the
                    borrower actually repays, because their repayments are determined solely by their income.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">When Interest Rates Do Matter</h3>
                  <p>Interest rates become important in the following scenarios:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li><strong>High earners</strong> who will repay their loan in full before the write-off period</li>
                    <li>Borrowers considering <strong>voluntary extra payments</strong> to reduce their loan</li>
                    <li>Those concerned about the <strong>psychological impact</strong> of seeing a large loan balance</li>
                    <li>
                      When applying for <strong>mortgages or other loans</strong> where affordability assessments might
                      consider your student loan balance
                    </li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8 mb-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Loan Interest</h2>
                  <p className="text-lg text-blue-100">
                    See how interest affects your specific loan balance and repayment schedule
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/student-loan-interest-calculator"
                    >
                      Try Our Interest Calculator
                    </Link>
                    <Link
                      className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                      href="/calculators/total-loan-cost-calculator"
                    >
                      Calculate Lifetime Cost
                    </Link>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related Resources */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Related Resources
                </h2>
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
                    <p className="text-gray-600">Complete guide to the UK student loan system and repayment process</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/compare/plan-2-vs-plan-5/"
                  >
                    <div className="mb-4 text-green-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 vs Plan 5 Comparison</h3>
                    <p className="text-gray-600">Compare the interest structures of pre-2023 and post-2023 student loans</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/guides/should-i-overpay-loan/"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Should You Overpay Your Loan?</h3>
                    <p className="text-gray-600">
                      Analyze when making extra payments makes financial sense based on interest
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