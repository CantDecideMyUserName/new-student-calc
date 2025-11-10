"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  name: string;
  annualThreshold: number;
  repaymentRate: number;
  description: string;
}

interface PaymentFrequency {
  value: string;
  label: string;
  periodsPerYear: number;
}

interface PAYEBreakdown {
  employment: number;
  annualIncome: number;
  annualRepayment: number;
  periodIncome: number;
  periodThreshold: number;
  periodRepayment: number;
}

interface PAYEResults {
  totalAnnualRepayment: number;
  paymentBreakdown: PAYEBreakdown[];
  paymentTiming: string;
}

interface SelfAssessmentResults {
  totalAnnualRepayment: number;
  totalIncome: number;
  paymentTiming: string;
}

interface Calculations {
  paye: PAYEResults;
  selfAssessment: SelfAssessmentResults;
  difference: number;
  percentageDifference: number;
  payeIsHigher: boolean;
}

// Student Loan Plan Constants
const LOAN_PLANS: Record<string, LoanPlan> = {
  PLAN_1: {
    name: 'Plan 1',
    annualThreshold: 22015,
    repaymentRate: 0.09,
    description: 'Pre-2012 students (England/Wales) or Northern Ireland students'
  },
  PLAN_2: {
    name: 'Plan 2', 
    annualThreshold: 27295,
    repaymentRate: 0.09,
    description: '2012-2023 students (England/Wales)'
  },
  PLAN_4: {
    name: 'Plan 4',
    annualThreshold: 31395,
    repaymentRate: 0.09,
    description: 'Scottish students'
  },
  PLAN_5: {
    name: 'Plan 5',
    annualThreshold: 25000,
    repaymentRate: 0.09,
    description: 'Post-2023 students (England/Wales)'
  },
  POSTGRADUATE: {
    name: 'Postgraduate',
    annualThreshold: 21000,
    repaymentRate: 0.06,
    description: 'Postgraduate loans'
  }
};

