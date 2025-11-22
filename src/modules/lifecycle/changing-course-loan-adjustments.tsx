import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const ChangingCourseLoanAdjustments: React.FC = () => {
    const tocItems = [
        { id: "switching-degrees", title: "Switching Degrees and Funding", level: 2 },
        { id: "funding-implications", title: "Funding Implications of Course Changes", level: 2 },
        { id: "transfer-process", title: "The Transfer Process", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Changing Course: Loan Adjustments</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Changing Course: Student Loan Adjustments and Funding Implications
                    </h1>
                    <p className="text-xl text-gray-600">
                        Switching degrees, funding implications, and repeat year eligibility when changing your university course
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
                                Approximately 10% of UK students change their course during their first two years. Your funding continues, but years spent on your original course count toward your total funding limit. Understanding the loan implications helps you make informed decisions about switching degrees.
                            </p>
                        </section>

                        <section id="switching-degrees" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Switching Degrees and Funding</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">You get length of course + 1 year funding. Switch after Year 1, you have 3 years left for a new 3-year degree. The debt from Year 1 remains—you don't get a "refund" for the original course tuition or maintenance loans.</p>
                            </div>
                        </section>

                        <section id="funding-implications" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Funding Implications</h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Internal transfers: Usually seamless funding continuation. External transfers (different university): Inform Student Finance immediately to avoid payment delays.</p>
                            </div>
                        </section>

                        <section id="transfer-process" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Transfer Process</h2>
                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <p className="text-gray-700 text-sm">Contact university student support, apply via UCAS if changing universities, inform Student Finance England of new course details within 5 days to avoid funding  interruption.</p>
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

export default ChangingCourseLoanAdjustments;
