"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface IncomeSource {
  type: 'EARNED' | 'UNEARNED';
  category: string;
  amount: number;
  description: string;
}

interface StudentLoanPlan {
  id: string;
  name: string;
  threshold: number;
  rate: number;
}

interface UnearnedIncomeAnalysis {
  totalUnearned: number;
  isAboveThreshold: boolean;
  includedForSL: number;
  threshold: number;
  marginalImpact: number;
}

interface StudentLoanCalculation {
  totalIncome: number;
  totalIncomeForSL: number;
  ugIncomeAboveThreshold: number;
  pgIncomeAboveThreshold: number;
  ugLiability: number;
  pgLiability: number;
  totalLiability: number;
  payeDeductions: number;
  balancingPayment: number;
  dueDate: string;
}

interface StrategicAnalysis {
  currentPosition: {
    totalUnearned: number;
    slImpact: number;
    isOptimal: boolean;
  };
  optimizationOpportunities: {
    reduceToThreshold: {
      targetAmount: number;
      savingsAmount: number;
      feasible: boolean;
    };
    thresholdSensitivity: {
      at1999: number;
      at2001: number;
      difference: number;
    };
  };
  recommendations: string[];
  warnings: string[];
}

interface SARequirementCheck {
  isRequired: boolean;
  reasons: string[];
  exemptions: string[];
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

const UNEARNED_INCOME_THRESHOLD = 2000;

const ALLOWANCES = {
  DIVIDEND_ALLOWANCE: 500,
  PERSONAL_SAVINGS_ALLOWANCE_BASIC: 1000,
  PERSONAL_SAVINGS_ALLOWANCE_HIGHER: 500,
  PROPERTY_ALLOWANCE: 1000,
  TRADING_ALLOWANCE: 1000
};

const SA_REQUIREMENTS = {
  SELF_EMPLOYMENT_THRESHOLD: 1000,
  PROPERTY_THRESHOLD: 1000,
  UNTAXED_INCOME_THRESHOLD: 2500,
  HIGH_INCOME_THRESHOLD: 150000
};

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function analyzeUnearnedIncome(incomeSources: IncomeSource[]): UnearnedIncomeAnalysis {
  const totalUnearned = incomeSources
    .filter(source => source.type === 'UNEARNED')
    .reduce((sum, source) => sum + source.amount, 0);

  const isAboveThreshold = totalUnearned > UNEARNED_INCOME_THRESHOLD;
  const includedForSL = isAboveThreshold ? totalUnearned : 0;

  // Calculate marginal impact of being just over threshold
  const marginalImpact = isAboveThreshold && totalUnearned < 3000
    ? totalUnearned - UNEARNED_INCOME_THRESHOLD
    : 0;

  return {
    totalUnearned,
    isAboveThreshold,
    includedForSL,
    threshold: UNEARNED_INCOME_THRESHOLD,
    marginalImpact
  };
}

function calculateStudentLoan(
  incomeSources: IncomeSource[],
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean,
  payeDeductions: number,
  unearnedAnalysis: UnearnedIncomeAnalysis
): StudentLoanCalculation {
  const totalEarned = incomeSources
    .filter(source => source.type === 'EARNED')
    .reduce((sum, source) => sum + source.amount, 0);

  const totalIncome = totalEarned + unearnedAnalysis.totalUnearned;
  const totalIncomeForSL = totalEarned + unearnedAnalysis.includedForSL;

  // Calculate UG liability
  const ugIncomeAboveThreshold = Math.max(0, totalIncomeForSL - ugPlan.threshold);
  const ugLiability = ugIncomeAboveThreshold * ugPlan.rate;

  // Calculate PG liability
  const pgIncomeAboveThreshold = hasPostgraduate ? Math.max(0, totalIncomeForSL - POSTGRADUATE_LOAN.threshold) : 0;
  const pgLiability = hasPostgraduate ? pgIncomeAboveThreshold * POSTGRADUATE_LOAN.rate : 0;

  const totalLiability = ugLiability + pgLiability;
  const balancingPayment = Math.max(0, totalLiability - payeDeductions);

  const currentYear = new Date().getFullYear();
  const taxYearEnd = new Date().getMonth() >= 3 ? currentYear + 1 : currentYear;
  const dueDate = `31 January ${taxYearEnd + 1}`;

  return {
    totalIncome,
    totalIncomeForSL,
    ugIncomeAboveThreshold,
    pgIncomeAboveThreshold,
    ugLiability,
    pgLiability,
    totalLiability,
    payeDeductions,
    balancingPayment,
    dueDate
  };
}

function analyzeStrategicOptions(
  unearnedAnalysis: UnearnedIncomeAnalysis,
  slCalculation: StudentLoanCalculation,
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean
): StrategicAnalysis {
  const currentSLImpact = slCalculation.balancingPayment;

  // Calculate potential savings by reducing to threshold
  const potentialReduction = Math.max(0, unearnedAnalysis.totalUnearned - 1999);
  const combinedRate = ugPlan.rate + (hasPostgraduate ? POSTGRADUATE_LOAN.rate : 0);
  const potentialSavings = unearnedAnalysis.isAboveThreshold ?
    Math.min(potentialReduction * combinedRate, currentSLImpact) : 0;

  // Threshold sensitivity analysis
  const at1999Impact = 0; // Below threshold
  const at2001Impact = 2001 * combinedRate;
  const thresholdDifference = at2001Impact - at1999Impact;

  const recommendations: string[] = [];
  const warnings: string[] = [];

  if (unearnedAnalysis.isAboveThreshold) {
    if (unearnedAnalysis.totalUnearned < 5000) {
      recommendations.push('Consider timing strategies to reduce unearned income below £2,000');
      recommendations.push('Delay dividend payments or defer rental income if possible');
    }

    if (slCalculation.balancingPayment > 1000) {
      recommendations.push('Set aside funds monthly for SA payment');
      recommendations.push('Consider voluntary SLC payments to avoid large annual bill');
    }

    warnings.push('All unearned income included due to exceeding £2,000 threshold');
  } else {
    if (unearnedAnalysis.totalUnearned > 1800) {
      warnings.push('Close to £2,000 threshold - be careful of additional unearned income');
    }
    recommendations.push('Current position is optimized - no student loan on unearned income');
  }

  if (unearnedAnalysis.totalUnearned > 1900 && unearnedAnalysis.totalUnearned < 2100) {
    warnings.push('You are in the critical £1,900-£2,100 range where small changes have large impacts');
  }

  return {
    currentPosition: {
      totalUnearned: unearnedAnalysis.totalUnearned,
      slImpact: currentSLImpact,
      isOptimal: !unearnedAnalysis.isAboveThreshold || unearnedAnalysis.totalUnearned > 10000
    },
    optimizationOpportunities: {
      reduceToThreshold: {
        targetAmount: 1999,
        savingsAmount: potentialSavings,
        feasible: potentialReduction < 2000 && potentialSavings > 100
      },
      thresholdSensitivity: {
        at1999: at1999Impact,
        at2001: at2001Impact,
        difference: thresholdDifference
      }
    },
    recommendations,
    warnings
  };
}

function checkSARequirement(
  incomeSources: IncomeSource[],
  totalIncome: number,
  hasMultipleJobs: boolean
): SARequirementCheck {
  const reasons: string[] = [];
  const exemptions: string[] = [];

  const selfEmployment = incomeSources
    .filter(s => s.category === 'Self-Employment')
    .reduce((sum, s) => sum + s.amount, 0);

  const property = incomeSources
    .filter(s => s.category === 'Property')
    .reduce((sum, s) => sum + s.amount, 0);

  const untaxedIncome = incomeSources
    .filter(s => s.type === 'UNEARNED')
    .reduce((sum, s) => sum + s.amount, 0);

  if (selfEmployment > SA_REQUIREMENTS.SELF_EMPLOYMENT_THRESHOLD) {
    reasons.push(`Self-employment income over £${SA_REQUIREMENTS.SELF_EMPLOYMENT_THRESHOLD.toLocaleString()}`);
  }

  if (property > SA_REQUIREMENTS.PROPERTY_THRESHOLD) {
    reasons.push(`Property income over £${SA_REQUIREMENTS.PROPERTY_THRESHOLD.toLocaleString()}`);
  }

  if (untaxedIncome > SA_REQUIREMENTS.UNTAXED_INCOME_THRESHOLD) {
    reasons.push(`Untaxed income over £${SA_REQUIREMENTS.UNTAXED_INCOME_THRESHOLD.toLocaleString()}`);
  }

  if (totalIncome > SA_REQUIREMENTS.HIGH_INCOME_THRESHOLD) {
    reasons.push(`Total income over £${SA_REQUIREMENTS.HIGH_INCOME_THRESHOLD.toLocaleString()}`);
  }

  if (hasMultipleJobs) {
    reasons.push('Multiple jobs without proper PAYE deductions');
  }

  const isRequired = reasons.length > 0;

  if (!isRequired) {
    exemptions.push('Income below SA thresholds');
    exemptions.push('All income subject to PAYE');
  }

  return {
    isRequired,
    reasons,
    exemptions
  };
}

const SAUnearnedIncomeCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);

  // Income sources
  const [payeSalary, setPayeSalary] = useState<number>(25000);
  const [dividendIncome, setDividendIncome] = useState<number>(15000);
  const [propertyProfit, setPropertyProfit] = useState<number>(8000);
  const [pensionIncome, setPensionIncome] = useState<number>(0);
  const [savingsInterest, setSavingsInterest] = useState<number>(0);
  const [selfEmployment, setSelfEmployment] = useState<number>(0);
  const [otherUnearned, setOtherUnearned] = useState<number>(0);

  // PAYE deductions
  const [payeSLDeductions, setPayeSLDeductions] = useState<number>(0);
  const [hasMultipleJobs, setHasMultipleJobs] = useState<boolean>(false);

  const ugPlan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan)!;

  const incomeSources: IncomeSource[] = useMemo(() => {
    const sources: IncomeSource[] = [];

    if (payeSalary > 0) {
      sources.push({
        type: 'EARNED',
        category: 'PAYE Salary',
        amount: payeSalary,
        description: 'Employment income subject to PAYE'
      });
    }

    if (dividendIncome > 0) {
      sources.push({
        type: 'UNEARNED',
        category: 'Dividends',
        amount: dividendIncome,
        description: 'Dividend income from shares/company'
      });
    }

    if (propertyProfit > 0) {
      sources.push({
        type: 'UNEARNED',
        category: 'Property',
        amount: propertyProfit,
        description: 'Rental profits after expenses'
      });
    }

    if (pensionIncome > 0) {
      sources.push({
        type: 'UNEARNED',
        category: 'Pension',
        amount: pensionIncome,
        description: 'Private pension income'
      });
    }

    if (savingsInterest > 0) {
      sources.push({
        type: 'UNEARNED',
        category: 'Interest',
        amount: savingsInterest,
        description: 'Interest from savings accounts'
      });
    }

    if (selfEmployment > 0) {
      sources.push({
        type: 'EARNED',
        category: 'Self-Employment',
        amount: selfEmployment,
        description: 'Trading profits from self-employment'
      });
    }

    if (otherUnearned > 0) {
      sources.push({
        type: 'UNEARNED',
        category: 'Other',
        amount: otherUnearned,
        description: 'Other unearned income'
      });
    }

    return sources;
  }, [payeSalary, dividendIncome, propertyProfit, pensionIncome, savingsInterest, selfEmployment, otherUnearned]);

  const unearnedAnalysis: UnearnedIncomeAnalysis = useMemo(() => {
    return analyzeUnearnedIncome(incomeSources);
  }, [incomeSources]);

  const slCalculation: StudentLoanCalculation = useMemo(() => {
    return calculateStudentLoan(incomeSources, ugPlan, hasPostgraduate, payeSLDeductions, unearnedAnalysis);
  }, [incomeSources, ugPlan, hasPostgraduate, payeSLDeductions, unearnedAnalysis]);

  const strategicAnalysis: StrategicAnalysis = useMemo(() => {
    return analyzeStrategicOptions(unearnedAnalysis, slCalculation, ugPlan, hasPostgraduate);
  }, [unearnedAnalysis, slCalculation, ugPlan, hasPostgraduate]);

  const saRequirement: SARequirementCheck = useMemo(() => {
    return checkSARequirement(incomeSources, slCalculation.totalIncome, hasMultipleJobs);
  }, [incomeSources, slCalculation.totalIncome, hasMultipleJobs]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">SA Unearned Income Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SA Unearned Income Student Loan Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Understand the critical £2,000 unearned income threshold and its impact on student loan calculations.
            Dividends, property income, and other unearned income can trigger significant SA payments.
          </p>
        </div>
      </section>

      {/* Critical Threshold Alert */}
      <section className="max-w-6xl mx-auto">
        <div className={`border-l-4 p-6 rounded-lg ${unearnedAnalysis.isAboveThreshold
            ? 'bg-red-50 border-red-400'
            : unearnedAnalysis.totalUnearned > 1800
              ? 'bg-yellow-50 border-yellow-400'
              : 'bg-green-50 border-green-400'
          }`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className={`h-6 w-6 ${unearnedAnalysis.isAboveThreshold ? 'text-red-400' :
                  unearnedAnalysis.totalUnearned > 1800 ? 'text-yellow-400' : 'text-green-400'
                }`} fill="currentColor" viewBox="0 0 20 20">
                {unearnedAnalysis.isAboveThreshold ? (
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                )}
              </svg>
            </div>
            <div className="ml-3">
              <h3 className={`text-lg font-medium ${unearnedAnalysis.isAboveThreshold ? 'text-red-800' :
                  unearnedAnalysis.totalUnearned > 1800 ? 'text-yellow-800' : 'text-green-800'
                }`}>
                £2,000 Unearned Income Threshold Status
              </h3>
              <div className={`mt-2 text-sm ${unearnedAnalysis.isAboveThreshold ? 'text-red-700' :
                  unearnedAnalysis.totalUnearned > 1800 ? 'text-yellow-700' : 'text-green-700'
                }`}>
                <p className="mb-2">
                  <strong>Your unearned income:</strong> {fmtMoney(unearnedAnalysis.totalUnearned)}
                </p>
                <p className="mb-2">
                  <strong>Threshold:</strong> {fmtMoney(unearnedAnalysis.threshold)}
                </p>
                <p>
                  <strong>Result:</strong> {unearnedAnalysis.isAboveThreshold
                    ? `ALL £${unearnedAnalysis.totalUnearned.toLocaleString()} included for student loan calculation`
                    : 'Unearned income ignored for student loan purposes'
                  }
                </p>
                {unearnedAnalysis.totalUnearned > 1800 && !unearnedAnalysis.isAboveThreshold && (
                  <p className="mt-2 font-medium">
                    ⚠️ You&apos;re close to the threshold - be careful of additional unearned income!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <h3 className="text-sm font-semibold text-gray-800">Unearned Income Rule</h3>
                  <p className="text-sm text-gray-600">
                    All-or-nothing: Below £2,000 = ignored, Above £2,000 = all included for student loans.
                  </p>
                </div>
              </div>
            </div>

            {/* Student Loan Configuration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Loan Plan
              </label>
              <select
                value={selectedPlan}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
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
                  className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                I also have a postgraduate loan
              </label>
            </div>

            {/* Earned Income */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Earned Income</h4>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">PAYE Salary/Employment</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={payeSalary}
                      onChange={(e) => setPayeSalary(Number(e.target.value) || 0)}
                      min={0}
                      max={150000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Self-Employment Trading Profits</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={selfEmployment}
                      onChange={(e) => setSelfEmployment(Number(e.target.value) || 0)}
                      min={0}
                      max={100000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Unearned Income */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Unearned Income</h4>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Dividend Income (Gross)</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={dividendIncome}
                      onChange={(e) => setDividendIncome(Number(e.target.value) || 0)}
                      min={0}
                      max={100000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Property Rental Profits</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={propertyProfit}
                      onChange={(e) => setPropertyProfit(Number(e.target.value) || 0)}
                      min={0}
                      max={50000}
                      step={500}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">After expenses, before finance costs</p>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Pension Income</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={pensionIncome}
                      onChange={(e) => setPensionIncome(Number(e.target.value) || 0)}
                      min={0}
                      max={50000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Savings Interest</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={savingsInterest}
                      onChange={(e) => setSavingsInterest(Number(e.target.value) || 0)}
                      min={0}
                      max={10000}
                      step={100}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Other Unearned Income</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={otherUnearned}
                      onChange={(e) => setOtherUnearned(Number(e.target.value) || 0)}
                      min={0}
                      max={20000}
                      step={500}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PAYE Deductions */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3">PAYE Deductions</h4>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Student Loan PAYE Deductions Made</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      type="number"
                      value={payeSLDeductions}
                      onChange={(e) => setPayeSLDeductions(Number(e.target.value) || 0)}
                      min={0}
                      max={10000}
                      step={100}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">From P60 or payslips (annual total)</p>
                </div>

                <div>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={hasMultipleJobs}
                      onChange={(e) => setHasMultipleJobs(e.target.checked)}
                      className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    I have multiple jobs/income sources
                  </label>
                </div>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Quick Summary</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Total unearned:</span>
                  <span className="font-medium">{fmtMoney(unearnedAnalysis.totalUnearned)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Included for SL:</span>
                  <span className="font-medium">{fmtMoney(unearnedAnalysis.includedForSL)}</span>
                </div>
                <div className="flex justify-between border-t pt-1">
                  <span>SA payment due:</span>
                  <span className="font-medium text-red-600">{fmtMoney(slCalculation.balancingPayment)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">

            {/* Income Breakdown */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Income Analysis</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Earned Income</h3>
                  <div className="space-y-2 text-sm">
                    {incomeSources.filter(s => s.type === 'EARNED').map((source, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{source.category}:</span>
                        <span>{fmtMoney(source.amount)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total Earned:</span>
                      <span>{fmtMoney(incomeSources.filter(s => s.type === 'EARNED').reduce((sum, s) => sum + s.amount, 0))}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Unearned Income</h3>
                  <div className="space-y-2 text-sm">
                    {incomeSources.filter(s => s.type === 'UNEARNED').map((source, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{source.category}:</span>
                        <span>{fmtMoney(source.amount)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total Unearned:</span>
                      <span>{fmtMoney(unearnedAnalysis.totalUnearned)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* £2,000 Rule Application */}
              <div className="mt-6 p-4 bg-white rounded border">
                <h4 className="font-medium text-gray-800 mb-2">£2,000 Unearned Income Rule</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Total unearned income:</span>
                    <span className="font-medium">{fmtMoney(unearnedAnalysis.totalUnearned)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>£2,000 threshold:</span>
                    <span>{fmtMoney(unearnedAnalysis.threshold)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className={`font-medium ${unearnedAnalysis.isAboveThreshold ? 'text-red-600' : 'text-green-600'}`}>
                      {unearnedAnalysis.isAboveThreshold ? 'Above threshold' : 'Below threshold'}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-semibold">
                    <span>Included for student loan:</span>
                    <span className={unearnedAnalysis.isAboveThreshold ? 'text-red-600' : 'text-green-600'}>
                      {fmtMoney(unearnedAnalysis.includedForSL)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Loan Calculation */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Loan Calculation</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Liability Calculation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total income for SL:</span>
                      <span>{fmtMoney(slCalculation.totalIncomeForSL)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{ugPlan.name} threshold:</span>
                      <span>{fmtMoney(ugPlan.threshold)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UG income above threshold:</span>
                      <span>{fmtMoney(slCalculation.ugIncomeAboveThreshold)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UG liability ({fmtPercent(ugPlan.rate)}):</span>
                      <span className="font-medium">{fmtMoney(slCalculation.ugLiability)}</span>
                    </div>
                    {hasPostgraduate && (
                      <>
                        <div className="flex justify-between">
                          <span>PG income above threshold:</span>
                          <span>{fmtMoney(slCalculation.pgIncomeAboveThreshold)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PG liability ({fmtPercent(POSTGRADUATE_LOAN.rate)}):</span>
                          <span className="font-medium">{fmtMoney(slCalculation.pgLiability)}</span>
                        </div>
                      </>
                    )}
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total liability:</span>
                      <span>{fmtMoney(slCalculation.totalLiability)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Self Assessment Payment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total liability:</span>
                      <span>{fmtMoney(slCalculation.totalLiability)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PAYE deductions made:</span>
                      <span>-{fmtMoney(slCalculation.payeDeductions)}</span>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-700">
                          {fmtMoney(slCalculation.balancingPayment)}
                        </div>
                        <div className="text-sm text-red-600">Due via Self Assessment</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Payment deadline: {slCalculation.dueDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Threshold Sensitivity Analysis */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">£2,000 Threshold Sensitivity</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Scenario Comparison</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">At £1,999 unearned income:</div>
                        <div className="text-green-600">Student loan liability: {fmtMoney(strategicAnalysis.optimizationOpportunities.thresholdSensitivity.at1999)}</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">At £2,001 unearned income:</div>
                        <div className="text-red-600">Student loan liability: {fmtMoney(strategicAnalysis.optimizationOpportunities.thresholdSensitivity.at2001)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Cliff Edge Impact</h4>
                  <div className="bg-white p-4 rounded border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-700">
                        {fmtMoney(strategicAnalysis.optimizationOpportunities.thresholdSensitivity.difference)}
                      </div>
                      <div className="text-sm text-orange-600">Difference for £2 of income</div>
                      <div className="text-xs text-gray-500 mt-1">
                        This demonstrates the &quot;cliff edge&quot; effect
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-orange-700">
                    <p><strong>Critical Range:</strong> £1,900 - £2,100 unearned income creates maximum planning opportunities and risks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Analysis */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Strategic Planning</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Current Position</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Unearned income:</span>
                      <span className="font-medium">{fmtMoney(strategicAnalysis.currentPosition.totalUnearned)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SL impact:</span>
                      <span className="font-medium">{fmtMoney(strategicAnalysis.currentPosition.slImpact)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Position status:</span>
                      <span className={`font-medium ${strategicAnalysis.currentPosition.isOptimal ? 'text-green-600' : 'text-orange-600'}`}>
                        {strategicAnalysis.currentPosition.isOptimal ? 'Optimized' : 'Could improve'}
                      </span>
                    </div>
                  </div>

                  {strategicAnalysis.optimizationOpportunities.reduceToThreshold.feasible && (
                    <div className="mt-4 bg-white p-3 rounded border">
                      <h5 className="font-medium text-gray-800 text-sm">Optimization Opportunity</h5>
                      <div className="text-sm text-gray-600 mt-1">
                        <p>Reduce to £{strategicAnalysis.optimizationOpportunities.reduceToThreshold.targetAmount.toLocaleString()}</p>
                        <p><strong>Potential savings:</strong> {fmtMoney(strategicAnalysis.optimizationOpportunities.reduceToThreshold.savingsAmount)}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Recommendations</h4>
                  <ul className="space-y-2 text-sm">
                    {strategicAnalysis.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SA Requirement Check */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Self Assessment Requirement</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">
                    SA Required: {saRequirement.isRequired ?
                      <span className="text-red-600">Yes</span> :
                      <span className="text-green-600">No</span>
                    }
                  </h4>

                  {saRequirement.isRequired ? (
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Reasons:</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {saRequirement.reasons.map((reason, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Exemptions:</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {saRequirement.exemptions.map((exemption, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{exemption}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Key Deadlines</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div><strong>SA Return:</strong> 31 January online deadline</div>
                    <div><strong>Payment:</strong> 31 January for tax and SL</div>
                    <div><strong>Late Filing:</strong> £100 penalty minimum</div>
                    <div><strong>Late Payment:</strong> 5% penalty after deadline</div>
                  </div>

                  {slCalculation.balancingPayment > 0 && (
                    <div className="mt-3 bg-white p-3 rounded border">
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">Monthly savings target:</div>
                        <div className="text-blue-600">{fmtMoney(slCalculation.balancingPayment / 12)} per month</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Warnings */}
            {strategicAnalysis.warnings.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Warnings</h3>
                <ul className="space-y-2">
                  {strategicAnalysis.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start text-sm text-yellow-700">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{warning}</span>
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Unearned Income Student Loans</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">The £2,000 Cliff Edge</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• All-or-nothing rule: not a gradual threshold</li>
              <li>• £1,999 unearned = £0 student loan impact</li>
              <li>• £2,001 unearned = ALL £2,001 included</li>
              <li>• Can create massive liability for small income increase</li>
              <li>• Critical for dividend and property planning</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What Counts as Unearned</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Dividend income (before dividend allowance)</li>
              <li>• Property rental profits</li>
              <li>• Pension income</li>
              <li>• Interest from savings</li>
              <li>• Investment income</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Planning Examples</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-800">Limited company director:</p>
              <p>Taking £12,570 salary + £40,000 dividends triggers {fmtMoney(slCalculation.balancingPayment)} student loan payment.
                Consider whether higher salary with PAYE deductions might be more tax-efficient.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Property investor:</p>
              <p>Rental profits of {fmtMoney(propertyProfit)} push total unearned income above £2,000,
                creating student loan liability on ALL unearned income. Consider timing of rental income or expense planning.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Threshold management:</p>
              <p>If close to £2,000, small adjustments in timing can save significant amounts.
                However, don&apos;t let the tail wag the dog - overall tax efficiency matters more than just student loan optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto bg-amber-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Need Help with Unearned Income Planning?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          The £2,000 unearned income threshold can have dramatic effects on student loan liability.
          Get professional advice on optimizing your income structure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.gov.uk/self-assessment-tax-returns"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Self Assessment Info
          </a>
          <a
            href="https://www.gov.uk/repaying-your-student-loan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Student Loan Guidance
          </a>
        </div>
      </section>
    </div>
  );
};

export default SAUnearnedIncomeCalculator;