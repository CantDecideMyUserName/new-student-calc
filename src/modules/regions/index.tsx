import Link from 'next/link'
import React from 'react'
import { MapPin, Landmark, Mountain, Building2, Anchor, ArrowLeftRight, GraduationCap } from 'lucide-react'

const RegionList = () => {
    return (
        <main className="flex-grow">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="space-y-12 pb-16">
                    {/* Hero */}
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
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </li>
                                    <li>
                                        <span className="font-medium text-gray-800" aria-current="page">
                                            Regions
                                        </span>
                                    </li>
                                </ol>
                            </nav>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Student Loans Differences by Region</h1>
                            <p className="text-xl text-gray-600">
                                Compare student loan systems across England, Scotland, Wales, and Northern Ireland - understand regional variations and cross-border implications
                            </p>
                        </div>
                    </section>

                    {/* UK Regional Differences */}
                    <section className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                            UK Regional Differences
                        </h2>

                        <div className="bg-blue-50 rounded-lg p-6 mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Student loan systems across England, Scotland, Wales, and Northern Ireland operate under separate administrations with distinct repayment thresholds, interest rates, and loan terms. English students typically borrow under Plan 2 or Plan 5 administered by the <a href="https://www.gov.uk/government/organisations/student-loans-company" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Student Loans Company (SLC)</a>, while Scottish students access SAAS funding with Plan 4 loans featuring lower interest rates. Welsh students receive additional grants through Student Finance Wales, and Northern Irish students have separate arrangements through Student Finance NI. Understanding your home nation's specific loan plan is essential for accurate repayment calculations, especially when studying or working across UK borders where different thresholds and write-off periods apply to your original loan agreement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link
                                href="/regions/england-student-loan-system/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-blue-600">
                                    <MapPin className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">England Student Loan System</h3>
                                <p className="text-gray-600 mb-4">
                                    Complete guide to Plan 2 and Plan 5 loans, SLC administration, and England-specific thresholds and rates.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">England</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/scotland-saas-loan-differences/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-blue-600">
                                    <Mountain className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Scotland SAAS Loan Differences</h3>
                                <p className="text-gray-600 mb-4">
                                    Scottish Plan 4 loans, SAAS funding, lower interest rates, and free tuition implications for repayments.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Scotland</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/wales-student-finance/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-blue-600">
                                    <Landmark className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Wales Student Finance</h3>
                                <p className="text-gray-600 mb-4">
                                    Welsh-specific grants, maintenance support, and how Welsh students access Plan 2 loans alongside additional funding.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Wales</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/northern-ireland-loans/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-blue-600">
                                    <Building2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Northern Ireland Student Loans</h3>
                                <p className="text-gray-600 mb-4">
                                    Plan 1 loans for NI students, Student Finance NI administration, and unique repayment terms for Northern Irish borrowers.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Northern Ireland</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/channel-islands-isle-of-man/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-blue-600">
                                    <Anchor className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Channel Islands & Isle of Man</h3>
                                <p className="text-gray-600 mb-4">
                                    Crown dependency funding arrangements, local grants, and how Jersey, Guernsey, and Isle of Man students access UK university finance.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Crown Dependencies</span>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Moving Between UK Nations */}
                    <section className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                            Moving Between UK Nations
                        </h2>

                        <div className="bg-green-50 rounded-lg p-6 mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Cross-border study and employment within the United Kingdom creates complex student loan scenarios where your original loan plan remains tied to your home nation regardless of where you study or work. A Scottish student with Plan 4 loans studying at an English university maintains their SAAS terms, while an English Plan 2 borrower working in Scotland still repays through HMRC using England's £27,295 threshold. Understanding these jurisdictional nuances is crucial when crossing borders for postgraduate study, as different nations offer varying loan products—Scottish postgraduates may access Plan 3 loans while studying in England. The <a href="https://www.gov.uk/repaying-your-student-loan" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UK Government's student loan repayment guidance</a> confirms that your repayment obligations follow your original loan agreement, not your current location, making it essential to track which nation's rules govern your specific circumstances when planning cross-border moves.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link
                                href="/regions/england-to-scotland-transfer/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-indigo-600">
                                    <ArrowLeftRight className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">England to Scotland Transfer</h3>
                                <p className="text-gray-600 mb-4">
                                    How Plan 2/5 loans work when studying or working in Scotland - threshold differences and HMRC deduction mechanics.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Cross-Border</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/welsh-student-english-uni/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-indigo-600">
                                    <ArrowLeftRight className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Welsh Student at English University</h3>
                                <p className="text-gray-600 mb-4">
                                    Combining Welsh grants with English tuition fees, Student Finance Wales administration, and post-graduation repayment location.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Wales-England</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/ni-student-gb-university/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-indigo-600">
                                    <ArrowLeftRight className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Northern Ireland Student in GB</h3>
                                <p className="text-gray-600 mb-4">
                                    Plan 1 loan implications when studying in England, Scotland, or Wales - threshold coordination and employment considerations.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">NI-Britain</span>
                                </div>
                            </Link>

                            <Link
                                href="/regions/scottish-postgrad-england/"
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
                            >
                                <div className="mb-4 text-indigo-600">
                                    <GraduationCap className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Scottish Postgrad in England</h3>
                                <p className="text-gray-600 mb-4">
                                    Plan 4 to Plan 3 transition scenarios, combined undergraduate-postgraduate loan management across borders.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Postgraduate</span>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                        <div className="text-center space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Regional Repayments</h2>
                            <p className="text-lg text-blue-100">
                                Use our calculators to see how your region&apos;s loan plan affects your monthly repayments and total cost.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                                    href="/calculators/"
                                >
                                    Try Our Calculators
                                </Link>
                                <Link
                                    className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                                    href="/plans/"
                                >
                                    Compare Loan Plans
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default RegionList

