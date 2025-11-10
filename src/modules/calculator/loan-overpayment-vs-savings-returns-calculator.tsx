"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgraduate";

type ComparisonResult = {
  // Overpayment scenario
  yearsToPayoff: number;
  totalRepaid: number;
  totalInterestPaid: number;
  interestSaved: number;
  monthlyPayment: number;

  // Investment scenario
  investmentValue: number;
  investmentGain: number;
  totalInvested: number;

  // Comparison
  netBenefit: number;
  betterOption: "overpay" | "invest" | "neutral";
  recommendation: string;

  // Standard repayment (no overpay)
  standardTotalRepaid: number;
  standardYearsToPayoff: number;
  willPayOffNaturally: boolean;
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
    interestRate: 0.073,
  },
  Postgraduate: {
    threshold: 21000,
    repaymentRate: 0.06,
    writeOffYears: 30,
    interestRate: 0.073,
  },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number) => `${(n * 100).toFixed(1)}%`;

function simulateRepayment({
  balance,
  salary,
  salaryGrowth,
  plan,
  monthlyOverpay,
  yearsToSimulate,
}: {
  balance: number;
  salary: number;
  salaryGrowth: number;
  plan: LoanPlan;
  monthlyOverpay: number;
  yearsToSimulate: number;
}): {
  totalRepaid: number;
  totalInterest: number;
  yearsToPayoff: number;
  paidOff: boolean;
} {
  const config = LOAN_CONFIGS[plan];
  const monthlyRate = config.interestRate / 12;
  const maxMonths = Math.min(yearsToSimulate * 12, config.writeOffYears * 12);

  let currentBalance = balance;
  let totalRepaid = 0;
  let totalInterest = 0;
  let currentSalary = salary;
  let months = 0;

  while (months < maxMonths && currentBalance > 0) {
    // Apply salary growth annually
    if (months > 0 && months % 12 === 0) {
      currentSalary *= 1 + salaryGrowth;
    }

    // Calculate interest
    const interest = currentBalance * monthlyRate;
    totalInterest += interest;
    currentBalance += interest;

    // Calculate mandatory payment
    const annualAboveThreshold = Math.max(0, currentSalary - config.threshold);
    const monthlyMandatory = (annualAboveThreshold * config.repaymentRate) / 12;

    // Total payment (mandatory + overpayment)
    const totalPayment = Math.min(
      currentBalance,
      monthlyMandatory + monthlyOverpay
    );

    currentBalance -= totalPayment;
    totalRepaid += totalPayment;
    months++;

    if (currentBalance <= 0) break;
  }

  return {
    totalRepaid,
    totalInterest,
    yearsToPayoff: months / 12,
    paidOff: currentBalance <= 0,
  };
}

function simulateInvestment({
  monthlyAmount,
  annualReturn,
  years,
}: {
  monthlyAmount: number;
  annualReturn: number;
  years: number;
}): {
  finalValue: number;
  totalInvested: number;
  totalGain: number;
} {
  const monthlyRate = annualReturn / 12;
  const months = years * 12;
  let totalInvested = 0;
  let value = 0;

  for (let m = 0; m < months; m++) {
    value = value * (1 + monthlyRate) + monthlyAmount;
    totalInvested += monthlyAmount;
  }

  return {
    finalValue: value,
    totalInvested,
    totalGain: value - totalInvested,
  };
}

