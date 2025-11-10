"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface EmploymentType {
  id: string;
  name: string;
  description: string;
  features: string[];
}

interface CISStatus {
  id: string;
  name: string;
  deductionRate: number;
  description: string;
}

interface StudentLoanPlan {
  id: string;
  name: string;
  threshold: number;
  rate: number;
}

interface IncomeSource {
  type: 'CIS' | 'PAYE' | 'TRADING' | 'DIVIDEND' | 'OTHER';
  label: string;
  gross: number;
  expenses?: number;
  deductions?: number;
  net: number;
}

interface StudentLoanCalculation {
  totalIncome: number;
  incomeAboveThreshold: number;
  ugLiability: number;
  pgLiability: number;
  combinedLiability: number;
  payeDeductions: number;
  balancingPayment: number;
  monthlyEquivalent: number;
  dueDate: string;
}

interface CISAnalysis {
  grossReceipts: number;
  cisDeductions: number;
  allowableExpenses: number;
  netProfit: number;
  cisDeductionRate: number;
  taxCreditFromCIS: number;
  studentLoanSeparate: boolean;
}

interface SelfEmploymentResult {
  incomeBreakdown: IncomeSource[];
  cisAnalysis?: CISAnalysis;
  studentLoan: StudentLoanCalculation;
  planning: {
    monthlySavings: number;
    voluntaryPaymentOption: number;
    pensionOptimization: number;
    expenseOptimization: string[];
  };
  warnings: string[];
  recommendations: string[];
}

// Constants
const EMPLOYMENT_TYPES: EmploymentType[] = [
  {
    id: 'CIS_ONLY',
    name: 'CIS Subcontractor Only',
    description: 'Construction Industry Scheme worker with no other income',
    features: ['CIS tax deductions', 'Annual SA payment', 'Business expenses', 'No PAYE deductions']
  },
  {
    id: 'SOLE_TRADER',
    name: 'Sole Trader',
    description: 'Self-employed individual trading in own name',
    features: ['Business income', 'Allowable expenses', 'SA payment', 'No automatic deductions']
  },
  {
    id: 'LIMITED_COMPANY',
    name: 'Limited Company Director',
    description: 'Director taking salary and dividends',
    features: ['PAYE salary', 'Dividend income', 'SA balancing payment', 'Complex aggregation']
  },
  {
    id: 'MIXED_EMPLOYMENT',
    name: 'Mixed PAYE + Self-Employed',
    description: 'Combination of employed and self-employed income',
    features: ['PAYE deductions', 'SE income', 'SA balancing payment', 'Multiple sources']
  }
];

const CIS_STATUS_OPTIONS: CISStatus[] = [
  {
    id: 'VERIFIED',
    name: 'Verified (Registered)',
    deductionRate: 0.20,
    description: 'Registered with HMRC, 20% CIS deductions'
  },
  {
    id: 'GROSS',
    name: 'Gross Payment',
    deductionRate: 0.00,
    description: 'Gross status, no CIS deductions'
  },
  {
    id: 'UNVERIFIED',
    name: 'Unverified',
    deductionRate: 0.30,
    description: 'Not registered, 30% CIS deductions'
  }
];

const STUDENT_LOAN_PLANS: StudentLoanPlan[] = [
  { id: 'PLAN_1', name: 'Plan 1', threshold: 26065, rate: 0.09 },
  { id: 'PLAN_2', name: 'Plan 2', threshold: 28470, rate: 0.09 },
  { id: 'PLAN_4', name: 'Plan 4', threshold: 32745, rate: 0.09 },
  { id: 'PLAN_5', name: 'Plan 5', threshold: 25000, rate: 0.09 }
];

const POSTGRADUATE_LOAN = {
  threshold: 21000,
  rate: 0.06
};

const UNEARNED_INCOME_THRESHOLD = 2000;

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateCISAnalysis(
  grossReceipts: number,
  allowableExpenses: number,
  cisStatus: CISStatus
): CISAnalysis {
  const cisDeductions = grossReceipts * cisStatus.deductionRate;
  const netProfit = grossReceipts - allowableExpenses;

  return {
    grossReceipts,
    cisDeductions,
    allowableExpenses,
    netProfit,
    cisDeductionRate: cisStatus.deductionRate,
    taxCreditFromCIS: cisDeductions,
    studentLoanSeparate: true // CIS deductions don't include student loan
  };
}

