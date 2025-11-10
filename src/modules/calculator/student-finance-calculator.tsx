"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type LoanPlan = "plan1" | "plan2" | "plan4" | "plan5";

type SimResult = {
  monthlyRequired: number;
  annualRequired: number;
  totalRepaid: number;
  totalInterest: number;
  paidOff: boolean;
  payoffDate?: string;
  writeOffDate: string;
  monthsElapsed: number;
  effectiveInterestRate: number;
};

type MaintenanceLoanResult = {
  maxLoan: number;
  assessedAmount: number;
  parentalContribution: number;
};

const LOAN_PLANS = {
  plan1: {
    name: "Plan 1",
    threshold: 22_015,
    repayRate: 0.09,
    writeOffYears: 25,
    interestRate: 0.046, // RPI or Base+1%, whichever lower
    startYear: 1998,
    endYear: 2011,
    description: "Started before Sept 2012 (England/Wales) or in Northern Ireland",
  },
  plan2: {
    name: "Plan 2",
    threshold: 27_295,
    repayRate: 0.09,
    writeOffYears: 30,
    interestRate: 0.078, // RPI + 3% while studying, RPI to RPI+3% after
    startYear: 2012,
    endYear: 2022,
    description: "Started Sept 2012 - July 2023 (England/Wales)",
  },
  plan4: {
    name: "Plan 4",
    threshold: 31_395,
    repayRate: 0.09,
    writeOffYears: 30,
    interestRate: 0.046,
    startYear: 1998,
    endYear: 2024,
    description: "Started in Scotland",
  },
  plan5: {
    name: "Plan 5",
    threshold: 25_000,
    repayRate: 0.09,
    writeOffYears: 40,
    interestRate: 0.062, // RPI + 0-3% based on income
    startYear: 2023,
    endYear: 2024,
    description: "Started Sept 2023 onwards (England/Wales)",
  },
};

const MAINTENANCE_LOAN = {
  maxLoanOutsideLondon: 10_227,
  maxLoanInLondon: 13_762,
  maxLoanParentsHome: 8_610,
  householdIncomeFullLoan: 25_000,
  householdIncomeNoLoan: 70_022,
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

const monthName = (m: number) =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m];

function writeOffDate(graduationYear: number, writeOffYears: number): Date {
  const start = new Date(graduationYear + 1, 3, 1); // Apr 1
  return new Date(start.getFullYear() + writeOffYears, start.getMonth(), 1);
}

function calculateMaintenanceLoan(
  householdIncome: number,
  livingArrangement: "london" | "outside" | "parents"
): MaintenanceLoanResult {
  let maxLoan = MAINTENANCE_LOAN.maxLoanOutsideLondon;
  if (livingArrangement === "london") maxLoan = MAINTENANCE_LOAN.maxLoanInLondon;
  if (livingArrangement === "parents") maxLoan = MAINTENANCE_LOAN.maxLoanParentsHome;

  const minLoan = maxLoan * 0.72; // Minimum is typically 72% of max

  if (householdIncome <= MAINTENANCE_LOAN.householdIncomeFullLoan) {
    return {
      maxLoan,
      assessedAmount: maxLoan,
      parentalContribution: 0,
    };
  }

  if (householdIncome >= MAINTENANCE_LOAN.householdIncomeNoLoan) {
    return {
      maxLoan,
      assessedAmount: minLoan,
      parentalContribution: maxLoan - minLoan,
    };
  }

  // Linear taper between full and minimum
  const incomeRange =
    MAINTENANCE_LOAN.householdIncomeNoLoan - MAINTENANCE_LOAN.householdIncomeFullLoan;
  const incomeAboveMin = householdIncome - MAINTENANCE_LOAN.householdIncomeFullLoan;
  const reductionFactor = incomeAboveMin / incomeRange;
  const assessed = maxLoan - (maxLoan - minLoan) * reductionFactor;

  return {
    maxLoan,
    assessedAmount: Math.max(minLoan, assessed),
    parentalContribution: maxLoan - assessed,
  };
}

