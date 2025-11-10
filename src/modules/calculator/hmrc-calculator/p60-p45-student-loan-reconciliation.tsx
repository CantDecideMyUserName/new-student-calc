"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface StudentLoanPlan {
  id: string;
  name: string;
  threshold: number;
  rate: number;
}

interface Employer {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  grossPay: number;
  ugSLDeductions: number;
  pgSLDeductions: number;
  documentType: 'P60' | 'P45';
  isPrimary: boolean;
}

interface OtherIncome {
  type: 'SELF_EMPLOYMENT' | 'PROPERTY' | 'DIVIDENDS' | 'OTHER';
  label: string;
  amount: number;
}

interface ReconciliationResult {
  totalAnnualIncome: number;
  applicableThreshold: number;
  incomeAboveThreshold: number;
  correctUGLiability: number;
  correctPGLiability: number;
  totalCorrectLiability: number;
  totalPAYEDeductions: number;
  ugPAYEDeductions: number;
  pgPAYEDeductions: number;
  difference: number;
  status: 'OVERPAID' | 'UNDERPAID' | 'CORRECT';
  isRefundEligible: boolean;
  refundAmount: number;
  balancingPaymentDue: number;
}

interface ReconciliationAnalysis {
  reconciliation: ReconciliationResult;
  employerBreakdown: Employer[];
  otherIncomeBreakdown: OtherIncome[];
  actionRequired: {
    type: 'REFUND' | 'PAYMENT' | 'NONE';
    amount: number;
    description: string;
    steps: string[];
    deadline?: string;
    documentsNeeded: string[];
  };
  commonScenarios: {
    scenario: string;
    applies: boolean;
    explanation: string;
  }[];
  warnings: string[];
  recommendations: string[];
}

// Constants
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

