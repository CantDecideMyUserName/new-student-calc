import Link from 'next/link'
import React from 'react'

const CompareListPage = () => {
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <span className="font-medium text-gray-800" aria-current="page">Compare</span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Compare Student Loan Plans
              </h1>
              <p className="text-xl text-gray-600">
                Side-by-side comparisons of different UK student loan plans to help you understand the differences
              </p>
            </div>
          </section>

          {/* Plan Comparisons */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Plan Comparisons
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                href="/compare/plan-2-vs-plan-5"
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 vs Plan 5</h3>
                <p className="text-gray-600 mb-4">
                  Compare 2012-2023 loans (Plan 2) with the newer 2023 onwards loans (Plan 5). Understand key differences in thresholds, interest rates, and repayment terms.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">England &amp; Wales</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Most Popular</span>
                </div>
              </Link>

              <Link
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                href="/compare/plan-1-vs-plan-2"
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 1 vs Plan 2</h3>
                <p className="text-gray-600 mb-4">
                  Compare pre-2012 loans (Plan 1) with 2012-2023 loans (Plan 2). See differences in interest rates, repayment thresholds, and long-term costs.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">England &amp; Wales</span>
                </div>
              </Link>

              <Link
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                href="/compare/plan-4-vs-plan-5"
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 4 vs Plan 5</h3>
                <p className="text-gray-600 mb-4">
                  Compare Scottish student loans (Plan 4) with the newer 2023 English loans (Plan 5). Understand regional differences and their financial impact.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Scotland Comparison</span>
                </div>
              </Link>

              <Link
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                href="/compare/undergraduate-vs-postgraduate"
              >
                <div className="mb-4 text-blue-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Undergraduate vs Postgraduate Loans</h3>
                <p className="text-gray-600 mb-4">
                  Compare undergraduate student loans with postgraduate Master&apos;s and PhD loans. Understand the different repayment terms and how they interact.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Further Study</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Interactive Tools */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Interactive Comparison Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/calculators/monthly-repayment-calculator">
                <div className="mb-4 text-green-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Monthly Repayment Calculator</h3>
                <p className="text-gray-600 mb-4">Compare monthly repayments across all loan plans based on your salary.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Interactive</span>
                </div>
              </Link>

              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/calculators/total-loan-cost-calculator">
                <div className="mb-4 text-green-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Cost Comparison</h3>
                <p className="text-gray-600 mb-4">Compare the lifetime costs of different student loan plans based on your expected career path.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Interactive</span>
                </div>
              </Link>

              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/calculators/combined-repayment-calculator">
                <div className="mb-4 text-green-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Combined Loans Calculator</h3>
                <p className="text-gray-600 mb-4">See how multiple student loans interact for people with both undergraduate and postgraduate debt.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Interactive</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Salary-Based Comparisons */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Salary-Based Comparisons
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/student-loans-on-25k-salary">
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Loans Compared on a £25,000 Salary</h3>
                <p className="text-gray-600 mb-4">How different loan plans compare for someone earning £25,000, including monthly costs and total repayments.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Entry Level</span>
                </div>
              </Link>

              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/student-loans-on-50k-salary">
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Loans Compared on a £50,000 Salary</h3>
                <p className="text-gray-600 mb-4">Comparison of all loan plans for a higher earner on £50,000, with analysis of repayment strategies.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Higher Earner</span>
                </div>
              </Link>

              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/student-loans-career-progression">
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Progression Comparison</h3>
                <p className="text-gray-600 mb-4">How different loan plans compare with salary growth from £25,000 to £60,000 over 15 years.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Career Growth</span>
                </div>
              </Link>

              <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/compare/student-loans-by-profession">
                <div className="mb-4 text-indigo-600">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Loans by Profession</h3>
                <p className="text-gray-600 mb-4">Compare loan repayments across different professions including teaching, nursing, engineering, and finance.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Career-Specific</span>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Personal Repayments</h2>
              <p className="text-lg text-blue-100">
                Use our calculators to see exactly how each loan plan would affect your finances
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
                  href="/guides/how-student-loans-work-uk/"
                >
                  Read Our Guides
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default CompareListPage