import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const StudentLoanTaxCodePayslip: React.FC = () => {
  const tocItems = [
    { id: "anatomy-payslip", title: "Anatomy of a UK Payslip", level: 2 },
    { id: "decoding-tax-code", title: "Decoding Your Tax Code", level: 2 },
    { id: "monthly-calculations", title: "How Student Loan Deductions Are Calculated Monthly", level: 2 },
    { id: "cumulative-vs-non", title: "Cumulative vs Non-Cumulative Tax Codes", level: 2 },
    { id: "variable-income", title: "Variable Income and Bonus Impact", level: 2 },
    { id: "multiple-jobs", title: "Multiple Jobs and Payslip Interpretation", level: 2 },
    { id: "p45-p60", title: "P45 and P60: Essential Documents", level: 2 },
    { id: "requesting-refunds", title: "Requesting Refunds for Overpayments", level: 2 },
    { id: "taking-control", title: "Taking Control of Your Payslip Understanding", level: 2 },
  ];

  return (
    <div className="bg-white">
      {/* Header Section with Breadcrumbs */}
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
                  Tax Code and Payslip Guide
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Understanding Your Tax Code and Payslip: Student Loan Deductions
          </h1>
          <p className="text-xl text-gray-600">
            How to read your payslip and tax code for student loan deductions. Understanding PAYE calculations, tax code errors, and ensuring correct deductions.
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
          <TableOfContents items={tocItems} />
        </div>
        <div className="lg:flex lg:gap-8 relative">
          {/* Main Content */}
          <div className="lg:flex-1 lg:min-w-0">
            {/* Introduction */}
            <section className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Your monthly payslip contains a wealth of information about your student loan deductions, but most people glance at the &quot;net pay&quot; figure and ignore the rest. This is a costly mistake. Buried in those numbers and codes are details that determine whether you&apos;re paying the right amount, whether your employer has set things up correctly, and whether errors are costing you hundreds of pounds annually. Understanding how to read your payslip and tax code isn&apos;t just academic knowledge. It&apos;s practical financial protection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most critical element is your tax code, a seemingly cryptic combination of numbers and letters that appears at the top of your payslip. Hidden within this code are markers that tell your employer whether to deduct student loans and which plan you&apos;re on. Get these wrong, and you could be paying when you shouldn&apos;t, or worse, not paying when you should (creating arrears you&apos;ll owe later with interest). Tax code errors are surprisingly common, especially after changing jobs, returning from maternity leave, or moving between employment and self-employment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Student loan deductions themselves follow specific rules based on your monthly income and threshold for your plan type. But PAYE calculates these monthly in isolation, treating each pay period as if it represents your full-year earnings. This creates systematic issues for anyone with variable income, part-year employment, or bonuses. Your December payslip might show a massive student loan deduction because of your Christmas bonus, even though your annual income is actually below the threshold. Unless you understand how to read your payslip and check the calculations, these overpayments slip through unnoticed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Learning to decode your payslip takes fifteen minutes. Checking it takes thirty seconds per month. Those thirty seconds monthly can save you hundreds of pounds annually by catching errors, identifying overpayments, and ensuring your employer is deducting correctly.
              </p>
            </section>

            {/* Anatomy of a UK Payslip */}
            <section id="anatomy-payslip" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Anatomy of a UK Payslip
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payslips vary slightly between employers and payroll systems, but all contain core information in roughly similar formats:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Header section:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Your name and employee number</li>
                    <li>Pay date and pay period</li>
                    <li>Tax code</li>
                    <li>National Insurance number</li>
                    <li>Department/cost centre</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Earnings section:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Gross pay (before deductions)</li>
                    <li>Breakdown by type (basic salary, overtime, bonus, etc.)</li>
                    <li>Year-to-date (YTD) gross pay</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Deductions section:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Income tax this period and YTD</li>
                    <li>National Insurance this period and YTD</li>
                    <li>Pension contributions this period and YTD</li>
                    <li><strong>Student loan deductions this period and YTD</strong></li>
                    <li>Any other deductions (union dues, etc.)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Net pay section:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Net pay (take-home after all deductions)</li>
                    <li>YTD net pay</li>
                    <li>Payment method (bank transfer usually)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Additional information:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employer pension contributions</li>
                  <li>Holiday entitlement and used</li>
                  <li>Statutory payments (if applicable)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>The &quot;Year to Date&quot; (YTD) columns are crucial for student loan verification.</strong> They show cumulative figures from April 6 (start of tax year) to current date. These help you verify whether your annual student loan deductions align with what you should actually owe based on your annual income.
                </p>
              </div>
            </section>

            {/* Decoding Your Tax Code */}
            <section id="decoding-tax-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Decoding Your Tax Code
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your tax code determines how much tax-free income you receive and whether student loan deductions apply. It typically appears as a number followed by letters.
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">1257L - Standard code for 2024/25</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>1257 = £12,570 Personal Allowance (divided by 10)</li>
                    <li>L = Standard Personal Allowance</li>
                    <li><strong>No student loan deductions</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">1257L SL - Standard code with undergraduate student loan (Plan 1 or 2)</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Same Personal Allowance</li>
                    <li><strong>SL marker = Student Loan deductions apply</strong></li>
                    <li>Employer deducts at appropriate threshold for your plan</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">1257L PGL - Standard code with postgraduate loan only</h3>
                  <ul className="text-gray-700 text-sm">
                    <li><strong>PGL marker = Postgraduate Loan deductions apply</strong></li>
                    <li>6% deduction above £21,000 threshold</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">1257L SL PGL - Both undergraduate and postgraduate loans</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>Both markers present</li>
                    <li><strong>Employer deducts both: 9% on undergraduate, 6% on postgraduate</strong></li>
                    <li>Two separate calculations against different thresholds</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">1257L W1 or 1257L M1 - Week 1 or Month 1 (non-cumulative) code</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>W1/M1 means non-cumulative (each period stands alone)</li>
                    <li>Doesn&apos;t account for year-to-date position</li>
                    <li>Can cause overpayment or underpayment issues</li>
                    <li><strong>Usually temporary emergency code</strong></li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">BR SL - Basic Rate with Student Loan</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>All income taxed at basic rate (no Personal Allowance)</li>
                    <li>Common for second jobs</li>
                    <li>SL marker means student loan deductions on all income</li>
                    <li><strong>Often causes overpayment if you have multiple jobs</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common tax code errors:</h3>

                <div className="space-y-3 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 1: Missing student loan markers</h4>
                    <p className="text-gray-700 text-sm">
                      Your code shows 1257L but you have a student loan. No deductions happen. You&apos;re building arrears you&apos;ll owe later with interest.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 2: Wrong student loan marker</h4>
                    <p className="text-gray-700 text-sm">
                      Your code shows SL but you&apos;re actually on Plan 5 or have a postgraduate loan instead. Wrong deductions are taken.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 3: Duplicate markers</h4>
                    <p className="text-gray-700 text-sm">
                      Sometimes codes show &quot;SL SL&quot; (duplicate) causing double deductions. This is a payroll error.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Error 4: Emergency codes persisting</h4>
                    <p className="text-gray-700 text-sm">
                      Started new job and got put on emergency code (W1 or M1). Months later, it&apos;s still emergency. This causes incorrect cumulative calculations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Student Loan Deductions Are Calculated Monthly */}
            <section id="monthly-calculations" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Student Loan Deductions Are Calculated Monthly
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding the monthly calculation helps you verify your payslip is correct:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Monthly calculation steps:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                  <li><strong>Step 1:</strong> Determine monthly gross income (your gross pay for the month, including all earnings)</li>
                  <li><strong>Step 2:</strong> Apply the monthly threshold:
                    <ul className="list-disc ml-6 mt-1">
                      <li>Plan 1: £2,082.50 monthly (£24,990 ÷ 12)</li>
                      <li>Plan 2: £2,274.58 monthly (£27,295 ÷ 12)</li>
                      <li>Plan 4: £2,616.25 monthly (£31,395 ÷ 12)</li>
                      <li>Plan 5: £2,083.33 monthly (£25,000 ÷ 12)</li>
                      <li>Postgraduate: £1,750 monthly (£21,000 ÷ 12)</li>
                    </ul>
                  </li>
                  <li><strong>Step 3:</strong> Calculate amount above threshold (Monthly gross income minus monthly threshold)</li>
                  <li><strong>Step 4:</strong> Apply repayment rate (Undergraduate plans: 9%, Postgraduate: 6%)</li>
                  <li><strong>Step 5:</strong> Deduct from net pay</li>
                </ol>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example calculation (Plan 2):</h3>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>Monthly gross pay: £2,800</p>
                  <p>Plan 2 monthly threshold: £2,274.58</p>
                  <p>Amount above threshold: £2,800 - £2,274.58 = £525.42</p>
                  <p><strong>Student loan deduction: £525.42 × 9% = £47.29</strong></p>
                </div>
                <p className="text-gray-700 text-sm mt-2">
                  Your payslip should show approximately £47.29 student loan deduction (might be £47.28 or £47.30 due to rounding).
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Verifying your payslip:</h3>
                <p className="text-gray-700 text-sm">
                  Take your gross pay for the month, subtract your plan&apos;s monthly threshold, multiply by 9% (or 6% for postgraduate). The result should match your student loan deduction line on the payslip. If it doesn&apos;t, there&apos;s an error.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/monthly-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Monthly Repayment Calculator </Link> to verify your monthly deduction is correct.
                </p>
              </div>
            </section>

            {/* Cumulative vs Non-Cumulative Tax Codes */}
            <section id="cumulative-vs-non" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cumulative vs Non-Cumulative Tax Codes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tax codes operate in one of two ways, affecting how student loans are calculated:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cumulative codes (normal):</h3>
                  <p className="text-gray-700 text-sm">
                    Your tax and student loan calculations account for all previous pay periods in the tax year. If you were underpaid in one month, you might overpay in the next to balance out.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Non-cumulative codes (W1/M1):</h3>
                  <p className="text-gray-700 text-sm">
                    Each pay period is calculated independently. No account taken of previous months. Can cause significant overpayment or underpayment issues.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Three month cumulative calculation (Plan 2)</h3>

                <div className="space-y-2 mt-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Monthly breakdown:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>April: Gross £2,000 (below threshold £2,274.58), deduction £0</li>
                        <li>May: Gross £2,000 (below threshold), deduction £0</li>
                        <li>June: Gross £3,500 (above threshold this month)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Calculation methods:</h4>
                      <p className="text-gray-700 text-sm mb-1">
                        <strong>Non-cumulative (W1/M1) would calculate June as:</strong><br />
                        (£3,500 - £2,274.58) × 9% = £110.29
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Cumulative calculates:</strong><br />
                        Total gross April-June: £7,500<br />
                        Total threshold April-June: £6,823.74<br />
                        Amount above threshold: £676.26<br />
                        Total owed for three months: £60.86
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  <strong>Cumulative is much fairer.</strong> It recognizes that your first two months were below threshold and adjusts accordingly. Non-cumulative treats June in isolation and massively overcharges.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">When W1/M1 codes are used:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>New employees when HMRC doesn&apos;t have complete information</li>
                  <li>Emergency tax code situations</li>
                  <li>After significant changes to employment status</li>
                  <li>When P45 information is delayed or missing</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>W1/M1 codes should be temporary.</strong> If your code still shows W1 or M1 after 2-3 months, contact HMRC to get it corrected to cumulative.
                </p>
              </div>
            </section>

            {/* Variable Income and Bonus Impact */}
            <section id="variable-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Variable Income and Bonus Impact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Variable income creates the most common payslip confusion and overpayment scenarios:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Teacher with part-year contract</h3>

                <div className="space-y-2 mt-3">
                  <p className="text-gray-700 text-sm">
                    Teacher works September-July (11 months), earning £28,000 annually. Monthly salary: £2,545.45.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Monthly calculation (Plan 2):</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Monthly gross: £2,545.45</li>
                        <li>Monthly threshold: £2,274.58</li>
                        <li>Above threshold: £270.87</li>
                        <li>Monthly deduction: £24.38</li>
                        <li>Annual deductions: £268.18 (11 months)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Correct annual calculation:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Annual gross: £28,000</li>
                        <li>Annual threshold: £27,295</li>
                        <li>Above threshold: £705</li>
                        <li><strong>Should pay annually: £63.45</strong></li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Result: Overpaid £204.73</strong> (£268.18 - £63.45). This happens because monthly PAYE doesn&apos;t know you&apos;re only working 11 months.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Bonus month impact</h3>

                <div className="space-y-2 mt-3">
                  <p className="text-gray-700 text-sm">
                    Regular monthly salary: £2,200 (below Plan 2 threshold). December bonus: £2,000. Total December gross: £4,200.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">December payslip shows:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Gross: £4,200</li>
                        <li>Above threshold: £1,925.42</li>
                        <li>Student loan deduction: £173.29</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">If cumulative and annual income is reasonable:</h4>
                      <p className="text-gray-700 text-sm">
                        The deduction might be correct if your annual income justifies it. But if you&apos;re normally below threshold, this could be overpayment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Checking bonus impact:</h3>
                <p className="text-gray-700 text-sm">
                  When you receive a bonus, your payslip that month will show higher gross pay and higher student loan deduction. Check whether the deduction is correct for that month&apos;s total gross. If it seems excessive, verify your tax code is cumulative, not W1/M1.
                </p>
              </div>
            </section>

            {/* Multiple Jobs and Payslip Interpretation */}
            <section id="multiple-jobs" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Multiple Jobs and Payslip Interpretation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having multiple jobs creates complex payslip scenarios:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: Two part-time jobs</h3>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Job A (main job): Tax code 1257L SL</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Gross: £2,000 monthly</li>
                      <li>Below Plan 2 threshold</li>
                      <li>Student loan deduction: £0</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Job B (second job): Tax code BR SL</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Gross: £800 monthly</li>
                      <li>BR code = all income taxed at basic rate</li>
                      <li>SL marker = student loans on all income</li>
                      <li><strong>Student loan deduction: £800 × 9% = £72 monthly</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Combined impact:</h4>
                  <ul className="text-gray-700 text-sm">
                    <li>Monthly student loan deductions: £72 (from Job B only)</li>
                    <li>Annual deductions: £864</li>
                    <li>But your combined income is £2,800 monthly, £33,600 annually</li>
                    <li>Correct annual student loan: (£33,600 - £27,295) × 9% = £567.45</li>
                    <li><strong className="text-red-600">You&apos;re overpaying £296.55 annually</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Why this happens:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>PAYE systems can&apos;t communicate between employers</li>
                  <li>Job A doesn&apos;t know about Job B</li>
                  <li>Job B doesn&apos;t know about Job A</li>
                  <li>Each calculates independently using the tax code they&apos;ve been given</li>
                  <li>The BR code on Job B tells them to tax everything and deduct student loans on everything, because HMRC assumes Job A is using your Personal Allowance and threshold</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">What to do:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Accept this is how PAYE works with multiple jobs. Track your combined income throughout the year. At year-end, if your total student loan deductions exceed what you should have paid based on combined income, claim a refund through Self Assessment or by contacting HMRC directly.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/multiple-jobs-paye-split-calculator/" className="text-blue-600 underline hover:text-blue-800"> Multiple Jobs PAYE Split Calculator </Link> to project overpayments and plan for refund claims.
                </p>
              </div>
            </section>

            {/* P45 and P60: Essential Documents */}
            <section id="p45-p60" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                P45 and P60: Essential Documents
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Two documents matter enormously for student loan verification:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">P45 - When leaving employment:</h3>
                  <p className="text-gray-700 text-sm mb-2">Given by employer when you leave a job. Contains:</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Your total pay to date of leaving</li>
                    <li>Total tax paid to date</li>
                    <li>Total student loans paid to date</li>
                    <li>Your tax code when you left</li>
                    <li>Date of leaving</li>
                  </ul>

                  <div className="mt-3 p-3 bg-white rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Why P45 matters:</h4>
                    <p className="text-gray-700 text-sm">
                      When starting new job, give P45 to new employer. They use it to set your correct tax code, continue cumulative calculations, and ensure student loan deductions continue correctly. Without P45, new employer puts you on emergency code, causing student loan calculation problems.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">P60 - Annual statement:</h3>
                  <p className="text-gray-700 text-sm mb-2">Given by employer in May/June following end of tax year. Contains:</p>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Total gross pay for full tax year (April 6 - April 5)</li>
                    <li>Total tax paid</li>
                    <li>Total National Insurance paid</li>
                    <li><strong>Total student loans paid</strong></li>
                    <li>Your final tax code for the year</li>
                  </ul>

                  <div className="mt-3 p-3 bg-white rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Why P60 matters:</h4>
                    <p className="text-gray-700 text-sm">
                      Essential for verifying whether you&apos;ve overpaid or underpaid student loans, filing Self Assessment if required, proving income to mortgage lenders, and maintaining historical records.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Checking your P60 for student loan accuracy:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                  <li>Find total gross pay on P60</li>
                  <li>Subtract annual threshold for your plan</li>
                  <li>Multiply by 9% (or 6% for postgraduate)</li>
                  <li>Compare to total student loans paid shown on P60</li>
                  <li>If P60 shows higher amount, you&apos;ve overpaid. Claim refund from HMRC.</li>
                </ol>

                <div className="mt-3 p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Example P60 check:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">P60 shows:</h5>
                      <ul className="text-gray-700 text-sm">
                        <li>Gross pay: £29,500</li>
                        <li>Student loans paid: £450</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Verification (Plan 2):</h5>
                      <ul className="text-gray-700 text-sm">
                        <li>£29,500 - £27,295 = £2,205</li>
                        <li>£2,205 × 9% = £198.45</li>
                        <li>Should have paid: £198.45</li>
                        <li>Actually paid: £450</li>
                        <li><strong className="text-red-600">Overpaid: £251.55</strong></li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    Contact HMRC and request £251.55 refund, providing P60 as evidence.
                  </p>
                </div>
              </div>
            </section>

            {/* Requesting Refunds for Overpayments */}
            <section id="requesting-refunds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Requesting Refunds for Overpayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your payslip verification or P60 check reveals overpayment:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">During the tax year:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you identify overpayment mid-year (e.g., you worked part-year then stopped, or your monthly checks show excessive deductions):
                  </p>

                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Option 1: Wait until year-end</h4>
                      <p className="text-gray-700 text-sm">Easiest approach. Let the year finish, verify with P60, claim refund in May/June.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Option 2: Request in-year refund</h4>
                      <p className="text-gray-700 text-sm">Contact HMRC explaining your situation. They might adjust your tax code to collect less going forward or issue refund immediately if you&apos;re no longer working.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">After the tax year:</h3>
                  <p className="text-gray-700 text-sm mb-2">Once you have your P60 (received by May 31):</p>

                  <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                    <li>Calculate correct annual liability vs what you paid</li>
                    <li>Contact HMRC:
                      <ul className="list-disc ml-6 mt-1">
                        <li>Call: 0300 200 3300</li>
                        <li>Online: Through Personal Tax Account</li>
                        <li>Post: Write to your tax office</li>
                      </ul>
                    </li>
                    <li>Provide evidence (P60 showing gross pay and student loan deductions)</li>
                    <li>Wait for processing (typically 6-8 weeks)</li>
                    <li>Receive refund via bank transfer or check</li>
                  </ol>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common reasons HMRC approves refunds:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Part-year employment (worked less than full year)</li>
                    <li>Variable income with non-cumulative tax code</li>
                    <li>Multiple jobs causing BR code overpayment</li>
                    <li>Student loan deductions before April when not yet due to repay</li>
                    <li>Wrong threshold or percentage applied during year</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common reasons HMRC might question refund:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Your calculations are wrong (didn&apos;t account for bonuses or complete income)</li>
                    <li>You have unreported income (self-employment, second job) meaning you actually owe more, not less</li>
                    <li>Recent tax code changes mean the &quot;overpayment&quot; was actually correction of prior underpayment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Be prepared to explain your situation clearly and provide documentation. Most legitimate overpayment claims are approved without hassle.
                </p>
              </div>
            </section>

            {/* Taking Control of Your Payslip Understanding */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Your Payslip Understanding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your payslip is a monthly financial report card. It shows exactly what you&apos;re earning, what&apos;s being deducted, and whether the student loan calculations are correct. Thirty seconds of monthly review can save hundreds of pounds:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Monthly payslip check (30 seconds):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Verify gross pay matches expected amount</li>
                    <li>Check tax code hasn&apos;t changed unexpectedly</li>
                    <li>Verify student loan deduction using: (Gross - Monthly threshold) × 9%</li>
                    <li>Glance at YTD figures to ensure they&apos;re growing sensibly</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Quarterly deep check (5 minutes):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Calculate what YTD student loans should be based on YTD gross</li>
                    <li>Compare to payslip YTD figure</li>
                    <li>Identify any discrepancies</li>
                    <li>Investigate if difference is significant (£50+)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Annual verification (15 minutes):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Wait for P60 in May</li>
                    <li>Calculate annual student loan obligation</li>
                    <li>Compare to what P60 shows you paid</li>
                    <li>Claim refund if you overpaid by more than £25-£50</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">When changing jobs:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Get P45 from old employer</li>
                    <li>Give to new employer immediately</li>
                    <li>Check first payslip from new employer shows correct tax code with correct student loan markers</li>
                    <li>Verify deductions are correct from first payslip</li>
                    <li>Contact HMRC immediately if tax code is wrong</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Understanding your payslip isn&apos;t optional if you want to ensure you&apos;re not overpaying student loans by hundreds of pounds annually. The information is there, presented monthly, ready for you to check. All it requires is basic knowledge of how to read it and thirty seconds to verify the numbers.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Take control of your payslip. Verify your deductions. Claim refunds when entitled. Don&apos;t let payroll errors or tax code mistakes cost you money that&apos;s rightfully yours. Your payslip contains all the information you need to protect yourself financially. Use it.
              </h3>
              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> for monthly repayment verification, annual liability calculation, tax code checking, and overpayment identification.
                </p>
              </div>
            </section>

            <DrLilaDesc />
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-80 lg:flex-shrink-0">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default StudentLoanTaxCodePayslip;