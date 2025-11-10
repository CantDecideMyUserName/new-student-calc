"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlanDetails = {
  name: string;
  threshold: number;
  rate: number;
  interest: number;
};

type MonthlyProjection = {
  month: number;
  year: number;
  balance: number;
  mandatoryPayment: number;
  extraPayment: number;
  totalPayment: number;
  interestAccrued: number;
};

type PayoffResult = {
  currentBalance: number;
  targetPayoffDate: Date;
  monthsToPayoff: number;
  mandatoryMonthlyPayment: number;
  requiredExtraMonthly: number;
  totalExtraNeeded: number;
  totalInterestWithExtra: number;
  totalInterestWithoutExtra: number;
  interestSaved: number;
  projections: MonthlyProjection[];
  standardPayoffYears: number;
  canPayoffByTarget: boolean;
};

const LOAN_PLANS: Record<string, PlanDetails> = {
  plan1: { name: "Plan 1", threshold: 22015, rate: 0.09, interest: 0.046 },
  plan2: { name: "Plan 2", threshold: 27295, rate: 0.09, interest: 0.071 },
  plan4: { name: "Plan 4", threshold: 31395, rate: 0.09, interest: 0.071 },
  plan5: { name: "Plan 5", threshold: 25000, rate: 0.09, interest: 0.071 },
  postgrad: { name: "Postgraduate", threshold: 21000, rate: 0.06, interest: 0.071 },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp = 1) => `${(n * 100).toFixed(dp)}%`;

function calculateEarlyPayoff({
  currentBalance,
  annualSalary,
  planType,
  targetPayoffDate,
  currentDate,
}: {
  currentBalance: number;
  annualSalary: number;
  planType: string;
  targetPayoffDate: Date;
  currentDate: Date;
}): PayoffResult {
  const plan = LOAN_PLANS[planType];
  const monthlyInterestRate = plan.interest / 12;

  const incomeAboveThreshold = Math.max(0, annualSalary - plan.threshold);
  const mandatoryMonthlyPayment = (incomeAboveThreshold * plan.rate) / 12;

  const monthsToPayoff = Math.max(
    1,
    (targetPayoffDate.getFullYear() - currentDate.getFullYear()) * 12 +
    (targetPayoffDate.getMonth() - currentDate.getMonth())
  );

  let standardBalance = currentBalance;
  let standardMonths = 0;
  let totalInterestWithoutExtra = 0;
  const maxMonths = 40 * 12;

  while (standardBalance > 0 && standardMonths < maxMonths) {
    const interest = standardBalance * monthlyInterestRate;
    totalInterestWithoutExtra += interest;
    standardBalance += interest;
    const payment = Math.min(standardBalance, mandatoryMonthlyPayment);
    standardBalance -= payment;
    standardMonths++;
    if (standardBalance < 0.01) standardBalance = 0;
  }

  const standardPayoffYears = standardMonths / 12;

  let requiredExtraMonthly = 0;
  let canPayoffByTarget = false;

  let low = 0;
  let high = 10000;
  let iterations = 0;

  while (iterations < 50 && high - low > 1) {
    const mid = (low + high) / 2;
    let testBalance = currentBalance;

    for (let m = 0; m < monthsToPayoff; m++) {
      const interest = testBalance * monthlyInterestRate;
      testBalance += interest;
      const payment = Math.min(testBalance, mandatoryMonthlyPayment + mid);
      testBalance -= payment;
      if (testBalance <= 0) {
        testBalance = 0;
        break;
      }
    }

    if (testBalance <= 0.01) {
      high = mid;
      canPayoffByTarget = true;
    } else {
      low = mid;
    }
    iterations++;
  }

  requiredExtraMonthly = canPayoffByTarget ? high : 0;

  const projections: MonthlyProjection[] = [];
  let balance = currentBalance;
  let totalInterestWithExtra = 0;

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  for (let m = 0; m < Math.min(monthsToPayoff, 120); m++) {
    const year = currentYear + Math.floor((currentMonth + m) / 12);
    const month = (currentMonth + m) % 12;

    const interest = balance * monthlyInterestRate;
    totalInterestWithExtra += interest;
    balance += interest;

    const extraPayment = canPayoffByTarget ? requiredExtraMonthly : 0;
    const totalPayment = Math.min(balance, mandatoryMonthlyPayment + extraPayment);
    balance -= totalPayment;
    if (balance < 0.01) balance = 0;

    projections.push({
      month,
      year,
      balance,
      mandatoryPayment: mandatoryMonthlyPayment,
      extraPayment,
      totalPayment,
      interestAccrued: interest,
    });

    if (balance === 0) break;
  }

  const totalExtraNeeded = requiredExtraMonthly * monthsToPayoff;
  const interestSaved = totalInterestWithoutExtra - totalInterestWithExtra;

  return {
    currentBalance,
    targetPayoffDate,
    monthsToPayoff,
    mandatoryMonthlyPayment,
    requiredExtraMonthly,
    totalExtraNeeded,
    totalInterestWithExtra,
    totalInterestWithoutExtra,
    interestSaved,
    projections,
    standardPayoffYears,
    canPayoffByTarget,
  };
}

