import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const RepeatYearFunding: React.FC = () => {
    const tocItems = [
        { id: "repeat-year-funding-rules", title: "Repeat Year Funding Rules", level: 2 },
        { id: "extra-year-eligibility", title: "Extra Year Eligibility", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Repeat Year Funding</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Repeat Year Funding: Student Loan Eligibility for Failed Years
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding funding for resits, repeating years, and extra year eligibility limits
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
                                Failing a year doesn&apos;t automatically disqualify you from student finance, but repeated failures exhaust your funding eligibility. Student Finance England provides length of course + 1 year. For a 3-year degree, that&apos;s 4 years total.  If you&apos;ve already used 4 years and haven&apos;t graduated,funding stops.
                            </p>
                        </section>

                        <section id="repeat-year-funding-rules" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repeat Year Funding Rules</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">You can repeat one year and still receive funding (using your +1 year). Fail Year 1, repeat it, then complete Years 2-3 normally = 4 years total, still funded. But fail Year 1 twice or fail multiple years-funding ends before degree completion.</p>
                            </div>
                        </section>

                        <section id="extra-year-eligibility" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Extra Year Eligibility</h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">If you exhaust your +1 year, you can apply for compassionate grounds funding (serious illness, bereavement). Rarely approved for academic failure alone. Universities may allow self-funded repeat years.</p>
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

export default RepeatYearFunding;
