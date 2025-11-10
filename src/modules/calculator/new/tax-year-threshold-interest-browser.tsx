"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

// TypeScript Interfaces
interface ThresholdData {
  taxYear: string;
  annual: number;
  monthly: number;
  weekly: number;
  repaymentRate: number;
  interestRate: string;
  interestRateNumeric: number;
  rpiRate: number;
  policyChanges: string[];
  isProjected: boolean;
  isFrozen: boolean;
}

interface PlanData {
  planId: string;
  planName: string;
  description: string;
  thresholds: ThresholdData[];
}

interface ComparisonView {
  type: 'single-year' | 'year-range' | 'plan-comparison' | 'trends';
  selectedYear?: string;
  selectedYearRange?: [string, string];
  selectedPlans: string[];
  showInflationAdjusted: boolean;
}

interface InflationData {
  year: string;
  cpi: number; // Consumer Price Index for inflation adjustment
}

// Historical Data (sourced from government announcements and official documents)
const INFLATION_DATA: InflationData[] = [
  { year: '2025/26', cpi: 105.0 }, // Projected
  { year: '2024/25', cpi: 103.2 },
  { year: '2023/24', cpi: 100.0 }, // Base year
  { year: '2022/23', cpi: 95.8 },
  { year: '2021/22', cpi: 94.1 },
  { year: '2020/21', cpi: 93.5 },
  { year: '2019/20', cpi: 92.8 },
  { year: '2018/19', cpi: 91.2 },
  { year: '2017/18', cpi: 89.7 },
  { year: '2016/17', cpi: 88.9 },
  { year: '2015/16', cpi: 88.1 },
  { year: '2014/15', cpi: 87.3 },
  { year: '2013/14', cpi: 86.5 },
  { year: '2012/13', cpi: 85.7 }
];

