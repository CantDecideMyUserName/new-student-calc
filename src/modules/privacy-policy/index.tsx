import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last updated: March 20, 2024</p>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                At Student Loan Calculator UK, we take your privacy seriously.
                This policy explains how we collect, use, and protect your
                personal information when you use our website.
              </p>
              <p className="text-gray-600">
                We are committed to ensuring that your privacy is protected in
                accordance with UK data protection laws, including the UK GDPR
                and the Privacy and Electronic Communications Regulations (PECR).
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Collect
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 mb-4">
                  When you visit our website, we automatically collect certain
                  information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>IP address (anonymized)</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
                <p className="text-gray-600">
                  This information is collected through cookies and similar
                  technologies, and is used to improve our website and user
                  experience.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website performance and user experience</li>
                <li>Enable future advertising features (if implemented)</li>
              </ul>
              <p className="text-gray-600">
                For detailed information about the cookies we use, please visit
                our{" "}
                <Link className="text-blue-600 hover:text-blue-800" href="/cookie-policy/">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Third-Party Services
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Google Analytics
                  </h3>
                  <p className="text-gray-600">
                    We use Google Analytics to understand how visitors interact
                    with our website. Google Analytics uses cookies to collect
                    anonymous information about your browsing behavior.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Advertising Services
                  </h3>
                  <p className="text-gray-600">
                    We may use Google AdSense or Ezoic in the future to display
                    advertisements. These services may use cookies to personalize
                    ads based on your browsing history.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Legal Basis for Processing
              </h2>
              <p className="text-gray-600 mb-4">
                We process your data on the following legal bases:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Legitimate interests in improving our website and services</li>
                <li>Legal obligations under UK data protection laws</li>
                <li>Your consent for non-essential cookies and tracking</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">
                Under UK GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data
                  practices, please contact us:
                </p>
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
                <p className="text-gray-600 mt-4">
                  Or visit our{" "}
                  <Link className="text-blue-600 hover:text-blue-800" href="/contact/">
                    contact page
                  </Link>{" "}
                  for more ways to get in touch.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            {/* Back home */}
            <section className="mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
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
