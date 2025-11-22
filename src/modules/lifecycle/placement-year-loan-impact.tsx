import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const PlacementYearLoanImpact: React.FC = () => {
    const tocItems = [
        { id: "placement-year-funding", title: "Placement Year Funding", level: 2 },
        { id: "earning-while-studying", title: "Earning During Placement", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Placement Year Loan Impact</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Placement Year Student Loan Impact: Working While Studying
                    </h1>
                    <p className="text-xl text-gray-600">
                        Reduced tuition fees, earning during placement, and loan accumulation for sandwich year students
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
                                Placement years (sandwich years) are work placements between Years 2 and 3 of your degree. Tuition fees drop to £1,850 (20% of standard rate), and you earn a salary (typically £16,000-£22,000). Your student status  continues, but you're employed full-time.
                            </p>
                        </section>

                        <section id="placement-year-funding" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Placement Year Funding</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Tuition: £1,850 (covered by tuition fee loan). Maintenance loan: Available but many students decline it since placement salary covers living costs. You're still a student so no loan repayments required despite earning £16k-£22k.</p>
                            </div>
                        </section>

                        <section id="earning-while-studying" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Earning During Placement</h2>
                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <p className="text-gray-700 text-sm">Placement year is financially advantageous: low tuition (£1,850 vs £9,250), earn £16k-£22k gross, no loan repayments during placement. Many students save £5,000-£10,000 during placement year, reducing final year borrowing or building emergency fund.</p>
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

export default PlacementYearLoanImpact;
