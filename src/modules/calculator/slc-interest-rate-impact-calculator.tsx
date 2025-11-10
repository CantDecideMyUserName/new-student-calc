"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgraduate";

type InterestScenario = {
  year: number;
  startBalance: number;
  interestAccrued: number;
  endBalance: number;
  cumulativeInterest: number;
};

type ImpactResult = {
  currentScenario: InterestScenario[];
  newScenario: InterestScenario[];
  totalInterestCurrent: number;
  totalInterestNew: number;
  interestDifference: number;
  percentageIncrease: number;
  finalBalanceCurrent: number;
  finalBalanceNew: number;
  balanceDifference: number;
  averageAnnualImpact: number;
};

// Current 2025/26 rates
const CURRENT_RATES = {
  "Plan 1": 0.032, // RPI or Base+1%, whichever lower
  "Plan 2": 0.073, // RPI+3% (current RPI 3.2% + 3% = 6.2%, capped at 7.3%)
  "Plan 4": 0.043, // RPI (Scotland)
  "Plan 5": 0.032, // RPI only
  "Postgraduate": 0.073, // RPI+3%
};

// Interest calculation methods
const INTEREST_METHODS = {
  "Plan 1": "RPI or Bank Rate + 1% (lower)",
  "Plan 2": "RPI to RPI+3% (income-based after graduation)",
  "Plan 4": "RPI or Bank Rate + 1% (lower)",
  "Plan 5": "RPI only",
  "Postgraduate": "RPI + 3%",
};

