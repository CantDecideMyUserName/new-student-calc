import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function EnglandToScotlandTransferPage() {
  const tocItems = [
    { id: "overview", title: "Cross-Border Study Overview", level: 2 },
    { id: "plan-changes", title: "How Your Loan Plan Changes", level: 2 },
    { id: "tuition-fees", title: "Tuition Fee Implications", level: 2 },
    { id: "repayment-impact", title: "Impact on Loan Repayments", level: 2 },
    { id: "transferring-mid-course", title: "Transferring Mid-Course", level: 2 },
    { id: "practical-steps", title: "Practical Steps for Transfer", level: 2 },
    { id: "scenarios", title: "Common Transfer Scenarios", level: 2 },
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
                      Regional Differences
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
                      England to Scotland Transfer
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Moving from England to Scotland for University
              </h1>
              <p className="text-xl text-gray-600">
                Understanding how cross-border study affects your student finance and loan repayments
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
                    Moving from England to study in Scotland involves navigating significant differences in student finance systems, tuition fee structures, and loan repayment plans. While the transition is straightforward, understanding the implications is crucial for effective financial planning.
                  </p>
                  <p>
                    This guide explains what happens to your student finance when you move between England and Scotland, whether you&apos;re starting fresh, transferring during your studies, or completing postgraduate study after an undergraduate degree elsewhere.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Key Point: Your loan plan is determined by where you normally live (your &quot;ordinary residence&quot;) before your course starts, not where you study. English residents studying in Scotland typically remain on English loan plans.
                    </p>
                  </div>
                </div>
              </section>

              {/* Overview */}
              <section id="overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Cross-Border Study Overview
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The UK&apos;s four nations operate distinct student finance systems with different rules, thresholds, and repayment structures. Understanding these differences is essential when considering cross-border study.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Fundamental Principle: Ordinary Residence</h3>
                  <p>
                    Your student finance is determined by your ordinary residence on the first day of the first academic year of your course. Ordinary residence means:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Habitual residence:</strong> Where you normally live as your home, not just temporarily for work or study
                    </li>
                    <li>
                      <strong>Three-year requirement:</strong> You must have been ordinarily resident in the UK for three years before your course starts
                    </li>
                    <li>
                      <strong>Not affected by study location:</strong> Moving to a different UK nation solely for university study doesn&apos;t change your ordinary residence
                    </li>
                  </ul>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Example Scenario:</p>
                    <p>
                      Sarah has lived in Manchester all her life and is starting a four-year degree at the University of Edinburgh. Despite studying in Scotland, she applies to Student Finance England and will be on Plan 5 (or Plan 2 if she started before 2023) because England is her ordinary residence.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Cross-Border Study Matters</h3>
                  <p>Key differences that affect your experience and finances include:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Tuition fees:</strong> Scottish universities charge different fees to students from different UK nations
                    </li>
                    <li>
                      <strong>Course duration:</strong> Many Scottish degrees are four years rather than three years in England
                    </li>
                    <li>
                      <strong>Loan plans:</strong> Your repayment plan depends on where you&apos;re ordinarily resident, not where you study
                    </li>
                    <li>
                      <strong>Additional funding:</strong> Access to certain grants and bursaries may differ
                    </li>
                  </ul>
                </div>
              </section>

              {/* Plan Changes */}
              <section id="plan-changes" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  How Your Loan Plan Changes
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    When you move from England to study in Scotland, your loan plan depends entirely on your ordinary residence status, not your study location.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">English Residents Studying in Scotland</h3>
                  <p>If you&apos;re ordinarily resident in England and study in Scotland, you will:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <ul className="list-disc pl-6">
                      <li>Apply through Student Finance England (SFE)</li>
                      <li>Be placed on Plan 2 if you started between 2012-2023</li>
                      <li>Be placed on Plan 5 if you started from September 2023 onwards</li>
                      <li>
                        Pay tuition fees at the English rate (currently up to £9,250 per year) even though you&apos;re studying in Scotland
                      </li>
                      <li>Have access to the same maintenance loan as if studying in England</li>
                      <li>Repay according to English thresholds and interest rates</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Comparison: Plan 2 vs Plan 4 (Scotland)</h3>
                  <p>
                    It&apos;s helpful to understand how your English loan plan compares to the Scottish Plan 4 that local Scottish students use:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                          <th className="px-4 py-3 text-left text-gray-800">
                            <Link href="/plans/plan-2/" className="text-blue-600 hover:underline">
                              Plan 2 (England)
                            </Link>
                          </th>
                          <th className="px-4 py-3 text-left text-gray-800">
                            <Link href="/plans/plan-4/" className="text-blue-600 hover:underline">
                              Plan 4 (Scotland)
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">Repayment Threshold</td>
                          <td className="px-4 py-3">£27,295</td>
                          <td className="px-4 py-3">£27,660</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Repayment Rate</td>
                          <td className="px-4 py-3">9% above threshold</td>
                          <td className="px-4 py-3">9% above threshold</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Interest Rate</td>
                          <td className="px-4 py-3">RPI to RPI + 3%</td>
                          <td className="px-4 py-3">RPI or 1.5% (whichever is lower)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Write-Off Period</td>
                          <td className="px-4 py-3">30 years</td>
                          <td className="px-4 py-3">30 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Typical Tuition Fees</td>
                          <td className="px-4 py-3">£9,250 per year</td>
                          <td className="px-4 py-3">£1,820 per year (Scottish domiciled students)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 5 Students (From 2023 Onwards)</h3>
                  <p>English students starting from September 2023 onwards will be on Plan 5 when studying in Scotland:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <ul className="list-disc pl-6">
                      <li>Lower repayment threshold: £25,000 (compared to £27,295 for Plan 2)</li>
                      <li>Simplified interest: RPI only, no additional percentage based on income</li>
                      <li>Longer write-off period: 40 years instead of 30 years</li>
                      <li>Same 9% repayment rate above the threshold</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Important: You cannot choose to switch to Scottish Plan 4 just because you&apos;re studying in Scotland. Your ordinary residence determines your plan, and this remains fixed for the duration of your course.
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/compare/plan-2-vs-plan-4/"
                    >
                      Compare Plan 2 vs Plan 4 in Detail
                    </Link>
                  </div>
                </div>
              </section>

              {/* Tuition Fees */}
              <section id="tuition-fees" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Tuition Fee Implications
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    One of the most significant differences when studying in Scotland as an English student is the tuition fee structure.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tuition Fees for English Students in Scotland</h3>
                  <p>
                    English students studying in Scotland are charged at the &quot;Rest of UK&quot; (RUK) rate, which matches English tuition fees:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Current Tuition Fee Structure:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Scottish domiciled students:</strong> £1,820 per year (covered by Student Awards Agency Scotland)
                      </li>
                      <li>
                        <strong>English, Welsh, and Northern Irish students:</strong> Up to £9,250 per year
                      </li>
                      <li>
                        <strong>EU and international students:</strong> Varies significantly, often £15,000-£30,000+ per year
                      </li>
                    </ul>
                  </div>

                  <p>
                    This means that while your Scottish peers may have their fees covered by SAAS (Student Awards Agency Scotland), you&apos;ll be paying the full £9,250 per year through your Student Finance England loan.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Four-Year Degree Consideration</h3>
                  <p>
                    Most Scottish undergraduate degrees are four years rather than three. This has significant financial implications:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Total Cost Comparison:</p>
                    <ul className="list-disc pl-6">
                      <li>Three-year English degree: 3 × £9,250 = £27,750 in tuition fees</li>
                      <li>Four-year Scottish degree: 4 × £9,250 = £37,000 in tuition fees</li>
                      <li>Additional difference: £9,250 extra in tuition fee loans</li>
                    </ul>
                  </div>

                  <p>
                    However, this needs to be balanced against other factors such as course content, career prospects, and personal preferences. Many students find the four-year Scottish degree structure beneficial as it often includes more breadth in the first two years before specialization.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Direct Entry to Second Year</h3>
                  <p>
                    English students with strong A-level results (typically AAA or higher) may qualify for direct entry to the second year of a Scottish degree, effectively making it a three-year course:
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium mb-2">Direct Entry Advantages:</p>
                    <ul className="list-disc pl-6">
                      <li>Reduces course length from four years to three years</li>
                      <li>Saves £9,250 in tuition fees</li>
                      <li>Saves a year of maintenance costs and living expenses</li>
                      <li>Enter employment a year earlier</li>
                    </ul>
                  </div>

                  <p>
                    Not all Scottish universities offer direct entry, and requirements vary by institution and subject. Contact universities directly to discuss your eligibility.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maintenance Loan Entitlement</h3>
                  <p>
                    As an English student, you&apos;ll receive maintenance loan based on English rates, which differ slightly from the rates for students studying in England:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Maintenance Loan (Living Away from Home):</p>
                    <ul className="list-disc pl-6">
                      <li>Studying in London: Up to £13,762 per year (2024/25)</li>
                      <li>Studying outside London (including Scotland): Up to £10,227 per year (2024/25)</li>
                      <li>Living with parents: Up to £8,171 per year (2024/25)</li>
                    </ul>
                  </div>

                  <p>
                    The maintenance loan is means-tested based on household income, with higher-income families receiving less support.
                  </p>
                </div>
              </section>

              {/* Repayment Impact */}
              <section id="repayment-impact" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Impact on Loan Repayments
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Where you study doesn&apos;t affect your repayment plan, but the total amount borrowed and where you work after graduation do matter.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Higher Total Debt from Four-Year Degrees</h3>
                  <p>
                    If you complete a full four-year degree in Scotland, you&apos;ll graduate with higher total debt than a three-year English degree:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Example Comparison (2023 Starter on Plan 5):</p>
                    <p className="mb-2">
                      <strong>Three-year degree (England):</strong>
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Tuition fees: 3 × £9,250 = £27,750</li>
                      <li>Maintenance loan: 3 × £10,227 = £30,681 (maximum outside London)</li>
                      <li>Total borrowed: £58,431</li>
                    </ul>
                    <p className="mb-2">
                      <strong>Four-year degree (Scotland):</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Tuition fees: 4 × £9,250 = £37,000</li>
                      <li>Maintenance loan: 4 × £10,227 = £40,908 (maximum outside London)</li>
                      <li>Total borrowed: £77,908</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Difference: £19,477 additional debt</strong>
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Does Higher Debt Matter?</h3>
                  <p>
                    For most graduates, the higher debt from a four-year degree has limited practical impact because of how UK student loans work:
                  </p>

                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Repayments are income-contingent:</strong> You pay 9% of income above the threshold regardless of total debt
                    </li>
                    <li>
                      <strong>Write-off applies to all:</strong> Any remaining balance is cancelled after 40 years (Plan 5) or 30 years (Plan 2)
                    </li>
                    <li>
                      <strong>Most won&apos;t repay in full:</strong> Government estimates suggest around 75% of Plan 5 borrowers won&apos;t fully repay before write-off
                    </li>
                  </ul>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Key Insight: Only high earners who would have paid off their loan completely will be affected by the higher debt. For average to high-middle earners, monthly repayments remain the same regardless of total debt size.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayments After Graduation</h3>
                  <p>Where you work after graduation determines how repayments are collected:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Working in the UK (England, Scotland, Wales, or NI):</p>
                    <ul className="list-disc pl-6">
                      <li>Repayments automatically deducted through PAYE system</li>
                      <li>Your employer processes deductions based on your plan type</li>
                      <li>Same repayment threshold and rate apply regardless of where in the UK you work</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Working Overseas:</p>
                    <ul className="list-disc pl-6">
                      <li>Must inform Student Loans Company of overseas employment</li>
                      <li>Repayments calculated based on local cost of living adjustments</li>
                      <li>Make direct payments to SLC rather than through employer</li>
                    </ul>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/monthly-repayment-calculator/"
                    >
                      Calculate Your Monthly Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* Transferring Mid-Course */}
              <section id="transferring-mid-course" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Transferring Mid-Course
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Some students may wish to transfer from an English university to a Scottish university (or vice versa) during their studies. This process is more complex than starting fresh.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Student Finance Implications</h3>
                  <p>When transferring between universities across borders, several factors affect your student finance:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Key Considerations:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Ordinary residence unchanged:</strong> Your loan plan doesn&apos;t change based on transfer location
                      </li>
                      <li>
                        <strong>Previous study counts:</strong> Years already studied affect remaining funding entitlement
                      </li>
                      <li>
                        <strong>Course length matters:</strong> Transferring to a four-year Scottish degree may require additional year of funding
                      </li>
                      <li>
                        <strong>Tuition fee liability:</strong> You&apos;ll pay fees appropriate to your ordinary residence
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Funding for Remaining Years</h3>
                  <p>
                    Student Finance England calculates your remaining entitlement based on the standard length of your course plus one additional year (your &quot;gift year&quot;):
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Example Transfer Scenario:</p>
                    <ul className="list-disc pl-6">
                      <li>Completed two years at an English university (three-year course)</li>
                      <li>Transfer to Scottish university for a four-year course</li>
                      <li>Enter directly into second or third year at Scottish university</li>
                      <li>
                        Standard funding: (3 years + 1 gift year) = 4 years total funding available
                      </li>
                      <li>Already used: 2 years</li>
                      <li>Remaining entitlement: 2 years of funding</li>
                    </ul>
                  </div>

                  <p>
                    If your new course requires more years than your remaining entitlement, you&apos;ll need to self-fund the additional years or consider alternative arrangements.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Academic Recognition and Credit Transfer</h3>
                  <p>
                    Before considering a transfer, ensure the receiving Scottish university will recognize your previous study:
                  </p>

                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Not all credits transfer between institutions or across borders</li>
                    <li>You may need to repeat some content or start at an earlier year than expected</li>
                    <li>Different academic systems (Scottish four-year vs English three-year) can complicate transfers</li>
                    <li>Contact admissions offices at both institutions before making decisions</li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Important: Always contact Student Finance England before transferring to understand exactly how much funding you&apos;ll have available for your new course. Do not rely on assumptions or general guidance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Practical Steps */}
              <section id="practical-steps" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Practical Steps for Transfer
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Before You Apply to Scottish Universities</h3>
                  <p>Take these steps to ensure you understand the financial and academic implications:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Research Phase:</p>
                    <ol className="list-decimal pl-6">
                      <li className="mb-2">
                        Verify your ordinary residence status with Student Finance England
                      </li>
                      <li className="mb-2">
                        Confirm tuition fees you&apos;ll be charged as an RUK student
                      </li>
                      <li className="mb-2">
                        Check if you qualify for direct entry to second year
                      </li>
                      <li className="mb-2">
                        Calculate total costs for a four-year degree vs three-year alternative
                      </li>
                      <li className="mb-2">
                        Research accommodation costs in your target Scottish city
                      </li>
                      <li className="mb-2">
                        Consider additional travel costs for returning home during breaks
                      </li>
                    </ol>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Application Process</h3>
                  <p>The application process follows the same route as for English universities:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <ol className="list-decimal pl-6">
                      <li className="mb-2">
                        <strong>UCAS Application:</strong> Apply through UCAS in the same way as for English universities
                      </li>
                      <li className="mb-2">
                        <strong>University Acceptance:</strong> Receive and accept your offer from the Scottish university
                      </li>
                      <li className="mb-2">
                        <strong>Student Finance Application:</strong> Apply through Student Finance England (not SAAS)
                      </li>
                      <li className="mb-2">
                        <strong>Confirm Course Details:</strong> Ensure SFE has correct information about your four-year course
                      </li>
                      <li className="mb-2">
                        <strong>Annual Reapplication:</strong> Reapply each year for continued funding
                      </li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Critical: Apply to Student Finance England, NOT Student Awards Agency Scotland (SAAS). SAAS handles Scottish-domiciled students only.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">During Your Studies</h3>
                  <p>Maintain proper documentation and communication throughout your course:</p>

                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Keep SFE informed of any changes to your circumstances</li>
                    <li>Reapply for student finance each academic year</li>
                    <li>Ensure your university confirms your enrollment with SFE</li>
                    <li>Monitor your student finance account regularly</li>
                    <li>Update your contact details if you move accommodation</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Planning for Graduation</h3>
                  <p>As you approach graduation, prepare for the transition to repayment:</p>

                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Understand that repayments begin in April after you leave your course</li>
                    <li>Ensure your employer has your correct student loan plan information</li>
                    <li>Set up your online repayment account with Student Loans Company</li>
                    <li>If moving overseas for work, notify SLC within three months</li>
                  </ul>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block"
                      href="https://www.gov.uk/student-finance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Student Finance England
                    </Link>
                  </div>
                </div>
              </section>

              {/* Scenarios */}
              <section id="scenarios" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Common Transfer Scenarios
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Here are detailed examples of common situations students face when studying across the England-Scotland border:
                  </p>

                  <div className="space-y-4 mt-6">
                    <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-4 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-800">
                          Scenario 1: Fresh Start in Scotland (Never Studied Before)
                        </h3>
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 mb-2">
                          <strong>Situation:</strong> James from Birmingham is starting his first degree at the University of St Andrews in September 2024.
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Finance arrangements:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                          <li>Applies through Student Finance England</li>
                          <li>Placed on Plan 5 (as starting from 2023 onwards)</li>
                          <li>Pays £9,250 per year tuition fees for four years (total: £37,000)</li>
                          <li>Receives maintenance loan of up to £10,227 per year</li>
                          <li>Will repay 9% of income above £25,000 after graduation</li>
                          <li>Loan written off after 40 years or at age 65, whichever comes first</li>
                        </ul>
                      </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-4 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-800">
                          Scenario 2: Undergraduate in Scotland, Postgraduate in England
                        </h3>
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 mb-2">
                          <strong>Situation:</strong> Emma completed her four-year undergraduate degree at Edinburgh University and is now doing a Master&apos;s at Imperial College London.
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Finance arrangements:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                          <li>Undergraduate loan remains on original plan (Plan 2 or Plan 5 depending on start year)</li>
                          <li>
                            Can apply for a separate Postgraduate Loan through Student Finance England
                          </li>
                          <li>Postgraduate Loan: Up to £12,167 for Master&apos;s study</li>
                          <li>Will make combined repayments: 9% on undergraduate loan + 6% on postgraduate loan</li>
                          <li>Different thresholds apply: £27,295 for Plan 2 / £25,000 for Plan 5, and £21,000 for PG</li>
                        </ul>
                      </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-4 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-800">
                          Scenario 3: Direct Entry to Second Year
                        </h3>
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 mb-2">
                          <strong>Situation:</strong> Sophie achieved AAA at A-level and has been accepted for direct entry into second year at the University of Glasgow.
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Finance arrangements:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                          <li>Course reduced from four years to three years</li>
                          <li>Total tuition fees: 3 × £9,250 = £27,750 (same as three-year English degree)</li>
                          <li>Receives three years of maintenance loan funding</li>
                          <li>Saves one year of tuition fees, maintenance costs, and interest accumulation</li>
                          <li>Enters employment market one year earlier</li>
                        </ul>
                      </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-4 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-800">
                          Scenario 4: Working in Scotland After Graduation
                        </h3>
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 mb-2">
                          <strong>Situation:</strong> Marcus studied in Edinburgh and stayed in Scotland for work after graduating.
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Repayment arrangements:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                          <li>Repayments still based on English plan (Plan 2 or Plan 5)</li>
                          <li>Scottish employer deducts repayments through PAYE system</li>
                          <li>Same thresholds and rates apply as if working in England</li>
                          <li>
                            Scottish income tax rates (which differ from England) don&apos;t affect student loan calculations
                          </li>
                          <li>Student loan deductions are separate from income tax</li>
                        </ul>
                      </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <summary className="flex justify-between items-center p-4 cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-800">
                          Scenario 5: Mid-Course Transfer from England to Scotland
                        </h3>
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 mb-2">
                          <strong>Situation:</strong> Olivia completed one year at Manchester University and is transferring to Aberdeen University.
                        </p>
                        <p className="text-gray-600 mb-2">
                          <strong>Finance arrangements:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                          <li>Aberdeen accepts her into second year of four-year degree</li>
                          <li>Used one year of funding at Manchester</li>
                          <li>Standard entitlement: 3 years (original course length) + 1 gift year = 4 years total</li>
                          <li>Remaining entitlement: 3 years of funding for her three remaining years</li>
                          <li>Must notify both SFE and both universities of the transfer</li>
                          <li>Loan plan remains unchanged (still Plan 2 or Plan 5 based on original start date)</li>
                        </ul>
                      </div>
                    </details>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/plan-cohort-finder/"
                    >
                      Find Your Loan Plan
                    </Link>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Plan Your Cross-Border Studies</h2>
                  <p className="text-lg text-blue-100">
                    Use our calculators to understand the financial impact of studying in Scotland as an English student
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/total-loan-cost-calculator/"
                    >
                      Calculate Total Loan Cost
                    </Link>
                    <Link
                      className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                      href="/"
                    >
                      Explore More Calculators
                    </Link>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related Resources */}
              <section className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Related Resources
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/plans/plan-2/"
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Student Loans</h3>
                    <p className="text-gray-600">
                      Understand Plan 2 loans for English students who started between 2012-2023
                    </p>
                  </Link>

                  <Link
                    href="/plans/plan-4/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-green-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 4 (Scottish Loans)</h3>
                    <p className="text-gray-600">
                      Compare Scottish Plan 4 with English loan plans to understand the differences
                    </p>
                  </Link>

                  <Link
                    href="/calculators/graduation-year-impact-calculator/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Graduation Year Impact Calculator</h3>
                    <p className="text-gray-600">
                      Calculate how your graduation year affects your loan repayments and write-off date
                    </p>
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