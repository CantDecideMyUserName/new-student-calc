import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const UnemploymentLoanAccumulation: React.FC = () => {
    const tocItems = [
        { id: "unemployment-repayments", title: "Unemployment and Repayments", level: 2 },
        { id: "interest-during-unemployment", title: "Interest During Unemployment", level: 2 },
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
                        How unemployment affects student loan repayments, interest accumulation, and long-term debt growth
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    <div className="lg:flex-1 lg:min-w-0">
                        <section className="mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                If you&apos;re unemployed or earning below £25,000, you make zero student loan repayments. But interest continues accruing at RPI. Extended unemployment means your balance grows despite making no payments. Under Plan 5&apos;s 40-year write-off, this often doesn&apos;t matter—most moderate earners never repay fully anyway.
                            </p>
                        </section>

                        <section id="unemployment-repayments" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Unemployment and Repayments</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Earning below £25k or unemployed: £0 monthly repayment. HMRC automatically stops deductions when you&apos;re not earning. You don&apos;t need to inform Student Finance—they work from PAYE data. Repayments resume automatically when you earn above threshold again.</p>
                            </div>
                        </section>

                        <section id="interest-during-unemployment" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest During Unemployment</h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">Interest accrues at RPI regardless of employment status. 1 year unemployed on £50k balance at 3% RPI = £1,500 additional debt. But for most graduates, this additional debt will be written off at 40 years anyway. Only high earners who&apos;ll fully repay should worry about unemployment-period interest accumulation.</p>
                            </div>
                        </section>

                        <DrLilaDesc />
                    </div>

                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default UnemploymentLoanAccumulation;
