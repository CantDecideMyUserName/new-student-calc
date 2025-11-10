"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  id: string;
  name: string;
  threshold: number;
  repaymentRate: number;
  description: string;
}

interface IncomeSource {
  id: string;
  label: string;
  amount: number;
  isPAYE: boolean;
  description: string;
}

interface PAYEDeductions {
  ugRepayments: number;
  pgRepayments: number;
  source: string;
}

interface SelfAssessmentIncome {
  payeEmployment: number;
  selfEmployment: number;
  propertyIncome: number;
  unearnedIncome: number;
  totalIncome: number;
  unearnedIncomeIncluded: number;
}

interface StudentLoanLiability {
  ugLiability: number;
  pgLiability: number;
  combinedLiability: number;
  ugIncomeAboveThreshold: number;
  pgIncomeAboveThreshold: number;
}

interface BalancingPayment {
  ugBalancing: number;
  pgBalancing: number;
  totalBalancing: number;
  monthlyEquivalent: number;
  dueDate: string;
  isSignificant: boolean;
}

interface SACalculationResult {
  income: SelfAssessmentIncome;
  liability: StudentLoanLiability;
  payeDeductions: PAYEDeductions;
  balancingPayment: BalancingPayment;
  warnings: string[];
  recommendations: string[];
}

// Constants
const LOAN_PLANS: LoanPlan[] = [
  {
    id: 'PLAN_1',
    name: 'Plan 1',
    threshold: 26065,
    repaymentRate: 0.09,
    description: 'Pre-2012 students (England/Wales) or Northern Ireland students'
  },
  {
    id: 'PLAN_2',
    name: 'Plan 2',
    threshold: 28470,
    repaymentRate: 0.09,
    description: '2012-2023 students (England/Wales)'
  },
  {
    id: 'PLAN_4',
    name: 'Plan 4',
    threshold: 32745,
    repaymentRate: 0.09,
    description: 'Scottish students (all years)'
  },
  {
    id: 'PLAN_5',
    name: 'Plan 5',
    threshold: 25000,
    repaymentRate: 0.09,
    description: 'England students from August 2023'
  }
];

const POSTGRADUATE_THRESHOLD = 21000;
const POSTGRADUATE_RATE = 0.06;
const UNEARNED_INCOME_THRESHOLD = 2000;

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateSelfAssessmentIncome(
  payeEmployment: number,
  selfEmployment: number,
  propertyIncome: number,
  unearnedIncome: number
): SelfAssessmentIncome {
  // Unearned income rule: if over £2,000, all unearned income is included
  const unearnedIncomeIncluded = unearnedIncome > UNEARNED_INCOME_THRESHOLD ? unearnedIncome : 0;

  const totalIncome = payeEmployment + selfEmployment + propertyIncome + unearnedIncomeIncluded;

  return {
    payeEmployment,
    selfEmployment,
    propertyIncome,
    unearnedIncome,
    totalIncome,
    unearnedIncomeIncluded
  };
}

function calculateStudentLoanLiability(
  totalIncome: number,
  ugPlan: LoanPlan,
  hasPostgraduateLoan: boolean
): StudentLoanLiability {
  // UG loan liability
  const ugIncomeAboveThreshold = Math.max(0, totalIncome - ugPlan.threshold);
  const ugLiability = ugIncomeAboveThreshold * ugPlan.repaymentRate;

  // PG loan liability
  let pgIncomeAboveThreshold = 0;
  let pgLiability = 0;

  if (hasPostgraduateLoan) {
    pgIncomeAboveThreshold = Math.max(0, totalIncome - POSTGRADUATE_THRESHOLD);
    pgLiability = pgIncomeAboveThreshold * POSTGRADUATE_RATE;
  }

  const combinedLiability = ugLiability + pgLiability;

  return {
    ugLiability,
    pgLiability,
    combinedLiability,
    ugIncomeAboveThreshold,
    pgIncomeAboveThreshold
  };
}

function calculateBalancingPayment(
  liability: StudentLoanLiability,
  payeDeductions: PAYEDeductions
): BalancingPayment {
  const ugBalancing = Math.max(0, liability.ugLiability - payeDeductions.ugRepayments);
  const pgBalancing = Math.max(0, liability.pgLiability - payeDeductions.pgRepayments);
  const totalBalancing = ugBalancing + pgBalancing;
  const monthlyEquivalent = totalBalancing / 12;

  // Consider significant if over £500 or more than £50/month
  const isSignificant = totalBalancing > 500 || monthlyEquivalent > 50;

  // Due date is 31 January following the tax year end
  const currentYear = new Date().getFullYear();
  const taxYearEnd = new Date().getMonth() >= 3 ? currentYear + 1 : currentYear; // Tax year ends 5 April
  const dueDate = `31 January ${taxYearEnd + 1}`;

  return {
    ugBalancing,
    pgBalancing,
    totalBalancing,
    monthlyEquivalent,
    dueDate,
    isSignificant
  };
}

