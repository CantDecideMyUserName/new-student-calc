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

interface IncomeSource {
  id: string;
  label: string;
  amount: number;
  type: 'employment' | 'self-employed' | 'side-income';
  isPAYE: boolean;
}

interface PAYECalculation {
  jobId: string;
  jobLabel: string;
  monthlyIncome: number;
  monthlyThreshold: number;
  monthlyRepayment: number;
  annualRepayment: number;
  exceedsThreshold: boolean;
}

interface SelfAssessmentCalculation {
  totalAnnualIncome: number;
  incomeAboveThreshold: number;
  totalLiability: number;
  payeDeductionsAlready: number;
  balancingPayment: number;
  isRequired: boolean;
}

interface MultipleJobsResults {
  payeCalculations: PAYECalculation[];
  totalPAYEDeductions: number;
  selfAssessment: SelfAssessmentCalculation;
  underpaymentAmount: number;
  requiresSelfAssessment: boolean;
  monthlyUnderpayment: number;
  criticalWarning: boolean;
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

const INCOME_TYPES = [
  { value: 'employment', label: 'Employment (PAYE)', isPAYE: true },
  { value: 'self-employed', label: 'Self-Employed', isPAYE: false },
  { value: 'side-income', label: 'Side Income/Freelance', isPAYE: false }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculatePAYERepayment(monthlyIncome: number, monthlyThreshold: number, repaymentRate: number): number {
  return Math.max(0, (monthlyIncome - monthlyThreshold) * repaymentRate);
}

function calculateMultipleJobsRepayments(
  incomeSources: IncomeSource[],
  plan: LoanPlan,
  completeSelfAssessment: boolean
): MultipleJobsResults {
  const monthlyThreshold = plan.annualThreshold / 12;

  // Calculate PAYE deductions for each employment
  const payeCalculations: PAYECalculation[] = incomeSources
    .filter(source => source.isPAYE)
    .map(source => {
      const monthlyIncome = source.amount / 12;
      const monthlyRepayment = calculatePAYERepayment(monthlyIncome, monthlyThreshold, plan.repaymentRate);
      const annualRepayment = monthlyRepayment * 12;

      return {
        jobId: source.id,
        jobLabel: source.label,
        monthlyIncome,
        monthlyThreshold,
        monthlyRepayment,
        annualRepayment,
        exceedsThreshold: monthlyIncome > monthlyThreshold
      };
    });

  const totalPAYEDeductions = payeCalculations.reduce((sum, calc) => sum + calc.annualRepayment, 0);

  // Calculate Self Assessment liability
  const totalAnnualIncome = incomeSources.reduce((sum, source) => sum + source.amount, 0);
  const incomeAboveThreshold = Math.max(0, totalAnnualIncome - plan.annualThreshold);
  const totalLiability = incomeAboveThreshold * plan.repaymentRate;
  const balancingPayment = Math.max(0, totalLiability - totalPAYEDeductions);

  // Determine if Self Assessment is required
  const hasNonPAYEIncome = incomeSources.some(source => !source.isPAYE && source.amount > 0);
  const hasUnderpayment = balancingPayment > 0;
  const isRequired = completeSelfAssessment || hasNonPAYEIncome || hasUnderpayment;

  const selfAssessment: SelfAssessmentCalculation = {
    totalAnnualIncome,
    incomeAboveThreshold,
    totalLiability,
    payeDeductionsAlready: totalPAYEDeductions,
    balancingPayment,
    isRequired
  };

  // Critical warning: multiple jobs below threshold but combined exceeds threshold
  const allJobsBelowThreshold = payeCalculations.every(calc => !calc.exceedsThreshold);
  const combinedExceedsThreshold = totalAnnualIncome > plan.annualThreshold;
  const criticalWarning = allJobsBelowThreshold && combinedExceedsThreshold && balancingPayment > 0;

  return {
    payeCalculations,
    totalPAYEDeductions,
    selfAssessment,
    underpaymentAmount: balancingPayment,
    requiresSelfAssessment: isRequired,
    monthlyUnderpayment: balancingPayment / 12,
    criticalWarning
  };
}

const MultipleJobsCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [completeSelfAssessment, setCompleteSelfAssessment] = useState<boolean>(false);
  const [incomeSources, setIncomeSources] = useState<IncomeSource[]>([
    { id: 'job1', label: 'Job 1', amount: 18000, type: 'employment', isPAYE: true },
    { id: 'job2', label: 'Job 2', amount: 15000, type: 'employment', isPAYE: true },
    { id: 'side', label: 'Side Income', amount: 5000, type: 'side-income', isPAYE: false }
  ]);

  const plan: LoanPlan = LOAN_PLANS[selectedPlan];

  const results: MultipleJobsResults = useMemo(() => {
    return calculateMultipleJobsRepayments(incomeSources, plan, completeSelfAssessment);
  }, [incomeSources, plan, completeSelfAssessment]);

  const updateIncomeSource = (id: string, field: keyof IncomeSource, value: string | number): void => {
    setIncomeSources(prev => prev.map(source =>
      source.id === id
        ? {
          ...source,
          [field]: value,
          isPAYE: field === 'type' ? INCOME_TYPES.find(t => t.value === value)?.isPAYE || false : source.isPAYE
        }
        : source
    ));
  };

  const addIncomeSource = (): void => {
    const newId = `income${Date.now()}`;
    setIncomeSources(prev => [...prev, {
      id: newId,
      label: `Income ${prev.length + 1}`,
      amount: 10000,
      type: 'employment',
      isPAYE: true
    }]);
  };

  const removeIncomeSource = (id: string): void => {
    setIncomeSources(prev => prev.filter(source => source.id !== id));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Multiple Jobs & Side-Income Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Multiple Jobs & Side-Income Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how PAYE treats each job separately while Self Assessment combines all income.
              Discover potential underpayments and unexpected Self Assessment liabilities.
            </p>
          </div>
        </section>

        {/* Critical Warning */}
        {results.criticalWarning && (
          <section className="max-w-6xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 h-5 sm:h-6 sm:w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base sm:text-lg font-medium text-red-800">Critical: Unexpected Student Loan Liability!</h3>
                  <div className="mt-2 text-sm text-red-700 space-y-2">
                    <p>
                      <strong>You have significant underpayment:</strong> Your individual jobs don&apos;t trigger PAYE deductions,
                      but your combined income of {fmtMoney(results.selfAssessment.totalAnnualIncome)} exceeds the threshold
                      of {fmtMoney(plan.annualThreshold)}.
                    </p>
                    <p>
                      <strong>Amount due:</strong> {fmtMoney(results.underpaymentAmount)} per year
                      ({fmtMoney(results.monthlyUnderpayment)} per month) via Self Assessment.
                    </p>
                    <p>
                      <strong>Action required:</strong> You must complete Self Assessment and pay this amount by 31 January following the tax year.
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
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">PAYE vs Self Assessment</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      PAYE applies thresholds to each job separately. Self Assessment combines all income sources.
                      This can create unexpected liabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Loan Plan Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
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

              {/* Self Assessment Status */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={completeSelfAssessment}
                    onChange={(e) => setCompleteSelfAssessment(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  I complete Self Assessment
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  {completeSelfAssessment
                    ? 'You already file Self Assessment - balancing payments will be calculated automatically'
                    : 'If you don\'t currently file, you may need to start based on your income sources'
                  }
                </p>
              </div>

              {/* Income Sources */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Income Sources
                  </label>
                  <button
                    onClick={addIncomeSource}
                    className="text-sm bg-indigo-600 text-white px-2 sm:px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Add Source
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {incomeSources.map((source) => (
                    <div key={source.id} className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <input
                          type="text"
                          value={source.label}
                          onChange={(e) => updateIncomeSource(source.id, 'label', e.target.value)}
                          className="font-medium text-gray-800 bg-transparent border-none p-0 focus:ring-0 flex-1 text-sm"
                        />
                        {incomeSources.length > 1 && (
                          <button
                            onClick={() => removeIncomeSource(source.id)}
                            className="text-red-600 hover:text-red-800 ml-2 p-1"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Annual Income</label>
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-2 text-sm">£</span>
                            <input
                              type="number"
                              value={source.amount}
                              onChange={(e) => updateIncomeSource(source.id, 'amount', Number(e.target.value) || 0)}
                              min={0}
                              max={100000}
                              step={1000}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Income Type</label>
                          <select
                            value={source.type}
                            onChange={(e) => updateIncomeSource(source.id, 'type', e.target.value)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                          >
                            {INCOME_TYPES.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex items-center text-xs">
                          {source.isPAYE ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800">
                              PAYE Applied
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                              No PAYE
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Details */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Plan Details</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Annual threshold:</strong> {fmtMoney(plan.annualThreshold)}</p>
                  <p><strong>Monthly threshold:</strong> {fmtMoney(plan.annualThreshold / 12)}</p>
                  <p><strong>Rate:</strong> {fmtPercent(plan.repaymentRate)} above threshold</p>
                  <p><strong>Write-off:</strong> {plan.writeOffYears} years</p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Income Summary */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Income & Repayment Analysis</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(results.selfAssessment.totalAnnualIncome)}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Total Annual Income</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-blue-700">{fmtMoney(results.totalPAYEDeductions)}</p>
                    <p className="text-xs sm:text-sm text-gray-600">PAYE Deductions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-green-700">{fmtMoney(results.selfAssessment.totalLiability)}</p>
                    <p className="text-xs sm:text-sm text-gray-600">True Annual Liability</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-xl sm:text-2xl font-bold ${results.underpaymentAmount > 0 ? 'text-red-700' : 'text-gray-600'}`}>
                      {fmtMoney(results.underpaymentAmount)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">Underpayment</p>
                  </div>
                </div>

                {/* Threshold Comparison */}
                <div className={`p-3 sm:p-4 rounded-lg border ${results.selfAssessment.totalAnnualIncome > plan.annualThreshold
                    ? 'bg-orange-50 border-orange-200'
                    : 'bg-green-50 border-green-200'
                  }`}>
                  <div className="flex items-start">
                    {results.selfAssessment.totalAnnualIncome > plan.annualThreshold ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">
                        Combined Income vs Threshold
                      </p>
                      <p className="text-sm text-gray-600">
                        {fmtMoney(results.selfAssessment.totalAnnualIncome)} vs {fmtMoney(plan.annualThreshold)}
                        {results.selfAssessment.totalAnnualIncome > plan.annualThreshold
                          ? ` (${fmtMoney(results.selfAssessment.incomeAboveThreshold)} above threshold)`
                          : ' (below threshold)'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAYE Breakdown */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">PAYE Deductions by Job</h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-1">Income Source</th>
                          <th className="text-right py-2 px-1">Annual Income</th>
                          <th className="text-right py-2 px-1 hidden sm:table-cell">Monthly Income</th>
                          <th className="text-right py-2 px-1 hidden sm:table-cell">Monthly Threshold</th>
                          <th className="text-right py-2 px-1">Monthly Repayment</th>
                          <th className="text-right py-2 px-1">Annual Repayment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.payeCalculations.map((calc) => (
                          <tr key={calc.jobId} className="border-b border-gray-100">
                            <td className="py-2 px-1">
                              <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium">{calc.jobLabel}</span>
                                {calc.exceedsThreshold ? (
                                  <span className="mt-1 sm:mt-0 sm:ml-2 inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                    <span className="sm:hidden">Above</span>
                                    <span className="hidden sm:inline">Above Threshold</span>
                                  </span>
                                ) : (
                                  <span className="mt-1 sm:mt-0 sm:ml-2 inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="sm:hidden">Below</span>
                                    <span className="hidden sm:inline">Below Threshold</span>
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="text-right py-2 px-1">{fmtMoney(calc.monthlyIncome * 12)}</td>
                            <td className="text-right py-2 px-1 hidden sm:table-cell">{fmtMoney(calc.monthlyIncome)}</td>
                            <td className="text-right py-2 px-1 hidden sm:table-cell">{fmtMoney(calc.monthlyThreshold)}</td>
                            <td className="text-right py-2 px-1 font-medium">{fmtMoney(calc.monthlyRepayment)}</td>
                            <td className="text-right py-2 px-1 font-medium">{fmtMoney(calc.annualRepayment)}</td>
                          </tr>
                        ))}

                        {/* Non-PAYE Income */}
                        {incomeSources.filter(source => !source.isPAYE && source.amount > 0).map((source) => (
                          <tr key={source.id} className="border-b border-gray-100 bg-yellow-50">
                            <td className="py-2 px-1">
                              <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium">{source.label}</span>
                                <span className="mt-1 sm:mt-0 sm:ml-2 inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  No PAYE
                                </span>
                              </div>
                            </td>
                            <td className="text-right py-2 px-1">{fmtMoney(source.amount)}</td>
                            <td className="text-right py-2 px-1 hidden sm:table-cell">{fmtMoney(source.amount / 12)}</td>
                            <td className="text-right py-2 px-1 hidden sm:table-cell">-</td>
                            <td className="text-right py-2 px-1 font-medium">£0</td>
                            <td className="text-right py-2 px-1 font-medium">£0</td>
                          </tr>
                        ))}

                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 px-1">Total PAYE Deductions</td>
                          <td className="text-right py-2 px-1">{fmtMoney(results.selfAssessment.totalAnnualIncome)}</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell">-</td>
                          <td className="text-right py-2 px-1 hidden sm:table-cell">-</td>
                          <td className="text-right py-2 px-1">{fmtMoney(results.totalPAYEDeductions / 12)}</td>
                          <td className="text-right py-2 px-1">{fmtMoney(results.totalPAYEDeductions)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Self Assessment Calculation */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Self Assessment Calculation</h3>
                <div className="space-y-4">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Income Calculation</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total Annual Income:</span>
                          <span className="font-medium">{fmtMoney(results.selfAssessment.totalAnnualIncome)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Threshold:</span>
                          <span>-{fmtMoney(plan.annualThreshold)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Income Above Threshold:</span>
                          <span className="font-medium">{fmtMoney(results.selfAssessment.incomeAboveThreshold)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Liability Calculation</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Income Above Threshold:</span>
                          <span>{fmtMoney(results.selfAssessment.incomeAboveThreshold)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rate ({fmtPercent(plan.repaymentRate)}):</span>
                          <span>×{plan.repaymentRate}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Total Liability:</span>
                          <span className="font-medium">{fmtMoney(results.selfAssessment.totalLiability)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-3">Balancing Payment Due</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Student Loan Liability:</span>
                        <span className="font-medium">{fmtMoney(results.selfAssessment.totalLiability)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Less: PAYE Deductions Already Made:</span>
                        <span>-{fmtMoney(results.totalPAYEDeductions)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 text-base sm:text-lg font-semibold">
                        <span>Balancing Payment Due (31 Jan):</span>
                        <span className={results.underpaymentAmount > 0 ? 'text-red-700' : 'text-green-700'}>
                          {fmtMoney(results.underpaymentAmount)}
                        </span>
                      </div>
                      {results.underpaymentAmount > 0 && (
                        <p className="text-xs text-red-600 mt-2">
                          This amount is due by 31 January following the tax year end via Self Assessment.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Self Assessment Requirement */}
              <div className={`p-4 sm:p-6 rounded-lg border ${results.requiresSelfAssessment
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-green-50 border-green-200'
                }`}>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Self Assessment Requirement</h3>
                <div className="space-y-3">
                  {results.requiresSelfAssessment ? (
                    <>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-medium text-orange-800">You need to complete Self Assessment</p>
                          <p className="text-sm text-orange-700 mt-1">
                            Based on your income sources and underpayment, you are required to file Self Assessment.
                          </p>
                        </div>
                      </div>
                      <div className="ml-8 sm:ml-9 space-y-2 text-sm text-orange-700">
                        {!completeSelfAssessment && (
                          <p>• You are not currently filing Self Assessment but need to start</p>
                        )}
                        {results.underpaymentAmount > 0 && (
                          <p>• You have an underpayment of {fmtMoney(results.underpaymentAmount)} due by 31 January</p>
                        )}
                        {incomeSources.some(s => !s.isPAYE && s.amount > 0) && (
                          <p>• You have non-PAYE income that requires Self Assessment</p>
                        )}
                        <p>• Contact HMRC or a tax advisor to register for Self Assessment</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium text-green-800">No Self Assessment required</p>
                        <p className="text-sm text-green-700 mt-1">
                          Your PAYE deductions cover your full student loan liability.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Alternative Solutions */}
              {results.underpaymentAmount > 0 && (
                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Alternative Payment Options</h3>
                  <div className="space-y-3 text-sm text-blue-700">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        <strong>Voluntary Repayments:</strong> Make voluntary payments to SLC throughout the year
                        instead of waiting for Self Assessment ({fmtMoney(results.monthlyUnderpayment)}/month).
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        <strong>Contact SLC:</strong> Inform the Student Loans Company about your multiple income sources.
                        They may be able to adjust your tax code for better collection.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        <strong>Budget for January:</strong> Set aside {fmtMoney(results.monthlyUnderpayment)} per month
                        to cover the Self Assessment payment due on 31 January.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-indigo max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Multiple Jobs & Student Loan Repayments</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">How PAYE Works</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Each employer applies the threshold separately</li>
                <li>• Jobs below {fmtMoney(plan.annualThreshold / 12)}/month pay nothing</li>
                <li>• No communication between employers</li>
                <li>• Can result in significant underpayments</li>
                <li>• Automatic deduction where thresholds are exceeded</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Self Assessment Impact</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Combines all income sources</li>
                <li>• Applies single threshold to total income</li>
                <li>• Calculates true annual liability</li>
                <li>• Requires balancing payment by 31 January</li>
                <li>• More accurate but creates unexpected bills</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Common Scenarios</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">Two part-time jobs at £18,000 each:</p>
                <p>• PAYE: £0 deductions (each below {fmtMoney(plan.annualThreshold / 12)}/month threshold)</p>
                <p>• Self Assessment: {fmtMoney((36000 - plan.annualThreshold) * plan.repaymentRate)} due on combined £36,000 income</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Main job £25,000 + side income £8,000:</p>
                <p>• PAYE: Small deductions from main job only</p>
                <p>• Self Assessment: Additional payment due on the combined higher income</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-indigo-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need Help with Multiple Income Sources?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            If you have multiple jobs or side income and are concerned about student loan repayments,
            contact the Student Loans Company or consider setting up voluntary repayments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/contact-student-finance-england"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Student Finance
            </a>
            <a
              href="https://www.gov.uk/self-assessment-tax-returns"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-indigo-800 transition-colors text-sm sm:text-base"
            >
              Learn About Self Assessment
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MultipleJobsCalculator;