function calculateStudentLoanLiability(
  totalIncome: number,
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean,
  payeDeductions: number = 0
): StudentLoanCalculation {
  const ugIncomeAboveThreshold = Math.max(0, totalIncome - ugPlan.threshold);
  const ugLiability = ugIncomeAboveThreshold * ugPlan.rate;

  const pgIncomeAboveThreshold = hasPostgraduate ? Math.max(0, totalIncome - POSTGRADUATE_LOAN.threshold) : 0;
  const pgLiability = hasPostgraduate ? pgIncomeAboveThreshold * POSTGRADUATE_LOAN.rate : 0;

  const combinedLiability = ugLiability + pgLiability;
  const balancingPayment = Math.max(0, combinedLiability - payeDeductions);
  const monthlyEquivalent = balancingPayment / 12;

  const currentYear = new Date().getFullYear();
  const taxYearEnd = new Date().getMonth() >= 3 ? currentYear + 1 : currentYear;
  const dueDate = `31 January ${taxYearEnd + 1}`;

  return {
    totalIncome,
    incomeAboveThreshold: ugIncomeAboveThreshold + pgIncomeAboveThreshold,
    ugLiability,
    pgLiability,
    combinedLiability,
    payeDeductions,
    balancingPayment,
    monthlyEquivalent,
    dueDate
  };
}

function generateIncomeSources(
  employmentType: string,
  cisGross: number,
  cisExpenses: number,
  payeSalary: number,
  tradingIncome: number,
  tradingExpenses: number,
  dividendIncome: number,
  otherIncome: number,
  cisStatus: CISStatus
): IncomeSource[] {
  const sources: IncomeSource[] = [];

  if (employmentType === 'CIS_ONLY' || employmentType === 'MIXED_EMPLOYMENT') {
    if (cisGross > 0) {
      sources.push({
        type: 'CIS',
        label: 'CIS Receipts',
        gross: cisGross,
        expenses: cisExpenses,
        deductions: cisGross * cisStatus.deductionRate,
        net: cisGross - cisExpenses
      });
    }
  }

  if (employmentType === 'LIMITED_COMPANY' || employmentType === 'MIXED_EMPLOYMENT') {
    if (payeSalary > 0) {
      sources.push({
        type: 'PAYE',
        label: 'PAYE Salary',
        gross: payeSalary,
        net: payeSalary
      });
    }
    if (dividendIncome > 0) {
      sources.push({
        type: 'DIVIDEND',
        label: 'Dividend Income',
        gross: dividendIncome,
        net: dividendIncome
      });
    }
  }

  if (employmentType === 'SOLE_TRADER' || employmentType === 'MIXED_EMPLOYMENT') {
    if (tradingIncome > 0) {
      sources.push({
        type: 'TRADING',
        label: 'Trading Income',
        gross: tradingIncome,
        expenses: tradingExpenses,
        net: tradingIncome - tradingExpenses
      });
    }
  }

  if (otherIncome > 0) {
    sources.push({
      type: 'OTHER',
      label: 'Other Income',
      gross: otherIncome,
      net: otherIncome
    });
  }

  return sources;
}

