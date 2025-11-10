"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface CareerStage {
  year: number;
  salary: number;
  age: number;
}

interface StudentLoanPlan {
  id: string;
  name: string;
  threshold: number;
  rate: number;
  writeOffYears: number;
}

interface YearlyProjection {
  year: number;
  age: number;
  salary: number;
  studentLoanPayment: number;
  cumulativeRepayment: number;
  remainingBalance: number;
}

interface CareerProjection {
  stages: CareerStage[];
  yearlyBreakdown: YearlyProjection[];
  summary: {
    totalRepayment: number;
    yearsToRepayment: number | null;
    writeOffAmount: number;
    willRepayInFull: boolean;
    averageSalary: number;
    peakSalary: number;
    finalBalance: number;
    percentageRepaid: number;
  };
}

// Constants
const STUDENT_LOAN_PLANS: StudentLoanPlan[] = [
  { id: 'PLAN_1', name: 'Plan 1', threshold: 22015, rate: 0.09, writeOffYears: 25 },
  { id: 'PLAN_2', name: 'Plan 2', threshold: 27295, rate: 0.09, writeOffYears: 30 },
  { id: 'PLAN_4', name: 'Plan 4', threshold: 27660, rate: 0.09, writeOffYears: 30 },
  { id: 'PLAN_5', name: 'Plan 5', threshold: 25000, rate: 0.09, writeOffYears: 40 }
];

const PROGRESSION_PATTERNS = [
  { id: 'fast-track', name: 'Fast-Track (Investment Banking, Law)', description: 'Rapid growth to £100k+ by year 10' },
  { id: 'steady-climber', name: 'Steady Climber (Medicine, Engineering)', description: 'Consistent growth to £70k+ by year 20' },
  { id: 'moderate', name: 'Moderate (Teaching, Nursing)', description: 'Steady growth plateauing around £45k' },
  { id: 'early-plateau', name: 'Early Plateau (Creative, SME)', description: 'Quick to £35k, then minimal growth' },
  { id: 'slow-growth', name: 'Slow Growth (Charity, Public Sector)', description: 'Gradual increase staying near threshold' },
  { id: 'late-bloomer', name: 'Late Bloomer (Entrepreneur, Academic)', description: 'Low start, major growth after year 15' },
  { id: 'custom', name: 'Custom', description: 'Design your own trajectory' }
];

