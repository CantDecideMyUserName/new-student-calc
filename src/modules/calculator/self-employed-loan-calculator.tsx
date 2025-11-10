"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlanDetails = {
  name: string;
  threshold: number;
  rate: number;
  description: string;
};

type RepaymentResult = {
  taxableIncome: number;
  incomeAboveThreshold: number;
  annualRepayment: number;
  monthlyRepayment: number;
  effectiveRate: number;
  aboveThreshold: boolean;
  planDetails: PlanDetails;
  paymentOnAccount1: number;
  paymentOnAccount2: number;
};

const LOAN_PLANS: Record<string, PlanDetails> = {
  plan1: { name: "Plan 1", threshold: 22015, rate: 0.09, description: "Pre-2012 England/Wales or Northern Ireland" },
  plan2: { name: "Plan 2", threshold: 27295, rate: 0.09, description: "2012-2023 England/Wales" },
  plan4: { name: "Plan 4", threshold: 31395, rate: 0.09, description: "Scotland" },
  plan5: { name: "Plan 5", threshold: 25000, rate: 0.09, description: "2023+ England/Wales" },
  postgrad: { name: "Postgraduate", threshold: 21000, rate: 0.06, description: "Masters/PhD loans" },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp = 1) => `${(n * 100).toFixed(dp)}%`;

function calculateSelfEmployedRepayment({
  taxableIncome,
  planType,
}: {
  taxableIncome: number;
  planType: string;
}): RepaymentResult {
  const plan = LOAN_PLANS[planType];
  const incomeAboveThreshold = Math.max(0, taxableIncome - plan.threshold);
  const annualRepayment = incomeAboveThreshold * plan.rate;
  const monthlyRepayment = annualRepayment / 12;
  const effectiveRate = taxableIncome > 0 ? annualRepayment / taxableIncome : 0;
  const aboveThreshold = taxableIncome >= plan.threshold;
  const paymentOnAccount1 = annualRepayment / 2;
  const paymentOnAccount2 = annualRepayment / 2;

  return {
    taxableIncome,
    incomeAboveThreshold,
    annualRepayment,
    monthlyRepayment,
    effectiveRate,
    aboveThreshold,
    planDetails: plan,
    paymentOnAccount1,
    paymentOnAccount2,
  };
}

