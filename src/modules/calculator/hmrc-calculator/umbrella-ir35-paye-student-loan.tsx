"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface ContractorArrangement {
  id: string;
  name: string;
  description: string;
  slHandling: string;
  features: string[];
  warnings?: string[];
}

interface StudentLoanPlan {
  id: string;
  name: string;
  weeklyThreshold: number;
  monthlyThreshold: number;
  annualThreshold: number;
  rate: number;
}

interface PayslipBreakdown {
  assignmentRate: number;
  workingDays: number;
  grossAssignmentIncome: number;
  employerCosts: {
    umbrellaMargin: number;
    employerNI: number;
    apprenticeshipLevy: number;
    total: number;
  };
  grossPay: number;
  employeeDeductions: {
    incomeTax: number;
    employeeNI: number;
    ugStudentLoan: number;
    pgStudentLoan: number;
    pension: number;
    total: number;
  };
  netPay: number;
  effectiveRates: {
    netOfGross: number;
    netOfAssignment: number;
    totalDeductionRate: number;
    slDeductionRate: number;
  };
}

interface AnnualProjection {
  weeksWorked: number;
  annualAssignmentRate: number;
  annualGrossPay: number;
  annualUGStudentLoan: number;
  annualPGStudentLoan: number;
  annualNetPay: number;
  monthlyNetAverage: number;
  selfAssessmentEquivalent: number;
}

interface IR35Analysis {
  isInsideIR35: boolean;
  payrollArrangement: 'UMBRELLA' | 'FEE_PAYER' | 'OUTSIDE_IR35';
  slTreatment: string;
  recommendations: string[];
  warnings: string[];
}

// Constants
const CONTRACTOR_ARRANGEMENTS: ContractorArrangement[] = [
  {
    id: 'UMBRELLA',
    name: 'Umbrella Company',
    description: 'Working through umbrella company (inside IR35)',
    slHandling: 'PAYE deductions - automatic weekly/monthly',
    features: [
      'Automatic PAYE processing',
      'Weekly/monthly deductions',
      'No Self Assessment needed for SL',
      'Predictable deductions',
      'Umbrella handles compliance'
    ]
  },
  {
    id: 'FEE_PAYER',
    name: 'Fee-Payer Deduction (IR35)',
    description: 'Agency/client deducts tax as fee-payer',
    slHandling: 'Should NOT deduct SL via PAYE - pay via SA',
    features: [
      'Agency deducts tax and NI only',
      'Student loans via Self Assessment',
      'Annual payment (31 January)',
      'Requires planning and budgeting'
    ],
    warnings: [
      'Agencies may incorrectly try to deduct SL',
      'Must tell agency to ignore SL1 notices',
      'Self Assessment required'
    ]
  },
  {
    id: 'OUTSIDE_IR35',
    name: 'Outside IR35 (Ltd Company)',
    description: 'Operating through own limited company',
    slHandling: 'Low salary + dividends = SA payment required',
    features: [
      'Salary below SL threshold',
      'Dividends not subject to PAYE',
      'Full flexibility over timing',
      'Self Assessment required',
      'Tax efficiency possible'
    ]
  }
];

const STUDENT_LOAN_PLANS: StudentLoanPlan[] = [
  {
    id: 'PLAN_1',
    name: 'Plan 1',
    weeklyThreshold: 501,    // £26,065/52
    monthlyThreshold: 2172,  // £26,065/12
    annualThreshold: 26065,
    rate: 0.09
  },
  {
    id: 'PLAN_2',
    name: 'Plan 2',
    weeklyThreshold: 548,    // £28,470/52
    monthlyThreshold: 2373,  // £28,470/12
    annualThreshold: 28470,
    rate: 0.09
  },
  {
    id: 'PLAN_4',
    name: 'Plan 4',
    weeklyThreshold: 630,    // £32,745/52
    monthlyThreshold: 2729,  // £32,745/12
    annualThreshold: 32745,
    rate: 0.09
  },
  {
    id: 'PLAN_5',
    name: 'Plan 5',
    weeklyThreshold: 481,    // £25,000/52
    monthlyThreshold: 2083,  // £25,000/12
    annualThreshold: 25000,
    rate: 0.09
  }
];

