"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type Region = "England" | "Scotland" | "Wales" | "Northern Ireland";
type LoanPlan = "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgraduate";

type RegionalResult = {
  region: Region;
  plan: LoanPlan;
  threshold: number;
  repaymentRate: number;
  monthlyRequired: number;
  annualRequired: number;
  totalRepaid: number;
  totalInterest: number;
  paidOff: boolean;
  payoffDate?: string;
  writeOffDate: string;
  writeOffYears: number;
  interestRate: number;
  monthsElapsed: number;
};

// 2025/26 Thresholds and rates
const LOAN_CONFIGS = {
  "Plan 1": {
    threshold: 26_065,
    repaymentRate: 0.09,
    writeOffYears: 25,
    interestRate: 0.032, // Current rate (lower of RPI or Bank Rate + 1%)
    regions: ["England", "Wales", "Northern Ireland"] as Region[],
  },
  "Plan 2": {
    threshold: 28_470,
    repaymentRate: 0.09,
    writeOffYears: 30,
    interestRate: 0.043, // RPI-based
    regions: ["England", "Wales"] as Region[],
  },
  "Plan 4": {
    threshold: 32_745,
    repaymentRate: 0.09,
    writeOffYears: 30,
    interestRate: 0.043, // RPI-based
    regions: ["Scotland"] as Region[],
  },
  "Plan 5": {
    threshold: 25_000,
    repaymentRate: 0.09,
    writeOffYears: 40,
    interestRate: 0.073, // RPI + 3%
    regions: ["England"] as Region[],
  },
  Postgraduate: {
    threshold: 21_000,
    repaymentRate: 0.06,
    writeOffYears: 30,
    interestRate: 0.073, // RPI + 3%
    regions: ["England", "Wales", "Scotland", "Northern Ireland"] as Region[],
  },
};

// Regional plan mapping
const REGION_TO_PLANS: Record<Region, LoanPlan[]> = {
  England: ["Plan 1", "Plan 2", "Plan 5", "Postgraduate"],
  Wales: ["Plan 1", "Plan 2", "Postgraduate"],
  Scotland: ["Plan 4", "Postgraduate"],
  "Northern Ireland": ["Plan 1", "Postgraduate"],
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const monthName = (m: number) =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m];

function simulateLoan({
  salary,
  graduationYear,
  startingBalance,
  plan,
}: {
  salary: number;
  graduationYear: number;
  startingBalance: number;
  plan: LoanPlan;
}): Omit<RegionalResult, "region" | "plan"> {
  const config = LOAN_CONFIGS[plan];
  const monthlyRequired = Math.max(0, (salary - config.threshold) * config.repaymentRate / 12);
  const annualRequired = monthlyRequired * 12;

  const start = new Date(graduationYear + 1, 3, 1); // April after graduation
  const end = new Date(
    start.getFullYear() + config.writeOffYears,
    start.getMonth(),
    1
  );
  const monthsCap =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  let balance = startingBalance;
  let totalRepaid = 0;
  let totalInterest = 0;
  let months = 0;
  const monthlyRate = config.interestRate / 12;

  while (months < monthsCap && balance > 0) {
    const interest = balance * monthlyRate;
    totalInterest += interest;
    balance += interest;

    const pay = Math.min(balance, Math.max(0, monthlyRequired));
    balance -= pay;
    totalRepaid += pay;

    months++;
  }

  const paidOff = balance <= 0.0001;

  let payoffDate: string | undefined;
  if (paidOff) {
    const d = new Date(start);
    d.setMonth(d.getMonth() + months);
    payoffDate = `${monthName(d.getMonth())} ${d.getFullYear()}`;
  }

  const w = end;
  const writeOffStr = `${monthName(w.getMonth())} ${w.getFullYear()}`;

  return {
    threshold: config.threshold,
    repaymentRate: config.repaymentRate,
    monthlyRequired,
    annualRequired,
    totalRepaid,
    totalInterest,
    paidOff,
    payoffDate,
    writeOffDate: writeOffStr,
    writeOffYears: config.writeOffYears,
    interestRate: config.interestRate,
    monthsElapsed: months,
  };
}