function simulateLoan({
  salary,
  graduationYear,
  startingBalance,
  monthlyOverpay,
  plan,
}: {
  salary: number;
  graduationYear: number;
  startingBalance: number;
  monthlyOverpay: number;
  plan: LoanPlan;
}): SimResult {
  const planData = LOAN_PLANS[plan];
  const monthlyRequired = Math.max(0, (salary - planData.threshold) * planData.repayRate / 12);
  const annualRequired = monthlyRequired * 12;

  const start = new Date(graduationYear + 1, 3, 1);
  const end = writeOffDate(graduationYear, planData.writeOffYears);
  const monthsCap =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  let balance = startingBalance;
  let totalRepaid = 0;
  let totalInterest = 0;
  let months = 0;
  const monthlyRate = planData.interestRate / 12;

  while (months < monthsCap && balance > 0) {
    const interest = balance * monthlyRate;
    totalInterest += interest;
    balance += interest;

    const pay = Math.min(balance, monthlyRequired + Math.max(0, monthlyOverpay));
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
    effectiveInterestRate: planData.interestRate,
  };
}

export default function StudentFinanceCalculator() {
  const [activeTab, setActiveTab] = useState<"repayment" | "maintenance">("repayment");

  // Repayment calculator state
  const [loanPlan, setLoanPlan] = useState<LoanPlan>("plan2");
  const [salary, setSalary] = useState(30_000);
  const [graduationYear, setGraduationYear] = useState(2020);
  const [tuitionLoanAmount, setTuitionLoanAmount] = useState(27_750);
  const [maintenanceLoanAmount, setMaintenanceLoanAmount] = useState(10_000);
  const [includeOverpay, setIncludeOverpay] = useState(false);
  const [overpay, setOverpay] = useState(0);

  // Maintenance loan calculator state
  const [householdIncome, setHouseholdIncome] = useState(35_000);
  const [livingArrangement, setLivingArrangement] = useState<"london" | "outside" | "parents">("outside");
  const [courseYears, setCourseYears] = useState(3);

  const years = Array.from({ length: 27 }, (_, i) => 1998 + i);

  const totalLoanAmount = tuitionLoanAmount + maintenanceLoanAmount;

  const sim = useMemo(
    () =>
      simulateLoan({
        salary,
        graduationYear,
        startingBalance: Math.max(0, totalLoanAmount),
        monthlyOverpay: includeOverpay ? Math.max(0, overpay) : 0,
        plan: loanPlan,
      }),
    [salary, graduationYear, totalLoanAmount, includeOverpay, overpay, loanPlan]
  );

  const maintenanceCalc = useMemo(
    () => calculateMaintenanceLoan(householdIncome, livingArrangement),
    [householdIncome, livingArrangement]
  );

  const totalMaintenanceLoan = maintenanceCalc.assessedAmount * courseYears;

  const currentPlan = LOAN_PLANS[loanPlan];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 text-white">
          <div className="max-w-4xl mx-auto">

            <nav aria-label="breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex flex-wrap items-center space-x-1 text-xs sm:text-sm text-blue-200">
                <li><Link className="hover:text-white hover:underline" href="/">Home</Link></li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-300 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><Link className="hover:text-white hover:underline" href="/calculators/">Calculators</Link></li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-300 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><span className="font-medium text-white" aria-current="page">Student Finance Calculator</span></li>
              </ol>
            </nav>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Student Finance Calculator</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Calculate your student loan repayments and maintenance loan entitlement for UK universities
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="max-w-4xl mx-auto">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-4 sm:space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("repayment")}
                className={`${activeTab === "repayment"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors`}
              >
                Loan Repayment Calculator
              </button>
              <button
                onClick={() => setActiveTab("maintenance")}
                className={`${activeTab === "maintenance"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors`}
              >
                Maintenance Loan Calculator
              </button>
            </nav>
          </div>
        </section>

        {/* Repayment Calculator Tab */}
        {activeTab === "repayment" && (
          <>
            <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Inputs */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Plan Selection */}
                  <div>
                    <label htmlFor="loan-plan" className="block text-sm font-medium text-gray-700 mb-1">
                      Repayment Plan
                    </label>
                    <select
                      id="loan-plan"
                      value={loanPlan}
                      onChange={(e) => setLoanPlan(e.target.value as LoanPlan)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    >
                      {Object.entries(LOAN_PLANS).map(([key, data]) => (
                        <option key={key} value={key}>
                          {data.name} - {data.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">About {currentPlan.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          You repay <strong>9%</strong> of income above{" "}
                          <strong>{fmtMoney(currentPlan.threshold)}</strong> per year. Loans are written off after{" "}
                          <strong>{currentPlan.writeOffYears} years</strong>.
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
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        id="salary"
                        min={0}
                        max={250000}
                        step={1000}
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value || 0))}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="range"
                        min={0}
                        max={150000}
                        step={1000}
                        value={Math.min(150000, salary)}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Repayment threshold: {fmtMoney(currentPlan.threshold)}
                    </p>
                  </div>

                  {/* Graduation Year */}
                  <div>
                    <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                      Graduation Year
                    </label>
                    <select
                      id="graduation-year"
                      value={graduationYear}
                      onChange={(e) => setGraduationYear(Number(e.target.value))}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    >
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tuition Loan */}
                  <div>
                    <label htmlFor="tuition-loan" className="block text-sm font-medium text-gray-700 mb-1">
                      Tuition Fee Loan
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        id="tuition-loan"
                        min={0}
                        max={100000}
                        step={1000}
                        value={tuitionLoanAmount}
                        onChange={(e) => setTuitionLoanAmount(Number(e.target.value || 0))}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Maximum £9,250/year for most courses (£9,000 for Plan 2)
                    </p>
                  </div>

                  {/* Maintenance Loan */}
                  <div>
                    <label htmlFor="maintenance-loan" className="block text-sm font-medium text-gray-700 mb-1">
                      Maintenance Loan
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        id="maintenance-loan"
                        min={0}
                        max={60000}
                        step={1000}
                        value={maintenanceLoanAmount}
                        onChange={(e) => setMaintenanceLoanAmount(Number(e.target.value || 0))}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Living costs loan (use maintenance calculator to estimate)
                    </p>
                  </div>

                  {/* Overpayment */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="overpayment" className="block text-sm font-medium text-gray-700">
                        Monthly Overpayment (Optional)
                      </label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={includeOverpay}
                          onChange={(e) => setIncludeOverpay(e.target.checked)}
                        />
                        <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition" />
                        <span className="ml-2 text-sm font-medium text-gray-700">Include</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        id="overpayment"
                        min={0}
                        max={2000}
                        step={10}
                        disabled={!includeOverpay}
                        value={overpay}
                        onChange={(e) => setOverpay(Number(e.target.value || 0))}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm disabled:opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl" role="region" aria-live="polite">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Your Repayment Summary</h2>

                  <div className="space-y-4">
                    <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-xs sm:text-sm text-gray-500">Total Loan Amount</p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-800">{fmtMoney(totalLoanAmount, 0)}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Tuition: {fmtMoney(tuitionLoanAmount, 0)} + Maintenance: {fmtMoney(maintenanceLoanAmount, 0)}
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-xs sm:text-sm text-gray-500">Monthly Repayment</p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-800">{fmtMoney(sim.monthlyRequired, 0)}</p>
                      <p className="text-xs sm:text-sm text-gray-500">9% of income above threshold</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-xs sm:text-sm text-gray-500">Annual Repayment</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(sim.annualRequired, 0)}</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-xs sm:text-sm text-gray-500">Total to be Repaid</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(sim.totalRepaid, 0)}</p>
                      <p className="text-xs sm:text-sm text-gray-500">Over the life of the loan</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-xs sm:text-sm text-gray-500">Total Interest Paid</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(sim.totalInterest, 0)}</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        @ {(sim.effectiveInterestRate * 100).toFixed(1)}% annual
                      </p>
                    </div>

                    <div>
                      {sim.paidOff ? (
                        <>
                          <p className="text-xs sm:text-sm text-gray-500">Paid Off</p>
                          <p className="text-xl sm:text-2xl font-bold text-green-600">{sim.payoffDate}</p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            In {(sim.monthsElapsed / 12).toFixed(1)} years from repayment start
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-xs sm:text-sm text-gray-500">Expected Write-Off Date</p>
                          <p className="text-xl sm:text-2xl font-bold text-gray-800">{sim.writeOffDate}</p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            Remaining balance written off after {currentPlan.writeOffYears} years
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Maintenance Loan Calculator Tab */}
        {activeTab === "maintenance" && (
          <>
            <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Inputs */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="text-green-600 mr-3 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">Maintenance Loan Eligibility</h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Calculate how much you could borrow for living costs based on household income and location.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Household Income */}
                  <div>
                    <label htmlFor="household-income" className="block text-sm font-medium text-gray-700 mb-1">
                      Household Income
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2 text-sm">£</span>
                      <input
                        type="number"
                        id="household-income"
                        min={0}
                        max={150000}
                        step={1000}
                        value={householdIncome}
                        onChange={(e) => setHouseholdIncome(Number(e.target.value || 0))}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="range"
                        min={0}
                        max={100000}
                        step={1000}
                        value={Math.min(100000, householdIncome)}
                        onChange={(e) => setHouseholdIncome(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Combined annual income of parents/guardians</p>
                  </div>

                  {/* Living Arrangement */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where will you live during term time?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                        <input
                          type="radio"
                          name="living"
                          value="outside"
                          checked={livingArrangement === "outside"}
                          onChange={(e) => setLivingArrangement(e.target.value as "outside")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          Away from home (outside London)
                        </span>
                      </label>
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                        <input
                          type="radio"
                          name="living"
                          value="london"
                          checked={livingArrangement === "london"}
                          onChange={(e) => setLivingArrangement(e.target.value as "london")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          Away from home (in London)
                        </span>
                      </label>
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                        <input
                          type="radio"
                          name="living"
                          value="parents"
                          checked={livingArrangement === "parents"}
                          onChange={(e) => setLivingArrangement(e.target.value as "parents")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">
                          Living with parents
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Course Length */}
                  <div>
                    <label htmlFor="course-years" className="block text-sm font-medium text-gray-700 mb-1">
                      Course Length
                    </label>
                    <select
                      id="course-years"
                      value={courseYears}
                      onChange={(e) => setCourseYears(Number(e.target.value))}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                    >
                      <option value={1}>1 year</option>
                      <option value={2}>2 years</option>
                      <option value={3}>3 years</option>
                      <option value={4}>4 years</option>
                      <option value={5}>5 years</option>
                      <option value={6}>6 years</option>
                    </select>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Your Maintenance Loan Entitlement</h2>

                  <div className="space-y-4">
                    <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-xs sm:text-sm text-gray-500">Annual Entitlement</p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                        {fmtMoney(maintenanceCalc.assessedAmount, 0)}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">Per academic year</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-xs sm:text-sm text-gray-500">Total Over {courseYears} Years</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">{fmtMoney(totalMaintenanceLoan, 0)}</p>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <p className="text-xs sm:text-sm text-gray-500">Maximum Available</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-800">
                        {fmtMoney(maintenanceCalc.maxLoan, 0)}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">Per year for your living arrangement</p>
                    </div>

                    {maintenanceCalc.parentalContribution > 0 && (
                      <div className="border-b border-gray-200 pb-4">
                        <p className="text-xs sm:text-sm text-gray-500">Expected Parental Contribution</p>
                        <p className="text-xl sm:text-2xl font-bold text-orange-600">
                          {fmtMoney(maintenanceCalc.parentalContribution, 0)}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">Per year (to reach maximum)</p>
                      </div>
                    )}

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 text-sm mb-2">What affects your loan?</h3>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                        <li>• Household income (£{householdIncome.toLocaleString()})</li>
                        <li>• Where you live during term</li>
                        <li>• Whether you&apos;re a new or continuing student</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-xs sm:text-sm text-gray-700">
                        <strong>Note:</strong> These figures are estimates based on 2024/25 rates. Actual amounts
                        may vary. Apply through Student Finance England for your official entitlement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Comparison Table */}
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Compare All Repayment Plans</h2>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Threshold
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Interest
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Write-Off
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(LOAN_PLANS).map(([key, plan]) => (
                    <tr key={key} className={key === loanPlan ? "bg-blue-50" : ""}>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {plan.name}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {fmtMoney(plan.threshold)}
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {(plan.repayRate * 100).toFixed(0)}%
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                        {(plan.interestRate * 100).toFixed(1)}%
                      </td>
                      <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {plan.writeOffYears} years
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="max-w-4xl mx-auto prose prose-blue max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">How Student Loan Repayments Work</h2>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Repayment Basics</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              You only start repaying your student loan when you earn above the repayment threshold for your plan.
              Repayments are automatically deducted from your salary through PAYE if you&apos;re employed, or paid through
              Self Assessment if you&apos;re self-employed.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                <span>Repayments are income-contingent - tied to what you earn, not what you owe</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                <span>9% of everything you earn above the threshold</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                <span>No repayments if you earn below the threshold</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                <span>Outstanding balance written off after 25-40 years (depending on plan)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Example Calculation</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              If you&apos;re on Plan 2 and earn £35,000 per year:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Annual income:</span>
                <span className="font-semibold">£35,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plan 2 threshold:</span>
                <span className="font-semibold">£27,295</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-600">Income above threshold:</span>
                <span className="font-semibold">£7,705</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Repayment (9%):</span>
                <span className="font-semibold text-blue-600">£693.45 per year</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-600">Monthly repayment:</span>
                <span className="font-semibold text-blue-600">£57.79</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Which Plan Am I On?</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-800">Plan 1</p>
                <p className="text-sm text-gray-600">
                  Started studying before September 2012 in England or Wales, or studied in Northern Ireland
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-semibold text-gray-800">Plan 2</p>
                <p className="text-sm text-gray-600">
                  Started studying between September 2012 and July 2023 in England or Wales
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-semibold text-gray-800">Plan 4</p>
                <p className="text-sm text-gray-600">
                  Studied in Scotland
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-semibold text-gray-800">Plan 5</p>
                <p className="text-sm text-gray-600">
                  Started studying from September 2023 onwards in England or Wales
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Need More Help with Student Finance?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Use our specialized calculators for detailed analysis of overpayments, specific loan plans, and repayment strategies.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
              href="/calculators/student-loan-overpayment-calculator/"
            >
              Overpayment Calculator
            </Link>
            <Link
              className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
              href="/calculators/plan-2-student-loan-calculator/"
            >
              Plan 2 Calculator
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <span className="font-medium text-gray-800 text-sm sm:text-base">Should I make overpayments on my student loan?</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2">▼</span>
              </summary>
              <div className="p-4 text-sm sm:text-base text-gray-600">
                <p>
                  For most people, overpaying isn&apos;t financially beneficial. Student loans are written off after 25-40 years,
                  and most graduates won&apos;t repay the full amount. The money is often better used for savings, pension
                  contributions, or paying off higher-interest debts. Only consider overpaying if you&apos;re certain you&apos;ll
                  repay the full loan amount and want to save on interest.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <span className="font-medium text-gray-800 text-sm sm:text-base">What happens if I move abroad?</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2">▼</span>
              </summary>
              <div className="p-4 text-sm sm:text-base text-gray-600">
                <p>
                  You must continue making repayments if you live abroad. You&apos;ll need to notify Student Finance of your
                  move and provide evidence of your income. Repayment thresholds may differ based on the country you&apos;re
                  living in. Failure to update your details or make payments can result in your loan being passed to a
                  debt collection agency.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <span className="font-medium text-gray-800 text-sm sm:text-base">Does my student loan affect my credit score?</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2">▼</span>
              </summary>
              <div className="p-4 text-sm sm:text-base text-gray-600">
                <p>
                  Student loans don&apos;t appear on your credit report and won&apos;t directly affect your credit score. However,
                  when applying for a mortgage, lenders will consider your student loan repayments as part of your regular
                  outgoings, which can affect how much you can borrow.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <span className="font-medium text-gray-800 text-sm sm:text-base">Can I check my loan balance?</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2">▼</span>
              </summary>
              <div className="p-4 text-sm sm:text-base text-gray-600">
                <p>
                  Yes, you can check your current loan balance, repayment history, and next payment date by logging into
                  your account on the Student Loans Company website. You&apos;ll need your Customer Reference Number, which
                  you can find on correspondence from the SLC.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Bottom Breadcrumb */}
        <nav aria-label="breadcrumb" className="max-w-4xl mx-auto">
          <ol className="flex flex-wrap items-center space-x-1 text-xs sm:text-sm text-gray-600">
            <li>
              <Link className="hover:text-blue-700 hover:underline" href="/">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-gray-400 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link className="hover:text-blue-700 hover:underline" href="/calculators/">
                Calculators
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-gray-400 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <span className="font-medium text-gray-800" aria-current="page">
                Student Finance Calculator
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}