function calculateSelfEmploymentResult(
  employmentType: string,
  cisGross: number,
  cisExpenses: number,
  payeSalary: number,
  tradingIncome: number,
  tradingExpenses: number,
  dividendIncome: number,
  otherIncome: number,
  cisStatus: CISStatus,
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean,
  payeSLDeductions: number
): SelfEmploymentResult {
  // Generate income sources
  const incomeBreakdown = generateIncomeSources(
    employmentType,
    cisGross,
    cisExpenses,
    payeSalary,
    tradingIncome,
    tradingExpenses,
    dividendIncome,
    otherIncome,
    cisStatus
  );

  // Calculate total income for student loan purposes
  let totalIncome = 0;

  // Apply unearned income rule
  const unearnedIncome = dividendIncome + otherIncome;

  totalIncome = incomeBreakdown.reduce((sum, source) => {
    if (source.type === 'DIVIDEND' || source.type === 'OTHER') {
      return sum + (unearnedIncome > UNEARNED_INCOME_THRESHOLD ? source.net : 0);
    }
    return sum + source.net;
  }, 0);

  // CIS Analysis (if applicable)
  let cisAnalysis: CISAnalysis | undefined;
  if (employmentType === 'CIS_ONLY' || (employmentType === 'MIXED_EMPLOYMENT' && cisGross > 0)) {
    cisAnalysis = calculateCISAnalysis(cisGross, cisExpenses, cisStatus);
  }

  // Student loan calculation
  const studentLoan = calculateStudentLoanLiability(
    totalIncome,
    ugPlan,
    hasPostgraduate,
    payeSLDeductions
  );

  // Planning calculations
  const monthlySavings = studentLoan.monthlyEquivalent;
  const voluntaryPaymentOption = studentLoan.balancingPayment * 0.9; // 90% to avoid late fees
  const pensionOptimization = Math.min(40000, totalIncome * 0.4); // Maximum pension contribution

  // Generate warnings
  const warnings: string[] = [];

  if (studentLoan.balancingPayment > 1000) {
    warnings.push(`Significant student loan payment of ${fmtMoney(studentLoan.balancingPayment)} due via Self Assessment`);
  }

  if (cisAnalysis && cisAnalysis.netProfit > ugPlan.threshold) {
    warnings.push('CIS deductions do NOT include student loan repayments - separate payment required');
  }

  if (payeSLDeductions === 0 && totalIncome > ugPlan.threshold) {
    warnings.push('No PAYE student loan deductions - full liability via Self Assessment');
  }

  if (unearnedIncome > UNEARNED_INCOME_THRESHOLD) {
    warnings.push(`Unearned income over £${UNEARNED_INCOME_THRESHOLD.toLocaleString()} threshold - all unearned income included`);
  }

  // Generate recommendations
  const recommendations: string[] = [];

  if (studentLoan.balancingPayment > 500) {
    recommendations.push(`Save ${fmtMoney(monthlySavings)} per month for your student loan payment`);
    recommendations.push('Consider making voluntary payments to SLC to avoid large SA bill');
  }

  if (employmentType === 'LIMITED_COMPANY' && payeSalary < ugPlan.threshold) {
    recommendations.push('Consider increasing salary to trigger PAYE student loan deductions');
  }

  if (cisAnalysis && cisAnalysis.cisDeductions > 0) {
    recommendations.push('Use CIS deductions as tax credits - student loan is separate payment');
  }

  const expenseOptimization = [
    'Ensure all allowable business expenses are claimed',
    'Consider equipment purchases to reduce taxable profit',
    'Track vehicle expenses and home office costs',
    'Pension contributions reduce student loan calculation'
  ];

  if (totalIncome > 50000) {
    recommendations.push('High income: consider pension contributions to reduce student loan liability');
  }

  return {
    incomeBreakdown,
    cisAnalysis,
    studentLoan,
    planning: {
      monthlySavings,
      voluntaryPaymentOption,
      pensionOptimization,
      expenseOptimization
    },
    warnings,
    recommendations
  };
}