const HISTORICAL_DATA: PlanData[] = [
  {
    planId: 'PLAN_1',
    planName: 'Plan 1',
    description: 'Pre-2012 students (England/Wales) and all Northern Ireland students',
    thresholds: [
      {
        taxYear: '2025/26',
        annual: 26065,
        monthly: 2172,
        weekly: 501,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 4.6,
        rpiRate: 4.6,
        policyChanges: ['Threshold increased by 4.3%'],
        isProjected: true,
        isFrozen: false
      },
      {
        taxYear: '2024/25',
        annual: 24990,
        monthly: 2082,
        weekly: 480,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 4.6,
        rpiRate: 4.6,
        policyChanges: ['Threshold increased after freeze period'],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2023/24',
        annual: 22015,
        monthly: 1834,
        weekly: 423,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 6.9,
        rpiRate: 6.9,
        policyChanges: ['Threshold frozen'],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2022/23',
        annual: 22015,
        monthly: 1834,
        weekly: 423,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 4.4,
        rpiRate: 4.4,
        policyChanges: ['Threshold frozen'],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2021/22',
        annual: 20195,
        monthly: 1682,
        weekly: 388,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 1.5,
        rpiRate: 1.5,
        policyChanges: [],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2020/21',
        annual: 19895,
        monthly: 1657,
        weekly: 382,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 1.1,
        rpiRate: 1.1,
        policyChanges: [],
        isProjected: false,
        isFrozen: false
      }
    ]
  },
  {
    planId: 'PLAN_2',
    planName: 'Plan 2',
    description: '2012-2023 students (England/Wales)',
    thresholds: [
      {
        taxYear: '2025/26',
        annual: 28470,
        monthly: 2372,
        weekly: 547,
        repaymentRate: 0.09,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 7.3,
        rpiRate: 4.6,
        policyChanges: ['Threshold increased by 4.3%'],
        isProjected: true,
        isFrozen: false
      },
      {
        taxYear: '2024/25',
        annual: 27295,
        monthly: 2274,
        weekly: 524,
        repaymentRate: 0.09,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 7.3,
        rpiRate: 4.6,
        policyChanges: ['Threshold increased after freeze'],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2023/24',
        annual: 27295,
        monthly: 2274,
        weekly: 524,
        repaymentRate: 0.09,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 7.3,
        rpiRate: 6.9,
        policyChanges: ['Threshold frozen'],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2022/23',
        annual: 27295,
        monthly: 2274,
        weekly: 524,
        repaymentRate: 0.09,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 6.9,
        rpiRate: 4.4,
        policyChanges: ['Threshold frozen'],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2021/22',
        annual: 27295,
        monthly: 2274,
        weekly: 524,
        repaymentRate: 0.09,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 4.5,
        rpiRate: 1.5,
        policyChanges: [],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2020/21',
        annual: 26575,
        monthly: 2214,
        weekly: 510,
        repaymentRate: 0.09,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 4.1,
        rpiRate: 1.1,
        policyChanges: [],
        isProjected: false,
        isFrozen: false
      }
    ]
  },
  {
    planId: 'PLAN_4',
    planName: 'Plan 4',
    description: 'Scottish students (all years)',
    thresholds: [
      {
        taxYear: '2025/26',
        annual: 32745,
        monthly: 2728,
        weekly: 629,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 4.3,
        rpiRate: 4.6,
        policyChanges: ['Threshold increased by 4.3%'],
        isProjected: true,
        isFrozen: false
      },
      {
        taxYear: '2024/25',
        annual: 31395,
        monthly: 2616,
        weekly: 603,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 4.3,
        rpiRate: 4.6,
        policyChanges: ['Threshold increased'],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2023/24',
        annual: 27660,
        monthly: 2305,
        weekly: 531,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 6.9,
        rpiRate: 6.9,
        policyChanges: [],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2022/23',
        annual: 25375,
        monthly: 2114,
        weekly: 487,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 4.4,
        rpiRate: 4.4,
        policyChanges: [],
        isProjected: false,
        isFrozen: false
      },
      {
        taxYear: '2021/22',
        annual: 20195,
        monthly: 1682,
        weekly: 388,
        repaymentRate: 0.09,
        interestRate: 'RPI or Base+1% (lower)',
        interestRateNumeric: 1.5,
        rpiRate: 1.5,
        policyChanges: ['Major threshold increase'],
        isProjected: false,
        isFrozen: false
      }
    ]
  },
  {
    planId: 'PLAN_5',
    planName: 'Plan 5',
    description: 'England students from August 2023',
    thresholds: [
      {
        taxYear: '2025/26',
        annual: 25000,
        monthly: 2083,
        weekly: 480,
        repaymentRate: 0.09,
        interestRate: 'RPI only',
        interestRateNumeric: 4.6,
        rpiRate: 4.6,
        policyChanges: ['Threshold remains fixed'],
        isProjected: true,
        isFrozen: true
      },
      {
        taxYear: '2024/25',
        annual: 25000,
        monthly: 2083,
        weekly: 480,
        repaymentRate: 0.09,
        interestRate: 'RPI only',
        interestRateNumeric: 4.3,
        rpiRate: 4.6,
        policyChanges: ['Plan introduced'],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2023/24',
        annual: 25000,
        monthly: 2083,
        weekly: 480,
        repaymentRate: 0.09,
        interestRate: 'RPI only',
        interestRateNumeric: 6.9,
        rpiRate: 6.9,
        policyChanges: ['Plan 5 introduced for new students'],
        isProjected: false,
        isFrozen: true
      }
    ]
  },
  {
    planId: 'POSTGRADUATE',
    planName: 'Postgraduate',
    description: 'Postgraduate loans from 2016',
    thresholds: [
      {
        taxYear: '2025/26',
        annual: 21000,
        monthly: 1750,
        weekly: 403,
        repaymentRate: 0.06,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 7.3,
        rpiRate: 4.6,
        policyChanges: ['Threshold remains fixed'],
        isProjected: true,
        isFrozen: true
      },
      {
        taxYear: '2024/25',
        annual: 21000,
        monthly: 1750,
        weekly: 403,
        repaymentRate: 0.06,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 7.3,
        rpiRate: 4.6,
        policyChanges: [],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2023/24',
        annual: 21000,
        monthly: 1750,
        weekly: 403,
        repaymentRate: 0.06,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 7.3,
        rpiRate: 6.9,
        policyChanges: [],
        isProjected: false,
        isFrozen: true
      },
      {
        taxYear: '2022/23',
        annual: 21000,
        monthly: 1750,
        weekly: 403,
        repaymentRate: 0.06,
        interestRate: 'RPI to RPI+3%',
        interestRateNumeric: 6.9,
        rpiRate: 4.4,
        policyChanges: [],
        isProjected: false,
        isFrozen: true
      }
    ]
  }
];

const fmtMoney = (n: number, dp: number = 0): string =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp: number = 1): string => `${(n * 100).toFixed(dp)}%`;

const fmtChange = (current: number, previous: number): string => {
  const change = ((current - previous) / previous) * 100;
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(1)}%`;
};

function calculateInflationAdjusted(amount: number, fromYear: string, toYear: string): number {
  const fromInflation = INFLATION_DATA.find(d => d.year === fromYear)?.cpi || 100;
  const toInflation = INFLATION_DATA.find(d => d.year === toYear)?.cpi || 100;
  return (amount * toInflation) / fromInflation;
}

function calculateRepaymentImpact(threshold: number, salary: number, rate: number): number {
  return Math.max(0, (salary - threshold) * rate);
}

const ThresholdInterestBrowser: React.FC = () => {
  const [selectedPlans, setSelectedPlans] = useState<string[]>(['PLAN_2']);
  const [comparisonView, setComparisonView] = useState<ComparisonView>({
    type: 'trends',
    selectedPlans: ['PLAN_2'],
    showInflationAdjusted: false
  });
  const [testSalary, setTestSalary] = useState<number>(35000);
  const [baseYear, setBaseYear] = useState<string>('2023/24');

  const allYears = useMemo(() => {
    const years = new Set<string>();
    HISTORICAL_DATA.forEach(plan => {
      plan.thresholds.forEach(threshold => {
        years.add(threshold.taxYear);
      });
    });
    return Array.from(years).sort().reverse();
  }, []);

  const comparisonData = useMemo(() => {
    if (comparisonView.type === 'plan-comparison' && comparisonView.selectedYear) {
      return HISTORICAL_DATA
        .filter(plan => selectedPlans.includes(plan.planId))
        .map(plan => {
          const yearData = plan.thresholds.find(t => t.taxYear === comparisonView.selectedYear);
          return yearData ? { plan, yearData } : null;
        })
        .filter((item): item is { plan: PlanData; yearData: ThresholdData } => item !== null);
    }
    return [];
  }, [comparisonView, selectedPlans]);

  const togglePlan = (planId: string): void => {
    setSelectedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Tax Year Threshold Browser</span></li>
            </ol>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tax Year Threshold & Interest Browser
          </h1>
          <p className="text-xl text-gray-600">
            Explore historical and projected student loan thresholds and interest rates across all plans. 
            Understand how changes over time have affected repayments and plan for the future.
          </p>
        </div>
      </section>

      {/* Controls Panel */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Plan Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Plans to Compare
            </label>
            <div className="space-y-2">
              {HISTORICAL_DATA.map((plan) => (
                <label key={plan.planId} className="flex items-start">
                  <input
                    type="checkbox"
                    checked={selectedPlans.includes(plan.planId)}
                    onChange={() => togglePlan(plan.planId)}
                    className="mt-1 mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-800">{plan.planName}</span>
                    <p className="text-xs text-gray-500">{plan.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* View Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              View Type
            </label>
            <div className="space-y-2">
              {[
                { value: 'trends', label: 'Historical Trends', desc: 'Show changes over time' },
                { value: 'plan-comparison', label: 'Plan Comparison', desc: 'Compare plans for specific year' },
                { value: 'single-year', label: 'Single Year Detail', desc: 'Deep dive into one year' }
              ].map((option) => (
                <label key={option.value} className="flex items-start">
                  <input
                    type="radio"
                    name="viewType"
                    value={option.value}
                    checked={comparisonView.type === option.value}
                    onChange={(e) => setComparisonView(prev => ({ ...prev, type: e.target.value as ComparisonView['type'] }))}
                    className="mt-1 mr-2"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-800">{option.label}</span>
                    <p className="text-xs text-gray-500">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Year Selection */}
          {comparisonView.type === 'plan-comparison' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comparison Year
              </label>
              <select
                value={comparisonView.selectedYear || ''}
                onChange={(e) => setComparisonView(prev => ({ ...prev, selectedYear: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select year...</option>
                {allYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Analysis Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Analysis Options
            </label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={comparisonView.showInflationAdjusted}
                  onChange={(e) => setComparisonView(prev => ({ ...prev, showInflationAdjusted: e.target.checked }))}
                  className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Show inflation-adjusted values</span>
              </label>
              
              <div>
                <label className="block text-xs text-gray-500 mb-1">Test Salary for Impact</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1 text-sm">£</span>
                  <input
                    type="number"
                    value={testSalary}
                    onChange={(e) => setTestSalary(Number(e.target.value) || 0)}
                    min={0}
                    max={100000}
                    step={1000}
                    className="block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {comparisonView.showInflationAdjusted && (
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Base Year for Inflation</label>
                  <select
                    value={baseYear}
                    onChange={(e) => setBaseYear(e.target.value)}
                    className="block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {allYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Display */}
      <section className="max-w-6xl mx-auto space-y-8">
        
        {/* Trends View */}
        {comparisonView.type === 'trends' && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Historical Threshold Trends</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2">Tax Year</th>
                    {selectedPlans.map((planId) => {
                      const plan = HISTORICAL_DATA.find(p => p.planId === planId);
                      return (
                        <th key={planId} className="text-right py-3 px-2">
                          {plan?.planName}
                          <br />
                          <span className="text-xs font-normal text-gray-500">
                            {comparisonView.showInflationAdjusted ? 'Real Terms' : 'Nominal'}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {allYears.map((year) => (
                    <tr key={year} className="border-b border-gray-100">
                      <td className="py-3 px-2">
                        <div className="font-medium">{year}</div>
                        {HISTORICAL_DATA[0]?.thresholds.find(t => t.taxYear === year)?.isProjected && (
                          <span className="text-xs text-blue-600">Projected</span>
                        )}
                      </td>
                      {selectedPlans.map((planId) => {
                        const plan = HISTORICAL_DATA.find(p => p.planId === planId);
                        const threshold = plan?.thresholds.find(t => t.taxYear === year);
                        const prevYear = allYears[allYears.indexOf(year) + 1];
                        const prevThreshold = plan?.thresholds.find(t => t.taxYear === prevYear);
                        
                        if (!threshold) {
                          return (
                            <td key={planId} className="text-right py-3 px-2 text-gray-400">
                              N/A
                            </td>
                          );
                        }

                        const displayValue = comparisonView.showInflationAdjusted
                          ? calculateInflationAdjusted(threshold.annual, year, baseYear)
                          : threshold.annual;

                        const change = prevThreshold 
                          ? fmtChange(threshold.annual, prevThreshold.annual)
                          : null;

                        return (
                          <td key={planId} className="text-right py-3 px-2">
                            <div className="font-medium">{fmtMoney(displayValue)}</div>
                            {change && (
                              <div className={`text-xs ${
                                change.startsWith('+') ? 'text-green-600' : 
                                change.startsWith('-') ? 'text-red-600' : 'text-gray-500'
                              }`}>
                                {change}
                              </div>
                            )}
                            {threshold.isFrozen && (
                              <div className="text-xs text-orange-600">Frozen</div>
                            )}
                            <div className="text-xs text-gray-500">
                              Impact: {fmtMoney(calculateRepaymentImpact(threshold.annual, testSalary, threshold.repaymentRate))}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-sm text-gray-600">
              <p><strong>Impact calculation:</strong> Annual repayment for £{testSalary.toLocaleString()} salary</p>
              {comparisonView.showInflationAdjusted && (
                <p><strong>Inflation adjustment:</strong> Values adjusted to {baseYear} prices using CPI</p>
              )}
            </div>
          </div>
        )}

        {/* Plan Comparison View */}
        {comparisonView.type === 'plan-comparison' && comparisonView.selectedYear && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Plan Comparison for {comparisonView.selectedYear}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparisonData.map(({ plan, yearData }) => (
                <div key={plan.planId} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{plan.planName}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Annual Threshold</p>
                      <p className="text-2xl font-bold text-gray-800">{fmtMoney(yearData.annual)}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">Monthly</p>
                        <p className="font-medium">{fmtMoney(yearData.monthly)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Weekly</p>
                        <p className="font-medium">{fmtMoney(yearData.weekly)}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Repayment Rate</p>
                      <p className="text-lg font-semibold">{fmtPercent(yearData.repaymentRate)}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Interest Rate</p>
                      <p className="text-sm font-medium">{yearData.interestRate}</p>
                      <p className="text-lg font-semibold">{fmtPercent(yearData.interestRateNumeric)}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Annual Repayment (£{testSalary.toLocaleString()} salary)</p>
                      <p className="text-lg font-semibold text-blue-700">
                        {fmtMoney(calculateRepaymentImpact(yearData.annual, testSalary, yearData.repaymentRate))}
                      </p>
                    </div>
                    
                    {yearData.policyChanges.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Policy Changes</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {yearData.policyChanges.map((change, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interest Rate Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Interest Rate History</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2">Tax Year</th>
                  <th className="text-center py-3 px-2">RPI Rate</th>
                  {selectedPlans.map((planId) => {
                    const plan = HISTORICAL_DATA.find(p => p.planId === planId);
                    return (
                      <th key={planId} className="text-center py-3 px-2">
                        {plan?.planName}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {allYears.map((year) => {
                  const rpiRate = HISTORICAL_DATA[0]?.thresholds.find(t => t.taxYear === year)?.rpiRate;
                  return (
                    <tr key={year} className="border-b border-gray-100">
                      <td className="py-3 px-2 font-medium">{year}</td>
                      <td className="text-center py-3 px-2">{rpiRate ? fmtPercent(rpiRate) : 'N/A'}</td>
                      {selectedPlans.map((planId) => {
                        const plan = HISTORICAL_DATA.find(p => p.planId === planId);
                        const threshold = plan?.thresholds.find(t => t.taxYear === year);
                        
                        return (
                          <td key={planId} className="text-center py-3 px-2">
                            {threshold ? (
                              <div>
                                <div className="font-medium">{fmtPercent(threshold.interestRateNumeric)}</div>
                                <div className="text-xs text-gray-500">{threshold.interestRate}</div>
                              </div>
                            ) : (
                              'N/A'
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Historical Insights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Threshold Freezes</h3>
              <p className="text-sm text-gray-600">
                Plan 1 and 2 thresholds were frozen 2022-2024, significantly increasing repayment burden 
                as salaries rose with inflation.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Plan 5 Introduction</h3>
              <p className="text-sm text-gray-600">
                Plan 5 introduced fixed £25k threshold but 40-year write-off. Lower interest rates 
                but longer repayment period.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Scottish Advantage</h3>
              <p className="text-sm text-gray-600">
                Plan 4 consistently offers the highest thresholds, making Scottish students 
                better off in repayment terms.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Interest Rate Volatility</h3>
              <p className="text-sm text-gray-600">
                Interest rates fluctuated dramatically 2020-2024, from historic lows near 1% 
                to peaks over 7% affecting loan balances.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Real Terms Impact</h3>
              <p className="text-sm text-gray-600">
                When adjusted for inflation, threshold freezes represented significant real-terms cuts, 
                increasing repayment burden substantially.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Policy Uncertainty</h3>
              <p className="text-sm text-gray-600">
                Frequent policy changes make long-term planning difficult. Future threshold 
                increases are promised but not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Sources & Methodology</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <strong>Official Sources:</strong> All threshold and interest rate data sourced from HM Treasury announcements, 
            Student Loans Company publications, and Department for Education policy documents.
          </p>
          <p>
            <strong>Inflation Adjustment:</strong> Uses official ONS Consumer Price Index (CPI) data for real-terms calculations. 
            Base year can be adjusted to show relative purchasing power.
          </p>
          <p>
            <strong>Projected Data:</strong> Future rates marked as &quot;projected&quot; are based on government announcements 
            and may be subject to change in future budget announcements.
          </p>
          <p>
            <strong>Calculation Notes:</strong> Impact calculations assume consistent salary throughout tax year. 
            Actual repayments may vary due to PAYE timing, multiple employments, and other factors.
          </p>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://www.gov.uk/government/collections/student-loan-interest-rates-and-charges"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
          >
            Official Interest Rates
          </a>
          <a
            href="https://www.gov.uk/repaying-your-student-loan/what-you-pay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
          >
            Current Thresholds
          </a>
          <a
            href="https://www.ons.gov.uk/economy/inflationandpriceindices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
          >
            ONS Inflation Data
          </a>
        </div>
      </section>
    </div>
  );
};

export default ThresholdInterestBrowser;