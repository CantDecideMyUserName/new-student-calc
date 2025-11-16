import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function ScotlandSAASLoanDifferencesPage() {
  const tocItems = [
    { id: "scotland-overview", title: "Scotland's Unique Student Finance Model", level: 2 },
    { id: "free-tuition", title: "Free Tuition in Scotland: How It Works", level: 2 },
    { id: "plan-4-details", title: "Plan 4 Loans: Scotland's Repayment System", level: 2 },
    { id: "saas-administration", title: "SAAS vs Student Finance England", level: 2 },
    { id: "scotland-vs-uk", title: "Scotland vs Rest of UK Comparison", level: 2 },
    { id: "ruk-students", title: "Rest of UK Students Studying in Scotland", level: 2 },
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
                      Scotland SAAS System
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Scotland's Student Finance System: SAAS, Free Tuition & Plan 4 Explained
              </h1>
              <p className="text-xl text-gray-600">
                Understanding Scotland's distinctive approach to higher education funding, from free tuition to Plan 4 repayments
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
                    Scotland operates the most distinctive student finance system in the United Kingdom, fundamentally different from England, Wales, and Northern Ireland. Scottish students benefit from free tuition at Scottish universities, lower loan balances, and Plan 4 repayment terms that reflect Scotland's unique policy priorities around accessible higher education.
                  </p>
                  <p>
                    Administered by the Student Awards Agency Scotland (SAAS), Scotland's system eliminates tuition fees for eligible Scottish-domiciled students studying in Scotland, resulting in significantly lower debt levels compared to England's £45,000+ average. This guide explains how SAAS operates, who qualifies for free tuition, and how Plan 4 loans differ from other UK plans.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Key Distinction: Scottish students at Scottish universities pay no tuition fees (£1,820 covered by SAAS), while Rest of UK students pay up to £9,250 for the same courses. This creates dramatically different financial outcomes for graduates.
                    </p>
                  </div>
                </div>
              </section>

              {/* Scotland Overview */}
              <section id="scotland-overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Scotland's Unique Student Finance Model
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Scotland's student finance system reflects fundamentally different policy philosophy compared to the rest of the UK. Since 2008, the Scottish Government has maintained free tuition for Scottish-domiciled students, funded through general taxation rather than individual graduate contribution.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Scottish Model: Key Principles</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Free tuition as policy commitment:</strong> Scottish students do not pay tuition fees for their first undergraduate degree at Scottish institutions
                    </li>
                    <li>
                      <strong>Lower debt levels:</strong> Scottish graduates typically borrow £20,000-£25,000 for living costs only, compared to England's £45,000+ for fees and maintenance
                    </li>
                    <li>
                      <strong>Plan 4 repayment terms:</strong> Higher threshold (£32,745), lower interest rates, and 30-year write-off period
                    </li>
                    <li>
                      <strong>SAAS administration:</strong> Student Awards Agency Scotland manages applications, disbursements, and fee payments
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Scotland vs UK Nations: Core Differences</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                          <th className="px-4 py-3 text-left text-gray-800">Scotland (Plan 4)</th>
                          <th className="px-4 py-3 text-left text-gray-800">England (Plan 5)</th>
                          <th className="px-4 py-3 text-left text-gray-800">Wales (Plan 2)</th>
                          <th className="px-4 py-3 text-left text-gray-800">N. Ireland (Plan 1)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Tuition Fees (Home Students)</td>
                          <td className="px-4 py-3">£0 (£1,820 paid by SAAS)</td>
                          <td className="px-4 py-3">£9,250</td>
                          <td className="px-4 py-3">£9,000</td>
                          <td className="px-4 py-3">£4,855</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Average Graduate Debt</td>
                          <td className="px-4 py-3">£20,000-£25,000</td>
                          <td className="px-4 py-3">£45,000-£50,000</td>
                          <td className="px-4 py-3">£45,000+</td>
                          <td className="px-4 py-3">£25,000-£30,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Repayment Threshold (2025/26)</td>
                          <td className="px-4 py-3">£32,745</td>
                          <td className="px-4 py-3">£25,000</td>
                          <td className="px-4 py-3">£27,295</td>
                          <td className="px-4 py-3">£22,015</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Interest Rate</td>
                          <td className="px-4 py-3">Lower of RPI or BoE base +1%</td>
                          <td className="px-4 py-3">RPI only</td>
                          <td className="px-4 py-3">RPI to RPI+3%</td>
                          <td className="px-4 py-3">Lower of RPI or BoE base +1%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Write-Off Period</td>
                          <td className="px-4 py-3">30 years</td>
                          <td className="px-4 py-3">40 years</td>
                          <td className="px-4 py-3">30 years</td>
                          <td className="px-4 py-3">25 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Typical Course Length</td>
                          <td className="px-4 py-3">4 years</td>
                          <td className="px-4 py-3">3 years</td>
                          <td className="px-4 py-3">3 years</td>
                          <td className="px-4 py-3">3 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Scotland's System is Different</h3>
                  <p>
                    Scotland's approach to higher education funding predates devolution but has become a defining policy of the Scottish Parliament since 1999. The free tuition policy, maintained continuously since 2008, reflects:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Commitment to education as a public good rather than individual investment</li>
                    <li>Political consensus across major Scottish parties (SNP, Labour, Lib Dems, Greens)</li>
                    <li>Desire to differentiate Scottish policy from England's market-based approach</li>
                    <li>Historical traditions of accessible education in Scotland</li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/"
                    >
                      Calculate Your Scotland Plan 4 Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* Free Tuition */}
              <section id="free-tuition" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Free Tuition in Scotland: How It Works
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    "Free tuition" is Scotland's most distinctive higher education feature, but it requires understanding what is free, who qualifies, and how the system operates in practice.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What "Free Tuition" Actually Means</h3>
                  <p>
                    Scottish students do not pay tuition fees upfront or through loans. Instead, SAAS pays £1,820 per year directly to the university on behalf of eligible students. This fee level has remained unchanged since 2009-10.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Understanding the £1,820 Figure:</p>
                    <p>
                      This is the "home fee" rate that Scottish universities charge per student per year. It represents only part of the actual cost of education – the Scottish Funding Council provides additional institutional grant funding (£3,781 to £15,940 per student depending on subject) to cover the full cost of teaching.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Who Qualifies for Free Tuition?</h3>
                  <p>To receive free tuition through SAAS, you must meet specific eligibility criteria:</p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">SAAS Free Tuition Eligibility Requirements:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Residency:</strong> Ordinarily resident in Scotland (not just moved for education)
                      </li>
                      <li>
                        <strong>Recency:</strong> Lived in the UK for at least three years immediately before course start
                      </li>
                      <li>
                        <strong>Course:</strong> First undergraduate degree (or equivalent qualification)
                      </li>
                      <li>
                        <strong>Institution:</strong> Studying at a Scottish university or college
                      </li>
                      <li>
                        <strong>Study mode:</strong> Full-time students (part-time students may qualify for Part-time Fee Grant if income under £25,000)
                      </li>
                      <li>
                        <strong>Nationality:</strong> UK national, or EU national with settled/pre-settled status meeting residency conditions
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How to Apply for Free Tuition</h3>
                  <p>Free tuition is not automatic – you must apply to SAAS each academic year:</p>
                  <ol className="list-decimal pl-6 mt-3 mb-6">
                    <li>Create a SAAS account online at <a href="https://www.saas.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.saas.gov.uk</a></li>
                    <li>Complete the tuition fee application form</li>
                    <li>Provide supporting documentation (proof of identity, residency)</li>
                    <li>Apply before the start of each academic year</li>
                    <li>SAAS confirms eligibility and pays fees directly to your institution</li>
                  </ol>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Important: Failing to apply to SAAS means you'll be charged the £1,820 home fee rate directly by your university. Always complete your SAAS application early, even if you're certain you qualify.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Duration of Free Tuition Support</h3>
                  <p>
                    SAAS will pay tuition fees for up to five years total. Since most Scottish degrees are four years, this provides one year's buffer. If you change courses or repeat years, your five-year allowance continues counting.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What Free Tuition Doesn't Cover</h3>
                  <p>
                    "Free tuition" applies only to tuition fees. Scottish students still need to cover:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Living costs (accommodation, food, transport, books)</li>
                    <li>Course materials and equipment</li>
                    <li>Field trips or study abroad expenses</li>
                  </ul>
                  <p>
                    For these costs, Scottish students can apply for maintenance loans and bursaries through SAAS, typically borrowing £20,000-£25,000 over a four-year degree.
                  </p>
                </div>
              </section>

              {/* Plan 4 Details */}
              <section id="plan-4-details" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 4 Loans: Scotland's Repayment System
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Plan 4 launched in April 2021, replacing Plan 1 for all Scottish borrowers. Any Scottish student who started university from September 1998 onward now repays under Plan 4 terms, regardless of when they graduated.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 4 Repayment Mechanics</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Scotland Plan 4 Core Parameters (2025/26):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Repayment threshold:</strong> £32,745 per year (£2,728 monthly, £629 weekly)
                      </li>
                      <li>
                        <strong>Repayment rate:</strong> 9% of income above the threshold
                      </li>
                      <li>
                        <strong>Interest rate:</strong> Lower of RPI or Bank of England base rate + 1% (currently 4.3%)
                      </li>
                      <li>
                        <strong>Write-off period:</strong> 30 years after the April you became eligible to repay
                      </li>
                      <li>
                        <strong>Repayment start:</strong> April after you leave or complete your course
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Scotland Plan 4 Repayment Examples</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 1: Scottish graduate earning £35,000/year</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £32,745 threshold: £2,255</li>
                      <li>Annual Plan 4 repayment: 9% of £2,255 = £202.95</li>
                      <li>Monthly deduction via PAYE: £16.91</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 2: Scottish graduate earning £50,000/year</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £32,745 threshold: £17,255</li>
                      <li>Annual Plan 4 repayment: 9% of £17,255 = £1,552.95</li>
                      <li>Monthly deduction via PAYE: £129.41</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Plan 4's High Threshold Matters</h3>
                  <p>
                    Scotland's £32,745 threshold is the highest in the UK – £7,745 higher than England's Plan 5 (£25,000) and £5,450 higher than Wales's Plan 2 (£27,295). This means:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Scottish graduates start repaying at higher salaries</li>
                    <li>More Scottish graduates may never trigger repayments</li>
                    <li>Lower-earning graduates pay significantly less over their lifetime</li>
                    <li>Combined with lower debt, Scottish graduates face lighter repayment burden</li>
                  </ul>

                  <div className="bg-blue-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Comparison at £30,000 Salary:</p>
                    <ul className="list-disc pl-6">
                      <li><strong>Scotland (Plan 4):</strong> £0 annual repayment (below £32,745 threshold)</li>
                      <li><strong>England (Plan 5):</strong> £450 annual repayment (9% of £5,000 above threshold)</li>
                      <li><strong>Wales (Plan 2):</strong> £243.45 annual repayment (9% of £2,705 above threshold)</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 4 Interest Rates</h3>
                  <p>
                    Scotland uses the same interest calculation as Plan 1: the lower of either RPI (Retail Price Index) or the Bank of England base rate plus 1%. This typically results in:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Lower interest rates than England's Plan 2 (which can reach RPI+3%)</li>
                    <li>Similar rates to England's Plan 5 (RPI only)</li>
                    <li>Interest rates that don't vary based on income level</li>
                  </ul>

                  <p>
                    As of September 2025, the Plan 4 interest rate is 4.3%. This applies whether you're studying, have just graduated, or are a high earner.
                  </p>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/plan-4-student-loan-calculator/"
                    >
                      Calculate Your Plan 4 Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* SAAS Administration */}
              <section id="saas-administration" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  SAAS vs Student Finance England
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The Student Awards Agency Scotland (SAAS) operates distinctly from Student Finance England, reflecting Scotland's different policy approach and administrative structure.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">SAAS Structure and Role</h3>
                  <p>
                    SAAS is an executive agency of the Scottish Government, responsible for:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Processing applications for tuition fee support and student loans</li>
                    <li>Paying tuition fees directly to Scottish institutions</li>
                    <li>Disbursing maintenance loans and bursaries to students</li>
                    <li>Managing eligibility assessments for Scottish-domiciled students</li>
                    <li>Liaising with Student Loans Company for repayment administration</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Differences: SAAS vs SFE</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Aspect</th>
                          <th className="px-4 py-3 text-left text-gray-800">SAAS (Scotland)</th>
                          <th className="px-4 py-3 text-left text-gray-800">Student Finance England</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Governance</td>
                          <td className="px-4 py-3">Scottish Government executive agency</td>
                          <td className="px-4 py-3">Part of Student Loans Company (UK-wide)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Tuition Fee Payment</td>
                          <td className="px-4 py-3">Pays £1,820 directly to Scottish institutions</td>
                          <td className="px-4 py-3">Loans up to £9,250 to students</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Means-Testing</td>
                          <td className="px-4 py-3">Only for maintenance support, not tuition</td>
                          <td className="px-4 py-3">Not applicable (loans available to all)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Bursary System</td>
                          <td className="px-4 py-3">Provides non-repayable bursaries based on income</td>
                          <td className="px-4 py-3">No equivalent (maintenance loans only)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Course Duration</td>
                          <td className="px-4 py-3">Supports 4-year degrees as standard</td>
                          <td className="px-4 py-3">Supports 3-year degrees as standard</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">SAAS Contact and Support</h3>
                  <p>
                    According to <a href="https://www.gov.uk/government/publications/scottish-student-loans-a-guide-to-terms-and-conditions/student-loans-a-guide-to-terms-and-conditions-2025-to-2026" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official SAAS guidance</a>, students can contact SAAS through:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Website: <a href="https://www.saas.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.saas.gov.uk</a></li>
                    <li>Phone (UK): 0300 555 0505</li>
                    <li>Phone (International): +44 300 555 0505</li>
                    <li>Hours: 8:30am-5pm Monday-Thursday, 8:30am-4:30pm Friday</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Repayment Collection: SAAS, SLC, and HMRC</h3>
                  <p>
                    While SAAS administers loan applications and disbursements, repayment collection involves multiple agencies:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Student Loans Company (SLC):</strong> Manages loan accounts and repayment records for all UK plans, including Plan 4
                    </li>
                    <li>
                      <strong>HMRC:</strong> Collects repayments through PAYE for employed graduates or Self Assessment for self-employed
                    </li>
                    <li>
                      <strong>SAAS role post-graduation:</strong> Students contact SAAS while studying, but SLC once repaying
                    </li>
                  </ul>
                </div>
              </section>

              {/* Scotland vs UK */}
              <section id="scotland-vs-uk" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Scotland vs Rest of UK Comparison
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The financial implications of studying in Scotland versus elsewhere in the UK are substantial, affecting lifetime repayment amounts and graduate financial wellbeing.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Debt Comparison</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Typical Total Borrowing by Nation (4-year degree):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Scotland:</strong> £20,000-£25,000 (maintenance loans only, no tuition fees)
                      </li>
                      <li>
                        <strong>England:</strong> £45,000-£50,000+ (£37,000 tuition + £8,000-£13,000 maintenance per year × 3 years)
                      </li>
                      <li>
                        <strong>Wales:</strong> £45,000+ (similar to England)
                      </li>
                      <li>
                        <strong>Northern Ireland:</strong> £25,000-£30,000 (lower tuition fees of £4,855)
                      </li>
                    </ul>
                    <p className="mt-3 text-sm">
                      Note: Scottish degrees typically take 4 years vs 3 years elsewhere, but savings from free tuition exceed the extra year's maintenance costs.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Lifetime Repayment Comparison</h3>
                  <p>
                    Let's examine the lifetime financial impact for graduates earning £40,000 in different UK nations:
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Graduate Earning £40,000 Annually:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Scotland (Plan 4):</strong> £653.55/year × 30 years = £19,607 total
                      </li>
                      <li>
                        <strong>England (Plan 5):</strong> £1,350/year × 40 years = £54,000 total
                      </li>
                      <li>
                        <strong>Wales (Plan 2):</strong> £1,143.45/year × 30 years = £34,304 total (plus interest accumulation)
                      </li>
                      <li>
                        <strong>Northern Ireland (Plan 1):</strong> £1,617/year × 25 years = £40,425 total
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Scotland Advantage: Key Factors</h3>
                  <ol className="list-decimal pl-6 mt-3 mb-6">
                    <li>
                      <strong>Lower principal debt:</strong> £20,000-£25,000 vs England's £45,000+ means less interest accumulation
                    </li>
                    <li>
                      <strong>Highest threshold:</strong> £32,745 means many Scottish graduates never repay or repay very little
                    </li>
                    <li>
                      <strong>Reasonable interest:</strong> Lower of RPI or BoE base +1% prevents runaway growth
                    </li>
                    <li>
                      <strong>30-year write-off:</strong> Shorter than England's 40 years, longer than N. Ireland's 25 years
                    </li>
                  </ol>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/regional-national-comparison-calculator/"
                    >
                      Compare Scotland vs Other UK Nations
                    </Link>
                  </div>
                </div>
              </section>

              {/* RUK Students */}
              <section id="ruk-students" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Rest of UK Students Studying in Scotland
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Students from England, Wales, and Northern Ireland (collectively "Rest of UK" or RUK) face very different financial arrangements when studying in Scotland compared to Scottish students.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">RUK Students: Fee Structure</h3>
                  <p>
                    Rest of UK students pay up to £9,250 per year for tuition at Scottish universities – matching England's fee cap. This creates a two-tier system at Scottish institutions:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Scottish students: £0 (SAAS pays £1,820)</li>
                    <li>RUK students: £9,250 (covered by loan from their home nation)</li>
                    <li>International students: £18,000-£59,000+ depending on course</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Applying as a RUK Student</h3>
                  <p>RUK students studying in Scotland apply for funding through their home nation:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>English students:</strong> Apply through Student Finance England for Plan 5 loans (£9,250 tuition + maintenance)
                    </li>
                    <li>
                      <strong>Welsh students:</strong> Apply through Student Finance Wales for Plan 2 loans
                    </li>
                    <li>
                      <strong>Northern Irish students:</strong> Apply through Student Finance NI for Plan 1 loans
                    </li>
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Important: RUK students do NOT apply to SAAS for tuition fee support. They follow their home nation's student finance system and repayment plan, even though studying in Scotland.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">RUK Student Repayment Plans</h3>
                  <p>
                    RUK students maintain their home nation's loan plan even while studying in Scotland:
                  </p>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Home Nation</th>
                          <th className="px-4 py-3 text-left text-gray-800">Loan Plan</th>
                          <th className="px-4 py-3 text-left text-gray-800">Threshold</th>
                          <th className="px-4 py-3 text-left text-gray-800">Write-Off</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3">England</td>
                          <td className="px-4 py-3">Plan 5 (from 2023)</td>
                          <td className="px-4 py-3">£25,000</td>
                          <td className="px-4 py-3">40 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Wales</td>
                          <td className="px-4 py-3">Plan 2</td>
                          <td className="px-4 py-3">£27,295</td>
                          <td className="px-4 py-3">30 years</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">Northern Ireland</td>
                          <td className="px-4 py-3">Plan 1</td>
                          <td className="px-4 py-3">£22,015</td>
                          <td className="px-4 py-3">25 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The RUK Premium: Cost Analysis</h3>
                  <p>
                    An English student studying in Scotland faces significantly higher costs than a Scottish student at the same university:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">4-Year Scottish Degree Comparison:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Scottish student:</strong> £0 tuition + £20,000-£25,000 maintenance = £20,000-£25,000 total debt
                      </li>
                      <li>
                        <strong>English student:</strong> £37,000 tuition (£9,250 × 4 years) + £20,000-£30,000 maintenance = £57,000-£67,000 total debt
                      </li>
                      <li>
                        <strong>Cost difference:</strong> £37,000-£42,000 more for English student
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why RUK Students Still Choose Scotland</h3>
                  <p>
                    Despite higher costs, RUK students may choose Scottish universities for:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>High-quality institutions (Edinburgh, Glasgow, St Andrews in global rankings)</li>
                    <li>Unique courses or specializations</li>
                    <li>Cultural and personal preferences</li>
                    <li>Four-year degree structure allowing broader education</li>
                    <li>Lower cost of living compared to London or southern England</li>
                  </ul>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Scottish Student Loan Repayments</h2>
                  <p className="text-lg text-blue-100">
                    Use our Plan 4 calculator to understand your repayment obligations as a Scottish graduate
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/plan-4-student-loan-calculator/"
                    >
                      Plan 4 Calculator
                    </Link>
                    <Link
                      className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                      href="/calculators/regional-national-comparison-calculator/"
                    >
                      Regional Comparison Tool
                    </Link>
                  </div>
                </div>
              </section>

              <DrLilaDesc />

              {/* Related Resources */}
              <section className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Related Resources for Scottish Students
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">England's Student Loan System</h3>
                    <p className="text-gray-600">Compare Scotland's Plan 4 with England's Plan 2 and Plan 5 systems</p>
                  </Link>

                  <Link
                    href="/plans/plan-4/"
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Plan 4 Guide</h3>
                    <p className="text-gray-600">Detailed breakdown of Scotland's Plan 4 loan terms and conditions</p>
                  </Link>

                  <Link
                    href="/calculators/combined-repayment-calculator/"
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Scottish Postgraduate Loans</h3>
                    <p className="text-gray-600">Calculate combined undergraduate and postgraduate loan repayments</p>
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