"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "Plan 1" | "Plan 2" | "Plan 4" | "Plan 5" | "Postgraduate";
type LeaveType = "maternity" | "shared-parental" | "adoption";

type MonthlyBreakdown = {
  month: number;
  monthName: string;
  salary: number;
  repayment: number;
  interestAccrued: number;
  balanceEnd: number;
};

type LeaveImpact = {
  preLeaveMonthly: MonthlyBreakdown[];
  duringLeaveMonthly: MonthlyBreakdown[];
  postLeaveMonthly: MonthlyBreakdown[];

  totalRepaymentsWithoutLeave: number;
  totalRepaymentsDuringLeave: number;
  repaymentReduction: number;

  interestDuringLeave: number;
  balanceIncreaseFromLeave: number;

  monthsOfReducedPayments: number;
  refundPotential: number;

  writeOffDate: string;
  extendedPaymentMonths: number;
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

// 2025/26 Statutory pay rates
const STATUTORY_MATERNITY_PAY = {
  weeksAt90Percent: 6,
  weeklyRate: 184.03, // £184.03 per week or 90% of average weekly earnings, whichever is lower
  totalWeeks: 39,
};

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

function calculateLeaveImpact({
  salary,
  loanBalance,
  plan,
  leaveMonths,
  enhancedPayMonths,
  enhancedPayPercentage,
  graduationYear,
}: {
  salary: number;
  loanBalance: number;
  plan: LoanPlan;
  leaveMonths: number;
  enhancedPayMonths: number;
  enhancedPayPercentage: number;
  graduationYear: number;
}): LeaveImpact {
  const config = LOAN_CONFIGS[plan];
  const monthlyRate = config.interestRate / 12;

  // Calculate statutory weekly pay
  const avgWeeklyEarnings = salary / 52;
  const weeklyStatutoryPay = Math.min(avgWeeklyEarnings * 0.9, STATUTORY_MATERNITY_PAY.weeklyRate);
  const monthlyStatutoryPay = (weeklyStatutoryPay * 52) / 12;

  // Maximum statutory period is 39 weeks (about 9 months)
  const statutoryMonths = Math.min(9, leaveMonths);

  const preLeaveMonthly: MonthlyBreakdown[] = [];
  const duringLeaveMonthly: MonthlyBreakdown[] = [];
  const postLeaveMonthly: MonthlyBreakdown[] = [];

  let balance = loanBalance;
  let totalRepaymentsWithoutLeave = 0;
  let totalRepaymentsDuringLeave = 0;
  let interestDuringLeave = 0;
  let monthsOfReducedPayments = 0;

  // Pre-leave period (3 months)
  for (let m = 0; m < 3; m++) {
    const repayment = Math.max(0, (salary - config.threshold) * config.repaymentRate / 12);
    const interest = balance * monthlyRate;

    balance += interest - repayment;
    totalRepaymentsWithoutLeave += repayment;

    preLeaveMonthly.push({
      month: m + 1,
      monthName: MONTH_NAMES[m % 12],
      salary,
      repayment,
      interestAccrued: interest,
      balanceEnd: balance,
    });
  }

  // During leave period
  for (let m = 0; m < leaveMonths; m++) {
    let monthSalary = 0;

    if (m < enhancedPayMonths) {
      // Enhanced pay period
      monthSalary = salary * (enhancedPayPercentage / 100);
    } else if (m < statutoryMonths) {
      // Statutory pay period
      monthSalary = monthlyStatutoryPay;
    }
    // else unpaid

    const repayment = Math.max(0, (monthSalary - config.threshold / 12) * config.repaymentRate);
    const interest = balance * monthlyRate;

    balance += interest - repayment;
    totalRepaymentsDuringLeave += repayment;
    interestDuringLeave += interest;

    if (repayment === 0) {
      monthsOfReducedPayments++;
    }

    duringLeaveMonthly.push({
      month: m + 1,
      monthName: MONTH_NAMES[(3 + m) % 12],
      salary: monthSalary,
      repayment,
      interestAccrued: interest,
      balanceEnd: balance,
    });
  }

  // Post-leave period (6 months)
  for (let m = 0; m < 6; m++) {
    const repayment = Math.max(0, (salary - config.threshold) * config.repaymentRate / 12);
    const interest = balance * monthlyRate;

    balance += interest - repayment;
    totalRepaymentsWithoutLeave += repayment;

    postLeaveMonthly.push({
      month: m + 1,
      monthName: MONTH_NAMES[(3 + leaveMonths + m) % 12],
      salary,
      repayment,
      interestAccrued: interest,
      balanceEnd: balance,
    });
  }

  // Calculate what would have been paid without leave
  const normalMonthlyRepayment = Math.max(0, (salary - config.threshold) * config.repaymentRate / 12);
  const wouldHavePaid = normalMonthlyRepayment * leaveMonths;
  const repaymentReduction = wouldHavePaid - totalRepaymentsDuringLeave;

  // Calculate balance increase due to leave
  const balanceWithoutLeave = loanBalance + (monthlyRate * loanBalance * (leaveMonths + 9)) - totalRepaymentsWithoutLeave - wouldHavePaid;
  const balanceIncreaseFromLeave = balance - balanceWithoutLeave;

  // Refund potential (if annual income falls below threshold)
  const annualIncomeWithLeave = salary * (12 - leaveMonths) +
    (enhancedPayMonths * salary * enhancedPayPercentage / 100) +
    (Math.max(0, Math.min(statutoryMonths - enhancedPayMonths, 9)) * monthlyStatutoryPay);

  const refundPotential = annualIncomeWithLeave < config.threshold ?
    totalRepaymentsDuringLeave : 0;

  // Write-off calculation
  const writeOffYear = graduationYear + 1 + config.writeOffYears;
  const writeOffDate = `April ${writeOffYear}`;

  // Extended payment estimate (very rough)
  const extendedPaymentMonths = Math.round((balanceIncreaseFromLeave / normalMonthlyRepayment));

  return {
    preLeaveMonthly,
    duringLeaveMonthly,
    postLeaveMonthly,
    totalRepaymentsWithoutLeave,
    totalRepaymentsDuringLeave,
    repaymentReduction,
    interestDuringLeave,
    balanceIncreaseFromLeave,
    monthsOfReducedPayments,
    refundPotential,
    writeOffDate,
    extendedPaymentMonths,
  };
}

export default function MaternityLeaveCalculatorPage() {
  const [salary, setSalary] = useState(35000);
  const [loanBalance, setLoanBalance] = useState(45000);
  const [plan, setPlan] = useState<LoanPlan>("Plan 2");
  const [leaveMonths, setLeaveMonths] = useState(12);
  const [enhancedPayMonths, setEnhancedPayMonths] = useState(6);
  const [enhancedPayPercentage, setEnhancedPayPercentage] = useState(100);
  const [leaveType, setLeaveType] = useState<LeaveType>("maternity");
  const [graduationYear, setGraduationYear] = useState(2020);

  const result = useMemo(
    () =>
      calculateLeaveImpact({
        salary,
        loanBalance,
        plan,
        leaveMonths,
        enhancedPayMonths,
        enhancedPayPercentage,
        graduationYear,
      }),
    [salary, loanBalance, plan, leaveMonths, enhancedPayMonths, enhancedPayPercentage, graduationYear]
  );

  const config = LOAN_CONFIGS[plan];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero */}
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Parental Leave Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Parental Leave Student Loan Impact Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how maternity, paternity, or shared parental leave affects your student loan
              repayments, balance growth, and potential refunds.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Inputs */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-pink-50 p-3 sm:p-4 rounded-lg border border-pink-200">
                <div className="flex items-start">
                  <div className="text-pink-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">The Motherhood Penalty</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      During parental leave, repayments stop or reduce, but interest continues to
                      accrue. You may be entitled to a refund if your annual income falls below the
                      threshold.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leave Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="leave-type"
                      value="maternity"
                      checked={leaveType === "maternity"}
                      onChange={(e) => setLeaveType(e.target.value as LeaveType)}
                      className="text-pink-600 focus:ring-pink-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Maternity Leave (up to 52 weeks)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="leave-type"
                      value="shared-parental"
                      checked={leaveType === "shared-parental"}
                      onChange={(e) => setLeaveType(e.target.value as LeaveType)}
                      className="text-pink-600 focus:ring-pink-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Shared Parental Leave</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="leave-type"
                      value="adoption"
                      checked={leaveType === "adoption"}
                      onChange={(e) => setLeaveType(e.target.value as LeaveType)}
                      className="text-pink-600 focus:ring-pink-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Adoption Leave</span>
                  </label>
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                >
                  <option value="Plan 1">Plan 1 (pre-2012)</option>
                  <option value="Plan 2">Plan 2 (2012-2023)</option>
                  <option value="Plan 4">Plan 4 (Scotland)</option>
                  <option value="Plan 5">Plan 5 (2023+)</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Threshold: {fmtMoney(config.threshold)} | Interest: {(config.interestRate * 100).toFixed(1)}%
                </p>
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                />
              </div>

              {/* Current Salary */}
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Salary Before Leave
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="salary"
                    min={0}
                    max={250000}
                    step={1000}
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={20000}
                    max={80000}
                    step={1000}
                    value={Math.min(80000, Math.max(20000, salary))}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                  />
                </div>
              </div>

              {/* Leave Duration */}
              <div>
                <label htmlFor="leave-months" className="block text-sm font-medium text-gray-700 mb-1">
                  Total Leave Duration (Months)
                </label>
                <input
                  type="number"
                  id="leave-months"
                  min={1}
                  max={12}
                  value={leaveMonths}
                  onChange={(e) => setLeaveMonths(Number(e.target.value || 1))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Statutory pay available for up to 39 weeks (9 months)
                </p>
              </div>

              {/* Enhanced Pay Period */}
              <div>
                <label htmlFor="enhanced-months" className="block text-sm font-medium text-gray-700 mb-1">
                  Enhanced Pay Period (Months)
                </label>
                <input
                  type="number"
                  id="enhanced-months"
                  min={0}
                  max={leaveMonths}
                  value={enhancedPayMonths}
                  onChange={(e) => setEnhancedPayMonths(Math.min(leaveMonths, Number(e.target.value || 0)))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Many employers offer enhanced maternity pay beyond statutory minimum
                </p>
              </div>

              {/* Enhanced Pay Percentage */}
              <div>
                <label htmlFor="enhanced-percentage" className="block text-sm font-medium text-gray-700 mb-1">
                  Enhanced Pay Percentage
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="enhanced-percentage"
                    min={0}
                    max={100}
                    step={10}
                    value={enhancedPayPercentage}
                    onChange={(e) => setEnhancedPayPercentage(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-600">%</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Percentage of full salary during enhanced pay period
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="xl:col-span-2" role="region" aria-live="polite">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Leave Impact Analysis</h2>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border-2 border-blue-200">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                    Repayment Reduction
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                    {fmtMoney(result.repaymentReduction, 0)}
                  </p>
                  <p className="text-sm text-gray-600">Less paid during leave</p>
                </div>

                <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border-2 border-orange-200">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                    Interest Accrued
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                    {fmtMoney(result.interestDuringLeave, 0)}
                  </p>
                  <p className="text-sm text-gray-600">During leave period</p>
                </div>

                <div className="bg-pink-50 p-4 sm:p-6 rounded-xl border-2 border-pink-200">
                  <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">
                    Balance Increase
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                    {fmtMoney(result.balanceIncreaseFromLeave, 0)}
                  </p>
                  <p className="text-sm text-gray-600">From reduced payments</p>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  What This Means For You
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>During your {leaveMonths}-month leave:</strong>
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      You&apos;ll pay <strong>{fmtMoney(result.totalRepaymentsDuringLeave, 0)}</strong> instead
                      of {fmtMoney(result.totalRepaymentsWithoutLeave + result.repaymentReduction, 0)} (
                      {fmtMoney(result.repaymentReduction, 0)} less)
                    </li>
                    <li>
                      Your loan will accrue <strong>{fmtMoney(result.interestDuringLeave, 0)}</strong> in
                      interest
                    </li>
                    <li>
                      You&apos;ll have <strong>{result.monthsOfReducedPayments} months</strong> with no
                      repayments (income below threshold)
                    </li>
                    {result.refundPotential > 0 && (
                      <li className="text-green-700 font-medium">
                        You may be eligible for a <strong>{fmtMoney(result.refundPotential, 0)}</strong>{" "}
                        refund if your annual income falls below the threshold
                      </li>
                    )}
                  </ul>
                  <p className="mt-3">
                    <strong>Long-term impact:</strong> Your loan balance will be approximately{" "}
                    <strong>{fmtMoney(result.balanceIncreaseFromLeave, 0)}</strong> higher due to reduced
                    payments. However, since most borrowers don&apos;t fully repay before write-off, this may
                    have no real cost.
                  </p>
                </div>
              </div>

              {/* Statutory Pay Information */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Statutory Maternity Pay (SMP) 2025/26</h3>
                <div className="grid lg:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 mb-1">First 6 weeks:</p>
                    <p className="font-medium text-gray-800">90% of average weekly earnings</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Weeks 7-39:</p>
                    <p className="font-medium text-gray-800">
                      £184.03/week or 90% earnings (whichever is lower)
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 mb-1">Your estimated monthly SMP:</p>
                    <p className="font-medium text-gray-800">
                      {fmtMoney((Math.min((salary / 52) * 0.9, 184.03) * 52) / 12, 0)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-600">
                  Note: This calculator assumes standard SMP rules. Actual pay may vary based on
                  employer policies and individual circumstances.
                </p>
              </div>

              {/* Month-by-Month Breakdown */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                  Month-by-Month Breakdown (During Leave)
                </h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Month
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Income
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Repayment
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Interest
                          </th>
                          <th className="px-2 sm:px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                            Balance
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {result.duringLeaveMonthly.map((month, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-2 sm:px-3 py-2 text-sm font-medium text-gray-900">
                              {month.month}
                            </td>
                            <td className="px-2 sm:px-3 py-2 text-sm text-gray-700">
                              {fmtMoney(month.salary, 0)}
                            </td>
                            <td
                              className={`px-2 sm:px-3 py-2 text-sm font-medium ${month.repayment === 0 ? "text-green-600" : "text-gray-900"
                                }`}
                            >
                              {month.repayment === 0 ? "£0 (paused)" : fmtMoney(month.repayment, 0)}
                            </td>
                            <td className="px-2 sm:px-3 py-2 text-sm text-orange-600">
                              {fmtMoney(month.interestAccrued, 0)}
                            </td>
                            <td className="px-2 sm:px-3 py-2 text-sm text-gray-700">
                              {fmtMoney(month.balanceEnd, 0)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-gray-100">
                        <tr>
                          <td className="px-2 sm:px-3 py-2 text-sm font-bold text-gray-900">Total</td>
                          <td className="px-2 sm:px-3 py-2 text-sm font-medium text-gray-700">-</td>
                          <td className="px-2 sm:px-3 py-2 text-sm font-bold text-gray-900">
                            {fmtMoney(result.totalRepaymentsDuringLeave, 0)}
                          </td>
                          <td className="px-2 sm:px-3 py-2 text-sm font-bold text-orange-600">
                            {fmtMoney(result.interestDuringLeave, 0)}
                          </td>
                          <td className="px-2 sm:px-3 py-2 text-sm font-medium text-gray-700">-</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>

              {/* Refund Information */}
              {result.refundPotential > 0 && (
                <div className="mt-4 sm:mt-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    You May Be Entitled to a Refund
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Based on your reduced annual income during the leave year, you may be able to
                    claim back up to <strong>{fmtMoney(result.refundPotential, 0)}</strong> in
                    student loan repayments.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-sm text-gray-700">
                    <p className="font-medium mb-2">How to claim:</p>
                    <ol className="list-decimal ml-5 space-y-1">
                      <li>Wait until the end of the tax year (April 5th)</li>
                      <li>Check your P60 to confirm your total annual income</li>
                      <li>Apply online through your Student Loans Company account</li>
                      <li>Refunds typically processed within 4-6 weeks</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
              href="/calculators/inflation-impact-calculator/"
            >
              <div className="mr-3 text-pink-700 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Inflation Impact</h3>
                <p className="text-xs sm:text-sm text-gray-600">See how inflation affects repayments</p>
              </div>
            </Link>

            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
              href="/calculators/slc-interest-rate-impact-calculator/"
            >
              <div className="mr-3 text-pink-700 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Interest Rate Impacts</h3>
                <p className="text-xs sm:text-sm text-gray-600">Understand interest rate impacts</p>
              </div>
            </Link>

            <Link
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
              href="/calculators/plan-2-student-loan-calculator/"
            >
              <div className="mr-3 text-pink-700 flex-shrink-0">
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
                <p className="text-xs sm:text-sm text-gray-600">Calculate standard payments</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto prose prose-pink max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Student Loans During Parental Leave</h2>
          <p className="text-gray-700 mb-6">
            Taking parental leave has significant implications for student loan repayments in the UK.
            While repayments pause or reduce when income drops, interest continues to accrue,
            disproportionately affecting women who take the majority of parental leave.
          </p>

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="motherhood-penalty">
              <AccordionTrigger>The &quot;Motherhood Penalty&quot;</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Research shows that women on maternity leave continue to accumulate student loan interest
                    even when repayments stop. This creates a financial penalty for starting families, with
                    female graduates taking approximately 5 years longer on average to repay their loans than
                    male graduates, despite similar starting salaries.
                  </p>

                  <h4 className="font-semibold text-gray-800">How Repayments Work During Leave</h4>
                  <p>
                    Student loan repayments are deducted through PAYE based on monthly earnings. During
                    maternity leave, as income drops below the repayment threshold, deductions automatically
                    stop or reduce. However, the Student Loans Company continues charging interest on the
                    outstanding balance regardless of income.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="maternity-pay">
              <AccordionTrigger>Statutory vs Enhanced Maternity Pay</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Statutory Maternity Pay (SMP) provides 90% of average weekly earnings for the first 6
                    weeks, then £184.03 per week (or 90% of earnings if lower) for weeks 7-39. Many employers
                    offer enhanced maternity pay beyond this, typically 100% salary for 3-6 months. Enhanced
                    pay significantly affects whether you&apos;ll continue making student loan repayments during
                    leave.
                  </p>

                  <h4 className="font-semibold text-gray-800">Income Threshold Interaction</h4>
                  <p>
                    For Plan 2 borrowers, the monthly threshold is approximately £2,372 (£28,470 annually). If
                    your maternity pay exceeds this, you&apos;ll continue making repayments. If it falls below, no
                    deductions occur. Many people on statutory pay alone (around £800-900 per month) will have
                    no repayments deducted.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="interest-accumulation">
              <AccordionTrigger>Interest Accumulation During Leave</AccordionTrigger>
              <AccordionContent>
                <p>
                  Interest continues accruing daily throughout your leave period, compounding monthly. For a
                  typical Plan 2 borrower with £45,000 outstanding, 12 months of leave results in
                  approximately £1,900-£3,300 in additional interest (depending on the rate), even with zero
                  repayments. This increases the balance and extends the time until write-off or full
                  repayment.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refund-eligibility">
              <AccordionTrigger>Refund Eligibility</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    If your total income for the tax year falls below the annual threshold due to parental
                    leave, you can claim a refund of all payments made that year. For example, if you take 6
                    months unpaid leave and earn only £20,000 for the year (below the £28,470 Plan 2
                    threshold), you can reclaim any deductions made in April-September before leave started.
                  </p>

                  <h4 className="font-semibold text-gray-800">How to Claim Refunds</h4>
                  <p>
                    Refund claims must be made after the tax year ends (April 5th). Check your P60 to confirm
                    annual income, then apply through your Student Loans Company online account. Claims are
                    typically processed within 4-6 weeks, with refunds paid directly to your bank account.
                    Importantly, refunded amounts are added back to your loan balance.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shared-parental">
              <AccordionTrigger>Shared Parental Leave</AccordionTrigger>
              <AccordionContent>
                <p>
                  Shared Parental Leave (SPL) allows parents to split up to 50 weeks of leave and 37 weeks
                  of pay. From a student loan perspective, SPL works identically to maternity leave—
                  repayments pause when income drops below thresholds, but interest continues accruing. SPL
                  can help balance the financial burden between partners if both have student loans.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multiple-periods">
              <AccordionTrigger>Multiple Periods of Leave</AccordionTrigger>
              <AccordionContent>
                <p>
                  Each period of parental leave compounds the effect on student loan balances. A borrower
                  taking three separate maternity leaves over 10 years might see their balance grow by
                  £15,000-£20,000 more than a colleague without children, purely due to missed repayments and
                  accumulated interest during leave periods.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gender-pay-gap">
              <AccordionTrigger>Gender Pay Gap Interaction</AccordionTrigger>
              <AccordionContent>
                <p>
                  The student loan &quot;motherhood penalty&quot; compounds with the gender pay gap. Women earn on
                  average 8% less than men in equivalent roles, meaning lower repayments even when working
                  full-time. Combined with career breaks for childcare, this significantly extends repayment
                  periods for female graduates.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="policy-considerations">
              <AccordionTrigger>Policy Considerations</AccordionTrigger>
              <AccordionContent>
                <p>
                  Some campaigners advocate for pausing interest accrual during parental leave, similar to
                  how interest is paused during periods of low income in other jurisdictions. Current UK
                  policy does not provide this protection, meaning parents effectively subsidize the cost of
                  childcare through additional interest on student loans.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="writeoff-impact">
              <AccordionTrigger>Long-Term Write-Off Impact</AccordionTrigger>
              <AccordionContent>
                <p>
                  For borrowers unlikely to repay before write-off (25-40 years depending on plan), the
                  additional balance from parental leave may have no real cost. If you&apos;re projected to have
                  £30,000 written off anyway, an extra £5,000 from maternity leave doesn&apos;t increase lifetime
                  payments. The penalty primarily affects high earners who will fully repay.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="planning-strategies">
              <AccordionTrigger>Planning Strategies</AccordionTrigger>
              <AccordionContent>
                <p>
                  Families can minimize student loan impacts through strategic planning: timing leave to
                  maximize annual income in other years (for refund eligibility), maximizing enhanced pay
                  periods from employers, sharing leave between partners to spread the burden, and
                  considering that for most borrowers, additional balance from leave will be written off
                  rather than repaid.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="employer-policies">
              <AccordionTrigger>Employer Enhanced Pay Policies</AccordionTrigger>
              <AccordionContent>
                <p>
                  Employers vary significantly in maternity pay offerings. Public sector and large companies
                  often provide 6 months full pay, while smaller companies may only offer statutory minimum.
                  When comparing job offers, factor in maternity policies alongside salary—generous maternity
                  pay can reduce student loan impacts by tens of thousands of pounds.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        {/* CTA */}
        <section className="max-w-6xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Need more information about parental rights?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Check GOV.UK for official guidance on maternity, paternity, and shared parental leave
            entitlements, pay rates, and how to claim refunds on student loan overpayments.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
              href="/calculators/inflation-impact-calculator/"
            >
              Inflation Impact Analysis
            </Link>
            <a
              className="bg-white hover:bg-gray-50 text-pink-600 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-pink-600 text-sm sm:text-base"
              href="https://www.gov.uk/maternity-pay-leave"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Maternity Guide
            </a>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center space-x-1 text-xs sm:text-sm text-gray-600">
            <li>
              <Link className="hover:text-pink-700 hover:underline" href="/">
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
              <Link className="hover:text-pink-700 hover:underline" href="/calculators/">
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
                Parental Leave Impact Calculator
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}