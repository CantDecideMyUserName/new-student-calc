"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

/** -----------------------
 *  Plan definitions (update thresholds/assumptions each tax year)
 *  ----------------------*/
type PlanKey = "plan1" | "plan2" | "plan4" | "plan5" | "postgrad";

type PlanSpec = {
  label: string;
  thresholdAnnual: number; // current annual threshold
  repayRate: number;       // 0.09 for UG plans, 0.06 for PGL
  writeOffYearsFromApril: number; // years from the April after graduation
  // Assumed nominal annual interest used for forward simulation.
  // (Real systems vary by RPI/BkRate/income band; keep editable in UI.)
  assumedAnnualInterest: number; // e.g. 0.046 = 4.6%
};

const PLANS: Record<PlanKey, PlanSpec> = {
  plan1: {
    label: "Plan 1 (Pre-2012)",
    thresholdAnnual: 22015,
    repayRate: 0.09,
    writeOffYearsFromApril: 25,
    assumedAnnualInterest: 0.046, // “lower of RPI or Base+1%” – editable
  },
  plan2: {
    label: "Plan 2 (2012–2023)",
    thresholdAnnual: 27295,
    repayRate: 0.09,
    writeOffYearsFromApril: 30,
    assumedAnnualInterest: 0.075, // varies by income (RPI→RPI+3) – editable
  },
  plan4: {
    label: "Plan 4 (Scotland)",
    thresholdAnnual: 31395,
    repayRate: 0.09,
    writeOffYearsFromApril: 30,
    assumedAnnualInterest: 0.046, // similar to Plan 1 style – editable
  },
  plan5: {
    label: "Plan 5 (2023+)",
    thresholdAnnual: 25000,
    repayRate: 0.09,
    writeOffYearsFromApril: 40,
    assumedAnnualInterest: 0.03, // RPI-only – editable
  },
  postgrad: {
    label: "Postgraduate Loan",
    thresholdAnnual: 21000,
    repayRate: 0.06,
    writeOffYearsFromApril: 30,
    assumedAnnualInterest: 0.09, // typically RPI+3 – editable
  },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const monthName = (m: number) =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m];

function aprilAfterGraduation(graduationYear: number) {
  // start of repayment: April (month index 3) after graduation year
  return new Date(graduationYear + 1, 3, 1);
}

function writeOffDateFor(plan: PlanSpec, graduationYear: number) {
  const start = aprilAfterGraduation(graduationYear);
  return new Date(start.getFullYear() + plan.writeOffYearsFromApril, start.getMonth(), 1);
}

type SimOut = {
  totalRepaid: number;
  totalInterest: number;
  amountWrittenOff: number;
  paidOff: boolean;
  payoffDate?: string;
  writeOffDate: string;
};

/** Core monthly simulation:
 * - Salary grows annually by growth% each April (same month repayments start).
 * - Monthly repayment = repayRate * max(0, (current annual salary - threshold)) / 12
 * - Interest accrues monthly at assumedAnnualInterest / 12 on outstanding balance.
 * - Runs until payoff or plan write-off date.
 */
function simulateLoan({
  plan,
  graduationYear,
  startSalary,
  annualGrowthPct,
  startingBalance,
  assumedAnnualInterest,
}: {
  plan: PlanSpec;
  graduationYear: number;
  startSalary: number;
  annualGrowthPct: number; // e.g. 0.02 = 2%
  startingBalance: number;
  assumedAnnualInterest: number;
}): SimOut {
  const start = aprilAfterGraduation(graduationYear);
  const end = writeOffDateFor(plan, graduationYear);
  const monthsCap =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  let balance = Math.max(0, startingBalance);
  let totalRepaid = 0;
  let totalInterest = 0;

  const monthlyRate = Math.max(0, assumedAnnualInterest) / 12;

  for (let m = 0; m < monthsCap && balance > 0; m++) {
    // years elapsed since start (April)
    const yearsElapsed = Math.floor(m / 12);
    const currentAnnualSalary = startSalary * Math.pow(1 + annualGrowthPct, yearsElapsed);

    const monthlyRequired =
      Math.max(0, (currentAnnualSalary - plan.thresholdAnnual)) * plan.repayRate / 12;

    // interest first
    const interest = balance * monthlyRate;
    totalInterest += interest;
    balance += interest;

    // then payment (capped at remaining balance)
    const pay = Math.min(balance, monthlyRequired);
    balance -= pay;
    totalRepaid += pay;

    // continue
    if (balance <= 0) {
      const payoff = new Date(start);
      payoff.setMonth(start.getMonth() + (m + 1));
      return {
        totalRepaid,
        totalInterest,
        amountWrittenOff: 0,
        paidOff: true,
        payoffDate: `${monthName(payoff.getMonth())} ${payoff.getFullYear()}`,
        writeOffDate: `${monthName(end.getMonth())} ${end.getFullYear()}`,
      };
    }
  }

  // Not cleared by write-off date
  const amountWrittenOff = Math.max(0, balance);
  return {
    totalRepaid,
    totalInterest,
    amountWrittenOff,
    paidOff: false,
    writeOffDate: `${monthName(end.getMonth())} ${end.getFullYear()}`,
  };
}

