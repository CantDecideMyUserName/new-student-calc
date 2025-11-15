"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators", hasMegaMenu: true },
  { href: "/plans", label: "Plans", hasMegaMenu: true },
  { href: "/guides", label: "Guides", hasMegaMenu: true },
  { href: "/compare", label: "Compare", hasMegaMenu: true },
  { href: "/faqs", label: "FAQs" },
];

const PLAN_CATEGORIES = [
  {
    title: "Undergraduate Loan Plans",
    plans: [
      { href: "/plans/plan-1/", label: "Plan 1 Student Loans", description: "Pre-2012 students - lowest repayment threshold" },
      { href: "/plans/plan-2/", label: "Plan 2 Student Loans", description: "2012-2023 students - most common plan" },
      { href: "/plans/plan-4/", label: "Plan 4 Student Loans", description: "Scottish students - separate threshold system" },
      { href: "/plans/plan-5/", label: "Plan 5 Student Loans", description: "Post-2023 students - new terms and conditions" },
    ]
  },
  {
    title: "Postgraduate Loans",
    plans: [
      { href: "/plans/postgraduate-loan/", label: "Postgraduate Loans", description: "Master's and PhD funding - separate repayment terms" },
    ]
  },
  // {
  //   title: "Plan Comparisons",
  //   plans: [
  //     { href: "/plans/plan-comparison/", label: "Compare All Plans", description: "Side-by-side comparison of all loan plans" },
  //     { href: "/plans/which-plan-am-i-on/", label: "Which Plan Am I On?", description: "Find out which student loan plan applies to you" },
  //     { href: "/plans/plan-migration-guide/", label: "Plan Changes & Migration", description: "Understanding plan transitions and changes" },
  //   ]
  // }
];

const CALCULATOR_CATEGORIES = [
  {
    title: "Plan-Specific Calculators",
    calculators: [
      { href: "/calculators/plan-1-student-loan-calculator/", label: "Plan 1 Calculator" },
      { href: "/calculators/plan-2-student-loan-calculator/", label: "Plan 2 Calculator" },
      { href: "/calculators/plan-4-student-loan-calculator/", label: "Plan 4 Calculator" },
      { href: "/calculators/plan-5-student-loan-calculator/", label: "Plan 5 Calculator" },
      { href: "/calculators/postgraduate-loan-calculator/", label: "Postgraduate Loan Calculator" },
      { href: "/calculators/combined-repayment-calculator/", label: "Combined Loans Calculator" },
    ]
  },
  {
    title: "Financial Planning Tools",
    calculators: [
      { href: "/calculators/monthly-repayment-calculator/", label: "Monthly Repayment Calculator" },
      { href: "/calculators/total-loan-cost-calculator/", label: "Total Loan Cost Calculator" },
      { href: "/calculators/student-loan-interest-calculator/", label: "Interest Calculator" },
      { href: "/calculators/student-loan-overpayment-calculator/", label: "Overpayment Calculator" },
      { href: "/calculators/loan-writeoff-checker/", label: "Write-Off Checker" },
      { href: "/calculators/student-finance-calculator/", label: "Student Finance Calculator" },
    ]
  },
  {
    title: "HMRC & Tax-Specific",
    calculators: [
      { href: "/calculators/self-assessment-balancing-payment-calculator/", label: "Self Assessment Balancing Payment" },
      { href: "/calculators/multiple-jobs-paye-split-calculator/", label: "Multiple Jobs PAYE Split Calculator" },
      { href: "/calculators/sl-pgl-tax-code-impact-calculator/", label: "SL/PGL Notice & Tax Code Simulator" },
      { href: "/calculators/bonus-month-paye-calculator/", label: "Bonus Month PAYE Calculator" },
      { href: "/calculators/cis-self-employed-calculator/", label: "CIS/Self-Employed Calculator" },
      { href: "/calculators/p60-p45-student-loan-reconciliation-calculator/", label: "P60/P45 Year-End Reconciliation" },
      { href: "/calculators/slc-vs-sa-calcualtor/", label: "Overpayment: SLC Voluntary vs SA Top-Up" },
      { href: "/calculators/umbrella-ir35-paye-calculator/", label: "Umbrella/Inside-IR35 PAYE Model" },
      { href: "/calculators/paye-period-threshold-calculator/", label: "PAYE Period Threshold Calculator" },
      { href: "/calculators/sa-unearned-income-calculator/", label: "SA Unearned Income SL Impact" },
    ]
  }
];

const GUIDE_CATEGORIES = [
  {
    title: "Understanding Loan Mechanics",
    guides: [
      { href: "/guides/how-student-loans-work-uk/", label: "How UK Student Loans Work" },
      { href: "/guides/loan-interest-explained/", label: "Understanding Student Loan Interest" },
      { href: "/guides/repayment-thresholds/", label: "Repayment Thresholds Explained" },
    ]
  },
  {
    title: "Salary & Scenarios",
    guides: [
      { href: "/guides/student-loans-low-income/", label: "Student Loans on Low Incomes" },
      { href: "/guides/student-loans-high-earners/", label: "Student Loans for High Earners" },
      { href: "/guides/student-loans-and-mortgages/", label: "Student Loans & Mortgages" },
    ]
  },
  {
    title: "Repayment Strategy",
    guides: [
      { href: "/guides/should-i-overpay-loan/", label: "Should You Overpay Your Student Loan?" },
      { href: "/guides/investing-vs-loan-repayment/", label: "Investing vs. Loan Repayment" },
      { href: "/guides/student-loans-and-taxes/", label: "Student Loans & Tax Planning" },
    ]
  },
  {
    title: "Tax & Employment",
    guides: [
      { href: "/guides/student-loan-tax-codes/", label: "Understanding Your Student Loan Tax Code" },
      { href: "/guides/paye-vs-self-assessment-student-loans/", label: "PAYE vs Self Assessment Repayments" },
      { href: "/guides/contractors-student-loans-ir35-umbrella-cis/", label: "Student Loans for Contractors" },
      { href: "/guides/p60-p45-student-loan-repayments/", label: "How P60 and P45 Forms Affect Repayments" },
      { href: "/guides/student-loan-tax-code-payslip-uk/", label: "Tax Code & Payslip Verification Guide" },
    ]
  },
  {
    title: "Income Complexity",
    guides: [
      { href: "/guides/multiple-jobs-student-loans-uk/", label: "Managing Student Loans with Multiple Jobs" },
      { href: "/guides/bonus-payments-student-loans-uk/", label: "Bonus Payments and Student Loans" },
      { href: "/guides/side-hustles-student-loans-uk/", label: "Side Hustles and Student Loans" },
      { href: "/guides/investment-income-dividends-student-loans-uk/", label: "Investment Income, Dividends and Repayments" },
    ]
  },
  {
    title: "Strategic Planning",
    guides: [
      { href: "/guides/pension-vs-student-loan-overpayments-uk/", label: "Pension Contributions vs Student Loan Overpayments" },
      { href: "/guides/salary-sacrifice-student-loans-uk/", label: "Salary Sacrifice Benefits and Repayments" },
      { href: "/guides/career-progression-student-loans-marginal-tax/", label: "Student Loans and Career Progression" },
      { href: "/guides/crossing-student-loan-thresholds-uk/", label: "Crossing Student Loan Thresholds" },
    ]
  },
  {
    title: "Life Stage Integration",
    guides: [
      { href: "/guides/maternity-pay-student-loans-uk/", label: "Maternity Pay and Student Loans" },
      { href: "/guides/part-time-work-student-loans-uk/", label: "Part-Time Work and Student Loans" },
      { href: "/guides/moving-abroad-uk-student-loans/", label: "Student Loans When Moving Abroad" },
    ]
  },
  {
    title: "Plan-Specific Strategy",
    guides: [
      { href: "/guides/plan-2-student-loans-uk-strategy/", label: "Plan 2 Student Loans: Strategies for 2012-2023 Starters" },
      { href: "/guides/plan-5-student-loans-uk-optimization/", label: "Plan 5 Optimisation: New Rules for Post-2023 Students" },
      { href: "/guides/postgraduate-loans-uk-strategy/", label: "Combining Undergraduate and Postgraduate Loans" },
    ]
  }
];

