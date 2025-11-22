import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const RetirementOutstandingLoans: React.FC = () => {
    const tocItems = [
        { id: "retirement-write-off", title: "Retirement Age and Write-Off", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Retirement: Outstanding Loans</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Retirement with Outstanding Student Loans: 40-Year Write-Off
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding student loan write-off at retirement age, outstanding balances, and pension freedom from loan deductions
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
                                Under Plan 5, student loans write off 40 years after the April you first became eligible to repay. Graduate 2027, write-off April 2068—age 61-62 for typical students. Most moderate earners carry student loan debt into retirement, which writes off automatically. Your pension is then fully yours.
                            </p>
                        </section>

                        <section id="retirement-write-off" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retirement Age and Write-Off</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Plan 5 write-off at 40 years means you reach retirement (~65) while still owing. At 65, repayments cease (no earned income), and loan writes off shortly after. Outstanding balance—£10k, £50k, £100k—all wiped. Your state pension and private pension are yours completely, no loan deductions.</p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <p className="text-gray-700 text-sm">This is why most moderate earners shouldn't worry about total debt size. Whether you owe £45k or £75k at retirement, both write off. You paid the same 9% above threshold throughout your working life. Total debt number is largely irrelevant for write-off-bound graduates.</p>
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

export default RetirementOutstandingLoans;