const INTEREST_RATES = [
  { id: 'rpi', name: 'RPI Only (Plan 5, current ~3%)', rate: 0.03 },
  { id: 'rpi-low', name: 'RPI+1% Low (Plan 4, ~4%)', rate: 0.04 },
  { id: 'rpi-mid', name: 'RPI+2% Medium (Plan 2, ~5%)', rate: 0.05 },
  { id: 'rpi-high', name: 'RPI+3% High (Plan 2, ~6%)', rate: 0.06 }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

// Preset salary progressions
function getPresetProgression(patternId: string, startSalary: number): number[] {
  const years = Array.from({ length: 40 }, (_, i) => i);
  
  switch (patternId) {
    case 'fast-track':
      return years.map(y => {
        if (y === 0) return startSalary;
        if (y <= 5) return startSalary + (50000 - startSalary) * (y / 5);
        if (y <= 10) return 50000 + 50000 * ((y - 5) / 5);
        if (y <= 15) return 100000 + 20000 * ((y - 10) / 5);
        return 120000 + 10000 * Math.min((y - 15) / 10, 1);
      });
      
    case 'steady-climber':
      return years.map(y => {
        if (y === 0) return startSalary;
        if (y <= 10) return startSalary + (45000 - startSalary) * (y / 10);
        if (y <= 20) return 45000 + 25000 * ((y - 10) / 10);
        return 70000 + 10000 * Math.min((y - 20) / 10, 1);
      });
      
    case 'moderate':
      return years.map(y => {
        if (y === 0) return startSalary;
        if (y <= 8) return startSalary + (38000 - startSalary) * (y / 8);
        if (y <= 15) return 38000 + 7000 * ((y - 8) / 7);
        return 45000 + 3000 * Math.min((y - 15) / 10, 1);
      });
      
    case 'early-plateau':
      return years.map(y => {
        if (y === 0) return startSalary;
        if (y <= 5) return startSalary + (35000 - startSalary) * (y / 5);
        return 35000 + 3000 * Math.min((y - 5) / 20, 1);
      });
      
    case 'slow-growth':
      return years.map(y => {
        if (y === 0) return startSalary;
        return startSalary + 12000 * (y / 30);
      });
      
    case 'late-bloomer':
      return years.map(y => {
        if (y === 0) return startSalary;
        if (y <= 15) return startSalary + 4000 * (y / 15);
        if (y <= 25) return startSalary + 4000 + 40000 * ((y - 15) / 10);
        return startSalary + 44000 + 10000 * Math.min((y - 25) / 10, 1);
      });
      
    default:
      return years.map(y => startSalary + 15000 * (y / 30));
  }
}

function calculateCareerProjection(
  startSalary: number,
  loanBalance: number,
  interestRate: number,
  plan: StudentLoanPlan,
  currentAge: number,
  salaryProgression: number[]
): CareerProjection {
  const yearlyBreakdown: YearlyProjection[] = [];
  let remainingBalance = loanBalance;
  let cumulativeRepayment = 0;
  let yearsToRepayment: number | null = null;
  
  const maxYears = plan.writeOffYears;
  
  for (let year = 0; year < maxYears; year++) {
    const salary = salaryProgression[year] || salaryProgression[salaryProgression.length - 1];
    const age = currentAge + year;
    
    // Calculate annual student loan payment
    const annualPayment = Math.max(0, (salary - plan.threshold) * plan.rate);
    
    // Add interest
    const interestCharged = remainingBalance * interestRate;
    remainingBalance += interestCharged;
    
    // Apply payment
    const actualPayment = Math.min(annualPayment, remainingBalance);
    remainingBalance -= actualPayment;
    cumulativeRepayment += actualPayment;
    
    yearlyBreakdown.push({
      year: year + 1,
      age,
      salary,
      studentLoanPayment: actualPayment,
      cumulativeRepayment,
      remainingBalance: Math.max(0, remainingBalance)
    });
    
    // Check if fully repaid
    if (remainingBalance <= 0 && yearsToRepayment === null) {
      yearsToRepayment = year + 1;
      break;
    }
  }
  
  // If not fully repaid, continue to write-off
  if (remainingBalance > 0) {
    const finalYear = yearlyBreakdown[yearlyBreakdown.length - 1];
    for (let year = finalYear.year; year < maxYears; year++) {
      const salary = salaryProgression[year] || salaryProgression[salaryProgression.length - 1];
      const age = currentAge + year;
      const annualPayment = Math.max(0, (salary - plan.threshold) * plan.rate);
      
      const interestCharged = remainingBalance * interestRate;
      remainingBalance += interestCharged;
      
      const actualPayment = Math.min(annualPayment, remainingBalance);
      remainingBalance -= actualPayment;
      cumulativeRepayment += actualPayment;
      
      yearlyBreakdown.push({
        year: year + 1,
        age,
        salary,
        studentLoanPayment: actualPayment,
        cumulativeRepayment,
        remainingBalance: Math.max(0, remainingBalance)
      });
      
      if (remainingBalance <= 0) {
        yearsToRepayment = year + 1;
        break;
      }
    }
  }
  
  const stages: CareerStage[] = yearlyBreakdown.map(y => ({
    year: y.year,
    salary: y.salary,
    age: y.age
  }));
  
  const averageSalary = salaryProgression.slice(0, maxYears).reduce((a, b) => a + b, 0) / Math.min(maxYears, salaryProgression.length);
  const peakSalary = Math.max(...salaryProgression.slice(0, maxYears));
  const finalBalance = yearlyBreakdown[yearlyBreakdown.length - 1]?.remainingBalance || 0;
  const writeOffAmount = Math.max(0, finalBalance);
  const willRepayInFull = finalBalance <= 0;
  const percentageRepaid = loanBalance > 0 ? (cumulativeRepayment / loanBalance) * 100 : 0;
  
  return {
    stages,
    yearlyBreakdown,
    summary: {
      totalRepayment: cumulativeRepayment,
      yearsToRepayment,
      writeOffAmount,
      willRepayInFull,
      averageSalary,
      peakSalary,
      finalBalance,
      percentageRepaid
    }
  };
}

const CareerProgressionCalculator: React.FC = () => {
  const [startSalary, setStartSalary] = useState<number>(28000);
  const [currentAge, setCurrentAge] = useState<number>(22);
  const [loanBalance, setLoanBalance] = useState<number>(45000);
  const [selectedPattern, setSelectedPattern] = useState<string>('moderate');
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [selectedInterest, setSelectedInterest] = useState<string>('rpi-mid');
  const [customSalaries, setCustomSalaries] = useState<number[]>([]);
  const [showYearlyBreakdown, setShowYearlyBreakdown] = useState<boolean>(false);
  
  const plan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan)!;
  const interestRate = INTEREST_RATES.find(r => r.id === selectedInterest)!.rate;
  
  const salaryProgression = useMemo(() => {
    if (selectedPattern === 'custom' && customSalaries.length > 0) {
      return customSalaries;
    }
    return getPresetProgression(selectedPattern, startSalary);
  }, [selectedPattern, startSalary, customSalaries]);
  
  const projection = useMemo(() => {
    return calculateCareerProjection(
      startSalary,
      loanBalance,
      interestRate,
      plan,
      currentAge,
      salaryProgression
    );
  }, [startSalary, loanBalance, interestRate, plan, currentAge, salaryProgression]);
  
  const selectedPatternInfo = PROGRESSION_PATTERNS.find(p => p.id === selectedPattern);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Career Progression Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Career Progression & Student Loan Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Model your entire career trajectory and see exactly how salary progression affects your lifetime 
            student loan repayments. Compare different career paths and discover whether you&apos;ll repay in full 
            or benefit from write-off.
          </p>
        </div>
      </section>

      {/* Key Outcome Alert */}
      <section className="max-w-6xl mx-auto">
        <div className={`${projection.summary.willRepayInFull ? 'bg-orange-50 border-orange-400' : 'bg-green-50 border-green-400'} border-l-4 p-6 rounded-lg`}>
          <div className="flex">
            <div className="flex-shrink-0">
              {projection.summary.willRepayInFull ? (
                <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h3 className={`text-lg font-medium ${projection.summary.willRepayInFull ? 'text-orange-800' : 'text-green-800'}`}>
                {projection.summary.willRepayInFull ? 'Full Repayment Expected' : 'Write-Off Expected'}
              </h3>
              <div className={`mt-2 text-sm ${projection.summary.willRepayInFull ? 'text-orange-700' : 'text-green-700'}`}>
                {projection.summary.willRepayInFull ? (
                  <>
                    <p className="mb-2">
                      Based on your projected career path, you will <strong>fully repay your loan in {projection.summary.yearsToRepayment} years</strong>.
                    </p>
                    <p className="mb-2">
                      <strong>Total repayment:</strong> {fmtMoney(projection.summary.totalRepayment)} 
                      ({fmtPercent(projection.summary.percentageRepaid / 100)} of original loan)
                    </p>
                    <p>
                      Consider voluntary overpayments vs. investing - use our comparison tool to decide which is better.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-2">
                      Based on your projected career path, you will <strong>NOT fully repay your loan</strong> before the {plan.writeOffYears}-year write-off.
                    </p>
                    <p className="mb-2">
                      <strong>Total repayment:</strong> {fmtMoney(projection.summary.totalRepayment)} ({fmtPercent(projection.summary.percentageRepaid / 100)} of original loan)
                    </p>
                    <p className="mb-2">
                      <strong>Write-off amount:</strong> {fmtMoney(projection.summary.writeOffAmount)}
                    </p>
                    <p>
                      Never make voluntary overpayments - you would be reducing your write-off benefit!
                    </p>
                  </>
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
            
            {/* Starting Salary */}
            <div>
              <label htmlFor="startSalary" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Salary (Annual)
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="startSalary"
                  min={18000}
                  max={60000}
                  step={1000}
                  value={startSalary}
                  onChange={(e) => setStartSalary(Number(e.target.value) || 0)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={20000}
                  max={50000}
                  step={1000}
                  value={startSalary}
                  onChange={(e) => setStartSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Typical graduate starting salary
              </p>
            </div>

            {/* Current Age */}
            <div>
              <label htmlFor="currentAge" className="block text-sm font-medium text-gray-700 mb-1">
                Current Age
              </label>
              <input
                type="number"
                id="currentAge"
                min={21}
                max={40}
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value) || 22)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Age when loan repayments begin
              </p>
            </div>

            {/* Loan Balance */}
            <div>
              <label htmlFor="loanBalance" className="block text-sm font-medium text-gray-700 mb-1">
                Current Loan Balance
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="loanBalance"
                  min={10000}
                  max={120000}
                  step={1000}
                  value={loanBalance}
                  onChange={(e) => setLoanBalance(Number(e.target.value) || 0)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={20000}
                  max={80000}
                  step={5000}
                  value={loanBalance}
                  onChange={(e) => setLoanBalance(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Total undergraduate loan including interest
              </p>
            </div>

            {/* Career Pattern */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Career Progression Pattern
              </label>
              <select
                value={selectedPattern}
                onChange={(e) => setSelectedPattern(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                {PROGRESSION_PATTERNS.map((pattern) => (
                  <option key={pattern.id} value={pattern.id}>
                    {pattern.name}
                  </option>
                ))}
              </select>
              {selectedPatternInfo && (
                <p className="mt-1 text-xs text-gray-500">
                  {selectedPatternInfo.description}
                </p>
              )}
            </div>

            {/* Student Loan Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Loan Plan
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                {STUDENT_LOAN_PLANS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - {fmtMoney(p.threshold)} threshold, {p.writeOffYears}yr write-off
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                9% above threshold
              </p>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate Assumption
              </label>
              <select
                value={selectedInterest}
                onChange={(e) => setSelectedInterest(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                {INTEREST_RATES.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Average interest rate over repayment period
              </p>
            </div>

            {/* Quick Stats Box */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-medium text-gray-800 mb-3">Projection Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Peak salary:</span>
                  <span className="font-medium">{fmtMoney(projection.summary.peakSalary)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average salary:</span>
                  <span className="font-medium">{fmtMoney(projection.summary.averageSalary)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total repayment:</span>
                  <span className="font-medium">{fmtMoney(projection.summary.totalRepayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Write-off amount:</span>
                  <span className="font-medium">{fmtMoney(projection.summary.writeOffAmount)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Career Trajectory Visualization */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Career Salary Trajectory</h2>
              
              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="space-y-3">
                  {[0, 5, 10, 15, 20, 25, 30].map((year) => {
                    const salary = salaryProgression[year] || 0;
                    const maxSalary = projection.summary.peakSalary;
                    const percentage = (salary / maxSalary) * 100;
                    
                    return (
                      <div key={year} className="flex items-center">
                        <div className="w-16 text-sm text-gray-600 font-medium">Year {year}:</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-6 mx-3 relative">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-6 rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${percentage}%` }}
                          >
                            {percentage > 30 && (
                              <span className="text-white text-xs font-medium">{fmtMoney(salary)}</span>
                            )}
                          </div>
                          {percentage <= 30 && (
                            <span className="absolute left-full ml-2 text-xs font-medium text-gray-700 whitespace-nowrap">
                              {fmtMoney(salary)}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <div className="text-gray-600 mb-1">Starting (Year 0)</div>
                  <div className="text-xl font-bold text-purple-700">{fmtMoney(salaryProgression[0])}</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-gray-600 mb-1">Peak Salary</div>
                  <div className="text-xl font-bold text-blue-700">{fmtMoney(projection.summary.peakSalary)}</div>
                </div>
              </div>
            </div>

            {/* Repayment Overview */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Lifetime Repayment Breakdown</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-700">{fmtMoney(loanBalance)}</div>
                  <div className="text-sm text-gray-600 mt-1">Original Balance</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">{fmtMoney(projection.summary.totalRepayment)}</div>
                  <div className="text-sm text-gray-600 mt-1">Total Repayment</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-700">{fmtMoney(projection.summary.writeOffAmount)}</div>
                  <div className="text-sm text-gray-600 mt-1">Write-Off Amount</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Repayment Progress</span>
                  <span className="text-sm font-medium text-gray-700">{fmtPercent(projection.summary.percentageRepaid / 100)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full"
                    style={{ width: `${Math.min(projection.summary.percentageRepaid, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Key Milestones */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Career & Repayment Milestones</h3>
              
              <div className="space-y-3">
                {[
                  { year: 5, label: '5 Years In' },
                  { year: 10, label: '10 Years In' },
                  { year: 15, label: '15 Years In' },
                  { year: 20, label: '20 Years In' },
                  { year: plan.writeOffYears - 1, label: `Final Year (${plan.writeOffYears})` }
                ].map(({ year, label }) => {
                  const yearData = projection.yearlyBreakdown[year];
                  if (!yearData) return null;
                  
                  return (
                    <div key={year} className="bg-white p-3 rounded flex justify-between items-center text-sm">
                      <div>
                        <div className="font-medium text-gray-800">{label}</div>
                        <div className="text-gray-600">Age {yearData.age}, Salary: {fmtMoney(yearData.salary)}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-purple-700">{fmtMoney(yearData.cumulativeRepayment)}</div>
                        <div className="text-xs text-gray-500">repaid</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Yearly Breakdown Toggle */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <button
                onClick={() => setShowYearlyBreakdown(!showYearlyBreakdown)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  Year-by-Year Breakdown ({projection.yearlyBreakdown.length} years)
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${showYearlyBreakdown ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showYearlyBreakdown && (
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Salary</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Annual Payment</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Cumulative</th>
                        <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Remaining</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {projection.yearlyBreakdown.map((year) => (
                        <tr key={year.year} className="hover:bg-gray-50">
                          <td className="px-3 py-2 whitespace-nowrap">{year.year}</td>
                          <td className="px-3 py-2 whitespace-nowrap">{year.age}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-right">{fmtMoney(year.salary)}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-right text-green-700">{fmtMoney(year.studentLoanPayment)}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-right font-medium">{fmtMoney(year.cumulativeRepayment)}</td>
                          <td className="px-3 py-2 whitespace-nowrap text-right text-gray-600">{fmtMoney(year.remainingBalance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Strategic Recommendations</h3>
              
              <div className="space-y-3 text-sm">
                {projection.summary.willRepayInFull ? (
                  <>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">✓ You Will Fully Repay</div>
                      <p className="text-gray-600">
                        Your career trajectory suggests you&apos;ll repay your full loan. Consider whether voluntary 
                        overpayments or investing elsewhere provides better returns.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">→ Compare Options</div>
                      <p className="text-gray-600">
                        Use our investment vs overpayment calculator to determine if paying extra now saves money 
                        versus investing that money elsewhere.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">✓ Write-Off Expected</div>
                      <p className="text-gray-600">
                        You&apos;ll benefit from {fmtMoney(projection.summary.writeOffAmount)} write-off. Never make 
                        voluntary overpayments as you&apos;d just be reducing this benefit.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">→ Loan Balance Doesn&apos;t Matter</div>
                      <p className="text-gray-600">
                        Since you won&apos;t repay in full, your total loan balance is irrelevant. Borrow what you 
                        need without worrying about the final amount.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-gray-800 mb-1">→ Focus Elsewhere</div>
                      <p className="text-gray-600">
                        Direct extra money to ISAs, pensions, house deposits, or emergency funds instead of 
                        student loan overpayments.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="max-w-4xl mx-auto prose prose-purple">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Career Progression Impact</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Trajectory Matters</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Repayments based on income above threshold over 30-40 years</li>
              <li>• Peak salary timing affects total repayment more than starting salary</li>
              <li>• Early plateau careers benefit most from write-off</li>
              <li>• Fast-track careers usually repay in full plus interest</li>
              <li>• Interest compounds during low-earning years</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Career Pattern Examples</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>Fast-Track:</strong> Investment banking, corporate law</li>
              <li>• <strong>Steady Climb:</strong> Medicine, senior engineering</li>
              <li>• <strong>Moderate:</strong> Teaching, nursing, public sector</li>
              <li>• <strong>Early Plateau:</strong> Creative fields, SME marketing</li>
              <li>• <strong>Late Bloomer:</strong> Entrepreneurs, academics</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Using This Calculator Effectively</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-800">Try different patterns:</p>
              <p>Compare how different career trajectories affect your lifetime repayment. The difference can be tens of thousands of pounds.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Account for career breaks:</p>
              <p>Remember that time out for family, study, or career changes reduces repayments. Your projection assumes continuous work.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Consider location:</p>
              <p>London salaries are typically 15-30% higher than other UK regions, which significantly impacts repayment outcomes.</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Review regularly:</p>
              <p>Your actual career may differ from projections. Review your situation every few years as your path becomes clearer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Ready to Plan Your Financial Future?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Understanding your career trajectory helps you make better financial decisions about student loans, 
          investing, and long-term planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/guides/investing-vs-loan-repayment/"
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Investing vs Overpayment Guide
          </Link>
          <Link
            href="/compare/student-loans-by-profession/"
            className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition-colors"
          >
            Compare by Profession
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerProgressionCalculator;