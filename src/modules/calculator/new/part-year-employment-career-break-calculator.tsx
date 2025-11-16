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
  interestRate: number; // Default interest rate for the plan
}

interface MonthlyCalculation {
  month: number;
  monthName: string;
  employed: boolean;
  monthlyIncome: number;
  monthlyThreshold: number;
  repayment: number;
  interestAccrual: number;
  balanceEndOfMonth: number;
}

interface PartYearResults {
  totalAnnualIncome: number;
  totalRepaymentsMade: number;
  monthsEmployed: number;
  monthsOnBreak: number;
  totalInterestAccrued: number;
  interestDuringBreak: number;
  potentialRefund: number;
  isEligibleForRefund: boolean;
  monthlyBreakdown: MonthlyCalculation[];
  endingBalance: number;
  additionalInterestFromBreak: number;
  writeOffImpact: number;
}

interface ComparisonScenario {
  label: string;
  totalRepayments: number;
  totalInterest: number;
  finalBalance: number;
  description: string;
}

// Student Loan Plan Constants
const LOAN_PLANS: Record<string, LoanPlan> = {
  PLAN_1: {
    name: 'Plan 1',
    annualThreshold: 22015,
    repaymentRate: 0.09,
    description: 'Pre-2012 students (England/Wales) or Northern Ireland students',
    writeOffYears: 25,
    interestRate: 0.046 // RPI or base+1%, whichever lower
  },
  PLAN_2: {
    name: 'Plan 2', 
    annualThreshold: 27295,
    repaymentRate: 0.09,
    description: '2012-2023 students (England/Wales)',
    writeOffYears: 30,
    interestRate: 0.055 // RPI + up to 3% based on income
  },
  PLAN_4: {
    name: 'Plan 4',
    annualThreshold: 31395,
    repaymentRate: 0.09,
    description: 'Scottish students',
    writeOffYears: 30,
    interestRate: 0.046
  },
  PLAN_5: {
    name: 'Plan 5',
    annualThreshold: 25000,
    repaymentRate: 0.09,
    description: 'Post-2023 students (England/Wales)',
    writeOffYears: 40,
    interestRate: 0.055
  },
  POSTGRADUATE: {
    name: 'Postgraduate',
    annualThreshold: 21000,
    repaymentRate: 0.06,
    description: 'Postgraduate loans',
    writeOffYears: 30,
    interestRate: 0.055
  }
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const EMPLOYMENT_PATTERNS = [
  { label: 'Continuous Employment', months: [1,1,1,1,1,1,1,1,1,1,1,1] },
  { label: 'Jan-Mar Break', months: [0,0,0,1,1,1,1,1,1,1,1,1] },
  { label: 'Summer Break (Jun-Aug)', months: [1,1,1,1,1,0,0,0,1,1,1,1] },
  { label: 'End of Year Break (Oct-Dec)', months: [1,1,1,1,1,1,1,1,1,0,0,0] },
  { label: 'Mid-Year Break (May-Aug)', months: [1,1,1,1,0,0,0,0,1,1,1,1] },
  { label: 'Custom Pattern', months: [1,1,1,1,1,1,1,1,1,1,1,1] }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateMonthlyRepayment(monthlyIncome: number, monthlyThreshold: number, repaymentRate: number): number {
  return Math.max(0, (monthlyIncome - monthlyThreshold) * repaymentRate);
}

function calculatePartYearEmployment(
  annualSalary: number,
  employmentPattern: number[],
  plan: LoanPlan,
  outstandingBalance: number,
  customInterestRate?: number
): PartYearResults {
  const monthlyThreshold = plan.annualThreshold / 12;
  const monthlySalary = annualSalary / 12;
  const monthlyInterestRate = (customInterestRate || plan.interestRate) / 12;
  
  let currentBalance = outstandingBalance;
  let totalRepaymentsMade = 0;
  let totalInterestAccrued = 0;
  let interestDuringBreak = 0;
  
  const monthlyBreakdown: MonthlyCalculation[] = [];
  
  // Calculate each month
  employmentPattern.forEach((employed, index) => {
    const monthlyIncome = employed ? monthlySalary : 0;
    const repayment = employed ? calculateMonthlyRepayment(monthlyIncome, monthlyThreshold, plan.repaymentRate) : 0;
    const interestAccrual = currentBalance * monthlyInterestRate;
    
    if (!employed) {
      interestDuringBreak += interestAccrual;
    }
    
    currentBalance = currentBalance + interestAccrual - repayment;
    totalRepaymentsMade += repayment;
    totalInterestAccrued += interestAccrual;
    
    monthlyBreakdown.push({
      month: index + 1,
      monthName: MONTHS[index],
      employed: !!employed,
      monthlyIncome,
      monthlyThreshold,
      repayment,
      interestAccrual,
      balanceEndOfMonth: Math.max(0, currentBalance)
    });
  });
  
  // Calculate annual totals
  const monthsEmployed = employmentPattern.filter(m => m === 1).length;
  const monthsOnBreak = 12 - monthsEmployed;
  const totalAnnualIncome = monthlySalary * monthsEmployed;
  
  // Check for refund eligibility
  const isEligibleForRefund = totalAnnualIncome < plan.annualThreshold && totalRepaymentsMade > 0;
  const potentialRefund = isEligibleForRefund ? totalRepaymentsMade : 0;
  
  // Calculate additional interest from break
  const continuousEmploymentInterest = outstandingBalance * (customInterestRate || plan.interestRate);
  const additionalInterestFromBreak = totalInterestAccrued - continuousEmploymentInterest;
  
  // Estimate write-off impact (simplified)
  const writeOffImpact = monthsOnBreak; // Months that extend the timeline
  
  return {
    totalAnnualIncome,
    totalRepaymentsMade,
    monthsEmployed,
    monthsOnBreak,
    totalInterestAccrued,
    interestDuringBreak,
    potentialRefund,
    isEligibleForRefund,
    monthlyBreakdown,
    endingBalance: Math.max(0, currentBalance),
    additionalInterestFromBreak,
    writeOffImpact
  };
}

const PartYearEmploymentCalculator: React.FC = () => {
  const [annualSalary, setAnnualSalary] = useState<number>(35000);
  const [selectedPattern, setSelectedPattern] = useState<string>('Summer Break (Jun-Aug)');
  const [customPattern, setCustomPattern] = useState<number[]>([1,1,1,1,1,0,0,0,1,1,1,1]);
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [outstandingBalance, setOutstandingBalance] = useState<number>(25000);
  const [customInterestRate, setCustomInterestRate] = useState<number | undefined>(undefined);
  const [useCustomInterest, setUseCustomInterest] = useState<boolean>(false);

  const plan: LoanPlan = LOAN_PLANS[selectedPlan];
  
  const currentPattern = useMemo(() => {
    if (selectedPattern === 'Custom Pattern') {
      return customPattern;
    }
    return EMPLOYMENT_PATTERNS.find(p => p.label === selectedPattern)?.months || [1,1,1,1,1,1,1,1,1,1,1,1];
  }, [selectedPattern, customPattern]);

  const results: PartYearResults = useMemo(() => {
    return calculatePartYearEmployment(
      annualSalary,
      currentPattern,
      plan,
      outstandingBalance,
      useCustomInterest ? customInterestRate : undefined
    );
  }, [annualSalary, currentPattern, plan, outstandingBalance, useCustomInterest, customInterestRate]);

  const comparisonScenarios: ComparisonScenario[] = useMemo(() => {
    // Full year employment for comparison
    const fullYearPattern = [1,1,1,1,1,1,1,1,1,1,1,1];
    const fullYearResults = calculatePartYearEmployment(
      annualSalary,
      fullYearPattern,
      plan,
      outstandingBalance,
      useCustomInterest ? customInterestRate : undefined
    );

    return [
      {
        label: 'Full Year Employment',
        totalRepayments: fullYearResults.totalRepaymentsMade,
        totalInterest: fullYearResults.totalInterestAccrued,
        finalBalance: fullYearResults.endingBalance,
        description: 'Continuous employment throughout the year'
      },
      {
        label: 'With Career Break',
        totalRepayments: results.totalRepaymentsMade,
        totalInterest: results.totalInterestAccrued,
        finalBalance: results.endingBalance,
        description: `${results.monthsEmployed} months employed, ${results.monthsOnBreak} months break`
      }
    ];
  }, [annualSalary, plan, outstandingBalance, useCustomInterest, customInterestRate, results]);

  const updateCustomPattern = (monthIndex: number, employed: boolean): void => {
    const newPattern = [...customPattern];
    newPattern[monthIndex] = employed ? 1 : 0;
    setCustomPattern(newPattern);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Part-Year Employment Calculator</span></li>
              </ol>
            </nav>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Part-Year Employment & Career Break Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how career breaks, part-year employment, and gaps in income affect your student loan repayments, 
              interest accumulation, and potential refund eligibility.
            </p>
          </div>
        </section>

        {/* Main Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Input Panel */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-orange-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Career Break Impact</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Career breaks pause repayments but interest continues to accrue. 
                      You may be eligible for refunds if annual income falls below the threshold.
                    </p>
                  </div>
                </div>
              </div>

              {/* Annual Salary */}
              <div className="px-1">
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Salary (When Employed)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm flex-shrink-0">£</span>
                  <input
                    type="number"
                    id="salary"
                    min={0}
                    max={100000}
                    step={1000}
                    value={annualSalary}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualSalary(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                  />
                </div>
                <div className="mt-2 px-1">
                  <input
                    type="range"
                    min={20000}
                    max={80000}
                    step={1000}
                    value={Math.min(80000, Math.max(20000, annualSalary))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnnualSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 px-1">
                  Monthly salary: {fmtMoney(annualSalary / 12)}
                </p>
              </div>

              {/* Employment Pattern */}
              <div className="px-1">
                <label htmlFor="employment-pattern" className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Pattern
                </label>
                <select
                  id="employment-pattern"
                  value={selectedPattern}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPattern(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm pr-8"
                >
                  {EMPLOYMENT_PATTERNS.map((pattern) => (
                    <option key={pattern.label} value={pattern.label}>
                      {pattern.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {selectedPattern !== 'Continuous Employment' && selectedPattern !== 'Custom Pattern' && 
                    `${currentPattern.filter(m => m === 1).length} months employed`
                  }
                </p>
              </div>

              {/* Custom Pattern Editor */}
              {selectedPattern === 'Custom Pattern' && (
                <div className="px-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Employment Pattern
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {MONTHS.map((month, index) => (
                      <label key={month} className="flex items-center text-xs">
                        <input
                          type="checkbox"
                          checked={customPattern[index] === 1}
                          onChange={(e) => updateCustomPattern(index, e.target.checked)}
                          className="mr-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className={customPattern[index] === 1 ? 'text-green-700' : 'text-red-700'}>
                          {month.substring(0, 3)}
                        </span>
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Green = employed, Red = career break
                  </p>
                </div>
              )}

              {/* Outstanding Balance */}
              <div className="px-1">
                <label htmlFor="balance" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Outstanding Balance
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm flex-shrink-0">£</span>
                  <input
                    type="number"
                    id="balance"
                    min={0}
                    max={100000}
                    step={1000}
                    value={outstandingBalance}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOutstandingBalance(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                  />
                </div>
                <div className="mt-2 px-1">
                  <input
                    type="range"
                    min={5000}
                    max={50000}
                    step={1000}
                    value={Math.min(50000, Math.max(5000, outstandingBalance))}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOutstandingBalance(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Loan Plan Selection */}
              <div className="px-1">
                <label htmlFor="loan-plan" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  id="loan-plan"
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm pr-8"
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

              {/* Custom Interest Rate */}
              <div className="px-1">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <input
                    type="checkbox"
                    checked={useCustomInterest}
                    onChange={(e) => setUseCustomInterest(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  Use Custom Interest Rate
                </label>
                {useCustomInterest && (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={15}
                      step={0.1}
                      value={customInterestRate ? customInterestRate * 100 : plan.interestRate * 100}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomInterestRate(Number(e.target.value) / 100)}
                      className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-sm"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Default for {plan.name}: {fmtPercent(plan.interestRate)}
                </p>
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
              
              {/* Employment Summary */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Employment & Repayment Summary</h2>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-green-700">{results.monthsEmployed}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Months Employed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-red-700">{results.monthsOnBreak}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Months on Break</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(results.totalAnnualIncome)}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Total Annual Income</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-blue-700">{fmtMoney(results.totalRepaymentsMade)}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Total Repayments</p>
                  </div>
                </div>

                {/* Refund Eligibility */}
                {results.isEligibleForRefund && (
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200 mb-4 sm:mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-800">Refund Eligible!</h3>
                        <p className="text-sm text-gray-600">
                          Your annual income ({fmtMoney(results.totalAnnualIncome)}) is below the threshold ({fmtMoney(plan.annualThreshold)}). 
                          You may be eligible for a refund of {fmtMoney(results.potentialRefund)}.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Monthly Pattern Visualization */}
                <div className="mt-4 sm:mt-6">
                  <h3 className="font-medium text-gray-800 mb-3">Monthly Employment & Repayment Pattern</h3>
                  <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
                    {results.monthlyBreakdown.map((month) => (
                      <div
                        key={month.month}
                        className={`p-1 sm:p-2 rounded text-center text-xs ${
                          month.employed 
                            ? 'bg-green-100 border border-green-300' 
                            : 'bg-red-100 border border-red-300'
                        }`}
                      >
                        <div className="font-medium text-xs">{month.monthName.substring(0, 3)}</div>
                        <div className={`text-xs ${month.employed ? 'text-green-700' : 'text-red-700'}`}>
                          {month.employed ? fmtMoney(month.repayment) : '£0'}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center mt-2 text-xs text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span>🟢 Employed & Repaying</span>
                    <span>🔴 Career Break (No Repayments)</span>
                  </div>
                </div>
              </div>

              {/* Interest Impact Analysis */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Interest Impact During Career Break</h3>
                <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Interest During Break</p>
                    <p className="text-xl sm:text-2xl font-bold text-red-700">{fmtMoney(results.interestDuringBreak)}</p>
                    <p className="text-xs text-gray-500">{results.monthsOnBreak} months at {fmtPercent(useCustomInterest ? (customInterestRate || 0) : plan.interestRate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Interest Accrued</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(results.totalInterestAccrued)}</p>
                    <p className="text-xs text-gray-500">Full year accumulation</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ending Balance</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(results.endingBalance)}</p>
                    <p className="text-xs text-gray-500">After repayments & interest</p>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Scenario Comparison</h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-2 sm:px-0">Scenario</th>
                          <th className="text-right py-2 px-1">Total Repayments</th>
                          <th className="text-right py-2 px-1">Interest Accrued</th>
                          <th className="text-right py-2 px-1">Final Balance</th>
                          <th className="text-right py-2 px-1">Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonScenarios.map((scenario, index) => (
                          <tr key={scenario.label} className={`border-b border-gray-100 ${index === 1 ? 'bg-orange-50' : ''}`}>
                            <td className="py-2 px-2 sm:px-0">
                              <div>
                                <div className="font-medium">{scenario.label}</div>
                                <div className="text-xs text-gray-500">{scenario.description}</div>
                              </div>
                            </td>
                            <td className="text-right py-2 px-1">{fmtMoney(scenario.totalRepayments)}</td>
                            <td className="text-right py-2 px-1">{fmtMoney(scenario.totalInterest)}</td>
                            <td className="text-right py-2 px-1">{fmtMoney(scenario.finalBalance)}</td>
                            <td className="text-right py-2 px-1">
                              {index === 1 && (
                                <div className="text-red-700">
                                  +{fmtMoney(scenario.finalBalance - comparisonScenarios[0].finalBalance)}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Detailed Monthly Breakdown */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Detailed Monthly Breakdown</h3>
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-1">Month</th>
                          <th className="text-center py-2 px-1">Status</th>
                          <th className="text-right py-2 px-1">Income</th>
                          <th className="text-right py-2 px-1">Repayment</th>
                          <th className="text-right py-2 px-1">Interest</th>
                          <th className="text-right py-2 px-1">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.monthlyBreakdown.map((month) => (
                          <tr key={month.month} className={`border-b border-gray-100 ${!month.employed ? 'bg-red-50' : ''}`}>
                            <td className="py-2 px-1 font-medium text-xs sm:text-sm">{month.monthName}</td>
                            <td className="text-center py-2 px-1">
                              {month.employed ? (
                                <span className="inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {/* Mobile: E, Desktop: Employed */}
                                  <span className="sm:hidden">E</span>
                                  <span className="hidden sm:inline">Employed</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  {/* Mobile: B, Desktop: Break */}
                                  <span className="sm:hidden">B</span>
                                  <span className="hidden sm:inline">Break</span>
                                </span>
                              )}
                            </td>
                            <td className="text-right py-2 px-1 text-xs sm:text-sm">{fmtMoney(month.monthlyIncome)}</td>
                            <td className="text-right py-2 px-1 font-medium text-xs sm:text-sm">{fmtMoney(month.repayment)}</td>
                            <td className="text-right py-2 px-1 text-red-600 text-xs sm:text-sm">{fmtMoney(month.interestAccrual)}</td>
                            <td className="text-right py-2 px-1 text-xs sm:text-sm">{fmtMoney(month.balanceEndOfMonth)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Key Insights & Recommendations</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Automatic pause:</strong> Student loan repayments automatically stop during unemployment or career breaks. 
                      No action needed from you during these periods.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Interest continues:</strong> Interest of {fmtPercent(useCustomInterest ? (customInterestRate || 0) : plan.interestRate)} 
                      continues to accrue during career breaks, adding {fmtMoney(results.interestDuringBreak)} to your balance.
                    </p>
                  </div>
                  {results.isEligibleForRefund && (
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        <strong>Refund opportunity:</strong> Since your annual income is below the threshold, 
                        you can claim a refund of {fmtMoney(results.potentialRefund)} from HMRC or SLC.
                      </p>
                    </div>
                  )}
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Notify SLC:</strong> Consider informing the Student Loans Company about career breaks 
                      to avoid unnecessary payment reminders during unemployment periods.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Long-term impact:</strong> Career breaks extend your repayment timeline but may actually 
                      be beneficial if you&apos;re unlikely to repay the full amount before write-off in {plan.writeOffYears} years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-orange max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Part-Year Employment & Career Breaks</h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-orange-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">How It Works</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Repayments automatically pause when unemployed</li>
                <li>• Monthly repayments based on monthly income vs monthly threshold</li>
                <li>• Annual reconciliation can trigger refunds</li>
                <li>• Interest continues accruing during breaks</li>
                <li>• No penalties for career breaks or job changes</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Refund Eligibility</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Eligible if annual income below {fmtMoney(plan.annualThreshold)}</li>
                <li>• Can reclaim any PAYE deductions made during the year</li>
                <li>• Apply through HMRC self-assessment or SLC</li>
                <li>• Usually processed within 6-8 weeks</li>
                <li>• Automatic for some employed people via tax code</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Strategic Considerations</h3>
            <p className="text-gray-700 mb-4">
              Career breaks can actually be financially beneficial for student loan borrowers. While interest continues to accrue, 
              the pause in repayments means more money stays in your pocket during potentially difficult financial periods.
            </p>
            <p className="text-gray-700 mb-4">
              For borrowers unlikely to repay their full loan before write-off ({plan.writeOffYears} years for {plan.name}), 
              the interest accrued during breaks may ultimately be written off, making the effective cost lower than it appears.
            </p>
            <p className="text-gray-700">
              Remember to notify the Student Loans Company about employment changes to ensure smooth transitions and avoid 
              unnecessary payment reminders during unemployment periods.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-orange-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Questions About Career Breaks & Refunds?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            If you&apos;re planning a career break or think you might be eligible for a refund, 
            contact the Student Loans Company or HMRC for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/contact-student-finance-england"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Student Finance
            </a>
            <a
              href="https://www.gov.uk/guidance/apply-for-a-refund-or-waiver-from-the-disguised-remuneration-repayment-scheme-2020"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-orange-800 transition-colors text-sm sm:text-base"
            >
              Learn About Repayment Refunds
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartYearEmploymentCalculator;