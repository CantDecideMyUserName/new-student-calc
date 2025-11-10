"use client";

import Link from "next/link";
import { useState } from "react";

export default function StayInformed() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setStatus("error");
      setMessage("Please agree to receive email updates");
      return;
    }

    // Basic email validation
    if (!email || !email.includes('@')) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch('https://n8n.raiserank.agency/webhook/30ff949d-9049-4730-bd6f-ef00f728a8f2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Successfully subscribed! Thank you for joining our newsletter.");
        setEmail(""); // Clear the input
        setConsent(false); // Reset consent checkbox
      } else {
        // Try to get error message from response
        let errorMessage = 'Subscription failed. Please try again.';
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (e) {
          // If we can't parse the error response, use default message
        }
        setStatus("error");
        setMessage(errorMessage);
      }
    } catch (error) {
      console.error('Subscription Error:', error);
      setStatus("error");
      setMessage("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <section
      className="max-w-5xl mx-auto px-6 mt-16 mb-10"
      aria-labelledby="newsletter-heading"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-5">
          {/* Left: copy + form */}
          <div className="md:col-span-3 p-10 md:p-12 relative">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A4FCC] via-[#3DDC97] to-[#F9A825]" />
            <h2
              id="newsletter-heading"
              className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins'] text-gray-800"
            >
              Stay Informed
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-['Roboto']">
              Get updates before student loan changes happen. We&apos;ll send you:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#3DDC97] mt-0.5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">New calculator tool announcements</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#3DDC97] mt-0.5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">
                  Legislative updates affecting student loans
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-[#3DDC97] mt-0.5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">
                  Expert financial tips for graduates
                </span>
              </li>
            </ul>

            {/* Newsletter form */}
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3DDC97] focus:border-transparent"
                  aria-label="Your email address"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="flex items-center">
                <input
                  id="privacy-consent"
                  name="privacy-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="h-4 w-4 text-[#1A4FCC] focus:ring-[#3DDC97] border-gray-300 rounded"
                  required
                  disabled={status === "loading"}
                />
                <label
                  htmlFor="privacy-consent"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree to receive email updates. See our{" "}
                  <Link href="/privacy-policy" className="text-[#1A4FCC] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#F9A825] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Subscribe to newsletter"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>

              {/* Status message */}
              {message && (
                <div
                  className={`mt-3 p-3 rounded-lg ${
                    status === "success" 
                      ? "bg-green-50 border border-green-200" 
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {message}
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>

          {/* Right: graphic panel */}
          <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-[#1A4FCC] to-blue-600 relative">
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/10" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10" />
            </div>
            <div className="flex items-center justify-center h-full p-8">
              <svg
                className="w-full max-w-xs text-white/90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}