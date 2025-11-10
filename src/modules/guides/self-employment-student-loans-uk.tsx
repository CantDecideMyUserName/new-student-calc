import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const SelfEmploymentStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "self-employment-vs-employment", title: "Self-Employment vs Employment: Student Loan Differences", level: 2 },
    { id: "what-counts-as-income", title: "What Counts as Income for Self-Employed Student Loans", level: 2 },
    { id: "allowable-expenses", title: "Allowable Business Expenses and Student Loans", level: 2 },
    { id: "self-assessment-process", title: "Self Assessment Process for Student Loans", level: 2 },
    { id: "mixed-income", title: "Mixed Income: Employment and Self-Employment Combined", level: 2 },
    { id: "setting-aside-money", title: "Setting Aside Money Throughout the Year", level: 2 },
    { id: "late-payment-penalties", title: "Late Payment and Penalties", level: 2 },
    { id: "common-mistakes", title: "Common Mistakes Self-Employed People Make", level: 2 },
    { id: "taking-control", title: "Taking Control of Self-Employment Student Loans", level: 2 },
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
                  Self-Employment Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Self-Employment and Student Loans: Complete Freelancer&apos;s Guide
          </h1>
          <p className="text-xl text-gray-600">
            Complete guide to UK student loan repayments for self-employed and freelancers. Self Assessment calculations, profit vs revenue, and avoiding penalties.
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
                Self-employment fundamentally changes how you interact with the student loan system. As an employee, student loan deductions happen automatically through PAYE. You might barely notice them beyond seeing a line on your payslip. As a self-employed person, nothing happens automatically. You&apos;re responsible for calculating your own student loan obligation, reporting it through Self Assessment, and paying it alongside your income tax. For many freelancers and business owners, this comes as a shock the first time they file a tax return.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The calculation itself isn&apos;t complex: you take your profit (not revenue), subtract the threshold for your loan plan, and multiply by 9% (or 6% for postgraduate loans). But executing this correctly requires understanding what counts as profit, how business expenses affect your obligation, when payments are due, and what happens if you get the calculations wrong. The penalties for errors or late payment can be substantial, and unlike PAYE where your employer handles everything, you&apos;re personally liable for mistakes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What complicates matters further is that many people have mixed income: some employment income with PAYE deductions, plus self-employment income. The systems must be reconciled through Self Assessment to ensure you&apos;ve paid the right amount overall. You might have overpaid through PAYE (because it doesn&apos;t account for self-employment income pushing you higher), or underpaid (because PAYE only sees employment income and doesn&apos;t know about your freelance work).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding self-employment student loan mechanics helps you calculate correctly, avoid penalties, optimize your business structure to minimize obligations, and ensure you&apos;re paying exactly what you owe—no more, no less.
              </p>
            </section>

            {/* Self-Employment vs Employment: Student Loan Differences */}
            <section id="self-employment-vs-employment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Self-Employment vs Employment: Student Loan Differences
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The fundamental difference is who handles the calculation and payment:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Employment (PAYE):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Employer calculates student loan deduction</li>
                    <li>Deducted automatically from salary</li>
                    <li>Happens monthly through payroll</li>
                    <li>Reported to HMRC by employer</li>
                    <li>Employee has minimal involvement</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Self-Employment:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>You calculate your own student loan obligation</li>
                    <li>No automatic deductions from income</li>
                    <li>Paid annually (or in installments) through Self Assessment</li>
                    <li>You report to HMRC yourself</li>
                    <li>You&apos;re responsible for accuracy and timely payment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The psychological shift:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  As an employee, student loans are something that &quot;happens to you.&quot; As self-employed, student loans are something you must actively manage. This requires:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Tracking income throughout the year</li>
                  <li>Maintaining records of business expenses</li>
                  <li>Calculating profit accurately</li>
                  <li>Setting aside money for eventual payment</li>
                  <li>Filing Self Assessment correctly and on time</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-gray-700 text-sm">
                  Many freelancers fail to set aside money for student loans throughout the year, then face a large bill in January that they struggle to pay. Planning ahead is essential.
                </p>
              </div>
            </section>

            {/* What Counts as Income for Self-Employed Student Loans */}
            <section id="what-counts-as-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Counts as Income for Self-Employed Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For student loan purposes, self-employment income means your profit, not your revenue. This is crucial because expenses significantly reduce your obligation.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Key definitions:</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Revenue (Gross Income):</h4>
                    <p className="text-gray-700 text-sm">All money you receive from clients, customers, or your business activities. This is what comes in before any expenses.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Expenses (Deductible Costs):</h4>
                    <p className="text-gray-700 text-sm">Legitimate business expenses incurred wholly and exclusively for business purposes. These reduce your profit.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Profit (Taxable Income):</h4>
                    <p className="text-gray-700 text-sm">Revenue minus expenses. This is what gets assessed for student loans.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example calculation:</h3>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Freelance graphic designer:</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">Revenue and Expenses:</h5>
                    <ul className="text-gray-700 text-sm">
                      <li>Revenue from clients: £45,000</li>
                      <li><strong>Business expenses:</strong></li>
                      <li className="ml-4">Software subscriptions: £1,200</li>
                      <li className="ml-4">Equipment (laptop, tablet): £2,500</li>
                      <li className="ml-4">Home office costs: £1,500</li>
                      <li className="ml-4">Professional development: £800</li>
                      <li className="ml-4">Insurance: £400</li>
                      <li className="ml-4">Accountancy fees: £600</li>
                      <li className="ml-4">Marketing: £1,000</li>
                      <li className="ml-4">Travel to clients: £500</li>
                      <li><strong>Total expenses: £8,500</strong></li>
                      <li><strong>Profit: £45,000 - £8,500 = £36,500</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">Student loan calculation (Plan 2):</h5>
                    <ul className="text-gray-700 text-sm">
                      <li>Profit: £36,500</li>
                      <li>Threshold: £27,295</li>
                      <li>Amount above threshold: £9,205</li>
                      <li><strong>Student loan owed: £9,205 × 9% = £828.45</strong></li>
                    </ul>
                    <p className="text-gray-700 text-sm mt-2">
                      <strong>The designer pays student loans on £36,500, not £45,000.</strong> The £8,500 in legitimate business expenses significantly reduces the student loan obligation (saving £765 compared to if expenses weren&apos;t deductible).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Allowable Business Expenses and Student Loans */}
            <section id="allowable-expenses" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Allowable Business Expenses and Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding what counts as allowable business expenses matters enormously because it directly reduces your student loan obligation:
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common allowable expenses:</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Office costs:</h4>
                      <ul className="text-gray-700 text-sm list-disc ml-4">
                        <li>Rent for business premises</li>
                        <li>Business rates</li>
                        <li>Utilities for business premises</li>
                        <li>Home office costs (simplified or actual cost method)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Equipment and supplies:</h4>
                      <ul className="text-gray-700 text-sm list-disc ml-4">
                        <li>Computers, phones, tablets</li>
                        <li>Software and subscriptions</li>
                        <li>Office furniture</li>
                        <li>Tools and equipment needed for your trade</li>
                        <li>Stock and raw materials</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Running costs:</h4>
                      <ul className="text-gray-700 text-sm list-disc ml-4">
                        <li>Phone and internet bills (business proportion)</li>
                        <li>Postage and stationery</li>
                        <li>Printing and marketing materials</li>
                        <li>Website hosting and domains</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Travel:</h4>
                      <ul className="text-gray-700 text-sm list-disc ml-4">
                        <li>Business mileage (45p per mile for first 10,000 miles, 25p thereafter)</li>
                        <li>Public transport for business travel</li>
                        <li>Hotels and accommodation for business trips</li>
                        <li>Parking and tolls</li>
                        <li><strong>Not</strong> commuting from home to a regular workplace</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Professional costs:</h4>
                      <ul className="text-gray-700 text-sm list-disc ml-4">
                        <li>Accountancy and bookkeeping fees</li>
                        <li>Professional memberships and subscriptions</li>
                        <li>Business insurance</li>
                        <li>Legal and professional fees</li>
                        <li>Bank charges on business accounts</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Other:</h4>
                      <ul className="text-gray-700 text-sm list-disc ml-4">
                        <li>Training and courses to improve business skills</li>
                        <li>Industry conferences and networking events</li>
                        <li>Bad debts (if you&apos;ve been unable to collect payment)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Non-allowable expenses (don&apos;t reduce student loan obligation):</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Personal expenses (clothing for general wear, personal food)</li>
                  <li>Entertainment for yourself</li>
                  <li>Capital costs of buildings or equipment (though capital allowances might apply)</li>
                  <li>Fines and penalties</li>
                  <li>Business entertainment (client entertaining is generally not allowable)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Maximizing legitimate business expenses reduces your profit, which reduces your student loan obligation.</strong> But expenses must be genuine and wholly and exclusively for business. HMRC can challenge expenses, and if they disallow them, your profit increases retroactively, potentially meaning you underpaid student loans and owe the difference plus interest and penalties.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/cis-self-employed-calculator/" className="text-blue-600 underline hover:text-blue-800"> Self-Employment Profit Calculator </Link> helps you estimate your profit after expenses and your resulting student loan obligation.
                </p>
              </div>
            </section>

            {/* Self Assessment Process for Student Loans */}
            <section id="self-assessment-process" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Self Assessment Process for Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self-employed people must file Self Assessment tax returns annually, and student loan calculations are part of this process.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Self Assessment timeline:</h3>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">During the tax year (April 6 - April 5):</h4>
                    <ul className="text-gray-700 text-sm list-disc ml-4">
                      <li>Earn self-employment income</li>
                      <li>Track revenue and expenses</li>
                      <li>Set aside money for eventual tax and student loan bills</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">By October 5:</h4>
                    <p className="text-gray-700 text-sm">Deadline to notify HMRC you need to file Self Assessment (if this is your first year)</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">By January 31 following the tax year:</h4>
                    <ul className="text-gray-700 text-sm list-disc ml-4">
                      <li>File your Self Assessment tax return (can file from April 6 onward)</li>
                      <li>Pay any income tax, National Insurance, and student loan owed</li>
                      <li>Make first payment on account for next year (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example timeline:</h3>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">Tax year 2024/25 (April 6, 2024 - April 5, 2025):</h4>
                <ul className="text-gray-700 text-sm">
                  <li>Throughout: Track income and expenses</li>
                  <li>By October 5, 2024: Register for Self Assessment (if first year)</li>
                  <li>By January 31, 2026: File return and pay all amounts owed</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">The calculation HMRC performs:</h3>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>Total income (employment + self-employment profit + any other income)</p>
                  <p><strong>Minus:</strong> Annual threshold for your plan</p>
                  <p><strong>Equals:</strong> Amount above threshold</p>
                  <p><strong>Multiply by:</strong> 9% (or 6% for postgraduate)</p>
                  <p><strong>Minus:</strong> Student loans already paid through PAYE</p>
                  <p><strong>Equals:</strong> Additional student loan owed (or refund if negative)</p>
                </div>
                <p className="text-gray-700 text-sm mt-2">
                  The amount owed is due January 31 alongside your income tax. If you owe over £1,000, you might also need to make payments on account (advance payments toward next year&apos;s liability).
                </p>
              </div>
            </section>

            {/* Mixed Income: Employment and Self-Employment Combined */}
            <section id="mixed-income" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Mixed Income: Employment and Self-Employment Combined
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many people have both employed and self-employed income, creating complexity in student loan calculations:
              </p>

              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario: Part-time employment plus freelancing</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Income breakdown:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li><strong>Employment:</strong> £20,000 annually</li>
                        <li>PAYE deducts: £0 student loans (below Plan 2 threshold)</li>
                        <li><strong>Self-employment:</strong></li>
                        <li className="ml-4">Revenue: £18,000</li>
                        <li className="ml-4">Expenses: £3,000</li>
                        <li className="ml-4">Profit: £15,000</li>
                        <li><strong>Total income: £35,000</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Student loan calculation (Plan 2):</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Total income: £35,000</li>
                        <li>Threshold: £27,295</li>
                        <li>Above threshold: £7,705</li>
                        <li>Student loan owed: £693.45</li>
                        <li>Already paid through PAYE: £0</li>
                        <li><strong>Owe through Self Assessment: £693.45</strong></li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-3">
                    The employment income alone didn&apos;t trigger PAYE deductions. The self-employment income alone wouldn&apos;t have either (£15,000 is below threshold). But combined, you&apos;re £7,705 above the threshold and owe £693.45. <strong>This catches many people off-guard.</strong>
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario: Full-time employment plus side business</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Income breakdown:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li><strong>Employment:</strong> £32,000</li>
                        <li>PAYE deducts: (£32,000 - £27,295) × 9% = £423.45</li>
                        <li><strong>Self-employment side business:</strong></li>
                        <li className="ml-4">Revenue: £8,000</li>
                        <li className="ml-4">Expenses: £1,000</li>
                        <li className="ml-4">Profit: £7,000</li>
                        <li><strong>Total income: £39,000</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">Student loan calculation:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>Total income: £39,000</li>
                        <li>Above threshold: £11,705</li>
                        <li>Total owed for year: £1,053.45</li>
                        <li>Already paid through PAYE: £423.45</li>
                        <li><strong>Additional owe through Self Assessment: £630</strong></li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mt-3">
                    Your employer deducted based on your £32,000 salary, but couldn&apos;t account for your additional £7,000 self-employment income. Self Assessment reconciles everything and shows you owe an additional £630.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Planning for mixed income:</h3>
                <p className="text-gray-700 text-sm">
                  If you have both types of income, track your combined total throughout the year. Calculate whether your PAYE deductions are covering your full student loan obligation or whether you&apos;ll owe more at year-end. Set aside the difference monthly to avoid a shock in January.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> to model combined income scenarios and project your Self Assessment liability.
                </p>
              </div>
            </section>

            {/* Setting Aside Money Throughout the Year */}
            <section id="setting-aside-money" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Setting Aside Money Throughout the Year
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The biggest mistake self-employed people make with student loans is not setting money aside during the year. When January arrives and the bill is due, they don&apos;t have the money available.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">What to set aside:</h3>
                <p className="text-gray-700 text-sm mb-2">As self-employed, you need to set aside for:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Income tax (20%, 40%, or 45% depending on total income)</li>
                  <li>National Insurance (9% on profits £12,570-£50,270, 2% above that)</li>
                  <li>Student loans (9% on income above threshold, or 6% for postgraduate)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Combined percentages to set aside:</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">For a basic rate taxpayer with student loans earning above threshold:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Income tax: 20%</li>
                      <li>National Insurance: 9%</li>
                      <li>Student loans: 9%</li>
                      <li><strong>Total: 38% of profit above Personal Allowance and threshold</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">For a higher rate taxpayer with student loans:</h4>
                    <ul className="text-gray-700 text-sm">
                      <li>Income tax: 40%</li>
                      <li>National Insurance: 2%</li>
                      <li>Student loans: 9%</li>
                      <li><strong>Total: 51% of income in higher rate band</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Practical approach:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                  <li><strong>Step 1:</strong> Open a separate savings account specifically for tax and student loans</li>
                  <li><strong>Step 2:</strong> Each time you receive payment from a client, immediately transfer:
                    <ul className="list-disc ml-4 mt-1">
                      <li>40% of the payment if you&apos;re basic rate</li>
                      <li>50% of the payment if you&apos;re higher rate</li>
                    </ul>
                  </li>
                  <li><strong>Step 3:</strong> Don&apos;t touch this money throughout the year, no matter how tempting</li>
                  <li><strong>Step 4:</strong> When January arrives, pay your Self Assessment bill from this account</li>
                  <li><strong>Step 5:</strong> If there&apos;s money left over, congratulations! You&apos;ve over-saved and have a bonus.</li>
                </ol>

                <div className="mt-4 p-3 bg-white rounded">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Example:</h4>
                  <p className="text-gray-700 text-sm mb-1">Freelancer earns £45,000 revenue, £10,000 expenses, £35,000 profit.</p>
                  <p className="text-gray-700 text-sm mb-1">After each invoice payment:</p>
                  <ul className="text-gray-700 text-sm list-disc ml-4">
                    <li>£5,000 invoice received</li>
                    <li>Immediately transfer £2,000 to tax/student loan account (40%)</li>
                    <li>£3,000 stays in business account for living and business expenses</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    By January, the tax/student loan account has £14,000 (40% of £35,000). Your actual bill might be £12,000. You have £2,000 buffer for safety or as a bonus.
                  </p>
                </div>
              </div>
            </section>

            {/* Late Payment and Penalties */}
            <section id="late-payment-penalties" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Late Payment and Penalties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self-employed people who miss Self Assessment deadlines or don&apos;t pay student loans owed face penalties and interest charges:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Late filing penalties:</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>£100 if return is up to 3 months late</li>
                    <li>£10 per day for next 3 months (up to 90 days, max £900)</li>
                    <li>£300 or 5% of tax due (whichever is greater) if over 6 months late</li>
                    <li>Another £300 or 5% of tax due if over 12 months late</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Late payment penalties (for student loans and tax):</h3>
                  <ul className="text-gray-700 text-sm">
                    <li>5% of unpaid amount if 30 days late</li>
                    <li>Another 5% if 6 months late</li>
                    <li>Another 5% if 12 months late</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    <strong>Interest on unpaid amounts:</strong> HMRC charges interest on late payment at their set rate (currently around 7-8%), accruing daily from the due date until paid.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Owed £1,500 student loans plus £5,000 tax (£6,500 total) through Self Assessment due January 31.
                </p>
                <p className="text-gray-700 text-sm mb-2">Miss deadline, file and pay March 15 (6 weeks late):</p>
                <ul className="text-gray-700 text-sm">
                  <li>Late filing penalty: £100</li>
                  <li>Late payment penalty: £325 (5% of £6,500)</li>
                  <li>Interest: approximately £50 (depending on exact rate and days)</li>
                  <li><strong className="text-red-600">Total cost of being late: £475</strong></li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  This is on top of the £6,500 you already owed. <strong>Late payment is expensive. File and pay on time.</strong>
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Payment plans:</h3>
                <p className="text-gray-700 text-sm">
                  If you genuinely can&apos;t pay the full amount by January 31, contact HMRC immediately to arrange a payment plan. They&apos;re usually willing to work with you if you&apos;re proactive. Interest still accrues, but you avoid the steeper penalties.
                </p>
              </div>
            </section>

            {/* Common Mistakes Self-Employed People Make */}
            <section id="common-mistakes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Common Mistakes Self-Employed People Make
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 1: Not registering for Self Assessment</h3>
                    <p className="text-gray-700 text-sm">
                      Thinking that because student loans were handled through PAYE as an employee, they&apos;ll continue to be handled automatically when you become self-employed. They won&apos;t. You must register and file.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 2: Using revenue instead of profit</h3>
                    <p className="text-gray-700 text-sm">
                      Calculating student loans on £40,000 revenue instead of £32,000 profit (after £8,000 expenses), overpaying significantly.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 3: Not setting money aside</h3>
                    <p className="text-gray-700 text-sm">
                      Spending all income as it arrives, then facing a £2,000 student loan bill in January with no money saved to pay it.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 4: Missing deadlines</h3>
                    <p className="text-gray-700 text-sm">
                      Forgetting Self Assessment deadline, incurring £100+ in avoidable penalties plus interest charges.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 5: Not claiming legitimate expenses</h3>
                    <p className="text-gray-700 text-sm">
                      Failing to track and claim business expenses, artificially inflating profit and paying excessive student loans.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 6: Claiming non-allowable expenses</h3>
                    <p className="text-gray-700 text-sm">
                      Claiming personal expenses as business costs, getting caught in HMRC enquiry, having expenses disallowed and owing backdated student loans plus penalties.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 7: Not understanding mixed income</h3>
                    <p className="text-gray-700 text-sm">
                      Having both employment and self-employment but not realizing the combination requires Self Assessment and creates student loan obligations beyond what PAYE deducted.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Mistake 8: Ignoring postgraduate loans</h3>
                    <p className="text-gray-700 text-sm">
                      Focusing only on undergraduate loan obligations and forgetting about separate postgraduate loan with different threshold and 6% rate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>All of these are avoidable with proper understanding and planning.</strong>
                </p>
              </div>
            </section>

            {/* Taking Control of Self-Employment Student Loans */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Self-Employment Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self-employment requires active management of student loan obligations that employed people don&apos;t face:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Essential actions:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                  <li>Register for Self Assessment as soon as you become self-employed (by October 5 following your first tax year of self-employment)</li>
                  <li>Track income and expenses meticulously throughout the year using accounting software or spreadsheets</li>
                  <li>Set aside 40-50% of profit in a separate account for tax, NI, and student loans</li>
                  <li>Calculate your profit regularly (monthly or quarterly) to understand your annual trajectory</li>
                  <li>File Self Assessment by January 31 every year without fail</li>
                  <li>Pay all amounts owed on time to avoid penalties and interest</li>
                  <li>Claim all legitimate business expenses to minimize profit and reduce student loan obligations</li>
                  <li>Keep comprehensive records for at least 5 years in case of HMRC enquiries</li>
                  <li>Understand your plan type and threshold to calculate correctly</li>
                  <li>Consider professional help (accountants) if your situation is complex or if you&apos;re earning substantial amounts</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Self-employment offers freedom and flexibility that employment doesn&apos;t. Managing student loan obligations is part of the administrative cost of that freedom. With proper planning, record keeping, and timely filing, it&apos;s entirely manageable. The key is treating it as a serious obligation from day one, not an afterthought discovered when the January deadline looms and you realize you owe thousands with no money set aside.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Take control of your self-employment student loan obligations, and they&apos;ll be a predictable, manageable part of your business finances rather than a source of stress and unexpected bills.
              </h3>
              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/self-assessment-balancing-payment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Self Assessment Student Loan Calculator </Link> to model your obligations and ensure you&apos;re prepared.
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

export default SelfEmploymentStudentLoans;