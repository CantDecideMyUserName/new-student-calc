"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type Freq = "monthly" | "annually" | "weekly";

// 2024/25-ish defaults — update each tax year as needed
const THRESHOLDS = {
  plan1: 22015,
  plan2: 27295,
  plan4: 27660,
  plan5: 25000,
  postgrad: 21000,
} as const;

const RATES = {
  plan1: 0.09,
  plan2: 0.09,
  plan4: 0.09,
  plan5: 0.09,
  postgrad: 0.06,
} as const;

const LABELS: Record<keyof typeof THRESHOLDS, string> = {
  plan1: "Plan 1",
  plan2: "Plan 2",
  plan4: "Plan 4",
  plan5: "Plan 5",
  postgrad: "Postgraduate Loan",
};

const ORDER: (keyof typeof THRESHOLDS)[] = ["plan1", "plan2", "plan4", "plan5", "postgrad"];

const toPeriod = (annual: number, freq: Freq) =>
  freq === "annually" ? annual : freq === "monthly" ? annual / 12 : annual / 52;

const fmtMoney = (n: number, min = 0, max = 0) =>
  `£${(Math.round(n * 100) / 100).toLocaleString(undefined, {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  })}`;

export default function MonthlyRepaymentCalculatorPage() {
  const [salary, setSalary] = useState(30_000);
  const [freq, setFreq] = useState<Freq>("monthly");

  const [enabled, setEnabled] = useState<Record<keyof typeof THRESHOLDS, boolean>>({
    plan1: true,
    plan2: true,
    plan4: true,
    plan5: true,
    postgrad: true,
  });

  const results = useMemo(() => {
    return ORDER.filter((k) => enabled[k]).map((k) => {
      const above = Math.max(0, salary - THRESHOLDS[k]);
      const annual = above * RATES[k];
      return {
        key: k,
        label: LABELS[k],
        threshold: THRESHOLDS[k],
        annual,
        value: toPeriod(annual, freq),
      };
    });
  }, [salary, freq, enabled]);

  const combinedNote =
    enabled.plan2 && enabled.postgrad
      ? `For example, Plan 2 + Postgraduate = ${fmtMoney(
        toPeriod(Math.max(0, salary - THRESHOLDS.plan2) * RATES.plan2, "monthly") +
        toPeriod(Math.max(0, salary - THRESHOLDS.postgrad) * RATES.postgrad, "monthly")
      )}/month.`
      : null;

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
              <li><span className="font-medium text-gray-800" aria-current="page">Monthly Repayment Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Monthly Student Loan Repayment Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Compare monthly repayments across all UK student loan plans based on your salary.
          </p>
        </div>
      </section>

      {/* Calculator Card */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Inputs */}
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
                  <h3 className="text-sm font-semibold text-gray-800">About Monthly Repayments</h3>
                  <p className="text-sm text-gray-600">
                    This calculator shows how much you&apos;ll pay each month across different student loan plans,
                    helping you budget effectively and compare options.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Salary */}
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Salary
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">£</span>
                  <input
                    type="number"
                    id="salary"
                    min={0}
                    max={250000}
                    step={1000}
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    aria-describedby="salary-hint"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="range"
                    id="salary-slider"
                    min={0}
                    max={150000}
                    step={1000}
                    value={Math.min(salary, 150000)}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Plan toggles */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Plans to Compare</label>
                <div className="space-y-2">
                  {ORDER.map((k) => (
                    <label key={k} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={enabled[k]}
                        onChange={(e) => setEnabled((s) => ({ ...s, [k]: e.target.checked }))}
                      />
                      <span className="ml-2 block text-sm text-gray-700">
                        {k === "plan1" && "Plan 1 (Pre-2012 England & Wales)"}
                        {k === "plan2" && "Plan 2 (2012–2023 England & Wales)"}
                        {k === "plan4" && "Plan 4 (Scotland)"}
                        {k === "plan5" && "Plan 5 (2023 onwards England & Wales)"}
                        {k === "postgrad" && "Postgraduate Loan"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Frequency
                </label>
                <select
                  id="frequency"
                  value={freq}
                  onChange={(e) => setFreq(e.target.value as Freq)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </form>
          </div>

          {/* Right: Results */}
          <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {freq === "monthly" ? "Monthly" : freq === "weekly" ? "Weekly" : "Annual"} Repayment Comparison
            </h2>

            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Your Annual Salary</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(salary)}</p>
              </div>

              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r.key} className="bg-white p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{r.label}</p>
                        <p className="text-xs text-gray-500">Threshold: {fmtMoney(r.threshold)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-800">
                          {fmtMoney(r.value, 0, 0)}
                        </p>
                        <p className="text-xs text-gray-500">
                          per {freq === "annually" ? "year" : freq === "weekly" ? "week" : "month"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note: </span>
                  If you have multiple loan types, you&apos;ll pay all selected amounts simultaneously.
                  {combinedNote ? ` ${combinedNote}` : ""}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="h-40 bg-white rounded-lg p-3">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
                  <p className="text-gray-500 text-sm">Payment comparison chart (optional)</p>
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
          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/combined-repayment-calculator/"
          >
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Combined Repayment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate repayments for multiple loan types</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/total-loan-cost-calculator/"
          >
            <div className="mr-3 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Total Cost Calculator</h3>
              <p className="text-sm text-gray-600">Calculate the lifetime cost of your student loan</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2>Understanding Monthly Student Loan Repayments</h2>
        <p>
          Student loan repayments in the UK are automatically deducted from your salary once you earn above the repayment
          threshold. This calculator helps you compare <strong>monthly repayment amounts</strong> across different loan plans.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="how-calculated">
            <AccordionTrigger>How Student Loan Repayments Are Calculated</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>For all loan plans, repayments are calculated as a percentage of your income above the repayment threshold:</p>
                <ul>
                  <li>
                    <strong>Plan 1, 2, 4, and 5:</strong> 9% of your income above the threshold
                  </li>
                  <li>
                    <strong>Postgraduate Loan:</strong> 6% of your income above the threshold
                  </li>
                </ul>
                <p>The key difference between plans is the repayment threshold — the amount you need to earn before you start paying.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="thresholds">
            <AccordionTrigger>Current Repayment Thresholds</AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Loan Plan</th>
                      <th className="text-left">Annual Threshold</th>
                      <th className="text-left">Monthly Threshold</th>
                      <th className="text-left">Repayment Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Plan 1</td><td>{fmtMoney(THRESHOLDS.plan1)}</td><td>{fmtMoney(THRESHOLDS.plan1 / 12)}</td><td>9%</td></tr>
                    <tr><td>Plan 2</td><td>{fmtMoney(THRESHOLDS.plan2)}</td><td>{fmtMoney(THRESHOLDS.plan2 / 12)}</td><td>9%</td></tr>
                    <tr><td>Plan 4</td><td>{fmtMoney(THRESHOLDS.plan4)}</td><td>{fmtMoney(THRESHOLDS.plan4 / 12)}</td><td>9%</td></tr>
                    <tr><td>Plan 5</td><td>{fmtMoney(THRESHOLDS.plan5)}</td><td>{fmtMoney(THRESHOLDS.plan5 / 12)}</td><td>9%</td></tr>
                    <tr><td>Postgraduate Loan</td><td>{fmtMoney(THRESHOLDS.postgrad)}</td><td>{fmtMoney(THRESHOLDS.postgrad / 12)}</td><td>6%</td></tr>
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="example-calculation">
            <AccordionTrigger>Example Monthly Repayment Calculation</AccordionTrigger>
            <AccordionContent>
              <p>On a £30,000 salary with a Plan 2 loan:</p>
              <ol>
                <li>Annual income: £30,000</li>
                <li>Plan 2 annual threshold: £27,295</li>
                <li>Income above threshold: £2,705</li>
                <li>Annual repayment (9%): £243.45</li>
                <li>Monthly repayment: £20.29</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="multiple-loans">
            <AccordionTrigger>Multiple Loan Repayments</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>If you have multiple types of student loans, you&apos;ll make repayments on each simultaneously. For example:</p>
                <ul>
                  <li>
                    With both Plan 2 and Postgraduate loans you&apos;d pay 9% above the Plan 2 threshold <strong>plus</strong> 6% above the Postgrad threshold.
                  </li>
                  <li>On a £30,000 salary, that&apos;s roughly £20 (Plan 2) + £45 (Postgrad) ≈ £65 per month.</li>
                </ul>
                <p>This simultaneous payment can significantly increase your monthly deductions compared with a single plan.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Got multiple student loans?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our combined repayment calculator to see exactly how multiple loans affect your monthly payments.
        </p>
        <Link
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          href="/calculators/combined-repayment-calculator/"
        >
          Try Combined Calculator
        </Link>
      </section>

      {/* Breadcrumb (content-only) */}
      <nav aria-label="breadcrumb" className="max-w-4xl mx-auto">
        <ol className="flex items-center space-x-1 text-sm text-gray-600">
          <li>
            <Link className="hover:text-blue-700 hover:underline" href="/">Home</Link>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <span className="font-medium text-gray-800" aria-current="page">Monthly Repayment Calculator</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
