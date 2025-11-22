import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const FirstJobRepaymentShock: React.FC = () => {
    const tocItems = [
        { id: "april-start", title: "April Repayment Start", level: 2 },
        { id: "salary-sacrifice", title: "Understanding 9% Deduction", level: 2 },
    ];

    return (
        <div className="bg-white">
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">Studen&quot;t Loan Lifecycle</Link></li>
                            <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Firs&quot;t Job Repaymen&quot;t Shock</span></li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Firs&quot;t Job Repaymen&quot;t Shock: When Studen&quot;t Loan Deductions Begin
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding firs&quot;t payslip deductions, Plan 5 repaymen&quot;t star&quot;t timeline, and managing graduate salary expectations
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
                                Graduating in June, starting a £30,000 job in September—many graduates are shocked to see studen&quot;t loan deductions appear on their firs&quot;t payslip. Under Plan 5, repayments begin the April after you finish studying, OR when you star&quot;t earning above £25,000, whichever comes later. Your employer deducts 9% above the threshold automatically via PAYE.
                            </p>
                        </section>

                        <section id="april-start" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">April Repaymen&quot;t Start</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <p className="text-gray-700 text-sm">Graduate June 2024, star&quot;t earning £30k in September 2024: Repayments begin April 2025. Graduate June 2024, star&quot;t earning £30k in May 2025: Repayments begin immediately (earning above threshold after April graduation date).</p>
                            </div>
                        </section>

                        <section id="salary-sacrifice" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding 9% Deduction</h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <p className="text-gray-700 text-sm">£30k salary: £25k threshold = £5k above. 9% of £5k = £450 annual deduction = £37.50 monthly. This appears on your payslip as &quot;SL&quot; or &quot;Studen&quot;t Loan&quot; alongside tax and National Insurance. Calculate yours: (Annual Salary - £25,000) × 0.09 ÷ 12 = Monthly payment.</p>
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

export default FirstJobRepaymentShock;
