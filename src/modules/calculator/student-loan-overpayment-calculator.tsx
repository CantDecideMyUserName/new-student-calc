"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlanKey = "PLAN_1" | "PLAN_2" | "PLAN_4" | "PLAN_5" | "POSTGRAD";

/** ---------- Defaults (editable in the UI) ---------- */
const DEFAULTS = {
  rpi: 0.046,             // 4.6% RPI
  baseRate: 0.0525,       // BoE base rate
  p2Lower: 27295,         // Plan 2 interest band lower income
  p2Upper: 49130,         // Plan 2 interest band upper income
  salaryGrowth: 0.00,     // annual salary growth assumption (0% by default)
} as const;

const PLAN_PARAMS: Record<
  PlanKey,
  {
    label: string;
    threshold: number;        // annual threshold (£)
    repayRate: number;        // share of income above threshold (e.g., 0.09 = 9%)
    writeOffYears: number;    // write-off horizon
  }
> = {
  PLAN_1: { label: "Plan 1 (Pre-2012)", threshold: 22015, repayRate: 0.09, writeOffYears: 25 },
  PLAN_2: { label: "Plan 2 (2012–2023)", threshold: 27295, repayRate: 0.09, writeOffYears: 30 },
  PLAN_4: { label: "Plan 4 (Scotland)", threshold: 31995, repayRate: 0.09, writeOffYears: 30 },
  PLAN_5: { label: "Plan 5 (2023+)", threshold: 25000, repayRate: 0.09, writeOffYears: 40 },
  POSTGRAD: { label: "Postgraduate Loan", threshold: 21000, repayRate: 0.06, writeOffYears: 30 },
};

/** ---------- Interest rules (same as the interest calculator) ---------- */
function annualInterestRate({
  plan,
  salary,
  rpi,
  baseRate,
  p2Lower,
  p2Upper,
}: {
  plan: PlanKey;
  salary: number;
  rpi: number;
  baseRate: number;
  p2Lower: number;
  p2Upper: number;
}) {
  switch (plan) {
    case "PLAN_1":
    case "PLAN_4": {
      // Lower of RPI or (Base + 1%)
      const cap = baseRate + 0.01;
      return Math.min(rpi, cap);
    }
    case "PLAN_5":
      return rpi; // RPI only
    case "POSTGRAD":
      return rpi + 0.03; // RPI + 3%
    case "PLAN_2": {
      // RPI → RPI+3% based on income band
      if (salary <= p2Lower) return rpi;
      if (salary >= p2Upper) return rpi + 0.03;
      const t = (salary - p2Lower) / Math.max(1, p2Upper - p2Lower);
      return rpi + 0.03 * t;
    }
  }
}

/** ---------- Core simulation (monthly compounding & repayments) ---------- */
type SimResult = {
  monthsElapsed: number;
  paidOff: boolean;
  totalPaid: number;
  totalInterest: number;
  balanceRemaining: number;
};

function simulate({
  plan,
  startSalary,
  balance,
  overpayMonthly, // extra voluntary overpayment
  rpi,
  baseRate,
  p2Lower,
  p2Upper,
  salaryGrowth = 0,
  customThreshold,        // allow UI override
  customRepayRate,        // allow UI override
  customWriteOffYears,    // allow UI override
}: {
  plan: PlanKey;
  startSalary: number;
  balance: number;
  overpayMonthly: number;
  rpi: number;
  baseRate: number;
  p2Lower: number;
  p2Upper: number;
  salaryGrowth?: number;
  customThreshold?: number;
  customRepayRate?: number;
  customWriteOffYears?: number;
}): SimResult {
  const params = PLAN_PARAMS[plan];
  const threshold = customThreshold ?? params.threshold;
  const repayRate = customRepayRate ?? params.repayRate;
  const writeOffMonths = Math.round(12 * (customWriteOffYears ?? params.writeOffYears));

  let bal = Math.max(0, balance);
  let salary = Math.max(0, startSalary);
  let totalPaid = 0;
  let totalInterest = 0;

  let monthsElapsed = 0;
  let paidOff = false;

  while (monthsElapsed < writeOffMonths) {
    // Annual interest rate for this month based on current salary
    const rate = annualInterestRate({ plan, salary, rpi, baseRate, p2Lower, p2Upper });
    const mRate = rate / 12;

    // Interest accrues first
    const interest = bal * mRate;
    bal += interest;
    totalInterest += interest;

    // Income-contingent repayment this month
    const monthlyIncomeAbove = Math.max(0, (salary - threshold) / 12);
    const icr = monthlyIncomeAbove * repayRate;

    // Voluntary overpayment
    const payment = Math.max(0, Math.min(bal, icr + overpayMonthly));

    bal -= payment;
    totalPaid += payment;

    monthsElapsed++;

    // Bump salary annually (on each 12th month)
    if (salaryGrowth !== 0 && monthsElapsed % 12 === 0) {
      salary *= 1 + salaryGrowth;
    }

    if (bal <= 1e-6) {
      paidOff = true;
      bal = 0;
      break;
    }
  }

  return { monthsElapsed, paidOff, totalPaid, totalInterest, balanceRemaining: bal };
}

