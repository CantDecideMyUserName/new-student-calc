"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlanDetails = {
  name: string;
  threshold: number;
  rate: number;
  description: string;
};

type StartDateResult = {
  graduationDate: Date;
  repaymentStartDate: Date;
  currentSalary: number;
  salaryAtStart: number;
  aboveThreshold: boolean;
  monthsUntilStart: number;
  yearsFromGraduation: number;
  planDetails: PlanDetails;
};

const LOAN_PLANS: Record<string, PlanDetails> = {
  plan1: {
    name: "Plan 1",
    threshold: 22015,
    rate: 0.09,
    description: "Pre-2012 England/Wales or Northern Ireland",
  },
  plan2: {
    name: "Plan 2",
    threshold: 27295,
    rate: 0.09,
    description: "2012-2023 England/Wales",
  },
  plan4: {
    name: "Plan 4",
    threshold: 31395,
    rate: 0.09,
    description: "Scotland",
  },
  plan5: {
    name: "Plan 5",
    threshold: 25000,
    rate: 0.09,
    description: "2023+ England/Wales",
  },
  postgrad: {
    name: "Postgraduate",
    threshold: 21000,
    rate: 0.06,
    description: "Masters/PhD loans",
  },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number) => `${(n * 100).toFixed(1)}%`;

function calculateRepaymentStart({
  graduationYear,
  graduationMonth,
  currentSalary,
  planType,
  salaryGrowthRate,
}: {
  graduationYear: number;
  graduationMonth: number;
  currentSalary: number;
  planType: string;
  salaryGrowthRate: number;
}): StartDateResult {
  const plan = LOAN_PLANS[planType];
  const graduationDate = new Date(graduationYear, graduationMonth, 1);

  // Repayments start in April (month 3) following graduation
  let repaymentStartDate = new Date(graduationYear + 1, 3, 1);

  // If graduated after April, repayments start next April
  if (graduationMonth >= 3) {
    repaymentStartDate = new Date(graduationYear + 1, 3, 1);
  } else {
    repaymentStartDate = new Date(graduationYear, 3, 1);
  }

  const today = new Date();

  // Calculate salary at repayment start
  let salaryAtStart = currentSalary;

  if (today < repaymentStartDate) {
    // Haven't reached start date yet
    const monthsOfGrowth =
      (repaymentStartDate.getFullYear() - today.getFullYear()) * 12 +
      (repaymentStartDate.getMonth() - today.getMonth());

    salaryAtStart = currentSalary * Math.pow(1 + salaryGrowthRate / 100, monthsOfGrowth / 12);
  } else {
    // Already past start date
    const monthsSinceStart =
      (today.getFullYear() - repaymentStartDate.getFullYear()) * 12 +
      (today.getMonth() - repaymentStartDate.getMonth());

    // Work backwards from current salary
    salaryAtStart = currentSalary / Math.pow(1 + salaryGrowthRate / 100, monthsSinceStart / 12);
  }

  // If salary below threshold at repayment start, find when it exceeds
  if (salaryAtStart < plan.threshold) {
    let monthsToThreshold = 0;
    let projectedSalary = salaryAtStart;

    while (projectedSalary < plan.threshold && monthsToThreshold < 480) {
      monthsToThreshold++;
      projectedSalary = salaryAtStart * Math.pow(1 + salaryGrowthRate / 100, monthsToThreshold / 12);
    }

    if (monthsToThreshold < 480) {
      repaymentStartDate = new Date(
        repaymentStartDate.getFullYear(),
        repaymentStartDate.getMonth() + monthsToThreshold,
        1
      );
      salaryAtStart = projectedSalary;
    }
  }

  const aboveThreshold = salaryAtStart >= plan.threshold;

  const monthsUntilStart = Math.max(
    0,
    (repaymentStartDate.getFullYear() - today.getFullYear()) * 12 +
    (repaymentStartDate.getMonth() - today.getMonth())
  );

  const yearsFromGraduation =
    (repaymentStartDate.getFullYear() - graduationDate.getFullYear()) +
    (repaymentStartDate.getMonth() - graduationDate.getMonth()) / 12;

  return {
    graduationDate,
    repaymentStartDate,
    currentSalary,
    salaryAtStart,
    aboveThreshold,
    monthsUntilStart,
    yearsFromGraduation,
    planDetails: plan,
  };
}