const COMPARE_CATEGORIES = [
  {
    title: "Plan Comparisons",
    comparisons: [
      { href: "/compare/plan-1-vs-plan-2/", label: "Plan 1 vs Plan 2" },
      { href: "/compare/plan-2-vs-plan-5/", label: "Plan 2 vs Plan 5" },
      { href: "/compare/plan-4-vs-plan-5/", label: "Plan 4 vs Plan 5" },
      { href: "/compare/undergraduate-vs-postgraduate/", label: "Undergraduate vs Postgraduate" },
    ]
  },
  {
    title: "Interactive Comparisons Tools",
    comparisons: [
      { href: "/calculators/monthly-repayment-calculator/", label: "Monthly Repayment Calculator" },
      { href: "/calculators/total-loan-cost-calculator/", label: "Total Loan Cost Calculator" },
      { href: "/calculators/combined-repayment-calculator/", label: "Combined Loans Calculator" },
    ]
  },
  {
    title: "Salary & Career Comparisons",
    comparisons: [
      { href: "/compare/student-loans-on-25k-salary/", label: "Student Loans on £25k Salary" },
      { href: "/compare/student-loans-on-50k-salary/", label: "Student Loans on £50k Salary" },
      { href: "/compare/student-loans-by-profession/", label: "Student Loans by Profession" },
      { href: "/compare/student-loans-career-progression/", label: "Student Loans Career Progression" },
    ]
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCalculators, setActiveCalculators] = useState(false);
  const [activePlans, setActivePlans] = useState(false);
  const [activeGuides, setActiveGuides] = useState(false);
  const [activeCompare, setActiveCompare] = useState(false);
  const [mobileCalculatorsOpen, setMobileCalculatorsOpen] = useState(false);
  const [mobilePlansOpen, setMobilePlansOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const [mobileCompareOpen, setMobileCompareOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveCalculators(false);
        setActivePlans(false);
        setActiveGuides(false);
        setActiveCompare(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderDesktopLink = (href: string, label: string, hasMegaMenu?: boolean) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href) && href !== "/";

    if (!hasMegaMenu) {
      return (
        <Link
          key={href}
          href={href}
          className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"
            }`}
        >
          {label}
          <span
            className={`absolute left-0 right-0 -bottom-0.5 h-[2.5px] rounded bg-primary transition-all duration-200 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
          />
        </Link>
      );
    }

    const isCalculators = href === "/calculators";
    const isPlans = href === "/plans";
    const isCompare = href === "/compare";
    const isOpen = isCalculators ? activeCalculators : isPlans ? activePlans : isCompare ? activeCompare : activeGuides;
    const setIsOpen = isCalculators ? setActiveCalculators : isPlans ? setActivePlans : isCompare ? setActiveCompare : setActiveGuides;

    return (
      <div
        key={href}
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={() => router.push(href)}
          className={`flex items-center space-x-0 px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"
            }`}
        >
          <span>{label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>

        {/* Mega Menu */}
        {isOpen && (
          <div className="fixed left-1/2 -translate-x-1/2 mt-0 w-screen max-w-6xl z-50">
            <div className="bg-white shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg border border-gray-200">
              <div className="p-8">
                <div className="flex flex-wrap justify-normal gap-8">
                  {(isCalculators ? CALCULATOR_CATEGORIES : isPlans ? PLAN_CATEGORIES : isCompare ? COMPARE_CATEGORIES : GUIDE_CATEGORIES).map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide border-b border-orange-100 pb-2">
                        {category.title}
                      </h4>
                      <ul className="space-y-1">
                        {(isCalculators
                          ? (category as typeof CALCULATOR_CATEGORIES[0]).calculators
                          : isPlans
                            ? (category as typeof PLAN_CATEGORIES[0]).plans
                            : isCompare
                              ? (category as typeof COMPARE_CATEGORIES[0]).comparisons
                              : (category as typeof GUIDE_CATEGORIES[0]).guides
                        ).map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-gray-600 hover:text-primary text-sm block py-1 transition-all hover:translate-x-1 transform duration-200"
                              onClick={() => {
                                setActiveCalculators(false);
                                setActivePlans(false);
                                setActiveGuides(false);
                                setActiveCompare(false);
                              }}
                            >
                              <div>
                                <div className="font-medium">{item.label}</div>
                                {isPlans && 'description' in item && (
                                  <div className="text-xs text-gray-500 mt-0.5">{item.description as string}</div>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const getTotalItems = (section: string) => {
    const categories = section === "calculators" ? CALCULATOR_CATEGORIES :
      section === "plans" ? PLAN_CATEGORIES :
      section === "compare" ? COMPARE_CATEGORIES : GUIDE_CATEGORIES;
    return categories.reduce(
      (acc, cat) => acc + (section === "calculators"
        ? (cat as typeof CALCULATOR_CATEGORIES[0]).calculators.length
        : section === "plans"
          ? (cat as typeof PLAN_CATEGORIES[0]).plans.length
          : section === "compare"
            ? (cat as typeof COMPARE_CATEGORIES[0]).comparisons.length
            : (cat as typeof GUIDE_CATEGORIES[0]).guides.length),
      0
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={140}
              height={120}
              className="h-16 w-auto hover:scale-105 transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map(({ href, label, hasMegaMenu }) =>
              renderDesktopLink(href, label, hasMegaMenu)
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map(({ href, label, hasMegaMenu }, index) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href) && href !== "/";

              if (!hasMegaMenu) {
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={href}
                      className={`block py-2 font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              }

              const isCalculators = href === "/calculators";
              const isPlans = href === "/plans";
              const isCompare = href === "/compare";
              const isOpen = isCalculators ? mobileCalculatorsOpen : isPlans ? mobilePlansOpen : isCompare ? mobileCompareOpen : mobileGuidesOpen;
              const setIsOpen = isCalculators ? setMobileCalculatorsOpen : isPlans ? setMobilePlansOpen : isCompare ? setMobileCompareOpen : setMobileGuidesOpen;
              const section = isCalculators ? "calculators" : isPlans ? "plans" : isCompare ? "compare" : "guides";
              const categories = isCalculators ? CALCULATOR_CATEGORIES : isPlans ? PLAN_CATEGORIES : isCompare ? COMPARE_CATEGORIES : GUIDE_CATEGORIES;

              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold flex-1 ${isActive ? "text-primary" : "text-gray-800"
                      }`}>
                      <button
                        onClick={() => {
                          router.push(href);
                          setMobileOpen(false);
                        }}
                        className="hover:text-primary transition-colors"
                      >
                        {label}
                      </button>
                      <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {getTotalItems(section)}
                      </span>
                    </h3>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                      <ChevronDown
                        className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 pl-2"
                      >
                        {categories.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                              {category.title}
                            </h4>
                            <ul className="space-y-1 pl-3">
                              {(isCalculators
                                ? (category as typeof CALCULATOR_CATEGORIES[0]).calculators
                                : isPlans
                                  ? (category as typeof PLAN_CATEGORIES[0]).plans
                                  : isCompare
                                    ? (category as typeof COMPARE_CATEGORIES[0]).comparisons
                                    : (category as typeof GUIDE_CATEGORIES[0]).guides
                              ).map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-primary block py-1 transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div>
                                      <div>• {item.label}</div>
                                      {isPlans && 'description' in item && (
                                        <div className="text-xs text-gray-500 ml-2 mt-0.5">{item.description as string}</div>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;