const POSTGRADUATE_LOAN = {
  weeklyThreshold: 404,    // £21,000/52
  monthlyThreshold: 1750,  // £21,000/12
  annualThreshold: 21000,
  rate: 0.06
};

// Tax and NI rates for 2024/25
const TAX_RATES = {
  EMPLOYER_NI_RATE: 0.138,
  EMPLOYER_NI_THRESHOLD_WEEKLY: 175,
  APPRENTICESHIP_LEVY_RATE: 0.005,
  APPRENTICESHIP_LEVY_THRESHOLD: 3000000, // Annual
  EMPLOYEE_NI_RATE_MAIN: 0.08,
  EMPLOYEE_NI_RATE_ADDITIONAL: 0.02,
  EMPLOYEE_NI_THRESHOLD_WEEKLY: 242,     // £12,570/52
  EMPLOYEE_NI_UEL_WEEKLY: 967,           // £50,270/52
  INCOME_TAX_BASIC_RATE: 0.20,
  INCOME_TAX_HIGHER_RATE: 0.40,
  INCOME_TAX_THRESHOLD_WEEKLY: 242,      // £12,570/52
  INCOME_TAX_HIGHER_THRESHOLD_WEEKLY: 967 // £50,270/52
};

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateEmployerNI(grossPay: number, payFreq: 'WEEKLY' | 'MONTHLY'): number {
  const threshold = payFreq === 'WEEKLY' ? TAX_RATES.EMPLOYER_NI_THRESHOLD_WEEKLY : TAX_RATES.EMPLOYER_NI_THRESHOLD_WEEKLY * 4.33;
  return Math.max(0, (grossPay - threshold) * TAX_RATES.EMPLOYER_NI_RATE);
}

function calculateApprenticeshipLevy(grossPay: number): number {
  const annualPay = grossPay * 52;
  if (annualPay > TAX_RATES.APPRENTICESHIP_LEVY_THRESHOLD) {
    return grossPay * TAX_RATES.APPRENTICESHIP_LEVY_RATE;
  }
  return 0;
}

function calculateIncomeTax(grossPay: number, payFreq: 'WEEKLY' | 'MONTHLY'): number {
  const basicThreshold = payFreq === 'WEEKLY' ? TAX_RATES.INCOME_TAX_THRESHOLD_WEEKLY : TAX_RATES.INCOME_TAX_THRESHOLD_WEEKLY * 4.33;
  const higherThreshold = payFreq === 'WEEKLY' ? TAX_RATES.INCOME_TAX_HIGHER_THRESHOLD_WEEKLY : TAX_RATES.INCOME_TAX_HIGHER_THRESHOLD_WEEKLY * 4.33;

  let tax = 0;

  if (grossPay > higherThreshold) {
    // Higher rate tax on amount above higher threshold
    tax += (grossPay - higherThreshold) * TAX_RATES.INCOME_TAX_HIGHER_RATE;
    // Basic rate tax on amount between thresholds
    tax += (higherThreshold - basicThreshold) * TAX_RATES.INCOME_TAX_BASIC_RATE;
  } else if (grossPay > basicThreshold) {
    // Basic rate tax on amount above basic threshold
    tax += (grossPay - basicThreshold) * TAX_RATES.INCOME_TAX_BASIC_RATE;
  }

  return tax;
}

