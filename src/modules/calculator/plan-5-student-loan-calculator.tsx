"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const PLAN5_THRESHOLD = 25_000; // £
const PLAN5_RATE = 0.09;        // 9% of income above threshold
const DEFAULT_INTEREST_COPY = "RPI only (currently ~4.6% total)";

// clamp helper
const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

// UK tax year starts 6 April; show write-off as April of (current tax year + 40)
const computePlan5WriteOffLabel = () => {
  const now = new Date();
  const y = now.getFullYear();
  const taxYear = now < new Date(y, 3, 6) ? y - 1 : y; // 3 = April (0-indexed)
  return `April ${taxYear + 40}`;
};

export default function Plan5CalculatorPage() {
  const [salary, setSalary] = useState(30_000);
  const [loanAmount, setLoanAmount] = useState(50_000);

  const { monthlyRepay, annualRepay, lifetimeSimple } = useMemo(() => {
    const above = Math.max(0, salary - PLAN5_THRESHOLD);
    const annualRequired = above * PLAN5_RATE;
    const monthlyRequired = annualRequired / 12;

    // lightweight lifetime projection (no interest/growth; capped at loan amount)
    const lifetimeSimple = Math.min(loanAmount, annualRequired * 40);

    return {
      monthlyRepay: monthlyRequired,
      annualRepay: annualRequired,
      lifetimeSimple,
    };
  }, [salary, loanAmount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop page jump
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Intro */}
        <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">

            <nav aria-label="breadcrumb">
              <ol className="flex items-center space-x-1 text-sm text-gray-600">
                <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link></li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><span className="font-medium text-gray-800" aria-current="page">Plan 5 Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Plan 5 Student Loan Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Estimate your monthly and total repayments for Plan 5 student loans starting from 2023/24.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: form */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">About Plan 5 Loans</h3>
                    <p className="text-sm text-gray-600">
                      Plan 5 loans apply to students who started university in England or Wales from September 2023.
                      You repay 9% of income above £25,000 per year.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Salary */}
                  <div>
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Salary
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">£</span>
                      <input
                        id="salary"
                        name="salary"
                        type="number"
                        min={0}
                        max={250_000}
                        step={1000}
                        value={salary}
                        onChange={(e) => setSalary(clamp(Number(e.target.value || 0), 0, 250_000))}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1">
                      <input
                        id="salary-slider"
                        type="range"
                        min={0}
                        max={150_000}
                        step={1000}
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      The threshold for Plan 5 repayments is £25,000
                    </p>
                  </div>

                  {/* Loan amount */}
                  <div>
                    <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Total Loan Amount
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">£</span>
                      <input
                        id="loan-amount"
                        name="loan-amount"
                        type="number"
                        min={1_000}
                        max={150_000}
                        step={1000}
                        value={loanAmount}
                        onChange={(e) =>
                          setLoanAmount(clamp(Number(e.target.value || 0), 1_000, 150_000))
                        }
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Calculate Repayments
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right: summary */}
            <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Repayment Summary</h2>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Monthly Repayment</p>
                  <p className="text-3xl font-bold text-gray-800">
                    £{monthlyRepay.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">9% of income above threshold</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Annual Repayment</p>
                  <p className="text-2xl font-bold text-gray-800">£{annualRepay.toFixed(2)}</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Total to be Repaid</p>
                  <p className="text-2xl font-bold text-gray-800">
                    £{Math.round(lifetimeSimple).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">Over the life of the loan (simple projection)</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Expected Write-Off Date</p>
                  <p className="text-2xl font-bold text-gray-800">{computePlan5WriteOffLabel()}</p>
                  <p className="text-sm text-gray-500">40 years after entering repayment</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Current Interest Rate: </span>
                  {DEFAULT_INTEREST_COPY}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer */}
        <section className="max-w-4xl mx-auto prose prose-blue">
          <h2>How Does the Plan 5 Student Loan Calculator Work?</h2>
          <p>
            This calculator helps you understand your <strong>Plan 5 student loan repayments</strong> based on your salary and loan amount.
            Plan 5 loans apply to students who started higher education in England or Wales from September 2023 onwards.
          </p>

          <h3>Key Facts About Plan 5 Student Loans</h3>
          <ul>
            <li><strong>Repayment Threshold:</strong> You only repay when you earn above £25,000 per year</li>
            <li><strong>Repayment Rate:</strong> 9% of income above the threshold</li>
            <li><strong>Interest Rate:</strong> RPI only (no additional percentage)</li>
            <li><strong>Forgiveness Period:</strong> Any remaining balance is written off 40 years after entering repayment</li>
          </ul>
        </section>

        {/* Related */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
              href="/calculators/plan-2-student-loan-calculator/"
            >
              <div className="mr-3 text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Plan 2 Calculator</h3>
                <p className="text-sm text-gray-600">
                  Compare with Plan 2 repayments (for students who started 2012–2023)
                </p>
              </div>
            </Link>

            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
              href="/calculators/student-loan-income-comparison/"
            >
              <div className="mr-3 text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Plan Comparison Calculator</h3>
                <p className="text-sm text-gray-600">Compare repayments between different student loan plans</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Breadcrumb (content-only) */}
        <nav aria-label="breadcrumb" className="max-w-4xl mx-auto">
          <ol className="flex items-center space-x-1 text-sm text-gray-600">
            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li><Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link></li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li><span className="font-medium text-gray-800" aria-current="page">Plan 5 Calculator</span></li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
