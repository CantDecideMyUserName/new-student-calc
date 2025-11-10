"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface PaymentOption {
  method: 'SLC_VOLUNTARY' | 'SELF_ASSESSMENT';
  name: string;
  description: string;
  features: string[];
  limitations: string[];
}

interface PaymentScenario {
  id: string;
  name: string;
  description: string;
  recommendation: 'SLC_VOLUNTARY' | 'SELF_ASSESSMENT' | 'EITHER';
}

interface PaymentComparison {
  slcVoluntary: {
    paymentDate: Date;
    creditedDate: Date;
    processingDays: number;
    interestSavingsStart: Date;
    annualInterestSaved: number;
    monthlyInterestSaved: number;
    totalInterestSaved: number;
    flexibility: string[];
  };
  selfAssessment: {
    taxYearEnd: Date;
    paymentDue: Date;
    paymentMade: Date;
    hmrcProcessing: string;
    creditedDate: Date;
    interestAccrued: number;
    additionalInterestCost: number;
    limitations: string[];
  };
  comparison: {
    timeDifference: number; // days
    interestDifference: number;
    processingDifference: number;
    totalSavings: number;
    recommendation: 'SLC_VOLUNTARY' | 'SELF_ASSESSMENT' | 'EITHER';
    reasonsForRecommendation: string[];
  };
}

interface CalculationInputs {
  loanBalance: number;
  annualIncome: number;
  payeDeductions: number;
  saLiability: number;
  additionalPayment: number;
  interestRate: number;
  paymentReason: string;
  currentDate: Date;
}

const PAYMENT_SCENARIOS: PaymentScenario[] = [
  {
    id: 'MANDATORY_UNDERPAYMENT',
    name: 'Self Assessment Underpayment',
    description: 'You owe money due to PAYE not covering full liability',
    recommendation: 'SLC_VOLUNTARY'
  },
  {
    id: 'VOLUNTARY_OVERPAYMENT',
    name: 'Voluntary Debt Reduction',
    description: 'Making extra payments to reduce loan balance faster',
    recommendation: 'SLC_VOLUNTARY'
  },
  {
    id: 'END_YEAR_CLEANUP',
    name: 'Year-End Reconciliation',
    description: 'Discovered underpayment late in tax year',
    recommendation: 'SLC_VOLUNTARY'
  },
  {
    id: 'STRATEGIC_PAYMENT',
    name: 'Strategic Early Repayment',
    description: 'Planning ahead for known future liability',
    recommendation: 'SLC_VOLUNTARY'
  }
];

