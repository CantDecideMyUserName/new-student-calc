"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type SimResult = {
  monthlyRequired: number; // 9% above threshold / 12
  annualRequired: number;
  totalRepaid: number;
  totalInterest: number;
  paidOff: boolean;
  payoffDate?: string;
  writeOffDate: string;
  monthsElapsed: number;
};

const PLAN1 = {
  THRESHOLD: 22_015,             // Update each April
  REPAY_RATE: 0.09,
  WRITE_OFF_YEARS: 25,           // After entering repayment
};

// Assumed current annual interest for Plan 1 (RPI or base+1%, whichever lower).
// Update each year; used for forward-looking simulation only.
const DEFAULT_INT_ANNUAL = 0.046;

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const monthName = (m: number) =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m];

function writeOffDate(graduationYear: number): Date {
  // Enter repayment from APRIL after finishing; write-off after 25 years
  const start = new Date(graduationYear + 1, 3, 1); // Apr 1 (month index 3)
  return new Date(start.getFullYear() + PLAN1.WRITE_OFF_YEARS, start.getMonth(), 1);
}

function simulatePlan1({
  salary,
  graduationYear,
  startingBalance,
  monthlyOverpay,
  interestAnnual = DEFAULT_INT_ANNUAL,
}: {
  salary: number;
  graduationYear: number;
  startingBalance: number;
  monthlyOverpay: number;
  interestAnnual?: number;
}): SimResult {
  const monthlyRequired = Math.max(0, (salary - PLAN1.THRESHOLD) * PLAN1.REPAY_RATE / 12);
  const annualRequired = monthlyRequired * 12;

  const start = new Date(graduationYear + 1, 3, 1); // April after graduation
  const end = writeOffDate(graduationYear);
  const monthsCap =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  let balance = startingBalance;
  let totalRepaid = 0;
  let totalInterest = 0;
  let months = 0;
  const monthlyRate = interestAnnual / 12;

  while (months < monthsCap && balance > 0) {
    // interest accrues on outstanding balance
    const interest = balance * monthlyRate;
    totalInterest += interest;
    balance += interest;

    // required + optional
    const pay = Math.min(balance, Math.max(0, monthlyRequired) + Math.max(0, monthlyOverpay));
    balance -= pay;
    totalRepaid += pay;

    months++;
  }

  const paidOff = balance <= 0.0001;

  let payoffDate: string | undefined;
  if (paidOff) {
    const d = new Date(start);
    d.setMonth(d.getMonth() + months);
    payoffDate = `${monthName(d.getMonth())} ${d.getFullYear()}`;
  }

  const w = end;
  const writeOffStr = `${monthName(w.getMonth())} ${w.getFullYear()}`;

  return {
    monthlyRequired,
    annualRequired,
    totalRepaid,
    totalInterest,
    paidOff,
    payoffDate,
    writeOffDate: writeOffStr,
    monthsElapsed: months,
  };
}

