"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  id: string;
  name: string;
  threshold: number;
  repaymentRate: number;
  interestRate: number;
  description: string;
}

interface RegionConfig {
  id: string;
  name: string;
  hasPostgradLoans: boolean;
  postgraduateThreshold: number;
  postgraduateRate: number;
  combinedSystem: boolean;
  description: string;
}

interface UndergraduateLoan {
  plan: LoanPlan;
  balance: number;
  interestRate: number;
}

interface PostgraduateLoan {
  balance: number;
  threshold: number;
  repaymentRate: number;
  interestRate: number;
}

interface RepaymentCalculation {
  monthlyIncome: number;
  annualIncome: number;
  ugRepayment: {
    annual: number;
    monthly: number;
    plan: string;
    threshold: number;
    incomeAboveThreshold: number;
  };
  pgRepayment: {
    annual: number;
    monthly: number;
    threshold: number;
    incomeAboveThreshold: number;
  };
  totalRepayment: {
    annual: number;
    monthly: number;
    effectiveRate: number;
    maxPossibleRate: number;
  };
  takeHome: {
    beforeRepayments: number;
    afterRepayments: number;
    reductionPercent: number;
  };
  projectedPayoff: {
    ugYears: number;
    pgYears: number;
    bothPaidOff: boolean;
  };
}

interface BalanceProjection {
  year: number;
  ugBalance: number;
  pgBalance: number;
  ugPayment: number;
  pgPayment: number;
  ugInterest: number;
  pgInterest: number;
}

// Constants
const REGIONS: RegionConfig[] = [
  {
    id: 'england',
    name: 'England',
    hasPostgradLoans: true,
    postgraduateThreshold: 21000,
    postgraduateRate: 0.06,
    combinedSystem: false,
    description: 'Separate UG and PG loan repayments (up to 15% combined)'
  },
  {
    id: 'wales',
    name: 'Wales',
    hasPostgradLoans: true,
    postgraduateThreshold: 21000,
    postgraduateRate: 0.06,
    combinedSystem: false,
    description: 'Separate UG and PG loan repayments (follows England system)'
  },
  {
    id: 'scotland',
    name: 'Scotland',
    hasPostgradLoans: false,
    postgraduateThreshold: 31395,
    postgraduateRate: 0.09,
    combinedSystem: true,
    description: 'Combined UG+PG into single Plan 4 loan (9% total)'
  },
  {
    id: 'northern-ireland',
    name: 'Northern Ireland',
    hasPostgradLoans: false,
    postgraduateThreshold: 22015,
    postgraduateRate: 0.09,
    combinedSystem: true,
    description: 'Combined UG+PG into single Plan 1 loan (9% total)'
  }
];