export default function SelfEmployedCalculator() {
  const [taxableIncome, setTaxableIncome] = useState(35000);
  const [planType, setPlanType] = useState("plan2");
  const [showTimeline, setShowTimeline] = useState(false);

  const selectedPlan = LOAN_PLANS[planType];

  const result = useMemo(
    () => calculateSelfEmployedRepayment({ taxableIncome, planType }),
    [taxableIncome, planType]
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Self-Employed Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Self-Employed Student Loan Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your student loan repayments when self-employed through Self Assessment
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-indigo-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Self Assessment</h3>
                  <p className="text-sm text-gray-600">
                    Self-employed individuals pay student loan repayments through Self Assessment based on annual profits.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                Annual Taxable Income (Profits)
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="income"
                  min={0}
                  max={200000}
                  step={1000}
                  value={taxableIncome}
                  onChange={(e) => setTaxableIncome(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, taxableIncome)}
                  onChange={(e) => setTaxableIncome(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Your total taxable profits after allowable expenses
              </p>
            </div>

            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Plan Type
              </label>
              <select
                id="plan"
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                  <option key={key} value={key}>
                    {plan.name} - {plan.description}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Threshold: {fmtMoney(selectedPlan.threshold)} | Rate: {fmtPercent(selectedPlan.rate)}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Income Levels
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[20000, 30000, 45000, 60000].map((value) => (
                  <button
                    key={value}
                    onClick={() => setTaxableIncome(value)}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
                  >
                    {fmtMoney(value, 0)}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-amber-700">
                    <strong>Remember:</strong> Use your taxable profits, not turnover. Deduct all allowable business expenses first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Repayment Obligation</h2>

            <div className="space-y-4">
              {result.aboveThreshold ? (
                <>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-orange-800">Repayment Due</p>
                        <p className="text-sm text-orange-700 mt-1">Your income exceeds the threshold</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                    <p className="text-sm text-gray-500">Total Annual Repayment</p>
                    <p className="text-3xl font-bold text-indigo-600">{fmtMoney(result.annualRepayment, 0)}</p>
                    <p className="text-sm text-gray-500 mt-1">Due through Self Assessment</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500">Average Monthly Amount</p>
                    <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.monthlyRepayment, 0)}</p>
                    <p className="text-sm text-gray-500">For budgeting purposes</p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <p className="text-sm text-gray-500">Income Above Threshold</p>
                    <p className="text-xl font-bold text-gray-800">{fmtMoney(result.incomeAboveThreshold, 0)}</p>
                    <p className="text-sm text-gray-500">Threshold: {fmtMoney(result.planDetails.threshold)}</p>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Payment Schedule</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>1st payment on account:</span>
                        <span className="font-medium">{fmtMoney(result.paymentOnAccount1, 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2nd payment on account:</span>
                        <span className="font-medium">{fmtMoney(result.paymentOnAccount2, 0)}</span>
                      </div>
                      <div className="flex justify-between border-t border-indigo-200 pt-1 mt-1">
                        <span>Total annual:</span>
                        <span className="font-medium">{fmtMoney(result.annualRepayment, 0)}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-green-800">No Repayment Due</p>
                        <p className="text-sm text-green-700 mt-1">Your income is below the threshold</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-gray-300">
                    <p className="text-sm text-gray-500">Annual Repayment</p>
                    <p className="text-3xl font-bold text-gray-800">£0</p>
                    <p className="text-sm text-gray-500 mt-1">Below {fmtMoney(result.planDetails.threshold)}</p>
                  </div>

                  <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">To start making repayments:</p>
                    <p>You need {fmtMoney(result.planDetails.threshold - taxableIncome)} more annual income</p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {showTimeline ? "Hide" : "Show"} Payment Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      {showTimeline && (
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Self Assessment Payment Timeline</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">Tax Year Example</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-sm font-medium text-gray-700">5 April</div>
                  <div className="flex-1 border-l-2 border-indigo-300 pl-4 pb-4">
                    <p className="text-sm font-semibold text-gray-800">Tax Year Ends</p>
                    <p className="text-sm text-gray-600 mt-1">Your tax year concludes. Start preparing accounts.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-sm font-medium text-gray-700">31 January</div>
                  <div className="flex-1 border-l-2 border-indigo-300 pl-4 pb-4">
                    <p className="text-sm font-semibold text-gray-800">Filing Deadline</p>
                    <p className="text-sm text-gray-600 mt-1">File return and pay balancing payment plus 1st payment on account</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-sm font-medium text-gray-700">31 July</div>
                  <div className="flex-1 border-l-2 border-indigo-300 pl-4">
                    <p className="text-sm font-semibold text-gray-800">2nd Payment</p>
                    <p className="text-sm text-gray-600 mt-1">Pay second payment on account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Self-Employed vs Employed</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-indigo-500">
            <h3 className="font-semibold text-gray-800 mb-4">Self-Employed</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Pay through Self Assessment annually</li>
              <li>• Based on taxable profits after expenses</li>
              <li>• Payment split into two installments</li>
              <li>• Delayed payment following tax year</li>
              <li>• Must track and calculate yourself</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
            <h3 className="font-semibold text-gray-800 mb-4">Employed (PAYE)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Deducted automatically from salary</li>
              <li>• Based on gross salary before tax</li>
              <li>• Paid monthly through payroll</li>
              <li>• Immediate payment as you earn</li>
              <li>• Employer handles calculations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Explore More Calculators</h2>
        <p className="mb-6 opacity-90">Understand your complete student loan picture</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            Part-Time Earnings
          </button>
          <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            Salary Growth Impact
          </button>
        </div>
      </section>

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
                <strong>Disclaimer:</strong> This calculator provides estimates for planning. Actual repayments calculated by HMRC through Self Assessment. Consult an accountant for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}