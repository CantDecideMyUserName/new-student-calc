"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlanDetails = {
  name: string;
  threshold: number;
  rate: number;
  description: string;
};

type YearProjection = {
  year: number;
  salary: number;
  aboveThreshold: boolean;
  monthlyRepayment: number;
  annualRepayment: number;
  distanceFromThreshold: number;
};

type AlertResult = {
  currentYear: number;
  currentSalary: number;
  planDetails: PlanDetails;
  belowThreshold: boolean;
  yearReachingThreshold: number | null;
  salaryAtThreshold: number | null;
  yearsUntilRepayment: number | null;
  projections: YearProjection[];
  monthsUntilRepayment: number | null;
};

const LOAN_PLANS: Record<string, PlanDetails> = {
  plan1: {
    name: "Plan 1",
    threshold: 22_015,
    rate: 0.09,
    description: "Pre-2012 England/Wales or Northern Ireland",
  },
  plan2: {
    name: "Plan 2",
    threshold: 27_295,
    rate: 0.09,
    description: "2012-2023 England/Wales",
  },
  plan4: {
    name: "Plan 4",
    threshold: 31_395,
    rate: 0.09,
    description: "Scotland",
  },
  plan5: {
    name: "Plan 5",
    threshold: 25_000,
    rate: 0.09,
    description: "2023+ England/Wales",
  },
  postgrad: {
    name: "Postgraduate",
    threshold: 21_000,
    rate: 0.06,
    description: "Master's/PhD loans",
  },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number) => `${(n * 100).toFixed(1)}%`;

function calculateThresholdAlert({
  currentSalary,
  annualGrowthRate,
  planType,
  currentYear,
  projectionYears = 10,
}: {
  currentSalary: number;
  annualGrowthRate: number;
  planType: string;
  currentYear: number;
  projectionYears?: number;
}): AlertResult {
  const plan = LOAN_PLANS[planType];
  const belowThreshold = currentSalary < plan.threshold;

  let yearReachingThreshold: number | null = null;
  let salaryAtThreshold: number | null = null;
  let yearsUntilRepayment: number | null = null;
  let monthsUntilRepayment: number | null = null;

  const projections: YearProjection[] = [];

  for (let i = 0; i < projectionYears; i++) {
    const year = currentYear + i;
    const salary = currentSalary * Math.pow(1 + annualGrowthRate / 100, i);
    const aboveThreshold = salary >= plan.threshold;
    const incomeAboveThreshold = Math.max(0, salary - plan.threshold);
    const annualRepayment = incomeAboveThreshold * plan.rate;
    const monthlyRepayment = annualRepayment / 12;
    const distanceFromThreshold = salary - plan.threshold;

    projections.push({
      year,
      salary,
      aboveThreshold,
      monthlyRepayment,
      annualRepayment,
      distanceFromThreshold,
    });

    if (belowThreshold && aboveThreshold && yearReachingThreshold === null) {
      yearReachingThreshold = year;
      salaryAtThreshold = salary;
      yearsUntilRepayment = i;

      if (i > 0) {
        const prevSalary = currentSalary * Math.pow(1 + annualGrowthRate / 100, i - 1);
        const salaryGrowthThisYear = salary - prevSalary;
        const monthlyGrowth = salaryGrowthThisYear / 12;
        const amountNeeded = plan.threshold - prevSalary;
        const monthsIntoYear = Math.max(0, Math.ceil(amountNeeded / monthlyGrowth));
        monthsUntilRepayment = (i - 1) * 12 + monthsIntoYear;
      } else {
        monthsUntilRepayment = 0;
      }
    }
  }

  return {
    currentYear,
    currentSalary,
    planDetails: plan,
    belowThreshold,
    yearReachingThreshold,
    salaryAtThreshold,
    yearsUntilRepayment,
    projections,
    monthsUntilRepayment,
  };
}

