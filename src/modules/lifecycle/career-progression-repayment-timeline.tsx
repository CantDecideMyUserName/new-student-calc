import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const CareerProgressionRepaymentTimeline: React.FC = () => {
    const tocItems = [
        { id: "salary-growth-repayment", title: "Salary Growth and Repayment", level: 2 },
        { id: "full-repayment-timeline", title: "Full Repayment Timeline by Career", level: 2 },
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
                            <li><span className="font-medium text-gray-800" aria-current="page">Career Progression Repayment</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Career Progression and Student Loan Repayment Timeline
                    </h1>
                    <p className="text-xl text-gray-600">
                        How salary growth affects total repayment, full repayment timelines by career, and write-off vs clearance scenarios
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
                                Your career trajectory determines whether you repay fully or reach write-off. Start £28k, stay £35k: write-off likely. Start £35k, reach £60k+: full repayment possible within 15-25 years. Understanding your likely path helps plan financially.
                            </p>
                        </section>

                        <section id="salary-growth-repayment" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Salary Growth and Repayment</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Annual repayment = (Salary - £25k) × 9%. At £30k: £450/year. At £40k: £1,350/year. At £60k: £3,150/year. As salary grows, repayments accelerate dramatically. £10k salary increase adds £900 annual repayment.</p>
                            </div>
                        </section>

                        <section id="full-repayment-timeline" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Repayment Timeline by Career</h2>
                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <p className="text-gray-700 text-sm mb-2"><strong>High Earner (£40k starting, £70k peak):</strong> Full repayment in 12-18 years | Total paid: ~£80k-£100k</p>
                                <p className="text-gray-700 text-sm mb-2"><strong>Moderate Earner (£30k starting, £45k peak):</strong> 40-year write-off | Total paid: ~£40k-£50k</p>
                                <p className="text-gray-700 text-sm"><strong>Lower Earner (£25k-£35k career):</strong> 40-year write-off | Total paid: ~£20k-£35k</p>
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

export default CareerProgressionRepaymentTimeline;