function generateWarningsAndRecommendations(
  income: SelfAssessmentIncome,
  liability: StudentLoanLiability,
  balancingPayment: BalancingPayment,
  payeDeductions: PAYEDeductions
): { warnings: string[]; recommendations: string[] } {
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // High balancing payment warning
  if (balancingPayment.totalBalancing > 1000) {
    warnings.push(`Significant balancing payment of ${fmtMoney(balancingPayment.totalBalancing)} due on ${balancingPayment.dueDate}`);
  }

  // Multiple income sources without PAYE deductions
  if (payeDeductions.ugRepayments === 0 && income.totalIncome > 30000) {
    warnings.push('No PAYE deductions made but total income exceeds most thresholds - expect substantial bill');
  }

  // Unearned income rule triggered
  if (income.unearnedIncome > UNEARNED_INCOME_THRESHOLD && income.unearnedIncomeIncluded > 0) {
    warnings.push(`All unearned income included (${fmtMoney(income.unearnedIncome)}) as it exceeds £2,000 threshold`);
  }

  // High combined liability rate
  const effectiveRate = liability.combinedLiability / Math.max(income.totalIncome, 1);
  if (effectiveRate > 0.10) {
    warnings.push(`Combined student loan liability is ${fmtPercent(effectiveRate)} of total income - very high burden`);
  }

  // Recommendations
  if (balancingPayment.totalBalancing > 500) {
    recommendations.push(`Budget ${fmtMoney(balancingPayment.monthlyEquivalent)} per month for the balancing payment`);
    recommendations.push('Consider making voluntary payments to SLC throughout the year to reduce the January bill');
  }

  if (payeDeductions.ugRepayments === 0 && income.payeEmployment > 0) {
    recommendations.push('Contact SLC about adjusting your PAYE tax code to collect repayments monthly');
  }

  if (income.selfEmployment > 10000) {
    recommendations.push('Set aside student loan repayments as part of your self-employment tax savings');
  }

  if (balancingPayment.isSignificant) {
    recommendations.push('File Self Assessment early to get advance notice of the payment due');
    recommendations.push('Consider the deadline: payment is due by 31 January with penalties for late payment');
  }

  return { warnings, recommendations };
}

const SAStudentLoanCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduateLoan, setHasPostgraduateLoan] = useState<boolean>(false);

  // Income sources
  const [payeEmployment, setPayeEmployment] = useState<number>(25000);
  const [selfEmployment, setSelfEmployment] = useState<number>(8000);
  const [propertyIncome, setPropertyIncome] = useState<number>(3000);
  const [unearnedIncome, setUnearnedIncome] = useState<number>(1500);

  // PAYE deductions already made
  const [payeUGDeductions, setPayeUGDeductions] = useState<number>(0);
  const [payePGDeductions, setPayePGDeductions] = useState<number>(0);

  const ugPlan = LOAN_PLANS.find(p => p.id === selectedPlan)!;

  const result: SACalculationResult = useMemo(() => {
    const income = calculateSelfAssessmentIncome(
      payeEmployment,
      selfEmployment,
      propertyIncome,
      unearnedIncome
    );

    const liability = calculateStudentLoanLiability(
      income.totalIncome,
      ugPlan,
      hasPostgraduateLoan
    );

    const payeDeductions: PAYEDeductions = {
      ugRepayments: payeUGDeductions,
      pgRepayments: payePGDeductions,
      source: 'Manual input from P60/payslips'
    };

    const balancingPayment = calculateBalancingPayment(liability, payeDeductions);

    const { warnings, recommendations } = generateWarningsAndRecommendations(
      income,
      liability,
      balancingPayment,
      payeDeductions
    );

    return {
      income,
      liability,
      payeDeductions,
      balancingPayment,
      warnings,
      recommendations
    };
  }, [
    payeEmployment,
    selfEmployment,
    propertyIncome,
    unearnedIncome,
    ugPlan,
    hasPostgraduateLoan,
    payeUGDeductions,
    payePGDeductions
  ]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Self Assessment Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Self Assessment Balancing Payment Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your student loan balancing payment due via Self Assessment.
            Essential for self-employed individuals and those with multiple income sources.
          </p>
        </div>
      </section>

      {/* Critical Warning */}
      {result.balancingPayment.isSignificant && (
        <section className="max-w-6xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-800">Significant Balancing Payment Due!</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p className="mb-2">
                    <strong>Amount due:</strong> {fmtMoney(result.balancingPayment.totalBalancing)}
                    ({fmtMoney(result.balancingPayment.monthlyEquivalent)} per month to budget)
                  </p>
                  <p className="mb-2">
                    <strong>Due date:</strong> {result.balancingPayment.dueDate}
                  </p>
                  <p>
                    <strong>Action required:</strong> Start budgeting now and consider voluntary SLC payments to reduce this bill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="text-amber-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Self Assessment vs PAYE</h3>
                  <p className="text-sm text-gray-600">
                    Self Assessment combines ALL income sources against thresholds,
                    while PAYE treats each job separately. This can create unexpected bills.
                  </p>
                </div>
              </div>
            </div>

            {/* Loan Plan Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Undergraduate Loan Plan
              </label>
              <select
                value={selectedPlan}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
              >
                {LOAN_PLANS.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name} - {fmtMoney(plan.threshold)} threshold
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                {ugPlan.description}
              </p>
            </div>

            {/* Postgraduate Loan */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={hasPostgraduateLoan}
                  onChange={(e) => setHasPostgraduateLoan(e.target.checked)}
                  className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                I have a postgraduate loan
              </label>
              {hasPostgraduateLoan && (
                <p className="mt-1 text-xs text-gray-500">
                  PG loans: 6% above £{POSTGRADUATE_THRESHOLD.toLocaleString()} threshold
                </p>
              )}
            </div>

            {/* Income Sources */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Annual Income Sources</h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">PAYE Employment (Total)</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={payeEmployment}
                      onChange={(e) => setPayeEmployment(Number(e.target.value) || 0)}
                      min={0}
                      max={200000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">All PAYE jobs combined (from P60s)</p>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Self-Employment Profits</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={selfEmployment}
                      onChange={(e) => setSelfEmployment(Number(e.target.value) || 0)}
                      min={0}
                      max={200000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Net profits after expenses</p>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Property Income</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={propertyIncome}
                      onChange={(e) => setPropertyIncome(Number(e.target.value) || 0)}
                      min={0}
                      max={100000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Rental income after allowable expenses</p>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Unearned Income</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={unearnedIncome}
                      onChange={(e) => setUnearnedIncome(Number(e.target.value) || 0)}
                      min={0}
                      max={50000}
                      step={500}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Dividends, savings interest, investments
                    {unearnedIncome > UNEARNED_INCOME_THRESHOLD && (
                      <span className="text-orange-600 font-medium"> (All included - over £2k threshold)</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* PAYE Deductions Already Made */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">PAYE Deductions Already Made</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">UG Loan Repayments (PAYE)</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={payeUGDeductions}
                      onChange={(e) => setPayeUGDeductions(Number(e.target.value) || 0)}
                      min={0}
                      max={10000}
                      step={100}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">From P60 or payslips (annual total)</p>
                </div>

                {hasPostgraduateLoan && (
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">PG Loan Repayments (PAYE)</label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">£</span>
                      <input
                        type="number"
                        value={payePGDeductions}
                        onChange={(e) => setPayePGDeductions(Number(e.target.value) || 0)}
                        min={0}
                        max={5000}
                        step={100}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">From P60 or payslips (annual total)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Key Rules</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• Unearned income: All included if total over £2,000</p>
                <p>• PAYE vs SA: SA combines all income sources</p>
                <p>• Due date: 31 January following tax year</p>
                <p>• Late payment: 5% penalty after 30 days</p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">

            {/* Income Summary */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Self Assessment Income Summary</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Income Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>PAYE Employment:</span>
                      <span className="font-medium">{fmtMoney(result.income.payeEmployment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Self-Employment:</span>
                      <span className="font-medium">{fmtMoney(result.income.selfEmployment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property Income:</span>
                      <span className="font-medium">{fmtMoney(result.income.propertyIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Unearned Income:</span>
                      <span className="font-medium">
                        {fmtMoney(result.income.unearnedIncomeIncluded)}
                        {result.income.unearnedIncome !== result.income.unearnedIncomeIncluded && (
                          <span className="text-gray-500"> (of {fmtMoney(result.income.unearnedIncome)})</span>
                        )}
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total SA Income:</span>
                      <span>{fmtMoney(result.income.totalIncome)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Threshold Comparison</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>UG Threshold ({ugPlan.name}):</span>
                      <span>{fmtMoney(ugPlan.threshold)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Income Above UG Threshold:</span>
                      <span className="font-medium">{fmtMoney(result.liability.ugIncomeAboveThreshold)}</span>
                    </div>
                    {hasPostgraduateLoan && (
                      <>
                        <div className="flex justify-between">
                          <span>PG Threshold:</span>
                          <span>{fmtMoney(POSTGRADUATE_THRESHOLD)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Income Above PG Threshold:</span>
                          <span className="font-medium">{fmtMoney(result.liability.pgIncomeAboveThreshold)}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Liability Calculation */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Loan Liability Calculation</h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">Undergraduate Loan ({ugPlan.name})</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Income above threshold:</span>
                      <span>{fmtMoney(result.liability.ugIncomeAboveThreshold)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rate:</span>
                      <span>{fmtPercent(ugPlan.repaymentRate)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Annual liability:</span>
                      <span>{fmtMoney(result.liability.ugLiability)}</span>
                    </div>
                  </div>
                </div>

                {hasPostgraduateLoan && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-3">Postgraduate Loan</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Income above £{POSTGRADUATE_THRESHOLD.toLocaleString()}:</span>
                        <span>{fmtMoney(result.liability.pgIncomeAboveThreshold)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rate:</span>
                        <span>{fmtPercent(POSTGRADUATE_RATE)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 font-semibold">
                        <span>Annual liability:</span>
                        <span>{fmtMoney(result.liability.pgLiability)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Combined Liability:</span>
                    <span>{fmtMoney(result.liability.combinedLiability)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {fmtPercent(result.liability.combinedLiability / Math.max(result.income.totalIncome, 1))} of total income
                  </p>
                </div>
              </div>
            </div>

            {/* Balancing Payment */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Balancing Payment Due</h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Calculation</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total UG liability:</span>
                        <span>{fmtMoney(result.liability.ugLiability)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Less: PAYE UG deductions:</span>
                        <span>-{fmtMoney(result.payeDeductions.ugRepayments)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>UG balancing payment:</span>
                        <span className="font-medium">{fmtMoney(result.balancingPayment.ugBalancing)}</span>
                      </div>

                      {hasPostgraduateLoan && (
                        <>
                          <div className="flex justify-between border-t pt-2">
                            <span>Total PG liability:</span>
                            <span>{fmtMoney(result.liability.pgLiability)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Less: PAYE PG deductions:</span>
                            <span>-{fmtMoney(result.payeDeductions.pgRepayments)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>PG balancing payment:</span>
                            <span className="font-medium">{fmtMoney(result.balancingPayment.pgBalancing)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Payment Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded border">
                        <div className="text-2xl font-bold text-orange-700 mb-1">
                          {fmtMoney(result.balancingPayment.totalBalancing)}
                        </div>
                        <div className="text-gray-600">Total due on {result.balancingPayment.dueDate}</div>
                      </div>

                      <div className="flex justify-between">
                        <span>Monthly equivalent:</span>
                        <span className="font-medium">{fmtMoney(result.balancingPayment.monthlyEquivalent)}</span>
                      </div>

                      <div className="text-xs text-gray-600 mt-2">
                        <p>Payment is made alongside your income tax and NI balancing payment via Self Assessment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Important Warnings</h3>
                <ul className="space-y-2">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start text-sm text-red-700">
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Recommendations</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start text-sm text-green-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="max-w-4xl mx-auto prose prose-amber">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Self Assessment Student Loan Payments</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">PAYE vs Self Assessment</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• PAYE: Each job assessed separately against threshold</li>
              <li>• Self Assessment: All income combined against threshold</li>
              <li>• Multiple small jobs can escape PAYE but trigger SA liability</li>
              <li>• Self-employment income always triggers SA calculation</li>
              <li>• Balancing payment collects the difference</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Rules</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Unearned income: All included if over £2,000 total</li>
              <li>• Payment due: 31 January following tax year end</li>
              <li>• Late payment penalty: 5% after 30 days, 5% after 6 months</li>
              <li>• No payments on account for student loans</li>
              <li>• Voluntary SLC payments can reduce SA bill</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Scenarios</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-800">Two part-time PAYE jobs below threshold:</p>
              <p>Each job pays nothing via PAYE, but combined income triggers SA liability</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">PAYE job plus self-employment:</p>
              <p>PAYE job may pay some repayments, but SE income increases total liability in SA</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">High unearned income:</p>
              <p>Over £2,000 unearned income means all dividends/interest count toward student loan calculation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto bg-amber-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Facing a Large Student Loan Balancing Payment?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Unexpected student loan bills through Self Assessment can be substantial.
          Consider making voluntary payments throughout the year or adjusting your tax arrangements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.gov.uk/contact-student-finance-england"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Student Loans Company
          </a>
          <a
            href="https://www.gov.uk/self-assessment-tax-returns"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Self Assessment Guidance
          </a>
        </div>
      </section>
    </div>
  );
};

export default SAStudentLoanCalculator;