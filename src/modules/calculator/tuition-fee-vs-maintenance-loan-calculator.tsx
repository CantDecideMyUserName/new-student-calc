"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgraduate";

type LoanBreakdown = {
  tuitionAmount: number;
  maintenanceAmount: number;
  totalBorrowed: number;

  tuitionWithInterest: number;
  maintenanceWithInterest: number;
  totalWithInterest: number;

  totalInterestOnTuition: number;
  totalInterestOnMaintenance: number;
  totalInterestCombined: number;

  monthlyRepayment: number;
  annualRepayment: number;

  proportionTuition: number;
  proportionMaintenance: number;

  yearsToPayoff: number;
  willPayOff: boolean;
  writeOffDate: string;
};

const LOAN_CONFIGS = {
  "Plan 1": {
    threshold: 26065,
    repaymentRate: 0.09,
    writeOffYears: 25,
    interestRate: 0.032,
  },
  "Plan 2": {
    threshold: 28470,
    repaymentRate: 0.09,
    writeOffYears: 30,
    interestRate: 0.043,
  },
  "Plan 4": {
    threshold: 32745,
    repaymentRate: 0.09,
    writeOffYears: 30,
    interestRate: 0.043,
  },
  "Plan 5": {
    threshold: 25000,
    repaymentRate: 0.09,
    writeOffYears: 40,
    interestRate: 0.032,
  },
  Postgraduate: {
    threshold: 21000,
    repaymentRate: 0.06,
    writeOffYears: 30,
    interestRate: 0.073,
  },
};

// Current 2025/26 rates
const TUITION_FEES = {
  England: 9535,
  Scotland: 1820, // Free for Scottish students at Scottish unis
  Wales: 9000,
  NorthernIreland: 4855,
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number) => `${(n * 100).toFixed(1)}%`;

function calculateLoanBreakdown({
  tuitionPerYear,
  maintenancePerYear,
  courseYears,
  salary,
  salaryGrowth,
  plan,
  graduationYear,
}: {
  tuitionPerYear: number;
  maintenancePerYear: number;
  courseYears: number;
  salary: number;
  salaryGrowth: number;
  plan: LoanPlan;
  graduationYear: number;
}): LoanBreakdown {
  const config = LOAN_CONFIGS[plan];

  // Total amounts borrowed
  const tuitionAmount = tuitionPerYear * courseYears;
  const maintenanceAmount = maintenancePerYear * courseYears;
  const totalBorrowed = tuitionAmount + maintenanceAmount;

  // Calculate interest during study (typically 3 years)
  // Assume interest accrues from start of each year
  let tuitionWithInterestDuringStudy = 0;
  let maintenanceWithInterestDuringStudy = 0;

  for (let year = 0; year < courseYears; year++) {
    const yearsOfInterest = courseYears - year;
    tuitionWithInterestDuringStudy += tuitionPerYear * Math.pow(1 + config.interestRate, yearsOfInterest);
    maintenanceWithInterestDuringStudy += maintenancePerYear * Math.pow(1 + config.interestRate, yearsOfInterest);
  }

  let balance = tuitionWithInterestDuringStudy + maintenanceWithInterestDuringStudy;

  // Simulate repayment
  let currentSalary = salary;
  let totalRepaid = 0;
  let months = 0;
  const maxMonths = config.writeOffYears * 12;
  const monthlyRate = config.interestRate / 12;

  while (months < maxMonths && balance > 0) {
    // Apply salary growth annually
    if (months > 0 && months % 12 === 0) {
      currentSalary *= 1 + salaryGrowth;
    }

    // Calculate repayment
    const monthlyRepayment = Math.max(0, (currentSalary - config.threshold) * config.repaymentRate / 12);

    // Apply interest
    balance *= (1 + monthlyRate);

    // Make payment
    const payment = Math.min(balance, monthlyRepayment);
    balance -= payment;
    totalRepaid += payment;

    months++;
  }

  const willPayOff = balance <= 0.01;
  const yearsToPayoff = months / 12;

  // Calculate proportions
  const proportionTuition = tuitionAmount / totalBorrowed;
  const proportionMaintenance = maintenanceAmount / totalBorrowed;

  // Estimate interest breakdown
  const totalInterestCombined = Math.max(0, totalRepaid - totalBorrowed);
  const totalInterestOnTuition = totalInterestCombined * proportionTuition;
  const totalInterestOnMaintenance = totalInterestCombined * proportionMaintenance;

  const tuitionWithInterest = tuitionAmount + totalInterestOnTuition;
  const maintenanceWithInterest = maintenanceAmount + totalInterestOnMaintenance;
  const totalWithInterest = totalRepaid;

  // Monthly/annual repayments
  const monthlyRepayment = Math.max(0, (salary - config.threshold) * config.repaymentRate / 12);
  const annualRepayment = monthlyRepayment * 12;

  // Write-off date
  const writeOffYear = graduationYear + 1 + config.writeOffYears;
  const writeOffDate = `April ${writeOffYear}`;

  return {
    tuitionAmount,
    maintenanceAmount,
    totalBorrowed,
    tuitionWithInterest,
    maintenanceWithInterest,
    totalWithInterest,
    totalInterestOnTuition,
    totalInterestOnMaintenance,
    totalInterestCombined,
    monthlyRepayment,
    annualRepayment,
    proportionTuition,
    proportionMaintenance,
    yearsToPayoff,
    willPayOff,
    writeOffDate,
  };
}

