'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }

    // Optional: Check if consent has expired (6 months)
    const consentDate = localStorage.getItem('cookieConsentDate');
    if (consentDate) {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      
      if (new Date(consentDate) < sixMonthsAgo) {
        localStorage.removeItem('cookieConsent');
        localStorage.removeItem('cookieConsentDate');
        setShowPopup(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowPopup(false);
    
    // Optional: Initialize any Google services here
    console.log('User accepted all cookies');
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowPopup(false);
    
    console.log('User accepted essential cookies only');
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[9998] animate-in fade-in duration-300"
        onClick={() => {}} // Prevents closing by clicking overlay
      />

      {/* Cookie Popup */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-[600px] bg-white rounded-xl shadow-2xl z-[9999] animate-in slide-in-from-bottom-4 duration-400 sm:bottom-5 max-sm:bottom-0 max-sm:left-0 max-sm:translate-x-0 max-sm:w-full max-sm:rounded-b-none max-sm:rounded-t-xl">
        <div className="p-6 max-sm:p-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🍪</span>
            <h2 className="text-xl font-semibold text-gray-900">Cookie Notice</h2>
          </div>
          
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            StudentLoanCalculator.uk uses minimal cookies to ensure the website works properly and securely.
          </p>
          
          {/* Features Box */}
          <div className="bg-gray-50 rounded-lg p-4 mb-5">
            {/* Feature 1 */}
            <div className="flex items-start gap-2.5 mb-2.5">
              <span className="text-base mt-0.5">✓</span>
              <div className="flex-1 text-[13px] text-gray-700">
                <strong className="text-gray-900">Essential cookies</strong> - Required for site functionality and security
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start gap-2.5 mb-2.5">
              <span className="text-base mt-0.5">✓</span>
              <div className="flex-1 text-[13px] text-gray-700">
                <strong className="text-gray-900">Google infrastructure</strong> - May set limited technical cookies (
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Privacy Policy
                </a>)
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start gap-2.5">
              <span className="text-base mt-0.5">📧</span>
              <div className="flex-1 text-[13px] text-gray-700">
                <strong className="text-gray-900">Newsletter (optional)</strong> - Email addresses stored only if you voluntarily subscribe
              </div>
            </div>
            
            {/* What we don't use */}
            <div className="text-xs text-gray-600 mt-3 pt-3 border-t border-gray-200">
              <strong>We do NOT use:</strong> Tracking cookies • Marketing cookies • Third-party analytics • Profiling tools
            </div>
          </div>

          {/* Acknowledgment */}
          <p className="text-[13px] text-gray-600 mb-0">
            By continuing to use this site, you acknowledge this notice. You can manage your preferences at any time.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-5 max-sm:flex-col">
            <button 
              onClick={handleEssentialOnly}
              className="flex-1 px-5 py-3 bg-gray-100 text-gray-700 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Essential Only
            </button>
            <button 
              onClick={handleAcceptAll}
              className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Accept All
            </button>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-5 mt-4 text-xs">
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="text-blue-600 hover:underline">
              Cookie Policy
            </a>
            <a href="mailto:privacy@studentloancalculator.uk" className="text-blue-600 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}