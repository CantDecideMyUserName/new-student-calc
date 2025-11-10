"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface TaxCode {
  code: string;
  description: string;
  taxFreeAllowance: number;
  isStandard: boolean;
}

interface LoanPlan {
  id: string;
  name: string;
  monthlyThreshold: number;
  annualThreshold: number;
  repaymentRate: number;
}

interface Notice {
  type: 'SL1' | 'SL2' | 'PGL_START' | 'PGL_STOP';
  planType?: string;
  effectiveDate: string;
  reason?: string;
  description: string;
}

interface PayrollCalculation {
  grossPay: number;
  taxDeduction: number;
  niDeduction: number;
  ugStudentLoan: number;
  pgStudentLoan: number;
  totalDeductions: number;
  netPay: number;
}

interface Scenario {
  id: string;
  name: string;
  description: string;
  beforeNotice: PayrollCalculation;
  afterNotice: PayrollCalculation;
  notice: Notice;
  timeline: string[];
}

interface SimulationResult {
  scenario: Scenario;
  monthlyImpact: number;
  annualImpact: number;
  effectiveMonth: number;
  proratedAnnualImpact: number;
  taxCodeExplanation: TaxCode;
  employerActions: string[];
}

// Constants
const TAX_CODES: TaxCode[] = [
  {
    code: '1257L',
    description: 'Standard tax code for 2024/25',
    taxFreeAllowance: 12570,
    isStandard: true
  },
  {
    code: '1250L',
    description: 'Reduced personal allowance',
    taxFreeAllowance: 12500,
    isStandard: false
  },
  {
    code: '1000L',
    description: 'Further reduced allowance',
    taxFreeAllowance: 10000,
    isStandard: false
  },
  {
    code: 'BR',
    description: 'Basic rate tax only (20%)',
    taxFreeAllowance: 0,
    isStandard: false
  },
  {
    code: '0T',
    description: 'No tax-free allowance',
    taxFreeAllowance: 0,
    isStandard: false
  }
];

const LOAN_PLANS: LoanPlan[] = [
  {
    id: 'PLAN_1',
    name: 'Plan 1',
    monthlyThreshold: 2172,
    annualThreshold: 26065,
    repaymentRate: 0.09
  },
  {
    id: 'PLAN_2',
    name: 'Plan 2',
    monthlyThreshold: 2373,
    annualThreshold: 28470,
    repaymentRate: 0.09
  },
  {
    id: 'PLAN_4',
    name: 'Plan 4',
    monthlyThreshold: 2729,
    annualThreshold: 32745,
    repaymentRate: 0.09
  },
  {
    id: 'PLAN_5',
    name: 'Plan 5',
    monthlyThreshold: 2083,
    annualThreshold: 25000,
    repaymentRate: 0.09
  }
];

const POSTGRADUATE = {
  monthlyThreshold: 1750,
  annualThreshold: 21000,
  repaymentRate: 0.06
};

