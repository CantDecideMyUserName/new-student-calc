import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const DroppingOutLoanConsequences: React.FC = () => {
    const tocItems = [
        { id: "partial-degree-debt", title: "Partial Degree Debt: What You Owe", level: 2 },
        { id: "no-qualification-repayment", title: "Repayment Without a Degree", level: 2 },
        { id: "re-enrolling-options", title: "Re-Enrolling and Further Loan Eligibility", level: 2 },
        { id: "alternatives-to-dropping-out", title: "Alternatives to Dropping Out", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Dropping Out: Loan Consequences</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Dropping Out: Student Loan Consequences and Repayment Obligations
                    </h1>
                    <p className="text-xl text-gray-600">
                        Financial impact of leaving university early, partial degree debt, and repayment without a qualification
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
                                Approximately 6-7% of UK undergraduates drop out before completing their degree. If you're considering dropping out or have already left, understanding your student loan obligations is critical. The harsh reality: you owe every penny borrowed, regardless of whether you completed your degree. But the repayment terms are identical to graduates—9% above the threshold for 40 years, then write-off.
                            </p>
                        </section>

                        <section id="partial-degree-debt" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partial Degree Debt: What You Owe</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you drop out, you keep all student loans disbursed up to that point. There's no "refund" mechanism.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Debt by Dropout Timing:</h3>
                                <p className="text-gray-700 text-sm">After Year 1: ~£19,250 | After Year 2: ~£38,500 | After Year 3: ~£57,750</p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Can I Avoid Repaying If I Don't Graduate?</h3>
                                <p className="text-gray-700 text-sm">
                                    No. Student loan repayment is based on income, not qualification status. If you earn above £25,000, you make 9% repayments like graduates.
                                </p>
                            </div>
                        </section>

                        <section id="no-qualification-repayment" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repayment Without a Degree</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Your repayment obligations are identical to graduates, but your earning trajectory is typically lower without a degree qualification.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Early dropouts (Year 1) often pay less total than graduates because of lower debt and earnings. But earning £25k instead of £35k costs £400k+ lifetime income—vastly exceeding any loan repayment savings.</p>
                            </div>
                        </section>

                        <section id="re-enrolling-options" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Re-Enrolling and Further Loan Eligibility</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student Finance England funds for length of course + 1 year. Drop out after Year 1, you have 3 years remaining funding. Re-enrolling doesn't cancel your dropout debt—it adds to your new degree debt.
                            </p>
                        </section>

                        <section id="alternatives-to-dropping-out" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternatives to Dropping Out</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">1. Intermission/Suspension of Studies</h3>
                                    <p className="text-gray-700 text-sm">Suspend studies for 1-2 years. Your place is retained and funding clock pauses.</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">2. Switching Courses</h3>
                                    <p className="text-gray-700 text-sm">Transfer internally or externally via UCAS to continue without dropping out.</p>
                                </div>
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

export default DroppingOutLoanConsequences;