export default function EarlyPayoffCalculator() {
  const currentDate = useMemo(() => new Date(2025, 9, 1), []);
  const [currentBalance, setCurrentBalance] = useState(45000);
  const [annualSalary, setAnnualSalary] = useState(35000);
  const [planType, setPlanType] = useState("plan2");
  const [targetYear, setTargetYear] = useState(2035);
  const [targetMonth, setTargetMonth] = useState(9);
  const [showProjections, setShowProjections] = useState(false);

  const selectedPlan = LOAN_PLANS[planType];

  const result = useMemo(
    () => {
      const targetPayoffDate = new Date(targetYear, targetMonth, 1);
      return calculateEarlyPayoff({
        currentBalance,
        annualSalary,
        planType,
        targetPayoffDate,
        currentDate,
      });
    },
    [currentBalance, annualSalary, planType, targetYear, targetMonth, currentDate]
  );

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const minYears = Math.ceil(result.standardPayoffYears);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Early Payoff Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Early Payoff Date Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate how much extra you need to pay monthly to clear your student loan by your target date
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-purple-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Pay Off Early?</h3>
                  <p className="text-sm text-gray-600">
                    Discover how much extra you need to pay each month to become debt-free by your chosen date.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="balance" className="block text-sm font-medium text-gray-700 mb-1">
                Current Loan Balance
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="balance"
                  min={0}
                  max={200000}
                  step={1000}
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, currentBalance)}
                  onChange={(e) => setCurrentBalance(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

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
                  max={200000}
                  step={1000}
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={15000}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, annualSalary)}
                  onChange={(e) => setAnnualSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Mandatory payment: {fmtMoney(result.mandatoryMonthlyPayment, 0)}/month
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
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                  <option key={key} value={key}>
                    {plan.name} ({fmtPercent(plan.interest)} interest)
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Threshold: {fmtMoney(selectedPlan.threshold)} | Rate: {fmtPercent(selectedPlan.rate)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Target Payoff Date
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="month" className="block text-xs text-gray-600 mb-1">
                    Month
                  </label>
                  <select
                    id="month"
                    value={targetMonth}
                    onChange={(e) => setTargetMonth(Number(e.target.value))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  >
                    {monthNames.map((name, idx) => (
                      <option key={idx} value={idx}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="year" className="block text-xs text-gray-600 mb-1">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    min={2025}
                    max={2065}
                    value={targetYear}
                    onChange={(e) => setTargetYear(Number(e.target.value || 2025))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  />
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {result.monthsToPayoff} months from now
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Targets
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[5, 10, 15, 20].map((years) => (
                  <button
                    key={years}
                    onClick={() => {
                      const newDate = new Date(currentDate);
                      newDate.setFullYear(currentDate.getFullYear() + years);
                      setTargetYear(newDate.getFullYear());
                      setTargetMonth(newDate.getMonth());
                    }}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded hover:bg-purple-50 hover:border-purple-500 transition-colors"
                  >
                    {years} years
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Early Payoff Plan</h2>

            {result.canPayoffByTarget ? (
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-green-800">Achievable Goal</p>
                      <p className="text-sm text-green-700 mt-1">
                        You can pay off your loan by {monthNames[targetMonth]} {targetYear}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm text-gray-500">Required Extra Monthly Payment</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {fmtMoney(result.requiredExtraMonthly, 0)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    On top of mandatory {fmtMoney(result.mandatoryMonthlyPayment, 0)}
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Total Monthly Payment</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {fmtMoney(result.mandatoryMonthlyPayment + result.requiredExtraMonthly, 0)}
                  </p>
                  <p className="text-sm text-gray-500">For {result.monthsToPayoff} months</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Total Extra Over Period</p>
                  <p className="text-xl font-bold text-gray-800">{fmtMoney(result.totalExtraNeeded, 0)}</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Interest Saved</p>
                  <p className="text-2xl font-bold text-green-600">{fmtMoney(result.interestSaved, 0)}</p>
                  <p className="text-sm text-gray-500">vs standard repayment</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Timeline Comparison</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Standard payoff:</span>
                      <span className="font-medium">{result.standardPayoffYears.toFixed(1)} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">With extra payments:</span>
                      <span className="font-medium text-purple-600">{(result.monthsToPayoff / 12).toFixed(1)} years</span>
                    </div>
                    <div className="flex justify-between border-t border-purple-200 pt-2">
                      <span className="text-gray-600">Time saved:</span>
                      <span className="font-medium text-green-600">
                        {(result.standardPayoffYears - result.monthsToPayoff / 12).toFixed(1)} years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">Target Too Ambitious</p>
                      <p className="text-sm text-amber-700 mt-1">
                        The target date is too soon. Try a later date or increase your income.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
                  <p className="text-sm text-gray-500">Standard Payoff Time</p>
                  <p className="text-2xl font-bold text-gray-800">{result.standardPayoffYears.toFixed(1)} years</p>
                  <p className="text-sm text-gray-500 mt-1">With mandatory payments only</p>
                </div>

                <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Suggestions:</p>
                  <p className="mb-1">• Choose a target at least {minYears} years away</p>
                  <p className="mb-1">• Increase income through career growth</p>
                  <p>• Consider if early payoff is best use of funds</p>
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={() => setShowProjections(!showProjections)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-400"
                disabled={!result.canPayoffByTarget}
              >
                {showProjections ? "Hide" : "Show"} Breakdown
              </button>
            </div>
          </div>
        </div>
      </section>

      {showProjections && result.canPayoffByTarget && result.projections.length > 0 && (
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Month-by-Month Projections</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Balance</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Extra</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Payment</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {result.projections.filter((p, idx) => idx % 6 === 0 || p.balance === 0).map((projection, index) => (
                  <tr key={index} className={projection.balance === 0 ? "bg-green-50" : "hover:bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {monthNames[projection.month]} {projection.year}
                      {projection.balance === 0 && <span className="ml-2 text-xs text-green-600">✓</span>}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">{fmtMoney(projection.balance, 0)}</td>
                    <td className="px-4 py-3 text-sm text-right text-purple-600">{fmtMoney(projection.extraPayment, 0)}</td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">{fmtMoney(projection.totalPayment, 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Explore More Calculators</h2>
        <p className="mb-6 opacity-90">Make informed decisions about your student loan</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            Overpayment Calculator
          </button>
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            Mortgage Eligibility
          </button>
        </div>
      </section>
    </div>
  );
}