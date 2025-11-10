import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

            {/* Get in Touch */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-4">
                  We aim to respond to all inquiries within 48 hours. Please note
                  that while we can help with questions about our calculators and
                  general student loan information, we cannot provide financial
                  advice.
                </p>
                <p className="text-gray-600 mb-6">
                  For official student loan information, please visit{" "}
                  <Link
                    href="https://www.gov.uk/student-finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    gov.uk/student-finance
                  </Link>
                  .
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Leeds, West Yorkshire LS1 4DY, United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <Link
                      href="mailto:support@studentloancalculator.uk"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      support@studentloancalculator.uk
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact form (non-functional placeholder) */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6" aria-label="Contact form">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    aria-required="true"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    aria-required="true"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    aria-required="true"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Have Questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  Check out our{" "}
                  <Link className="text-blue-600 hover:text-blue-800" href="/faqs/">
                    Frequently Asked Questions
                  </Link>{" "}
                  for quick answers to common questions.
                </p>
                <Link
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                  href="/"
                >
                  Return to Homepage
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}