function calculateEmployeeNI(grossPay: number, payFreq: 'WEEKLY' | 'MONTHLY'): number {
  const mainThreshold = payFreq === 'WEEKLY' ? TAX_RATES.EMPLOYEE_NI_THRESHOLD_WEEKLY : TAX_RATES.EMPLOYEE_NI_THRESHOLD_WEEKLY * 4.33;
  const uel = payFreq === 'WEEKLY' ? TAX_RATES.EMPLOYEE_NI_UEL_WEEKLY : TAX_RATES.EMPLOYEE_NI_UEL_WEEKLY * 4.33;

  let ni = 0;

  if (grossPay > uel) {
    // Main rate on amount up to UEL
    ni += (uel - mainThreshold) * TAX_RATES.EMPLOYEE_NI_RATE_MAIN;
    // Additional rate on amount above UEL
    ni += (grossPay - uel) * TAX_RATES.EMPLOYEE_NI_RATE_ADDITIONAL;
  } else if (grossPay > mainThreshold) {
    // Main rate on amount above threshold
    ni += (grossPay - mainThreshold) * TAX_RATES.EMPLOYEE_NI_RATE_MAIN;
  }

  return ni;
}

function calculateStudentLoan(grossPay: number, plan: StudentLoanPlan, payFreq: 'WEEKLY' | 'MONTHLY'): number {
  const threshold = payFreq === 'WEEKLY' ? plan.weeklyThreshold : plan.monthlyThreshold;
  return Math.max(0, (grossPay - threshold) * plan.rate);
}

function calculatePostgraduateLoan(grossPay: number, payFreq: 'WEEKLY' | 'MONTHLY'): number {
  const threshold = payFreq === 'WEEKLY' ? POSTGRADUATE_LOAN.weeklyThreshold : POSTGRADUATE_LOAN.monthlyThreshold;
  return Math.max(0, (grossPay - threshold) * POSTGRADUATE_LOAN.rate);
}

function calculateUmbrellaPayslip(
  dayRate: number,
  daysPerWeek: number,
  umbrellaMargin: number,
  ugPlan: StudentLoanPlan,
  hasPostgraduate: boolean,
  payFreq: 'WEEKLY' | 'MONTHLY' = 'WEEKLY'
): PayslipBreakdown {
  // Calculate assignment income
  const weeksPerPeriod = payFreq === 'WEEKLY' ? 1 : 4.33;
  const assignmentRate = dayRate;
  const workingDays = daysPerWeek * weeksPerPeriod;
  const grossAssignmentIncome = assignmentRate * workingDays;

  // Calculate employer costs (deducted from assignment rate)
  const umbrellaMarginTotal = umbrellaMargin * weeksPerPeriod;
  const preliminaryGross = grossAssignmentIncome - umbrellaMarginTotal;

  // Calculate employer NI and levy on the gross pay amount
  const employerNI = calculateEmployerNI(preliminaryGross, payFreq);
  const apprenticeshipLevy = calculateApprenticeshipLevy(preliminaryGross);

  const totalEmployerCosts = umbrellaMarginTotal + employerNI + apprenticeshipLevy;
  const grossPay = grossAssignmentIncome - totalEmployerCosts;

  // Calculate employee deductions
  const incomeTax = calculateIncomeTax(grossPay, payFreq);
  const employeeNI = calculateEmployeeNI(grossPay, payFreq);
  const ugStudentLoan = calculateStudentLoan(grossPay, ugPlan, payFreq);
  const pgStudentLoan = hasPostgraduate ? calculatePostgraduateLoan(grossPay, payFreq) : 0;
  const pension = 0; // Assume no pension for simplicity

  const totalEmployeeDeductions = incomeTax + employeeNI + ugStudentLoan + pgStudentLoan + pension;
  const netPay = grossPay - totalEmployeeDeductions;

  // Calculate effective rates
  const netOfGross = netPay / grossPay;
  const netOfAssignment = netPay / grossAssignmentIncome;
  const totalDeductionRate = (totalEmployerCosts + totalEmployeeDeductions) / grossAssignmentIncome;
  const slDeductionRate = (ugStudentLoan + pgStudentLoan) / grossAssignmentIncome;

  return {
    assignmentRate,
    workingDays,
    grossAssignmentIncome,
    employerCosts: {
      umbrellaMargin: umbrellaMarginTotal,
      employerNI,
      apprenticeshipLevy,
      total: totalEmployerCosts
    },
    grossPay,
    employeeDeductions: {
      incomeTax,
      employeeNI,
      ugStudentLoan,
      pgStudentLoan,
      pension,
      total: totalEmployeeDeductions
    },
    netPay,
    effectiveRates: {
      netOfGross,
      netOfAssignment,
      totalDeductionRate,
      slDeductionRate
    }
  };
}

