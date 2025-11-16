import Image from "next/image";
import Link from "next/link";


type NavItem = { label: string; href: string };
type Column = { heading: string; items: NavItem[] };


const calculators: Column = {
  heading: "Calculators",
  items: [
    { label: "Plan 1 Calculator", href: "/calculators/plan-1-student-loan-calculator/" },
    { label: "Plan 2 Calculator", href: "/calculators/plan-2-student-loan-calculator/" },
    { label: "Plan 4 Calculator", href: "/calculators/plan-4-student-loan-calculator/" },
    { label: "Plan 5 Calculator", href: "/calculators/plan-5-student-loan-calculator/" },
    { label: "Postgraduate Loan Calculator", href: "/calculators/postgraduate-loan-calculator/" },
    { label: "Overpayment Calculator", href: "/calculators/student-loan-overpayment-calculator/" },
    { label: "Combined Repayment Calculator", href: "/calculators/combined-repayment-calculator/" },
    { label: "Total Loan Cost Calculator", href: "/calculators/total-loan-cost-calculator/" },
  ],
};


const guides: Column = {
  heading: "Guides",
  items: [
    { label: "How UK Student Loans Work", href: "/guides/how-student-loans-work-uk/" },
    { label: "Student Loans on Low Incomes", href: "/guides/student-loans-low-income/" },
    { label: "Should I Pay Off My Student Loan?", href: "/guides/should-i-overpay-loan/" },
    { label: "Student Loan Tax Codes", href: "/guides/student-loan-tax-codes/" },
    { label: "Maternity Pay and Student Loans", href: "/guides/maternity-pay-student-loans-uk/" },
    { label: "Pension vs Student Loan Overpayments", href: "/guides/pension-vs-student-loan-overpayments-uk/" },
    { label: "Multiple Jobs and Student Loans", href: "/guides/multiple-jobs-student-loans-uk/" },
    { label: "Plan 2 Student Loans Strategy", href: "/guides/plan-2-student-loans-uk-strategy/" },
  ],
};


const resources: Column = {
  heading: "Resources",
  items: [
    { label: "Loan Plans", href: "/plans/" },
    { label: "FAQs", href: "/faqs/" },
    { label: "Glossary", href: "/glossary/" },
    { label: "Plan 1 vs Plan 2", href: "/compare/plan-1-vs-plan-2/" },
    { label: "Plan 2 vs Plan 5", href: "/compare/plan-2-vs-plan-5/" },
    { label: "Plan 4 vs Plan 5", href: "/compare/plan-4-vs-plan-5/" },
    { label: "Undergraduate vs Postgraduate", href: "/compare/undergraduate-vs-postgraduate/" },
  ],
};


const company: Column = {
  heading: "Company",
  items: [
    { label: "About Us", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms of Use", href: "/terms/" },
    { label: "Cookie Policy", href: "/cookie-policy/" },
  ],
};


export default function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8 pb-8">
          {/* Brand / blurb / socials */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center mb-6">
              <Image src="/images/logo1.png" alt="Logo" width={140} height={120} className="h-16 w-auto" />
              {/* <span className="text-xl font-bold text-[#1A4FCC] font-['Poppins']">
                Student Loan Calculator UK
              </span> */}
            </div>


            <p className="text-gray-600 mb-6 font-['Open_Sans']">
              Helping UK students and graduates understand and manage their student loans with accurate, up-to-date tools and resources.
            </p>


            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-primary text-sm font-['Open_Sans']">Leeds, West Yorkshire LS1 4DY, UK</span>
            </div>


            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#1A4FCC] flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#1A4FCC] flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>


              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1A4FCC] flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>


          {/* Link columns */}
          <div className="mt-4 md:mt-12 xl:mt-0 xl:col-span-3">
            {/* Mobile: 2x2 grid */}
            <div className="grid grid-cols-2 gap-8 md:hidden">
              {[calculators, guides, resources, company].map((col) => (
                <FooterColumn key={col.heading} column={col} />
              ))}
            </div>


            {/* Desktop: original nested structure */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-8">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {[calculators, guides].map((col) => (
                  <FooterColumn key={col.heading} column={col} />
                ))}
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {[resources, company].map((col) => (
                  <FooterColumn key={col.heading} column={col} />
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="md:pt-8 pt-2 flex flex-col md:flex-row justify-between items-center pb-3 border-b border-gray-200">
          <p className="text-sm text-gray-500 font-['Open_Sans'] text-center md:text-left mb-4 md:mb-0 order-2 md:order-1">
            © 2025 Student Loan Calculator UK. All rights reserved.
          </p>
          <div className="order-1 md:order-2 mb-4 md:mb-0">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs text-gray-500 md:hidden max-w-md mx-auto">
              <a href="https://www.gov.uk/student-finance" className="hover:text-[#1A4FCC] transition-colors flex items-start gap-2">
                <span className="flex-shrink-0">→</span>
                <span>Student Finance GOV.UK</span>
              </a>
              <a href="/sitemaps/" className="hover:text-[#1A4FCC] transition-colors flex items-start gap-2">
                <span className="flex-shrink-0">→</span>
                <span>Sitemap</span>
              </a>
              <a href="https://studentfinance.campaign.gov.uk/" className="hover:text-[#1A4FCC] transition-colors flex items-start gap-2">
                <span className="flex-shrink-0">→</span>
                <span>Student Finance England</span>
              </a>
              <a href="/change-log/" className="hover:text-[#1A4FCC] transition-colors flex items-start gap-2">
                <span className="flex-shrink-0">→</span>
                <span>Change Log</span>
              </a>
            </div>


            {/* Desktop: Horizontal with dots */}
            <div className="hidden md:flex md:flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="https://www.gov.uk/student-finance" className="hover:text-[#1A4FCC] transition-colors">
                Student Finance GOV.UK
              </a>
              <span>•</span>
              <a href="/sitemaps/" className="hover:text-[#1A4FCC] transition-colors">
                Sitemap
              </a>
              <span>•</span>
              <a href="https://studentfinance.campaign.gov.uk/" className="hover:text-[#1A4FCC] transition-colors">
                Student Finance England
              </a>
              <span>•</span>
              <a href="/change-log/" className="hover:text-[#1A4FCC] transition-colors">
                Change Log
              </a>
            </div>
          </div>
        </div>


        <div className="pt-4 flex flex-col md:flex-row justify-center items-center">
          <p className="text-xs text-gray-500 font-['Open_Sans'] text-center mb-4 md:mb-0">
            This website is not affiliated with the Student Loans Company or UK Government. Information is provided for guidance only and should not be considered financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}


function FooterColumn({ column }: { column: Column }) {
  return (
    <div className="mt-12 md:mt-0">
      <h3 className="font-semibold text-gray-800 mb-4 text-sm font-['Inter']">
        {column.heading}
      </h3>
      <ul role="list" className="mt-4 space-y-4">
        {column.items.map((item) => (
          <li key={item.href}>
            <Link target="_blank" href={item.href} className="text-sm text-gray-500 hover:text-blue-700">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}