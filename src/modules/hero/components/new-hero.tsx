"use client";

import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface LoanPlan {
  name: string;
  threshold: number;
  rate: number;
  writeOffYears: number;
  interestRate: number;
}

interface LoanPlans {
  [key: string]: LoanPlan;
}

interface YearlyData {
  year: number;
  balance: number;
  repayment: number;
  overpayment?: number;
  salary: number;
  cumulativeRepaid: number;
  onBreak?: boolean;
  writtenOff?: boolean;
}

interface CalculationResults {
  monthly: number;
  monthlyWithExtra: number;
  annual: number;
  annualWithExtra: number;
  threshold: number;
  planName: string;
  totalRepaid: number;
  totalMandatoryRepaid: number;
  totalOverpayments: number;
  originalBalance: number;
  writeOffDate: string;
  yearsUntilComplete: number;
  fullyRepaid: boolean;
  totalInterest: number;
  percentageRepaid: number;
  chartData: YearlyData[];
  finalSalary: number;
  amountWrittenOff: number;
  moneySaved: number;
  hasOverpayments: boolean;
  hasCareerBreak: boolean;
}

const StudentLoanCalculator: React.FC = () => {
  const [salary, setSalary] = useState<string>('');
  const [loanPlan, setLoanPlan] = useState<string>('plan5');
  const [loanBalance, setLoanBalance] = useState<string>('');
  const [graduationYear, setGraduationYear] = useState<string>('2024');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  
  // Advanced options
  const [salaryGrowth, setSalaryGrowth] = useState<string>('2.5');
  const [monthlyOverpayment, setMonthlyOverpayment] = useState<string>('0');
  const [lumpSumPayment, setLumpSumPayment] = useState<string>('0');
  const [lumpSumYear, setLumpSumYear] = useState<string>('0');
  const [careerBreakYears, setCareerBreakYears] = useState<string>('0');
  const [careerBreakStart, setCareerBreakStart] = useState<string>('5');
  const [thresholdGrowth, setThresholdGrowth] = useState<string>('2.0');
  const [customInterestRate, setCustomInterestRate] = useState<string>('');
  const [courseLength, setCourseLength] = useState<string>('3');
  const [maintenanceLoan, setMaintenanceLoan] = useState<string>('');
  const [isStudent, setIsStudent] = useState<boolean>(false);
  
  const [results, setResults] = useState<CalculationResults | null>(null);

  const loanPlans: LoanPlans = {
    plan1: { 
      name: 'Plan 1', 
      threshold: 22015, 
      rate: 0.09, 
      writeOffYears: 25,
      interestRate: 0.015
    },
    plan2: { 
      name: 'Plan 2', 
      threshold: 27295, 
      rate: 0.09, 
      writeOffYears: 30,
      interestRate: 0.053
    },
    plan4: { 
      name: 'Plan 4 (Scotland)', 
      threshold: 27660, 
      rate: 0.09, 
      writeOffYears: 30,
      interestRate: 0.015
    },
    plan5: { 
      name: 'Plan 5', 
      threshold: 25000, 
      rate: 0.09, 
      writeOffYears: 40,
      interestRate: 0.053
    },
    postgraduate: { 
      name: 'Postgraduate Loan', 
      threshold: 21000, 
      rate: 0.06, 
      writeOffYears: 30,
      interestRate: 0.053
    }
  };

  const calculateRepayment = (): void => {
    const annualSalary = parseFloat(salary);
    const balance = parseFloat(loanBalance) || 0;
    const gradYear = parseInt(graduationYear);
    const growthRate = parseFloat(salaryGrowth) / 100;
    const monthlyExtra = parseFloat(monthlyOverpayment) || 0;
    const lumpSum = parseFloat(lumpSumPayment) || 0;
    const lumpYear = parseInt(lumpSumYear) || 0;
    const breakYears = parseInt(careerBreakYears) || 0;
    const breakStart = parseInt(careerBreakStart) || 0;
    const threshGrowth = parseFloat(thresholdGrowth) / 100;
    const courseDuration = parseInt(courseLength) || 3;
    const maintenanceAmount = parseFloat(maintenanceLoan) || 0;
    
    if (!annualSalary || annualSalary < 0) {
      alert('Please enter a valid salary');
      return;
    }
    
    // Calculate total loan if student
    let totalBalance = balance;
    if (isStudent && maintenanceAmount > 0) {
      // Estimate total debt: maintenance loan per year + tuition
      const tuitionPerYear = 9250; // Standard UK tuition
      totalBalance = (maintenanceAmount * courseDuration) + (tuitionPerYear * courseDuration);
    }
    
    if (totalBalance <= 0) {
      alert('Please enter a valid loan balance or maintenance loan amount');
      return;
    }

    const plan = loanPlans[loanPlan];
    const threshold = plan.threshold;
    const rate = plan.rate;
    const interestRate = customInterestRate ? parseFloat(customInterestRate) / 100 : plan.interestRate;
    const writeOffYears = plan.writeOffYears;

    // Calculate current year repayment
    let annualRepayment = 0;
    if (annualSalary > threshold) {
      annualRepayment = (annualSalary - threshold) * rate;
    }
    const monthlyRepayment = annualRepayment / 12;
    const totalMonthlyWithExtra = monthlyRepayment + monthlyExtra;
    const annualWithExtra = annualRepayment + (monthlyExtra * 12);

    const writeOffYear = gradYear + writeOffYears;
    const writeOffDate = `April ${writeOffYear}`;

    // Detailed year-by-year simulation with advanced options
    let remainingBalance = totalBalance;
    let totalRepaid = 0;
    let totalOverpayments = 0;
    let currentSalary = annualSalary;
    let currentThreshold = threshold;
    let years = 0;
    const yearlyData: YearlyData[] = [];
    
    while (remainingBalance > 0 && years < writeOffYears) {
      const yearNum = gradYear + years;
      
      // Check if in career break period
      const isOnBreak = (years >= breakStart && years < breakStart + breakYears);
      
      // Calculate this year's repayment
      let yearlyRepayment = 0;
      let yearlyOverpayment = monthlyExtra * 12;
      
      if (!isOnBreak && currentSalary > currentThreshold) {
        yearlyRepayment = (currentSalary - currentThreshold) * rate;
      } else if (isOnBreak) {
        yearlyRepayment = 0;
        yearlyOverpayment = 0; // No overpayments during break
      }
      
      // Add lump sum payment if specified year
      if (lumpSum > 0 && years === lumpYear) {
        yearlyOverpayment += lumpSum;
      }
      
      const interestThisYear = remainingBalance * interestRate;
      remainingBalance += interestThisYear;
      
      // Apply repayments
      const totalPaymentThisYear = yearlyRepayment + yearlyOverpayment;
      remainingBalance -= totalPaymentThisYear;
      
      if (remainingBalance < 0) {
        // Overpaid - adjust
        const actualPayment = totalPaymentThisYear + remainingBalance;
        const actualOverpayment = actualPayment - yearlyRepayment;
        totalOverpayments += Math.max(0, actualOverpayment);
        totalRepaid += actualPayment;
        remainingBalance = 0;
      } else {
        totalRepaid += yearlyRepayment;
        totalOverpayments += yearlyOverpayment;
      }
      
      // Store data for chart
      if (years < 10 || years % 5 === 0 || remainingBalance <= 0) {
        yearlyData.push({
          year: yearNum,
          balance: Math.max(0, Math.round(remainingBalance)),
          repayment: Math.round(yearlyRepayment),
          overpayment: Math.round(yearlyOverpayment),
          salary: isOnBreak ? 0 : Math.round(currentSalary),
          cumulativeRepaid: Math.round(totalRepaid + totalOverpayments),
          onBreak: isOnBreak
        });
      }
      
      if (remainingBalance <= 0) break;
      
      // Grow for next year
      if (!isOnBreak) {
        currentSalary *= (1 + growthRate);
      }
      currentThreshold *= (1 + threshGrowth);
      years++;
    }

    // Add final write-off point if not fully repaid
    if (remainingBalance > 0) {
      yearlyData.push({
        year: writeOffYear,
        balance: 0,
        repayment: 0,
        salary: Math.round(currentSalary),
        cumulativeRepaid: Math.round(totalRepaid + totalOverpayments),
        writtenOff: true
      });
    }

    const fullyRepaid = remainingBalance <= 0;
    const totalPaid = totalRepaid + totalOverpayments;
    const totalInterest = fullyRepaid ? (totalPaid - totalBalance) : 0;
    const yearsUntilComplete = fullyRepaid ? years : writeOffYears;
    const moneySavedByOverpaying = fullyRepaid && totalOverpayments > 0 ? 
      Math.max(0, totalBalance - totalPaid) : 0;
    
    setResults({
      monthly: monthlyRepayment,
      monthlyWithExtra: totalMonthlyWithExtra,
      annual: annualRepayment,
      annualWithExtra: annualWithExtra,
      threshold: threshold,
      planName: plan.name,
      totalRepaid: Math.round(totalPaid),
      totalMandatoryRepaid: Math.round(totalRepaid),
      totalOverpayments: Math.round(totalOverpayments),
      originalBalance: Math.round(totalBalance),
      writeOffDate: writeOffDate,
      yearsUntilComplete: yearsUntilComplete,
      fullyRepaid: fullyRepaid,
      totalInterest: Math.round(totalInterest),
      percentageRepaid: Math.round((totalPaid / totalBalance) * 100),
      chartData: yearlyData,
      finalSalary: Math.round(currentSalary),
      amountWrittenOff: fullyRepaid ? 0 : Math.round(remainingBalance),
      moneySaved: Math.round(moneySavedByOverpaying),
      hasOverpayments: totalOverpayments > 0,
      hasCareerBreak: breakYears > 0
    });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Student Loan Calculator UK
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate your lifetime repayment with detailed projections • Updated for 2025
          </p>
        </div>

        {/* Calculator Form */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Salary Input */}
            <div>
              <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-2">
                Current Annual Salary (Before Tax)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">£</span>
                <input
                  id="salary"
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="30,000"
                  className="w-full pl-8 pr-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
            </div>

            {/* Loan Balance */}
            <div>
              <label htmlFor="loanBalance" className="block text-sm font-semibold text-gray-700 mb-2">
                Outstanding Loan Balance
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">£</span>
                <input
                  id="loanBalance"
                  type="number"
                  value={loanBalance}
                  onChange={(e) => setLoanBalance(e.target.value)}
                  placeholder="45,000"
                  className="w-full pl-8 pr-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Loan Plan */}
            <div>
              <label htmlFor="loanPlan" className="block text-sm font-semibold text-gray-700 mb-2">
                Student Loan Plan
              </label>
              <select
                id="loanPlan"
                value={loanPlan}
                onChange={(e) => setLoanPlan(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
              >
                <option value="plan5">Plan 5 (Started 2023+)</option>
                <option value="plan2">Plan 2 (Started 2012-2023)</option>
                <option value="plan1">Plan 1 (Started before 2012)</option>
                <option value="plan4">Plan 4 (Scotland)</option>
                <option value="postgraduate">Postgraduate Loan</option>
              </select>
            </div>

            {/* Graduation Year */}
            <div>
              <label htmlFor="graduationYear" className="block text-sm font-semibold text-gray-700 mb-2">
                Graduation Year
              </label>
              <select
                id="graduationYear"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
              >
                {Array.from({ length: 20 }, (_, i) => 2030 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Advanced Options */}
        <div className="mb-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            Advanced Options
          </button>
          
          {showAdvanced && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl space-y-6">
              {/* Student Mode Toggle */}
              <div className="pb-4 border-b border-gray-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">I&apos;m a current student</span>
                    <p className="text-sm text-gray-600">Calculate total debt based on course details</p>
                  </div>
                </label>
              </div>

              {/* Student-specific fields */}
              {isStudent && (
                <div className="grid md:grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Course Length (Years)
                    </label>
                    <select
                      value={courseLength}
                      onChange={(e) => setCourseLength(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                    >
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5 years</option>
                      <option value="6">6 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Maintenance Loan (Per Year)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                      <input
                        type="number"
                        value={maintenanceLoan}
                        onChange={(e) => setMaintenanceLoan(e.target.value)}
                        placeholder="9,000"
                        className="w-full pl-8 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Average: £7,000-£9,000/year
                    </p>
                  </div>
                </div>
              )}

              {/* Career Settings */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Career Projection</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Annual Salary Growth (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={salaryGrowth}
                      onChange={(e) => setSalaryGrowth(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Typical: 2-4% per year
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Threshold Growth Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={thresholdGrowth}
                      onChange={(e) => setThresholdGrowth(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Default: 2% (linked to RPI)
                    </p>
                  </div>
                </div>
              </div>

              {/* Career Break */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Career Break</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years on Break
                    </label>
                    <input
                      type="number"
                      value={careerBreakYears}
                      onChange={(e) => setCareerBreakYears(e.target.value)}
                      placeholder="0"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      e.g., maternity, travel, sabbatical
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Starting Year (After Graduation)
                    </label>
                    <input
                      type="number"
                      value={careerBreakStart}
                      onChange={(e) => setCareerBreakStart(e.target.value)}
                      placeholder="5"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Years after graduation when break starts
                    </p>
                  </div>
                </div>
              </div>

              {/* Overpayments */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Voluntary Overpayments</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Monthly Extra Payment
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                      <input
                        type="number"
                        value={monthlyOverpayment}
                        onChange={(e) => setMonthlyOverpayment(e.target.value)}
                        placeholder="0"
                        className="w-full pl-8 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Extra per month
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      One-off Lump Sum
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                      <input
                        type="number"
                        value={lumpSumPayment}
                        onChange={(e) => setLumpSumPayment(e.target.value)}
                        placeholder="0"
                        className="w-full pl-8 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      e.g., bonus, inheritance
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Lump Sum Year (After Grad)
                    </label>
                    <input
                      type="number"
                      value={lumpSumYear}
                      onChange={(e) => setLumpSumYear(e.target.value)}
                      placeholder="0"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      When to apply lump sum
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Interest Rate */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Custom Settings</h4>
                <div className="max-w-md">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Override Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={customInterestRate}
                    onChange={(e) => setCustomInterestRate(e.target.value)}
                    placeholder="Leave blank for default"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Default rates: Plan 1/4: 1.5%, Plan 2/5/PG: 5.3% (varies by income)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <p className="text-xs text-gray-600">
                  💡 <span className="font-semibold">Tip:</span> Most graduates won&apos;t fully repay their loan. 
                  Voluntary overpayments may not save you money if your loan will be written off.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateRepayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition shadow-lg hover:shadow-xl"
        >
          Calculate My Repayments
        </button>

        {/* Results Section */}
        {results && (
          <div className="mt-10">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-900 mb-1">
                  Monthly Payment {results.hasOverpayments && <span className="text-xs">(with extra)</span>}
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {formatCurrency(results.hasOverpayments ? results.monthlyWithExtra : results.monthly)}
                </p>
                {results.hasOverpayments && (
                  <p className="text-xs text-blue-700 mt-1">
                    Mandatory: {formatCurrency(results.monthly)}
                  </p>
                )}
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                <p className="text-sm font-medium text-purple-900 mb-1">Annual Payment</p>
                <p className="text-2xl font-bold text-purple-600">
                  {formatCurrency(results.hasOverpayments ? results.annualWithExtra : results.annual)}
                </p>
                {results.hasOverpayments && (
                  <p className="text-xs text-purple-700 mt-1">
                    Extra: {formatCurrency(results.totalOverpayments / results.yearsUntilComplete)}
                  </p>
                )}
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                <p className="text-sm font-medium text-green-900 mb-1">Total Repaid</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(results.totalRepaid)}</p>
                {results.hasOverpayments && (
                  <p className="text-xs text-green-700 mt-1">
                    Overpayments: {formatCurrency(results.totalOverpayments)}
                  </p>
                )}
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
                <p className="text-sm font-medium text-amber-900 mb-1">
                  {results.fullyRepaid ? 'Paid Off In' : 'Written Off In'}
                </p>
                <p className="text-2xl font-bold text-amber-600">{results.yearsUntilComplete} yrs</p>
                {results.hasCareerBreak && (
                  <p className="text-xs text-amber-700 mt-1">Includes career break</p>
                )}
              </div>
            </div>

            {/* Main Chart */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Repayment Projection Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={results.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value: number) => `£${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    labelFormatter={(label: number) => `Year: ${label}`}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="balance" 
                    stackId="1"
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    name="Remaining Balance"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cumulativeRepaid" 
                    stackId="2"
                    stroke="#10b981" 
                    fill="#10b981" 
                    name="Total Repaid"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Left: Key Numbers */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Original Loan</span>
                    <span className="font-semibold">{formatCurrency(results.originalBalance)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Total You&apos;ll Repay</span>
                    <span className="font-semibold text-green-600">{formatCurrency(results.totalRepaid)}</span>
                  </div>
                  {results.hasOverpayments && (
                    <>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">• Mandatory Payments</span>
                        <span className="font-semibold text-sm">{formatCurrency(results.totalMandatoryRepaid)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">• Voluntary Overpayments</span>
                        <span className="font-semibold text-sm text-blue-600">{formatCurrency(results.totalOverpayments)}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Percentage Repaid</span>
                    <span className="font-semibold">{results.percentageRepaid}%</span>
                  </div>
                  {!results.fullyRepaid && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Amount Written Off</span>
                      <span className="font-semibold text-amber-600">{formatCurrency(results.amountWrittenOff)}</span>
                    </div>
                  )}
                  {results.fullyRepaid && (
                    <>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Total Interest Paid</span>
                        <span className="font-semibold text-red-600">{formatCurrency(results.totalInterest)}</span>
                      </div>
                      {results.moneySaved > 0 && (
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Saved by Overpaying</span>
                          <span className="font-semibold text-green-600">{formatCurrency(results.moneySaved)}</span>
                        </div>
                      )}
                    </>
                  )}
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Write-off Date</span>
                    <span className="font-semibold">{results.writeOffDate}</span>
                  </div>
                </div>
              </div>

              {/* Right: Career Impact */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Career Impact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Current Salary</span>
                    <span className="font-semibold">{formatCurrency(parseFloat(salary))}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Projected Final Salary</span>
                    <span className="font-semibold">{formatCurrency(results.finalSalary)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Repayment Threshold</span>
                    <span className="font-semibold">{formatCurrency(results.threshold)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Plan Type</span>
                    <span className="font-semibold">{results.planName}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Alert */}
            {results.annual === 0 ? (
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded mb-6">
                <p className="text-green-800 font-medium">
                  ✓ You earn below the threshold - no repayments required yet!
                </p>
              </div>
            ) : results.fullyRepaid ? (
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">
                <p className="text-blue-800 font-medium">
                  📊 You&apos;ll fully repay your loan in {results.yearsUntilComplete} years based on your projected salary growth
                </p>
                {results.hasOverpayments && results.moneySaved > 0 && (
                  <p className="text-sm text-blue-700 mt-1">
                    By making overpayments, you could save {formatCurrency(results.moneySaved)} in interest charges
                  </p>
                )}
              </div>
            ) : (
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded mb-4">
                <p className="text-amber-800 font-medium">
                  💡 Your remaining balance of {formatCurrency(results.amountWrittenOff)} will be written off in {results.writeOffDate}
                </p>
                {results.hasOverpayments && (
                  <p className="text-sm text-amber-700 mt-1">
                    ⚠️ Your overpayments of {formatCurrency(results.totalOverpayments)} won&apos;t save you money since your loan will be written off
                  </p>
                )}
              </div>
            )}

            {results.hasCareerBreak && (
              <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded mb-6">
                <p className="text-purple-800 font-medium">
                  🏖️ Career break included: No repayments during your {careerBreakYears}-year break
                </p>
                <p className="text-sm text-purple-700 mt-1">
                  Interest will continue to accrue during this period
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Important Disclaimer:</span> This calculator provides estimates for illustrative purposes only. 
                Results are based on current UK legislation, your inputs, and the assumptions shown. Actual repayments may differ due to: 
                changes in government policy or interest rates, actual salary progression varying from projections, career breaks or unemployment, 
                changes in personal circumstances, and variations in how loan plans are administered. Interest rates are simplified averages - 
                Plan 2 and 5 use tiered rates based on income. Overpayment benefits depend heavily on individual circumstances. 
                This tool does not constitute financial advice. For personalized guidance, consult a qualified financial adviser or the 
                Student Loans Company directly.
              </p>
            </div>
          </div>
        )}

        {/* Trust Signals */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Free calculator
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              No registration
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              2025 thresholds
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              All UK plans
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLoanCalculator;