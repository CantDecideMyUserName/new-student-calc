"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  id: string;
  name: string;
  annualThreshold: number;
  monthlyThreshold: number;
  weeklyThreshold: number;
  repaymentRate: number;
  description: string;
}

interface Job {
  id: string;
  label: string;
  monthlyIncome: number;
  payFrequency: 'weekly' | 'monthly';
  employerId: string;
  employerName: string;
}

interface JobCalculation {
  job: Job;
  applicableThreshold: number;
  incomeAboveThreshold: number;
  ugDeduction: number;
  pgDeduction: number;
  totalDeduction: number;
  netIncome: number;
  isAboveThreshold: boolean;
}

interface EmployerGroup {
  employerId: string;
  employerName: string;
  jobs: Job[];
  combinedMonthlyIncome: number;
  combinedThreshold: number;
  combinedUGDeduction: number;
  combinedPGDeduction: number;
  combinedTotalDeduction: number;
}

interface PAYEAnalysis {
  individualCalculations: JobCalculation[];
  employerGroups: EmployerGroup[];
  totalPAYEDeductions: {
    ug: number;
    pg: number;
    combined: number;
  };
  combinedIncome: {
    monthly: number;
    annual: number;
  };
  trueAnnualLiability: {
    ug: number;
    pg: number;
    combined: number;
  };
  underpayment: {
    ug: number;
    pg: number;
    combined: number;
    monthly: number;
    isSignificant: boolean;
  };
  warnings: string[];
  recommendations: string[];
}

// Constants
const LOAN_PLANS: LoanPlan[] = [
  {
    id: 'PLAN_1',
    name: 'Plan 1',
    annualThreshold: 26065,
    monthlyThreshold: 2172,
    weeklyThreshold: 501,
    repaymentRate: 0.09,
    description: 'Pre-2012 students (England/Wales) or Northern Ireland students'
  },
  {
    id: 'PLAN_2',
    name: 'Plan 2',
    annualThreshold: 28470,
    monthlyThreshold: 2373,
    weeklyThreshold: 547,
    repaymentRate: 0.09,
    description: '2012-2023 students (England/Wales)'
  },
  {
    id: 'PLAN_4',
    name: 'Plan 4',
    annualThreshold: 32745,
    monthlyThreshold: 2729,
    weeklyThreshold: 629,
    repaymentRate: 0.09,
    description: 'Scottish students (all years)'
  },
  {
    id: 'PLAN_5',
    name: 'Plan 5',
    annualThreshold: 25000,
    monthlyThreshold: 2083,
    weeklyThreshold: 480,
    repaymentRate: 0.09,
    description: 'England students from August 2023'
  }
];

const POSTGRADUATE = {
  annualThreshold: 21000,
  monthlyThreshold: 1750,
  weeklyThreshold: 403,
  repaymentRate: 0.06
};

const PAY_FREQUENCIES = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly', label: 'Weekly' }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function calculateJobDeduction(
  income: number,
  threshold: number,
  rate: number
): number {
  return Math.max(0, (income - threshold) * rate);
}