export default function RepaymentStartCalculator() {
  const currentYear = new Date().getFullYear();
  const [graduationYear, setGraduationYear] = useState(2024);
  const [graduationMonth, setGraduationMonth] = useState(5);
  const [currentSalary, setCurrentSalary] = useState(24000);
  const [planType, setPlanType] = useState("plan2");
  const [salaryGrowthRate, setSalaryGrowthRate] = useState(4);

  const selectedPlan = LOAN_PLANS[planType];

  const result = useMemo(
    () =>
      calculateRepaymentStart({
        graduationYear,
        graduationMonth,
        currentSalary,
        planType,
        salaryGrowthRate,
      }),
    [graduationYear, graduationMonth, currentSalary, planType, salaryGrowthRate]
  );

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const years = Array.from({ length: 15 }, (_, i) => currentYear - 5 + i);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Repayment Start Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Repayment Start Date Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Find out exactly when your student loan repayments will begin based on your graduation date and salary
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-teal-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">When Do Repayments Start?</h3>
                  <p className="text-sm text-gray-600">
                    Repayments typically begin in April following graduation, but only if your income exceeds the threshold.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Date
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="grad-month" className="block text-xs text-gray-600 mb-1">
                    Month
                  </label>
                  <select
                    id="grad-month"
                    value={graduationMonth}
                    onChange={(e) => setGraduationMonth(Number(e.target.value))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  >
                    {monthNames.map((name, idx) => (
                      <option key={idx} value={idx}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="grad-year" className="block text-xs text-gray-600 mb-1">
                    Year
                  </label>
                  <select
                    id="grad-year"
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(Number(e.target.value))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                Current/Expected Salary
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="salary"
                  min={0}
                  max={150000}
                  step={1000}
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={15000}
                  max={80000}
                  step={1000}
                  value={Math.min(80000, currentSalary)}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Your starting or current annual salary
              </p>
            </div>

            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Plan Type
              </label>
              <select
                id="plan"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
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
                  value={salaryGrowthRate}
                  onChange={(e) => setSalaryGrowthRate(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.5}
                  value={Math.min(10, salaryGrowthRate)}
                  onChange={(e) => setSalaryGrowthRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Typical UK growth: 3-5% per year
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Scenarios
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setCurrentSalary(20000);
                    setSalaryGrowthRate(5);
                  }}
                  className="w-full px-3 py-2 text-xs text-left bg-white border border-gray-300 rounded hover:bg-teal-50 hover:border-teal-500 transition-colors"
                >
                  Graduate Entry (£20k, 5% growth)
                </button>
                <button
                  onClick={() => {
                    setCurrentSalary(28000);
                    setSalaryGrowthRate(3);
                  }}
                  className="w-full px-3 py-2 text-xs text-left bg-white border border-gray-300 rounded hover:bg-teal-50 hover:border-teal-500 transition-colors"
                >
                  Average Graduate (£28k, 3% growth)
                </button>
                <button
                  onClick={() => {
                    setCurrentSalary(35000);
                    setSalaryGrowthRate(4);
                  }}
                  className="w-full px-3 py-2 text-xs text-left bg-white border border-gray-300 rounded hover:bg-teal-50 hover:border-teal-500 transition-colors"
                >
                  Above Average (£35k, 4% growth)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Repayment Timeline</h2>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm text-gray-500">Graduation Date</p>
                <p className="text-2xl font-bold text-gray-800">
                  {monthNames[graduationMonth]} {graduationYear}
                </p>
              </div>

              <div className={`border-l-4 p-4 rounded ${result.aboveThreshold ? "bg-orange-50 border-orange-500" : "bg-green-50 border-green-500"
                }`}>
                <div className="flex items-start">
                  <svg className={`w-5 h-5 mr-2 mt-0.5 ${result.aboveThreshold ? "text-orange-600" : "text-green-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                    {result.aboveThreshold ? (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    )}
                  </svg>
                  <div>
                    <p className={`text-sm font-semibold ${result.aboveThreshold ? "text-orange-800" : "text-green-800"
                      }`}>
                      {result.aboveThreshold ? "Repayments Will Start" : "Below Threshold"}
                    </p>
                    <p className={`text-sm mt-1 ${result.aboveThreshold ? "text-orange-700" : "text-green-700"
                      }`}>
                      {result.aboveThreshold
                        ? "Your salary exceeds the repayment threshold"
                        : "You will not make repayments initially"
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm text-gray-500">Repayment Start Date</p>
                <p className="text-3xl font-bold text-teal-600">
                  {monthNames[result.repaymentStartDate.getMonth()]} {result.repaymentStartDate.getFullYear()}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {result.yearsFromGraduation.toFixed(1)} years after graduation
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Time Until Repayments Start</p>
                <p className="text-2xl font-bold text-gray-800">
                  {result.monthsUntilStart > 0
                    ? `${result.monthsUntilStart} months`
                    : "Already started"
                  }
                </p>
                {result.monthsUntilStart > 0 && (
                  <p className="text-sm text-gray-500">
                    Approximately {(result.monthsUntilStart / 12).toFixed(1)} years from now
                  </p>
                )}
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Your Salary at Repayment Start</p>
                <p className="text-2xl font-bold text-gray-800">
                  {fmtMoney(result.salaryAtStart, 0)}
                </p>
                <p className="text-sm text-gray-500">
                  {result.salaryAtStart >= result.planDetails.threshold
                    ? `£${(result.salaryAtStart - result.planDetails.threshold).toLocaleString()} above threshold`
                    : "Below threshold - no repayments yet"
                  }
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Initial Monthly Repayment</p>
                {result.salaryAtStart >= result.planDetails.threshold ? (
                  <>
                    <p className="text-2xl font-bold text-gray-800">
                      {fmtMoney(
                        ((result.salaryAtStart - result.planDetails.threshold) * result.planDetails.rate) / 12,
                        0
                      )}
                    </p>
                    <p className="text-sm text-gray-500">
                      {fmtPercent(result.planDetails.rate)} of income above threshold
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-bold text-gray-800">£0</p>
                    <p className="text-sm text-gray-500">
                      Salary below {fmtMoney(result.planDetails.threshold)}
                    </p>
                  </>
                )}
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">Key Information</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Plan type:</span>
                    <span className="font-medium">{result.planDetails.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Threshold:</span>
                    <span className="font-medium">{fmtMoney(result.planDetails.threshold)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Repayment rate:</span>
                    <span className="font-medium">{fmtPercent(result.planDetails.rate)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Repayment Start Dates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-teal-500">
            <div className="text-teal-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">April Following Graduation</h3>
            <p className="text-sm text-gray-600">
              Repayments begin in the April after you finish your course, giving you time to find employment and start earning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-teal-500">
            <div className="text-teal-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Threshold Dependent</h3>
            <p className="text-sm text-gray-600">
              You only start repaying when your income exceeds the threshold for your plan. Below that, you pay nothing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-teal-500">
            <div className="text-teal-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Automatic Deductions</h3>
            <p className="text-sm text-gray-600">
              Repayments are automatically deducted through PAYE if employed, or paid through Self Assessment if self-employed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-teal-500">
            <div className="text-teal-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Income Changes</h3>
            <p className="text-sm text-gray-600">
              If your income drops below the threshold, repayments stop automatically. They resume when income rises again.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              What if I graduate mid-year?
            </h3>
            <p className="text-sm text-gray-600">
              Repayments still begin in the April following your graduation, regardless of which month you finish your course. This gives you time to find work.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Do I need to notify anyone when I start work?
            </h3>
            <p className="text-sm text-gray-600">
              Your employer will automatically set up repayments through PAYE once you start earning above the threshold. You do not need to take any action.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              What if my salary is just below the threshold?
            </h3>
            <p className="text-sm text-gray-600">
              You will not make any repayments until your income exceeds the threshold. Even £1 below means zero repayments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Can the repayment threshold change?
            </h3>
            <p className="text-sm text-gray-600">
              Yes, the government reviews thresholds periodically. Recent years have seen some thresholds frozen, but they may increase with inflation in future.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Plan Your Financial Future</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Explore our other calculators to understand your complete student loan picture
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Income Threshold Alert
          </button>
          <button className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Salary Growth Impact
          </button>
        </div>
      </section>

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
                <strong>Note:</strong> This calculator provides estimates based on typical repayment schedules and salary growth assumptions. Actual start dates depend on your specific circumstances and HMRC processing. Always verify with the Student Loans Company for official information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}