const CISSelfEmployedEstimator: React.FC = () => {
  const [employmentType, setEmploymentType] = useState<string>('CIS_ONLY');
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);

  // CIS specific
  const [cisGross, setCisGross] = useState<number>(40000);
  const [cisExpenses, setCisExpenses] = useState<number>(8000);
  const [cisStatus, setCisStatus] = useState<string>('VERIFIED');

  // Other income types
  const [payeSalary, setPayeSalary] = useState<number>(12000);
  const [tradingIncome, setTradingIncome] = useState<number>(30000);
  const [tradingExpenses, setTradingExpenses] = useState<number>(6000);
  const [dividendIncome, setDividendIncome] = useState<number>(15000);
  const [otherIncome, setOtherIncome] = useState<number>(2500);

  // PAYE deductions
  const [payeSLDeductions, setPayeSLDeductions] = useState<number>(0);

  const ugPlan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan)!;
  const selectedCisStatus = CIS_STATUS_OPTIONS.find(s => s.id === cisStatus)!;
  const selectedEmploymentType = EMPLOYMENT_TYPES.find(e => e.id === employmentType)!;

  const result: SelfEmploymentResult = useMemo(() => {
    return calculateSelfEmploymentResult(
      employmentType,
      cisGross,
      cisExpenses,
      payeSalary,
      tradingIncome,
      tradingExpenses,
      dividendIncome,
      otherIncome,
      selectedCisStatus,
      ugPlan,
      hasPostgraduate,
      payeSLDeductions
    );
  }, [
    employmentType,
    cisGross,
    cisExpenses,
    payeSalary,
    tradingIncome,
    tradingExpenses,
    dividendIncome,
    otherIncome,
    selectedCisStatus,
    ugPlan,
    hasPostgraduate,
    payeSLDeductions
  ]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">CIS/Self-Employed Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              CIS/Self-Employed Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Calculate your student loan liability for CIS subcontractors, sole traders, and company directors.
              Plan for Self Assessment payments and understand CIS deduction interactions.
            </p>
          </div>
        </section>

        {/* CIS Warning */}
        {result.cisAnalysis && result.studentLoan.balancingPayment > 500 && (
          <section className="max-w-6xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base sm:text-lg font-medium text-red-800">Critical CIS Alert!</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p className="mb-2">
                      <strong>CIS tax deductions:</strong> {fmtMoney(result.cisAnalysis.cisDeductions)}
                      (applied to your income tax bill)
                    </p>
                    <p className="mb-2">
                      <strong>Student loan liability:</strong> {fmtMoney(result.studentLoan.balancingPayment)}
                      (separate payment via Self Assessment)
                    </p>
                    <p className="text-xs sm:text-sm">
                      <strong>Important:</strong> CIS deductions do NOT cover student loan repayments.
                      You need to pay student loans separately by {result.studentLoan.dueDate}.
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
              <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-yellow-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Self-Employed Student Loans</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      No automatic PAYE deductions - you must plan for annual payments via Self Assessment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <select
                  value={employmentType}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEmploymentType(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                >
                  {EMPLOYMENT_TYPES.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {selectedEmploymentType.description}
                </p>
              </div>

              {/* Student Loan Configuration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                >
                  {STUDENT_LOAN_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {fmtMoney(plan.threshold)} threshold
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={hasPostgraduate}
                    onChange={(e) => setHasPostgraduate(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  I also have a postgraduate loan
                </label>
              </div>

              {/* CIS Income (if applicable) */}
              {(employmentType === 'CIS_ONLY' || employmentType === 'MIXED_EMPLOYMENT') && (
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-medium text-gray-800 text-sm sm:text-base">CIS Income</h4>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">CIS Status</label>
                    <select
                      value={cisStatus}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCisStatus(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                    >
                      {CIS_STATUS_OPTIONS.map((status) => (
                        <option key={status.id} value={status.id}>
                          {status.name} - {fmtPercent(status.deductionRate)}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">{selectedCisStatus.description}</p>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Annual CIS Gross Receipts</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        value={cisGross}
                        onChange={(e) => setCisGross(Number(e.target.value) || 0)}
                        min={0}
                        max={200000}
                        step={1000}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      CIS deductions: {fmtMoney(cisGross * selectedCisStatus.deductionRate)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Allowable Business Expenses</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        value={cisExpenses}
                        onChange={(e) => setCisExpenses(Number(e.target.value) || 0)}
                        min={0}
                        max={50000}
                        step={500}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Net profit: {fmtMoney(cisGross - cisExpenses)}
                    </p>
                  </div>
                </div>
              )}

              {/* PAYE Income (if applicable) */}
              {(employmentType === 'LIMITED_COMPANY' || employmentType === 'MIXED_EMPLOYMENT') && (
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-medium text-gray-800 text-sm sm:text-base">PAYE Income</h4>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Annual PAYE Salary</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        value={payeSalary}
                        onChange={(e) => setPayeSalary(Number(e.target.value) || 0)}
                        min={0}
                        max={100000}
                        step={1000}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Student Loan PAYE Deductions</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        value={payeSLDeductions}
                        onChange={(e) => setPayeSLDeductions(Number(e.target.value) || 0)}
                        min={0}
                        max={5000}
                        step={100}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">From P60/payslips (annual total)</p>
                  </div>
                </div>
              )}

              {/* Trading Income (if applicable) */}
              {(employmentType === 'SOLE_TRADER' || employmentType === 'MIXED_EMPLOYMENT') && (
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-medium text-gray-800 text-sm sm:text-base">Trading Income</h4>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Annual Gross Trading Income</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        value={tradingIncome}
                        onChange={(e) => setTradingIncome(Number(e.target.value) || 0)}
                        min={0}
                        max={200000}
                        step={1000}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Business Expenses</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        value={tradingExpenses}
                        onChange={(e) => setTradingExpenses(Number(e.target.value) || 0)}
                        min={0}
                        max={50000}
                        step={500}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Net profit: {fmtMoney(tradingIncome - tradingExpenses)}
                    </p>
                  </div>
                </div>
              )}

              {/* Dividend Income (if applicable) */}
              {employmentType === 'LIMITED_COMPANY' && (
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Annual Dividend Income</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      value={dividendIncome}
                      onChange={(e) => setDividendIncome(Number(e.target.value) || 0)}
                      min={0}
                      max={100000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Investment income (unearned)</p>
                </div>
              )}

              {/* Other Income */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Other Annual Income</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(Number(e.target.value) || 0)}
                    min={0}
                    max={50000}
                    step={500}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-sm"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Rental, investment, other income</p>
              </div>

              {/* Quick Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Quick Summary</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Total income:</span>
                    <span className="font-medium">{fmtMoney(result.studentLoan.totalIncome)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SL payment due:</span>
                    <span className="font-medium">{fmtMoney(result.studentLoan.balancingPayment)}</span>
                  </div>
                  <div className="flex justify-between text-xs border-t pt-1">
                    <span>Monthly savings:</span>
                    <span className="font-medium">{fmtMoney(result.planning.monthlySavings)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Income Breakdown */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Income Analysis</h2>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-1 sm:px-2">Income Source</th>
                          <th className="text-right py-2 px-1 sm:px-2">Gross</th>
                          <th className="text-right py-2 px-1 sm:px-2 hidden sm:table-cell">Expenses</th>
                          <th className="text-right py-2 px-1 sm:px-2 hidden md:table-cell">Deductions</th>
                          <th className="text-right py-2 px-1 sm:px-2">Net (for SL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.incomeBreakdown.map((source, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-2 px-1 sm:px-2 font-medium">{source.label}</td>
                            <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(source.gross)}</td>
                            <td className="text-right py-2 px-1 sm:px-2 hidden sm:table-cell">
                              {source.expenses ? fmtMoney(source.expenses) : '-'}
                            </td>
                            <td className="text-right py-2 px-1 sm:px-2 hidden md:table-cell">
                              {source.deductions ? fmtMoney(source.deductions) : '-'}
                            </td>
                            <td className="text-right py-2 px-1 sm:px-2 font-medium">{fmtMoney(source.net)}</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 px-1 sm:px-2">Total for Student Loan</td>
                          <td className="text-right py-2 px-1 sm:px-2">-</td>
                          <td className="text-right py-2 px-1 sm:px-2 hidden sm:table-cell">-</td>
                          <td className="text-right py-2 px-1 sm:px-2 hidden md:table-cell">-</td>
                          <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(result.studentLoan.totalIncome)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* CIS Analysis (if applicable) */}
              {result.cisAnalysis && (
                <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border border-orange-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">CIS Analysis</h3>

                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">CIS Breakdown</h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span>Gross CIS receipts:</span>
                          <span>{fmtMoney(result.cisAnalysis.grossReceipts)}</span>
                        </div>
                        <div className="flex justify-between text-red-700">
                          <span>CIS deductions ({fmtPercent(result.cisAnalysis.cisDeductionRate)}):</span>
                          <span>-{fmtMoney(result.cisAnalysis.cisDeductions)}</span>
                        </div>
                        <div className="flex justify-between text-red-700">
                          <span>Business expenses:</span>
                          <span>-{fmtMoney(result.cisAnalysis.allowableExpenses)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold">
                          <span>Net profit (taxable):</span>
                          <span>{fmtMoney(result.cisAnalysis.netProfit)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Important Notes</h4>
                      <div className="bg-white p-3 rounded border text-xs sm:text-sm text-gray-700">
                        <ul className="space-y-1">
                          <li>• CIS deductions = tax credits for income tax</li>
                          <li>• Student loan calculated on net profit</li>
                          <li>• SL payment separate from CIS system</li>
                          <li>• Both due via Self Assessment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Student Loan Calculation */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Student Loan Calculation</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Liability Calculation</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Total income for SL:</span>
                        <span>{fmtMoney(result.studentLoan.totalIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{ugPlan.name} threshold:</span>
                        <span>{fmtMoney(ugPlan.threshold)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Income above threshold:</span>
                        <span>{fmtMoney(Math.max(0, result.studentLoan.totalIncome - ugPlan.threshold))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>UG liability ({fmtPercent(ugPlan.rate)}):</span>
                        <span className="font-medium">{fmtMoney(result.studentLoan.ugLiability)}</span>
                      </div>
                      {hasPostgraduate && (
                        <>
                          <div className="flex justify-between">
                            <span>PG liability ({fmtPercent(POSTGRADUATE_LOAN.rate)}):</span>
                            <span className="font-medium">{fmtMoney(result.studentLoan.pgLiability)}</span>
                          </div>
                        </>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total liability:</span>
                        <span>{fmtMoney(result.studentLoan.combinedLiability)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Payment Details</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>PAYE deductions made:</span>
                        <span>-{fmtMoney(result.studentLoan.payeDeductions)}</span>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded border">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-yellow-700">
                            {fmtMoney(result.studentLoan.balancingPayment)}
                          </div>
                          <div className="text-xs sm:text-sm text-yellow-600">Due via Self Assessment</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Payment deadline: {result.studentLoan.dueDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly equivalent:</span>
                        <span className="font-medium">{fmtMoney(result.studentLoan.monthlyEquivalent)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planning Tools */}
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Planning & Optimization</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Monthly Planning</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-green-700">
                            {fmtMoney(result.planning.monthlySavings)}
                          </div>
                          <div className="text-xs sm:text-sm text-green-600">Save Monthly</div>
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span>Voluntary payment option:</span>
                          <span className="font-medium">{fmtMoney(result.planning.voluntaryPaymentOption)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Pay 90% directly to SLC to avoid SA late fees
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Optimization Strategies</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Max pension contribution:</span>
                        <span className="font-medium">{fmtMoney(result.planning.pensionOptimization)}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Pension contributions reduce your student loan calculation
                      </p>

                      <div className="mt-3">
                        <h5 className="font-medium text-gray-700 mb-1 text-xs sm:text-sm">Expense Optimization:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {result.planning.expenseOptimization.map((tip, index) => (
                            <li key={index}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warnings */}
              {result.warnings.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-3">Important Warnings</h3>
                  <ul className="space-y-2">
                    {result.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm text-red-700">
                        <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations */}
              {result.recommendations.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm text-blue-700">
                        <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-yellow max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Self-Employed Student Loans</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">CIS Subcontractors</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• CIS deductions are income tax credits only</li>
                <li>• Student loans calculated separately on net profit</li>
                <li>• Both payments due via Self Assessment</li>
                <li>• No automatic student loan deductions</li>
                <li>• Must plan for annual payment by 31 January</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Company Directors</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• PAYE salary may trigger some deductions</li>
                <li>• Dividends count as unearned income</li>
                <li>• Combined income determines total liability</li>
                <li>• Balancing payment via Self Assessment</li>
                <li>• Salary vs dividend optimization possible</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Key Planning Points</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">No automatic deductions:</p>
                <p>Unlike employees, self-employed individuals must actively plan and save for student loan payments. There are no automatic monthly deductions from your income.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Annual payment shock:</p>
                <p>Student loan payments of £{result.studentLoan.balancingPayment.toLocaleString()} can be a significant shock if not planned for throughout the year.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Expense planning:</p>
                <p>Business expenses reduce your taxable profit and therefore your student loan liability. Ensure all allowable expenses are claimed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-yellow-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Planning Your Self-Employed Student Loan Payments?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Self-employed student loan planning is crucial to avoid unexpected bills.
            Get professional guidance on managing your obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/self-assessment-tax-returns"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-yellow-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Self Assessment Guidance
            </a>
            <a
              href="https://www.gov.uk/what-is-the-construction-industry-scheme"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-yellow-800 transition-colors text-sm sm:text-base"
            >
              CIS Information
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CISSelfEmployedEstimator;