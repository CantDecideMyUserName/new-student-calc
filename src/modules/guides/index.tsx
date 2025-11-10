import Link from "next/link";


export default function GuidesPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 pb-16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <span className="font-medium text-gray-800" aria-current="page">
                      Guides
                    </span>
                  </li>
                </ol>
              </nav>


              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Student Loan Guides</h1>
              <p className="text-xl text-gray-600">
                Understand the UK student loan system with our comprehensive guides and resources
              </p>
            </div>
          </section>


          {/* Understanding Loan Mechanics */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Understanding Loan Mechanics
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/how-student-loans-work-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to the UK student loan system, plans, and repayment mechanics.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Beginner</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Essential</span>
                </div>
              </Link>


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
                <p className="text-gray-600 mb-4">
                  How interest rates work, how they&apos;re calculated, and their impact on your total repayments.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Intermediate</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Interest Rates</span>
                </div>
              </Link>


              <Link
                href="/guides/repayment-thresholds/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Repayment Thresholds Explained</h3>
                <p className="text-gray-600 mb-4">
                  A guide to income thresholds for all UK student loan plans and how they affect your monthly payments.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Beginner</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Repayments</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Salary &amp; Scenario Guides
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/student-loans-low-income/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-green-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.414l4.707-4.707-1.414-1.414L11 10.586V5H9v5.586L5.707 7.293 4.293 8.707 10 14.414V18h2v-4.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans on Low Incomes</h3>
                <p className="text-gray-600 mb-4">
                  What happens if you earn below the repayment threshold or have variable income.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Income Planning</span>
                </div>
              </Link>


              <Link
                href="/guides/student-loans-high-earners/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-green-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans for High Earners</h3>
                <p className="text-gray-600 mb-4">
                  Strategic planning for graduates expecting high incomes and when early repayment makes sense.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Strategy</span>
                </div>
              </Link>


              <Link
                href="/guides/student-loans-and-mortgages/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-green-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans &amp; Mortgages</h3>
                <p className="text-gray-600 mb-4">
                  How student loan repayments affect mortgage applications and housing affordability.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Home Buying</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Repayment Strategy Guides */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Repayment Strategy Guides
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/should-i-overpay-loan/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-purple-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Should You Overpay Your Student Loan?</h3>
                <p className="text-gray-600 mb-4">
                  A detailed analysis of when making additional payments makes financial sense.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Financial Planning</span>
                </div>
              </Link>


              <Link
                href="/guides/investing-vs-loan-repayment/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-purple-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Investing vs. Loan Repayment</h3>
                <p className="text-gray-600 mb-4">
                  Comparing the potential returns of investing extra money versus paying off your student loan faster.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Investment Strategy</span>
                </div>
              </Link>


              <Link
                href="/guides/student-loans-and-taxes/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-purple-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans &amp; Tax Planning</h3>
                <p className="text-gray-600 mb-4">
                  Understanding how student loan repayments interact with income tax and pension contributions.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Tax Optimization</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Tax & Employment Integration
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/student-loan-tax-codes/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-orange-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Your Student Loan Tax Code</h3>
                <p className="text-gray-600 mb-4">
                  SL, PGL, and number codes explained - how tax codes affect take-home pay and loan deductions.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Tax Codes</span>
                </div>
              </Link>

              <Link
                href="/guides/paye-vs-self-assessment-student-loans/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-orange-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">PAYE vs Self Assessment Repayments</h3>
                <p className="text-gray-600 mb-4">
                  Timing differences, overpayment risks, and reconciliation between PAYE and Self Assessment systems.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Tax Systems</span>
                </div>
              </Link>

              <Link
                href="/guides/contractors-student-loans-ir35-umbrella-cis/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-orange-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans for Contractors</h3>
                <p className="text-gray-600 mb-4">
                  IR35, umbrella companies, and CIS deductions - complex employment structures affecting loan repayments.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Contractors</span>
                </div>
              </Link>

              <Link
                href="/guides/p60-p45-student-loan-repayments/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-orange-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How P60 and P45 Forms Affect Repayments</h3>
                <p className="text-gray-600 mb-4">
                  End of year reconciliation, changing jobs, and overpayment recovery using P60 and P45 forms.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Tax Forms</span>
                </div>
              </Link>

              <Link
                href="/guides/student-loan-tax-code-payslip-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-orange-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a3 3 0 106 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 8a1 1 0 012 0v1h2V9a1 1 0 112 0v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tax Code & Payslip Verification Guide</h3>
                <p className="text-gray-600 mb-4">
                  How to read payslips, verify deductions, spot errors, and claim refunds for student loan overpayments.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Payslips</span>
                </div>
              </Link>

            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Income Complexity
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/multiple-jobs-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Managing Student Loans with Multiple Jobs</h3>
                <p className="text-gray-600 mb-4">
                  PAYE split codes and threshold allocation across employers when working multiple jobs.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Multiple Jobs</span>
                </div>
              </Link>

              <Link
                href="/guides/bonus-payments-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Bonus Payments and Student Loans</h3>
                <p className="text-gray-600 mb-4">
                  Why you pay more in bonus months - Period 1 codes and monthly threshold calculations explained.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Bonuses</span>
                </div>
              </Link>

              <Link
                href="/guides/side-hustles-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Side Hustles and Student Loans</h3>
                <p className="text-gray-600 mb-4">
                  Self-employment income impact - gig economy and freelancing alongside PAYE employment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Self-Employment</span>
                </div>
              </Link>

              <Link
                href="/guides/investment-income-dividends-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Income, Dividends and Repayments</h3>
                <p className="text-gray-600 mb-4">
                  When investment income triggers student loan repayments through Self Assessment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Investments</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Strategic Financial Planning
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/pension-vs-student-loan-overpayments-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-teal-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pension Contributions vs Student Loan Overpayments</h3>
                <p className="text-gray-600 mb-4">
                  Strategic comparison for high earners - what delivers better long-term value?
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">Pensions</span>
                </div>
              </Link>

              <Link
                href="/guides/salary-sacrifice-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-teal-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Salary Sacrifice Benefits and Repayments</h3>
                <p className="text-gray-600 mb-4">
                  Hidden savings through childcare vouchers, cycle to work, EV schemes and their impact on student loans.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">Salary Sacrifice</span>
                </div>
              </Link>

              <Link
                href="/guides/career-progression-student-loans-marginal-tax/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-teal-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans and Career Progression</h3>
                <p className="text-gray-600 mb-4">
                  When higher salary costs more - marginal effective tax rates and promotion timing strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">Career Planning</span>
                </div>
              </Link>

              <Link
                href="/guides/crossing-student-loan-thresholds-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-teal-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Crossing Student Loan Thresholds</h3>
                <p className="text-gray-600 mb-4">
                  Strategic salary negotiation guide covering £50k cliff edge (Plan 2) and £25k threshold crossing.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded">Thresholds</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Life Stage Integration
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/maternity-pay-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-pink-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Maternity Pay and Student Loans</h3>
                <p className="text-gray-600 mb-4">
                  Budgeting for reduced income - SMP/SPP calculations and student loan adjustments during parental leave.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">Parental Leave</span>
                </div>
              </Link>

              <Link
                href="/guides/part-time-work-student-loans-uk/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-pink-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Part-Time Work and Student Loans</h3>
                <p className="text-gray-600 mb-4">
                  Threshold calculations explained - pro-rata thresholds and term-time only contracts.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">Part-Time</span>
                </div>
              </Link>

              <Link
                href="/guides/moving-abroad-uk-student-loans/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-pink-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans When Moving Abroad</h3>
                <p className="text-gray-600 mb-4">
                  Leaving UK employment - overseas repayment obligations, currency conversions, and reporting requirements.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">Overseas</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Plan-Specific Strategy
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/plan-2-student-loans-uk-strategy/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-cyan-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Student Loans: Strategies for 2012-2023 Starters</h3>
                <p className="text-gray-600 mb-4">
                  Deep dive into RPI+3% era, threshold changes, and 30-year write-off optimization.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Plan 2</span>
                </div>
              </Link>

              <Link
                href="/guides/plan-5-student-loans-uk-optimization/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-cyan-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 5 Optimisation: New Rules for Post-2023 Students</h3>
                <p className="text-gray-600 mb-4">
                  Strategic guide covering lower interest vs 40-year write-off trade-offs for recent starters.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Plan 5</span>
                </div>
              </Link>

              <Link
                href="/guides/postgraduate-loans-uk-strategy/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-cyan-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Combining Undergraduate and Postgraduate Loans</h3>
                <p className="text-gray-600 mb-4">
                  Repayment allocation strategy - 6% vs 9% thresholds and strategic overpayment allocation.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Combined Loans</span>
                </div>
              </Link>
            </div>
          </section>

          {/* <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Regional &amp; Systemic Depth
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/guides/regional-salary-differences/"
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
              >
                <div className="mb-4 text-amber-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Regional Salary Differences and Repayments</h3>
                <p className="text-gray-600 mb-4">
                  London vs UK regions - cost of living vs repayment burden and relocation decision analysis.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded">Regional Analysis</span>
                </div>
              </Link>
            </div>
          </section> */}

          <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Personal Repayments</h2>
              <p className="text-lg text-blue-100">
                Use our suite of calculators to apply what you&apos;ve learned to your specific situation.
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
                  Compare Loan Plans
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}