const UG_PLANS: LoanPlan[] = [
  {
    id: 'PLAN_1',
    name: 'Plan 1',
    threshold: 22015,
    repaymentRate: 0.09,
    interestRate: 0.046,
    description: 'Pre-2012 students (England/Wales) or all Northern Ireland students'
  },
  {
    id: 'PLAN_2',
    name: 'Plan 2',
    threshold: 27295,
    repaymentRate: 0.09,
    interestRate: 0.073,
    description: '2012-2023 students (England/Wales)'
  },
  {
    id: 'PLAN_4',
    name: 'Plan 4',
    threshold: 31395,
    repaymentRate: 0.09,
    interestRate: 0.043,
    description: 'Scottish students (all years)'
  },
  {
    id: 'PLAN_5',
    name: 'Plan 5',
    threshold: 25000,
    repaymentRate: 0.09,
    interestRate: 0.046,
    description: 'England students from August 2023'
  }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateSeparateRepayments(
  income: number,
  ugLoan: UndergraduateLoan,
  pgLoan: PostgraduateLoan
): RepaymentCalculation {
  const monthlyIncome = income / 12;

  // Calculate UG repayment
  const ugIncomeAboveThreshold = Math.max(0, income - ugLoan.plan.threshold);
  const ugAnnualRepayment = ugIncomeAboveThreshold * ugLoan.plan.repaymentRate;
  const ugMonthlyRepayment = ugAnnualRepayment / 12;

  // Calculate PG repayment
  const pgIncomeAboveThreshold = Math.max(0, income - pgLoan.threshold);
  const pgAnnualRepayment = pgIncomeAboveThreshold * pgLoan.repaymentRate;
  const pgMonthlyRepayment = pgAnnualRepayment / 12;

  // Total repayments
  const totalAnnualRepayment = ugAnnualRepayment + pgAnnualRepayment;
  const totalMonthlyRepayment = totalAnnualRepayment / 12;

  // Effective rate calculation
  const lowestThreshold = Math.min(ugLoan.plan.threshold, pgLoan.threshold);
  const incomeAboveLowestThreshold = Math.max(0, income - lowestThreshold);
  const effectiveRate = incomeAboveLowestThreshold > 0 ? totalAnnualRepayment / incomeAboveLowestThreshold : 0;
  const maxPossibleRate = ugLoan.plan.repaymentRate + pgLoan.repaymentRate; // 15% for England/Wales

  // Take-home impact (simplified - doesn't include tax/NI)
  const beforeRepayments = income * 0.75; // Rough estimate after tax/NI
  const afterRepayments = beforeRepayments - totalAnnualRepayment;
  const reductionPercent = (totalAnnualRepayment / beforeRepayments) * 100;

  // Simple payoff projections
  const ugYears = ugLoan.balance > 0 && ugAnnualRepayment > 0
    ? Math.max(1, ugLoan.balance / Math.max(ugAnnualRepayment, ugLoan.balance * ugLoan.interestRate))
    : Infinity;
  const pgYears = pgLoan.balance > 0 && pgAnnualRepayment > 0
    ? Math.max(1, pgLoan.balance / Math.max(pgAnnualRepayment, pgLoan.balance * pgLoan.interestRate))
    : Infinity;

  return {
    monthlyIncome,
    annualIncome: income,
    ugRepayment: {
      annual: ugAnnualRepayment,
      monthly: ugMonthlyRepayment,
      plan: ugLoan.plan.name,
      threshold: ugLoan.plan.threshold,
      incomeAboveThreshold: ugIncomeAboveThreshold
    },
    pgRepayment: {
      annual: pgAnnualRepayment,
      monthly: pgMonthlyRepayment,
      threshold: pgLoan.threshold,
      incomeAboveThreshold: pgIncomeAboveThreshold
    },
    totalRepayment: {
      annual: totalAnnualRepayment,
      monthly: totalMonthlyRepayment,
      effectiveRate,
      maxPossibleRate
    },
    takeHome: {
      beforeRepayments,
      afterRepayments,
      reductionPercent
    },
    projectedPayoff: {
      ugYears: isFinite(ugYears) ? ugYears : 30, // Default to write-off
      pgYears: isFinite(pgYears) ? pgYears : 30,
      bothPaidOff: isFinite(ugYears) && isFinite(pgYears)
    }
  };
}

function calculateCombinedRepayments(
  income: number,
  ugLoan: UndergraduateLoan,
  pgBalance: number,
  combinedThreshold: number
): RepaymentCalculation {
  const monthlyIncome = income / 12;
  const totalBalance = ugLoan.balance + pgBalance;

  // Single repayment calculation
  const incomeAboveThreshold = Math.max(0, income - combinedThreshold);
  const totalAnnualRepayment = incomeAboveThreshold * ugLoan.plan.repaymentRate;
  const totalMonthlyRepayment = totalAnnualRepayment / 12;

  // Allocation between UG and PG (proportional to balances)
  const ugProportion = ugLoan.balance / totalBalance;
  const pgProportion = pgBalance / totalBalance;

  const ugAnnualRepayment = totalAnnualRepayment * ugProportion;
  const pgAnnualRepayment = totalAnnualRepayment * pgProportion;

  // Effective rate
  const effectiveRate = incomeAboveThreshold > 0 ? totalAnnualRepayment / incomeAboveThreshold : 0;

  // Take-home impact
  const beforeRepayments = income * 0.75;
  const afterRepayments = beforeRepayments - totalAnnualRepayment;
  const reductionPercent = (totalAnnualRepayment / beforeRepayments) * 100;

  // Payoff projections
  const combinedYears = totalBalance > 0 && totalAnnualRepayment > 0
    ? Math.max(1, totalBalance / Math.max(totalAnnualRepayment, totalBalance * ugLoan.interestRate))
    : 30;

  return {
    monthlyIncome,
    annualIncome: income,
    ugRepayment: {
      annual: ugAnnualRepayment,
      monthly: ugAnnualRepayment / 12,
      plan: ugLoan.plan.name,
      threshold: combinedThreshold,
      incomeAboveThreshold: incomeAboveThreshold * ugProportion
    },
    pgRepayment: {
      annual: pgAnnualRepayment,
      monthly: pgAnnualRepayment / 12,
      threshold: combinedThreshold,
      incomeAboveThreshold: incomeAboveThreshold * pgProportion
    },
    totalRepayment: {
      annual: totalAnnualRepayment,
      monthly: totalMonthlyRepayment,
      effectiveRate,
      maxPossibleRate: ugLoan.plan.repaymentRate
    },
    takeHome: {
      beforeRepayments,
      afterRepayments,
      reductionPercent
    },
    projectedPayoff: {
      ugYears: combinedYears,
      pgYears: combinedYears,
      bothPaidOff: isFinite(combinedYears)
    }
  };
}

function generateBalanceProjections(
  calculation: RepaymentCalculation,
  ugLoan: UndergraduateLoan,
  pgLoan: PostgraduateLoan,
  years: number = 10
): BalanceProjection[] {
  const projections: BalanceProjection[] = [];
  let ugBalance = ugLoan.balance;
  let pgBalance = pgLoan.balance;

  for (let year = 1; year <= years; year++) {
    // Interest accrual
    const ugInterest = ugBalance * ugLoan.interestRate;
    const pgInterest = pgBalance * pgLoan.interestRate;

    // Add interest
    ugBalance += ugInterest;
    pgBalance += pgInterest;

    // Subtract payments
    const ugPayment = Math.min(ugBalance, calculation.ugRepayment.annual);
    const pgPayment = Math.min(pgBalance, calculation.pgRepayment.annual);

    ugBalance = Math.max(0, ugBalance - ugPayment);
    pgBalance = Math.max(0, pgBalance - pgPayment);

    projections.push({
      year,
      ugBalance,
      pgBalance,
      ugPayment,
      pgPayment,
      ugInterest,
      pgInterest
    });

    if (ugBalance === 0 && pgBalance === 0) break;
  }

  return projections;
}

const CombinedUGPGCalculator: React.FC = () => {
  const [annualIncome, setAnnualIncome] = useState<number>(40000);
  const [selectedRegion, setSelectedRegion] = useState<string>('england');
  const [selectedUGPlan, setSelectedUGPlan] = useState<string>('PLAN_2');
  const [ugBalance, setUGBalance] = useState<number>(35000);
  const [pgBalance, setPGBalance] = useState<number>(15000);
  const [hasPGLoan, setHasPGLoan] = useState<boolean>(true);

  const region = REGIONS.find(r => r.id === selectedRegion)!;
  const ugPlan = UG_PLANS.find(p => p.id === selectedUGPlan)!;

  const calculation: RepaymentCalculation = useMemo(() => {
    const ugLoan: UndergraduateLoan = {
      plan: ugPlan,
      balance: ugBalance,
      interestRate: ugPlan.interestRate
    };

    if (!hasPGLoan) {
      // UG loan only
      const pgLoan: PostgraduateLoan = {
        balance: 0,
        threshold: region.postgraduateThreshold,
        repaymentRate: 0,
        interestRate: 0
      };

      if (region.combinedSystem) {
        return calculateCombinedRepayments(annualIncome, ugLoan, 0, ugPlan.threshold);
      } else {
        return calculateSeparateRepayments(annualIncome, ugLoan, pgLoan);
      }
    }

    const pgLoan: PostgraduateLoan = {
      balance: pgBalance,
      threshold: region.postgraduateThreshold,
      repaymentRate: region.postgraduateRate,
      interestRate: 0.073 // Postgraduate interest rate
    };

    if (region.combinedSystem) {
      return calculateCombinedRepayments(annualIncome, ugLoan, pgBalance, ugPlan.threshold);
    } else {
      return calculateSeparateRepayments(annualIncome, ugLoan, pgLoan);
    }
  }, [annualIncome, selectedRegion, selectedUGPlan, ugBalance, pgBalance, hasPGLoan, region, ugPlan]);

  const projections = useMemo(() => {
    if (!hasPGLoan) return [];

    const ugLoan: UndergraduateLoan = {
      plan: ugPlan,
      balance: ugBalance,
      interestRate: ugPlan.interestRate
    };

    const pgLoan: PostgraduateLoan = {
      balance: pgBalance,
      threshold: region.postgraduateThreshold,
      repaymentRate: region.postgraduateRate,
      interestRate: 0.073
    };

    return generateBalanceProjections(calculation, ugLoan, pgLoan);
  }, [calculation, ugPlan, ugBalance, pgBalance, region, hasPGLoan]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Combined UG + PG Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Combined UG + PG Repayment Allocator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how undergraduate and postgraduate loan repayments combine and are allocated.
              See the total impact on your take-home pay and plan for both loans together.
            </p>
          </div>
        </section>

        {/* Warning for High Combined Rates */}
        {calculation.totalRepayment.effectiveRate > 0.12 && (
          <section className="max-w-6xl mx-auto">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 sm:p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base sm:text-lg font-medium text-orange-800">High Combined Repayment Rate</h3>
                  <div className="mt-2 text-xs sm:text-sm text-orange-700">
                    <p className="mb-2">
                      Your combined student loan repayments are {fmtPercent(calculation.totalRepayment.effectiveRate)}
                      of income above the lowest threshold - this is a significant portion of your income.
                    </p>
                    <p>
                      <strong>Annual impact:</strong> {fmtMoney(calculation.totalRepayment.annual)}
                      ({fmtPercent(calculation.takeHome.reductionPercent)} reduction in take-home pay)
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
              <div className="bg-rose-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-rose-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Combined Repayments</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {region.combinedSystem
                        ? 'Your region combines UG and PG loans into a single repayment'
                        : 'Your region requires separate repayments for UG and PG loans (up to 15% total)'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Annual Income */}
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Gross Income
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="income"
                    min={0}
                    max={200000}
                    step={1000}
                    value={annualIncome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualIncome(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={20000}
                    max={100000}
                    step={1000}
                    value={Math.min(100000, Math.max(20000, annualIncome))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualIncome(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Monthly: {fmtMoney(annualIncome / 12)}
                </p>
              </div>

              {/* Region Selection */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                  Region (Where You Got Student Finance)
                </label>
                <select
                  id="region"
                  value={selectedRegion}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedRegion(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm pr-8"
                >
                  {REGIONS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {region.description}
                </p>
              </div>

              {/* UG Plan Selection */}
              <div>
                <label htmlFor="ug-plan" className="block text-sm font-medium text-gray-700 mb-2">
                  Undergraduate Loan Plan
                </label>
                <select
                  id="ug-plan"
                  value={selectedUGPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedUGPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm pr-8"
                >
                  {UG_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {fmtMoney(plan.threshold)}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {ugPlan.description}
                </p>
              </div>

              {/* UG Balance */}
              <div>
                <label htmlFor="ugBalance" className="block text-sm font-medium text-gray-700 mb-1">
                  Undergraduate Loan Balance
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="ugBalance"
                    min={0}
                    max={100000}
                    step={1000}
                    value={ugBalance}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUGBalance(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={0}
                    max={80000}
                    step={1000}
                    value={Math.min(80000, Math.max(0, ugBalance))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUGBalance(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* PG Loan Toggle */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={hasPGLoan}
                    onChange={(e) => setHasPGLoan(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                  />
                  I have a postgraduate loan
                </label>
                {!region.hasPostgradLoans && (
                  <p className="mt-1 text-xs text-orange-600">
                    {region.name} doesn&apos;t offer separate postgraduate loans - PG debt is combined with undergraduate
                  </p>
                )}
              </div>

              {/* PG Balance */}
              {hasPGLoan && region.hasPostgradLoans && (
                <div>
                  <label htmlFor="pgBalance" className="block text-sm font-medium text-gray-700 mb-1">
                    Postgraduate Loan Balance
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      id="pgBalance"
                      min={0}
                      max={50000}
                      step={1000}
                      value={pgBalance}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPGBalance(Number(e.target.value) || 0)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="range"
                      min={0}
                      max={30000}
                      step={1000}
                      value={Math.min(30000, Math.max(0, pgBalance))}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPGBalance(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* System Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Repayment System</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Region:</strong> {region.name}</p>
                  <p><strong>System:</strong> {region.combinedSystem ? 'Combined loans' : 'Separate repayments'}</p>
                  {region.combinedSystem ? (
                    <>
                      <p className="truncate"><strong>Combined threshold:</strong> {fmtMoney(ugPlan.threshold)}</p>
                      <p><strong>Single rate:</strong> {fmtPercent(ugPlan.repaymentRate)}</p>
                    </>
                  ) : (
                    <>
                      <p className="truncate"><strong>UG threshold:</strong> {fmtMoney(ugPlan.threshold)} ({fmtPercent(ugPlan.repaymentRate)})</p>
                      {region.hasPostgradLoans && (
                        <p className="truncate"><strong>PG threshold:</strong> {fmtMoney(region.postgraduateThreshold)} ({fmtPercent(region.postgraduateRate)})</p>
                      )}
                      <p><strong>Max combined:</strong> {fmtPercent(ugPlan.repaymentRate + region.postgraduateRate)}</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Monthly Repayment Breakdown */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Monthly Repayment Breakdown</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-700">{fmtMoney(calculation.ugRepayment.monthly)}</p>
                    <p className="text-sm text-gray-600">Undergraduate Loan</p>
                    <p className="text-xs text-gray-500">{calculation.ugRepayment.plan}</p>
                  </div>

                  {hasPGLoan && region.hasPostgradLoans && (
                    <div className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-green-700">{fmtMoney(calculation.pgRepayment.monthly)}</p>
                      <p className="text-sm text-gray-600">Postgraduate Loan</p>
                      <p className="text-xs text-gray-500">{fmtPercent(region.postgraduateRate)} rate</p>
                    </div>
                  )}

                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-800">{fmtMoney(calculation.totalRepayment.monthly)}</p>
                    <p className="text-sm text-gray-600">Total Monthly</p>
                    <p className="text-xs text-gray-500">
                      {fmtPercent(calculation.totalRepayment.effectiveRate)} effective rate
                    </p>
                  </div>
                </div>

                {/* Income Allocation Chart */}
                <div className="bg-white p-3 sm:p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Monthly Income Allocation</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span>Gross Monthly Income</span>
                      <span className="font-medium">{fmtMoney(calculation.monthlyIncome)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span>Est. After Tax/NI (~75%)</span>
                      <span className="font-medium">{fmtMoney(calculation.takeHome.beforeRepayments / 12)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-blue-700">
                      <span>Less: UG Loan Repayment</span>
                      <span className="font-medium">-{fmtMoney(calculation.ugRepayment.monthly)}</span>
                    </div>
                    {hasPGLoan && region.hasPostgradLoans && calculation.pgRepayment.monthly > 0 && (
                      <div className="flex items-center justify-between text-xs sm:text-sm text-green-700">
                        <span>Less: PG Loan Repayment</span>
                        <span className="font-medium">-{fmtMoney(calculation.pgRepayment.monthly)}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span>Est. Take-Home After Loans</span>
                      <span>{fmtMoney(calculation.takeHome.afterRepayments / 12)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual Summary */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Annual Repayment Summary</h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-1 sm:px-0">Loan Type</th>
                          <th className="text-right py-2 px-1 hidden md:table-cell">Threshold</th>
                          <th className="text-right py-2 px-1 hidden lg:table-cell">Income Above</th>
                          <th className="text-right py-2 px-1">Rate</th>
                          <th className="text-right py-2 px-1">Annual Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-1 sm:px-0 font-medium">UG ({calculation.ugRepayment.plan})</td>
                          <td className="text-right py-2 px-1 hidden md:table-cell">{fmtMoney(calculation.ugRepayment.threshold)}</td>
                          <td className="text-right py-2 px-1 hidden lg:table-cell">{fmtMoney(calculation.ugRepayment.incomeAboveThreshold)}</td>
                          <td className="text-right py-2 px-1">{fmtPercent(ugPlan.repaymentRate)}</td>
                          <td className="text-right py-2 px-1 font-medium">{fmtMoney(calculation.ugRepayment.annual)}</td>
                        </tr>
                        {hasPGLoan && region.hasPostgradLoans && (
                          <tr className="border-b border-gray-100">
                            <td className="py-2 px-1 sm:px-0 font-medium">Postgraduate</td>
                            <td className="text-right py-2 px-1 hidden md:table-cell">{fmtMoney(calculation.pgRepayment.threshold)}</td>
                            <td className="text-right py-2 px-1 hidden lg:table-cell">{fmtMoney(calculation.pgRepayment.incomeAboveThreshold)}</td>
                            <td className="text-right py-2 px-1">{fmtPercent(region.postgraduateRate)}</td>
                            <td className="text-right py-2 px-1 font-medium">{fmtMoney(calculation.pgRepayment.annual)}</td>
                          </tr>
                        )}
                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 px-1 sm:px-0">Total Combined</td>
                          <td className="text-right py-2 px-1 hidden md:table-cell">-</td>
                          <td className="text-right py-2 px-1 hidden lg:table-cell">-</td>
                          <td className="text-right py-2 px-1">{fmtPercent(calculation.totalRepayment.effectiveRate)}</td>
                          <td className="text-right py-2 px-1">{fmtMoney(calculation.totalRepayment.annual)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Balance Projections */}
              {hasPGLoan && projections.length > 0 && (
                <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">10-Year Balance Projections</h3>
                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <table className="min-w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 px-1 sm:px-0">Year</th>
                            <th className="text-right py-2 px-1 hidden md:table-cell">UG Payment</th>
                            <th className="text-right py-2 px-1">UG Balance</th>
                            <th className="text-right py-2 px-1 hidden md:table-cell">PG Payment</th>
                            <th className="text-right py-2 px-1">PG Balance</th>
                            <th className="text-right py-2 px-1">Combined</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100 bg-gray-50">
                            <td className="py-2 px-1 sm:px-0 font-medium">Current</td>
                            <td className="text-right py-2 px-1 hidden md:table-cell">-</td>
                            <td className="text-right py-2 px-1">{fmtMoney(ugBalance)}</td>
                            <td className="text-right py-2 px-1 hidden md:table-cell">-</td>
                            <td className="text-right py-2 px-1">{fmtMoney(pgBalance)}</td>
                            <td className="text-right py-2 px-1 font-medium">{fmtMoney(ugBalance + pgBalance)}</td>
                          </tr>
                          {projections.slice(0, 5).map((proj) => (
                            <tr key={proj.year} className="border-b border-gray-100">
                              <td className="py-2 px-1 sm:px-0">Yr {proj.year}</td>
                              <td className="text-right py-2 px-1 hidden md:table-cell">{fmtMoney(proj.ugPayment)}</td>
                              <td className="text-right py-2 px-1">{fmtMoney(proj.ugBalance)}</td>
                              <td className="text-right py-2 px-1 hidden md:table-cell">{fmtMoney(proj.pgPayment)}</td>
                              <td className="text-right py-2 px-1">{fmtMoney(proj.pgBalance)}</td>
                              <td className="text-right py-2 px-1 font-medium">{fmtMoney(proj.ugBalance + proj.pgBalance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mt-4 text-xs sm:text-sm text-gray-600">
                    <p><strong>Projected payoff:</strong></p>
                    <p>• UG Loan: {calculation.projectedPayoff.ugYears > 30 ? 'Write-off after 30 years' : `${calculation.projectedPayoff.ugYears.toFixed(1)} years`}</p>
                    {hasPGLoan && region.hasPostgradLoans && (
                      <p>• PG Loan: {calculation.projectedPayoff.pgYears > 30 ? 'Write-off after 30 years' : `${calculation.projectedPayoff.pgYears.toFixed(1)} years`}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Impact Analysis */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Financial Impact Analysis</h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Take-Home Impact</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Annual loan repayments:</span>
                        <span className="font-medium">{fmtMoney(calculation.totalRepayment.annual)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reduction in take-home:</span>
                        <span className="font-medium text-red-700">{fmtPercent(calculation.takeHome.reductionPercent)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Effective marginal rate:</span>
                        <span className="font-medium">{fmtPercent(calculation.totalRepayment.effectiveRate)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Comparison Scenarios</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>If UG loan only:</span>
                        <span className="font-medium">{fmtMoney(calculation.ugRepayment.annual)}</span>
                      </div>
                      {hasPGLoan && region.hasPostgradLoans && (
                        <div className="flex justify-between">
                          <span>If PG loan only:</span>
                          <span className="font-medium">{fmtMoney(calculation.pgRepayment.annual)}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-2">
                        <span>Combined premium:</span>
                        <span className="font-medium text-red-700">
                          +{fmtMoney(calculation.totalRepayment.annual - calculation.ugRepayment.annual)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Comparison */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Regional System Comparison</h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Separate Systems (England/Wales)</h4>
                    <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                      <li>• UG and PG loans repaid separately</li>
                      <li>• Different thresholds for each loan</li>
                      <li>• Can reach 15% combined rate (9% + 6%)</li>
                      <li>• Higher burden for middle earners</li>
                      <li>• More complex repayment structure</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Combined Systems (Scotland/NI)</h4>
                    <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                      <li>• UG and PG loans merged into one</li>
                      <li>• Single threshold and repayment rate</li>
                      <li>• Maximum 9% rate regardless of loan size</li>
                      <li>• Simpler repayment structure</li>
                      <li>• Generally more favorable for borrowers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-rose max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Combined UG + PG Repayments</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-rose-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">England/Wales System</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• UG loan: 9% above plan threshold</li>
                <li>• PG loan: 6% above £21,000</li>
                <li>• Completely separate calculations</li>
                <li>• Can result in 15% combined rate</li>
                <li>• Significant impact on middle earners</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Scotland/NI System</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• All loans combined into single debt</li>
                <li>• Single 9% rate above threshold</li>
                <li>• Payments allocated proportionally</li>
                <li>• Generally more favorable terms</li>
                <li>• Simpler to understand and manage</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Key Considerations</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              The difference between combined and separate systems can be significant. In England and Wales,
              borrowers with both UG and PG loans can face effective marginal tax rates of over 50% when
              including income tax, National Insurance, and student loan repayments.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              For high earners, the combined repayment burden can make salary increases less attractive,
              creating disincentives to career progression. This is particularly acute in the £30,000-£50,000
              salary range where both loans are being repaid simultaneously.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              Consider the long-term implications: while higher repayments reduce the outstanding balance faster,
              many borrowers will not repay their loans in full before write-off, making the extra payments
              effectively a higher rate of taxation on earnings.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-rose-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need Help Managing Combined Loan Repayments?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Combined UG and PG loan repayments can significantly impact your finances.
            Consider speaking with a financial advisor about strategies for managing this burden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/contact-student-finance-england"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Student Finance
            </a>
            <a
              href="https://www.gov.uk/repaying-your-student-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-rose-800 transition-colors text-sm sm:text-base"
            >
              Learn More About Repayments
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CombinedUGPGCalculator;