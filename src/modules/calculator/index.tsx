import Link from "next/link";
// import type { Metadata } from "next";
import { Baby, Banknote, BellRing, Briefcase, BriefcaseBusiness, Calculator, Calendar, Clock, Database, DollarSign, FileText, Globe, Home, Layers, PauseCircle, Percent, PiggyBank, Scale, Search, Split, TrendingUp, Users } from "lucide-react";

// export const metadata: Metadata = {
//   title:
//     "Calculators - All Tools & Repayment Estimators | Student Loan Calculator UK",
//   description:
//     "Browse all UK student loan calculators. Compare monthly payments, interest, total cost and more across Plan 1, 2, 4, 5 and Postgraduate loans.",
//   alternates: {
//     canonical: "https://studentloancalculator.uk/calculators/",
//   },
//   openGraph: {
//     title: "Student Loan Calculator UK - Free Repayment Calculator & Guides",
//     description:
//       "Calculate your UK student loan repayments with our free calculators. Accurate repayment estimates for all loan types.",
//     url: "https://studentloancalculator.co.uk/",
//     siteName: "Student Loan Calculator UK",
//     locale: "en_GB",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Student Loan Calculator UK",
//     description:
//       "Calculate your UK student loan repayments with our free calculators.",
//   },
//   robots: { index: true, follow: true },
// };

