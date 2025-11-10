import Link from "next/link";

export default function FeaturedCalculators() {
  return (
    <section className="max-w-6xl mx-auto px-6" aria-labelledby="featured-calculators-heading">
      <div className="text-center mb-12">
        <h2 id="featured-calculators-heading" className="text-3xl font-bold text-gray-800 mb-4">
          Popular Calculators
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the calculator that matches your student loan plan or specific need
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card: Plan 2 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
          <div className="mb-4 text-blue-600" aria-hidden="true">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Calculator</h3>
          <p className="text-gray-600 mb-4">
            For students who started university between 2012-2023 in England &amp; Wales
          </p>
          <Link
            href="/calculators/plan-2-student-loan-calculator/"
            aria-label="Calculate your Plan 2 student loan repayments"
            className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
          >
            Calculate Plan 2 Loan
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          </Link>
        </div>

        {/* Card: Compare Plans */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
          <div className="mb-4 text-blue-600" aria-hidden="true">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Compare Plans</h3>
          <p className="text-gray-600 mb-4">
            See monthly payments across all loan types based on your salary
          </p>
          <Link
            href="/calculators/monthly-repayment-calculator/"
            aria-label="Compare monthly payments across different student loan plans"
            className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
          >
            Compare Monthly Payments
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          </Link>
        </div>

        {/* Card: Total Cost Calculator */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
          <div className="mb-4 text-blue-600" aria-hidden="true">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Cost Calculator</h3>
          <p className="text-gray-600 mb-4">
            Estimate the lifetime cost of your student loan and see if you&apos;ll repay it in full
          </p>
          <Link
            href="/calculators/total-loan-cost-calculator/"
            aria-label="Calculate the lifetime cost of your student loan"
            className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
          >
            Calculate Total Cost
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/calculators/"
          aria-label="View all available student loan calculators"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
        >
          View All Calculators
          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
