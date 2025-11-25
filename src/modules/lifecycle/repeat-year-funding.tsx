import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const RepeatYearFunding: React.FC = () => {
    const tocItems = [
        { id: "understanding-repeat-year-funding", title: "Understanding Repeat Year Funding", level: 2 },
        { id: "plus-one-year-rule", title: "The 'Length of Course + 1 Year' Rule", level: 2 },
        { id: "repeat-year-scenarios", title: "Common Repeat Year Scenarios", level: 2 },
        { id: "financial-implications", title: "Financial Implications of Repeating", level: 2 },
        { id: "compassionate-grounds", title: "Compassionate Grounds Funding", level: 2 },
        { id: "alternatives-to-repeating", title: "Alternatives to Repeating a Year", level: 2 },
        { id: "university-policies", title: "University-Specific Repeat Policies", level: 2 },
        { id: "real-student-scenarios", title: "Real Student Repeat Year Scenarios", level: 2 },
        { id: "decision-framework", title: "Should You Repeat the Year?", level: 2 },
        { id: "prevention-strategies", title: "Preventing Academic Failure", level: 2 },
    ];

    return (
        <div className="bg-white">
            {/* Header Section with Breadcrumbs */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-1 text-sm text-gray-600">
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li>
                                <Link className="hover:text-blue-700 hover:underline" href="/lifecycle/">
                                    Student Loan Lifecycle
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li>
                                <span className="font-medium text-gray-800" aria-current="page">
                                    Repeat Year Funding
                                </span>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
                        Repeat Year Funding: Student Loan Eligibility for Failed Years
                    </h1>
                    <p className="text-xl text-gray-600">
                        Understanding funding for resits, repeating years, extra year eligibility limits, and alternatives to consider
                    </p>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="lg:hidden sticky top-20 z-40 -mx-6 mb-6 bg-white border-b border-gray-200 shadow-sm">
                    <TableOfContents items={tocItems} />
                </div>
                <div className="lg:flex lg:gap-8 relative">
                    {/* Main Content */}
                    <div className="lg:flex-1 lg:min-w-0">
                        {/* Introduction */}
                        <section className="mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Failing a year doesn&apos;t automatically disqualify you from student finance, but it triggers complex eligibility rules that many students misunderstand until it&apos;s too late. Student Finance England provides funding for the &quot;length of your course + 1 year&quot;—for a standard 3-year degree, that means 4 years total. This &quot;+1 year&quot; is your buffer for academic difficulties, illness, changing courses, or personal circumstances. Use it wisely, because once exhausted, funding stops even if you haven&apos;t graduated.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Here&apos;s the critical nuance most students miss: failing one year and repeating it is usually fine—you use your +1 year and still graduate with full funding. But failing Year 1 twice, or failing multiple different years, exhausts your funding eligibility before degree completion. At that point, you&apos;re facing a difficult choice: self-fund the remaining years (£9,250+ per year out of pocket), apply for compassionate grounds funding (rarely approved for academic failure alone), or abandon your degree with debt but no qualification.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The financial implications extend beyond just funding eligibility. Repeating a year means an extra year of tuition fees (£9,250), maintenance costs (£10,000+), delayed graduation, lost graduate earnings (£28k-£35k), and an additional year before student loan repayments begin—assuming you complete the degree. This guide explains exactly how repeat year funding works, when you can get it, when you can&apos;t, and critically, what alternatives exist that might be better than repeating.
                            </p>
                        </section>

                        {/* Understanding Repeat Year Funding */}
                        <section id="understanding-repeat-year-funding" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Understanding Repeat Year Funding
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Student Finance England&apos;s repeat year funding operates on a simple principle with complex implementation: you get one extra year beyond your course length, but how and when you use it determines whether you can complete your degree.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">The Core Rule: Length of Course + 1 Year</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>Standard 3-year degree:</strong> You receive funding for 4 years maximum. This includes your tuition fee loan (£9,250/year) and maintenance loan (£9,500-£13,022/year depending on circumstances).</p>
                                    <p><strong>4-year degree (with placement/abroad):</strong> You receive funding for 5 years maximum.</p>
                                    <p><strong>Integrated masters (4-year):</strong> You receive funding for 5 years maximum.</p>
                                    <p><strong>Medicine/Dentistry (5-year):</strong> You receive funding for 6 years maximum.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">What Counts Toward Your Funding Years:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Years That Count:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Any year where you received tuition fee loan or maintenance loan</li>
                                            <li>• Years you attended university, even if you failed or withdrew partway through</li>
                                            <li>• Years you received funding but took leave of absence midway</li>
                                            <li>• Previous degree attempts at different universities or on different courses</li>
                                            <li>• Foundation years (these count as Year 0 of a 4-year program)</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Years That Don&apos;t Count:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Gap years where you didn&apos;t attend university</li>
                                            <li>• Years spent working between dropping out and reapplying</li>
                                            <li>• Authorized intercalated years (medicine only, if approved in advance)</li>
                                            <li>• Years before you withdrew where you didn&apos;t receive ANY student finance (self-funded or parent-funded years)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Timing Point: When Years Are &quot;Used&quot;</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Your funding year counts from the moment you receive funding and attend, not from the end of the year. Key implications:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>If you attend for one week then withdraw, that year still counts toward your funding limit</li>
                                    <li>If you fail Year 1 exams in May, that year has already counted—you can&apos;t &quot;undo&quot; it</li>
                                    <li>Withdrawing before the census date (typically early December) may not count, but policies vary</li>
                                    <li>The only way to preserve funding is to withdraw very early or never receive payment</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Good News: Normal Progression with One Repeat</h3>
                                <p className="text-gray-700 text-sm">
                                    If you fail one year and repeat it successfully, you&apos;re still within normal funding limits. Example: Fail Year 1, repeat Year 1, complete Years 2-3 normally = 4 years total funding used (Year 1 attempt 1, Year 1 attempt 2, Year 2, Year 3). This is exactly what your +1 year is designed for. You graduate with full funding and your degree certificate is identical to students who completed in 3 years.
                                </p>
                            </div>
                        </section>

                        {/* The Plus One Year Rule */}
                        <section id="plus-one-year-rule" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                The &apos;Length of Course + 1 Year&apos; Rule Explained
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding exactly how this rule works in practice is essential. Let&apos;s break down every scenario where your +1 year gets used or preserved.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Scenario Analysis: 3-Year Degree (4 Years Total Funding)</h3>

                                <div className="space-y-3">
                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">✅ Scenario 1: Single Year Repeat (Standard Case)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Timeline:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Year 1 (2022-23): Attend, fail exams, overall average 35% (need 40%)</li>
                                                <li>• Year 1 Repeat (2023-24): Repeat Year 1, pass with 52%</li>
                                                <li>• Year 2 (2024-25): Progress to Year 2, funded normally</li>
                                                <li>• Year 3 (2025-26): Complete Year 3, graduate with degree</li>
                                            </ul>
                                            <p className="mt-2"><strong>Funding used:</strong> 4 years out of 4 years available</p>
                                            <p><strong>Outcome:</strong> Graduate successfully with full funding. Your +1 year was used for the repeat, which is exactly what it&apos;s designed for.</p>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">✅ Scenario 2: Course Change After Year 1</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Timeline:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Year 1 (2022-23): Complete Computer Science Year 1, pass but hate it</li>
                                                <li>• Year 1 (2023-24): Switch to Business Studies, start Year 1 fresh</li>
                                                <li>• Year 2 (2024-25): Business Studies Year 2</li>
                                                <li>• Year 3 (2025-26): Business Studies Year 3, graduate</li>
                                            </ul>
                                            <p className="mt-2"><strong>Funding used:</strong> 4 years out of 4 years available</p>
                                            <p><strong>Outcome:</strong> Graduate with Business degree. Switching courses after Year 1 uses your +1 year because you&apos;re essentially doing an extra Year 1.</p>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-3 rounded border border-yellow-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">⚠️ Scenario 3: Failing Same Year Twice (Funding Exhausted)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Timeline:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Year 1 Attempt 1 (2022-23): Fail with 32%</li>
                                                <li>• Year 1 Attempt 2 (2023-24): Repeat, fail again with 38%</li>
                                                <li>• Year 1 Attempt 3 (2024-25): <strong className="text-red-600">No funding available</strong></li>
                                            </ul>
                                            <p className="mt-2"><strong>Funding used:</strong> 2 years used, but no progression achieved</p>
                                            <p className="text-red-600"><strong>Outcome:</strong> Funding exhausted for this course. You&apos;ve used 2 of your 4 years on Year 1 twice. You can&apos;t get funding for a third attempt at Year 1 because that would require 5 years total (Y1 × 3 + Y2 + Y3 = 5), exceeding your 4-year limit.</p>
                                            <p className="mt-2"><strong>Options:</strong> Self-fund Year 1 attempt 3, or withdraw and potentially apply for different course (but you&apos;ve already used 2 funding years).</p>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-3 rounded border border-red-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">❌ Scenario 4: Multiple Year Failures (Funding Exhausted)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Timeline:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Year 1 (2022-23): Fail, average 36%</li>
                                                <li>• Year 1 Repeat (2023-24): Pass with 45%, progress to Year 2</li>
                                                <li>• Year 2 (2024-25): Fail, average 38%</li>
                                                <li>• Year 2 Repeat (2025-26): <strong className="text-red-600">No funding available</strong></li>
                                            </ul>
                                            <p className="mt-2"><strong>Funding used:</strong> 3 years (Y1 attempt 1, Y1 attempt 2, Y2 attempt 1)</p>
                                            <p className="text-red-600"><strong>Problem:</strong> You need 5 years total to complete (Y1 × 2, Y2 × 2, Y3 = 5 years). You only have 4 years of funding. Your +1 year was used for the Year 1 repeat.</p>
                                            <p className="mt-2"><strong>Outcome:</strong> You can self-fund Year 2 repeat + Year 3 (£18,500 tuition alone), or withdraw with debt but no degree.</p>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-3 rounded border border-red-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">❌ Scenario 5: Previous Degree Attempt (Prior Years Count)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Timeline:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• 2020-21: Attended Manchester for Engineering Year 1, withdrew in February</li>
                                                <li>• 2021-22: Worked full-time, no university</li>
                                                <li>• 2022-23: Started fresh at Sheffield for Engineering Year 1 (funded)</li>
                                                <li>• 2023-24: Sheffield Year 2 (funded)</li>
                                                <li>• 2024-25: Sheffield Year 3 (funded)</li>
                                                <li>• 2025-26: Failed Year 3, need repeat <strong className="text-red-600">No funding available</strong></li>
                                            </ul>
                                            <p className="mt-2"><strong>Funding used:</strong> 4 years (Manchester Y1 + Sheffield Y1, Y2, Y3)</p>
                                            <p className="text-red-600"><strong>Problem:</strong> Your Manchester attempt counted as 1 funded year, even though you withdrew. Combined with 3 years at Sheffield, you&apos;ve used all 4 years.</p>
                                            <p className="mt-2"><strong>Outcome:</strong> Must self-fund Year 3 repeat or withdraw without degree despite being one year away from completion.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Key Takeaway: Plan Your +1 Year Carefully</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Your +1 year is precious. Once used, you have no buffer for further difficulties. Strategies to preserve it:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>If struggling early in Year 1, consider withdrawing before census date (usually early December) to avoid using a funded year</li>
                                    <li>If you fail a year, understand you&apos;ve used your +1 year—any further failure means funding ends</li>
                                    <li>If changing courses, do it as early as possible (ideally before completing Year 1) to minimize wasted years</li>
                                    <li>If you&apos;ve already used years at previous universities, calculate carefully how many funded years remain</li>
                                </ul>
                            </div>
                        </section>

                        {/* Common Repeat Year Scenarios */}
                        <section id="repeat-year-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Common Repeat Year Scenarios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Different types of academic failure have different funding implications. Here&apos;s how student finance handles the most common scenarios.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Scenario Type 1: Failed Exams, All Resit Attempts Exhausted</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">What Happened:</p>
                                            <p>You failed 2+ modules in Year 1, took resits in August/September, failed again. University requires you to repeat the entire year.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Typical Requirements:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Overall average below 40%</li>
                                                <li>• Failed modules exceed university&apos;s trailing credit limit</li>
                                                <li>• Can&apos;t progress with failed modules</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Student Finance Response:</p>
                                            <p className="text-green-600 font-semibold">✅ Funded (using +1 year)</p>
                                            <p className="mt-2">You receive full tuition fee loan and maintenance loan for the repeat year. This is the exact situation the +1 year is designed for.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Conditions:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• No further failures allowed</li>
                                                <li>• Must complete remaining years consecutively</li>
                                                <li>• Cannot fail another year without losing funding</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Scenario Type 2: Withdrew Mid-Year Due to Personal Issues</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">What Happened:</p>
                                            <p>You attended Year 2 but withdrew in March due to mental health crisis, bereavement, or serious illness. You didn&apos;t complete the year or take exams.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Academic Record:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Transcript shows withdrawal (W) for all modules</li>
                                                <li>• No grades recorded</li>
                                                <li>• Year doesn&apos;t count toward degree progression</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Student Finance Response:</p>
                                            <p className="text-green-600 font-semibold">✅ Funded (using +1 year)</p>
                                            <p className="mt-2">The withdrawn year counts as one of your funded years. When you return, you repeat Year 2 with full funding using your +1 year.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Special Consideration:</p>
                                            <p>If withdrawal was for serious circumstances (terminal illness in family, you were hospitalized, documented mental health crisis), you may be eligible for compassionate grounds to get ADDITIONAL funding beyond +1 year. This requires evidence and is assessed case-by-case.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Scenario Type 3: Failed Placement/Year Abroad</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">What Happened:</p>
                                            <p>You&apos;re on a 4-year &quot;sandwich&quot; degree (with placement year). You failed your placement year OR your Year Abroad due to academic failure or placement company terminating early.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Course Structure:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Years 1-2: University study</li>
                                                <li>• Year 3: Placement/abroad (reduced tuition)</li>
                                                <li>• Year 4: Final year back at university</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Student Finance Response:</p>
                                            <p className="text-yellow-600 font-semibold">⚠️ Complex—depends on failure reason</p>
                                            <p className="mt-2"><strong>If placement company terminated you:</strong> May not need to repeat—university might let you proceed to final year without placement credit. Funding continues normally.</p>
                                            <p className="mt-2"><strong>If academic failure abroad:</strong> Must repeat the year. Uses your +1 year, so you&apos;d need 6 years total for a 4-year course (Y1, Y2, Y3 failed, Y3 repeat, Y4). BUT you only get 5 years funding (4+1). <strong className="text-red-600">Not funded for final year.</strong></p>
                                            <p className="mt-2"><strong>Better approach:</strong> Switch to 3-year non-placement version if possible.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Scenario Type 4: Plagiarism or Academic Misconduct Penalty</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">What Happened:</p>
                                            <p>Found guilty of plagiarism or cheating. University penalty: repeat the year (cannot progress with zero marks in affected modules).</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Severity Levels:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Minor: Single module, unintentional. Module capped at 40%</li>
                                                <li>• Moderate: Multiple instances. Zero marks, repeat affected modules</li>
                                                <li>• Severe: Serious cheating. Zero marks, repeat entire year</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Student Finance Response:</p>
                                            <p className="text-green-600 font-semibold">✅ Still Funded (using +1 year)</p>
                                            <p className="mt-2">Student Finance doesn&apos;t consider WHY you failed—only that you need to repeat. Academic misconduct doesn&apos;t disqualify you from funding. You use your +1 year to repeat.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Important Note:</p>
                                            <p>Some universities may not allow repeat year after serious misconduct (permanent exclusion). In those cases, you lose your place regardless of funding eligibility. Less serious cases allow repeat with funding.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Scenario Type 5: Course Change After Completing Year(s)</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">What Happened:</p>
                                            <p>You completed 1-2 years of one degree, then decided to switch to completely different subject, starting from Year 1 again.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Examples:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Completed Law Year 1, switched to Nursing</li>
                                                <li>• Completed Engineering Years 1-2, switched to Primary Teaching</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Student Finance Response:</p>
                                            <p className="text-yellow-600 font-semibold">⚠️ Partially Funded</p>
                                            <p className="mt-2">Previous years count toward your limit. If you did 2 years of Law then start 3-year Nursing degree, you have 2 funded years remaining (your 4-year allocation minus 2 used = 2 left).</p>
                                            <p className="mt-2"><strong>Outcome:</strong> Funded for Nursing Years 1-2 only. <strong className="text-red-600">Year 3 not funded.</strong> Must self-fund final year or apply compassionate grounds.</p>
                                            <p className="mt-2"><strong>Strategy:</strong> Switch courses as early as possible (ideally within Year 1) to minimize wasted funding years.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">Scenario Type 6: Part-Time to Full-Time Switch</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">What Happened:</p>
                                            <p>Started on part-time degree (6-year duration for 3-year full-time equivalent), completed 2-3 years part-time, now switching to full-time to finish faster.</p>
                                            <p className="font-semibold text-gray-800 mt-2 mb-1">Complexity:</p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Part-time years count as fraction of full-time equivalent</li>
                                                <li>• Calculation is FTE (Full-Time Equivalent) years, not actual years attended</li>
                                            </ul>
                                        </div>
                                        <div className="text-xs text-gray-700">
                                            <p className="font-semibold text-gray-800 mb-1">Student Finance Response:</p>
                                            <p className="text-green-600 font-semibold">✅ Usually Funded (complex calculation)</p>
                                            <p className="mt-2">Student Finance calculates how many &quot;FTE years&quot; you&apos;ve used. If you did 2 years of part-time at 50% intensity, that&apos;s 1 FTE year used. You still have 3 FTE years remaining (4 total - 1 used).</p>
                                            <p className="mt-2"><strong>Important:</strong> Request a funding calculation from SFE before switching. Part-time rules are complex and depend on your specific course intensity percentages.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Financial Implications */}
                        <section id="financial-implications" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Financial Implications of Repeating
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Repeating a year has substantial financial consequences beyond just using your +1 year funding allocation. Understanding the total financial impact helps you make informed decisions about whether to repeat or pursue alternatives.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Direct Costs of Repeating One Year:</h3>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border border-gray-200 text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Cost Component</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Amount</th>
                                                <th className="px-3 py-2 border-b text-left text-xs font-semibold text-gray-700">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Tuition Fee Loan</td>
                                                <td className="px-3 py-2 border-b text-xs">£9,250</td>
                                                <td className="px-3 py-2 border-b text-xs">Full tuition for repeat year</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="px-3 py-2 border-b text-xs">Maintenance Loan</td>
                                                <td className="px-3 py-2 border-b text-xs">£9,500-£13,022</td>
                                                <td className="px-3 py-2 border-b text-xs">Living costs for full year (income-assessed)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-2 border-b text-xs">Interest During Repeat</td>
                                                <td className="px-3 py-2 border-b text-xs">~£2,000-£3,000</td>
                                                <td className="px-3 py-2 border-b text-xs">RPI + 3% on existing and new debt</td>
                                            </tr>
                                            <tr className="bg-gray-50 font-semibold">
                                                <td className="px-3 py-2 border-b text-xs">Total Extra Debt</td>
                                                <td className="px-3 py-2 border-b text-xs">~£20,750-£24,272</td>
                                                <td className="px-3 py-2 border-b text-xs">Debt added to your total balance</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>For context:</strong> Standard 3-year degree = ~£65k total debt. Adding one repeat year = ~£86k-£90k total debt at graduation. That&apos;s 38% more debt.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Hidden Cost: Lost Graduate Earnings Year</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    The bigger financial impact isn&apos;t the extra debt—it&apos;s graduating one year later. This means:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Immediate impact:</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Your peers graduate and start earning £28k-£35k while you&apos;re still in Year 3</li>
                                        <li>• You lose that £28k-£35k gross income year</li>
                                        <li>• After tax/NI, that&apos;s ~£23k-£28k net lost earnings</li>
                                    </ul>
                                    <p className="text-gray-700 text-xs mt-2 mb-2"><strong>Long-term impact:</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• You start your career one year later, meaning one fewer year of progression</li>
                                        <li>• At age 60, you&apos;re at the experience level your peers reached at 59</li>
                                        <li>• Over 40-year career, this compounds to £150k-£250k lost lifetime earnings</li>
                                        <li>• Less pension contributions, later retirement age, delayed financial milestones</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Key insight:</strong> Even if the extra £21k debt costs you nothing in repayments (70% of Plan 5 graduates reach write-off), you&apos;ve still lost £150k-£250k in lifetime earnings. The time cost far exceeds the debt cost.
                                </p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Debt Repayment Impact: When Does Extra Debt Actually Cost You?</h3>
                                <div className="space-y-2 text-gray-700 text-sm">
                                    <p><strong>For low-moderate earners (£25k-£35k careers):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Extra £21k debt = £0 additional lifetime repayment (both reach write-off)</li>
                                        <li>You pay 9% above £25k threshold regardless of total debt size</li>
                                        <li>Larger balance just means more gets written off after 40 years</li>
                                    </ul>

                                    <p className="mt-3"><strong>For borderline earners (£35k-£50k careers):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Extra £21k debt = ~£10k-£15k additional lifetime repayment</li>
                                        <li>You&apos;ll nearly repay full balance, so extra debt extends repayment period</li>
                                        <li>Added years of 9% deductions mean more total paid</li>
                                    </ul>

                                    <p className="mt-3"><strong>For high earners (£50k+ careers):</strong></p>
                                    <ul className="list-disc ml-6 text-xs space-y-1">
                                        <li>Extra £21k debt = ~£30k-£35k additional lifetime repayment (debt + interest)</li>
                                        <li>You&apos;ll fully repay, so every pound of extra debt costs you money</li>
                                        <li>Interest compounds on larger balance, increasing total repayment</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Worst-Case Scenario: Repeating Then Not Completing</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    The most financially damaging outcome is using your +1 year to repeat, then failing again or dropping out:
                                </p>
                                <div className="bg-white p-3 rounded border border-gray-200">
                                    <p className="text-gray-700 text-xs mb-2"><strong>Example: Failed Year 1, repeated Year 1, dropped out</strong></p>
                                    <ul className="text-gray-700 text-xs space-y-1">
                                        <li>• Total debt accumulated: ~£42k-£48k (2 years of tuition + maintenance + interest)</li>
                                        <li>• Degree outcome: None (no qualification)</li>
                                        <li>• Career outcome: Likely non-graduate work (£22k-£28k)</li>
                                        <li>• Repayment: £0-£270/year (below or barely above threshold)</li>
                                        <li>• Write-off: Full £42k-£48k written off after 40 years, you pay ~£5k-£10k total</li>
                                    </ul>
                                    <p className="text-gray-700 text-xs mt-2">
                                        <strong>Financial damage:</strong> Limited actual repayment due to low earnings, but you&apos;ve lost 2 years earning nothing (could have earned £35k-£40k working those 2 years), plus you have no degree to improve earning potential. Total opportunity cost: ~£35k-£40k lost + limited career prospects.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Compassionate Grounds */}
                        <section id="compassionate-grounds" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Compassionate Grounds Funding
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you&apos;ve exhausted your standard funding allocation (length of course + 1 year), compassionate grounds funding is theoretically available, but in practice, it&apos;s extremely difficult to obtain and rarely granted for pure academic failure.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">What Compassionate Grounds Covers</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Compassionate grounds allows Student Finance England to provide funding BEYOND your standard allocation when exceptional circumstances prevented you from completing your course within normal limits.
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>Provides additional years of tuition fee loan and maintenance loan</li>
                                    <li>Requires extensive documentation of circumstances</li>
                                    <li>Not an automatic entitlement—assessed case-by-case</li>
                                    <li>Most applications are rejected</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Circumstances That MAY Qualify (Not Guaranteed):</h3>

                                <div className="space-y-3">
                                    <div className="bg-green-50 p-3 rounded border border-green-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Strong Cases (Higher Approval Chance):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>Serious illness or disability:</strong> Cancer diagnosis/treatment, major surgery, long-term hospitalization. Requires medical evidence spanning the affected academic year(s).</li>
                                            <li>• <strong>Mental health crisis:</strong> Severe depression, psychosis, eating disorder requiring inpatient treatment. Needs psychiatrist/GP letters confirming incapacitation for study.</li>
                                            <li>• <strong>Bereavement (immediate family):</strong> Death of parent, sibling, or child during academic year. Requires death certificate + statement of impact.</li>
                                            <li>• <strong>Victim of serious crime:</strong> Sexual assault, domestic violence, violent crime that prevented study. Police reports and support worker statements needed.</li>
                                            <li>• <strong>Refugee/asylum seeker disruption:</strong> Immigration status issues causing interruption. Home Office documentation required.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 p-3 rounded border border-yellow-300">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Weak Cases (Usually Rejected):</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• <strong>Academic difficulty:</strong> &quot;I struggled with the workload&quot; or &quot;I found the subject harder than expected&quot; are not compassionate grounds.</li>
                                            <li>• <strong>Poor time management:</strong> Working too many hours, poor study habits, procrastination.</li>
                                            <li>• <strong>Minor illness:</strong> Common colds, flu, short-term sickness that didn&apos;t require hospitalization.</li>
                                            <li>• <strong>Financial pressure:</strong> Having to work to support yourself isn&apos;t considered exceptional (most students work).</li>
                                            <li>• <strong>Relationship breakdown:</strong> Unless involving domestic violence or abuse.</li>
                                            <li>• <strong>Failing due to plagiarism/misconduct:</strong> Academic penalties don&apos;t qualify for compassionate grounds.</li>
                                            <li>• <strong>Course dissatisfaction:</strong> Disliking your course or regretting your choice.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Application Requirements and Evidence</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Compassionate grounds applications require comprehensive documentation:
                                </p>
                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>1. Personal statement:</strong></p>
                                    <ul className="list-disc ml-6">
                                        <li>Detailed explanation of circumstances that prevented study</li>
                                        <li>Timeline showing when issues occurred relative to academic year</li>
                                        <li>Explanation of why you couldn&apos;t withdraw in time to preserve funding</li>
                                        <li>Evidence that you&apos;ve now resolved the issues and can complete the course</li>
                                    </ul>

                                    <p className="mt-2"><strong>2. Medical evidence (if applicable):</strong></p>
                                    <ul className="list-disc ml-6">
                                        <li>Doctor&apos;s letters or hospital records covering the affected period</li>
                                        <li>Diagnosis, treatment details, and functional impact on ability to study</li>
                                        <li>Not just confirmation you were ill—must prove you were incapacitated for study</li>
                                    </ul>

                                    <p className="mt-2"><strong>3. University support:</strong></p>
                                    <ul className="list-disc ml-6">
                                        <li>Letter from your personal tutor or course leader</li>
                                        <li>Evidence you engaged with university support services (counseling, disability services, welfare)</li>
                                        <li>University confirmation that circumstances were beyond your control</li>
                                    </ul>

                                    <p className="mt-2"><strong>4. Timeline documentation:</strong></p>
                                    <ul className="list-disc ml-6">
                                        <li>Proof that circumstances occurred during the academic year you&apos;re seeking funding for</li>
                                        <li>Evidence the situation has improved and you can now complete your studies</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Reality Check: Low Approval Rates</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Student Finance England rejects the vast majority of compassionate grounds applications. Anecdotal approval rates suggest:
                                </p>
                                <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                    <li>~10-15% approval rate for all compassionate grounds applications</li>
                                    <li>Higher approval for medical emergencies with extensive documentation</li>
                                    <li>Nearly always rejected for academic struggle, financial pressure, or course dissatisfaction</li>
                                    <li>Appeals process exists but rarely succeeds</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Critical point:</strong> Do not rely on compassionate grounds funding as a backup plan. Assume you won&apos;t get it and plan accordingly. If you&apos;re applying, also pursue alternative options simultaneously (transferring universities, switching to part-time, self-funding plans).
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Application Process Timeline</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-xs space-y-2">
                                    <li>
                                        <strong>Realize you need extra funding:</strong> Usually after failing a year when you&apos;ve already used your +1 year, or after course change that exhausted funding.
                                    </li>
                                    <li>
                                        <strong>Gather evidence:</strong> Collect all medical records, university letters, documentation of circumstances. This can take weeks or months.
                                    </li>
                                    <li>
                                        <strong>Submit application to SFE:</strong> Written application with all supporting evidence. No standard form—you write a formal letter explaining your case.
                                    </li>
                                    <li>
                                        <strong>SFE reviews (4-8 weeks):</strong> Assessment team reviews your case. May request additional evidence.
                                    </li>
                                    <li>
                                        <strong>Decision letter:</strong> Approved (rare), or rejected with reasons.
                                    </li>
                                    <li>
                                        <strong>Appeal (if rejected):</strong> You can appeal the decision with additional evidence. Appeal reviews take another 4-8 weeks. Second rejection is final.
                                    </li>
                                </ol>
                                <p className="text-gray-700 text-sm mt-3">
                                    <strong>Timing problem:</strong> This process takes months. If you need funding for September start, apply as early as possible (ideally by May). Late applications may mean you miss the academic year start.
                                </p>
                            </div>
                        </section>

                        {/* Alternatives to Repeating */}
                        <section id="alternatives-to-repeating" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Alternatives to Repeating a Year
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Before committing to repeat a year, systematically evaluate alternatives that might deliver equivalent or better outcomes with less financial and time cost.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 1: Module Resits Only (No Full Year Repeat)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Instead of repeating the entire year, you retake only the failed modules in summer resit period or alongside next year&apos;s study (trailing modules).
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">When Possible:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• You failed 1-2 modules but passed most others</li>
                                                <li>• Your overall average is close to pass mark (38-39%)</li>
                                                <li>• University allows trailing modules to next year</li>
                                                <li>• Failed modules are available as resits</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Financial Benefit:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Cost:</strong> £0 (resits usually free first attempt)</li>
                                                <li>• <strong>Time:</strong> Progress to next year on schedule</li>
                                                <li>• <strong>Debt:</strong> No extra student loan debt</li>
                                                <li>• <strong>Career:</strong> Graduate on time, no lost earnings</li>
                                                <li>• <strong>Funding:</strong> Preserves your +1 year for genuine emergency</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-3">
                                                <strong>Action:</strong> Speak to your course leader immediately after exam results. Ask if trailing/resit-only is possible. Many universities prefer this approach and will work with you.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 2: Transfer to Different University (Fresh Start)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Leave your current university and apply to different university for same subject, potentially entering Year 1 or Year 2 depending on what they accept.
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">When To Consider:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Current university is genuinely wrong fit (teaching style, course content, location)</li>
                                                <li>• You failed due to course difficulty beyond your level</li>
                                                <li>• You&apos;ve used +1 year but want to complete a degree</li>
                                                <li>• Fresh environment might help you succeed</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Financial Considerations:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Previous years count toward your funding limit</li>
                                                <li>• You only get funding for remaining years</li>
                                                <li>• Example: Failed 2 years at University A. Transfer to University B. Have 2 funded years remaining (4 total - 2 used = 2 left)</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Pros:</strong> Fresh start, potentially easier course, new support system
                                            </p>
                                            <p className="text-gray-700 text-xs mt-1">
                                                <strong>Cons:</strong> Limited funding remaining, may need to self-fund final year, starting over feels like failure
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 3: Switch to Easier/Related Subject at Same University</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Change to related but less demanding subject within same university. Often possible to get credit transfer for modules already passed.
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">Examples:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Computer Science → Information Systems (less programming)</li>
                                                <li>• Engineering → Engineering Management (less technical maths)</li>
                                                <li>• Mathematics → Economics (applied instead of pure maths)</li>
                                                <li>• Chemistry → Environmental Science (broader, less specialized)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Benefits:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Credit transfer:</strong> Your passed modules may count toward new degree</li>
                                                <li>• <strong>Faster completion:</strong> Enter Year 2 of new subject instead of repeating Year 1</li>
                                                <li>• <strong>Same university:</strong> Keep friends, accommodation, familiar environment</li>
                                                <li>• <strong>Still graduate:</strong> You still get a degree, just different subject</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-3">
                                                <strong>Career consideration:</strong> Switching to &quot;easier&quot; subject means different graduate prospects. Research career outcomes for new subject before committing.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 4: Exit with Lower Qualification (DipHE/CertHE)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Instead of repeating or dropping out with nothing, exit with the lower qualification you&apos;ve earned so far.
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">Qualification Levels:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>CertHE (Certificate of Higher Education):</strong> Completed 1 year (120 credits). Equivalent to 1/3 of degree.</li>
                                                <li>• <strong>DipHE (Diploma of Higher Education):</strong> Completed 2 years (240 credits). Equivalent to 2/3 of degree.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">When To Consider:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• You&apos;ve exhausted funding and can&apos;t self-fund remaining years</li>
                                                <li>• You don&apos;t want to repeat but have completed 1-2 years successfully</li>
                                                <li>• You need to leave university for personal/financial reasons</li>
                                                <li>• Better to have some qualification than nothing</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Value:</strong> DipHE/CertHE have limited standalone value in job market—employers prefer full degrees. BUT they allow you to return later and &quot;top up&quot; to full degree, either at same university or elsewhere. Some universities offer 1-year top-up courses.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 5: Switch to Part-Time Study</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Change from full-time to part-time study mode. Study 50% of full-time load, spreading remaining years over longer period while working part/full-time.
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">Why Consider:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Failed due to overwhelming full-time workload</li>
                                                <li>• Need to work more hours to support yourself</li>
                                                <li>• Mental health/disability makes full-time study unsustainable</li>
                                                <li>• Funding exhausted for full-time, but part-time funding calculated differently</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Financial Aspects:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Part-time tuition fee loan: Proportional to study intensity (50% intensity = £4,625/year)</li>
                                                <li>• Part-time maintenance loan: Available but smaller than full-time</li>
                                                <li>• Part-time funding calculated in FTE years (Full-Time Equivalent)</li>
                                                <li>• Can work alongside study to support yourself</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Example:</strong> You&apos;ve used 2 full-time years, have 2 FTE years remaining. Switch to 50% part-time—those 2 FTE years fund 4 calendar years of part-time study.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 6: Take Year Out, Work, Return Later</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Formally suspend studies (if university allows), work for 1-2 years, save money, then return to complete degree (potentially self-funding final year).
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">Strategic Approach:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Work full-time earning £20k-£25k</li>
                                                <li>• Live at home if possible (save £10k/year accommodation)</li>
                                                <li>• Save £15k-£20k over 2 years</li>
                                                <li>• Return to university, self-fund final year with savings</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Pros:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Build savings for self-funded year</li>
                                                <li>• Get work experience (improves CV)</li>
                                                <li>• Mental break from academic pressure</li>
                                                <li>• Return more mature and focused</li>
                                            </ul>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-2">Cons:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Delays graduation by 1-2 years</li>
                                                <li>• Risk of never returning (working full-time can be comfortable)</li>
                                                <li>• University may not hold your place indefinitely</li>
                                                <li>• Course content may change while you&apos;re away</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 7: Professional Qualifications Instead of Degree</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Some careers don&apos;t require degrees—professional qualifications provide direct entry. Consider pivoting to qualification-based career instead of forcing degree completion.
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">Examples:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Accounting:</strong> AAT then ACCA/CIMA (work+study, employer-funded)</li>
                                                <li>• <strong>IT:</strong> Microsoft/Cisco/AWS certifications (3-6 months each)</li>
                                                <li>• <strong>Project Management:</strong> PRINCE2 (1 week course)</li>
                                                <li>• <strong>Digital Marketing:</strong> Google/Meta certifications (free-cheap)</li>
                                                <li>• <strong>Data Analysis:</strong> Coding bootcamps (3-6 months)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Career Outcomes:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• AAT → ACCA route: £24k starting → £40k-£60k qualified accountant</li>
                                                <li>• Cloud certifications: £30k-£45k cloud engineer starting</li>
                                                <li>• Coding bootcamp: £25k-£35k junior developer starting</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Time comparison:</strong> Professional qualifications often faster than completing degree + you earn while studying. Example: Leaving university now, doing AAT (1 year) then starting work = income starts 18 months from now. Repeating year + completing degree = income starts 3+ years from now.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Alternative 8: Apprenticeship (Degree + Work Combined)</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">What It Is:</p>
                                            <p className="text-gray-700 text-xs mb-2">
                                                Degree apprenticeships combine work and study—you work 4 days/week, study 1 day/week. Employer pays tuition, you earn salary. Government funding, not student loan.
                                            </p>
                                            <p className="font-semibold text-gray-800 text-sm mb-2 mt-3">Available In:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Engineering</li>
                                                <li>• Software development</li>
                                                <li>• Accounting</li>
                                                <li>• Digital marketing</li>
                                                <li>• Nursing</li>
                                                <li>• Construction management</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Financial Advantage:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Tuition:</strong> £0 (employer pays, no student loan)</li>
                                                <li>• <strong>Salary:</strong> £18k-£25k while studying (paid work)</li>
                                                <li>• <strong>Debt:</strong> None (no loans needed)</li>
                                                <li>• <strong>Experience:</strong> 3-4 years work experience by graduation</li>
                                                <li>• <strong>Job:</strong> Often permanent role with employer after completion</li>
                                            </ul>
                                            <p className="text-gray-700 text-xs mt-2">
                                                <strong>Comparison:</strong> 4 years degree = £65k debt, £0 earnings, graduate job hunt. Degree apprenticeship = £0 debt, £75k-£100k earned, job secured.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* University Policies */}
                        <section id="university-policies" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                University-Specific Repeat Policies
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                While Student Finance England determines funding eligibility, universities set their own academic policies about repeating years. These policies vary significantly and directly impact your options.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Critical Point: Funding ≠ University Permission</h3>
                                <p className="text-gray-700 text-sm">
                                    Having Student Finance funding doesn&apos;t guarantee your university will let you repeat. Similarly, university allowing repeat doesn&apos;t guarantee SFE will fund it. You need BOTH approval from university AND funding confirmation from Student Finance.
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-3">Common University Repeat Policies:</h3>

                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">One Repeat Maximum (Most Common)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Policy:</strong> You can repeat any single year once. If you fail the repeat, you&apos;re excluded from the course.</p>
                                            <p><strong>Implications:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Fail Year 1, repeat Year 1 = allowed</li>
                                                <li>• Fail Year 1 repeat = excluded (no second repeat)</li>
                                                <li>• Fail Year 1, pass repeat, then fail Year 2 = allowed to repeat Year 2 (it&apos;s your first repeat of Year 2)</li>
                                            </ul>
                                            <p className="mt-2"><strong>Universities using this policy:</strong> Most Russell Group, many pre-92 universities</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Maximum Two Failed Years Across Entire Degree</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Policy:</strong> You can fail/repeat maximum two years across your entire degree. Third failure = automatic exclusion.</p>
                                            <p><strong>Implications:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Fail Year 1, repeat and pass = 1 failure used</li>
                                                <li>• Then fail Year 2, repeat and pass = 2 failures used</li>
                                                <li>• Then fail Year 3 = excluded (would be 3rd failure)</li>
                                            </ul>
                                            <p className="mt-2"><strong>Reality:</strong> If you fail twice, you&apos;ve likely exhausted student finance anyway (used 4+ years for 3-year degree).</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Specific Module Limit (e.g. Max 60 Credits Failed)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Policy:</strong> You can trail failed modules (carry them forward) up to a certain credit limit. Exceed the limit = must repeat entire year.</p>
                                            <p><strong>Examples:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Fail 40 credits (2 modules): Trail to next year, resit alongside Year 2</li>
                                                <li>• Fail 80 credits (4 modules): Exceeds limit, must repeat entire Year 1</li>
                                            </ul>
                                            <p className="mt-2"><strong>Advantage:</strong> Minor failures don&apos;t force full year repeat. Lets you progress while fixing small gaps.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">GPA/Average Minimum for Progression</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Policy:</strong> Must achieve minimum average (typically 40%) across all modules. Below threshold = repeat year, even if you passed individual modules.</p>
                                            <p><strong>Examples:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• Your modules: 45%, 42%, 38%, 35%, 42%, 40% = average 40.3% (pass)</li>
                                                <li>• Your modules: 42%, 41%, 38%, 36%, 42%, 39% = average 39.7% (fail, repeat year)</li>
                                            </ul>
                                            <p className="mt-2"><strong>Harsh reality:</strong> You can pass most modules individually but fail the year on average. Borderline cases are frustrating.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded border border-gray-200">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">No Repeat Allowed (Immediate Exclusion)</p>
                                        <div className="text-xs text-gray-700 space-y-1">
                                            <p><strong>Policy:</strong> Some courses (typically medicine, dentistry, highly competitive programs) don&apos;t allow repeats. Fail once = excluded from course.</p>
                                            <p><strong>Rationale:</strong> High standards, competitive places, professional body requirements.</p>
                                            <p><strong>Implications:</strong> Your student finance +1 year is irrelevant—university won&apos;t let you return. Your only option is transferring to different university/course.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Mitigating Circumstances and Appeals</h3>
                                <p className="text-gray-700 text-sm mb-2">
                                    Universities have mitigating circumstances procedures for students who failed due to exceptional circumstances:
                                </p>
                                <div className="space-y-2 text-gray-700 text-xs">
                                    <p><strong>What qualifies:</strong></p>
                                    <ul className="list-disc ml-6">
                                        <li>Serious illness during exam period (hospitalized, unable to sit exams)</li>
                                        <li>Bereavement of immediate family member close to exams</li>
                                        <li>Major accident/injury affecting exam performance</li>
                                        <li>Documented mental health crisis</li>
                                    </ul>
                                    <p className="mt-2"><strong>Possible outcomes:</strong></p>
                                    <ul className="list-disc ml-6">
                                        <li>Null sit (exam doesn&apos;t count, you get clean resit without penalty)</li>
                                        <li>Uncapped resit (normally resits capped at 40%, mitigating circumstances can remove cap)</li>
                                        <li>Extension without penalty</li>
                                        <li>In rare cases, progression despite failing if circumstances severe</li>
                                    </ul>
                                    <p className="mt-2"><strong>Evidence required:</strong> Medical certificates, doctor&apos;s letters, death certificates, police reports. Must be submitted within tight deadlines (typically 5-10 working days after exam/assessment).</p>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Questions to Ask Your University Before Deciding to Repeat:</h3>
                                <ol className="list-decimal ml-6 text-gray-700 text-xs space-y-1">
                                    <li>Am I definitely allowed to repeat this year? (Check course handbook, don&apos;t assume)</li>
                                    <li>What happens if I fail the repeat year? (Second chance? Excluded?)</li>
                                    <li>Can I trail failed modules instead of repeating entire year? (Check credit limits)</li>
                                    <li>Are resit marks capped? (Most universities cap resit grades at 40%—you can&apos;t get 2:1 after repeating)</li>
                                    <li>Will repeat year affect final degree classification? (In most cases, it doesn&apos;t—but confirm)</li>
                                    <li>What support is available during repeat year? (Extra tutoring, study skills, disability support)</li>
                                    <li>Can I switch to related course instead of repeating? (Might be better option)</li>
                                </ol>
                            </div>
                        </section>

                        {/* Real Student Scenarios */}
                        <section id="real-student-scenarios" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Real Student Repeat Year Scenarios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Understanding how other students navigated repeat year decisions—both successful and unsuccessful outcomes—helps clarify your own situation.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 1: Successful Repeat After Mental Health Crisis</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Sophie, Computer Science, developed severe anxiety/depression Year 1
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>What Happened:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Struggled with coursework due to undiagnosed anxiety disorder</li>
                                            <li>• Failed Year 1 with 35% average (needed 40%)</li>
                                            <li>• Sought help from GP, diagnosed with anxiety + depression, started medication</li>
                                            <li>• Registered with university disability services</li>
                                            <li>• Applied to repeat Year 1 with Student Finance +1 year funding</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Repeated Year 1 with full funding</li>
                                            <li>• Received disability support: extra time in exams, study skills workshops, counseling</li>
                                            <li>• Achieved 62% in Year 1 repeat (massive improvement)</li>
                                            <li>• Progressed through Years 2-3 successfully</li>
                                            <li>• Graduated with 2:1 Computer Science degree</li>
                                            <li>• Now working as software developer earning £38k</li>
                                            <li>• Total debt: £88k (4 years) vs £65k (3 years)</li>
                                            <li>• Will likely reach write-off, so extra debt costs £0 in repayments</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Key Success Factors:</strong> Identified underlying issue (mental health), got professional help, engaged with university support systems, addressed root cause before repeating. The repeat year worked because she fixed the problem that caused failure.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 2: Failed Repeat, Multiple Failures, Funding Exhausted</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Jake, Mechanical Engineering, struggled with course difficulty
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Timeline:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1 Attempt 1 (2021-22): Failed with 33% (lacked maths foundation, struggled with calculus)</li>
                                            <li>• Year 1 Attempt 2 (2022-23): Repeated, achieved 41%, progressed to Year 2</li>
                                            <li>• Year 2 (2023-24): Failed with 37% (thermodynamics and fluid mechanics too difficult)</li>
                                            <li>• Year 2 Repeat (2024-25): <strong>No funding available</strong> (used 4 years: Y1×2, Y2)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Can&apos;t afford to self-fund Year 2 repeat (£9,250 tuition + £10k living costs)</li>
                                            <li>• Applied for compassionate grounds funding—rejected (academic difficulty doesn&apos;t qualify)</li>
                                            <li>• University offered: exit with CertHE (1 year equivalent), no progression without passing Year 2</li>
                                            <li>• Withdrew from university with £67k debt and only CertHE qualification</li>
                                            <li>• Working in retail/warehouse jobs earning £23k-£25k</li>
                                            <li>• Student loan repayments: £0-£360/year (below or barely above threshold)</li>
                                            <li>• Will reach write-off paying minimal amount, but no degree to improve prospects</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>What Went Wrong:</strong> Course was genuinely too difficult for his mathematical ability. He passed Year 1 repeat barely (41%) but core concepts weren&apos;t solid enough for Year 2 material. Should have switched to less technical subject (Engineering Management, Product Design) after Year 1 failure instead of repeating same difficult course.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 3: Strategic Course Switch Instead of Repeat</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Emma, Physics, realized wrong subject choice
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Situation:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Chose Physics based on good A-level results, didn&apos;t research degree content</li>
                                            <li>• Failed Year 1 with 38% average—found theoretical physics unmotivating and incomprehensible</li>
                                            <li>• Could have repeated Year 1 Physics with funding, but realized she didn&apos;t want to study Physics</li>
                                            <li>• Loved the programming modules in Physics course (computational physics)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>What She Did:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Spoke to admissions, switched to Computer Science Year 1 at same university</li>
                                            <li>• Got credit exemption for programming module already passed (20 credits)</li>
                                            <li>• Started Computer Science Year 1 with 100 credits still to complete</li>
                                            <li>• Used her +1 year for the course switch, not a repeat</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mt-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Completed Computer Science Year 1 with 68% (loved the subject)</li>
                                            <li>• Progressed through Years 2-3 normally</li>
                                            <li>• Graduated with 2:1 Computer Science</li>
                                            <li>• Career: Junior developer earning £32k, rising to £45k+ mid-career</li>
                                            <li>• Total time: 4 years (same as repeating Physics Year 1 would have been)</li>
                                            <li>• Better outcome: Degree she actually wanted, career she enjoys</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Lesson:</strong> Sometimes the problem isn&apos;t your ability—it&apos;s the subject fit. Switching courses uses same +1 year as repeating, but gives you a degree you&apos;ll actually enjoy and succeed in.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 4: Module Resits Only, Avoided Full Year Repeat</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Liam, Business Studies, failed 2 modules
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>What Happened:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1: Failed Quantitative Methods (30%) and Economics (38%)</li>
                                            <li>• Passed other 4 modules: Marketing (62%), Management (58%), Accounting (52%), Business Law (48%)</li>
                                            <li>• Overall average: 48% (technically passing average, but 2 failed modules below 40%)</li>
                                            <li>• University policy: Can trail up to 40 credits (2 modules) to next year</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>His Approach:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Instead of repeating entire Year 1, he progressed to Year 2</li>
                                            <li>• Trailed the 2 failed modules to Year 2 (took resits in August before Year 2 started)</li>
                                            <li>• Studied over summer using YouTube tutorials for quantitative methods</li>
                                            <li>• Passed both resits (Quant Methods: 42%, Economics: 45%)</li>
                                            <li>• Started Year 2 with everything cleared</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mt-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Outcome:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Preserved his +1 year (no repeat needed)</li>
                                            <li>• Graduated on time with 2:2 Business Studies</li>
                                            <li>• Total debt: £65k (standard 3-year)</li>
                                            <li>• Career: Marketing coordinator earning £28k</li>
                                            <li>• Avoided £21k extra debt and 1 year delay</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Key Strategy:</strong> Failing 1-2 modules doesn&apos;t always mean full year repeat. Check university policy on trailing/resitting individual modules. Summer resits (with serious preparation) can save you a full repeat year.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Scenario 5: Degree Apprenticeship Pivot After Failure</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        <strong>Student:</strong> Marcus, Civil Engineering, failed Year 1 twice
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded mb-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Timeline:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Year 1 Attempt 1: Failed with 36%</li>
                                            <li>• Year 1 Attempt 2: Failed repeat with 39%</li>
                                            <li>• University excluded him from Civil Engineering (policy: can&apos;t repeat same year twice)</li>
                                            <li>• Total debt so far: £42k with no qualification</li>
                                            <li>• Funding exhausted: Used 2 of 4 years, no progression achieved</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Alternative Path:</strong></p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Researched degree apprenticeships (work + study combined)</li>
                                            <li>• Applied to construction company&apos;s Civil Engineering degree apprenticeship program</li>
                                            <li>• Offered place: Work 4 days/week, study 1 day/week for Civil Engineering degree</li>
                                            <li>• Employer pays tuition (£9,250/year × 4 years = £37k employer funded)</li>
                                            <li>• He earns £22k salary year 1, rising to £28k by year 4</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded mt-2">
                                        <p className="text-gray-700 text-xs mb-2"><strong>Comparison:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Traditional University Route (if continued):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Years 1-4: £88k debt, £0 income</li>
                                                    <li>• Year 5: Graduate, start earning £30k</li>
                                                    <li>• Total: £88k debt, work experience: 0 years</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 mb-1">Degree Apprenticeship Route (actual):</p>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Years 1-4: £0 new debt, £100k gross earned</li>
                                                    <li>• Year 5: Promoted to engineer, £35k+</li>
                                                    <li>• Total: £42k debt (from failed years), work experience: 4 years</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-2">
                                        <strong>Outcome:</strong> Turned failure into opportunity. Got same degree (Civil Engineering) but via apprenticeship route. Earned £100k while studying instead of accumulating more debt. Has 4 years experience by graduation vs 0 experience. Job secured with employer after completion.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Decision Framework */}
                        <section id="decision-framework" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Should You Repeat the Year?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Use this systematic decision framework to evaluate whether repeating is the right choice versus pursuing alternative pathways.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 1: Diagnose Why You Failed</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Be brutally honest about the root cause. Different causes require different solutions:
                                    </p>

                                    <div className="space-y-2">
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">✅ Repeating Likely to Work:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Temporary crisis:</strong> Serious illness, bereavement, mental health crisis that&apos;s now resolved with treatment/support</li>
                                                <li>• <strong>Specific skill gap:</strong> Lacked prerequisite knowledge (weak maths for engineering) but have now filled gaps</li>
                                                <li>• <strong>Study approach:</strong> Didn&apos;t study effectively but have learned better techniques, time management, discipline</li>
                                                <li>• <strong>External circumstances removed:</strong> Were working 30 hours/week, won&apos;t need to next year</li>
                                            </ul>
                                        </div>

                                        <div className="bg-red-50 p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">❌ Repeating Unlikely to Help:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Ability ceiling:</strong> Material genuinely too difficult for your mathematical/analytical ability. Repeating won&apos;t change this</li>
                                                <li>• <strong>Wrong subject:</strong> You don&apos;t enjoy or care about the subject. More time studying it won&apos;t create passion</li>
                                                <li>• <strong>Motivation deficit:</strong> Chose course for others (parents, status), not yourself. Repeating doesn&apos;t fix motivation</li>
                                                <li>• <strong>Persistent issues:</strong> Mental health, financial pressure, caring responsibilities that haven&apos;t been resolved</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 2: Assess Your Funding Status</h3>
                                    <div className="bg-purple-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Calculate Years Used vs Years Remaining:</p>
                                        <div className="text-gray-700 text-xs space-y-2">
                                            <p><strong>For standard 3-year degree:</strong> Total funding = 4 years</p>
                                            <p><strong>Count years used:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>+ 1 for every year attended (even if failed/withdrew)</li>
                                                <li>+ Any previous degree attempts at other universities</li>
                                                <li>+ Foundation years (count as Year 0)</li>
                                            </ul>
                                            <p><strong>Years remaining:</strong> 4 minus years used</p>
                                            <p className="mt-2"><strong>Critical thresholds:</strong></p>
                                            <ul className="ml-6 space-y-1">
                                                <li>• <span className="text-green-600 font-semibold">1-2 years used:</span> Plenty of funding left, repeat is viable</li>
                                                <li>• <span className="text-yellow-600 font-semibold">3 years used:</span> 1 year funding left—only repeat if you&apos;re absolutely certain you&apos;ll complete without further issues</li>
                                                <li>• <span className="text-red-600 font-semibold">4 years used:</span> No funding remaining—repeating requires self-funding or compassionate grounds</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 3: Evaluate Alternatives</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Before committing to repeat, actively explore these alternatives:
                                    </p>
                                    <div className="space-y-2 text-gray-700 text-xs">
                                        <div className="bg-green-50 p-2 rounded">
                                            <p className="font-semibold text-gray-800 mb-1">1. Can you resit modules only? (No full repeat)</p>
                                            <p>Ask: How many credits can I trail? Can I progress to Year 2 while resitting Year 1 modules?</p>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded">
                                            <p className="font-semibold text-gray-800 mb-1">2. Can you switch to easier/related subject?</p>
                                            <p>Example: Engineering → Engineering Management, Computer Science → Information Systems</p>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded">
                                            <p className="font-semibold text-gray-800 mb-1">3. Could you exit with DipHE/CertHE and return later?</p>
                                            <p>Get credit for years completed, return when circumstances improve</p>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded">
                                            <p className="font-semibold text-gray-800 mb-1">4. Is degree apprenticeship available in your field?</p>
                                            <p>Earn salary + employer pays tuition. Research available programs.</p>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded">
                                            <p className="font-semibold text-gray-800 mb-1">5. Would professional qualifications serve you better?</p>
                                            <p>Some careers don&apos;t require degrees—qualifications faster and cheaper</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 4: Calculate Total Cost vs Benefit</h3>
                                    <div className="bg-yellow-50 p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-sm mb-2">Financial Cost of Repeating:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• Extra debt: £21,000 (tuition + maintenance + interest during repeat)</li>
                                            <li>• Lost year of graduate earnings: £28k-£35k gross</li>
                                            <li>• Delayed career progression: Start working at 22 instead of 21</li>
                                            <li>• Long-term opportunity cost: £150k-£250k over lifetime</li>
                                        </ul>
                                        <p className="font-semibold text-gray-800 text-sm mt-3 mb-2">Will You Actually Complete?</p>
                                        <p className="text-gray-700 text-xs">
                                            Be honest: If the issue that caused failure isn&apos;t fully resolved (wrong subject, ability ceiling, persistent circumstances), repeating adds £21k debt with high risk of failing again.
                                        </p>
                                        <p className="font-semibold text-gray-800 text-sm mt-3 mb-2">Better Outcomes From Alternatives?</p>
                                        <p className="text-gray-700 text-xs">
                                            Degree apprenticeship = £0 debt + £100k earned over 4 years. Professional qualifications = faster entry to work. Course switch = degree you&apos;ll actually finish. Sometimes these deliver better lifetime outcomes than forcing completion of wrong degree.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white border-l-4 border-red-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Step 5: Make Your Decision</h3>

                                    <div className="space-y-3">
                                        <div className="bg-green-50 p-3 rounded border border-green-300">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">✅ Repeat the Year If:</p>
                                            <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                                <li>Root cause of failure is resolved (illness treated, crisis passed, skill gaps filled)</li>
                                                <li>You have funding remaining (used ≤2 years of 4-year allocation)</li>
                                                <li>University will allow repeat (check policies before assuming)</li>
                                                <li>You genuinely want to complete THIS degree (not just any degree)</li>
                                                <li>Alternatives explored but none suit your circumstances/goals</li>
                                                <li>You have concrete plan to prevent repeat failure (study group, tutor, reduced work hours, disability support)</li>
                                            </ul>
                                        </div>

                                        <div className="bg-yellow-50 p-3 rounded border border-yellow-300">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">⚠️ Consider Alternatives If:</p>
                                            <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                                <li>You&apos;ve used 3+ years of funding (one year left—repeating uses it all)</li>
                                                <li>You don&apos;t actually like/want this subject (repeating more time in subject you dislike)</li>
                                                <li>Ability ceiling reached (material too hard—repeating won&apos;t change this)</li>
                                                <li>Financial pressure not resolved (will still need to work 30+ hours)</li>
                                                <li>Alternative pathways offer faster/cheaper route to career goals</li>
                                                <li>You barely passed repeat (40-42%)—Year 2 might be too difficult</li>
                                            </ul>
                                        </div>

                                        <div className="bg-red-50 p-3 rounded border border-red-300">
                                            <p className="font-semibold text-gray-800 text-sm mb-2">❌ Don&apos;t Repeat If:</p>
                                            <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                                <li>You&apos;ve exhausted funding (4 years used) and can&apos;t self-fund</li>
                                                <li>You failed the repeat already (second failure of same year)</li>
                                                <li>Root cause unresolved (still struggling, still unmotivated, circumstances unchanged)</li>
                                                <li>University won&apos;t allow repeat (policy: max one repeat, you&apos;ve used it)</li>
                                                <li>You&apos;re repeating to delay facing reality (job market, career decision)</li>
                                                <li>Compassionate grounds application rejected (SFE won&apos;t fund, university won&apos;t readmit)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Action Plan Checklist:</h3>
                                    <ol className="list-decimal ml-6 text-gray-700 text-xs space-y-1">
                                        <li>Check exact Student Finance funding remaining (call SFE, get written confirmation)</li>
                                        <li>Check university policy on repeating (course handbook, speak to course leader)</li>
                                        <li>Identify root cause of failure with professional help (GP, counselor, tutor)</li>
                                        <li>Address root cause BEFORE committing to repeat (start treatment, get support, change circumstances)</li>
                                        <li>Research alternatives (course switching, module trailing, degree apprenticeships)</li>
                                        <li>Calculate total financial cost (£21k debt + £150k opportunity cost = £171k total)</li>
                                        <li>Compare alternatives&apos; total cost and timeline</li>
                                        <li>Make decision based on evidence, not emotion or sunk cost fallacy</li>
                                        <li>If repeating: Set up support systems (study group, tutoring, reduced work, disability services)</li>
                                        <li>If not repeating: Actively pursue chosen alternative (apply, interview, transition)</li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Prevention Strategies */}
                        <section id="prevention-strategies" className="mb-8 scroll-mt-24">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Preventing Academic Failure
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The best approach to repeat year funding is never needing it. These strategies help prevent academic failure and preserve your +1 year for genuine emergencies.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Early Warning Signs You&apos;re Struggling:</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Academic Signs:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• First assignment returned: 45% or lower (when you expected 55%+)</li>
                                                <li>• Missing lecture content: Can&apos;t follow 50%+ of lecture material</li>
                                                <li>• Tutorial confusion: Others seem to understand, you&apos;re completely lost</li>
                                                <li>• Coursework taking 2-3× expected time</li>
                                                <li>• Reading lists incomprehensible, even after multiple reads</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 text-sm mb-2">Personal Signs:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Avoiding lectures/seminars regularly</li>
                                                <li>• Anxiety about upcoming assessments (beyond normal stress)</li>
                                                <li>• Procrastinating on all coursework until last minute</li>
                                                <li>• Feeling hopeless about catching up</li>
                                                <li>• Dreading Sunday evenings (upcoming week)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm mt-3">
                                        <strong>Critical point:</strong> These signs appear in Week 3-5 of first term, not in May when exam results arrive. Act immediately when signs appear—waiting means playing catch-up for entire year.
                                    </p>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Immediate Actions When Struggling:</h3>

                                    <div className="space-y-2">
                                        <div className="bg-white p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">Week 1-4: Identify Issue</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• Compare your understanding to others in tutorials (am I uniquely lost?)</li>
                                                <li>• Review first assignments critically (what specifically went wrong?)</li>
                                                <li>• Track time spent studying vs actual comprehension achieved</li>
                                                <li>• Be honest: Is this temporary adjustment or fundamental mismatch?</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">Week 5-8: Seek Help</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Personal tutor:</strong> Schedule meeting, explain struggling, ask for advice</li>
                                                <li>• <strong>Module leaders:</strong> Attend office hours, ask for topic clarification</li>
                                                <li>• <strong>Study skills center:</strong> Learn note-taking, time management, exam technique</li>
                                                <li>• <strong>Disability services:</strong> If mental health/disability suspected, register immediately</li>
                                                <li>• <strong>Peer study groups:</strong> Form or join group for problem-solving</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-3 rounded">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">Week 9-12 (Before Xmas): Critical Decision Point</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• If interventions working: Continue, monitor improvement</li>
                                                <li>• If not improving despite help: Consider withdrawing before census date (early December)</li>
                                                <li>• <strong>Why withdraw now?</strong> Before census date, the year often doesn&apos;t count toward funding (policies vary—check with SFE)</li>
                                                <li>• Better to withdraw with 0 funded years used than fail using 1 funded year</li>
                                                <li>• Can reapply next year to different course/university with full 4 years funding intact</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-3">Specific Intervention Strategies by Issue Type:</h3>

                                    <div className="space-y-2">
                                        <div className="bg-white p-2 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">For Knowledge Gaps (Weak Foundation):</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Problem:</strong> Lack prerequisite knowledge (studying Physics but weak at A-level maths)</li>
                                                <li>• <strong>Solution:</strong> Khan Academy, YouTube tutorials, private tutor (£20-£40/hour)</li>
                                                <li>• Dedicate 10 hours/week to remedial study (fill gaps while keeping up with current material)</li>
                                                <li>• Ask lecturers for recommended &quot;catch-up&quot; resources</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-2 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">For Study Skills Deficit:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Problem:</strong> Don&apos;t know HOW to study effectively (cramming doesn&apos;t work, poor notes, etc.)</li>
                                                <li>• <strong>Solution:</strong> University study skills workshops (free), evidence-based techniques</li>
                                                <li>• Learn: Active recall, spaced repetition, Cornell notes, Pomodoro technique</li>
                                                <li>• Read: &quot;Make It Stick&quot; (science of learning), &quot;How to Become a Straight-A Student&quot;</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-2 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">For Mental Health Issues:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Problem:</strong> Depression, anxiety, ADHD, eating disorder affecting ability to study</li>
                                                <li>• <strong>Solution:</strong> GP appointment immediately (may need medication, therapy, diagnosis)</li>
                                                <li>• Register with university disability services (get academic adjustments: extensions, extra time, support plan)</li>
                                                <li>• University counseling (free, usually 6-session courses)</li>
                                                <li>• Don&apos;t wait until crisis—mental health treatment takes months to work</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-2 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">For Time Management/Working Too Much:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Problem:</strong> Working 25-30 hours/week, no time to study properly</li>
                                                <li>• <strong>Solution:</strong> Reduce work hours (request higher maintenance loan, apply for hardship fund)</li>
                                                <li>• Create realistic weekly timetable: 15 hours contact time + 25 hours self-study = 40 hour &quot;job&quot;</li>
                                                <li>• If you must work 20+ hours, consider part-time study instead of full-time</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-2 rounded">
                                            <p className="font-semibold text-gray-800 text-xs mb-1">For Wrong Subject Choice:</p>
                                            <ul className="text-gray-700 text-xs space-y-1">
                                                <li>• <strong>Problem:</strong> Genuinely hate the subject, no interest, can&apos;t motivate yourself to study</li>
                                                <li>• <strong>Solution:</strong> DON&apos;T suffer through entire year hoping it improves</li>
                                                <li>• Speak to admissions about internal course transfer (usually allowed in first term)</li>
                                                <li>• Withdraw before census date if transfer not possible</li>
                                                <li>• Reapply to different subject/university for next year with full funding intact</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">The Sunk Cost Fallacy: Know When to Withdraw</h3>
                                    <p className="text-gray-700 text-sm mb-2">
                                        Many students stay in failing situations because &quot;I&apos;ve already invested 6 months.&quot; This is sunk cost fallacy.
                                    </p>
                                    <div className="bg-white p-3 rounded">
                                        <p className="font-semibold text-gray-800 text-xs mb-2">Consider withdrawal if:</p>
                                        <ul className="text-gray-700 text-xs space-y-1">
                                            <li>• You genuinely hate the subject (passion won&apos;t develop from forcing yourself)</li>
                                            <li>• Material is beyond your ability ceiling despite tutoring/effort</li>
                                            <li>• Mental health crisis that can&apos;t be managed while studying full-time</li>
                                            <li>• Financial circumstances require 30+ hour work week (incompatible with full-time study)</li>
                                        </ul>
                                        <p className="text-gray-700 text-xs mt-2">
                                            <strong>Better outcome:</strong> Withdraw in Week 10 with 0 years of funding used, regroup, apply to suitable course next year → graduate successfully. Versus: Force completion, fail, use +1 year, struggle for 3 more years, graduate with poor classification or not at all.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Resource Checklist: Support Services You Should Know About</h3>
                                    <ul className="list-disc ml-6 text-gray-700 text-xs space-y-1">
                                        <li><strong>Personal tutor:</strong> Academic mentor, first point of contact for problems</li>
                                        <li><strong>Student support/welfare:</strong> Advice on academic difficulties, hardship, mental health signposting</li>
                                        <li><strong>Disability services:</strong> Support plans for mental health, ADHD, dyslexia, chronic illness</li>
                                        <li><strong>Counseling service:</strong> Free therapy, usually 6-8 sessions, book early (long waiting lists)</li>
                                        <li><strong>Academic skills center:</strong> Study techniques, essay writing, time management, exam prep workshops</li>
                                        <li><strong>Library subject specialists:</strong> Help finding sources, research skills</li>
                                        <li><strong>Hardship funds:</strong> Emergency grants for students with financial crisis (doesn&apos;t need repaying)</li>
                                        <li><strong>Students&apos; union advice:</strong> Independent advice on academic appeals, complaints, housing</li>
                                        <li><strong>Career services:</strong> Can help assess whether course fits career goals</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Final Summary */}
                        <section className="text-center py-8 border-t border-gray-200 mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Your +1 year is precious—use it wisely or preserve it
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Student Finance England provides one extra year beyond your course length for difficulties like academic failure, illness, or course changes. This safety net allows one repeat year with full funding, but once used, there&apos;s no second chance. If you repeat and fail again, or fail multiple different years, funding stops before degree completion—leaving you with debt and no qualification. Prevention is better than cure: recognize struggling early (Week 3-5, not exam results in May), access support services immediately, and be willing to withdraw before census date if fundamentally wrong course/circumstances. When failure happens, diagnose root cause honestly before committing to repeat—if the issue isn&apos;t resolved (wrong subject, ability ceiling, persistent crisis), repeating adds £21k debt with high risk of second failure. Sometimes alternatives deliver better outcomes: course switching, module resits only, degree apprenticeships, or professional qualifications that bypass traditional degrees entirely.
                            </p>
                            <p className="text-gray-700 font-semibold">
                                Don&apos;t gamble your final funded year on repeating the same course that already failed you once—explore all alternatives first.
                            </p>
                        </section>

                        <DrLilaDesc />
                    </div>

                    {/* Sidebar - Table of Contents */}
                    <aside className="lg:w-80 lg:flex-shrink-0">
                        <TableOfContents items={tocItems} />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default RepeatYearFunding;