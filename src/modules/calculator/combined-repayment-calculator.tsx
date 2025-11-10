"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

// --- Assumptions / constants (update annually as needed) ---
const PLANS = {
  PLAN_1: { label: "Plan 1 (Pre-2012)", threshold: 24990, rate: 0.09 },
  PLAN_2: { label: "Plan 2 (2012–2023)", threshold: 27295, rate: 0.09 },
  PLAN_4: { label: "Plan 4 (Scotland)", threshold: 27660, rate: 0.09 },
  PLAN_5: { label: "Plan 5 (2023 onwards)", threshold: 25000, rate: 0.09 },
} as const;

const PG = { threshold: 21000, rate: 0.06 };

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

type UndergradKey = keyof typeof PLANS;

export default function CombinedLoanCalculatorPage() {
  // UI state
  const [salary, setSalary] = useState(35_000);
  const [undergradPlan, setUndergradPlan] = useState<UndergradKey>("PLAN_2");
  const [undergradBalance, setUndergradBalance] = useState(40_000);
  const [hasPostgrad, setHasPostgrad] = useState(true);
  const [postgradBalance, setPostgradBalance] = useState(15_000);

  // Calculations (simple PAYE deduction style — repayments depend on income, not balance)
  const {
    ugMonthly,
    pgMonthly,
    totalMonthly,
    totalAnnual,
    effectivePctOfGrossMonthly,
  } = useMemo(() => {
    const ug = PLANS[undergradPlan];
    const ugAbove = Math.max(0, salary - ug.threshold);
    const ugAnnual = ugAbove * ug.rate;
    const ugMonthly = ugAnnual / 12;

    const pgAbove = hasPostgrad ? Math.max(0, salary - PG.threshold) : 0;
    const pgAnnual = pgAbove * (hasPostgrad ? PG.rate : 0);
    const pgMonthly = pgAnnual / 12;

    const totalAnnual = ugAnnual + pgAnnual;
    const totalMonthly = ugMonthly + pgMonthly;

    const effectivePctOfGrossMonthly = salary > 0 ? (totalMonthly / (salary / 12)) * 100 : 0;

    return { ugMonthly, ugAnnual, pgMonthly, pgAnnual, totalMonthly, totalAnnual, effectivePctOfGrossMonthly };
  }, [salary, undergradPlan, hasPostgrad]);

  // Helpers for formatting
  const fmt = (n: number) => `£${(Math.round(n * 100) / 100).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
  const fmtPct1 = (n: number) => `${(Math.round(n * 10) / 10).toFixed(1)}%`;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-10">
        {/* Breadcrumb (content-only) */}
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
            <li><span className="font-medium text-gray-800" aria-current="page">Combined Loan Calculator</span></li>
          </ol>
        </nav>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Combined Student Loan Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Calculate your total monthly repayments when you have multiple student loan plans active at the same time, such as undergraduate and postgraduate loans.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-blue-50 p-6 border-b border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Combined Loan Repayment Calculator</h2>
            <p className="text-gray-600">Calculate your monthly repayments for multiple student loan types.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Your Details</h3>

              {/* Salary */}
              <div>
                <label htmlFor="annual-salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Salary (£)
                </label>
                <div className="flex items-center">
                  <input
                    type="range"
                    id="annual-salary"
                    min={20_000}
                    max={100_000}
                    step={1_000}
                    className="flex-grow h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                    aria-describedby="salary-value"
                    value={salary}
                    onChange={(e) => setSalary(clamp(Number(e.target.value), 0, 250_000))}
                  />
                  <span id="salary-value" className="ml-4 w-24 text-right font-medium text-gray-900">
                    {fmt(salary)}
                  </span>
                </div>
              </div>

              {/* Undergrad section */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-800 mb-3">Undergraduate Loan</h4>

                <div className="mb-4">
                  <label htmlFor="undergrad-plan" className="block text-sm font-medium text-gray-700 mb-1">
                    Undergraduate Loan Plan
                  </label>
                  <select
                    id="undergrad-plan"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value={undergradPlan}
                    onChange={(e) => setUndergradPlan(e.target.value as UndergradKey)}
                  >
                    <option value="">None</option>
                    {Object.entries(PLANS).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="undergrad-balance" className="block text-sm font-medium text-gray-700 mb-1">
                    Undergraduate Loan Balance (£)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      id="undergrad-balance"
                      min={1_000}
                      max={80_000}
                      step={1_000}
                      className="flex-grow h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                      aria-describedby="undergrad-balance-value"
                      value={undergradBalance}
                      onChange={(e) => setUndergradBalance(Number(e.target.value))}
                    />
                    <span id="undergrad-balance-value" className="ml-4 w-24 text-right font-medium text-gray-900">
                      {fmt(undergradBalance)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Repayments depend on income, not balance — this field is for your records.
                  </p>
                </div>
              </div>

              {/* Postgrad section */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-800">Postgraduate Loan</h4>
                  <div className="relative inline-block w-12 h-6">
                    <input
                      type="checkbox"
                      id="postgrad-toggle"
                      className="sr-only"
                      checked={hasPostgrad}
                      onChange={(e) => setHasPostgrad(e.target.checked)}
                    />
                    <label
                      htmlFor="postgrad-toggle"
                      className={`absolute inset-0 rounded-full cursor-pointer transition-colors duration-200 ${hasPostgrad ? "bg-blue-600" : "bg-gray-300"
                        }`}
                    >
                      <span
                        className={`absolute h-4 w-4 top-1 left-1 bg-white rounded-full transition-transform duration-200 ${hasPostgrad ? "translate-x-6" : ""
                          }`}
                      />
                    </label>
                  </div>
                </div>

                <div aria-hidden={!hasPostgrad}>
                  <label htmlFor="postgrad-balance" className="block text-sm font-medium text-gray-700 mb-1">
                    Postgraduate Loan Balance (£)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      id="postgrad-balance"
                      min={1_000}
                      max={50_000}
                      step={1_000}
                      className="flex-grow h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                      aria-describedby="postgrad-balance-value"
                      value={postgradBalance}
                      onChange={(e) => setPostgradBalance(Number(e.target.value))}
                      disabled={!hasPostgrad}
                    />
                    <span id="postgrad-balance-value" className="ml-4 w-24 text-right font-medium text-gray-900">
                      {fmt(postgradBalance)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Like undergrad loans, repayments are based on income, not balance.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div
              className="bg-gray-50 p-6 rounded-xl space-y-6"
              aria-live="polite"
              role="region"
              aria-label="Calculation results"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-4">Your Combined Repayments</h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-1">Total Monthly Repayment</p>
                  <p className="text-3xl font-bold text-gray-900">{fmt(totalMonthly)}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Approximately {fmtPct1(effectivePctOfGrossMonthly)} of your monthly salary
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Repayment Breakdown</p>
                  <div className="space-y-2">
                    <BreakdownRow
                      title={`${PLANS[undergradPlan]?.label?.split(" ")[0] ?? "Undergrad"} Loan`}
                      subtitle={`${fmt(PLANS[undergradPlan]?.threshold ?? 0)} threshold, 9% over threshold`}
                      amount={ugMonthly}
                    />
                    {hasPostgrad && (
                      <BreakdownRow
                        title="Postgraduate Loan"
                        subtitle={`${fmt(PG.threshold)} threshold, 6% over threshold`}
                        amount={pgMonthly}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700 mb-1">Annual Repayment</p>
                  <p className="text-xl font-bold text-gray-900">{fmt(totalAnnual)}</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-1">Effective Repayment Rate</p>
                  <p className="text-lg font-bold text-gray-900">Up to 15% of income above thresholds</p>
                  <p className="text-xs text-gray-600 mt-1">
                    This is the combined percentage of your income over the various thresholds that goes toward loan repayments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About section */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">About Combined Loan Repayments</h3>
            <p className="text-gray-600 mb-2">
              When you have both undergraduate and postgraduate loans, you&apos;ll make repayments toward both simultaneously.
            </p>
            <p className="text-gray-600">
              The total deduction can be significant — up to 15% of your income above the respective thresholds.
              All repayments are automatically deducted from your salary by your employer.
            </p>
          </div>
        </div>

        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Multiple Loan Repayments Explained</h2>
          <p className="text-gray-600 mb-4">
            Many graduates have multiple types of student loans active simultaneously, especially if they&apos;ve completed both undergraduate and postgraduate studies.
          </p>

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="how-it-works">
              <AccordionTrigger>How combined repayments work</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you have both undergraduate and postgraduate loans, you&apos;ll repay both at the same time once your income exceeds their respective thresholds:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Undergraduate loans (Plan 1, 2, 4, or 5): 9% of income above the plan threshold</li>
                    <li>Postgraduate loans: 6% of income above £21,000</li>
                  </ul>
                  <p>This means you could end up paying 15% of your income above certain thresholds.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="example">
              <AccordionTrigger>Example calculation</AccordionTrigger>
              <AccordionContent>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="font-medium mb-2 text-gray-800">For someone earning £35,000 with both Plan 2 and Postgraduate loans:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Plan 2 repayment: 9% of (£35,000 − £27,295) = £694 per year</li>
                    <li>Postgraduate repayment: 6% of (£35,000 − £21,000) = £840 per year</li>
                    <li>Total annual repayment: £1,534 (£128 per month)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="impact">
              <AccordionTrigger>Impact on your take-home pay</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Combined repayments can significantly affect your monthly budget. For higher earners, total deductions can reach 15% of income above thresholds, which impacts disposable income and other financial goals like saving for a home deposit.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        {/* Related */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link className="block bg-white hover:bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6" href="/calculators/plan-2-student-loan-calculator/">
              <h3 className="font-semibold text-gray-800 mb-2">Plan 2 Student Loan Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">Calculate repayments for your undergraduate loan.</p>
              <div className="text-blue-700 font-medium text-sm flex items-center">
                Calculate now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link className="block bg-white hover:bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6" href="/calculators/postgraduate-loan-calculator/">
              <h3 className="font-semibold text-gray-800 mb-2">Postgraduate Loan Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">Calculate repayments for your Master&apos;s or PhD loan.</p>
              <div className="text-blue-700 font-medium text-sm flex items-center">
                Calculate now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>

            <Link className="block bg-white hover:bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6" href="/calculators/total-loan-cost-calculator/">
              <h3 className="font-semibold text-gray-800 mb-2">Total Loan Cost Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">Estimate the lifetime cost of all your student loans.</p>
              <div className="text-blue-700 font-medium text-sm flex items-center">
                Calculate now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">How do multiple student loan plans work together?</h3>
              <p className="text-gray-600">
                When you have multiple loan plans, you repay each one simultaneously once you earn above their respective thresholds.
                For undergraduate loans, you pay 9% of income above the threshold, and for postgraduate loans, you pay 6% above £21,000.
                This means you could pay 15% of your income above certain thresholds.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Can I have both Plan 2 and Postgraduate loans?</h3>
              <p className="text-gray-600">
                Yes, many students have both Plan 2 (or Plan 5) undergraduate loans and Postgraduate loans.
                You&apos;ll make repayments toward both loans simultaneously through your salary.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Do I make separate payments for each loan?</h3>
              <p className="text-gray-600">
                No, all student loan repayments are automatically deducted from your salary by your employer.
                The Student Loans Company then allocates your payment across your different loan plans based on their respective thresholds and rates.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link className="text-blue-700 hover:underline font-medium" href="/faqs/">View all frequently asked questions →</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

// --- little presentational helper ---
function BreakdownRow({
  title,
  subtitle,
  amount,
}: {
  title: string;
  subtitle: string;
  amount: number;
}) {
  const fmt = (n: number) =>
    `£${(Math.round(n * 100) / 100).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      <p className="font-bold">{fmt(amount)}</p>
    </div>
  );
}