/** ---------- Small helpers ---------- */
const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const monthsToLabel = (m: number) => {
  const years = Math.floor(m / 12);
  const remM = m % 12;
  if (years === 0) return `${remM} months`;
  if (remM === 0) return `${years} years`;
  return `${years} years ${remM} months`;
};

/** ================== Component ================== */
export default function StudentLoanOverpaymentCalculatorPage() {
  // Inputs
  const [plan, setPlan] = useState<PlanKey>("PLAN_2");
  const [salary, setSalary] = useState(35_000);
  const [balance, setBalance] = useState(40_000);
  const [overpay, setOverpay] = useState(100);

  // Assumptions (editable)
  const [rpiPct, setRpiPct] = useState(DEFAULTS.rpi * 100);
  const [basePct, setBasePct] = useState(DEFAULTS.baseRate * 100);
  const [p2Lower, setP2Lower] = useState<number>(DEFAULTS.p2Lower);
  const [p2Upper, setP2Upper] = useState<number>(DEFAULTS.p2Upper);
  const [salaryGrowthPct, setSalaryGrowthPct] = useState(DEFAULTS.salaryGrowth * 100);

  // Optional overrides for plan parameters (advanced)
  const baseParams = PLAN_PARAMS[plan];
  const [threshold, setThreshold] = useState(baseParams.threshold);
  const [repayRatePct, setRepayRatePct] = useState(baseParams.repayRate * 100);
  const [writeOffYears, setWriteOffYears] = useState(baseParams.writeOffYears);

  // Keep overrides in sync when plan changes
  useMemo(() => {
    const p = PLAN_PARAMS[plan];
    setThreshold(p.threshold);
    setRepayRatePct(p.repayRate * 100);
    setWriteOffYears(p.writeOffYears);
  }, [plan]);

  const rpi = Math.max(0, rpiPct / 100);
  const baseRate = Math.max(0, basePct / 100);
  const salaryGrowth = salaryGrowthPct / 100;

  const currentRate = useMemo(
    () => annualInterestRate({ plan, salary, rpi, baseRate, p2Lower, p2Upper }),
    [plan, salary, rpi, baseRate, p2Lower, p2Upper]
  );

  // Simulations: with and without overpayment
  const simStandard = useMemo(
    () =>
      simulate({
        plan,
        startSalary: salary,
        balance,
        overpayMonthly: 0,
        rpi,
        baseRate,
        p2Lower,
        p2Upper,
        salaryGrowth,
        customThreshold: threshold,
        customRepayRate: repayRatePct / 100,
        customWriteOffYears: writeOffYears,
      }),
    [plan, salary, balance, rpi, baseRate, p2Lower, p2Upper, salaryGrowth, threshold, repayRatePct, writeOffYears]
  );

  const simOverpay = useMemo(
    () =>
      simulate({
        plan,
        startSalary: salary,
        balance,
        overpayMonthly: Math.max(0, overpay),
        rpi,
        baseRate,
        p2Lower,
        p2Upper,
        salaryGrowth,
        customThreshold: threshold,
        customRepayRate: repayRatePct / 100,
        customWriteOffYears: writeOffYears,
      }),
    [plan, salary, balance, overpay, rpi, baseRate, p2Lower, p2Upper, salaryGrowth, threshold, repayRatePct, writeOffYears]
  );

  // Derived comparisons
  const interestSaved = Math.max(0, simStandard.totalInterest - simOverpay.totalInterest);
  const timeSavedMonths =
    (simStandard.paidOff ? simStandard.monthsElapsed : writeOffYears * 12) -
    (simOverpay.paidOff ? simOverpay.monthsElapsed : writeOffYears * 12);

  // Simple decision signal:
  // If without overpayment you DO NOT fully repay (i.e., write-off), then overpaying tends not to be financially optimal.
  const notOptimal =
    !simStandard.paidOff &&
    // Only label “not optimal” if overpaying still doesn’t fully repay OR if it increases lifetime payments
    (!simOverpay.paidOff || simOverpay.totalPaid >= simStandard.totalPaid);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      <div>

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
            <li><span className="font-medium text-gray-800" aria-current="page">Overpayment Calculator</span></li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Loan Overpayment Calculator</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Find out if making voluntary overpayments is financially worthwhile for your plan and income.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-blue-50 p-6 border-b border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Your Details</h2>
          <p className="text-gray-600">Adjust the inputs and assumptions. Results update instantly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Plan + threshold/repay/writeoff (advanced overrides) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Plan Type</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value as PlanKey)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                {Object.entries(PLAN_PARAMS).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Threshold: £{threshold.toLocaleString()} | Rate: {(repayRatePct).toFixed(0)}%
              </p>

              <details className="mt-2">
                <summary className="text-sm text-gray-600 cursor-pointer">Advanced: override plan parameters</summary>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-sm text-gray-700">Threshold (£)</label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={threshold}
                      onChange={(e) => setThreshold(Number(e.target.value || 0))}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Repay rate (%)</label>
                    <input
                      type="number"
                      step={0.1}
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={repayRatePct}
                      onChange={(e) => setRepayRatePct(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Write-off (years)</label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={writeOffYears}
                      onChange={(e) => setWriteOffYears(Number(e.target.value))}
                    />
                  </div>
                </div>
              </details>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Salary (£)</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min={15000}
                  max={150000}
                  step={1000}
                  className="flex-grow h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                />
                <span className="ml-4 w-28 text-right font-medium text-gray-900">
                  £{salary.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Balance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Loan Balance (£)</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min={1000}
                  max={150000}
                  step={1000}
                  className="flex-grow h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  value={balance}
                  onChange={(e) => setBalance(Number(e.target.value))}
                />
                <span className="ml-4 w-28 text-right font-medium text-gray-900">
                  £{balance.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Overpayment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Overpayment (£)</label>
              <div className="flex items-center">
                <input
                  type="range"
                  min={0}
                  max={1000}
                  step={10}
                  className="flex-grow h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  value={overpay}
                  onChange={(e) => setOverpay(Number(e.target.value))}
                />
                <span className="ml-4 w-28 text-right font-medium text-gray-900">
                  £{overpay.toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Annual overpayment: {fmtMoney(overpay * 12)}</p>
            </div>

            {/* Assumptions */}
            <details>
              <summary className="text-sm text-gray-600 cursor-pointer">Assumptions</summary>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-gray-700">RPI (%)</label>
                  <input
                    type="number"
                    step={0.1}
                    value={rpiPct}
                    onChange={(e) => setRpiPct(Number(e.target.value))}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Base rate (%)</label>
                  <input
                    type="number"
                    step={0.1}
                    value={basePct}
                    onChange={(e) => setBasePct(Number(e.target.value))}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Used for Plan 1/4: lower of RPI or Base+1%.</p>
                </div>
                {plan === "PLAN_2" && (
                  <>
                    <div>
                      <label className="text-sm text-gray-700">Plan 2 lower income (£)</label>
                      <input
                        type="number"
                        value={p2Lower}
                        onChange={(e) => setP2Lower(Number(e.target.value))}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Plan 2 upper income (£)</label>
                      <input
                        type="number"
                        value={p2Upper}
                        onChange={(e) => setP2Upper(Number(e.target.value))}
                        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="text-sm text-gray-700">Salary growth (%/yr)</label>
                  <input
                    type="number"
                    step={0.1}
                    value={salaryGrowthPct}
                    onChange={(e) => setSalaryGrowthPct(Number(e.target.value))}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl space-y-6" aria-live="polite" role="region" aria-label="Calculation results">
            <h3 className="text-xl font-medium text-gray-800">Overpayment Analysis</h3>

            {notOptimal ? (
              <div className="p-4 rounded-lg bg-yellow-50 text-yellow-800">
                <p className="font-bold text-lg">Overpayments may not be financially optimal.</p>
                <p className="text-sm mt-1">
                  Your loan is projected to be written off without fully repaying under standard repayments.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-green-50 text-green-800">
                <p className="font-bold text-lg">Overpayments can save you money.</p>
                <p className="text-sm mt-1">They reduce interest and shorten the repayment time.</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Current Interest Rate</p>
                <p className="text-xl font-bold text-gray-900">{(currentRate * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Interest Saved</p>
                <p className="text-xl font-bold text-gray-900">{fmtMoney(interestSaved, 0)}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Standard Repayment Time</p>
                <p className="text-xl font-bold text-gray-900">
                  {simStandard.paidOff ? monthsToLabel(simStandard.monthsElapsed) : `${writeOffYears} years (to write-off)`}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">With Overpayments</p>
                <p className="text-xl font-bold text-gray-900">
                  {simOverpay.paidOff ? monthsToLabel(simOverpay.monthsElapsed) : `${writeOffYears} years (to write-off)`}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500 mb-1">Time Saved</p>
              <p className="text-2xl font-bold text-gray-900">
                {timeSavedMonths > 0 ? monthsToLabel(timeSavedMonths) : "None"}
              </p>

              <div className="mt-4 text-sm text-gray-700 bg-gray-100 p-3 rounded-lg">
                <p className="font-medium">Why might it not be worthwhile?</p>
                <p className="mt-1">
                  If you’re unlikely to clear the balance before the write-off date, extra payments usually **increase**
                  your lifetime payments. Overpaying makes most sense when you expect to fully repay (e.g., higher or fast-rising income).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-500">Lifetime Paid (standard)</p>
                <p className="font-semibold">{fmtMoney(simStandard.totalPaid, 0)}</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-500">Lifetime Paid (with overpay)</p>
                <p className="font-semibold">{fmtMoney(simOverpay.totalPaid, 0)}</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-500">Interest (standard)</p>
                <p className="font-semibold">{fmtMoney(simStandard.totalInterest, 0)}</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-500">Interest (with overpay)</p>
                <p className="font-semibold">{fmtMoney(simOverpay.totalInterest, 0)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Understanding Overpayments</h3>
          <p className="text-gray-600 mb-1">
            Overpayments reduce your balance faster and can save interest, but they’re not always optimal. If you won’t
            clear the loan before write-off, voluntary payments usually mean paying more over your lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}
