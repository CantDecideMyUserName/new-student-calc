"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type PlanKey = "PLAN_1" | "PLAN_2" | "PLAN_4" | "PLAN_5" | "POSTGRAD";

const PLAN_LABELS: Record<PlanKey, string> = {
  PLAN_1: "Plan 1 (Pre-2012)",
  PLAN_2: "Plan 2 (2012–2023)",
  PLAN_4: "Plan 4 (Scotland)",
  PLAN_5: "Plan 5 (2023+)",
  POSTGRAD: "Postgraduate Loan",
};

const WRITE_OFF_YEARS: Record<PlanKey, number> = {
  PLAN_1: 25,
  PLAN_2: 30,
  PLAN_4: 30,
  PLAN_5: 40,
  POSTGRAD: 30,
};

const YEARS = Array.from({ length: 2032 - 1998 + 1 }, (_, i) => 1998 + i);
const DURATIONS = [1, 2, 3, 4, 5, 6];

function monthName(m: number) {
  return [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ][m];
}

function makeDateUTC(y: number, m: number, d: number) {
  return new Date(Date.UTC(y, m, d, 12, 0, 0));
}

export default function LoanWriteOffChecker() {
  const [plan, setPlan] = useState<PlanKey>("PLAN_2");
  const [startYear, setStartYear] = useState<number>(2018);
  const [durationYears, setDurationYears] = useState<number>(3);
  const [courseType, setCourseType] = useState<"undergrad" | "masters" | "phd">("undergrad");

  // Advanced offset: 0 = official rule (April AFTER you finish).
  // Use -12 to assume April of your final academic year.
  const [offsetMonths, setOffsetMonths] = useState<number>(0);

  const finishYear = startYear + durationYears; // academic finish year
  const baseRepayStart = makeDateUTC(finishYear + 1, 3, 1); // April after finish year (month=3)

  const repayStart = useMemo(() => {
    const d = new Date(baseRepayStart.getTime());
    d.setUTCMonth(d.getUTCMonth() + offsetMonths);
    return d;
  }, [baseRepayStart, offsetMonths]);

  const writeOffYears = WRITE_OFF_YEARS[plan];

  const writeOffDate = useMemo(() => {
    return makeDateUTC(repayStart.getUTCFullYear() + writeOffYears, repayStart.getUTCMonth(), 1);
  }, [repayStart, writeOffYears]);

  const now = new Date();
  const remainingYears = Math.max(
    0,
    Math.ceil((writeOffDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
  );

  const summary = {
    planLabel: PLAN_LABELS[plan],
    repayStartLabel: `${monthName(repayStart.getUTCMonth())} ${repayStart.getUTCFullYear()}`,
    writeOffLabel: `${monthName(writeOffDate.getUTCMonth())} ${writeOffDate.getUTCFullYear()}`,
  };

  return (
    <div className="container mx-auto space-y-10 p-6">
      <section className="bg-blue-50 rounded-2xl p-8">

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
            <li><span className="font-medium text-gray-800" aria-current="page">Loan Write-Off Calculator</span></li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Student Loan Write-Off Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Find out exactly when your student loan will be cancelled, regardless of how much you&apos;ve repaid.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow p-6 md:p-8 grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-800">About Loan Write-Offs</h3>
            <p className="text-sm text-gray-600">
              All UK student loans are automatically written off after a certain period, regardless of how much you&apos;ve repaid. The period varies by loan plan.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Plan</label>
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={plan}
              onChange={(e) => setPlan(e.target.value as PlanKey)}
            >
              {Object.entries(PLAN_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Type</label>
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={courseType}
              onChange={(e) => setCourseType(e.target.value as "undergrad" | "masters" | "phd")}
            >
              <option value="undergrad">Undergraduate</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctoral</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Start Year</label>
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={startYear}
              onChange={(e) => setStartYear(Number(e.target.value))}
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Duration</label>
            <select
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
            >
              {DURATIONS.map((n) => (
                <option key={n} value={n}>{n === 6 ? "6+ years" : `${n} year${n > 1 ? "s" : ""}`}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Used to work out your finish year.</p>
          </div>

          <details className="mt-2">
            <summary className="text-sm text-gray-600 cursor-pointer">Advanced: adjust repayment start</summary>
            <div className="mt-3">
              <label className="block text-sm text-gray-700">Start offset (months)</label>
              <input
                type="number"
                value={offsetMonths}
                onChange={(e) => setOffsetMonths(Number(e.target.value || 0))}
                className="mt-1 w-40 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                0 = April after you finish (official). Use <span className="font-semibold">-12</span> to assume April of your final academic year.
              </p>
            </div>
          </details>
        </div>

        {/* Results */}
        <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Write-Off Date</h2>

          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
              <p className="text-3xl font-bold text-blue-700">{writeOffDate.getUTCFullYear()}</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{summary.writeOffLabel}</p>
              <p className="text-sm text-gray-500">{writeOffYears} years after entering repayment</p>
            </div>

            <div className="border-t border-gray-200 w-full pt-4 mt-2 space-y-2">
              <Row label="Plan type:" value={summary.planLabel} />
              <Row label="Repayment period:" value={`${writeOffYears} years`} />
              <Row label="Started repaying:" value={summary.repayStartLabel} />
              <Row label="Years remaining:" value={`${remainingYears} year${remainingYears === 1 ? "" : "s"}`} />
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
            <span className="font-semibold">Remember: </span>
            Your loan will be written off regardless of how much you&apos;ve repaid or how much is outstanding.
          </div>
        </div>
      </section>

      {/* Existing summary tables (kept) */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Write-Off Periods by Loan Plan</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <Th>Loan Plan</Th>
                <Th>Write-Off Period</Th>
                <Th>Starting Point</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <Tr cells={["Plan 1", "25 years", "From first April after graduation"]} />
              <Tr cells={["Plan 2", "30 years", "From first April after graduation"]} />
              <Tr cells={["Plan 4 (Scotland)", "30 years", "From first April after graduation"]} />
              <Tr cells={["Plan 5", "40 years", "From first April after graduation"]} />
              <Tr cells={["Postgraduate Loan", "30 years", "From first April after graduation"]} />
            </tbody>
          </table>
        </div>
      </section>

      {/* ▼ NEW: the exact section you asked to add */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start" href="/calculators/total-loan-cost-calculator/">
              <div className="mr-3 text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Total Cost Calculator</h3>
                <p className="text-sm text-gray-600">Calculate how much you&apos;ll pay before the write-off date</p>
              </div>
            </a>

            <a className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start" href="/calculators/student-loan-interest-calculator/">
              <div className="mr-3 text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Interest Calculator</h3>
                <p className="text-sm text-gray-600">See how interest accumulates until your write-off date</p>
              </div>
            </a>
          </div>
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Understanding Student Loan Write-Offs</h2>
          <p>A key feature of the UK student loan system is that all loans are automatically written off after a set period, regardless of how much you&apos;ve repaid or how much is left. This is sometimes called the &quot;forgiveness period.&quot;</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-writeoffs-work">
              <AccordionTrigger>How Write-Offs Work</AccordionTrigger>
              <AccordionContent>
                <p>When your loan is written off:</p>
                <ul>
                  <li>You&apos;ll no longer need to make any repayments</li>
                  <li>Any remaining balance is completely cleared</li>
                  <li>You&apos;ll receive confirmation from the Student Loans Company</li>
                  <li>The write-off happens automatically - you don&apos;t need to apply</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="writeoff-periods">
              <AccordionTrigger>Different Plans, Different Write-Off Periods</AccordionTrigger>
              <AccordionContent>
                <p>The time until write-off varies by loan plan:</p>
                <ul>
                  <li><strong>Plan 1:</strong> 25 years from the April after you finish your course</li>
                  <li><strong>Plan 2:</strong> 30 years from the April after you finish your course</li>
                  <li><strong>Plan 4:</strong> 30 years from the April after you finish your course</li>
                  <li><strong>Plan 5:</strong> 40 years from the April after you finish your course</li>
                  <li><strong>Postgraduate Loan:</strong> 30 years from the April after you finish your course</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="should-you-wait">
              <AccordionTrigger>Should You Wait for Write-Off?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <p>For many borrowers, especially those on Plan 2 and Plan 5 with moderate incomes, waiting for the loan to be written off can be a financially sensible strategy. Research suggests that around 80% of Plan 2 borrowers will not repay their loan in full before it&apos;s written off.</p>
                  <p>However, higher earners may repay their loans in full before the write-off date. If you&apos;re likely to be in this category, you might consider making voluntary overpayments to reduce the total interest you pay. Our <a className="text-blue-600 hover:underline" href="/calculators/student-loan-overpayment-calculator/">Overpayment Calculator</a> can help determine if this makes sense for your situation.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="mt-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-when-writeoff">
              <AccordionTrigger>When are student loans written off in the UK?</AccordionTrigger>
              <AccordionContent>
                <p>The write-off period depends on your loan plan: Plan 1 loans are written off after 25 years, Plan 2 after 30 years, Plan 4 after 30 years, Plan 5 after 40 years, and Postgraduate loans after 30 years from the April after you complete your course.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-apply">
              <AccordionTrigger>Do I need to apply for my loan to be written off?</AccordionTrigger>
              <AccordionContent>
                <p>No, the write-off happens automatically. The Student Loans Company will notify you when your loan has been cancelled, and you do not need to take any action.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-partial-forgiveness">
              <AccordionTrigger>Can I get partial loan forgiveness before the write-off date?</AccordionTrigger>
              <AccordionContent>
                <p>Unlike some other countries, the UK does not offer partial loan forgiveness for public service or other specific career paths. The only exception is if you become permanently disabled and unable to work, in which case you may be eligible for disability-related cancellation.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calculate your total repayment</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Want to know how much you&apos;ll repay before your loan is written off? Try our total loan cost calculator.
          </p>
          <a
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/total-loan-cost-calculator/"
          >
            Try Total Cost Calculator
          </a>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-700">{value}</p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
}

function Tr({ cells }: { cells: string[] }) {
  return (
    <tr>
      {cells.map((c, i) => (
        <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
          {c}
        </td>
      ))}
    </tr>
  );
}