function calculatePAYEDeductions(
  jobs: Job[],
  ugPlan: LoanPlan,
  hasPostgraduate: boolean
): PAYEAnalysis {
  // Group jobs by employer
  const employerGroups = new Map<string, Job[]>();

  jobs.forEach(job => {
    if (!employerGroups.has(job.employerId)) {
      employerGroups.set(job.employerId, []);
    }
    employerGroups.get(job.employerId)!.push(job);
  });

  const individualCalculations: JobCalculation[] = [];
  const employerGroupsArray: EmployerGroup[] = [];
  let totalPAYEUG = 0;
  let totalPAYEPG = 0;

  // Calculate for each employer group
  employerGroups.forEach((employerJobs, employerId) => {
    const employerName = employerJobs[0].employerName;
    const combinedMonthlyIncome = employerJobs.reduce((sum, job) => {
      // Normalize to monthly
      const monthlyIncome = job.payFrequency === 'weekly' ? job.monthlyIncome * 52 / 12 : job.monthlyIncome;
      return sum + monthlyIncome;
    }, 0);

    // For same employer, combine income and apply thresholds to combined amount
    if (employerJobs.length > 1) {
      // Same employer - aggregate income
      const combinedUGDeduction = calculateJobDeduction(
        combinedMonthlyIncome,
        ugPlan.monthlyThreshold,
        ugPlan.repaymentRate
      );

      const combinedPGDeduction = hasPostgraduate
        ? calculateJobDeduction(combinedMonthlyIncome, POSTGRADUATE.monthlyThreshold, POSTGRADUATE.repaymentRate)
        : 0;

      // Allocate deductions proportionally across jobs
      employerJobs.forEach(job => {
        const monthlyIncome = job.payFrequency === 'weekly' ? job.monthlyIncome * 52 / 12 : job.monthlyIncome;
        const proportion = monthlyIncome / combinedMonthlyIncome;

        const jobUGDeduction = combinedUGDeduction * proportion;
        const jobPGDeduction = combinedPGDeduction * proportion;

        const calculation: JobCalculation = {
          job,
          applicableThreshold: ugPlan.monthlyThreshold,
          incomeAboveThreshold: Math.max(0, combinedMonthlyIncome - ugPlan.monthlyThreshold) * proportion,
          ugDeduction: jobUGDeduction,
          pgDeduction: jobPGDeduction,
          totalDeduction: jobUGDeduction + jobPGDeduction,
          netIncome: monthlyIncome - (jobUGDeduction + jobPGDeduction),
          isAboveThreshold: combinedMonthlyIncome > ugPlan.monthlyThreshold
        };

        individualCalculations.push(calculation);
      });

      totalPAYEUG += combinedUGDeduction;
      totalPAYEPG += combinedPGDeduction;

      employerGroupsArray.push({
        employerId,
        employerName,
        jobs: employerJobs,
        combinedMonthlyIncome,
        combinedThreshold: ugPlan.monthlyThreshold,
        combinedUGDeduction,
        combinedPGDeduction,
        combinedTotalDeduction: combinedUGDeduction + combinedPGDeduction
      });

    } else {
      // Different employers - each job assessed separately
      const job = employerJobs[0];
      const monthlyIncome = job.payFrequency === 'weekly' ? job.monthlyIncome * 52 / 12 : job.monthlyIncome;

      const ugDeduction = calculateJobDeduction(
        monthlyIncome,
        ugPlan.monthlyThreshold,
        ugPlan.repaymentRate
      );

      const pgDeduction = hasPostgraduate
        ? calculateJobDeduction(monthlyIncome, POSTGRADUATE.monthlyThreshold, POSTGRADUATE.repaymentRate)
        : 0;

      const calculation: JobCalculation = {
        job,
        applicableThreshold: ugPlan.monthlyThreshold,
        incomeAboveThreshold: Math.max(0, monthlyIncome - ugPlan.monthlyThreshold),
        ugDeduction,
        pgDeduction,
        totalDeduction: ugDeduction + pgDeduction,
        netIncome: monthlyIncome - (ugDeduction + pgDeduction),
        isAboveThreshold: monthlyIncome > ugPlan.monthlyThreshold
      };

      individualCalculations.push(calculation);
      totalPAYEUG += ugDeduction;
      totalPAYEPG += pgDeduction;

      employerGroupsArray.push({
        employerId,
        employerName,
        jobs: [job],
        combinedMonthlyIncome: monthlyIncome,
        combinedThreshold: ugPlan.monthlyThreshold,
        combinedUGDeduction: ugDeduction,
        combinedPGDeduction: pgDeduction,
        combinedTotalDeduction: ugDeduction + pgDeduction
      });
    }
  });

  // Calculate combined income and true liability
  const totalMonthlyIncome = individualCalculations.reduce((sum, calc) => {
    const monthlyIncome = calc.job.payFrequency === 'weekly' ? calc.job.monthlyIncome * 52 / 12 : calc.job.monthlyIncome;
    return sum + monthlyIncome;
  }, 0);

  const totalAnnualIncome = totalMonthlyIncome * 12;

  // True annual liability based on combined income
  const trueUGLiability = Math.max(0, (totalAnnualIncome - ugPlan.annualThreshold) * ugPlan.repaymentRate);
  const truePGLiability = hasPostgraduate
    ? Math.max(0, (totalAnnualIncome - POSTGRADUATE.annualThreshold) * POSTGRADUATE.repaymentRate)
    : 0;
  const trueCombinedLiability = trueUGLiability + truePGLiability;

  // Calculate underpayment
  const annualPAYEUG = totalPAYEUG * 12;
  const annualPAYEPG = totalPAYEPG * 12;

  const ugUnderpayment = Math.max(0, trueUGLiability - annualPAYEUG);
  const pgUnderpayment = Math.max(0, truePGLiability - annualPAYEPG);
  const combinedUnderpayment = ugUnderpayment + pgUnderpayment;
  const monthlyUnderpayment = combinedUnderpayment / 12;

  // Generate warnings and recommendations
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Check for jobs below threshold individually but above threshold combined
  const allJobsBelowThreshold = individualCalculations.every(calc => !calc.isAboveThreshold);
  const combinedAboveThreshold = totalAnnualIncome > ugPlan.annualThreshold;

  if (allJobsBelowThreshold && combinedAboveThreshold) {
    warnings.push(`All individual jobs are below the ${fmtMoney(ugPlan.monthlyThreshold)}/month threshold, but combined income exceeds the annual threshold`);
    warnings.push('This creates a significant underpayment that PAYE cannot collect');
  }

  if (combinedUnderpayment > 1000) {
    warnings.push(`Significant underpayment of ${fmtMoney(combinedUnderpayment)} per year`);
    recommendations.push('You will likely need to complete Self Assessment to pay the balancing amount');
  }

  if (combinedUnderpayment > 500) {
    recommendations.push(`Budget ${fmtMoney(monthlyUnderpayment)} per month for the student loan underpayment`);
    recommendations.push('Consider making voluntary payments to SLC to avoid a large bill via Self Assessment');
  }

  // Different employers warning
  const differentEmployers = new Set(jobs.map(job => job.employerId)).size;
  if (differentEmployers > 1 && allJobsBelowThreshold) {
    warnings.push('Multiple employers cannot see your total income - each applies thresholds separately');
  }

  return {
    individualCalculations,
    employerGroups: employerGroupsArray,
    totalPAYEDeductions: {
      ug: totalPAYEUG,
      pg: totalPAYEPG,
      combined: totalPAYEUG + totalPAYEPG
    },
    combinedIncome: {
      monthly: totalMonthlyIncome,
      annual: totalAnnualIncome
    },
    trueAnnualLiability: {
      ug: trueUGLiability,
      pg: truePGLiability,
      combined: trueCombinedLiability
    },
    underpayment: {
      ug: ugUnderpayment,
      pg: pgUnderpayment,
      combined: combinedUnderpayment,
      monthly: monthlyUnderpayment,
      isSignificant: combinedUnderpayment > 500
    },
    warnings,
    recommendations
  };
}

const MultipleJobsPAYECalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('PLAN_2');
  const [hasPostgraduate, setHasPostgraduate] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 'job1',
      label: 'Job 1',
      monthlyIncome: 2000,
      payFrequency: 'monthly',
      employerId: 'emp1',
      employerName: 'Company A'
    },
    {
      id: 'job2',
      label: 'Job 2',
      monthlyIncome: 1800,
      payFrequency: 'monthly',
      employerId: 'emp2',
      employerName: 'Company B'
    }
  ]);

  const ugPlan = LOAN_PLANS.find(p => p.id === selectedPlan)!;

  const analysis: PAYEAnalysis = useMemo(() => {
    return calculatePAYEDeductions(jobs, ugPlan, hasPostgraduate);
  }, [jobs, ugPlan, hasPostgraduate]);

  const updateJob = (jobId: string, field: keyof Job, value: Job[keyof Job]): void => {
    setJobs(prev => prev.map(job =>
      job.id === jobId ? { ...job, [field]: value } : job
    ));
  };

  const addJob = (): void => {
    const newId = `job${Date.now()}`;
    setJobs(prev => [...prev, {
      id: newId,
      label: `Job ${prev.length + 1}`,
      monthlyIncome: 1500,
      payFrequency: 'monthly',
      employerId: `emp${prev.length + 1}`,
      employerName: `Company ${String.fromCharCode(65 + prev.length)}`
    }]);
  };

  const removeJob = (jobId: string): void => {
    setJobs(prev => prev.filter(job => job.id !== jobId));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
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
                <li><span className="font-medium text-gray-800" aria-current="page">Multiple Jobs Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Multiple Jobs PAYE Split Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Understand exactly how student loan deductions work across multiple jobs.
              See why multiple jobs below threshold can escape PAYE but create Self Assessment liability.
            </p>
          </div>
        </section>

        {/* Critical PAYE Gap Warning */}
        {analysis.underpayment.isSignificant && (
          <section className="max-w-6xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base sm:text-lg font-medium text-red-800">Critical PAYE Gap Detected!</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p className="mb-2">
                      <strong>PAYE deductions:</strong> {fmtMoney(analysis.totalPAYEDeductions.combined * 12)} per year
                    </p>
                    <p className="mb-2">
                      <strong>True liability:</strong> {fmtMoney(analysis.trueAnnualLiability.combined)} per year
                    </p>
                    <p className="mb-2">
                      <strong>Underpayment:</strong> {fmtMoney(analysis.underpayment.combined)}
                      ({fmtMoney(analysis.underpayment.monthly)} per month)
                    </p>
                    <p className="text-xs sm:text-sm">
                      This gap will likely need to be paid via Self Assessment by 31 January.
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
              <div className="bg-emerald-50 p-3 sm:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="text-emerald-600 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">PAYE Rules</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Each employer applies thresholds ONLY to what they pay you.
                      They cannot see your other jobs or total income.
                    </p>
                  </div>
                </div>
              </div>

              {/* Loan Configuration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Loan Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlan(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                >
                  {LOAN_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} - {fmtMoney(plan.monthlyThreshold)}/month
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Monthly threshold: {fmtMoney(ugPlan.monthlyThreshold)} |
                  Weekly: {fmtMoney(ugPlan.weeklyThreshold)}
                </p>
              </div>

              {/* Postgraduate Loan */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={hasPostgraduate}
                    onChange={(e) => setHasPostgraduate(e.target.checked)}
                    className="mr-2 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  I also have a postgraduate loan
                </label>
                {hasPostgraduate && (
                  <p className="mt-1 text-xs text-gray-500">
                    PG threshold: {fmtMoney(POSTGRADUATE.monthlyThreshold)}/month (6% rate)
                  </p>
                )}
              </div>

              {/* Jobs Configuration */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Jobs
                  </label>
                  <button
                    onClick={addJob}
                    className="text-sm bg-emerald-600 text-white px-3 py-1 rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Add Job
                  </button>
                </div>

                {jobs.map((job) => (
                  <div key={job.id} className="mb-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <input
                        type="text"
                        value={job.label}
                        onChange={(e) => updateJob(job.id, 'label', e.target.value)}
                        className="font-medium text-gray-800 bg-transparent border-none p-0 focus:ring-0 flex-1 text-sm sm:text-base"
                      />
                      {jobs.length > 1 && (
                        <button
                          onClick={() => removeJob(job.id)}
                          className="text-red-600 hover:text-red-800 ml-2 flex-shrink-0"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Monthly Income</label>
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-1 text-sm">£</span>
                          <input
                            type="number"
                            value={job.monthlyIncome}
                            onChange={(e) => updateJob(job.id, 'monthlyIncome', Number(e.target.value) || 0)}
                            min={0}
                            max={10000}
                            step={100}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Pay Frequency</label>
                        <select
                          value={job.payFrequency}
                          onChange={(e) => updateJob(job.id, 'payFrequency', e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                        >
                          {PAY_FREQUENCIES.map((freq) => (
                            <option key={freq.value} value={freq.value}>
                              {freq.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Employer</label>
                      <input
                        type="text"
                        value={job.employerName}
                        onChange={(e) => {
                          updateJob(job.id, 'employerName', e.target.value);
                          updateJob(job.id, 'employerId', e.target.value.toLowerCase().replace(/\s+/g, ''));
                        }}
                        className="block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Jobs with the same employer name will have combined income for PAYE
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Plan Summary */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Plan Details</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Plan:</strong> {ugPlan.name}</p>
                  <p><strong>Monthly threshold:</strong> {fmtMoney(ugPlan.monthlyThreshold)}</p>
                  <p><strong>Weekly threshold:</strong> {fmtMoney(ugPlan.weeklyThreshold)}</p>
                  <p><strong>Rate:</strong> {fmtPercent(ugPlan.repaymentRate)} above threshold</p>
                  {hasPostgraduate && (
                    <p><strong>PG rate:</strong> {fmtPercent(POSTGRADUATE.repaymentRate)} above {fmtMoney(POSTGRADUATE.monthlyThreshold)}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">

              {/* Individual Job Breakdown */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">PAYE Deductions by Job</h2>

                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-1 sm:px-2">Job</th>
                          <th className="text-right py-2 px-1 sm:px-2">Monthly Income</th>
                          <th className="text-right py-2 px-1 sm:px-2 hidden sm:table-cell">Threshold</th>
                          <th className="text-right py-2 px-1 sm:px-2 hidden md:table-cell">Above Threshold</th>
                          <th className="text-right py-2 px-1 sm:px-2">UG Deduction</th>
                          {hasPostgraduate && <th className="text-right py-2 px-1 sm:px-2 hidden lg:table-cell">PG Deduction</th>}
                          <th className="text-right py-2 px-1 sm:px-2">Net Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analysis.individualCalculations.map((calc) => {
                          const monthlyIncome = calc.job.payFrequency === 'weekly'
                            ? calc.job.monthlyIncome * 52 / 12
                            : calc.job.monthlyIncome;

                          return (
                            <tr key={calc.job.id} className="border-b border-gray-100">
                              <td className="py-2 px-1 sm:px-2">
                                <div>
                                  <div className="font-medium">{calc.job.label}</div>
                                  <div className="text-xs text-gray-500">{calc.job.employerName}</div>
                                  {calc.isAboveThreshold ? (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mt-1">
                                      Above Threshold
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                                      Below Threshold
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(monthlyIncome)}</td>
                              <td className="text-right py-2 px-1 sm:px-2 hidden sm:table-cell">{fmtMoney(calc.applicableThreshold)}</td>
                              <td className="text-right py-2 px-1 sm:px-2 hidden md:table-cell">{fmtMoney(calc.incomeAboveThreshold)}</td>
                              <td className="text-right py-2 px-1 sm:px-2 font-medium">{fmtMoney(calc.ugDeduction)}</td>
                              {hasPostgraduate && (
                                <td className="text-right py-2 px-1 sm:px-2 font-medium hidden lg:table-cell">{fmtMoney(calc.pgDeduction)}</td>
                              )}
                              <td className="text-right py-2 px-1 sm:px-2 font-medium">{fmtMoney(calc.netIncome)}</td>
                            </tr>
                          );
                        })}
                        <tr className="border-t-2 border-gray-300 font-semibold">
                          <td className="py-2 px-1 sm:px-2">Total PAYE Deductions</td>
                          <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(analysis.combinedIncome.monthly)}</td>
                          <td className="text-right py-2 px-1 sm:px-2 hidden sm:table-cell">-</td>
                          <td className="text-right py-2 px-1 sm:px-2 hidden md:table-cell">-</td>
                          <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(analysis.totalPAYEDeductions.ug)}</td>
                          {hasPostgraduate && (
                            <td className="text-right py-2 px-1 sm:px-2 hidden lg:table-cell">{fmtMoney(analysis.totalPAYEDeductions.pg)}</td>
                          )}
                          <td className="text-right py-2 px-1 sm:px-2">{fmtMoney(analysis.combinedIncome.monthly - analysis.totalPAYEDeductions.combined)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* PAYE vs True Liability Comparison */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">PAYE vs True Liability</h3>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">What PAYE Collects</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>UG Monthly Deductions:</span>
                        <span className="font-medium">{fmtMoney(analysis.totalPAYEDeductions.ug)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between">
                          <span>PG Monthly Deductions:</span>
                          <span className="font-medium">{fmtMoney(analysis.totalPAYEDeductions.pg)}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-2">
                        <span>Total Monthly PAYE:</span>
                        <span className="font-medium">{fmtMoney(analysis.totalPAYEDeductions.combined)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual PAYE:</span>
                        <span className="font-medium">{fmtMoney(analysis.totalPAYEDeductions.combined * 12)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">True Liability (Combined Income)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Annual Income:</span>
                        <span>{fmtMoney(analysis.combinedIncome.annual)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>UG Liability:</span>
                        <span className="font-medium">{fmtMoney(analysis.trueAnnualLiability.ug)}</span>
                      </div>
                      {hasPostgraduate && (
                        <div className="flex justify-between">
                          <span>PG Liability:</span>
                          <span className="font-medium">{fmtMoney(analysis.trueAnnualLiability.pg)}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-2">
                        <span>Total True Liability:</span>
                        <span className="font-medium">{fmtMoney(analysis.trueAnnualLiability.combined)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Underpayment Summary */}
                <div className={`mt-6 p-4 rounded-lg ${analysis.underpayment.isSignificant
                    ? 'bg-red-50 border border-red-200'
                    : 'bg-green-50 border border-green-200'
                  }`}>
                  <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Underpayment Analysis</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(analysis.underpayment.combined)}</div>
                      <div className="text-gray-600">Annual Underpayment</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(analysis.underpayment.monthly)}</div>
                      <div className="text-gray-600">Monthly Equivalent</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">
                        {fmtPercent(analysis.underpayment.combined / Math.max(analysis.trueAnnualLiability.combined, 1))}
                      </div>
                      <div className="text-gray-600">Of True Liability</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warnings */}
              {analysis.warnings.length > 0 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-3">Important Warnings</h3>
                  <ul className="space-y-2">
                    {analysis.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm text-orange-700">
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
              {analysis.recommendations.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm text-blue-700">
                        <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* PAYE System Explanation */}
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">How PAYE Works with Multiple Jobs</h3>
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Same Employer</h4>
                    <ul className="space-y-1">
                      <li>• Income from multiple jobs combined</li>
                      <li>• Thresholds applied to total income</li>
                      <li>• Deductions allocated proportionally</li>
                      <li>• Generally captures correct amount</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Different Employers</h4>
                    <ul className="space-y-1">
                      <li>• Each employer operates independently</li>
                      <li>• Thresholds applied separately to each job</li>
                      <li>• No communication between employers</li>
                      <li>• Can create significant underpayments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="max-w-4xl mx-auto prose prose-emerald max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Understanding PAYE with Multiple Jobs</h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">The PAYE Problem</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Each employer only sees their own payments to you</li>
                <li>• Thresholds applied separately to each job</li>
                <li>• Multiple jobs below threshold = £0 deductions</li>
                <li>• But combined income may exceed threshold</li>
                <li>• Creates underpayment that PAYE cannot collect</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Self Assessment Solution</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Self Assessment sees total income from all sources</li>
                <li>• Calculates true liability on combined income</li>
                <li>• Deducts PAYE repayments already made</li>
                <li>• Balancing payment due by 31 January</li>
                <li>• Can be substantial for multiple job holders</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Example Scenarios</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-800">Two £2,000/month jobs (Plan 2):</p>
                <p>• Each job: Below £2,373 threshold → £0 PAYE deductions</p>
                <p>• Combined: £4,000/month → True liability: £146/month</p>
                <p>• Result: £1,752 annual underpayment via Self Assessment</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">One job above, one below threshold:</p>
                <p>• Job 1: £2,500/month → £11.43 PAYE deduction</p>
                <p>• Job 2: £1,800/month → £0 PAYE deduction</p>
                <p>• Combined creates additional liability not captured by PAYE</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto bg-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Multiple Jobs Creating Student Loan Issues?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90 text-sm sm:text-base">
            PAYE can&apos;t always capture the correct student loan repayments across multiple jobs.
            Understanding this gap is crucial for avoiding unexpected bills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.gov.uk/contact-student-finance-england"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Student Finance
            </a>
            <a
              href="https://www.gov.uk/government/publications/pay-as-you-earn-paye-service-availability-and-issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg hover:bg-emerald-800 transition-colors text-sm sm:text-base"
            >
              Learn About PAYE Rules
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MultipleJobsPAYECalculator;