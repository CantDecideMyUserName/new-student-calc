"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  name: string;
  annualThreshold: number;
  repaymentRate: number;
  description: string;
  writeOffYears: number;
}

interface PensionMethod {
  value: string;
  label: string;
  description: string;
  affectsStudentLoan: boolean;
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

interface WithoutSacrificeCalculation {
  grossSalary: number;
  studentLoanRepayment: number;
  monthlyStudentLoan: number;
  incomeAboveThreshold: number;
}

interface WithSacrificeCalculation {
  adjustedSalary: number;
  studentLoanRepayment: number;
  monthlyStudentLoan: number;
  incomeAboveThreshold: number;
  pensionContribution: number;
}

interface SavingsBreakdown {
  studentLoanSaving: number;
  monthlyStudentLoanSaving: number;
  incomeTaxSaving: number;
  nationalInsuranceSaving: number;
  totalMonthlySaving: number;
  totalAnnualSaving: number;
  effectiveTakeHomeImprovement: number;
}

interface ComparisonResults {
  withoutSacrifice: WithoutSacrificeCalculation;
  withSacrifice: WithSacrificeCalculation;
  savings: SavingsBreakdown;
  isWorthwhile: boolean;
  breakEvenYears: number;
}

// Student Loan Plan Constants
const LOAN_PLANS: Record<string, LoanPlan> = {
  PLAN_1: {
    name: 'Plan 1',
    annualThreshold: 22015,
    repaymentRate: 0.09,
    description: 'Pre-2012 students (England/Wales) or Northern Ireland students',
    writeOffYears: 25
  },
  PLAN_2: {
    name: 'Plan 2',
    annualThreshold: 27295,
    repaymentRate: 0.09,
    description: '2012-2023 students (England/Wales)',
    writeOffYears: 30
  },
  PLAN_4: {
    name: 'Plan 4',
    annualThreshold: 31395,
    repaymentRate: 0.09,
    description: 'Scottish students',
    writeOffYears: 30
  },
  PLAN_5: {
    name: 'Plan 5',
    annualThreshold: 25000,
    repaymentRate: 0.09,
    description: 'Post-2023 students (England/Wales)',
    writeOffYears: 40
  },
  POSTGRADUATE: {
    name: 'Postgraduate',
    annualThreshold: 21000,
    repaymentRate: 0.06,
    description: 'Postgraduate loans',
    writeOffYears: 30
  }
};

const PENSION_METHODS: PensionMethod[] = [
  {
    value: 'salary_sacrifice',
    label: 'Salary Sacrifice',
    description: 'Reduces gross contractual salary - DOES reduce student loan repayments',
    affectsStudentLoan: true
  },
  {
    value: 'relief_at_source',
    label: 'Relief at Source',
    description: 'Post-tax contribution with tax relief - does NOT reduce student loan repayments',
    affectsStudentLoan: false
  },
  {
    value: 'net_pay',
    label: 'Net Pay Arrangement',
    description: 'Pre-tax but post-gross - does NOT reduce student loan repayments',
    affectsStudentLoan: false
  }
];

// 2024/25 Tax Brackets
const INCOME_TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 12570, rate: 0 }, // Personal allowance
  { min: 12570, max: 50270, rate: 0.20 }, // Basic rate
  { min: 50270, max: 125140, rate: 0.40 }, // Higher rate
  { min: 125140, max: Infinity, rate: 0.45 } // Additional rate
];

