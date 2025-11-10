"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface LoanPlan {
  id: string;
  name: string;
  threshold: number;
  repaymentRate: number;
  interestMethod: string;
  writeOffYears: number;
  description: string;
}

interface Region {
  id: string;
  name: string;
  fullName: string;
}

interface CourseType {
  id: string;
  name: string;
  description: string;
}

interface CohortDetails {
  plan: LoanPlan;
  startYear: number;
  expectedDuration: number;
  firstRepaymentYear: number;
  writeOffYear: number;
  keyChanges: string[];
  specialRules: string[];
}

interface PlanFinderResult {
  isValid: boolean;
  cohort?: CohortDetails;
  errors: string[];
  warnings: string[];
  recommendations: string[];
}

// Constants
const REGIONS: Region[] = [
  { id: 'england', name: 'England', fullName: 'England' },
  { id: 'scotland', name: 'Scotland', fullName: 'Scotland' },
  { id: 'wales', name: 'Wales', fullName: 'Wales' },
  { id: 'northern-ireland', name: 'Northern Ireland', fullName: 'Northern Ireland' }
];

const COURSE_TYPES: CourseType[] = [
  { id: 'undergraduate', name: 'Undergraduate', description: 'Bachelor\'s degree (BA, BSc, etc.)' },
  { id: 'pgce', name: 'PGCE', description: 'Postgraduate Certificate in Education' },
  { id: 'postgrad-masters', name: 'Postgraduate Master\'s', description: 'Master\'s degree (MA, MSc, MBA, etc.)' },
  { id: 'postgrad-doctoral', name: 'Postgraduate Doctoral', description: 'PhD, DPhil, or other doctoral degree' },
  { id: 'advanced-learner', name: 'Advanced Learner Loan', description: 'Level 3-6 courses at college or training provider' },
  { id: 'short-course', name: 'Short Course Loan', description: 'Intensive postgraduate courses under 2 years' }
];

const STUDY_STATUS = [
  { id: 'studying', name: 'Still studying', description: 'Currently enrolled and attending' },
  { id: 'graduated', name: 'Graduated', description: 'Successfully completed course' },
  { id: 'left-early', name: 'Left early', description: 'Withdrew or left before completion' }
];

const LOAN_PLANS: Record<string, LoanPlan> = {
  PLAN_1: {
    id: 'PLAN_1',
    name: 'Plan 1',
    threshold: 22015,
    repaymentRate: 0.09,
    interestMethod: 'RPI or Bank Rate + 1% (whichever is lower)',
    writeOffYears: 25,
    description: 'For students who started before September 2012 in England/Wales, or any time in Northern Ireland'
  },
  PLAN_2: {
    id: 'PLAN_2',
    name: 'Plan 2',
    threshold: 27295,
    repaymentRate: 0.09,
    interestMethod: 'RPI + up to 3% (income-dependent)',
    writeOffYears: 30,
    description: 'For students who started 2012-2023 in England/Wales'
  },
  PLAN_4: {
    id: 'PLAN_4',
    name: 'Plan 4',
    threshold: 31395,
    repaymentRate: 0.09,
    interestMethod: 'RPI or 1% above Base Rate (whichever is lower)',
    writeOffYears: 30,
    description: 'For all Scottish students regardless of start date'
  },
  PLAN_5: {
    id: 'PLAN_5',
    name: 'Plan 5',
    threshold: 25000,
    repaymentRate: 0.09,
    interestMethod: 'RPI (no additional percentage)',
    writeOffYears: 40,
    description: 'For students who started from August 2023 onwards in England'
  },
  POSTGRADUATE: {
    id: 'POSTGRADUATE',
    name: 'Postgraduate',
    threshold: 21000,
    repaymentRate: 0.06,
    interestMethod: 'RPI + up to 3% (income-dependent)',
    writeOffYears: 30,
    description: 'For postgraduate loans from 2016 onwards (except Scotland)'
  }
};

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

function determineLoanPlan(
  region: string,
  startYear: number,
  courseType: string
): { plan: LoanPlan; warnings: string[]; specialRules: string[] } {
  const warnings: string[] = [];
  const specialRules: string[] = [];
  
  // Scotland - Always Plan 4
  if (region === 'scotland') {
    specialRules.push('Scotland uses Plan 4 for all students regardless of start date or course type');
    return { plan: LOAN_PLANS.PLAN_4, warnings, specialRules };
  }
  
  // Northern Ireland - Always Plan 1
  if (region === 'northern-ireland') {
    specialRules.push('Northern Ireland uses Plan 1 for all students regardless of start date or course type');
    return { plan: LOAN_PLANS.PLAN_1, warnings, specialRules };
  }
  
  // England and Wales
  if (region === 'england' || region === 'wales') {
    // Postgraduate loans (from 2016 onwards)
    if (courseType === 'postgrad-masters' || courseType === 'postgrad-doctoral') {
      if (startYear >= 2016) {
        if (region === 'wales' && courseType === 'postgrad-doctoral') {
          warnings.push('Wales introduced postgraduate doctoral loans later than England - check eligibility');
        }
        return { plan: LOAN_PLANS.POSTGRADUATE, warnings, specialRules };
      } else {
        warnings.push('Postgraduate loans were not available before 2016 - you may have alternative funding');
        return { plan: LOAN_PLANS.PLAN_1, warnings, specialRules }; // Fallback
      }
    }
    
    // England-specific rules
    if (region === 'england') {
      // Plan 5 for England students starting August 2023 onwards
      if (startYear >= 2023 && ['undergraduate', 'pgce', 'advanced-learner'].includes(courseType)) {
        specialRules.push('Plan 5 introduced for England students starting from August 2023');
        specialRules.push('40-year write-off period (increased from 30 years)');
        return { plan: LOAN_PLANS.PLAN_5, warnings, specialRules };
      }
      
      // Short course loans (England only, Plan 2)
      if (courseType === 'short-course') {
        if (startYear >= 2019) {
          specialRules.push('Short course loans only available in England from 2019');
          return { plan: LOAN_PLANS.PLAN_2, warnings, specialRules };
        } else {
          warnings.push('Short course loans were not available before 2019');
          return { plan: LOAN_PLANS.PLAN_1, warnings, specialRules }; // Fallback
        }
      }
    }
    
    // Wales doesn't have short course loans
    if (region === 'wales' && courseType === 'short-course') {
      warnings.push('Short course loans are not available in Wales');
      return { plan: LOAN_PLANS.PLAN_2, warnings, specialRules }; // Fallback to Plan 2
    }
    
    // Plan 2 for 2012-2023 starters (England and Wales)
    if (startYear >= 2012 && startYear < 2023 && ['undergraduate', 'pgce', 'advanced-learner'].includes(courseType)) {
      return { plan: LOAN_PLANS.PLAN_2, warnings, specialRules };
    }
    
    // Plan 1 for pre-2012 starters
    if (startYear < 2012) {
      specialRules.push('Pre-2012 students remain on Plan 1 with more favorable terms');
      return { plan: LOAN_PLANS.PLAN_1, warnings, specialRules };
    }
  }
  
  // Default fallback
  warnings.push('Could not determine plan precisely - using Plan 2 as default');
  return { plan: LOAN_PLANS.PLAN_2, warnings, specialRules };
}