const SCENARIOS = [
  {
    id: 'new_job_no_p45',
    name: 'New Job - No P45',
    description: 'Employee starts new job without P45, SL1 notice received later'
  },
  {
    id: 'mid_year_sl1',
    name: 'Mid-Year SL1 Notice',
    description: 'Currently no SL deductions, HMRC issues SL1 notice mid-year'
  },
  {
    id: 'mid_year_sl2',
    name: 'Mid-Year SL2 Stop Notice',
    description: 'Currently deducting SL, HMRC issues SL2 stop notice'
  },
  {
    id: 'plan_change',
    name: 'Plan Type Change',
    description: 'Switch from one plan type to another mid-year'
  },
  {
    id: 'pgl_notice',
    name: 'Postgraduate Loan Notice',
    description: 'PGL start notice received for postgraduate loan'
  }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

function calculateTax(grossMonthly: number, taxCode: TaxCode): number {
  const monthlyAllowance = taxCode.taxFreeAllowance / 12;
  const taxableIncome = Math.max(0, grossMonthly - monthlyAllowance);

  // Simplified tax calculation (20% basic rate for most scenarios)
  let tax = 0;

  if (taxCode.code === 'BR') {
    tax = grossMonthly * 0.20;
  } else if (taxCode.code === '0T') {
    tax = grossMonthly * 0.20; // Assuming basic rate
  } else {
    // Standard progressive rates
    if (taxableIncome <= 3125) { // £37,500 annual basic rate limit / 12
      tax = taxableIncome * 0.20;
    } else {
      tax = (3125 * 0.20) + ((taxableIncome - 3125) * 0.40);
    }
  }

  return Math.max(0, tax);
}

function calculateNI(grossMonthly: number): number {
  const monthlyThreshold = 1048; // £12,570 annual / 12
  const monthlyUpperLimit = 4189; // £50,270 annual / 12

  let ni = 0;

  if (grossMonthly <= monthlyThreshold) {
    ni = 0;
  } else if (grossMonthly <= monthlyUpperLimit) {
    ni = (grossMonthly - monthlyThreshold) * 0.12;
  } else {
    ni = ((monthlyUpperLimit - monthlyThreshold) * 0.12) +
      ((grossMonthly - monthlyUpperLimit) * 0.02);
  }

  return Math.max(0, ni);
}

function calculateStudentLoan(grossMonthly: number, plan: LoanPlan): number {
  return Math.max(0, (grossMonthly - plan.monthlyThreshold) * plan.repaymentRate);
}

function calculatePostgraduateLoan(grossMonthly: number): number {
  return Math.max(0, (grossMonthly - POSTGRADUATE.monthlyThreshold) * POSTGRADUATE.repaymentRate);
}

function calculatePayroll(
  grossMonthly: number,
  taxCode: TaxCode,
  hasUGLoan: boolean,
  ugPlan?: LoanPlan,
  hasPGLoan: boolean = false
): PayrollCalculation {
  const tax = calculateTax(grossMonthly, taxCode);
  const ni = calculateNI(grossMonthly);
  const ugSL = hasUGLoan && ugPlan ? calculateStudentLoan(grossMonthly, ugPlan) : 0;
  const pgSL = hasPGLoan ? calculatePostgraduateLoan(grossMonthly) : 0;

  const totalDeductions = tax + ni + ugSL + pgSL;
  const netPay = grossMonthly - totalDeductions;

  return {
    grossPay: grossMonthly,
    taxDeduction: tax,
    niDeduction: ni,
    ugStudentLoan: ugSL,
    pgStudentLoan: pgSL,
    totalDeductions,
    netPay
  };
}

function generateScenario(
  scenarioId: string,
  grossMonthly: number,
  taxCode: TaxCode,
  currentPlan?: LoanPlan,
  newPlan?: LoanPlan
): Scenario {
  const currentDate = new Date();
  const effectiveDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

  switch (scenarioId) {
    case 'new_job_no_p45':
      return {
        id: scenarioId,
        name: 'New Job - No P45',
        description: 'Employee starts without P45, employer later receives SL1 notice',
        beforeNotice: calculatePayroll(grossMonthly, taxCode, false),
        afterNotice: calculatePayroll(grossMonthly, taxCode, true, newPlan || LOAN_PLANS[1]),
        notice: {
          type: 'SL1',
          planType: newPlan?.name || 'Plan 2',
          effectiveDate: effectiveDate.toISOString().split('T')[0],
          description: `Start deducting ${newPlan?.name || 'Plan 2'} student loan repayments`
        },
        timeline: [
          'Month 1-2: No P45 provided, no SL deductions',
          'Month 3: HMRC issues SL1 notice to employer',
          'Month 4: SL deductions start from next payroll'
        ]
      };

    case 'mid_year_sl1':
      return {
        id: scenarioId,
        name: 'Mid-Year SL1 Notice',
        description: 'HMRC discovers missing SL deductions, issues SL1 notice',
        beforeNotice: calculatePayroll(grossMonthly, taxCode, false),
        afterNotice: calculatePayroll(grossMonthly, taxCode, true, newPlan || LOAN_PLANS[1]),
        notice: {
          type: 'SL1',
          planType: newPlan?.name || 'Plan 2',
          effectiveDate: effectiveDate.toISOString().split('T')[0],
          description: `HMRC has identified this employee should have ${newPlan?.name || 'Plan 2'} deductions`
        },
        timeline: [
          'Current: No SL deductions being made',
          'Notice issued: HMRC sends SL1 to employer',
          'Next payroll: Start deductions immediately',
          'Note: No backdated deductions usually required'
        ]
      };

    case 'mid_year_sl2':
      return {
        id: scenarioId,
        name: 'Mid-Year SL2 Stop Notice',
        description: 'Student loan paid off or other reason to stop deductions',
        beforeNotice: calculatePayroll(grossMonthly, taxCode, true, currentPlan || LOAN_PLANS[1]),
        afterNotice: calculatePayroll(grossMonthly, taxCode, false),
        notice: {
          type: 'SL2',
          effectiveDate: effectiveDate.toISOString().split('T')[0],
          reason: 'Loan fully repaid',
          description: 'Stop all student loan deductions immediately'
        },
        timeline: [
          'Current: SL deductions being made monthly',
          'Notice issued: HMRC sends SL2 stop notice',
          'Next payroll: Stop all SL deductions',
          'Result: Increased take-home pay'
        ]
      };

    case 'plan_change':
      return {
        id: scenarioId,
        name: 'Plan Type Change',
        description: 'Change from one plan type to another',
        beforeNotice: calculatePayroll(grossMonthly, taxCode, true, currentPlan || LOAN_PLANS[0]),
        afterNotice: calculatePayroll(grossMonthly, taxCode, true, newPlan || LOAN_PLANS[1]),
        notice: {
          type: 'SL1',
          planType: newPlan?.name || 'Plan 2',
          effectiveDate: effectiveDate.toISOString().split('T')[0],
          description: `Change from ${currentPlan?.name || 'Plan 1'} to ${newPlan?.name || 'Plan 2'}`
        },
        timeline: [
          `Current: ${currentPlan?.name || 'Plan 1'} deductions`,
          'HMRC identifies plan change required',
          'SL1 notice issued with new plan type',
          `Next payroll: Switch to ${newPlan?.name || 'Plan 2'}`
        ]
      };

    case 'pgl_notice':
      return {
        id: scenarioId,
        name: 'Postgraduate Loan Notice',
        description: 'Start postgraduate loan deductions in addition to UG loan',
        beforeNotice: calculatePayroll(grossMonthly, taxCode, true, currentPlan || LOAN_PLANS[1], false),
        afterNotice: calculatePayroll(grossMonthly, taxCode, true, currentPlan || LOAN_PLANS[1], true),
        notice: {
          type: 'PGL_START',
          effectiveDate: effectiveDate.toISOString().split('T')[0],
          description: 'Start postgraduate loan deductions (6% above £1,750/month)'
        },
        timeline: [
          'Current: UG loan deductions only',
          'HMRC issues PGL start notice',
          'Next payroll: Add PG loan deductions',
          'Both UG and PG loans deducted simultaneously'
        ]
      };

    default:
      return {
        id: scenarioId,
        name: 'Unknown Scenario',
        description: 'Scenario not implemented',
        beforeNotice: calculatePayroll(grossMonthly, taxCode, false),
        afterNotice: calculatePayroll(grossMonthly, taxCode, false),
        notice: {
          type: 'SL1',
          effectiveDate: effectiveDate.toISOString().split('T')[0],
          description: 'Unknown notice type'
        },
        timeline: []
      };
  }
}

const NoticeSimulator: React.FC = () => {
  const [grossMonthly, setGrossMonthly] = useState<number>(3500);
  const [selectedTaxCode, setSelectedTaxCode] = useState<string>('1257L');
  const [selectedScenario, setSelectedScenario] = useState<string>('mid_year_sl1');
  const [currentPlan, setCurrentPlan] = useState<string>('PLAN_1');
  const [newPlan, setNewPlan] = useState<string>('PLAN_2');
  const [effectiveMonth, setEffectiveMonth] = useState<number>(6); // June

  const taxCode = TAX_CODES.find(tc => tc.code === selectedTaxCode)!;
  const currentLoanPlan = LOAN_PLANS.find(p => p.id === currentPlan);
  const newLoanPlan = LOAN_PLANS.find(p => p.id === newPlan);

  const simulation: SimulationResult = useMemo(() => {
    const scenario = generateScenario(
      selectedScenario,
      grossMonthly,
      taxCode,
      currentLoanPlan,
      newLoanPlan
    );

    const monthlyImpact = scenario.afterNotice.netPay - scenario.beforeNotice.netPay;
    const annualImpact = monthlyImpact * 12;
    const remainingMonths = Math.max(0, 12 - effectiveMonth + 1);
    const proratedAnnualImpact = monthlyImpact * remainingMonths;

    const employerActions = [
      'Review notice carefully for effective date and plan type',
      'Update payroll system with new SL/PGL settings',
      'Apply changes from specified effective date',
      'Notify employee of change in net pay',
      'Keep notice on file for audit purposes'
    ];

    return {
      scenario,
      monthlyImpact,
      annualImpact,
      effectiveMonth,
      proratedAnnualImpact,
      taxCodeExplanation: taxCode,
      employerActions
    };
  }, [selectedScenario, grossMonthly, taxCode, currentLoanPlan, newLoanPlan, effectiveMonth]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">SL/PGL Notice Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              SL/PGL Notice & Tax Code Impact Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand how HMRC student loan notices work and their impact on payroll.
              Learn why tax codes don&apos;t contain student loan information.
            </p>
          </div>
        </section>

        {/* Tax Code Myth Buster */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 sm:p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-base sm:text-lg font-medium text-amber-800">Common Misconception Alert!</h3>
                <div className="mt-2 text-sm text-amber-700">
                  <p className="mb-2">
                    <strong>Myth:</strong> Tax codes contain student loan information (e.g., &quot;1257L SL&quot;)
                  </p>
                  <p className="mb-2">
                    <strong>Reality:</strong> Tax codes determine your tax-free allowance ONLY.
                    Student loan information comes from separate HMRC notices (SL1/SL2) or P45 indicators.
                  </p>
                  <p className="text-xs sm:text-sm">
                    <strong>Your tax code &quot;{selectedTaxCode}&quot;</strong> means you have a tax-free allowance of {fmtMoney(taxCode.taxFreeAllowance)} per year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Simulator */}
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
                    <h3 className="text-sm font-semibold text-gray-800">Notice System</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      HMRC uses SL1 (start) and SL2 (stop) notices to tell employers
                      when to start or stop student loan deductions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Employee Details */}
              <div>
                <label htmlFor="grossPay" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Gross Salary
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2 text-sm">£</span>
                  <input
                    type="number"
                    id="grossPay"
                    min={1000}
                    max={15000}
                    step={100}
                    value={grossMonthly}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrossMonthly(Number(e.target.value) || 0)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    min={2000}
                    max={8000}
                    step={100}
                    value={grossMonthly}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGrossMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Annual: {fmtMoney(grossMonthly * 12)}
                </p>
              </div>

              {/* Tax Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Code
                </label>
                <select
                  value={selectedTaxCode}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTaxCode(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                >
                  {TAX_CODES.map((tc) => (
                    <option key={tc.code} value={tc.code}>
                      {tc.code} - {fmtMoney(tc.taxFreeAllowance)} allowance
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {taxCode.description}
                </p>
              </div>

              {/* Scenario Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Scenario to Simulate
                </label>
                <select
                  value={selectedScenario}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedScenario(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                >
                  {SCENARIOS.map((scenario) => (
                    <option key={scenario.id} value={scenario.id}>
                      {scenario.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {SCENARIOS.find(s => s.id === selectedScenario)?.description}
                </p>
              </div>

              {/* Plan Configuration */}
              {(selectedScenario === 'plan_change' || selectedScenario === 'mid_year_sl2') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Plan (Before Notice)
                  </label>
                  <select
                    value={currentPlan}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrentPlan(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                  >
                    {LOAN_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} - {fmtMoney(plan.monthlyThreshold)}/month
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {selectedScenario !== 'mid_year_sl2' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedScenario === 'plan_change' ? 'New Plan (After Notice)' : 'Plan Type'}
                  </label>
                  <select
                    value={newPlan}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNewPlan(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                  >
                    {LOAN_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} - {fmtMoney(plan.monthlyThreshold)}/month
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Effective Month */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notice Effective Month
                </label>
                <select
                  value={effectiveMonth}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEffectiveMonth(Number(e.target.value))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-sm"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                      {new Date(2024, month - 1).toLocaleDateString('en-US', { month: 'long' })} (Month {month})
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Remaining months in tax year: {Math.max(0, 12 - effectiveMonth + 1)}
                </p>
              </div>

              {/* Tax Code Explanation */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Tax Code Breakdown</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Code:</strong> {taxCode.code}</p>
                  <p><strong>Meaning:</strong> {taxCode.description}</p>
                  <p><strong>Tax-free allowance:</strong> {fmtMoney(taxCode.taxFreeAllowance)} per year</p>
                  <p><strong>Monthly allowance:</strong> {fmtMoney(taxCode.taxFreeAllowance / 12)}</p>
                  <p className="text-orange-600 font-medium text-xs mt-2">
                    ⚠️ Student loan info is NOT in your tax code
                  </p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Notice Information */}
              <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl border border-indigo-200">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Notice Details</h2>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">HMRC Notice</h3>
                    <div className="bg-white p-3 sm:p-4 rounded-lg border">
                      <div className="text-center mb-3">
                        <div className="text-xl sm:text-2xl font-bold text-indigo-700">
                          {simulation.scenario.notice.type}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {simulation.scenario.notice.type === 'SL1' ? 'Start Notice' :
                            simulation.scenario.notice.type === 'SL2' ? 'Stop Notice' :
                              'Postgraduate Loan Notice'}
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        {simulation.scenario.notice.planType && (
                          <div className="flex justify-between">
                            <span>Plan Type:</span>
                            <span className="font-medium">{simulation.scenario.notice.planType}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Effective Date:</span>
                          <span className="font-medium">{simulation.scenario.notice.effectiveDate}</span>
                        </div>
                        {simulation.scenario.notice.reason && (
                          <div className="flex justify-between">
                            <span>Reason:</span>
                            <span className="font-medium">{simulation.scenario.notice.reason}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600">
                        {simulation.scenario.notice.description}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Timeline</h3>
                    <div className="space-y-2">
                      {simulation.scenario.timeline.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 sm:mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Before vs After Payroll */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Payroll Impact Comparison</h3>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 sm:py-3 px-1 sm:px-2">Component</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Before Notice</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">After Notice</th>
                          <th className="text-right py-2 sm:py-3 px-1 sm:px-2">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2 font-medium">Gross Pay</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">{fmtMoney(simulation.scenario.beforeNotice.grossPay)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">{fmtMoney(simulation.scenario.afterNotice.grossPay)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2">Income Tax</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-{fmtMoney(simulation.scenario.beforeNotice.taxDeduction)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-{fmtMoney(simulation.scenario.afterNotice.taxDeduction)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2">National Insurance</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-{fmtMoney(simulation.scenario.beforeNotice.niDeduction)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-{fmtMoney(simulation.scenario.afterNotice.niDeduction)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 sm:py-3 px-1 sm:px-2">UG Student Loan</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                            {simulation.scenario.beforeNotice.ugStudentLoan > 0
                              ? `-${fmtMoney(simulation.scenario.beforeNotice.ugStudentLoan)}`
                              : '£0'
                            }
                          </td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                            {simulation.scenario.afterNotice.ugStudentLoan > 0
                              ? `-${fmtMoney(simulation.scenario.afterNotice.ugStudentLoan)}`
                              : '£0'
                            }
                          </td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                            <span className={
                              simulation.scenario.afterNotice.ugStudentLoan - simulation.scenario.beforeNotice.ugStudentLoan > 0
                                ? 'text-red-600'
                                : simulation.scenario.afterNotice.ugStudentLoan - simulation.scenario.beforeNotice.ugStudentLoan < 0
                                  ? 'text-green-600'
                                  : 'text-gray-500'
                            }>
                              {simulation.scenario.afterNotice.ugStudentLoan - simulation.scenario.beforeNotice.ugStudentLoan !== 0 &&
                                (simulation.scenario.afterNotice.ugStudentLoan - simulation.scenario.beforeNotice.ugStudentLoan > 0 ? '-' : '+')
                              }
                              {fmtMoney(Math.abs(simulation.scenario.afterNotice.ugStudentLoan - simulation.scenario.beforeNotice.ugStudentLoan))}
                            </span>
                          </td>
                        </tr>
                        {(simulation.scenario.beforeNotice.pgStudentLoan > 0 || simulation.scenario.afterNotice.pgStudentLoan > 0) && (
                          <tr className="border-b border-gray-100">
                            <td className="py-2 sm:py-3 px-1 sm:px-2">PG Student Loan</td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                              {simulation.scenario.beforeNotice.pgStudentLoan > 0
                                ? `-${fmtMoney(simulation.scenario.beforeNotice.pgStudentLoan)}`
                                : '£0'
                              }
                            </td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                              {simulation.scenario.afterNotice.pgStudentLoan > 0
                                ? `-${fmtMoney(simulation.scenario.afterNotice.pgStudentLoan)}`
                                : '£0'
                              }
                            </td>
                            <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                              <span className={
                                simulation.scenario.afterNotice.pgStudentLoan - simulation.scenario.beforeNotice.pgStudentLoan > 0
                                  ? 'text-red-600'
                                  : simulation.scenario.afterNotice.pgStudentLoan - simulation.scenario.beforeNotice.pgStudentLoan < 0
                                    ? 'text-green-600'
                                    : 'text-gray-500'
                              }>
                                {simulation.scenario.afterNotice.pgStudentLoan - simulation.scenario.beforeNotice.pgStudentLoan !== 0 &&
                                  (simulation.scenario.afterNotice.pgStudentLoan - simulation.scenario.beforeNotice.pgStudentLoan > 0 ? '-' : '+')
                                }
                                {fmtMoney(Math.abs(simulation.scenario.afterNotice.pgStudentLoan - simulation.scenario.beforeNotice.pgStudentLoan))}
                              </span>
                            </td>
                          </tr>
                        )}
                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 sm:py-3 px-1 sm:px-2">Net Pay</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">{fmtMoney(simulation.scenario.beforeNotice.netPay)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">{fmtMoney(simulation.scenario.afterNotice.netPay)}</td>
                          <td className="text-right py-2 sm:py-3 px-1 sm:px-2">
                            <span className={
                              simulation.monthlyImpact > 0 ? 'text-green-600' :
                                simulation.monthlyImpact < 0 ? 'text-red-600' : 'text-gray-500'
                            }>
                              {simulation.monthlyImpact > 0 ? '+' : simulation.monthlyImpact < 0 ? '' : ''}
                              {fmtMoney(simulation.monthlyImpact)}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Annual Impact Summary */}
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Annual Impact Summary</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {simulation.monthlyImpact > 0 ? '+' : simulation.monthlyImpact < 0 ? '-' : ''}
                      {fmtMoney(Math.abs(simulation.monthlyImpact))}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Change</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {simulation.annualImpact > 0 ? '+' : simulation.annualImpact < 0 ? '-' : ''}
                      {fmtMoney(Math.abs(simulation.annualImpact))}
                    </div>
                    <div className="text-sm text-gray-600">Full Year Impact</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                      {simulation.proratedAnnualImpact > 0 ? '+' : simulation.proratedAnnualImpact < 0 ? '-' : ''}
                      {fmtMoney(Math.abs(simulation.proratedAnnualImpact))}
                    </div>
                    <div className="text-sm text-gray-600">
                      Remaining Tax Year
                      <br />
                      <span className="text-xs">({Math.max(0, 12 - effectiveMonth + 1)} months)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employer Action Checklist */}
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Employer Action Checklist</h3>

                <div className="space-y-3">
                  {simulation.employerActions.map((action, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-2 sm:mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-800">{action}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded text-xs text-blue-700">
                  <strong>Important:</strong> Employers must implement notice instructions by the specified effective date.
                  Failure to comply can result in penalties and additional administrative burden.
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 p-4 sm:p-6 rounded-lg border border-red-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Common Employer Mistakes</h3>

                <div className="space-y-3 text-xs sm:text-sm text-red-700">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Looking for student loan info in tax codes (it&apos;s not there!)</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Ignoring or delaying implementation of SL1/SL2 notices</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Applying wrong plan type or threshold amounts</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Attempting to collect backdated deductions without HMRC instruction</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Not keeping proper records of notices received</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-purple max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding the Notice System</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">SL1 Start Notices</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Issued by HMRC to employers</li>
                <li>• Instructs when to start SL deductions</li>
                <li>• Specifies exact plan type and threshold</li>
                <li>• Must be implemented from effective date</li>
                <li>• Usually no backdated deductions required</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">SL2 Stop Notices</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Issued when deductions should cease</li>
                <li>• Reasons: loan paid off, overseas, correction</li>
                <li>• Immediate stop from specified date</li>
                <li>• Increases employee take-home pay</li>
                <li>• Keep notice for audit trail</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Key Points for Employers</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">Tax codes vs Student loan notices:</p>
                <p>Tax codes (like 1257L) only determine tax-free allowances. Student loan information comes from separate HMRC notices or P45 indicators, never from tax codes.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Notice compliance:</p>
                <p>Employers must implement SL1 and SL2 notices exactly as instructed. The effective date is critical and non-negotiable.</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Plan types matter:</p>
                <p>Different plans have different thresholds and rates. Always use the exact plan type specified in the notice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need Help with Student Loan Notices?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            Understanding the HMRC notice system is crucial for correct payroll operation.
            Get the latest guidance on implementing student loan deductions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/guidance/student-loan-deductions-from-pay-for-employers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Employer Guidance
            </a>
            <a
              href="https://www.gov.uk/repaying-your-student-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-purple-800 transition-colors text-sm sm:text-base"
            >
              Employee Information
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NoticeSimulator;