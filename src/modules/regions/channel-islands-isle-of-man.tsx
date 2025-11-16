import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function ChannelIslandsIsleOfManPage() {
  const tocItems = [
    { id: "overview", title: "Crown Dependencies Overview", level: 2 },
    { id: "jersey", title: "Jersey Student Finance", level: 2 },
    { id: "guernsey", title: "Guernsey Student Finance", level: 2 },
    { id: "isle-of-man", title: "Isle of Man Student Finance", level: 2 },
    { id: "uk-comparison", title: "Comparing with UK Mainland", level: 2 },
    { id: "repayment-systems", title: "Understanding Repayment Systems", level: 2 },
    { id: "practical-considerations", title: "Practical Considerations", level: 2 },
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
                      Channel Islands &amp; Isle of Man
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Student Finance in Channel Islands &amp; Isle of Man
              </h1>
              <p className="text-xl text-gray-600">
                Understanding student funding and loan repayments for Crown Dependencies
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
                    The Channel Islands (Jersey and Guernsey) and the Isle of Man are British Crown Dependencies with their own independent student finance systems. While students from these territories are eligible for UK home fee status, they must apply for funding through their local authorities rather than the UK Student Loans Company.
                  </p>
                  <p>
                    This guide explains the unique student finance arrangements in each Crown Dependency, including eligibility criteria, funding mechanisms, repayment structures, and how these differ from the UK mainland systems.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Important: Students from Jersey, Guernsey, and the Isle of Man cannot apply for funding through Student Finance England, Wales, Scotland, or Northern Ireland. You must apply directly to your island&apos;s education authority.
                    </p>
                  </div>
                </div>
              </section>

              {/* Crown Dependencies Overview */}
              <section id="overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Crown Dependencies Overview
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Jersey, Guernsey (including Alderney and Sark), and the Isle of Man are self-governing British Crown Dependencies. While they&apos;re not part of the United Kingdom, students from these islands benefit from UK home fee status when studying at UK universities.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What Makes Crown Dependencies Different</h3>
                  <p>The key differences between Crown Dependency and UK student finance include:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Separate funding bodies:</strong> Each Crown Dependency administers its own student finance system with distinct rules, application processes, and eligibility criteria
                    </li>
                    <li>
                      <strong>Mix of grants and loans:</strong> Unlike UK loans which cover full tuition fees, Crown Dependencies often combine grants, loans, and personal contributions
                    </li>
                    <li>
                      <strong>Means-tested support:</strong> Most Crown Dependency funding is more heavily means-tested than UK student finance, with household income significantly affecting available support
                    </li>
                    <li>
                      <strong>Different repayment terms:</strong> Loan repayment thresholds, rates, and write-off periods vary from UK student loan plans
                    </li>
                    <li>
                      <strong>Residency requirements:</strong> Students must typically have been ordinarily resident in the Crown Dependency for a specified period before their course starts
                    </li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Note: As of 2021, students from Crown Dependencies are eligible for UK home fee status when studying in England. However, this does not automatically entitle them to UK student finance - they must still apply through their island authorities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Jersey */}
              <section id="jersey" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Jersey Student Finance
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Eligibility Requirements</h3>
                  <p>To qualify for student finance from Jersey, you must:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Be ordinarily resident in Jersey on 1st September of the application year</li>
                    <li>Have lived continuously in the Channel Islands, UK, or Isle of Man for three years before your course starts</li>
                    <li>Hold valid Jersey residency documentation</li>
                    <li>Be studying a level 4 qualification or above at an approved institution</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Available Funding</h3>
                  <p>Jersey student finance typically includes:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Tuition Fee Support:</p>
                    <ul className="list-disc pl-6">
                      <li>Means-tested grant covering part or all of tuition fees up to £9,250 per year</li>
                      <li>Level of support depends on household income</li>
                      <li>Students may need to contribute personally if household income exceeds thresholds</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Maintenance Support:</p>
                    <ul className="list-disc pl-6">
                      <li>Means-tested maintenance grant for living costs</li>
                      <li>Amount varies based on household income and where you study</li>
                      <li>Additional support may be available for students with disabilities or dependants</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Application Process</h3>
                  <p>
                    Jersey students should apply directly through <a href="https://www.gov.je/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">the States of Jersey website</a>. Applications typically open in early spring for courses starting in the autumn. You&apos;ll need to provide evidence of household income and residency status.
                  </p>
                </div>
              </section>

              {/* Guernsey */}
              <section id="guernsey" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Guernsey Student Finance
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Eligibility Requirements</h3>
                  <p>To qualify for Guernsey student finance, you must:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Be ordinarily resident in Guernsey or Alderney on 1st September of the application year</li>
                    <li>Have lived in the Channel Islands, UK, or Isle of Man for three years immediately up to 31st August before your course starts</li>
                    <li>Hold a valid residency certificate or permit</li>
                    <li>Be studying a level 4 qualification or above</li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Important: Bailiwick students are not eligible to apply for funding from UK Student Finance England. You must apply through Student Finance Guernsey.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Funding Structure</h3>
                  <p>Guernsey provides both dependent and independent student funding:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Dependent Students:</p>
                    <ul className="list-disc pl-6">
                      <li>Means-tested tuition fee support based on parental income</li>
                      <li>Parental contribution required for higher household incomes</li>
                      <li>Maintenance grant to help with living expenses</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Independent Students:</p>
                    <ul className="list-disc pl-6">
                      <li>Assessed based on personal income rather than parental income</li>
                      <li>Must meet specific criteria such as age, marriage, or financial independence</li>
                      <li>Similar grant structures but calculated differently</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Attendance Requirements</h3>
                  <p>
                    Students receiving funding from Guernsey must maintain an attendance rate of at least 85%. Failure to meet this requirement may result in being asked to repay funding in part or full. If you need to repeat a year due to circumstances beyond your control, such as serious illness, you must provide detailed medical certificates.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Application Process</h3>
                  <p>
                    Applications are submitted through the States of Guernsey Student Finance portal. The application window typically runs from early spring, and late applications may not be processed in time for the start of term.
                  </p>
                </div>
              </section>

              {/* Isle of Man */}
              <section id="isle-of-man" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Isle of Man Student Finance
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Eligibility Requirements</h3>
                  <p>To be eligible for Isle of Man student awards, you must:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Be ordinarily resident in the Isle of Man</li>
                    <li>Have lived in the UK, Channel Islands, or Isle of Man for three years before your course starts</li>
                    <li>Be studying at an eligible institution on an approved course</li>
                    <li>Meet the age and qualification requirements for your chosen course</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Funding Components</h3>
                  <p>The Isle of Man offers a comprehensive funding package consisting of:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Tuition Fees Grant:</p>
                    <ul className="list-disc pl-6">
                      <li>Standard maximum of £9,250 per year (higher for specific courses like medicine or dentistry)</li>
                      <li>Government contribution of £6,750 is reduced when household income exceeds £112,000</li>
                      <li>No support available when household income exceeds £132,000</li>
                      <li>Students must pay at least £2,500 per year personally towards fees</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Student Tuition Fees Loan:</p>
                    <ul className="list-disc pl-6">
                      <li>Available to fund the annual student contribution of £2,500 per year</li>
                      <li>Can potentially provide up to £7,500 for a three-year course</li>
                      <li>Repayments start when annual income reaches £25,000</li>
                      <li>Repayment rate of 9% on income above the threshold</li>
                      <li>Interest charged annually on July 1st at Bank of England Base Rate or 3.5%, whichever is lower</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Maintenance Grant:</p>
                    <ul className="list-disc pl-6">
                      <li>Up to £7,500 per year to help with living costs</li>
                      <li>Heavily means-tested starting at household incomes over £17,000</li>
                      <li>No support available when household income exceeds £61,795</li>
                      <li>Paid in termly instalments</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Disabled Students Allowance:</p>
                    <ul className="list-disc pl-6">
                      <li>Available for students with physical or mental disabilities or learning difficulties</li>
                      <li>Covers costs of non-medical helpers, specialist equipment, and additional travel expenses</li>
                      <li>Requires medical documentation or diagnostic reports</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayment Terms</h3>
                  <p>
                    The Isle of Man tuition fee loan operates differently from UK student loans. It&apos;s a lifelong loan with mandatory repayments at 9% of income exceeding £25,000 per annum. Interest is lower than most UK plans, charged at either the Bank of England Base Rate or 3.5%, whichever is lower.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Application Process</h3>
                  <p>
                    Applications are made through the Isle of Man Department for Education, Sport and Culture. You must sign a loan agreement before any payments are made to your institution. For part-time or distance learning courses, different means-testing arrangements apply.
                  </p>
                </div>
              </section>

              {/* UK Comparison */}
              <section id="uk-comparison" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Comparing with UK Mainland
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Understanding the differences between Crown Dependency and UK mainland student finance helps students make informed decisions about funding their education.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                          <th className="px-4 py-3 text-left text-gray-800">Crown Dependencies</th>
                          <th className="px-4 py-3 text-left text-gray-800">UK Mainland</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Application Authority</td>
                          <td className="px-4 py-3">Island education authorities</td>
                          <td className="px-4 py-3">Student Loans Company</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Tuition Fee Coverage</td>
                          <td className="px-4 py-3">Mix of grants and personal contribution</td>
                          <td className="px-4 py-3">Full coverage via loan</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Student Contribution</td>
                          <td className="px-4 py-3">Often required (e.g., £2,500 in IoM)</td>
                          <td className="px-4 py-3">None required upfront</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Means Testing</td>
                          <td className="px-4 py-3">More heavily means-tested</td>
                          <td className="px-4 py-3">Limited means testing</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Maintenance Support</td>
                          <td className="px-4 py-3">Primarily grants (means-tested)</td>
                          <td className="px-4 py-3">Primarily loans (partially means-tested)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Repayment Threshold</td>
                          <td className="px-4 py-3">Varies (£25,000 in IoM)</td>
                          <td className="px-4 py-3">
                            <Link href="/plans/" className="text-blue-600 hover:underline">
                              £22,015-£27,660 depending on plan
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Interest Rates</td>
                          <td className="px-4 py-3">Generally lower (IoM: BoE Base or 3.5%)</td>
                          <td className="px-4 py-3">RPI-based, varies by plan</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Loan Write-Off</td>
                          <td className="px-4 py-3">Often lifelong loans</td>
                          <td className="px-4 py-3">25-40 years depending on plan</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Advantages of Crown Dependency Funding</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Lower interest rates:</strong> Crown Dependency loans typically charge less interest than UK student loans
                    </li>
                    <li>
                      <strong>Grant components:</strong> More funding provided as non-repayable grants rather than loans
                    </li>
                    <li>
                      <strong>Local support:</strong> Direct relationship with island authorities who understand local circumstances
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Disadvantages</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Upfront contributions:</strong> Many students must pay significant amounts personally before starting
                    </li>
                    <li>
                      <strong>Heavy means testing:</strong> Higher-income families may receive little or no support
                    </li>
                    <li>
                      <strong>No automatic write-off:</strong> Some loans are lifelong obligations without the automatic cancellation offered by UK plans
                    </li>
                    <li>
                      <strong>More complex applications:</strong> Separate systems mean navigating different rules and deadlines
                    </li>
                  </ul>
                </div>
              </section>

              {/* Repayment Systems */}
              <section id="repayment-systems" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Understanding Repayment Systems
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    While Crown Dependency students who take out loans will eventually need to repay them, the mechanisms differ from UK student loan repayments.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayment Through Employment</h3>
                  <p>For students working in the UK after graduation:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Repayments may need to be made through Self Assessment tax returns rather than automatic PAYE deductions</li>
                    <li>You&apos;ll need to inform your island authority of your employment status and income</li>
                    <li>Different documentation requirements apply compared to UK student loan repayments</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Working Overseas</h3>
                  <p>
                    If you move abroad after graduation, you must inform your island education authority. Repayment arrangements for overseas residents vary by Crown Dependency but typically require annual income declarations and direct payments based on local thresholds adjusted for cost of living.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Interest and Loan Duration</h3>
                  <p>
                    Crown Dependency loans generally have lower interest rates than UK student loans. However, they often don&apos;t have automatic write-off periods, meaning the loan continues until fully repaid or specific circumstances like permanent disability occur.
                  </p>

                  <div className="mt-6 text-center">
                    <Link
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/regional-national-comparison-calculator/"
                    >
                      Compare Regional Repayment Scenarios
                    </Link>
                  </div>
                </div>
              </section>

              {/* Practical Considerations */}
              <section id="practical-considerations" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Practical Considerations
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional Costs for Island Students</h3>
                  <p>Students from Crown Dependencies face unique expenses not typically encountered by UK mainland students:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Travel costs:</strong> Regular flights or ferry journeys to and from the island during term breaks can be substantial
                    </li>
                    <li>
                      <strong>Storage expenses:</strong> Many island students need UK storage for belongings during summer breaks if not returning home with everything
                    </li>
                    <li>
                      <strong>Initial relocation:</strong> The cost of initial move including shipping belongings to UK accommodation
                    </li>
                    <li>
                      <strong>Exchange rates:</strong> For islands with their own currencies (like Jersey pounds), exchange rate fluctuations can affect budgeting
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Planning Your Finances</h3>
                  <p>Given the differences in Crown Dependency funding, comprehensive financial planning is essential:</p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium mb-2">Start Early:</p>
                    <p>
                      Apply for funding as soon as applications open. Late applications may not be processed in time for the start of your course, leaving you responsible for initial payments.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium mb-2">Understand Parental Contributions:</p>
                    <p>
                      If means-tested contributions are required from parents, ensure you have clear conversations about their ability and willingness to pay before accepting your university place.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                    <p className="font-medium mb-2">Budget for Gaps:</p>
                    <p>
                      Crown Dependency maintenance grants often don&apos;t cover all living costs. Plan how you&apos;ll fund any shortfall through part-time work, savings, or additional family support.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Alternative Funding Sources</h3>
                  <p>
                    If government funding doesn&apos;t cover your full costs, consider supplementary funding options such as local scholarships from island charities and foundations, university-specific bursaries and scholarships, or private student loans from island banks designed for higher education.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maintaining Your Funding</h3>
                  <p>To ensure continued funding throughout your course:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Maintain required attendance rates (particularly important for Guernsey students)</li>
                    <li>Notify your funding authority immediately of any changes in circumstances</li>
                    <li>Reapply annually as most Crown Dependency funding requires yearly renewal</li>
                    <li>Keep all documentation and proof of enrollment for your records</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">If You Withdraw from Your Course</h3>
                  <p>
                    Withdrawing from your course can have significant financial implications for Crown Dependency students. You may be required to repay all or part of maintenance awards and tuition fees for the relevant term. Contact your island education authority immediately if you&apos;re considering withdrawing to understand the financial consequences.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Student Loan Repayments</h2>
                  <p className="text-lg text-blue-100">
                    Use our specialized calculators to understand how your student finance will work based on your circumstances
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/"
                    >
                      Explore All Calculators
                    </Link>
                    <Link
                      className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                      href="/"
                    >
                      Return to Homepage
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
                    href="/guides/how-student-loans-work-uk/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-blue-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How UK Student Loans Work</h3>
                    <p className="text-gray-600">Compare Crown Dependency systems with UK mainland student finance</p>
                  </Link>

                  <Link
                    href="/calculators/self-employed-loan-calculator/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-green-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Self-Employment Loan Calculator</h3>
                    <p className="text-gray-600">Calculate repayments if you&apos;re self-employed after graduation</p>
                  </Link>

                  <Link
                    href="/calculators/regional-national-comparison-calculator/"
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                  >
                    <div className="mb-4 text-purple-600">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Regional Comparison Calculator</h3>
                    <p className="text-gray-600">Compare repayment scenarios across different UK regions and Crown Dependencies</p>
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