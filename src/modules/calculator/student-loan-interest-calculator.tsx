"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/** -----------------------
 * Interest rules (editable assumptions)
 * ----------------------*/
type PlanKey = "plan1" | "plan2" | "plan4" | "plan5" | "postgrad";

const DEFAULTS = {
  rpi: 0.046,          // 4.6% RPI (editable in the UI)
  baseRate: 0.0525,    // Bank of England base (for Plan1/4 rule-of-thumb) – editable
  plan2LowerInc: 27295, // income band lower bound (editable)
  plan2UpperInc: 49130, // income band upper bound (editable)
};

// Compute current annual interest rate for a given plan & salary
function interestRate({
  plan,
  salary,
  rpi,
  baseRate,
  p2Lower,
  p2Upper,
}: {
  plan: PlanKey;
  salary: number;
  rpi: number;
  baseRate: number;
  p2Lower: number;
  p2Upper: number;
}): number {
  switch (plan) {
    case "plan1":
    case "plan4": {
      // Lower of RPI or Bank Rate + 1%
      const cap = baseRate + 0.01;
      return Math.min(rpi, cap);
    }
    case "plan5":
      return rpi; // RPI only
    case "postgrad":
      return rpi + 0.03; // RPI + 3%
    case "plan2": {
      // RPI → RPI+3% linearly between lower & upper income
      if (salary <= p2Lower) return rpi;
      if (salary >= p2Upper) return rpi + 0.03;
      const t = (salary - p2Lower) / Math.max(1, p2Upper - p2Lower);
      return rpi + 0.03 * t;
    }
  }
}

/** Compound forward with NO repayments */
function projectBalance({
  startingBalance,
  annualRate,
  years,
}: {
  startingBalance: number;
  annualRate: number;
  years: number;
}) {
  const months = Math.max(0, Math.round(years * 12));
  const mRate = annualRate / 12;
  let bal = Math.max(0, startingBalance);
  let totalInterest = 0;
  for (let i = 0; i < months; i++) {
    const interest = bal * mRate;
    totalInterest += interest;
    bal += interest;
  }
  return { endingBalance: bal, totalInterest };
}

const fmt = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