const TAX_YEARS = [
  '2024/25', '2023/24', '2022/23', '2021/22', '2020/21'
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateReconciliation(
  employers: Employer[],
  otherIncome: OtherIncome[],
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean
): ReconciliationResult {
  // Calculate total income
  const totalEmploymentIncome = employers.reduce((sum, emp) => sum + emp.grossPay, 0);
  const totalOtherIncome = otherIncome.reduce((sum, income) => sum + income.amount, 0);
  const totalAnnualIncome = totalEmploymentIncome + totalOtherIncome;

  // Calculate correct liability
  const ugIncomeAboveThreshold = Math.max(0, totalAnnualIncome - ugPlan.threshold);
  const correctUGLiability = ugIncomeAboveThreshold * ugPlan.rate;

  const pgIncomeAboveThreshold = hasPostgraduate ? Math.max(0, totalAnnualIncome - POSTGRADUATE_LOAN.threshold) : 0;
  const correctPGLiability = hasPostgraduate ? pgIncomeAboveThreshold * POSTGRADUATE_LOAN.rate : 0;

  const totalCorrectLiability = correctUGLiability + correctPGLiability;

  // Calculate total PAYE deductions
  const ugPAYEDeductions = employers.reduce((sum, emp) => sum + emp.ugSLDeductions, 0);
  const pgPAYEDeductions = employers.reduce((sum, emp) => sum + emp.pgSLDeductions, 0);
  const totalPAYEDeductions = ugPAYEDeductions + pgPAYEDeductions;

  // Calculate difference
  const difference = totalPAYEDeductions - totalCorrectLiability;

  let status: 'OVERPAID' | 'UNDERPAID' | 'CORRECT';
  let refundAmount = 0;
  let balancingPaymentDue = 0;

  if (Math.abs(difference) < 1) {
    status = 'CORRECT';
  } else if (difference > 0) {
    status = 'OVERPAID';
    refundAmount = difference;
  } else {
    status = 'UNDERPAID';
    balancingPaymentDue = Math.abs(difference);
  }

  return {
    totalAnnualIncome,
    applicableThreshold: ugPlan.threshold,
    incomeAboveThreshold: ugIncomeAboveThreshold + pgIncomeAboveThreshold,
    correctUGLiability,
    correctPGLiability,
    totalCorrectLiability,
    totalPAYEDeductions,
    ugPAYEDeductions,
    pgPAYEDeductions,
    difference,
    status,
    isRefundEligible: status === 'OVERPAID' && refundAmount >= 1,
    refundAmount,
    balancingPaymentDue
  };
}

function analyzeReconciliation(
  reconciliation: ReconciliationResult,
  employers: Employer[],
  otherIncome: OtherIncome[],
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean
): ReconciliationAnalysis {
  // Determine action required
  let actionRequired;

  if (reconciliation.status === 'OVERPAID') {
    actionRequired = {
      type: 'REFUND' as const,
      amount: reconciliation.refundAmount,
      description: `You've overpaid by ${fmtMoney(reconciliation.refundAmount)} and are eligible for a refund`,
      steps: [
        'Visit the Student Loans Company website',
        'Complete the online refund application',
        'Upload your P60/P45 documents',
        'Wait 4-6 weeks for processing',
        'Refund will be paid to your bank account'
      ],
      documentsNeeded: [
        'P60 from current employer',
        'P45s from any previous employers',
        'Bank account details',
        'National Insurance number'
      ]
    };
  } else if (reconciliation.status === 'UNDERPAID') {
    const currentYear = new Date().getFullYear();
    const deadline = `31 January ${currentYear + 1}`;

    actionRequired = {
      type: 'PAYMENT' as const,
      amount: reconciliation.balancingPaymentDue,
      description: `You need to pay an additional ${fmtMoney(reconciliation.balancingPaymentDue)}`,
      deadline,
      steps: [
        'Complete Self Assessment tax return (if required)',
        'Calculate total tax and student loan liability',
        'Pay by 31 January deadline',
        'Or make voluntary payment directly to SLC'
      ],
      documentsNeeded: [
        'P60/P45 documents',
        'Self Assessment records',
        'Bank account for payment'
      ]
    };
  } else {
    actionRequired = {
      type: 'NONE' as const,
      amount: 0,
      description: 'Your student loan payments are correct - no action needed',
      steps: [
        'Keep your P60/P45 for records',
        'Continue monitoring your student loan account',
        'Check again next tax year'
      ],
      documentsNeeded: []
    };
  }

  // Analyze common scenarios
  const hasMultipleEmployers = employers.length > 1;
  const hasPartYearEmployment = employers.some(emp => {
    const start = new Date(emp.startDate);
    const end = emp.endDate ? new Date(emp.endDate) : new Date();
    const daysWorked = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return daysWorked < 300; // Less than ~10 months
  });
  const hasMixedIncome = otherIncome.length > 0;
  const allJobsBelowThreshold = employers.every(emp => emp.grossPay < ugPlan.threshold);

  const commonScenarios = [
    {
      scenario: 'Part-Year Employment',
      applies: hasPartYearEmployment && reconciliation.status === 'OVERPAID',
      explanation: 'You worked less than a full year but PAYE calculated monthly deductions as if you earned this amount all year'
    },
    {
      scenario: 'Multiple Jobs Below Threshold',
      applies: hasMultipleEmployers && allJobsBelowThreshold && reconciliation.status === 'UNDERPAID',
      explanation: 'Each job was below the threshold so no PAYE deductions, but combined income exceeds threshold'
    },
    {
      scenario: 'Mid-Year Job Change',
      applies: hasMultipleEmployers && Math.abs(reconciliation.difference) > 50,
      explanation: 'Changing jobs mid-year can cause over or underpayment due to separate PAYE calculations'
    },
    {
      scenario: 'Mixed Income Sources',
      applies: hasMixedIncome && reconciliation.status === 'UNDERPAID',
      explanation: 'Self-employment or other income not covered by PAYE creates balancing payment requirement'
    }
  ];

  // Generate warnings
  const warnings: string[] = [];

  if (reconciliation.isRefundEligible && reconciliation.refundAmount > 500) {
    warnings.push(`Significant overpayment of ${fmtMoney(reconciliation.refundAmount)} - ensure you claim this refund`);
  }

  if (reconciliation.status === 'UNDERPAID' && reconciliation.balancingPaymentDue > 1000) {
    warnings.push(`Large balancing payment due - you may need to complete Self Assessment`);
  }

  if (hasMultipleEmployers && allJobsBelowThreshold) {
    warnings.push('Multiple jobs below threshold individually but above threshold combined - classic underpayment scenario');
  }

  // Generate recommendations
  const recommendations: string[] = [];

  if (reconciliation.isRefundEligible) {
    recommendations.push('Apply for refund as soon as possible - no time limit but better to claim promptly');
  }

  if (hasMultipleEmployers) {
    recommendations.push('Consider informing SLC about multiple employments to improve future PAYE accuracy');
  }

  if (reconciliation.status === 'UNDERPAID') {
    recommendations.push('Set up monthly savings for future years to avoid large annual bills');
  }

  recommendations.push('Check your student loan balance regularly through your SLC online account');

  return {
    reconciliation,
    employerBreakdown: employers,
    otherIncomeBreakdown: otherIncome,
    actionRequired,
    commonScenarios,
    warnings,
    recommendations
  };
}

const P60ReconciliationCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);
  const [taxYear, setTaxYear] = useState<string>('2024/25');

  // Employer data
  const [employers, setEmployers] = useState<Employer[]>([
    {
      id: 'emp1',
      name: 'Current Employer',
      startDate: '2024-04-06',
      endDate: '',
      grossPay: 32000,
      ugSLDeductions: 315,
      pgSLDeductions: 0,
      documentType: 'P60',
      isPrimary: true
    }
  ]);

  // Other income
  const [otherIncome, setOtherIncome] = useState<OtherIncome[]>([]);

  const ugPlan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan)!;

  const analysis: ReconciliationAnalysis = useMemo(() => {
    const reconciliation = calculateReconciliation(employers, otherIncome, ugPlan, hasPostgraduate);
    return analyzeReconciliation(reconciliation, employers, otherIncome, ugPlan, hasPostgraduate);
  }, [employers, otherIncome, ugPlan, hasPostgraduate]);

  const addEmployer = (): void => {
    const newEmployer: Employer = {
      id: `emp${Date.now()}`,
      name: 'Previous Employer',
      startDate: '2024-04-06',
      endDate: '2024-12-31',
      grossPay: 15000,
      ugSLDeductions: 0,
      pgSLDeductions: 0,
      documentType: 'P45',
      isPrimary: false
    };
    setEmployers(prev => [...prev, newEmployer]);
  };

  const removeEmployer = (id: string): void => {
    setEmployers(prev => prev.filter(emp => emp.id !== id));
  };

  const updateEmployer = (id: string, field: keyof Employer, value: Employer[keyof Employer]): void => {
    setEmployers(prev => prev.map(emp =>
      emp.id === id ? { ...emp, [field]: value } : emp
    ));
  };

  const addOtherIncome = (): void => {
    const newIncome: OtherIncome = {
      type: 'SELF_EMPLOYMENT',
      label: 'Self-Employment',
      amount: 5000
    };
    setOtherIncome(prev => [...prev, newIncome]);
  };

  const removeOtherIncome = (index: number): void => {
    setOtherIncome(prev => prev.filter((_, i) => i !== index));
  };

  const updateOtherIncome = (index: number, field: keyof OtherIncome, value: OtherIncome[keyof OtherIncome]): void => {
    setOtherIncome(prev => prev.map((income, i) =>
      i === index ? { ...income, [field]: value } : income
    ));
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">P60/P45 Reconciliation Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            P60/P45 Year-End Student Loan Reconciliation Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Check if you&apos;ve overpaid or underpaid student loans this tax year.
            Identify refund opportunities and understand your annual position.
          </p>
        </div>
      </section>

      {/* Status Alert */}
      {analysis.reconciliation.status !== 'CORRECT' && (
        <section className="max-w-6xl mx-auto">
          <div className={`border-l-4 p-6 rounded-lg ${analysis.reconciliation.status === 'OVERPAID'
              ? 'bg-green-50 border-green-400'
              : 'bg-red-50 border-red-400'
            }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className={`h-6 w-6 ${analysis.reconciliation.status === 'OVERPAID' ? 'text-green-400' : 'text-red-400'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                  {analysis.reconciliation.status === 'OVERPAID' ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  )}
                </svg>
              </div>
              <div className="ml-3">
                <h3 className={`text-lg font-medium ${analysis.reconciliation.status === 'OVERPAID' ? 'text-green-800' : 'text-red-800'
                  }`}>
                  {analysis.reconciliation.status === 'OVERPAID' ? 'Refund Available!' : 'Payment Required'}
                </h3>
                <div className={`mt-2 text-sm ${analysis.reconciliation.status === 'OVERPAID' ? 'text-green-700' : 'text-red-700'
                  }`}>
                  <p className="mb-2">
                    <strong>Your Status:</strong> {analysis.actionRequired.description}
                  </p>
                  <p className="mb-2">
                    <strong>Amount:</strong> {fmtMoney(analysis.actionRequired.amount)}
                  </p>
                  {analysis.actionRequired.deadline && (
                    <p>
                      <strong>Deadline:</strong> {analysis.actionRequired.deadline}
                    </p>
                  )}
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
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="text-green-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Year-End Reconciliation</h3>
                  <p className="text-sm text-gray-600">
                    Compare what you should have paid vs what was actually deducted via PAYE.
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Year & Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Year
              </label>
              <select
                value={taxYear}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTaxYear(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              >
                {TAX_YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Loan Plan
              </label>
              <select
                value={selectedPlan}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
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
                  className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                I also have a postgraduate loan
              </label>
            </div>

            {/* Employers */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Employers During {taxYear}
                </label>
                <button
                  onClick={addEmployer}
                  className="text-sm bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Employer
                </button>
              </div>

              {employers.map((employer, index) => (
                <div key={employer.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <input
                      type="text"
                      value={employer.name}
                      onChange={(e) => updateEmployer(employer.id, 'name', e.target.value)}
                      className="font-medium text-gray-800 bg-transparent border-none p-0 focus:ring-0 flex-1"
                    />
                    {employers.length > 1 && (
                      <button
                        onClick={() => removeEmployer(employer.id)}
                        className="text-red-600 hover:text-red-800 ml-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Document Type</label>
                      <select
                        value={employer.documentType}
                        onChange={(e) => updateEmployer(employer.id, 'documentType', e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                      >
                        <option value="P60">P60 (Current)</option>
                        <option value="P45">P45 (Left)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Annual Gross Pay</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-1">£</span>
                        <input
                          type="number"
                          value={employer.grossPay}
                          onChange={(e) => updateEmployer(employer.id, 'grossPay', Number(e.target.value) || 0)}
                          min={0}
                          max={100000}
                          step={1000}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">UG Student Loan Deductions</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-1">£</span>
                        <input
                          type="number"
                          value={employer.ugSLDeductions}
                          onChange={(e) => updateEmployer(employer.id, 'ugSLDeductions', Number(e.target.value) || 0)}
                          min={0}
                          max={5000}
                          step={10}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                        />
                      </div>
                    </div>

                    {hasPostgraduate && (
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">PG Loan Deductions</label>
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-1">£</span>
                          <input
                            type="number"
                            value={employer.pgSLDeductions}
                            onChange={(e) => updateEmployer(employer.id, 'pgSLDeductions', Number(e.target.value) || 0)}
                            min={0}
                            max={3000}
                            step={10}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Other Income */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Other Income
                </label>
                <button
                  onClick={addOtherIncome}
                  className="text-sm bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Add Income
                </button>
              </div>

              {otherIncome.map((income, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <input
                      type="text"
                      value={income.label}
                      onChange={(e) => updateOtherIncome(index, 'label', e.target.value)}
                      className="font-medium text-gray-800 bg-transparent border-none p-0 focus:ring-0 flex-1 text-sm"
                    />
                    <button
                      onClick={() => removeOtherIncome(index)}
                      className="text-red-600 hover:text-red-800 ml-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-500 mr-1">£</span>
                    <input
                      type="number"
                      value={income.amount}
                      onChange={(e) => updateOtherIncome(index, 'amount', Number(e.target.value) || 0)}
                      min={0}
                      max={100000}
                      step={500}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                    />
                  </div>
                </div>
              ))}

              {otherIncome.length === 0 && (
                <p className="text-sm text-gray-500 italic">No other income sources added</p>
              )}
            </div>

            {/* Quick Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Quick Summary</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Total income:</span>
                  <span className="font-medium">{fmtMoney(analysis.reconciliation.totalAnnualIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Correct liability:</span>
                  <span className="font-medium">{fmtMoney(analysis.reconciliation.totalCorrectLiability)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Actually paid:</span>
                  <span className="font-medium">{fmtMoney(analysis.reconciliation.totalPAYEDeductions)}</span>
                </div>
                <div className="flex justify-between border-t pt-1 font-semibold">
                  <span>Difference:</span>
                  <span className={
                    analysis.reconciliation.status === 'OVERPAID' ? 'text-green-600' :
                      analysis.reconciliation.status === 'UNDERPAID' ? 'text-red-600' : 'text-gray-600'
                  }>
                    {analysis.reconciliation.status === 'OVERPAID' ? '+' :
                      analysis.reconciliation.status === 'UNDERPAID' ? '-' : ''}
                    {fmtMoney(Math.abs(analysis.reconciliation.difference))}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">

            {/* Reconciliation Summary */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Reconciliation Summary</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">What You Should Have Paid</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total annual income:</span>
                      <span>{fmtMoney(analysis.reconciliation.totalAnnualIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{ugPlan.name} threshold:</span>
                      <span>{fmtMoney(analysis.reconciliation.applicableThreshold)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Income above threshold:</span>
                      <span>{fmtMoney(Math.max(0, analysis.reconciliation.totalAnnualIncome - analysis.reconciliation.applicableThreshold))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UG liability ({fmtPercent(ugPlan.rate)}):</span>
                      <span className="font-medium">{fmtMoney(analysis.reconciliation.correctUGLiability)}</span>
                    </div>
                    {hasPostgraduate && (
                      <div className="flex justify-between">
                        <span>PG liability ({fmtPercent(POSTGRADUATE_LOAN.rate)}):</span>
                        <span className="font-medium">{fmtMoney(analysis.reconciliation.correctPGLiability)}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total correct liability:</span>
                      <span>{fmtMoney(analysis.reconciliation.totalCorrectLiability)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">What You Actually Paid</h3>
                  <div className="space-y-2 text-sm">
                    {employers.map((employer, index) => (
                      <div key={employer.id} className="flex justify-between">
                        <span>{employer.name}:</span>
                        <span>{fmtMoney(employer.ugSLDeductions + employer.pgSLDeductions)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total PAYE deductions:</span>
                      <span>{fmtMoney(analysis.reconciliation.totalPAYEDeductions)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className={`mt-6 p-4 rounded-lg ${analysis.reconciliation.status === 'OVERPAID'
                  ? 'bg-green-50 border border-green-200'
                  : analysis.reconciliation.status === 'UNDERPAID'
                    ? 'bg-red-50 border border-red-200'
                    : 'bg-blue-50 border border-blue-200'
                }`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${analysis.reconciliation.status === 'OVERPAID' ? 'text-green-700' :
                      analysis.reconciliation.status === 'UNDERPAID' ? 'text-red-700' : 'text-blue-700'
                    }`}>
                    {analysis.reconciliation.status === 'CORRECT' ? 'CORRECT' :
                      analysis.reconciliation.status === 'OVERPAID' ?
                        `+${fmtMoney(analysis.reconciliation.refundAmount)}` :
                        `-${fmtMoney(analysis.reconciliation.balancingPaymentDue)}`
                    }
                  </div>
                  <div className={`text-sm ${analysis.reconciliation.status === 'OVERPAID' ? 'text-green-600' :
                      analysis.reconciliation.status === 'UNDERPAID' ? 'text-red-600' : 'text-blue-600'
                    }`}>
                    {analysis.reconciliation.status === 'OVERPAID' ? 'Refund Available' :
                      analysis.reconciliation.status === 'UNDERPAID' ? 'Additional Payment Required' :
                        'No Action Needed'
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* Action Required */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Action Required</h3>

              <div className="mb-4">
                <p className="text-gray-700 mb-3">{analysis.actionRequired.description}</p>

                {analysis.actionRequired.type !== 'NONE' && (
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Steps to Take:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      {analysis.actionRequired.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {analysis.actionRequired.documentsNeeded.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Documents Needed:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {analysis.actionRequired.documentsNeeded.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Common Scenarios */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Scenario Analysis</h3>

              <div className="space-y-3">
                {analysis.commonScenarios.map((scenario, index) => (
                  <div key={index} className={`p-3 rounded border ${scenario.applies ? 'bg-white border-blue-300' : 'bg-gray-50 border-gray-200'
                    }`}>
                    <div className="flex items-start">
                      <div className={`w-4 h-4 rounded-full mt-1 mr-3 flex-shrink-0 ${scenario.applies ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                      <div>
                        <h4 className={`font-medium ${scenario.applies ? 'text-gray-800' : 'text-gray-500'
                          }`}>
                          {scenario.scenario}
                        </h4>
                        {scenario.applies && (
                          <p className="text-sm text-gray-600 mt-1">{scenario.explanation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warnings */}
            {analysis.warnings.length > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Important Notes</h3>
                <ul className="space-y-2">
                  {analysis.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start text-sm text-orange-700">
                      <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Recommendations</h3>
              <ul className="space-y-2">
                {analysis.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start text-sm text-green-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="max-w-4xl mx-auto prose prose-green">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Year-End Reconciliation</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Overpayment Causes</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Part-year employment with monthly PAYE calculations</li>
              <li>• Changed jobs mid-year with overlapping deductions</li>
              <li>• PAYE calculated as if earning that amount all year</li>
              <li>• Multiple jobs with individual deductions</li>
              <li>• Salary reduction during the year</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Underpayment Causes</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Multiple jobs each below threshold individually</li>
              <li>• Self-employment income not covered by PAYE</li>
              <li>• Other income sources (property, dividends)</li>
              <li>• Jobs that started with no P45 information</li>
              <li>• HMRC notices not processed quickly</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">What To Do Next</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-800">If you&apos;ve overpaid:</p>
              <p>Apply for a refund through the SLC website. There&apos;s no time limit, but it&apos;s better to claim promptly. You&apos;ll need your P60/P45 documents and the process takes 4-6 weeks.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">If you&apos;ve underpaid:</p>
              <p>You may need to complete Self Assessment if the underpayment is significant. Payment is due by 31 January. Alternatively, you can make voluntary payments directly to SLC.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">For future years:</p>
              <p>Keep SLC informed of employment changes, check payslips regularly, and consider the reconciliation calculator each year to avoid surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto bg-green-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Need to Claim a Refund or Make a Payment?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Use the official SLC website to apply for refunds or make additional payments.
          Keep your P60/P45 documents safe for verification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.gov.uk/repaying-your-student-loan/overpayments"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Claim Refund
          </a>
          <a
            href="https://www.gov.uk/repaying-your-student-loan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition-colors"
          >
            Student Loan Info
          </a>
        </div>
      </section>
    </div>
  );
};

export default P60ReconciliationCalculator;