import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const StudyAbroadYearLoans: React.FC = () => {
    const tocItems = [
        { id: "year-abroad-funding", title: "Year Abroad Funding Rules", level: 2 },
        { id: "erasmus-costs", title: "Erasmus+ and Study Abroad Costs", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Study Abroad Year Loans</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Study Abroad Year Student Loans: Erasmus+ and Exchange Funding
                    </h1>
                    <p className="text-xl text-gray-600">
                        Year abroad funding, reduced tuition fees, travel grants, and living cost coverage for international study
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
                                Many degrees include a year studying abroad. Your student finance continues, but tuition fees are typically reduced to 15% of the standard £9,250 (about £1,388) during your year abroad. Maintenance loans remain available, and you may receive additional Erasmus+ grants for European study.
                            </p>
                        </section>

                        <section id="year-abroad-funding" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Year Abroad Funding Rules</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">UK universities charge reduced fees (15% of standard rate) for year abroad. You still receive full maintenance loan based on parental income. Erasmus+ grants (if studying in Europe) provide £300-£400/month additional funding. These don&apos;t need repaying.</p>
                            </div>
                        </section>

                        <section id="erasmus-costs" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Erasmus+ and Study Abroad Costs</h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">Living costs vary dramatically by country. Scandinavia expensive (£1,200+/month), Southern/Eastern Europe cheaper (£600-£800/month). Your UK maintenance loan may not cover full costs—budget for £2,000-£5,000 additional funding from savings or parental contribution depending on destination.</p>
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

export default StudyAbroadYearLoans;
