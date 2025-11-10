"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

// --- Constants (tweak if thresholds change) ---
const PG_THRESHOLD = 21_000;         // £
const PG_RATE = 0.06;                // 6% of income above threshold
const UG_PLAN2_THRESHOLD = 27_295;   // £ (for combined example)
const UG_PLAN2_RATE = 0.09;          // 9%
const INTEREST_COPY = "RPI + 3% (currently ~7.6% total)";

// Helpers
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

// UK tax year starts 6 April; write-off 30 years after entering repayment.
const computeWriteOffLabel = () => {
    const now = new Date();
    const y = now.getFullYear();
    const taxYear = now < new Date(y, 3, 6) ? y - 1 : y; // April = month 3 (0-indexed)
    return `April ${taxYear + 30}`;
};

export default function PostgradCalculatorPage() {
    const [loanType, setLoanType] = useState<"masters" | "doctoral">("masters");
    const [salary, setSalary] = useState(30_000);
    const [graduationYear, setGraduationYear] = useState(2022);
    const [loanAmount, setLoanAmount] = useState(11_000);
    const [hasUndergrad, setHasUndergrad] = useState(false);

    const maxForType = loanType === "masters" ? 11_836 : 27_892;

    const {
        pgMonthly,
        pgAnnual,
        pgLifetimeSimple,
        simpleInterestPaid,
        ugMonthly,
        combinedMonthly,
    } = useMemo(() => {
        // Postgrad repayments
        const abovePg = Math.max(0, salary - PG_THRESHOLD);
        const pgAnnual = abovePg * PG_RATE;
        const pgMonthly = pgAnnual / 12;

        // Simple lifetime projection over 30 years, capped by principal
        const projected30 = pgAnnual * 30;
        const pgLifetimeSimple = Math.min(loanAmount, projected30);

        // If projected repayments exceed principal, treat the extra as simple "interest paid"
        const simpleInterestPaid = Math.max(0, projected30 - loanAmount);

        // Optional: Undergrad (Plan 2) concurrent repayments for a quick combined view
        const aboveUg = Math.max(0, salary - UG_PLAN2_THRESHOLD);
        const ugAnnual = aboveUg * UG_PLAN2_RATE;
        const ugMonthly = ugAnnual / 12;

        const combinedMonthly = hasUndergrad ? pgMonthly + ugMonthly : pgMonthly;

        return {
            pgMonthly,
            pgAnnual,
            pgLifetimeSimple,
            simpleInterestPaid,
            ugMonthly,
            combinedMonthly,
        };
    }, [salary, loanAmount, hasUndergrad]);

    const handleSubmit = (e: React.FormEvent) => e.preventDefault();

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
                {/* Intro */}
                <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">

                        <nav aria-label="breadcrumb">
                            <ol className="flex items-center space-x-1 text-sm text-gray-600">
                                <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </li>
                                <li><Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link></li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </li>
                                <li><span className="font-medium text-gray-800" aria-current="page">Postgraduate Loan Calculator</span></li>
                            </ol>
                        </nav>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Postgraduate Loan Calculator
                        </h1>
                        <p className="text-xl text-gray-600">
                            Estimate your monthly and total repayments for UK postgraduate Master&apos;s and Doctoral loans.
                        </p>
                    </div>
                </section>

                {/* Calculator */}
                <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: form */}
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                <div className="flex items-start">
                                    <div className="text-blue-600 mr-3 mt-1">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800">About Postgraduate Loans</h3>
                                        <p className="text-sm text-gray-600">
                                            Postgraduate loans apply to Master&apos;s and Doctoral students in the UK. You repay 6% of income above £21,000 per year, alongside any undergraduate loan repayments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    {/* Loan Type */}
                                    <div>
                                        <label htmlFor="loan-type" className="block text-sm font-medium text-gray-700 mb-1">
                                            Loan Type
                                        </label>
                                        <select
                                            id="loan-type"
                                            name="loan-type"
                                            value={loanType}
                                            onChange={(e) => setLoanType(e.target.value as "masters" | "doctoral")}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            aria-describedby="loan-type-hint"
                                        >
                                            <option value="masters">Master&apos;s Loan</option>
                                            <option value="doctoral">Doctoral Loan</option>
                                        </select>
                                        <p id="loan-type-hint" className="mt-1 text-sm text-gray-500">
                                            Select the type of postgraduate loan you have
                                        </p>
                                    </div>

                                    {/* Salary */}
                                    <div>
                                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                                            Annual Salary
                                        </label>
                                        <div className="flex items-center">
                                            <span className="text-gray-500 mr-2">£</span>
                                            <input
                                                id="salary"
                                                name="salary"
                                                type="number"
                                                min={0}
                                                max={250_000}
                                                step={1000}
                                                value={salary}
                                                onChange={(e) => setSalary(clamp(Number(e.target.value || 0), 0, 250_000))}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                aria-describedby="salary-hint"
                                            />
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                id="salary-slider"
                                                type="range"
                                                min={0}
                                                max={150_000}
                                                step={1000}
                                                value={salary}
                                                onChange={(e) => setSalary(Number(e.target.value))}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p id="salary-hint" className="mt-1 text-sm text-gray-500">
                                            The threshold for postgraduate loan repayments is £21,000
                                        </p>
                                    </div>

                                    {/* Graduation Year */}
                                    <div>
                                        <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">
                                            Graduation Year
                                        </label>
                                        <select
                                            id="graduation-year"
                                            name="graduation-year"
                                            value={graduationYear}
                                            onChange={(e) => setGraduationYear(Number(e.target.value))}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            aria-describedby="graduation-hint"
                                        >
                                            {Array.from({ length: 10 }, (_, i) => 2016 + i).map((y) => (
                                                <option key={y} value={y}>{y}</option>
                                            ))}
                                        </select>
                                        <p id="graduation-hint" className="mt-1 text-sm text-gray-500">
                                            Postgraduate loans are available since 2016 for Master&apos;s and 2018 for Doctoral studies
                                        </p>
                                    </div>

                                    {/* Loan Amount */}
                                    <div>
                                        <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                                            Total Loan Amount
                                        </label>
                                        <div className="flex items-center">
                                            <span className="text-gray-500 mr-2">£</span>
                                            <input
                                                id="loan-amount"
                                                name="loan-amount"
                                                type="number"
                                                min={1_000}
                                                max={150_000}
                                                step={500}
                                                value={loanAmount}
                                                onChange={(e) =>
                                                    setLoanAmount(clamp(Number(e.target.value || 0), 1_000, 150_000))
                                                }
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                aria-describedby="loan-hint"
                                            />
                                        </div>
                                        <p id="loan-hint" className="mt-1 text-sm text-gray-500">
                                            Maximum Master&apos;s loan is £11,836 and Doctoral loan is £27,892 (2023/24)
                                        </p>
                                        <div className="mt-1 text-xs text-gray-500">
                                            Tip: for {loanType === "masters" ? "Master’s" : "Doctoral"} loans, typical maximum is&nbsp;
                                            £{maxForType.toLocaleString()}.
                                        </div>
                                    </div>

                                    {/* Has Undergrad Loan */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="has-undergrad-loan" className="block text-sm font-medium text-gray-700 mb-1">
                                                I Also Have an Undergraduate Loan
                                            </label>
                                            <div className="relative flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="has-undergrad-loan"
                                                        name="has-undergrad-loan"
                                                        type="checkbox"
                                                        checked={hasUndergrad}
                                                        onChange={(e) => setHasUndergrad(e.target.checked)}
                                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Check this to see combined repayments with your undergraduate (Plan 2) loan.
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                                        >
                                            Calculate Repayments
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Right: summary */}
                        <div className="bg-gray-50 p-6 rounded-xl" role="region" aria-live="polite">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Repayment Summary</h2>

                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500">Monthly Repayment</p>
                                    <p className="text-3xl font-bold text-gray-800">£{pgMonthly.toFixed(2)}</p>
                                    <p className="text-sm text-gray-500">6% of income above threshold</p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500">Annual Repayment</p>
                                    <p className="text-2xl font-bold text-gray-800">£{pgAnnual.toFixed(2)}</p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500">Total to be Repaid</p>
                                    <p className="text-2xl font-bold text-gray-800">
                                        £{Math.round(pgLifetimeSimple).toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-500">Over the life of the loan (simple projection)</p>
                                </div>

                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500">Total Interest Paid</p>
                                    <p className="text-2xl font-bold text-gray-800">
                                        £{Math.max(0, Math.round(simpleInterestPaid)).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Expected Write-Off Date</p>
                                    <p className="text-2xl font-bold text-gray-800">{computeWriteOffLabel()}</p>
                                    <p className="text-sm text-gray-500">30 years after entering repayment</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Current Interest Rate: </span>
                                    {INTEREST_COPY}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Combined block (shown visually regardless; numbers reflect checkbox state) */}
                <section className="max-w-4xl mx-auto bg-amber-50 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Combined Loan Repayments</h2>
                    <p className="text-gray-700 mb-4">
                        With both undergraduate and postgraduate loans, your total monthly repayment would be approximately{" "}
                        <span className="font-semibold">£{combinedMonthly.toFixed(2)}</span>.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Undergraduate Loan (9%)</p>
                            <p className="text-xl font-bold text-gray-800">
                                £{ugMonthly.toFixed(2)}/month
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Postgraduate Loan (6%)</p>
                            <p className="text-xl font-bold text-gray-800">
                                £{pgMonthly.toFixed(2)}/month
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">
                        That&apos;s a total of 15% of your income across the relevant portions above each threshold. For more
                        details, try our{" "}
                        <Link className="text-blue-600 hover:underline" href="/calculators/combined-repayment-calculator/">
                            Combined Repayment Calculator
                        </Link>.
                    </p>
                </section>

                {/* Related */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
                            href="/calculators/combined-repayment-calculator/"
                        >
                            <div className="mr-3 text-blue-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800 mb-1">Combined Loans Calculator</h3>
                                <p className="text-sm text-gray-600">Calculate repayments when you have multiple types of student loans</p>
                            </div>
                        </Link>

                        <Link
                            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start"
                            href="/calculators/plan-2-student-loan-calculator/"
                        >
                            <div className="mr-3 text-blue-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800 mb-1">Plan 2 Calculator</h3>
                                <p className="text-sm text-gray-600">Calculate undergraduate loan repayments</p>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Explainer */}
                <section className="max-w-4xl mx-auto prose prose-blue">
                    <h2>How Does the Postgraduate Loan Calculator Work?</h2>
                    <p>
                        This calculator helps you understand your <strong>postgraduate loan repayments</strong> based on your salary and loan type.
                        Postgraduate loans in the UK are available for both Master&apos;s and Doctoral degrees.
                    </p>

                    <Accordion type="multiple" className="w-full">
                        <AccordionItem value="key-facts">
                            <AccordionTrigger>Key Facts About Postgraduate Loans</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li><strong>Repayment Threshold:</strong> You only repay when you earn above £21,000 per year (£1,750 per month)</li>
                                    <li><strong>Repayment Rate:</strong> 6% of income above the threshold</li>
                                    <li><strong>Interest Rate:</strong> RPI + 3% (currently around 7.6% total)</li>
                                    <li><strong>Forgiveness Period:</strong> Any remaining balance is written off 30 years after entering repayment</li>
                                    <li><strong>Maximum Loan:</strong> £11,836 for Master&apos;s and £27,892 for Doctoral degrees (2023/24 figures)</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="how-it-works">
                            <AccordionTrigger>How Postgraduate Loan Repayments Work</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3">
                                    <p>If you earn £30,000 per year, you&apos;ll repay 6% of the amount over the threshold:</p>
                                    <ul>
                                        <li>Annual income: £30,000</li>
                                        <li>Repayment threshold: £21,000</li>
                                        <li>Income above threshold: £9,000</li>
                                        <li>Repayment rate: 6%</li>
                                        <li>Annual repayment: £540 (£45 per month)</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="combined-repayments">
                            <AccordionTrigger>Combined Repayments with Undergraduate Loans</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <p>If you have both undergraduate and postgraduate loans, you&apos;ll make repayments on both simultaneously:</p>
                                    <ul>
                                        <li><strong>Undergraduate loan:</strong> 9% of income above £27,295 (Plan 2) or relevant threshold</li>
                                        <li><strong>Postgraduate loan:</strong> 6% of income above £21,000</li>
                                    </ul>
                                    <p>This means you could be repaying a total of 15% of portions of your income.</p>

                                    <h4 className="font-semibold text-gray-800 mt-4">Example of Combined Repayments</h4>
                                    <p>For someone earning £35,000 with both Plan 2 and postgraduate loans:</p>
                                    <ul>
                                        <li>Plan 2 repayment: 9% of (£35,000 − £27,295) = £694.45 per year (£57.87 per month)</li>
                                        <li>Postgraduate repayment: 6% of (£35,000 − £21,000) = £840 per year (£70 per month)</li>
                                        <li>Total monthly repayment: £127.87</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* CTA */}
                <section className="max-w-4xl mx-auto bg-green-50 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Have multiple student loans?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        If you have both undergraduate and postgraduate loans, try our combined calculator to see your total repayments.
                    </p>
                    <Link
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                        href="/calculators/combined-repayment-calculator/"
                    >
                        Try Our Combined Calculator
                    </Link>
                </section>

                {/* Breadcrumb (content-only) */}
                <nav aria-label="breadcrumb" className="max-w-4xl mx-auto">
                    <ol className="flex items-center space-x-1 text-sm text-gray-600">
                        <li><Link className="hover:text-blue-700 hover:underline" href="/">Home</Link></li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </li>
                        <li><Link className="hover:text-blue-700 hover:underline" href="/calculators/">Calculators</Link></li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </li>
                        <li><span className="font-medium text-gray-800" aria-current="page">Postgraduate Calculator</span></li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}
