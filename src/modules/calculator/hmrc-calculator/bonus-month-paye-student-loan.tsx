"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface TaxCode {
  code: string;
  personalAllowance: number;
  description: string;
}

interface TaxBand {
  name: string;
  threshold: number;
  rate: number;
  limit?: number;
}

interface StudentLoanPlan {
  id: string;
  name: string;
  monthlyThreshold: number;
  annualThreshold: number;
  rate: number;
}

interface PayrollCalculation {
  grossPay: number;
  taxDeduction: number;
  niDeduction: number;
  ugStudentLoan: number;
  pgStudentLoan: number;
  totalDeductions: number;
  netPay: number;
  effectiveRate: number;
}

interface BonusAnalysis {
  normalMonth: PayrollCalculation;
  bonusMonth: PayrollCalculation;
  bonusBreakdown: {
    grossBonus: number;
    taxOnBonus: number;
    niOnBonus: number;
    ugSLOnBonus: number;
    pgSLOnBonus: number;
    totalDeductionsOnBonus: number;
    netBonus: number;
    effectiveDeductionRate: number;
  };
  comparison: {
    additionalTax: number;
    additionalNI: number;
    additionalUGSL: number;
    additionalPGSL: number;
    totalAdditional: number;
  };
}

// Constants for 2024/25 tax year
const TAX_CODES: TaxCode[] = [
  { code: '1257L', personalAllowance: 12570, description: 'Standard personal allowance' },
  { code: '1250L', personalAllowance: 12500, description: 'Reduced personal allowance' },
  { code: '1000L', personalAllowance: 10000, description: 'Further reduced allowance' },
  { code: 'BR', personalAllowance: 0, description: 'Basic rate (20%) - no allowance' },
  { code: '0T', personalAllowance: 0, description: 'No personal allowance' }
];

const ENGLAND_TAX_BANDS: TaxBand[] = [
  { name: 'Personal Allowance', threshold: 0, rate: 0, limit: 12570 },
  { name: 'Basic Rate', threshold: 12570, rate: 0.20, limit: 50270 },
  { name: 'Higher Rate', threshold: 50270, rate: 0.40, limit: 125140 },
  { name: 'Additional Rate', threshold: 125140, rate: 0.45 }
];

const SCOTLAND_TAX_BANDS: TaxBand[] = [
  { name: 'Personal Allowance', threshold: 0, rate: 0, limit: 12570 },
  { name: 'Starter Rate', threshold: 12570, rate: 0.19, limit: 14876 },
  { name: 'Basic Rate', threshold: 14876, rate: 0.20, limit: 26561 },
  { name: 'Intermediate Rate', threshold: 26561, rate: 0.21, limit: 43662 },
  { name: 'Higher Rate', threshold: 43662, rate: 0.42, limit: 125140 },
  { name: 'Additional Rate', threshold: 125140, rate: 0.47 }
];

const NI_BANDS = [
  { threshold: 0, rate: 0, limit: 12570 }, // Below primary threshold
  { threshold: 12570, rate: 0.08, limit: 50270 }, // Primary threshold to UEL - corrected to 8%
  { threshold: 50270, rate: 0.02 } // Above UEL
];

const STUDENT_LOAN_PLANS: StudentLoanPlan[] = [
  { id: 'PLAN_1', name: 'Plan 1', monthlyThreshold: 2172, annualThreshold: 26065, rate: 0.09 },
  { id: 'PLAN_2', name: 'Plan 2', monthlyThreshold: 2373, annualThreshold: 28470, rate: 0.09 },
  { id: 'PLAN_4', name: 'Plan 4', monthlyThreshold: 2729, annualThreshold: 32745, rate: 0.09 },
  { id: 'PLAN_5', name: 'Plan 5', monthlyThreshold: 2083, annualThreshold: 25000, rate: 0.09 }
];

const POSTGRADUATE_LOAN = {
  monthlyThreshold: 1750,
  annualThreshold: 21000,
  rate: 0.06
};

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

function calculateIncomeTax(
  annualGross: number,
  taxCode: TaxCode,
  isScotland: boolean = false
): number {
  const taxBands = isScotland ? SCOTLAND_TAX_BANDS : ENGLAND_TAX_BANDS;
  let tax = 0;
  let remainingIncome = Math.max(0, annualGross - taxCode.personalAllowance);

  for (const band of taxBands.slice(1)) { // Skip personal allowance band
    if (remainingIncome <= 0) break;

    const bandWidth = band.limit ? band.limit - band.threshold : Infinity;
    const taxableInThisBand = Math.min(remainingIncome, bandWidth);

    tax += taxableInThisBand * band.rate;
    remainingIncome -= taxableInThisBand;
  }

  return tax;
}

