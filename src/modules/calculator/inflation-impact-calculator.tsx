"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgraduate";

type YearlyInflationData = {
  year: number;
  nominalRepayment: number;
  realValueRepayment: number;
  cumulativeNominal: number;
  cumulativeReal: number;
  purchasingPowerLoss: number;
  realValueAsPercentage: number;
};

type InflationResult = {
  yearlyData: YearlyInflationData[];
  totalNominalRepayments: number;
  totalRealRepayments: number;
  totalPurchasingPowerSaved: number;
  averageRealBurden: number;
  inflationBenefit: number;
};

const LOAN_CONFIGS = {
  "Plan 1": { threshold: 26065, repaymentRate: 0.09, writeOffYears: 25 },
  "Plan 2": { threshold: 28470, repaymentRate: 0.09, writeOffYears: 30 },
  "Plan 4": { threshold: 32745, repaymentRate: 0.09, writeOffYears: 30 },
  "Plan 5": { threshold: 25000, repaymentRate: 0.09, writeOffYears: 40 },
  Postgraduate: { threshold: 21000, repaymentRate: 0.06, writeOffYears: 30 },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number) => `${(n * 100).toFixed(1)}%`;

function calculateInflationImpact({
  salary,
  salaryGrowth,
  inflationRate,
  yearsToProject,
  plan,
}: {
  initialRepayment: number;
  salary: number;
  salaryGrowth: number;
  inflationRate: number;
  yearsToProject: number;
  plan: LoanPlan;
  realIncomeGrowth: number;
}): InflationResult {
  const yearlyData: YearlyInflationData[] = [];
  const config = LOAN_CONFIGS[plan];

  let cumulativeNominal = 0;
  let cumulativeReal = 0;
  let currentSalary = salary;
  let inflationAdjustmentFactor = 1.0; // Deflator to convert to real terms

  for (let year = 1; year <= yearsToProject; year++) {
    // Update salary with growth
    if (year > 1) {
      currentSalary *= 1 + salaryGrowth;
    }

    // Calculate repayment based on current salary
    const nominalRepayment = Math.max(
      0,
      ((currentSalary - config.threshold) * config.repaymentRate)
    );

    // Apply inflation adjustment to find real value
    inflationAdjustmentFactor /= 1 + inflationRate;
    const realValueRepayment = nominalRepayment * inflationAdjustmentFactor;

    cumulativeNominal += nominalRepayment;
    cumulativeReal += realValueRepayment;

    const purchasingPowerLoss = nominalRepayment - realValueRepayment;
    const realValueAsPercentage = (realValueRepayment / nominalRepayment) * 100;

    yearlyData.push({
      year,
      nominalRepayment,
      realValueRepayment,
      cumulativeNominal,
      cumulativeReal,
      purchasingPowerLoss,
      realValueAsPercentage,
    });
  }

  const totalPurchasingPowerSaved = cumulativeNominal - cumulativeReal;
  const averageRealBurden = cumulativeReal / yearsToProject;
  const inflationBenefit = (totalPurchasingPowerSaved / cumulativeNominal) * 100;

  return {
    yearlyData,
    totalNominalRepayments: cumulativeNominal,
    totalRealRepayments: cumulativeReal,
    totalPurchasingPowerSaved,
    averageRealBurden,
    inflationBenefit,
  };
}

