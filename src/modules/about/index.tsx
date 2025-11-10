import Link from "next/link";


export default function AboutPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              About Student Loan Calculator UK
            </h1>

            {/* Our Mission */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                Student Loan Calculator UK provides free, accurate tools to help UK
                students and graduates understand their loan repayments. Our mission
                is to make student finance more transparent and accessible to everyone.
              </p>
              <p className="text-gray-600">
                Whether you&apos;re planning your university finances or managing your
                repayments after graduation, our calculators help you make informed
                decisions about your student loans. Try our{" "}
                <Link
                  className="text-blue-600 hover:text-blue-800"
                  href="/calculators/plan-2-student-loan-calculator/"
                >
                  Plan 2 calculator
                </Link>{" "}
                or{" "}
                <Link
                  className="text-blue-600 hover:text-blue-800"
                  href="/calculators/plan-5-student-loan-calculator/"
                >
                  Plan 5 calculator
                </Link>{" "}
                to see how they work.
              </p>
            </section>

            {/* Who We Are */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👩‍🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Dr. Lila Sharma
                    </h3>
                    <p className="text-gray-600 mb-2">
                      UK Education Policy Specialist
                    </p>
                    <p className="text-gray-600">
                      With over 15 years of experience in UK education policy and
                      student finance, Dr. Sharma founded Student Loan Calculator UK to
                      help students navigate the complex world of student loans.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Our Calculators Work */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How Our Calculators Work
              </h2>
              <p className="text-gray-600 mb-4">
                Our calculators are built using official data from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>
                  Government thresholds and rates from{" "}
                  <Link
                    href="https://www.gov.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    gov.uk
                  </Link>
                </li>
                <li>Student Loans Company (SLC) repayment rules</li>
                <li>Latest interest rate calculations</li>
              </ul>
              <p className="text-gray-600">
                We regularly update our calculators to reflect changes in government
                policy and interest rates. For detailed information about how student
                loans work, check out our{" "}
                <Link
                  className="text-blue-600 hover:text-blue-800"
                  href="/guides/how-student-loans-work-uk/"
                >
                  comprehensive guide
                </Link>
                .
              </p>
            </section>

            {/* Transparency & Ethics */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Transparency &amp; Ethics
              </h2>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Commitment to Accuracy
                </h3>
                <p className="text-gray-600 mb-4">
                  We are committed to providing accurate and up-to-date information.
                  However, it&apos;s important to note that:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>
                    We are not affiliated with the UK government or Student Loans Company
                  </li>
                  <li>
                    Our calculators provide estimates based on current rules and rates
                  </li>
                  <li>Individual circumstances may vary</li>
                  <li>Our content is for informational purposes only</li>
                </ul>
                <p className="text-gray-600">
                  For official information, please visit{" "}
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
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Leeds, West Yorkshire LS1 4DY, UK
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Have Questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  Check out our{" "}
                  <Link
                    className="text-blue-600 hover:text-blue-800"
                    href="/faqs/"
                  >
                    Frequently Asked Questions
                  </Link>{" "}
                  for more information about student loans and our calculators.
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
                    xmlns="http://www.w3.org/2000/svg"
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