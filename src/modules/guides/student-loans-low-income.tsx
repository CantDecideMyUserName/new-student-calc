import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function Page() {
  return <LowIncomeGuide />;
}

export function LowIncomeGuide() {
  const tocItems = [
    { id: "repayment-thresholds", title: "Understanding Repayment Thresholds", level: 2 },
    { id: "below-threshold", title: "What Happens Below the Threshold?", level: 2 },
    { id: "part-time-work", title: "Part-Time Work and Variable Income", level: 2 },
    { id: "financial-support", title: "Financial Support and Benefits", level: 2 },
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
                  Student Loans on Low Income
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loans on Low Income
          </h1>
          <p className="text-xl text-gray-600">
            Essential guidance for graduates on low incomes with UK student loans
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
                  If you&apos;re on a low income with a student loan, you&apos;re protected by the repayment
                  threshold system. You only start repaying once your income exceeds specific thresholds,
                  and your repayments are always proportional to what you earn above that threshold.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This guide explains how student loans work when you&apos;re earning below or just above
                  the repayment thresholds, what protections are in place, and how to manage your loan
                  alongside other financial priorities.
                </p>
              </div>
            </section>

            {/* Repayment Thresholds */}
            <section id="repayment-thresholds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Understanding Repayment Thresholds
              </h2>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  2024/25 Annual Repayment Thresholds
                </h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <Th>Loan Plan</Th>
                        <Th>Annual Threshold</Th>
                        <Th>Monthly Threshold</Th>
                        <Th>Weekly Threshold</Th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <Tr>
                        <Td head>Plan 1</Td>
                        <Td>£24,990</Td>
                        <Td>£2,082</Td>
                        <Td>£480</Td>
                      </Tr>
                      <Tr>
                        <Td head>Plan 2</Td>
                        <Td>£27,295</Td>
                        <Td>£2,274</Td>
                        <Td>£524</Td>
                      </Tr>
                      <Tr>
                        <Td head>Plan 4</Td>
                        <Td>£31,395</Td>
                        <Td>£2,616</Td>
                        <Td>£603</Td>
                      </Tr>
                      <Tr>
                        <Td head>Plan 5</Td>
                        <Td>£25,000</Td>
                        <Td>£2,083</Td>
                        <Td>£480</Td>
                      </Tr>
                      <Tr>
                        <Td head>Postgraduate</Td>
                        <Td>£21,000</Td>
                        <Td>£1,750</Td>
                        <Td>£403</Td>
                      </Tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  You only repay 9% of income above these thresholds (6% for Postgraduate Loans).
                </p>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The repayment threshold is the minimum income level at which you start making student
                  loan repayments. If you earn below this amount, you make no repayments at all—and
                  there&apos;s no penalty or impact on your credit score for this.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Example: Plan 2 on £25,000</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If you&apos;re on Plan 2 (threshold £27,295) and earning £25,000:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>You earn £2,295 below the threshold</li>
                  <li>Your monthly repayment: £0</li>
                  <li>Your annual repayment: £0</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Example: Plan 2 on £30,000</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If you&apos;re on Plan 2 (threshold £27,295) and earning £30,000:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>You earn £2,705 above the threshold</li>
                  <li>You repay 9% of £2,705 = £243.45 per year</li>
                  <li>Monthly repayment: approximately £20</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  As you can see, even earning above the threshold doesn&apos;t mean large repayments when
                  your income is modest. The system is designed to be proportional and affordable.
                </p>
              </div>
            </section>

            {/* Below Threshold */}
            <section id="below-threshold" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                What Happens Below the Threshold?
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your income is below the repayment threshold, several important protections apply:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Zero Repayments Required</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You make absolutely no repayments through your salary. Your employer won&apos;t deduct
                  anything for student loans from your paycheck if you&apos;re below the threshold.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Interest Still Accrues</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While you don&apos;t repay, interest continues to be added to your loan balance. The
                  interest rate depends on your loan plan:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>
                    <strong>Plan 1 and Plan 4:</strong> Lower of RPI or Bank Base Rate +1% (currently 1.75%)
                  </li>
                  <li>
                    <strong>Plan 2:</strong> RPI only when earning below £27,295 (currently 4.3%)
                  </li>
                  <li>
                    <strong>Plan 5:</strong> RPI only (currently 4.3%)
                  </li>
                  <li>
                    <strong>Postgraduate Loan:</strong> RPI+3% (currently 7.3%)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">No Credit Impact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Student loans don&apos;t appear on your credit file, and not making repayments because
                  you&apos;re below the threshold has zero impact on your credit score or ability to get
                  mortgages, credit cards, or other loans.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eventual Write-Off</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  After a set period, your loan is written off regardless of the outstanding balance:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Plan 1: 25 years after you became eligible to repay (or at age 65, whichever comes first)</li>
                  <li>Plan 2: 30 years after you became eligible to repay</li>
                  <li>Plan 4: 30 years after you became eligible to repay</li>
                  <li>Plan 5: 40 years after you became eligible to repay</li>
                  <li>Postgraduate Loan: 30 years after you became eligible to repay</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  Many graduates on persistently low incomes never repay their loans in full, with the
                  outstanding balance written off at the end of the repayment period.
                </p>
              </div>
            </section>

            {/* Part-time work */}
            <section id="part-time-work" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Part-Time Work and Variable Income
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you work part-time or have variable income, understanding how repayments work becomes
                  especially important:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Part-Time Employment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Student loan repayments are based on your annual income, but deducted through your
                  paycheck if you&apos;re employed. For part-time workers:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Your employer estimates your annual income based on your current pay period
                  </li>
                  <li>
                    If your part-time income is below the annual threshold, no deductions should be made
                  </li>
                  <li>
                    If you work variable hours, some months you might have deductions and others you might not
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Multiple Jobs</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each employer assesses your income separately, which can sometimes mean:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    You might not have deductions from either job if each pays below the monthly threshold
                  </li>
                  <li>
                    Even if your combined income exceeds the annual threshold, automatic deductions might not occur
                  </li>
                  <li>
                    You may need to contact the Student Loans Company to arrange payment if your total income exceeds the threshold
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Self-Employment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you&apos;re self-employed with low income:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Repayments are calculated through Self Assessment based on your annual profit
                  </li>
                  <li>
                    If your profit is below the threshold, you owe nothing
                  </li>
                  <li>
                    You can defer your Self Assessment payment on account if your income fluctuates
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Overpayment Refunds</h3>
                <p className="text-gray-700 leading-relaxed">
                  If your employer deducts student loan repayments but your annual income ends up below
                  the threshold, you can claim a refund from the Student Loans Company. Keep your payslips
                  and P60 as evidence.
                </p>
              </div>
            </section>

            {/* Financial support */}
            <section id="financial-support" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Financial Support and Benefits
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Being on a low income with a student loan doesn&apos;t mean you&apos;re without support.
                  Several options can help:
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Universal Credit and Benefits</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Student loan repayments are calculated on your gross income before they&apos;re deducted,
                  but most benefits calculations use your net (take-home) income:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Student loans don&apos;t count as debt when claiming benefits</li>
                  <li>Small student loan deductions won&apos;t significantly affect benefit calculations</li>
                  <li>You can claim Universal Credit even while working and repaying student loans</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Should You Make Voluntary Repayments?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For most people on low incomes, the answer is no:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>You may never repay in full:</strong> If you remain on a low income, your loan
                    will likely be written off before you repay it completely
                  </li>
                  <li>
                    <strong>Other priorities matter more:</strong> Emergency savings, essential expenses,
                    and quality of life should come first
                  </li>
                  <li>
                    <strong>No credit benefit:</strong> Paying off your student loan early doesn&apos;t
                    improve your credit score
                  </li>
                  <li>
                    <strong>Interest is manageable:</strong> For Plan 1 and Plan 4, interest rates are
                    very low (currently 1.75%)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Priorities on Low Income</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If you have any spare income, consider these priorities before voluntary student loan
                  repayments:
                </p>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1 mb-4">
                  <li>Build an emergency fund of 3-6 months&apos; essential expenses</li>
                  <li>Pay off high-interest debt (credit cards, payday loans)</li>
                  <li>Contribute to workplace pension if your employer matches contributions</li>
                  <li>Save for specific goals (house deposit, education, career development)</li>
                  <li>Only then consider voluntary student loan repayments</li>
                </ol>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Income Increases</h3>
                <p className="text-gray-700 leading-relaxed">
                  When your income increases, your repayments automatically adjust. There&apos;s no need to
                  contact anyone—your employer will update your deductions based on your new salary. The
                  system is designed to grow with your income, keeping repayments affordable at every stage.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Repayments</h2>
                  <p className="text-lg text-blue-100">
                    See exactly how much you&apos;ll repay at different income levels and when your loan might be written off
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/"
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                    Student Loan Calculator
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
                  href="/guides/student-loans-high-earners/"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans for High Earners</h3>
                  <p className="text-gray-600 text-sm">
                    Essential guidance for graduates earning £50,000+ with UK student loans.
                  </p>
                </Link>

                <Link
                  href="/compare/student-loans-on-25k-salary/"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Student Loans on £25,000 Salary
                  </h3>
                  <p className="text-gray-600 text-sm">
                  A detailed comparison of student loan repayments for UK graduates earning £25,000 per year.
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