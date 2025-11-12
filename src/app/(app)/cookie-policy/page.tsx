import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how we use cookies and similar technologies to enhance your browsing experience.',
  robots: 'index, follow',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-lg text-gray-800">
                This Cookie Policy explains how Student Loan Calculator UK uses cookies and similar 
                technologies to recognize you when you visit our website. It explains what these 
                technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                By using our website, you agree to the use of cookies as described in this policy. 
                If you do not agree with our use of cookies, you should change your browser settings 
                accordingly or refrain from using our website.
              </p>
            </div>
          </section>

          {/* What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently and 
                provide information to the owners of the site.
              </p>
              <p>
                Cookies allow websites to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use the website</li>
                <li>Improve your browsing experience</li>
                <li>Provide relevant content and advertising</li>
                <li>Analyze website performance and traffic</li>
              </ul>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Student Loan Calculator UK uses cookies for several important reasons:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To enable essential website functionality</li>
                <li>To remember your calculator inputs and preferences</li>
                <li>To understand how visitors interact with our website</li>
                <li>To improve our services and user experience</li>
                <li>To analyze website traffic and performance</li>
              </ul>
              <p>
                We do not use cookies to collect personal information that can identify you directly. 
                All data collected through cookies is aggregated and anonymized.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            {/* Strictly Necessary Cookies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                  Required
                </span>
                Strictly Necessary Cookies
              </h3>
              <div className="text-gray-700 space-y-2 ml-4">
                <p>
                  These cookies are essential for the website to function properly. They enable core 
                  functionality such as security, network management, and accessibility. You cannot 
                  opt out of these cookies.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="font-medium text-gray-900 mb-2">Examples include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Session management cookies</li>
                    <li>Security and authentication cookies</li>
                    <li>Cookie consent preferences</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                  Optional
                </span>
                Functional Cookies
              </h3>
              <div className="text-gray-700 space-y-2 ml-4">
                <p>
                  These cookies enable enhanced functionality and personalization. They may be set 
                  by us or by third-party providers whose services we use on our pages.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="font-medium text-gray-900 mb-2">Examples include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Remembering your calculator inputs</li>
                    <li>Saving your loan plan preferences</li>
                    <li>Language and region preferences</li>
                    <li>Display settings and customizations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                  Optional
                </span>
                Analytics and Performance Cookies
              </h3>
              <div className="text-gray-700 space-y-2 ml-4">
                <p>
                  These cookies help us understand how visitors interact with our website by 
                  collecting and reporting information anonymously. This helps us improve the 
                  website&apos;s performance and user experience.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="font-medium text-gray-900 mb-2">Examples include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Google Analytics cookies (traffic analysis)</li>
                    <li>Page view tracking</li>
                    <li>User journey and behavior analysis</li>
                    <li>Error tracking and debugging</li>
                    <li>Performance monitoring</li>
                  </ul>
                  <p className="text-sm mt-3 italic">
                    Note: Analytics data is anonymized and aggregated. We cannot identify individual users.
                  </p>
                </div>
              </div>
            </div>

            {/* Advertising Cookies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                  Optional
                </span>
                Advertising and Marketing Cookies
              </h3>
              <div className="text-gray-700 space-y-2 ml-4">
                <p>
                  These cookies may be used to deliver advertisements that are relevant to you and 
                  your interests. They also help us measure the effectiveness of advertising campaigns.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p className="font-medium text-gray-900 mb-2">Examples include:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Google Ads and remarketing cookies</li>
                    <li>Social media advertising pixels</li>
                    <li>Conversion tracking</li>
                    <li>Interest-based advertising</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                In addition to our own cookies, we may use various third-party cookies to report 
                usage statistics of the website and deliver advertisements on and through the website.
              </p>
              <p>Common third-party services we use include:</p>
              
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                  <p className="text-sm mt-1">
                    We use Google Analytics to analyze website usage and improve our services. 
                    Google Analytics uses cookies to collect information about how visitors use our site.
                  </p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm underline inline-block mt-2"
                  >
                    Google Privacy Policy →
                  </a>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-900">Google Ads</h4>
                  <p className="text-sm mt-1">
                    We may use Google Ads for advertising and remarketing purposes. These cookies 
                    help deliver relevant ads and measure campaign effectiveness.
                  </p>
                  <a 
                    href="https://policies.google.com/technologies/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm underline inline-block mt-2"
                  >
                    About Google Ads →
                  </a>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-900">Social Media Platforms</h4>
                  <p className="text-sm mt-1">
                    Social media features and widgets may set cookies to enable their functionality 
                    and track your interaction with our content.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                Please note that third-party cookies are controlled by the respective third parties, 
                and you should review their privacy and cookie policies for more information.
              </p>
            </div>
          </section>

          {/* How Long Cookies Last */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Do Cookies Last?</h2>
            <div className="text-gray-700 space-y-4">
              <p>Cookies can be either session or persistent cookies:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Session Cookies</h4>
                  <p className="text-sm">
                    These are temporary cookies that expire when you close your browser. They are 
                    used to remember your actions during a single browsing session.
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h4>
                  <p className="text-sm">
                    These remain on your device for a set period (ranging from days to years) or 
                    until you delete them. They are used to remember your preferences across multiple visits.
                  </p>
                </div>
              </div>

              <p>
                The specific retention period for each cookie varies depending on its purpose. 
                Analytics cookies typically last from 1-2 years, while functional cookies may last 
                for different periods based on their specific function.
              </p>
            </div>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Manage Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise 
                your cookie preferences in several ways:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-gray-900">1. Cookie Consent Banner</h4>
                <p className="text-sm">
                  When you first visit our website, you&apos;ll see a cookie consent banner where you 
                  can choose which types of cookies to accept.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-gray-900">2. Cookie Preference Center</h4>
                <p className="text-sm">
                  You can update your cookie preferences at any time by clicking the &quot;Cookie Settings&quot;
                  link in the footer of our website.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-gray-900">3. Browser Settings</h4>
                <p className="text-sm">
                  Most web browsers allow you to control cookies through their settings. You can 
                  typically find cookie controls in the &quot;Options&quot; or &quot;Preferences&quot; menu.
                </p>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-sm font-medium text-gray-900">⚠️ Important Note:</p>
                <p className="text-sm mt-1">
                  If you choose to block cookies, some features of our website may not function 
                  properly. Essential cookies cannot be disabled as they are necessary for the 
                  website to work.
                </p>
              </div>
            </div>
          </section>

          {/* Browser Instructions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser-Specific Instructions</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Here are links to instructions for managing cookies in popular web browsers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Google Chrome</p>
                    <p className="text-sm text-gray-600">Cookie settings guide</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Mozilla Firefox</p>
                    <p className="text-sm text-gray-600">Cookie settings guide</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Safari</p>
                    <p className="text-sm text-gray-600">Cookie settings guide</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Microsoft Edge</p>
                    <p className="text-sm text-gray-600">Cookie settings guide</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Not Track Signals</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Some browsers have a &quot;Do Not Track&quot; feature that signals to websites that you do 
                not want to have your online activity tracked. Currently, our website does not 
                respond to Do Not Track signals, as there is no industry standard for how to 
                respond to such signals.
              </p>
              <p>
                However, you can still control cookies through your browser settings and our 
                cookie preference center.
              </p>
            </div>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We will notify 
                you of any material changes by posting the new policy on this page with an updated 
                &quot;Last Updated&quot; date.
              </p>
              <p>
                We encourage you to review this Cookie Policy periodically to stay informed about 
                how we use cookies.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please 
                contact us through our{' '}
                <Link href="/contact/" className="text-blue-600 hover:text-blue-800 underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
            <div className="text-gray-700 space-y-2">
              <p>For more information about cookies and online privacy, visit:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a 
                    href="https://ico.org.uk/for-the-public/online/cookies/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Information Commissioner&apos;s Office (ICO) - Cookies
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.allaboutcookies.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    All About Cookies
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youronlinechoices.com/uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Your Online Choices UK
                  </a>
                </li>
              </ul>
            </div>
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
            href="/disclaimer" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Disclaimer
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