function compareOverpayVsInvest({
  balance,
  salary,
  salaryGrowth,
  plan,
  monthlyOverpay,
  investmentReturn,
  graduationYear,
}: {
  balance: number;
  salary: number;
  salaryGrowth: number;
  plan: LoanPlan;
  monthlyOverpay: number;
  investmentReturn: number;
  graduationYear: number;
}): ComparisonResult {
  const config = LOAN_CONFIGS[plan];
  const currentYear = new Date().getFullYear();
  const yearsInRepayment = Math.max(0, currentYear - graduationYear - 1);
  const yearsRemaining = config.writeOffYears - yearsInRepayment;

  // Scenario 1: Standard repayment (no overpayment)
  const standard = simulateRepayment({
    balance,
    salary,
    salaryGrowth,
    plan,
    monthlyOverpay: 0,
    yearsToSimulate: yearsRemaining,
  });

  // Scenario 2: With overpayment
  const withOverpay = simulateRepayment({
    balance,
    salary,
    salaryGrowth,
    plan,
    monthlyOverpay,
    yearsToSimulate: yearsRemaining,
  });

  // Scenario 3: Invest the overpayment amount instead
  const yearsToInvest = withOverpay.paidOff
    ? withOverpay.yearsToPayoff
    : yearsRemaining;

  const investment = simulateInvestment({
    monthlyAmount: monthlyOverpay,
    annualReturn: investmentReturn,
    years: yearsToInvest,
  });

  // Calculate interest saved
  const interestSaved = standard.totalInterest - withOverpay.totalInterest;

  // Calculate net benefit
  // If you overpay: you save interest
  // If you invest: you gain returns
  // Net benefit = investment gains - interest saved (positive = invest better)
  const netBenefit = investment.totalGain - interestSaved;

  // Determine better option
  let betterOption: "overpay" | "invest" | "neutral" = "neutral";
  let recommendation = "";

  // Key insight: If loan won&apos;t be paid off anyway, overpayment is almost always bad
  if (!standard.paidOff && !withOverpay.paidOff) {
    betterOption = "invest";
    recommendation = `Your loan is projected to be written off before full repayment. Overpaying means you'll pay more than necessary. Investing the £${fmtMoney(monthlyOverpay, 0)}/month would give you ${fmtMoney(investment.finalValue, 0)} by write-off, while overpaying saves no interest as the loan would be forgiven anyway.`;
  } else if (!standard.paidOff && withOverpay.paidOff) {
    // Overpaying pushes you over the line to full repayment
    const additionalPaidDueToOverpay = withOverpay.totalRepaid - standard.totalRepaid;
    if (investment.finalValue > additionalPaidDueToOverpay) {
      betterOption = "invest";
      recommendation = `While overpaying clears your loan, you'd pay ${fmtMoney(additionalPaidDueToOverpay, 0)} more than with standard repayments. Investing instead would give you ${fmtMoney(investment.finalValue, 0)}, making you ${fmtMoney(investment.finalValue - additionalPaidDueToOverpay, 0)} better off.`;
    } else {
      betterOption = "overpay";
      recommendation = `Overpaying clears your loan ${(standard.yearsToPayoff - withOverpay.yearsToPayoff).toFixed(1)} years earlier. Though you'll pay ${fmtMoney(additionalPaidDueToOverpay, 0)} more, being debt-free may have value beyond the financial calculation.`;
    }
  } else if (standard.paidOff && withOverpay.paidOff) {
    // Both scenarios pay off the loan
    if (netBenefit > 1000) {
      betterOption = "invest";
      recommendation = `Your ${fmtPercent(investmentReturn)} investment return exceeds your ${fmtPercent(config.interestRate)} loan interest rate. Investing would yield ${fmtMoney(netBenefit, 0)} more than overpaying over ${yearsToInvest.toFixed(1)} years. Consider maxing pension contributions first for tax relief.`;
    } else if (netBenefit < -1000) {
      betterOption = "overpay";
      recommendation = `Overpaying saves ${fmtMoney(interestSaved, 0)} in interest and clears your loan ${(standard.yearsToPayoff - withOverpay.yearsToPayoff).toFixed(1)} years earlier. This saves ${fmtMoney(-netBenefit, 0)} more than investing at ${fmtPercent(investmentReturn)} returns.`;
    } else {
      betterOption = "neutral";
      recommendation = `The financial difference is minimal (${fmtMoney(Math.abs(netBenefit), 0)}). Choose based on personal preference: overpay for guaranteed interest savings and debt freedom, or invest for growth potential and flexibility.`;
    }
  }

  const monthlyMandatory =
    Math.max(0, (salary - config.threshold) * config.repaymentRate) / 12;

  return {
    yearsToPayoff: withOverpay.yearsToPayoff,
    totalRepaid: withOverpay.totalRepaid,
    totalInterestPaid: withOverpay.totalInterest,
    interestSaved,
    monthlyPayment: monthlyMandatory + monthlyOverpay,
    investmentValue: investment.finalValue,
    investmentGain: investment.totalGain,
    totalInvested: investment.totalInvested,
    netBenefit,
    betterOption,
    recommendation,
    standardTotalRepaid: standard.totalRepaid,
    standardYearsToPayoff: standard.yearsToPayoff,
    willPayOffNaturally: standard.paidOff,
  };
}

