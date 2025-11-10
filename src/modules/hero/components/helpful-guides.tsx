import Link from "next/link";

export default function HelpfulGuides() {
  return (
    <section className="max-w-6xl mx-auto px-6" aria-labelledby="guides-heading">
      <div className="text-center mb-12">
        <h2 id="guides-heading" className="text-3xl font-bold text-gray-800 mb-4">
          Helpful Guides
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn more about how UK student loans work
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <Link
          href="/guides/how-student-loans-work-uk"
          aria-label="Read guide about how UK student loans work"
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
        >
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-blue-100 text-blue-800">
              <span className="text-xl font-semibold">How UK Student Loans Work</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Understanding UK Student Loans
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about the different loan plans, how repayments work, and what happens after
              graduation.
            </p>
            <div className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
              Read the Guide
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href="/guides/should-i-overpay-loan"
          aria-label="Read guide about student loan overpayments"
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
        >
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-green-100 text-green-800">
              <span className="text-xl font-semibold">Overpayment Strategy</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Should You Overpay Your Student Loan?
            </h3>
            <p className="text-gray-600 mb-4">
              Explore whether making voluntary overpayments makes financial sense based on your
              circumstances.
            </p>
            <div className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
              Read the Guide
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/guides"
          aria-label="Browse all student loan guides"
          className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
        >
          Browse All Guides
          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
