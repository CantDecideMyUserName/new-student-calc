import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="flex-grow">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                <div className="max-w-4xl mx-auto px-6 py-12">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
                        <p className="text-gray-600 mb-8">Last updated: March 20, 2024</p>

                        {/* Introduction */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                            <p className="text-gray-600 mb-4">
                                Welcome to Student Loan Calculator UK. By accessing and using this website, you
                                agree to be bound by these Terms of Use. If you do not agree to these terms,
                                please do not use our website.
                            </p>
                            <p className="text-gray-600">
                                These terms apply to all visitors, users, and others who access or use our
                                website.
                            </p>
                        </section>

                        {/* Disclaimer */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
                            <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                <p className="text-gray-600 mb-4">
                                    The information provided on this website is for general informational purposes
                                    only and should not be considered as:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 mb-4">
                                    <li>Legal advice</li>
                                    <li>Financial advice</li>
                                    <li>Tax advice</li>
                                    <li>Professional advice of any kind</li>
                                </ul>
                                <p className="text-gray-600">
                                    While we strive to provide accurate and up-to-date information, we make no
                                    representations or warranties of any kind, express or implied, about the
                                    completeness, accuracy, reliability, suitability, or availability of the
                                    information, products, services, or related graphics contained on our website.
                                </p>
                            </div>
                        </section>

                        {/* Website Usage Rules */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Website Usage Rules</h2>

                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Permitted Use</h3>
                                    <p className="text-gray-600 mb-4">You may use our website for:</p>
                                    <ul className="list-disc pl-6 text-gray-600">
                                        <li>Personal, non-commercial purposes</li>
                                        <li>Educational purposes</li>
                                        <li>Research purposes</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Prohibited Activities</h3>
                                    <p className="text-gray-600 mb-4">You must not:</p>
                                    <ul className="list-disc pl-6 text-gray-600">
                                        <li>Use our website for any commercial purpose without our express written consent</li>
                                        <li>Scrape, crawl, or spider any content from our website</li>
                                        <li>Use automated systems or software to extract data from our website</li>
                                        <li>Attempt to interfere with or disrupt our website or servers</li>
                                        <li>Use our website in any way that violates any applicable laws or regulations</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-600 mb-4">
                                    To the maximum extent permitted by law, Student Loan Calculator UK and its
                                    operators:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 mb-4">
                                    <li>Shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages</li>
                                    <li>Make no warranties about the accuracy or reliability of our calculators</li>
                                    <li>Are not responsible for any decisions made based on the information provided</li>
                                    <li>Do not guarantee the availability or uninterrupted operation of our website</li>
                                </ul>
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
                            <p className="text-gray-600 mb-4">All content on this website, including but not limited to:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6">
                                <li>Text, graphics, logos, and images</li>
                                <li>Calculator designs and algorithms</li>
                                <li>Website layout and design</li>
                                <li>Software and code</li>
                            </ul>
                            <p className="text-gray-600">
                                is the property of Student Loan Calculator UK or its content suppliers and is protected
                                by UK and international copyright laws.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
                            <p className="text-gray-600 mb-4">
                                We reserve the right to modify these terms at any time. We will notify users of any
                                material changes by:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6">
                                <li>Updating the &quot;Last updated&quot; date at the top of this page</li>
                                <li>Posting a notice on our website</li>
                            </ul>
                            <p className="text-gray-600">
                                Your continued use of our website after any changes constitutes your acceptance of
                                the new terms.
                            </p>
                        </section>

                        {/* User Agreement */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Agreement</h2>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-600 mb-4">
                                    In the future, we may implement features that require explicit agreement to these
                                    terms. Such features may include:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>User accounts</li>
                                    <li>Personalized calculators</li>
                                    <li>Data saving features</li>
                                    <li>Newsletter subscriptions</li>
                                </ul>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-600 mb-4">
                                    If you have any questions about these terms, please contact us:
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