export default function StudentLoanInterestCalculatorPage() {
  // Inputs
  const [plan, setPlan] = useState<PlanKey>("plan2");
  const [salary, setSalary] = useState(30_000);
  const [balance, setBalance] = useState(45_000);
  const [years, setYears] = useState(5);

  // Assumptions (user-editable)
  const [rpiPct, setRpiPct] = useState(DEFAULTS.rpi * 100);
  const [basePct, setBasePct] = useState(DEFAULTS.baseRate * 100);
  const [p2Lower, setP2Lower] = useState(DEFAULTS.plan2LowerInc);
  const [p2Upper, setP2Upper] = useState(DEFAULTS.plan2UpperInc);

  const rpi = Math.max(0, rpiPct / 100);
  const baseRate = Math.max(0, basePct / 100);

  const rate = useMemo(
    () =>
      interestRate({
        plan,
        salary: Math.max(0, salary),
        rpi,
        baseRate,
        p2Lower,
        p2Upper,
      }),
    [plan, salary, rpi, baseRate, p2Lower, p2Upper]
  );

  const { endingBalance, totalInterest } = useMemo(
    () =>
      projectBalance({
        startingBalance: Math.max(0, balance),
        annualRate: Math.max(0, rate),
        years: Math.max(0, years),
      }),
    [balance, rate, years]
  );

  const currentMonthlyInterest = Math.max(0, balance) * (rate / 12);

  // UI helpers
  const YEAR_OPTIONS = [1, 3, 5, 10, 15, 20, 30];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
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
              <li><span className="font-medium text-gray-800" aria-current="page">Interest Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Loan Interest Calculator
          </h1>
          <p className="text-xl text-gray-600">
            See how interest accumulates on your student loan over time and how it affects your balance.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
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
                  <h3 className="text-sm font-semibold text-gray-800">About Interest Calculation</h3>
                  <p className="text-sm text-gray-600">
                    Uses plan rules (including Plan 2’s income banding) and compounds monthly with no repayments.
                  </p>
                </div>
              </div>
            </div>

            {/* Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Plan</label>
              <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={plan}
                onChange={(e) => setPlan(e.target.value as PlanKey)}
              >
                <option value="plan1">Plan 1 (Pre-2012)</option>
                <option value="plan2">Plan 2 (2012–2023)</option>
                <option value="plan4">Plan 4 (Scotland)</option>
                <option value="plan5">Plan 5 (2023 onwards)</option>
                <option value="postgrad">Postgraduate Loan</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Salary</label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  min={0}
                  max={250000}
                  step={1000}
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={150000}
                  step={1000}
                  value={Math.min(150000, salary)}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Plan 2 interest scales from RPI to RPI+3% based on income.
              </p>
            </div>

            {/* Balance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Loan Balance</label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  min={1000}
                  max={150000}
                  step={1000}
                  value={balance}
                  onChange={(e) => setBalance(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Years */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Years to Project</label>
              <select
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              >
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>
                    {y} {y === 1 ? "year" : "years"}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">How far into the future to project (no repayments).</p>
            </div>

            {/* Assumptions */}
            <details className="mt-2">
              <summary className="text-sm text-gray-600 cursor-pointer">Assumptions</summary>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3">
                  <label className="text-sm w-40">RPI (%)</label>
                  <input
                    type="number"
                    step={0.1}
                    value={rpiPct.toFixed(1)}
                    onChange={(e) => setRpiPct(Number(e.target.value))}
                    className="w-28 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="text-sm w-40">Base rate (%)</label>
                  <input
                    type="number"
                    step={0.1}
                    value={basePct.toFixed(1)}
                    onChange={(e) => setBasePct(Number(e.target.value))}
                    className="w-28 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <span className="text-xs text-gray-500">Used for Plan 1/4: lower of RPI or Base+1%</span>
                </div>
                {plan === "plan2" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <label className="text-sm w-40">Plan 2 lower income (£)</label>
                      <input
                        type="number"
                        step={500}
                        value={p2Lower}
                        onChange={(e) => setP2Lower(Number(e.target.value))}
                        className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-sm w-40">Plan 2 upper income (£)</label>
                      <input
                        type="number"
                        step={500}
                        value={p2Upper}
                        onChange={(e) => setP2Upper(Number(e.target.value))}
                        className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Interest is RPI at/below lower income, RPI+3% at/above upper; linear in between.
                    </p>
                  </div>
                )}
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Interest Projection</h2>

            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Current Interest Rate</p>
                <p className="text-3xl font-bold text-gray-800">
                  {(rate * 100).toFixed(1)}%
                </p>
                <p className="text-sm text-gray-500">
                  {plan === "plan2"
                    ? `Based on salary band (RPI ${(rpi * 100).toFixed(1)}% → RPI+3%)`
                    : plan === "postgrad"
                      ? `RPI (${(rpi * 100).toFixed(1)}%) + 3%`
                      : plan === "plan5"
                        ? `RPI (${(rpi * 100).toFixed(1)}%)`
                        : `Lower of RPI (${(rpi * 100).toFixed(1)}%) or Base+1% (${((baseRate + 0.01) * 100).toFixed(1)}%)`}
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Interest Added per Month (now)</p>
                <p className="text-2xl font-bold text-gray-800">{fmt(currentMonthlyInterest, 0)}</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Interest Added per Year (now)</p>
                <p className="text-2xl font-bold text-gray-800">{fmt(currentMonthlyInterest * 12, 0)}</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Balance After {years} {years === 1 ? "Year" : "Years"}</p>
                <p className="text-2xl font-bold text-gray-800">{fmt(endingBalance, 0)}</p>
                <p className="text-sm text-gray-500">Assuming no repayments made</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total Interest Added</p>
                <p className="text-2xl font-bold text-gray-800">{fmt(totalInterest, 0)}</p>
                <p className="text-sm text-gray-500">Over the {years}-year period</p>
              </div>
            </div>

            {/* Minimal bar viz */}
            <div className="mt-6">
              <div className="bg-white rounded-lg p-3">
                <div className="w-full h-6 bg-gray-200 rounded overflow-hidden flex">
                  <div className="h-6" style={{ width: "100%" }} title={`Ending balance: ${fmt(endingBalance, 0)}`} />
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-600">
                  <span>Start: {fmt(balance, 0)}</span>
                  <span>End: {fmt(endingBalance, 0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start" href="/calculators/student-loan-overpayment-calculator/">
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600">See if making early repayments could save you money</p>
            </div>
          </a>
          <a className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start" href="/calculators/total-loan-cost-calculator/">
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Total Cost Calculator</h3>
              <p className="text-sm text-gray-600">Calculate the lifetime cost of your student loan</p>
            </div>
          </a>
        </div>
      </section>

      {/* Explainer (trimmed) */}
      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2>Understanding Student Loan Interest</h2>
        <p>Each plan has different interest rules. Plan 2 scales with income; Plan 5 is RPI; Postgrad is RPI+3%; Plan 1/4 are the lower of RPI or Base+1%.</p>
      </section>
    </div>
  );
}
