import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function NIStudentGBUniversityPage() {
    const tocItems = [
        { id: "overview", title: "Northern Ireland Student Finance Overview", level: 2 },
        { id: "tuition-fees", title: "Tuition Fee Support and Costs", level: 2 },
        { id: "maintenance-support", title: "Maintenance Loans and Living Costs", level: 2 },
        { id: "loan-plan", title: "Plan 1 Repayment System", level: 2 },
        { id: "ni-vs-gb", title: "Comparing NI and GB Systems", level: 2 },
        { id: "unique-considerations", title: "Unique Considerations for NI Students", level: 2 },
        { id: "application-guide", title: "Application Process", level: 2 },
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
                                            NI Students at GB Universities
                                        </span>
                                    </li>
                                </ol>
                            </nav>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                                Northern Ireland Students at GB Universities
                            </h1>
                            <p className="text-xl text-gray-600">
                                Understanding student finance for NI students studying in England, Scotland, or Wales
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
                                        Northern Ireland students studying in Great Britain (England, Scotland, or Wales) navigate a unique position within UK student finance. They benefit from lower tuition fees at home while accessing GB universities at higher fees, all managed through a distinct Plan 1 repayment system that offers some of the most favorable terms in the UK.
                                    </p>
                                    <p>
                                        This guide explains how student finance works for Northern Ireland students crossing the Irish Sea for university, including tuition fee structures, maintenance support, the advantageous Plan 1 repayment system, and how NI funding compares with GB alternatives.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Key Advantage: NI students benefit from Plan 1 repayments, which features the lowest repayment threshold (£22,015) but also has significantly lower interest rates than other plans and the shortest write-off period at just 25 years.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Overview */}
                            <section id="overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Northern Ireland Student Finance Overview
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Northern Ireland operates its own student finance system through Student Finance NI, which is part of the Department for the Economy. This system differs significantly from the rest of the UK in both structure and generosity.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Who Qualifies as an NI Student?</h3>
                                    <p>To receive Northern Ireland student finance, you must meet specific residency criteria:</p>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>
                                            <strong>Ordinary residence:</strong> You must be ordinarily resident in Northern Ireland on the first day of the first academic year of your course
                                        </li>
                                        <li>
                                            <strong>Three-year rule:</strong> You must have been ordinarily resident in the UK and Islands (including Channel Islands and Isle of Man) for three years immediately before the first day of the first academic year
                                        </li>
                                        <li>
                                            <strong>Settled status:</strong> You must have settled status in the UK (not solely for educational purposes)
                                        </li>
                                        <li>
                                            <strong>Not moved solely for study:</strong> Moving to Northern Ireland solely to attend a course doesn&apos;t establish ordinary residence
                                        </li>
                                    </ul>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Example:</p>
                                        <p>
                                            Siobhan has lived in Belfast all her life and is starting a degree at the University of Manchester. Despite studying in England, she applies through Student Finance NI and receives NI funding with Plan 1 repayment terms. Her ordinary residence in Northern Ireland determines her funding source, not where she studies.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Northern Ireland Advantage</h3>
                                    <p>
                                        NI students enjoy several benefits compared to students from other UK nations:
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Lowest home tuition fees:</strong> Only £4,855 per year at NI universities (compared to £9,250 in England)
                                            </li>
                                            <li>
                                                <strong>Plan 1 repayment system:</strong> More favorable terms with lowest interest rates and shortest write-off period
                                            </li>
                                            <li>
                                                <strong>Lower repayment threshold:</strong> While £22,015 seems low, the combination with low interest makes this advantageous for many
                                            </li>
                                            <li>
                                                <strong>Maintenance grants available:</strong> Non-repayable support for lower-income students
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The GB Study Decision</h3>
                                    <p>
                                        Many NI students face a significant choice: study at home with much lower tuition fees (£4,855) or study in Great Britain with higher fees (£9,250). This decision involves weighing:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Course quality and reputation at different institutions</li>
                                        <li>Career opportunities and graduate prospects</li>
                                        <li>Total cost differences (nearly £13,200 more in tuition fees alone over three years)</li>
                                        <li>Distance from home and travel costs</li>
                                        <li>Cultural and personal preferences</li>
                                    </ul>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Important: NI students studying anywhere in the UK (including Northern Ireland, England, Scotland, or Wales) apply through Student Finance NI and are placed on Plan 1 for loan repayment purposes.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Tuition Fees */}
                            <section id="tuition-fees" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Tuition Fee Support and Costs
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Tuition fees for NI students vary dramatically depending on where they choose to study within the UK. This creates a significant financial consideration when selecting universities.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tuition Fee Levels by Location</h3>
                                    <p>Maximum tuition fees for NI students across the UK:</p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Study Location</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Annual Tuition Fee</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">3-Year Total</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">Northern Ireland</td>
                                                    <td className="px-4 py-3">£4,855</td>
                                                    <td className="px-4 py-3">£14,565</td>
                                                    <td className="px-4 py-3">Significantly lower home fees</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">England</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">£27,750</td>
                                                    <td className="px-4 py-3">Standard English rate</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Scotland</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">£37,000 (4 years)</td>
                                                    <td className="px-4 py-3">Rest of UK rate; usually 4-year degrees</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Wales</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">£27,750</td>
                                                    <td className="px-4 py-3">Same as England</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Cost Difference Example:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Studying in NI: £14,565 total tuition fees (3 years)</li>
                                            <li>Studying in England: £27,750 total tuition fees (3 years)</li>
                                            <li>
                                                <strong>Additional cost for GB study: £13,185</strong>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tuition Fee Loans</h3>
                                    <p>
                                        Student Finance NI provides tuition fee loans to cover the full cost of tuition, regardless of where in the UK you study:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>Maximum tuition fee loan matches the university&apos;s fees (up to £9,250 in GB)</li>
                                            <li>Paid directly to the university by Student Finance NI</li>
                                            <li>No upfront payment required from student or family</li>
                                            <li>Available regardless of household income</li>
                                            <li>Repayable through Plan 1 after graduation</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Special Fee Support</h3>
                                    <p>
                                        Some NI students may qualify for additional fee support through the Special Support Grant, which can help with tuition costs:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Available for students from the lowest-income households</li>
                                        <li>Means-tested based on household income</li>
                                        <li>Helps reduce the amount that needs to be borrowed</li>
                                        <li>Does not need to be repaid</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Financial Trade-Off</h3>
                                    <p>
                                        When considering GB universities, NI students must weigh the £13,185 additional tuition cost against potential benefits:
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium mb-2">Reasons GB Study Might Be Worth the Extra Cost:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Specific courses not available or as highly ranked in NI</li>
                                            <li>Better career prospects and graduate employment rates</li>
                                            <li>Stronger alumni networks in desired career fields</li>
                                            <li>Broader life experience and independence</li>
                                            <li>Plan 1 repayment terms mean the extra debt may not significantly impact monthly payments</li>
                                        </ul>
                                    </div>

                                    <p>
                                        Importantly, because repayments are income-contingent, two students with the same salary make identical monthly repayments regardless of whether they borrowed £14,565 or £27,750 in tuition fees. Only higher earners who would fully repay their loans are financially affected by the higher borrowing.
                                    </p>
                                </div>
                            </section>

                            {/* Maintenance Support */}
                            <section id="maintenance-support" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Maintenance Loans and Living Costs
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Maintenance support helps cover living costs while studying. NI students receive a combination of loans and grants (for lower-income households), with amounts varying based on where they study and their household income.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maximum Maintenance Loan Levels (2024/25)</h3>
                                    <p>The maximum maintenance loan available depends on where you study and your living arrangements:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Full-Time Students:</p>
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Living away from home in London:</strong> £7,010 maximum
                                            </li>
                                            <li>
                                                <strong>Living away from home elsewhere (GB):</strong> £6,776 maximum
                                            </li>
                                            <li>
                                                <strong>Studying in Northern Ireland:</strong> £6,776 maximum
                                            </li>
                                            <li>
                                                <strong>Living with parents:</strong> £3,750 maximum
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Important: NI maintenance loans are significantly lower than those available to students from other UK nations. An English Plan 5 student can borrow up to £10,227 for living away from home, compared to £6,776 for NI students - a difference of £3,451 per year.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maintenance Grant Support</h3>
                                    <p>
                                        NI students from lower-income households can receive maintenance grants (non-repayable support) to help with living costs:
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Household Income</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Maintenance Grant</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">£19,203 or less</td>
                                                    <td className="px-4 py-3">£3,475</td>
                                                    <td className="px-4 py-3">Maximum grant</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£19,204 - £41,065</td>
                                                    <td className="px-4 py-3">£3,475 to £0 (sliding scale)</td>
                                                    <td className="px-4 py-3">Partial grant</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Above £41,065</td>
                                                    <td className="px-4 py-3">£0</td>
                                                    <td className="px-4 py-3">No grant</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p>
                                        The maintenance grant reduces your maximum loan entitlement pound-for-pound. This means total support (grant + loan) remains constant, but the composition shifts from repayable loan to non-repayable grant for lower-income students.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Maintenance Package Examples</h3>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Studying in England (Living Away from Home):</p>
                                        <p className="mb-2">
                                            <strong>Household Income £19,203 or less:</strong>
                                        </p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Maintenance grant: £3,475 (non-repayable)</li>
                                            <li>Maintenance loan: £3,301 (repayable)</li>
                                            <li>Total support: £6,776 per year</li>
                                        </ul>

                                        <p className="mb-2">
                                            <strong>Household Income above £41,065:</strong>
                                        </p>
                                        <ul className="list-disc pl-6">
                                            <li>Maintenance grant: £0</li>
                                            <li>Maintenance loan: £6,776 (all repayable)</li>
                                            <li>Total support: £6,776 per year</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Special Circumstances Support</h3>
                                    <p>Additional non-repayable support may be available for specific situations:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Disabled Students&apos; Allowance (DSA):</strong> Support for disability-related study costs
                                            </li>
                                            <li>
                                                <strong>Dependants&apos; Grant:</strong> For students with children or adult dependants
                                            </li>
                                            <li>
                                                <strong>Childcare Grant:</strong> Covers up to 85% of registered childcare costs
                                            </li>
                                            <li>
                                                <strong>Parents&apos; Learning Allowance:</strong> Additional support for student parents
                                            </li>
                                            <li>
                                                <strong>Travel costs:</strong> Additional support may be available for medical/dental students on clinical placements
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Bridging the Funding Gap</h3>
                                    <p>
                                        With lower maintenance loans than other UK nations, many NI students need alternative funding sources:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Part-time employment during term time and holidays</li>
                                        <li>Parental or family financial support</li>
                                        <li>University bursaries and scholarships</li>
                                        <li>Personal savings built up before university</li>
                                        <li>Careful budgeting and lower living costs (choosing cheaper accommodation, cooking at home)</li>
                                    </ul>

                                    <div className="mt-6 text-center">
                                        <Link
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                                            href="/calculators/student-finance-calculator/"
                                        >
                                            Calculate Your Maintenance Support
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Loan Plan */}
                            <section id="loan-plan" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Plan 1 Repayment System
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Northern Ireland students repay their loans through Plan 1, which is also used by students from England and Wales who started their courses before September 2012. Plan 1 has distinct advantages and disadvantages compared to newer loan plans.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 1 Key Features</h3>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Repayment threshold:</strong> £22,015 per year (2024/25) - the lowest of all UK plans
                                            </li>
                                            <li>
                                                <strong>Repayment rate:</strong> 9% of income above the threshold
                                            </li>
                                            <li>
                                                <strong>Interest rate:</strong> Lower of RPI or Bank of England Base Rate + 1% - currently the lowest rate of all plans
                                            </li>
                                            <li>
                                                <strong>Write-off period:</strong> 25 years after the April you were first due to repay - the shortest period of all plans
                                            </li>
                                            <li>
                                                <strong>Collection method:</strong> Automatic deduction through PAYE for employees; Self Assessment for self-employed
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Monthly Repayment Examples</h3>
                                    <p>Understanding monthly repayments helps with post-graduation financial planning:</p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Annual Salary</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Income Above Threshold</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Monthly Repayment</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Annual Repayment</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">£20,000</td>
                                                    <td className="px-4 py-3">£0</td>
                                                    <td className="px-4 py-3">£0</td>
                                                    <td className="px-4 py-3">£0</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£25,000</td>
                                                    <td className="px-4 py-3">£2,985</td>
                                                    <td className="px-4 py-3">£22</td>
                                                    <td className="px-4 py-3">£269</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£30,000</td>
                                                    <td className="px-4 py-3">£7,985</td>
                                                    <td className="px-4 py-3">£60</td>
                                                    <td className="px-4 py-3">£719</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£35,000</td>
                                                    <td className="px-4 py-3">£12,985</td>
                                                    <td className="px-4 py-3">£97</td>
                                                    <td className="px-4 py-3">£1,169</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£40,000</td>
                                                    <td className="px-4 py-3">£17,985</td>
                                                    <td className="px-4 py-3">£135</td>
                                                    <td className="px-4 py-3">£1,619</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£50,000</td>
                                                    <td className="px-4 py-3">£27,985</td>
                                                    <td className="px-4 py-3">£210</td>
                                                    <td className="px-4 py-3">£2,519</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Plan 1 Advantage: Low Interest</h3>
                                    <p>
                                        Plan 1&apos;s interest rate structure is significantly more favorable than other plans:
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium mb-2">Interest Rate Comparison (Approximate 2024 rates):</p>
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Plan 1 (NI students):</strong> Around 1.25% (lower of RPI or BoE Base + 1%)
                                            </li>
                                            <li>
                                                <strong>Plan 2 (English 2012-2023):</strong> 4.3% to 7.3% (RPI to RPI + 3%)
                                            </li>
                                            <li>
                                                <strong>Plan 5 (English 2023+):</strong> Around 4.3% (RPI only)
                                            </li>
                                        </ul>
                                        <p className="mt-2">
                                            This means NI students accumulate far less interest over their repayment period, making full repayment much more achievable.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Early Repayment Considerations</h3>
                                    <p>
                                        Plan 1&apos;s favorable terms make it one of the few student loan plans where voluntary overpayment might make financial sense:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Low interest rates mean the loan doesn&apos;t balloon significantly over time</li>
                                        <li>25-year write-off period means more middle-income earners will fully repay</li>
                                        <li>Early repayment saves on interest that would otherwise accrue</li>
                                        <li>For high earners, paying off the loan frees up 9% of income above threshold</li>
                                    </ul>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">When Overpayment Makes Sense:</p>
                                        <ul className="list-disc pl-6">
                                            <li>You&apos;re on track to fully repay before the 25-year write-off</li>
                                            <li>You have surplus income and no higher-interest debts</li>
                                            <li>You want to free up monthly cash flow by eliminating the 9% repayment</li>
                                            <li>You value being debt-free for psychological or financial planning reasons</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Lower Threshold Impact</h3>
                                    <p>
                                        While Plan 1&apos;s £22,015 threshold is the lowest of all plans, this isn&apos;t necessarily a disadvantage:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Why the Low Threshold Can Be Positive:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Combined with low interest, you pay down principal faster</li>
                                            <li>Less interest accumulates while you&apos;re repaying</li>
                                            <li>Earlier start to repayments means earlier finish for most earners</li>
                                            <li>The 25-year write-off provides a safety net for lower earners</li>
                                        </ul>
                                    </div>

                                    <p>
                                        For comparison, a graduate earning £25,000 pays £22 monthly on Plan 1 versus £0 on Plan 2 (threshold £27,295) or Plan 5 (threshold £25,000). However, the Plan 1 borrower accumulates minimal interest while the Plan 2/5 borrower&apos;s debt grows significantly.
                                    </p>

                                    <div className="mt-6 text-center">
                                        <Link
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                                            href="/calculators/plan-1-student-loan-calculator/"
                                        >
                                            Calculate Your Plan 1 Repayments
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Comparison */}
                            <section id="ni-vs-gb" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Comparing NI and GB Systems
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Understanding how NI student finance compares with GB systems helps students make informed decisions about where to study and what to expect financially.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">System-Wide Comparison</h3>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">NI Students</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">English Students (Plan 5)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">Funding Body</td>
                                                    <td className="px-4 py-3">Student Finance NI</td>
                                                    <td className="px-4 py-3">Student Finance England</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Home Tuition Fees</td>
                                                    <td className="px-4 py-3">£4,855 per year</td>
                                                    <td className="px-4 py-3">£9,250 per year</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">GB Tuition Fees</td>
                                                    <td className="px-4 py-3">£9,250 per year</td>
                                                    <td className="px-4 py-3">£9,250 per year</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Max Maintenance Loan (away)</td>
                                                    <td className="px-4 py-3">£6,776</td>
                                                    <td className="px-4 py-3">£10,227</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Maintenance Grant</td>
                                                    <td className="px-4 py-3">Up to £3,475</td>
                                                    <td className="px-4 py-3">£0</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Repayment Plan</td>
                                                    <td className="px-4 py-3">
                                                        <Link href="/plans/plan-1/" className="text-blue-600 hover:underline">
                                                            Plan 1
                                                        </Link>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <Link href="/plans/plan-5/" className="text-blue-600 hover:underline">
                                                            Plan 5
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Repayment Threshold</td>
                                                    <td className="px-4 py-3">£22,015</td>
                                                    <td className="px-4 py-3">£25,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Interest Rate</td>
                                                    <td className="px-4 py-3">Lower of RPI or BoE + 1%</td>
                                                    <td className="px-4 py-3">RPI only</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Write-Off Period</td>
                                                    <td className="px-4 py-3">25 years</td>
                                                    <td className="px-4 py-3">40 years</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Debt Comparison</h3>
                                    <p>
                                        For a three-year degree with lowest household income eligibility (living away from home in England):
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">NI Student (Studying in England):</p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Tuition fees: 3 × £9,250 = £27,750</li>
                                            <li>Maintenance grant: 3 × £3,475 = £10,425 (non-repayable)</li>
                                            <li>Maintenance loan: 3 × £3,301 = £9,903</li>
                                            <li>
                                                <strong>Total debt: £37,653</strong>
                                            </li>
                                            <li>
                                                <strong>Total support received: £48,078</strong>
                                            </li>
                                        </ul>

                                        <p className="font-medium mb-2">English Student (Plan 5):</p>
                                        <ul className="list-disc pl-6">
                                            <li>Tuition fees: 3 × £9,250 = £27,750</li>
                                            <li>Maintenance grant: £0</li>
                                            <li>Maintenance loan: 3 × £10,227 = £30,681</li>
                                            <li>
                                                <strong>Total debt: £58,431</strong>
                                            </li>
                                            <li>
                                                <strong>Total support received: £58,431</strong>
                                            </li>
                                        </ul>

                                        <p className="mt-2">
                                            <strong>
                                                The NI student has £20,778 less debt but also received £10,353 less total support, meaning they need to find this difference through family support, part-time work, or careful budgeting.
                                            </strong>
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Advantages of NI System</h3>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>
                                            <strong>Much lower home tuition fees:</strong> £4,855 vs £9,250 - saves £13,185 over three years if studying in NI
                                        </li>
                                        <li>
                                            <strong>Lowest interest rates:</strong> Plan 1 interest typically 1-2% vs 4-7% on other plans
                                        </li>
                                        <li>
                                            <strong>Shortest write-off:</strong> 25 years vs 30-40 years on other plans
                                        </li>
                                        <li>
                                            <strong>Maintenance grants available:</strong> Up to £3,475 non-repayable for lower-income students
                                        </li>
                                        <li>
                                            <strong>Faster debt clearance:</strong> Low interest means more repayments go toward principal
                                        </li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Disadvantages of NI System</h3>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>
                                            <strong>Much lower maintenance loans:</strong> £6,776 vs £10,227 - £3,451 less per year in England
                                        </li>
                                        <li>
                                            <strong>Lower repayment threshold:</strong> Start repaying at £22,015 vs £25,000+ on other plans
                                        </li>
                                        <li>
                                            <strong>Higher fees for GB study:</strong> Nearly double tuition fees if studying outside NI
                                        </li>
                                        <li>
                                            <strong>Less total support available:</strong> Need more self-funding or family support
                                        </li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Who Benefits Most from NI System?</h3>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium mb-2">The NI system works best for:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Students studying in Northern Ireland (much lower fees)</li>
                                            <li>Students with family financial support to cover lower maintenance loans</li>
                                            <li>Middle to high earners who will fully repay (benefit from low interest)</li>
                                            <li>Students from lower-income households (benefit from grants)</li>
                                            <li>Those who value debt-free status earlier (25-year write-off)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Unique Considerations */}
                            <section id="unique-considerations" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Unique Considerations for NI Students
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Travel Costs and Distance</h3>
                                    <p>
                                        NI students studying in Great Britain face unique travel considerations that other UK students don&apos;t encounter:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Additional Expenses to Budget:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Flights or ferry crossings between NI and GB (typically 3-4 times per year minimum)</li>
                                            <li>Travel to and from airports or ports (Belfast, Dublin, or GB airports)</li>
                                            <li>Baggage fees for transporting belongings</li>
                                            <li>Potential overnight accommodation if travel connections are poor</li>
                                            <li>
                                                Emergency trips home if needed (family emergencies, important events)
                                            </li>
                                        </ul>
                                        <p className="mt-2">
                                            These costs can easily add £500-£1,500+ per year depending on routes, booking times, and frequency of travel.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Currency and Banking</h3>
                                    <p>
                                        While Northern Ireland uses pound sterling, some unique banking considerations apply:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>NI banks issue different banknotes that aren&apos;t always accepted in GB</li>
                                        <li>Consider opening a GB bank account to avoid note acceptance issues</li>
                                        <li>Some NI banks have limited branch networks in GB</li>
                                        <li>International money transfer apps may categorize NI differently despite same currency</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Course Availability</h3>
                                    <p>
                                        Northern Ireland has only two main universities (Queen&apos;s University Belfast and Ulster University), which means:
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <ul className="list-disc pl-6">
                                            <li>Many specialist courses simply aren&apos;t available in NI</li>
                                            <li>Some career paths require studying in GB for best prospects</li>
                                            <li>Limited choice means GB study may be necessary, not optional</li>
                                            <li>Some highly competitive courses have very few NI places</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Post-Graduation Employment Location</h3>
                                    <p>
                                        Where you study and where you work after graduation can significantly impact your student loan experience:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Scenario: Study in GB, Return to NI</p>
                                        <ul className="list-disc pl-6">
                                            <li>Borrowed more due to higher GB tuition fees</li>
                                            <li>NI salaries often lower than GB equivalents</li>
                                            <li>Plan 1&apos;s low threshold means repayments start at £22,015</li>
                                            <li>Low interest rate means debt doesn&apos;t balloon</li>
                                            <li>May benefit from 25-year write-off if earnings remain modest</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Scenario: Study in GB, Work in GB</p>
                                        <ul className="list-disc pl-6">
                                            <li>Higher average salaries in GB (especially London and South East)</li>
                                            <li>Higher living costs may offset salary advantage</li>
                                            <li>Likely to make higher repayments due to higher earnings</li>
                                            <li>More likely to fully repay loan before 25-year write-off</li>
                                            <li>Network and connections from university location valuable</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cultural and Personal Factors</h3>
                                    <p>
                                        Beyond finances, NI students considering GB study should weigh personal factors:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Distance from family and support networks</li>
                                        <li>Cultural differences and adjustment challenges</li>
                                        <li>Opportunity to live independently and experience new places</li>
                                        <li>Building networks outside Northern Ireland</li>
                                        <li>Broader perspective and life experiences</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Home Study Option</h3>
                                    <p>
                                        For many NI students, studying at home offers compelling advantages:
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium mb-2">Benefits of Studying in Northern Ireland:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Tuition fees less than half GB rates (£4,855 vs £9,250)</li>
                                            <li>Save £13,185 in tuition fees over three years</li>
                                            <li>Option to live at home (further reducing costs with £3,750 maintenance loan)</li>
                                            <li>No additional travel costs</li>
                                            <li>Maintain family and friend support networks</li>
                                            <li>Strong local universities with good reputations</li>
                                            <li>Graduate with minimal debt if living at home</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Application Guide */}
                            <section id="application-guide" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Application Process
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Applying for NI student finance follows a similar process regardless of where in the UK you plan to study. You must apply through Student Finance NI.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step-by-Step Application</h3>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ol className="list-decimal pl-6">
                                            <li className="mb-3">
                                                <strong>Register online:</strong> Create an account at{" "}
                                                <a
                                                    href="https://www.studentfinanceni.co.uk/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    studentfinanceni.co.uk
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <strong>Gather information:</strong> Have your National Insurance number, course details, and household income information ready
                                            </li>
                                            <li className="mb-3">
                                                <strong>Complete application:</strong> Fill in all sections including personal details, course information, and residency status
                                            </li>
                                            <li className="mb-3">
                                                <strong>Submit income evidence:</strong> Provide parental or personal income details if applying for means-tested support
                                            </li>
                                            <li className="mb-3">
                                                <strong>Upload documents:</strong> Provide proof of identity and residency as requested
                                            </li>
                                            <li className="mb-3">
                                                <strong>Declaration and submit:</strong> Review all information and submit before deadline
                                            </li>
                                            <li className="mb-3">
                                                <strong>Track your application:</strong> Monitor progress through your online account
                                            </li>
                                            <li className="mb-3">
                                                <strong>Receive decision:</strong> Student Finance NI will send details of your entitlement
                                            </li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Dates and Deadlines</h3>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Applications open:</strong> Typically February/March for September start
                                            </li>
                                            <li>
                                                <strong>Recommended deadline:</strong> End of June to ensure funding for course start
                                            </li>
                                            <li>
                                                <strong>Final deadline:</strong> Usually late in the academic year, but late applications may experience delays
                                            </li>
                                            <li>
                                                <strong>Annual reapplication:</strong> Required each year from around April onwards
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Required Documentation</h3>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Proof of identity (passport, birth certificate, or driving licence)</li>
                                        <li>National Insurance number</li>
                                        <li>Evidence of UK residency for three years</li>
                                        <li>Bank account details</li>
                                        <li>Parental income evidence (P60, tax returns, payslips)</li>
                                        <li>Evidence of special circumstances if applicable</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment Schedule</h3>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Tuition Fee Loan:</p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Paid directly to university in instalments</li>
                                            <li>You don&apos;t receive this money yourself</li>
                                        </ul>

                                        <p className="font-medium mb-2">Maintenance Loan and Grant:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Paid into your bank account</li>
                                            <li>Usually three payments per year (start of each term)</li>
                                            <li>First payment may be delayed by 1-2 weeks after term starts</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <Link
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block"
                                            href="https://www.studentfinanceni.co.uk/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Apply Through Student Finance NI
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* CTA */}
                            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                                <div className="text-center space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your NI Student Loan Repayments</h2>
                                    <p className="text-lg text-blue-100">
                                        Use our Plan 1 calculator to understand your repayments and compare studying at home vs GB
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link
                                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                                            href="/calculators/plan-1-student-loan-calculator/"
                                        >
                                            Calculate Plan 1 Repayments
                                        </Link>
                                        <Link
                                            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                                            href="/"
                                        >
                                            Explore All Calculators
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
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 1 Student Loans Explained</h3>
                                        <p className="text-gray-600">
                                            Complete guide to Plan 1 repayments for NI students
                                        </p>
                                    </Link>

                                    <Link
                                        href="/calculators/total-loan-cost-calculator/"
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
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Loan Cost Calculator</h3>
                                        <p className="text-gray-600">
                                            Compare total costs of studying in NI vs GB
                                        </p>
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
                                        <p className="text-gray-600">
                                            Compare NI student finance with other UK nations
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
            </div >
        </main >
    );
}