function calculateNationalInsurance(annualGross: number): number {
  let ni = 0;
  let remainingIncome = annualGross;

  for (const band of NI_BANDS) {
    if (remainingIncome <= 0) break;

    const bandWidth = band.limit ? band.limit - band.threshold : Infinity;
    const niableInThisBand = Math.min(Math.max(0, remainingIncome - band.threshold), bandWidth);

    ni += niableInThisBand * band.rate;
    remainingIncome -= niableInThisBand;
  }

  return ni;
}

function calculateStudentLoan(monthlyGross: number, plan: StudentLoanPlan): number {
  return Math.max(0, (monthlyGross - plan.monthlyThreshold) * plan.rate);
}

function calculatePostgraduateLoan(monthlyGross: number): number {
  return Math.max(0, (monthlyGross - POSTGRADUATE_LOAN.monthlyThreshold) * POSTGRADUATE_LOAN.rate);
}

function calculatePayroll(
  monthlyGross: number,
  taxCode: TaxCode,
  isScotland: boolean,
  studentLoanPlan?: StudentLoanPlan,
  hasPostgraduate: boolean = false
): PayrollCalculation {
  const annualGross = monthlyGross * 12;

  // Calculate annual amounts and convert to monthly
  const annualTax = calculateIncomeTax(annualGross, taxCode, isScotland);
  const annualNI = calculateNationalInsurance(annualGross);

  const monthlyTax = annualTax / 12;
  const monthlyNI = annualNI / 12;

  // Student loans calculated on monthly basis
  const ugStudentLoan = studentLoanPlan ? calculateStudentLoan(monthlyGross, studentLoanPlan) : 0;
  const pgStudentLoan = hasPostgraduate ? calculatePostgraduateLoan(monthlyGross) : 0;

  const totalDeductions = monthlyTax + monthlyNI + ugStudentLoan + pgStudentLoan;
  const netPay = monthlyGross - totalDeductions;
  const effectiveRate = monthlyGross > 0 ? totalDeductions / monthlyGross : 0;

  return {
    grossPay: monthlyGross,
    taxDeduction: monthlyTax,
    niDeduction: monthlyNI,
    ugStudentLoan,
    pgStudentLoan,
    totalDeductions,
    netPay,
    effectiveRate
  };
}

function analyzeBonusImpact(
  regularSalary: number,
  bonusAmount: number,
  taxCode: TaxCode,
  isScotland: boolean,
  studentLoanPlan?: StudentLoanPlan,
  hasPostgraduate: boolean = false
): BonusAnalysis {
  // Normal month calculation
  const normalMonth = calculatePayroll(regularSalary, taxCode, isScotland, studentLoanPlan, hasPostgraduate);

  // Bonus month calculation
  const bonusMonthGross = regularSalary + bonusAmount;
  const bonusMonth = calculatePayroll(bonusMonthGross, taxCode, isScotland, studentLoanPlan, hasPostgraduate);

  // Calculate what additional deductions are due to the bonus
  const additionalTax = bonusMonth.taxDeduction - normalMonth.taxDeduction;
  const additionalNI = bonusMonth.niDeduction - normalMonth.niDeduction;
  const additionalUGSL = bonusMonth.ugStudentLoan - normalMonth.ugStudentLoan;
  const additionalPGSL = bonusMonth.pgStudentLoan - normalMonth.pgStudentLoan;
  const totalAdditional = additionalTax + additionalNI + additionalUGSL + additionalPGSL;

  // Net bonus calculation
  const netBonus = bonusAmount - totalAdditional;
  const effectiveDeductionRate = bonusAmount > 0 ? totalAdditional / bonusAmount : 0;

  return {
    normalMonth,
    bonusMonth,
    bonusBreakdown: {
      grossBonus: bonusAmount,
      taxOnBonus: additionalTax,
      niOnBonus: additionalNI,
      ugSLOnBonus: additionalUGSL,
      pgSLOnBonus: additionalPGSL,
      totalDeductionsOnBonus: totalAdditional,
      netBonus,
      effectiveDeductionRate
    },
    comparison: {
      additionalTax,
      additionalNI,
      additionalUGSL,
      additionalPGSL,
      totalAdditional
    }
  };
}