export default function TotalLoanCostCalculatorPage() {
  // Inputs
  const [planKey, setPlanKey] = useState<PlanKey>("plan2");
  const [loanAmount, setLoanAmount] = useState(45_000);
  const [startingSalary, setStartingSalary] = useState(30_000);
  const [gradYear, setGradYear] = useState(2023);
  const [growthSel, setGrowthSel] = useState<string>("2"); // "0".."5" | "custom"
  const [customGrowth, setCustomGrowth] = useState("2.0"); // as %
  const [assumedAnnualInterest, setAssumedAnnualInterest] = useState<number>(
    PLANS["plan2"].assumedAnnualInterest
  );

  const plan = PLANS[planKey];

  // keep assumed interest in sync with plan choice (but allow overwrite)
  // only when the plan actually changes
  const [lastPlan, setLastPlan] = useState<PlanKey>("plan2");
  if (lastPlan !== planKey) {
    setAssumedAnnualInterest(PLANS[planKey].assumedAnnualInterest);
    setLastPlan(planKey);
  }

  const growthPct =
    growthSel === "custom"
      ? Math.max(-0.5, Math.min(0.5, parseFloat(customGrowth || "0") / 100))
      : Number(growthSel) / 100;

  const sim = useMemo(
    () =>
      simulateLoan({
        plan,
        graduationYear: gradYear,
        startSalary: Math.max(0, startingSalary),
        annualGrowthPct: growthPct,
        startingBalance: Math.max(0, loanAmount),
        assumedAnnualInterest: Math.max(0, assumedAnnualInterest),
      }),
    [plan, gradYear, startingSalary, growthPct, loanAmount, assumedAnnualInterest]
  );

  const years = Array.from({ length: 25 }, (_, i) => 2000 + i); // 2000..2024

  const totalBorrowed = Math.max(0, loanAmount);
  const verdict =
    sim.paidOff
      ? "Based on your inputs, you’re projected to clear the loan before the write-off date."
      : "Based on your inputs, you’re projected to have part of the balance written off.";

  // proportions for simple viz
  const repaid = sim.totalRepaid;
  const writtenOff = sim.amountWrittenOff;

  const barTotal = repaid + writtenOff; // amounts accounted for at end of term
  const repaidPct = barTotal > 0 ? (repaid / barTotal) * 100 : 0;
  const writeOffPct = barTotal > 0 ? (writtenOff / barTotal) * 100 : 0;

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
              <li><span className="font-medium text-gray-800" aria-current="page">Total Cost Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Total Student Loan Cost Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Estimate how much you&apos;ll pay over the entire lifetime of your student loan and
            see if you&apos;ll repay it in full.
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
                  <h3 className="text-sm font-semibold text-gray-800">About Total Cost Calculation</h3>
                  <p className="text-sm text-gray-600">
                    This calculator estimates how much you&apos;ll repay over the loan&apos;s lifetime
                    (including interest) and whether you clear it or see a write-off.
                  </p>
                </div>
              </div>
            </div>

            {/* Plan */}
            <div>
              <label htmlFor="loan-plan" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Plan
              </label>
              <select
                id="loan-plan"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={planKey}
                onChange={(e) => setPlanKey(e.target.value as PlanKey)}
              >
                <option value="plan1">{PLANS.plan1.label}</option>
                <option value="plan2">{PLANS.plan2.label}</option>
                <option value="plan4">{PLANS.plan4.label}</option>
                <option value="plan5">{PLANS.plan5.label}</option>
                <option value="postgrad">{PLANS.postgrad.label}</option>
              </select>
            </div>

            {/* Loan amount */}
            <div>
              <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                Total Loan Amount
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="loan-amount"
                  min={1000}
                  max={150000}
                  step={1000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Starting salary */}
            <div>
              <label htmlFor="starting-salary" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Salary
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="starting-salary"
                  min={0}
                  max={250000}
                  step={1000}
                  value={startingSalary}
                  onChange={(e) => setStartingSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={150000}
                  step={1000}
                  value={Math.min(150000, startingSalary)}
                  onChange={(e) => setStartingSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Salary growth */}
            <div>
              <label htmlFor="salary-growth" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Annual Salary Growth
              </label>
              <div className="flex items-center">
                <select
                  id="salary-growth"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value={growthSel}
                  onChange={(e) => setGrowthSel(e.target.value)}
                >
                  <option value="0">0% (No growth)</option>
                  <option value="1">1% per year</option>
                  <option value="2">2% per year</option>
                  <option value="3">3% per year</option>
                  <option value="4">4% per year</option>
                  <option value="5">5% per year</option>
                  <option value="custom">Custom (%)</option>
                </select>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Estimated average annual increase (applied each April).
              </p>

              {growthSel === "custom" && (
                <div className="mt-2">
                  <label className="block text-xs text-gray-600 mb-1">Custom growth (%)</label>
                  <input
                    type="number"
                    step={0.1}
                    value={customGrowth}
                    onChange={(e) => setCustomGrowth(e.target.value)}
                    className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              )}
            </div>

            {/* Graduation year */}
            <div>
              <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <select
                id="graduation-year"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={gradYear}
                onChange={(e) => setGradYear(Number(e.target.value))}
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Assumptions */}
            <details className="mt-2">
              <summary className="text-sm text-gray-600 cursor-pointer">Assumptions</summary>
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assumed Annual Interest ({plan.label})
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    min={0}
                    max={30}
                    step={0.1}
                    value={(assumedAnnualInterest * 100).toFixed(1)}
                    onChange={(e) => setAssumedAnnualInterest(Number(e.target.value) / 100)}
                    className="w-28 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-600">%</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Real rules depend on RPI/base rate and (for Plan 2) income bands. This is a forward-looking estimate you can tweak yearly.
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Threshold used: {fmtMoney(plan.thresholdAnnual)}. Write-off after {plan.writeOffYearsFromApril} years from the April after graduation.
                </p>
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Lifetime Repayment Summary</h2>

            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Amount Repaid</p>
                <p className="text-3xl font-bold text-gray-800">{fmtMoney(sim.totalRepaid, 0)}</p>
                <p className="text-sm text-gray-500">Over the life of the loan</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Original Loan Amount</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(totalBorrowed, 0)}</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Interest Paid</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.totalInterest, 0)}</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Amount Written Off</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.amountWrittenOff, 0)}</p>
                <p className="text-sm text-gray-500">Remaining balance at write-off</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {sim.paidOff ? "Estimated Payoff Date" : "Expected Write-Off Date"}
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {sim.paidOff ? sim.payoffDate : sim.writeOffDate}
                </p>
                <p className="text-sm text-gray-500">
                  {sim.paidOff
                    ? "Before the plan’s write-off deadline"
                    : `${plan.writeOffYearsFromApril} years after graduation (from the April after you finish)`}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Verdict: </span>
                {verdict}
              </p>
            </div>

            {/* Simple viz: repaid vs write-off */}
            <div className="mt-6">
              <div className="bg-white rounded-lg p-3">
                <div className="w-full h-6 bg-gray-200 rounded overflow-hidden flex">
                  <div
                    className="h-6"
                    style={{ width: `${repaidPct}%` }}
                    title={`Repaid: ${fmtMoney(repaid, 0)}`}
                  />
                  <div
                    className="h-6"
                    style={{ width: `${writeOffPct}%` }}
                    title={`Written off: ${fmtMoney(writtenOff, 0)}`}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-600">
                  <span>Repaid: {fmtMoney(repaid, 0)}</span>
                  <span>Written off: {fmtMoney(writtenOff, 0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start" href="/calculators/student-loan-interest-calculator/">
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Interest Calculator</h3>
              <p className="text-sm text-gray-600">See how interest accumulates on your loan over time</p>
            </div>
          </Link>
          <Link className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start" href="/calculators/student-loan-overpayment-calculator/">
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600">See if making early repayments could save you money</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2>How Much Will Your Student Loan Really Cost?</h2>
        <p>
          This calculator helps you understand the <strong>total lifetime cost</strong> of your UK student loan.
          UK loans are income-contingent with automatic write-offs, so many borrowers never repay the full amount.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="key-factors">
            <AccordionTrigger>Three Key Factors That Determine Your Total Cost</AccordionTrigger>
            <AccordionContent>
              <ol>
                <li><strong>Your Loan Plan:</strong> Each plan has different thresholds, interest rules and write-off periods.</li>
                <li><strong>Your Income Trajectory:</strong> Higher earners repay more and may clear their loans before write-off.</li>
                <li><strong>Your Initial Loan Amount:</strong> Bigger balances can mean more interest if you&apos;re on track to clear.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="writeoffs">
            <AccordionTrigger>Understanding Loan Write-Offs</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Plan 1: 25 years from the April after graduation</li>
                <li>Plan 2: 30 years from the April after graduation</li>
                <li>Plan 4: 30 years from the April after graduation</li>
                <li>Plan 5: 40 years from the April after graduation</li>
                <li>Postgraduate Loans: 30 years from the April after graduation</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Know when your loan will be written off?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Check our write-off calculator to see your automatic cancellation date.
        </p>
        <Link
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          href="/calculators/loan-writeoff-checker/"
        >
          Check Your Write-Off Date
        </Link>
      </section>

      {/* Breadcrumb (content-only) */}
      <nav aria-label="breadcrumb" className="max-w-4xl mx-auto">
        <ol className="flex items-center space-x-1 text-sm text-gray-600">
          <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </li>
          <li><Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link></li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </li>
          <li><span className="font-medium text-gray-800" aria-current="page">Total Cost Calculator</span></li>
        </ol>
      </nav>
    </div>
  );
}
