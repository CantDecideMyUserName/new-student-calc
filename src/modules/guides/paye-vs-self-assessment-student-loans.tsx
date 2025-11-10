import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const PayeVsSelfAssessmentGuide: React.FC = () => {
  const tocItems = [
    { id: "how-paye-works", title: "How PAYE Student Loan Deductions Work", level: 2 },
    { id: "how-self-assessment-works", title: "How Self Assessment Student Loan Repayments Work", level: 2 },
    { id: "timing-problem", title: "The Timing Problem: PAYE Immediate vs Self Assessment Arrears", level: 2 },
    { id: "both-systems", title: "When You Need Both Systems", level: 2 },
    { id: "overpayment-problem", title: "The Overpayment Problem", level: 2 },
    { id: "why-sa-higher", title: "Why Self Assessment Bills Are Often Higher", level: 2 },
    { id: "annual-vs-monthly", title: "The Annual vs Monthly Calculation Difference", level: 2 },
    { id: "payments-on-account", title: "Payments on Account: The Hidden Extra Cost", level: 2 },
    { id: "which-costs-more", title: "Which System Actually Costs You More?", level: 2 },
    { id: "reconciliation", title: "Reconciliation Between the Two Systems", level: 2 },
    { id: "strategic-considerations", title: "Strategic Considerations: Can You Choose?", level: 2 },
    { id: "common-mistakes", title: "Common Mistakes and How to Avoid Them", level: 2 },
    { id: "using-calculators", title: "Using Calculators to Plan Ahead", level: 2 },
    { id: "conclusion", title: "Making the System Work For You", level: 2 },
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
                <Link className="hover:text-blue-700 hover:underline" href="/guides/">
                  Guides
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
                  PAYE vs Self Assessment Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            PAYE vs Self Assessment for Student Loan Repayments
          </h1>
          <p className="text-xl text-gray-600">
            The SL Marker: Undergraduate Student Loans
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
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                When it comes to repaying your student loan, most people assume it just happens automatically
                through their payslip. For many, that&apos;s true. But if you earn income beyond basic employment,
                you might find yourself dealing with two completely different repayment systems: PAYE (Pay As
                You Earn) and Self Assessment. And confusingly, these two systems can charge you different
                amounts for the same income.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding the difference between PAYE and Self Assessment for student loans isn&apos;t just
                academic. It&apos;s the difference between predictable monthly deductions and surprise tax bills in
                January. It&apos;s knowing whether you&apos;ll overpay through one system and underpay through another.
                And critically, it&apos;s understanding why some people end up paying twice, or not at all, depending
                on how their income is structured.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have any income beyond standard employment (rental property, freelance work,
                dividends, or even just a high salary requiring Self Assessment), you need to understand how
                both systems work and which one will cost you more.
              </p>
            </section>

            {/* How PAYE Works */}
            <section id="how-paye-works" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How PAYE Student Loan Deductions Work
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE is the system most people know. Your employer receives your tax code from HMRC, sees
                the SL or PGL markers, and automatically deducts student loan repayments alongside tax and
                National Insurance. It happens every time you&apos;re paid, whether that&apos;s weekly, monthly, or
                another schedule.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The calculation is straightforward. Your employer takes your gross pay for that period, subtracts
                the monthly or weekly threshold for your loan plan, and applies either 9% (undergraduate) or
                6% (postgraduate) to the remainder. This happens in isolation each pay period.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">PAYE Example (Plan 2, £2,500 monthly):</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Monthly threshold: £2,274.58</li>
                  <li>Amount above threshold: £225.42</li>
                  <li>Deduction: £225.42 × 9% = £20.29</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This £20.29 comes out automatically. You never see it, never have to calculate it, and never
                have to send it anywhere. Your employer sends it directly to HMRC, who forward it to the
                Student Loans Company. From your perspective, it just reduces your take-home pay.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The key feature of PAYE is immediacy. The deduction happens when you&apos;re paid. There&apos;s no
                delay, no year-end calculation, and no bill arriving months later. What you see on your payslip is
                what you pay.
              </p>
            </section>

            {/* How Self Assessment Works */}
            <section id="how-self-assessment-works" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Self Assessment Student Loan Repayments Work
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self Assessment is completely different. Instead of deductions happening automatically through
                your employer, you calculate your total income for the entire tax year, work out what you owe in
                student loan repayments, and pay it directly to HMRC. This typically happens months after
                you&apos;ve actually earned the money.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self Assessment becomes necessary when you have income that isn&apos;t taxed through PAYE.
                This includes:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Self-employment income over £1,000</li>
                <li>Rental income over £2,500 (after allowable expenses)</li>
                <li>Dividend income over £500</li>
                <li>Untaxed savings interest</li>
                <li>Income from abroad</li>
                <li>High earnings over £100,000 (even if all from employment)</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                When you complete your Self Assessment tax return, there&apos;s a specific section for student loan
                repayments. You enter your total income for the year, and HMRC&apos;s system calculates your
                repayment based on your loan plan. The calculation uses your total income for the entire tax
                year, not month-by-month figures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The amount you owe gets added to your tax bill. So on 31 January (the deadline for Self
                Assessment), you&apos;re not just paying income tax. You&apos;re also paying any student loan
                repayments that weren&apos;t already collected through PAYE.
              </p>
            </section>

            {/* Timing Problem */}
            <section id="timing-problem" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Timing Problem: PAYE Immediate vs Self Assessment Arrears
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The biggest practical difference between the two systems is timing. PAYE deductions happen
                when you earn the money. Self Assessment repayments happen up to 10 months later.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Timeline Example:</h3>
                <p className="text-gray-700 mb-2">Someone who starts freelancing in April 2025:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>April to March 2026: They earn freelance income</li>
                  <li>January 2027: They submit their tax return for 2025/26</li>
                  <li>31 January 2027: Payment is due</li>
                </ul>
                <p className="text-gray-700 mt-2 font-medium">
                  That&apos;s nearly a year between earning the money and paying the student loan on it.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                For many people, this creates problems. The money has already been spent, and now there&apos;s a
                bill for hundreds or thousands of pounds that they weren&apos;t expecting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE never creates this issue. The deduction happens immediately, so you never have a
                chance to spend money that actually needs to go toward your student loan. Your budget adjusts
                naturally because you only ever see your post-deduction income.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This timing difference also affects how the money feels psychologically. PAYE deductions are
                invisible. Most people don&apos;t think about them. Self Assessment payments are very visible. You
                have to actively transfer money to HMRC, and you feel every pound leaving your account.
              </p>
            </section>

            {/* Both Systems */}
            <section id="both-systems" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When You Need Both Systems
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many people find themselves paying through both PAYE and Self Assessment simultaneously.
                This happens when you have employment income (which uses PAYE) plus other income (which
                requires Self Assessment).
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common scenarios include:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Full-time employee who also freelances on evenings or weekends</li>
                  <li>Employee with a rental property generating income</li>
                  <li>Employee who receives significant dividends from investments</li>
                  <li>Someone working through an umbrella company with additional income streams</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                When you&apos;re in both systems, here&apos;s what happens:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your employer continues deducting student loan repayments through PAYE based on your
                employment income. Then, at year-end, HMRC calculates your total repayment based on ALL
                your income. They subtract what you&apos;ve already paid through PAYE, and any shortfall becomes
                a Self Assessment bill.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Concrete Example: Sarah&apos;s Situation</h3>
                <p className="text-gray-700 mb-2">
                  Sarah earns £30,000 from employment and £8,000 from freelance work (total £38,000).
                  Her Plan 2 threshold is £27,295.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Through PAYE (£30,000 only):</h4>
                    <ul className="text-sm text-gray-700">
                      <li>Above threshold: £30,000 - £27,295 = £2,705</li>
                      <li>PAYE deduction: £2,705 × 9% = £243.45</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Through Self Assessment (£38,000 total):</h4>
                    <ul className="text-sm text-gray-700">
                      <li>Above threshold: £38,000 - £27,295 = £10,705</li>
                      <li>Total due: £10,705 × 9% = £963.45</li>
                      <li>Already paid via PAYE: £243.45</li>
                      <li><strong>Additional SA payment: £720.00</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Sarah&apos;s employer has deducted £243.45 during the year. But based on her total income, she
                actually owes £963.45. So her Self Assessment bill includes an extra £720 for student loans.
                This surprises many people. They see student loan deductions on their payslip all year and
                assume they&apos;re covered. Then January arrives with a four-figure bill.
              </p>
            </section>

            {/* Overpayment Problem */}
            <section id="overpayment-problem" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Overpayment Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While underpayment through multiple income streams is common, overpayment creates its own
                issues. This typically happens when you have multiple PAYE sources or when your income
                varies significantly through the year.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Employers Scenario:</h3>
                <p className="text-gray-700 mb-2">
                  Tom has two jobs. Job A pays £1,800 monthly and Job B pays £1,200 monthly. Each employer
                  applies their own threshold when calculating student loan deductions.
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Job A calculates: £1,800 - £2,274.58 = below threshold, no deduction</li>
                  <li>Job B calculates: £1,200 - £2,274.58 = below threshold, no deduction</li>
                  <li>Tom pays nothing through PAYE</li>
                  <li>But his actual total income is £36,000 per year, significantly above the £27,295 threshold</li>
                  <li>Come January, he owes £786.45 through Self Assessment</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Alternatively, if both employers have been given BR SL codes (basic rate with student loan),
                they might both be deducting as if his entire pay from each job is above the threshold. Now he&apos;s
                overpaying every month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Self Assessment system should correct both situations. In the first case, it adds the shortfall
                to Tom&apos;s bill. In the second, it should trigger a refund. But in practice, many people don&apos;t realize
                they&apos;ve overpaid and never claim the money back.
              </p>
            </section>

            {/* Why Self Assessment Bills Are Higher */}
            <section id="why-sa-higher" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Self Assessment Bills Are Often Higher
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When people compare PAYE and Self Assessment, they often find they pay more through Self
                Assessment. This isn&apos;t because the system charges different rates. It&apos;s because of how income
                is measured and what counts toward the threshold.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">PAYE considers only employment income</h3>
                  <p className="text-gray-700 text-sm">
                    If you earn £25,000 from your job, you&apos;re below the Plan 2 threshold of £27,295.
                    Your employer deducts nothing.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Self Assessment considers total income</h3>
                  <p className="text-gray-700 text-sm">
                    If you have that same £25,000 employment income plus £10,000 rental income, your total is
                    £35,000. Now you&apos;re £7,705 above the threshold, owing £693.45 in student loan repayments
                    through Self Assessment.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Investment income particularly catches people out. Dividends don&apos;t have PAYE deductions. If
                you receive £5,000 in dividends, no student loan deduction happens when you receive the
                money. But come Self Assessment time, that £5,000 gets added to your total income and can
                trigger or increase student loan repayments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> help you model these scenarios and understand what you&apos;ll
                actually owe across both systems.
              </p>
            </section>

            {/* Annual vs Monthly Calculation */}
            <section id="annual-vs-monthly" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Annual vs Monthly Calculation Difference
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PAYE calculates your student loan monthly (or weekly, if you&apos;re paid weekly). Self Assessment
                calculates annually. This creates different results when your income fluctuates.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Variable Income Example: Emma the Consultant</h3>
                <p className="text-gray-700 mb-2">
                  Emma earns nothing for six months, then £36,000 over the next six months:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">PAYE approach:</h4>
                    <ul className="text-sm text-gray-700">
                      <li>Months 1-6: £0 income, £0 deduction</li>
                      <li>Months 7-12: £6,000 per month</li>
                      <li>Each month 7-12: (£6,000 - £2,274.58) × 9% = £335.29</li>
                      <li><strong>Total PAYE deduction: £2,011.74</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Self Assessment approach:</h4>
                    <ul className="text-sm text-gray-700">
                      <li>Total annual income: £36,000</li>
                      <li>Amount above threshold: £36,000 - £27,295 = £8,705</li>
                      <li><strong>Total repayment: £783.45</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mt-4 font-medium">
                  Emma has overpaid by £1,228.29 through PAYE and should receive a refund.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Emma has overpaid by £1,228.29 through PAYE because each high-earning month was
                calculated independently, without averaging across the zero-income months. Self Assessment&apos;s
                annual calculation reveals the overpayment, and she should receive a refund. This is why people
                with variable income often prefer Self Assessment, even though it means dealing with tax returns.
                The annual calculation better reflects their actual situation.
              </p>
            </section>

            {/* Payments on Account */}
            <section id="payments-on-account" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Payments on Account: The Hidden Extra Cost
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your Self Assessment bill exceeds £1,000, HMRC requires &quot;payments on account&quot; for the
                following year. This is where Self Assessment becomes particularly expensive.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payments on account work like this: HMRC assumes you&apos;ll earn similar amounts next year, so
                they require you to prepay half your estimated bill by 31 January and the other half by 31 July.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sarah&apos;s Payment Schedule Example:</h3>
                <p className="text-gray-700 mb-2">
                  Sarah owed £720 in student loan repayments plus tax through Self Assessment:
                </p>

                <div className="space-y-2">
                  <div className="text-gray-700">
                    <strong>Year 1:</strong>
                    <ul className="list-disc ml-6 mt-1">
                      <li>31 January 2027: Pay £720 for 2025/26 tax year</li>
                      <li>31 January 2027: Pay £360 (first payment on account for 2026/27)</li>
                      <li>31 July 2027: Pay £360 (second payment on account for 2026/27)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mt-4 font-medium">
                  In just six months, Sarah pays £1,440 even though only £720 relates to income she&apos;s actually
                  earned and received.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This bunching of payments causes serious cash flow problems. Many people can&apos;t afford to pay
                nearly double their normal bill. And if their income drops in the second year, they&apos;ve overpaid
                and have to wait months for a refund.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Student loan repayments through Self Assessment are included in these advance payments. So
                you&apos;re not just prepaying tax. You&apos;re prepaying student loans on income you haven&apos;t earned yet.
              </p>
            </section>

            {/* Which System Costs More */}
            <section id="which-costs-more" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Which System Actually Costs You More?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In pure monetary terms, neither system should cost more than the other. The repayment
                calculation is the same: 9% of income above the threshold for undergraduate loans, 6% for
                postgraduate. Whether that calculation happens monthly through PAYE or annually through Self
                Assessment, the mathematics should produce the same result.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But in practice, most people pay more through Self Assessment because:
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Timing and cash flow</h3>
                    <p className="text-gray-700 text-sm">
                      Money paid months after earning it feels more expensive than automatic deductions.
                      You&apos;ve already spent or allocated that money in your mental accounting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Advance payments</h3>
                    <p className="text-gray-700 text-sm">
                      Payments on account mean paying for next year&apos;s repayments before you&apos;ve earned the income.
                      PAYE never requires this.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Payment shock</h3>
                    <p className="text-gray-700 text-sm">
                      A £1,000+ bill arriving in January is psychologically harder than £80 disappearing from
                      your payslip each month, even though the annual total is similar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interest on late payment</h3>
                    <p className="text-gray-700 text-sm">
                      If you can&apos;t pay your Self Assessment bill on time, HMRC charges interest. That genuinely
                      costs you more than PAYE, where late payment isn&apos;t possible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Penalties</h3>
                    <p className="text-gray-700 text-sm">
                      Missing the 31 January deadline triggers automatic penalties. First penalty is £100, then
                      £10 per day after three months, then percentage-based penalties. These are real additional
                      costs that PAYE employment never faces.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reconciliation */}
            <section id="reconciliation" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Reconciliation Between the Two Systems
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At year-end, HMRC reconciles what you&apos;ve paid through PAYE against what you owe based on
                total income. This reconciliation should ensure you&apos;ve paid the right amount overall, with any
                overpayment refunded and any underpayment billed.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The reconciliation process:</h3>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1">
                  <li>HMRC receives information from your employer(s) about your employment income and PAYE deductions</li>
                  <li>You submit your Self Assessment return declaring all income</li>
                  <li>HMRC&apos;s system calculates total student loan repayment based on total income</li>
                  <li>The system subtracts PAYE deductions already made</li>
                  <li>Any difference creates either a refund or an additional bill</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                In theory, this is fair and accurate. In practice, the system often gets it wrong because:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>PAYE information from employers arrives late or incomplete</li>
                <li>Self Assessment calculations don&apos;t properly account for PAYE deductions</li>
                <li>Student Loans Company hasn&apos;t updated HMRC about your current loan status</li>
                <li>You&apos;re on the wrong loan plan, so the threshold used is incorrect</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700">
                  <strong>Always check the reconciliation carefully.</strong> Look at your Self Assessment calculation and
                  verify that your PAYE deductions have been properly credited. If they haven&apos;t, you&apos;ll be charged
                  twice on the same income.
                </p>
              </div>
            </section>

            {/* Strategic Considerations */}
            <section id="strategic-considerations" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Considerations: Can You Choose?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Generally, you can&apos;t choose between PAYE and Self Assessment for student loans. The system
                you use depends on your income sources:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Only employment income = PAYE only</li>
                <li>Any self-employment, rental, or investment income above de minimis thresholds = Self Assessment required</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                However, there are some strategic decisions available:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Timing self-employment income</h3>
                  <p className="text-gray-700">
                    If you control when you invoice or receive payment, spreading income across tax years can
                    sometimes reduce or eliminate Self Assessment requirements. Earning £900 self-employment
                    income in one tax year keeps you below the £1,000 trading allowance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Using tax-efficient structures</h3>
                  <p className="text-gray-700">
                    Dividends from limited companies trigger Self Assessment, but salary doesn&apos;t (if below £100,000).
                    Restructuring how you extract profit from a business can shift you back to PAYE-only.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Claiming allowable expenses</h3>
                  <p className="text-gray-700">
                    Higher expenses on rental or self-employment income can reduce your taxable profit below the
                    £2,500 threshold that triggers mandatory Self Assessment. With lower reportable income, you
                    stay in PAYE-only territory.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                These aren&apos;t ways to avoid paying student loans you legitimately owe. They&apos;re ways to avoid the
                administrative burden and cash flow impact of Self Assessment while ensuring you still pay the
                right amount through PAYE.
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Common Mistakes and How to Avoid Them
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 1: Not registering for Self Assessment</h3>
                  <p className="text-gray-700">
                    If your non-employment income crosses the threshold requiring Self Assessment, you must
                    register by 5 October after the tax year ends. Many people don&apos;t realize this applies to them
                    until they receive penalties for non-registration.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 2: Forgetting student loans in Self Assessment calculations</h3>
                  <p className="text-gray-700">
                    The Self Assessment form has specific boxes for student loan repayments. Some people
                    complete their return but skip this section, thinking PAYE has covered it. Then they receive
                    adjusted bills months later.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 3: Not claiming PAYE credits</h3>
                  <p className="text-gray-700">
                    If you&apos;ve paid student loans through PAYE, these should reduce your Self Assessment bill.
                    But if the information hasn&apos;t transferred properly, you need to manually claim these credits.
                    Otherwise you pay twice.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 4: Assuming variable income averages out</h3>
                  <p className="text-gray-700">
                    PAYE calculates monthly. If you have three high months and nine low months, PAYE might
                    overcharge you. You need to file Self Assessment to claim the refund, even if you don&apos;t have
                    non-employment income.
                  </p>
                </div>
              </div>
            </section>

            {/* Calculators */}
            <section id="using-calculators" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Using Calculators to Plan Ahead
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Given how complex the interaction between PAYE and Self Assessment can be, planning ahead
                is essential. Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/paye-vs-self-assessment-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800">PAYE vs Self Assessment Repayment Calculator</Link> shows exactly what you&apos;ll pay
                through each system based on your specific income mix.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you&apos;re facing a Self Assessment bill including student loans, our <Link target="_blank" href="https://studentloancalculator.uk/calculators/self-assessment-balancing-payment-calculator/" className="text-blue-600 underline hover:text-blue-800">Self Assessment Student
                  Loan Balancing Calculator</Link> helps you understand how the balancing payment is calculated and
                how much to budget for January.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Making the System Work For You
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Neither PAYE nor Self Assessment is inherently better for student loan repayments. PAYE offers
                simplicity and automatic deductions but only works for standard employment. Self Assessment
                handles complex income situations but creates cash flow challenges and administrative burden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;re in both systems, the key is accurate record-keeping. Track your PAYE deductions
                throughout the year so you can verify your Self Assessment calculation. Budget for the January
                payment by setting aside approximately 9% of your non-employment income as you earn it. And
                use the reconciliation process to ensure you&apos;re not paying more than you owe.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding both systems means you can plan effectively, avoid nasty surprises, and ensure
                you&apos;re only paying what you genuinely owe based on your total income. The system might be
                complicated, but it doesn&apos;t have to be mysterious.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Plan ahead to avoid payment shock and ensure you&apos;re paying the right amount through both systems.
              </h3>
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

export default PayeVsSelfAssessmentGuide;