export default function Plan1CalculatorPage() {
  const [salary, setSalary] = useState(30_000);
  const [graduationYear, setGraduationYear] = useState(2010);
  const [loanAmount, setLoanAmount] = useState(15_000);
  const [includeOverpay, setIncludeOverpay] = useState(false);
  const [overpay, setOverpay] = useState(0);
  const [assumedInterest, setAssumedInterest] = useState(DEFAULT_INT_ANNUAL); // editable if you want

  const years = Array.from({ length: 14 }, (_, i) => 1998 + i); // 1998..2011

  const sim = useMemo(
    () =>
      simulatePlan1({
        salary,
        graduationYear,
        startingBalance: Math.max(0, loanAmount),
        monthlyOverpay: includeOverpay ? Math.max(0, overpay) : 0,
        interestAnnual: assumedInterest,
      }),
    [salary, graduationYear, loanAmount, includeOverpay, overpay, assumedInterest]
  );

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
              <li><span className="font-medium text-gray-800" aria-current="page">Plan 1 Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Plan 1 Student Loan Calculator</h1>
          <p className="text-xl text-gray-600">
            Estimate your monthly and total repayments for Plan 1 student loans in England and Wales (pre-2012).
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
                  <h3 className="text-sm font-semibold text-gray-800">About Plan 1 Loans</h3>
                  <p className="text-sm text-gray-600">
                    Plan 1 applies if you started before September 2012 (or studied in Northern Ireland). You repay{" "}
                    <strong>9%</strong> of income above <strong>{fmtMoney(PLAN1.THRESHOLD)}</strong> per year.
                  </p>
                </div>
              </div>
            </div>

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
                  value={Math.min(150000, salary)}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-hidden="true"
                />
              </div>
              <p id="salary-hint" className="mt-1 text-sm text-gray-500">
                The threshold for Plan 1 repayments is {fmtMoney(PLAN1.THRESHOLD)}
              </p>
            </div>

            {/* Graduation year */}
            <div>
              <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <select
                id="graduation-year"
                value={graduationYear}
                onChange={(e) => setGraduationYear(Number(e.target.value))}
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
                Plan 1 applies to students who started before September 2012
              </p>
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
                  min={0}
                  max={150000}
                  step={1000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  aria-describedby="loan-hint"
                />
              </div>
              <p id="loan-hint" className="mt-1 text-sm text-gray-500">
                Plan 1 loans were typically smaller as tuition fees were lower
              </p>
            </div>

            {/* Overpayment */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="overpayment" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Overpayment (Optional)
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    id="overpayment-toggle"
                    type="checkbox"
                    className="sr-only peer"
                    checked={includeOverpay}
                    onChange={(e) => setIncludeOverpay(e.target.checked)}
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition" />
                  <span className="ml-2 text-sm font-medium text-gray-700">Include</span>
                </label>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="overpayment"
                  min={0}
                  max={2000}
                  step={10}
                  disabled={!includeOverpay}
                  value={overpay}
                  onChange={(e) => setOverpay(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-100"
                  aria-describedby="overpayment-hint"
                />
              </div>
              <p id="overpayment-hint" className="mt-1 text-sm text-gray-500">
                Additional monthly payment on top of required amount
              </p>
            </div>

            {/* (Optional) Assumed interest input – keep hidden if you don’t want users to edit */}
            <details className="mt-4">
              <summary className="text-sm text-gray-600 cursor-pointer">Assumptions (interest)</summary>
              <div className="mt-2">
                <label htmlFor="assumed-interest" className="block text-sm font-medium text-gray-700 mb-1">
                  Assumed Annual Interest (Plan 1)
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="assumed-interest"
                    min={0}
                    max={20}
                    step={0.1}
                    value={(assumedInterest * 100).toFixed(1)}
                    onChange={(e) => setAssumedInterest(Number(e.target.value) / 100)}
                    className="block w-28 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-600">%</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Plan 1 interest is the lower of RPI or Bank Rate + 1%. Update this yearly.
                </p>
              </div>
            </details>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Repayment Summary</h2>

            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Monthly Repayment</p>
                <p className="text-3xl font-bold text-gray-800">{fmtMoney(sim.monthlyRequired, 0)}</p>
                <p className="text-sm text-gray-500">9% of income above threshold</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Annual Repayment</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.annualRequired, 0)}</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total to be Repaid</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.totalRepaid, 0)}</p>
                <p className="text-sm text-gray-500">Over the life of the loan (or until write-off)</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Interest Paid</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(sim.totalInterest, 0)}</p>
              </div>

              <div>
                {sim.paidOff ? (
                  <>
                    <p className="text-sm text-gray-500">Paid Off</p>
                    <p className="text-2xl font-bold text-gray-800">{sim.payoffDate}</p>
                    <p className="text-sm text-gray-500">
                      In {(sim.monthsElapsed / 12).toFixed(1)} years from the April after graduation
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-500">Expected Write-Off Date</p>
                    <p className="text-2xl font-bold text-gray-800">{sim.writeOffDate}</p>
                    <p className="text-sm text-gray-500">
                      Any remaining balance is written off {PLAN1.WRITE_OFF_YEARS} years after entering repayment
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Current Interest Rate: </span>
                RPI or Base+1% (assumed {(assumedInterest * 100).toFixed(1)}% for this estimate)
              </p>
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
            href="/calculators/plan-2-student-loan-calculator/"
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
              <h3 className="font-medium text-gray-800 mb-1">Plan 2 Calculator</h3>
              <p className="text-sm text-gray-600">Compare with the Plan 2 loan system (2012–2023)</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/student-loan-overpayment-calculator/"
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
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600">See how much you could save by making extra payments</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2>How Does the Plan 1 Student Loan Calculator Work?</h2>
        <p>
          This calculator helps you understand your <strong>Plan 1 student loan repayments</strong> based on your salary and
          graduation year. Plan 1 loans apply to students who started higher education in England or Wales before September
          2012, or who studied in Northern Ireland.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="key-facts">
            <AccordionTrigger>Key Facts About Plan 1 Student Loans</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  <strong>Repayment Threshold:</strong> You only repay when you earn above {fmtMoney(PLAN1.THRESHOLD)} per year
                  (&pound;{Math.round(PLAN1.THRESHOLD / 12).toLocaleString()}/month).
                </li>
                <li>
                  <strong>Repayment Rate:</strong> 9% of income above the threshold.
                </li>
                <li>
                  <strong>Interest Rate:</strong> The lower of RPI or Bank of England base rate + 1%.
                </li>
                <li>
                  <strong>Forgiveness Period:</strong> Any remaining balance is written off {PLAN1.WRITE_OFF_YEARS} years after
                  entering repayment (from the April after graduation).
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-it-works">
            <AccordionTrigger>How Plan 1 Repayments Work</AccordionTrigger>
            <AccordionContent>
              <p>If you earn £30,000 per year, you&apos;ll repay 9% of the amount over the threshold:</p>
              <ul>
                <li>Annual income: £30,000</li>
                <li>Repayment threshold: £22,015</li>
                <li>Income above threshold: £7,985</li>
                <li>Repayment rate: 9%</li>
                <li>Annual repayment: £718.65 (≈ £60 per month)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to see if you could save money?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Try our overpayment calculator to see if making extra payments could help you save money on your student loan.
        </p>
        <Link
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          href="/calculators/student-loan-overpayment-calculator/"
        >
          Try Our Overpayment Calculator
        </Link>
      </section>

      {/* Breadcrumb (content-only) */}
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
          <li><span className="font-medium text-gray-800" aria-current="page">Plan 1 Calculator</span></li>
        </ol>
      </nav>
    </div>
  );
}