function projectAnnualFigures(weeklyPayslip: PayslipBreakdown, weeksWorked: number): AnnualProjection {
  return {
    weeksWorked,
    annualAssignmentRate: weeklyPayslip.grossAssignmentIncome * weeksWorked,
    annualGrossPay: weeklyPayslip.grossPay * weeksWorked,
    annualUGStudentLoan: weeklyPayslip.employeeDeductions.ugStudentLoan * weeksWorked,
    annualPGStudentLoan: weeklyPayslip.employeeDeductions.pgStudentLoan * weeksWorked,
    annualNetPay: weeklyPayslip.netPay * weeksWorked,
    monthlyNetAverage: (weeklyPayslip.netPay * weeksWorked) / 12,
    selfAssessmentEquivalent: (weeklyPayslip.employeeDeductions.ugStudentLoan + weeklyPayslip.employeeDeductions.pgStudentLoan) * weeksWorked
  };
}

function analyzeIR35Treatment(arrangement: string, hasP45: boolean, hasDeclaredSL: boolean): IR35Analysis {
  const isInsideIR35 = arrangement !== 'OUTSIDE_IR35';
  let payrollArrangement: 'UMBRELLA' | 'FEE_PAYER' | 'OUTSIDE_IR35';
  let slTreatment: string;
  let recommendations: string[] = [];
  let warnings: string[] = [];

  switch (arrangement) {
    case 'UMBRELLA':
      payrollArrangement = 'UMBRELLA';
      slTreatment = 'Automatic PAYE deductions - processed weekly/monthly';
      recommendations = [
        'Ensure umbrella company has correct SL plan details',
        'Check first payslip for accurate deductions',
        'Keep payslips for year-end reconciliation',
        'No Self Assessment needed for student loans'
      ];
      if (!hasDeclaredSL) {
        warnings.push('Must declare student loan plan to umbrella company');
      }
      break;

    case 'FEE_PAYER':
      payrollArrangement = 'FEE_PAYER';
      slTreatment = 'Should NOT be deducted via PAYE - pay via Self Assessment';
      recommendations = [
        'Tell agency to ignore any SL1 notices from HMRC',
        'Do not allow PAYE student loan deductions',
        'Budget for Self Assessment payment (due 31 January)',
        'Set aside money monthly for annual payment'
      ];
      warnings = [
        'Agencies may incorrectly try to deduct student loans',
        'Must file Self Assessment for student loan payment',
        'Late payment penalties apply if missed'
      ];
      break;

    case 'OUTSIDE_IR35':
      payrollArrangement = 'OUTSIDE_IR35';
      slTreatment = 'Low salary + dividends = Self Assessment payment';
      recommendations = [
        'Keep salary below student loan threshold',
        'Pay dividends to optimize tax efficiency',
        'Budget for annual Self Assessment payment',
        'Consider timing of dividend payments'
      ];
      break;

    default:
      payrollArrangement = 'UMBRELLA';
      slTreatment = 'Unknown arrangement';
  }

  return {
    isInsideIR35,
    payrollArrangement,
    slTreatment,
    recommendations,
    warnings
  };
}

