"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type YearlyBreakdown = {
  year: number;
  salary: number;
  monthlyPayment: number;
  annualPayment: number;
  balance: number;
  interestAccrued: number;
};

type SimResult = {
  yearlyBreakdown: YearlyBreakdown[];
  totalRepaid: number;
  totalInterest: number;
  finalBalance: number;
  paidOff: boolean;
  payoffYear?: number;
};

const LOAN_PLANS = {
  plan1: {
    name: "Plan 1",
    threshold: 22_015,
    rate: 0.09,
    interest: 0.046,
    writeOffYears: 25,
  },
  plan2: {
    name: "Plan 2",
    threshold: 27_295,
    rate: 0.09,
    interest: 0.071,
    writeOffYears: 30,
  },
  plan4: {
    name: "Plan 4",
    threshold: 31_395,
    rate: 0.09,
    interest: 0.071,
    writeOffYears: 30,
  },
  plan5: {
    name: "Plan 5",
    threshold: 25_000,
    rate: 0.09,
    interest: 0.071,
    writeOffYears: 40,
  },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

function simulateSalaryGrowth({
  startingSalary,
  annualGrowthRate,
  loanBalance,
  planType,
  projectionYears,
}: {
  startingSalary: number;
  annualGrowthRate: number;
  loanBalance: number;
  planType: keyof typeof LOAN_PLANS;
  projectionYears: number;
}): SimResult {
  const plan = LOAN_PLANS[planType];
  const monthlyInterestRate = plan.interest / 12;

  let balance = loanBalance;
  let totalRepaid = 0;
  let totalInterest = 0;
  const yearlyBreakdown: YearlyBreakdown[] = [];
  let paidOff = false;
  let payoffYear: number | undefined;

  const maxYears = Math.min(projectionYears, plan.writeOffYears);

  for (let year = 1; year <= maxYears; year++) {
    const salary = startingSalary * Math.pow(1 + annualGrowthRate / 100, year - 1);
    const annualPayment = Math.max(0, (salary - plan.threshold) * plan.rate);
    const monthlyPayment = annualPayment / 12;

    let yearInterest = 0;
    let yearPayment = 0;

    // Simulate each month
    for (let month = 0; month < 12; month++) {
      if (balance <= 0) break;

      // Accrue interest
      const monthInterest = balance * monthlyInterestRate;
      balance += monthInterest;
      yearInterest += monthInterest;
      totalInterest += monthInterest;

      // Make payment
      const payment = Math.min(balance, monthlyPayment);
      balance -= payment;
      yearPayment += payment;
      totalRepaid += payment;

      if (balance <= 0.01) {
        balance = 0;
        paidOff = true;
        if (!payoffYear) payoffYear = year;
        break;
      }
    }

    yearlyBreakdown.push({
      year,
      salary: Math.round(salary),
      monthlyPayment,
      annualPayment: yearPayment,
      balance,
      interestAccrued: yearInterest,
    });

    if (paidOff) break;
  }

  return {
    yearlyBreakdown,
    totalRepaid,
    totalInterest,
    finalBalance: balance,
    paidOff,
    payoffYear,
  };
}

export default function SalaryGrowthCalculator() {
  const [startingSalary, setStartingSalary] = useState(30_000);
  const [annualGrowth, setAnnualGrowth] = useState(3);
  const [loanBalance, setLoanBalance] = useState(45_000);
  const [planType, setPlanType] = useState<keyof typeof LOAN_PLANS>("plan2");
  const [projectionYears, setProjectionYears] = useState(10);
  const [showTable, setShowTable] = useState(false);

  const sim = useMemo(
    () =>
      simulateSalaryGrowth({
        startingSalary,
        annualGrowthRate: annualGrowth,
        loanBalance,
        planType,
        projectionYears,
      }),
    [startingSalary, annualGrowth, loanBalance, planType, projectionYears]
  );

  const selectedPlan = LOAN_PLANS[planType];

  // Calculate comparison scenario (no growth)
  const noGrowthSim = useMemo(
    () =>
      simulateSalaryGrowth({
        startingSalary,
        annualGrowthRate: 0,
        loanBalance,
        planType,
        projectionYears,
      }),
    [startingSalary, loanBalance, planType, projectionYears]
  );

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
              <li><span className="font-medium text-gray-800" aria-current="page">Salary Growth Impact Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Salary Growth Impact Calculator
          </h1>
          <p className="text-xl text-gray-600">
            See how future salary increases affect your student loan repayments over time
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
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
                  <h3 className="text-sm font-semibold text-gray-800">How It Works</h3>
                  <p className="text-sm text-gray-600">
                    This calculator projects how salary increases impact your loan repayments. Even small raises can significantly increase your monthly payments and total amount repaid.
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
                  max={250000}
                  step={1000}
                  value={startingSalary}
                  onChange={(e) => setStartingSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={15000}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, startingSalary)}
                  onChange={(e) => setStartingSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.5}
                  value={Math.min(10, annualGrowth)}
                  onChange={(e) => setAnnualGrowth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                UK average is typically 2-4% per year
              </p>
            </div>

            {/* Loan Balance */}
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
                  value={loanBalance}
                  onChange={(e) => setLoanBalance(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Your outstanding student loan amount
              </p>
            </div>

            {/* Plan Type */}
            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Plan Type
              </label>
              <select
                id="plan"
                value={planType}
                onChange={(e) => setPlanType(e.target.value as keyof typeof LOAN_PLANS)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                  <option key={key} value={key}>
                    {plan.name} (Threshold: {fmtMoney(plan.threshold)})
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Your repayment threshold: {fmtMoney(selectedPlan.threshold)}
              </p>
            </div>

            {/* Projection Years */}
            <div>
              <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">
                Projection Period
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="years"
                  min={1}
                  max={40}
                  step={1}
                  value={projectionYears}
                  onChange={(e) => setProjectionYears(Number(e.target.value || 1))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">years</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Max write-off period: {selectedPlan.writeOffYears} years
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Impact Summary</h2>

            <div className="space-y-4">
              {/* Starting vs Ending Salary */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-sm text-gray-500">Salary Growth</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-gray-800">
                    {fmtMoney(startingSalary, 0)}
                  </p>
                  <span className="text-gray-400">→</span>
                  <p className="text-2xl font-bold text-indigo-600">
                    {fmtMoney(sim.yearlyBreakdown[sim.yearlyBreakdown.length - 1]?.salary || startingSalary, 0)}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Over {projectionYears} years at {annualGrowth}% growth
                </p>
              </div>

              {/* Monthly Payment Growth */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Monthly Payment Growth</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-bold text-gray-800">
                    {fmtMoney(sim.yearlyBreakdown[0]?.monthlyPayment || 0, 0)}
                  </p>
                  <span className="text-gray-400">→</span>
                  <p className="text-xl font-bold text-indigo-600">
                    {fmtMoney(sim.yearlyBreakdown[sim.yearlyBreakdown.length - 1]?.monthlyPayment || 0, 0)}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {sim.yearlyBreakdown[0]?.monthlyPayment > 0
                    ? `Increase of ${fmtMoney(
                      (sim.yearlyBreakdown[sim.yearlyBreakdown.length - 1]?.monthlyPayment || 0) -
                      (sim.yearlyBreakdown[0]?.monthlyPayment || 0),
                      0
                    )}/month`
                    : "Starting below threshold"}
                </p>
              </div>

              {/* Total Repaid */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total to be Repaid</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.totalRepaid, 0)}</p>
                <p className="text-sm text-gray-500">Over {projectionYears} years</p>
              </div>

              {/* Total Interest */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Interest Accrued</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.totalInterest, 0)}</p>
              </div>

              {/* Final Balance or Payoff */}
              <div>
                {sim.paidOff ? (
                  <>
                    <p className="text-sm text-gray-500">Loan Status</p>
                    <p className="text-2xl font-bold text-green-600">Paid Off!</p>
                    <p className="text-sm text-gray-500">In year {sim.payoffYear}</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-500">Remaining Balance</p>
                    <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.finalBalance, 0)}</p>
                    <p className="text-sm text-gray-500">
                      After {projectionYears} years (written off in {selectedPlan.writeOffYears} years)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Comparison */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-2">Comparison: No Salary Growth</p>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Total repaid:</span>
                  <span className="font-medium">{fmtMoney(noGrowthSim.totalRepaid, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Difference:</span>
                  <span className="font-medium text-indigo-600">
                    {fmtMoney(sim.totalRepaid - noGrowthSim.totalRepaid, 0)} more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Year-by-Year Breakdown Toggle */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowTable(!showTable)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
          >
            {showTable ? "Hide" : "Show"} Year-by-Year Breakdown
          </button>
        </div>

        {/* Table */}
        {showTable && (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Salary</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Monthly Payment</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Annual Payment</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Interest</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Balance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sim.yearlyBreakdown.map((year) => (
                  <tr key={year.year} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{year.year}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">{fmtMoney(year.salary, 0)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">{fmtMoney(year.monthlyPayment, 0)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">{fmtMoney(year.annualPayment, 0)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-600">{fmtMoney(year.interestAccrued, 0)}</td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">{fmtMoney(year.balance, 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Key Insights */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Progressive Repayment</h3>
            <p className="text-sm text-gray-600">
              As your salary grows, your monthly repayments increase proportionally. This means career progression directly impacts how much you repay.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Time Matters</h3>
            <p className="text-sm text-gray-600">
              Interest accrues daily on your balance. Higher earnings lead to larger payments, potentially saving thousands in interest over the loan term.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Threshold Matters</h3>
            <p className="text-sm text-gray-600">
              You only pay 9% on income above the threshold ({fmtMoney(selectedPlan.threshold)}). Early career increases below this won&apos;t affect payments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-indigo-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Write-Off Protection</h3>
            <p className="text-sm text-gray-600">
              Loans are written off after {selectedPlan.writeOffYears} years regardless of balance. This caps your total repayment, especially for lower earners.
            </p>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-4xl mx-auto prose prose-indigo">
        <h2>Understanding Salary Growth Impact on Student Loans</h2>
        <p>
          Your student loan repayments are calculated as a percentage of your income above a threshold. This means as your salary increases throughout your career, your monthly repayments will grow accordingly.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="how-it-affects">
            <AccordionTrigger>How Salary Growth Affects Repayments</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>For example, if you&apos;re on Plan 2 with a starting salary of £30,000:</p>
                <ul>
                  <li>Income above threshold: £30,000 - £27,295 = £2,705</li>
                  <li>Monthly repayment: (£2,705 × 9%) ÷ 12 = £20.29</li>
                </ul>

                <p>After a 3% raise to £30,900:</p>
                <ul>
                  <li>Income above threshold: £30,900 - £27,295 = £3,605</li>
                  <li>Monthly repayment: (£3,605 × 9%) ÷ 12 = £27.04</li>
                  <li>Increase: £6.75 more per month</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-it-matters">
            <AccordionTrigger>Why This Matters</AccordionTrigger>
            <AccordionContent>
              <p>
                Understanding how salary growth impacts your repayments helps you plan for the future. While higher repayments mean paying off your loan faster and potentially saving on interest, it&apos;s important to budget for increasing monthly deductions as your career progresses.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="planning-considerations">
            <AccordionTrigger>Planning Considerations</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Promotions and raises directly increase your monthly student loan payments</li>
                <li>Career changes to higher-paying roles will significantly impact repayments</li>
                <li>Geographic moves that increase salary will also increase payments</li>
                <li>Interest continues to accrue on your balance, so faster repayment can save money</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}