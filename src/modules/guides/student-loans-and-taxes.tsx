import React from "react";
import Link from "next/link";
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

export default function StudentLoansAndTaxesContent() {
  const tocItems = [
    { id: "how-affect-tax", title: "How Student Loan Repayments Affect Your Tax", level: 2 },
    { id: "tax-code", title: "Student Loans and Your Tax Code", level: 2 },
    { id: "self-employed", title: "Self‑Employed Individuals and Student Loans", level: 2 },
    { id: "multiple-income", title: "Multiple Sources of Income", level: 2 },
    { id: "tax-relief", title: "Tax Relief and Student Loan Interest", level: 2 },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero / Breadcrumb */}
      <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="breadcrumb">
            <ol className="flex items-center space-x-1 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-700 hover:underline">
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
                <Link href="/guides" className="hover:text-blue-700 hover:underline">
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
                  Student Loans and Taxes
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loans and Taxes in the UK
          </h1>
          <p className="text-xl text-gray-600">
            Learn how UK student loans affect your income tax, self-assessment, and tax code
            — including PAYE deductions and tax returns.
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
            <section id="how-affect-tax" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Student Loan Repayments Affect Your Tax
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  Student loan repayments are not technically a tax, but they function in a similar way to income tax as
                  they&apos;re calculated as a percentage of your income above a threshold. In the UK tax system, student loan
                  repayments are collected through either:
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>
                    <strong>PAYE (Pay As You Earn)</strong> — if you&apos;re employed
                  </li>
                  <li>
                    <strong>Self Assessment</strong> — if you&apos;re self‑employed or have additional income
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Unlike income tax, student loan repayments don&apos;t affect your taxable income — you pay income tax on your
                  gross income before student loan deductions are calculated.
                </p>
              </div>
            </section>

            <section id="tax-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Student Loans and Your Tax Code
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  Your student loan doesn&apos;t directly change your tax code, but you may see the letter &apos;Y&apos; on your payslip
                  which indicates that you&apos;re making student loan repayments. The repayment is calculated and deducted after
                  income tax and National Insurance contributions.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Example: PAYE Deductions</h3>
                  <p className="text-gray-700 mb-2">For someone earning £35,000 per year with a Plan 2 loan:</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Income tax is calculated first on the taxable income</li>
                    <li>Then National Insurance is deducted</li>
                    <li>Then the student loan repayment is calculated (9% of income above £27,295)</li>
                    <li>This would be approximately £58 per month in student loan repayments</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="self-employed" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Self‑Employed Individuals and Student Loans
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  If you&apos;re self‑employed, you&apos;ll declare your income through a Self Assessment tax return. HMRC will
                  calculate your student loan repayments based on your profit (income minus allowable expenses) above the
                  repayment threshold for your loan plan.
                </p>
                <p className="leading-relaxed">
                  Unlike PAYE where repayments are made monthly, self‑employed individuals typically make student loan
                  repayments annually or in instalments along with their income tax payments.
                </p>
              </div>
            </section>

            <section id="multiple-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Multiple Sources of Income
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed mb-4">
                  If you have multiple sources of income (e.g., employed and self‑employed), HMRC considers your total income
                  when calculating student loan repayments. This means you might:
                </p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>Make repayments through PAYE from your employment income</li>
                  <li>Make additional repayments through Self Assessment based on other income</li>
                </ul>
                <p className="leading-relaxed">
                  It&apos;s important to keep track of all repayments to ensure you don&apos;t overpay, especially if your total income
                  is close to the threshold.
                </p>
              </div>
            </section>

            <section id="tax-relief" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tax Relief and Student Loan Interest
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed">
                  Unlike some countries, in the UK there is no tax relief available for student loan repayments or interest.
                  This is because the income‑contingent nature of the loans already provides a form of protection — you only
                  repay when earning above the threshold.
                </p>
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
                  href="/calculators/self-employed-loan-calculator/"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Self‑Employed Loans Calculator</h3>
                  <p className="text-gray-600 text-sm">
                    Calculate your student loan repayments if you&apos;re self‑employed or have income from multiple sources.
                  </p>
                </Link>
                <Link
                  href="/guides/repayment-thresholds/"
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Repayment Thresholds Guide</h3>
                  <p className="text-gray-600 text-sm">
                    Learn about student loan repayment thresholds for different plan types and how they affect your monthly
                    payments.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Student Loan Repayments</h2>
                  <p className="text-lg text-blue-100">
                    Use our calculators to see how student loan repayments affect your take‑home pay after tax
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/calculators/"
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Try Our Calculators
                    </Link>
                  </div>
                </div>
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
  );
}