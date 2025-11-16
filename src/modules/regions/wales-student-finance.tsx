import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function WalesStudentFinancePage() {
  const tocItems = [
    { id: "wales-overview", title: "Wales Student Finance System Overview", level: 2 },
    { id: "grants-system", title: "Welsh Maintenance Grants: Non-Repayable Support", level: 2 },
    { id: "plan-2-wales", title: "Plan 2 in Wales: Repayment Terms", level: 2 },
    { id: "partial-cancellation", title: "£1,500 Partial Cancellation Scheme", level: 2 },
    { id: "wales-vs-uk", title: "Wales vs Other UK Nations", level: 2 },
    { id: "postgraduate-wales", title: "Postgraduate Funding in Wales", level: 2 },
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
                      Wales Student Finance
                    </span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                Wales Student Finance: Grants, Loans & £1,500 Cancellation Explained
              </h1>
              <p className="text-xl text-gray-600">
                Understanding Wales&apos;s unique student finance system: maintenance grants, Plan 2 loans, and the partial cancellation scheme
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
                    Wales operates a distinctive hybrid student finance model that combines repayable loans with non-repayable maintenance grants, offering more direct support than England while maintaining tuition fees similar to the English system. Welsh students benefit from guaranteed minimum grants and a unique £1,500 partial loan cancellation scheme unavailable elsewhere in the UK.
                  </p>
                  <p>
                    Administered by Student Finance Wales (SFW), the Welsh system provides every eligible full-time undergraduate with at least £1,000 in non-repayable grant support annually, with students from lower-income households receiving up to £8,100 in grants. This grant-and-loan combination aims to reduce overall debt burden while ensuring all Welsh students receive equal total support.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                    <p className="font-medium">
                      Wales&apos;s Unique Advantage: Every Welsh student gets at least £1,000 in grants (free money), plus up to £1,500 cancelled from their loan balance after making their first repayment. This combination significantly reduces lifetime debt compared to England.
                    </p>
                  </div>
                </div>
              </section>

              {/* Wales Overview */}
              <section id="wales-overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Wales Student Finance System Overview
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Wales&apos;s student finance system occupies a middle ground between Scotland&apos;s free tuition model and England&apos;s high-fee, high-loan system. Welsh students pay tuition fees (up to £9,000 for 2025/26), but receive substantial grant support for living costs and benefit from the partial cancellation scheme.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wales Student Finance Core Features</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Universal minimum grant:</strong> Every eligible Welsh student receives £1,000 non-repayable grant annually, regardless of household income
                    </li>
                    <li>
                      <strong>Income-based grants:</strong> Students from households earning under £18,370 can receive up to £8,100 in grants (2025/26)
                    </li>
                    <li>
                      <strong>Equal total support:</strong> All Welsh students receive the same total funding (grants + loans combined) regardless of income - only the grant/loan ratio varies
                    </li>
                    <li>
                      <strong>£1,500 partial cancellation:</strong> Welsh Government cancels up to £1,500 from first maintenance loan when repayments begin
                    </li>
                    <li>
                      <strong>Plan 2 repayment terms:</strong> Same repayment structure as England (£27,295 threshold, 30-year write-off)
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Student Finance Wales: Administration</h3>
                  <p>
                    Student Finance Wales (SFW) is part of the Student Loans Company but operates under Welsh Government policy. SFW serves:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Welsh-domiciled students studying anywhere in the UK</li>
                    <li>Students ordinarily resident in Wales for at least 3 years before course start</li>
                    <li>Welsh students on bilingual applications (available in Welsh and English)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wales 2025/26 Funding Summary</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Support Type</th>
                          <th className="px-4 py-3 text-left text-gray-800">Living Away from Home</th>
                          <th className="px-4 py-3 text-left text-gray-800">Living at Parental Home</th>
                          <th className="px-4 py-3 text-left text-gray-800">London</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Total Maximum Support</td>
                          <td className="px-4 py-3">£12,345</td>
                          <td className="px-4 py-3">£10,480</td>
                          <td className="px-4 py-3">£15,415</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Minimum Grant (All Students)</td>
                          <td className="px-4 py-3">£1,000</td>
                          <td className="px-4 py-3">£1,000</td>
                          <td className="px-4 py-3">£1,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Maximum Grant (Income ≤£18,370)</td>
                          <td className="px-4 py-3">£8,100</td>
                          <td className="px-4 py-3">£6,885</td>
                          <td className="px-4 py-3">£10,124</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Maximum Loan (Remaining Balance)</td>
                          <td className="px-4 py-3">£11,345</td>
                          <td className="px-4 py-3">£9,480</td>
                          <td className="px-4 py-3">£14,415</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Tuition Fee Loan</td>
                          <td className="px-4 py-3">Up to £9,000</td>
                          <td className="px-4 py-3">Up to £9,000</td>
                          <td className="px-4 py-3">Up to £9,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-2">Understanding Wales&apos;s &quot;Equal Support&quot; Model:</p>
                    <p>
                      A Welsh student from a household earning £15,000 and a student from a household earning £40,000 both receive £12,345 total for living away from home. The difference: the lower-income student gets £8,100 as grant + £4,245 as loan, while the higher-income student gets £1,000 grant + £11,345 loan. Same total support, different grant/loan split.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/"
                    >
                      Calculate Your Wales Plan 2 Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* Grants System */}
              <section id="grants-system" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Welsh Maintenance Grants: Non-Repayable Support
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The Welsh Government Learning Grant (WGLG) is the flagship of Wales&apos;s student finance system, providing direct, non-repayable support that significantly reduces debt burden for Welsh students.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Who Gets Welsh Maintenance Grants?</h3>
                  <p>
                    All eligible Welsh students receive grants, but the amount varies by household income:
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Welsh Maintenance Grant Tiers (2025/26 - Living Away from Home):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Household income £18,370 or less:</strong> £8,100 maximum grant
                      </li>
                      <li>
                        <strong>Household income £18,371-£59,200:</strong> Sliding scale - grant reduces by £1 for every £6.937 increase in income
                      </li>
                      <li>
                        <strong>Household income over £59,200:</strong> £1,000 minimum grant (everyone gets this!)
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Grant Calculation Examples</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 1: Household income £18,370 or below</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Welsh Maintenance Grant: £8,100</li>
                      <li>Maintenance Loan: £4,245</li>
                      <li>Total support: £12,345</li>
                      <li><strong>Non-repayable amount: £8,100 (66%)</strong></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 2: Household income £25,000</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £18,370: £6,630</li>
                      <li>Grant reduction: £6,630 ÷ 6.937 = £955.49</li>
                      <li>Welsh Maintenance Grant: £8,100 - £955.49 = £7,144.51</li>
                      <li>Maintenance Loan: £5,200.49</li>
                      <li>Total support: £12,345</li>
                      <li><strong>Non-repayable amount: £7,144.51 (58%)</strong></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 3: Household income £70,000+</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Welsh Maintenance Grant: £1,000 (minimum)</li>
                      <li>Maintenance Loan: £11,345</li>
                      <li>Total support: £12,345</li>
                      <li><strong>Non-repayable amount: £1,000 (8%)</strong></li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Wales&apos;s Grant System Matters</h3>
                  <p>
                    Unlike England where all maintenance support is loans, Wales&apos;s grants provide genuine free money:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Grants never need to be repaid</li>
                    <li>No interest accrues on grants</li>
                    <li>Lower overall debt at graduation</li>
                    <li>Reduced lifetime repayment burden</li>
                    <li>Helps low-income students more than high earners</li>
                  </ul>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded">
                    <p className="font-medium text-green-800 mb-2">Wales vs England Grant Comparison:</p>
                    <p className="text-green-900">
                      A Welsh student from a household earning £18,000 receives £8,100 in grants over the year. An English student from the same household receives £0 in grants - all maintenance support is loans. Over a 3-year degree, that&apos;s £24,300 the Welsh student never has to repay.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional Welsh Grants</h3>
                  <p>Beyond the standard maintenance grant, Welsh students can apply for:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Parents&apos; Learning Allowance:</strong> Up to £1,915 for students with dependent children
                    </li>
                    <li>
                      <strong>Childcare Grant:</strong> Up to £9,120 per year for registered childcare costs
                    </li>
                    <li>
                      <strong>Adult Dependants&apos; Grant:</strong> Up to £3,407 if you financially support an adult
                    </li>
                    <li>
                      <strong>Disabled Students&apos; Allowances:</strong> Up to £34,000 for disability-related study costs
                    </li>
                    <li>
                      <strong>Special Support Grant:</strong> Up to £5,161 for specific circumstances (single parents, over 60, etc.)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Plan 2 Wales */}
              <section id="plan-2-wales" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Plan 2 in Wales: Repayment Terms
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Welsh students repay their loans under Plan 2 terms - the same system as England&apos;s legacy borrowers (2012-2023 starters). This means Wales continues using Plan 2 while England has moved to Plan 5 for new students from 2023 onward.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wales Plan 2 Repayment Parameters</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Repayment threshold:</strong> £27,295 per year (£2,274 monthly, £524 weekly) for 2025/26
                      </li>
                      <li>
                        <strong>Repayment rate:</strong> 9% of income above the threshold
                      </li>
                      <li>
                        <strong>Interest rate:</strong> Variable from RPI (£27,295 or below) to RPI+3% (£49,130+)
                      </li>
                      <li>
                        <strong>Write-off period:</strong> 30 years after the April you became eligible to repay
                      </li>
                      <li>
                        <strong>Repayment start:</strong> April after you leave or complete your course
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wales Plan 2 Repayment Examples</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Welsh graduate earning £35,000/year:</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £27,295 threshold: £7,705</li>
                      <li>Annual Plan 2 repayment: 9% of £7,705 = £693.45</li>
                      <li>Monthly deduction via PAYE: £57.79</li>
                      <li>Interest rate at this salary: Approximately RPI + 1.2%</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Welsh graduate earning £50,000/year:</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Income above £27,295 threshold: £22,705</li>
                      <li>Annual Plan 2 repayment: 9% of £22,705 = £2,043.45</li>
                      <li>Monthly deduction via PAYE: £170.29</li>
                      <li>Interest rate: RPI + 3% (maximum)</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 2 Interest Rate Structure in Wales</h3>
                  <p>Wales uses Plan 2&apos;s progressive interest rate system:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>While studying:</strong> RPI + 3% on outstanding balance
                    </li>
                    <li>
                      <strong>After graduation, earning £27,295 or less:</strong> RPI only
                    </li>
                    <li>
                      <strong>Earning £27,295 to £49,130:</strong> Progressive scale from RPI to RPI + 3%
                    </li>
                    <li>
                      <strong>Earning over £49,130:</strong> RPI + 3% (maximum rate)
                    </li>
                  </ul>

                  <p>
                    As of September 2025, RPI is 3.2%, meaning Plan 2 rates range from 3.2% to 6.2% depending on income.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why Wales Hasn&apos;t Adopted Plan 5</h3>
                  <p>
                    While England introduced Plan 5 in August 2023 with lower interest but longer write-off (40 years) and lower threshold (£25,000), Wales has maintained Plan 2. The Welsh Government is reviewing whether to adopt Plan 5 or continue with Plan 2, considering:
                  </p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Plan 2&apos;s higher threshold (£27,295 vs £25,000) benefits lower-middle earners</li>
                    <li>Plan 2&apos;s 30-year write-off is 10 years shorter than Plan 5&apos;s 40 years</li>
                    <li>Wales&apos;s grant system already provides better support than England</li>
                    <li>Political considerations about maintaining distinct Welsh policy</li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/plan-2-student-loan-calculator/"
                    >
                      Calculate Your Plan 2 Repayments
                    </Link>
                  </div>
                </div>
              </section>

              {/* Partial Cancellation */}
              <section id="partial-cancellation" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  £1,500 Partial Cancellation Scheme
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Wales&apos;s partial cancellation scheme is a unique benefit unavailable to students in England, Scotland, or Northern Ireland. The Welsh Government cancels up to £1,500 from your first maintenance loan balance when you start making repayments - effectively free money that reduces your lifetime debt.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How the £1,500 Cancellation Works</h3>
                  <p>
                    According to <a href="https://www.gov.uk/guidance/welsh-partial-loan-cancellation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official Welsh Government guidance</a>, the scheme operates as follows:
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Key Rules:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Applies to maintenance loans taken out from academic year 2010/11 onwards</li>
                      <li>Full-time undergraduate loans only (not part-time or postgraduate)</li>
                      <li>Cancels up to £1,500 from your <strong>first</strong> maintenance loan balance</li>
                      <li>Triggered when you make your first repayment (minimum £5)</li>
                      <li>You can only receive this cancellation once</li>
                      <li>Works with both statutory PAYE repayments and voluntary repayments</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Partial Cancellation Examples</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 1: Single-year loan, full cancellation</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>First year maintenance loan: £2,500</li>
                      <li>Total loan balance: £2,500 (plus interest)</li>
                      <li>First repayment made: £200</li>
                      <li><strong>Cancellation applied: £1,500</strong></li>
                      <li>Remaining balance: £800 (plus interest)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 2: Multi-year loan, partial cancellation</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Maintenance loan taken each year: £1,000 × 4 years = £4,000</li>
                      <li>First repayment made: £200 (split £50 per year)</li>
                      <li>First year loan after repayment: £950</li>
                      <li><strong>Cancellation applied: £950</strong> (cannot exceed first year balance)</li>
                      <li>Remaining total balance: £3,050 (plus interest)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="mb-2">
                      <strong>Example 3: Small first loan</strong>
                    </p>
                    <ul className="list-disc pl-6">
                      <li>First year maintenance loan: £1,200</li>
                      <li>First repayment made: £100</li>
                      <li>First year balance after repayment: £1,100</li>
                      <li><strong>Cancellation applied: £1,100</strong> (maximum is first year balance)</li>
                      <li>First year loan: £0</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maximizing Your Cancellation</h3>
                  <p>Strategic tips for getting the full £1,500 benefit:</p>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>
                      <strong>Wait until you&apos;ve borrowed £1,500+:</strong> If you make a £5 voluntary repayment after borrowing only £500, you&apos;ll only get £495 cancelled (not £1,500)
                    </li>
                    <li>
                      <strong>Make a voluntary repayment early:</strong> You can trigger the cancellation with just £5 payment as soon as you graduate
                    </li>
                    <li>
                      <strong>Don&apos;t pay off your entire first year loan in one go:</strong> If you pay off the full balance before triggering cancellation, you get £0 cancelled
                    </li>
                    <li>
                      <strong>Applies even if you&apos;re not earning:</strong> You don&apos;t need to be making PAYE repayments - a £5 voluntary payment works
                    </li>
                  </ul>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded">
                    <p className="font-medium text-green-800 mb-2">Smart Strategy:</p>
                    <p className="text-green-900">
                      Once you&apos;ve received at least £1,500 in maintenance loan payments (typically after your first year), make a £5 voluntary repayment online. The Welsh Government will immediately cancel £1,500 from your balance. This simple action saves you £1,500 plus all the interest that would have accumulated on that amount over 30 years.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Scheme Status and Future</h3>
                  <p>
                    The partial cancellation scheme has been renewed annually since 2010/11 and is currently confirmed for 2024/25 academic year. While continuation for 2025/26 is &quot;pending confirmation&quot; from the Welsh Government, the scheme has been consistently renewed every year since its introduction.
                  </p>
                </div>
              </section>

              {/* Wales vs UK */}
              <section id="wales-vs-uk" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Wales vs Other UK Nations
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Wales&apos;s hybrid grant-loan system creates a distinctive position between Scotland&apos;s free tuition and England&apos;s high-debt model.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Debt Comparison (3-Year Degree)</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Low-Income Household (£18,000/year):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Wales:</strong> £27,000 tuition + £12,735 maintenance loans - £1,500 cancellation = £38,235 total debt
                      </li>
                      <li>
                        <strong>England (Plan 5):</strong> £27,750 tuition + £30,000+ maintenance = £57,750+ total debt
                      </li>
                      <li>
                        <strong>Scotland:</strong> £0 tuition + £21,000 maintenance = £21,000 total debt
                      </li>
                      <li>
                        <strong>Wales saves £19,515 vs England!</strong> (Grants + cancellation)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Higher-Income Household (£70,000/year):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Wales:</strong> £27,000 tuition + £34,035 maintenance - £1,500 cancellation = £59,535 total debt
                      </li>
                      <li>
                        <strong>England (Plan 5):</strong> £27,750 tuition + £30,000+ maintenance = £57,750+ total debt
                      </li>
                      <li>
                        <strong>Scotland:</strong> £0 tuition + £24,000 maintenance = £24,000 total debt
                      </li>
                      <li>
                        <strong>Wales similar to England</strong> but still gets £1,000 grants + £1,500 cancellation
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Comparative Repayment Analysis</h3>
                  <p>Graduate earning £35,000 across UK nations:</p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Nation</th>
                          <th className="px-4 py-3 text-left text-gray-800">Plan</th>
                          <th className="px-4 py-3 text-left text-gray-800">Annual Repayment</th>
                          <th className="px-4 py-3 text-left text-gray-800">Monthly</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Wales</td>
                          <td className="px-4 py-3">Plan 2</td>
                          <td className="px-4 py-3">£693.45</td>
                          <td className="px-4 py-3">£57.79</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">England</td>
                          <td className="px-4 py-3">Plan 5</td>
                          <td className="px-4 py-3">£900</td>
                          <td className="px-4 py-3">£75</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Scotland</td>
                          <td className="px-4 py-3">Plan 4</td>
                          <td className="px-4 py-3">£202.95</td>
                          <td className="px-4 py-3">£16.91</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">N. Ireland</td>
                          <td className="px-4 py-3">Plan 1</td>
                          <td className="px-4 py-3">£1,167</td>
                          <td className="px-4 py-3">£97.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wales&apos;s Advantages</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Universal £1,000 minimum grant (England: £0)</li>
                    <li>Up to £8,100 grants for low-income students (England: £0)</li>
                    <li>£1,500 partial cancellation scheme (unique to Wales)</li>
                    <li>Higher repayment threshold than England&apos;s Plan 5 (£27,295 vs £25,000)</li>
                    <li>Shorter write-off than England&apos;s Plan 5 (30 vs 40 years)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wales&apos;s Disadvantages</h3>
                  <ul className="list-disc pl-6 mt-3 mb-6">
                    <li>Still pay tuition fees (unlike Scotland)</li>
                    <li>Higher debt than Scotland&apos;s maintenance-only model</li>
                    <li>Plan 2&apos;s variable interest (RPI to RPI+3%) means high earners pay more interest than Scotland&apos;s Plan 4</li>
                    <li>Grants taper off quickly for middle-income families</li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                      href="/calculators/regional-national-comparison-calculator/"
                    >
                      Compare Wales with Other UK Nations
                    </Link>
                  </div>
                </div>
              </section>

              {/* Postgraduate Wales */}
              <section id="postgraduate-wales" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                  Postgraduate Funding in Wales
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Wales offers distinctive postgraduate support combining loans and grants, with significantly higher funding available than England or Scotland.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Welsh Postgraduate Loan System</h3>
                  <div className="bg-gray-50 rounded-lg p-4 my-4">
                    <p className="font-medium mb-3">Wales Postgraduate Support (2025/26):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Maximum funding:</strong> Up to £19,255 (includes loan + grant elements)
                      </li>
                      <li>
                        <strong>Non means-tested:</strong> Amount not based on household income
                      </li>
                      <li>
                        <strong>Paid to you:</strong> Money paid directly to student, not university
                      </li>
                      <li>
                        <strong>Flexible use:</strong> Can cover tuition fees, living costs, or both
                      </li>
                      <li>
                        <strong>Repayment threshold:</strong> £21,000 per year
                      </li>
                      <li>
                        <strong>Repayment rate:</strong> 6% of income above threshold
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Postgraduate Funding Comparison</h3>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-800">Nation</th>
                          <th className="px-4 py-3 text-left text-gray-800">Maximum Funding</th>
                          <th className="px-4 py-3 text-left text-gray-800">Threshold</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">Wales</td>
                          <td className="px-4 py-3">£19,255</td>
                          <td className="px-4 py-3">£21,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">England</td>
                          <td className="px-4 py-3">£12,167</td>
                          <td className="px-4 py-3">£21,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Scotland</td>
                          <td className="px-4 py-3">£13,900</td>
                          <td className="px-4 py-3">£32,745</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Wales offers £7,088 more than England and £5,355 more than Scotland, making it the most generous postgraduate funding system in the UK.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Welsh Student Loan Repayments</h2>
                  <p className="text-lg text-blue-100">
                    Factor in grants and the £1,500 cancellation with our Wales-specific calculators
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      href="/calculators/plan-2-student-loan-calculator/"
                    >
                      Plan 2 Calculator
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
                  Related Resources for Welsh Students
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Compare Wales vs England</h3>
                    <p className="text-gray-600">See how Wales&apos;s grants and Plan 2 compare to England&apos;s Plan 5 system</p>
                  </Link>

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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Plan 2 Guide</h3>
                    <p className="text-gray-600">Detailed breakdown of Plan 2 loan terms used in Wales</p>
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Welsh Postgraduate Loans</h3>
                    <p className="text-gray-600">Calculate combined undergraduate and postgraduate repayments</p>
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