const PAYMENT_REASONS = [
  'Self Assessment underpayment',
  'Voluntary overpayment to reduce debt',
  'Strategic early repayment',
  'Year-end reconciliation',
  'Bonus or windfall payment'
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

const fmtDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const addWeeks = (date: Date, weeks: number): Date => {
  return addDays(date, weeks * 7);
};

const daysBetween = (date1: Date, date2: Date): number => {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

function calculateDailyInterest(balance: number, annualRate: number): number {
  return (balance * annualRate) / 365;
}

function calculateInterestForPeriod(balance: number, annualRate: number, days: number): number {
  return calculateDailyInterest(balance, annualRate) * days;
}

function getNextTaxYearEnd(currentDate: Date): Date {
  const currentYear = currentDate.getFullYear();
  const taxYearEnd = new Date(currentYear, 3, 5); // 5 April

  if (currentDate > taxYearEnd) {
    return new Date(currentYear + 1, 3, 5);
  }
  return taxYearEnd;
}

function getNextSADeadline(currentDate: Date): Date {
  const taxYearEnd = getNextTaxYearEnd(currentDate);
  return new Date(taxYearEnd.getFullYear() + 1, 0, 31); // 31 January following tax year
}

function calculatePaymentComparison(inputs: CalculationInputs): PaymentComparison {
  const {
    loanBalance,
    additionalPayment,
    interestRate,
    currentDate
  } = inputs;

  // SLC Voluntary Payment Timeline
  const slcPaymentDate = currentDate;
  const slcCreditedDate = addDays(slcPaymentDate, 5); // 5 working days processing
  const slcInterestSavingsStart = slcCreditedDate;

  // Self Assessment Timeline
  const taxYearEnd = getNextTaxYearEnd(currentDate);
  const saPaymentDue = getNextSADeadline(currentDate);
  const saPaymentMade = saPaymentDue;
  const saHmrcProcessingWeeks = 3; // Average 2-4 weeks
  const saCreditedDate = addWeeks(saPaymentMade, saHmrcProcessingWeeks);

  // Interest Calculations
  const daysUntilSACredited = daysBetween(slcCreditedDate, saCreditedDate);
  const annualInterestOnPayment = additionalPayment * interestRate;
  const slcAnnualInterestSaved = annualInterestOnPayment;
  const slcMonthlyInterestSaved = slcAnnualInterestSaved / 12;

  // Additional interest cost by waiting for SA
  const additionalInterestCost = calculateInterestForPeriod(
    additionalPayment,
    interestRate,
    daysUntilSACredited
  );

  // Total interest saved over first year
  const remainingDaysInYear = Math.min(365, daysBetween(slcCreditedDate, addDays(slcCreditedDate, 365)));
  const slcTotalInterestSaved = calculateInterestForPeriod(
    additionalPayment,
    interestRate,
    remainingDaysInYear
  );

  // Interest accrued during SA delay
  const saInterestAccrued = calculateInterestForPeriod(
    loanBalance,
    interestRate,
    daysUntilSACredited
  );

  // Comparison calculations
  const timeDifference = daysUntilSACredited;
  const interestDifference = additionalInterestCost;
  const processingDifference = daysBetween(slcCreditedDate, saCreditedDate);
  const totalSavings = additionalInterestCost; // Money saved by choosing SLC

  return {
    slcVoluntary: {
      paymentDate: slcPaymentDate,
      creditedDate: slcCreditedDate,
      processingDays: 5,
      interestSavingsStart: slcInterestSavingsStart,
      annualInterestSaved: slcAnnualInterestSaved,
      monthlyInterestSaved: slcMonthlyInterestSaved,
      totalInterestSaved: slcTotalInterestSaved,
      flexibility: [
        'Pay anytime',
        'Multiple payments allowed',
        'Immediate processing',
        'Full control over timing'
      ]
    },
    selfAssessment: {
      taxYearEnd,
      paymentDue: saPaymentDue,
      paymentMade: saPaymentMade,
      hmrcProcessing: `${saHmrcProcessingWeeks} weeks average`,
      creditedDate: saCreditedDate,
      interestAccrued: saInterestAccrued,
      additionalInterestCost,
      limitations: [
        'Annual payment only',
        'Fixed deadline',
        'Delayed processing',
        'Interest accrues during delay'
      ]
    },
    comparison: {
      timeDifference,
      interestDifference,
      processingDifference,
      totalSavings,
      recommendation: totalSavings > 10 ? 'SLC_VOLUNTARY' : 'EITHER', // Recommend SLC if saves £10+
      reasonsForRecommendation: [
        `Save ${fmtMoney(totalSavings)} in interest costs`,
        `${timeDifference} days earlier processing`,
        'Immediate impact on loan balance',
        'More flexible payment options'
      ]
    }
  };
}

const SLCVoluntaryVSSACalculator: React.FC = () => {
  const [loanBalance, setLoanBalance] = useState<number>(25000);
  const [annualIncome, setAnnualIncome] = useState<number>(35000);
  const [payeDeductions, setPayeDeductions] = useState<number>(150);
  const [saLiability, setSaLiability] = useState<number>(590);
  const [additionalPayment, setAdditionalPayment] = useState<number>(1000);
  const [interestRate, setInterestRate] = useState<number>(0.07);
  const [paymentReason, setPaymentReason] = useState<string>('Self Assessment underpayment');
  const [currentDate] = useState<Date>(new Date());

  const inputs: CalculationInputs = {
    loanBalance,
    annualIncome,
    payeDeductions,
    saLiability,
    additionalPayment,
    interestRate,
    paymentReason,
    currentDate
  };

  const comparison: PaymentComparison = useMemo(() => {
    return calculatePaymentComparison(inputs);
  }, [inputs]);

  const relevantScenario = PAYMENT_SCENARIOS.find(scenario =>
    paymentReason.toLowerCase().includes(scenario.name.toLowerCase().split(' ')[0])
  ) || PAYMENT_SCENARIOS[0];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">SLC Voluntary vs Self Assessment Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              SLC Voluntary vs Self Assessment Payment Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Compare paying student loans directly to SLC versus waiting for Self Assessment.
              Discover how much interest you can save with immediate voluntary payments.
            </p>
          </div>
        </section>

        {/* Recommendation Alert */}
        <section className="max-w-6xl mx-auto">
          <div className={`border-l-4 p-4 sm:p-6 rounded-lg ${comparison.comparison.recommendation === 'SLC_VOLUNTARY'
              ? 'bg-green-50 border-green-400'
              : 'bg-blue-50 border-blue-400'
            }`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className={`h-5 w-5 sm:h-6 sm:w-6 ${comparison.comparison.recommendation === 'SLC_VOLUNTARY' ? 'text-green-400' : 'text-blue-400'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className={`text-base sm:text-lg font-medium ${comparison.comparison.recommendation === 'SLC_VOLUNTARY' ? 'text-green-800' : 'text-blue-800'
                  }`}>
                  Recommendation: {comparison.comparison.recommendation === 'SLC_VOLUNTARY' ? 'Pay SLC Voluntarily' : 'Either Option Works'}
                </h3>
                <div className={`mt-2 text-sm ${comparison.comparison.recommendation === 'SLC_VOLUNTARY' ? 'text-green-700' : 'text-blue-700'
                  }`}>
                  <p className="mb-2">
                    <strong>Interest Savings:</strong> {fmtMoney(comparison.comparison.totalSavings)} by paying SLC directly
                  </p>
                  <p className="mb-2">
                    <strong>Time Difference:</strong> {comparison.comparison.timeDifference} days faster processing
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {comparison.comparison.reasonsForRecommendation.map((reason, index) => (
                      <li key={index} className="text-xs sm:text-sm">{reason}</li>
                    ))}
                  </ul>
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
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Payment Timing Matters</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Paying SLC directly saves interest costs compared to waiting for Self Assessment processing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Loan Details */}
              <div>
                <label htmlFor="loanBalance" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Loan Balance
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="loanBalance"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={loanBalance}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoanBalance(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Interest Rate
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="interestRate"
                    min={0}
                    max={0.15}
                    step={0.005}
                    value={interestRate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestRate(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                  <span className="text-gray-500 ml-2 text-sm">%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Annual rate: {fmtPercent(interestRate)}
                </p>
              </div>

              {/* Payment Details */}
              <div>
                <label htmlFor="additionalPayment" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Payment Amount
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="additionalPayment"
                    min={100}
                    max={50000}
                    step={100}
                    value={additionalPayment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdditionalPayment(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={additionalPayment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdditionalPayment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Payment
                </label>
                <select
                  value={paymentReason}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPaymentReason(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                >
                  {PAYMENT_REASONS.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              {/* Income Context */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 text-sm">Income Context (Optional)</h4>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Annual Income</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value) || 0)}
                      min={0}
                      max={100000}
                      step={1000}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">PAYE Deductions Made</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      value={payeDeductions}
                      onChange={(e) => setPayeDeductions(Number(e.target.value) || 0)}
                      min={0}
                      max={5000}
                      step={50}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">SA Liability Calculated</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      value={saLiability}
                      onChange={(e) => setSaLiability(Number(e.target.value) || 0)}
                      min={0}
                      max={5000}
                      step={50}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Underpayment: {fmtMoney(Math.max(0, saLiability - payeDeductions))}
                  </p>
                </div>
              </div>

              {/* Quick Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Quick Comparison</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>SLC processing:</span>
                    <span className="font-medium text-green-600">5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SA processing:</span>
                    <span className="font-medium text-orange-600">3+ weeks</span>
                  </div>
                  <div className="flex justify-between border-t pt-1">
                    <span>Interest savings:</span>
                    <span className="font-medium text-green-600">{fmtMoney(comparison.comparison.totalSavings)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Timeline Comparison */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Payment Timeline Comparison</h2>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* SLC Voluntary */}
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                    <h3 className="font-medium text-gray-800 mb-3 flex items-center text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      SLC Voluntary Payment
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Payment Date:</span>
                        <span className="font-medium">{fmtDate(comparison.slcVoluntary.paymentDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Time:</span>
                        <span className="font-medium text-green-600">{comparison.slcVoluntary.processingDays} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Credited Date:</span>
                        <span className="font-medium">{fmtDate(comparison.slcVoluntary.creditedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Savings Start:</span>
                        <span className="font-medium text-green-600">Immediately</span>
                      </div>
                    </div>
                  </div>

                  {/* Self Assessment */}
                  <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                    <h3 className="font-medium text-gray-800 mb-3 flex items-center text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 5a1 1 0 112 0v3.5a1 1 0 01-1 1H8a1 1 0 110-2h1V5z" clipRule="evenodd" />
                      </svg>
                      Self Assessment Payment
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Payment Due:</span>
                        <span className="font-medium">{fmtDate(comparison.selfAssessment.paymentDue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>HMRC Processing:</span>
                        <span className="font-medium text-orange-600">{comparison.selfAssessment.hmrcProcessing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Credited Date:</span>
                        <span className="font-medium">{fmtDate(comparison.selfAssessment.creditedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Accrues:</span>
                        <span className="font-medium text-red-600">Until credited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interest Impact Analysis */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Interest Impact Analysis</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700">
                      {fmtMoney(comparison.comparison.totalSavings)}
                    </div>
                    <div className="text-sm text-gray-600">Interest Saved</div>
                    <div className="text-xs text-gray-500 mt-1">By paying SLC directly</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {comparison.comparison.timeDifference}
                    </div>
                    <div className="text-sm text-gray-600">Days Faster</div>
                    <div className="text-xs text-gray-500 mt-1">Processing difference</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-700">
                      {fmtMoney(comparison.slcVoluntary.annualInterestSaved)}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                    <div className="text-xs text-gray-500 mt-1">On {fmtMoney(additionalPayment)} payment</div>
                  </div>
                </div>

                <div className="mt-6 grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">SLC Voluntary Benefits</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                      {comparison.slcVoluntary.flexibility.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Self Assessment Limitations</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                      {comparison.selfAssessment.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Feature Comparison */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Feature Comparison</h3>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 sm:py-3 px-1 sm:px-2">Feature</th>
                          <th className="text-center py-2 sm:py-3 px-1 sm:px-2">SLC Voluntary</th>
                          <th className="text-center py-2 sm:py-3 px-1 sm:px-2">Self Assessment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Timing</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-green-700 font-medium">Anytime</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-orange-700">31 Jan only</span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Processing</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-green-700 font-medium">5 days</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-orange-700">2-4 weeks</span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Interest Savings</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-green-700 font-medium">Immediate</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-red-700">Delayed</span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Flexibility</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-green-700 font-medium">High</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-orange-700">Low</span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Frequency</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-green-700 font-medium">Multiple times</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-orange-700">Once annually</span>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Refund Option</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-green-700 font-medium">Yes (timeframe)</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-orange-700">Complex</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Legal Requirement</td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-blue-700">Optional</span>
                          </td>
                          <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                            <span className="text-red-700">Mandatory if underpaid</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Scenario Recommendation */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Scenario-Based Recommendation</h3>

                <div className="bg-white p-3 sm:p-4 rounded border">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{relevantScenario.name}</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3">{relevantScenario.description}</p>

                  <div className={`p-3 rounded ${relevantScenario.recommendation === 'SLC_VOLUNTARY'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-blue-50 border border-blue-200'
                    }`}>
                    <div className={`font-medium text-sm ${relevantScenario.recommendation === 'SLC_VOLUNTARY' ? 'text-green-800' : 'text-blue-800'
                      }`}>
                      Recommended: {relevantScenario.recommendation === 'SLC_VOLUNTARY' ? 'SLC Voluntary Payment' : 'Either Option'}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">
                      {relevantScenario.recommendation === 'SLC_VOLUNTARY'
                        ? `Save ${fmtMoney(comparison.comparison.totalSavings)} in interest and get immediate impact on your loan balance.`
                        : 'Both options are viable for your situation.'
                      }
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Payment Instructions</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">SLC Voluntary Payment</h4>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                      <p><strong>Website:</strong> slc.co.uk (log in to your account)</p>
                      <p><strong>Payment Methods:</strong> Debit card, bank transfer</p>
                      <p><strong>Processing:</strong> 5 working days</p>
                      <p><strong>Confirmation:</strong> Email notification</p>
                      <p><strong>Reference:</strong> Use your customer reference number</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Self Assessment Payment</h4>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                      <p><strong>File Return:</strong> Online by 31 January</p>
                      <p><strong>Payment:</strong> HMRC gateway or bank transfer</p>
                      <p><strong>Processing:</strong> 2-4 weeks via HMRC</p>
                      <p><strong>Deadline:</strong> 31 January (midnight)</p>
                      <p><strong>Late Penalty:</strong> 5% if missed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-blue max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding the Difference</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Why SLC Voluntary is Better</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Immediate processing saves months of interest</li>
                <li>• Pay anytime throughout the year</li>
                <li>• Full control over payment timing</li>
                <li>• Multiple payments allowed</li>
                <li>• Direct to your loan balance</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">When Self Assessment is Required</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Legal requirement if you&apos;re underpaid</li>
                <li>• HMRC automatic calculation</li>
                <li>• Part of your tax return process</li>
                <li>• Single payment with tax bill</li>
                <li>• Clear deadline system</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Best Strategy</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">If you owe money via Self Assessment:</p>
                <p>Pay SLC voluntarily as soon as you know the amount, then file your SA return showing the payment was made. This saves {fmtMoney(comparison.comparison.totalSavings)} in interest while still fulfilling your legal obligations.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">For voluntary overpayments:</p>
                <p>Always use SLC voluntary payments. There&apos;s no benefit to using the Self Assessment route for optional payments, and you lose flexibility and pay more interest.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Planning ahead:</p>
                <p>If you know you&apos;ll owe money next year, consider making regular voluntary payments throughout the year rather than waiting for the SA deadline.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Ready to Make a Student Loan Payment?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Save money by paying directly to SLC rather than waiting for Self Assessment processing.
            Every day counts when it comes to interest savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.slc.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Make SLC Payment
            </a>
            <a
              href="https://www.gov.uk/self-assessment-tax-returns"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base"
            >
              Self Assessment Info
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SLCVoluntaryVSSACalculator;