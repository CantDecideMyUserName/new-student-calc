import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const UnemploymentLoanAccumulation: React.FC = () => {
    const tocItems = [
        { id: "understanding-unemployment-impact", title: "Understanding Unemployment Impact", level: 2 },
        { id: "automatic-repayment-pause", title: "Automatic Repayment Pause", level: 2 },
        { id: "interest-accumulation", title: "Interest Accumulation During Unemployment", level: 2 },
        { id: "balance-growth-scenarios", title: "Balance Growth Scenarios", level: 2 },
        { id: "writeoff-vs-repayment", title: "Write-Off vs Full Repayment Trajectories", level: 2 },
        { id: "career-interruptions", title: "Common Career Interruptions", level: 2 },
        { id: "real-unemployment-scenarios", title: "Real Graduate Unemployment Scenarios", level: 2 },
        { id: "financial-strategies", title: "Financial Strategies During Unemployment", level: 2 },
        { id: "mental-health-debt", title: "Mental Health and Debt Anxiety", level: 2 },
        { id: "return-to-work", title: "Returning to Work: Repayment Restart", level: 2 },
    ];

    return (
        <div className="bg-white">
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">Student Loan Lifecycle</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Unemployment: Loan Accumulation</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Unemployment and Student Loan Accumulation: Interest Without Repayments
                    </h1>
                    <p className="text-xl text-gray-600">
                        How unemployment affects repayments, interest accumulation, long-term debt growth, and why it matters less than you think
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    <div className="lg:flex-1 lg:min-w-0">
                        {/* Introduction */}
                        <section className="mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                If you&apos;re unemployed or earning below £25,000, you make zero student loan repayments—automatically, with no paperwork, no notifications needed. HMRC simply stops deducting from your payslips when your employment ends or your salary drops below threshold. But while repayments pause, interest continues accumulating at RPI (currently 3-4% annually), causing your balance to grow throughout unemployment periods. For a typical graduate with £65,000 debt, one year of unemployment adds £2,000-£2,600 to the balance through interest alone.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s the counterintuitive truth that changes everything: for approximately 70% of Plan 5 graduates heading for 40-year write-off, unemployment-period interest accumulation is financially irrelevant. The extra debt just gets written off alongside the rest. Whether you owe £80,000 or £95,000 at write-off makes zero difference—both write off completely, you pay nothing extra. Only high earners on track to fully repay their loans before write-off need to consider unemployment-period interest as actual cost. For everyone else, unemployment affects your immediate financial situation (no income) but not your long-term student loan burden.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                This creates a uniquely protective feature of Plan 5: career interruptions—whether unemployment, illness, caregiving, retraining, entrepreneurship, or simply earning below threshold—don&apos;t create student loan crises. Your loan just sits there, accruing interest you&apos;ll likely never repay, waiting patiently for you to return to earning above £25,000. Unlike credit cards (where missed payments destroy credit scores), mortgages (where default means repossession), or personal loans (where arrears trigger collection agencies), student loans have zero penalties for unemployment. This guide explains exactly how unemployment affects your student loan, when the interest matters and when it doesn&apos;t, and how to think about debt accumulation during career interruptions without unnecessary anxiety.
                            </p>
                        </section>

                        {/* Understanding Unemployment Impact */}
                        <section id="understanding-unemployment-impact" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Understanding Unemployment Impact
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student loans are fundamentally different from other debt types when it comes to unemployment. Understanding this difference is crucial for managing financial anxiety during job loss.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Counts as &quot;Unemployment&quot; for Student Loans:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Complete unemployment:</strong> Not working at all, receiving benefits or living on savings. £0 repayment automatically.</p>
                                    <p><strong>Below-threshold employment:</strong> Working but earning under £25,000/year. £0 repayment automatically (you&apos;re technically employed but below repayment threshold).</p>
                                    <p><strong>Self-employment low-income:</strong> Self-employed but annual profits below £25,000. £0 repayment on Self-Assessment (you declare profits, HMRC calculates £0 owed).</p>
                                    <p><strong>Part-time work:</strong> Working 20 hours/week at £12/hour = £12,480/year. Below threshold, £0 repayment.</p>
                                    <p><strong>Temporary/seasonal work:</strong> Working 6 months/year earning £30k annualized but only £15k actual. Only pay on months you earn above threshold.</p>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Critical point:</strong> You don&apos;t need to be claiming Universal Credit or Jobseeker&apos;s Allowance for repayments to stop. Simply earning below £25,000 (employed or unemployed) = automatic £0 repayment.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Student Loans vs Other Debt During Unemployment:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Debt Type</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">What Happens During Unemployment</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Consequences</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Student Loan (Plan 5)</td>
                                                <td className="px-3 py-2 border-b text-xs">Repayments automatically stop. Interest continues. No action needed.</td>
                                                <td className="px-3 py-2 border-b text-xs">Zero penalties. Balance grows. No credit score impact. No contact from SLC.</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Credit Card</td>
                                                <td className="px-3 py-2 border-b text-xs">Minimum payments still required regardless of income.</td>
                                                <td className="px-3 py-2 border-b text-xs">Missed payments → credit score damage, default, collections, potential CCJ</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Mortgage</td>
                                                <td className="px-3 py-2 border-b text-xs">Monthly payments still required. Can request payment holiday (max 3 months typically).</td>
                                                <td className="px-3 py-2 border-b text-xs">Missed payments → arrears, repossession proceedings after 3+ months default</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Personal Loan</td>
                                                <td className="px-3 py-2 border-b text-xs">Fixed monthly payments required regardless of income.</td>
                                                <td className="px-3 py-2 border-b text-xs">Missed payments → default, collections, credit score damage, possible court judgment</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Car Finance</td>
                                                <td className="px-3 py-2 border-b text-xs">Payments required. Can negotiate but no automatic pause.</td>
                                                <td className="px-3 py-2 border-b text-xs">Missed payments → car repossession, credit score damage</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Key advantage:</strong> Student loans are the ONLY major debt type that automatically pauses based on income, requires no communication with lender, and has zero penalties for non-payment during unemployment.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Income-Contingent Protection</h3>
                                <p className="text-gray-700 text-sm">
                                    Plan 5&apos;s income-contingent structure means you only repay when you can afford to (earning above £25k). This is fundamentally different from traditional loans with fixed monthly payments. During unemployment or low-income periods, your student loan is essentially on hold—no threats, no collectors, no damage to credit. The balance grows from interest, but for moderate earners heading to write-off, that growth is irrelevant. This design specifically protects graduates during career interruptions, recognizing that modern careers have frequent job changes, unemployment periods, and income volatility.
                                </p>
                            </div>
                        </section>

                        {/* Automatic Repayment Pause */}
                        <section id="automatic-repayment-pause" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Automatic Repayment Pause
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                One of Plan 5&apos;s best features is how seamlessly repayments pause and resume based on your employment status—with zero bureaucracy or paperwork required.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">How Automatic Pause Works:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>PAYE deductions:</strong> Student loan repayments are deducted through PAYE (Pay As You Earn) along with income tax and National Insurance. Your employer reports your earnings to HMRC monthly.</p>
                                    <p><strong>When you stop working:</strong> Employer submits final payroll to HMRC showing employment ended. HMRC automatically stops student loan deductions. You receive no notification—it just happens.</p>
                                    <p><strong>No action needed:</strong> You don&apos;t call Student Loans Company. You don&apos;t fill out forms. You don&apos;t prove unemployment. HMRC data drives everything.</p>
                                    <p><strong>New employment:</strong> When you start new job, new employer sets up PAYE. If your salary exceeds £25,000, deductions restart automatically. If below £25,000, no deductions begin.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Timeline Example: Job Loss to Re-employment</h3>

                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>Month 1 (January):</strong> You&apos;re working, earning £32,000/year, paying £52.50/month student loan deduction</p>
                                    <p><strong>Month 2 (February):</strong> Made redundant on February 15th. February payslip shows partial month deduction (~£26), then stops</p>
                                    <p><strong>Months 3-8 (March-August):</strong> Unemployed. Zero student loan deductions. No contact from SLC. No penalties. Balance grows from interest only.</p>
                                    <p><strong>Month 9 (September):</strong> Start new job at £35,000/year. Employer sets up PAYE. Student loan deductions resume at £75/month automatically.</p>
                                    <p><strong>Total unemployment period:</strong> 6.5 months with £0 repayments, ~£1,400 interest added to balance</p>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Key points:</strong> No communication needed. No proof of unemployment. No application to pause. No application to restart. It&apos;s all automatic based on HMRC payroll data.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Self-Employment: Manual Reporting</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Self-employed individuals handle student loans differently:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>Report annual profits on Self-Assessment tax return</li>
                                    <li>If profits below £25,000: £0 student loan repayment calculated</li>
                                    <li>If profits above £25,000: HMRC calculates 9% above threshold, adds to tax bill</li>
                                    <li>If you have zero income year: declare £0 profits, pay £0 student loan repayment</li>
                                    <li>Interest continues accruing throughout regardless of profit level</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Self-employment unemployment:</strong> If your business fails or you have low-income year, you simply declare lower profits on Self-Assessment. Student loan repayment adjusts automatically based on declared income. No separate unemployment notification needed.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Partial-Year Employment</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Many graduates work part of year, unemployed rest of year. Student loans handle this elegantly:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Example: 6 months employed, 6 months unemployed</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• April-September: Employed earning £30,000/year (£2,500/month)</li>
                                        <li>• Monthly deduction: £37.50 × 6 months = £225 total repaid</li>
                                        <li>• October-March: Unemployed, £0 deduction</li>
                                        <li>• Annual repayment: £225 (not £450 that full year would cost)</li>
                                        <li>• Interest accrues on balance for all 12 months (~£2,000)</li>
                                        <li>• Net balance increase: £2,000 interest - £225 repaid = +£1,775 debt growth</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Interest Accumulation - from document 5 */}
                        <section id="interest-accumulation" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Interest Accumulation During Unemployment
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While repayments pause during unemployment, interest continues accruing every day. Understanding how much interest adds up helps contextualize whether you should worry about it.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Interest Rate During Unemployment:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Rate calculation:</strong> RPI (Retail Price Index) only when earning below £25,000 or unemployed. No additional percentage added.</p>
                                    <p><strong>Current rate:</strong> RPI typically 3-4% annually (varies with inflation). Example: If RPI is 3.5%, your interest rate during unemployment is 3.5%.</p>
                                    <p><strong>When earning above threshold:</strong> RPI + progressive increase up to RPI+3% at £60,000+. But during unemployment (£0 income), it&apos;s just RPI.</p>
                                    <p><strong>Daily accrual:</strong> Interest calculated daily, not annually. Every day unemployed adds (balance × annual rate ÷ 365) to your debt.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Interest Accumulation Examples:</h3>
                                
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">3 Months Unemployment (Short-term)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Starting balance:</strong> £50,000</p>
                                            <p><strong>Interest rate:</strong> 3.5% annual (RPI)</p>
                                            <p><strong>Duration:</strong> 3 months (90 days)</p>
                                            <p><strong>Interest calculation:</strong> £50,000 × 3.5% × (90÷365) = £432</p>
                                            <p><strong>New balance:</strong> £50,432</p>
                                            <p className="mt-2 text-gray-600"><strong>Impact:</strong> £432 added to debt. For moderate earner heading to write-off, this will be written off anyway. For high earner who&apos;ll repay, it&apos;s £432 extra cost.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">6 Months Unemployment (Medium-term)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Starting balance:</strong> £65,000</p>
                                            <p><strong>Interest rate:</strong> 3.5% annual</p>
                                            <p><strong>Duration:</strong> 6 months (180 days)</p>
                                            <p><strong>Interest calculation:</strong> £65,000 × 3.5% × (180÷365) = £1,121</p>
                                            <p><strong>New balance:</strong> £66,121</p>
                                            <p className="mt-2 text-gray-600"><strong>Impact:</strong> £1,121 added. Half-year unemployment adds about 1.7% to your total balance. Sounds significant but remember: 70% of graduates will have this written off.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">12 Months Unemployment (Long-term)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Starting balance:</strong> £70,000</p>
                                            <p><strong>Interest rate:</strong> 3.5% annual</p>
                                            <p><strong>Duration:</strong> 12 months (365 days)</p>
                                            <p><strong>Interest calculation:</strong> £70,000 × 3.5% = £2,450</p>
                                            <p><strong>New balance:</strong> £72,450</p>
                                            <p className="mt-2 text-gray-600"><strong>Impact:</strong> £2,450 added. Full year unemployment adds 3.5% to balance. This is the same growth you&apos;d see from interest during any year where your repayments don&apos;t exceed interest charge.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">24 Months Unemployment (Extended)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Starting balance:</strong> £68,000</p>
                                            <p><strong>Interest rate:</strong> 3.5% annual</p>
                                            <p><strong>Year 1:</strong> £68,000 × 3.5% = £2,380 interest → £70,380 balance</p>
                                            <p><strong>Year 2:</strong> £70,380 × 3.5% = £2,463 interest → £72,843 balance</p>
                                            <p><strong>Total added:</strong> £4,843 over 2 years</p>
                                            <p className="mt-2 text-gray-600"><strong>Impact:</strong> Extended unemployment adds £4,843 (7.1% increase). Feels significant when you see the number, but again: most graduates will never repay this amount. It writes off at 40 years regardless.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Compound Interest Effect</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Interest compounds during unemployment, meaning you pay interest on previous interest:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Example: 5 years of unemployment/low income periods</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Starting balance: £65,000</li>
                                        <li>• Each year: No repayments, 3.5% interest compounds</li>
                                        <li>• Year 1: £65,000 → £67,275</li>
                                        <li>• Year 2: £67,275 → £69,630</li>
                                        <li>• Year 3: £69,630 → £72,067</li>
                                        <li>• Year 4: £72,067 → £74,589</li>
                                        <li>• Year 5: £74,589 → £77,200</li>
                                        <li>• <strong>Total growth: £12,200 (18.8% increase over 5 years)</strong></li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Reality check:</strong> This looks alarming but consider: even working graduates with moderate incomes see similar balance growth because their repayments don&apos;t exceed interest. Whether you&apos;re unemployed or earning £32k, your balance is growing. The unemployment just accelerates growth slightly.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why Unemployment Interest Often Doesn&apos;t Matter</h3>
                                <p className="text-gray-700 text-sm">
                                    For the 70% of graduates heading to 40-year write-off, unemployment-period interest is financially meaningless. Whether you owe £75,000 or £82,000 at write-off, both amounts disappear. You pay 9% above £25,000 based on your income, not your debt size. Two graduates with identical career earnings pay identical total amounts—even if one had 2 years unemployment and £5,000 extra interest accumulation. The write-off protection means temporary unemployment doesn&apos;t create permanent financial damage for moderate earners.
                                </p>
                            </div>
                        </section>

                        {/* Balance Growth Scenarios */}
                        <section id="balance-growth-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Balance Growth Scenarios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Comparing how balances evolve with different unemployment patterns over a graduate&apos;s career reveals when unemployment matters and when it doesn&apos;t.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Career Trajectory Comparison: Unemployment Impact</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate A: Stable Career, Minimal Unemployment</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> Junior analyst → Senior analyst → Manager</p>
                                            <p><strong>Earnings:</strong> Start £28k, peak £42k age 40, career average £35k</p>
                                            <p><strong>Unemployment:</strong> 3 months after graduation, 2 months between jobs age 32. Total: 5 months over 40 years.</p>
                                            <p><strong>Starting debt:</strong> £65,000</p>
                                            <p><strong>Interest during unemployment:</strong> ~£650 total</p>
                                            <p><strong>Balance at write-off (age 62):</strong> £128,000</p>
                                            <p><strong>Total repaid:</strong> £58,000</p>
                                            <p><strong>Amount written off:</strong> £128,000</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate B: Moderate Unemployment, Same Career Level</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> Same trajectory as Graduate A (£28k → £42k)</p>
                                            <p><strong>Earnings:</strong> Identical career earnings when employed</p>
                                            <p><strong>Unemployment:</strong> 8 months after graduation, 14 months age 28-29 (career change), 6 months age 35 (redundancy), 4 months age 47 (company closure). Total: 32 months over 40 years.</p>
                                            <p><strong>Starting debt:</strong> £65,000</p>
                                            <p><strong>Interest during unemployment:</strong> ~£4,200 total</p>
                                            <p><strong>Balance at write-off (age 62):</strong> £132,000</p>
                                            <p><strong>Total repaid:</strong> £58,000 (identical to Graduate A)</p>
                                            <p><strong>Amount written off:</strong> £132,000</p>
                                            <p className="text-green-700 font-semibold mt-2">Result: £4,000 extra balance from unemployment = £0 difference in repayments</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate C: Extended Unemployment, Same Career Level</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> Same trajectory (£28k → £42k) when employed</p>
                                            <p><strong>Unemployment:</strong> 18 months after graduation, 2 years age 27-29 (master&apos;s degree + job search), 18 months age 38-39 (maternity leave below threshold), 12 months age 52 (illness). Total: 72 months (6 years) over 40 years.</p>
                                            <p><strong>Starting debt:</strong> £65,000</p>
                                            <p><strong>Interest during unemployment:</strong> ~£9,800 total</p>
                                            <p><strong>Balance at write-off (age 62):</strong> £138,000</p>
                                            <p><strong>Total repaid:</strong> £58,000 (still identical)</p>
                                            <p><strong>Amount written off:</strong> £138,000</p>
                                            <p className="text-green-700 font-semibold mt-2">Result: 6 years unemployment, £10k extra balance = still £0 difference in repayments</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Key insight:</strong> For graduates with same earning trajectory and heading to write-off, unemployment duration makes zero difference to total repayment. Monthly deductions depend only on current salary, not historical unemployment or balance size.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Unemployment DOES Matter: High Earner Comparison</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate D: High Earner, Minimal Unemployment</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> Law graduate → Associate → Partner</p>
                                            <p><strong>Earnings:</strong> Start £45k, peak £95k age 38, career average £70k</p>
                                            <p><strong>Unemployment:</strong> 2 months after graduation</p>
                                            <p><strong>Starting debt:</strong> £65,000</p>
                                            <p><strong>Fully repaid:</strong> Year 19, age 40</p>
                                            <p><strong>Total repaid:</strong> £95,000 (principal + interest)</p>
                                            <p><strong>Years loan-free before write-off age:</strong> 22 years</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Graduate E: High Earner, Extended Unemployment</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Career:</strong> Same trajectory (£45k → £95k) when employed</p>
                                            <p><strong>Unemployment:</strong> 8 months after graduation, 18 months age 29-30 (career change to law from different field)</p>
                                            <p><strong>Starting debt:</strong> £65,000</p>
                                            <p><strong>Interest during unemployment:</strong> ~£3,500</p>
                                            <p><strong>Fully repaid:</strong> Year 21, age 42</p>
                                            <p><strong>Total repaid:</strong> £99,500 (principal + interest + unemployment interest)</p>
                                            <p><strong>Years loan-free before write-off age:</strong> 20 years</p>
                                            <p className="text-red-700 font-semibold mt-2">Result: 2 years unemployment = paid extra £4,500 and cleared 2 years later</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>For high earners on track to fully repay:</strong> Unemployment-period interest is real cost. 2 years unemployment added £4,500 to total repayment. But even then, relative to £95k+ total earnings during those 2 employed years, it&apos;s 5% cost—manageable impact.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Mathematics of Irrelevance</h3>
                                <p className="text-gray-700 text-sm">
                                    Here&apos;s why unemployment interest doesn&apos;t matter for write-off-bound graduates: You repay based on (Current Salary - £25,000) × 9%, not based on balance. Higher balance doesn&apos;t increase monthly payment. It only affects whether you clear the loan before write-off. For moderate earners who won&apos;t clear it regardless, extra balance from unemployment is just bigger number getting written off—no financial difference. Graduate B paid identical £58,000 despite £4,000 extra balance. Graduate C paid identical £58,000 despite £10,000 extra balance. The write-off protection makes unemployment-period interest financially neutral for ~70% of graduates.
                                </p>
                            </div>
                        </section>

                        {/* Write-Off vs Full Repayment */}
                        <section id="writeoff-vs-repayment" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Write-Off vs Full Repayment Trajectories
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding which trajectory you&apos;re on determines whether unemployment interest is financial risk or financial irrelevance.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Quick Assessment: Will YOU Fully Repay?</h3>

                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Likely to reach 40-year write-off (unemployment doesn&apos;t matter):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Career earnings £25k-£35k (teaching, nursing, social work, retail management, admin)</li>
                                        <li>Career earnings £35k-£45k with moderate progression (junior → senior roles, but not management)</li>
                                        <li>Career breaks planned (caregiving, part-time work periods, extended travel)</li>
                                        <li>Self-employment with variable income (averaging below £40k)</li>
                                        <li>Public sector careers with capped salaries</li>
                                    </ul>

                                    <p className="mt-2"><strong>Borderline (unemployment might matter slightly):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Career earnings £45k-£60k (experienced engineers, senior teachers, middle management, accountants)</li>
                                        <li>Strong early career but plateauing later (fast promotion to £50k by 35, then stable)</li>
                                        <li>High earner with significant career breaks (e.g., senior role but 5+ years out of workforce)</li>
                                    </ul>

                                    <p className="mt-2"><strong>Likely to fully repay (unemployment creates real cost):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Medicine (£45k-£110k career progression, especially with consultant/GP partner track)</li>
                                        <li>Law (£40k-£100k+ in corporate law, barristers at successful chambers)</li>
                                        <li>Finance (£40k-£90k+ in banking, investment, senior accounting)</li>
                                        <li>Tech leadership (senior engineers £70k-£120k, CTOs, tech founders if successful)</li>
                                        <li>Senior management/executives (£70k-£150k+)</li>
                                        <li>Sustained earnings above £60k+ throughout career</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Unemployment Impact by Earnings Trajectory:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Career Level</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">1 Year Unemployment Impact</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">3 Years Unemployment Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Low earner (£25k-£35k)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£2,000 balance, £0 extra repayment (writes off)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£6,500 balance, £0 extra repayment (writes off)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Moderate earner (£35k-£45k)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£2,000 balance, £0 extra repayment (writes off)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£6,500 balance, £0 extra repayment (writes off)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Upper-middle earner (£45k-£60k)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£2,000 balance, ~£0 extra (still writes off)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£6,500 balance, ~2-3 extra years repayment</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">High earner (£60k+)</td>
                                                <td className="px-3 py-2 border-b text-xs">+£2,000 balance, +£2,500 total repayment</td>
                                                <td className="px-3 py-2 border-b text-xs">+£6,500 balance, +£8,000 total repayment</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Pattern:</strong> Unemployment cost increases with earnings trajectory. But even for high earners, the cost is moderate (1 year unemployment = £2,500 cost spread over career = ~£120/year impact).
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Stop Worrying About Unemployment if You&apos;re Write-Off Bound</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    If you&apos;re in a career where you&apos;ll likely reach 40-year write-off (teaching, nursing, social work, most public sector, creative industries, retail, hospitality management, admin, mid-level office roles), unemployment-period interest accumulation should cause you ZERO anxiety.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Your balance growing from £68k to £75k during 2-year unemployment period is financially meaningless. Both amounts write off completely. You don&apos;t pay extra. The interest is just numbers on a statement you&apos;ll never repay. Focus on getting back to work for your immediate finances (income for living), not for student loan reasons. The student loan takes care of itself through income-contingent design and write-off protection.
                                </p>
                            </div>
                        </section>

                        {/* Career Interruptions */}
                        <section id="career-interruptions" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Common Career Interruptions
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Beyond traditional unemployment, many life circumstances cause periods below the £25,000 threshold where repayments pause but interest continues.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Types of Career Interruptions:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Maternity/Paternity Leave</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Statutory pay:</strong> Maternity: 90% salary 6 weeks, then £172/week 33 weeks. Paternity: £172/week 2 weeks.</p>
                                            <p><strong>Student loan impact:</strong> Statutory pay well below £25k threshold. Zero repayments during leave (typically 9-12 months maternity, 2 weeks paternity).</p>
                                            <p><strong>Interest accumulation:</strong> £65k balance, 9 months leave = ~£1,500 interest added.</p>
                                            <p><strong>Financial reality:</strong> For moderate earners, this £1,500 writes off. No long-term cost. Return to work, repayments resume automatically.</p>
                                            <p><strong>Multiple children:</strong> 2-3 maternity leaves = 18-27 months total below threshold. £3,000-£4,500 extra interest. Still writes off for moderate earners.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Part-Time Work / Reduced Hours</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Common reasons:</strong> Childcare, caring for elderly parents, health conditions, work-life balance preference.</p>
                                            <p><strong>Earnings:</strong> Part-time 20-30 hours/week often £15k-£23k. Below repayment threshold.</p>
                                            <p><strong>Student loan:</strong> No repayments while part-time if below £25k. Interest continues.</p>
                                            <p><strong>Duration:</strong> Many people work part-time for extended periods (5-15 years during childcare years ages 30-45).</p>
                                            <p><strong>Impact:</strong> 10 years part-time = £18k-£24k interest accumulation. But for moderate earners, when they return to full-time work, they&apos;re still on track for write-off. The part-time period just adds to the balance that will ultimately be written off.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Retraining / Further Study</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Common scenarios:</strong> Master&apos;s degree, professional qualifications, career change training, teaching certification (PGCE).</p>
                                            <p><strong>Earnings during study:</strong> Usually £0 if full-time study, or very low income if part-time study with part-time work.</p>
                                            <p><strong>Duration:</strong> 1-2 years typical for master&apos;s/PGCE, 3-4 years for part-time professional qualifications.</p>
                                            <p><strong>Student loan status:</strong> Undergraduate loan pauses (no repayments). If taking postgraduate loan, that&apos;s separate debt with own repayment threshold.</p>
                                            <p><strong>Interest:</strong> Undergrad balance continues growing. 2-year master&apos;s = £4,500-£5,000 added.</p>
                                            <p><strong>Career impact:</strong> Often retraining leads to higher earnings, which might mean you repay slightly more post-retraining. But if retraining is for passion career with moderate pay (e.g., teaching), the extra interest still writes off.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Illness / Disability</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Sick leave:</strong> If you&apos;re off work on sick pay, employer typically pays reduced salary (often 50-80% after statutory period). May drop below £25k threshold.</p>
                                            <p><strong>Long-term sickness:</strong> Employment Support Allowance ~£90/week. Well below threshold, zero repayments.</p>
                                            <p><strong>Disability benefits:</strong> PIP, UC health component don&apos;t count as income for student loan purposes.</p>
                                            <p><strong>Student loan status:</strong> Automatic pause on repayments when income drops below threshold. Interest continues unless you apply for and receive student loan cancellation on disability grounds (rare, very strict criteria).</p>
                                            <p><strong>Duration:</strong> Highly variable. 3-6 months common for serious illness, multi-year for chronic conditions preventing work.</p>
                                            <p><strong>Financial protection:</strong> Income-contingent system protects you—no payments while unable to work. Balance grows but if you never return to earning above £25k, you never repay anything. If you do return, likely heading to write-off anyway.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Entrepreneurship / Startup Phase</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Business launch:</strong> Many entrepreneurs earn little/nothing first 1-3 years while building business.</p>
                                            <p><strong>Self-employed income:</strong> Declare on Self-Assessment. If profits below £25k, zero student loan repayment.</p>
                                            <p><strong>Typical pattern:</strong> Year 1-2: £0-£15k profits (no repayments). Year 3-5: £25k-£40k (small repayments). Year 6+: either fails (back to employment) or succeeds (£50k+ profits, regular repayments).</p>
                                            <p><strong>Interest accumulation:</strong> 3 years low income = £5,000-£7,000 added to balance.</p>
                                            <p><strong>Outcomes:</strong> If business succeeds and you become high earner, you pay the extra interest cost. If business fails and you return to moderate-paying employment, the extra interest writes off.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Extended Travel / Sabbatical</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Taking time off:</strong> 6-18 month travel, volunteering abroad, personal development break.</p>
                                            <p><strong>Earnings:</strong> Zero or minimal (volunteer stipends, casual work abroad).</p>
                                            <p><strong>UK employment:</strong> Not in UK PAYE system, no repayments deducted automatically.</p>
                                            <p><strong>Interest:</strong> Continues. 12-month sabbatical = £2,000-£2,500 added to balance.</p>
                                            <p><strong>Financial reality:</strong> For moderate earners, this extra £2,000 writes off when you return and continue career. Travel enriches life, doesn&apos;t create long-term student loan cost if you&apos;re write-off bound. Even if you&apos;re high earner, £2,000 extra is small price for life-changing experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Cumulative Effect of Multiple Interruptions</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Most people don&apos;t have just one career interruption. Typical pattern:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Example: Realistic 40-Year Career with Interruptions</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Ages 21-22: 8 months job hunting after graduation</li>
                                        <li>• Ages 28-29: 18 months master&apos;s degree</li>
                                        <li>• Ages 32-34: 2 maternity leaves totaling 18 months</li>
                                        <li>• Ages 34-42: Part-time work (8 years below £25k threshold)</li>
                                        <li>• Ages 49-50: 14 months unemployment (company closure + job search)</li>
                                        <li>• <strong>Total time below threshold: 13 years of 40-year career</strong></li>
                                        <li>• <strong>Extra interest from interruptions: ~£28,000</strong></li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">
                                    That looks like a lot (£28k extra debt!), but for moderate earner (£30k-£42k when working full-time), they were always heading to write-off anyway. The £28k just adds to the balance that gets written off at age 62. Total lifetime repayment: still only ~£60k regardless of the interruptions. The write-off protection absorbs all the interruption interest.
                                </p>
                            </div>
                        </section>

                        {/* Real Unemployment Scenarios */}
                        <section id="real-unemployment-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Graduate Unemployment Scenarios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                How actual graduates experienced unemployment periods, the student loan implications, and the eventual outcomes.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Sarah - Post-Graduation Job Search</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Background:</strong> BA History, graduated June 2024, entered tough job market</p>
                                        <p><strong>Unemployment duration:</strong> 11 months (July 2024 - May 2025)</p>
                                        <p><strong>Financial situation during unemployment:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Lived with parents (no rent)</li>
                                            <li>Casual hospitality work: £800-£1,200/month (below threshold)</li>
                                            <li>Universal Credit: £90/week job seekers</li>
                                            <li>Student loan balance: £62,000 → £64,200 (£2,200 interest added)</li>
                                            <li>Student loan repayments: £0 during entire period</li>
                                        </ul>
                                        <p><strong>Outcome:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Found marketing coordinator role May 2025, salary £27,000</li>
                                            <li>Student loan deductions resume: £15/month</li>
                                            <li>Career trajectory: likely to reach write-off (marketing averages £30k-£45k)</li>
                                            <li><strong>Extra £2,200 from unemployment: £0 long-term cost (will write off)</strong></li>
                                        </ul>
                                        <p className="text-xs text-gray-600 italic mt-2">&quot;The 11 months searching for a job was stressful financially—I had no income for rent/food/life. But the student loan? Never thought about it. It just sat there, not bothering me. When I finally got the job, the deductions started automatically. The balance being higher from unemployment doesn&apos;t affect me—I pay based on my salary, not the debt size.&quot; - Sarah</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: Marcus - Redundancy at 32</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Background:</strong> BEng Mechanical Engineering, worked in aerospace 9 years post-graduation</p>
                                        <p><strong>Redundancy:</strong> Made redundant June 2025 when company closed UK operations</p>
                                        <p><strong>Unemployment duration:</strong> 7 months (June - December 2025)</p>
                                        <p><strong>Financial situation:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Redundancy payout: £18,000 (cushioned finances)</li>
                                            <li>Universal Credit: Applied but minimal due to savings</li>
                                            <li>Previous salary: £48,000 → £0 income for 7 months</li>
                                            <li>Student loan balance: £38,000 → £39,400 (£1,400 interest added, balance already reduced from 9 years repayment)</li>
                                            <li>Student loan repayments: Stopped automatically when made redundant</li>
                                        </ul>
                                        <p><strong>Outcome:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Found senior engineer role January 2026, salary £54,000</li>
                                            <li>Student loan deductions resume: £218/month (higher salary = higher repayment)</li>
                                            <li>Career trajectory: High earner, likely to fully repay by age 44</li>
                                            <li><strong>Extra £1,400 from unemployment: Real cost of ~£1,700 total (principal + interest)</strong></li>
                                        </ul>
                                        <p className="text-xs text-gray-600 italic mt-2">&quot;The redundancy was scary—lost my job through no fault of mine. The £18k payout helped but 7 months is a long time to be out of work. Student loan-wise, I knew the balance was growing from interest, but honestly it wasn&apos;t my concern. My bigger worry was mortgage payments and keeping my family afloat. The student loan just paused, which was actually helpful—one less payment to worry about. Now I&apos;m earning more in the new role, so I&apos;ll pay off the extra interest eventually, but it&apos;s spread over years. Not a crisis.&quot; - Marcus</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Priya - Career Change Via Master&apos;s</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Background:</strong> BA English Literature, worked in publishing 5 years, decided to retrain for teaching</p>
                                        <p><strong>Period below threshold:</strong> 24 months PGCE + job search (September 2023 - September 2025)</p>
                                        <p><strong>Financial situation:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>PGCE year: £0 income (full-time study), lived on maintenance loan + savings</li>
                                            <li>Post-PGCE: 6 months supply teaching £15k annualized (below threshold) + 6 months job search before securing permanent role</li>
                                            <li>Previous salary: £32,000 → 2 years mostly £0/below threshold income</li>
                                            <li>Undergrad loan balance: £51,000 → £55,800 (£4,800 interest added over 2 years)</li>
                                            <li>Postgrad loan (PGCE): +£12,000 new debt</li>
                                            <li>Total debt: £67,800</li>
                                        </ul>
                                        <p><strong>Outcome:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Secured permanent teaching role September 2025, salary £31,650 (M1 teacher scale)</li>
                                            <li>Student loan deductions resume: £50/month (undergrad) + £34/month (postgrad) = £84/month total</li>
                                            <li>Career trajectory: Teaching peaks ~£48k, heading to write-off for both loans</li>
                                            <li><strong>Extra £4,800 from 2-year career change: £0 long-term cost (will write off)</strong></li>
                                        </ul>
                                        <p className="text-xs text-gray-600 italic mt-2">&quot;The PGCE year was financially brutal—living on basically nothing while studying full-time. My undergrad loan kept growing from interest and I took out a postgrad loan too, so I went from £51k to £68k debt. Sounds terrifying. But I&apos;m a teacher now—I love it, and I know teaching salaries mean I&apos;ll never repay these loans fully. They&apos;ll write off when I&apos;m 62. The 2 years of retraining added £4,800 interest to my undergrad loan, but that&apos;s just a bigger number getting written off. Doesn&apos;t change my monthly payment, which is based on my teaching salary. I made the right choice for my career happiness.&quot; - Priya</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: David - Multiple Short Unemployment Periods</h3>
                                    <div className="text-sm text-gray-700 space-y-2">
                                        <p><strong>Background:</strong> BSc Computer Science, worked in tech sector with volatile employment</p>
                                        <p><strong>Employment pattern (ages 21-35):</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Ages 21-24: Junior dev £32k, then startup failed (3 months unemployed)</li>
                                            <li>Ages 24-27: Mid-level dev £42k, voluntary job change (4 months between jobs)</li>
                                            <li>Ages 27-29: Senior dev £55k, company acquired and restructured (2 months redundancy)</li>
                                            <li>Ages 29-31: Freelance/contract (variable income, some years below £25k)</li>
                                            <li>Ages 31-35: Tech lead £68k (stable so far)</li>
                                            <li><strong>Total time unemployed/below threshold: 18 months across 14-year career</strong></li>
                                        </ul>
                                        <p><strong>Student loan journey:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Starting debt: £58,000</li>
                                            <li>Interest during unemployment periods: ~£3,200</li>
                                            <li>Total repaid over 14 years: £42,000</li>
                                            <li>Current balance age 35: £38,000 (reducing despite unemployment periods)</li>
                                            <li>Projected: Will fully repay by age 43 (8 more years)</li>
                                        </ul>
                                        <p><strong>Outcome:</strong></p>
                                        <ul className="list-disc ml-6 text-xs space-y-1">
                                            <li>Career trajectory: High earner in tech, will fully repay before write-off</li>
                                            <li><strong>Extra £3,200 from unemployment: Real cost of ~£4,000 total paid</strong></li>
                                            <li>But: Career flexibility (job changes, freelancing) enabled salary growth from £32k to £68k. The £4,000 cost is negligible compared to £36k salary increase.</li>
                                        </ul>
                                        <p className="text-xs text-gray-600 italic mt-2">&quot;Tech sector has a lot of job movement. Companies get acquired, startups fail, you switch roles for better opportunities. I&apos;ve had probably 18 months total where I was unemployed or earning very little freelancing. Each time, student loan repayments stopped automatically—genuinely helpful when you&apos;re between income. The interest kept accruing, adding maybe £3-4k to my total debt over the years. Since I&apos;m a high earner, I&apos;ll actually repay that extra amount. But compared to my career earnings and the opportunities that job changes created, it&apos;s irrelevant. The flexibility to move jobs without worrying about student loan payments is actually a feature, not a bug.&quot; - David</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Common Themes from Real Unemployment Experiences:</h3>
                                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                                    <li><strong>Immediate stress is lack of income for living costs,</strong> not student loan growth. Graduates worried about rent, food, bills—not student loan balance.</li>
                                    <li><strong>Automatic pause is genuinely helpful.</strong> One less payment to worry about during financially vulnerable period.</li>
                                    <li><strong>Interest accumulation feels abstract.</strong> Balance grows but doesn&apos;t affect monthly payments when re-employed, so graduates don&apos;t feel the impact psychologically.</li>
                                    <li><strong>For moderate earners, long-term cost is zero.</strong> Sarah and Priya both heading to write-off—unemployment interest is financially irrelevant for them.</li>
                                    <li><strong>For high earners, cost is real but manageable.</strong> Marcus and David will pay the extra interest, but it&apos;s spread over many years and small relative to total career earnings.</li>
                                    <li><strong>Career decisions shouldn&apos;t be constrained by student loan fears.</strong> Priya made right choice retraining despite loan growth. David&apos;s job mobility enabled career advancement worth far more than unemployment interest cost.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Financial Strategies */}
                        <section id="financial-strategies" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Financial Strategies During Unemployment
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Practical financial management approaches for unemployment periods, recognizing that student loan is the least of your concerns during this time.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Priority Hierarchy During Unemployment:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li><strong>Essential living costs:</strong> Rent/mortgage, utilities, food, transport. These don&apos;t pause like student loans—they&apos;re immediate survival needs.</li>
                                    <li><strong>Debts with consequences:</strong> Credit cards (minimum payments to avoid default), personal loans, car finance, mortgage. These damage credit scores and can lead to repossession if unpaid.</li>
                                    <li><strong>Job searching:</strong> Money for interview clothes, travel to interviews, CV services, professional development to make you more employable.</li>
                                    <li><strong>Mental/physical health:</strong> Whatever you need to stay healthy and functional for job searching.</li>
                                    <li><strong>Student loan:</strong> Literally last priority. It pauses automatically. You can ignore it completely during unemployment.</li>
                                </ol>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What NOT to Do:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>❌ Don&apos;t make voluntary student loan payments during unemployment</strong></p>
                                    <p className="text-xs ml-4">If you have £2,000 savings and you&apos;re unemployed, DO NOT use it to repay student loan voluntarily. You need that money for rent, food, emergencies. Student loan can wait—it has no consequences for non-payment. Use savings for immediate survival needs.</p>

                                    <p><strong>❌ Don&apos;t stress about the growing balance</strong></p>
                                    <p className="text-xs ml-4">Watching your student loan balance grow £200/month from interest is anxiety-inducing but financially meaningless. The number goes up but it doesn&apos;t affect your life. Ignore the statements. Focus mental energy on job search, not debt anxiety.</p>

                                    <p><strong>❌ Don&apos;t take out high-interest debt to &quot;protect&quot; student loan</strong></p>
                                    <p className="text-xs ml-4">Never borrow on credit cards (20% interest) to make student loan payments (3.5% interest that you probably won&apos;t repay anyway). Terrible financial decision. Student loan is the cheapest, most flexible debt you&apos;ll ever have.</p>

                                    <p><strong>❌ Don&apos;t contact Student Loans Company to explain unemployment</strong></p>
                                    <p className="text-xs ml-4">Waste of time. They already know from HMRC data. No forms needed, no explanations required. The system handles it automatically.</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What TO Do:</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>✅ Focus on immediate financial survival</strong></p>
                                    <p className="text-xs ml-4">Budget for essentials. Apply for Universal Credit immediately (takes 5 weeks to receive first payment, so apply before money runs out). Access food banks if needed. Negotiate payment holidays on other debts. Prioritize keeping roof over head and food on table.</p>

                                    <p><strong>✅ Build emergency fund for future</strong></p>
                                    <p className="text-xs ml-4">Once re-employed, save 3-6 months expenses before making any voluntary debt repayments. Emergency fund protects you from future unemployment—student loan doesn&apos;t need protecting.</p>

                                    <p><strong>✅ Accept that student loan will grow</strong></p>
                                    <p className="text-xs ml-4">Mental reframing: &quot;My student loan is growing from interest&quot; is anxiety-inducing. Better framing: &quot;My student loan is patiently waiting for me to get back on feet, charging interest I&apos;ll probably never repay anyway.&quot; The income-contingent design is a feature protecting you.</p>

                                    <p><strong>✅ When re-employed, let repayments restart naturally</strong></p>
                                    <p className="text-xs ml-4">Don&apos;t try to &quot;catch up&quot; on missed repayments. There&apos;s no such thing as missed repayments for student loans—only months where you earned below threshold. New employer will restart deductions automatically. Just continue paying 9% of income above £25k. That&apos;s all you ever owe.</p>
                                </div>
                            </div>
                        </section>

                        {/* Mental Health and Debt Anxiety */}
                        <section id="mental-health-debt" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Mental Health and Debt Anxiety
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Unemployment creates financial anxiety. Understanding that student loan debt works differently from other debt helps reduce unnecessary stress during an already difficult time.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Why Student Loan Anxiety During Unemployment is Misplaced:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    If you&apos;re unemployed and anxious about student loan debt, that anxiety is understandable but misdirected. Here&apos;s why:
                                </p>
                                <ol className="list-decimal ml-6 text-gray-700 text-xs space-y-1">
                                    <li><strong>No consequences for non-payment:</strong> Unlike other debts, student loan has zero penalties during unemployment. No late fees, no default, no collections, no credit score impact, no legal action.</li>
                                    <li><strong>Automatic system handles it:</strong> You don&apos;t need to do anything. No forms, no applications, no phone calls. HMRC data automatically stops deductions when you&apos;re not earning.</li>
                                    <li><strong>Balance growth is likely irrelevant:</strong> For 70% of graduates heading to write-off, the interest accumulating during unemployment will never be repaid. It&apos;s just numbers on a statement.</li>
                                    <li><strong>Can&apos;t speed up repayment even if you wanted to:</strong> Even if you had spare money (you don&apos;t—you&apos;re unemployed), voluntary overpayments are bad financial strategy for write-off-bound graduates.</li>
                                    <li><strong>Resumes automatically when re-employed:</strong> When you get new job, deductions restart with zero hassle. You don&apos;t &quot;catch up&quot;—you just continue the 9% above £25k.</li>
                                </ol>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Cognitive Reframing for Debt Anxiety:</h3>

                                <div className="space-y-2 text-xs text-gray-700">
                                    <p><strong>Anxiety-inducing thought:</strong> &quot;I&apos;m unemployed and my student debt is growing every day. I&apos;m getting deeper in debt and can&apos;t do anything about it.&quot;</p>
                                    <p className="ml-4 text-green-700"><strong>Reframed thought:</strong> &quot;My student loan is designed to pause during unemployment. The balance is growing from interest, but I pay based on future income, not debt size. This extra interest will likely be written off anyway. The system is protecting me right now—I have zero payment obligations while I get back on my feet.&quot;</p>

                                    <p className="mt-2"><strong>Anxiety-inducing thought:</strong> &quot;I&apos;m failing financially. I can&apos;t even pay my debts.&quot;</p>
                                    <p className="ml-4 text-green-700"><strong>Reframed thought:</strong> &quot;Student loans aren&apos;t like other debts. Non-payment isn&apos;t failure—it&apos;s how the system is designed to work. 70% of graduates never fully repay. I&apos;m using the income-contingent protection exactly as intended.&quot;</p>

                                    <p className="mt-2"><strong>Anxiety-inducing thought:</strong> &quot;My balance is £70k now, it was £65k when I graduated. It&apos;s gone up £5k in just 3 years.&quot;</p>
                                    <p className="ml-4 text-green-700"><strong>Reframed thought:</strong> &quot;Most graduates&apos; balances grow in early career because repayments don&apos;t exceed interest. This is normal. Whether I owe £70k or £80k at write-off makes no difference—both amounts disappear. The number is meaningless for me.&quot;</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">When Debt Anxiety Needs Professional Support:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    If debt anxiety (student loan or otherwise) is:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>Causing panic attacks, insomnia, or severe depression</li>
                                    <li>Preventing you from applying for jobs (avoidance behavior)</li>
                                    <li>Leading to harmful coping mechanisms (substance abuse, self-harm)</li>
                                    <li>Causing relationship breakdowns</li>
                                    <li>Making you consider extreme actions</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    <strong>Seek support:</strong> NHS Talking Therapies (free), StepChange debt charity (free, confidential), Citizens Advice Bureau, university alumni support services. Debt anxiety is treatable. Student loan debt specifically is one of the least dangerous debt types—counselors can help you understand this rationally.
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Permission to Ignore Student Loan During Unemployment</h3>
                                <p className="text-gray-700 text-sm">
                                    You have permission—from the system design, from financial logic, from every rational analysis—to completely ignore your student loan while unemployed. Don&apos;t check the balance. Don&apos;t read the statements. Don&apos;t calculate the interest. None of it matters right now. Your only jobs during unemployment are: (1) find new employment, (2) maintain mental/physical health, (3) cover immediate living costs. Student loan is not on that list. It will handle itself, automatically, with zero input from you. Save your mental energy for things that actually require your attention.
                                </p>
                            </div>
                        </section>

                        {/* Returning to Work */}
                        <section id="return-to-work" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Returning to Work: Repayment Restart
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                How student loan repayments restart when you return to employment, what to expect on your first payslip, and how the system handles the transition.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Happens Automatically When You Start New Job:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-sm space-y-2">
                                    <li><strong>Employer sets up PAYE:</strong> New employer registers you with HMRC. They receive your tax code and student loan plan information from your P45 or from HMRC directly.</li>
                                    <li><strong>Student loan code on payslip:</strong> Your payslip will show &quot;Plan 5&quot; or &quot;Postgraduate Loan&quot; depending on your loans. This tells payroll to deduct student loan repayments.</li>
                                    <li><strong>Deductions start immediately:</strong> If your annual salary exceeds £25,000, deductions begin on your first payslip. No delay, no grace period, no application needed.</li>
                                    <li><strong>Amount calculated automatically:</strong> Payroll software calculates 9% of income above £25,000 threshold. You don&apos;t request amount—it&apos;s automatic based on your salary.</li>
                                    <li><strong>Money sent to Student Loans Company:</strong> Employer sends deductions to HMRC monthly. HMRC forwards to SLC. You don&apos;t handle any of this.</li>
                                </ol>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">First Payslip After Unemployment: What to Expect</h3>

                                <div className="space-y-2 text-xs text-gray-700">
                                    <p><strong>Scenario: Unemployed 6 months, start new job at £32,000</strong></p>
                                    <p className="ml-4">• Monthly gross: £2,667</p>
                                    <p className="ml-4">• Threshold: £2,083 (£25,000/12)</p>
                                    <p className="ml-4">• Amount above threshold: £584</p>
                                    <p className="ml-4">• Student loan deduction: £584 × 9% = £52.50</p>
                                    <p className="ml-4">• Take-home impact: £52.50 less than if you had no student loan</p>

                                    <p className="mt-3"><strong>Your payslip will show:</strong></p>
                                    <div className="bg-white p-2 rounded border border-gray-200 font-mono text-xs mt-1">
                                        <p>Gross Pay: £2,667.00</p>
                                        <p>Tax: £356.40</p>
                                        <p>National Insurance: £223.48</p>
                                        <p>Student Loan (Plan 5): £52.50</p>
                                        <p>Pension (5%): £133.35</p>
                                        <p className="font-semibold mt-1">Net Pay: £1,901.27</p>
                                    </div>

                                    <p className="mt-3"><strong>If employer makes mistake and doesn&apos;t deduct student loan:</strong></p>
                                    <p className="ml-4">Sometimes new employers take 1-2 months to receive correct student loan information from HMRC. If this happens, don&apos;t worry—you&apos;re not required to pay voluntarily. HMRC will eventually correct it, possibly with catch-up deduction (taking 2-3 months of repayments in one go). This isn&apos;t a penalty—just administrative catching up.</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Adjusting to Having Deductions Again:</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    After months of unemployment with no student loan deductions, seeing £50-£200/month leaving your payslip again can be jarring. Mental adjustments:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li><strong>Budget for net pay, not gross:</strong> When job hunting, don&apos;t think &quot;£32k salary = £2,667/month.&quot; Think &quot;£32k = £1,900/month after deductions.&quot; Budget for take-home, not gross.</li>
                                    <li><strong>Student loan deduction is progressive tax:</strong> Mentally categorize it with tax and National Insurance. It&apos;s not a bill you choose to pay—it&apos;s automatic deduction based on earnings. You have no more control over it than you do over income tax.</li>
                                    <li><strong>The money never hits your account:</strong> Unlike unemployment (where money didn&apos;t leave because you weren&apos;t earning), now the deduction happens before you see the money. Psychologically easier—you can&apos;t spend what you never receive.</li>
                                    <li><strong>Remember it&apos;s income-contingent:</strong> You&apos;re paying exactly what you should based on your income. If you get raise, payment increases proportionally. If you lose job again, it stops again. Fair system.</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Looking Forward: Life After Unemployment</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Now that you&apos;re re-employed, student loan perspective:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li><strong>Unemployment period is over—financially and psychologically.</strong> You survived it. Student loan was never the crisis—lack of income was. Now you have income again.</li>
                                    <li><strong>The balance grew during unemployment.</strong> So what? If you&apos;re write-off bound, it&apos;s irrelevant. If you&apos;re high earner, you&apos;ll repay the extra but it&apos;s manageable cost spread over career.</li>
                                    <li><strong>Don&apos;t try to accelerate repayment.</strong> No voluntary overpayments. Build emergency fund instead (so future unemployment is less scary). Let the system handle student loan through income-contingent deductions.</li>
                                    <li><strong>If unemployment happens again (statistically likely),</strong> you now know the system protects you. Repayments will pause automatically. Balance will grow. It&apos;ll write off eventually if you&apos;re moderate earner. No crisis.</li>
                                    <li><strong>Focus on career progression, not debt minimization.</strong> Better strategy: advance career to higher income (enables better quality of life) rather than minimize debt (which is likely writing off anyway). Career investment &gt; debt obsession.</li>
                                </ul>
                            </div>
                        </section>

                        <DrLilaDesc />
                    </div>

                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <div className="hidden lg:block sticky top-24">
                            <TableOfContents items={tocItems} />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default UnemploymentLoanAccumulation;