const BonusCalculator: React.FC = () => {
  const [regularSalary, setRegularSalary] = useState<number>(3500);
  const [bonusAmount, setBonusAmount] = useState<number>(5000);
  const [bonusMonth, setBonusMonth] = useState<number>(11); // December
  const [selectedTaxCode, setSelectedTaxCode] = useState<string>('1257L');
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);
  const [isScotland, setIsScotland] = useState<boolean>(false);

  const taxCode = TAX_CODES.find(tc => tc.code === selectedTaxCode)!;
  const studentLoanPlan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan);

  const analysis: BonusAnalysis = useMemo(() => {
    return analyzeBonusImpact(
      regularSalary,
      bonusAmount,
      taxCode,
      isScotland,
      studentLoanPlan,
      hasPostgraduate
    );
  }, [regularSalary, bonusAmount, taxCode, isScotland, studentLoanPlan, hasPostgraduate]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Bonus Month Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Bonus Month PAYE Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand exactly how bonuses affect your PAYE deductions, especially student loans.
              See why your student loan deduction spikes dramatically in bonus months.
            </p>
          </div>
        </section>

        {/* Student Loan Shock Warning */}
        {analysis.bonusBreakdown.ugSLOnBonus > 300 && (
          <section className="max-w-6xl mx-auto">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 sm:p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base sm:text-lg font-medium text-orange-800">Significant Student Loan Impact!</h3>
                  <div className="mt-2 text-sm text-orange-700">
                    <p className="mb-2">
                      <strong>Normal month SL deduction:</strong> {fmtMoney(analysis.normalMonth.ugStudentLoan)}
                    </p>
                    <p className="mb-2">
                      <strong>Bonus month SL deduction:</strong> {fmtMoney(analysis.bonusMonth.ugStudentLoan)}
                    </p>
                    <p className="mb-2">
                      <strong>Extra SL deduction due to bonus:</strong> {fmtMoney(analysis.bonusBreakdown.ugSLOnBonus)}
                    </p>
                    <p className="text-xs sm:text-sm">
                      Student loan deductions are calculated on your <em>total monthly income</em> including bonuses,
                      which can dramatically increase the deduction amount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">

            {/* Input Panel */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-cyan-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-cyan-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Bonus Impact</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Bonuses are added to your regular monthly income for PAYE calculations,
                      often pushing you into higher tax bands and dramatically increasing student loan deductions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regular Salary */}
              <div>
                <label htmlFor="regularSalary" className="block text-sm font-medium text-gray-700 mb-1">
                  Regular Monthly Salary (Gross)
                </label>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="regularSalary"
                    min={1500}
                    max={15000}
                    step={100}
                    value={regularSalary}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegularSalary(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={2000}
                    max={8000}
                    step={100}
                    value={regularSalary}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegularSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Annual: {fmtMoney(regularSalary * 12)}
                </p>
              </div>

              {/* Bonus Amount */}
              <div>
                <label htmlFor="bonusAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Bonus Amount (Gross)
                </label>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="bonusAmount"
                    min={500}
                    max={50000}
                    step={250}
                    value={bonusAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBonusAmount(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={1000}
                    max={20000}
                    step={500}
                    value={bonusAmount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBonusAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Combined monthly income: {fmtMoney(regularSalary + bonusAmount)}
                </p>
              </div>

              {/* Bonus Month */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bonus Payment Month
                </label>
                <select
                  value={bonusMonth}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBonusMonth(Number(e.target.value))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-sm"
                >
                  {MONTHS.map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Month affects cumulative tax calculations
                </p>
              </div>

              {/* Tax Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Code
                </label>
                <select
                  value={selectedTaxCode}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTaxCode(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-sm"
                >
                  {TAX_CODES.map((tc) => (
                    <option key={tc.code} value={tc.code}>
                      {tc.code} - {tc.description}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Personal allowance: {fmtMoney(taxCode.personalAllowance)}
                </p>
              </div>

              {/* Location */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={isScotland}
                    onChange={(e) => setIsScotland(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  Scottish resident
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  {isScotland ? 'Scottish income tax rates apply' : 'England, Wales & NI tax rates apply'}
                </p>
              </div>

              {/* Student Loan Plan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-sm"
                >
                  {STUDENT_LOAN_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {fmtMoney(plan.monthlyThreshold)}/month
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {fmtPercent(studentLoanPlan?.rate || 0)} above {fmtMoney(studentLoanPlan?.monthlyThreshold || 0)}
                </p>
              </div>

              {/* Postgraduate Loan */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={hasPostgraduate}
                    onChange={(e) => setHasPostgraduate(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  I also have a postgraduate loan
                </label>
                {hasPostgraduate && (
                  <p className="mt-1 text-xs text-gray-500">
                    6% above {fmtMoney(POSTGRADUATE_LOAN.monthlyThreshold)}/month
                  </p>
                )}
              </div>

              {/* Quick Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Quick Impact</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Gross bonus:</span>
                    <span className="font-medium">{fmtMoney(bonusAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net bonus:</span>
                    <span className="font-medium">{fmtMoney(analysis.bonusBreakdown.netBonus)}</span>
                  </div>
                  <div className="flex justify-between text-xs border-t pt-1">
                    <span>Take-home rate:</span>
                    <span className="font-medium">
                      {fmtPercent(1 - analysis.bonusBreakdown.effectiveDeductionRate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Side-by-Side Comparison */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Normal vs Bonus Month Comparison</h2>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Normal Month */}
                  <div className="bg-white p-3 sm:p-4 rounded-lg border">
                    <h3 className="font-medium text-gray-800 mb-3 text-center text-sm sm:text-base">Normal Month</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Gross Pay:</span>
                        <span className="font-medium">{fmtMoney(analysis.normalMonth.grossPay)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Income Tax:</span>
                        <span>-{fmtMoney(analysis.normalMonth.taxDeduction)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>National Insurance:</span>
                        <span>-{fmtMoney(analysis.normalMonth.niDeduction)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Student Loan:</span>
                        <span>-{fmtMoney(analysis.normalMonth.ugStudentLoan)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between text-red-700">
                          <span>Postgraduate Loan:</span>
                          <span>-{fmtMoney(analysis.normalMonth.pgStudentLoan)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Net Pay:</span>
                        <span className="text-green-700">{fmtMoney(analysis.normalMonth.netPay)}</span>
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        Effective rate: {fmtPercent(analysis.normalMonth.effectiveRate)}
                      </div>
                    </div>
                  </div>

                  {/* Bonus Month */}
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-gray-800 mb-3 text-center text-sm sm:text-base">Bonus Month</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Gross Pay:</span>
                        <span className="font-medium">{fmtMoney(analysis.bonusMonth.grossPay)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Income Tax:</span>
                        <span>-{fmtMoney(analysis.bonusMonth.taxDeduction)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>National Insurance:</span>
                        <span>-{fmtMoney(analysis.bonusMonth.niDeduction)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Student Loan:</span>
                        <span>-{fmtMoney(analysis.bonusMonth.ugStudentLoan)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between text-red-700">
                          <span>Postgraduate Loan:</span>
                          <span>-{fmtMoney(analysis.bonusMonth.pgStudentLoan)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Net Pay:</span>
                        <span className="text-green-700">{fmtMoney(analysis.bonusMonth.netPay)}</span>
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        Effective rate: {fmtPercent(analysis.bonusMonth.effectiveRate)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus Breakdown */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Bonus Impact Breakdown</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Deductions on Bonus</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Gross Bonus:</span>
                        <span className="font-medium text-green-700">{fmtMoney(analysis.bonusBreakdown.grossBonus)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Additional Tax:</span>
                        <span>-{fmtMoney(analysis.bonusBreakdown.taxOnBonus)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Additional NI:</span>
                        <span>-{fmtMoney(analysis.bonusBreakdown.niOnBonus)}</span>
                      </div>
                      <div className="flex justify-between text-red-700">
                        <span>Additional Student Loan:</span>
                        <span>-{fmtMoney(analysis.bonusBreakdown.ugSLOnBonus)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between text-red-700">
                          <span>Additional PG Loan:</span>
                          <span>-{fmtMoney(analysis.bonusBreakdown.pgSLOnBonus)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Net Bonus Received:</span>
                        <span className="text-green-700">{fmtMoney(analysis.bonusBreakdown.netBonus)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Bonus Deduction Rates</h4>
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-red-700">
                            {fmtPercent(analysis.bonusBreakdown.effectiveDeductionRate)}
                          </div>
                          <div className="text-xs sm:text-sm text-red-600">Total Deduction Rate</div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span>Tax rate on bonus:</span>
                          <span>{fmtPercent(analysis.bonusBreakdown.taxOnBonus / bonusAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NI rate on bonus:</span>
                          <span>{fmtPercent(analysis.bonusBreakdown.niOnBonus / bonusAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SL rate on bonus:</span>
                          <span>{fmtPercent(analysis.bonusBreakdown.ugSLOnBonus / bonusAmount)}</span>
                        </div>
                        {hasPostgraduate && (
                          <div className="flex justify-between">
                            <span>PG rate on bonus:</span>
                            <span>{fmtPercent(analysis.bonusBreakdown.pgSLOnBonus / bonusAmount)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Loan Impact Focus */}
              <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border border-orange-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Student Loan Impact Analysis</h3>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-4">
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">{fmtMoney(analysis.normalMonth.ugStudentLoan)}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Normal Month SL</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-orange-700">{fmtMoney(analysis.bonusMonth.ugStudentLoan)}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Bonus Month SL</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-red-700">{fmtMoney(analysis.bonusBreakdown.ugSLOnBonus)}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Extra Due to Bonus</div>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded border text-xs sm:text-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Why Student Loan Deductions Spike</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Student loans are calculated on <strong>total monthly income</strong> including bonuses</li>
                    <li>• Your combined income of {fmtMoney(regularSalary + bonusAmount)} is well above the {fmtMoney(studentLoanPlan?.monthlyThreshold || 0)} threshold</li>
                    <li>• The extra {fmtMoney(bonusAmount)} income triggers {fmtPercent(studentLoanPlan?.rate || 0)} = {fmtMoney(bonusAmount * (studentLoanPlan?.rate || 0))} additional SL deduction</li>
                    <li>• This is correct and not an overpayment - it reflects your higher income that month</li>
                  </ul>
                </div>
              </div>

              {/* Visual Bonus Breakdown */}
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Where Your {fmtMoney(bonusAmount)} Bonus Goes</h3>

                <div className="space-y-3">
                  {/* Tax */}
                  <div className="flex items-center">
                    <div className="w-16 sm:w-24 text-xs sm:text-sm text-gray-600">Tax:</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 mr-2 sm:mr-3">
                      <div
                        className="bg-red-500 h-5 sm:h-6 rounded-full flex items-center justify-center text-white text-xs"
                        style={{ width: `${(analysis.bonusBreakdown.taxOnBonus / bonusAmount) * 100}%` }}
                      >
                        <span className="hidden sm:inline">{fmtPercent(analysis.bonusBreakdown.taxOnBonus / bonusAmount)}</span>
                      </div>
                    </div>
                    <div className="w-16 sm:w-20 text-right text-xs sm:text-sm font-medium">{fmtMoney(analysis.bonusBreakdown.taxOnBonus)}</div>
                  </div>

                  {/* NI */}
                  <div className="flex items-center">
                    <div className="w-16 sm:w-24 text-xs sm:text-sm text-gray-600">NI:</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 mr-2 sm:mr-3">
                      <div
                        className="bg-orange-500 h-5 sm:h-6 rounded-full flex items-center justify-center text-white text-xs"
                        style={{ width: `${(analysis.bonusBreakdown.niOnBonus / bonusAmount) * 100}%` }}
                      >
                        <span className="hidden sm:inline">{fmtPercent(analysis.bonusBreakdown.niOnBonus / bonusAmount)}</span>
                      </div>
                    </div>
                    <div className="w-16 sm:w-20 text-right text-xs sm:text-sm font-medium">{fmtMoney(analysis.bonusBreakdown.niOnBonus)}</div>
                  </div>

                  {/* Student Loan */}
                  <div className="flex items-center">
                    <div className="w-16 sm:w-24 text-xs sm:text-sm text-gray-600">Student Loan:</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 mr-2 sm:mr-3">
                      <div
                        className="bg-purple-500 h-5 sm:h-6 rounded-full flex items-center justify-center text-white text-xs"
                        style={{ width: `${(analysis.bonusBreakdown.ugSLOnBonus / bonusAmount) * 100}%` }}
                      >
                        <span className="hidden sm:inline">{fmtPercent(analysis.bonusBreakdown.ugSLOnBonus / bonusAmount)}</span>
                      </div>
                    </div>
                    <div className="w-16 sm:w-20 text-right text-xs sm:text-sm font-medium">{fmtMoney(analysis.bonusBreakdown.ugSLOnBonus)}</div>
                  </div>

                  {/* PG Loan */}
                  {hasPostgraduate && (
                    <div className="flex items-center">
                      <div className="w-16 sm:w-24 text-xs sm:text-sm text-gray-600">PG Loan:</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 mr-2 sm:mr-3">
                        <div
                          className="bg-pink-500 h-5 sm:h-6 rounded-full flex items-center justify-center text-white text-xs"
                          style={{ width: `${(analysis.bonusBreakdown.pgSLOnBonus / bonusAmount) * 100}%` }}
                        >
                          <span className="hidden sm:inline">{fmtPercent(analysis.bonusBreakdown.pgSLOnBonus / bonusAmount)}</span>
                        </div>
                      </div>
                      <div className="w-16 sm:w-20 text-right text-xs sm:text-sm font-medium">{fmtMoney(analysis.bonusBreakdown.pgSLOnBonus)}</div>
                    </div>
                  )}

                  {/* Net Amount */}
                  <div className="flex items-center border-t pt-3">
                    <div className="w-16 sm:w-24 text-xs sm:text-sm font-semibold text-gray-800">Take Home:</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 mr-2 sm:mr-3">
                      <div
                        className="bg-green-500 h-5 sm:h-6 rounded-full flex items-center justify-center text-white text-xs"
                        style={{ width: `${(analysis.bonusBreakdown.netBonus / bonusAmount) * 100}%` }}
                      >
                        <span className="hidden sm:inline">{fmtPercent(analysis.bonusBreakdown.netBonus / bonusAmount)}</span>
                      </div>
                    </div>
                    <div className="w-16 sm:w-20 text-right text-xs sm:text-sm font-bold text-green-700">{fmtMoney(analysis.bonusBreakdown.netBonus)}</div>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Key Insights</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Why Deductions Are High</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Bonuses are treated as regular income for that month</li>
                      <li>• All PAYE deductions calculated on combined monthly total</li>
                      <li>• Student loans especially impacted due to monthly calculation</li>
                      <li>• Higher total income may push you into higher tax bands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Is This Correct?</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Yes - these deductions are correct, not errors</li>
                      <li>• Reflects your actual higher income for that month</li>
                      <li>• No refund due unless you&apos;ve genuinely overpaid for the year</li>
                      <li>• Consider impact when negotiating bonus amounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-cyan max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Bonus Month PAYE</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-cyan-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">How PAYE Works with Bonuses</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Bonuses added to regular pay for that month</li>
                <li>• All deductions calculated on combined amount</li>
                <li>• Student loan thresholds applied to total monthly income</li>
                <li>• Can push you into higher tax brackets temporarily</li>
                <li>• Deductions reflect actual higher income that month</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Student Loan Impact</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Most dramatic impact on bonus deductions</li>
                <li>• Calculated at 9% of amount above monthly threshold</li>
                <li>• Large bonuses can trigger hundreds in SL deductions</li>
                <li>• Often overlooked when calculating bonus value</li>
                <li>• Correct calculation, not an overpayment</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Planning for Bonus Payments</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">Consider the true cost:</p>
                <p>A £{bonusAmount.toLocaleString()} bonus may only net you £{analysis.bonusBreakdown.netBonus.toLocaleString()} after all deductions - that&apos;s just {fmtPercent(1 - analysis.bonusBreakdown.effectiveDeductionRate)} of the gross amount.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Salary sacrifice alternatives:</p>
                <p>Consider whether pension contributions, cycle-to-work schemes, or other salary sacrifice options might be more tax-efficient than cash bonuses.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Spread over multiple months:</p>
                <p>Some employers allow spreading bonuses across multiple months, which can reduce the student loan impact by keeping monthly income closer to thresholds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-cyan-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Surprised by Bonus Deductions?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Bonus month deductions can be shocking, especially student loan amounts.
            Understanding how PAYE works helps you plan better and avoid surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/government/statistics/student-loan-repayments-via-paye-eligible-for-refund-tax-year-202425"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              PAYE Information
            </a>
            <a
              href="https://www.gov.uk/repaying-your-student-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-cyan-800 transition-colors text-sm sm:text-base"
            >
              Student Loan Guidance
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BonusCalculator;