const WRITE_OFF_YEARS = {
  "Plan 1": 25,
  "Plan 2": 30,
  "Plan 4": 30,
  "Plan 5": 40,
  "Postgraduate": 30,
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

function projectInterestImpact({
  balance,
  currentRate,
  newRate,
  years,
}: {
  balance: number;
  currentRate: number;
  newRate: number;
  years: number;
  isStudying: boolean;
  plan: LoanPlan;
}): {
  currentScenario: InterestScenario[];
  newScenario: InterestScenario[];
  totalInterestCurrent: number;
  totalInterestNew: number;
  finalBalanceCurrent: number;
  finalBalanceNew: number;
} {
  const currentScenario: InterestScenario[] = [];
  const newScenario: InterestScenario[] = [];

  let currentBalance = balance;
  let currentCumulative = 0;
  let newBalance = balance;
  let newCumulative = 0;

  for (let year = 1; year <= years; year++) {
    // Current rate scenario
    const currentInterest = currentBalance * currentRate;
    currentCumulative += currentInterest;
    currentBalance += currentInterest;

    currentScenario.push({
      year,
      startBalance: currentBalance - currentInterest,
      interestAccrued: currentInterest,
      endBalance: currentBalance,
      cumulativeInterest: currentCumulative,
    });

    // New rate scenario
    const newInterest = newBalance * newRate;
    newCumulative += newInterest;
    newBalance += newInterest;

    newScenario.push({
      year,
      startBalance: newBalance - newInterest,
      interestAccrued: newInterest,
      endBalance: newBalance,
      cumulativeInterest: newCumulative,
    });
  }

  return {
    currentScenario,
    newScenario,
    totalInterestCurrent: currentCumulative,
    totalInterestNew: newCumulative,
    finalBalanceCurrent: currentBalance,
    finalBalanceNew: newBalance,
  };
}

function calculateImpact({
  balance,
  currentRate,
  newRate,
  yearsToProject,
  plan,
  isStudying,
}: {
  balance: number;
  currentRate: number;
  newRate: number;
  yearsToProject: number;
  plan: LoanPlan;
  isStudying: boolean;
}): ImpactResult {
  const projection = projectInterestImpact({
    balance,
    currentRate,
    newRate,
    years: yearsToProject,
    isStudying,
    plan,
  });

  const interestDifference = projection.totalInterestNew - projection.totalInterestCurrent;
  const percentageIncrease =
    ((projection.totalInterestNew - projection.totalInterestCurrent) /
      projection.totalInterestCurrent) *
    100;
  const balanceDifference = projection.finalBalanceNew - projection.finalBalanceCurrent;
  const averageAnnualImpact = interestDifference / yearsToProject;

  return {
    currentScenario: projection.currentScenario,
    newScenario: projection.newScenario,
    totalInterestCurrent: projection.totalInterestCurrent,
    totalInterestNew: projection.totalInterestNew,
    interestDifference,
    percentageIncrease,
    finalBalanceCurrent: projection.finalBalanceCurrent,
    finalBalanceNew: projection.finalBalanceNew,
    balanceDifference,
    averageAnnualImpact,
  };
}

export default function InterestRateImpactCalculatorPage() {
  const [loanBalance, setLoanBalance] = useState(45000);
  const [plan, setPlan] = useState<LoanPlan>("Plan 2");
  const [currentRate, setCurrentRate] = useState(CURRENT_RATES["Plan 2"] * 100);
  const [newRate, setNewRate] = useState(5.0);
  const [yearsToProject, setYearsToProject] = useState(10);
  const [isStudying, setIsStudying] = useState(false);
  const [graduationYear, setGraduationYear] = useState(2020);

  const currentYear = new Date().getFullYear();
  const yearsInRepayment = Math.max(0, currentYear - graduationYear - 1);
  const maxYearsToProject = WRITE_OFF_YEARS[plan] - yearsInRepayment;

  const result = useMemo(
    () =>
      calculateImpact({
        balance: loanBalance,
        currentRate: currentRate / 100,
        newRate: newRate / 100,
        yearsToProject: Math.min(yearsToProject, maxYearsToProject),
        plan,
        isStudying,
      }),
    [loanBalance, currentRate, newRate, yearsToProject, plan, isStudying, maxYearsToProject]
  );

  // Update current rate when plan changes
  const handlePlanChange = (newPlan: LoanPlan) => {
    setPlan(newPlan);
    setCurrentRate(CURRENT_RATES[newPlan] * 100);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="max-w-4xl mx-auto">

            <nav aria-label="breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex flex-wrap items-center space-x-1 text-xs sm:text-sm text-gray-600">
                <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link></li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><span className="font-medium text-gray-800" aria-current="page">Interest Rate Impact Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Student Loan Interest Rate Change Impact Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how changes in SLC interest rates affect your loan balance and total interest
              paid over time. Compare different rate scenarios to see the real financial impact.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Inputs */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                <div className="flex items-start">
                  <div className="text-orange-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Interest Rates Change Yearly</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      UK student loan interest rates are set each September based on RPI inflation from
                      the previous March, and can change mid-year if capped.
                    </p>
                  </div>
                </div>
              </div>

              {/* Loan Plan */}
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Plan
                </label>
                <select
                  id="plan"
                  value={plan}
                  onChange={(e) => handlePlanChange(e.target.value as LoanPlan)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                >
                  <option value="Plan 1">Plan 1 (pre-2012)</option>
                  <option value="Plan 2">Plan 2 (2012-2023)</option>
                  <option value="Plan 4">Plan 4 (Scotland)</option>
                  <option value="Plan 5">Plan 5 (2023+)</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">{INTEREST_METHODS[plan]}</p>
              </div>

              {/* Graduation Year */}
              <div>
                <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                  Graduation Year
                </label>
                <input
                  type="number"
                  id="graduation-year"
                  min={1998}
                  max={2030}
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(Number(e.target.value || 2020))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  {yearsInRepayment > 0 ? `${yearsInRepayment} years in repayment` : "Not yet in repayment"}
                  {" | "}
                  {maxYearsToProject} years until write-off
                </p>
              </div>

              {/* Currently Studying */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isStudying}
                    onChange={(e) => setIsStudying(e.target.checked)}
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Currently studying</span>
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  Higher interest rates typically apply while studying (RPI+3% for Plan 2)
                </p>
              </div>

              {/* Current Loan Balance */}
              <div>
                <label htmlFor="loan-balance" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Loan Balance
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="loan-balance"
                    min={0}
                    max={200000}
                    step={1000}
                    value={loanBalance}
                    onChange={(e) => setLoanBalance(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                  />
                </div>
              </div>

              {/* Current Interest Rate */}
              <div>
                <label htmlFor="current-rate" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Interest Rate (2025/26)
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="current-rate"
                    min={0}
                    max={20}
                    step={0.1}
                    value={currentRate}
                    onChange={(e) => setCurrentRate(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-600">%</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Official 2025/26 rate for {plan}: {(CURRENT_RATES[plan] * 100).toFixed(1)}%
                </p>
              </div>

              {/* New Interest Rate */}
              <div>
                <label htmlFor="new-rate" className="block text-sm font-medium text-gray-700 mb-1">
                  Proposed New Interest Rate
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="new-rate"
                    min={0}
                    max={20}
                    step={0.1}
                    value={newRate}
                    onChange={(e) => setNewRate(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-600">%</span>
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    min={0}
                    max={15}
                    step={0.1}
                    value={newRate}
                    onChange={(e) => setNewRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Change: {newRate > currentRate ? "+" : ""}
                  {(newRate - currentRate).toFixed(1)}% ({((newRate / currentRate - 1) * 100).toFixed(1)}%{" "}
                  {newRate > currentRate ? "increase" : "decrease"})
                </p>
              </div>

              {/* Years to Project */}
              <div>
                <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">
                  Years to Project
                </label>
                <input
                  type="number"
                  id="years"
                  min={1}
                  max={maxYearsToProject}
                  value={yearsToProject}
                  onChange={(e) =>
                    setYearsToProject(Math.min(Number(e.target.value || 1), maxYearsToProject))
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Maximum: {maxYearsToProject} years (until loan write-off)
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="xl:col-span-2" role="region" aria-live="polite">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Impact Analysis</h2>

              {/* Summary Cards */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Current Rate Scenario */}
                <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border-2 border-blue-200">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Current Rate ({currentRate.toFixed(1)}%)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Starting Balance</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(loanBalance, 0)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Total Interest Over {yearsToProject} Years</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-800">
                        {fmtMoney(result.totalInterestCurrent, 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Final Balance</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-800">
                        {fmtMoney(result.finalBalanceCurrent, 0)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* New Rate Scenario */}
                <div
                  className={`p-4 sm:p-6 rounded-xl border-2 ${newRate > currentRate
                    ? "bg-red-50 border-red-200"
                    : "bg-green-50 border-green-200"
                    }`}
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 ${newRate > currentRate ? "text-red-600" : "text-green-600"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    New Rate ({newRate.toFixed(1)}%)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Starting Balance</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(loanBalance, 0)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Total Interest Over {yearsToProject} Years</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-800">
                        {fmtMoney(result.totalInterestNew, 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase">Final Balance</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-800">
                        {fmtMoney(result.finalBalanceNew, 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Summary */}
              <div
                className={`p-4 sm:p-6 rounded-xl border-2 mb-4 sm:mb-6 ${result.interestDifference > 0
                  ? "bg-red-50 border-red-300"
                  : "bg-green-50 border-green-300"
                  }`}
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  {result.interestDifference > 0 ? "⚠️ Increased Cost" : "✅ Reduced Cost"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Additional Interest</p>
                    <p
                      className={`text-xl sm:text-2xl font-bold ${result.interestDifference > 0 ? "text-red-700" : "text-green-700"
                        }`}
                    >
                      {result.interestDifference > 0 ? "+" : ""}
                      {fmtMoney(result.interestDifference, 0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {result.percentageIncrease > 0 ? "+" : ""}
                      {result.percentageIncrease.toFixed(1)}% change
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Balance Difference</p>
                    <p
                      className={`text-xl sm:text-2xl font-bold ${result.balanceDifference > 0 ? "text-red-700" : "text-green-700"
                        }`}
                    >
                      {result.balanceDifference > 0 ? "+" : ""}
                      {fmtMoney(result.balanceDifference, 0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">higher final balance</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Average Per Year</p>
                    <p
                      className={`text-xl sm:text-2xl font-bold ${result.averageAnnualImpact > 0 ? "text-red-700" : "text-green-700"
                        }`}
                    >
                      {result.averageAnnualImpact > 0 ? "+" : ""}
                      {fmtMoney(result.averageAnnualImpact, 0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">extra interest/year</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-700">
                    {result.interestDifference > 0 ? (
                      <>
                        A rate increase of <strong>{(newRate - currentRate).toFixed(1)}%</strong> would add{" "}
                        <strong>{fmtMoney(result.interestDifference, 0)}</strong> in interest over{" "}
                        {yearsToProject} years, increasing your balance by{" "}
                        {((result.balanceDifference / loanBalance) * 100).toFixed(1)}%.
                      </>
                    ) : (
                      <>
                        A rate decrease of <strong>{(currentRate - newRate).toFixed(1)}%</strong> would save{" "}
                        <strong>{fmtMoney(Math.abs(result.interestDifference), 0)}</strong> in interest
                        over {yearsToProject} years.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Year-by-Year Projection Table */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                  Year-by-Year Comparison (First 5 Years)
                </h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Year
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Current Rate Interest
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            New Rate Interest
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Difference
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Balance Gap
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {result.currentScenario.slice(0, 5).map((current, idx) => {
                          const newYear = result.newScenario[idx];
                          const interestDiff = newYear.interestAccrued - current.interestAccrued;
                          const balanceGap = newYear.endBalance - current.endBalance;
                          return (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="px-2 sm:px-3 py-2 text-sm font-medium text-gray-900">{current.year}</td>
                              <td className="px-2 sm:px-3 py-2 text-sm text-gray-700">
                                {fmtMoney(current.interestAccrued, 0)}
                              </td>
                              <td className="px-2 sm:px-3 py-2 text-sm text-gray-700">
                                {fmtMoney(newYear.interestAccrued, 0)}
                              </td>
                              <td
                                className={`px-2 sm:px-3 py-2 text-sm font-medium ${interestDiff > 0 ? "text-red-600" : "text-green-600"
                                  }`}
                              >
                                {interestDiff > 0 ? "+" : ""}
                                {fmtMoney(interestDiff, 0)}
                              </td>
                              <td className="px-2 sm:px-3 py-2 text-sm text-gray-700">
                                {fmtMoney(balanceGap, 0)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {yearsToProject > 5 && (
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    Showing first 5 years of {yearsToProject}-year projection
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Historical Rates */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Historical Interest Rates (2024-2026)
          </h2>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Period</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan 1</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan 2</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan 4</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan 5</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Postgraduate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-900">Sept 2025 - Aug 2026</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">3.2%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">3.2% - 6.2%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">4.3%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">3.2%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">6.2%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-900">Sept 2024 - Aug 2025</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">4.3%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">4.3% - 7.3%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">4.3%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">4.3%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">7.3%</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-900">Jan - Aug 2024</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">5.5%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">7.6% - 8.0%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">6.25%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">6.25%</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-sm text-gray-700">8.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Source: Student Loans Company and GOV.UK. Rates based on RPI inflation and are subject to
            change during the academic year if caps are applied.
          </p>
        </section>

        {/* Related */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
              href="/calculators/slc-vs-sa-calcualtor/"
            >
              <div className="mr-3 text-orange-700 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Overpayment vs Investment Calculator</h3>
                <p className="text-xs sm:text-sm text-gray-600">Compare overpaying vs investing</p>
              </div>
            </Link>

            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
              href="/calculators/regional-national-comparison-calculator/"
            >
              <div className="mr-3 text-orange-700 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Regional vs National Comparison</h3>
                <p className="text-xs sm:text-sm text-gray-600">Compare UK regional plans</p>
              </div>
            </Link>

            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
              href="/calculators/plan-2-student-loan-calculator/"
            >
              <div className="mr-3 text-orange-700 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Repayment Calculator</h3>
                <p className="text-xs sm:text-sm text-gray-600">Calculate monthly payments</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Explainer */}
        <section className="max-w-6xl mx-auto prose prose-orange max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Student Loan Interest Rate Changes</h2>
          <p className="text-gray-700 mb-6">
            UK student loan interest rates change annually and can significantly impact the total amount
            borrowers owe over time. Understanding how these changes work and their financial impact is
            crucial for effective loan management.
          </p>

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="how-rates-set">
              <AccordionTrigger>How Interest Rates Are Set</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Student loan interest rates are linked to the Retail Price Index (RPI) measure of inflation
                    and are updated each September based on the RPI figure from the previous March. For the
                    2025/26 academic year, with March 2025 RPI at 3.2%, rates range from 3.2% to 6.2% depending
                    on loan plan and income.
                  </p>

                  <h4 className="font-semibold text-gray-800">Plan-Specific Interest Calculation</h4>
                  <p>
                    Different loan plans use different formulas for calculating interest. Plan 1 and Plan 4 use
                    the lower of RPI or Bank of England base rate plus 1%, currently resulting in 3.2% for Plan
                    1 and 4.3% for Plan 4. Plan 2 charges RPI to RPI+3% based on income after graduation. Plan 5
                    charges only RPI (3.2%), while Postgraduate loans charge RPI+3% (6.2%).
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="income-based">
              <AccordionTrigger>Income-Based Interest Rates (Plan 2 Only)</AccordionTrigger>
              <AccordionContent>
                <p>
                  Plan 2 borrowers face income-based interest rates after graduation. Those earning at or below
                  the threshold (£28,470) pay RPI only. As income increases above the threshold, interest
                  gradually rises on a sliding scale, reaching RPI+3% at £51,245 and above. This means higher
                  earners see their balances grow faster due to compounding at higher rates.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="studying-vs-graduated">
              <AccordionTrigger>While Studying vs After Graduation</AccordionTrigger>
              <AccordionContent>
                <p>
                  Interest treatment differs between study and post-graduation periods. Plan 2 and Postgraduate
                  borrowers pay RPI+3% while studying (currently 6.2%), regardless of income. Plan 5 borrowers
                  pay only RPI (3.2%) even while studying. This difference significantly affects total interest
                  accrued, particularly for longer courses.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="interest-cap">
              <AccordionTrigger>The Interest Rate Cap</AccordionTrigger>
              <AccordionContent>
                <p>
                  The government applies an interest rate cap based on the Prevailing Market Rate to prevent
                  student loan interest from exceeding commercial loan rates. During 2024, this cap was
                  frequently applied, with rates as low as 7.6% when the normal RPI+3% formula would have
                  charged more. The cap protects borrowers during high-inflation periods.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compound-interest">
              <AccordionTrigger>Compound Interest Effect</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Student loan interest compounds daily and is added to the outstanding balance monthly. This
                    means borrowers pay interest on interest, causing balances to grow exponentially rather than
                    linearly. A £45,000 loan at 7.3% interest grows by over £3,000 in the first year alone,
                    assuming no repayments.
                  </p>

                  <h4 className="font-semibold text-gray-800">Long-Term Compounding Impact</h4>
                  <p>
                    Over a typical 30-year repayment period, compound interest can more than double the original
                    loan amount for many borrowers, especially those with Plan 2 or Postgraduate loans. A 1%
                    interest rate increase can add tens of thousands in additional interest over the full loan
                    term, though most borrowers will have loans written off before full repayment.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="historical-volatility">
              <AccordionTrigger>Historical Rate Volatility</AccordionTrigger>
              <AccordionContent>
                <p>
                  Interest rates have fluctuated significantly in recent years due to varying inflation. Rates
                  reached 7.3-8.0% during high inflation in 2023-2024 before dropping to 3.2-6.2% for 2025/26
                  as inflation moderated. This volatility makes long-term projections challenging and emphasizes
                  the importance of understanding rate change impacts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="why-matters-less">
              <AccordionTrigger>Why Interest Matters Less Than You Think</AccordionTrigger>
              <AccordionContent>
                <p>
                  For most borrowers, the interest rate has limited practical impact because repayments are
                  income-based, not balance-based. Whether a balance is £40,000 or £60,000, monthly payments
                  remain 9% of income above the threshold. Since most Plan 2 and Plan 5 loans will be written
                  off before full repayment, the growing balance from interest often never needs to be paid.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when-it-matters">
              <AccordionTrigger>When Interest Rate Changes Matter</AccordionTrigger>
              <AccordionContent>
                <p>
                  Interest rates primarily affect high earners who will fully repay their loans before
                  write-off. For these borrowers, a 1-2% rate change can mean thousands in additional interest
                  paid. Plan 1 borrowers are also more affected because lower thresholds and smaller balances
                  mean higher repayment likelihood.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rpi-vs-cpi">
              <AccordionTrigger>RPI vs CPI Indexing Debate</AccordionTrigger>
              <AccordionContent>
                <p>
                  Critics argue that using RPI rather than CPI (Consumer Price Index) systematically
                  overstates inflation by approximately 1% annually, resulting in artificially high interest
                  rates. The government announced a switch from RPI to CPIH for future interest calculations,
                  which could reduce rates by around 1 percentage point, saving graduates thousands.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="protecting-against-changes">
              <AccordionTrigger>Protecting Against Rate Changes</AccordionTrigger>
              <AccordionContent>
                <p>
                  Unlike mortgage holders, student loan borrowers cannot lock in interest rates or refinance to
                  lower rates. Rates are set by government policy and automatically apply to all outstanding
                  balances. The only protection is the Prevailing Market Rate cap, which prevents rates from
                  becoming unreasonably high relative to commercial lending.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="monitoring-changes">
              <AccordionTrigger>Monitoring Rate Changes</AccordionTrigger>
              <AccordionContent>
                <p>
                  The Student Loans Company announces rate changes each August for implementation in September.
                  Rates can also change mid-year if the Prevailing Market Rate cap is adjusted. Borrowers
                  should check their loan statements regularly, as interest accrues daily but may not be
                  immediately visible in account balances.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Want to understand your complete student loan picture?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Use our suite of calculators to analyze repayment scenarios, compare options, and make
            informed financial decisions about your student loans.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
              href="/calculators/slc-vs-sa-calcualtor/"
            >
              Overpayment Analysis
            </Link>
            <Link
              className="bg-white hover:bg-gray-50 text-orange-600 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-orange-600 text-sm sm:text-base"
              href="/calculators/regional-national-comparison-calculator/"
            >
              Regional vs National Comparison
            </Link>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center space-x-1 text-xs sm:text-sm text-gray-600">
            <li>
              <Link className="hover:text-orange-700 hover:underline" href="/">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-gray-400 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link className="hover:text-orange-700 hover:underline" href="/calculators/">
                Calculators
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-gray-400 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <span className="font-medium text-gray-800" aria-current="page">
                Interest Rate Change Impact Calculator
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}