export default function IncomeThresholdAlertCalculator() {
  const currentYear = 2025;
  const [currentSalary, setCurrentSalary] = useState(20_000);
  const [annualGrowth, setAnnualGrowth] = useState(5);
  const [planType, setPlanType] = useState("plan2");
  const [projectionYears, setProjectionYears] = useState(10);
  const [showProjections, setShowProjections] = useState(false);

  const selectedPlan = LOAN_PLANS[planType];

  const result = useMemo(
    () =>
      calculateThresholdAlert({
        currentSalary,
        annualGrowthRate: annualGrowth,
        planType,
        currentYear,
        projectionYears,
      }),
    [currentSalary, annualGrowth, planType, projectionYears]
  );

  const distanceFromThreshold = currentSalary - selectedPlan.threshold;
  const percentageOfThreshold = (currentSalary / selectedPlan.threshold) * 100;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Income Threshold Alert Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Income Threshold Alert Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Find out when your salary growth will trigger student loan repayments
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-amber-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Plan Ahead</h3>
                  <p className="text-sm text-gray-600">
                    If you are currently below the repayment threshold, this calculator helps you anticipate when your growing salary will trigger student loan repayments.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Salary */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                Current Annual Salary
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="salary"
                  min={0}
                  max={100000}
                  step={500}
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={10000}
                  max={50000}
                  step={500}
                  value={Math.min(50000, currentSalary)}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {currentSalary < selectedPlan.threshold ? (
                    <span className="text-green-600 font-medium">Below threshold ✓</span>
                  ) : (
                    <span className="text-orange-600 font-medium">Above threshold</span>
                  )}
                </span>
                <span className="text-gray-500">
                  {percentageOfThreshold.toFixed(0)}% of threshold
                </span>
              </div>
            </div>

            {/* Loan Plan */}
            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Plan Type
              </label>
              <select
                id="plan"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
              >
                {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                  <option key={key} value={key}>
                    {plan.name} - {plan.description}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Threshold: <strong>{fmtMoney(selectedPlan.threshold)}</strong> | Rate: <strong>{fmtPercent(selectedPlan.rate)}</strong>
              </p>
            </div>

            {/* Annual Growth Rate */}
            <div>
              <label htmlFor="growth" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Annual Salary Growth
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="growth"
                  min={0}
                  max={20}
                  step={0.5}
                  value={annualGrowth}
                  onChange={(e) => setAnnualGrowth(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={15}
                  step={0.5}
                  value={Math.min(15, annualGrowth)}
                  onChange={(e) => setAnnualGrowth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Typical UK salary growth: 2-5% per year
              </p>
            </div>

            {/* Projection Period */}
            <div>
              <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">
                Projection Period
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="years"
                  min={1}
                  max={20}
                  step={1}
                  value={projectionYears}
                  onChange={(e) => setProjectionYears(Number(e.target.value || 1))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">years</span>
              </div>
            </div>

            {/* Quick Scenarios */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Scenarios
              </label>
              <div className="space-y-2">
                {[
                  { label: "Just Started (£18k, 8% growth)", salary: 18000, growth: 8 },
                  { label: "Early Career (£22k, 5% growth)", salary: 22000, growth: 5 },
                  { label: "Near Threshold (£25k, 3% growth)", salary: 25000, growth: 3 },
                ].map((scenario, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSalary(scenario.salary);
                      setAnnualGrowth(scenario.growth);
                    }}
                    className="w-full px-3 py-2 text-xs text-left bg-white border border-gray-300 rounded hover:bg-amber-50 hover:border-amber-500 transition-colors"
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Threshold Alert</h2>

            {result.belowThreshold ? (
              <div className="space-y-4">
                {/* Current Status */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-green-800">Currently No Repayments</p>
                      <p className="text-sm text-green-700 mt-1">
                        Your salary is {fmtMoney(Math.abs(distanceFromThreshold))} below the threshold
                      </p>
                    </div>
                  </div>
                </div>

                {result.yearReachingThreshold ? (
                  <>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                      <p className="text-sm text-gray-500">Repayments Will Start In</p>
                      <p className="text-3xl font-bold text-amber-600">{result.yearReachingThreshold}</p>
                      {result.yearsUntilRepayment !== null && (
                        <p className="text-sm text-gray-600 mt-1">
                          {result.yearsUntilRepayment === 0 ? "This year" :
                            result.yearsUntilRepayment === 1 ? "Next year" :
                              `In ${result.yearsUntilRepayment} years`}
                          {result.monthsUntilRepayment !== null && result.monthsUntilRepayment > 0 && (
                            <span> (approx {result.monthsUntilRepayment} months)</span>
                          )}
                        </p>
                      )}
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-sm text-gray-500">Your Salary at That Time</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {fmtMoney(result.salaryAtThreshold || 0, 0)}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Growth from current: +{fmtMoney((result.salaryAtThreshold || 0) - currentSalary, 0)}
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-sm text-gray-500">Initial Monthly Repayment</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {fmtMoney(result.projections.find(p => p.year === result.yearReachingThreshold)?.monthlyRepayment || 0, 0)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {fmtPercent(selectedPlan.rate)} of income above threshold
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Payment Timeline</p>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
                            <p className="text-xs font-medium text-gray-800">Now</p>
                            <p className="text-xs text-gray-500">{currentYear}</p>
                          </div>
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 to-amber-500 mx-2"></div>
                          <div className="text-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full mx-auto mb-1"></div>
                            <p className="text-xs font-medium text-gray-800">Start</p>
                            <p className="text-xs text-gray-500">{result.yearReachingThreshold}</p>
                          </div>
                        </div>
                        <div className="text-xs text-center text-gray-600 mt-2">
                          {result.yearsUntilRepayment === 1 ? "1 year" : `${result.yearsUntilRepayment} years`} until repayments begin
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-blue-800">No Repayments Expected</p>
                        <p className="text-sm text-blue-700 mt-1">
                          Based on {annualGrowth}% annual growth, you will not reach the threshold within the next {projectionYears} years
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-orange-800">Already Making Repayments</p>
                      <p className="text-sm text-orange-700 mt-1">
                        Your salary is {fmtMoney(distanceFromThreshold)} above the {fmtMoney(selectedPlan.threshold)} threshold
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Current Monthly Repayment</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {fmtMoney(result.projections[0]?.monthlyRepayment || 0, 0)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {fmtMoney(result.projections[0]?.annualRepayment || 0, 0)} per year
                  </p>
                </div>

                {result.projections.length > 1 && (
                  <div>
                    <p className="text-sm text-gray-500">In {projectionYears} Years ({currentYear + projectionYears})</p>
                    <p className="text-xl font-bold text-gray-800">
                      {fmtMoney(result.projections[result.projections.length - 1]?.monthlyRepayment || 0, 0)}/month
                    </p>
                    <p className="text-sm text-gray-500">
                      At projected salary of {fmtMoney(result.projections[result.projections.length - 1]?.salary || 0, 0)}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={() => setShowProjections(!showProjections)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {showProjections ? "Hide" : "Show"} Year-by-Year Projections
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projections Table */}
      {showProjections && (
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Salary and Repayment Projections</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Projected Salary</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Monthly Payment</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Annual Payment</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {result.projections.map((projection, index) => (
                  <tr
                    key={projection.year}
                    className={`${projection.year === result.yearReachingThreshold ? "bg-amber-50 font-medium" :
                        projection.aboveThreshold ? "bg-orange-50" : "bg-green-50"
                      } hover:opacity-80`}
                  >
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {projection.year}
                      {index === 0 && <span className="ml-2 text-xs text-gray-500">(Current)</span>}
                      {projection.year === result.yearReachingThreshold && (
                        <span className="ml-2 text-xs text-amber-600 font-semibold">→ Starts here</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">
                      {fmtMoney(projection.salary, 0)}
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {projection.aboveThreshold ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          Above
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Below
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">
                      {projection.aboveThreshold ? fmtMoney(projection.monthlyRepayment, 0) : "-"}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">
                      {projection.aboveThreshold ? fmtMoney(projection.annualRepayment, 0) : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <strong>Note:</strong> Projections assume consistent {annualGrowth}% annual salary growth.
              Actual salaries and thresholds may change based on promotions, job changes, and government policy updates.
            </p>
          </div>
        </section>
      )}

      {/* Threshold Comparison */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Compare All Plan Thresholds</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(LOAN_PLANS).map(([key, plan]) => {
            const isSelected = key === planType;
            const isBelowThreshold = currentSalary < plan.threshold;

            return (
              <div
                key={key}
                className={`p-4 rounded-lg border-2 transition-all ${isSelected
                    ? "border-amber-500 bg-amber-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                  {isSelected && (
                    <span className="text-xs bg-amber-600 text-white px-2 py-0.5 rounded">Selected</span>
                  )}
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-1">{fmtMoney(plan.threshold)}</p>
                <p className="text-xs text-gray-500 mb-3">{plan.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Your salary:</span>
                    <span className={`font-medium ${isBelowThreshold ? "text-green-600" : "text-orange-600"}`}>
                      {isBelowThreshold ? "Below ✓" : "Above"}
                    </span>
                  </div>
                  {isBelowThreshold && (
                    <div className="text-xs text-gray-600">
                      Need: {fmtMoney(plan.threshold - currentSalary)} more
                    </div>
                  )}
                  <div className="text-xs text-gray-600">
                    Rate: {fmtPercent(plan.rate)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Insights */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-amber-500">
            <div className="text-amber-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Plan Ahead</h3>
            <p className="text-sm text-gray-600">
              Knowing when repayments will start helps you budget effectively. Set aside funds in advance to avoid surprises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-amber-500">
            <div className="text-amber-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Gradual Impact</h3>
            <p className="text-sm text-gray-600">
              Initial repayments are typically small. As your salary grows, repayments increase proportionally at {fmtPercent(selectedPlan.rate)}.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-amber-500">
            <div className="text-amber-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Thresholds Change</h3>
            <p className="text-sm text-gray-600">
              Government updates thresholds periodically. Check the latest figures annually to ensure accuracy in your planning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Ready to Plan Your Finances?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Explore our other calculators to understand the complete picture of your student loan repayments
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Salary Growth Calculator
          </button>
          <button className="bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Part-Time Earnings Calculator
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Disclaimer:</strong> This calculator provides estimates based on assumed salary growth. Actual repayments depend on real income changes, threshold updates, and employment status. Always verify current thresholds with the Student Loans Company or gov.uk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}