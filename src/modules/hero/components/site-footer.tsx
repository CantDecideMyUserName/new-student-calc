import Link from "next/link";

export default function NavigationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50" aria-label="Site navigation">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Inter']">
            Explore Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
            Discover powerful tools, helpful resources, and everything you need to manage your student loans effectively
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Tools Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Inter'] group-hover:text-blue-600 transition-colors">
                Tools
              </h3>
            </div>
            <p className="text-gray-600 mb-6 font-['Open_Sans']">
              Smart calculators and planning tools to help you make informed decisions about your loans
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/calculators"
                  className="flex items-center text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3 group-hover/link:bg-blue-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Loan Calculators</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="flex items-center text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3 group-hover/link:bg-blue-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Compare Plans</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="flex items-center text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3 group-hover/link:bg-blue-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Loan Plans</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-blue-200 rounded-full mr-3 group-hover/link:bg-blue-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Repayment Help</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-200 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Inter'] group-hover:text-purple-600 transition-colors">
                Resources
              </h3>
            </div>
            <p className="text-gray-600 mb-6 font-['Open_Sans']">
              Educational content and support to guide you through every step of your journey
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guides"
                  className="flex items-center text-gray-700 hover:text-purple-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover/link:bg-purple-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Step-by-Step Guides</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="flex items-center text-gray-700 hover:text-purple-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover/link:bg-purple-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/regions"
                  className="flex items-center text-gray-700 hover:text-purple-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover/link:bg-purple-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">UK Regional Loan Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/lifecycle"
                  className="flex items-center text-gray-700 hover:text-purple-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-purple-200 rounded-full mr-3 group-hover/link:bg-purple-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Student loan lifcycle</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Inter'] group-hover:text-emerald-600 transition-colors">
                Legal & Privacy
              </h3>
            </div>
            <p className="text-gray-600 mb-6 font-['Open_Sans']">
              Transparent policies and legal information to keep you informed and protected
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex items-center text-gray-700 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-emerald-200 rounded-full mr-3 group-hover/link:bg-emerald-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="flex items-center text-gray-700 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-emerald-200 rounded-full mr-3 group-hover/link:bg-emerald-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Terms of Use</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="flex items-center text-gray-700 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-emerald-200 rounded-full mr-3 group-hover/link:bg-emerald-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Cookie Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="flex items-center text-gray-700 hover:text-emerald-600 hover:translate-x-1 transition-all duration-200 group/link"
                >
                  <div className="w-2 h-2 bg-emerald-200 rounded-full mr-3 group-hover/link:bg-emerald-500 transition-colors"></div>
                  <span className="font-medium font-['Open_Sans']">Financial Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}