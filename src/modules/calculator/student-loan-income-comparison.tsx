"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type ComparisonResult = {
  salary: number;
  plan1Monthly: number;
  plan1Annual: number;
  plan2Monthly: number;
  plan2Annual: number;
  plan5Monthly: number;
  plan5Annual: number;
  differencePlan1vs2: number;
  differencePlan1vs5: number;
  differencePlan2vs5: number;
};

// Loan plan thresholds and rates (2024/25 values)
const PLANS = {
  PLAN1: {
    THRESHOLD: 22_015,
    REPAY_RATE: 0.09,
    NAME: "Plan 1",
    DESCRIPTION: "Pre-2012 students (England/Wales), Northern Ireland students"
  },
  PLAN2: {
    THRESHOLD: 27_295,
    REPAY_RATE: 0.09,
    NAME: "Plan 2", 
    DESCRIPTION: "2012-2023 students (England/Wales)"
  },
  PLAN5: {
    THRESHOLD: 25_000,
    REPAY_RATE: 0.09,
    NAME: "Plan 5",
    DESCRIPTION: "2023+ students (England/Wales)"
  }
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const fmtMoneyDiff = (n: number, dp = 0) => {
  const formatted = fmtMoney(Math.abs(n), dp);
  return n >= 0 ? `+${formatted}` : `-${formatted}`;
};

function calculateRepayment(salary: number, threshold: number, rate: number) {
  const annualRepayment = Math.max(0, (salary - threshold) * rate);
  const monthlyRepayment = annualRepayment / 12;
  return { monthly: monthlyRepayment, annual: annualRepayment };
}

function generateComparisonData(salaries: number[]): ComparisonResult[] {
  return salaries.map(salary => {
    const plan1 = calculateRepayment(salary, PLANS.PLAN1.THRESHOLD, PLANS.PLAN1.REPAY_RATE);
    const plan2 = calculateRepayment(salary, PLANS.PLAN2.THRESHOLD, PLANS.PLAN2.REPAY_RATE);
    const plan5 = calculateRepayment(salary, PLANS.PLAN5.THRESHOLD, PLANS.PLAN5.REPAY_RATE);

    return {
      salary,
      plan1Monthly: plan1.monthly,
      plan1Annual: plan1.annual,
      plan2Monthly: plan2.monthly,
      plan2Annual: plan2.annual,
      plan5Monthly: plan5.monthly,
      plan5Annual: plan5.annual,
      differencePlan1vs2: plan1.annual - plan2.annual,
      differencePlan1vs5: plan1.annual - plan5.annual,
      differencePlan2vs5: plan2.annual - plan5.annual,
    };
  });
}

export default function StudentLoanIncomeComparisonPage() {
  const [customSalary, setCustomSalary] = useState(35_000);
  const [comparisonMode, setComparisonMode] = useState<"preset" | "custom">("preset");
  const [showMonthly, setShowMonthly] = useState(false);

  // Preset salary ranges for comparison
  const presetSalaries = [20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 100000];
  
  // Custom salary comparison (current salary vs. different income levels)
  const customSalaries = [
    customSalary * 0.8, // 20% less
    customSalary * 0.9, // 10% less
    customSalary,       // Current
    customSalary * 1.1, // 10% more
    customSalary * 1.2, // 20% more
    customSalary * 1.5, // 50% more
    customSalary * 2.0  // Double
  ];

  const comparisonData = useMemo(() => {
    const salaries = comparisonMode === "preset" ? presetSalaries : customSalaries;
    return generateComparisonData(salaries);
  }, [comparisonMode, customSalary]);

  const currentSalaryData = useMemo(() => {
    return generateComparisonData([customSalary])[0];
  }, [customSalary]);

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
              <li><span className="font-medium text-gray-800" aria-current="page">Income Comparison</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Loan Income Comparison Calculator</h1>
          <p className="text-xl text-gray-600">
            Compare student loan repayments across different income levels and loan plans to understand how salary changes affect your payments.
          </p>
        </div>
      </section>

      {/* Current Salary Calculator */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Current Situation</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input */}
          <div className="space-y-6">
            <div>
              <label htmlFor="current-salary" className="block text-sm font-medium text-gray-700 mb-1">
                Your Annual Salary
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">£</span>
                <input
                  type="number"
                  id="current-salary"
                  min={0}
                  max={250000}
                  step={1000}
                  value={customSalary}
                  onChange={(e) => setCustomSalary(Number(e.target.value || 0))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-1">
                <input
                  type="range"
                  min={0}
                  max={150000}
                  step={1000}
                  value={Math.min(150000, customSalary)}
                  onChange={(e) => setCustomSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Plan Thresholds</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Plan 1: {fmtMoney(PLANS.PLAN1.THRESHOLD)}</div>
                <div>Plan 2: {fmtMoney(PLANS.PLAN2.THRESHOLD)}</div>
                <div>Plan 5: {fmtMoney(PLANS.PLAN5.THRESHOLD)}</div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Annual Repayments at {fmtMoney(customSalary)}</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">Plan 1</div>
                  <div className="text-sm text-gray-500">{PLANS.PLAN1.DESCRIPTION}</div>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  {fmtMoney(currentSalaryData.plan1Annual)}
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">Plan 2</div>
                  <div className="text-sm text-gray-500">{PLANS.PLAN2.DESCRIPTION}</div>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  {fmtMoney(currentSalaryData.plan2Annual)}
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <div className="font-medium text-gray-800">Plan 5</div>
                  <div className="text-sm text-gray-500">{PLANS.PLAN5.DESCRIPTION}</div>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  {fmtMoney(currentSalaryData.plan5Annual)}
                </div>
              </div>
            </div>

            {currentSalaryData.salary > Math.min(PLANS.PLAN1.THRESHOLD, PLANS.PLAN2.THRESHOLD, PLANS.PLAN5.THRESHOLD) && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-gray-800 mb-1">Differences:</div>
                <div className="text-sm text-gray-600">
                  <div>Plan 1 vs Plan 2: {fmtMoneyDiff(currentSalaryData.differencePlan1vs2)} per year</div>
                  <div>Plan 1 vs Plan 5: {fmtMoneyDiff(currentSalaryData.differencePlan1vs5)} per year</div>
                  <div>Plan 2 vs Plan 5: {fmtMoneyDiff(currentSalaryData.differencePlan2vs5)} per year</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Income Comparison</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Comparison Mode Toggle */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">View:</label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="comparison-mode"
                  value="preset"
                  checked={comparisonMode === "preset"}
                  onChange={(e) => setComparisonMode(e.target.value as "preset")}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Standard Range</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="comparison-mode"
                  value="custom"
                  checked={comparisonMode === "custom"}
                  onChange={(e) => setComparisonMode(e.target.value as "custom")}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Around My Salary</span>
              </label>
            </div>

            {/* Monthly/Annual Toggle */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showMonthly}
                onChange={(e) => setShowMonthly(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Show Monthly</span>
            </label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Annual Salary</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-800">Plan 1</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-800">Plan 2</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-800">Plan 5</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-800">Best Option</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => {
                const isCurrentSalary = comparisonMode === "custom" && row.salary === customSalary;
                const lowestAmount = Math.min(row.plan1Annual, row.plan2Annual, row.plan5Annual);
                
                return (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-gray-50 ${isCurrentSalary ? 'bg-blue-50' : ''}`}
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {fmtMoney(row.salary)}
                      {isCurrentSalary && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Current</span>
                      )}
                    </td>
                    <td className={`py-3 px-4 text-right ${row.plan1Annual === lowestAmount && lowestAmount > 0 ? 'font-bold text-green-600' : 'text-gray-800'}`}>
                      {showMonthly ? fmtMoney(row.plan1Monthly) : fmtMoney(row.plan1Annual)}
                    </td>
                    <td className={`py-3 px-4 text-right ${row.plan2Annual === lowestAmount && lowestAmount > 0 ? 'font-bold text-green-600' : 'text-gray-800'}`}>
                      {showMonthly ? fmtMoney(row.plan2Monthly) : fmtMoney(row.plan2Annual)}
                    </td>
                    <td className={`py-3 px-4 text-right ${row.plan5Annual === lowestAmount && lowestAmount > 0 ? 'font-bold text-green-600' : 'text-gray-800'}`}>
                      {showMonthly ? fmtMoney(row.plan5Monthly) : fmtMoney(row.plan5Annual)}
                    </td>
                    <td className="py-3 px-4 text-right text-sm font-medium">
                      {lowestAmount === 0 ? (
                        <span className="text-gray-500">No repayment</span>
                      ) : row.plan1Annual === lowestAmount ? (
                        <span className="text-green-600">Plan 1</span>
                      ) : row.plan2Annual === lowestAmount ? (
                        <span className="text-green-600">Plan 2</span>
                      ) : (
                        <span className="text-green-600">Plan 5</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          {showMonthly ? "Monthly" : "Annual"} repayments shown. Green highlighting indicates the lowest repayment amount for each salary level.
        </div>
      </section>

      {/* Related Calculators */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
            href="/calculators/plan-1-student-loan-calculator/"
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
              <p className="text-sm text-gray-600">Detailed Plan 1 loan calculations</p>
            </div>
          </Link>

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
              <p className="text-sm text-gray-600">Detailed Plan 2 loan calculations</p>
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
              <p className="text-sm text-gray-600">Calculate savings from extra payments</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Educational Content */}
      <section className="max-w-4xl mx-auto prose prose-blue">
        <h2>Understanding Student Loan Repayments Across Income Levels</h2>
        <p>
          Your student loan repayments depend not just on your loan amount, but significantly on your income level and 
          which loan plan you&apos;re on. This calculator helps you understand how different salaries affect your repayments 
          across the three main UK student loan plans.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="how-plans-differ">
            <AccordionTrigger>How the Different Plans Compare</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Plan 1 (Pre-2012)</h4>
                  <ul>
                    <li>Threshold: {fmtMoney(PLANS.PLAN1.THRESHOLD)}</li>
                    <li>Rate: 9% of income above threshold</li>
                    <li>Write-off: 25 years after repayment begins</li>
                    <li>Generally lowest repayments due to lowest threshold</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Plan 2 (2012-2023)</h4>
                  <ul>
                    <li>Threshold: {fmtMoney(PLANS.PLAN2.THRESHOLD)}</li>
                    <li>Rate: 9% of income above threshold</li>
                    <li>Write-off: 30 years after repayment begins</li>
                    <li>Higher threshold means lower repayments for mid-range earners</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Plan 5 (2023+)</h4>
                  <ul>
                    <li>Threshold: {fmtMoney(PLANS.PLAN5.THRESHOLD)}</li>
                    <li>Rate: 9% of income above threshold</li>
                    <li>Write-off: 40 years after repayment begins</li>
                    <li>Middle threshold with longest repayment period</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="income-impact">
            <AccordionTrigger>How Income Changes Affect Your Repayments</AccordionTrigger>
            <AccordionContent>
              <p>
                Since all plans charge 9% of income above the threshold, every £1,000 salary increase results in 
                an additional £90 per year (£7.50 per month) in loan repayments, regardless of which plan you&apos;re on.
              </p>
              <p>
                However, the threshold differences mean that:
              </p>
              <ul>
                <li>Plan 1 borrowers start repaying at lower incomes</li>
                <li>Plan 2 borrowers have the highest threshold, so pay less at mid-range salaries</li>
                <li>Plan 5 borrowers fall between the two</li>
                <li>At very high salaries, the differences become less significant as a percentage of income</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="career-planning">
            <AccordionTrigger>Using This for Career and Salary Planning</AccordionTrigger>
            <AccordionContent>
              <p>
                This calculator can help you understand the financial impact of career decisions:
              </p>
              <ul>
                <li><strong>Job offers:</strong> Compare the real take-home difference between salary offers</li>
                <li><strong>Career progression:</strong> See how promotions and raises affect your loan repayments</li>
                <li><strong>Side income:</strong> Understand how additional income streams impact your total repayments</li>
                <li><strong>Regional moves:</strong> Factor in loan repayments when considering cost of living in different areas</li>
              </ul>
              <p>
                Remember that higher earnings generally mean paying off your loan faster, which can save money on interest 
                in the long run, especially for Plan 1 and Plan 2 loans with shorter write-off periods.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Want to see your full loan journey?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our detailed plan calculators to see your complete repayment timeline, including when your loan might be paid off 
          and how much interest you&apos;ll pay over time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/plan-1-student-loan-calculator/"
          >
            Plan 1 Calculator
          </Link>
          <Link
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            Plan 2 Calculator
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
          <li><span className="font-medium text-gray-800" aria-current="page">Income Comparison</span></li>
        </ol>
      </nav>
    </div>
  );
}