export default function OverpaymentVsInvestmentCalculatorPage() {
  const [loanBalance, setLoanBalance] = useState(45000);
  const [salary, setSalary] = useState(35000);
  const [salaryGrowth, setSalaryGrowth] = useState(0.03);
  const [plan, setPlan] = useState<LoanPlan>("Plan 2");
  const [monthlyOverpay, setMonthlyOverpay] = useState(200);
  const [investmentReturn, setInvestmentReturn] = useState(0.07);
  const [graduationYear, setGraduationYear] = useState(2020);

  const years = Array.from({ length: 30 }, (_, i) => 1998 + i);

  const result = useMemo(
    () =>
      compareOverpayVsInvest({
        balance: loanBalance,
        salary,
        salaryGrowth,
        plan,
        monthlyOverpay,
        investmentReturn,
        graduationYear,
      }),
    [loanBalance, salary, salaryGrowth, plan, monthlyOverpay, investmentReturn, graduationYear]
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Overpayment vs Investment Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Loan Overpayment vs Investment Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Discover whether overpaying your student loan or investing that money will give you
            better financial outcomes based on your specific situation.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
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
                  <h3 className="text-sm font-semibold text-gray-800">Key Insight</h3>
                  <p className="text-sm text-gray-600">
                    For most Plan 2 and Plan 5 borrowers who won&apos;t fully repay their loan,
                    overpaying means paying more than necessary. Investing often yields better
                    returns.
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
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                <option value="Plan 1">Plan 1 (pre-2012)</option>
                <option value="Plan 2">Plan 2 (2012-2023)</option>
                <option value="Plan 4">Plan 4 (Scotland)</option>
                <option value="Plan 5">Plan 5 (2023+)</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Interest: {fmtPercent(LOAN_CONFIGS[plan].interestRate)} | Write-off:{" "}
                {LOAN_CONFIGS[plan].writeOffYears} years
              </p>
            </div>

            {/* Graduation Year */}
            <div>
              <label
                htmlFor="graduation-year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Graduation Year
              </label>
              <select
                id="graduation-year"
                value={graduationYear}
                onChange={(e) => setGraduationYear(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Loan Balance */}
            <div>
              <label
                htmlFor="loan-balance"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Current Loan Balance
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="loan-balance"
                  min={0}
                  max={200000}
                  step={1000}
                  value={loanBalance}
                  onChange={(e) => setLoanBalance(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Annual Salary */}
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
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
            </div>

            {/* Salary Growth */}
            <div>
              <label
                htmlFor="salary-growth"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expected Annual Salary Growth
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
                <span className="ml-2 text-sm text-gray-600">%</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">UK average is around 3-4% per year</p>
            </div>

            {/* Monthly Overpayment */}
            <div>
              <label
                htmlFor="monthly-overpay"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Potential Monthly Overpayment
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="monthly-overpay"
                  min={0}
                  max={2000}
                  step={10}
                  value={monthlyOverpay}
                  onChange={(e) => setMonthlyOverpay(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Amount you could pay extra each month (or invest instead)
              </p>
            </div>

            {/* Investment Return */}
            <div>
              <label
                htmlFor="investment-return"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expected Investment Return
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="investment-return"
                  min={0}
                  max={20}
                  step={0.5}
                  value={(investmentReturn * 100).toFixed(1)}
                  onChange={(e) => setInvestmentReturn(Number(e.target.value) / 100)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
                <span className="ml-2 text-sm text-gray-600">%</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Historical stock market average: 7-10% | S&S ISA: tax-free
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2" role="region" aria-live="polite">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Analysis</h2>

            {/* Recommendation */}
            <div
              className={`p-6 rounded-xl border-2 mb-6 ${result.betterOption === "invest"
                ? "bg-green-50 border-green-300"
                : result.betterOption === "overpay"
                  ? "bg-blue-50 border-blue-300"
                  : "bg-yellow-50 border-yellow-300"
                }`}
            >
              <div className="flex items-start">
                <div
                  className={`mr-3 mt-1 ${result.betterOption === "invest"
                    ? "text-green-600"
                    : result.betterOption === "overpay"
                      ? "text-blue-600"
                      : "text-yellow-600"
                    }`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {result.betterOption === "invest"
                      ? "Investing is Better"
                      : result.betterOption === "overpay"
                        ? "Overpaying is Better"
                        : "Similar Outcomes"}
                  </h3>
                  <p className="text-sm text-gray-700">{result.recommendation}</p>
                </div>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Overpayment Scenario */}
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Overpayment Scenario
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Monthly Payment</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {fmtMoney(result.monthlyPayment, 0)}
                    </p>
                    <p className="text-xs text-gray-500">
                      (includes £{monthlyOverpay} overpayment)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Years to Payoff</p>
                    <p className="text-xl font-bold text-gray-800">
                      {result.yearsToPayoff.toFixed(1)} years
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Total Repaid</p>
                    <p className="text-xl font-bold text-gray-800">
                      {fmtMoney(result.totalRepaid, 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Interest Saved</p>
                    <p className="text-xl font-bold text-green-600">
                      {fmtMoney(result.interestSaved, 0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Investment Scenario */}
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Investment Scenario
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Monthly Investment</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {fmtMoney(monthlyOverpay, 0)}
                    </p>
                    <p className="text-xs text-gray-500">at {fmtPercent(investmentReturn)} returns</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Investment Period</p>
                    <p className="text-xl font-bold text-gray-800">
                      {result.yearsToPayoff.toFixed(1)} years
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Total Invested</p>
                    <p className="text-xl font-bold text-gray-800">
                      {fmtMoney(result.totalInvested, 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase">Final Value</p>
                    <p className="text-xl font-bold text-green-600">
                      {fmtMoney(result.investmentValue, 0)}
                    </p>
                    <p className="text-xs text-gray-500">
                      Gain: {fmtMoney(result.investmentGain, 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Net Benefit */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Standard Repayment (no overpay)</span>
                  <span className="text-sm font-medium text-gray-800">
                    {fmtMoney(result.standardTotalRepaid, 0)} over{" "}
                    {result.standardYearsToPayoff.toFixed(1)} years
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">With Overpayment</span>
                  <span className="text-sm font-medium text-gray-800">
                    {fmtMoney(result.totalRepaid, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Investment Returns (after same period)</span>
                  <span className="text-sm font-medium text-gray-800">
                    {fmtMoney(result.investmentGain, 0)} profit
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-semibold text-gray-700">Net Benefit</span>
                  <span
                    className={`text-lg font-bold ${result.netBenefit > 0 ? "text-green-600" : "text-blue-600"
                      }`}
                  >
                    {result.netBenefit > 0 ? "+" : ""}
                    {fmtMoney(Math.abs(result.netBenefit), 0)}{" "}
                    {result.netBenefit > 0 ? "to invest" : "to overpay"}
                  </span>
                </div>
              </div>
            </div>

            {/* Important Factors */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Considerations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Pension contributions:</strong> Consider maxing employer match first
                    (20-45% instant &quot;return&quot; via tax relief)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Emergency fund:</strong> Build 3-6 months expenses before overpaying or
                    investing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>High-interest debt:</strong> Pay off credit cards and personal loans
                    before student loans
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Investment risk:</strong> Returns aren&apos;t guaranteed; market can go down
                    as well as up
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <strong>Tax efficiency:</strong> Use ISAs for tax-free investment growth (£20k/year allowance)
                  </span>
                </li>
                {!result.willPayOffNaturally && (
                  <li className="flex items-start">
                    <span className="mr-2">⚠️</span>
                    <span className="font-medium text-amber-800">
                      Your loan won&apos;t be fully repaid before write-off. Overpaying likely means
                      paying more than necessary.
                    </span>
                  </li>
                )}
              </ul>
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
            href="/calculators/regional-student-loan-calculator/"
          >
            <div className="mr-3 text-green-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Regional Comparison</h3>
              <p className="text-sm text-gray-600">Compare repayments across UK regions</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            <div className="mr-3 text-green-700">
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
              <p className="text-sm text-gray-600">Calculate standard loan repayments</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/parental-income-calculator/"
          >
            <div className="mr-3 text-green-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Income Impact Calculator</h3>
              <p className="text-sm text-gray-600">See how parental income affects loans</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto prose prose-green">
        <h2>Should You Overpay Your Student Loan or Invest?</h2>
        <p>
          The decision to overpay your student loan versus investing that money is one of the most
          important financial choices for UK graduates. Unlike conventional debt, student loans work
          more like a graduate tax, which fundamentally changes the calculation.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="why-not-overpay">
            <AccordionTrigger>Why Most People Shouldn&apos;t Overpay</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Research shows that approximately 80% of Plan 2 borrowers and 48% of Plan 5 borrowers will
                  never fully repay their loans before write-off. For these graduates, making voluntary
                  overpayments means paying money they would never have owed otherwise. The loan would have
                  been forgiven, making every overpayment pound a complete loss.
                </p>

                <h4 className="font-semibold text-gray-800">The Write-Off Reality</h4>
                <p>
                  Student loans are written off after a set period regardless of the remaining balance. Plan
                  1 loans write off after 25 years, Plan 2 and Plan 4 after 30 years, Plan 5 after 40
                  years, and Postgraduate loans after 30 years. If income trajectory suggests the loan
                  won&apos;t be fully repaid, overpaying increases lifetime payments without any benefit.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="when-overpaying-makes-sense">
            <AccordionTrigger>When Overpaying Makes Sense</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Overpaying can be financially beneficial in specific circumstances. High earners (top
                  20-30% of graduates) who will definitely clear their loans before write-off can save
                  thousands in interest by overpaying. Similarly, those with Plan 1 loans, which typically
                  have smaller balances and lower interest rates, are more likely to benefit from
                  overpayments.
                </p>

                <h4 className="font-semibold text-gray-800">Near the Tipping Point</h4>
                <p>
                  Graduates projected to repay 90-110% of their loan balance may benefit from strategic
                  overpayments that push them over the line to full repayment, potentially saving on
                  interest that would otherwise accrue over many years. However, this requires careful
                  calculation of the exact break-even point.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="investment-alternatives">
            <AccordionTrigger>Investment Alternatives</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Historical stock market returns average 7-10% annually, significantly higher than most
                  student loan interest rates. A balanced portfolio (60% stocks, 40% bonds) has delivered
                  returns of approximately 7% over the long term, making investing often more financially
                  attractive than overpaying.
                </p>

                <h4 className="font-semibold text-gray-800">Tax-Advantaged Investing</h4>
                <p>
                  Pension contributions offer immediate tax relief of 20-45%, effectively providing an
                  instant return on investment. For a higher-rate taxpayer, a £100 pension contribution only
                  costs £60 from take-home pay due to tax relief. This makes pensions an especially
                  attractive alternative to overpaying student loans.
                </p>

                <h4 className="font-semibold text-gray-800 mt-4">ISAs for Flexibility</h4>
                <p>
                  Stocks and Shares ISAs allow tax-free investment growth with the flexibility to access
                  funds if needed. The annual ISA allowance is £20,000, providing substantial room for
                  tax-efficient investing. Unlike overpayments, which cannot be refunded, ISA investments
                  remain accessible for emergencies or opportunities.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interest-rate-comparison">
            <AccordionTrigger>The Interest Rate Comparison</AccordionTrigger>
            <AccordionContent>
              <p>
                As a general rule, if expected investment returns exceed the student loan interest rate,
                investing is mathematically superior. Plan 1 loans currently charge 3.2%, Plan 2 and Plan
                4 charge around 4.3%, while Plan 5 and Postgraduate loans charge 7.3%. With historical
                stock market returns of 7-10%, most loan plans have interest rates below expected
                investment returns.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="risk-considerations">
            <AccordionTrigger>Risk Considerations</AccordionTrigger>
            <AccordionContent>
              <p>
                Investment returns are not guaranteed and markets can decline in the short term. Student
                loan interest savings are guaranteed. Risk-averse individuals or those near retirement may
                prefer the certainty of overpaying, while younger graduates with longer time horizons can
                typically weather market volatility.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="opportunity-cost">
            <AccordionTrigger>The Opportunity Cost</AccordionTrigger>
            <AccordionContent>
              <p>
                Money used to overpay student loans cannot be used for other purposes. Consider whether
                these alternatives offer better value: building an emergency fund (essential before
                overpaying), paying off high-interest consumer debt (almost always a priority), saving for
                a house deposit (helps get on the property ladder), or investing in career development
                (potentially the highest return of all).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="psychological-factors">
            <AccordionTrigger>Psychological Factors</AccordionTrigger>
            <AccordionContent>
              <p>
                Being debt-free has psychological value beyond pure mathematics. Some graduates strongly
                prefer eliminating debt regardless of financial calculations. While this is a valid
                personal choice, it should be made with full awareness of the financial trade-offs and
                only after addressing emergency funds and high-interest debts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="changing-circumstances">
            <AccordionTrigger>Changing Circumstances</AccordionTrigger>
            <AccordionContent>
              <p>
                Career trajectories are unpredictable. Graduates who expect high earnings may experience
                career changes, health issues, or family circumstances that reduce income. Overpayments
                cannot be refunded if circumstances change, while investments remain accessible. This
                flexibility favors investing for most people.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to optimize your finances?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore our other calculators to understand your complete student loan situation and make
          informed decisions about repayment, investing, and financial planning.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/regional-student-loan-calculator/"
          >
            Compare Regional Plans
          </Link>
          <Link
            className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-green-600"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            Calculate Repayments
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="max-w-6xl mx-auto">
        <ol className="flex items-center space-x-1 text-sm text-gray-600">
          <li>
            <Link className="hover:text-green-700 hover:underline" href="/">
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
            <Link className="hover:text-green-700 hover:underline" href="/calculators/">
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
              Overpayment vs Investment Calculator
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