export default function RegionalComparisonCalculatorPage() {
  const [salary, setSalary] = useState(30_000);
  const [graduationYear, setGraduationYear] = useState(2020);
  const [loanAmount, setLoanAmount] = useState(45_000);
  const [selectedRegion, setSelectedRegion] = useState<Region>("England");
  const [compareMode, setCompareMode] = useState(false);

  const years = Array.from({ length: 30 }, (_, i) => 1998 + i);

  // Calculate for selected region's plans
  const regionalResults = useMemo(() => {
    const plans = REGION_TO_PLANS[selectedRegion];
    return plans.map((plan) => ({
      region: selectedRegion,
      plan,
      ...simulateLoan({ salary, graduationYear, startingBalance: loanAmount, plan }),
    }));
  }, [salary, graduationYear, loanAmount, selectedRegion]);

  // Calculate for all regions (comparison mode)
  const allRegionalResults = useMemo(() => {
    if (!compareMode) return [];
    const results: RegionalResult[] = [];

    (Object.keys(REGION_TO_PLANS) as Region[]).forEach((region) => {
      const plans = REGION_TO_PLANS[region];
      plans.forEach((plan) => {
        results.push({
          region,
          plan,
          ...simulateLoan({ salary, graduationYear, startingBalance: loanAmount, plan }),
        });
      });
    });

    return results.sort((a, b) => a.annualRequired - b.annualRequired);
  }, [salary, graduationYear, loanAmount, compareMode]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Regional Comparison Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            UK Regional Student Loan Comparison Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Compare student loan repayments across England, Scotland, Wales, and Northern Ireland
            to understand how your region affects what you pay.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="text-indigo-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Regional Differences</h3>
                  <p className="text-sm text-gray-600">
                    Each UK nation has different repayment thresholds, interest rates, and loan
                    plans. This calculator helps you compare.
                  </p>
                </div>
              </div>
            </div>

            {/* Region */}
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                Your Region
              </label>
              <select
                id="region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as Region)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                aria-describedby="region-hint"
              >
                <option value="England">England</option>
                <option value="Scotland">Scotland</option>
                <option value="Wales">Wales</option>
                <option value="Northern Ireland">Northern Ireland</option>
              </select>
              <p id="region-hint" className="mt-1 text-sm text-gray-500">
                Different loan plans apply to different regions
              </p>
            </div>

            {/* Salary */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Salary
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  id="salary-slider"
                  min={15000}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, Math.max(15000, salary))}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Graduation year */}
            <div>
              <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <select
                id="graduation-year"
                value={graduationYear}
                onChange={(e) => setGraduationYear(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Loan amount */}
            <div>
              <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                Total Loan Balance
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="loan-amount"
                  min={0}
                  max={150000}
                  step={1000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Compare toggle */}
            <div className="pt-4 border-t border-gray-200">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={compareMode}
                  onChange={(e) => setCompareMode(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Compare all UK regions
                </span>
              </label>
              <p className="mt-1 text-sm text-gray-500">
                See how repayments differ across all four UK nations
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2" role="region" aria-live="polite">
            {!compareMode ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {selectedRegion} Loan Plans
                </h2>
                <div className="space-y-6">
                  {regionalResults.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{result.plan}</h3>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
                          {(result.interestRate * 100).toFixed(1)}% interest
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Monthly Payment
                          </p>
                          <p className="text-2xl font-bold text-gray-800">
                            {fmtMoney(result.monthlyRequired, 0)}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {(result.repaymentRate * 100).toFixed(0)}% above {fmtMoney(result.threshold)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Annual Payment
                          </p>
                          <p className="text-2xl font-bold text-gray-800">
                            {fmtMoney(result.annualRequired, 0)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Total Repaid
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {fmtMoney(result.totalRepaid, 0)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Total Interest
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {fmtMoney(result.totalInterest, 0)}
                          </p>
                        </div>

                        <div className="col-span-2">
                          {result.paidOff ? (
                            <>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">
                                Paid Off
                              </p>
                              <p className="text-lg font-bold text-green-600">
                                {result.payoffDate}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                In {(result.monthsElapsed / 12).toFixed(1)} years
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">
                                Write-Off Date
                              </p>
                              <p className="text-lg font-bold text-gray-800">
                                {result.writeOffDate}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                After {result.writeOffYears} years
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Cross-Regional Comparison
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Region / Plan
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Threshold
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Monthly
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Annual
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Repaid
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Interest Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allRegionalResults.map((result, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {result.region}
                            </div>
                            <div className="text-xs text-gray-500">{result.plan}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                            {fmtMoney(result.threshold)}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {fmtMoney(result.monthlyRequired, 0)}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {fmtMoney(result.annualRequired, 0)}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                            {fmtMoney(result.totalRepaid, 0)}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                            {(result.interestRate * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Key Insights</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • <strong>Lowest monthly payment:</strong>{" "}
                      {allRegionalResults[0]?.region} - {allRegionalResults[0]?.plan} (
                      {fmtMoney(allRegionalResults[0]?.monthlyRequired || 0, 0)})
                    </li>
                    <li>
                      • <strong>Highest threshold:</strong> Scotland (Plan 4) at £32,745
                    </li>
                    <li>
                      • <strong>Lowest threshold:</strong> Postgraduate loans at £21,000
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Regional Loan Plan Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Plan
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Regions
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Threshold (2025/26)
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Rate
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Write-Off
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Interest
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Plan 1</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  England, Wales, Northern Ireland
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">£26,065</td>
                <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                <td className="px-4 py-3 text-sm text-gray-700">25 years</td>
                <td className="px-4 py-3 text-sm text-gray-700">3.2%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Plan 2</td>
                <td className="px-4 py-3 text-sm text-gray-700">England, Wales</td>
                <td className="px-4 py-3 text-sm text-gray-700">£28,470</td>
                <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                <td className="px-4 py-3 text-sm text-gray-700">30 years</td>
                <td className="px-4 py-3 text-sm text-gray-700">4.3%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Plan 4</td>
                <td className="px-4 py-3 text-sm text-gray-700">Scotland only</td>
                <td className="px-4 py-3 text-sm text-gray-700">£32,745</td>
                <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                <td className="px-4 py-3 text-sm text-gray-700">30 years</td>
                <td className="px-4 py-3 text-sm text-gray-700">4.3%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Plan 5</td>
                <td className="px-4 py-3 text-sm text-gray-700">England only (2023+)</td>
                <td className="px-4 py-3 text-sm text-gray-700">£25,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">9%</td>
                <td className="px-4 py-3 text-sm text-gray-700">40 years</td>
                <td className="px-4 py-3 text-sm text-gray-700">7.3%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Postgraduate</td>
                <td className="px-4 py-3 text-sm text-gray-700">All UK nations</td>
                <td className="px-4 py-3 text-sm text-gray-700">£21,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">6%</td>
                <td className="px-4 py-3 text-sm text-gray-700">30 years</td>
                <td className="px-4 py-3 text-sm text-gray-700">7.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/plan-1-student-loan-calculator/"
          >
            <div className="mr-3 text-indigo-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Plan 1 Calculator</h3>
              <p className="text-sm text-gray-600">Calculate Plan 1 loan repayments</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            <div className="mr-3 text-indigo-700">
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
              <p className="text-sm text-gray-600">Calculate Plan 2 loan repayments</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/student-loan-overpayment-calculator/"
          >
            <div className="mr-3 text-indigo-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate savings from overpayments</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-6xl mx-auto prose prose-indigo">
        <h2>Understanding Regional Differences in UK Student Loans</h2>
        <p>
          Student loan repayment terms vary significantly across the UK, depending on which nation
          you studied in and when you started your course. This calculator helps you understand
          these regional differences and compare how much you would pay under different systems.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="key-differences">
            <AccordionTrigger>Key Regional Differences</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">England</h4>
                  <p>
                    English students have the most complex system with multiple plans available depending on
                    when they started their course. Plan 1 applies to pre-2012 students, Plan 2 to those who
                    started between 2012-2023, and the new Plan 5 applies to students starting from August
                    2023. Plan 5 has a lower threshold (£25,000) but a longer write-off period (40 years)
                    and higher interest rate (7.3%).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Scotland</h4>
                  <p>
                    Scottish students benefit from Plan 4, which has the highest repayment threshold in the UK
                    at £32,745 for 2025/26. This means Scottish students start repaying later and pay less
                    each month compared to other regions. The write-off period is 30 years with a 4.3%
                    interest rate.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Wales</h4>
                  <p>
                    Welsh students follow similar plans to England (Plan 1 and Plan 2), with thresholds of
                    £26,065 and £28,470 respectively. Welsh students receive additional support through
                    maintenance grants, which can reduce overall borrowing.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Northern Ireland</h4>
                  <p>
                    Northern Irish students primarily use Plan 1, with a threshold of £26,065 and the
                    shortest write-off period of 25 years. Tuition fees are significantly lower in Northern
                    Ireland (£4,855) compared to other UK nations, resulting in smaller loan balances.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="thresholds">
            <AccordionTrigger>Repayment Thresholds Comparison</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  The repayment threshold is the annual income level at which you start making loan
                  repayments. Higher thresholds benefit borrowers by allowing them to earn more before
                  repayments begin. For 2025/26, the thresholds are:
                </p>
                <ul>
                  <li>Plan 4 (Scotland): £32,745 - highest threshold</li>
                  <li>Plan 2 (England/Wales): £28,470</li>
                  <li>Plan 1 (England/Wales/NI): £26,065</li>
                  <li>Plan 5 (England): £25,000</li>
                  <li>Postgraduate (All): £21,000 - lowest threshold</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interest-rates">
            <AccordionTrigger>Interest Rates</AccordionTrigger>
            <AccordionContent>
              <p>
                Interest rates also vary by plan and region. Plan 1 loans currently have the lowest rate
                at 3.2% (the lower of RPI or Bank Rate + 1%), while Plan 5 and Postgraduate loans have
                the highest at 7.3% (RPI + 3%). These rates affect how quickly your loan balance grows
                and total repayment amounts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="writeoff-periods">
            <AccordionTrigger>Write-Off Periods</AccordionTrigger>
            <AccordionContent>
              <p>
                The write-off period determines when any remaining loan balance is forgiven. Plan 1 has
                the shortest period at 25 years, while Plan 5 has the longest at 40 years. This
                significantly impacts whether you&apos;ll repay your full loan or have some amount written off.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Want to explore individual loan plans?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our dedicated calculators to get detailed repayment projections for specific loan
          plans including overpayment scenarios.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            Plan 2 Calculator
          </Link>
          <Link
            className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-indigo-600"
            href="/calculators/student-loan-overpayment-calculator/"
          >
            Overpayment Calculator
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="max-w-6xl mx-auto">
        <ol className="flex items-center space-x-1 text-sm text-gray-600">
          <li>
            <Link className="hover:text-indigo-700 hover:underline" href="/">
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
            <Link className="hover:text-indigo-700 hover:underline" href="/calculators/">
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
              Regional Comparison Calculator
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
