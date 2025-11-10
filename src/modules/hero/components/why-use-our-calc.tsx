export default function WhyUseCalculators() {
  return (
    <section className="bg-gray-50 py-16 px-6 rounded-2xl" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-bold text-gray-800 mb-4">
            Why Use Our Calculators?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our calculators are designed to help you make informed decisions about your student loans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Accurate Calculations */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-4" aria-hidden="true">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Calculations</h3>
            <p className="text-gray-600">
              Our calculators use up-to-date thresholds, interest rates, and repayment rules for all
              UK student loan plans.
            </p>
          </div>

          {/* Easy to Understand */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-4" aria-hidden="true">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Understand</h3>
            <p className="text-gray-600">
              Clear explanations and visualizations help you grasp the long-term impact of your
              student loans on your finances.
            </p>
          </div>

          {/* Completely Free */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-4" aria-hidden="true">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Completely Free</h3>
            <p className="text-gray-600">
              All our calculators are free to use, with no registration required or hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
