import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const DeathLoanCancellation: React.FC = () => {
    const tocItems = [
        { id: "death-cancellation-rules", title: "Death Cancellation Rules", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Death: Loan Cancellation</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Death and Student Loan Cancellation: No Estate Liability
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding automatic loan cancellation upon death, no estate recovery, and protection for families
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
                                If the borrower dies, their student loan is automatically cancelled. No repayment from the estate, no liability for family members, no inheritance reduction. Student Finance England writes off the entire outstanding balance—£5k or £75k, it's completely wiped.
                            </p>
                        </section>

                        <section id="death-cancellation-rules" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Death Cancellation Rules</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">UK student loans are not secured debt. They don't pass to spouses, children, parents, or estates. Send death certificate to Student Finance England—they cancel the loan within weeks. Any PAYE deductions made after death are refunded to the estate.</p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <p className="text-gray-700 text-sm">This differs from private loans, mortgages, or credit cards, which ARE recovered from estates. Student loans are unique: they're income-contingent in life and completely forgiven in death. This protects families and ensures student debt never becomes inherited burden.</p>
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

export default DeathLoanCancellation;