export default function CalculatorsPage() {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="space-y-12 pb-16">
          <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Calculators
              </h1>
              <p className="text-xl text-gray-600">
                Choose from our range of specialised calculators to understand
                your UK student loan
              </p>
            </div>
          </section>

          {/* Filters (UI only here) */}
          <section className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Filter Calculators
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="plan-filter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    By Loan Plan
                  </label>
                  <select
                    id="plan-filter"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    defaultValue="all"
                    aria-label="Filter calculators by loan plan"
                  >
                    <option value="all">All Plans</option>
                    <option value="plan1">Plan 1 (Pre-2012)</option>
                    <option value="plan2">Plan 2 (2012-2023)</option>
                    <option value="plan4">Plan 4 (Scotland)</option>
                    <option value="plan5">Plan 5 (2023+)</option>
                    <option value="postgrad">Postgraduate</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="goal-filter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    By Goal
                  </label>
                  <select
                    id="goal-filter"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    defaultValue="all"
                    aria-label="Filter calculators by goal"
                  >
                    <option value="all">All Goals</option>
                    <option value="repayment">Monthly Repayments</option>
                    <option value="total-cost">Total Cost</option>
                    <option value="interest">Interest Calculation</option>
                    <option value="overpayment">Overpayment Analysis</option>
                    <option value="writeoff">Write-Off Date</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="audience-filter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    By Audience
                  </label>
                  <select
                    id="audience-filter"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    defaultValue="all"
                    aria-label="Filter calculators by audience"
                  >
                    <option value="all">All Users</option>
                    <option value="student">Current Students</option>
                    <option value="graduate">Graduates</option>
                    <option value="parent">Parents</option>
                    <option value="advisor">Financial Advisors</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Plan-specific */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Plan-Specific Calculators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CalcCard
                href="/calculators/plan-1-student-loan-calculator/"
                title="Plan 1 Calculator"
                desc="For pre-2012 students (England & Wales) and Northern Ireland students"
                chips={[
                  ["Pre-2012", "blue"],
                  ["9% Above £22,015", "green"],
                ]}
              />
              <CalcCard
                href="/calculators/plan-2-student-loan-calculator/"
                title="Plan 2 Calculator"
                desc="For 2012-2023 students in England & Wales"
                chips={[
                  ["2012-2023", "blue"],
                  ["9% Above £27,295", "green"],
                ]}
              />
              <CalcCard
                href="/calculators/plan-4-student-loan-calculator/"
                title="Plan 4 Calculator"
                desc="For students in Scotland"
                chips={[
                  ["Scotland", "blue"],
                  ["9% Above £27,660", "green"],
                ]}
              />
              <CalcCard
                href="/calculators/plan-5-student-loan-calculator/"
                title="Plan 5 Calculator"
                desc="For students starting from September 2023 in England & Wales"
                chips={[
                  ["2023 Onwards", "blue"],
                  ["9% Above £25,000", "green"],
                ]}
              />
              <CalcCard
                href="/calculators/postgraduate-loan-calculator/"
                title="Postgraduate Loan Calculator"
                desc="For Master's & PhD students across the UK"
                chips={[
                  ["Postgraduate", "blue"],
                  ["6% Above £21,000", "green"],
                ]}
                icon="mortar"
              />
              <CalcCard
                href="/calculators/combined-repayment-calculator/"
                title="Combined Loans Calculator"
                desc="Calculate repayments with multiple loan plans"
                chips={[
                  ["Multiple Plans", "blue"],
                  ["Simultaneous Repayments", "purple"],
                ]}
                icon="grid"
              />
            </div>
          </section>

          {/* Financial planning tools */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Financial Planning Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                href="/calculators/monthly-repayment-calculator/"
                title="Monthly Repayment Calculator"
                desc="Compare monthly payments across all loan types"
                badge="Budgeting"
              />
              <ToolCard
                href="/calculators/total-loan-cost-calculator/"
                title="Total Loan Cost Calculator"
                desc="Estimate lifetime repayments and if your loan will be repaid in full"
                badge="Long-term Planning"
              />
              <ToolCard
                href="/calculators/student-loan-interest-calculator/"
                title="Interest Calculator"
                desc="See how interest accumulates on your student loan"
                badge="Interest Analysis"
                icon="arrowUp"
              />
              <ToolCard
                href="/calculators/student-loan-overpayment-calculator/"
                title="Overpayment Calculator"
                desc="Analyze if making extra payments is financially beneficial"
                badge="Repayment Strategy"
                icon="arrowUp"
              />
              <ToolCard
                href="/calculators/loan-writeoff-checker/"
                title="Write-Off Checker"
                desc="Find out when your loan will be automatically cancelled"
                badge="Loan Forgiveness"
                icon="check"
              />
              <ToolCard
                href="/calculators/student-finance-calculator/"
                title="Student Finance Calculator"
                desc="Calculate tuition fees, maintenance loans, and living costs"
                badge="Education Finance"
                icon="mortar"
              />
            </div>
          </section>

          {/* HMRC & Tax-Specific Calculators */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              HMRC & Tax-Specific Calculators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                href="/calculators/self-assessment-balancing-payment-calculator/"
                title="Self Assessment Balancing Payment"
                desc="Calculate additional student loan payments due via Self Assessment"
                badge="Self Assessment"
                icon="fileText"
              />
              <ToolCard
                href="/calculators/multiple-jobs-paye-split-calculator/"
                title="Multiple Jobs PAYE Split Calculator"
                desc="See how student loan deductions work across multiple PAYE jobs"
                badge="Multiple Jobs"
                icon="layers"
              />
              <ToolCard
                href="/calculators/sl-pgl-tax-code-impact-calculator/"
                title="SL/PGL Notice & Tax Code Simulator"
                desc="Understand how SL1/SL2 notices affect your payroll deductions"
                badge="HMRC Notices"
                icon="fileText"
              />
              <ToolCard
                href="/calculators/bonus-month-paye-calculator/"
                title="Bonus Month PAYE Calculator"
                desc="Calculate tax, NI, and student loan deductions on bonus payments"
                badge="Bonus Analysis"
                icon="dollarSign"
              />
              <ToolCard
                href="/calculators/cis-self-employed-calculator/"
                title="CIS/Self-Employed Calculator"
                desc="Estimate student loan repayments for CIS workers and self-employed"
                badge="CIS & Self-Employed"
                icon="briefcase"
              />
              <ToolCard
                href="/calculators/p60-p45-student-loan-reconciliation-calculator/"
                title="P60/P45 Year-End Reconciliation"
                desc="Check for student loan over or underpayments using your P60/P45"
                badge="Year-End Check"
                icon="fileText"
              />
              <ToolCard
                href="/calculators/slc-vs-sa-calcualtor/"
                title="Overpayment: SLC Voluntary vs SA Top-Up"
                desc="Compare voluntary SLC payments against Self Assessment top-ups"
                badge="Payment Strategy"
                icon="scale"
              />
              <ToolCard
                href="/calculators/umbrella-ir35-paye-calculator/"
                title="Umbrella/Inside-IR35 PAYE Model"
                desc="Calculate student loan deductions for umbrella and IR35 contractors"
                badge="Contractors"
                icon="briefcase"
              />
              <ToolCard
                href="/calculators/paye-period-threshold-calculator/"
                title="PAYE Period Threshold Calculator"
                desc="Convert annual thresholds to weekly, monthly, and other pay periods"
                badge="Threshold Tool"
                icon="calculator"
              />
              <ToolCard
                href="/calculators/sa-unearned-income-calculator/"
                title="SA Unearned Income SL Impact"
                desc="Calculate student loan on dividends, property, and investment income"
                badge="Unearned Income"
                icon="banknote"
              />
            </div>
          </section>


          {/* More calculators */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              More Calculators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                href="/calculators/salary-growth-impact-calculator/"
                title="Salary Growth Impact Calculator"
                desc="See how annual pay rises change your repayments and total cost"
                badge="Earnings Projection"
                icon="arrowUp"
              />
              <ToolCard
                href="/calculators/graduation-year-impact-calculator/"
                title="Graduation Year Impact Calculator"
                desc="Understand how your graduation year affects repayment timelines"
                badge="Timeline"
                icon="calendar"
              />
              <ToolCard
                href="/calculators/part-time-earnings-calculator/"
                title="Part-Time Earnings Calculator"
                desc="Model repayments while studying or working part-time"
                badge="Work & Study"
                icon="briefcase"
              />
              <ToolCard
                href="/calculators/income-threshold-alert-calculator/"
                title="Income Threshold Alert Calculator"
                desc="Find the salary points where repayments start or step up"
                badge="Thresholds"
                icon="alarm"
              />
              <ToolCard
                href="/calculators/early-payoff-date-calculator/"
                title="Early Payoff Date Calculator"
                desc="Project the date you'll clear your balance with different strategies"
                badge="Payoff Date"
                icon="clock"
              />
              <ToolCard
                href="/calculators/repayment-start-date-calculator/"
                title="Repayment Start Date Calculator"
                desc="Work out when repayments begin based on your situation"
                badge="Start Date"
                icon="play"
              />
              <ToolCard
                href="/calculators/self-employed-loan-calculator/"
                title="Self-Employed Repayment Calculator"
                desc="Estimate repayments for freelancers and company directors"
                badge="Self-Employed"
                icon="userTie"
              />
              <ToolCard
                href="/calculators/slc-interest-rate-impact-calculator/"
                title="SLC Interest Rate Impact Calculator"
                desc="See how changes in the SLC interest rate affect your repayments"
                badge="Interest Rate"
                icon="percent"
              />
              <ToolCard
                href="/calculators/maternity-paternity-leave-adjustment-calculator/"
                title="Maternity/Paternity Leave Adjustment Calculator"
                desc="Estimate the impact of maternity/paternity leave on your repayments"
                badge="Leave Adjustments"
                icon="baby"
              />
              <ToolCard
                href="/calculators/student-loan-overpayment-calculator/"
                title="Student Loan Overpayment Calculator"
                desc="Calculate the benefits of making voluntary overpayments"
                badge="Income Analysis"
                icon="trendingUp"
              />
              <ToolCard
                href="/calculators/regional-national-comparison-calculator/"
                title="Regional/National Comparison Calculator"
                desc="Compare student loan repayments and rules across UK nations"
                badge="Regional Differences"
                icon="globe"
              />
              <ToolCard
                href="/calculators/paye-vs-self-assessment-repayment-calculator/"
                title="PAYE vs Self Assessment Calculator"
                desc="Compare student loan repayments under PAYE and Self Assessment systems"
                badge="Tax Systems"
                icon="fileText"
              />
              <ToolCard
                href="/calculators/part-year-employment-career-break-calculator/"
                title="Part-Year Employment & Career Break Calculator"
                desc="Estimate HECS-HELP or student loan repayments during part-year employment or a career break"
                badge="Work & Study"
                icon="briefcase"
              />
              <ToolCard
                href="/calculators/bonus-variable-pay-impact-calculator/"
                title="Bonus & Variable Pay Impact Calculator"
                desc="Calculate how bonuses and commissions affect your monthly repayments"
                badge="Bonus Impact"
                icon="dollarSign"
              />
              <ToolCard
                href="/calculators/pension-salary-sacrifice-effect-calculator/"
                title="Pension Salary Sacrifice Calculator"
                desc="See how salary sacrifice pension contributions reduce loan repayments"
                badge="Pension Strategy"
                icon="piggyBank"
              />
              <ToolCard
                href="/calculators/part-year-employment-career-break-calculator/"
                title="Career Break Impact Calculator"
                desc="Estimate repayment effects during gaps in employment or career breaks"
                badge="Career Breaks"
                icon="pause"
              />
              <ToolCard
                href="/calculators/multiple-jobs-side-income-calculator/"
                title="Multiple Jobs Repayment Calculator"
                desc="Calculate combined repayments from multiple jobs and side income"
                badge="Multiple Income"
                icon="layers"
              />
              <ToolCard
                href="/calculators/plan-cohort-finder/"
                title="Plan & Cohort Finder"
                desc="Identify your student loan plan based on study start year and location"
                badge="Plan Identifier"
                icon="search"
              />
              <ToolCard
                href="/calculators/tax-year-threshold-interest-browser/"
                title="Tax Year Threshold Browser"
                desc="Browse historical and current thresholds and interest rates by year"
                badge="Historical Data"
                icon="database"
              />
              <ToolCard
                href="/calculators/combined-ug-pg-repayment-allocator/"
                title="Combined UG + PG Allocator"
                desc="Calculate how repayments split between undergraduate and postgraduate loans"
                badge="Multiple Loans"
                icon="splitSquare"
              />

            </div>
          </section>


          {/* Helper split section */}
          <section className="max-w-6xl mx-auto bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Need Help Choosing?
                </h2>
                <p className="text-gray-600 mb-6">
                  Not sure which calculator to use? Here&apos;s a quick guide:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <Bullet>
                    Use a <strong>Plan-specific calculator</strong> if you want
                    to understand your specific loan type in detail
                  </Bullet>
                  <Bullet>
                    Use the <strong>Monthly Repayment Calculator</strong> to
                    compare payments across different plans
                  </Bullet>
                  <Bullet>
                    Use the <strong>Total Cost Calculator</strong> to
                    understand lifetime repayments
                  </Bullet>
                  <Bullet>
                    Use the <strong>Overpayment Calculator</strong> if
                    you&apos;re considering making additional payments
                  </Bullet>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Learn More
                </h2>
                <p className="text-gray-600 mb-6">
                  Check out our comprehensive guides to better understand
                  student loans in the UK:
                </p>
                <ul className="space-y-4">
                  <GuideItem
                    href="/guides/how-student-loans-work-uk/"
                    title="How UK Student Loans Work"
                    subtitle="A comprehensive overview of the UK student loan system"
                  />
                  <GuideItem
                    href="/guides/loan-interest-explained/"
                    title="Understanding Loan Interest"
                    subtitle="How interest is calculated and applied to your student loan"
                  />
                  <GuideItem
                    href="/compare/plan-2-vs-plan-5/"
                    title="Plan 2 vs Plan 5 Comparison"
                    subtitle="Key differences between 2012-2023 and post-2023 student loans"
                  />
                </ul>
                <div className="mt-4">
                  <Link
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    href="/guides/"
                  >
                    View All Guides
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA banner */}
          <section className="max-w-6xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Need Help Understanding Student Loans?
              </h2>
              <p className="text-lg text-blue-100">
                Check out our comprehensive guides to understand the UK student
                loan system and make better financial decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                  href="/guides/how-student-loans-work-uk/"
                >
                  Read Our Guides
                </Link>
                <Link
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                  href="/plans/"
                >
                  Compare Loan Plans
                </Link>
              </div>
            </div>
          </section>

          {/* Essential guides */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
              Essential Loan Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <GuideCard
                href="/guides/how-student-loans-work-uk/"
                title="How UK Student Loans Work"
                desc="Essential guide to understanding the unique UK student loan system"
              />
              <GuideCard
                href="/guides/loan-interest-explained/"
                title="Understanding Interest Rates"
                desc="Learn how interest works for each plan type and affects your balance"
                icon="coin"
              />
              <GuideCard
                href="/guides/should-i-overpay-loan/"
                title="Should You Overpay Your Loan?"
                desc="Discover if making early repayments makes financial sense for you"
                icon="edit"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* ---------- Small UI bits ---------- */

function CalcCard({
  href,
  title,
  desc,
  chips,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  chips: [string, "blue" | "green" | "purple"][];
  icon?: "mortar" | "grid";
}) {
  return (
    <Link
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
      href={href}
    >
      <div className="mb-4 text-blue-600">
        {icon === "mortar" ? (
          <Mortar className="w-10 h-10" />
        ) : icon === "grid" ? (
          <Grid className="w-10 h-10" />
        ) : (
          <PlayCircle className="w-10 h-10" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
        {chips.map(([label, color]) => (
          <span
            key={label}
            className={[
              "px-2 py-1 rounded",
              color === "blue" && "bg-blue-100 text-blue-800",
              color === "green" && "bg-green-100 text-green-800",
              color === "purple" && "bg-purple-100 text-purple-800",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {label}
          </span>
        ))}
      </div>
    </Link>
  );
}

function ToolCard({
  href,
  title,
  desc,
  badge,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  badge: string;
  icon?: "arrowUp" | "check" | "doc" | "grid" | "coin" | "edit" | "briefcase" | "home" | "percent" | "baby" | "balanceScale" | "globe" | "clock" | "mortar" | "alarm" | "calendar" | "play" | "family" | "userTie" | "moneyBill" | "trendingUp" | "splitSquare" | "piggyBank" | "pause" | "fileText" | "dollarSign" | "database" | "layers" | "search" | "scale" | "calculator" | "banknote";
}) {
  return (
    <Link
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
      href={href}
    >
      <div className="mb-4 text-green-600">
        {icon === "arrowUp" ? (
          <ArrowUp className="w-10 h-10" />
        ) : icon === "check" ? (
          <CheckCircle className="w-10 h-10" />
        ) : icon === "grid" ? (
          <Grid className="w-10 h-10" />
        ) : icon === "coin" ? (
          <Coin className="w-10 h-10" />
        ) : icon === "edit" ? (
          <Edit className="w-10 h-10" />
        ) : icon === "briefcase" ? (
          <Briefcase className="w-10 h-10" />
        ) : icon === "home" ? (
          <Home className="w-10 h-10" />
        ) : icon === "percent" ? (
          <Percent className="w-10 h-10" />
        ) : icon === "baby" ? (
          <Baby className="w-10 h-10" />
        ) : icon === "balanceScale" ? (
          <Scale className="w-10 h-10" />
        ) : icon === "globe" ? (
          <Globe className="w-10 h-10" />
        ) : icon === "clock" ? (
          <Clock className="w-10 h-10" />
        ) : icon === "mortar" ? (
          <Mortar className="w-10 h-10" />
        ) : icon === "alarm" ? (
          <BellRing className="w-10 h-10" />
        ) : icon === "calendar" ? (
          <Calendar className="w-10 h-10" />
        ) : icon === "play" ? (
          <PlayCircle className="w-10 h-10" />
        ) : icon === "family" ? (
          <Users className="w-10 h-10" />
        ) : icon === "userTie" ? (
          <BriefcaseBusiness className="w-10 h-10" />
        ) : icon === "moneyBill" ? (
          <Banknote className="w-10 h-10" />
        ) : icon === "trendingUp" ? (
          <TrendingUp className="w-10 h-10" />
        ) : icon === "splitSquare" ? (
          <Split className="w-10 h-10" />
        ) : icon === "piggyBank" ? (
          <PiggyBank className="w-10 h-10" />
        ) : icon === "pause" ? (
          <PauseCircle className="w-10 h-10" />
        ) : icon === "fileText" ? (
          <FileText className="w-10 h-10" />
        ) : icon === "dollarSign" ? (
          <DollarSign className="w-10 h-10" />
        ) : icon === "database" ? (
          <Database className="w-10 h-10" />
        ) : icon === "layers" ? (
          <Layers className="w-10 h-10" />
        ) : icon === "search" ? (
          <Search className="w-10 h-10" />
        ) : icon === "scale" ? (
          <Scale className="w-10 h-10" />
        ) : icon === "calculator" ? (
          <Calculator className="w-10 h-10" />
        ) : icon === "banknote" ? (
          <Banknote className="w-10 h-10" />
        ) : icon === "doc" ? (
          <FileText className="w-10 h-10" />
        ) : (
          <FileText className="w-10 h-10" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
          {badge}
        </span>
      </div>
    </Link>
  );
}

function GuideCard({
  href,
  title,
  desc,
  icon,
}: {
  href: string;
  title: string;
  desc: string;
  icon?: "coin" | "edit";
}) {
  return (
    <Link
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
      href={href}
    >
      <div className="mb-4 text-blue-600">
        {icon === "coin" ? (
          <Coin className="w-10 h-10" />
        ) : icon === "edit" ? (
          <Edit className="w-10 h-10" />
        ) : (
          <Book className="w-10 h-10" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </Link>
  );
}

function GuideItem({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle: string;
}) {
  return (
    <li>
      <Link className="flex items-start group" href={href}>
        <Bookmark className="w-5 h-5 text-blue-600 mr-2 mt-0.5 group-hover:text-blue-800" />
        <div>
          <span className="text-blue-600 font-medium group-hover:text-blue-800">
            {title}
          </span>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </Link>
    </li>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <CheckFilled className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

/* ---------- Inline Icons (SVG) ---------- */

function PlayCircle({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Mortar({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  );
}

function Grid({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function ArrowUp({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" />
    </svg>
  );
}

function CheckCircle({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Book({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  );
}

function Coin({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Edit({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  );
}

function Bookmark({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  );
}

function CheckFilled({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}


// import {Play, Calculator, DollarSign, BarChart } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react';
// import { ReactElement } from 'react';

// const planCalculators = [
//   {
//     icon: <Play className="w-6 h-6 text-white" />,
//     title: "Plan 1 Calculator",
//     description: "For pre-2012 students (England & Wales) and Northern Ireland students",
//     badges: [
//       { text: "Pre-2012", className: "bg-blue-100 text-blue-600" },
//       { text: "9% Above £22,015", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/plan-1-student-loan-calculator"
//   },
//   {
//     icon: <Play className="w-6 h-6 text-white" />,
//     title: "Plan 2 Calculator",
//     description: "For 2012-2023 students in England & Wales",
//     badges: [
//       { text: "2012-2023", className: "bg-blue-100 text-blue-600" },
//       { text: "9% Above £27,295", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/plan-2-student-loan-calculator"
//   },
//   {
//     icon: <Play className="w-6 h-6 text-white" />,
//     title: "Plan 4 Calculator",
//     description: "For students in Scotland",
//     badges: [
//       { text: "Scotland", className: "bg-blue-100 text-blue-600" },
//       { text: "9% Above £27,660", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/plan-4-student-loan-calculator"
//   },
//   {
//     icon: <Play className="w-6 h-6 text-white" />,
//     title: "Plan 5 Calculator",
//     description: "For students starting from September 2023 in England & Wales",
//     badges: [
//       { text: "2023 Onwards", className: "bg-blue-100 text-blue-600" },
//       { text: "9% Above £25,000", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/plan-5-student-loan-calculator"
//   },
//   {
//     icon: <Calculator className="w-6 h-6 text-white" />,
//     title: "Postgraduate Loan Calculator",
//     description: "For Master's & PhD students across the UK",
//     badges: [
//       { text: "Postgraduate", className: "bg-blue-100 text-blue-600" },
//       { text: "6% Above £21,000", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/postgraduate-loan-calculator"
//   },
//   {
//     icon: <BarChart className="w-6 h-6 text-white" />,
//     title: "Combined Loans Calculator",
//     description: "Calculate repayments with multiple loan plans",
//     badges: [
//       { text: "Multiple Plans", className: "bg-purple-100 text-purple-700" },
//       { text: "Simultaneous Repayments", className: "bg-pink-100 text-pink-700" }
//     ],
//     link: "/calculators/combined-repayment-calculator"
//   }
// ];

// const financeCalculators = [
//   {
//     icon: <Calculator className="w-6 h-6 text-white" />,
//     title: "Monthly Repayment Calculator",
//     description: "Compare monthly payments across all loan types",
//     badges: [
//       { text: "Budgeting", className: "bg-green-100 text-green-700" },
//     ],
//     link: "/calculators/monthly-repayment-calculator"
//   },
//   {
//     icon: <DollarSign className="w-6 h-6 text-white" />,
//     title: "Total Loan Cost Calculator",
//     description: "Estimate lifetime repayments and if your loan will be repaid in full",
//     badges: [
//       { text: "Long-term Planning", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/total-loan-cost-calculator"
//   },
//   {
//     icon: <BarChart className="w-6 h-6 text-white" />,
//     title: "Interest Calculator",
//     description: "See how interest accumulates on your student loan",
//     badges: [
//       { text: "Interest Analysis", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/student-loan-interest-calculator"
//   },
//   {
//     icon: <BarChart className="w-6 h-6 text-white" />,
//     title: "Overpayment Calculator",
//     description: "Analyze if making extra payments is financially beneficial",
//     badges: [
//       { text: "Repayment Strategy", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/student-loan-overpayment-calculator"
//   },
//   {
//     icon: <BarChart className="w-6 h-6 text-white" />,
//     title: "Write-Off Checker",
//     description: "Find out when your loan will be automatically cancelled",
//     badges: [
//       { text: "Loan Forgiveness", className: "bg-green-100 text-green-700" }
//     ],
//     link: "/calculators/loan-writeoff-checker"
//   }
// ];

// // function FilterDropdown({ label, value }) {
// //   return (
// //     <div>
// //       <span className="text-xs font-semibold text-gray-500">{label}</span>
// //       <button className="flex items-center w-full mt-1 px-3 py-1 border border-gray-200 bg-white rounded shadow-sm text-gray-700 font-medium min-w-[120px] justify-between">
// //         {value}
// //         <ChevronDown className="w-4 h-4 text-gray-400"/>
// //       </button>
// //     </div>
// //   );
// // }

// interface Badge {
//   text: string;
//   className: string;
// }

// interface CardProps {
//   icon: ReactElement;
//   title: string;
//   description: string;
//   badges: Badge[];
//   link: string;
// }

// function Card({ icon, title, description, badges, link }: CardProps) {
//   return (
//     <div className="rounded-xl bg-white shadow-sm px-5 py-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
//       <Link
//         href={link}
//       >
//        <div className="flex items-center mb-3">
//         <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
//           {/* {React.cloneElement(icon, { className: "w-5 h-5 text-white" })} */}
//           {icon}
//         </div>
//       </div>
//       <h3 className="font-semibold text-xl mb-2 text-gray-900">{title}</h3>
//       <p className="text-gray-500 text-lg mb-3">{description}</p>
//       <div className="flex flex-wrap gap-2">
//         {badges.map((b, i) => (
//           <span key={i} className={`px-2 py-1 rounded-sm text-sm font-semibold ${b.className}`}>{b.text}</span>
//         ))}
//       </div>
//       </Link>
//     </div>
//   );
// }

// const StudentLoanCalculatorsPage = () => (
//   <div className="min-h-screen bg-gray-50 py-6">
//     {/* Blue header */}
//     <div className="rounded-2xl bg-blue-50 px-8 py-8 container mx-auto mb-8 text-center">
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
//         Student Loan Calculators
//       </h1>
//       <p className="text-gray-600 text-lg">
//         Choose from our range of specialised calculators to understand your UK student loan
//       </p>
//     </div>
//     {/* Filter bar */}
//     {/* <div className="bg-white rounded-xl border border-gray-200 max-w-4xl mx-auto p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 shadow-sm">
//       <div className="font-bold text-md text-gray-800">Filter Calculators</div>
//       <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
//         <FilterDropdown label="By Loan Plan" value="All Plans" />
//         <FilterDropdown label="By Goal" value="All Goals" />
//         <FilterDropdown label="By Audience" value="All Users" />
//       </div>
//     </div> */}
//     {/* Plan-Specific Calculators */}
//     <div className="max-w-6xl mx-auto mb-6">
//       <h2 className="font-semibold text-2xl mb-4 mt-8 text-gray-800">Plan-Specific Calculators</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//         {planCalculators.map((calc, i) => <Card key={i} {...calc} />)}
//       </div>
//     </div>
//     {/* Financial Planning Tools */}
//     <div className="max-w-6xl mx-auto">
//       <h2 className="font-semibold text-2xl mb-4 mt-10 text-gray-800">Financial Planning Tools</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//         {financeCalculators.map((calc, i) => <Card key={i} {...calc} />)}
//       </div>
//     </div>
//   </div>
// );

// export default StudentLoanCalculatorsPage
