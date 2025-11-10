"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface StudentLoanPlan {
  id: string;
  name: string;
  annualThreshold: number;
  rate: number;
  color: string;
}

interface PayPeriod {
  id: string;
  name: string;
  periodsPerYear: number;
  description: string;
}

interface ThresholdCalculation {
  plan: StudentLoanPlan;
  period: PayPeriod;
  threshold: number;
  officialThreshold?: number; // HMRC official if different from calculated
  roundingDifference?: number;
}

interface PayrollExample {
  grossPay: number;
  threshold: number;
  amountAbove: number;
  ugRepayment: number;
  pgRepayment: number;
  totalRepayment: number;
  annualEquivalent: number;
}

interface VariablePayScenario {
  period: string;
  grossPay: number;
  threshold: number;
  deduction: number;
  reason: string;
}

interface FrequencyComparison {
  annualIncome: number;
  scenarios: {
    period: PayPeriod;
    grossPay: number;
    periodicDeduction: number;
    annualTotal: number;
  }[];
  differences: {
    maxDifference: number;
    explanation: string;
  };
}

// Constants
const STUDENT_LOAN_PLANS: StudentLoanPlan[] = [
  { id: 'PLAN_1', name: 'Plan 1', annualThreshold: 26065, rate: 0.09, color: 'blue' },
  { id: 'PLAN_2', name: 'Plan 2', annualThreshold: 28470, rate: 0.09, color: 'green' },
  { id: 'PLAN_4', name: 'Plan 4', annualThreshold: 32745, rate: 0.09, color: 'purple' },
  { id: 'PLAN_5', name: 'Plan 5', annualThreshold: 25000, rate: 0.09, color: 'orange' },
  { id: 'POSTGRADUATE', name: 'Postgraduate', annualThreshold: 21000, rate: 0.06, color: 'red' }
];

const PAY_PERIODS: PayPeriod[] = [
  { id: 'WEEKLY', name: 'Weekly', periodsPerYear: 52, description: 'Every week (52 times per year)' },
  { id: 'FORTNIGHTLY', name: 'Fortnightly', periodsPerYear: 26, description: 'Every 2 weeks (26 times per year)' },
  { id: 'FOUR_WEEKLY', name: 'Four-weekly', periodsPerYear: 13, description: 'Every 4 weeks (13 times per year)' },
  { id: 'MONTHLY', name: 'Monthly', periodsPerYear: 12, description: 'Calendar month (12 times per year)' },
  { id: 'QUARTERLY', name: 'Quarterly', periodsPerYear: 4, description: 'Every 3 months (4 times per year)' },
  { id: 'SEMI_ANNUALLY', name: 'Semi-annually', periodsPerYear: 2, description: 'Every 6 months (2 times per year)' },
  { id: 'ANNUALLY', name: 'Annually', periodsPerYear: 1, description: 'Once per year' }
];

// Official HMRC thresholds (where they differ from pure calculations due to rounding)
const OFFICIAL_THRESHOLDS: Record<string, Record<string, number>> = {
  'PLAN_1': {
    'WEEKLY': 501,
    'MONTHLY': 2172
  },
  'PLAN_2': {
    'WEEKLY': 548,
    'MONTHLY': 2373
  },
  'PLAN_4': {
    'WEEKLY': 630,
    'MONTHLY': 2729
  },
  'PLAN_5': {
    'WEEKLY': 481,
    'MONTHLY': 2083
  },
  'POSTGRADUATE': {
    'WEEKLY': 404,
    'MONTHLY': 1750
  }
};

