"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type PlanDetails = {
  name: string;
  threshold: number;
  rate: number;
  interest: number;
  writeOffYears: number;
  applicableYears: string;
};

type ComparisonResult = {
  graduationYear: number;
  planType: string;
  planDetails: PlanDetails;
  repaymentStartYear: number;
  writeOffYear: number;
  totalRepaid: number;
  totalInterest: number;
  monthlyPayment: number;
  yearsToRepay: number | null;
  fullyRepaid: boolean;
};

const PLAN_CONFIGS: Record<string, (gradYear: number) => PlanDetails> = {
  plan1: (gradYear) => ({
    name: "Plan 1",
    threshold: gradYear >= 2023 ? 22_015 : 20_195, // Threshold updated April 2023
    rate: 0.09,
    interest: 0.046,
    writeOffYears: 25,
    applicableYears: "Pre-2012 or Northern Ireland",
  }),
  plan2: (gradYear) => ({
    name: "Plan 2",
    threshold: 27_295,
    rate: 0.09,
    interest: 0.071,
    writeOffYears: gradYear >= 2023 ? 40 : 30, // Changed for Sept 2023+ starters
    applicableYears: "2012-2023",
  }),
  plan5: (gradYear) => ({
    name: "Plan 5",
    threshold: 25_000,
    rate: 0.09,
    interest: 0.071, // RPI only - using same rate as Plan 2 for now
    writeOffYears: 40,
    applicableYears: "2023+",
  }),
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

function simulateGraduationYear({
  graduationYear,
  planType,
  salary,
  loanAmount,
  salaryGrowthRate,
}: {
  graduationYear: number;
  planType: string;
  salary: number;
  loanAmount: number;
  salaryGrowthRate: number;
}): ComparisonResult {
  const getPlanDetails = PLAN_CONFIGS[planType];
  const planDetails = getPlanDetails(graduationYear);

  const repaymentStartYear = graduationYear + 1; // Start in April after graduation
  const writeOffYear = repaymentStartYear + planDetails.writeOffYears;
  const monthlyInterestRate = planDetails.interest / 12;

  let balance = loanAmount;
  let totalRepaid = 0;
  let totalInterest = 0;
  let currentSalary = salary;
  let yearsToRepay: number | null = null;
  let fullyRepaid = false;

  for (let year = repaymentStartYear; year < writeOffYear; year++) {
    // Calculate salary for this year with growth
    const yearsFromStart = year - repaymentStartYear;
    currentSalary = salary * Math.pow(1 + salaryGrowthRate / 100, yearsFromStart);

    // Calculate annual repayment
    const incomeAboveThreshold = Math.max(0, currentSalary - planDetails.threshold);
    const annualRepayment = incomeAboveThreshold * planDetails.rate;

    // Simulate monthly for accuracy
    for (let month = 0; month < 12; month++) {
      if (balance <= 0) break;

      // Accrue interest
      const monthInterest = balance * monthlyInterestRate;
      balance += monthInterest;
      totalInterest += monthInterest;

      // Make payment
      const monthlyRepayment = annualRepayment / 12;
      const payment = Math.min(balance, monthlyRepayment);
      balance -= payment;
      totalRepaid += payment;

      if (balance <= 0.01) {
        balance = 0;
        fullyRepaid = true;
        yearsToRepay = year - repaymentStartYear + (month + 1) / 12;
        break;
      }
    }

    if (fullyRepaid) break;
  }

  // Calculate current monthly payment
  const incomeAboveThreshold = Math.max(0, salary - planDetails.threshold);
  const monthlyPayment = (incomeAboveThreshold * planDetails.rate) / 12;

  return {
    graduationYear,
    planType,
    planDetails,
    repaymentStartYear,
    writeOffYear,
    totalRepaid,
    totalInterest,
    monthlyPayment,
    yearsToRepay,
    fullyRepaid,
  };
}

export default function GraduationYearCalculator() {
  const [graduationYear, setGraduationYear] = useState(2020);
  const [salary, setSalary] = useState(35_000);
  const [loanAmount, setLoanAmount] = useState(45_000);
  const [salaryGrowth, setSalaryGrowth] = useState(3);
  const [compareMode, setCompareMode] = useState(false);
  const [comparisonYears, setComparisonYears] = useState<number[]>([2012, 2020, 2023]);

  // Determine applicable plan based on graduation year
  const getApplicablePlan = (year: number): string => {
    if (year < 2012) return "plan1";
    if (year >= 2012 && year < 2023) return "plan2";
    return "plan5";
  };

  const primaryPlan = getApplicablePlan(graduationYear);

  const result = useMemo(
    () =>
      simulateGraduationYear({
        graduationYear,
        planType: primaryPlan,
        salary,
        loanAmount,
        salaryGrowthRate: salaryGrowth,
      }),
    [graduationYear, primaryPlan, salary, loanAmount, salaryGrowth]
  );

  const comparisons = useMemo(() => {
    if (!compareMode) return [];
    return comparisonYears.map((year) =>
      simulateGraduationYear({
        graduationYear: year,
        planType: getApplicablePlan(year),
        salary,
        loanAmount,
        salaryGrowthRate: salaryGrowth,
      })
    );
  }, [compareMode, comparisonYears, salary, loanAmount, salaryGrowth]);

  const graduationYearOptions = Array.from({ length: 40 }, (_, i) => 1998 + i);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Graduation Year Impact Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Graduation Year Impact Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Compare how different graduation years affect your student loan repayments and write-off terms
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="text-purple-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Why Graduation Year Matters</h3>
                  <p className="text-sm text-gray-600">
                    Student loan rules have changed significantly over time. Your graduation year determines your repayment plan, threshold, interest rates, and write-off period.
                  </p>
                </div>
              </div>
            </div>

            {/* Graduation Year */}
            <div>
              <label htmlFor="grad-year" className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <select
                id="grad-year"
                value={graduationYear}
                onChange={(e) => setGraduationYear(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                {graduationYearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Applicable Plan: <strong>{result.planDetails.name}</strong> ({result.planDetails.applicableYears})
              </p>
            </div>

            {/* Annual Salary */}
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={15000}
                  max={100000}
                  step={1000}
                  value={Math.min(100000, salary)}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Your threshold: {fmtMoney(result.planDetails.threshold)}
              </p>
            </div>

            {/* Loan Amount */}
            <div>
              <label htmlFor="loan" className="block text-sm font-medium text-gray-700 mb-1">
                Total Loan Amount
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="loan"
                  min={0}
                  max={200000}
                  step={1000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Including tuition fees and maintenance loans
              </p>
            </div>

            {/* Salary Growth */}
            <div>
              <label htmlFor="growth" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Annual Salary Growth
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="growth"
                  min={0}
                  max={20}
                  step={0.5}
                  value={salaryGrowth}
                  onChange={(e) => setSalaryGrowth(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.5}
                  value={Math.min(10, salaryGrowth)}
                  onChange={(e) => setSalaryGrowth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Compare Toggle */}
            <div className="pt-4 border-t border-gray-200">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium text-gray-700">Compare Multiple Years</span>
                <div className="relative inline-flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={compareMode}
                    onChange={(e) => setCompareMode(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-600 transition" />
                </div>
              </label>
              <p className="mt-1 text-xs text-gray-500">
                See how different graduation years compare side-by-side
              </p>
            </div>

            {compareMode && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comparison Years
                </label>
                <div className="space-y-2">
                  {[2012, 2020, 2023].map((year) => (
                    <label key={year} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={comparisonYears.includes(year)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setComparisonYears([...comparisonYears, year].sort());
                          } else {
                            setComparisonYears(comparisonYears.filter((y) => y !== year));
                          }
                        }}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{year}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        ({getApplicablePlan(year) === "plan1" ? "Plan 1" :
                          getApplicablePlan(year) === "plan2" ? "Plan 2" : "Plan 5"})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Impact for {graduationYear} Graduate
            </h2>

            <div className="space-y-4">
              {/* Plan Type */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm text-gray-500">Your Loan Plan</p>
                <p className="text-2xl font-bold text-gray-800">{result.planDetails.name}</p>
                <p className="text-sm text-gray-500">{result.planDetails.applicableYears}</p>
              </div>

              {/* Repayment Timeline */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Repayment Period</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-bold text-gray-800">{result.repaymentStartYear}</p>
                  <span className="text-gray-400">→</span>
                  <p className="text-xl font-bold text-gray-800">{result.writeOffYear}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {result.planDetails.writeOffYears} year write-off period
                </p>
              </div>

              {/* Monthly Payment */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Current Monthly Payment</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.monthlyPayment, 0)}</p>
                <p className="text-sm text-gray-500">
                  {result.planDetails.rate * 100}% of income above {fmtMoney(result.planDetails.threshold)}
                </p>
              </div>

              {/* Total Repaid */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Expected Repayment</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.totalRepaid, 0)}</p>
                {result.fullyRepaid ? (
                  <p className="text-sm text-green-600 font-medium">
                    Paid off in {result.yearsToRepay?.toFixed(1)} years
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    Remaining balance written off in {result.writeOffYear}
                  </p>
                )}
              </div>

              {/* Total Interest */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Total Interest</p>
                <p className="text-2xl font-bold text-gray-800">{fmtMoney(result.totalInterest, 0)}</p>
                <p className="text-sm text-gray-500">
                  At {(result.planDetails.interest * 100).toFixed(1)}% annual rate
                </p>
              </div>

              {/* Key Terms */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">Key Terms for Your Year</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Threshold:</span>
                    <span className="font-medium">{fmtMoney(result.planDetails.threshold)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Repayment rate:</span>
                    <span className="font-medium">{result.planDetails.rate * 100}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest rate:</span>
                    <span className="font-medium">{(result.planDetails.interest * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Write-off:</span>
                    <span className="font-medium">{result.planDetails.writeOffYears} years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {compareMode && comparisons.length > 0 && (
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Year-by-Year Comparison</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
                  {comparisons.map((comp) => (
                    <th key={comp.graduationYear} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                      {comp.graduationYear}
                      <div className="text-xs font-normal text-gray-400 normal-case mt-1">
                        {comp.planDetails.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Threshold</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center text-gray-900">
                      {fmtMoney(comp.planDetails.threshold)}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Monthly Payment</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center text-gray-900">
                      {fmtMoney(comp.monthlyPayment, 0)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Total Repaid</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center text-gray-900">
                      {fmtMoney(comp.totalRepaid, 0)}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Total Interest</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center text-gray-900">
                      {fmtMoney(comp.totalInterest, 0)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Write-off Period</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center text-gray-900">
                      {comp.planDetails.writeOffYears} years
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Write-off Year</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center text-gray-900">
                      {comp.writeOffYear}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Paid Off Early?</td>
                  {comparisons.map((comp) => (
                    <td key={comp.graduationYear} className="px-4 py-3 text-sm text-center">
                      {comp.fullyRepaid ? (
                        <span className="text-green-600 font-medium">
                          Yes ({comp.yearsToRepay?.toFixed(1)}y)
                        </span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-amber-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Comparison Insight:</strong> Graduates from different years face significantly different repayment terms.
              Later cohorts typically have higher thresholds but longer write-off periods.
            </p>
          </div>
        </section>
      )}

      {/* Key Changes Timeline */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Major Policy Changes by Year</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-purple-600">Pre-2012</span>
              </div>
              <div className="ml-6 flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Plan 1 Era</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lower tuition fees (max £3,000/year)</li>
                  <li>• Threshold: ~£20,000 (now £22,015)</li>
                  <li>• 25-year write-off period</li>
                  <li>• Lower interest rates (RPI or Base+1%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-purple-600">2012-2023</span>
              </div>
              <div className="ml-6 flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Plan 2 Introduction</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tuition fees rose to £9,000/year</li>
                  <li>• Higher threshold: £27,295</li>
                  <li>• 30-year write-off period</li>
                  <li>• Higher interest rates (RPI + up to 3%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-purple-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-lg font-bold text-purple-600">2023+</span>
              </div>
              <div className="ml-6 flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Plan 5 Launch</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tuition fees maintained at £9,250/year</li>
                  <li>• Threshold: £25,000</li>
                  <li>• <strong>40-year write-off period</strong> (major change)</li>
                  <li>• Lower interest rates (RPI only)</li>
                  <li>• Plan 2 also changed to 40-year write-off</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-4xl mx-auto prose prose-purple">
        <h2>Understanding Graduation Year Impact</h2>
        <p>
          When you graduated determines which student loan plan applies to you, and this has a huge impact on how much you&apos;ll repay over your lifetime. The UK government has changed student loan terms several times over the past decades.
        </p>

        <h3>Why Your Graduation Year Matters</h3>
        <p>Different graduation cohorts face different conditions:</p>
        <ul>
          <li><strong>Repayment Threshold:</strong> When you start paying back (varies by plan)</li>
          <li><strong>Interest Rates:</strong> How quickly your debt grows while studying and after</li>
          <li><strong>Write-off Period:</strong> When remaining debt is cancelled (25-40 years)</li>
          <li><strong>Repayment Rate:</strong> Percentage of income above threshold (typically 9%)</li>
        </ul>

        <h3>Real-World Example</h3>
        <p>Consider two graduates with identical circumstances except their graduation year:</p>

        <p><strong>Graduate A (2010 - Plan 1):</strong></p>
        <ul>
          <li>Threshold: £22,015</li>
          <li>Write-off: 25 years (2036)</li>
          <li>Interest: ~4.6%</li>
          <li>On £35,000 salary: £97/month</li>
        </ul>

        <p><strong>Graduate B (2024 - Plan 5):</strong></p>
        <ul>
          <li>Threshold: £25,000</li>
          <li>Write-off: 40 years (2065)</li>
          <li>Interest: ~7.1%</li>
          <li>On £35,000 salary: £75/month</li>
        </ul>

        <p>
          Graduate B pays less per month due to a higher threshold, but has a much longer write-off period. Over a lifetime, the total amounts repaid can differ dramatically based on career earnings trajectory.
        </p>

        <h3>The 2023 Changes</h3>
        <p>
          September 2023 saw major reforms that affected both new students (Plan 5) and existing Plan 2 borrowers:
        </p>
        <ul>
          <li>New students moved to Plan 5 with a lower threshold (£25,000 vs £27,295)</li>
          <li>Write-off periods extended from 30 to 40 years for both Plan 2 and Plan 5</li>
          <li>Interest rates reduced to RPI only (no additional percentage)</li>
          <li>These changes mean students will likely repay more over their lifetime</li>
        </ul>

        <h3>Planning Considerations</h3>
        <p>Understanding your graduation year&apos;s impact helps you:</p>
        <ul>
          <li>Predict lifetime repayment amounts more accurately</li>
          <li>Decide whether voluntary overpayments make financial sense</li>
          <li>Plan for how long repayments will affect your budget</li>
          <li>Understand if you&apos;re likely to repay in full or benefit from write-off</li>
        </ul>

        <h3>Who Benefits Most from Write-Off?</h3>
        <p>
          Lower and middle earners are more likely to have balances written off, while high earners typically repay their loans in full plus significant interest. Your graduation year determines how long this safety net lasts.
        </p>
      </section>

      {/* Key Insights */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-purple-500">
            <div className="text-purple-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Locked In</h3>
            <p className="text-sm text-gray-600">
              Your graduation year permanently determines your loan plan. You can&apos;t switch plans later, even if new terms seem more favorable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-purple-500">
            <div className="text-purple-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Trade-offs</h3>
            <p className="text-sm text-gray-600">
              Higher thresholds mean lower monthly payments but don&apos;t necessarily mean you&apos;ll pay less overall. Interest continues to accrue.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-purple-500">
            <div className="text-purple-600 mb-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Longer Terms</h3>
            <p className="text-sm text-gray-600">
              Recent graduates face 40-year write-off periods vs 25 years for pre-2012 graduates. This extends the repayment burden significantly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Want to Explore Other Scenarios?</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Try our other calculators to understand salary growth impact, overpayment strategies, and more.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Salary Growth Calculator
          </button>
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            Overpayment Calculator
          </button>
        </div>
      </section>
    </div>
  );
}