const UmbrellaIR35Calculator: React.FC = () => {
  const [dayRate, setDayRate] = useState<number>(500);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [arrangement, setArrangement] = useState<string>('UMBRELLA');
  const [umbrellaMargin, setUmbrellaMargin] = useState<number>(20);
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);
  const [hasP45, setHasP45] = useState<boolean>(true);
  const [hasDeclaredSL, setHasDeclaredSL] = useState<boolean>(true);
  const [weeksWorked, setWeeksWorked] = useState<number>(48);
  const [payFreq, setPayFreq] = useState<'WEEKLY' | 'MONTHLY'>('WEEKLY');

  const ugPlan = STUDENT_LOAN_PLANS.find(p => p.id === selectedPlan)!;
  const selectedArrangement = CONTRACTOR_ARRANGEMENTS.find(a => a.id === arrangement)!;

  const payslip: PayslipBreakdown = useMemo(() => {
    if (arrangement === 'UMBRELLA') {
      return calculateUmbrellaPayslip(dayRate, daysPerWeek, umbrellaMargin, ugPlan, hasPostgraduate, payFreq);
    } else {
      // For non-umbrella arrangements, return simplified calculation
      const grossIncome = dayRate * daysPerWeek * (payFreq === 'WEEKLY' ? 1 : 4.33);
      return {
        assignmentRate: dayRate,
        workingDays: daysPerWeek * (payFreq === 'WEEKLY' ? 1 : 4.33),
        grossAssignmentIncome: grossIncome,
        employerCosts: { umbrellaMargin: 0, employerNI: 0, apprenticeshipLevy: 0, total: 0 },
        grossPay: grossIncome,
        employeeDeductions: { incomeTax: 0, employeeNI: 0, ugStudentLoan: 0, pgStudentLoan: 0, pension: 0, total: 0 },
        netPay: grossIncome,
        effectiveRates: { netOfGross: 1, netOfAssignment: 1, totalDeductionRate: 0, slDeductionRate: 0 }
      };
    }
  }, [dayRate, daysPerWeek, arrangement, umbrellaMargin, ugPlan, hasPostgraduate, payFreq]);

  const annualProjection: AnnualProjection = useMemo(() => {
    return projectAnnualFigures(payslip, weeksWorked);
  }, [payslip, weeksWorked]);

  const ir35Analysis: IR35Analysis = useMemo(() => {
    return analyzeIR35Treatment(arrangement, hasP45, hasDeclaredSL);
  }, [arrangement, hasP45, hasDeclaredSL]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Umbrella/Inside-IR35 Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Umbrella/Inside-IR35 Student Loan Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Calculate student loan deductions for contractors working through umbrella companies or inside IR35.
              Understand the impact on your take-home pay and plan accordingly.
            </p>
          </div>
        </section>

        {/* IR35 Status Alert */}
        {ir35Analysis.warnings.length > 0 && (
          <section className="max-w-6xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base sm:text-lg font-medium text-red-800">Important IR35 Notice!</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p className="mb-2">
                      <strong>Student Loan Treatment:</strong> {ir35Analysis.slTreatment}
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {ir35Analysis.warnings.map((warning, index) => (
                        <li key={index} className="text-xs sm:text-sm">{warning}</li>
                      ))}
                    </ul>
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
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-purple-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Contractor Student Loans</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Student loan treatment varies significantly between umbrella companies and IR35 arrangements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div>
                <label htmlFor="dayRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Daily Rate
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="dayRate"
                    min={200}
                    max={2000}
                    step={25}
                    value={dayRate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDayRate(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={300}
                    max={1000}
                    step={25}
                    value={dayRate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDayRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="daysPerWeek" className="block text-sm font-medium text-gray-700 mb-1">
                  Days Per Week
                </label>
                <select
                  id="daysPerWeek"
                  value={daysPerWeek}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDaysPerWeek(Number(e.target.value))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                >
                  <option value={3}>3 days</option>
                  <option value={4}>4 days</option>
                  <option value={5}>5 days</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Weekly assignment: {fmtMoney(dayRate * daysPerWeek)}
                </p>
              </div>

              {/* IR35 Arrangement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Working Arrangement
                </label>
                <select
                  value={arrangement}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setArrangement(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                >
                  {CONTRACTOR_ARRANGEMENTS.map((arr) => (
                    <option key={arr.id} value={arr.id}>
                      {arr.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {selectedArrangement.description}
                </p>
              </div>

              {/* Umbrella-specific settings */}
              {arrangement === 'UMBRELLA' && (
                <div>
                  <label htmlFor="umbrellaMargin" className="block text-sm font-medium text-gray-700 mb-1">
                    Umbrella Margin (Weekly)
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2 text-sm">£</span>
                    <input
                      type="number"
                      id="umbrellaMargin"
                      min={10}
                      max={50}
                      step={5}
                      value={umbrellaMargin}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUmbrellaMargin(Number(e.target.value) || 0)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Typical range: £15-£25 per week
                  </p>
                </div>
              )}

              {/* Payment Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Frequency
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="WEEKLY"
                      checked={payFreq === 'WEEKLY'}
                      onChange={(e) => setPayFreq(e.target.value as 'WEEKLY' | 'MONTHLY')}
                      className="mr-2 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm">Weekly</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="MONTHLY"
                      checked={payFreq === 'MONTHLY'}
                      onChange={(e) => setPayFreq(e.target.value as 'WEEKLY' | 'MONTHLY')}
                      className="mr-2 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm">Monthly</span>
                  </label>
                </div>
              </div>

              {/* Student Loan Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                >
                  {STUDENT_LOAN_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {fmtMoney(payFreq === 'WEEKLY' ? plan.weeklyThreshold : plan.monthlyThreshold)}/{payFreq.toLowerCase()}
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
                    className="mr-2 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  I also have a postgraduate loan
                </label>
              </div>

              {/* Declaration Status */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 text-sm">Student Loan Declaration</h4>

                <div>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={hasP45}
                      onChange={(e) => setHasP45(e.target.checked)}
                      className="mr-2 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    I have a P45 from previous employment
                  </label>
                </div>

                <div>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={hasDeclaredSL}
                      onChange={(e) => setHasDeclaredSL(e.target.checked)}
                      className="mr-2 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    I have declared my student loan to umbrella/agency
                  </label>
                </div>
              </div>

              {/* Annual Projection Settings */}
              <div>
                <label htmlFor="weeksWorked" className="block text-sm font-medium text-gray-700 mb-1">
                  Weeks Worked Per Year
                </label>
                <input
                  type="number"
                  id="weeksWorked"
                  min={40}
                  max={52}
                  value={weeksWorked}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeeksWorked(Number(e.target.value) || 48)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Assumes {52 - weeksWorked} weeks holiday/unpaid
                </p>
              </div>

              {/* Quick Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Quick Summary</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>{payFreq === 'WEEKLY' ? 'Weekly' : 'Monthly'} assignment:</span>
                    <span className="font-medium">{fmtMoney(payslip.grossAssignmentIncome)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Student loan deduction:</span>
                    <span className="font-medium text-red-600">
                      -{fmtMoney(payslip.employeeDeductions.ugStudentLoan + payslip.employeeDeductions.pgStudentLoan)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-1">
                    <span>Net pay:</span>
                    <span className="font-medium text-green-600">{fmtMoney(payslip.netPay)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Payslip Breakdown */}
              {arrangement === 'UMBRELLA' && (
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
                    {payFreq === 'WEEKLY' ? 'Weekly' : 'Monthly'} Payslip Breakdown
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Income Section */}
                    <div>
                      <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Income</h3>
                      <div className="bg-white p-3 sm:p-4 rounded border">
                        <div className="flex justify-between text-sm">
                          <span>Assignment rate ({fmtMoney(dayRate)}/day × {payslip.workingDays} days):</span>
                          <span className="font-medium">{fmtMoney(payslip.grossAssignmentIncome)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Employer Costs */}
                    <div>
                      <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Employer Costs (Deducted from Assignment Rate)</h3>
                      <div className="bg-red-50 p-3 sm:p-4 rounded border border-red-200">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Umbrella margin:</span>
                            <span className="text-red-600">-{fmtMoney(payslip.employerCosts.umbrellaMargin)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Employer NI (13.8%):</span>
                            <span className="text-red-600">-{fmtMoney(payslip.employerCosts.employerNI)}</span>
                          </div>
                          {payslip.employerCosts.apprenticeshipLevy > 0 && (
                            <div className="flex justify-between">
                              <span>Apprenticeship Levy (0.5%):</span>
                              <span className="text-red-600">-{fmtMoney(payslip.employerCosts.apprenticeshipLevy)}</span>
                            </div>
                          )}
                          <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Total Employer Costs:</span>
                            <span className="text-red-600">-{fmtMoney(payslip.employerCosts.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gross Pay */}
                    <div>
                      <div className="bg-blue-50 p-3 sm:p-4 rounded border border-blue-200">
                        <div className="flex justify-between font-semibold">
                          <span>Gross Pay (to Employee):</span>
                          <span className="text-blue-700">{fmtMoney(payslip.grossPay)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Employee Deductions */}
                    <div>
                      <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Employee Deductions</h3>
                      <div className="bg-orange-50 p-3 sm:p-4 rounded border border-orange-200">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Income Tax:</span>
                            <span className="text-orange-600">-{fmtMoney(payslip.employeeDeductions.incomeTax)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Employee NI:</span>
                            <span className="text-orange-600">-{fmtMoney(payslip.employeeDeductions.employeeNI)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Student Loan ({ugPlan.name}):</span>
                            <span className="text-orange-600">-{fmtMoney(payslip.employeeDeductions.ugStudentLoan)}</span>
                          </div>
                          {hasPostgraduate && (
                            <div className="flex justify-between">
                              <span>Postgraduate Loan:</span>
                              <span className="text-orange-600">-{fmtMoney(payslip.employeeDeductions.pgStudentLoan)}</span>
                            </div>
                          )}
                          <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Total Employee Deductions:</span>
                            <span className="text-orange-600">-{fmtMoney(payslip.employeeDeductions.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Net Pay */}
                    <div>
                      <div className="bg-green-50 p-3 sm:p-4 rounded border border-green-200">
                        <div className="flex justify-between text-base sm:text-lg font-semibold">
                          <span>Net Pay:</span>
                          <span className="text-green-700">{fmtMoney(payslip.netPay)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Effective Rates Analysis */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Take-Home Analysis</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700">
                      {fmtPercent(payslip.effectiveRates.netOfAssignment)}
                    </div>
                    <div className="text-sm text-gray-600">Net of Assignment Rate</div>
                    <div className="text-xs text-gray-500 mt-1">What you actually receive</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {fmtPercent(payslip.effectiveRates.netOfGross)}
                    </div>
                    <div className="text-sm text-gray-600">Net of Gross Pay</div>
                    <div className="text-xs text-gray-500 mt-1">After PAYE deductions</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-700">
                      {fmtPercent(payslip.effectiveRates.slDeductionRate)}
                    </div>
                    <div className="text-sm text-gray-600">Student Loan Rate</div>
                    <div className="text-xs text-gray-500 mt-1">Of assignment rate</div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-3 sm:p-4 rounded">
                  <div className="text-sm text-gray-700">
                    <p><strong>Total Deduction Rate:</strong> {fmtPercent(payslip.effectiveRates.totalDeductionRate)} of assignment rate</p>
                    <p><strong>Student Loan Impact:</strong> {fmtMoney(payslip.employeeDeductions.ugStudentLoan + payslip.employeeDeductions.pgStudentLoan)} per {payFreq.toLowerCase()}</p>
                  </div>
                </div>
              </div>

              {/* Annual Projections */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Annual Projections ({weeksWorked} weeks)</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Annual Figures</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Assignment rate total:</span>
                        <span>{fmtMoney(annualProjection.annualAssignmentRate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gross pay total:</span>
                        <span>{fmtMoney(annualProjection.annualGrossPay)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>UG Student loan total:</span>
                        <span className="text-red-600">{fmtMoney(annualProjection.annualUGStudentLoan)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between">
                          <span>PG loan total:</span>
                          <span className="text-red-600">{fmtMoney(annualProjection.annualPGStudentLoan)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Net pay total:</span>
                        <span className="text-green-600">{fmtMoney(annualProjection.annualNetPay)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Self Assessment Equivalent</h4>
                    <div className="bg-yellow-50 p-3 sm:p-4 rounded border border-yellow-200">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-yellow-700">
                          {fmtMoney(annualProjection.selfAssessmentEquivalent)}
                        </div>
                        <div className="text-sm text-yellow-600">Annual SL Liability</div>
                        <div className="text-xs text-gray-500 mt-1">
                          If paid via Self Assessment instead
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <p><strong>Monthly average net:</strong> {fmtMoney(annualProjection.monthlyNetAverage)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* IR35 Treatment Analysis */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">IR35 & Student Loan Treatment</h3>

                <div className="mb-4">
                  <div className="bg-white p-3 sm:p-4 rounded border">
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{selectedArrangement.name}</h4>
                    <p className="text-gray-700 text-sm mb-3">{selectedArrangement.description}</p>
                    <p className="text-sm"><strong>Student Loan Handling:</strong> {selectedArrangement.slHandling}</p>
                  </div>
                </div>

                {ir35Analysis.recommendations.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Recommendations</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                      {ir35Analysis.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-white p-3 sm:p-4 rounded border">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Key Features</h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                    {selectedArrangement.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Comparison with Outside IR35 */}
              {arrangement === 'UMBRELLA' && (
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Comparison: Umbrella vs Outside IR35</h3>

                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <table className="min-w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 sm:py-3 px-1 sm:px-2">Aspect</th>
                            <th className="text-center py-2 sm:py-3 px-1 sm:px-2">Umbrella (Current)</th>
                            <th className="text-center py-2 sm:py-3 px-1 sm:px-2">Outside IR35 Ltd Co</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Student Loan Deductions</td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-orange-700">{fmtMoney(annualProjection.annualUGStudentLoan + annualProjection.annualPGStudentLoan)}/year</span>
                              <div className="text-xs text-gray-500">Automatic PAYE</div>
                            </td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-blue-700">{fmtMoney(annualProjection.selfAssessmentEquivalent)}/year</span>
                              <div className="text-xs text-gray-500">Via Self Assessment</div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Payment Timing</td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-green-700">Weekly/Monthly</span>
                            </td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-orange-700">Annual (31 Jan)</span>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Flexibility</td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-orange-700">Low</span>
                            </td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-green-700">High</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Administration</td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-green-700">Simple</span>
                            </td>
                            <td className="text-center py-2 sm:py-3 px-1 sm:px-2">
                              <span className="text-orange-700">Complex</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-purple max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding Contractor Student Loans</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Umbrella Company Treatment</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Treated as employed for PAYE purposes</li>
                <li>• Automatic student loan deductions</li>
                <li>• Weekly or monthly deductions</li>
                <li>• Must declare student loan plan to umbrella</li>
                <li>• No Self Assessment needed for SL</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">IR35 Fee-Payer Issues</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Agencies should NOT deduct student loans</li>
                <li>• Often try to deduct incorrectly</li>
                <li>• Must tell agency to ignore SL1 notices</li>
                <li>• Pay via Self Assessment instead</li>
                <li>• Budget for annual payment</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Key Planning Points</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">Umbrella company choice:</p>
                <p>Student loan deductions of {fmtMoney(payslip.employeeDeductions.ugStudentLoan + payslip.employeeDeductions.pgStudentLoan)} per {payFreq.toLowerCase()} significantly impact your take-home pay. Factor this into your rate negotiations.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Declaration importance:</p>
                <p>Always declare your student loan plan correctly. Incorrect information leads to wrong deductions and year-end reconciliation issues.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">IR35 status impact:</p>
                <p>Your IR35 status fundamentally changes how student loans are handled. Inside IR35 = PAYE deductions. Fee-payer arrangements = Self Assessment required.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need Help with Contractor Student Loans?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Understanding how student loans work for contractors is crucial for financial planning.
            Get professional guidance on your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/guidance/ir35-working-through-an-intermediary"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              IR35 Guidance
            </a>
            <a
              href="https://www.gov.uk/repaying-your-student-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-purple-800 transition-colors text-sm sm:text-base"
            >
              Student Loan Info
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UmbrellaIR35Calculator;