export default function TuitionVsMaintenanceCalculatorPage() {
  const [tuitionPerYear, setTuitionPerYear] = useState(9535);
  const [maintenancePerYear, setMaintenancePerYear] = useState(10544);
  const [courseYears, setCourseYears] = useState(3);
  const [salary, setSalary] = useState(30000);
  const [salaryGrowth, setSalaryGrowth] = useState(0.03);
  const [plan, setPlan] = useState<LoanPlan>("Plan 5");
  const [graduationYear, setGraduationYear] = useState(2028);

  const result = useMemo(
    () =>
      calculateLoanBreakdown({
        tuitionPerYear,
        maintenancePerYear,
        courseYears,
        salary,
        salaryGrowth,
        plan,
        graduationYear,
      }),
    [tuitionPerYear, maintenancePerYear, courseYears, salary, salaryGrowth, plan, graduationYear]
  );

  const config = LOAN_CONFIGS[plan];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Tuition vs Maintenance Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tuition Fee vs Maintenance Loan Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Understand how tuition fee loans and maintenance loans combine to form your total
            student debt, and see the breakdown of what each component costs over time.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
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
                  <h3 className="text-sm font-semibold text-gray-800">Combined Repayment</h3>
                  <p className="text-sm text-gray-600">
                    Tuition and maintenance loans are combined into one balance. You make a single
                    repayment based on your income, not the amount owed.
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
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Plan 1">Plan 1 (pre-2012)</option>
                <option value="Plan 2">Plan 2 (2012-2023)</option>
                <option value="Plan 4">Plan 4 (Scotland)</option>
                <option value="Plan 5">Plan 5 (2023+)</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Threshold: {fmtMoney(config.threshold)} | Interest: {fmtPercent(config.interestRate)}
              </p>
            </div>

            {/* Graduation Year */}
            <div>
              <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Graduation Year
              </label>
              <input
                type="number"
                id="graduation-year"
                min={2020}
                max={2035}
                value={graduationYear}
                onChange={(e) => setGraduationYear(Number(e.target.value || 2028))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Course Length */}
            <div>
              <label htmlFor="course-years" className="block text-sm font-medium text-gray-700 mb-1">
                Course Length (Years)
              </label>
              <select
                id="course-years"
                value={courseYears}
                onChange={(e) => setCourseYears(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value={1}>1 year</option>
                <option value={2}>2 years</option>
                <option value={3}>3 years</option>
                <option value={4}>4 years (e.g., Scotland, sandwich)</option>
                <option value={5}>5 years (e.g., medicine)</option>
                <option value={6}>6 years (e.g., medicine with foundation)</option>
              </select>
            </div>

            {/* Annual Tuition Fee */}
            <div>
              <label htmlFor="tuition" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Tuition Fee
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="tuition"
                  min={0}
                  max={20000}
                  step={100}
                  value={tuitionPerYear}
                  onChange={(e) => setTuitionPerYear(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setTuitionPerYear(TUITION_FEES.England)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  England: £{TUITION_FEES.England.toLocaleString()}
                </button>
                <button
                  onClick={() => setTuitionPerYear(TUITION_FEES.Wales)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  Wales: £{TUITION_FEES.Wales.toLocaleString()}
                </button>
                <button
                  onClick={() => setTuitionPerYear(TUITION_FEES.NorthernIreland)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  NI: £{TUITION_FEES.NorthernIreland.toLocaleString()}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Paid directly to your university by SLC
              </p>
            </div>

            {/* Annual Maintenance Loan */}
            <div>
              <label htmlFor="maintenance" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Maintenance Loan
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="maintenance"
                  min={0}
                  max={15000}
                  step={100}
                  value={maintenancePerYear}
                  onChange={(e) => setMaintenancePerYear(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setMaintenancePerYear(8877)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  At home: £8,877
                </button>
                <button
                  onClick={() => setMaintenancePerYear(10544)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  Away: £10,544
                </button>
                <button
                  onClick={() => setMaintenancePerYear(13762)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  London: £13,762
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Paid directly to you in 3 instalments per year
              </p>
            </div>

            {/* Expected Salary */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Salary After Graduation
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="salary"
                  min={0}
                  max={100000}
                  step={1000}
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={20000}
                  max={60000}
                  step={1000}
                  value={Math.min(60000, Math.max(20000, salary))}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                UK median graduate starting salary: ~£25,000-£30,000
              </p>
            </div>

            {/* Salary Growth */}
            <div>
              <label htmlFor="salary-growth" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Annual Salary Growth
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="salary-growth"
                  min={0}
                  max={15}
                  step={0.5}
                  value={(salaryGrowth * 100).toFixed(1)}
                  onChange={(e) => setSalaryGrowth(Number(e.target.value) / 100)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="ml-2 text-sm text-gray-600">%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2" role="region" aria-live="polite">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Loan Breakdown Analysis</h2>

            {/* Total Borrowed */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  Tuition Fee Loan
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {fmtMoney(result.tuitionAmount, 0)}
                </p>
                <p className="text-sm text-gray-600">
                  {fmtPercent(result.proportionTuition)} of total
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  Maintenance Loan
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {fmtMoney(result.maintenanceAmount, 0)}
                </p>
                <p className="text-sm text-gray-600">
                  {fmtPercent(result.proportionMaintenance)} of total
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                  Total Borrowed
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-1">
                  {fmtMoney(result.totalBorrowed, 0)}
                </p>
                <p className="text-sm text-gray-600">
                  Over {courseYears} years
                </p>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                One Combined Loan
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Although tuition fee loans and maintenance loans serve different purposes, they&apos;re
                combined into a single student loan balance. You make <strong>one repayment</strong>{" "}
                of <strong>{fmtMoney(result.monthlyRepayment, 0)}/month</strong> (9% of income above{" "}
                {fmtMoney(config.threshold)}) regardless of the split between tuition and
                maintenance.
              </p>
              <p className="text-sm text-gray-700">
                {result.willPayOff ? (
                  <>
                    Based on your salary projections, you&apos;re expected to{" "}
                    <strong>fully repay your loan in {result.yearsToPayoff.toFixed(1)} years</strong>,
                    paying a total of {fmtMoney(result.totalWithInterest, 0)} including interest.
                  </>
                ) : (
                  <>
                    Based on your salary projections, you <strong>won&apos;t fully repay</strong> before
                    write-off in {result.writeOffDate}. You&apos;ll pay approximately{" "}
                    {fmtMoney(result.totalWithInterest, 0)} over {config.writeOffYears} years, leaving{" "}
                    {fmtMoney(result.totalBorrowed + result.totalInterestCombined - result.totalWithInterest, 0)}{" "}
                    to be written off.
                  </>
                )}
              </p>
            </div>

            {/* Repayment Breakdown */}
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Total Cost Breakdown (Including Interest)
              </h3>

              <div className="space-y-4">
                {/* Visual Bar */}
                <div className="h-12 bg-gray-200 rounded-lg overflow-hidden flex">
                  <div
                    className="bg-purple-500 flex items-center justify-center text-white text-sm font-medium"
                    style={{ width: `${result.proportionTuition * 100}%` }}
                  >
                    {result.proportionTuition >= 0.15 && `Tuition ${fmtPercent(result.proportionTuition)}`}
                  </div>
                  <div
                    className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                    style={{ width: `${result.proportionMaintenance * 100}%` }}
                  >
                    {result.proportionMaintenance >= 0.15 && `Maintenance ${fmtPercent(result.proportionMaintenance)}`}
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Component
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Borrowed
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Interest Paid
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Total Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-purple-700">
                          Tuition Fee
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {fmtMoney(result.tuitionAmount, 0)}
                        </td>
                        <td className="px-4 py-3 text-sm text-orange-600">
                          {fmtMoney(result.totalInterestOnTuition, 0)}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {fmtMoney(result.tuitionWithInterest, 0)}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-blue-700">
                          Maintenance
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {fmtMoney(result.maintenanceAmount, 0)}
                        </td>
                        <td className="px-4 py-3 text-sm text-orange-600">
                          {fmtMoney(result.totalInterestOnMaintenance, 0)}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {fmtMoney(result.maintenanceWithInterest, 0)}
                        </td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">Total</td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">
                          {fmtMoney(result.totalBorrowed, 0)}
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-orange-600">
                          {fmtMoney(result.totalInterestCombined, 0)}
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">
                          {fmtMoney(result.totalWithInterest, 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Comparison Summary */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Tuition Fee Loan</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Purpose:</strong> Covers course fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Payment:</strong> Paid directly to university
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Amount:</strong> Up to £9,535/year (England 2025/26)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Total:</strong> {fmtMoney(result.tuitionAmount, 0)} over {courseYears}{" "}
                      years
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>% of loan:</strong> {fmtPercent(result.proportionTuition)}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Maintenance Loan</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Purpose:</strong> Covers living costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Payment:</strong> Paid directly to you
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Amount:</strong> £8,877-£13,762 (means-tested)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Total:</strong> {fmtMoney(result.maintenanceAmount, 0)} over{" "}
                      {courseYears} years
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>% of loan:</strong> {fmtPercent(result.proportionMaintenance)}
                    </span>
                  </li>
                </ul>
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
            href="/calculators/parental-income-calculator/"
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
              <h3 className="font-medium text-gray-800 mb-1">Parental Income Impact</h3>
              <p className="text-sm text-gray-600">See how family income affects loans</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/overpayment-vs-investment-calculator/"
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
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Analysis</h3>
              <p className="text-sm text-gray-600">Should you pay off early?</p>
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
              <h3 className="font-medium text-gray-800 mb-1">Repayment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate monthly payments</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-6xl mx-auto prose prose-indigo">
        <h2>Understanding Tuition Fee vs Maintenance Loans</h2>
        <p>
          UK students can access two types of student loans: tuition fee loans to cover course costs
          and maintenance loans for living expenses. While these loans serve different purposes and
          are paid to different recipients, they&apos;re combined into a single debt with one monthly
          repayment.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="tuition-fee-loans">
            <AccordionTrigger>Tuition Fee Loans</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Tuition fee loans cover the cost of your university tuition, up to £9,535 per year in
                  England for 2025/26 (varying by region). This money is paid directly by the Student Loans
                  Company to your university, so students never see these funds in their bank accounts. The
                  loan is automatically available to all eligible students regardless of household income.
                </p>

                <h4 className="font-semibold text-gray-800">Regional Variations</h4>
                <p>
                  Tuition fees vary significantly across the UK. England charges up to £9,535, Wales up to
                  £9,000, Northern Ireland £4,855, and Scotland just £1,820 (though Scottish students at
                  Scottish universities pay nothing through SAAS). These differences dramatically affect total
                  borrowing and lifetime repayments.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="maintenance-loans">
            <AccordionTrigger>Maintenance Loans</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Maintenance loans help cover living costs including accommodation, food, transport, and
                  course materials. Unlike tuition fee loans, maintenance loans are means-tested based on
                  household income, with amounts ranging from £3,907 to £13,762 depending on living situation
                  and family finances. The loan is paid directly to students in three instalments per academic
                  year.
                </p>

                <h4 className="font-semibold text-gray-800">Living Situation Impact</h4>
                <p>
                  Maximum maintenance loans vary by living arrangement: £8,877 for students living at home,
                  £10,544 for those living away from home outside London, and £13,762 for students in London.
                  These amounts are further reduced for students from higher-income families, potentially
                  leaving substantial funding gaps that parents are expected to fill.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="combined-repayment">
            <AccordionTrigger>Combined Repayment</AccordionTrigger>
            <AccordionContent>
              <p>
                Although tuition and maintenance loans serve different purposes and are disbursed
                differently, they&apos;re merged into a single student loan balance for repayment purposes. You
                make one monthly payment based on your income (9% of earnings above the threshold), not
                separate payments for each loan type. The Student Loans Company doesn&apos;t track which portion
                represents tuition versus maintenance.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interest-accrual">
            <AccordionTrigger>Interest Accrual</AccordionTrigger>
            <AccordionContent>
              <p>
                Both loan types accrue interest from the day funds are released, at the same rate. During
                study, Plan 2 and Postgraduate loans charge RPI+3% on both tuition and maintenance portions.
                Plan 5 charges only RPI. After graduation, rates may vary by income for Plan 2 borrowers,
                but the unified balance means interest applies equally to both components.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="typical-composition">
            <AccordionTrigger>Typical Loan Composition</AccordionTrigger>
            <AccordionContent>
              <p>
                For a 3-year English undergraduate living away from home, typical total borrowing is around
                £60,000: £28,605 in tuition fees (3 × £9,535) and £31,632 in maintenance (3 × £10,544). This
                means maintenance loans constitute roughly 52% of total borrowing, challenging the common
                misconception that tuition fees dominate student debt.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="maximizing-minimizing">
            <AccordionTrigger>Maximizing vs Minimizing Borrowing</AccordionTrigger>
            <AccordionContent>
              <p>
                Students face a strategic choice about maintenance loans. Some minimize borrowing to reduce
                debt, relying on parental support or part-time work. Others maximize borrowing to invest the
                difference or maintain financial independence. Given that 80% of Plan 2 borrowers won&apos;t fully
                repay, borrowing more often costs nothing extra in practice.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment-scheduling">
            <AccordionTrigger>Payment Scheduling Differences</AccordionTrigger>
            <AccordionContent>
              <p>
                Tuition fee loans are paid in instalments: 25% at course start, 25% in January, and 50% in
                April. Maintenance loans are split more evenly across three terms. These timing differences
                affect cash flow during university but are irrelevant to repayment, as all borrowing is
                combined into one balance after graduation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="postgraduate-loans">
            <AccordionTrigger>Postgraduate Loans</AccordionTrigger>
            <AccordionContent>
              <p>
                Postgraduate loans work differently—they&apos;re not split into tuition and maintenance
                components. Masters students can borrow up to £12,167 in England as a single lump sum,
                which they allocate between fees and living costs themselves. Doctoral loans provide up to
                £28,673 over 4 years. These loans have separate repayment thresholds (£21,000) and can be
                repaid alongside undergraduate loans.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="50k-threshold">
            <AccordionTrigger>The £50,000 Threshold</AccordionTrigger>
            <AccordionContent>
              <p>
                Nearly 1.8 million UK students owe more than £50,000 in student loans, a figure that
                includes both tuition and maintenance borrowing plus accrued interest. The combined nature of
                UK student loans means this figure doesn&apos;t distinguish between course costs and living
                expenses—it&apos;s all one debt from a repayment perspective.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="career-impact">
            <AccordionTrigger>Impact on Career Decisions</AccordionTrigger>
            <AccordionContent>
              <p>
                The size of combined tuition and maintenance debt can psychologically affect career choices,
                even though repayments are income-based. Students with £60,000 total debt may avoid
                lower-paying public sector jobs, despite the fact that their monthly payments would be
                identical to someone with £30,000 debt at the same salary. Understanding the income-based
                system helps make career decisions based on passion rather than debt anxiety.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scotland-position">
            <AccordionTrigger>Scotland&apos;s Unique Position</AccordionTrigger>
            <AccordionContent>
              <p>
                Scottish students at Scottish universities receive free tuition (through SAAS), meaning
                their student loans consist entirely of maintenance loans. A typical Scottish student might
                borrow £24,000 over 4 years compared to an English equivalent borrowing £60,000+. This
                dramatically affects lifetime repayments, particularly for high earners who will fully repay.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to explore your complete student loan picture?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our comprehensive calculators to understand repayment scenarios, compare regional
          options, and make informed decisions about your student finance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/overpayment-vs-investment-calculator/"
          >
            Overpayment Analysis
          </Link>
          <Link
            className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-indigo-600"
            href="/calculators/regional-student-loan-calculator/"
          >
            Regional Comparison
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
              Tuition vs Maintenance Loan Calculator
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
