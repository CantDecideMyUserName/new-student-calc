"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "plan1" | "plan2" | "plan5" | "postgrad";

type InvestmentScenario = {
  monthlyAmount: number;
  investmentReturn: number;
  timeHorizon: number;
  totalInvested: number;
  finalInvestmentValue: number;
  investmentGain: number;
  loanSavingsFromOverpay: number;
  netBenefit: number;
  recommendation: "invest" | "overpay" | "neutral";
};

// Loan plan configurations
const LOAN_PLANS = {
  plan1: {
    name: "Plan 1",
    threshold: 22_015,
    rate: 0.09,
    interestRate: 0.046, // Typical current rate
    writeOffYears: 25,
    description: "Pre-2012 students (England/Wales), Northern Ireland"
  },
  plan2: {
    name: "Plan 2", 
    threshold: 27_295,
    rate: 0.09,
    interestRate: 0.067, // RPI + up to 3%
    writeOffYears: 30,
    description: "2012-2023 students (England/Wales)"
  },
  plan5: {
    name: "Plan 5",
    threshold: 25_000,
    rate: 0.09,
    interestRate: 0.046, // RPI only
    writeOffYears: 40,
    description: "2023+ students (England/Wales)"
  },
  postgrad: {
    name: "Postgraduate",
    threshold: 21_000,
    rate: 0.06,
    interestRate: 0.076, // RPI + 3%
    writeOffYears: 30,
    description: "Postgraduate loans"
  }
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtPercent = (n: number, dp = 1) =>
  `${(n * 100).toFixed(dp)}%`;

// Simplified loan overpayment benefit calculation
function calculateOverpaymentBenefit(
  currentBalance: number,
  monthlyOverpay: number,
  loanPlan: LoanPlan,
  timeHorizon: number,
  currentSalary: number
): number {
  const plan = LOAN_PLANS[loanPlan];
  const monthlyRequired = Math.max(0, (currentSalary - plan.threshold) * plan.rate / 12);
  const monthlyRate = plan.interestRate / 12;
  
  let balanceWithOverpay = currentBalance;
  let balanceWithoutOverpay = currentBalance;
  let totalSaved = 0;
  
  const maxMonths = Math.min(timeHorizon * 12, plan.writeOffYears * 12);
  
  for (let month = 0; month < maxMonths; month++) {
    // Scenario with overpayment
    if (balanceWithOverpay > 0) {
      const interestWithOverpay = balanceWithOverpay * monthlyRate;
      balanceWithOverpay += interestWithOverpay;
      const paymentWithOverpay = Math.min(balanceWithOverpay, monthlyRequired + monthlyOverpay);
      balanceWithOverpay -= paymentWithOverpay;
    }
    
    // Scenario without overpayment
    if (balanceWithoutOverpay > 0) {
      const interestWithoutOverpay = balanceWithoutOverpay * monthlyRate;
      balanceWithoutOverpay += interestWithoutOverpay;
      const paymentWithoutOverpay = Math.min(balanceWithoutOverpay, monthlyRequired);
      balanceWithoutOverpay -= paymentWithoutOverpay;
      
      // Calculate savings from overpayment this month
      if (balanceWithOverpay <= 0 && balanceWithoutOverpay > 0) {
        totalSaved += paymentWithoutOverpay;
      }
    }
  }
  
  // Add any remaining balance difference (if loan would be written off)
  if (balanceWithoutOverpay > 0 && balanceWithOverpay <= 0) {
    totalSaved += balanceWithoutOverpay;
  }
  
  return Math.max(0, totalSaved);
}

// Investment growth calculation
function calculateInvestmentGrowth(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
): { totalInvested: number; finalValue: number; gain: number } {
  const monthlyReturn = annualReturn / 12;
  const months = years * 12;
  
  let totalInvested = 0;
  let currentValue = 0;
  
  for (let month = 0; month < months; month++) {
    totalInvested += monthlyInvestment;
    currentValue = (currentValue + monthlyInvestment) * (1 + monthlyReturn);
  }
  
  return {
    totalInvested,
    finalValue: currentValue,
    gain: currentValue - totalInvested
  };
}

export default function InvestmentVsOverpaymentCalculatorPage() {
  const [monthlyAmount, setMonthlyAmount] = useState(200);
  const [currentSalary, setCurrentSalary] = useState(35_000);
  const [loanBalance, setLoanBalance] = useState(25_000);
  const [loanPlan, setLoanPlan] = useState<LoanPlan>("plan2");
  const [timeHorizon, setTimeHorizon] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(0.06); // 6% annual return
  const [riskTolerance, setRiskTolerance] = useState<"conservative" | "moderate" | "aggressive">("moderate");

  // Preset return rates based on risk tolerance
  const returnRates = {
    conservative: { rate: 0.04, description: "Cash ISA / Government bonds" },
    moderate: { rate: 0.06, description: "Mixed portfolio (stocks & bonds)" },
    aggressive: { rate: 0.08, description: "Growth stocks / Equity ISA" }
  };

  const scenario = useMemo((): InvestmentScenario => {
    const investment = calculateInvestmentGrowth(monthlyAmount, expectedReturn, timeHorizon);
    const loanSavings = calculateOverpaymentBenefit(
      loanBalance,
      monthlyAmount,
      loanPlan,
      timeHorizon,
      currentSalary
    );
    
    const netBenefit = investment.gain - loanSavings;
    
    let recommendation: "invest" | "overpay" | "neutral" = "neutral";
    if (netBenefit > investment.totalInvested * 0.02) { // 2% threshold
      recommendation = "invest";
    } else if (netBenefit < -investment.totalInvested * 0.02) {
      recommendation = "overpay";
    }
    
    return {
      monthlyAmount,
      investmentReturn: expectedReturn,
      timeHorizon,
      totalInvested: investment.totalInvested,
      finalInvestmentValue: investment.finalValue,
      investmentGain: investment.gain,
      loanSavingsFromOverpay: loanSavings,
      netBenefit,
      recommendation
    };
  }, [monthlyAmount, currentSalary, loanBalance, loanPlan, timeHorizon, expectedReturn]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Investment vs Overpayment</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Investment vs Student Loan Overpayment Calculator</h1>
          <p className="text-xl text-gray-600">
            Should you invest extra money or use it to overpay your student loan? Compare the potential returns to make the best financial decision.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-yellow-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Important Considerations</h3>
                  <p className="text-sm text-gray-600">
                    This calculator provides estimates only. Consider your personal circumstances, emergency fund, and risk tolerance. Seek professional financial advice for complex situations.
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Amount */}
            <div>
              <label htmlFor="monthly-amount" className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Amount Available
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="monthly-amount"
                  min={10}
                  max={2000}
                  step={10}
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={50}
                  max={1000}
                  step={25}
                  value={Math.min(1000, monthlyAmount)}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                How much extra money do you have available each month?
              </p>
            </div>

            {/* Current Salary */}
            <div>
              <label htmlFor="current-salary" className="block text-sm font-medium text-gray-700 mb-1">
                Current Annual Salary
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="current-salary"
                  min={0}
                  max={200000}
                  step={1000}
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Used to calculate your current loan repayments
              </p>
            </div>

            {/* Loan Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="loan-balance" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Loan Balance
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">£</span>
                  <input
                    type="number"
                    id="loan-balance"
                    min={0}
                    max={150000}
                    step={1000}
                    value={loanBalance}
                    onChange={(e) => setLoanBalance(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="loan-plan" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Plan
                </label>
                <select
                  id="loan-plan"
                  value={loanPlan}
                  onChange={(e) => setLoanPlan(e.target.value as LoanPlan)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                    <option key={key} value={key}>
                      {plan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Horizon */}
            <div>
              <label htmlFor="time-horizon" className="block text-sm font-medium text-gray-700 mb-1">
                Time Horizon (Years)
              </label>
              <input
                type="number"
                id="time-horizon"
                min={1}
                max={40}
                step={1}
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value || 1))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">
                How long do you plan to invest/overpay for?
              </p>
            </div>

            {/* Risk Tolerance & Expected Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Risk Tolerance
              </label>
              <div className="space-y-2">
                {Object.entries(returnRates).map(([key, option]) => (
                  <label key={key} className="flex items-center">
                    <input
                      type="radio"
                      name="risk-tolerance"
                      value={key}
                      checked={riskTolerance === key}
                      onChange={(e) => {
                        setRiskTolerance(e.target.value as typeof riskTolerance);
                        setExpectedReturn(option.rate);
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm">
                      <span className="font-medium capitalize">{key}</span> - {fmtPercent(option.rate)} ({option.description})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Custom Return Rate */}
            <details className="mt-4">
              <summary className="text-sm text-gray-600 cursor-pointer">Custom Expected Return</summary>
              <div className="mt-2">
                <label htmlFor="expected-return" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Investment Return
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="expected-return"
                    min={0}
                    max={20}
                    step={0.1}
                    value={(expectedReturn * 100).toFixed(1)}
                    onChange={(e) => setExpectedReturn(Number(e.target.value) / 100)}
                    className="block w-28 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-600">%</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Historical stock market average is around 7-8% annually
                </p>
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Recommendation */}
            <div className={`p-6 rounded-xl ${
              scenario.recommendation === 'invest' ? 'bg-green-50 border border-green-200' :
              scenario.recommendation === 'overpay' ? 'bg-blue-50 border border-blue-200' :
              'bg-gray-50 border border-gray-200'
            }`}>
              <h2 className="text-xl font-semibold mb-4">
                {scenario.recommendation === 'invest' ? '📈 Recommendation: Invest' :
                 scenario.recommendation === 'overpay' ? '💰 Recommendation: Overpay Loan' :
                 '⚖️ Both Options Similar'}
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Investment Growth (after {timeHorizon} years):</span>
                  <span className="font-semibold text-green-600">{fmtMoney(scenario.investmentGain)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Interest Saved:</span>
                  <span className="font-semibold text-blue-600">{fmtMoney(scenario.loanSavingsFromOverpay)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                  <span>Net Benefit of Investing:</span>
                  <span className={scenario.netBenefit >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {scenario.netBenefit >= 0 ? '+' : ''}{fmtMoney(scenario.netBenefit)}
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Breakdown</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Investment Scenario */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Investment Scenario
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly investment:</span>
                      <span>{fmtMoney(monthlyAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total invested:</span>
                      <span>{fmtMoney(scenario.totalInvested)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected return:</span>
                      <span>{fmtPercent(expectedReturn)}/year</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-800">Final value:</span>
                      <span className="text-green-600">{fmtMoney(scenario.finalInvestmentValue)}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-800">Total gain:</span>
                      <span className="text-green-600">{fmtMoney(scenario.investmentGain)}</span>
                    </div>
                  </div>
                </div>

                {/* Overpayment Scenario */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Overpayment Scenario
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly overpayment:</span>
                      <span>{fmtMoney(monthlyAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total overpaid:</span>
                      <span>{fmtMoney(scenario.totalInvested)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan interest rate:</span>
                      <span>{fmtPercent(LOAN_PLANS[loanPlan].interestRate)}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-800">Interest saved:</span>
                      <span className="text-blue-600">{fmtMoney(scenario.loanSavingsFromOverpay)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Plus early payoff benefits</span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Loan Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Your {LOAN_PLANS[loanPlan].name} Loan</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Threshold: {fmtMoney(LOAN_PLANS[loanPlan].threshold)}</div>
                <div>Current repayment: {fmtMoney(Math.max(0, (currentSalary - LOAN_PLANS[loanPlan].threshold) * LOAN_PLANS[loanPlan].rate / 12))}/month</div>
                <div>Interest rate: {fmtPercent(LOAN_PLANS[loanPlan].interestRate)}</div>
                <div>Write-off: {LOAN_PLANS[loanPlan].writeOffYears} years after graduation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/student-loan-overpayment-calculator/"
          >
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate loan overpayment benefits</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/student-loan-income-comparison/"
          >
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Income Comparison</h3>
              <p className="text-sm text-gray-600">Compare repayments across salaries</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Plan 2 Calculator</h3>
              <p className="text-sm text-gray-600">Detailed Plan 2 calculations</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Educational Content */}
      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2>Investment vs Student Loan Overpayment: Making the Right Choice</h2>
        <p>
          Deciding whether to invest extra money or use it to overpay your student loan is one of the most common financial 
          dilemmas for graduates. This calculator helps you compare the potential outcomes of both strategies.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="key-factors">
            <AccordionTrigger>Key Factors to Consider</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Interest Rates</h4>
                  <p>Compare your loan&apos;s interest rate with potential investment returns. If you can consistently earn more than your loan&apos;s interest rate, investing may be better.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Risk Tolerance</h4>
                  <p>Investments carry risk - their value can go down as well as up. Overpaying your loan provides guaranteed savings equal to the interest rate.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Write-off Possibility</h4>
                  <p>If your loan is likely to be written off, overpaying may not be beneficial. Plan 1 (25 years) and Plan 2 (30 years) loans are often written off.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Tax Considerations</h4>
                  <p>Use ISAs to shelter investment gains from tax. You pay loan repayments from post-tax income, while investment returns in ISAs are tax-free.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="when-invest">
            <AccordionTrigger>When to Consider Investing Instead</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li><strong>Low loan interest rates:</strong> Plan 1 and Plan 5 loans often have lower rates</li>
                <li><strong>High earning potential:</strong> If you expect significant salary growth</li>
                <li><strong>Long time horizon:</strong> Investments typically outperform over longer periods</li>
                <li><strong>Emergency fund in place:</strong> Only invest surplus money after building emergency savings</li>
                <li><strong>Employer pension matching:</strong> Always maximize employer contributions first</li>
                <li><strong>Likely loan write-off:</strong> If your loan will probably be forgiven</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="when-overpay">
            <AccordionTrigger>When to Consider Overpaying Your Loan</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li><strong>High loan interest rates:</strong> Plan 2 and Postgraduate loans can have higher rates</li>
                <li><strong>Risk aversion:</strong> You prefer guaranteed returns over market volatility</li>
                <li><strong>Large loan balance:</strong> Unlikely to be written off, so overpaying saves real money</li>
                <li><strong>High current income:</strong> Making substantial monthly repayments already</li>
                <li><strong>Peace of mind:</strong> Being debt-free has psychological benefits</li>
                <li><strong>Short career:</strong> Planning early retirement or career break</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hybrid-approach">
            <AccordionTrigger>The Hybrid Approach</AccordionTrigger>
            <AccordionContent>
              <p>You don&apos;t have to choose just one strategy. Consider:</p>
              <ul>
                <li><strong>Split your surplus:</strong> Put some toward loans, some toward investments</li>
                <li><strong>Prioritize by interest rates:</strong> Overpay high-interest debt first, then invest</li>
                <li><strong>Change over time:</strong> Start with overpayments, then switch to investing</li>
                <li><strong>Use windfalls wisely:</strong> Use bonuses for overpayments, regular surplus for investing</li>
                <li><strong>Tax year planning:</strong> Maximize ISA allowances while making strategic overpayments</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="limitations">
            <AccordionTrigger>Calculator Limitations & Professional Advice</AccordionTrigger>
            <AccordionContent>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-sm"><strong>Important:</strong> This calculator provides estimates based on assumptions and cannot account for all personal circumstances.</p>
              </div>
              <h4 className="font-semibold mb-2">What this calculator doesn&apos;t include:</h4>
              <ul>
                <li>Tax implications of investments</li>
                <li>Inflation effects</li>
                <li>Changing interest rates over time</li>
                <li>Salary growth and career changes</li>
                <li>Emergency fund requirements</li>
                <li>Other debts and financial goals</li>
              </ul>
              <p className="mt-4">For complex situations or significant amounts of money, consider consulting with a qualified financial advisor who can provide personalized advice based on your complete financial picture.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need more detailed loan analysis?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our comprehensive loan calculators to see your complete repayment timeline and understand all your options.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/student-loan-overpayment-calculator/"
          >
            Overpayment Calculator
          </Link>
          <Link
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            Loan Calculator
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="max-w-4xl mx-auto">
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
          <li><span className="font-medium text-gray-800" aria-current="page">Investment vs Overpayment</span></li>
        </ol>
      </nav>
    </div>
  );
}