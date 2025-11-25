import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const RetirementOutstandingLoans: React.FC = () => {
    const tocItems = [
        { id: "understanding-40-year-writeoff", title: "Understanding the 40-Year Write-Off", level: 2 },
        { id: "timeline-to-writeoff", title: "Your Timeline to Write-Off", level: 2 },
        { id: "debt-at-retirement", title: "How Much Debt at Retirement?", level: 2 },
        { id: "retirement-income-implications", title: "Retirement Income and Loan Freedom", level: 2 },
        { id: "career-earning-scenarios", title: "Retirement Scenarios by Career Earnings", level: 2 },
        { id: "pension-considerations", title: "State vs Private Pension Considerations", level: 2 },
        { id: "early-full-repayment", title: "Early vs Full Repayment Outcomes", level: 2 },
        { id: "real-retirement-scenarios", title: "Real Graduate Retirement Scenarios", level: 2 },
        { id: "retirement-planning", title: "Planning for Retirement with Student Loans", level: 2 },
        { id: "common-misconceptions", title: "Common Retirement Loan Misconceptions", level: 2 },
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
                                <Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">
                                    Student Loan Lifecycle
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
                                    Retirement: Outstanding Loans
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Retirement with Outstanding Student Loans: 40-Year Write-Off
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding student loan write-off at retirement age, outstanding balances, pension freedom, and why most graduates retire debt-free
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
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Under Plan 5, student loans automatically write off 40 years after the April you first became eligible to repay—regardless of outstanding balance. Graduate in 2027, your write-off date is April 2068 when you&apos;re 61-62 years old. This means approximately 70% of Plan 5 graduates will carry student loan debt into their early retirement years, only for it to vanish completely before traditional retirement age. The balance at write-off is irrelevant: whether you owe £10,000 or £150,000, both amounts disappear simultaneously.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s the counterintuitive reality that changes how you should think about student loans: for most moderate earners, the total amount borrowed doesn&apos;t affect total amount repaid. You pay 9% of income above £25,000 regardless of whether you borrowed £45,000 or £75,000. The debt accumulates interest faster than you repay it, your balance grows throughout your working life despite making payments, and at 40 years it writes off. Two graduates earning identical salaries pay identical amounts over their lifetimes—even if one borrowed £30,000 more for a foundation year, different living costs, or course changes.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This write-off mechanism fundamentally changes retirement planning. Unlike mortgage debt that must be cleared before comfortable retirement, or credit card debt that compounds into crisis, student loan debt gracefully exits your life just as retirement begins. Your state pension (currently £11,502/year, rising with inflation) arrives with no loan deductions. Your private pension withdrawals are yours completely. At age 62, you wake up one morning and £80,000+ of debt has simply vanished—you didn&apos;t pay it, it didn&apos;t bankrupt you, it just ceased to exist. This guide explains exactly how retirement intersects with Plan 5 loans, what to expect at different career earning levels, and why most retirement advice around &quot;clearing all debt&quot; doesn&apos;t apply to student loans.
                            </p>
                        </section>

                        {/* Understanding 40-Year Write-Off */}
                        <section id="understanding-40-year-writeoff" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Understanding the 40-Year Write-Off
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The 40-year write-off isn&apos;t a bug or loophole—it&apos;s a deliberate policy design that treats student loans as graduate taxes rather than traditional debt. Understanding this mechanism is essential for proper financial planning.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How the 40-Year Clock Works:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Start date:</strong> The April after you finish or leave your course (not graduation ceremony date, but when you complete final year or permanently withdraw).</p>
                                    <p><strong>Example:</strong> You finish your degree in June 2027. Your repayment start date is April 2028 (the first April after completion). Your write-off date is April 2068—exactly 40 years from April 2028.</p>
                                    <p><strong>Age at write-off:</strong> If you started university at 18 and took a 3-year course, you finish at 21, write-off at 61-62. If you did a 4-year course (with placement or foundation), you finish at 22, write-off at 62-63.</p>
                                    <p><strong>Irrelevant factors:</strong> Your employment status, earnings level, how much you&apos;ve repaid, outstanding balance, marriage status, number of children—none of these affect your write-off date. The clock runs independently of your circumstances.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Write-Off Examples by Course Completion Date:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Course End Date</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Repayment Start</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Write-Off Date</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Age at Write-Off*</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">June 2026</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2027</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2067</td>
                                                <td className="px-3 py-2 border-b text-xs">61</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">June 2027</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2028</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2068</td>
                                                <td className="px-3 py-2 border-b text-xs">61-62</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">June 2030</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2031</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2071</td>
                                                <td className="px-3 py-2 border-b text-xs">64-65</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">June 2035</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2036</td>
                                                <td className="px-3 py-2 border-b text-xs">April 2076</td>
                                                <td className="px-3 py-2 border-b text-xs">69-70</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    *Assumes starting university at age 18-19, completing 3-year degree. Add 1-2 years if you did foundation year, placement year, or started university later as mature student.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What &quot;Write-Off&quot; Actually Means:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    On your write-off date, the Student Loans Company:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>Cancels your entire outstanding balance (principal borrowed + accumulated interest)</li>
                                    <li>Notifies HMRC to stop loan deductions from your payroll immediately</li>
                                    <li>Updates your student loan account to show £0 balance</li>
                                    <li>Sends confirmation letter that your loan is fully written off</li>
                                    <li>Cannot reverse this decision—once written off, it&apos;s permanent</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Important:</strong> Write-off is automatic. You don&apos;t need to apply, prove financial hardship, or take any action. SLC systems track write-off dates and process them automatically. If you&apos;re still employed at write-off, your next payslip simply shows no student loan deduction.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Distinction: Write-Off vs Forgiveness</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Student loan write-off is NOT the same as debt forgiveness programs in other contexts:
                                </p>
                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>No credit impact:</strong> Written-off student loans don&apos;t appear on credit reports as &quot;defaulted&quot; or &quot;forgiven debt.&quot; They simply cease to exist with no negative record.</p>
                                    <p><strong>No tax liability:</strong> Unlike US student loan forgiveness which can trigger tax bills on forgiven amounts, UK write-off has zero tax implications. The government absorbs the loss.</p>
                                    <p><strong>No strings attached:</strong> You don&apos;t need to work in specific sectors (public service), meet income limits, or prove financial hardship. Everyone reaches write-off at 40 years regardless.</p>
                                    <p><strong>No moral judgment:</strong> The system is designed for most graduates not to fully repay. Write-off isn&apos;t a &quot;bailout&quot; for failure—it&apos;s the expected outcome for 70% of borrowers.</p>
                                </div>
                            </div>
                        </section>

                        {/* Timeline to Write-Off */}
                        <section id="timeline-to-writeoff" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Your Timeline to Write-Off
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding the 40-year journey from graduation to write-off helps contextualize how student loans fit into your broader financial life stages.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Life Stages with Student Loan Debt:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 21-30: Early Career (Years 0-9)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Employment:</strong> Graduate jobs, early career progression, frequent job changes</p>
                                            <p><strong>Typical salary range:</strong> £24k-£35k</p>
                                            <p><strong>Annual repayment:</strong> £0-£900 (many below threshold initially)</p>
                                            <p><strong>Loan balance trajectory:</strong> Growing rapidly (interest exceeds repayments)</p>
                                            <p><strong>Life events:</strong> First jobs, renting, possibly buying first home with partner</p>
                                            <p><strong>Loan impact:</strong> Small monthly deductions, barely noticeable. Debt growing but irrelevant to daily life</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 30-40: Established Career (Years 9-19)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Employment:</strong> Mid-level positions, some reaching senior roles</p>
                                            <p><strong>Typical salary range:</strong> £32k-£50k</p>
                                            <p><strong>Annual repayment:</strong> £630-£2,250</p>
                                            <p><strong>Loan balance trajectory:</strong> Still growing for most (interest outpaces repayment)</p>
                                            <p><strong>Life events:</strong> Homeownership, marriage, children, childcare costs</p>
                                            <p><strong>Loan impact:</strong> £50-£180/month deduction. Noticeable but manageable. Balance now £100k+ but write-off still provides safety net</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 40-50: Peak Earning Years (Years 19-29)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Employment:</strong> Senior positions, management, possibly consultancy</p>
                                            <p><strong>Typical salary range:</strong> £40k-£65k (some higher, some plateaued)</p>
                                            <p><strong>Annual repayment:</strong> £1,350-£3,600</p>
                                            <p><strong>Loan balance trajectory:</strong> High earners start making a dent; moderate earners still accumulating</p>
                                            <p><strong>Life events:</strong> Mortgage reducing, children approaching university age, increased pension contributions</p>
                                            <p><strong>Loan impact:</strong> £110-£300/month. Significant but accepted as fact of working life</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 50-60: Pre-Retirement (Years 29-39)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Employment:</strong> Senior roles, some considering retirement, some career changes</p>
                                            <p><strong>Typical salary range:</strong> £35k-£70k (wide variation: some peak, others wind down)</p>
                                            <p><strong>Annual repayment:</strong> £900-£4,050</p>
                                            <p><strong>Loan balance trajectory:</strong> High earners approaching full repayment; moderate earners still £80k+ balance</p>
                                            <p><strong>Life events:</strong> Mortgage paid off, children independent, serious pension planning</p>
                                            <p><strong>Loan impact:</strong> For high earners nearing payoff, it&apos;s frustrating. For most others, write-off visible on horizon brings relief</p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 61-62: Write-Off (Year 40)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>The milestone:</strong> Loan writes off automatically in April of your 40th repayment year</p>
                                            <p><strong>Outstanding balance:</strong> For moderate earners: £80k-£140k (doesn&apos;t matter—all written off)</p>
                                            <p><strong>What happens:</strong> Wake up one morning, balance is £0, deductions stop, debt vanished</p>
                                            <p><strong>Retirement status:</strong> Many still working part-time or full-time (State Pension age is 67+)</p>
                                            <p><strong>Life stage:</strong> Early retirement or working final years before State Pension starts</p>
                                            <p><strong>Financial relief:</strong> £150-£300/month that was going to loan deductions now stays in your pocket</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 62+: Post-Write-Off Life</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Income sources:</strong> Continued work (if chosen), private pension withdrawals, State Pension (from 67+)</p>
                                            <p><strong>No loan deductions:</strong> All income is 100% yours (minus normal tax/NI)</p>
                                            <p><strong>Retirement comfort:</strong> £200-£300/month extra disposable income that was previously loan deduction</p>
                                            <p><strong>Perspective:</strong> The degree that generated £70k+ debt cost you perhaps £40k-£60k actual repayment over 40 years—less than 1% of lifetime earnings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Insight: The 40-Year Timeline Context</h3>
                                <p className="text-gray-700 text-sm">
                                    Forty years sounds like forever when you&apos;re 21. But consider: the same timeframe covers mortgages (25-35 years), career spans (43 years from 22 to 65), and pension contributions (40+ years). Your student loan runs parallel to these major financial commitments, taking a small percentage of income throughout, then conveniently writing off as you enter retirement. It&apos;s a 40-year graduate contribution to your education costs, not a 40-year burden that consumes your finances.
                                </p>
                            </div>
                        </section>

                        {/* Debt at Retirement */}
                        <section id="debt-at-retirement" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                How Much Debt at Retirement?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Most graduates are shocked to learn they&apos;ll owe more at write-off than they borrowed initially. Understanding why balances grow and what they&apos;ll be at retirement helps contextualize the write-off benefit.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why Balances Grow Despite Repayments:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    For approximately 70% of Plan 5 graduates, loan balances will grow throughout their working lives despite making regular repayments. This isn&apos;t a mistake—it&apos;s how income-contingent loans with positive real interest rates work:
                                </p>
                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>Interest outpaces repayment:</strong> Interest accrues at RPI + 0-3% depending on income. For someone earning £35k, annual interest is ~£2,500-£3,500. Annual repayment is £900. Balance grows £1,600-£2,600 net each year.</p>
                                    <p><strong>Compounding effect:</strong> Interest compounds on growing balance. Year 1: £65k balance × 4% = £2,600 interest. Year 20: £110k balance × 4% = £4,400 interest. Higher balance generates more interest.</p>
                                    <p><strong>Salary growth insufficient:</strong> Even with salary increases, most moderate earners never reach the repayment rate that exceeds interest accumulation. You&apos;d need £60k+ salary to start reducing balance.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Projected Balance at Write-Off by Career Earnings:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Lower Earners (£25k-£30k Career Average)</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                                            <div>
                                                <p className="mb-2"><strong>Typical careers:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Primary teaching</li>
                                                    <li>• Social work</li>
                                                    <li>• Charity sector</li>
                                                    <li>• Creative industries</li>
                                                    <li>• Care professions</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="mb-2"><strong>40-year trajectory:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Graduated with: £65k</li>
                                                    <li>• Total repaid: £18k-£25k</li>
                                                    <li>• Balance at write-off: £130k-£145k</li>
                                                    <li>• <strong className="text-red-600">Written off: £130k-£145k</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Outcome:</strong> Balance more than doubles due to interest compounding. Repayments barely made a dent. Massive write-off benefit—they paid £20k-£25k for a degree that cost taxpayer £145k+.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Moderate Earners (£30k-£40k Career Average)</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                                            <div>
                                                <p className="mb-2"><strong>Typical careers:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Secondary teaching</li>
                                                    <li>• Nursing</li>
                                                    <li>• Accounting (non-Big4)</li>
                                                    <li>• Project management</li>
                                                    <li>• Marketing</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="mb-2"><strong>40-year trajectory:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Graduated with: £65k</li>
                                                    <li>• Total repaid: £40k-£65k</li>
                                                    <li>• Balance at write-off: £95k-£125k</li>
                                                    <li>• <strong className="text-red-600">Written off: £95k-£125k</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Outcome:</strong> Made substantial repayments but balance still grew due to interest. Write-off still provides £95k-£125k benefit. Paid £40k-£65k actual cost for degree.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Higher Earners (£40k-£55k Career Average)</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                                            <div>
                                                <p className="mb-2"><strong>Typical careers:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Engineering</li>
                                                    <li>• Pharmacy</li>
                                                    <li>• IT/Software</li>
                                                    <li>• Architecture</li>
                                                    <li>• Management</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="mb-2"><strong>40-year trajectory:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Graduated with: £65k</li>
                                                    <li>• Total repaid: £70k-£100k</li>
                                                    <li>• Balance at write-off: £45k-£80k</li>
                                                    <li>• <strong className="text-yellow-600">Written off: £45k-£80k</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Outcome:</strong> Borderline for full repayment. Made large contributions but balance still accumulated. Write-off provides £45k-£80k benefit. Total cost £70k-£100k for degree.
                                        </p>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">High Earners (£55k+ Career Average)</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                                            <div>
                                                <p className="mb-2"><strong>Typical careers:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Medicine/Dentistry</li>
                                                    <li>• Law (commercial)</li>
                                                    <li>• Finance/Banking</li>
                                                    <li>• Consulting</li>
                                                    <li>• Senior tech roles</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="mb-2"><strong>40-year trajectory:</strong></p>
                                                <ul className="ml-6 space-y-1">
                                                    <li>• Graduated with: £65k</li>
                                                    <li>• Total repaid: £110k-£150k</li>
                                                    <li>• Balance at write-off: £0</li>
                                                    <li>• <strong className="text-green-600">Fully repaid years 18-28</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Outcome:</strong> Fully repaid loan 12-22 years before write-off. Paid full principal + significant interest. Total cost £110k-£150k. Never benefited from write-off mechanism.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Point: Balance Size Is Irrelevant for Most Graduates</h3>
                                <p className="text-gray-700 text-sm">
                                    Whether you owe £80,000 or £140,000 at write-off makes zero difference to what you pay. Both write off. Both graduates paid only 9% above threshold based on income, not debt size. The larger number looks scarier, but has no additional impact on your actual finances. This is why borrowing extra for living costs, doing a foundation year, or studying for 4 years instead of 3 rarely affects total lifetime repayment for moderate earners—the extra debt just gets written off alongside the original debt.
                                </p>
                            </div>
                        </section>

                        {/* Retirement Income Implications */}
                        <section id="retirement-income-implications" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Retirement Income and Loan Freedom
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Plan 5 write-off timing creates a particularly beneficial scenario: your loan vanishes just as you transition into retirement, meaning your retirement income is completely free of student loan deductions.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How Student Loans Interact with Retirement Income:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Working income (employment/self-employment):</strong> Subject to 9% loan deduction above £25,000 threshold. If you&apos;re 60 and still working earning £40k, you&apos;re paying £1,350/year in loan deductions until write-off.</p>
                                    <p><strong>Pension income (private/occupational pensions):</strong> NOT subject to student loan deductions. You can withdraw from private pension with no loan deductions regardless of age or loan status.</p>
                                    <p><strong>State Pension:</strong> NOT subject to student loan deductions. The £11,502/year State Pension (2024/25 rate) is yours entirely.</p>
                                    <p><strong>Investment income, rental income, savings interest:</strong> NOT subject to student loan deductions (these aren&apos;t &quot;earned income&quot;).</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Retirement Income Scenarios:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 1: Early Retirement (Age 60, Pre-Write-Off)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Age:</strong> 60 (still 1-2 years until write-off at 61-62)</p>
                                            <p><strong>Income sources:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Private pension: £18,000/year (no loan deduction)</li>
                                                <li>• Part-time consulting: £12,000/year (subject to loan deduction: £0, below £25k threshold)</li>
                                                <li>• Rental property: £6,000/year (no loan deduction)</li>
                                                <li>• Total income: £36,000/year</li>
                                            </ul>
                                            <p className="mt-2"><strong>Student loan impact: £0/year</strong></p>
                                            <p>Even though loan hasn&apos;t written off yet, most retirement income isn&apos;t subject to deductions. Only employment income counts, and they&apos;re below threshold.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 2: Working Through Write-Off (Age 62)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Age:</strong> 62 (write-off year)</p>
                                            <p><strong>Income sources:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Full-time employment: £45,000/year</li>
                                                <li>• Before write-off: £1,800/year loan deduction</li>
                                                <li>• After write-off in April: £0/year loan deduction</li>
                                                <li>• Net benefit: £1,800/year extra disposable income from April onwards</li>
                                            </ul>
                                            <p className="mt-2"><strong>What changes:</strong></p>
                                            <p>Your April payslip shows £0 student loan deduction. May payslip onwards: £150/month that was going to SLC now stays in your bank account. No other changes—tax, NI, pension contributions all continue normally.</p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Scenario 3: Traditional Retirement (Age 67+, Post-Write-Off)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Age:</strong> 67 (loan written off 5-6 years ago)</p>
                                            <p><strong>Income sources:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• State Pension: £11,502/year (no loan deduction—never was)</li>
                                                <li>• Private pension: £22,000/year (no loan deduction—never was)</li>
                                                <li>• Savings interest: £1,500/year (no loan deduction)</li>
                                                <li>• Total retirement income: £35,000/year</li>
                                            </ul>
                                            <p className="mt-2"><strong>Student loan impact: £0/year (written off years ago)</strong></p>
                                            <p>Your entire retirement income is yours. You haven&apos;t thought about student loans in 5 years. The £95k+ balance you had simply vanished in your early 60s.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Retirement Sweet Spot: Ages 61-67</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Write-off at 61-62 creates a particularly beneficial period:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li><strong>Age 61-62:</strong> Loan writes off. If still working, you get immediate £150-£300/month raise (deductions stop).</li>
                                    <li><strong>Age 62-67:</strong> Can access private pension (from age 55+) with no loan deductions. Work part-time if desired. Full financial freedom 5 years before State Pension.</li>
                                    <li><strong>Age 67:</strong> State Pension begins. Combined with private pension, provides comfortable retirement income with zero loan impact.</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Comparison to previous generations:</strong> Pre-Plan 5 graduates (Plan 1, Plan 2) had longer write-off periods (25-30 years after graduation or age 65+). Plan 5&apos;s 40-year write-off means earlier debt freedom in absolute years for those who graduate young, while those who started university later (mature students at 30+) may carry debt longer but still reach write-off before full retirement.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Financial Planning Benefit: Predictable Income in Retirement</h3>
                                <p className="text-gray-700 text-sm">
                                    Unlike credit cards, personal loans, or even mortgages (which you might carry into retirement if remortgaged late in life), student loans have guaranteed write-off dates. You know with certainty that age 61-62, your student loan obligation ends. This predictability helps retirement planning: you can accurately forecast that at 62, you&apos;ll have £150-£300/month extra disposable income from loan deductions stopping. Financial advisers can factor this into pension withdrawal strategies and retirement budgeting with precision impossible for other debt types.
                                </p>
                            </div>
                        </section>

                        {/* Career Earning Scenarios */}
                        <section id="career-earning-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Retirement Scenarios by Career Earnings
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                How your student loan impacts retirement varies dramatically by career trajectory. These scenarios show realistic 40-year journeys from graduation to write-off across different earning levels.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Lower-Middle Earner: Primary Teacher (£28k-£42k Career)</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Career Trajectory:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 22 (2027): Graduate with £65k debt, start teaching at £30,000 (M1 scale)</li>
                                            <li>• Ages 22-30: Progress through main pay scale: £30k → £41k by age 30</li>
                                            <li>• Ages 30-50: Remain classroom teacher, salary £41k-£45k (limited progression without management)</li>
                                            <li>• Ages 50-62: Senior teacher role, £45k-£48k</li>
                                            <li>• Age 62: Still teaching full-time when write-off occurs</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>40-Year Loan Journey:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">First 20 Years (Ages 22-42):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £450-£1,440</li>
                                                    <li>• Total repaid: £18,000</li>
                                                    <li>• Balance growth: £65k → £105k</li>
                                                    <li>• Interest accumulation outpaces repayment</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Second 20 Years (Ages 42-62):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £1,440-£2,070</li>
                                                    <li>• Total repaid: £32,000</li>
                                                    <li>• Balance growth: £105k → £135k</li>
                                                    <li>• Balance keeps growing despite higher repayments</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>40-year totals:</strong> Borrowed £65k, repaid £50k, balance at write-off £135k. <strong className="text-red-600">Write-off benefit: £135k</strong>
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement Impact:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 62 (April 2068): Loan writes off while still teaching. Monthly take-home increases £170 (no more loan deduction)</li>
                                            <li>• Age 65: Continues teaching if desired, or transitions to pension income</li>
                                            <li>• Age 68: Teachers&apos; Pension ~£24k/year + State Pension £11.5k = £35.5k total. Zero loan deductions</li>
                                            <li>• <strong>Lifetime cost of degree:</strong> £50k actual repayment for £135k total debt. Effective subsidy: £85k</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Middle Earner: Software Developer (£32k-£60k Career)</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Career Trajectory:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 22 (2027): Graduate with £65k debt, start as junior developer at £32,000</li>
                                            <li>• Ages 22-28: Rapid progression: junior → mid → senior developer, £32k → £50k</li>
                                            <li>• Ages 28-45: Senior developer/team lead roles, £50k-£60k</li>
                                            <li>• Ages 45-58: Technical architect/consultant, £58k-£65k</li>
                                            <li>• Ages 58-62: Semi-retired, contracting part-time £40k-£50k</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>40-Year Loan Journey:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">First 20 Years (Ages 22-42):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £630-£3,150</li>
                                                    <li>• Total repaid: £38,000</li>
                                                    <li>• Balance trajectory: £65k → peak £92k → down to £85k</li>
                                                    <li>• Balance growth slows as repayments increase</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Second 20 Years (Ages 42-62):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £2,970-£3,600</li>
                                                    <li>• Total repaid: £62,000</li>
                                                    <li>• Balance trajectory: £85k → £55k → £42k</li>
                                                    <li>• Finally making real progress on balance</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>40-year totals:</strong> Borrowed £65k, repaid £100k, balance at write-off £42k. <strong className="text-yellow-600">Write-off benefit: £42k</strong>
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement Impact:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 58: Reduces to part-time contracting, still earning above threshold, continues paying £1,350-£2,250/year</li>
                                            <li>• Age 62: Write-off occurs with £42k balance remaining. Immediate £110-£190/month boost to take-home</li>
                                            <li>• Age 62-67: Continues light contracting work, draws from substantial private pension built from high earnings</li>
                                            <li>• Age 67+: Private pension ~£30k + State Pension £11.5k = £41.5k retirement income, no loan impact</li>
                                            <li>• <strong>Lifetime cost of degree:</strong> £100k actual repayment for £107k total cost (£65k + £42k written off). Modest subsidy: £7k</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Higher Earner: GP Doctor (£40k-£110k Career)</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Career Trajectory:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 24 (2029): Graduate Medicine with £90k debt (5-year course + living costs), FY1 doctor £32,000</li>
                                            <li>• Ages 24-28: Foundation/training: FY1 → FY2 → ST1-3, £32k-£50k</li>
                                            <li>• Ages 28-32: GP trainee/newly qualified GP, £50k-£65k</li>
                                            <li>• Ages 32-55: Established GP partner, £75k-£110k</li>
                                            <li>• Ages 55-62: Continues full-time or reduces hours, £80k-£95k</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>40-Year Loan Journey:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">First 20 Years (Ages 24-44):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £630-£7,650</li>
                                                    <li>• Total repaid: £72,000</li>
                                                    <li>• Balance trajectory: £90k → £98k → £75k → £48k</li>
                                                    <li>• High earnings start eroding balance mid-career</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Second 10 Years (Ages 44-54):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £4,950-£7,650</li>
                                                    <li>• Total repaid: £63,000</li>
                                                    <li>• Balance trajectory: £48k → £0</li>
                                                    <li>• <strong className="text-green-600">Fully repaid age 54</strong></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Full repayment:</strong> Borrowed £90k, repaid £135k total (£90k principal + £45k interest). Fully repaid 10 years before write-off. <strong className="text-green-600">No write-off benefit.</strong>
                                        </p>
                                    </div>
                                    <div className="bg-yellow-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement Impact:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 54: Loan fully repaid, no more deductions. £640/month immediately available for pension contributions/investments</li>
                                            <li>• Ages 54-62: 8 years of extra disposable income to boost pension (£61,000 that would have been loan deductions)</li>
                                            <li>• Age 62: Write-off date passes—irrelevant, loan already repaid</li>
                                            <li>• Age 65+: NHS Pension ~£45k + State Pension £11.5k + private savings = £56.5k+ comfortable retirement</li>
                                            <li>• <strong>Lifetime cost of degree:</strong> £135k total for £90k borrowed. No subsidy—paid full amount plus £45k interest</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Career Break / Part-Time: Social Worker (£28k-£38k Career with Gaps)</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Career Trajectory:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 22 (2027): Graduate with £65k debt, start as social worker £28,000</li>
                                            <li>• Ages 22-30: Progress to senior social worker, £28k-£36k</li>
                                            <li>• Ages 30-35: Career break for childcare (3 years not working, 2 years part-time)</li>
                                            <li>• Ages 35-45: Return full-time, £35k-£38k</li>
                                            <li>• Ages 45-62: Senior practitioner, £38k-£42k</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>40-Year Loan Journey:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">First 20 Years (Ages 22-42):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Working years: Annual repayment £270-£990</li>
                                                    <li>• Career break years: £0 repayment (below threshold or not working)</li>
                                                    <li>• Total repaid: £12,000</li>
                                                    <li>• Balance growth: £65k → £115k (interest compounds during breaks)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Second 20 Years (Ages 42-62):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Annual repayment: £1,170-£1,530</li>
                                                    <li>• Total repaid: £28,000</li>
                                                    <li>• Balance trajectory: £115k → £142k</li>
                                                    <li>• Even at work, repayments can&apos;t overcome interest</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>40-year totals:</strong> Borrowed £65k, repaid £40k, balance at write-off £142k. <strong className="text-red-600">Write-off benefit: £142k (largest write-off)</strong>
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement Impact:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 62: Write-off with £142k balance. Immediate £130/month boost to take-home pay</li>
                                            <li>• Career breaks meant lower pension contributions, but also lower total loan repayment</li>
                                            <li>• Age 67+: Modest pension ~£16k + State Pension £11.5k = £27.5k retirement income, entirely loan-free</li>
                                            <li>• <strong>Lifetime cost of degree:</strong> £40k actual repayment for £182k total debt (£65k + £77k interest + time). Massive subsidy: £142k</li>
                                            <li>• <strong>Key benefit:</strong> Career breaks/part-time work didn&apos;t create debt crisis. Loan just paused during low-income periods, then wrote off</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Pension Considerations */}
                        <section id="pension-considerations" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                State vs Private Pension Considerations
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding how student loans interact (or don&apos;t interact) with different pension types is crucial for retirement planning.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">State Pension and Student Loans:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>State Pension basics:</strong> Currently £11,502/year (2024/25 full new State Pension), typically payable from age 67 (rising to 68+ for younger generations).</p>
                                    <p><strong>Student loan interaction:</strong> NONE. State Pension is never subject to student loan deductions regardless of your loan status.</p>
                                    <p><strong>Scenario:</strong> You&apos;re 67, receiving full State Pension £11,502/year, and somehow still have an active student loan (very rare—would need to have started university at 27+ for loan to still be active at 67). Even in this scenario, your State Pension is yours entirely.</p>
                                    <p><strong>Tax consideration:</strong> State Pension is taxable income, but below Personal Allowance (£12,570), so typically no tax unless you have other income.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Private/Workplace Pension and Student Loans:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Workplace pensions:</strong> Defined contribution (most modern pensions) or defined benefit (public sector, older schemes).</p>
                                    <p><strong>Student loan interaction:</strong> NONE. Pension withdrawals are not subject to student loan deductions.</p>
                                    <p><strong>Accessibility:</strong> Can typically access from age 55 (rising to 57 from 2028), even if still working.</p>
                                    <p><strong>Strategic benefit:</strong> From age 55, you can supplement lower work income with pension withdrawals (no loan deduction), allowing you to work less while maintaining income.</p>
                                </div>

                                <div className="bg-white p-3 rounded border border-gray-200 mt-3">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Example Strategy: Pre-Retirement Income Optimization (Ages 58-62)</p>
                                    <div className="text-xs text-gray-700 space-y-1">
                                        <p><strong>Without pension withdrawal:</strong></p>
                                        <ul className="ml-6 space-y-1">
                                            <li>• Work full-time earning £45k</li>
                                            <li>• Student loan deduction: £1,800/year (£150/month)</li>
                                            <li>• Tax/NI: ~£8,500</li>
                                            <li>• Net take-home: £34,700/year</li>
                                        </ul>
                                        <p className="mt-2"><strong>With pension withdrawal strategy:</strong></p>
                                        <ul className="ml-6 space-y-1">
                                            <li>• Work part-time earning £24k (below student loan threshold)</li>
                                            <li>• Withdraw £21k from pension (25% tax-free, rest taxed as income)</li>
                                            <li>• Student loan deduction: £0 (work income below £25k threshold)</li>
                                            <li>• Total tax/NI: ~£5,500</li>
                                            <li>• Net income: £39,500/year</li>
                                            <li>• <strong>Better outcome: £4,800/year more income + better work-life balance</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Pension Contributions During Working Life:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    A common question: Should I reduce pension contributions to pay off student loan faster?
                                </p>
                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>Answer for most graduates: No. Keep contributing to pension.</strong></p>
                                    <p><strong>Why:</strong></p>
                                    <ul className="ml-6 space-y-1">
                                        <li>1. <strong>Employer match:</strong> Workplace pensions have employer contributions (typically 3-10%). Reducing your contribution loses this free money.</li>
                                        <li>2. <strong>Tax relief:</strong> Pension contributions reduce taxable income. £100 contribution costs you £80 (basic rate) or £60 (higher rate). Student loan overpayment costs you £100.</li>
                                        <li>3. <strong>Write-off probability:</strong> If you&apos;re moderate earner (70% of graduates), you&apos;ll reach write-off anyway. Extra student loan payments are wasted—that money gets written off.</li>
                                        <li>4. <strong>Compounding:</strong> £100 in pension at age 25, growing at 5%/year, becomes £704 by retirement at 65. £100 paid off student loan saves ~£140 total (avoiding 40 years interest at 3%).</li>
                                    </ul>
                                    <p className="mt-2"><strong>Exception:</strong> High earners (£60k+) on track to fully repay loan might benefit from voluntary overpayments to reduce interest, but should still maximize employer pension match first.</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Retirement Planning Principle: Student Loans Are Background Noise</h3>
                                <p className="text-gray-700 text-sm">
                                    Your retirement planning should focus on building pension wealth, not student loan balance. For moderate earners, student loan deductions are simply a 9% tax on income above £25k that automatically ends at age 61-62. Factor that into budgeting, but don&apos;t let it distort major financial decisions. Build your pension aggressively—that&apos;s the money that determines retirement comfort. The student loan balance number, no matter how large, becomes £0 at write-off and affects none of your retirement income.
                                </p>
                            </div>
                        </section>

                        {/* Early vs Full Repayment */}
                        <section id="early-full-repayment" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Early vs Full Repayment Outcomes
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The write-off at 40 years means two distinct outcomes: either you fully repay before write-off (losing its benefit), or you reach write-off with balance remaining (gaining massive write-off benefit). Understanding which path you&apos;re on changes how you should think about your loan.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">The Two Paths:</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Path 1: Full Repayment Before Write-Off (~30% of graduates)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Who:</strong> High earners—Medicine, Dentistry, Law (commercial), Finance, Consulting, high-performing STEM</p>
                                            <p><strong>Timeline:</strong> Loan fully repaid 12-25 years after graduation (ages 34-47 typically)</p>
                                            <p><strong>Total paid:</strong> £100k-£180k (principal + substantial interest)</p>
                                            <p><strong>Write-off benefit:</strong> £0 (loan repaid before write-off date)</p>
                                            <p><strong>Retirement impact:</strong> Loan-free 15-28 years before write-off date. Extra £300-£600/month disposable income in peak earning years</p>
                                            <p><strong>Mental relief:</strong> Debt burden lifted mid-career, not late-career</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-3 rounded border border-blue-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Path 2: Write-Off with Balance Remaining (~70% of graduates)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Who:</strong> Moderate earners—Teaching, Nursing, Social Work, Creative Industries, most Science/Humanities</p>
                                            <p><strong>Timeline:</strong> Continuous repayments for full 40 years, then write-off at age 61-62</p>
                                            <p><strong>Total paid:</strong> £30k-£100k over lifetime</p>
                                            <p><strong>Outstanding at write-off:</strong> £60k-£150k</p>
                                            <p><strong>Write-off benefit:</strong> £60k-£150k (massive subsidy)</p>
                                            <p><strong>Retirement impact:</strong> Loan deductions throughout career, then sudden relief at 61-62. £150-£300/month boost to take-home</p>
                                            <p><strong>Mental relief:</strong> Debt burden present throughout working life, vanishes as retirement begins</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Comparative Analysis: £65k Loan, Two Career Paths</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate A: Accountant → Finance Manager (High Earner Path)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> £28k starting → £70k by age 40 → £80k by age 50</p>
                                            <p><strong>Repayment journey:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Ages 22-30: £18,000 repaid, balance grows to £75k</li>
                                                <li>• Ages 30-40: £45,000 repaid, balance reduces to £55k</li>
                                                <li>• Ages 40-47: £63,000 repaid, loan fully paid off at age 47</li>
                                                <li>• <strong>Total repaid: £126,000 (£65k principal + £61k interest)</strong></li>
                                            </ul>
                                            <p className="mt-2"><strong>Retirement impact:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Age 47-62: 15 years loan-free. Saves £90,000 in deductions that would have occurred</li>
                                                <li>• Can aggressively build pension in 40s-50s without loan drag</li>
                                                <li>• Age 62: Write-off date passes—irrelevant, loan paid 15 years prior</li>
                                                <li>• Retirement at 65: Substantial pension pot from high earnings + no late-career loan deductions</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate B: Teacher (Moderate Earner Path)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> £30k starting → £41k by age 30 → £46k by age 50 → £48k at age 62</p>
                                            <p><strong>Repayment journey:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Ages 22-30: £10,000 repaid, balance grows to £82k</li>
                                                <li>• Ages 30-50: £32,000 repaid, balance grows to £115k</li>
                                                <li>• Ages 50-62: £26,000 repaid, balance still £135k</li>
                                                <li>• <strong>Total repaid: £68,000</strong></li>
                                                <li>• <strong>Balance at write-off: £135,000</strong></li>
                                            </ul>
                                            <p className="mt-2"><strong>Retirement impact:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Age 62: Write-off—£135,000 balance vanishes. Immediate £170/month take-home boost</li>
                                                <li>• Saved £58,000 vs full repayment (paid £68k instead of £203k total debt)</li>
                                                <li>• Write-off subsidy: £135,000</li>
                                                <li>• Retirement at 65: Teachers&apos; Pension + State Pension, loan-free</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-100 p-3 rounded mt-3">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">Comparison Summary:</p>
                                    <table className="min-w-full text-xs">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-1">Outcome</th>
                                                <th className="text-left py-1">High Earner (A)</th>
                                                <th className="text-left py-1">Moderate Earner (B)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="py-1">Total Repaid</td>
                                                <td className="py-1">£126,000</td>
                                                <td className="py-1">£68,000</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1">Debt Written Off</td>
                                                <td className="py-1">£0</td>
                                                <td className="py-1">£135,000</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1">Years Paying</td>
                                                <td className="py-1">25 years</td>
                                                <td className="py-1">40 years</td>
                                            </tr>
                                            <tr>
                                                <td className="py-1">Loan-free from age</td>
                                                <td className="py-1">47</td>
                                                <td className="py-1">62</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-gray-700 text-xs mt-2">
                                        <strong>Paradox:</strong> High earner paid £126k for £65k borrowed. Moderate earner paid £68k for £65k borrowed + got £135k written off. The &quot;punishment&quot; for earning more is paying significantly more for the same education. This is why Plan 5 operates as a graduate tax, not a loan.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Should You Try to Repay Early?</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>For moderate earners (on track for write-off): Almost never worth it.</strong></p>
                                    <p>Making voluntary overpayments means you pay money that would otherwise be written off. Example: You voluntarily pay £10k extra. At write-off, that £10k would have been written off anyway. You&apos;ve paid £10k for zero benefit.</p>

                                    <p className="mt-2"><strong>For high earners (will fully repay): Marginally beneficial in specific circumstances.</strong></p>
                                    <p>If you&apos;re certain you&apos;ll fully repay, overpayments reduce interest accumulation. But the interest you save is small compared to the opportunity cost of not investing that money. £10k overpayment might save £2k in interest. £10k invested in pension might grow to £35k by retirement. Pension is better use of money.</p>

                                    <p className="mt-2"><strong>Exception: Psychological relief.</strong></p>
                                    <p>Some high earners find large loan balances mentally burdensome. If paying it off buys peace of mind, that has value. But recognize you&apos;re paying for emotional relief, not financial optimization.</p>
                                </div>
                            </div>
                        </section>

                        {/* Real Retirement Scenarios */}
                        <section id="real-retirement-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Graduate Retirement Scenarios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Real-world examples help contextualize how student loan write-offs actually impact retirement for different careers and life paths.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Sarah - Secondary Science Teacher</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Background:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Graduated 2027 age 22 with Biology degree (£65k debt)</li>
                                            <li>• Completed PGCE 2028 (additional £20k debt, total £85k)</li>
                                            <li>• Married age 29, two children ages 32 and 34</li>
                                            <li>• Steady teaching career, never promoted to leadership (preferred classroom teaching)</li>
                                            <li>• Husband earns similar (also teacher)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>40-Year Journey:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Ages 23-62: Teaching salary £30k → £48k. Student loan deductions £450-£2,070/year</li>
                                            <li>• Total repaid over 39 years: £52,000</li>
                                            <li>• Balance trajectory: Started £85k → grew to £142k despite repayments</li>
                                            <li>• Never seriously worried about balance—knew write-off was coming</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement (Age 62, April 2068):</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Still teaching full-time when write-off occurs</li>
                                            <li>• April 2068 payslip: No student loan deduction. £173/month take-home increase</li>
                                            <li>• Outstanding balance £142,000 vanishes overnight</li>
                                            <li>• Continues teaching to age 65, then retires</li>
                                            <li>• Retirement income: Teachers&apos; Pension £26k + State Pension £14k = £40k combined with husband&apos;s similar pension</li>
                                            <li>• Zero student loan impact on retirement income—both loans written off</li>
                                            <li>• Comfortable retirement, no regrets about student debt</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Reflection:</strong> &quot;We paid about £52k each over our careers for degrees that technically cost £200k+ including interest. At 62, waking up with £142k debt just gone felt surreal. We&apos;d stopped checking the balance years ago—we knew it didn&apos;t matter. Write-off arrived right on schedule.&quot;
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: James - Software Consultant</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Background:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Graduated 2028 age 21 with Computer Science degree (£65k debt)</li>
                                            <li>• Rapid career progression in tech sector</li>
                                            <li>• Ages 25-35: £40k → £75k as senior developer/team lead</li>
                                            <li>• Ages 35-50: Freelance consultant £80k-£110k</li>
                                            <li>• Single, no children, high disposable income</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Loan Journey:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Ages 22-35: Repaid £62,000, balance reduced from £65k to £48k</li>
                                            <li>• Ages 35-47: Repaid £98,000, balance fully cleared age 47</li>
                                            <li>• Total repaid: £160,000 (£65k principal + £95k interest)</li>
                                            <li>• Loan fully repaid 15 years before write-off date</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement (Age 62, April 2069):</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Age 47: Loan cleared. Felt like getting £700/month raise (no more deductions)</li>
                                            <li>• Ages 47-55: Funneled extra disposable income into pension and investments</li>
                                            <li>• Age 55: Semi-retired, reduced consulting to 2 days/week</li>
                                            <li>• Age 62: Write-off date arrives—irrelevant, loan paid 15 years ago</li>
                                            <li>• Retirement plan: Substantial private pension pot (~£600k), can withdraw £30k/year sustainably</li>
                                            <li>• State Pension age 68: Additional £14k/year</li>
                                            <li>• Total retirement income: £44k/year minimum, comfortable lifestyle</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Reflection:</strong> &quot;I paid £160k total for my degree—way more than it cost. I&apos;m essentially subsidizing everyone else&apos;s write-offs. Would I prefer a fairer system? Sure. But clearing the loan at 47 was liberating. I had 15 years of high earnings with no loan drag to supercharge my pension. Most of my teacher friends still paying until 62 will retire with less pension wealth than me despite similar starting points.&quot;
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Aisha - Mature Student, Social Work</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Background:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Started university age 32 (2030) as mature student</li>
                                            <li>• Graduated 2033 age 35 with Social Work degree (£65k debt)</li>
                                            <li>• Already had two children (ages 8 and 11 when started uni)</li>
                                            <li>• Husband working full-time, supported family during study</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Career Path:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Ages 35-45: Social worker £30k-£36k. Repaid ~£750/year = £7,500 total</li>
                                            <li>• Ages 45-52: Reduced to 3 days/week for aging parent care. £24k-£26k. Repaid ~£100/year = £700 total</li>
                                            <li>• Ages 52-65: Returned full-time, senior practitioner £38k-£42k. Repaid ~£1,400/year = £18,200 total</li>
                                            <li>• Ages 65-75: Part-time (kept working past State Pension age for purpose/income) £18k. Below threshold, £0 repaid</li>
                                            <li>• Total repaid over 40 years: £26,400</li>
                                            <li>• Balance at write-off: £128,000</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement (Age 75, April 2074):</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Write-off at age 75 (started repaying age 35, write-off 40 years later)</li>
                                            <li>• Had been working part-time below threshold for 10 years, so no deductions anyway</li>
                                            <li>• Outstanding balance £128k writes off</li>
                                            <li>• Already receiving State Pension since 68 (£16k with inflation adjustments)</li>
                                            <li>• Modest workplace pension £8k + husband&apos;s larger pension</li>
                                            <li>• Combined household retirement income: £60k/year (both pensions)</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Reflection:</strong> &quot;I started university at 32 when my youngest started secondary school. Everyone said I was mad to take on student debt that late. But the income-contingent system meant it was risk-free—I only paid when I could afford it. My reduced hours for parent care years? Loan payments paused automatically. The write-off came when I was 75, well into retirement. I paid £26k over 40 years for a degree that enabled a meaningful career. The £128k written off feels like the system saying &apos;thanks for becoming a social worker&apos; rather than punishing mature students.&quot;
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: Marcus & Lisa - Joint Student Loan Household</h3>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Background:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Met at university, both graduated 2029 with £65k debt each (£130k household total)</li>
                                            <li>• Marcus: Engineering, career £32k → £58k</li>
                                            <li>• Lisa: Marketing, career £28k → £44k</li>
                                            <li>• Married age 28, bought house age 32, two children</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Household Loan Journey:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Combined household student loan deductions: £1,200-£4,500/year</li>
                                            <li>• Total repaid by Marcus: £85,000 over 40 years</li>
                                            <li>• Total repaid by Lisa: £48,000 over 40 years</li>
                                            <li>• Marcus balance at write-off: £42,000</li>
                                            <li>• Lisa balance at write-off: £108,000</li>
                                            <li>• Total household write-off benefit: £150,000</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Retirement (Ages 62-63, 2069-2070):</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Both reach write-off within 1 year of each other</li>
                                            <li>• Combined immediate household benefit: £350/month no longer going to loan deductions</li>
                                            <li>• Marcus: Continues working to 65, building final pension years</li>
                                            <li>• Lisa: Reduces to part-time at 62, starts drawing private pension</li>
                                            <li>• Age 68+: Combined retirement income £55k (both workplace pensions + both State Pensions)</li>
                                            <li>• Mortgage paid off age 60, children independent</li>
                                            <li>• Comfortable retirement funded by decades of decent middle-class salaries</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Reflection:</strong> &quot;We used to joke about our &apos;student loan tax&apos;—£300-£400/month combined for most of our careers. It was just background noise in our budgeting. We both knew write-off was coming around 62-63, so we never stressed about the balances. When both our loans wrote off within a year, we treated ourselves to a nice holiday with the extra £400/month. Our kids are at university now, also on Plan 5. We tell them: don&apos;t worry about the debt number, focus on career satisfaction and building your pension.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Retirement Planning */}
                        <section id="retirement-planning" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Planning for Retirement with Student Loans
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Practical strategies for incorporating Plan 5 student loans into broader retirement planning, recognizing that for most people, the loan is a minor consideration rather than a major obstacle.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Core Retirement Planning Principles with Student Loans:</h3>

                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>1. Maximize workplace pension contributions throughout career</strong></p>
                                    <p className="text-xs ml-4">Don&apos;t reduce pension contributions to pay off student loan faster (unless you&apos;re a high earner certain to fully repay). Pension compounds over 40 years. Student loan gets written off. Pension is your retirement fund, student loan is just a 9% tax on income above £25k.</p>

                                    <p><strong>2. Factor write-off timing into retirement age planning</strong></p>
                                    <p className="text-xs ml-4">If you&apos;re planning to work past 62, understand you&apos;ll see a £150-£300/month take-home boost at write-off. If planning early retirement at 58-60, recognize you&apos;ll still have 2-4 years of loan deductions. Can strategically use pension withdrawals to stay below threshold during this period.</p>

                                    <p><strong>3. Don&apos;t let student loan affect major financial decisions</strong></p>
                                    <p className="text-xs ml-4">Buy the house when ready (loan doesn&apos;t affect mortgage approval much). Have children when ready (loan doesn&apos;t prevent comfortable family life). Take career promotions (extra income helps even if deductions increase). The 9% deduction is manageable—don&apos;t let it distort life choices.</p>

                                    <p><strong>4. Ignore the balance number—focus on monthly deduction</strong></p>
                                    <p className="text-xs ml-4">Whether you owe £80k or £120k is irrelevant to your finances. Only the monthly deduction matters. That&apos;s determined by income (9% above £25k), not debt size. Budget based on net take-home after deduction, not gross salary minus theoretical full repayment.</p>

                                    <p><strong>5. Plan for the extra disposable income post-write-off</strong></p>
                                    <p className="text-xs ml-4">At write-off, you&apos;ll have an extra £150-£300/month. Some people boost lifestyle, others increase pension contributions for final years, others save for house renovations. Plan for this windfall rather than letting it disappear into general spending.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Retirement Budget Planning Exercise:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 25-40: Early/Mid Career</p>
                                        <div className="text-xs text-gray-700">
                                            <p className="mb-2"><strong>Focus:</strong> Building career, buying home, starting family</p>
                                            <p className="mb-2"><strong>Student loan status:</strong> Making minimum repayments (9% above £25k), balance growing</p>
                                            <p className="mb-2"><strong>Pension strategy:</strong> Contribute enough to get full employer match (5-10%). Prioritize over student loan overpayments</p>
                                            <p className="mb-2"><strong>Budgeting:</strong> Account for £50-£200/month student loan deduction in budget. Treat as fixed cost like council tax</p>
                                            <p className="mb-2"><strong>Retirement planning:</strong> Too early to seriously plan specifics. Focus on building good financial habits</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 40-55: Peak Earning Years</p>
                                        <div className="text-xs text-gray-700">
                                            <p className="mb-2"><strong>Focus:</strong> Maximizing earnings, paying down mortgage, supporting teenage children</p>
                                            <p className="mb-2"><strong>Student loan status:</strong> Making larger repayments (£200-£400/month), but balance still growing for moderate earners</p>
                                            <p className="mb-2"><strong>Pension strategy:</strong> Increase contributions to 12-15% minimum. These are highest-earning years—maximize pension growth</p>
                                            <p className="mb-2"><strong>High earners:</strong> If you&apos;ll fully repay loan, consider maximizing pension contributions first, then if surplus income, student loan voluntary repayments</p>
                                            <p className="mb-2"><strong>Retirement planning:</strong> Start getting specific. Calculate expected State Pension, project workplace pension pot, estimate needs</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 55-62: Pre-Retirement Transition</p>
                                        <div className="text-xs text-gray-700">
                                            <p className="mb-2"><strong>Focus:</strong> Final career years, children independent, serious retirement planning</p>
                                            <p className="mb-2"><strong>Student loan status:</strong> Write-off approaching. Can see light at end of tunnel</p>
                                            <p className="mb-2"><strong>Pension strategy:</strong> Can access private pension from 55+ (rising to 57 from 2028). Consider phased retirement with pension top-up</p>
                                            <p className="mb-2"><strong>Optimization:</strong> If working part-time (below £25k), no student loan deductions. Supplement with pension withdrawals (also no deductions)</p>
                                            <p className="mb-2"><strong>Retirement planning:</strong> Finalize retirement date, confirm pension projections, check write-off date. Some choose to work until write-off, others retire early and accept final 2-3 years of deductions</p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Ages 62+: Write-Off and Beyond</p>
                                        <div className="text-xs text-gray-700">
                                            <p className="mb-2"><strong>Focus:</strong> Enjoying retirement or winding down final work years</p>
                                            <p className="mb-2"><strong>Student loan status:</strong> WRITTEN OFF. Debt vanished. No more deductions</p>
                                            <p className="mb-2"><strong>Income sources:</strong> Private pension withdrawals + continued work (if desired) + State Pension from 67</p>
                                            <p className="mb-2"><strong>Budget boost:</strong> £150-£300/month extra from no loan deductions. Decide: lifestyle upgrade, extra savings, or help grandchildren</p>
                                            <p className="mb-2"><strong>Financial status:</strong> Mortgage likely paid off (if bought age 30-35), children independent, no major financial obligations. Comfortable retirement funded by pension</p>
                                            <p className="mb-2"><strong>Reflection:</strong> The student loan that seemed massive at 21 is now just a footnote in your financial history</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Specific Retirement Planning Scenarios:</h3>

                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>Scenario 1: Early retirement at 58, loan still active</strong></p>
                                    <p className="ml-4">If you retire at 58 with loan still active, you have two options:</p>
                                    <ul className="ml-8 space-y-1">
                                        <li>(a) Work part-time/casual earning below £25k = no loan deductions</li>
                                        <li>(b) Live off pension withdrawals only (no employment income) = no loan deductions</li>
                                        <li>Either way, you can effectively stop paying while waiting for write-off at 61-62</li>
                                    </ul>

                                    <p className="mt-2"><strong>Scenario 2: Working through write-off age</strong></p>
                                    <p className="ml-4">If you enjoy your job and plan to work to 65+:</p>
                                    <ul className="ml-8 space-y-1">
                                        <li>• Continue paying deductions until write-off at 61-62</li>
                                        <li>• At write-off, you get immediate take-home boost for final working years</li>
                                        <li>• Use that extra income to maximize pension contributions in last 3-5 years</li>
                                        <li>• Final pension contributions benefit from no loan deduction eating into spare income</li>
                                    </ul>

                                    <p className="mt-2"><strong>Scenario 3: Phased retirement 60-67</strong></p>
                                    <p className="ml-4">Gradual transition to full retirement:</p>
                                    <ul className="ml-8 space-y-1">
                                        <li>• Age 60-62: 4 days/week, earning £32k, small loan deductions continue</li>
                                        <li>• Age 62: Write-off occurs, take-home increases £100/month</li>
                                        <li>• Age 62-65: 3 days/week, £24k (below threshold) + pension withdrawal £10k</li>
                                        <li>• Age 65-67: 2 days/week or consulting, flexible hours</li>
                                        <li>• Age 67: State Pension begins, fully retire or continue working for interest/social benefit</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Takeaway: Student Loans Are Not Retirement Obstacles</h3>
                                <p className="text-gray-700 text-sm">
                                    Unlike other debt types (credit cards, personal loans, even mortgages), Plan 5 student loans are specifically designed NOT to burden retirement. The 40-year write-off timing ensures debt vanishes as you enter retirement years. The income-contingent structure means you only paid what you could afford throughout your working life. The pension exemption means your retirement income is fully yours. For moderate earners, the loan is simply written off. For high earners, it&apos;s cleared well before retirement, freeing up final years for pension maximization. In retirement planning, treat your student loan as background context, not central concern. Focus on building substantial pension wealth—that determines retirement comfort, not whether you still owed £80k on a loan that wrote off at 62.
                                </p>
                            </div>
                        </section>

                        {/* Common Misconceptions */}
                        <section id="common-misconceptions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Common Retirement Loan Misconceptions
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Several persistent myths about student loans and retirement lead to unnecessary anxiety. Let&apos;s address them directly.
                            </p>

                            <div className="space-y-3">
                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 1: &quot;I&apos;ll be paying student loans from my pension&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> Pension withdrawals are NOT subject to student loan deductions. Your private pension, occupational pension, and State Pension are all yours completely, regardless of student loan status.</p>
                                    <p className="text-gray-700 text-xs">Only employment income (salary/wages) and self-employment income trigger student loan deductions. Once you retire and stop working, even if your loan hasn&apos;t written off yet (extremely rare—would require starting university very late), your pension is untouched.</p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 2: &quot;Student debt will ruin my retirement&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> For 70% of graduates reaching write-off, the debt has zero impact on retirement. It writes off before traditional retirement age (typically at 61-62, vs State Pension at 67+). Your retirement quality depends on pension wealth, not student loan balance.</p>
                                    <p className="text-gray-700 text-xs">A teacher with £140k student debt writing off at 62 and a teacher who never went to university have identical retirement incomes if they have similar pensions. The debt that vanishes doesn&apos;t affect retirement outcome.</p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 3: &quot;I should pay off my student loan before retirement&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> For moderate earners on track for write-off, voluntary repayments are throwing money away. That money would be written off anyway. Better to invest in pension (grows to retirement) than student loan (gets written off).</p>
                                    <p className="text-gray-700 text-xs">Example: Age 50, you have £50k spare cash. Option A: Pay off student loan. Saves £3k interest, loan clears 10 years early. Option B: Put £50k in pension. Grows to ~£70k by age 65. Pension contribution is better use of money.</p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 4: &quot;My children will inherit my student debt&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> Student loans write off upon death. They are NOT passed to your estate, spouse, children, or anyone else. If you die age 55 with £90k student loan, it vanishes. Your estate keeps all assets, beneficiaries inherit everything debt-free.</p>
                                    <p className="text-gray-700 text-xs">This is fundamentally different from mortgages (must be paid from estate) or credit cards (claimed against estate before inheritance). Student loans have zero inheritance impact.</p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 5: &quot;High loan balance means poor retirement prospects&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> Balance size is irrelevant for write-off-bound graduates. Whether you owe £60k or £150k at write-off, you paid the same amount based on your income (9% above £25k), not your debt.</p>
                                    <p className="text-gray-700 text-xs">Two moderate earners with identical careers pay identical amounts in student loan deductions, even if one borrowed more (foundation year, different living costs, longer course). The larger balance just means larger write-off benefit. Both retire with same pension, same financial position.</p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 6: &quot;Government will cancel write-off before I retire&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> Your loan terms are locked in when you take them out. Government cannot retroactively change your write-off date or remove write-off for existing borrowers.</p>
                                    <p className="text-gray-700 text-xs">They can (and do) change terms for future students. Plan 2 → Plan 4 → Plan 5 shows government adjusts systems. But your individual loan contract is protected. If you borrowed under Plan 5 with 40-year write-off, that&apos;s guaranteed. Political changes affect new students, not existing borrowers.</p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">❌ Myth 7: &quot;Student loan will prevent me affording retirement&quot;</p>
                                    <p className="text-gray-700 text-xs mb-2"><strong>Reality:</strong> Student loan deductions during working life (£100-£300/month) are manageable within typical budgets. They don&apos;t prevent you from contributing to pension or saving for retirement.</p>
                                    <p className="text-gray-700 text-xs">Someone earning £40k pays £1,350/year in student loan deductions. That&apos;s 3.4% of gross income or ~4% of take-home. Annoying but not crippling. More than affordable to also contribute 5-10% to pension (which should be priority over student loan overpayments). Retirement readiness depends on pension contributions made throughout career, not whether you had student loans.</p>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                                    <p className="font-semibold text-gray-800 text-sm mb-2">✅ The Actual Reality:</p>
                                    <p className="text-gray-700 text-xs">
                                        Plan 5 student loans are designed to be non-burdensome for retirement. The 40-year write-off timing (age 61-62 for typical graduates) aligns perfectly with early retirement years. The income-contingent structure means you only ever paid what was affordable. The pension exemption means retirement income is entirely yours. For most graduates, student loan debt is a minor footnote in their financial history—relevant during working years, vanished before full retirement, zero impact on retirement quality. Your retirement comfort will be determined by your pension wealth, career satisfaction, health, and life choices—not by whether you had student loan debt that wrote off two decades into your career.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Plan 5 loans: designed to fade away before retirement, not burden it
                            </h3>
                            <p className="text-gray-700 mb-4">
                                The 40-year write-off at age 61-62 means student loans gracefully exit your financial life just as retirement begins. For 70% of graduates, large balances (£80k-£150k) simply vanish, having cost only what was affordable throughout working life (9% above £25k). Your state pension (age 67+) and private pension withdrawals are completely free of loan deductions—always were, always will be. The write-off is automatic, guaranteed in your loan contract, and happens regardless of outstanding balance. High earners fully repay years earlier, gaining loan-free peak earning years for pension maximization. Moderate earners benefit from massive write-offs subsidizing their education costs.
                            </p>
                            <p className="text-gray-700 font-semibold">
                                Your retirement quality depends on pension wealth built throughout your career—not on student debt that writes off before you fully retire. Maximize pension contributions, ignore balance anxiety, and understand that for most Plan 5 graduates, student loans are a manageable working-life deduction that disappears precisely when retirement begins.
                            </p>
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

export default RetirementOutstandingLoans;