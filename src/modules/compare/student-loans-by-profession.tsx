import Link from 'next/link'
import React from 'react'

const StudentLoansByProfessionPage = () => {
    return (
        <main className="space-y-12 pb-16">
            {/* Hero / breadcrumb */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><Link className="hover:text-blue-700 hover:underline" href="/compare/">Compare</Link></li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li><span className="font-medium text-gray-800" aria-current="page">Student Loans by Profession</span></li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Student Loan Repayments by Profession: UK Career Guide
                    </h1>
                    <p className="text-xl text-gray-600">
                        Discover how different UK careers affect your student loan repayments, from entry-level salaries to lifetime costs.
                        Compare professions to understand which careers lead to full repayment and which benefit from loan write-off.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="max-w-4xl mx-auto px-4">
                <div className="prose max-w-none">
                    <p>
                        Your choice of profession significantly impacts your student loan repayment journey. Some careers lead to full
                        loan repayment within 10-15 years, while others may never fully repay before the write-off period. Understanding
                        how your chosen profession affects your student loan can help you make informed financial decisions.
                    </p>
                    <p>
                        This guide breaks down student loan repayments across various UK professions, showing typical salary progressions,
                        monthly repayments, and lifetime costs. We&apos;ll help you understand whether your career path means you&apos;ll benefit
                        from the loan write-off or should consider overpayment strategies.
                    </p>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-gray-700 text-sm">
                        <strong>Key Insight:</strong> The UK student loan system means that borrowers in different professions effectively
                        pay vastly different amounts for the same university education. High earners may repay 150% of what they borrowed
                        (principal + interest), while middle earners often repay only 40-60% before write-off.
                    </p>
                </div>
            </section>

            {/* Understanding the Impact */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Understanding How Your Profession Affects Repayments
                </h2>
                <div className="prose max-w-none">
                    <p>
                        Student loan repayments are based on your income, not your loan balance. You pay 9% of everything you earn above
                        the repayment threshold (£27,295 for Plan 2, £25,000 for Plan 5). This means:
                    </p>
                    <ul>
                        <li><strong>Higher-earning professions</strong> make larger monthly payments and may repay their full loan plus interest</li>
                        <li><strong>Middle-income professions</strong> make moderate payments but often don&apos;t repay the full amount before write-off</li>
                        <li><strong>Lower-earning professions</strong> make minimal or no payments and benefit most from the eventual write-off</li>
                    </ul>
                    <p>
                        The write-off period (30 years for Plan 2, 40 years for Plan 5) means that many graduates will never fully repay
                        their loans, regardless of how much they borrowed. For these borrowers, their student loan functions more like a
                        graduate tax than traditional debt.
                    </p>
                </div>
            </section>

            {/* High-Earning Professions */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    High-Earning Professions: Full Repayment Expected
                </h2>
                <div className="prose max-w-none">
                    <p>
                        These professions typically lead to incomes high enough that graduates will repay their full loan balance plus
                        significant interest before the write-off date. For these careers, student loans function more like traditional debt.
                    </p>
                </div>

                <div className="mt-6 space-y-6">
                    {/* Medicine */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Medicine & Dentistry</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Foundation Year)</p>
                                <p className="text-lg font-semibold text-gray-800">£32,000 - £37,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Consultant/GP Partner)</p>
                                <p className="text-lg font-semibold text-gray-800">£85,000 - £120,000+</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £70,000 - £100,000 (longer courses, higher living costs)</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £90,000 salary:</strong> £470/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will fully repay loan in 15-25 years depending on specialization</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Medical professionals typically have the largest student loan balances but also the highest earning potential.
                            Most doctors and dentists will repay their full loan, though junior doctors may struggle initially with high
                            debt-to-income ratios.
                        </p>
                    </div>

                    {/* Law */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Law (Corporate/City)</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Trainee)</p>
                                <p className="text-lg font-semibold text-gray-800">£45,000 - £50,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Senior Associate)</p>
                                <p className="text-lg font-semibold text-gray-800">£80,000 - £150,000+</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £60,000 - £90,000 (including LPC/SQE costs)</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £100,000 salary:</strong> £545/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> City lawyers will fully repay in 12-20 years</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            City and corporate lawyers at top firms earn enough to comfortably repay their loans in full. However, many
                            solicitors outside of London or in high-street practice may not reach these salary levels and might benefit
                            from write-off.
                        </p>
                    </div>

                    {/* Investment Banking & Finance */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Investment Banking & Finance</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Analyst)</p>
                                <p className="text-lg font-semibold text-gray-800">£55,000 - £70,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (VP/Director)</p>
                                <p className="text-lg font-semibold text-gray-800">£120,000 - £300,000+</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £45,000 - £60,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £150,000 salary:</strong> £920/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will fully repay in 8-15 years</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Investment bankers and those in high finance typically repay their loans fastest due to very high salaries
                            from early career. These graduates may benefit from voluntary overpayments to reduce total interest paid.
                        </p>
                    </div>

                    {/* Software Engineering (Senior) */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Software Engineering (Senior/Tech)</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Graduate)</p>
                                <p className="text-lg font-semibold text-gray-800">£30,000 - £45,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Senior/Lead)</p>
                                <p className="text-lg font-semibold text-gray-800">£70,000 - £120,000+</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £80,000 salary:</strong> £395/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will likely fully repay in 15-25 years</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Senior software engineers, especially those at major tech companies or with in-demand skills, typically reach
                            high enough salaries to fully repay their loans. However, progression varies significantly based on location
                            (London vs regional) and company size.
                        </p>
                    </div>
                </div>
            </section>

            {/* Middle-Earning Professions */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Middle-Earning Professions: Partial Repayment Expected
                </h2>
                <div className="prose max-w-none">
                    <p>
                        These professions typically result in graduates repaying 40-80% of their loan balance before write-off. For these
                        careers, voluntary overpayments rarely make financial sense since a significant portion will be written off anyway.
                    </p>
                </div>

                <div className="mt-6 space-y-6">
                    {/* Teaching */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Teaching</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (NQT)</p>
                                <p className="text-lg font-semibold text-gray-800">£28,000 - £30,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Main Scale/Leadership)</p>
                                <p className="text-lg font-semibold text-gray-800">£35,000 - £50,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £40,000 salary:</strong> £95/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 50-70% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Most teachers will not fully repay their student loans before the 30-year write-off period. This makes teaching
                            one of the professions where the loan functions most like a graduate tax. Teachers should focus on other
                            financial priorities rather than voluntary overpayments.
                        </p>
                    </div>

                    {/* Nursing */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Nursing</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Band 5)</p>
                                <p className="text-lg font-semibold text-gray-800">£28,000 - £34,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Band 6-7)</p>
                                <p className="text-lg font-semibold text-gray-800">£35,000 - £48,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £35,000 - £50,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £38,000 salary:</strong> £80/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 40-60% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Nurses typically have lower loan balances (especially those who started before 2017 when bursaries existed) but
                            also relatively modest salary progression. Most nurses will benefit significantly from loan write-off and should
                            not make voluntary overpayments.
                        </p>
                    </div>

                    {/* Accountancy */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Accountancy</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Graduate)</p>
                                <p className="text-lg font-semibold text-gray-800">£25,000 - £35,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Qualified/Senior)</p>
                                <p className="text-lg font-semibold text-gray-800">£45,000 - £70,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £55,000 salary:</strong> £207/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Borderline - may or may not fully repay</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Accountants are in the &quot;borderline&quot; category where outcomes vary significantly based on career progression.
                            Those reaching senior positions at Big Four firms or in finance may fully repay, while others in industry or
                            smaller practices will benefit from write-off.
                        </p>
                    </div>

                    {/* Engineering */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Engineering (Civil, Mechanical)</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Graduate)</p>
                                <p className="text-lg font-semibold text-gray-800">£28,000 - £35,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Senior/Chartered)</p>
                                <p className="text-lg font-semibold text-gray-800">£45,000 - £65,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £50,000 salary:</strong> £170/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 60-90% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Engineers typically earn solid middle-class salaries with good progression, but most won&apos;t quite reach the
                            threshold needed to fully repay modern student loans. Those moving into management or specialized fields may
                            fully repay.
                        </p>
                    </div>

                    {/* Marketing & Business */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Marketing & Business Management</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Graduate)</p>
                                <p className="text-lg font-semibold text-gray-800">£22,000 - £30,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Manager/Senior)</p>
                                <p className="text-lg font-semibold text-gray-800">£40,000 - £60,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £45,000 salary:</strong> £133/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 50-75% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Marketing and business roles vary widely in earning potential. While some reach senior management with high
                            salaries, many graduates in these fields will not fully repay their loans and should plan accordingly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lower-Earning Professions */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Lower-Earning Professions: Minimal Repayment, Maximum Write-Off Benefit
                </h2>
                <div className="prose max-w-none">
                    <p>
                        These professions typically result in graduates repaying less than 40% of their loan balance, with many making
                        minimal or no payments throughout the repayment period. For these careers, student loans truly function as a
                        graduate tax with no downside to borrowing the maximum amount.
                    </p>
                </div>

                <div className="mt-6 space-y-6">
                    {/* Social Work */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Work</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Newly Qualified)</p>
                                <p className="text-lg font-semibold text-gray-800">£26,000 - £32,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Senior Practitioner)</p>
                                <p className="text-lg font-semibold text-gray-800">£35,000 - £45,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £35,000 - £50,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £35,000 salary:</strong> £58/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 20-40% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Social workers provide invaluable services but earn relatively modest salaries. Most will repay only a fraction
                            of their student loan before write-off. These graduates benefit enormously from the loan system and should never
                            consider voluntary overpayments.
                        </p>
                    </div>

                    {/* Creative Arts */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Creative Arts & Design</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Entry Level)</p>
                                <p className="text-lg font-semibold text-gray-800">£18,000 - £25,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Established)</p>
                                <p className="text-lg font-semibold text-gray-800">£25,000 - £40,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £30,000 salary:</strong> £20/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 10-30% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Creative professionals often earn below the national average, especially early in their careers. Many will make
                            minimal loan repayments and benefit significantly from write-off. The loan system makes creative degrees much
                            more financially viable than they would be with traditional loans.
                        </p>
                    </div>

                    {/* Journalism & Media */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Journalism & Media</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Junior)</p>
                                <p className="text-lg font-semibold text-gray-800">£20,000 - £26,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Senior/Editor)</p>
                                <p className="text-lg font-semibold text-gray-800">£30,000 - £50,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £35,000 salary:</strong> £58/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 20-45% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Journalism and media careers are notoriously competitive with relatively low salaries for most positions.
                            The majority of journalists will benefit from loan write-off. Only those reaching senior editorial or broadcast
                            positions may approach full repayment.
                        </p>
                    </div>

                    {/* Hospitality & Tourism */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Hospitality & Tourism Management</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Starting Salary (Graduate)</p>
                                <p className="text-lg font-semibold text-gray-800">£18,000 - £24,000</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Mid-Career (Manager)</p>
                                <p className="text-lg font-semibold text-gray-800">£25,000 - £40,000</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-700 mb-2"><strong>Typical Loan Size:</strong> £40,000 - £55,000</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Monthly Repayment at £30,000 salary:</strong> £20/month (Plan 2)</p>
                            <p className="text-sm text-gray-700"><strong>Expected Outcome:</strong> Will repay 10-30% before write-off</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Hospitality careers typically offer lower salaries, though some hotel general managers and senior positions can
                            earn more. Most hospitality graduates will make minimal loan repayments and benefit greatly from the write-off
                            system.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Takeaways */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Key Takeaways by Profession Type
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">High Earners</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li>✓ Will repay full loan + interest</li>
                            <li>✓ May benefit from overpayments</li>
                            <li>✓ Consider vs. investing returns</li>
                            <li>✓ Loan balance matters significantly</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-4 italic">Examples: Medicine, Law, Finance, Senior Tech</p>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Middle Earners</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li>✓ Will repay 40-80% before write-off</li>
                            <li>✓ Overpayments rarely make sense</li>
                            <li>✓ Functions like a graduate tax</li>
                            <li>✓ Focus on other financial goals</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-4 italic">Examples: Teaching, Nursing, Engineering, Marketing</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Lower Earners</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li>✓ Will repay under 40% before write-off</li>
                            <li>✓ Never make voluntary payments</li>
                            <li>✓ No downside to borrowing more</li>
                            <li>✓ Benefit most from loan system</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-4 italic">Examples: Social Work, Creative Arts, Journalism, Hospitality</p>
                    </div>
                </div>
            </section>

            {/* Important Considerations */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
                    Important Considerations
                </h2>
                <div className="prose max-w-none">
                    <h3>Career Progression Varies</h3>
                    <p>
                        The figures above represent typical trajectories, but individual careers vary enormously. Factors like location
                        (London weighting adds £5,000-£10,000 to salaries), sector (public vs. private), and personal progression all
                        significantly impact your repayment journey.
                    </p>

                    <h3>Your Loan Plan Matters</h3>
                    <p>
                        These examples primarily use Plan 2 figures. Plan 5 borrowers face a lower threshold (£25,000 vs. £27,295) and
                        longer repayment period (40 years vs. 30 years), which typically results in higher lifetime repayments for the
                        same career trajectory.
                    </p>

                    <h3>Career Changes Are Common</h3>
                    <p>
                        Many graduates don&apos;t stay in their original field. Career changes, breaks for family, sabbaticals, and self-employment
                        all affect your repayment journey. The income-contingent system protects you during lower-earning periods.
                    </p>

                    <h3>Part-Time and Career Breaks</h3>
                    <p>
                        Working part-time or taking career breaks (particularly common for parents) significantly reduces lifetime repayments.
                        If you anticipate working reduced hours or taking extended breaks, you&apos;re even more likely to benefit from write-off.
                    </p>

                    <h3>Regional Variations</h3>
                    <p>
                        Salaries vary significantly by region. London and South East typically pay 15-30% more than other UK regions for
                        the same role, which can determine whether you fully repay your loan or not.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Calculate Your Professional Repayment Journey</h2>
                    <p className="text-lg text-blue-100">
                        Model your specific career trajectory and see projected lifetime student loan costs based on your profession
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">

                        <Link
                            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all"
                            href="/calculators/total-loan-cost-calculator/"
                        >
                            Calculate Total Loan Cost
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/guides/should-i-overpay-loan/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Should I Overpay My Loan?</h3>
                        <p className="text-gray-600">Detailed analysis of when voluntary overpayments make financial sense based on your career.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/guides/investing-vs-loan-repayment/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Investing vs. Loan Repayment</h3>
                        <p className="text-gray-600">Compare returns from investing extra money versus paying off your student loan faster.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/guides/career-progression-student-loans-marginal-tax/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Progression Impact</h3>
                        <p className="text-gray-600">How different career progression patterns affect your total student loan repayments.</p>
                    </Link>
                    <Link className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100" href="/plans/">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding Loan Plans</h3>
                        <p className="text-gray-600">Complete guide to UK student loan plans and which one applies to you.</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default StudentLoansByProfessionPage