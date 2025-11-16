import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function NorthernIrelandLoansPage() {
  const tocItems = [
    { id: "ni-overview", title: "Northern Ireland Student Finance Overview", level: 2 },
    { id: "low-fees", title: "Lowest UK Tuition Fees: £4,855 in NI", level: 2 },
    { id: "plan-1-ni", title: "Plan 1 in Northern Ireland: Repayment Terms", level: 2 },
    { id: "ni-grants", title: "Northern Ireland Maintenance Grants", level: 2 },
    { id: "ni-vs-uk", title: "Northern Ireland vs Rest of UK", level: 2 },
    { id: "roi-students", title: "Studying in Republic of Ireland", level: 2 },
  ];

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 pb-16">
          {/* Hero / Breadcrumbs */}
          <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-gray-600">
                  <li>
                    <Link className="hover:text-blue-700 hover:underline" href="/">
                      Home
                    </Link>
                  </li>
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
                  <li>
                    <Link className="hover:text-blue-700 hover:underline" href="/regions/">
                      Regions
                    </Link>
                  </li>
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
                  <li>
                    <span className="font-medium text-gray-800" aria-current="page">
                      Northern Ireland Loans
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Northern Ireland Student Loans: Lowest Fees, Plan 1 & Fastest Write-Off
              </h1>
              <p className="text-xl text-gray-600">
                Understanding Northern Ireland&apos;s distinctive student finance system with the UK&apos;s lowest tuition fees and shortest repayment period
              </p>
            </div>
          </section>

          {/* Main Content with Sidebar */}
          <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
            <TableOfContents items={tocItems} />
          </div>
          <div className="lg:flex lg:gap-8 relative">
            {/* Main Content */}
            <div className="lg:flex-1 lg:min-w-0">
              {/* Intro */}
              <section className="max-w-4xl mx-auto mb-12">
                <div className="prose max-w-none text-gray-600">
                  <p className="lead text-lg">
                    Northern Ireland operates a unique student finance system featuring the UK&apos;s lowest tuition fees for home students (£4,855), Plan 1 repayment terms, and the fastest loan write-off period at just 25 years. This combination makes Northern Irish graduates potentially better off than their counterparts in England, Wales, or Scotland, despite receiving lower maintenance support.
                  </p>
                  <p>
                    Administered by Student Finance Northern Ireland (SFNI), part of the Student Loans Company, the Northern Irish system provides maintenance grants up to £3,475 for lower-income households and maintains the original Plan 1 loan structure that England and Wales abandoned in 2012. With tuition fees approximately half those charged in England and a 25-year write-off, Northern Irish students face significantly lower lifetime debt burdens.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Northern Ireland&apos;s Key Advantages: Tuition fees of just £4,855 (vs England&apos;s £9,250), Plan 1&apos;s 25-year write-off (shortest in UK), and maintenance grants up to £3,475 create the lowest total debt burden outside of Scotland.
                    </p>
                  </div>
                </div>
              </section>

              {/* NI Overview */}
              <section id="ni-overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Northern Ireland Student Finance Overview
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Northern Ireland&apos;s student finance system has remained relatively stable since 1998, maintaining Plan 1 loan terms and modest tuition fees while the rest of the UK underwent significant reforms. This stability has created unique advantages for Northern Irish students.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Northern Ireland&apos;s Distinctive Features</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Lowest UK tuition fees:</strong> £4,855 for Northern Irish students studying in NI (2025/26)
                    </li>
                    <li>
                      <strong>Plan 1 repayment terms:</strong> Only UK nation still using the original Plan 1 system
                    </li>
                    <li>
                      <strong>25-year write-off:</strong> Shortest loan cancellation period in the UK
                    </li>
                    <li>
                      <strong>Maintenance grants:</strong> Up to £3,475 for households earning under £19,203
                    </li>
                    <li>
                      <strong>Lower maintenance support:</strong> Maximum £6,776 loan (less than England, Wales, Scotland)
                    </li>
                    <li>
                      <strong>Republic of Ireland option:</strong> Special provision for studying in ROI with student contribution loan
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Student Finance Northern Ireland (SFNI)</h3>
                  <p>
                    SFNI is a partnership between the Student Loans Company and the Northern Ireland Department for the Economy. SFNI serves:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Students ordinarily resident in Northern Ireland</li>
                    <li>Residents who have lived in NI for at least 3 years before course start</li>
                    <li>Northern Irish students studying anywhere in the UK or Republic of Ireland</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">NI 2025/26 Funding Summary</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Support Type</th>
                          <th className="px-4 py-3 text-left text-gray-800">Studying in NI</th>
                          <th className="px-4 py-3 text-left text-gray-800">Studying in GB</th>
                          <th className="px-4 py-3 text-left text-gray-800">Studying in ROI</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Maximum Tuition Fee</td>
                          <td className="px-4 py-3">£4,855</td>
                          <td className="px-4 py-3">£9,535</td>
                          <td className="px-4 py-3">€3,000 (contribution)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Tuition Fee Loan Available</td>
                          <td className="px-4 py-3">Up to £4,855</td>
                          <td className="px-4 py-3">Up to £9,535</td>
                          <td className="px-4 py-3">Up to €3,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Max Maintenance Loan (Away)</td>
                          <td className="px-4 py-3">£6,776</td>
                          <td className="px-4 py-3">£8,132 (£11,391 London)</td>
                          <td className="px-4 py-3">Varies</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Max Maintenance Grant</td>
                          <td className="px-4 py-3">£3,475</td>
                          <td className="px-4 py-3">£3,475</td>
                          <td className="px-4 py-3">£3,475</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Repayment Threshold</td>
                          <td className="px-4 py-3" colSpan={3}>£26,065 (2025/26)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Write-Off Period</td>
                          <td className="px-4 py-3" colSpan={3}>25 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Northern Ireland&apos;s Lower Maintenance Support:</p>
                    <p>
                      NI students receive less maintenance support than peers from other UK nations. An NI student studying in Manchester receives max £8,132/year while an English student gets £10,544, Welsh gets £12,345, and Scottish gets £11,400. This &quot;maintenance gap&quot; is a significant disadvantage of the NI system.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/"
                    >
                      Calculate Your Plan 1 Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* Low Fees */}
              <section id="low-fees" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Lowest UK Tuition Fees: £4,855 in Northern Ireland
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Northern Ireland&apos;s £4,855 tuition fee cap for home students represents less than half what England charges (£9,250), making NI the most affordable UK nation for tuition fees after Scotland&apos;s free tuition.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Are NI Tuition Fees So Low?</h3>
                  <p>
                    Northern Ireland chose not to follow England&apos;s 2012 tuition fee reforms that tripled fees from £3,000 to £9,000. Key reasons include:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Political consensus to maintain accessible higher education</li>
                    <li>Concerns about student debt burden on Northern Irish graduates</li>
                    <li>Lower average incomes in Northern Ireland compared to rest of UK</li>
                    <li>Devolved education policy allowing distinct approach</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The &quot;NI Discount&quot;: Fee Comparison</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">3-Year Undergraduate Degree - Tuition Fees Only:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Northern Ireland (studying in NI):</strong> £14,565 (£4,855 × 3 years)
                      </li>
                      <li>
                        <strong>England:</strong> £27,750 (£9,250 × 3 years)
                      </li>
                      <li>
                        <strong>Wales:</strong> £27,000 (£9,000 × 3 years)
                      </li>
                      <li>
                        <strong>Scotland (Scottish students):</strong> £0 (covered by SAAS)
                      </li>
                      <li>
                        <strong>Scotland (NI students):</strong> £28,605 (£9,535 × 3 years)</li>
                      <li>
                        <strong>NI saves £13,185 vs England!</strong>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Studying Outside Northern Ireland</h3>
                  <p>
                    If a Northern Irish student chooses to study in England, Wales, or Scotland, they pay the higher fees charged by those institutions (up to £9,535), not the NI rate. However, they can still access tuition fee loans up to the amount charged.
                  </p>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6 rounded">
                    <p className="font-medium text-orange-800 mb-2">The NI Fee Paradox:</p>
                    <p className="text-orange-900">
                      NI students from Belfast pay £4,855/year at Queen&apos;s University Belfast, but would pay £9,535/year at University of Edinburgh. English students from London pay £9,250/year at Queen&apos;s or £9,250/year at Edinburgh. This creates strong incentives for NI students to stay home.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">University Funding in Northern Ireland</h3>
                  <p>
                    The low tuition fees create funding challenges for Northern Irish universities. To compensate for the tuition fee gap, NI universities:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Receive direct government block grants</li>
                    <li>Charge higher fees to students from England, Scotland, and Wales (£9,535)</li>
                    <li>Actively recruit international students who pay premium fees</li>
                    <li>Lobby for increased tuition fee caps (unsuccessful so far)</li>
                  </ul>
                </div>
              </section>

              {/* Plan 1 NI */}
              <section id="plan-1-ni" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 1 in Northern Ireland: Repayment Terms
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Northern Ireland is the only UK nation where all students - past and present - have Plan 1 loans. While England and Wales moved to Plan 2 in 2012 and England to Plan 5 in 2023, Northern Ireland has maintained the original Plan 1 system.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Northern Ireland Plan 1 Parameters (2025/26)</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Repayment threshold:</strong> £26,065 per year (£2,172 monthly, £501 weekly)
                      </li>
                      <li>
                        <strong>Repayment rate:</strong> 9% of income above the threshold
                      </li>
                      <li>
                        <strong>Interest rate:</strong> Lower of RPI or Bank of England base rate + 1% (currently 4.3%)
                      </li>
                      <li>
                        <strong>Write-off period:</strong> 25 years after the April you became eligible to repay
                      </li>
                      <li>
                        <strong>Write-off at age:</strong> 65 for loans taken before 2006/07
                      </li>
                      <li>
                        <strong>Repayment start:</strong> April after you leave or complete your course
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">NI Plan 1 Repayment Examples</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>NI graduate earning £30,000/year:</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £26,065 threshold: £3,935</li>
                      <li>Annual Plan 1 repayment: 9% of £3,935 = £354.15</li>
                      <li>Monthly deduction via PAYE: £29.51</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>NI graduate earning £40,000/year:</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £26,065 threshold: £13,935</li>
                      <li>Annual Plan 1 repayment: 9% of £13,935 = £1,254.15</li>
                      <li>Monthly deduction via PAYE: £104.51</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 1&apos;s 25-Year Write-Off Advantage</h3>
                  <p>
                    Northern Ireland&apos;s 25-year write-off period is the shortest in the UK:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Northern Ireland (Plan 1):</strong> 25 years
                    </li>
                    <li>
                      <strong>Scotland (Plan 4):</strong> 30 years
                    </li>
                    <li>
                      <strong>Wales (Plan 2):</strong> 30 years
                    </li>
                    <li>
                      <strong>England (Plan 5):</strong> 40 years
                    </li>
                  </ul>

                  <p>
                    For NI graduates who don&apos;t fully repay their loans, this 5-15 year shorter repayment window compared to other nations means thousands of pounds saved. A graduate making £30,000 saves £5,312 over the shortened repayment period compared to Scotland&apos;s 30 years.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">NI Plan 1 Interest Rates</h3>
                  <p>
                    Northern Ireland uses the same interest calculation as Scotland&apos;s Plan 4: the lower of either RPI or Bank of England base rate plus 1%. As of September 2025, this results in:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Current RPI: 3.2%</li>
                    <li>Bank of England base rate + 1%: 5.75%</li>
                    <li>Applied Plan 1 rate: 3.2% (the lower)</li>
                  </ul>

                  <p>
                    This is significantly lower than England&apos;s Plan 2 maximum of RPI+3% (6.2%) for high earners, benefiting NI graduates who take longer to repay.
                  </p>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/plan-1-student-loan-calculator/"
                    >
                      Calculate Your Plan 1 Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* NI Grants */}
              <section id="ni-grants" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Northern Ireland Maintenance Grants
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Northern Ireland provides maintenance grants to students from lower and middle-income households, reducing the amount of repayable debt they carry. Unlike Wales&apos;s universal minimum grant, NI grants are only available to households earning under £41,065.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">NI Maintenance Grant Eligibility</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Maintenance Grant Tiers (2025/26):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Household income £19,203 or less:</strong> £3,475 maximum grant
                      </li>
                      <li>
                        <strong>Household income £19,204-£41,065:</strong> Tapered grant (reduces as income increases)
                      </li>
                      <li>
                        <strong>Household income over £41,065:</strong> £0 grant (loan only)
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How NI Grants Reduce Loan Amounts</h3>
                  <p>
                    Important: Receiving a maintenance grant reduces your available maintenance loan. However, you receive the same total support - just with less repayable debt.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 1: Household income £19,000 (living away from home)</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Maintenance grant: £3,475 (non-repayable)</li>
                      <li>Maintenance loan: £3,301 (repayable)</li>
                      <li>Total support: £6,776</li>
                      <li><strong>Only repay £3,301 (49%)</strong></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 2: Household income £50,000 (living away from home)</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Maintenance grant: £0</li>
                      <li>Maintenance loan: £6,776 (repayable)</li>
                      <li>Total support: £6,776</li>
                      <li><strong>Repay full £6,776 (100%)</strong></li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Special Support Grant (SSG)</h3>
                  <p>
                    NI offers a Special Support Grant for students in specific circumstances:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Lone parents</li>
                    <li>Students aged 60+ at course start</li>
                    <li>Students with disabilities receiving certain benefits</li>
                    <li>Students eligible for income-related benefits</li>
                  </ul>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded">
                    <p className="font-medium text-green-800 mb-2">SSG Advantage:</p>
                    <p className="text-green-900">
                      Unlike the maintenance grant, the Special Support Grant (same amount up to £3,475) does NOT reduce your maintenance loan entitlement. If eligible, you get both the full SSG and full maintenance loan - significantly more total support.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional NI Support</h3>
                  <p>Beyond standard grants and loans, NI students can access:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Parents&apos; Learning Allowance:</strong> Extra support for students with dependent children
                    </li>
                    <li>
                      <strong>Childcare Grant:</strong> Help with registered childcare costs
                    </li>
                    <li>
                      <strong>Disabled Students&apos; Allowances:</strong> Non-repayable support for disability-related study costs
                    </li>
                    <li>
                      <strong>Travel costs:</strong> For medical/dental students on clinical placements
                    </li>
                  </ul>
                </div>
              </section>

              {/* NI vs UK */}
              <section id="ni-vs-uk" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Northern Ireland vs Rest of UK
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Northern Ireland&apos;s combination of low tuition fees, Plan 1 repayment terms, and 25-year write-off creates unique trade-offs compared to other UK nations.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Debt Comparison (3-Year Degree, Studying at Home)</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Low-Income Household (£19,000/year):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Northern Ireland:</strong> £14,565 tuition + £9,903 maintenance = £24,468 total debt
                      </li>
                      <li>
                        <strong>Scotland:</strong> £0 tuition + £21,000 maintenance = £21,000 total debt
                      </li>
                      <li>
                        <strong>Wales:</strong> £27,000 tuition + £12,735 maintenance - £1,500 cancellation = £38,235 total debt
                      </li>
                      <li>
                        <strong>England:</strong> £27,750 tuition + £30,000+ maintenance = £57,750+ total debt
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Lifetime Repayment Comparison</h3>
                  <p>Graduate earning £35,000 across UK nations:</p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Nation</th>
                          <th className="px-4 py-3 text-left text-gray-800">Plan</th>
                          <th className="px-4 py-3 text-left text-gray-800">Annual Payment</th>
                          <th className="px-4 py-3 text-left text-gray-800">Write-Off</th>
                          <th className="px-4 py-3 text-left text-gray-800">Max Total Paid</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">N. Ireland</td>
                          <td className="px-4 py-3">Plan 1</td>
                          <td className="px-4 py-3">£804.15</td>
                          <td className="px-4 py-3">25 years</td>
                          <td className="px-4 py-3">£20,104</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Scotland</td>
                          <td className="px-4 py-3">Plan 4</td>
                          <td className="px-4 py-3">£202.95</td>
                          <td className="px-4 py-3">30 years</td>
                          <td className="px-4 py-3">£6,089</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Wales</td>
                          <td className="px-4 py-3">Plan 2</td>
                          <td className="px-4 py-3">£693.45</td>
                          <td className="px-4 py-3">30 years</td>
                          <td className="px-4 py-3">£20,804</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">England</td>
                          <td className="px-4 py-3">Plan 5</td>
                          <td className="px-4 py-3">£900</td>
                          <td className="px-4 py-3">40 years</td>
                          <td className="px-4 py-3">£36,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Northern Ireland&apos;s Advantages</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Lowest tuition fees in UK (after Scotland&apos;s free tuition): £4,855 vs England&apos;s £9,250</li>
                    <li>Shortest write-off period: 25 years vs England&apos;s 40 years</li>
                    <li>Lower interest rates than England&apos;s Plan 2 maximum</li>
                    <li>Maintenance grants reduce repayable debt for lower-income students</li>
                    <li>Significantly lower total debt than England or Wales</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Northern Ireland&apos;s Disadvantages</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Lower maintenance support than other UK nations (£6,776 max vs Wales £12,345)</li>
                    <li>No universal minimum grant (Wales gives everyone £1,000)</li>
                    <li>Lower threshold than Scotland (£26,065 vs £32,745) means repayments start sooner</li>
                    <li>Still pay tuition fees (unlike Scottish students in Scotland)</li>
                    <li>Limited postgraduate support compared to Wales</li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/regional-national-comparison-calculator/"
                    >
                      Compare NI with Other UK Nations
                    </Link>
                  </div>
                </div>
              </section>

              {/* ROI Students */}
              <section id="roi-students" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Studying in Republic of Ireland
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Northern Irish students have a unique option unavailable to other UK students: accessing student finance to study in the Republic of Ireland (ROI).
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">ROI Student Contribution Loan</h3>
                  <p>
                    In the Republic of Ireland, students don&apos;t pay tuition fees but instead pay a &quot;student contribution charge.&quot; For 2025/26, this is €3,000 (approximately £2,570).
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">NI Student Finance for ROI Study:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Student contribution loan:</strong> Up to €3,000 to cover the charge
                      </li>
                      <li>
                        <strong>Maintenance support:</strong> Same grants and loans as studying in UK
                      </li>
                      <li>
                        <strong>Repayment terms:</strong> Same Plan 1 terms (£26,065 threshold, 25-year write-off)
                      </li>
                      <li>
                        <strong>Combined with UK loans:</strong> ROI contribution loan combines with any UK undergraduate loans
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why NI Students Choose ROI</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Lower &quot;fees&quot; (€3,000 vs £4,855 in NI or £9,535 in GB)</li>
                    <li>Geographic proximity (Belfast to Dublin: 2 hours)</li>
                    <li>Cultural and historical connections</li>
                    <li>Access to EU universities post-Brexit (transitional arrangements)</li>
                    <li>Quality institutions (Trinity College Dublin, University College Dublin)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">ROI vs NI vs GB: Total Cost Comparison</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Northern Irish Student - 4-Year Degree (ROI degrees typically 4 years):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Studying in ROI:</strong> €12,000 (≈£10,280) contribution + £20,000 maintenance = £30,280 total
                      </li>
                      <li>
                        <strong>Studying in NI:</strong> £14,565 tuition + £20,328 maintenance = £34,893 total (3-year degree)
                      </li>
                      <li>
                        <strong>Studying in England:</strong> £27,750 tuition + £24,396 maintenance = £52,146 total (3-year degree)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Post-Brexit Note: EU students (excluding Irish nationals) no longer receive the same support as NI students when studying in ROI. The student contribution loan for ROI study is specifically for NI-resident students, maintaining the historic Belfast-Dublin educational corridor.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Northern Ireland Loan Repayments</h2>
                  <p className="text-lg text-blue-100">
                    Use our Plan 1 calculator for accurate NI student loan projections
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/plan-1-student-loan-calculator/"
                    >
                      Plan 1 Calculator
                    </Link>
                    <Link
                      className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                      href="/calculators/regional-national-comparison-calculator/"
                    >
                      Regional Comparison
                    </Link>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related Resources */}
              <section className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Related Resources for Northern Irish Students
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/regions/england-student-loan-system/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Compare NI vs England</h3>
                    <p className="text-gray-600">See how NI&apos;s low fees and Plan 1 compare to England&apos;s higher-cost system</p>
                  </Link>

                  <Link
                    href="/plans/plan-1/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Plan 1 Guide</h3>
                    <p className="text-gray-600">Detailed breakdown of Plan 1 loan terms used in Northern Ireland</p>
                  </Link>

                  <Link
                    href="/regions/scotland-saas-loan-differences/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-green-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Scotland&apos;s Free Tuition</h3>
                    <p className="text-gray-600">Compare NI&apos;s low fees with Scotland&apos;s free tuition model</p>
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-80 lg:flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}