"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

const PLAN4_THRESHOLD = 27660; // £
const PLAN4_RATE = 0.09;       // 9% above threshold
const DEFAULT_INTEREST_COPY =
  "Lower of RPI or Base Rate +1% (currently 4.6% total)";

// simple helper
const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

export default function Plan4CalculatorPage() {
  // FORM STATE
  const [salary, setSalary] = useState(30000);
  const [gradYear, setGradYear] = useState(2018);
  const [loanAmount, setLoanAmount] = useState(20000);
  const [includeOverpay, setIncludeOverpay] = useState(false);
  const [overpay, setOverpay] = useState(0);

  // CALC
  const { monthlyRepay, annualRepay, writeOffLabel } = useMemo(() => {
    const above = Math.max(0, salary - PLAN4_THRESHOLD);
    const requiredAnnual = above * PLAN4_RATE;
    const requiredMonthly = requiredAnnual / 12;

    const monthlyRepay = requiredMonthly + (includeOverpay ? overpay : 0);
    const annualRepay = monthlyRepay * 12;

    // Write-off is 30 years after entering repayment (use April of gradYear+30 for display)
    const writeOffYear = gradYear + 30;
    const writeOffLabel = `April ${writeOffYear}`;

    return {
      monthlyRepay,
      annualRepay,
      writeOffLabel,
    };
  }, [salary, gradYear, includeOverpay, overpay]);

  // Very light “lifetime” placeholders (non-amortized — display only).
  // Keep the fields since they exist in your reference page.
  // We cap lifetime required payments at loanAmount to avoid showing scary nonsense.
  const simpleLifetimeRequiredNoInterest = Math.min(
    loanAmount,
    Math.max(0, annualRepay) * 30 // naive 30-year projection (no growth/no interest)
  );

  // UI handlers
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevents scroll-to-top / navigation
    // no-op; values recompute live via state
  };

  // years for select
  const years = Array.from({ length: 24 }, (_, i) => 2000 + i); // 2000..2023

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* HERO / INTRO */}
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
                <li><span className="font-medium text-gray-800" aria-current="page">Plan 4 Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Plan 4 Student Loan Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Estimate your monthly and total repayments for Plan 4 student loans
              in Scotland.
            </p>
          </div>
        </section>

        {/* CALC + SUMMARY */}
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: FORM */}
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
                    <h3 className="text-sm font-semibold text-gray-800">
                      About Plan 4 Loans
                    </h3>
                    <p className="text-sm text-gray-600">
                      Plan 4 loans apply to students who started university in Scotland after
                      September 1998. You repay 9% of income above £27,660 per year.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                {/* Salary */}
                <div>
                  <label
                    htmlFor="salary"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Annual Salary
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      id="salary"
                      name="salary"
                      type="number"
                      min={0}
                      max={250000}
                      step={1000}
                      value={salary}
                      onChange={(e) =>
                        setSalary(clamp(Number(e.target.value || 0), 0, 250000))
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      aria-describedby="salary-hint"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      id="salary-slider"
                      type="range"
                      min={0}
                      max={150000}
                      step={1000}
                      value={salary}
                      onChange={(e) => setSalary(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      aria-hidden="true"
                    />
                  </div>
                  <p id="salary-hint" className="mt-1 text-sm text-gray-500">
                    The threshold for Plan 4 repayments is £27,660
                  </p>
                </div>

                {/* Graduation Year */}
                <div>
                  <label
                    htmlFor="graduation-year"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Graduation Year
                  </label>
                  <select
                    id="graduation-year"
                    name="graduation-year"
                    value={gradYear}
                    onChange={(e) => setGradYear(Number(e.target.value))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    aria-describedby="graduation-hint"
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <p id="graduation-hint" className="mt-1 text-sm text-gray-500">
                    Plan 4 applies to Scottish students
                  </p>
                </div>

                {/* Loan Amount */}
                <div>
                  <label
                    htmlFor="loan-amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Total Loan Amount
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      id="loan-amount"
                      name="loan-amount"
                      type="number"
                      min={1000}
                      max={150000}
                      step={1000}
                      value={loanAmount}
                      onChange={(e) =>
                        setLoanAmount(clamp(Number(e.target.value || 0), 0, 150000))
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      aria-describedby="loan-hint"
                    />
                  </div>
                  <p id="loan-hint" className="mt-1 text-sm text-gray-500">
                    Scottish students typically have lower tuition fees but may have maintenance loans
                  </p>
                </div>

                {/* Overpayment (optional) */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="overpayment"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Monthly Overpayment (Optional)
                    </label>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="overpayment-toggle"
                          name="overpayment-toggle"
                          type="checkbox"
                          checked={includeOverpay}
                          onChange={(e) => setIncludeOverpay(e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label htmlFor="overpayment-toggle" className="font-medium text-gray-700">
                          Include
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">£</span>
                    <input
                      id="overpayment"
                      name="overpayment"
                      type="number"
                      min={0}
                      max={2000}
                      step={10}
                      value={overpay}
                      onChange={(e) => setOverpay(clamp(Number(e.target.value || 0), 0, 2000))}
                      disabled={!includeOverpay}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-100"
                      aria-describedby="overpayment-hint"
                    />
                  </div>
                  <p id="overpayment-hint" className="mt-1 text-sm text-gray-500">
                    Additional monthly payment on top of required amount
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Calculate Repayments
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT: SUMMARY */}
            <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Repayment Summary</h2>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Monthly Repayment</p>
                  <p className="text-3xl font-bold text-gray-800">
                    £{monthlyRepay.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">9% of income above threshold</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Annual Repayment</p>
                  <p className="text-2xl font-bold text-gray-800">£{annualRepay.toFixed(2)}</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Total to be Repaid</p>
                  <p className="text-2xl font-bold text-gray-800">
                    £{simpleLifetimeRequiredNoInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-gray-500">Over the life of the loan (rough projection)</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-500">Total Interest Paid</p>
                  <p className="text-2xl font-bold text-gray-800">—</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Expected Write-Off Date</p>
                  <p className="text-2xl font-bold text-gray-800">{writeOffLabel}</p>
                  <p className="text-sm text-gray-500">30 years after graduation</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Current Interest Rate: </span>
                  {DEFAULT_INTEREST_COPY}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED CALCULATORS */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/calculators/plan-1-student-loan-calculator/"
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
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
                <h3 className="font-medium text-gray-800 mb-1">Plan 1 Calculator</h3>
                <p className="text-sm text-gray-600">
                  Compare with the Plan 1 loan system (pre-2012 in England/Wales)
                </p>
              </div>
            </Link>

            <Link
              href="/calculators/combined-repayment-calculator/"
              className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
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
                <h3 className="font-medium text-gray-800 mb-1">Combined Calculator</h3>
                <p className="text-sm text-gray-600">
                  Calculate repayments if you have multiple loan plans
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* EXPLAINER */}
        <section className="max-w-4xl mx-auto prose prose-blue">
          <h2>How Does the Plan 4 Student Loan Calculator Work?</h2>
          <p>
            This calculator helps you understand your <strong>Plan 4 student loan repayments</strong> based
            on your salary and graduation year. Plan 4 loans apply to students who studied in Scotland
            after September 1998.
          </p>

          <Accordion type="multiple" className="w-full">
            <AccordionItem value="key-facts">
              <AccordionTrigger>Key Facts About Plan 4 Student Loans</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li><strong>Repayment Threshold:</strong> You only repay when you earn above £27,660 per year (£2,305 per month)</li>
                  <li><strong>Repayment Rate:</strong> 9% of income above the threshold</li>
                  <li><strong>Interest Rate:</strong> The lower of RPI or Bank of England base rate plus 1%</li>
                  <li><strong>Forgiveness Period:</strong> Any remaining balance is written off 30 years after entering repayment</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-it-works">
              <AccordionTrigger>How Plan 4 Repayments Work</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <p>If you earn £30,000 per year, you&apos;ll repay 9% of the amount over the threshold:</p>
                  <ul>
                    <li>Annual income: £30,000</li>
                    <li>Repayment threshold: £27,660</li>
                    <li>Income above threshold: £2,340</li>
                    <li>Repayment rate: 9%</li>
                    <li>Annual repayment: £210.60 (approx. £17.55 per month)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-other-plans">
              <AccordionTrigger>Plan 4 vs Other Student Loan Plans</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How does Plan 4 differ from Plan 1?</h4>
                    <p>
                      Plan 4 has a significantly higher repayment threshold than Plan 1 (£27,660 vs £22,015), meaning you
                      need to earn more before you start repaying. Both plans use the same interest rate calculation method
                      (lower of RPI or Base Rate +1%).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How does Plan 4 differ from Plan 2?</h4>
                    <p>
                      Plan 4 has a slightly higher threshold than Plan 2 (£27,660 vs £27,295) and a significantly lower
                      interest rate. While Plan 2 loans can accrue interest at RPI + up to 3%, Plan 4 loans are capped at
                      the lower of RPI or Base Rate +1%.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What if I studied in Scotland but now work elsewhere in the UK?</h4>
                    <p>
                      Your loan plan is determined by where you studied, not where you currently work. If you studied in
                      Scotland, you&apos;ll be on Plan 4 regardless of where in the UK you later work or live.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full flex justify-between items-center p-4 focus:outline-none">
                <span className="font-medium text-left">
                  Are Scottish tuition fees different from the rest of the UK?
                </span>
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="p-4 pt-0">
                <p className="text-gray-600">
                  Yes, Scottish universities do not charge tuition fees to Scottish residents or EU students
                  (pre-Brexit). However, students from other parts of the UK studying in Scotland may have to pay
                  tuition fees. Scottish students typically only have loans for living costs, resulting in lower
                  average loan balances.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full flex justify-between items-center p-4 focus:outline-none">
                <span className="font-medium text-left">
                  What happens if I have Plan 4 and postgraduate loans?
                </span>
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="p-4 pt-0">
                <p className="text-gray-600">
                  If you have both Plan 4 and a Postgraduate loan, you&apos;ll repay 9% of your income above the Plan 4
                  threshold (£27,660) plus an additional 6% of your income above the Postgraduate loan threshold
                  (£21,000). This means you could be repaying a total of 15% on some portions of your income.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full flex justify-between items-center p-4 focus:outline-none">
                <span className="font-medium text-left">Do Plan 4 thresholds increase with inflation?</span>
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="p-4 pt-0">
                <p className="text-gray-600">
                  Yes, the Plan 4 repayment threshold is typically adjusted annually in line with inflation. This
                  helps ensure that the real-terms value of the threshold remains consistent over time, protecting
                  borrowers from repayment increases due to inflation alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Studying in England but from Scotland?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you&apos;re from Scotland but studied in England, you might have a different loan plan. Check our Plan 2 calculator instead.
          </p>
          <Link
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            Plan 2 Calculator
          </Link>
        </section>

        {/* BREADCRUMB (content-only) */}
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
            <li><span className="font-medium text-gray-800" aria-current="page">Plan 4 Calculator</span></li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
