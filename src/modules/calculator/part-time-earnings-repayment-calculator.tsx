"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type PlanDetails = {
  name: string;
  threshold: number;
  rate: number;
  description: string;
};

type CalculationResult = {
  fullTimeSalary: number;
  partTimeEarnings: number;
  totalIncome: number;
  incomeAboveThreshold: number;
  fullTimeOnlyRepayment: number;
  combinedRepayment: number;
  additionalRepayment: number;
  monthlyRepayment: number;
  additionalMonthlyRepayment: number;
  effectiveRate: number;
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

function calculatePartTimeImpact({
  fullTimeSalary,
  partTimeEarnings,
  planType,
}: {
  fullTimeSalary: number;
  partTimeEarnings: number;
  planType: string;
}): CalculationResult {
  const plan = LOAN_PLANS[planType];

  const totalIncome = fullTimeSalary + partTimeEarnings;

  // Calculate repayments
  const fullTimeIncomeAboveThreshold = Math.max(0, fullTimeSalary - plan.threshold);
  const fullTimeOnlyRepayment = fullTimeIncomeAboveThreshold * plan.rate;

  const combinedIncomeAboveThreshold = Math.max(0, totalIncome - plan.threshold);
  const combinedRepayment = combinedIncomeAboveThreshold * plan.rate;

  const additionalRepayment = combinedRepayment - fullTimeOnlyRepayment;

  const monthlyRepayment = combinedRepayment / 12;
  const additionalMonthlyRepayment = additionalRepayment / 12;

  // Calculate effective rate on part-time earnings
  const effectiveRate = partTimeEarnings > 0 ? additionalRepayment / partTimeEarnings : 0;

  return {
    fullTimeSalary,
    partTimeEarnings,
    totalIncome,
    incomeAboveThreshold: combinedIncomeAboveThreshold,
    fullTimeOnlyRepayment,
    combinedRepayment,
    additionalRepayment,
    monthlyRepayment,
    additionalMonthlyRepayment,
    effectiveRate,
  };
}

export default function PartTimeEarningsCalculator() {
  const [fullTimeSalary, setFullTimeSalary] = useState(28_000);
  const [partTimeEarnings, setPartTimeEarnings] = useState(5_000);
  const [planType, setPlanType] = useState("plan2");
  const [inputMode, setInputMode] = useState<"annual" | "monthly">("annual");
  const [monthlyPartTime, setMonthlyPartTime] = useState(417);

  // Sync annual and monthly values
  const handleMonthlyChange = (value: number) => {
    setMonthlyPartTime(value);
    setPartTimeEarnings(value * 12);
  };

  const handleAnnualChange = (value: number) => {
    setPartTimeEarnings(value);
    setMonthlyPartTime(Math.round(value / 12));
  };

  const selectedPlan = LOAN_PLANS[planType];

  const result = useMemo(
    () =>
      calculatePartTimeImpact({
        fullTimeSalary,
        partTimeEarnings,
        planType,
      }),
    [fullTimeSalary, partTimeEarnings, planType]
  );

  // Calculate scenarios for visualization
  const scenarios = useMemo(() => {
    const values = [0, 2500, 5000, 7500, 10000, 15000];
    return values.map((ptEarnings) =>
      calculatePartTimeImpact({
        fullTimeSalary,
        partTimeEarnings: ptEarnings,
        planType,
      })
    );
  }, [fullTimeSalary, planType]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Part-Time Earnings Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Part-Time Earnings Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Understand how additional part-time income affects your student loan repayments
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-green-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Combined Income Impact</h3>
                  <p className="text-sm text-gray-600">
                    Student loan repayments are based on your <strong>total income</strong> from all sources. Part-time work adds to your repayment obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Full-Time Salary */}
            <div>
              <label htmlFor="full-time" className="block text-sm font-medium text-gray-700 mb-1">
                Full-Time Annual Salary
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="full-time"
                  min={0}
                  max={250000}
                  step={1000}
                  value={fullTimeSalary}
                  onChange={(e) => setFullTimeSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={15000}
                  max={80000}
                  step={1000}
                  value={Math.min(80000, fullTimeSalary)}
                  onChange={(e) => setFullTimeSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Your main employment income
              </p>
            </div>

            {/* Part-Time Earnings */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="part-time" className="block text-sm font-medium text-gray-700">
                  Part-Time Earnings
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setInputMode("annual")}
                    className={`px-3 py-1 text-xs rounded ${inputMode === "annual"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    Annual
                  </button>
                  <button
                    onClick={() => setInputMode("monthly")}
                    className={`px-3 py-1 text-xs rounded ${inputMode === "monthly"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {inputMode === "annual" ? (
                <>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      id="part-time"
                      min={0}
                      max={50000}
                      step={500}
                      value={partTimeEarnings}
                      onChange={(e) => handleAnnualChange(Number(e.target.value || 0))}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                    <span className="ml-2 text-sm text-gray-600">/year</span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="range"
                      min={0}
                      max={20000}
                      step={500}
                      value={Math.min(20000, partTimeEarnings)}
                      onChange={(e) => handleAnnualChange(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      id="part-time-monthly"
                      min={0}
                      max={5000}
                      step={50}
                      value={monthlyPartTime}
                      onChange={(e) => handleMonthlyChange(Number(e.target.value || 0))}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                    <span className="ml-2 text-sm text-gray-600">/month</span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="range"
                      min={0}
                      max={1667}
                      step={50}
                      value={Math.min(1667, monthlyPartTime)}
                      onChange={(e) => handleMonthlyChange(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {inputMode === "annual"
                  ? `≈ ${fmtMoney(partTimeEarnings / 12, 0)}/month`
                  : `≈ ${fmtMoney(partTimeEarnings, 0)}/year`
                }
              </p>
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
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                  <option key={key} value={key}>
                    {plan.name} - {plan.description}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Threshold: {fmtMoney(selectedPlan.threshold)} | Rate: {fmtPercent(selectedPlan.rate)}
              </p>
            </div>

            {/* Quick Scenarios */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Scenarios
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "No PT work", value: 0 },
                  { label: "£200/month", value: 2400 },
                  { label: "£400/month", value: 4800 },
                  { label: "£600/month", value: 7200 },
                ].map((scenario) => (
                  <button
                    key={scenario.label}
                    onClick={() => handleAnnualChange(scenario.value)}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded hover:bg-green-50 hover:border-green-500 transition-colors"
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Repayment Impact</h2>

            <div className="space-y-4">
              {/* Total Income */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-gray-500">Combined Annual Income</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.totalIncome, 0)}</p>
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Full-time:</span>
                    <span className="font-medium">{fmtMoney(fullTimeSalary, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part-time:</span>
                    <span className="font-medium">{fmtMoney(partTimeEarnings, 0)}</span>
                  </div>
                </div>
              </div>

              {/* Monthly Repayment */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Monthly Repayment</p>
                <p className="text-3xl font-bold text-gray-800">{fmtMoney(result.monthlyRepayment, 0)}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {fmtMoney(result.combinedRepayment, 0)} per year
                </p>
              </div>

              {/* Additional Repayment from PT */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Additional Repayment from Part-Time Work</p>
                <p className="text-2xl font-bold text-emerald-600">
                  +{fmtMoney(result.additionalMonthlyRepayment, 0)}<span className="text-lg">/month</span>
                </p>
                <p className="text-sm text-gray-500">
                  +{fmtMoney(result.additionalRepayment, 0)} per year
                </p>
              </div>

              {/* Without Part-Time */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Without Part-Time Work</p>
                <p className="text-xl font-bold text-gray-800">
                  {fmtMoney(result.fullTimeOnlyRepayment / 12, 0)}<span className="text-sm font-normal">/month</span>
                </p>
                <p className="text-sm text-gray-500">
                  {fmtMoney(result.fullTimeOnlyRepayment, 0)} per year
                </p>
              </div>

              {/* Effective Rate */}
              <div>
                <p className="text-sm text-gray-500">Effective Rate on Part-Time Earnings</p>
                <p className="text-2xl font-bold text-gray-800">{fmtPercent(result.effectiveRate)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  You keep {fmtPercent(1 - result.effectiveRate)} of part-time earnings (after loan repayments)
                </p>
              </div>
            </div>

            {/* Breakdown Box */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-2">Income Breakdown</p>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Total income:</span>
                  <span className="font-medium">{fmtMoney(result.totalIncome, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Threshold ({selectedPlan.name}):</span>
                  <span className="font-medium">{fmtMoney(selectedPlan.threshold, 0)}</span>
                </div>
                <div className="flex justify-between border-t border-green-200 pt-1 mt-1">
                  <span>Amount above threshold:</span>
                  <span className="font-medium">{fmtMoney(result.incomeAboveThreshold, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Repayment rate:</span>
                  <span className="font-medium">{fmtPercent(selectedPlan.rate)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Comparison */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Part-Time Earnings Scenarios</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Part-Time Earnings
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Total Income
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Monthly Repayment
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Annual Repayment
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Take-Home Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scenarios.map((scenario, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${scenario.partTimeEarnings === partTimeEarnings ? "bg-green-50" : ""
                    }`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {fmtMoney(scenario.partTimeEarnings, 0)}
                    {scenario.partTimeEarnings === partTimeEarnings && (
                      <span className="ml-2 text-xs text-green-600">(Current)</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    {fmtMoney(scenario.totalIncome, 0)}
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    {fmtMoney(scenario.monthlyRepayment, 0)}
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    {fmtMoney(scenario.combinedRepayment, 0)}
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    {scenario.partTimeEarnings > 0 ? fmtPercent(1 - scenario.effectiveRate) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Take-Home Rate:</strong> The percentage of part-time earnings you keep after student loan repayments
            (not including tax or National Insurance).
          </p>
        </div>
      </section>

      {/* Key Insights */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Important Considerations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Combined Income</h3>
            <p className="text-sm text-gray-600">
              HMRC considers all your income from all sources. Part-time work, freelancing, and side hustles all count toward repayments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Tax & NI Too</h3>
            <p className="text-sm text-gray-600">
              Remember: you&apos;ll also pay tax and National Insurance on part-time earnings. The actual take-home will be lower than shown here.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
            <div className="text-green-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Automatic Deductions</h3>
            <p className="text-sm text-gray-600">
              If you&apos;re employed, student loan repayments are automatically deducted through PAYE. Self-employed? You&apos;ll pay through Self Assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-4xl mx-auto prose prose-green">
        <h2>How Part-Time Work Affects Student Loan Repayments</h2>
        <p>
          Many graduates take on part-time work, freelance projects, or side hustles to supplement their income. It&apos;s important to understand that <strong>all your income is combined</strong> when calculating student loan repayments.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="combined-income">
            <AccordionTrigger>Combined Income Assessment</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  HMRC doesn&apos;t look at your jobs separately. They add up all your income from:
                </p>
                <ul>
                  <li>Your main full-time employment</li>
                  <li>Part-time jobs</li>
                  <li>Freelance or self-employed work</li>
                  <li>Rental income</li>
                  <li>Any other taxable income</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="example-calculation">
            <AccordionTrigger>Example Calculation</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Let&apos;s say you&apos;re on Plan 2 with:</p>
                <ul>
                  <li>Full-time salary: £28,000</li>
                  <li>Part-time earnings: £5,000</li>
                  <li>Total income: £33,000</li>
                </ul>

                <p><strong>Without part-time work:</strong></p>
                <ul>
                  <li>Income above threshold: £28,000 - £27,295 = £705</li>
                  <li>Annual repayment: £705 × 9% = £63.45</li>
                  <li>Monthly: £5.29</li>
                </ul>

                <p><strong>With part-time work:</strong></p>
                <ul>
                  <li>Income above threshold: £33,000 - £27,295 = £5,705</li>
                  <li>Annual repayment: £5,705 × 9% = £513.45</li>
                  <li>Monthly: £42.79</li>
                  <li>Additional repayment from part-time: £450 per year (£37.50/month)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="effective-tax-rate">
            <AccordionTrigger>The Effective Tax Rate</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  In this example, you&apos;re paying £450 extra per year on £5,000 of part-time earnings. That&apos;s an effective rate of 9% on that additional income. However, you&apos;ll also pay:
                </p>
                <ul>
                  <li>Income tax (20% on most of it)</li>
                  <li>National Insurance (typically 8-12%)</li>
                  <li>Student loan repayment (9%)</li>
                </ul>
                <p>
                  This means for every extra £1 you earn from part-time work, you might only keep around 60-70p after all deductions.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="multiple-jobs">
            <AccordionTrigger>Multiple Jobs and PAYE</AccordionTrigger>
            <AccordionContent>
              <p>
                If you have multiple PAYE jobs, each employer deducts student loan repayments based only on what they pay you. However, if your combined income puts you over the threshold, HMRC will reconcile this at the end of the tax year and may collect additional payments through your tax code or Self Assessment.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="self-employment">
            <AccordionTrigger>Self-Employment and Part-Time Work</AccordionTrigger>
            <AccordionContent>
              <p>
                If your part-time work is self-employed or freelance, you&apos;ll need to declare this income through Self Assessment and pay the student loan repayments directly. This is typically done annually rather than monthly.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="is-it-worth-it">
            <AccordionTrigger>Is Part-Time Work Worth It?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  Despite the additional repayments, part-time work can still be financially beneficial:
                </p>
                <ul>
                  <li>You keep the majority of your earnings (typically 60-70%)</li>
                  <li>Extra repayments reduce your loan balance faster</li>
                  <li>You&apos;ll pay less interest over the long term</li>
                  <li>It provides financial flexibility and experience</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="planning-tips">
            <AccordionTrigger>Planning Tips</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li><strong>Budget accordingly:</strong> Factor in the increased loan repayments when planning your finances</li>
                <li><strong>Check your tax code:</strong> Ensure HMRC knows about all your income sources</li>
                <li><strong>Keep records:</strong> Especially important if you&apos;re self-employed</li>
                <li><strong>Consider timing:</strong> If close to the threshold, small changes in income can significantly affect repayments</li>
                <li><strong>Use the calculator:</strong> Test different scenarios to understand the impact before taking on additional work</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Real-World Scenarios */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Common Scenarios</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">🏪</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Weekend Retail Job</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Sarah works full-time earning £26,000 and does weekend shifts at a shop earning £4,000/year.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Total income:</span>
                    <span className="font-medium">£30,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Plan 2 repayment:</span>
                    <span className="font-medium">£243.45/year (£20/month)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Extra from part-time:</span>
                    <span className="font-medium text-green-600">£360/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">💻</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Freelance Designer</h3>
                <p className="text-sm text-gray-600 mb-3">
                  James has a full-time job at £32,000 and takes freelance design projects earning £8,000/year.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Total income:</span>
                    <span className="font-medium">£40,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Plan 2 repayment:</span>
                    <span className="font-medium">£1,143.45/year (£95/month)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Extra from freelancing:</span>
                    <span className="font-medium text-green-600">£720/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">🍽️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Evening Hospitality Work</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Emma works full-time at £24,000 and does evening restaurant shifts earning £6,000/year.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Total income:</span>
                    <span className="font-medium">£30,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Plan 5 repayment:</span>
                    <span className="font-medium">£450/year (£37.50/month)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Extra from part-time:</span>
                    <span className="font-medium text-green-600">£540/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Do I have to tell anyone about my part-time job?
            </h3>
            <p className="text-sm text-gray-600">
              Yes. If you&apos;re employed, your employer will report your earnings to HMRC. If you&apos;re self-employed, you must declare the income through Self Assessment. HMRC will automatically calculate your combined student loan repayments.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Will both my employers deduct student loan repayments?
            </h3>
            <p className="text-sm text-gray-600">
              Each PAYE employer deducts based only on what they pay you. However, if neither job alone crosses the threshold but combined they do, you may need to pay extra through Self Assessment or an adjusted tax code.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              What if I&apos;m paid in cash for part-time work?
            </h3>
            <p className="text-sm text-gray-600">
              You&apos;re still legally required to declare this income to HMRC, even if paid in cash. Failure to declare can result in penalties and back-payments with interest.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Does seasonal work count?
            </h3>
            <p className="text-sm text-gray-600">
              Yes. Even temporary or seasonal work counts toward your total annual income. Your student loan repayments are based on your total annual earnings from all sources.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Should I avoid part-time work to reduce repayments?
            </h3>
            <p className="text-sm text-gray-600">
              Generally no. While you&apos;ll pay more in student loan repayments, you&apos;ll still keep 60-70% of your earnings after all deductions. Plus, you&apos;re reducing your loan balance and paying less interest long-term. The financial benefit usually outweighs the extra repayments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Explore More Calculators</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Understand your complete financial picture with our other student loan calculators
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Salary Growth Calculator
          </button>
          <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Overpayment Calculator
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700">
                <strong>Important:</strong> This calculator shows student loan repayments only. Your actual take-home pay will be lower after income tax and National Insurance. Always consult with HMRC or a financial advisor for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}