function calculateCohortDetails(
  plan: LoanPlan,
  startYear: number,
  courseType: string,
  studyStatus: string
): CohortDetails {
  // Estimate course duration
  let expectedDuration = 3; // Default to 3 years
  switch (courseType) {
    case 'undergraduate':
      expectedDuration = 3;
      break;
    case 'postgrad-masters':
      expectedDuration = 1;
      break;
    case 'postgrad-doctoral':
      expectedDuration = 4;
      break;
    case 'pgce':
      expectedDuration = 1;
      break;
    case 'advanced-learner':
      expectedDuration = 2;
      break;
    case 'short-course':
      expectedDuration = 1;
      break;
  }
  
  // First repayment typically starts in April after graduation
  const estimatedGraduationYear = startYear + expectedDuration;
  const firstRepaymentYear = estimatedGraduationYear + 1; // April following graduation
  
  // Write-off calculation
  const writeOffStartYear = studyStatus === 'left-early' ? startYear + 1 : firstRepaymentYear;
  const writeOffYear = writeOffStartYear + plan.writeOffYears;
  
  // Key changes by plan
  const keyChanges: string[] = [];
  if (plan.id === 'PLAN_5') {
    keyChanges.push('Extended write-off period to 40 years (from 30)');
    keyChanges.push('Lower interest rates (RPI only, no additional percentage)');
    keyChanges.push('Reduced repayment threshold to £25,000');
  }
  if (plan.id === 'PLAN_2' && startYear >= 2016) {
    keyChanges.push('Higher repayment threshold than Plan 1');
    keyChanges.push('Income-dependent interest rates');
  }
  
  const specialRules: string[] = [];
  if (studyStatus === 'left-early') {
    specialRules.push('Write-off period starts from April after leaving, not graduation');
  }
  if (plan.id === 'POSTGRADUATE') {
    specialRules.push('6% repayment rate (lower than undergraduate 9%)');
    specialRules.push('Combines with undergraduate repayments if you have both');
  }
  
  return {
    plan,
    startYear,
    expectedDuration,
    firstRepaymentYear,
    writeOffYear,
    keyChanges,
    specialRules
  };
}

const PlanCohortFinder: React.FC = () => {
  const [region, setRegion] = useState<string>('england');
  const [startYear, setStartYear] = useState<number>(2020);
  const [courseType, setCourseType] = useState<string>('undergraduate');
  const [studyStatus, setStudyStatus] = useState<string>('graduated');

  const result: PlanFinderResult = useMemo(() => {
    const errors: string[] = [];
    
    // Basic validation
    if (startYear < 1990 || startYear > 2030) {
      errors.push('Please enter a valid course start year between 1990 and 2030');
    }
    
    if (errors.length > 0) {
      return { isValid: false, errors, warnings: [], recommendations: [] };
    }
    
    // Determine loan plan
    const { plan, warnings, specialRules } = determineLoanPlan(region, startYear, courseType);
    
    // Calculate cohort details
    const cohort = calculateCohortDetails(plan, startYear, courseType, studyStatus);
    cohort.specialRules.push(...specialRules);
    
    // Generate recommendations
    const recommendations: string[] = [];
    
    if (plan.id === 'PLAN_1') {
      recommendations.push('Plan 1 has the most favorable terms - lowest threshold and shortest write-off period');
    }
    
    if (plan.id === 'PLAN_5') {
      recommendations.push('Plan 5 has lower interest rates but longer write-off period - may benefit high earners');
    }
    
    if (cohort.writeOffYear - 2024 < 10) {
      recommendations.push('Your loan may be written off soon - consider whether overpayments are worthwhile');
    }
    
    if (plan.id === 'POSTGRADUATE' && courseType === 'postgrad-masters') {
      recommendations.push('Master\'s loans have lower repayment rates but run alongside undergraduate repayments');
    }
    
    return {
      isValid: true,
      cohort,
      errors: [],
      warnings,
      recommendations
    };
  }, [region, startYear, courseType, studyStatus]);

  // Generate year options (1990 to current year + 2)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1988 }, (_, i) => 1990 + i);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Plan Cohort Finder</span></li>
            </ol>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Loan Plan & Cohort Finder
          </h1>
          <p className="text-xl text-gray-600">
            Find your exact student loan plan and repayment terms based on where and when you studied. 
            Essential for understanding your repayment obligations and planning your finances.
          </p>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-start">
                <div className="text-teal-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Why This Matters</h3>
                  <p className="text-sm text-gray-600">
                    Your student loan plan determines your repayment threshold, interest rates, and write-off period. 
                    Getting this right is essential for financial planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Region Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Where did you get your student finance?
              </label>
              <select
                value={region}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                {REGIONS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                This determines which student finance agency funded your course
              </p>
            </div>

            {/* Course Start Year */}
            <div>
              <label htmlFor="startYear" className="block text-sm font-medium text-gray-700 mb-1">
                Course Start Year
              </label>
              <select
                id="startYear"
                value={startYear}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStartYear(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                {yearOptions.reverse().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                The year you started your course (not when you applied)
              </p>
            </div>

            {/* Course Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Type
              </label>
              <select
                value={courseType}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCourseType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                {COURSE_TYPES.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                {COURSE_TYPES.find(c => c.id === courseType)?.description}
              </p>
            </div>

            {/* Study Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Status
              </label>
              <select
                value={studyStatus}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStudyStatus(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                {STUDY_STATUS.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500">
                {STUDY_STATUS.find(s => s.id === studyStatus)?.description}
              </p>
            </div>

            {/* Quick Reference */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Plan Overview</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Plan 1:</strong> Pre-2012, lowest threshold (£22k)</p>
                <p><strong>Plan 2:</strong> 2012-2023, middle threshold (£27k)</p>
                <p><strong>Plan 4:</strong> Scotland only, highest threshold (£31k)</p>
                <p><strong>Plan 5:</strong> 2023+, new terms, longest write-off</p>
                <p><strong>Postgrad:</strong> Master&apos;s/PhD, 6% rate, £21k threshold</p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Error Display */}
            {!result.isValid && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Validation Errors</h3>
                    <ul className="mt-1 text-sm text-red-700 list-disc list-inside">
                      {result.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Main Results */}
            {result.isValid && result.cohort && (
              <>
                {/* Plan Identification */}
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Student Loan Plan</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="bg-white p-4 rounded-lg border border-teal-300">
                        <h3 className="text-3xl font-bold text-teal-700 mb-2">{result.cohort.plan.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{result.cohort.plan.description}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Repayment Threshold:</span>
                            <span className="font-medium">{fmtMoney(result.cohort.plan.threshold)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Repayment Rate:</span>
                            <span className="font-medium">{fmtPercent(result.cohort.plan.repaymentRate)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Write-off Period:</span>
                            <span className="font-medium">{result.cohort.plan.writeOffYears} years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Key Dates for You</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Course Started:</span>
                          <span className="font-medium">{startYear}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">First Repayment:</span>
                          <span className="font-medium">April {result.cohort.firstRepaymentYear}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Write-off Year:</span>
                          <span className="font-medium">{result.cohort.writeOffYear}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Years Until Write-off:</span>
                          <span className="font-medium">{Math.max(0, result.cohort.writeOffYear - new Date().getFullYear())} years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warnings */}
                {result.warnings.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex">
                      <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-sm font-medium text-amber-800">Important Notices</h3>
                        <ul className="mt-1 text-sm text-amber-700 list-disc list-inside">
                          {result.warnings.map((warning, index) => (
                            <li key={index}>{warning}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Interest Rate Details */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Interest Rate Calculation</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium mb-2">Your Plan: {result.cohort.plan.interestMethod}</p>
                    <div className="text-xs text-blue-700 space-y-1">
                      {result.cohort.plan.id === 'PLAN_1' && (
                        <p>• Most favorable interest rates - the lower of RPI or Bank Rate + 1%</p>
                      )}
                      {result.cohort.plan.id === 'PLAN_2' && (
                        <>
                          <p>• While studying and earning under £27,295: RPI</p>
                          <p>• Earning £27,295-£49,130: RPI + up to 3% (graduated)</p>
                          <p>• Earning over £49,130: RPI + 3%</p>
                        </>
                      )}
                      {result.cohort.plan.id === 'PLAN_4' && (
                        <p>• Scottish favorable rates - RPI or 1% above Bank Rate (whichever is lower)</p>
                      )}
                      {result.cohort.plan.id === 'PLAN_5' && (
                        <p>• Simplified to RPI only - no additional percentage added</p>
                      )}
                      {result.cohort.plan.id === 'POSTGRADUATE' && (
                        <p>• Same as Plan 2 - RPI + up to 3% based on combined undergraduate and postgraduate income</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Special Rules */}
                {result.cohort.specialRules.length > 0 && (
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Special Rules for Your Situation</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {result.cohort.specialRules.map((rule, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Changes */}
                {result.cohort.keyChanges.length > 0 && (
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Changes from Previous Plans</h3>
                    <ul className="space-y-2 text-sm text-purple-700">
                      {result.cohort.keyChanges.map((change, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendations */}
                {result.recommendations.length > 0 && (
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendations</h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      {result.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Next Steps */}
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Steps</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Calculate Your Repayments</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Now that you know your plan, use our specialized calculators to estimate your repayments.
                      </p>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                        {result.cohort.plan.name} Calculator →
                      </button>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Verify Your Details</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Check your student loan statement or contact SLC to confirm your plan and outstanding balance.
                      </p>
                      <a
                        href="https://www.gov.uk/contact-student-finance-england"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors inline-block"
                      >
                        Contact Student Finance →
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Plan Comparison Table */}
      {result.isValid && (
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Plans Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Plan</th>
                  <th className="text-right py-3 px-4">Threshold</th>
                  <th className="text-right py-3 px-4">Rate</th>
                  <th className="text-center py-3 px-4">Write-off</th>
                  <th className="text-left py-3 px-4">Interest Method</th>
                  <th className="text-left py-3 px-4">Applies To</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(LOAN_PLANS).map((plan) => {
                  const isUserPlan = result.cohort?.plan.id === plan.id;
                  return (
                    <tr 
                      key={plan.id} 
                      className={`border-b border-gray-100 ${isUserPlan ? 'bg-teal-50 border-teal-200' : ''}`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className={`font-medium ${isUserPlan ? 'text-teal-800' : 'text-gray-800'}`}>
                            {plan.name}
                          </span>
                          {isUserPlan && (
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              Your Plan
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="text-right py-3 px-4">{fmtMoney(plan.threshold)}</td>
                      <td className="text-right py-3 px-4">{fmtPercent(plan.repaymentRate)}</td>
                      <td className="text-center py-3 px-4">{plan.writeOffYears} years</td>
                      <td className="py-3 px-4 text-xs">{plan.interestMethod}</td>
                      <td className="py-3 px-4 text-xs">{plan.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Explainer Section */}
      <section className="max-w-4xl mx-auto prose prose-teal">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Understanding Student Loan Plans</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-teal-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Plans Differ</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Government policy changes over time</li>
              <li>• Different terms for different regions</li>
              <li>• Course type affects eligibility</li>
              <li>• Start date determines which rules apply</li>
              <li>• Plans designed to balance affordability and sustainability</li>
            </ul>
          </div>
          
          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Regional Differences</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <strong>England:</strong> Most plan types, frequent changes</li>
              <li>• <strong>Scotland:</strong> Plan 4 only, stable system</li>
              <li>• <strong>Wales:</strong> Follows England for undergrad</li>
              <li>• <strong>Northern Ireland:</strong> Plan 1 only, unchanged</li>
              <li>• Cross-border study uses home region rules</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notes</h3>
          <p className="text-gray-700 mb-4">
            Your student loan plan is determined by where you normally live (your home region) when you apply for student finance, 
            not where you study. If you moved between regions, the rules can be complex.
          </p>
          <p className="text-gray-700 mb-4">
            This tool provides guidance based on typical scenarios. For complex situations (such as transferring between courses, 
            studying abroad, or having multiple loans), contact your student finance agency for definitive information.
          </p>
          <p className="text-gray-700">
            Always verify your plan details with your annual student loan statement or by logging into your student finance account online.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto bg-teal-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Ready to Calculate Your Repayments?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Now that you know your student loan plan, use our specialized calculators to understand your repayment obligations 
          and plan your financial future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
            {result.cohort ? `${result.cohort.plan.name} Calculator` : 'Plan Calculator'}
          </button>
          <a
            href="https://www.gov.uk/student-finance"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-800 transition-colors"
          >
            Official Student Finance Info
          </a>
        </div>
      </section>
    </div>
  );
};

export default PlanCohortFinder;