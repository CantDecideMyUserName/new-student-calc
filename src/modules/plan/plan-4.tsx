import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function Plan4Content() {
  const tocItems = [
    { id: "overview", title: "What is Plan 4?", level: 2 },
    { id: "repayments", title: "Plan 4 Repayments", level: 2 },
    { id: "interest-rates", title: "Interest Rates", level: 2 },
    { id: "comparison", title: "Plan 4 vs Other Plans", level: 2 },
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
                      Plan 4
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Plan 4 Student Loans Explained
              </h1>
              <p className="text-xl text-gray-600">
                Everything you need to know about Plan 4 student loans for Scottish students, including repayment
                thresholds and interest rates.
              </p>
            </div>
          </section>

          {/* Key Details */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Plan 4 Key Details</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1">Repayment Threshold</h3>
                    <p className="text-gray-700 text-lg">£27,660 per year</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1">Interest Rate</h3>
                    <p className="text-gray-700 text-lg">RPI or 1.5%</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1">Written Off After</h3>
                    <p className="text-gray-700 text-lg">30 years</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1">Who Has This Plan</h3>
                    <p className="text-gray-700">Scottish students</p>
                  </div>
                </div>
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
              {/* Overview */}
              <section id="overview" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  What is Plan 4?
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    Plan 4 student loans are specifically for students who normally live in Scotland and study at Scottish
                    universities. This plan was introduced alongside the other UK student loan plans but has distinct features
                    tailored to the Scottish education system.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Who Has Plan 4 Loans?</h3>
                  <p className="leading-relaxed mb-3">
                    You&apos;ll have a Plan 4 loan if:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>You lived in Scotland when you started your course</li>
                    <li>You took out your first student loan on or after September 1998</li>
                    <li>You studied at a Scottish university or college</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Features</h3>
                  <p className="leading-relaxed mb-3">
                    Like other UK student loan plans, Plan 4 is income-contingent, meaning:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>You only repay when earning above the threshold</li>
                    <li>Repayments are automatically deducted through PAYE</li>
                    <li>The loan is written off after 30 years</li>
                    <li>Your loan doesn&apos;t affect your credit score</li>
                  </ul>
                </div>
              </section>

              {/* Repayments */}
              <section id="repayments" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 4 Repayments
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How Much Will You Repay?</h3>
                  <p className="leading-relaxed mb-3">
                    For Plan 4 loans, you repay 9% of your income above the threshold of £27,660 per year. Here&apos;s how to
                    calculate your repayment:
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Example Calculation</h4>
                    <p className="text-sm mb-2">For someone earning £35,000 per year:</p>
                    <ul className="list-none space-y-1 text-sm">
                      <li>Annual salary: £35,000</li>
                      <li>Minus threshold: £35,000 - £27,660 = £7,340</li>
                      <li>Multiply by 9%: £7,340 × 0.09 = £660.60 per year</li>
                      <li>
                        Divide by 12: £660.60 ÷ 12 = <strong>£55.05 per month</strong>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayment Table</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Annual Salary</th>
                          <th className="border px-4 py-2 text-left">Monthly Repayment</th>
                          <th className="border px-4 py-2 text-left">Annual Repayment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">£25,000</td>
                          <td className="border px-4 py-2">£0</td>
                          <td className="border px-4 py-2">£0</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">£30,000</td>
                          <td className="border px-4 py-2">£17.55</td>
                          <td className="border px-4 py-2">£210.60</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">£35,000</td>
                          <td className="border px-4 py-2">£55.05</td>
                          <td className="border px-4 py-2">£660.60</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">£40,000</td>
                          <td className="border px-4 py-2">£92.55</td>
                          <td className="border px-4 py-2">£1,110.60</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">£50,000</td>
                          <td className="border px-4 py-2">£167.55</td>
                          <td className="border px-4 py-2">£2,010.60</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Interest Rates */}
              <section id="interest-rates" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Interest Rates
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    Plan 4 loans have a relatively straightforward interest rate structure. The interest rate is set at the
                    lower of:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>The Retail Price Index (RPI), or</li>
                    <li>1.5%</li>
                  </ul>

                  <p className="leading-relaxed mb-4">
                    This means your interest rate is capped at a maximum of 1.5%, regardless of inflation. During periods of
                    low inflation, the rate will be even lower.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                    <p className="font-medium text-blue-800 text-sm mb-1">Current Plan 4 Interest Rate</p>
                    <p className="text-blue-800 text-sm">
                      As of 2023/24, the Plan 4 interest rate is 1.5%. Unlike Plan 2 loans, Plan 4 interest rates do not
                      vary based on your income.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Plan 4 Interest Rates Are Lower</h3>
                  <p className="leading-relaxed mb-4">
                    Plan 4 typically has one of the lowest interest rates among UK student loan plans. The 1.5% cap means
                    Scottish students benefit from lower interest charges compared to Plan 2 borrowers, who can face rates of
                    up to RPI+3%.
                  </p>
                </div>
              </section>

              {/* Comparison */}
              <section id="comparison" className="max-w-6xl mx-auto mb-8 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 4 vs Other Plans
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    Here&apos;s how Plan 4 compares to other UK student loan plans:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-2 text-left">Feature</th>
                          <th className="border px-4 py-2 text-left">Plan 1</th>
                          <th className="border px-4 py-2 text-left">Plan 2</th>
                          <th className="border px-4 py-2 text-left bg-blue-50">Plan 4</th>
                          <th className="border px-4 py-2 text-left">Plan 5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-medium">Threshold</td>
                          <td className="border px-4 py-2">£22,015</td>
                          <td className="border px-4 py-2">£27,295</td>
                          <td className="border px-4 py-2 bg-blue-50">£27,660</td>
                          <td className="border px-4 py-2">£25,000</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-medium">Interest</td>
                          <td className="border px-4 py-2">RPI or Base+1%</td>
                          <td className="border px-4 py-2">RPI to RPI+3%</td>
                          <td className="border px-4 py-2 bg-blue-50">RPI or 1.5%</td>
                          <td className="border px-4 py-2">RPI</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-medium">Write-off</td>
                          <td className="border px-4 py-2">25 years</td>
                          <td className="border px-4 py-2">30 years</td>
                          <td className="border px-4 py-2 bg-blue-50">30 years</td>
                          <td className="border px-4 py-2">40 years</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-medium">Location</td>
                          <td className="border px-4 py-2">Pre-2012 England/Wales</td>
                          <td className="border px-4 py-2">2012-2023 England/Wales</td>
                          <td className="border px-4 py-2 bg-blue-50">Scotland</td>
                          <td className="border px-4 py-2">Post-2023 England/Wales</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Advantages of Plan 4</h3>
                  <ul className="list-disc ml-6 space-y-1 mb-4 text-sm">
                    <li>
                      <strong>Lower interest rate:</strong> The 1.5% cap is more favorable than Plan 2&apos;s RPI+3%
                    </li>
                    <li>
                      <strong>Higher threshold:</strong> You start repaying at £27,660, higher than Plan 1 and Plan 5
                    </li>
                    <li>
                      <strong>30-year write-off:</strong> Shorter than Plan 5&apos;s 40 years
                    </li>
                  </ul>
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
                        Can I pay off my Plan 4 loan early?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Yes, you can make voluntary repayments at any time. Given Plan 4&apos;s relatively low interest rate
                        (capped at 1.5%), paying off early may not provide significant savings for most borrowers unless
                        you&apos;re certain you&apos;ll repay in full before the 30-year write-off.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        What happens to my Plan 4 loan if I move to England?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Your loan plan doesn&apos;t change if you move within the UK. You&apos;ll continue to repay according to
                        Plan 4 terms regardless of where you live or work in the UK. Your employer will continue to deduct
                        repayments through PAYE using the Plan 4 threshold.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        How does Plan 4 compare to tuition fees in Scotland?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        Scottish students studying in Scotland typically don&apos;t pay tuition fees directly, as these are
                        covered by the Student Awards Agency Scotland (SAAS). Plan 4 loans primarily cover living costs
                        (maintenance). If Scottish students study elsewhere in the UK, they may pay tuition fees and borrow
                        more.
                      </p>
                    </div>
                  </details>

                  <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      <h3 className="text-sm font-medium text-gray-800">
                        Does my Plan 4 loan affect my credit score?
                      </h3>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 text-sm">
                        No, your student loan does not appear on your credit file and does not affect your credit score.
                        However, lenders may consider your student loan repayments when assessing affordability for mortgages
                        or other loans.
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

              {/* CTA */}
              <section className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Plan 4 Repayments</h2>
                    <p className="text-lg text-blue-100">
                      Use our calculators to see how Plan 4 loans will affect your finances
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        href="/calculators/plan-4-student-loan-calculator/"
                      >
                        Try Our Plan 4 Calculator
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related Resources */}
              <section className="max-w-6xl mx-auto mb-8">
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
                    <p className="text-gray-600 text-sm">Understanding the UK student loan system</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/guides/crossing-student-loan-thresholds-uk/"
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loan Thresholds</h3>
                    <p className="text-gray-600 text-sm">Current repayment thresholds for all plans</p>
                  </Link>

                  <Link
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                    href="/plans/"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Compare All Plans</h3>
                    <p className="text-gray-600 text-sm">See how all UK student loan plans compare</p>
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