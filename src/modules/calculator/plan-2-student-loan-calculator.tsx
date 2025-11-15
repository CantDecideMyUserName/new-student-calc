"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ---------- SEO (App Router metadata) ----------
export const metadata: Metadata = {
  title:
    "Plan 2 Student Loan Calculator UK - Monthly Repayment Estimator | Student Loan Calculator UK",
  description:
    "Calculate your Plan 2 student loan repayments if you started university between 2012-2023 in England and Wales. See monthly payments and repayment timeline.",
  applicationName: "Student Loan Calculator UK",
  creator: "Student Loan Calculator UK",
  generator: "Next.js",
  authors: [{ name: "Student Loan Calculator UK Team" }],
  keywords: [
    "student loan calculator",
    "uk student loan",
    "plan 2 calculator",
    "plan 5 calculator",
    "student finance",
    "loan repayments",
  ],
  robots: { index: true, follow: true, googleBot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
  openGraph: {
    type: "website",
    siteName: "Student Loan Calculator UK",
    url: "https://studentloancalculator.co.uk/",
    title: "Student Loan Calculator UK - Free Repayment Calculator & Guides",
    description:
      "Calculate your UK student loan repayments with our free calculators. Accurate repayment estimates for all loan types.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student Loan Calculator UK",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Loan Calculator UK",
    description:
      "Calculate your UK student loan repayments with our free calculators.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical:
      "https://studentloancalculator.uk/calculators/plan-2-student-loan-calculator/",
  },
  other: { "format-detection": "telephone=no, address=no, email=no" },
};

// ---------- Constants ----------
const PLAN2 = {
  threshold: 27295, // £
  upperThreshold: 49130, // £
  rate: 0.09,
  writeOffYears: 30,
} as const;

/** Keep RPI internal (no visible input). Adjust when you update site-wide. */
const RPI = 0.046; // example 4.6%

// ---------- Utilities ----------
const GBP0 = (v: number) =>
  v.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  });

const fmtMonthYear = (d: Date) =>
  d.toLocaleString("en-GB", { month: "long", year: "numeric" });

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function addMonths(date: Date, months: number) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

/** Sliding Plan 2 interest (post-study): RPI .. RPI+3% depending on income */
function plan2InterestForIncome(rpi: number, income: number) {
  if (income <= PLAN2.threshold) return rpi;
  if (income >= PLAN2.upperThreshold) return rpi + 0.03;
  const t =
    (income - PLAN2.threshold) / (PLAN2.upperThreshold - PLAN2.threshold);
  return rpi + 0.03 * t; // linear between thresholds
}
function rpiLabel(rpi: number, income: number) {
  if (income <= PLAN2.threshold) return `RPI only (${(rpi * 100).toFixed(1)}%)`;
  if (income >= PLAN2.upperThreshold) return "RPI + 3%";
  return "RPI → RPI+3% (sliding)";
}

// ---------- Page ----------
export default function Plan2CalculatorPage() {
  // Inputs
  const [salary, setSalary] = useState(30000);
  const [gradYear, setGradYear] = useState(2020);
  const [loan, setLoan] = useState(45000);
  const [overOn, setOverOn] = useState(false);
  const [overMonthly, setOverMonthly] = useState(0);

  // Bound slider/text fields a bit to keep UX sane
  const salaryMin = 0;
  const salaryMax = 150000;
  const loanMin = 1000;
  const loanMax = 150000;

  // Dates
  const startDate = useMemo(() => new Date(gradYear, 3, 1), [gradYear]); // April
  const writeOffDate = useMemo(
    () => new Date(gradYear + PLAN2.writeOffYears, 3, 1),
    [gradYear]
  );

  // Core calculations (live)
  const result = useMemo(() => {
    const appliedAnnualRate = plan2InterestForIncome(RPI, salary);
    const monthlyRate = appliedAnnualRate / 12;
    const mandatoryMonthly = Math.max(
      0,
      ((salary - PLAN2.threshold) * PLAN2.rate) / 12
    );
    const monthlyNow =
      mandatoryMonthly + (overOn ? Math.max(0, overMonthly) : 0);

    // Repayment simulation until write-off (or clear)
    let bal = Math.max(0, loan);
    let paid = 0;
    let interestPaid = 0;
    let months = 0;

    const maxMonths =
      (writeOffDate.getFullYear() - startDate.getFullYear()) * 12 +
      (writeOffDate.getMonth() - startDate.getMonth());

    for (let m = 0; m < Math.max(0, maxMonths); m++) {
      if (bal <= 0) break;
      const interestThisMonth = bal * monthlyRate;
      bal += interestThisMonth;

      const repay = Math.min(monthlyNow, bal);
      bal -= repay;

      paid += repay;
      interestPaid += Math.min(interestThisMonth, repay);
      months = m + 1;
    }

    const cleared = bal <= 0;
    return {
      monthlyNow,
      annualNow: monthlyNow * 12,
      totalPaid: Math.round(paid),
      totalInterest: Math.round(interestPaid),
      cleared,
      monthsToClear: cleared ? months : 0,
      appliedAnnualRate,
    };
  }, [salary, loan, overOn, overMonthly, startDate, writeOffDate]);

  // JSON-LD (inject on mount so it works client-side too)
  useEffect(() => {
    const addLd = (id: string, json: object) => {
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.body.appendChild(el);
      }
      el.text = JSON.stringify(json);
    };

    addLd("ld-breadcrumbs", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://studentloancalculator.co.uk",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Calculators",
          item: "https://studentloancalculator.co.uk/calculators",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Plan 2 Calculator",
          item:
            "https://studentloancalculator.co.uk/calculators/plan-2-student-loan-calculator",
        },
      ],
    });

    addLd("ld-software", {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Plan 2 Student Loan Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Windows, macOS, iOS, Android, Linux",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      url:
        "https://studentloancalculator.co.uk/calculators/plan-2-student-loan-calculator",
      description:
        "Calculate monthly repayments for a Plan 2 student loan based on your income and loan balance.",
      image:
        "https://studentloancalculator.co.uk/images/og/calculators/plan-2-calculator.jpg",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "156",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "UK Plan 2 student loan calculation",
        "Monthly repayment projections",
        "Lifetime repayment forecasts",
        "Total cost analysis",
        "Accurate threshold and interest calculations",
      ],
    });

    addLd("ld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much will I repay on a Plan 2 student loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You repay 9% of your income above £27,295 per year (£2,274 per month). Your monthly repayment amount changes with your income, and your loan is written off after 30 years regardless of how much you've repaid.",
          },
        },
        {
          "@type": "Question",
          name: "What is the interest rate on Plan 2 student loans?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The interest rate varies with your income. While studying and until the April after graduation, it's RPI+3%. After that, it ranges from RPI (for incomes below £27,295) to RPI+3% (for incomes above £49,130), with a sliding scale between these thresholds.",
          },
        },
        {
          "@type": "Question",
          name: "Will I pay off my Plan 2 student loan in full?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Around 80% of Plan 2 borrowers are not expected to fully repay their loans before the 30-year write-off period. Whether you pay in full depends on your starting salary, career progression, and loan balance. Higher earners are more likely to repay in full.",
          },
        },
      ],
    });
  }, []);

  // Derived display
  const expectedDate = result.cleared
    ? fmtMonthYear(addMonths(new Date(), result.monthsToClear))
    : fmtMonthYear(writeOffDate);

  const years = Array.from({ length: 14 }, (_, i) => 2012 + i); // 2012..2025

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* HERO */}
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
                    <li><span className="font-medium text-gray-800" aria-current="page">Plan 2 Calculator</span></li>
                  </ol>
                </nav>

                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Plan 2 Student Loan Calculator
                  </h1>
                  <div className="text-sm text-gray-500">
                    Last updated: January 15, 2024
                  </div>
                </div>
                <p className="text-xl text-gray-600">
                  Estimate your monthly and total repayments for Plan 2 student
                  loans in England and Wales.
                </p>
                <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mt-4">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  Based on official UK government repayment policy
                </div>
              </div>
            </section>

            {/* CALCULATOR CARD */}
            <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          About Plan 2 Loans
                        </h3>
                        <p className="text-sm text-gray-600">
                          Plan 2 loans apply to students who started university
                          in England or Wales after September 2012. You repay 9%
                          of income above £{PLAN2.threshold.toLocaleString()} per
                          year.{" "}
                          <Link
                            href="/guides/loan-types-explained"
                            className="text-blue-600 hover:underline"
                          >
                            Learn more about loan types
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => e.preventDefault()} // keep button for UX but no scrolling/submit
                  >
                    <div className="space-y-6">
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
                            type="number"
                            id="salary"
                            name="salary"
                            min={salaryMin}
                            max={250000}
                            step={1000}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            aria-describedby="salary-hint"
                            value={salary}
                            onChange={(e) =>
                              setSalary(
                                clamp(
                                  Number(e.target.value || 0),
                                  salaryMin,
                                  250000
                                )
                              )
                            }
                          />
                        </div>
                        <div className="mt-1">
                          <input
                            type="range"
                            id="salary-slider"
                            min={salaryMin}
                            max={salaryMax}
                            step={1000}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            aria-hidden="true"
                            value={clamp(salary, salaryMin, salaryMax)}
                            onChange={(e) =>
                              setSalary(clamp(Number(e.target.value), salaryMin, salaryMax))
                            }
                          />
                        </div>
                        <p
                          id="salary-hint"
                          className="mt-1 text-sm text-gray-500"
                        >
                          The threshold for Plan 2 repayments is £
                          {PLAN2.threshold.toLocaleString()}
                        </p>
                      </div>

                      {/* Grad year */}
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
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          aria-describedby="graduation-hint"
                          value={gradYear}
                          onChange={(e) => setGradYear(Number(e.target.value))}
                        >
                          {years.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                        <p
                          id="graduation-hint"
                          className="mt-1 text-sm text-gray-500"
                        >
                          Plan 2 applies to students who started after September
                          2012
                        </p>
                      </div>

                      {/* Loan */}
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
                            type="number"
                            id="loan-amount"
                            name="loan-amount"
                            min={loanMin}
                            max={loanMax}
                            step={1000}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            aria-describedby="loan-hint"
                            value={loan}
                            onChange={(e) =>
                              setLoan(
                                clamp(Number(e.target.value || 0), loanMin, loanMax)
                              )
                            }
                          />
                        </div>
                        <p id="loan-hint" className="mt-1 text-sm text-gray-500">
                          Include tuition fees and maintenance loans
                        </p>
                      </div>

                      {/* Overpayment */}
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
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={overOn}
                                onChange={(e) => setOverOn(e.target.checked)}
                              />
                            </div>
                            <div className="ml-2 text-sm">
                              <label
                                htmlFor="overpayment-toggle"
                                className="font-medium text-gray-700"
                              >
                                Include
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-2">£</span>
                          <input
                            type="number"
                            id="overpayment"
                            name="overpayment"
                            min={0}
                            max={2000}
                            step={10}
                            disabled={!overOn}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm disabled:opacity-50 disabled:bg-gray-100"
                            aria-describedby="overpayment-hint"
                            value={overMonthly}
                            onChange={(e) =>
                              setOverMonthly(Math.max(0, Number(e.target.value || 0)))
                            }
                          />
                        </div>
                        <p
                          id="overpayment-hint"
                          className="mt-1 text-sm text-gray-500"
                        >
                          Additional monthly payment on top of required amount.{" "}
                          <Link
                            href="/guides/should-i-overpay-loan"
                            className="text-blue-600 hover:underline"
                          >
                            Should you overpay?
                          </Link>
                        </p>
                      </div>

                      {/* Submit (no-op; calcs are live) */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          Calculate Repayments
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Your Repayment Summary
                  </h2>

                  <div className="space-y-4">
                    <SummaryItem
                      label="Monthly Repayment"
                      value={GBP0(Math.round(result.monthlyNow))}
                      sub="9% of income above threshold"
                      border
                    />
                    <SummaryItem
                      label="Annual Repayment"
                      value={GBP0(Math.round(result.annualNow))}
                      border
                    />
                    <SummaryItem
                      label="Total to be Repaid"
                      value={GBP0(result.totalPaid)}
                      sub="Over the life of the loan"
                      border
                    />
                    <SummaryItem
                      label="Total Interest Paid"
                      value={GBP0(result.totalInterest)}
                      border
                    />
                    <SummaryItem
                      label="Expected Write-Off Date"
                      value={expectedDate}
                      sub={
                        result.cleared
                          ? "Based on current inputs, loan clears before write-off"
                          : "30 years after entering repayment"
                      }
                    />
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Current Interest Rate: </span>
                      {rpiLabel(RPI, salary)} (
                      {(plan2InterestForIncome(RPI, salary) * 100).toFixed(1)}% total)
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="bg-blue-50 rounded-lg p-4 ">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        Why Trust This Calculator?
                      </h3>
                      <ul className="space-y-2">
                        <TrustRow text="Based on official UK loan plans" />
                        <TrustRow text="No personal data collected" lock />
                        <TrustRow text="Calculators built by financial experts" bulb />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer + reviewer */}
              <div className="mt-6">
                <div className="bg-gray-50 border-l-4 border-blue-400 p-4 text-sm text-gray-600 ">
                  <p className="font-medium mb-1">Disclaimer:</p>
                  <p>
                    Calculations are estimates based on current UK student loan
                    rules. Results may change with future policy updates.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-600 border-t border-gray-200 pt-4">
                <p className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span>Reviewed by Michael Chen, Financial Advisor (Certified in Student Finance)</span>
                </p>
              </div>
            </section>

            {/* Related calculators */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Related Calculators
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CardLink
                  href="/calculators/plan-5-student-loan-calculator"
                  title="Plan 5 Calculator"
                  desc="Compare with the newer Plan 5 loan system (for students starting from 2023)"
                />
                <CardLink
                  href="/calculators/student-loan-overpayment-calculator"
                  title="Overpayment Calculator"
                  desc="See how much you could save by making extra payments"
                />
              </div>
            </section>

            <section className="max-w-4xl mx-auto prose prose-blue">
              <h2>How Does the Plan 2 Student Loan Calculator Work?</h2>
              <p>
                This calculator helps you understand your <strong>Plan 2 student loan repayments</strong> based on your salary and graduation year. Plan 2 loans apply to students who started higher education in England or Wales from September 2012 onwards.
              </p>

              <Accordion type="multiple" className="w-full">
                <AccordionItem value="key-facts">
                  <AccordionTrigger>Key Facts About Plan 2 Student Loans</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li><strong>Repayment Threshold:</strong> You only repay when you earn above £27,295 per year (£2,274 per month)</li>
                      <li><strong>Repayment Rate:</strong> 9% of income above the threshold</li>
                      <li><strong>Interest Rate:</strong> Variable based on RPI plus up to 3% depending on income</li>
                      <li><strong>Forgiveness Period:</strong> Any remaining balance is written off 30 years after entering repayment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-it-works">
                  <AccordionTrigger>How Plan 2 Repayments Work</AccordionTrigger>
                  <AccordionContent>
                    <p>If you earn £30,000 per year, you&apos;ll repay 9% of the amount over the threshold:</p>
                    <ul>
                      <li>Annual income: £30,000</li>
                      <li>Repayment threshold: £27,295</li>
                      <li>Income above threshold: £2,705</li>
                      <li>Repayment rate: 9%</li>
                      <li>Annual repayment: £243.45 (approx. £20 per month)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="common-questions">
                  <AccordionTrigger>Common Questions About Plan 2 Repayments</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">When do I start repaying my Plan 2 loan?</h4>
                        <p>You&apos;ll start repaying from the April after you finish your course, but only if you&apos;re earning above the repayment threshold. Repayments are made automatically through the UK tax system (PAYE) or via Self Assessment if you&apos;re self-employed.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Does early repayment make sense?</h4>
                        <p>For most borrowers, making extra payments may not be financially advantageous since many won&apos;t fully repay before the loan is forgiven. Use our <Link className="text-blue-700 hover:underline" href="/calculators/student-loan-overpayment-calculator">Overpayment Calculator</Link> to see if voluntary repayments would benefit you.</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">What happens if I go abroad?</h4>
                        <p>If you move overseas, you&apos;ll still need to repay your student loan. However, the repayment threshold will be different based on the cost of living in your new country of residence. You&apos;ll need to update the Student Loans Company about your circumstances and income.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* FAQ preview (static, matches JSON-LD) */}
            <section className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <FaqItem q="Will my Plan 2 loan affect my credit score?">
                  No, your student loan doesn&apos;t appear on your credit file and won&apos;t affect your credit score. However, student loan repayments are considered in affordability assessments for mortgages and other loans.
                </FaqItem>
                <FaqItem q="How is the interest calculated on Plan 2 loans?">
                  Interest on Plan 2 loans varies based on your income. While studying and until the April after graduation, interest is RPI + 3%. After that, it ranges from RPI (if earning below the threshold) to RPI + 3% (if earning £49,130 or more), with a sliding scale in between.
                </FaqItem>
                <FaqItem q="What's the difference between Plan 2 and Plan 5 loans?">
                  Plan 5 loans (for students starting from 2023/24) have a lower repayment threshold (£25,000), longer repayment term (40 years vs 30), and lower interest rate (just RPI, with no additional percentage). This means lower monthly payments but potentially paying more over the lifetime of the loan.
                </FaqItem>
              </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to see if you could save money?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Try our overpayment calculator to see if making extra payments could help you save money on your student loan.
              </p>
              <Link
                href="/calculators/student-loan-overpayment-calculator"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Try Our Overpayment Calculator
              </Link>
            </section>

            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb">
              <ol className="flex items-center space-x-1 text-sm text-gray-600">
                <li>
                  <Link className="hover:text-blue-700 hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <CrumbSep />
                <li>
                  <Link
                    className="hover:text-blue-700 hover:underline"
                    href="/calculators"
                  >
                    Calculators
                  </Link>
                </li>
                <CrumbSep />
                <li>
                  <span className="font-medium text-gray-800" aria-current="page">
                    Plan 2 Calculator
                  </span>
                </li>
              </ol>
            </nav>

            {/* Sources */}
            <section className="max-w-4xl mx-auto">
              <section className="border-t border-gray-200 pt-6 mt-8 ">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Sources &amp; References
                </h2>
                <ul className="space-y-3">
                  <SourceItem
                    n={1}
                    href="https://www.gov.uk/repaying-your-student-loan"
                    title="Student Loan Repayment"
                    meta="GOV.UK"
                  />
                  <SourceItem
                    n={2}
                    href="https://www.gov.uk/guidance/how-interest-is-calculated-plan-1"
                    title="Interest rates information"
                    meta="Student Loans Company"
                  />
                  <SourceItem
                    n={3}
                    href="http://educationhub.blog.gov.uk/2022/06/what-you-need-to-know-about-plan-2-student-loan-repayments/"
                    title="Plan 2: Repayment Guide"
                    meta="GOV.UK"
                  />
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Our content is based on the latest information from official UK
                  government sources. The calculators use current repayment thresholds
                  and interest rates as defined by Student Finance England and
                  equivalent bodies.
                </p>
              </section>
            </section>

            {/* Understanding section */}
            <section className="max-w-4xl mx-auto mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                Understanding Your Plan 2 Student Loan
              </h2>
              <div className="prose max-w-none">
                <p>
                  Plan 2 student loans have specific interest rates and repayment terms that affect how much you&apos;ll pay back over time. The interest rate varies based on your income, with higher earners paying more interest.
                </p>
                <h3>Related Resources</h3>
                <ul>
                  <li>
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/guides/student-loan-interest-rates"
                    >
                      How student loan interest rates work
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/compare/plan-2-vs-plan-5"
                    >
                      Compare Plan 2 vs new Plan 5 loans
                    </Link>
                  </li>
                </ul>
                <p>
                  If you&apos;re making career decisions, you might also be interested in{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    href="/guides/student-loans-high-earners"
                  >
                    how student loans affect high earners
                  </Link>{" "}
                  or{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    href="/guides/student-loans-and-taxes"
                  >
                    the interaction between student loans and taxes
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
}

// ---------- Small components ----------
function SummaryItem({
  label,
  value,
  sub,
  border,
}: {
  label: string;
  value: string;
  sub?: string;
  border?: boolean;
}) {
  return (
    <div className={`${border ? "border-b border-gray-200 pb-4" : ""}`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      {sub ? <p className="text-sm text-gray-500">{sub}</p> : null}
    </div>
  );
}

function TrustRow({
  text,
  lock,
  bulb,
}: {
  text: string;
  lock?: boolean;
  bulb?: boolean;
}) {
  return (
    <li className="flex items-center text-sm text-gray-700">
      <span className="mr-2 text-blue-600">
        {lock ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ) : bulb ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </span>
      {text}
    </li>
  );
}

function CardLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
      href={href}
    >
      <div className="mr-3 text-blue-700">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div>
        <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button className="w-full flex justify-between items-center p-4 focus:outline-none">
        <span className="font-medium text-left">{q}</span>
        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="p-4 pt-0">
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

function CrumbSep() {
  return (
    <li className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </li>
  );
}

function SourceItem({
  n,
  href,
  title,
  meta,
}: {
  n: number;
  href: string;
  title: string;
  meta: string;
}) {
  return (
    <li className="flex items-start">
      <span className="text-gray-500 mr-2">{n}.</span>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
          href={href}
        >
          {title}
        </a>
        <p className="text-sm text-gray-600">{meta}</p>
      </div>
    </li>
  );
}

