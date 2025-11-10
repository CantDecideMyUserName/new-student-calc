import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | Student Loan Calculator UK',
  description: 'Important disclaimer and legal information about the Student Loan Calculator UK website and the information provided.',
  robots: 'index, follow',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          
          {/* Independence Notice */}
          <section>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 font-medium">
                This website is not affiliated with the Student Loans Company or UK Government. 
                Information is provided for guidance only and should not be considered financial advice.
              </p>
            </div>
          </section>

          {/* General Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                The information provided on Student Loan Calculator UK is for general informational 
                and educational purposes only. While we strive to ensure accuracy, the content on 
                this website should not be relied upon as professional financial, legal, or tax advice.
              </p>
              <p>
                All calculations, estimates, and projections provided by our calculator tools are 
                based on current publicly available information and assumptions. These are intended 
                to help you understand your potential student loan obligations but may not reflect 
                your actual circumstances.
              </p>
            </div>
          </section>

          {/* No Official Affiliation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Official Affiliation</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Student Loan Calculator UK is an independent website and is not affiliated with, 
                endorsed by, or connected to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Student Loans Company (SLC)</li>
                <li>UK Government or any government department</li>
                <li>Student Finance England, Wales, Scotland, or Northern Ireland</li>
                <li>Any university or educational institution</li>
                <li>Any financial institution or lending organization</li>
              </ul>
              <p>
                We are not authorized to make official decisions about your student loan or 
                provide definitive guidance on your repayment obligations.
              </p>
            </div>
          </section>

          {/* Not Financial Advice */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Financial Advice</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                The information and tools provided on this website do not constitute financial, 
                investment, tax, or legal advice. We do not recommend any specific financial 
                products or strategies.
              </p>
              <p>
                Before making any financial decisions regarding your student loan, including 
                decisions about overpayments, investments, or repayment strategies, you should:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consult with a qualified financial advisor</li>
                <li>Contact the Student Loans Company directly</li>
                <li>Review official government guidance</li>
                <li>Consider your personal financial circumstances</li>
              </ul>
            </div>
          </section>

          {/* Accuracy and Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy and Limitations</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                While we make every effort to ensure the information on this website is accurate 
                and up-to-date, we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The completeness or accuracy of all information</li>
                <li>That calculations reflect your specific circumstances</li>
                <li>That information remains current, as policies and rates change</li>
                <li>The absence of errors or omissions</li>
              </ul>
              <p>
                Student loan policies, interest rates, repayment thresholds, and other parameters 
                are subject to change by the UK Government. Our calculator uses current publicly 
                available rates and thresholds, but these may not reflect future changes.
              </p>
            </div>
          </section>

          {/* Assumptions and Estimates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assumptions and Estimates</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Our calculator makes certain assumptions and simplifications that may not apply 
                to your situation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Future income growth follows predicted patterns</li>
                <li>Interest rates remain consistent or follow stated projections</li>
                <li>Government policies remain unchanged</li>
                <li>Employment remains continuous</li>
                <li>No career breaks, unemployment periods, or income fluctuations</li>
              </ul>
              <p>
                Actual repayments and total amounts paid may differ significantly from calculated 
                estimates based on changes in your personal circumstances or government policy.
              </p>
            </div>
          </section>

          {/* No Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                To the fullest extent permitted by law, Student Loan Calculator UK and its 
                operators shall not be liable for any:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Financial losses arising from use of this website</li>
                <li>Decisions made based on information provided</li>
                <li>Errors, omissions, or inaccuracies in content</li>
                <li>Interruptions or unavailability of service</li>
                <li>Damages arising from reliance on calculator results</li>
              </ul>
              <p>
                You use this website and its tools entirely at your own risk. We strongly 
                recommend verifying all information with official sources.
              </p>
            </div>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                This website may contain links to external websites operated by third parties, 
                including government agencies and financial institutions. We do not control the 
                content of these external sites and are not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The accuracy of information on external websites</li>
                <li>The privacy practices of third-party sites</li>
                <li>Any damages arising from visiting external links</li>
              </ul>
              <p>
                Links to external websites are provided for convenience only and do not constitute 
                an endorsement.
              </p>
            </div>
          </section>

          {/* Individual Circumstances */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Individual Circumstances</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Every person&apos;s financial situation is unique. Factors that may affect your student 
                loan repayment include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your specific loan plan and terms</li>
                <li>Current and future income levels</li>
                <li>Career progression and employment status</li>
                <li>Additional income sources</li>
                <li>Living abroad or overseas employment</li>
                <li>Self-employment or variable income</li>
                <li>Changes in personal circumstances</li>
              </ul>
              <p>
                For guidance specific to your situation, please contact the Student Loans Company 
                or consult with a qualified financial advisor.
              </p>
            </div>
          </section>

          {/* Changes to Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Information</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We reserve the right to modify, update, or remove any information on this website 
                at any time without prior notice. We are not obligated to update information or 
                notify users of changes.
              </p>
              <p>
                It is your responsibility to regularly check for updates and verify information 
                with official sources before making financial decisions.
              </p>
            </div>
          </section>

          {/* Official Sources */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Sources</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                For official, authoritative information about UK student loans, please refer to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a 
                    href="https://www.gov.uk/student-finance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    GOV.UK Student Finance
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.slc.co.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Student Loans Company (SLC)
                  </a>
                </li>
                <li>Your specific student finance organization (England, Wales, Scotland, or Northern Ireland)</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                If you have questions about this disclaimer or concerns about the information 
                provided on this website, please review our{' '}
                <Link href="/contact/" className="text-blue-600 hover:text-blue-800 underline">
                  contact page
                </Link>
                .
              </p>
              <p>
                For questions about your student loan, please contact the Student Loans Company 
                directly through their official channels.
              </p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="pt-6 border-t border-gray-200">
            <p className="text-gray-700">
              By using this website and its calculator tools, you acknowledge that you have read, 
              understood, and agree to this disclaimer. If you do not agree with any part of this 
              disclaimer, please do not use this website.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link 
            href="/privacy-policy" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/terms" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Terms of Service
          </Link>
          <span className="text-gray-400">•</span>
          <Link 
            href="/contact/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Contact Us
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}