import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function Page() {
  return <HighEarnersGuide />;
}

export function HighEarnersGuide() {
  const tocItems = [
    { id: "repayment-amounts", title: "Student Loan Repayment Amounts for High Incomes", level: 2 },
    { id: "interest-rates", title: "Interest Rates for High Earners", level: 2 },
    { id: "voluntary-repayments", title: "Should High Earners Make Voluntary Repayments?", level: 2 },
    { id: "tax-considerations", title: "Tax Considerations and Alternative Strategies", level: 2 },
  ];

  return (
    <main className="space-y-12 pb-16">
      {/* Hero / breadcrumb */}
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
                <Chevron />
              </li>
              <li>
                <Link className="hover:text-blue-700 hover:underline" href="/guides/">
                  Guides
                </Link>
              </li>
              <li className="flex items-center">
                <Chevron />
              </li>
              <li>
                <span className="font-medium text-gray-800" aria-current="page">
                  Student Loans for High Earners
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loans for High Earners
          </h1>
          <p className="text-xl text-gray-600">
            Essential guidance for graduates earning £50,000+ with UK student loans
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
                  As a high earner with a student loan, your financial situation differs significantly from
                  the average graduate. With a higher income comes accelerated repayments, different
                  interest dynamics, and more complex financial decisions regarding your student debt.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This guide focuses specifically on how student loans work for those earning £50,000 or
                  more, helping you understand the implications for your finances and whether voluntary
                  repayments might be beneficial at your income level.
                </p>
              </div>
            </section>

            {/* Repayments table */}
            <section id="repayment-amounts" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Student Loan Repayment Amounts for High Incomes
              </h2>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Monthly Repayments at Different Salary Levels
                </h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <Th>Salary</Th>
                        <Th>Plan 1</Th>
                        <Th>Plan 2</Th>
                        <Th>Plan 4</Th>
                        <Th>Plan 5</Th>
                        <Th>Postgrad</Th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <Tr>
                        <Td head>£50,000</Td>
                        <Td>£210</Td>
                        <Td>£170</Td>
                        <Td>£168</Td>
                        <Td>£188</Td>
                        <Td>£145</Td>
                      </Tr>
                      <Tr>
                        <Td head>£75,000</Td>
                        <Td>£397</Td>
                        <Td>£358</Td>
                        <Td>£356</Td>
                        <Td>£375</Td>
                        <Td>£270</Td>
                      </Tr>
                      <Tr>
                        <Td head>£100,000</Td>
                        <Td>£585</Td>
                        <Td>£545</Td>
                        <Td>£543</Td>
                        <Td>£563</Td>
                        <Td>£395</Td>
                      </Tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Figures are approximate monthly repayments based on 2023/24 thresholds. Actual amounts
                  may vary slightly due to tax code and exact calculation methods.
                </p>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  As the table shows, high earners make substantial monthly repayments toward their
                  student loans. At £100,000, you could be repaying over £6,500 per year on a Plan 2
                  loan—a significant proportion of your after-tax income.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For context, a graduate on a typical starting salary of £25,000–£30,000 might repay
                  less than £500 annually on a Plan 2 or Plan 5 loan, or nothing at all if they&apos;re
                  below the repayment threshold.
                </p>
              </div>
            </section>

            {/* Interest rates */}
            <section id="interest-rates" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Interest Rates for High Earners
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your income doesn&apos;t just affect your repayment amount—for Plan 2 loans, it also
                  influences the interest rate applied to your balance:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Plan 2 Interest Rate Structure</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Earning up to £27,295: RPI only (currently 4.3%)</li>
                  <li>Earning between £27,295 and £49,130: Interest increases gradually from RPI to RPI+3%</li>
                  <li>Earning over £49,130: Maximum rate of RPI+3% (currently 7.3%)</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  As a high earner above £49,130, you&apos;ll pay the maximum interest rate of RPI+3% on
                  your Plan 2 loan. This means your loan balance grows more quickly than for lower
                  earners, despite your higher repayments.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Other Loan Plans</h3>
                <p className="text-gray-700 leading-relaxed mb-2">For other loan plans, your interest rate is not affected by your income:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>
                    <strong>Plan 1 and Plan 4:</strong> Lower of RPI or Bank Base Rate +1% (currently 1.75%)
                  </li>
                  <li>
                    <strong>Plan 5:</strong> RPI only (currently 4.3%)
                  </li>
                  <li>
                    <strong>Postgraduate Loan:</strong> RPI+3% (currently 7.3%)
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  The key takeaway for high earners is that Plan 2 loans carry the highest interest rates,
                  while Plan 1 and Plan 4 offer significantly lower rates regardless of income.
                </p>
              </div>
            </section>

            {/* Voluntary repayments */}
            <section id="voluntary-repayments" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Should High Earners Make Voluntary Repayments?
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a high earner, you face a crucial decision: should you make additional voluntary
                  repayments to clear your student loan faster? The answer depends on several factors:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">When Voluntary Repayments Often Make Sense</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>For Plan 2 graduates earning £60,000+:</strong> You&apos;re likely to repay
                    your loan in full before the 30-year write-off period, and the high interest rate
                    (RPI+3%) means you&apos;ll pay more in total if you repay slowly.
                  </li>
                  <li>
                    <strong>For Postgraduate Loan holders with high income:</strong> Similar to Plan 2,
                    the high interest rate means early repayment can save substantial interest.
                  </li>
                  <li>
                    <strong>If you&apos;re approaching full repayment:</strong> If you&apos;re within a
                    few years of paying off your loan completely, accelerating repayment can reduce total
                    interest.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">When Voluntary Repayments Typically Don&apos;t Make Sense</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>For Plan 1 or Plan 4 graduates:</strong> The low interest rate (currently
                    1.75%) means there&apos;s less benefit to early repayment compared to other financial
                    priorities.
                  </li>
                  <li>
                    <strong>For Plan 5 graduates earning under £80,000:</strong> Many won&apos;t repay in
                    full before the 40-year write-off, so additional payments might never benefit you.
                  </li>
                  <li>
                    <strong>If you have higher-interest debts:</strong> Credit cards or personal loans
                    typically have much higher interest rates than student loans.
                  </li>
                  <li>
                    <strong>If you haven&apos;t maximized pension contributions:</strong> The tax relief
                    on pension contributions often outweighs the benefit of extra student loan repayments.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Calculation for High Earners</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The higher your income, the more likely you are to repay your loan in full before
                  write-off. If complete repayment is inevitable, then the question becomes purely
                  financial: what&apos;s the most efficient allocation of your money?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For Plan 2 loans especially, with their high interest rate of RPI+3%, early repayment
                  can save substantial interest costs for high earners who would otherwise repay the full
                  amount via salary deductions.
                </p>
              </div>
            </section>

            {/* Tax & alternatives */}
            <section id="tax-considerations" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Tax Considerations and Alternative Strategies
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a high earner, tax efficiency becomes increasingly important in your financial
                  decisions:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pension Contributions vs. Student Loan Repayment</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Pension contributions reduce your taxable income and, importantly, your student loan repayment income:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Contributing to a pension reduces the income used to calculate your 9% student loan repayment</li>
                  <li>For additional rate taxpayers (£125,140+), pension contributions provide 45% tax relief</li>
                  <li>Combined with student loan savings, the effective &quot;return&quot; on pension contributions can exceed 50%</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">ISAs and Investment Options</h3>
                <p className="text-gray-700 leading-relaxed mb-2">For many high earners, a balanced approach works best:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Maximize pension contributions for tax efficiency</li>
                  <li>Build emergency savings in cash ISAs</li>
                  <li>Consider stocks and shares ISAs for long-term growth</li>
                  <li>Make targeted student loan overpayments only when they make mathematical sense</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  The key is to compare the effective interest rate on your student loan with the
                  post-tax returns you could achieve through alternative uses of your money, while
                  considering the likelihood of your loan being written off.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your High-Income Repayments</h2>
                  <p className="text-lg text-blue-100">
                    See exactly how much you&apos;ll repay at your salary level and whether voluntary repayments make financial sense
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/calculators/investment-vs-overpayment-calculator/"
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Investment vs Overpayment Calculator
                    </Link>
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
                <Link
                  href="/compare/student-loans-on-50k-salary/"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans on £50k Salary</h3>
                  <p className="text-gray-600 text-sm">
                    Detailed comparison of repayments across all loan types at a £50,000 salary.
                  </p>
                </Link>

                <Link
                  href="/guides/investment-income-dividends-student-loans-uk/"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Investment Income & Dividends: UK Student Loans
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How investment income and dividends affect UK student loan repayments, thresholds, and tax treatment.
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
    </main>
  );
}

/** ---- tiny UI helpers ---- */
function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left text-gray-700 font-semibold text-sm">{children}</th>;
}

function Tr({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

function Td({
  children,
  head = false,
}: {
  children: React.ReactNode;
  head?: boolean;
}) {
  return (
    <td className={`px-4 py-3 text-sm ${head ? "text-gray-800 font-medium" : "text-gray-600"}`}>
      {children}
    </td>
  );
}