export default function InflationImpactCalculatorPage() {
  const [salary, setSalary] = useState(35000);
  const [salaryGrowth, setSalaryGrowth] = useState(0.04); // Nominal wage growth
  const [inflationRate, setInflationRate] = useState(0.03);
  const [yearsToProject, setYearsToProject] = useState(20);
  const [plan, setPlan] = useState<LoanPlan>("Plan 2");

  const config = LOAN_CONFIGS[plan];
  const initialRepayment = Math.max(0, (salary - config.threshold) * config.repaymentRate);
  const realIncomeGrowth = salaryGrowth - inflationRate;

  const result = useMemo(
    () =>
      calculateInflationImpact({
        initialRepayment,
        salary,
        salaryGrowth,
        inflationRate,
        yearsToProject: Math.min(yearsToProject, config.writeOffYears),
        plan,
        realIncomeGrowth,
      }),
    [initialRepayment, salary, salaryGrowth, inflationRate, yearsToProject, plan, realIncomeGrowth,
      config.writeOffYears
    ]
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Student Loan Inflation Impact Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Loan Inflation Impact Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Discover how inflation erodes the real cost of your student loan repayments over time,
            making future payments less burdensome than they appear in nominal terms.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <div className="flex items-start">
                <div className="text-teal-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Inflation is Your Friend</h3>
                  <p className="text-sm text-gray-600">
                    Because student loan repayments are based on current income (not adjusted for
                    inflation), each year&apos;s payment becomes less burdensome in real terms.
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
                onChange={(e) => setPlan(e.target.value as LoanPlan)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                <option value="Plan 1">Plan 1 (pre-2012)</option>
                <option value="Plan 2">Plan 2 (2012-2023)</option>
                <option value="Plan 4">Plan 4 (Scotland)</option>
                <option value="Plan 5">Plan 5 (2023+)</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Threshold: {fmtMoney(config.threshold)} | {(config.repaymentRate * 100).toFixed(0)}%
                repayment rate
              </p>
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
                  max={250000}
                  step={1000}
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={20000}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, Math.max(20000, salary))}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Current annual repayment: {fmtMoney(initialRepayment, 0)}
              </p>
            </div>

            {/* Nominal Salary Growth */}
            <div>
              <label
                htmlFor="salary-growth"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expected Nominal Salary Growth
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="salary-growth"
                  min={0}
                  max={20}
                  step={0.5}
                  value={(salaryGrowth * 100).toFixed(1)}
                  onChange={(e) => setSalaryGrowth(Number(e.target.value) / 100)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
                <span className="ml-2 text-sm text-gray-600">%</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                UK average: 3-5% per year (includes inflation)
              </p>
            </div>

            {/* Inflation Rate */}
            <div>
              <label
                htmlFor="inflation-rate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expected Annual Inflation Rate
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="inflation-rate"
                  min={0}
                  max={15}
                  step={0.1}
                  value={(inflationRate * 100).toFixed(1)}
                  onChange={(e) => setInflationRate(Number(e.target.value) / 100)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
                <span className="ml-2 text-sm text-gray-600">%</span>
              </div>
              <div className="mt-2">
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.1}
                  value={inflationRate * 100}
                  onChange={(e) => setInflationRate(Number(e.target.value) / 100)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Bank of England target: 2% | 20-year average: ~2.5%
              </p>
            </div>

            {/* Real Income Growth */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-1">Real Income Growth</p>
              <p className="text-2xl font-bold text-gray-800">
                {((realIncomeGrowth) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Nominal growth ({fmtPercent(salaryGrowth)}) minus inflation (
                {fmtPercent(inflationRate)})
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
                max={config.writeOffYears}
                value={yearsToProject}
                onChange={(e) =>
                  setYearsToProject(Math.min(Number(e.target.value || 1), config.writeOffYears))
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">
                Maximum: {config.writeOffYears} years (loan write-off period)
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2" role="region" aria-live="polite">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Inflation Impact Analysis</h2>

            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  Total Nominal Payments
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {fmtMoney(result.totalNominalRepayments, 0)}
                </p>
                <p className="text-sm text-gray-600">What you&apos;ll actually pay</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  Real Value (Today&apos;s £)
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {fmtMoney(result.totalRealRepayments, 0)}
                </p>
                <p className="text-sm text-gray-600">Inflation-adjusted cost</p>
              </div>

              <div className="bg-teal-50 p-6 rounded-xl border-2 border-teal-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  Purchasing Power Saved
                </p>
                <p className="text-3xl font-bold text-teal-700 mb-1">
                  {fmtMoney(result.totalPurchasingPowerSaved, 0)}
                </p>
                <p className="text-sm text-gray-600">
                  {result.inflationBenefit.toFixed(1)}% benefit from inflation
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                Key Insight: Inflation Makes Debt Cheaper
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  Over {yearsToProject} years, you&apos;ll pay{" "}
                  <strong>{fmtMoney(result.totalNominalRepayments, 0)}</strong> in nominal terms.
                  However, due to inflation, the real cost in today&apos;s money is only{" "}
                  <strong>{fmtMoney(result.totalRealRepayments, 0)}</strong>.
                </p>
                <p>
                  <strong>Inflation saves you {fmtMoney(result.totalPurchasingPowerSaved, 0)}</strong>{" "}
                  in real purchasing power ({result.inflationBenefit.toFixed(1)}% of total payments).
                  This happens because your repayments are calculated on current salary thresholds,
                  not adjusted for inflation.
                </p>
                <p>
                  By year {yearsToProject}, each pound you pay will only have{" "}
                  <strong>
                    {(
                      result.yearlyData[result.yearlyData.length - 1].realValueAsPercentage
                    ).toFixed(0)}
                    %
                  </strong>{" "}
                  of today&apos;s purchasing power, making the debt burden significantly lighter.
                </p>
              </div>
            </div>

            {/* Comparison Chart Visualization */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Purchasing Power Erosion Over Time
              </h3>
              <div className="space-y-4">
                {result.yearlyData.slice(0, 10).map((data, idx) => {
                  const nominalWidth = 100;
                  const realWidth = data.realValueAsPercentage;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Year {data.year}</span>
                        <span>{fmtMoney(data.nominalRepayment, 0)} nominal</span>
                      </div>
                      <div className="h-8 bg-gray-200 rounded-lg overflow-hidden relative">
                        <div
                          className="h-full bg-blue-500 flex items-center justify-end pr-2 text-xs text-white font-medium"
                          style={{ width: `${nominalWidth}%` }}
                        >
                          Nominal
                        </div>
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500 opacity-75 flex items-center justify-end pr-2 text-xs text-white font-medium"
                          style={{ width: `${realWidth}%` }}
                        >
                          Real ({realWidth.toFixed(0)}%)
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Real value: {fmtMoney(data.realValueRepayment, 0)}</span>
                        <span className="text-green-600">
                          Saved: {fmtMoney(data.purchasingPowerLoss, 0)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {yearsToProject > 10 && (
                <p className="mt-4 text-xs text-gray-500 text-center">
                  Showing first 10 years of {yearsToProject}-year projection
                </p>
              )}
            </div>

            {/* Detailed Table */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Year-by-Year Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Year
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Nominal Payment
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Real Value
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Purchasing Power
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Saved
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {result.yearlyData.slice(0, 10).map((data, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 text-sm font-medium text-gray-900">{data.year}</td>
                        <td className="px-3 py-2 text-sm text-gray-700">
                          {fmtMoney(data.nominalRepayment, 0)}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-700">
                          {fmtMoney(data.realValueRepayment, 0)}
                        </td>
                        <td className="px-3 py-2 text-sm font-medium text-gray-700">
                          {data.realValueAsPercentage.toFixed(1)}%
                        </td>
                        <td className="px-3 py-2 text-sm font-medium text-green-600">
                          {fmtMoney(data.purchasingPowerLoss, 0)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-100">
                    <tr>
                      <td className="px-3 py-2 text-sm font-bold text-gray-900">Total</td>
                      <td className="px-3 py-2 text-sm font-bold text-gray-900">
                        {fmtMoney(result.totalNominalRepayments, 0)}
                      </td>
                      <td className="px-3 py-2 text-sm font-bold text-gray-900">
                        {fmtMoney(result.totalRealRepayments, 0)}
                      </td>
                      <td className="px-3 py-2 text-sm font-medium text-gray-700">
                        {((result.totalRealRepayments / result.totalNominalRepayments) * 100).toFixed(
                          1
                        )}
                        %
                      </td>
                      <td className="px-3 py-2 text-sm font-bold text-green-600">
                        {fmtMoney(result.totalPurchasingPowerSaved, 0)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {yearsToProject > 10 && (
                <p className="mt-3 text-xs text-gray-500 text-center">
                  Showing first 10 years. Full projection includes {yearsToProject} years.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Inflation Helps Borrowers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-700 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Fixed Repayment Thresholds</h3>
                <p className="text-sm text-gray-600">
                  Repayment thresholds historically increase with inflation or earnings growth. When
                  frozen, real repayment burdens increase. When indexed, inflation helps by keeping
                  real burdens stable.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-700 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Income-Based Repayments</h3>
                <p className="text-sm text-gray-600">
                  Because repayments are 9% of income above thresholds (not based on balance), each
                  year&apos;s payment becomes relatively cheaper as inflation erodes its real value.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-700 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Long Repayment Periods</h3>
                <p className="text-sm text-gray-600">
                  With 25-40 year repayment periods, compound inflation significantly reduces the
                  real burden. A 3% inflation rate means money loses half its value in 23 years.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-700 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Wage Growth Outpaces Inflation</h3>
                <p className="text-sm text-gray-600">
                  Historically, UK wage growth (3-4%) exceeds inflation (2-3%), meaning real incomes
                  rise while loan repayments stay fixed as a percentage of income.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-700 font-bold">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Write-Off Provisions</h3>
                <p className="text-sm text-gray-600">
                  Most borrowers won&apos;t fully repay before write-off. Inflation reduces the real value
                  of what&apos;s paid without affecting the write-off timeline.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-teal-700 font-bold">6</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">No Inflation-Adjusted Debt</h3>
                <p className="text-sm text-gray-600">
                  Unlike mortgages where debt is fixed, student loan balances grow with interest but
                  repayments are based only on current income, creating asymmetric inflation benefit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/slc-interest-rate-impact-calculator/"
          >
            <div className="mr-3 text-teal-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">SLC Interest Rate Impact Calculator</h3>
              <p className="text-sm text-gray-600">See how rate changes affect balances</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/investment-vs-overpayment-calculator/"
          >
            <div className="mr-3 text-teal-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Analysis</h3>
              <p className="text-sm text-gray-600">Compare overpaying vs investing</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            <div className="mr-3 text-teal-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Repayment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate monthly payments</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto prose prose-teal">
        <h2>Understanding How Inflation Affects Student Loan Repayments</h2>
        <p>
          Inflation is often viewed negatively, but for student loan borrowers, it provides a
          significant hidden benefit by eroding the real cost of debt repayments over time. This
          calculator helps visualize how inflation reduces the true burden of student loans.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="inflation-benefit">
            <AccordionTrigger>The Inflation Benefit Explained</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Student loan repayments are calculated as a fixed percentage (9% for most plans) of income
                  above a threshold. Crucially, these thresholds historically increase with average earnings
                  or inflation, but the absolute pound amounts you pay each year lose purchasing power as
                  inflation continues. A £3,000 payment today will feel much less burdensome in 20 years.
                </p>

                <h4 className="font-semibold text-gray-800">Real vs Nominal Values</h4>
                <p>
                  Nominal values represent the actual pounds paid, while real values adjust for inflation to
                  show what those pounds are worth in today&apos;s money. If you pay £3,000 per year for 20 years
                  at 3% inflation, you&apos;ll pay £60,000 nominally, but the real cost in today&apos;s purchasing
                  power is only about £44,700—a saving of £15,300.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="compound-inflation">
            <AccordionTrigger>The Power of Compound Inflation</AccordionTrigger>
            <AccordionContent>
              <p>
                Inflation compounds over time, meaning its effect grows exponentially. At 3% annual
                inflation, money loses approximately 26% of its value over 10 years, 45% over 20 years,
                and 62% over 30 years. For Plan 2 borrowers with 30-year write-off periods, this means
                later payments have dramatically less real cost.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wage-growth">
            <AccordionTrigger>Wage Growth vs Inflation</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Historically, UK wage growth averages 3-4% annually while inflation targets 2%. This means
                  real wages typically increase over time. As salaries rise faster than inflation, the fixed
                  percentage of income directed to loan repayments remains constant, but your disposable
                  income grows in real terms, making the debt progressively less burdensome.
                </p>

                <h4 className="font-semibold text-gray-800 mt-4">Salary Progression and Inflation</h4>
                <p>
                  Career progression typically delivers wage growth exceeding inflation, especially in early
                  and mid-career. A graduate starting at £25,000 might reasonably expect £50,000-60,000 by
                  age 40 through promotions and experience. This nominal doubling represents significant real
                  wage growth even after inflation, making percentage-based loan repayments increasingly
                  affordable.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="threshold-freezes">
            <AccordionTrigger>Threshold Freezes: When Inflation Hurts</AccordionTrigger>
            <AccordionContent>
              <p>
                Government policies sometimes freeze repayment thresholds rather than indexing them to
                inflation or earnings. The Plan 2 threshold was frozen at £27,295 from 2021-2025. During
                freezes, inflation actually increases the real burden because more graduates exceed the
                threshold and pay higher percentages of their income as wages rise with inflation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="comparing-debt">
            <AccordionTrigger>Comparing to Fixed-Rate Debt</AccordionTrigger>
            <AccordionContent>
              <p>
                Unlike mortgages where you owe a fixed amount regardless of inflation, student loans are
                functionally a graduate tax—you pay a percentage of income. If you have a £200,000 mortgage
                at 4% fixed for 25 years, inflation makes those payments cheaper without reducing the
                outstanding balance. With student loans, both the real payment cost AND the likelihood of
                full repayment decrease with inflation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="write-off">
            <AccordionTrigger>The Write-Off Factor</AccordionTrigger>
            <AccordionContent>
              <p>
                Most Plan 2 and Plan 5 borrowers won&apos;t fully repay their loans before write-off (25-40
                years). Inflation increases the proportion of borrowers reaching write-off with outstanding
                balances, as the real value of their accumulated payments over decades becomes insufficient
                to clear debt that grows with interest.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="historical-context">
            <AccordionTrigger>Historical UK Inflation Context</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  UK inflation has averaged approximately 2.5% over the past 20 years, with significant
                  variation. The 2008 financial crisis saw deflation (-0.5%), while 2022-2023 experienced
                  inflation exceeding 10%. The Bank of England&apos;s 2% target provides a reasonable long-term
                  assumption for projections.
                </p>

                <h4 className="font-semibold text-gray-800 mt-4">The Generational Context</h4>
                <p>
                  Older generations with Plan 1 loans benefited from higher inflation in the 1990s-2000s and
                  lower loan balances. Current Plan 2 borrowers face lower average inflation but higher
                  balances and longer repayment periods. Plan 5 borrowers (2023+) have 40-year write-offs,
                  meaning even modest 2-3% inflation will substantially reduce real repayment burdens.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interest-rates">
            <AccordionTrigger>Interest Rates vs Inflation</AccordionTrigger>
            <AccordionContent>
              <p>
                Student loan interest rates are linked to inflation (RPI or RPI+3% depending on plan). When
                loan interest equals inflation, the real value of your debt stays constant. When interest
                exceeds inflation (as with Plan 2 at RPI+3%), real debt grows despite inflation&apos;s erosive
                effect on repayments.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="policy">
            <AccordionTrigger>Policy Implications</AccordionTrigger>
            <AccordionContent>
              <p>
                The inflation benefit to borrowers is a cost to the government, as the real value of
                repayments received decreases. This is one reason governments have frozen thresholds and
                extended write-off periods—to recapture some of the value that inflation would otherwise
                transfer from the government to borrowers.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="practical-takeaways">
            <AccordionTrigger>Practical Takeaways</AccordionTrigger>
            <AccordionContent>
              <p>
                Understanding inflation&apos;s impact helps with financial planning. If you&apos;re considering
                overpaying your student loan, remember that inflation automatically reduces your debt burden
                without any action. The guaranteed &quot;return&quot; from not overpaying includes both avoiding
                opportunity cost and capturing the inflation benefit on money you would have paid.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* CTA */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to optimize your student loan strategy?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore our comprehensive suite of calculators to understand your complete student loan
          picture and make informed financial decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/investment-vs-overpayment-calculator/"
          >
            Overpayment Analysis
          </Link>
          <Link
            className="bg-white hover:bg-gray-50 text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-teal-600"
            href="/calculators/regional-national-comparison-calculator/"
          >
            Regional Comparison
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="max-w-6xl mx-auto">
        <ol className="flex items-center space-x-1 text-sm text-gray-600">
          <li>
            <Link className="hover:text-teal-700 hover:underline" href="/">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link className="hover:text-teal-700 hover:underline" href="/calculators/">
              Calculators
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <span className="font-medium text-gray-800" aria-current="page">
              Inflation Impact Calculator
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
