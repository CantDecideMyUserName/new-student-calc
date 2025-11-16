import DrLilaDesc from "@/components/common/dr-lila-desc";
import TableOfContents from "@/components/common/tableOfContent";
import Link from "next/link";

export default function WelshStudentEnglishUniPage() {
    const tocItems = [
        { id: "overview", title: "Welsh Student Finance Overview", level: 2 },
        { id: "funding-structure", title: "Understanding the Grant-Loan Mix", level: 2 },
        { id: "tuition-fees", title: "Tuition Fee Support for Welsh Students", level: 2 },
        { id: "maintenance-support", title: "Maintenance Grants and Loans", level: 2 },
        { id: "loan-repayment", title: "Loan Repayment After Graduation", level: 2 },
        { id: "comparison", title: "Comparing Welsh vs English Systems", level: 2 },
        { id: "application-process", title: "Application Process and Timeline", level: 2 },
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
                                            Welsh Students at English Universities
                                        </span>
                                    </li>
                                </ol>
                            </nav>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                                Welsh Students Studying at English Universities
                            </h1>
                            <p className="text-xl text-gray-600">
                                Understanding the unique grant-loan combination system for Welsh-domiciled students
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
                                        Welsh students studying at English universities benefit from a distinctive funding system that combines non-repayable grants with income-contingent loans. This hybrid approach means Welsh students often receive more grant support than their English counterparts, regardless of where they study in the UK.
                                    </p>
                                    <p>
                                        This guide explains how Welsh student finance works when studying in England, including the grant-loan split, tuition fee arrangements, maintenance support levels, and how repayments work under Plan 2 after graduation.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Key Advantage: Unlike English students who receive mostly loans, Welsh students receive a significant portion of their maintenance support as non-repayable grants, reducing the amount that needs to be repaid after graduation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Overview */}
                            <section id="overview" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Welsh Student Finance Overview
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Wales operates a distinct student finance system administered by Student Finance Wales (SFW). The system is designed to provide more generous grant support compared to England, recognizing education as a public investment rather than purely individual debt.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Who Qualifies as a Welsh Student?</h3>
                                    <p>To be eligible for Welsh student finance, you must meet specific residency criteria:</p>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>
                                            <strong>Ordinary residence:</strong> You must be ordinarily resident in Wales on the first day of the first academic year of your course
                                        </li>
                                        <li>
                                            <strong>Three-year rule:</strong> You must have been ordinarily resident in the UK, Channel Islands, or Isle of Man for three years before your course starts
                                        </li>
                                        <li>
                                            <strong>Settled status:</strong> You must have settled status in the UK (not solely for educational purposes)
                                        </li>
                                    </ul>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Example:</p>
                                        <p>
                                            Rhys has lived in Cardiff all his life and is starting a degree at the University of Manchester. He applies through Student Finance Wales and receives Welsh funding despite studying in England. His ordinary residence in Wales determines his funding source, not his study location.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Welsh Funding Philosophy</h3>
                                    <p>
                                        The Welsh system differs fundamentally from England in its approach to higher education funding. Wales provides higher levels of non-repayable grant support, particularly for students from lower-income households. This means Welsh students graduate with less debt than English students in equivalent circumstances.
                                    </p>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Important: Welsh students studying anywhere in the UK (England, Scotland, Wales, or Northern Ireland) apply through Student Finance Wales and receive Welsh funding packages, not the funding system of where they study.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Loan Plan Assignment</h3>
                                    <p>
                                        Welsh students who started university from September 2012 onwards are placed on Plan 2 for loan repayment purposes. This is the same repayment plan as English students who started from 2012-2023, meaning:
                                    </p>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Repayment threshold: £27,295 per year</li>
                                        <li>Repayment rate: 9% of income above the threshold</li>
                                        <li>Interest rate: RPI to RPI + 3% depending on income</li>
                                        <li>Write-off period: 30 years after the April you were first due to repay</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Funding Structure */}
                            <section id="funding-structure" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Understanding the Grant-Loan Mix
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        The defining feature of Welsh student finance is its balanced approach between grants (which don&apos;t need to be repaid) and loans (which are repaid based on future income). This creates a more equitable system where students from all backgrounds receive substantial support.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Universal Grant Principle</h3>
                                    <p>
                                        All Welsh students, regardless of household income, receive the same total package of support. However, the composition of grants versus loans varies based on household income:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Fixed Total Support (2024/25):</p>
                                        <ul className="list-disc pl-6">
                                            <li>Total maintenance support available: £10,710 per year (living away from home outside London)</li>
                                            <li>This total remains constant for all students</li>
                                            <li>Only the grant/loan split varies by household income</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How the Grant-Loan Split Works</h3>
                                    <p>The proportion of grant versus loan depends on assessed household income:</p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Household Income</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Grant Amount</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Loan Amount</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Total Support</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">£0 - £18,370</td>
                                                    <td className="px-4 py-3">£8,100</td>
                                                    <td className="px-4 py-3">£2,610</td>
                                                    <td className="px-4 py-3">£10,710</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£25,000</td>
                                                    <td className="px-4 py-3">£6,885</td>
                                                    <td className="px-4 py-3">£3,825</td>
                                                    <td className="px-4 py-3">£10,710</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£40,000</td>
                                                    <td className="px-4 py-3">£4,140</td>
                                                    <td className="px-4 py-3">£6,570</td>
                                                    <td className="px-4 py-3">£10,710</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£59,200+</td>
                                                    <td className="px-4 py-3">£1,000</td>
                                                    <td className="px-4 py-3">£9,710</td>
                                                    <td className="px-4 py-3">£10,710</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium mb-2">Key Insight:</p>
                                        <p>
                                            Even students from the highest-income households receive £1,000 in non-repayable grant funding. This universal grant principle ensures all students benefit from public investment in higher education, though lower-income students receive proportionally more grant support.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Comparing Grant Support</h3>
                                    <p>
                                        Welsh students receive significantly more grant support than English students in equivalent income brackets:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Example: Household Income £25,000</p>
                                        <p className="mb-2">
                                            <strong>Welsh Student:</strong>
                                        </p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Grant: £6,885 (non-repayable)</li>
                                            <li>Loan: £3,825 (repayable)</li>
                                            <li>Amount to repay: £3,825 per year</li>
                                        </ul>
                                        <p className="mb-2">
                                            <strong>English Student (Plan 5, 2024/25):</strong>
                                        </p>
                                        <ul className="list-disc pl-6">
                                            <li>Grant: £0</li>
                                            <li>Loan: £10,227 (all repayable)</li>
                                            <li>Amount to repay: £10,227 per year</li>
                                        </ul>
                                        <p className="mt-2">
                                            <strong>Annual difference: Welsh student borrows £6,402 less</strong>
                                        </p>
                                    </div>

                                    <p>
                                        Over a three-year degree, this translates to approximately £19,206 less debt for the Welsh student, assuming similar household incomes and living arrangements.
                                    </p>
                                </div>
                            </section>

                            {/* Tuition Fees */}
                            <section id="tuition-fees" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Tuition Fee Support for Welsh Students
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Welsh students studying at English universities pay English tuition fees (currently up to £9,250 per year). However, the way these fees are funded has undergone significant changes in recent years.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Current Tuition Fee Loan System</h3>
                                    <p>
                                        For students starting from 2018/19 onwards, Welsh students receive tuition fee support through a standard tuition fee loan:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>Maximum tuition fee loan: £9,250 per year (studying in England)</li>
                                            <li>Loan paid directly to the university by Student Finance Wales</li>
                                            <li>Full amount repayable through Plan 2 after graduation</li>
                                            <li>No upfront payment required from student or family</li>
                                            <li>Same loan terms regardless of household income</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Historical Context: Tuition Fee Grant (Pre-2018)</h3>
                                    <p>
                                        Students who started before 2018/19 may have received the Welsh Government Learning Grant for tuition fees, which partially covered tuition costs as a non-repayable grant. This system was phased out and replaced with the current loan-based system.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tuition Fees at Different UK Institutions</h3>
                                    <p>The maximum tuition fee loan available varies depending on where you study:</p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Study Location</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Maximum Tuition Fee Loan</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">England</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">Standard maximum fee at English universities</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Wales</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">Welsh universities charge same as England</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Scotland</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">Rest of UK rate applies to Welsh students</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Northern Ireland</td>
                                                    <td className="px-4 py-3">£9,250</td>
                                                    <td className="px-4 py-3">Same maximum as England and Wales</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Part-Time Study Tuition Support</h3>
                                    <p>
                                        Welsh students studying part-time can also access tuition fee loans, with the amount based on course intensity:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>Loan amount proportional to course intensity (e.g., 50% intensity = 50% of full-time loan)</li>
                                            <li>Must be studying at least 25% of a full-time course</li>
                                            <li>Same repayment terms apply as full-time students on Plan 2</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Important: Private institutions may charge higher fees than £9,250. The tuition fee loan is capped at £9,250, meaning students would need to pay any additional amount personally.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Maintenance Support */}
                            <section id="maintenance-support" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Maintenance Grants and Loans
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Maintenance support helps cover living costs while studying. Welsh students receive this support as a combination of grants and loans, with the split determined by household income.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Maximum Maintenance Support Levels (2024/25)</h3>
                                    <p>The maximum total maintenance support varies based on living arrangements:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Living Situations:</p>
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Living away from home in London:</strong> £13,375 total (higher cost of living adjustment)
                                            </li>
                                            <li>
                                                <strong>Living away from home outside London:</strong> £10,710 total (most common for students in England)
                                            </li>
                                            <li>
                                                <strong>Living with parents:</strong> £8,145 total (reduced rate as accommodation costs lower)
                                            </li>
                                            <li>
                                                <strong>Overseas study year:</strong> £11,910 total (for year abroad as part of course)
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Detailed Grant-Loan Breakdown (Living Away, Outside London)</h3>
                                    <p>
                                        For the most common scenario of Welsh students living away from home in England (outside London):
                                    </p>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Household Income</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Grant (Non-repayable)</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Loan (Repayable)</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Grant %</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">£18,370 or less</td>
                                                    <td className="px-4 py-3">£8,100</td>
                                                    <td className="px-4 py-3">£2,610</td>
                                                    <td className="px-4 py-3">76%</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£25,000</td>
                                                    <td className="px-4 py-3">£6,885</td>
                                                    <td className="px-4 py-3">£3,825</td>
                                                    <td className="px-4 py-3">64%</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£30,000</td>
                                                    <td className="px-4 py-3">£5,970</td>
                                                    <td className="px-4 py-3">£4,740</td>
                                                    <td className="px-4 py-3">56%</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£40,000</td>
                                                    <td className="px-4 py-3">£4,140</td>
                                                    <td className="px-4 py-3">£6,570</td>
                                                    <td className="px-4 py-3">39%</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£50,000</td>
                                                    <td className="px-4 py-3">£2,310</td>
                                                    <td className="px-4 py-3">£8,400</td>
                                                    <td className="px-4 py-3">22%</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£59,200 or more</td>
                                                    <td className="px-4 py-3">£1,000</td>
                                                    <td className="px-4 py-3">£9,710</td>
                                                    <td className="px-4 py-3">9%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Special Circumstances Support</h3>
                                    <p>Additional support may be available for students in specific situations:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Additional Allowances:</p>
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Disabled Students&apos; Allowances (DSAs):</strong> Non-repayable support for disability-related costs
                                            </li>
                                            <li>
                                                <strong>Childcare Grant:</strong> Up to 85% of childcare costs (maximum varies by number of children)
                                            </li>
                                            <li>
                                                <strong>Parents&apos; Learning Allowance:</strong> Up to £1,915 per year for students with dependent children
                                            </li>
                                            <li>
                                                <strong>Adult Dependants&apos; Grant:</strong> Up to £3,263 per year if you financially support an adult
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Independent Student Status</h3>
                                    <p>
                                        Some students are assessed independently of parental income, which can significantly affect grant entitlement:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Students aged 25 or over on the first day of the first academic year</li>
                                        <li>Married or in a civil partnership before the first day of the first academic year</li>
                                        <li>Students who have supported themselves financially for at least three years</li>
                                        <li>Students with no living parents</li>
                                        <li>Estranged from parents (evidence required)</li>
                                        <li>Care leavers</li>
                                    </ul>

                                    <p>
                                        Independent students are assessed based on their own income (and their partner&apos;s if applicable), which often results in higher grant entitlements.
                                    </p>

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

                            {/* Loan Repayment */}
                            <section id="loan-repayment" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Loan Repayment After Graduation
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Welsh students repay their student loans through the Plan 2 repayment system, which operates identically to English Plan 2 students who started between 2012-2023.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Plan 2 Repayment Terms</h3>
                                    <p>The key features of Plan 2 repayments for Welsh students:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Repayment threshold:</strong> £27,295 per year (2024/25)
                                            </li>
                                            <li>
                                                <strong>Repayment rate:</strong> 9% of income above the threshold
                                            </li>
                                            <li>
                                                <strong>Interest rate while studying:</strong> RPI + 3%
                                            </li>
                                            <li>
                                                <strong>Interest rate after graduation:</strong> RPI to RPI + 3% based on income
                                            </li>
                                            <li>
                                                <strong>Write-off period:</strong> 30 years after April following graduation or leaving the course
                                            </li>
                                            <li>
                                                <strong>Collection method:</strong> Automatic deduction through PAYE for employed workers
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Monthly Repayment Examples</h3>
                                    <p>
                                        Understanding how much you&apos;ll repay monthly based on salary helps with financial planning:
                                    </p>

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
                                                    <td className="px-4 py-3">£25,000</td>
                                                    <td className="px-4 py-3">£0</td>
                                                    <td className="px-4 py-3">£0</td>
                                                    <td className="px-4 py-3">£0</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£30,000</td>
                                                    <td className="px-4 py-3">£2,705</td>
                                                    <td className="px-4 py-3">£20</td>
                                                    <td className="px-4 py-3">£243</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£35,000</td>
                                                    <td className="px-4 py-3">£7,705</td>
                                                    <td className="px-4 py-3">£58</td>
                                                    <td className="px-4 py-3">£693</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£40,000</td>
                                                    <td className="px-4 py-3">£12,705</td>
                                                    <td className="px-4 py-3">£95</td>
                                                    <td className="px-4 py-3">£1,143</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">£50,000</td>
                                                    <td className="px-4 py-3">£22,705</td>
                                                    <td className="px-4 py-3">£170</td>
                                                    <td className="px-4 py-3">£2,043</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Advantage of Lower Debt</h3>
                                    <p>
                                        Because Welsh students borrow less (due to higher grant portions), they face distinct advantages in loan repayment:
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium mb-2">Three-Year Degree Comparison (Household Income £25,000):</p>
                                        <p className="mb-2">
                                            <strong>Welsh Student Total Debt:</strong>
                                        </p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Tuition fees: 3 × £9,250 = £27,750</li>
                                            <li>Maintenance loans: 3 × £3,825 = £11,475</li>
                                            <li>Total debt: £39,225</li>
                                        </ul>
                                        <p className="mb-2">
                                            <strong>English Student Total Debt (Plan 5):</strong>
                                        </p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Tuition fees: 3 × £9,250 = £27,750</li>
                                            <li>Maintenance loans: 3 × £10,227 = £30,681</li>
                                            <li>Total debt: £58,431</li>
                                        </ul>
                                        <p>
                                            <strong>Difference: Welsh student graduates with £19,206 less debt</strong>
                                        </p>
                                    </div>

                                    <p>
                                        This lower debt particularly benefits middle to high earners who are more likely to repay their loans in full before the 30-year write-off. Lower-income graduates benefit from the same income-contingent repayment system regardless of total debt.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Interest Accrual and Total Repayment</h3>
                                    <p>
                                        Plan 2 interest rates vary based on income, affecting total amounts repaid:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Interest Rate Structure:</p>
                                        <ul className="list-disc pl-6">
                                            <li>While studying: RPI + 3% (currently around 4.3% as of 2024)</li>
                                            <li>After graduation, earning below £27,295: RPI only</li>
                                            <li>Earning £27,295 to £49,130: Gradually increases from RPI to RPI + 3%</li>
                                            <li>Earning above £49,130: RPI + 3%</li>
                                        </ul>
                                    </div>

                                    <p>
                                        Higher earners accumulate more interest, but because repayments are also higher, this often results in faster loan clearance. Lower earners pay less interest but make smaller repayments, with most benefiting from write-off after 30 years.
                                    </p>

                                    <div className="mt-6 text-center">
                                        <Link
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                                            href="/calculators/plan-2-student-loan-calculator/"
                                        >
                                            Calculate Your Plan 2 Repayments
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Comparison */}
                            <section id="comparison" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Comparing Welsh vs English Systems
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Direct comparison between Welsh and English student finance systems highlights the distinct advantages of the Welsh approach for students from lower and middle-income households.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">System-Wide Comparison</h3>

                                    <div className="overflow-x-auto my-6">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-gray-800">Feature</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">Welsh Students</th>
                                                    <th className="px-4 py-3 text-left text-gray-800">English Students (Plan 5)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-3">Funding Body</td>
                                                    <td className="px-4 py-3">Student Finance Wales</td>
                                                    <td className="px-4 py-3">Student Finance England</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Tuition Fee Loan</td>
                                                    <td className="px-4 py-3">Up to £9,250 (loan)</td>
                                                    <td className="px-4 py-3">Up to £9,250 (loan)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Maintenance Grant</td>
                                                    <td className="px-4 py-3">£1,000 - £8,100 (non-repayable)</td>
                                                    <td className="px-4 py-3">£0</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Maintenance Loan</td>
                                                    <td className="px-4 py-3">£2,610 - £9,710</td>
                                                    <td className="px-4 py-3">Up to £10,227</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Repayment Plan</td>
                                                    <td className="px-4 py-3">Plan 2</td>
                                                    <td className="px-4 py-3">Plan 5</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Repayment Threshold</td>
                                                    <td className="px-4 py-3">£27,295</td>
                                                    <td className="px-4 py-3">£25,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Interest Rate</td>
                                                    <td className="px-4 py-3">RPI to RPI + 3%</td>
                                                    <td className="px-4 py-3">RPI only</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3">Write-Off Period</td>
                                                    <td className="px-4 py-3">30 years</td>
                                                    <td className="px-4 py-3">40 years</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Debt Comparison by Income Band</h3>
                                    <p>
                                        For a three-year degree living away from home outside London:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Household Income £18,370 or Less:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Welsh: £27,750 (tuition) + £7,830 (maintenance) = £35,580 total debt</li>
                                            <li>English: £27,750 (tuition) + £30,681 (maintenance) = £58,431 total debt</li>
                                            <li>
                                                <strong>Difference: £22,851 less debt for Welsh student</strong>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Household Income £40,000:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Welsh: £27,750 (tuition) + £19,710 (maintenance) = £47,460 total debt</li>
                                            <li>English: £27,750 (tuition) + £30,681 (maintenance) = £58,431 total debt</li>
                                            <li>
                                                <strong>Difference: £10,971 less debt for Welsh student</strong>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Household Income £59,200 or More:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Welsh: £27,750 (tuition) + £29,130 (maintenance) = £56,880 total debt</li>
                                            <li>English: £27,750 (tuition) + £30,681 (maintenance) = £58,431 total debt</li>
                                            <li>
                                                <strong>Difference: £1,551 less debt for Welsh student</strong>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Advantages of Welsh System</h3>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>
                                            <strong>Lower total debt:</strong> Significantly reduced borrowing, especially for lower and middle-income students
                                        </li>
                                        <li>
                                            <strong>Universal grant element:</strong> All students receive at least £1,000 non-repayable grant
                                        </li>
                                        <li>
                                            <strong>Higher repayment threshold:</strong> Plan 2&apos;s £27,295 threshold vs Plan 5&apos;s £25,000
                                        </li>
                                        <li>
                                            <strong>Shorter write-off period:</strong> 30 years vs 40 years for English Plan 5 students
                                        </li>
                                        <li>
                                            <strong>Reduced interest for low earners:</strong> RPI-only interest for those earning under threshold
                                        </li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Potential Disadvantages</h3>
                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>
                                            <strong>Higher interest rates:</strong> Plan 2 can charge up to RPI + 3% vs Plan 5&apos;s RPI only
                                        </li>
                                        <li>
                                            <strong>Benefits high earners most:</strong> Those who fully repay see the greatest benefit from lower borrowing
                                        </li>
                                        <li>
                                            <strong>Complex means testing:</strong> Grant-loan split calculation more complicated than English all-loan system
                                        </li>
                                    </ul>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Overall Assessment: The Welsh system significantly benefits students from lower and middle-income households through generous grant provision, while maintaining the same income-contingent repayment protections as English students.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Application Process */}
                            <section id="application-process" className="max-w-6xl mx-auto mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                                    Application Process and Timeline
                                </h2>

                                <div className="prose max-w-none text-gray-600">
                                    <p>
                                        Applying for Welsh student finance follows a similar process to other UK nations, but you must apply through Student Finance Wales regardless of where in the UK you plan to study.
                                    </p>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step-by-Step Application Guide</h3>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ol className="list-decimal pl-6">
                                            <li className="mb-3">
                                                <strong>Create an account:</strong> Register at{" "}
                                                <a
                                                    href="https://www.studentfinancewales.co.uk/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    studentfinancewales.co.uk
                                                </a>{" "}
                                                using your email address and personal details
                                            </li>
                                            <li className="mb-3">
                                                <strong>Confirm your course:</strong> Ensure you have your university and course details ready (UCAS will send confirmation)
                                            </li>
                                            <li className="mb-3">
                                                <strong>Complete the application:</strong> Fill in all sections including personal details, course information, and previous study
                                            </li>
                                            <li className="mb-3">
                                                <strong>Provide household income:</strong> Submit parental or partner income details if applying for means-tested support
                                            </li>
                                            <li className="mb-3">
                                                <strong>Upload supporting documents:</strong> Provide proof of identity, residency, and income as requested
                                            </li>
                                            <li className="mb-3">
                                                <strong>Submit application:</strong> Review all information and submit before the deadline
                                            </li>
                                            <li className="mb-3">
                                                <strong>Await decision:</strong> SFW typically processes applications within 4-6 weeks
                                            </li>
                                            <li className="mb-3">
                                                <strong>Accept finance offer:</strong> Log in to accept the loans and grants offered
                                            </li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Application Timeline</h3>
                                    <p>Key dates and deadlines for student finance applications:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <ul className="list-disc pl-6">
                                            <li>
                                                <strong>Applications open:</strong> Usually early spring (February/March) for September start
                                            </li>
                                            <li>
                                                <strong>Early application deadline:</strong> End of May for priority processing
                                            </li>
                                            <li>
                                                <strong>Standard deadline:</strong> Early June to ensure funds available at course start
                                            </li>
                                            <li>
                                                <strong>Final deadline:</strong> Usually nine months after course start (late applications accepted but delayed)
                                            </li>
                                            <li>
                                                <strong>Reapplication:</strong> Must reapply each academic year, typically from April onwards
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                                        <p className="font-medium">
                                            Important: Apply as early as possible, even if you haven&apos;t received all your university offers. Early applications are more likely to have funding in place for the start of term.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Required Documentation</h3>
                                    <p>Typical documents needed for your application:</p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Proof of identity (passport, birth certificate, or UK driving licence)</li>
                                        <li>Evidence of UK residency for three years</li>
                                        <li>National Insurance number (if you have one)</li>
                                        <li>Bank account details for payment</li>
                                        <li>Parental or partner income evidence (P60, tax return, payslips)</li>
                                        <li>Evidence of any benefits received</li>
                                        <li>Proof of any special circumstances (care leaver status, estrangement, etc.)</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Annual Reapplication</h3>
                                    <p>
                                        Student finance is not automatically renewed each year. You must reapply annually, typically from April for the following academic year. The process is simpler than the initial application as many details carry over, but you must:
                                    </p>

                                    <ul className="list-disc pl-6 mt-3 mb-6">
                                        <li>Confirm your course and university details</li>
                                        <li>Update household income information</li>
                                        <li>Report any changes to personal circumstances</li>
                                        <li>Confirm your living arrangements for the coming year</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment Schedule</h3>
                                    <p>Once approved, your student finance is paid according to a set schedule:</p>

                                    <div className="bg-gray-50 rounded-lg p-4 my-4">
                                        <p className="font-medium mb-2">Tuition Fee Loan:</p>
                                        <ul className="list-disc pl-6 mb-4">
                                            <li>Paid directly to your university in three installments (one per term)</li>
                                            <li>You never see this money; it goes straight to the institution</li>
                                        </ul>
                                        <p className="font-medium mb-2">Maintenance Grant and Loan:</p>
                                        <ul className="list-disc pl-6">
                                            <li>Paid directly into your bank account</li>
                                            <li>Usually paid at the start of each term (September, January, April)</li>
                                            <li>First payment often delayed by 1-2 weeks after term starts</li>
                                            <li>Final year students receive reduced final payment</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <Link
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block"
                                            href="https://www.studentfinancewales.co.uk/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Apply Through Student Finance Wales
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* CTA */}
                            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                                <div className="text-center space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Welsh Student Finance</h2>
                                    <p className="text-lg text-blue-100">
                                        Use our calculators to understand your grant-loan combination and plan your finances
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link
                                            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                                            href="/calculators/plan-2-student-loan-calculator/"
                                        >
                                            Calculate Plan 2 Repayments
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
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plan 2 Student Loans Explained</h3>
                                        <p className="text-gray-600">
                                            Complete guide to Plan 2 repayments for Welsh students
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
                                            Calculate the lifetime cost of your student loans with grant benefits
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
                                            Compare Welsh student finance with other UK nations
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