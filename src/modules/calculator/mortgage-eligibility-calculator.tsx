"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type MortgageResult = {
  monthlyGrossIncome: number;
  totalMonthlyDebt: number;
  debtToIncomeRatio: number;
  maxMonthlyMortgagePayment: number;
  maxMortgageAmount: number;
  maxPropertyPrice: number;
  actualMonthlyMortgagePayment: number;
  studentLoanImpact: number;
  withinDTILimit: boolean;
  percentageOfIncomeToDebt: number;
};

type ComparisonResult = {
  withStudentLoan: MortgageResult;
  withoutStudentLoan: MortgageResult;
  difference: number;
};

const DEFAULT_DTI_LIMIT = 0.43; // 43% is common max DTI
const INTEREST_RATE_DEFAULT = 5.5;

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp = 1) => `${(n * 100).toFixed(dp)}%`;

function calculateMonthlyMortgagePayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  if (principal <= 0) return 0;
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;

  if (monthlyRate === 0) return principal / numPayments;

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  );
}

function calculateMaxMortgage(
  monthlyPayment: number,
  annualRate: number,
  years: number
): number {
  if (monthlyPayment <= 0) return 0;
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;

  if (monthlyRate === 0) return monthlyPayment * numPayments;

  return (
    (monthlyPayment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments))
  );
}

function calculateMortgageEligibility({
  annualIncome,
  studentLoanPayment,
  otherDebts,
  deposit,
  mortgageTerm,
  interestRate,
  dtiLimit = DEFAULT_DTI_LIMIT,
}: {
  annualIncome: number;
  studentLoanPayment: number;
  otherDebts: number;
  deposit: number;
  mortgageTerm: number;
  interestRate: number;
  dtiLimit?: number;
}): MortgageResult {
  const monthlyGrossIncome = annualIncome / 12;
  const totalMonthlyDebt = studentLoanPayment + otherDebts;
  const debtToIncomeRatio = monthlyGrossIncome > 0 ? totalMonthlyDebt / monthlyGrossIncome : 0;

  // Maximum monthly payment allowed under DTI limit
  const maxMonthlyMortgagePayment = Math.max(
    0,
    monthlyGrossIncome * dtiLimit - totalMonthlyDebt
  );

  // Calculate max mortgage amount based on max monthly payment
  const maxMortgageAmount = calculateMaxMortgage(
    maxMonthlyMortgagePayment,
    interestRate,
    mortgageTerm
  );

  const maxPropertyPrice = maxMortgageAmount + deposit;

  // Calculate actual monthly payment for the max mortgage
  const actualMonthlyMortgagePayment = calculateMonthlyMortgagePayment(
    maxMortgageAmount,
    interestRate,
    mortgageTerm
  );

  const studentLoanImpact = studentLoanPayment;
  const withinDTILimit = debtToIncomeRatio <= dtiLimit;
  const percentageOfIncomeToDebt = debtToIncomeRatio;

  return {
    monthlyGrossIncome,
    totalMonthlyDebt,
    debtToIncomeRatio,
    maxMonthlyMortgagePayment,
    maxMortgageAmount,
    maxPropertyPrice,
    actualMonthlyMortgagePayment,
    studentLoanImpact,
    withinDTILimit,
    percentageOfIncomeToDebt,
  };
}

