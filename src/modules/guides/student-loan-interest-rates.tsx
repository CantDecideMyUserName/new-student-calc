import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const StudentLoanInterestRates: React.FC = () => {
    const tocItems = [
        { id: "current-rates", title: "Current Interest Rates (2023)", level: 2 },
        { id: "how-calculated", title: "How Student Loan Interest Rates Are Calculated", level: 2 },
        { id: "does-it-matter", title: "Does Interest Rate Actually Matter?", level: 2 },
        { id: "historical-rates", title: "Historical Interest Rates", level: 2 },
        { id: "plan-comparisons", title: "Interest Rate Comparisons Between Plans", level: 2 },
        { id: "income-impact", title: "How Your Income Affects Interest Rates", level: 2 },
        { id: "overpayment-decision", title: "Should You Make Voluntary Overpayments?", level: 2 },
        { id: "taking-control", title: "Taking Control of Your Student Loan Interest", level: 2 },
    ];

    return (
        <div className="bg-white">
            {/* Header Section with Breadcrumbs */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
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
                                <Link className="hover:text-blue-700 hover:underline" href="/guides/">
                                    Guides
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
                                    Student Loan Interest Rates
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        UK Student Loan Interest Rates: Complete Guide
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding current interest rates for all UK student loan plans, how they&apos;re calculated, and whether they actually matter for your repayments.
                    </p>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    {/* Main Content */}
                    <div className="lg:flex-1 lg:min-w-0">
                        {/* Introduction */}
                        <section className="mb-8">
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                Student loan interest rates appear prominently in financial news, sparking anxiety among borrowers who watch their loan balances grow monthly. The reality, however, is more nuanced than headlines suggest. For most UK graduates, the interest rate on their student loan has minimal practical impact on their finances. This isn&apos;t because the rates are low—some reach 7.3%—but because of how UK student loans fundamentally work.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Unlike conventional loans where you pay a fixed amount monthly based on the balance and interest rate, UK student loan repayments are calculated as a percentage of income above a threshold. Whether your loan balance is £30,000 or £60,000, whether the interest rate is 1.75% or 7.3%, your monthly payment remains identical if your income is the same. The interest rate only determines how quickly the balance grows and whether you&apos;ll fully repay before the loan is written off after 30 years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Government figures suggest 75-80% of recent graduates will never fully repay their loans before write-off. For these borrowers, higher interest rates are psychologically uncomfortable but financially irrelevant. The extra interest accrued each month increases a balance that will eventually be cancelled. It&apos;s like watching a debt grow that you know you&apos;ll never have to fully repay.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Interest rates do matter for higher earners likely to repay in full, those considering voluntary overpayments, and anyone trying to understand why their balance behaves unexpectedly. This guide breaks down current rates for every plan type, explains exactly how they&apos;re calculated, and helps you determine whether your loan&apos;s interest rate actually affects your financial situation or is just noise to ignore.
                            </p>
                        </section>

                        {/* Current Interest Rates */}
                        <section id="current-rates" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Current Interest Rates (2023)
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Interest rates vary significantly between loan plans, reflecting different policy approaches across England, Wales, Scotland, and Northern Ireland:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 1</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">1.75%</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Lower of Bank of England base rate + 1% or RPI
                                    </p>
                                    <div className="bg-white p-3 rounded mt-2">
                                        <p className="text-gray-700 text-sm"><strong>Applies to:</strong></p>
                                        <ul className="list-disc ml-6 text-gray-700 text-sm">
                                            <li>English/Welsh students who started before September 2012</li>
                                            <li>Scottish and Northern Irish students</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 2</h3>
                                    <p className="text-3xl font-bold text-purple-600 mb-2">Variable: 4.3%-7.3%</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        RPI to RPI + 3% (income dependent)
                                    </p>
                                    <div className="bg-white p-3 rounded mt-2">
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• While studying: <strong>7.3%</strong> (RPI + 3%)</li>
                                            <li>• After graduation, earning below £27,295: <strong>4.3%</strong> (RPI only)</li>
                                            <li>• Earning £27,295-£49,130: <strong>4.3%-7.3%</strong> (sliding scale)</li>
                                            <li>• Earning above £49,130: <strong>7.3%</strong> (RPI + 3%)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 4</h3>
                                    <p className="text-3xl font-bold text-green-600 mb-2">1.75%</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Lower of Bank of England base rate + 1% or RPI
                                    </p>
                                    <div className="bg-white p-3 rounded mt-2">
                                        <p className="text-gray-700 text-sm"><strong>Applies to:</strong> Scottish students who started September 2007 onwards</p>
                                    </div>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 5</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-2">4.3%</p>
                                    <p className="text-gray-700 text-sm mb-2">
                                        RPI only (both during and after study)
                                    </p>
                                    <div className="bg-white p-3 rounded mt-2">
                                        <p className="text-gray-700 text-sm"><strong>Applies to:</strong> English students who started September 2023 onwards</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Postgraduate Loan</h3>
                                <p className="text-3xl font-bold text-red-600 mb-2">7.3%</p>
                                <p className="text-gray-700 text-sm mb-2">
                                    RPI + 3% throughout the entire loan
                                </p>
                                <div className="bg-white p-3 rounded mt-2">
                                    <p className="text-gray-700 text-sm"><strong>Applies to:</strong> Master&apos;s and doctoral loans in England and Wales</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    <strong>Note:</strong> Rates as of September 2023. RPI figure used: 4.3%. Interest rates are reviewed annually and adjust based on inflation measures.
                                </p>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Source:</strong>{' '}
                                    <a
                                        className="text-blue-600 underline hover:text-blue-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.gov.uk/guidance/how-interest-is-calculated-plan-2"
                                    >
                                        Student Loans Company
                                    </a>
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Use our{' '}
                                    <Link target="_blank" href="/calculators/plan-2-student-loan-calculator/" className="text-blue-600 underline hover:text-blue-800">
                                        Plan 2 Calculator
                                    </Link>
                                    ,{' '}
                                    <Link target="_blank" href="/calculators/plan-5-student-loan-calculator/" className="text-blue-600 underline hover:text-blue-800">
                                        Plan 5 Calculator
                                    </Link>
                                    , or{' '}
                                    <Link target="_blank" href="/calculators/postgraduate-loan-calculator/" className="text-blue-600 underline hover:text-blue-800">
                                        Postgraduate Loan Calculator
                                    </Link>
                                    {' '}to see how interest affects your specific loan balance over time.
                                </p>
                            </div>
                        </section>

                        {/* How Interest Rates Are Calculated */}
                        <section id="how-calculated" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How Student Loan Interest Rates Are Calculated
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                UK student loan interest rates are primarily based on either the Retail Price Index (RPI) inflation measure, the Bank of England base rate, or a combination of both:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 1 and Plan 4 Interest Formula</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        For Plan 1 and Plan 4 loans, the interest rate is set at the <strong>lower of:</strong>
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>The RPI inflation rate (measured in the previous March)</li>
                                        <li>The Bank of England base rate plus 1%</li>
                                    </ul>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Example calculation (March 2023):</h4>
                                        <ul className="text-gray-700 text-sm">
                                            <li>RPI (March 2023): 4.3%</li>
                                            <li>Bank of England base rate: 4.25%</li>
                                            <li>Base rate + 1%: 5.25%</li>
                                            <li><strong>Interest rate applied: 4.3%</strong> (the lower of the two)</li>
                                        </ul>
                                        <p className="text-gray-700 text-sm mt-2">
                                            This protective mechanism ensures that if inflation is high but the Bank of England base rate remains low, your interest rate stays relatively low, protecting borrowers during high inflation periods.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 2 Interest Formula</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Plan 2 has the most complex interest structure, varying based on your study status and income:
                                    </p>

                                    <div className="space-y-3 mt-3">
                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">While studying:</h4>
                                            <p className="text-gray-700 text-sm">RPI + 3% = <strong>7.3%</strong> (with current RPI of 4.3%)</p>
                                        </div>

                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">After graduation:</h4>
                                            <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                                <li><strong>Earning below £27,295:</strong> RPI only = 4.3%</li>
                                                <li><strong>Earning between £27,295 and £49,130:</strong> Interest increases on a sliding scale from RPI to RPI + 3%</li>
                                                <li><strong>Earning over £49,130:</strong> RPI + 3% = 7.3%</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Sliding scale calculation:</h4>
                                            <p className="text-gray-700 text-sm mb-2">
                                                For incomes between thresholds, the formula is:
                                            </p>
                                            <p className="text-gray-700 text-sm font-mono bg-gray-100 p-2 rounded">
                                                Rate = RPI + [(Income - £27,295) ÷ (£49,130 - £27,295)] × 3%
                                            </p>
                                            <div className="mt-2 space-y-1">
                                                <p className="text-gray-700 text-sm"><strong>Example:</strong> Earning £35,000</p>
                                                <ul className="text-gray-700 text-sm ml-4">
                                                    <li>Above threshold: £35,000 - £27,295 = £7,705</li>
                                                    <li>Range: £49,130 - £27,295 = £21,835</li>
                                                    <li>Proportion: £7,705 ÷ £21,835 = 0.353</li>
                                                    <li>Additional rate: 0.353 × 3% = 1.06%</li>
                                                    <li><strong>Total rate: 4.3% + 1.06% = 5.36%</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 text-sm mt-3">
                                        This progressive structure means higher earners pay more interest, though the actual repayment amount still depends on income, not the loan balance or interest rate.
                                    </p>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 5 Interest Formula</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Plan 5 simplifies the interest calculation compared to Plan 2:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Interest is set at <strong>RPI only</strong>, both during and after your studies</li>
                                        <li>Unlike Plan 2, there&apos;s no additional percentage added based on income</li>
                                        <li>Current rate: <strong>4.3%</strong> (matching the RPI rate)</li>
                                    </ul>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <p className="text-gray-700 text-sm">
                                            This makes Plan 5 interest rates more predictable and generally lower than Plan 2 for higher earners. A graduate earning £50,000 would pay 7.3% interest on Plan 2 but only 4.3% on Plan 5—a 3% difference.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Postgraduate Loan Interest Formula</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Postgraduate loans have the simplest formula, but potentially the highest rate:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Interest is set at <strong>RPI + 3%</strong> throughout the entire life of the loan</li>
                                        <li>This rate applies regardless of income or study status</li>
                                        <li>Current rate: <strong>7.3%</strong></li>
                                    </ul>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <p className="text-gray-700 text-sm">
                                            Unlike undergraduate Plan 2, postgraduate loans don&apos;t have income-based interest adjustments. Whether you earn £22,000 or £100,000, the interest rate remains constant at RPI + 3%.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When are interest rates set?</h3>
                                <p className="text-gray-700 text-sm">
                                    Interest rates are reviewed annually and typically announced in late summer for the following academic/tax year. The RPI figure used is from the previous March. For example, the September 2023 rates use the March 2023 RPI of 4.3%.
                                </p>
                            </div>
                        </section>

                        {/* Does Interest Rate Actually Matter */}
                        <section id="does-it-matter" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Does Interest Rate Actually Matter?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A unique feature of UK student loans is that the interest rate often has less impact on your finances than you might expect:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Repayments Are Based on Income, Not Balance</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Unlike conventional loans, your monthly repayments are calculated as a percentage of your income above the repayment threshold—not based on the size of your loan or the interest rate.
                                    </p>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Example (Plan 2):</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-gray-700 text-sm mb-1"><strong>Scenario A:</strong></p>
                                                <ul className="text-gray-700 text-sm">
                                                    <li>Loan balance: £30,000</li>
                                                    <li>Interest rate: 4.3%</li>
                                                    <li>Annual salary: £32,000</li>
                                                    <li><strong>Annual repayment: £423.45</strong></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 text-sm mb-1"><strong>Scenario B:</strong></p>
                                                <ul className="text-gray-700 text-sm">
                                                    <li>Loan balance: £60,000</li>
                                                    <li>Interest rate: 7.3%</li>
                                                    <li>Annual salary: £32,000</li>
                                                    <li><strong>Annual repayment: £423.45</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm mt-2">
                                            Despite doubling the loan balance and increasing the interest rate by 3%, the monthly payment is identical because repayments are calculated as: (£32,000 - £27,295) × 9% = £423.45.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Most Loans Are Never Fully Repaid</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Government figures suggest that around <strong>75-80% of recent graduates</strong> with Plan 2 loans will never fully repay their loans before they&apos;re written off after 30 years. Similar projections exist for Plan 5 loans.
                                    </p>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">What this means:</h4>
                                        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                            <li>The interest rate has little practical impact on your finances if your loan will be written off</li>
                                            <li>A larger balance due to higher interest doesn&apos;t matter if the loan will be cancelled anyway</li>
                                            <li>You&apos;re effectively paying a 9% &quot;graduate tax&quot; on earnings above the threshold, not repaying a traditional loan</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">Example: Average earner</h4>
                                        <p className="text-gray-700 text-sm">
                                            Graduate starts with £45,000 debt at 7.3% interest. Earns £30,000-£45,000 over career (average £37,500). After 30 years of repayments totaling approximately £28,000, the remaining balance of £85,000+ (grown due to interest) is written off. The 7.3% interest rate increased the written-off amount but didn&apos;t increase the total amount paid.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When Interest Rates Do Matter</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Interest becomes more important in these scenarios:
                                    </p>

                                    <div className="space-y-3 mt-3">
                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Higher earners likely to repay in full:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you&apos;re earning £60,000+ and likely to clear your loan within 20 years, the interest rate significantly affects your total repayment. At 7.3% vs 4.3%, you might pay £5,000-£10,000 more in total.
                                            </p>
                                        </div>

                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Voluntary repayments:</h4>
                                            <p className="text-gray-700 text-sm">
                                                If you&apos;re considering making extra payments, the interest rate affects whether this makes financial sense. With a 7.3% rate, overpaying might be worthwhile. With a 1.75% rate, investing that money elsewhere likely yields better returns.
                                            </p>
                                        </div>

                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Psychological impact:</h4>
                                            <p className="text-gray-700 text-sm">
                                                Watching your loan balance grow each month can be psychologically distressing, even if it doesn&apos;t affect your monthly repayments or total amount you&apos;ll pay. Understanding that most of this growth will be written off can provide peace of mind.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Common misconception:</h3>
                                    <p className="text-gray-700 text-sm">
                                        <strong>&quot;My loan balance is growing each month, so I&apos;m falling behind and need to pay more.&quot;</strong>
                                    </p>
                                    <p className="text-gray-700 text-sm mt-2">
                                        This is false for most graduates. If you&apos;re earning below or near the threshold, your monthly repayments won&apos;t cover the interest, causing the balance to grow. This is <strong>completely normal and expected</strong> for 75-80% of borrowers. The system is designed this way. You&apos;re not &quot;falling behind&quot;—you&apos;re paying exactly what you should based on your income, and the excess will be written off.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Use our{' '}
                                    <Link target="_blank" href="/calculators/investment-vs-overpayment-calculator/" className="text-blue-600 underline hover:text-blue-800">
                                        Investment vs Overpayment Calculator
                                    </Link>
                                    {' '}to see whether making voluntary repayments makes financial sense given your interest rate and expected earnings.
                                </p>
                            </div>
                        </section>

                        {/* Historical Interest Rates */}
                        <section id="historical-rates" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Historical Interest Rates
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Interest rates on student loans have fluctuated significantly over time, primarily due to changes in inflation (RPI) and the Bank of England base rate:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 1 and Plan 4 Historical Rates</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Being linked to the lower of RPI or Bank Rate + 1%, these plans have seen relatively stable and low interest rates:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>2016-2020:</strong> Generally between 1.1% and 1.75%</li>
                                        <li><strong>2020-2022:</strong> Dropped to just 0.1% due to historically low Bank of England rates during COVID-19</li>
                                        <li><strong>2022-2023:</strong> Increased to current rate of 1.75% as Bank Rate rose to combat inflation</li>
                                    </ul>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <p className="text-gray-700 text-sm">
                                            The protective &quot;lower of&quot; mechanism meant Plan 1 and 4 borrowers were shielded from the high inflation rates of 2022-2023, paying just 1.75% while RPI exceeded 11%.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Plan 2 Historical Rates</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Being primarily linked to RPI, Plan 2 has seen more volatility:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>2012-2016:</strong> Generally between 3.3% and 5.5% for studying/higher earners</li>
                                        <li><strong>2017-2022:</strong> Increased to a peak of RPI + 3% = 6.3% for higher earners</li>
                                        <li><strong>2022-2023:</strong> Reached a maximum of 7.3% (RPI + 3%) for higher earners as inflation surged</li>
                                        <li><strong>2023:</strong> Rate capped at 7.3% despite RPI exceeding 11% (due to government intervention)</li>
                                    </ul>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <h4 className="font-semibold text-gray-800 text-sm mb-1">2022-2023 crisis:</h4>
                                        <p className="text-gray-700 text-sm">
                                            When inflation spiked to 11%+, the RPI + 3% formula would have resulted in interest rates exceeding 14%. The government intervened to cap rates at 7.3%, preventing extreme charges but still leaving Plan 2 borrowers with significantly higher rates than other plans.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Postgraduate Loan Historical Rates</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Following the same RPI + 3% formula as Plan 2 while studying:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>2016-2021:</strong> Generally between 4% and 5.6%</li>
                                        <li><strong>2022-2023:</strong> Peaked at 7.3%</li>
                                    </ul>
                                    <div className="bg-white p-3 rounded mt-3">
                                        <p className="text-gray-700 text-sm">
                                            Postgraduate borrowers face the same high rates as Plan 2 higher earners but without the income-based adjustments. Even earning £22,000, you pay 7.3% interest.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Future outlook:</h3>
                                <p className="text-gray-700 text-sm">
                                    Interest rates will continue to fluctuate with inflation and Bank of England policy. As inflation moderates from 2022-2023 peaks, rates are expected to gradually decrease, though they&apos;ll remain tied to economic conditions rather than being fixed.
                                </p>
                            </div>
                        </section>

                        {/* Plan Comparisons */}
                        <section id="plan-comparisons" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Interest Rate Comparisons Between Plans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Comparing interest rates across plans reveals significant policy differences:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Loan Plan</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Current Rate</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Income-Based?</th>
                                            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Inflation Protection?</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b text-gray-700">Plan 1</td>
                                            <td className="px-4 py-2 border-b text-gray-700">1.75%</td>
                                            <td className="px-4 py-2 border-b text-gray-700">No</td>
                                            <td className="px-4 py-2 border-b text-gray-700">Yes (capped at BoE + 1%)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b text-gray-700">Plan 2</td>
                                            <td className="px-4 py-2 border-b text-gray-700">4.3%-7.3%</td>
                                            <td className="px-4 py-2 border-b text-gray-700">Yes (sliding scale)</td>
                                            <td className="px-4 py-2 border-b text-gray-700">Partial (capped at RPI + 3%)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b text-gray-700">Plan 4</td>
                                            <td className="px-4 py-2 border-b text-gray-700">1.75%</td>
                                            <td className="px-4 py-2 border-b text-gray-700">No</td>
                                            <td className="px-4 py-2 border-b text-gray-700">Yes (capped at BoE + 1%)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b text-gray-700">Plan 5</td>
                                            <td className="px-4 py-2 border-b text-gray-700">4.3%</td>
                                            <td className="px-4 py-2 border-b text-gray-700">No</td>
                                            <td className="px-4 py-2 border-b text-gray-700">No (tracks RPI)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-2 border-b text-gray-700">Postgraduate</td>
                                            <td className="px-4 py-2 border-b text-gray-700">7.3%</td>
                                            <td className="px-4 py-2 border-b text-gray-700">No</td>
                                            <td className="px-4 py-2 border-b text-gray-700">Partial (capped at RPI + 3%)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Best interest rates (currently):</h3>
                                    <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Plan 1 / Plan 4:</strong> 1.75% (most favorable)</li>
                                        <li><strong>Plan 2 (low earners):</strong> 4.3%</li>
                                        <li><strong>Plan 5:</strong> 4.3%</li>
                                        <li><strong>Plan 2 (high earners):</strong> 7.3%</li>
                                        <li><strong>Postgraduate:</strong> 7.3% (least favorable)</li>
                                    </ol>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Most predictable rates:</h3>
                                    <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Plan 5:</strong> Simple RPI formula</li>
                                        <li><strong>Postgraduate:</strong> Simple RPI + 3%</li>
                                        <li><strong>Plan 1 / Plan 4:</strong> Lower-of mechanism adds complexity</li>
                                        <li><strong>Plan 2:</strong> Sliding scale based on income (most complex)</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Use our{' '}
                                    <Link target="_blank" href="/compare/plan-2-vs-plan-5/" className="text-blue-600 underline hover:text-blue-800">
                                        Plan 2 vs Plan 5 Comparison
                                    </Link>
                                    {' '}to see how interest rate differences affect your total repayment over time.
                                </p>
                            </div>
                        </section>

                        {/* Income Impact */}
                        <section id="income-impact" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How Your Income Affects Interest Rates
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Only Plan 2 loans have income-dependent interest rates. Understanding this mechanism helps Plan 2 borrowers anticipate rate changes as their career progresses:
                            </p>

                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Plan 2 Income Bands and Interest Rates</h3>

                                <div className="overflow-x-auto mt-3">
                                    <table className="min-w-full bg-white border border-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Annual Income</th>
                                                <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Interest Rate Formula</th>
                                                <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-900">Current Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">Below £27,295</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI only</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">4.3%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">£27,295</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI + 0%</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">4.3%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">£30,000</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI + 0.37%</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">4.67%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">£35,000</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI + 1.06%</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">5.36%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">£40,000</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI + 1.75%</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">6.05%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">£45,000</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI + 2.43%</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">6.73%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="px-4 py-2 border-b text-gray-700">£49,130+</td>
                                                <td className="px-4 py-2 border-b text-gray-700">RPI + 3%</td>
                                                <td className="px-4 py-2 border-b font-semibold text-gray-700">7.3%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Career progression example:</h3>
                                    <div className="space-y-2 mt-2">
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Age 22 (graduate):</strong> £25,000 salary → 4.3% interest</p>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Age 25:</strong> £32,000 salary → 4.95% interest</p>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Age 30:</strong> £42,000 salary → 6.32% interest</p>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Age 35:</strong> £55,000 salary → 7.3% interest (maximum)</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        As your career progresses and salary increases, your interest rate automatically increases, even without any change in policy or inflation.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Common scenarios:</h3>
                                    <div className="space-y-2 mt-2">
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Promotion/raise:</strong> Interest rate increases immediately when new salary reported to HMRC</p>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Job loss/reduction:</strong> Interest rate decreases to RPI only if income falls below threshold</p>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Self-employment:</strong> Interest based on previous year&apos;s Self Assessment income</p>
                                        </div>
                                        <div className="bg-white p-2 rounded">
                                            <p className="text-gray-700 text-sm"><strong>Maternity/paternity:</strong> Interest rate typically decreases due to reduced income</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Overpayment Decision */}
                        <section id="overpayment-decision" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Should You Make Voluntary Overpayments?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Interest rates are the primary factor in determining whether voluntary overpayments make financial sense:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When overpayments likely make sense:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>High interest rate (6%+):</strong> Paying down a 7.3% loan is equivalent to a guaranteed 7.3% return on investment</li>
                                        <li><strong>High income:</strong> Earning £50,000+ and likely to fully repay within 20 years</li>
                                        <li><strong>Rapid career growth:</strong> Salary increasing quickly, loan will be repaid soon anyway</li>
                                        <li><strong>Large windfall:</strong> Received inheritance, bonus, or other one-time payment</li>
                                    </ul>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">When overpayments likely DON&apos;T make sense:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Low interest rate (below 4%):</strong> You can likely earn more by investing elsewhere</li>
                                        <li><strong>Average income:</strong> Loan will likely be written off, so overpayments just increase the amount written off</li>
                                        <li><strong>Uncertain career:</strong> Might have periods of low income or unemployment</li>
                                        <li><strong>Other debts:</strong> Credit cards, personal loans, or mortgage at higher rates should be prioritized</li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Break-even analysis example:</h3>
                                    <div className="space-y-2 mt-2">
                                        <p className="text-gray-700 text-sm">
                                            <strong>Scenario:</strong> Plan 2 loan, £40,000 balance, earning £45,000 (6.73% interest rate), considering £5,000 overpayment
                                        </p>
                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Option A: Make £5,000 overpayment</h4>
                                            <ul className="text-gray-700 text-sm">
                                                <li>Saves ~£3,200 in interest over loan life</li>
                                                <li>Clears loan ~2 years earlier</li>
                                                <li>Effective return: 6.73% guaranteed</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-3 rounded">
                                            <h4 className="font-semibold text-gray-800 text-sm mb-1">Option B: Invest £5,000</h4>
                                            <ul className="text-gray-700 text-sm">
                                                <li>Assuming 7% average annual return</li>
                                                <li>After 15 years: ~£13,795</li>
                                                <li>Better outcome IF you actually fully repay the loan</li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700 text-sm mt-2">
                                            <strong>Verdict:</strong> If confident you&apos;ll fully repay, investing is slightly better. If uncertain, overpayment provides guaranteed return.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Use our{' '}
                                    <Link target="_blank" href="/calculators/investment-vs-overpayment-calculator/" className="text-blue-600 underline hover:text-blue-800">
                                        Investment vs Overpayment Calculator
                                    </Link>
                                    {' '}to model your specific situation and make an informed decision.
                                </p>
                            </div>
                        </section>

                        {/* Taking Control */}
                        <section id="taking-control" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Taking Control of Your Student Loan Interest
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding your interest rate isn&apos;t about obsessing over every percentage point. It&apos;s about making informed decisions and avoiding unnecessary anxiety:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Annual interest rate check:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Check current rate for your plan each September when rates are announced</li>
                                        <li>Calculate annual interest you&apos;ll accrue: (Balance × Rate)</li>
                                        <li>Compare to annual repayments: (Income - Threshold) × 9%</li>
                                        <li>Determine if balance will grow, shrink, or stay stable</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Decision points requiring interest rate consideration:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li><strong>Career change:</strong> Will reduced income affect interest rate (Plan 2 only)?</li>
                                        <li><strong>Windfall:</strong> Should you use it for overpayment or investment?</li>
                                        <li><strong>Job offer negotiation:</strong> How will salary increase affect interest rate and total repayment?</li>
                                        <li><strong>Emigration:</strong> Different rules apply; might want to clear loan before leaving</li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Mental health approach to interest rates:</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        If watching your balance grow causes anxiety:
                                    </p>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Remember: 75-80% of borrowers never fully repay. Balance growth is normal and expected.</li>
                                        <li>Focus on your monthly repayment (9% of income above threshold), not the balance</li>
                                        <li>Calculate your likely write-off amount to see the psychological &quot;debt&quot; that doesn&apos;t matter</li>
                                        <li>Consider not checking your balance more than once per year</li>
                                        <li>Reframe as a &quot;graduate tax&quot; rather than traditional debt</li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Resources and tools:</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                        <li>Check Student Loans Company website for official rate announcements</li>
                                        <li>Use student loan calculators to model different scenarios</li>
                                        <li>Consider speaking with a financial advisor if contemplating large overpayments</li>
                                        <li>Monitor government policy changes that might affect rates or thresholds</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mt-4">
                                Your student loan interest rate is one factor among many in your financial life. Understanding it empowers you to make informed decisions, but for most graduates, obsessing over it is counterproductive. Focus on your career growth, earning potential, and overall financial health. The loan system is designed to be income-contingent, making the interest rate less important than it would be for conventional debt.
                            </p>
                        </section>

                        {/* Final Call to Action */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Understand your interest rate. Model your scenarios. Make informed decisions. But don&apos;t let interest rate anxiety control your finances when, for most graduates, it has minimal practical impact on total lifetime repayments.
                            </h3>
                            <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                                <p className="text-gray-700 text-sm">
                                    Use our{' '}
                                    <Link target="_blank" href="/calculators/" className="text-blue-600 underline hover:text-blue-800">
                                        student loan calculators
                                    </Link>
                                    {' '}for interest calculations, repayment projections, overpayment analysis, and write-off estimations.
                                </p>
                            </div>
                        </section>

                        <DrLilaDesc />
                    </div>

                    {/* Sidebar - Table of Contents */}
                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default StudentLoanInterestRates;