// import Link from "next/link";

// export default function GuidesPage() {
//   return (
//     <main className="flex-grow">
//       <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         <div className="space-y-12 pb-16">
//           {/* Hero */}
//           <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
//             <div className="max-w-4xl mx-auto">
//               <nav aria-label="breadcrumb">
//                 <ol className="flex items-center space-x-1 text-sm text-gray-600">
//                   <li>
//                     <Link className="hover:text-blue-700 hover:underline" href="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </li>
//                   <li>
//                     <span className="font-medium text-gray-800" aria-current="page">
//                       Guides
//                     </span>
//                   </li>
//                 </ol>
//               </nav>

//               <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Student Loan Guides</h1>
//               <p className="text-xl text-gray-600">
//                 Understand the UK student loan system with our comprehensive guides and resources
//               </p>
//             </div>
//           </section>

//           {/* Understanding Loan Mechanics */}
//           <section className="max-w-6xl mx-auto">
//             <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
//               Understanding Loan Mechanics
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <Link
//                 href="/guides/how-student-loans-work-uk/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-blue-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
//                 <p className="text-gray-600 mb-4">
//                   A comprehensive guide to the UK student loan system, plans, and repayment mechanics.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Beginner</span>
//                   <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Essential</span>
//                 </div>
//               </Link>

