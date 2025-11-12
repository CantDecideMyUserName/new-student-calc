import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Sitemap - Find all of our Pages',
  description: 'Navigate through all our calculators, guides, and resources to help you understand and manage your UK student loans',
};

export default function SitemapPage() {
  const baseUrl = "https://studentloancalculator.uk";

  const mainPages = [
    { title: 'Home', href: '/' },
    { title: 'Calculators', href: '/calculators/' },
    { title: 'Plans', href: '/plans/' },
    { title: 'Guides', href: '/guides/' },
    { title: 'Compare', href: '/compare/' },
    { title: 'FAQs', href: '/faqs/' },
  ];

  const plansPages = [
    { title: 'Plan 1', href: '/plans/plan-1/' },
    { title: 'Plan 2', href: '/plans/plan-2/' },
    { title: 'Plan 4', href: '/plans/plan-4/' },
    { title: 'Plan 5', href: '/plans/plan-5/' },
    { title: 'Postgraduate Loan', href: '/plans/postgraduate-loan/' },
  ];

  const comparePages = [
    { title: 'Plan 1 vs Plan 2', href: '/compare/plan-1-vs-plan-2/' },
    { title: 'Plan 2 vs Plan 5', href: '/compare/plan-2-vs-plan-5/' },
    { title: 'Plan 4 vs Plan 5', href: '/compare/plan-4-vs-plan-5/' },
    { title: 'Student Loans by Profession', href: '/compare/student-loans-by-profession/' },
    { title: 'Student Loans Career Progression', href: '/compare/student-loans-career-progression/' },
    { title: 'Student Loans on £25k Salary', href: '/compare/student-loans-on-25k-salary/' },
    { title: 'Student Loans on £50k Salary', href: '/compare/student-loans-on-50k-salary/' },
    { title: 'Undergraduate vs Postgraduate', href: '/compare/undergraduate-vs-postgraduate/' },
  ];

 const guidesPages = [
  { title: 'Bonus Payments Student Loans UK', href: '/guides/bonus-payments-student-loans-uk/' },
  { title: 'Career Progression Student Loans Marginal Tax', href: '/guides/career-progression-student-loans-marginal-tax/' },
  { title: 'Contractors Student Loans IR35 Umbrella CIS', href: '/guides/contractors-student-loans-ir35-umbrella-cis/' },
  { title: 'Crossing Student Loan Thresholds UK', href: '/guides/crossing-student-loan-thresholds-uk/' },
  { title: 'How Student Loans Work UK', href: '/guides/how-student-loans-work-uk/' },
  { title: 'Investing vs Loan Repayment', href: '/guides/investing-vs-loan-repayment/' },
  { title: 'Investment Income Dividends Student Loans UK', href: '/guides/investment-income-dividends-student-loans-uk/' },
  { title: 'Loan Interest Explained', href: '/guides/loan-interest-explained/' },
  { title: 'Maternity Pay Student Loans UK', href: '/guides/maternity-pay-student-loans-uk/' },
  { title: 'Moving Abroad UK Student Loans', href: '/guides/moving-abroad-uk-student-loans/' },
  { title: 'Multiple Jobs Student Loans UK', href: '/guides/multiple-jobs-student-loans-uk/' },
  { title: 'P60 P45 Student Loan Repayments', href: '/guides/p60-p45-student-loan-repayments/' },
  { title: 'Part Time Work Student Loans UK', href: '/guides/part-time-work-student-loans-uk/' },
  { title: 'PAYE vs Self Assessment Student Loans', href: '/guides/paye-vs-self-assessment-student-loans/' },
  { title: 'Pension vs Student Loan Overpayments UK', href: '/guides/pension-vs-student-loan-overpayments-uk/' },
  { title: 'Plan 2 Student Loans UK Strategy', href: '/guides/plan-2-student-loans-uk-strategy/' },
  { title: 'Plan 5 Student Loans UK Optimization', href: '/guides/plan-5-student-loans-uk-optimization/' },
  { title: 'Postgraduate Loans UK Strategy', href: '/guides/postgraduate-loans-uk-strategy/' },
  { title: 'Repayment Thresholds', href: '/guides/repayment-thresholds/' },
  { title: 'Salary Sacrifice Student Loans UK', href: '/guides/salary-sacrifice-student-loans-uk/' },
  { title: 'Self Employment Student Loans UK', href: '/guides/self-employment-student-loans-uk/' },
  { title: 'Should I Overpay Loan', href: '/guides/should-i-overpay-loan/' },
  { title: 'Side Hustles Student Loans UK', href: '/guides/side-hustles-student-loans-uk/' },
  { title: 'Student Loan Tax Code Payslip UK', href: '/guides/student-loan-tax-code-payslip-uk/' },
  { title: 'Student Loan Tax Codes', href: '/guides/student-loan-tax-codes/' },
  { title: 'Student Loans and Mortgages', href: '/guides/student-loans-and-mortgages/' },
  { title: 'Student Loans and Taxes', href: '/guides/student-loans-and-taxes/' },
  { title: 'Student Loans High Earners', href: '/guides/student-loans-high-earners/' },
  { title: 'Student Loans Low Income', href: '/guides/student-loans-low-income/' },
];

  const calculatorPages = [
    {
      category: 'Basic Calculators',
      items: [
        { title: 'Plan 1 Student Loan Calculator', href: '/calculators/plan-1-student-loan-calculator/' },
        { title: 'Plan 2 Student Loan Calculator', href: '/calculators/plan-2-student-loan-calculator/' },
        { title: 'Plan 4 Student Loan Calculator', href: '/calculators/plan-4-student-loan-calculator/' },
        { title: 'Plan 5 Student Loan Calculator', href: '/calculators/plan-5-student-loan-calculator/' },
        { title: 'Postgraduate Loan Calculator', href: '/calculators/postgraduate-loan-calculator/' },
        { title: 'Monthly Repayment Calculator', href: '/calculators/monthly-repayment-calculator/' },
        { title: 'Student Loan Interest Calculator', href: '/calculators/student-loan-interest-calculator/' },
      ]
    },
    {
      category: 'Advanced Calculators',
      items: [
        { title: 'Combined Repayment Calculator', href: '/calculators/combined-repayment-calculator/' },
        { title: 'Early Payoff Date Calculator', href: '/calculators/early-payoff-date-calculator/' },
        { title: 'Total Loan Cost Calculator', href: '/calculators/total-loan-cost-calculator/' },
        { title: 'Student Loan Overpayment Calculator', href: '/calculators/student-loan-overpayment-calculator/' },
        { title: 'Loan Writeoff Checker', href: '/calculators/loan-writeoff-checker/' },
        { title: 'Repayment Start Date Calculator', href: '/calculators/repayment-start-date-calculator/' },
      ]
    },
    {
      category: 'Impact & Scenario Calculators',
      items: [
        { title: 'Graduation Year Impact Calculator', href: '/calculators/graduation-year-impact-calculator/' },
        { title: 'Salary Growth Impact Calculator', href: '/calculators/salary-growth-impact-calculator/' },
        { title: 'Inflation Impact Calculator', href: '/calculators/inflation-impact-calculator/' },
        { title: 'SLC Interest Rate Impact Calculator', href: '/calculators/slc-interest-rate-impact-calculator/' },
        { title: 'Income Threshold Alert Calculator', href: '/calculators/income-threshold-alert-calculator/' },
        { title: 'Bonus & Variable Pay Impact Calculator', href: '/calculators/bonus-variable-pay-impact-calculator/' },
      ]
    },
    {
      category: 'Employment & Income Calculators',
      items: [
        { title: 'Self-Employed Loan Calculator', href: '/calculators/self-employed-loan-calculator/' },
        { title: 'Part-Time Earnings Calculator', href: '/calculators/part-time-earnings-calculator/' },
        { title: 'Multiple Jobs & Side Income Calculator', href: '/calculators/multiple-jobs-side-income-calculator/' },
        { title: 'CIS Self-Employed Calculator', href: '/calculators/cis-self-employed-calculator/' },
        { title: 'Umbrella IR35 PAYE Calculator', href: '/calculators/umbrella-ir35-paye-calculator/' },
        { title: 'Multiple Jobs PAYE Split Calculator', href: '/calculators/multiple-jobs-paye-split-calculator/' },
      ]
    },
    {
      category: 'PAYE & Tax Calculators',
      items: [
        { title: 'Bonus Month PAYE Calculator', href: '/calculators/bonus-month-paye-calculator/' },
        { title: 'PAYE Period Threshold Calculator', href: '/calculators/paye-period-threshold-calculator/' },
        { title: 'SL & PGL Tax Code Impact Calculator', href: '/calculators/sl-pgl-tax-code-impact-calculator/' },
        { title: 'PAYE vs Self Assessment Calculator', href: '/calculators/paye-vs-self-assessment-repayment-calculator/' },
        { title: 'SLC vs SA Calculator', href: '/calculators/slc-vs-sa-calcualtor/' },
      ]
    },
    {
      category: 'Self Assessment Calculators',
      items: [
        { title: 'SA Unearned Income Calculator', href: '/calculators/sa-unearned-income-calculator/' },
        { title: 'Self Assessment Balancing Payment Calculator', href: '/calculators/self-assessment-balancing-payment-calculator/' },
        { title: 'P60/P45 Student Loan Reconciliation Calculator', href: '/calculators/p60-p45-student-loan-reconciliation-calculator/' },
      ]
    },
    {
      category: 'Special Circumstances Calculators',
      items: [
        { title: 'Maternity/Paternity Leave Adjustment', href: '/calculators/maternity-paternity-leave-adjustment-calculator/' },
        { title: 'Part Year Employment & Career Break Calculator', href: '/calculators/part-year-employment-career-break-calculator/' },
        { title: 'Pension Salary Sacrifice Effect Calculator', href: '/calculators/pension-salary-sacrifice-effect-calculator/' },
        { title: 'Regional/National Comparison Calculator', href: '/calculators/regional-national-comparison-calculator/' },
      ]
    },
    {
      category: 'Combined Loan Calculators',
      items: [
        { title: 'Combined UG/PG Repayment Allocator', href: '/calculators/combined-ug-pg-repayment-allocator/' },
      ]
    },
    {
      category: 'Reference Tools',
      items: [
        { title: 'Plan Cohort Finder', href: '/calculators/plan-cohort-finder/' },
        { title: 'Tax Year Threshold & Interest Browser', href: '/calculators/tax-year-threshold-interest-browser/' },
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="block text-2xl md:text-3xl text-indigo-600 mt-2">Sitemap</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Navigate through all our calculators, guides, and resources to help you understand and manage your UK student loans
          </p>
          <time dateTime="2025-10-30T15:06:51.578Z" className="text-sm text-gray-500 block mt-4">
            Last Updated: October 30, 2025
          </time>
        </div>

        {/* Main Pages Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Main Pages</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-200 via-blue-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors duration-200"
              >
                <span className="text-gray-700 hover:text-indigo-700 font-medium transition-colors duration-200">
                  {page.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Plans Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Student Loan Plans</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-200 via-blue-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plansPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors duration-200"
              >
                <span className="text-gray-700 hover:text-indigo-700 font-medium transition-colors duration-200">
                  {page.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Compare Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Compare Plans & Scenarios</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-200 via-blue-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparePages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors duration-200"
              >
                <span className="text-gray-700 hover:text-indigo-700 font-medium transition-colors duration-200">
                  {page.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Guides Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Guides & Resources</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-200 via-blue-200 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guidesPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors duration-200"
              >
                <span className="text-gray-700 hover:text-indigo-700 font-medium transition-colors duration-200">
                  {page.title}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Calculators Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">All Calculators</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-indigo-200 via-blue-200 to-transparent"></div>
          </div>
          
          {calculatorPages.map((section) => (
            <div key={section.category} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pl-2 border-l-4 border-indigo-400">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors duration-200"
                  >
                    <span className="text-gray-700 hover:text-indigo-700 font-medium transition-colors duration-200">
                      {page.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}