// 2024/25 National Insurance Brackets
const NATIONAL_INSURANCE_BRACKETS: NIBracket[] = [
  { min: 0, max: 12570, rate: 0 }, // No NI below primary threshold
  { min: 12570, max: 50270, rate: 0.12 }, // Main rate
  { min: 50270, max: Infinity, rate: 0.02 } // Reduced rate above upper earnings limit
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

function calculateWithoutSacrifice(
  grossSalary: number,
  plan: LoanPlan
): WithoutSacrificeCalculation {
  const incomeAboveThreshold = Math.max(0, grossSalary - plan.annualThreshold);
  const studentLoanRepayment = incomeAboveThreshold * plan.repaymentRate;
  const monthlyStudentLoan = studentLoanRepayment / 12;

  return {
    grossSalary,
    studentLoanRepayment,
    monthlyStudentLoan,
    incomeAboveThreshold
  };
}

function calculateWithSacrifice(
  grossSalary: number,
  pensionContribution: number,
  plan: LoanPlan
): WithSacrificeCalculation {
  const adjustedSalary = grossSalary - pensionContribution;
  const incomeAboveThreshold = Math.max(0, adjustedSalary - plan.annualThreshold);
  const studentLoanRepayment = incomeAboveThreshold * plan.repaymentRate;
  const monthlyStudentLoan = studentLoanRepayment / 12;

  return {
    adjustedSalary,
    studentLoanRepayment,
    monthlyStudentLoan,
    incomeAboveThreshold,
    pensionContribution
  };
}

function calculateSavings(
  withoutSacrifice: WithoutSacrificeCalculation,
  withSacrifice: WithSacrificeCalculation,
  pensionContribution: number
): SavingsBreakdown {
  // Student loan savings
  const studentLoanSaving = withoutSacrifice.studentLoanRepayment - withSacrifice.studentLoanRepayment;
  const monthlyStudentLoanSaving = studentLoanSaving / 12;

  // Tax and NI savings on the sacrificed amount
  const originalTax = calculateTax(withoutSacrifice.grossSalary);
  const newTax = calculateTax(withSacrifice.adjustedSalary);
  const incomeTaxSaving = originalTax - newTax;

  const originalNI = calculateNationalInsurance(withoutSacrifice.grossSalary);
  const newNI = calculateNationalInsurance(withSacrifice.adjustedSalary);
  const nationalInsuranceSaving = originalNI - newNI;

  // Total savings
  const totalAnnualSaving = studentLoanSaving + incomeTaxSaving + nationalInsuranceSaving;
  const totalMonthlySaving = totalAnnualSaving / 12;

  // Effective take-home improvement (savings minus pension contribution)
  const effectiveTakeHomeImprovement = totalAnnualSaving - pensionContribution;

  return {
    studentLoanSaving,
    monthlyStudentLoanSaving,
    incomeTaxSaving,
    nationalInsuranceSaving,
    totalMonthlySaving,
    totalAnnualSaving,
    effectiveTakeHomeImprovement
  };
}

const PensionSalarySacrificeCalculator: React.FC = () => {
  const [grossSalary, setGrossSalary] = useState<number>(40000);
  const [pensionContributionType, setPensionContributionType] = useState<'percentage' | 'amount'>('percentage');
  const [pensionPercentage, setPensionPercentage] = useState<number>(5);
  const [pensionAmount, setPensionAmount] = useState<number>(2000);
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [comparisonMethod, setComparisonMethod] = useState<string>('salary_sacrifice');

  const plan: LoanPlan = LOAN_PLANS[selectedPlan];

  const pensionContribution = useMemo(() => {
    return pensionContributionType === 'percentage'
      ? (grossSalary * pensionPercentage) / 100
      : pensionAmount;
  }, [grossSalary, pensionContributionType, pensionPercentage, pensionAmount]);

  const calculations: ComparisonResults = useMemo(() => {
    const withoutSacrifice = calculateWithoutSacrifice(grossSalary, plan);
    const withSacrifice = calculateWithSacrifice(grossSalary, pensionContribution, plan);
    const savings = calculateSavings(withoutSacrifice, withSacrifice, pensionContribution);

    // Determine if salary sacrifice is worthwhile
    const isWorthwhile = savings.effectiveTakeHomeImprovement > 0 || savings.studentLoanSaving > 0;

    // Calculate break-even years (simplified)
    const annualBenefit = savings.totalAnnualSaving;
    const breakEvenYears = annualBenefit > 0 ? pensionContribution / annualBenefit : Infinity;

    return {
      withoutSacrifice,
      withSacrifice,
      savings,
      isWorthwhile,
      breakEvenYears
    };
  }, [grossSalary, pensionContribution, plan]);

  const selectedMethod = PENSION_METHODS.find(method => method.value === comparisonMethod);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Pension Salary Sacrifice Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Pension Salary Sacrifice Effect Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Discover how salary sacrifice pension contributions can reduce your student loan repayments
              while building retirement savings. Only salary sacrifice affects student loan calculations.
            </p>
          </div>
        </section>

        {/* Main Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">

            {/* Input Panel */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Salary Sacrifice Only</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Only salary sacrifice reduces your contractual salary for student loan calculations.
                      Other pension methods do not affect student loan repayments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gross Salary */}
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Gross Annual Salary
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="salary"
                    min={0}
                    max={200000}
                    step={1000}
                    value={grossSalary}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrossSalary(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={20000}
                    max={100000}
                    step={1000}
                    value={Math.min(100000, Math.max(20000, grossSalary))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrossSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Pension Contribution Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pension Contribution
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="percentage"
                      checked={pensionContributionType === 'percentage'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPensionContributionType(e.target.value as 'percentage' | 'amount')}
                      className="mr-2"
                    />
                    <span className="text-sm">Percentage</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="amount"
                      checked={pensionContributionType === 'amount'}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPensionContributionType(e.target.value as 'percentage' | 'amount')}
                      className="mr-2"
                    />
                    <span className="text-sm">Fixed Amount</span>
                  </label>
                </div>

                {pensionContributionType === 'percentage' ? (
                  <div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        min={0}
                        max={50}
                        step={0.5}
                        value={pensionPercentage}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPensionPercentage(Number(e.target.value) || 0)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                      />
                      <span className="ml-2 text-sm text-gray-500">%</span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="range"
                        min={0}
                        max={20}
                        step={0.5}
                        value={pensionPercentage}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPensionPercentage(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Annual contribution: {fmtMoney(pensionContribution)}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        min={0}
                        max={50000}
                        step={100}
                        value={pensionAmount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPensionAmount(Number(e.target.value) || 0)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Percentage of salary: {grossSalary > 0 ? fmtPercent(pensionAmount / grossSalary) : '0%'}
                    </p>
                  </div>
                )}
              </div>

              {/* Loan Plan Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                >
                  {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                    <option key={key} value={key}>
                      {plan.name} - {fmtMoney(plan.annualThreshold)} threshold
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {plan.description}
                </p>
              </div>

              {/* Pension Method Comparison */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pension Method for Comparison
                </label>
                <select
                  value={comparisonMethod}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setComparisonMethod(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                >
                  {PENSION_METHODS.map((method) => (
                    <option key={method.value} value={method.value}>
                      {method.label}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {selectedMethod?.description}
                </p>
              </div>

              {/* Plan Details */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Plan Details</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Threshold:</strong> {fmtMoney(plan.annualThreshold)} per year</p>
                  <p><strong>Rate:</strong> {fmtPercent(plan.repaymentRate)} above threshold</p>
                  <p><strong>Write-off:</strong> {plan.writeOffYears} years</p>
                  <p><strong>Monthly threshold:</strong> {fmtMoney(plan.annualThreshold / 12)}</p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Main Comparison */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Student Loan Repayment Comparison</h2>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">

                  {/* Without Salary Sacrifice */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg border-2 border-gray-200">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full mr-2 sm:mr-3"></div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">Without Salary Sacrifice</h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Gross Salary</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{fmtMoney(calculations.withoutSacrifice.grossSalary)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Income Above Threshold</p>
                        <p className="text-base sm:text-lg text-gray-700">{fmtMoney(calculations.withoutSacrifice.incomeAboveThreshold)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Annual Student Loan</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(calculations.withoutSacrifice.studentLoanRepayment)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Monthly Student Loan</p>
                        <p className="text-base sm:text-lg text-gray-700">{fmtMoney(calculations.withoutSacrifice.monthlyStudentLoan)}</p>
                      </div>
                    </div>
                  </div>

                  {/* With Salary Sacrifice */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg border-2 border-green-200">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-600 rounded-full mr-2 sm:mr-3"></div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">With Salary Sacrifice</h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Adjusted Salary</p>
                        <p className="text-lg sm:text-xl font-bold text-gray-800">{fmtMoney(calculations.withSacrifice.adjustedSalary)}</p>
                        <p className="text-xs text-gray-500">(-{fmtMoney(pensionContribution)} to pension)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Income Above Threshold</p>
                        <p className="text-base sm:text-lg text-gray-700">{fmtMoney(calculations.withSacrifice.incomeAboveThreshold)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Annual Student Loan</p>
                        <p className="text-xl sm:text-2xl font-bold text-green-700">{fmtMoney(calculations.withSacrifice.studentLoanRepayment)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Monthly Student Loan</p>
                        <p className="text-base sm:text-lg text-green-700">{fmtMoney(calculations.withSacrifice.monthlyStudentLoan)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Summary */}
                <div className={`p-3 sm:p-4 rounded-lg ${calculations.savings.studentLoanSaving > 0 ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="flex items-center mb-3">
                    {calculations.savings.studentLoanSaving > 0 ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    )}
                    <h3 className="font-semibold text-gray-800">Student Loan Savings</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-green-700">{fmtMoney(calculations.savings.studentLoanSaving)}</p>
                      <p className="text-sm text-gray-600">Annual Saving</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-green-700">{fmtMoney(calculations.savings.monthlyStudentLoanSaving)}</p>
                      <p className="text-sm text-gray-600">Monthly Saving</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-green-700">
                        {calculations.withoutSacrifice.studentLoanRepayment > 0 
                          ? fmtPercent(calculations.savings.studentLoanSaving / calculations.withoutSacrifice.studentLoanRepayment)
                          : '0%'
                        }
                      </p>
                      <p className="text-sm text-gray-600">Reduction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Savings Breakdown */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Complete Savings Breakdown</h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-2 sm:px-0">Saving Type</th>
                          <th className="text-right py-2 px-1">Annual Amount</th>
                          <th className="text-right py-2 px-1">Monthly Amount</th>
                          <th className="text-right py-2 px-1">Rate on Contribution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-2 sm:px-0">Student Loan Reduction</td>
                          <td className="text-right py-2 px-1 font-medium text-green-700">{fmtMoney(calculations.savings.studentLoanSaving)}</td>
                          <td className="text-right py-2 px-1">{fmtMoney(calculations.savings.monthlyStudentLoanSaving)}</td>
                          <td className="text-right py-2 px-1">{fmtPercent(plan.repaymentRate)}</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-2 sm:px-0">Income Tax Saving</td>
                          <td className="text-right py-2 px-1 font-medium text-green-700">{fmtMoney(calculations.savings.incomeTaxSaving)}</td>
                          <td className="text-right py-2 px-1">{fmtMoney(calculations.savings.incomeTaxSaving / 12)}</td>
                          <td className="text-right py-2 px-1">20-45%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-2 sm:px-0">National Insurance Saving</td>
                          <td className="text-right py-2 px-1 font-medium text-green-700">{fmtMoney(calculations.savings.nationalInsuranceSaving)}</td>
                          <td className="text-right py-2 px-1">{fmtMoney(calculations.savings.nationalInsuranceSaving / 12)}</td>
                          <td className="text-right py-2 px-1">12%</td>
                        </tr>
                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 px-2 sm:px-0">Total Savings</td>
                          <td className="text-right py-2 px-1 text-green-700">{fmtMoney(calculations.savings.totalAnnualSaving)}</td>
                          <td className="text-right py-2 px-1">{fmtMoney(calculations.savings.totalMonthlySaving)}</td>
                          <td className="text-right py-2 px-1">{pensionContribution > 0 ? fmtPercent(calculations.savings.totalAnnualSaving / pensionContribution) : '0%'}</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-2 px-2 sm:px-0">Pension Contribution</td>
                          <td className="text-right py-2 px-1 text-gray-700">-{fmtMoney(pensionContribution)}</td>
                          <td className="text-right py-2 px-1">-{fmtMoney(pensionContribution / 12)}</td>
                          <td className="text-right py-2 px-1">100%</td>
                        </tr>
                        <tr className="border-t-2 border-blue-300 font-semibold">
                          <td className="py-2 px-2 sm:px-0">Net Effect on Take-Home</td>
                          <td className={`text-right py-2 px-1 ${calculations.savings.effectiveTakeHomeImprovement >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                            {calculations.savings.effectiveTakeHomeImprovement >= 0 ? '+' : ''}{fmtMoney(calculations.savings.effectiveTakeHomeImprovement)}
                          </td>
                          <td className={`text-right py-2 px-1 ${calculations.savings.effectiveTakeHomeImprovement >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                            {calculations.savings.effectiveTakeHomeImprovement >= 0 ? '+' : ''}{fmtMoney(calculations.savings.effectiveTakeHomeImprovement / 12)}
                          </td>
                          <td className="text-right py-2 px-1">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Pension Method Comparison */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Pension Method Comparison</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {PENSION_METHODS.map((method) => (
                    <div key={method.value} className={`p-3 sm:p-4 rounded-lg border-2 ${method.value === 'salary_sacrifice' ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'}`}>
                      <h4 className="font-medium text-gray-800 mb-2">{method.label}</h4>
                      <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                      <div className="flex items-center">
                        {method.affectsStudentLoan ? (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-green-700">Reduces Student Loan</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-red-700">No Student Loan Effect</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long-term Analysis */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Long-term Analysis</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Pension Benefits</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Annual contribution:</strong> {fmtMoney(pensionContribution)}</p>
                      <p><strong>Total tax relief:</strong> {fmtMoney(calculations.savings.totalAnnualSaving)}</p>
                      <p><strong>Effective rate:</strong> {pensionContribution > 0 ? fmtPercent(calculations.savings.totalAnnualSaving / pensionContribution) : '0%'}</p>
                      <p><strong>Write-off in:</strong> {plan.writeOffYears} years</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Strategy Recommendation</h4>
                    <div className="space-y-2 text-sm">
                      {calculations.isWorthwhile ? (
                        <>
                          <div className="flex items-center text-green-700">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Salary sacrifice recommended</span>
                          </div>
                          <p>You save {fmtMoney(calculations.savings.totalAnnualSaving)} annually while building retirement savings.</p>
                          <p>Particularly beneficial if unlikely to repay loan in full before write-off.</p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center text-amber-700">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Limited benefit at this salary level</span>
                          </div>
                          <p>Consider increasing pension contribution or exploring other tax-efficient savings.</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-green max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">How Salary Sacrifice Affects Student Loan Repayments</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Salary Sacrifice Benefits</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Reduces contractual salary for student loan calculations</li>
                <li>• Saves on income tax, National Insurance, and student loans</li>
                <li>• Builds retirement savings with tax relief</li>
                <li>• Particularly beneficial for those unlikely to repay in full</li>
                <li>• Can provide effective tax relief of 40%+ for higher earners</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Other Pension Methods</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Relief at Source: Contribution made post-tax with relief claimed back</li>
                <li>• Net Pay: Pre-tax deduction but after gross salary calculation</li>
                <li>• Neither affects student loan repayment calculations</li>
                <li>• Student loans calculated on original gross salary</li>
                <li>• Still provide tax relief but no student loan benefit</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Strategic Considerations</h3>
            <p className="text-gray-700 mb-4">
              Salary sacrifice is particularly beneficial for borrowers who are unlikely to repay their student loan in full
              before write-off ({plan.writeOffYears} years for {plan.name}). By reducing current repayments, you effectively
              get tax relief on money you might never have had to repay anyway.
            </p>
            <p className="text-gray-700">
              The effective rate of tax relief can be substantial: {fmtPercent(plan.repaymentRate)} student loan saving
              plus 20-45% income tax plus 12% National Insurance, potentially totaling over 40% relief on contributions.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-green-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Ready to Optimize Your Pension Strategy?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Speak with your HR department about setting up salary sacrifice pension contributions,
            or consult a financial advisor to ensure this strategy aligns with your overall financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/workplace-pensions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Learn About Workplace Pensions
            </a>
            <a
              href="https://www.gov.uk/tax-on-your-private-pension"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-green-800 transition-colors text-sm sm:text-base"
            >
              Understand Pension Tax Relief
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PensionSalarySacrificeCalculator;