//               <Link
//                 href="/guides/loan-interest-explained/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-blue-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Student Loan Interest</h3>
//                 <p className="text-gray-600 mb-4">
//                   How interest rates work, how they&apos;re calculated, and their impact on your total repayments.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Intermediate</span>
//                   <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Interest Rates</span>
//                 </div>
//               </Link>

//               <Link
//                 href="/guides/repayment-thresholds/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-blue-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Repayment Thresholds Explained</h3>
//                 <p className="text-gray-600 mb-4">
//                   A guide to income thresholds for all UK student loan plans and how they affect your monthly payments.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Beginner</span>
//                   <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Repayments</span>
//                 </div>
//               </Link>
//             </div>
//           </section>

//           {/* Salary & Scenario Guides */}
//           <section className="max-w-6xl mx-auto">
//             <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
//               Salary &amp; Scenario Guides
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <Link
//                 href="/guides/student-loans-low-income/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-green-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.414l4.707-4.707-1.414-1.414L11 10.586V5H9v5.586L5.707 7.293 4.293 8.707 10 14.414V18h2v-4.586z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans on Low Incomes</h3>
//                 <p className="text-gray-600 mb-4">
//                   What happens if you earn below the repayment threshold or have variable income.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Income Planning</span>
//                 </div>
//               </Link>

//               <Link
//                 href="/guides/student-loans-high-earners/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-green-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans for High Earners</h3>
//                 <p className="text-gray-600 mb-4">
//                   Strategic planning for graduates expecting high incomes and when early repayment makes sense.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Strategy</span>
//                 </div>
//               </Link>

//               <Link
//                 href="/guides/student-loans-and-mortgages/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-green-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans &amp; Mortgages</h3>
//                 <p className="text-gray-600 mb-4">
//                   How student loan repayments affect mortgage applications and housing affordability.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Home Buying</span>
//                 </div>
//               </Link>
//             </div>
//           </section>

//           {/* Repayment Strategy Guides */}
//           <section className="max-w-6xl mx-auto">
//             <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
//               Repayment Strategy Guides
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <Link
//                 href="/guides/should-i-overpay-loan/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-purple-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Should You Overpay Your Student Loan?</h3>
//                 <p className="text-gray-600 mb-4">
//                   A detailed analysis of when making additional payments makes financial sense.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Financial Planning</span>
//                 </div>
//               </Link>

//               <Link
//                 href="/guides/investing-vs-loan-repayment/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-purple-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Investing vs. Loan Repayment</h3>
//                 <p className="text-gray-600 mb-4">
//                   Comparing the potential returns of investing extra money versus paying off your student loan faster.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Investment Strategy</span>
//                 </div>
//               </Link>

//               <Link
//                 href="/guides/student-loans-and-taxes/"
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
//               >
//                 <div className="mb-4 text-purple-600">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans &amp; Tax Planning</h3>
//                 <p className="text-gray-600 mb-4">
//                   Understanding how student loan repayments interact with income tax and pension contributions.
//                 </p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Tax Optimization</span>
//                 </div>
//               </Link>
//             </div>
//           </section>

//           {/* CTA */}
//           <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
//             <div className="text-center space-y-6">
//               <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Personal Repayments</h2>
//               <p className="text-lg text-blue-100">
//                 Use our suite of calculators to apply what you&apos;ve learned to your specific situation.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <Link
//                   className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
//                   href="/calculators/"
//                 >
//                   Try Our Calculators
//                 </Link>
//                 <Link
//                   className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
//                   href="/plans/"
//                 >
//                   Compare Loan Plans
//                 </Link>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }
