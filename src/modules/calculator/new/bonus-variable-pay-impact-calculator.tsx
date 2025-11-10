"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  name: string;
  annualThreshold: number;
  repaymentRate: number;
  description: string;
}

interface PaymentFrequency {
  value: string;
  label: string;
  periodsPerYear: number;
}

interface TaxBracket {
  min: number;
  max: number;
  rate: number;
}

interface NIBracket {
  min: number;
  max: number;
  rate: number;
}

interface BonusCalculation {
  grossBonus: number;
  grossTotal: number;
  incomeTax: number;
  nationalInsurance: number;
  studentLoan: number;
  netBonus: number;
  totalDeductions: number;
  effectiveRate: number;
}

interface NormalPayCalculation {
  grossPay: number;
  incomeTax: number;
  nationalInsurance: number;
  studentLoan: number;
  netPay: number;
}

interface ComparisonResults {
  normalPay: NormalPayCalculation;
  bonusMonth: BonusCalculation;
  extraStudentLoan: number;
  bonusImpactPercentage: number;
  annualRepaymentWithoutBonus: number;
  annualRepaymentWithBonus: number;
  totalExtraDeduction: number;
}

// Student Loan Plan Constants
const LOAN_PLANS: Record<string, LoanPlan> = {
  PLAN_1: {
    name: 'Plan 1',
    annualThreshold: 22015,
    repaymentRate: 0.09,
    description: 'Pre-2012 students (England/Wales) or Northern Ireland students'
  },
  PLAN_2: {
    name: 'Plan 2',
    annualThreshold: 27295,
    repaymentRate: 0.09,
    description: '2012-2023 students (England/Wales)'
  },
  PLAN_4: {
    name: 'Plan 4',
    annualThreshold: 31395,
    repaymentRate: 0.09,
    description: 'Scottish students'
  },
  PLAN_5: {
    name: 'Plan 5',
    annualThreshold: 25000,
    repaymentRate: 0.09,
    description: 'Post-2023 students (England/Wales)'
  },
  POSTGRADUATE: {
    name: 'Postgraduate',
    annualThreshold: 21000,
    repaymentRate: 0.06,
    description: 'Postgraduate loans'
  }
};

const PAYMENT_FREQUENCIES: PaymentFrequency[] = [
  { value: 'weekly', label: 'Weekly', periodsPerYear: 52 },
  { value: 'monthly', label: 'Monthly', periodsPerYear: 12 },
  { value: 'annually', label: 'Annually', periodsPerYear: 1 }
];

// 2024/25 Tax Brackets (Basic Rate)
const INCOME_TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 12570, rate: 0 }, // Personal allowance
  { min: 12570, max: 50270, rate: 0.20 }, // Basic rate
  { min: 50270, max: 125140, rate: 0.40 }, // Higher rate
  { min: 125140, max: Infinity, rate: 0.45 } // Additional rate
];

// 2024/25 National Insurance Brackets (Employee Class 1)
const NATIONAL_INSURANCE_BRACKETS: NIBracket[] = [
  { min: 0, max: 12570, rate: 0 }, // No NI below primary threshold
  { min: 12570, max: 50270, rate: 0.12 }, // Main rate
  { min: 50270, max: Infinity, rate: 0.02 } // Reduced rate above upper earnings limit
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateTax(annualIncome: number): number {
  let tax = 0;
  for (const bracket of INCOME_TAX_BRACKETS) {
    if (annualIncome > bracket.min) {
      const taxableInThisBracket = Math.min(annualIncome - bracket.min, bracket.max - bracket.min);
      tax += taxableInThisBracket * bracket.rate;
    }
  }
  return tax;
}

function calculateNationalInsurance(annualIncome: number): number {
  let ni = 0;
  for (const bracket of NATIONAL_INSURANCE_BRACKETS) {
    if (annualIncome > bracket.min) {
      const niableInThisBracket = Math.min(annualIncome - bracket.min, bracket.max - bracket.min);
      ni += niableInThisBracket * bracket.rate;
    }
  }
  return ni;
}

function calculateStudentLoan(periodIncome: number, periodThreshold: number, repaymentRate: number): number {
  return Math.max(0, (periodIncome - periodThreshold) * repaymentRate);
}

function calculateNormalPay(
  regularSalary: number,
  frequency: string,
  plan: LoanPlan
): NormalPayCalculation {
  const periodsPerYear = PAYMENT_FREQUENCIES.find(f => f.value === frequency)?.periodsPerYear || 12;
  const periodSalary = regularSalary / periodsPerYear;
  const periodThreshold = plan.annualThreshold / periodsPerYear;

  // Calculate annual tax and NI, then divide by periods
  const annualTax = calculateTax(regularSalary);
  const annualNI = calculateNationalInsurance(regularSalary);
  const periodTax = annualTax / periodsPerYear;
  const periodNI = annualNI / periodsPerYear;

  const studentLoan = calculateStudentLoan(periodSalary, periodThreshold, plan.repaymentRate);
  const netPay = periodSalary - periodTax - periodNI - studentLoan;

  return {
    grossPay: periodSalary,
    incomeTax: periodTax,
    nationalInsurance: periodNI,
    studentLoan: studentLoan,
    netPay: netPay
  };
}

function calculateBonusMonth(
  regularSalary: number,
  bonusAmount: number,
  frequency: string,
  plan: LoanPlan
): BonusCalculation {
  const periodsPerYear = PAYMENT_FREQUENCIES.find(f => f.value === frequency)?.periodsPerYear || 12;
  const periodSalary = regularSalary / periodsPerYear;
  const periodThreshold = plan.annualThreshold / periodsPerYear;
  const grossTotal = periodSalary + bonusAmount;

  // For bonus month, calculate tax and NI on the total pay for that period
  // Using cumulative method - calculate as if it's annual income then adjust
  const annualizedIncome = grossTotal * periodsPerYear;
  const annualTax = calculateTax(annualizedIncome);
  const annualNI = calculateNationalInsurance(annualizedIncome);

  // Normal period tax/NI
  const normalAnnualTax = calculateTax(regularSalary);
  const normalAnnualNI = calculateNationalInsurance(regularSalary);

  // Tax and NI on just the bonus (marginal rates)
  const bonusTax = (annualTax - normalAnnualTax) / periodsPerYear;
  const bonusNI = (annualNI - normalAnnualNI) / periodsPerYear;

  // Student loan calculated on period income
  const totalStudentLoan = calculateStudentLoan(grossTotal, periodThreshold, plan.repaymentRate);
  const normalStudentLoan = calculateStudentLoan(periodSalary, periodThreshold, plan.repaymentRate);
  const bonusStudentLoan = totalStudentLoan - normalStudentLoan;

  const totalDeductions = bonusTax + bonusNI + bonusStudentLoan;
  const netBonus = bonusAmount - totalDeductions;
  const effectiveRate = (totalDeductions / bonusAmount) * 100;

  return {
    grossBonus: bonusAmount,
    grossTotal: grossTotal,
    incomeTax: bonusTax,
    nationalInsurance: bonusNI,
    studentLoan: bonusStudentLoan,
    netBonus: netBonus,
    totalDeductions: totalDeductions,
    effectiveRate: effectiveRate
  };
}

const BonusVariablePayCalculator: React.FC = () => {
  const [regularSalary, setRegularSalary] = useState<number>(35000);
  const [bonusAmount, setBonusAmount] = useState<number>(5000);
  const [bonusMonth, setBonusMonth] = useState<string>('December');
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly');

  const plan: LoanPlan = LOAN_PLANS[selectedPlan];

  const calculations: ComparisonResults = useMemo(() => {
    const normalPay = calculateNormalPay(regularSalary, paymentFrequency, plan);
    const bonusMonthCalc = calculateBonusMonth(regularSalary, bonusAmount, paymentFrequency, plan);

    const periodsPerYear = PAYMENT_FREQUENCIES.find(f => f.value === paymentFrequency)?.periodsPerYear || 12;
    const extraStudentLoan = bonusMonthCalc.studentLoan;
    const bonusImpactPercentage = normalPay.studentLoan > 0
      ? (extraStudentLoan / normalPay.studentLoan) * 100
      : 0;

    const annualRepaymentWithoutBonus = normalPay.studentLoan * periodsPerYear;
    const annualRepaymentWithBonus = annualRepaymentWithoutBonus + extraStudentLoan;

    return {
      normalPay,
      bonusMonth: bonusMonthCalc,
      extraStudentLoan,
      bonusImpactPercentage,
      annualRepaymentWithoutBonus,
      annualRepaymentWithBonus,
      totalExtraDeduction: bonusMonthCalc.totalDeductions
    };
  }, [regularSalary, bonusAmount, paymentFrequency, plan]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Bonus & Variable Pay Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Bonus & Variable Pay Impact Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how bonuses, commissions, and variable pay affect your student loan deductions.
              See exactly why your student loan repayment spikes in bonus months.
            </p>
          </div>
        </section>

        {/* Main Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">

            {/* Input Panel */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-purple-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Why Bonus Deductions Are Higher</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Student loan repayments are calculated on each pay period&apos;s income, causing spikes when bonuses are received.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regular Salary */}
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Regular Annual Salary
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="salary"
                    min={0}
                    max={200000}
                    step={1000}
                    value={regularSalary}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegularSalary(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={15000}
                    max={100000}
                    step={1000}
                    value={Math.min(100000, Math.max(15000, regularSalary))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegularSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Bonus Amount */}
              <div>
                <label htmlFor="bonus" className="block text-sm font-medium text-gray-700 mb-1">
                  Bonus/Variable Pay Amount
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="bonus"
                    min={0}
                    max={50000}
                    step={100}
                    value={bonusAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBonusAmount(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={500}
                    max={25000}
                    step={100}
                    value={Math.min(25000, Math.max(500, bonusAmount))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBonusAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Bonus Month */}
              <div>
                <label htmlFor="bonus-month" className="block text-sm font-medium text-gray-700 mb-2">
                  Bonus Payment Month
                </label>
                <select
                  id="bonus-month"
                  value={bonusMonth}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBonusMonth(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm pr-8"
                >
                  {MONTHS.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Loan Plan Selection */}
              <div>
                <label htmlFor="loan-plan" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  id="loan-plan"
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm pr-8"
                >
                  {Object.entries(LOAN_PLANS).map(([key, planOption]) => (
                    <option key={key} value={key}>
                      {planOption.name} - {fmtMoney(planOption.annualThreshold)}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {plan.description}
                </p>
              </div>

              {/* Payment Frequency */}
              <div>
                <label htmlFor="pay-frequency" className="block text-sm font-medium text-gray-700 mb-2">
                  Pay Frequency
                </label>
                <select
                  id="pay-frequency"
                  value={paymentFrequency}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPaymentFrequency(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm pr-8"
                >
                  {PAYMENT_FREQUENCIES.map((freq) => (
                    <option key={freq.value} value={freq.value}>
                      {freq.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plan Details */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Plan Details</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Threshold:</strong> {fmtMoney(plan.annualThreshold)}/year</p>
                  <p><strong>Rate:</strong> {fmtPercent(plan.repaymentRate)} above threshold</p>
                  <p className="truncate"><strong>Period threshold:</strong> {fmtMoney(plan.annualThreshold / (PAYMENT_FREQUENCIES.find(f => f.value === paymentFrequency)?.periodsPerYear || 12))}</p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Main Comparison */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Pay Comparison: Normal vs Bonus Month</h2>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">

                  {/* Normal Pay */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg border-2 border-gray-200">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">Normal {paymentFrequency === 'monthly' ? 'Monthly' : paymentFrequency === 'weekly' ? 'Weekly' : 'Annual'} Pay</h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Gross Pay</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{fmtMoney(calculations.normalPay.grossPay)}</p>
                      </div>
                      <div className="text-xs sm:text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Income Tax:</span>
                          <span>{fmtMoney(calculations.normalPay.incomeTax)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">National Insurance:</span>
                          <span>{fmtMoney(calculations.normalPay.nationalInsurance)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Student Loan:</span>
                          <span className="font-medium">{fmtMoney(calculations.normalPay.studentLoan)}</span>
                        </div>
                        <div className="border-t pt-1 flex justify-between font-semibold">
                          <span>Net Pay:</span>
                          <span>{fmtMoney(calculations.normalPay.netPay)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bonus Month */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg border-2 border-purple-200">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">{bonusMonth} (Bonus Month)</h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Gross Total</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{fmtMoney(calculations.bonusMonth.grossTotal)}</p>
                        <p className="text-xs text-gray-500">Including {fmtMoney(bonusAmount)} bonus</p>
                      </div>
                      <div className="text-xs sm:text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Income Tax on Bonus:</span>
                          <span>{fmtMoney(calculations.bonusMonth.incomeTax)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">NI on Bonus:</span>
                          <span>{fmtMoney(calculations.bonusMonth.nationalInsurance)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Student Loan on Bonus:</span>
                          <span className="font-medium text-purple-700">{fmtMoney(calculations.bonusMonth.studentLoan)}</span>
                        </div>
                        <div className="border-t pt-1 flex justify-between font-semibold">
                          <span>Net Bonus:</span>
                          <span>{fmtMoney(calculations.bonusMonth.netBonus)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Analysis */}
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Bonus Impact Summary</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-purple-700">{fmtMoney(calculations.extraStudentLoan)}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Extra Student Loan</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-purple-700">{fmtPercent(calculations.bonusMonth.effectiveRate)}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Effective Tax Rate on Bonus</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-purple-700">{fmtPercent(calculations.bonusMonth.netBonus / bonusAmount)}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Take-Home Rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Bonus Deduction Breakdown</h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-1 sm:px-0">Component</th>
                          <th className="text-right py-2 px-1">Amount</th>
                          <th className="text-right py-2 px-1 hidden sm:table-cell">Rate</th>
                          <th className="text-right py-2 px-1">% of Bonus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-1 sm:px-0 font-medium">Gross Bonus</td>
                          <td className="text-right py-2 px-1">{fmtMoney(bonusAmount)}</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell">-</td>
                          <td className="text-right py-2 px-1">100.0%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-1 sm:px-0">Income Tax</td>
                          <td className="text-right py-2 px-1">-{fmtMoney(calculations.bonusMonth.incomeTax)}</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell text-xs">~20-40%</td>
                          <td className="text-right py-2 px-1">{fmtPercent(calculations.bonusMonth.incomeTax / bonusAmount)}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-1 sm:px-0">National Insurance</td>
                          <td className="text-right py-2 px-1">-{fmtMoney(calculations.bonusMonth.nationalInsurance)}</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell text-xs">~12%</td>
                          <td className="text-right py-2 px-1">{fmtPercent(calculations.bonusMonth.nationalInsurance / bonusAmount)}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-1 sm:px-0">Student Loan</td>
                          <td className="text-right py-2 px-1">-{fmtMoney(calculations.bonusMonth.studentLoan)}</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell text-xs">{fmtPercent(plan.repaymentRate)}</td>
                          <td className="text-right py-2 px-1">{fmtPercent(calculations.bonusMonth.studentLoan / bonusAmount)}</td>
                        </tr>
                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 px-1 sm:px-0">Net Bonus</td>
                          <td className="text-right py-2 px-1 text-green-700">{fmtMoney(calculations.bonusMonth.netBonus)}</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell">-</td>
                          <td className="text-right py-2 px-1 text-green-700">{fmtPercent(calculations.bonusMonth.netBonus / bonusAmount)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Annual Projection */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Annual Student Loan Repayment Projection</h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Without Bonus</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(calculations.annualRepaymentWithoutBonus)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">With {fmtMoney(bonusAmount)} Bonus</p>
                    <p className="text-xl sm:text-2xl font-bold text-blue-700">{fmtMoney(calculations.annualRepaymentWithBonus)}</p>
                    <p className="text-sm text-green-600">
                      +{fmtMoney(calculations.annualRepaymentWithBonus - calculations.annualRepaymentWithoutBonus)} extra
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <p className="text-xs sm:text-sm text-blue-800">
                    <strong>Important:</strong> This extra deduction doesn&apos;t result in overpayment if your total annual income remains consistent.
                    It&apos;s just the timing of when the repayment is collected.
                  </p>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Key Insights</h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Why the spike:</strong> Student loan repayments are calculated on each pay period&apos;s income.
                      A bonus pushes your period income well above the threshold, triggering a higher deduction.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>No overpayment:</strong> If your annual income stays consistent, this extra deduction
                      simply means you&apos;re paying your annual liability earlier rather than overpaying.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Effective rate:</strong> Your bonus faces an effective tax rate of {fmtPercent(calculations.bonusMonth.effectiveRate)}
                      including income tax, National Insurance, and student loan repayments.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Planning tip:</strong> If you regularly receive bonuses, consider the impact on cash flow
                      and budget for the higher deductions in those months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-purple max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Student Loan Deductions on Bonuses</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Student loan calculated on each pay period separately</li>
                <li>• Bonus pushes period income above threshold</li>
                <li>• {fmtPercent(plan.repaymentRate)} deducted on excess amount</li>
                <li>• Creates temporary spike in deductions</li>
                <li>• Annual total remains accurate</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Planning Tips</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Budget for higher deductions in bonus months</li>
                <li>• Consider spreading bonuses across multiple periods</li>
                <li>• Remember: higher rate doesn&apos;t mean overpayment</li>
                <li>• Monitor annual repayment totals</li>
                <li>• Discuss with payroll if concerned</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Example Scenario</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              On a {fmtMoney(regularSalary)} salary with Plan {plan.name.split(' ')[1]}, your normal {paymentFrequency} student loan repayment
              would be {fmtMoney(calculations.normalPay.studentLoan)}. However, when you receive a {fmtMoney(bonusAmount)} bonus,
              the total deduction jumps to {fmtMoney(calculations.normalPay.studentLoan + calculations.extraStudentLoan)}
              for that period - an extra {fmtMoney(calculations.extraStudentLoan)}.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              This happens because your combined income for that period ({fmtMoney(calculations.bonusMonth.grossTotal)})
              significantly exceeds the {paymentFrequency} threshold of {fmtMoney(plan.annualThreshold / (PAYMENT_FREQUENCIES.find(f => f.value === paymentFrequency)?.periodsPerYear || 12))}.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Questions About Your Student Loan?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            If you&apos;re concerned about student loan deductions or think you might be overpaying,
            contact the Student Loans Company or speak with your payroll department.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/contact-student-finance-england"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Student Finance
            </a>
            <a
              href="https://www.gov.uk/repaying-your-student-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-purple-800 transition-colors text-sm sm:text-base"
            >
              Learn More About Repayments
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BonusVariablePayCalculator;