export default function MortgageEligibilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(40000);
  const [studentLoanPayment, setStudentLoanPayment] = useState(150);
  const [otherDebts, setOtherDebts] = useState(200);
  const [deposit, setDeposit] = useState(30000);
  const [mortgageTerm, setMortgageTerm] = useState(25);
  const [interestRate, setInterestRate] = useState(INTEREST_RATE_DEFAULT);
  const [dtiLimit, setDtiLimit] = useState(DEFAULT_DTI_LIMIT);
  const [showComparison, setShowComparison] = useState(false);

  const result = useMemo(
    () =>
      calculateMortgageEligibility({
        annualIncome,
        studentLoanPayment,
        otherDebts,
        deposit,
        mortgageTerm,
        interestRate,
        dtiLimit,
      }),
    [annualIncome, studentLoanPayment, otherDebts, deposit, mortgageTerm, interestRate, dtiLimit]
  );

  const comparison: ComparisonResult = useMemo(() => {
    const withStudentLoan = result;
    const withoutStudentLoan = calculateMortgageEligibility({
      annualIncome,
      studentLoanPayment: 0,
      otherDebts,
      deposit,
      mortgageTerm,
      interestRate,
      dtiLimit,
    });

    return {
      withStudentLoan,
      withoutStudentLoan,
      difference: withoutStudentLoan.maxPropertyPrice - withStudentLoan.maxPropertyPrice,
    };
  }, [annualIncome, otherDebts, deposit, mortgageTerm, interestRate, dtiLimit, result,]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Mortgage Eligibility Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mortgage Eligibility Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Understand how student loan repayments affect your mortgage borrowing capacity
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Debt-to-Income Ratio</h3>
                  <p className="text-sm text-gray-600">
                    Lenders assess your debt-to-income ratio to determine how much you can borrow. Student loans count as monthly debt.
                  </p>
                </div>
              </div>
            </div>

            {/* Annual Income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Gross Income
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="income"
                  min={0}
                  max={250000}
                  step={1000}
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={20000}
                  max={150000}
                  step={5000}
                  value={Math.min(150000, annualIncome)}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Monthly: {fmtMoney(result.monthlyGrossIncome, 0)}
              </p>
            </div>

            {/* Student Loan Payment */}
            <div>
              <label htmlFor="student-loan" className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Student Loan Repayment
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="student-loan"
                  min={0}
                  max={2000}
                  step={10}
                  value={studentLoanPayment}
                  onChange={(e) => setStudentLoanPayment(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={Math.min(500, studentLoanPayment)}
                  onChange={(e) => setStudentLoanPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Annual: {fmtMoney(studentLoanPayment * 12, 0)}
              </p>
            </div>

            {/* Other Monthly Debts */}
            <div>
              <label htmlFor="other-debts" className="block text-sm font-medium text-gray-700 mb-1">
                Other Monthly Debts
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="other-debts"
                  min={0}
                  max={5000}
                  step={50}
                  value={otherDebts}
                  onChange={(e) => setOtherDebts(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Car loans, credit cards, personal loans, etc.
              </p>
            </div>

            {/* Deposit */}
            <div>
              <label htmlFor="deposit" className="block text-sm font-medium text-gray-700 mb-1">
                Deposit Amount
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="deposit"
                  min={0}
                  max={500000}
                  step={5000}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={5000}
                  value={Math.min(100000, deposit)}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Mortgage Term */}
            <div>
              <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">
                Mortgage Term
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="term"
                  min={5}
                  max={40}
                  step={5}
                  value={mortgageTerm}
                  onChange={(e) => setMortgageTerm(Number(e.target.value || 25))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="rate"
                  min={1}
                  max={15}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value || 5.5))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Current average UK mortgage rate
              </p>
            </div>

            {/* DTI Limit */}
            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                Advanced: DTI Limit
              </summary>
              <div className="mt-3">
                <label htmlFor="dti" className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Debt-to-Income Ratio
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="dti"
                    min={0.2}
                    max={0.5}
                    step={0.01}
                    value={dtiLimit}
                    onChange={(e) => setDtiLimit(Number(e.target.value || 0.43))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <span className="ml-2 text-gray-600">{fmtPercent(dtiLimit, 0)}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Most lenders use 43%. Conservative lenders may use 35-40%.
                </p>
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Mortgage Capacity</h2>

            <div className="space-y-4">
              {/* DTI Status */}
              <div className={`border-l-4 p-4 rounded ${result.withinDTILimit
                  ? "bg-green-50 border-green-500"
                  : "bg-red-50 border-red-500"
                }`}>
                <div className="flex items-start">
                  <svg className={`w-5 h-5 mr-2 mt-0.5 ${result.withinDTILimit ? "text-green-600" : "text-red-600"
                    }`} fill="currentColor" viewBox="0 0 20 20">
                    {result.withinDTILimit ? (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    )}
                  </svg>
                  <div>
                    <p className={`text-sm font-semibold ${result.withinDTILimit ? "text-green-800" : "text-red-800"
                      }`}>
                      Debt-to-Income Ratio: {fmtPercent(result.debtToIncomeRatio)}
                    </p>
                    <p className={`text-sm mt-1 ${result.withinDTILimit ? "text-green-700" : "text-red-700"
                      }`}>
                      {result.withinDTILimit
                        ? `Within lender limits (max ${fmtPercent(dtiLimit, 0)})`
                        : `Exceeds lender limits (max ${fmtPercent(dtiLimit, 0)})`
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Max Property Price */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-500">Maximum Property Price</p>
                <p className="text-3xl font-bold text-blue-600">{fmtMoney(result.maxPropertyPrice, 0)}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Based on {fmtMoney(deposit, 0)} deposit
                </p>
              </div>

              {/* Max Mortgage Amount */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Maximum Mortgage Amount</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.maxMortgageAmount, 0)}</p>
                <p className="text-sm text-gray-500">
                  {((result.maxMortgageAmount / result.maxPropertyPrice) * 100).toFixed(0)}% loan-to-value
                </p>
              </div>

              {/* Monthly Mortgage Payment */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Estimated Monthly Mortgage Payment</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.actualMonthlyMortgagePayment, 0)}</p>
                <p className="text-sm text-gray-500">
                  At {interestRate}% over {mortgageTerm} years
                </p>
              </div>

              {/* Total Monthly Commitments */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Monthly Debt Payments</p>
                <p className="text-xl font-bold text-gray-800">{fmtMoney(result.totalMonthlyDebt, 0)}</p>
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Student loan:</span>
                    <span className="font-medium">{fmtMoney(studentLoanPayment, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other debts:</span>
                    <span className="font-medium">{fmtMoney(otherDebts, 0)}</span>
                  </div>
                </div>
              </div>

              {/* Income Breakdown */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">Monthly Budget Breakdown</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Gross income:</span>
                    <span className="font-medium">{fmtMoney(result.monthlyGrossIncome, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available for mortgage:</span>
                    <span className="font-medium">{fmtMoney(result.maxMonthlyMortgagePayment, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>After all debts:</span>
                    <span className="font-medium">
                      {fmtMoney(result.monthlyGrossIncome - result.totalMonthlyDebt - result.actualMonthlyMortgagePayment, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {showComparison ? "Hide" : "Show"} Impact Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      {showComparison && (
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Student Loan Impact Analysis</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="font-semibold text-gray-800 mb-4">With Student Loan</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Max property price</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {fmtMoney(comparison.withStudentLoan.maxPropertyPrice, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly mortgage payment</p>
                  <p className="text-lg font-bold text-gray-800">
                    {fmtMoney(comparison.withStudentLoan.actualMonthlyMortgagePayment, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">DTI ratio</p>
                  <p className="text-lg font-bold text-gray-800">
                    {fmtPercent(comparison.withStudentLoan.debtToIncomeRatio)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-semibold text-gray-800 mb-4">Without Student Loan</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Max property price</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {fmtMoney(comparison.withoutStudentLoan.maxPropertyPrice, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly mortgage payment</p>
                  <p className="text-lg font-bold text-gray-800">
                    {fmtMoney(comparison.withoutStudentLoan.actualMonthlyMortgagePayment, 0)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">DTI ratio</p>
                  <p className="text-lg font-bold text-gray-800">
                    {fmtPercent(comparison.withoutStudentLoan.debtToIncomeRatio)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <h3 className="font-semibold text-gray-800 mb-2">Impact Summary</h3>
            <p className="text-gray-700 mb-4">
              Your student loan repayment of {fmtMoney(studentLoanPayment, 0)}/month reduces your maximum property price by approximately <strong>{fmtMoney(comparison.difference, 0)}</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <p className="text-gray-600">Reduction in borrowing</p>
                <p className="text-lg font-bold text-amber-600">
                  {fmtPercent(comparison.difference / comparison.withoutStudentLoan.maxPropertyPrice)}
                </p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-gray-600">Annual loan payments</p>
                <p className="text-lg font-bold text-amber-600">
                  {fmtMoney(studentLoanPayment * 12, 0)}
                </p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-gray-600">Years of payments</p>
                <p className="text-lg font-bold text-amber-600">
                  Varies by plan
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Insights */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
            <div className="text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">DTI Ratio Matters</h3>
            <p className="text-sm text-gray-600">
              Lenders assess your debt-to-income ratio strictly. Keep total debts below 43% of gross income for best approval chances.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
            <div className="text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Every Payment Counts</h3>
            <p className="text-sm text-gray-600">
              Student loans reduce your borrowing capacity. A £150/month payment can reduce your maximum property price by £30,000-40,000.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
            <div className="text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Plan Ahead</h3>
            <p className="text-sm text-gray-600">
              Understanding your borrowing capacity helps you set realistic property goals and save an appropriate deposit amount.
            </p>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">How Mortgage Eligibility Works</h2>

          <div className="prose prose-blue max-w-none">
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Understanding Debt-to-Income Ratio</h3>
            <p className="text-gray-700 mb-4">
              The debt-to-income (DTI) ratio is one of the most important factors lenders consider when assessing mortgage applications. It measures the percentage of your gross monthly income that goes toward debt payments.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">DTI Calculation:</p>
              <p className="text-sm text-gray-700">
                (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">What Counts as Debt?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Student loan repayments:</strong> Monthly Plan 1, 2, 4, or 5 repayments</li>
              <li><strong>Credit cards:</strong> Minimum monthly payments</li>
              <li><strong>Car loans:</strong> Monthly payment amount</li>
              <li><strong>Personal loans:</strong> Monthly installments</li>
              <li><strong>Other mortgages:</strong> If you own other properties</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">DTI Thresholds</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-4">
                  <span className="text-sm font-bold text-green-600">Under 36%</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Excellent - You should have no trouble qualifying for a mortgage with competitive rates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-4">
                  <span className="text-sm font-bold text-blue-600">36-43%</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Good - Most lenders will approve, though you may face some limitations
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-4">
                  <span className="text-sm font-bold text-orange-600">43-50%</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Challenging - Few lenders accept this level; you may need specialist advisors
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-4">
                  <span className="text-sm font-bold text-red-600">Over 50%</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    Poor - Very difficult to obtain mortgage approval; focus on reducing debt first
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Real Example</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-gray-800 mb-2">Sarah earns £40,000 per year:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Monthly gross income: £3,333</li>
                <li>• Student loan payment: £150/month</li>
                <li>• Car loan: £200/month</li>
                <li>• Credit card minimum: £50/month</li>
                <li>• Total monthly debt: £400</li>
                <li>• DTI ratio: 12%</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3">
                With a 43% DTI limit, Sarah can afford up to £1,433/month in total debt payments. After existing debts (£400), she has £1,033 available for mortgage payments.
              </p>
              <p className="text-sm font-semibold text-gray-800 mt-3">
                At 5.5% over 25 years, she can borrow approximately £180,000. With a £30,000 deposit, her maximum property price is around £210,000.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Impact of Student Loans</h3>
            <p className="text-gray-700 mb-4">
              Student loan repayments directly reduce your mortgage borrowing capacity. Here is how different monthly student loan payments affect a borrower earning £40,000:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Student Loan Payment</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Available for Mortgage</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Max Borrowing</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Impact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-gray-900">£0/month</td>
                    <td className="px-4 py-2 text-right text-gray-900">£1,433</td>
                    <td className="px-4 py-2 text-right text-gray-900">£250,000</td>
                    <td className="px-4 py-2 text-right text-gray-900">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-gray-900">£100/month</td>
                    <td className="px-4 py-2 text-right text-gray-900">£1,333</td>
                    <td className="px-4 py-2 text-right text-gray-900">£233,000</td>
                    <td className="px-4 py-2 text-right text-red-600">-£17,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900">£200/month</td>
                    <td className="px-4 py-2 text-right text-gray-900">£1,233</td>
                    <td className="px-4 py-2 text-right text-gray-900">£215,000</td>
                    <td className="px-4 py-2 text-right text-red-600">-£35,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-gray-900">£300/month</td>
                    <td className="px-4 py-2 text-right text-gray-900">£1,133</td>
                    <td className="px-4 py-2 text-right text-gray-900">£198,000</td>
                    <td className="px-4 py-2 text-right text-red-600">-£52,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Improving Your Mortgage Eligibility</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Increase your income:</strong> Side hustles or career progression improve your DTI ratio</li>
              <li><strong>Pay down other debts:</strong> Focus on high-interest credit cards and loans first</li>
              <li><strong>Save a larger deposit:</strong> Reduces the mortgage amount needed</li>
              <li><strong>Consider a longer term:</strong> Extends payments but reduces monthly amount</li>
              <li><strong>Improve credit score:</strong> May qualify you for better rates</li>
              <li><strong>Use a mortgage broker:</strong> They know which lenders are more flexible</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Important Considerations</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>This calculator provides estimates. Actual approval depends on many factors including credit score, employment history, and property location.</li>
              <li>Student loan repayments may increase if your salary grows, but lenders typically assess based on current payments.</li>
              <li>Some lenders may be more flexible with student loans than others. A mortgage broker can help find the best deals.</li>
              <li>Remember to budget for additional costs: surveys, legal fees, stamp duty, moving costs, and home maintenance.</li>
              <li>Consider future expenses like children, career changes, or potential interest rate increases when determining affordability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tips for First-Time Buyers with Student Loans</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">💰</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Start Saving Early</h3>
                <p className="text-sm text-gray-600">
                  Even with student loans, building a deposit is crucial. Consider Help to Buy ISAs or Lifetime ISAs for government bonuses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">📊</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Check Your Credit Score</h3>
                <p className="text-sm text-gray-600">
                  Student loans appear on credit reports but do not negatively affect scores if paid on time. Keep other credit accounts in good standing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">🏠</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Be Realistic</h3>
                <p className="text-sm text-gray-600">
                  Your maximum borrowing is not always your comfortable borrowing. Leave room in your budget for emergencies and lifestyle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">🤝</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Consider Joint Applications</h3>
                <p className="text-sm text-gray-600">
                  Buying with a partner or friend can increase borrowing capacity, but both applicants&apos; debts count toward the DTI ratio.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">📝</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Use a Mortgage Broker</h3>
                <p className="text-sm text-gray-600">
                  Brokers understand which lenders are more lenient with student loans and can find better deals than going direct.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">⏰</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Time Your Purchase</h3>
                <p className="text-sm text-gray-600">
                  If you are close to paying off other debts, waiting a few months can significantly improve your borrowing capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Ready to Explore More?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Check out our other calculators to understand your complete financial picture
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Part-Time Earnings Calculator
          </button>
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Salary Growth Calculator
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700">
                <strong>Important:</strong> This calculator provides estimates only. Actual mortgage approval depends on many factors including credit score, employment history, property type, and lender criteria. Always consult with a qualified mortgage advisor or broker for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}