const PAYMENT_FREQUENCIES: PaymentFrequency[] = [
  { value: 'weekly', label: 'Weekly', periodsPerYear: 52 },
  { value: 'fortnightly', label: 'Fortnightly', periodsPerYear: 26 },
  { value: 'fourweekly', label: 'Four Weekly', periodsPerYear: 13 },
  { value: 'monthly', label: 'Monthly', periodsPerYear: 12 }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculatePAYERepayments(incomes: number[], frequency: string, plan: LoanPlan): PAYEResults {
  const periodsPerYear = PAYMENT_FREQUENCIES.find(f => f.value === frequency)?.periodsPerYear || 12;
  const periodThreshold = plan.annualThreshold / periodsPerYear;
  
  let totalAnnualRepayment: number = 0;
  const paymentBreakdown: PAYEBreakdown[] = [];
  
  incomes.forEach((income, index) => {
    const periodIncome = income / periodsPerYear;
    let periodRepayments = 0;
    
    for (let period = 1; period <= periodsPerYear; period++) {
      const repayment = periodIncome > periodThreshold 
        ? (periodIncome - periodThreshold) * plan.repaymentRate 
        : 0;
      periodRepayments += repayment;
    }
    
    totalAnnualRepayment += periodRepayments;
    paymentBreakdown.push({
      employment: index + 1,
      annualIncome: income,
      annualRepayment: periodRepayments,
      periodIncome: periodIncome,
      periodThreshold: periodThreshold,
      periodRepayment: periodRepayments / periodsPerYear
    });
  });
  
  return {
    totalAnnualRepayment,
    paymentBreakdown,
    paymentTiming: `${periodsPerYear} payments per year`
  };
}

function calculateSelfAssessmentRepayments(incomes: number[], plan: LoanPlan): SelfAssessmentResults {
  const totalIncome = incomes.reduce((sum, income) => sum + income, 0);
  const totalRepayment = totalIncome > plan.annualThreshold 
    ? (totalIncome - plan.annualThreshold) * plan.repaymentRate 
    : 0;
  
  return {
    totalAnnualRepayment: totalRepayment,
    totalIncome: totalIncome,
    paymentTiming: 'Single payment on 31 January following tax year end'
  };
}

const PAYEVsSelfAssessmentComparator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly');
  const [incomes, setIncomes] = useState<number[]>([30000]);
  
  const plan: LoanPlan = LOAN_PLANS[selectedPlan];
  
  const calculations: Calculations = useMemo(() => {
    const payeResults = calculatePAYERepayments(incomes, paymentFrequency, plan);
    const selfAssessmentResults = calculateSelfAssessmentRepayments(incomes, plan);
    
    const difference = payeResults.totalAnnualRepayment - selfAssessmentResults.totalAnnualRepayment;
    const percentageDifference = selfAssessmentResults.totalAnnualRepayment > 0 
      ? (difference / selfAssessmentResults.totalAnnualRepayment) * 100 
      : 0;
    
    return {
      paye: payeResults,
      selfAssessment: selfAssessmentResults,
      difference: difference,
      percentageDifference: percentageDifference,
      payeIsHigher: difference > 0
    };
  }, [incomes, paymentFrequency, plan]);
  
  const addIncome = (): void => {
    setIncomes([...incomes, 20000]);
  };
  
  const removeIncome = (index: number): void => {
    if (incomes.length > 1) {
      setIncomes(incomes.filter((_, i) => i !== index));
    }
  };
  
  const updateIncome = (index: number, value: string): void => {
    const newIncomes = [...incomes];
    newIncomes[index] = Math.max(0, Number(value) || 0);
    setIncomes(newIncomes);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">PAYE vs Self Assessment Calculator</span></li>
            </ol>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            PAYE vs Self Assessment Student Loan Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Compare your student loan repayments under PAYE and Self Assessment systems. 
            Discover which method could be more favorable for your situation.
          </p>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Important Note</h3>
                  <p className="text-sm text-gray-600">
                    PAYE treats each employment separately, while Self Assessment aggregates all income sources.
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
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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

            {/* Payment Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PAYE Payment Frequency
              </label>
              <select
                value={paymentFrequency}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPaymentFrequency(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                {PAYMENT_FREQUENCIES.map((freq) => (
                  <option key={freq.value} value={freq.value}>
                    {freq.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Income Sources */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Annual Income Sources
                </label>
                <button
                  onClick={addIncome}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add Employment
                </button>
              </div>
              
              {incomes.map((income, index) => (
                <div key={index} className="flex items-center space-x-2 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">£</span>
                      <input
                        type="number"
                        value={income}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateIncome(index, e.target.value)}
                        min={0}
                        max={500000}
                        step={1000}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Annual income"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Employment {index + 1}
                    </p>
                  </div>
                  {incomes.length > 1 && (
                    <button
                      onClick={() => removeIncome(index)}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Plan Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Plan Details</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Threshold:</strong> {fmtMoney(plan.annualThreshold)} per year</p>
                <p><strong>Rate:</strong> {fmtPercent(plan.repaymentRate)} above threshold</p>
                <p><strong>Monthly threshold:</strong> {fmtMoney(plan.annualThreshold / 12)}</p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Summary Comparison */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Repayment Comparison</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                
                {/* PAYE Results */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">PAYE System</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Annual Repayment</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {fmtMoney(calculations.paye.totalAnnualRepayment)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Method</p>
                      <p className="text-sm text-gray-700">{calculations.paye.paymentTiming}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Per Payment</p>
                      <p className="text-sm text-gray-700">
                        {fmtMoney(calculations.paye.totalAnnualRepayment / (PAYMENT_FREQUENCIES.find(f => f.value === paymentFrequency)?.periodsPerYear || 12))}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Self Assessment Results */}
                <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Self Assessment</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Annual Repayment</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {fmtMoney(calculations.selfAssessment.totalAnnualRepayment)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Method</p>
                      <p className="text-sm text-gray-700">{calculations.selfAssessment.paymentTiming}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Income</p>
                      <p className="text-sm text-gray-700">
                        {fmtMoney(calculations.selfAssessment.totalIncome)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Difference Analysis */}
              <div className={`p-4 rounded-lg ${Math.abs(calculations.difference) < 1 ? 'bg-gray-100' : calculations.payeIsHigher ? 'bg-red-50' : 'bg-green-50'}`}>
                <div className="flex items-center">
                  <div className="mr-3">
                    {Math.abs(calculations.difference) < 1 ? (
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    ) : calculations.payeIsHigher ? (
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {Math.abs(calculations.difference) < 1 
                        ? 'Repayments are identical' 
                        : calculations.payeIsHigher 
                          ? 'PAYE results in higher repayments' 
                          : 'Self Assessment results in higher repayments'
                      }
                    </p>
                    {Math.abs(calculations.difference) >= 1 && (
                      <p className="text-sm text-gray-600">
                        Difference: {fmtMoney(Math.abs(calculations.difference))} 
                        ({Math.abs(calculations.percentageDifference).toFixed(1)}% {calculations.payeIsHigher ? 'more under PAYE' : 'more under Self Assessment'})
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            {incomes.length > 1 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">PAYE Breakdown by Employment</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Employment</th>
                        <th className="text-right py-2">Annual Income</th>
                        <th className="text-right py-2">Per Period Income</th>
                        <th className="text-right py-2">Per Period Repayment</th>
                        <th className="text-right py-2">Annual Repayment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calculations.paye.paymentBreakdown.map((breakdown, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2">Employment {breakdown.employment}</td>
                          <td className="text-right py-2">{fmtMoney(breakdown.annualIncome)}</td>
                          <td className="text-right py-2">{fmtMoney(breakdown.periodIncome)}</td>
                          <td className="text-right py-2">{fmtMoney(breakdown.periodRepayment)}</td>
                          <td className="text-right py-2 font-medium">{fmtMoney(breakdown.annualRepayment)}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-gray-300 font-semibold">
                        <td className="py-2">Total</td>
                        <td className="text-right py-2">{fmtMoney(incomes.reduce((sum, income) => sum + income, 0))}</td>
                        <td className="text-right py-2">-</td>
                        <td className="text-right py-2">-</td>
                        <td className="text-right py-2">{fmtMoney(calculations.paye.totalAnnualRepayment)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Key Insights */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Insights</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Multiple Employments:</strong> Under PAYE, each employment is treated separately for threshold purposes. 
                    Under Self Assessment, all income is aggregated.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Payment Timing:</strong> PAYE spreads repayments throughout the year, while Self Assessment requires 
                    a lump sum payment on 31 January.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Variable Income:</strong> If your income varies significantly within the year, 
                    the timing of earnings can affect total repayments under PAYE.
                  </p>
                </div>
                {calculations.payeIsHigher && Math.abs(calculations.difference) >= 100 && (
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>
                      <strong>Potential Overpayment:</strong> You may be overpaying under PAYE. 
                      Consider discussing your situation with HMRC or a tax advisor.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">How PAYE vs Self Assessment Affects Student Loan Repayments</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">PAYE System</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Repayments deducted automatically from salary</li>
              <li>• Each employment treated separately</li>
              <li>• Threshold applied to each job individually</li>
              <li>• Payments spread throughout the year</li>
              <li>• Can result in overpayments with multiple jobs</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Self Assessment</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Annual calculation based on total income</li>
              <li>• All income sources aggregated</li>
              <li>• Single threshold applied to total income</li>
              <li>• Lump sum payment on 31 January</li>
              <li>• More accurate for multiple income sources</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">When Differences Occur</h3>
          <p className="text-gray-700 mb-4">
            The most significant differences between PAYE and Self Assessment repayments typically occur when you have:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• Multiple part-time employments</li>
            <li>• Combination of employment and self-employment income</li>
            <li>• Variable income throughout the year</li>
            <li>• Income from different sources (employment, freelancing, rental income)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            If you have multiple income sources that individually fall below the threshold but collectively exceed it, 
            you may pay less under Self Assessment than PAYE.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto bg-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Need Professional Advice?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          If you&apos;re experiencing significant differences between PAYE and Self Assessment calculations, 
          consider speaking with a tax advisor or contacting HMRC for guidance on your specific situation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.gov.uk/contact-hmrc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact HMRC
          </a>
          <a
            href="https://www.gov.uk/repaying-your-student-loan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Learn More About Repayments
          </a>
        </div>
      </section>
    </div>
  );
};

export default PAYEVsSelfAssessmentComparator;