const TAX_YEARS = [
  '2025/26', '2024/25', '2023/24', '2022/23', '2021/22'
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateThreshold(annualThreshold: number, periodsPerYear: number): number {
  return Math.round(annualThreshold / periodsPerYear);
}

function getOfficialThreshold(planId: string, periodId: string, calculatedThreshold: number): number {
  return OFFICIAL_THRESHOLDS[planId]?.[periodId] || calculatedThreshold;
}

function calculateAllThresholds(plans: StudentLoanPlan[], periods: PayPeriod[]): ThresholdCalculation[] {
  const results: ThresholdCalculation[] = [];

  plans.forEach(plan => {
    periods.forEach(period => {
      const calculated = calculateThreshold(plan.annualThreshold, period.periodsPerYear);
      const official = getOfficialThreshold(plan.id, period.id, calculated);

      results.push({
        plan,
        period,
        threshold: official,
        officialThreshold: official !== calculated ? official : undefined,
        roundingDifference: official !== calculated ? official - calculated : undefined
      });
    });
  });

  return results;
}

function calculatePayrollExample(
  grossPay: number,
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean,
  period: PayPeriod
): PayrollExample {
  const ugThreshold = getOfficialThreshold(ugPlan.id, period.id, calculateThreshold(ugPlan.annualThreshold, period.periodsPerYear));
  const pgThreshold = getOfficialThreshold('POSTGRADUATE', period.id, calculateThreshold(21000, period.periodsPerYear));

  const ugAmountAbove = Math.max(0, grossPay - ugThreshold);
  const pgAmountAbove = hasPostgraduate ? Math.max(0, grossPay - pgThreshold) : 0;

  const ugRepayment = ugAmountAbove * ugPlan.rate;
  const pgRepayment = pgAmountAbove * 0.06;
  const totalRepayment = ugRepayment + pgRepayment;

  return {
    grossPay,
    threshold: ugThreshold,
    amountAbove: ugAmountAbove,
    ugRepayment,
    pgRepayment,
    totalRepayment,
    annualEquivalent: totalRepayment * period.periodsPerYear
  };
}

function generateVariablePayScenario(ugPlan: StudentLoanPlan, period: PayPeriod): VariablePayScenario[] {
  const threshold = getOfficialThreshold(ugPlan.id, period.id, calculateThreshold(ugPlan.annualThreshold, period.periodsPerYear));

  if (period.id === 'WEEKLY') {
    return [
      {
        period: 'Week 1',
        grossPay: 400,
        threshold,
        deduction: 0,
        reason: 'Below threshold'
      },
      {
        period: 'Week 2',
        grossPay: 650,
        threshold,
        deduction: Math.round((650 - threshold) * ugPlan.rate * 100) / 100,
        reason: 'Above threshold'
      },
      {
        period: 'Week 3',
        grossPay: 520,
        threshold,
        deduction: 0,
        reason: 'Below threshold'
      },
      {
        period: 'Week 4',
        grossPay: 700,
        threshold,
        deduction: Math.round((700 - threshold) * ugPlan.rate * 100) / 100,
        reason: 'Above threshold'
      }
    ];
  } else if (period.id === 'MONTHLY') {
    return [
      {
        period: 'January',
        grossPay: 2500,
        threshold,
        deduction: Math.round((2500 - threshold) * ugPlan.rate * 100) / 100,
        reason: 'Regular salary'
      },
      {
        period: 'February',
        grossPay: 2500,
        threshold,
        deduction: Math.round((2500 - threshold) * ugPlan.rate * 100) / 100,
        reason: 'Regular salary'
      },
      {
        period: 'March',
        grossPay: 7500,
        threshold,
        deduction: Math.round((7500 - threshold) * ugPlan.rate * 100) / 100,
        reason: 'Salary + £5k bonus'
      },
      {
        period: 'April',
        grossPay: 2500,
        threshold,
        deduction: Math.round((2500 - threshold) * ugPlan.rate * 100) / 100,
        reason: 'Regular salary'
      }
    ];
  }

  return [];
}

function comparePayFrequencies(annualIncome: number, ugPlan: StudentLoanPlan): FrequencyComparison {
  const relevantPeriods = PAY_PERIODS.filter(p => ['WEEKLY', 'MONTHLY', 'QUARTERLY'].includes(p.id));

  const scenarios = relevantPeriods.map(period => {
    const grossPay = annualIncome / period.periodsPerYear;
    const threshold = getOfficialThreshold(ugPlan.id, period.id, calculateThreshold(ugPlan.annualThreshold, period.periodsPerYear));
    const periodicDeduction = Math.max(0, (grossPay - threshold) * ugPlan.rate);
    const annualTotal = periodicDeduction * period.periodsPerYear;

    return {
      period,
      grossPay,
      periodicDeduction,
      annualTotal
    };
  });

  const annualTotals = scenarios.map(s => s.annualTotal);
  const maxDifference = Math.max(...annualTotals) - Math.min(...annualTotals);

  return {
    annualIncome,
    scenarios,
    differences: {
      maxDifference,
      explanation: 'Differences arise from rounding in period-based calculations'
    }
  };
}

const PAYEPeriodConverter: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('WEEKLY');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);
  const [taxYear, setTaxYear] = useState<string>('2025/26');
  const [customThreshold, setCustomThreshold] = useState<number>(0);
  const [exampleGrossPay, setExampleGrossPay] = useState<number>(700);
  const [comparisonIncome, setComparisonIncome] = useState<number>(35000);

  const ugPlan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan)!;
  const selectedPayPeriod = PAY_PERIODS.find(p => p.id === selectedPeriod)!;

  const allThresholds: ThresholdCalculation[] = useMemo(() => {
    const baseThreshold = customThreshold > 0 ? customThreshold : ugPlan.annualThreshold;
    const customPlan = customThreshold > 0 ? { ...ugPlan, annualThreshold: baseThreshold } : ugPlan;
    return calculateAllThresholds([customPlan], PAY_PERIODS);
  }, [ugPlan, customThreshold]);

  const currentExample: PayrollExample = useMemo(() => {
    const baseThreshold = customThreshold > 0 ? customThreshold : ugPlan.annualThreshold;
    const planForCalc = customThreshold > 0 ? { ...ugPlan, annualThreshold: baseThreshold } : ugPlan;
    return calculatePayrollExample(exampleGrossPay, planForCalc, hasPostgraduate, selectedPayPeriod);
  }, [exampleGrossPay, ugPlan, hasPostgraduate, selectedPayPeriod, customThreshold]);

  const variableScenario: VariablePayScenario[] = useMemo(() => {
    return generateVariablePayScenario(ugPlan, selectedPayPeriod);
  }, [ugPlan, selectedPayPeriod]);

  const frequencyComparison: FrequencyComparison = useMemo(() => {
    return comparePayFrequencies(comparisonIncome, ugPlan);
  }, [comparisonIncome, ugPlan]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">PAYE Period Threshold Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              PAYE Period Threshold Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Convert student loan thresholds across different pay frequencies.
              Understand why deductions vary period-to-period and the impact of pay frequency on your repayments.
            </p>
          </div>
        </section>

        {/* Period-Based Logic Alert */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-base sm:text-lg font-medium text-blue-800">Period-Based Calculation Logic</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p className="mb-2">
                    <strong>Critical Rule:</strong> Each pay period is assessed independently against that period&apos;s threshold.
                  </p>
                  <p className="mb-2">
                    <strong>Not Annualized:</strong> PAYE doesn&apos;t look at your annual income when calculating deductions.
                  </p>
                  <p>
                    <strong>Variable Impact:</strong> High earnings in one period = higher deduction that period, regardless of other periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Calculator */}
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid xl:grid-cols-3 gap-6 lg:gap-8">

            {/* Input Panel */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-teal-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-teal-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Threshold Conversion</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Convert annual thresholds to any pay frequency and see the PAYE impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Loan Plan */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                >
                  {STUDENT_LOAN_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {fmtMoney(plan.annualThreshold)} annual
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Repayment rate: {fmtPercent(ugPlan.rate)}
                </p>
              </div>

              {/* Pay Period Focus */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Focus Pay Period
                </label>
                <select
                  value={selectedPeriod}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPeriod(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                >
                  {PAY_PERIODS.map((period) => (
                    <option key={period.id} value={period.id}>
                      {period.name} ({period.periodsPerYear} per year)
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {selectedPayPeriod.description}
                </p>
              </div>

              {/* Tax Year */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Year
                </label>
                <select
                  value={taxYear}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTaxYear(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                >
                  {TAX_YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom Threshold */}
              <div>
                <label htmlFor="customThreshold" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Annual Threshold (Optional)
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="customThreshold"
                    min={0}
                    max={50000}
                    step={1000}
                    value={customThreshold || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomThreshold(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                    placeholder="Use plan default"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  For future planning or policy changes
                </p>
              </div>

              {/* Postgraduate Loan */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={hasPostgraduate}
                    onChange={(e) => setHasPostgraduate(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  Include postgraduate loan
                </label>
              </div>

              {/* Example Calculation Input */}
              <div>
                <label htmlFor="exampleGrossPay" className="block text-sm font-medium text-gray-700 mb-1">
                  Example {selectedPayPeriod.name} Gross Pay
                </label>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="exampleGrossPay"
                    min={0}
                    max={10000}
                    step={50}
                    value={exampleGrossPay}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExampleGrossPay(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={selectedPeriod === 'WEEKLY' ? 300 : selectedPeriod === 'MONTHLY' ? 1500 : 5000}
                    max={selectedPeriod === 'WEEKLY' ? 1500 : selectedPeriod === 'MONTHLY' ? 6000 : 20000}
                    step={selectedPeriod === 'WEEKLY' ? 25 : selectedPeriod === 'MONTHLY' ? 100 : 500}
                    value={exampleGrossPay}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExampleGrossPay(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Quick Threshold Reference */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Current Thresholds</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Annual:</span>
                    <span className="font-medium">{fmtMoney(customThreshold || ugPlan.annualThreshold)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{selectedPayPeriod.name}:</span>
                    <span className="font-medium">{fmtMoney(currentExample.threshold)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-1">
                    <span>Rate:</span>
                    <span className="font-medium">{fmtPercent(ugPlan.rate)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Comprehensive Threshold Table */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                  Threshold Conversion Table - {ugPlan.name}
                  {customThreshold > 0 && ` (Custom: ${fmtMoney(customThreshold)})`}
                </h2>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 sm:py-3 px-1 sm:px-2">Pay Period</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Periods/Year</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Threshold</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2 hidden sm:table-cell">HMRC Official</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2 hidden md:table-cell">Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allThresholds.map((threshold, index) => (
                          <tr key={`${threshold.plan.id}-${threshold.period.id}`}
                            className={`border-b border-gray-100 ${threshold.period.id === selectedPeriod ? 'bg-teal-50' : ''}`}>
                            <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">
                              <div className="flex flex-col sm:flex-row sm:items-center">
                                <span>{threshold.period.name}</span>
                                {threshold.period.id === selectedPeriod && (
                                  <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded mt-1 sm:mt-0 sm:ml-2 self-start">Selected</span>
                                )}
                              </div>
                            </td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2">{threshold.period.periodsPerYear}</td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2 font-medium">{fmtMoney(threshold.threshold)}</td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2 hidden sm:table-cell">
                              {threshold.officialThreshold ? fmtMoney(threshold.officialThreshold) : 'Same'}
                            </td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2 hidden md:table-cell">
                              {threshold.roundingDifference ? (
                                <span className={threshold.roundingDifference > 0 ? 'text-green-600' : 'text-red-600'}>
                                  {threshold.roundingDifference > 0 ? '+' : ''}{fmtMoney(threshold.roundingDifference)}
                                </span>
                              ) : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p><strong>HMRC Official:</strong> Official thresholds may differ from calculated due to rounding rules</p>
                  <p><strong>Difference:</strong> Positive = borrower-friendly (higher threshold), Negative = higher deduction</p>
                </div>
              </div>

              {/* Period-Specific Calculator */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                  {selectedPayPeriod.name} Calculation Example
                </h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Calculation Breakdown</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>{selectedPayPeriod.name} gross pay:</span>
                        <span className="font-medium">{fmtMoney(currentExample.grossPay)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{ugPlan.name} threshold:</span>
                        <span className="font-medium">{fmtMoney(currentExample.threshold)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount above threshold:</span>
                        <span className="font-medium">{fmtMoney(currentExample.amountAbove)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>UG repayment ({fmtPercent(ugPlan.rate)}):</span>
                        <span className="font-medium text-red-600">{fmtMoney(currentExample.ugRepayment, 2)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between">
                          <span>PG repayment (6%):</span>
                          <span className="font-medium text-red-600">{fmtMoney(currentExample.pgRepayment, 2)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total repayment:</span>
                        <span className="text-red-600">{fmtMoney(currentExample.totalRepayment, 2)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Annual Projection</h4>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded border border-blue-200">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-700">
                          {fmtMoney(currentExample.annualEquivalent)}
                        </div>
                        <div className="text-xs sm:text-sm text-blue-600">Annual Equivalent</div>
                        <div className="text-xs text-gray-500 mt-1">
                          If earning {fmtMoney(currentExample.grossPay)} every {selectedPayPeriod.name.toLowerCase()}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-xs sm:text-sm text-gray-600">
                      <p><strong>Important:</strong> This assumes consistent earnings every period.
                        Variable pay will result in different deductions each period.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Variable Pay Impact */}
              {variableScenario.length > 0 && (
                <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border border-orange-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
                    Variable Pay Impact - {selectedPayPeriod.name} Examples
                  </h3>

                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <table className="min-w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-orange-200">
                            <th className="text-left py-2 px-1 sm:px-2">Period</th>
                            <th className="text-right py-2 px-1 sm:px-2">Gross Pay</th>
                            <th className="text-right py-2 px-1 sm:px-2">Threshold</th>
                            <th className="text-right py-2 px-1 sm:px-2">Deduction</th>
                            <th className="text-left py-2 px-1 sm:px-2 hidden sm:table-cell">Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          {variableScenario.map((scenario, index) => (
                            <tr key={index} className="border-b border-orange-100">
                              <td className="py-2 px-1 sm:px-2 font-medium">{scenario.period}</td>
                              <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(scenario.grossPay)}</td>
                              <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(scenario.threshold)}</td>
                              <td className="text-right py-2 px-1 sm:px-2">
                                <span className={scenario.deduction > 0 ? 'text-red-600 font-medium' : 'text-gray-500'}>
                                  {scenario.deduction > 0 ? fmtMoney(scenario.deduction, 2) : '£0.00'}
                                </span>
                              </td>
                              <td className="py-2 px-1 sm:px-2 text-gray-600 hidden sm:table-cell">{scenario.reason}</td>
                            </tr>
                          ))}
                          <tr className="border-t-2 border-orange-300 font-semibold">
                            <td className="py-2 px-1 sm:px-2">Total</td>
                            <td className="text-right py-2 px-1 sm:px-2">
                              {fmtMoney(variableScenario.reduce((sum, s) => sum + s.grossPay, 0))}
                            </td>
                            <td className="text-right py-2 px-1 sm:px-2">-</td>
                            <td className="text-right py-2 px-1 sm:px-2 text-red-600">
                              {fmtMoney(variableScenario.reduce((sum, s) => sum + s.deduction, 0), 2)}
                            </td>
                            <td className="py-2 px-1 sm:px-2 hidden sm:table-cell">Period-based total</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-4 text-xs sm:text-sm text-orange-700">
                    <p><strong>Key Point:</strong> Each period is calculated independently.
                      High pay in one period = high deduction that period, regardless of low pay in other periods.</p>
                  </div>
                </div>
              )}

              {/* Pay Frequency Comparison */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Pay Frequency Impact Comparison</h3>

                <div className="mb-4">
                  <label htmlFor="comparisonIncome" className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Income for Comparison
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      id="comparisonIncome"
                      min={25000}
                      max={100000}
                      step={1000}
                      value={comparisonIncome}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComparisonIncome(Number(e.target.value) || 35000)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 sm:py-3 px-1 sm:px-2">Pay Frequency</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Gross Per Period</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Deduction Per Period</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Annual Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {frequencyComparison.scenarios.map((scenario, index) => (
                          <tr key={scenario.period.id} className="border-b border-gray-100">
                            <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">{scenario.period.name}</td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2">{fmtMoney(scenario.grossPay)}</td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2 text-red-600">{fmtMoney(scenario.periodicDeduction, 2)}</td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2 font-medium">{fmtMoney(scenario.annualTotal)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 bg-gray-50 p-3 rounded">
                  <div className="text-xs sm:text-sm text-gray-700">
                    <p><strong>Maximum Difference:</strong> {fmtMoney(frequencyComparison.differences.maxDifference)}</p>
                    <p><strong>Explanation:</strong> {frequencyComparison.differences.explanation}</p>
                  </div>
                </div>
              </div>

              {/* Payroll Implementation Guide */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Payroll Implementation Guide</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Step-by-Step Calculation</h4>
                    <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                      <li>Identify employee&apos;s pay frequency</li>
                      <li>Look up period threshold for their plan</li>
                      <li>Calculate: Gross pay - Period threshold</li>
                      <li>If positive: Multiply by rate (9% or 6%)</li>
                      <li>If negative/zero: No deduction</li>
                      <li>Deduct alongside tax and NI</li>
                      <li>Report to HMRC via RTI</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Key Rules</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                      <li>• Each period calculated independently</li>
                      <li>• Use official HMRC thresholds (not calculated)</li>
                      <li>• Round deductions to nearest penny</li>
                      <li>• Apply after tax but before pension</li>
                      <li>• Include in RTI submissions</li>
                      <li>• No annual reconciliation in payroll</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-teal max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Period-Based PAYE</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-teal-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Why Pay Frequency Matters</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• PAYE calculates each period independently</li>
                <li>• Higher pay in one period = higher deduction</li>
                <li>• Bonuses create spikes in deductions</li>
                <li>• Variable hours lead to variable deductions</li>
                <li>• No averaging across periods during year</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">HMRC Rounding Rules</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Official thresholds may differ from calculated</li>
                <li>• Usually rounded to nearest pound</li>
                <li>• Sometimes rounded in borrower&apos;s favor</li>
                <li>• Creates small differences in annual totals</li>
                <li>• Always use official HMRC figures</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Practical Implications</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">For employees:</p>
                <p>Understanding period thresholds helps explain why deductions vary with overtime, bonuses, or irregular hours.
                  A £{currentExample.grossPay} {selectedPayPeriod.name.toLowerCase()} payment results in £{currentExample.totalRepayment.toFixed(2)} deduction.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">For employers:</p>
                <p>Payroll systems must calculate each period independently using the correct threshold.
                  No annualization or averaging is allowed during the year.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">For planning:</p>
                <p>High earners should expect significant deductions in bonus periods.
                  The period-based system can&apos;t differentiate between regular pay and one-off payments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-teal-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need More Student Loan Information?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Understanding period-based calculations is crucial for managing student loan deductions effectively.
            Get official guidance on thresholds and repayment rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/repaying-your-student-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Official SL Info
            </a>
            <a
              href="https://www.gov.uk/guidance/payroll-student-loans"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-teal-800 transition-colors text-sm sm:text-base"
            >
              Payroll Guidance
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PAYEPeriodConverter;