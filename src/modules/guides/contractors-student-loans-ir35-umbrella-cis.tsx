import React from 'react';
import Link from 'next/link';
import DrLilaDesc from '@/components/common/dr-lila-desc';
import TableOfContents from '@/components/common/tableOfContent';

const ContractorsStudentLoansGuide: React.FC = () => {
  const tocItems = [
    { id: "understanding-ir35", title: "Understanding IR35: The Foundation of Contractor Taxation", level: 2 },
    { id: "inside-ir35", title: "How Student Loans Work Inside IR35", level: 2 },
    { id: "umbrella-companies", title: "Umbrella Companies and Student Loan Deductions", level: 2 },
    { id: "outside-ir35", title: "Outside IR35: Limited Company and Dividend Income", level: 2 },
    { id: "cis-rules", title: "The CIS: Construction Industry Scheme Rules", level: 2 },
    { id: "income-comparison", title: "Comparing Net Income Across Different Structures", level: 2 },
    { id: "ir35-changes", title: "IR35 Changes and Their Impact", level: 2 },
    { id: "strategic-planning", title: "Strategic Planning for Contractor Student Loans", level: 2 },
    { id: "common-mistakes", title: "Common Contractor Mistakes with Student Loans", level: 2 },
    { id: "record-keeping", title: "Record-Keeping Requirements", level: 2 },
    { id: "professional-advice", title: "When to Seek Professional Advice", level: 2 },
    { id: "future-outlook", title: "The Future of Contractor Student Loans", level: 2 },
    { id: "taking-control", title: "Taking Control as a Contractor", level: 2 },
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
                  Contractors Student Loans: IR35, Umbrella & CIS
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loans for Contractors: IR35, Umbrella, and CIS
          </h1>
          <p className="text-xl text-gray-600">
            IR35 Status and Student Loan Calculations: Inside vs Outside Determination
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
                Contracting in the UK offers flexibility and often higher earnings, but it creates a maze of
                complexity when it comes to student loan repayments. If you work through a limited company,
                an umbrella company, or under the Construction Industry Scheme (CIS), your student loan
                deductions work completely differently from standard employment. And with IR35 rules
                changing how many contractors operate, understanding these differences isn&apos;t optional.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The confusion stems from how contractor income is classified and taxed. Are you employed or
                self-employed? Are you inside or outside IR35? Do you get paid gross or net? Each answer
                triggers different student loan repayment mechanisms, and getting it wrong can mean either
                underpaying (and facing surprise bills later) or overpaying (and losing money you don&apos;t owe).
              </p>
              <p className="text-gray-700 leading-relaxed">
                For contractors with student loans, the structure you choose for your work genuinely affects how
                much you pay and when. This isn&apos;t about tax avoidance. It&apos;s about understanding how the
                system treats different working arrangements so you can make informed decisions and avoid
                expensive mistakes.
              </p>
            </section>

            {/* Understanding IR35 */}
            <section id="understanding-ir35" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding IR35: The Foundation of Contractor Taxation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 legislation determines whether a contractor should be treated as employed or
                self-employed for tax purposes. The rules examine the reality of your working relationship, not
                just what your contract says. If HMRC or your client determines you&apos;re &quot;inside IR35&quot;, you&apos;re
                treated like an employee for tax purposes even though you&apos;re technically a contractor.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The key tests for IR35 status include:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li><strong>Control:</strong> Does the client control how, when, and where you work?</li>
                  <li><strong>Substitution:</strong> Can you send someone else to do the work instead of you?</li>
                  <li><strong>Mutuality of obligation:</strong> Is the client obliged to offer work and are you obliged to accept it?</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;re inside IR35, you&apos;re taxed as if you&apos;re employed. That means PAYE tax, National
                Insurance, and crucially for this discussion, automatic student loan deductions. If you&apos;re outside
                IR35, you&apos;re genuinely self-employed. You pay corporation tax on company profits and can
                extract money as dividends, which have very different student loan implications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since April 2021, medium and large private sector clients (and all public sector clients since
                2017) became responsible for determining IR35 status. This shifted the risk away from
                contractors but also meant many were pushed inside IR35 to avoid liability. For contractors, this
                meant moving from dividend-based income with no automatic student loan deductions to PAYE
                income with immediate deductions.
              </p>
            </section>

            {/* Inside IR35 */}
            <section id="inside-ir35" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Student Loans Work Inside IR35
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you&apos;re deemed inside IR35, your income is treated as employment income. If you work
                through an umbrella company (the most common structure for inside IR35 contractors), student
                loan deductions happen automatically through PAYE.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Here&apos;s the process:</h3>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1">
                  <li>Client pays the umbrella company for your services</li>
                  <li>Umbrella company calculates your deemed employment income</li>
                  <li>PAYE deductions applied: income tax, National Insurance, student loans</li>
                  <li>You receive net pay after all deductions</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The student loan calculation uses standard PAYE thresholds. For Plan 2, that&apos;s 9% on income
                above £27,295 annually (£2,274.58 monthly). So if your umbrella company pays you £3,500
                monthly as deemed employment income:
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Umbrella Company Example (£3,500 monthly):</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Amount above threshold: £3,500 - £2,274.58 = £1,225.42</li>
                  <li>Student loan deduction: £1,225.42 × 9% = £110.29</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This happens automatically every time you&apos;re paid. The umbrella company has your tax code
                (which includes SL or PGL markers) and makes the deduction alongside other PAYE
                obligations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The benefit of this approach is simplicity. You don&apos;t need to track student loan obligations
                separately or file Self Assessment for the contracting income. It&apos;s handled automatically. The
                downside is immediate visibility. Every month, you see over £100 disappearing from your pay for
                student loans, which can feel substantial when you&apos;re earning variable amounts.
              </p>
            </section>

            {/* Umbrella Companies */}
            <section id="umbrella-companies" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Umbrella Companies and Student Loan Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Umbrella companies exist specifically to handle employment obligations for contractors inside
                IR35. You become an employee of the umbrella company, which then contracts your services to
                the end client. From a student loan perspective, umbrella companies are straightforward
                because they operate standard PAYE.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, several factors make umbrella calculations more complex than typical employment:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Margin and fees</h3>
                  <p className="text-gray-700">
                    The umbrella company deducts their margin (typically £15-£30 per week) before calculating
                    your taxable pay. This slightly reduces your student loan deductions because it reduces gross
                    income. On a £500 weekly contract with a £25 margin, you&apos;re taxed on £475, not £500.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Holiday pay accrual</h3>
                  <p className="text-gray-700">
                    Some umbrella companies accrue holiday pay rather than paying it out weekly. This affects
                    timing. Your student loan is calculated on what you&apos;re actually paid each period, not what&apos;s
                    accruing in a holiday pot.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Expenses</h3>
                  <p className="text-gray-700">
                    Legitimate business expenses can be offset against your deemed employment income, reducing
                    what you&apos;re taxed on and what student loan deductions apply to. However, since April 2016
                    &quot;travel and subsistence&quot; relief was removed for most umbrella workers, so the scope for
                    expense claims is very limited.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Multiple assignments</h3>
                  <p className="text-gray-700">
                    If you work multiple assignments through the same umbrella company, they&apos;re all aggregated
                    into one employment. Your threshold applies once to the combined income. But if you work
                    through multiple umbrella companies simultaneously, each might apply the threshold separately,
                    potentially leading to overpayments that need reconciliation.
                  </p>
                </div>
              </div>
            </section>

            {/* Outside IR35 */}
            <section id="outside-ir35" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Outside IR35: Limited Company and Dividend Income
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contractors operating outside IR35 typically run limited companies. They invoice clients directly,
                their company receives payment, and they extract profit through a combination of salary and
                dividends. This structure has very different student loan implications.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The tax-efficient approach usually involves:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Small salary up to the National Insurance threshold (around £12,570 annually)</li>
                  <li>Remaining profit extracted as dividends</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Here&apos;s the critical point: dividends do not have student loan deductions taken at source.</strong>
                When you pay yourself £2,000 in dividends, no automatic student loan deduction happens. The
                money arrives in your personal account in full.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, this doesn&apos;t mean you avoid student loan repayments. Dividend income counts as
                total income for Self Assessment purposes. If your total income (salary plus dividends) exceeds
                your student loan threshold, you owe repayments through Self Assessment.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example: James&apos;s Limited Company</h3>
                <p className="text-gray-700 mb-2">James runs a limited company outside IR35. He pays himself:</p>
                <ul className="list-disc ml-6 text-gray-700 mb-2">
                  <li>Salary: £12,570 per year (below Plan 2 threshold, no PAYE loan deduction)</li>
                  <li>Dividends: £35,000 per year</li>
                  <li><strong>Total income: £47,570</strong></li>
                </ul>
                <div className="mt-4 space-y-1">
                  <p className="text-gray-700">Through PAYE on his salary: <strong>£0 student loan deduction</strong></p>
                  <p className="text-gray-700">Through Self Assessment on total income: <strong>(£47,570 - £27,295) × 9% = £1,824.75 owed in January</strong></p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                James has received all his income throughout the year without any student loan deductions. But
                come January, he owes £1,825 (rounded) through Self Assessment. This requires planning and
                budgeting because the money isn&apos;t automatically set aside.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many contractors outside IR35 are caught off-guard by this. They receive full dividend payments
                all year and forget that 9% of everything above the threshold needs to be paid eventually. Our
                <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> can help you model this and plan your cash flow accordingly.
              </p>
            </section>

            {/* CIS Rules */}
            <section id="cis-rules" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The CIS: Construction Industry Scheme Rules
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Construction Industry Scheme operates completely differently from both standard
                employment and typical self-employment. Under CIS, contractors in the construction industry
                have 20% or 30% deducted from their payments at source by the contractor paying them (the
                &quot;mainstream contractor&quot;).
              </p>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The deduction rate depends on your registration status:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Gross payment status: No deductions (rare, requires strict criteria)</li>
                  <li>Registered subcontractor: 20% deducted</li>
                  <li>Unregistered subcontractor: 30% deducted</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                These deductions cover tax and National Insurance, not student loans specifically. Student loan
                repayments under CIS work through Self Assessment, not through the CIS deduction itself.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">CIS Example in Practice:</h3>
                <p className="text-gray-700 mb-2">You submit an invoice for £5,000 of work. As a registered CIS subcontractor:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Gross payment: £5,000</li>
                  <li>CIS deduction (20%): £1,000</li>
                  <li>Net payment received: £4,000</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                That £1,000 deducted is credited toward your tax and National Insurance bill when you
                complete Self Assessment. Your student loan repayment is calculated separately based on your
                total income, then added to your Self Assessment bill.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Annual CIS Calculation:</h3>
                <p className="text-gray-700 mb-2">If your total CIS income for the year is £40,000:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Amount above Plan 2 threshold: £40,000 - £27,295 = £12,705</li>
                  <li>Student loan repayment: £12,705 × 9% = £1,143.45</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  This £1,143.45 gets added to your Self Assessment calculation alongside tax and NI.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The key difference from umbrella companies is timing. CIS subcontractors receive 70-80% of
                their gross invoice immediately, with student loans paid in a lump sum through Self Assessment
                months later. Umbrella workers have all deductions taken immediately and receive a smaller
                percentage of the gross contract value upfront.
              </p>
            </section>

            {/* Income Comparison */}
            <section id="income-comparison" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Comparing Net Income Across Different Structures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding what you actually take home is crucial for decision-making. Let&apos;s compare the
                same £60,000 annual contract under different structures:
              </p>

              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 1: Umbrella Company (Inside IR35)</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Contract value: £60,000</li>
                    <li>Umbrella margin (£25/week × 52): -£1,300</li>
                    <li>Gross pay: £58,700</li>
                    <li>Income tax: -£9,226</li>
                    <li>National Insurance: -£5,709</li>
                    <li>Student loan (Plan 2): -£2,826.45</li>
                    <li><strong>Net take-home: £40,938.55</strong></li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 2: CIS Registered Subcontractor</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Contract value: £60,000</li>
                    <li>CIS deduction at source (20%): -£12,000 (credited to tax)</li>
                    <li>Amount received initially: £48,000</li>
                    <li>At Self Assessment reconciliation:</li>
                    <li className="ml-4">• Tax owed: £9,226</li>
                    <li className="ml-4">• NI owed (Class 2 + Class 4): -£3,092</li>
                    <li className="ml-4">• Student loan: -£2,944.45</li>
                    <li className="ml-4">• Already paid via CIS: £12,000</li>
                    <li className="ml-4">• Refund due: £737.55</li>
                    <li><strong>Net take-home: £48,737.55</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 3: Limited Company Outside IR35</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Contract value: £60,000</li>
                    <li>Corporation tax (19%): -£9,020 (after salary deduction)</li>
                    <li>Salary to self: £12,570 (no PAYE, NI, or student loan)</li>
                    <li>Dividends: £38,410 (after corporation tax)</li>
                    <li>Dividend tax: -£2,170.50</li>
                    <li>Student loan via Self Assessment: -£2,944.45</li>
                    <li><strong>Net take-home: £45,865.05</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700">
                  These calculations show CIS comes out ahead in this scenario, followed by limited company,
                  then umbrella. However, the rankings change based on contract value, expenses, and personal
                  circumstances. The important point is that student loan repayments are similar across all three
                  (around £2,800-£2,950), but the timing and method differ significantly.
                </p>
              </div>
            </section>

            {/* IR35 Changes */}
            <section id="ir35-changes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                IR35 Changes and Their Impact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recent IR35 reforms fundamentally changed the contracting landscape. Before the private
                sector reforms in April 2021, many contractors operated outside IR35 through limited
                companies, extracting income as dividends with student loan obligations handled through Self
                Assessment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                After April 2021, medium and large private sector clients became responsible for IR35 status
                determination. Risk-averse, many blanket-assessed contractors as inside IR35. This forced
                contractors into umbrella structures with immediate PAYE deductions.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Before reform (outside IR35):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Dividend income received in full throughout the year</li>
                    <li>Student loan paid as lump sum in January</li>
                    <li>Opportunity to plan and potentially invest the deferred payment</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">After reform (inside IR35 via umbrella):</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Student loan deducted every pay period</li>
                    <li>No opportunity to use the money first</li>
                    <li>Slightly better cash flow protection (can&apos;t spend money owed in loans)</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Some contractors prefer the new system because it removes the January shock. Others resent
                losing control over cash flow. Neither is objectively better, but the forced shift caught many
                unprepared.
              </p>
            </section>

            {/* Strategic Planning */}
            <section id="strategic-planning" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Planning for Contractor Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Given the complexity, strategic planning becomes essential:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">If you&apos;re inside IR35 via umbrella:</h3>
                  <p className="text-gray-700">
                    Accept that student loans will be deducted automatically. Factor this into your rate
                    negotiations. When a client offers £450 per day, calculate your actual take-home after
                    umbrella margin, PAYE tax, National Insurance, and student loans. Your net might be closer
                    to £280 per day. Negotiate accordingly.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">If you&apos;re outside IR35 with a limited company:</h3>
                  <p className="text-gray-700">
                    Budget for your Self Assessment student loan bill. When extracting dividends, set aside 9%
                    of everything above your threshold in a separate savings account. Come January, you&apos;ll have
                    the money ready. Don&apos;t assume you can pay it from next year&apos;s earnings.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">If you&apos;re CIS:</h3>
                  <p className="text-gray-700">
                    Similar to limited company contractors, budget for Self Assessment. The 20% CIS deduction
                    covers most tax and NI, but student loans are extra. Set aside approximately 9% of your
                    income above threshold separately.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                For all contractors: Use our <Link target="_blank" href="#" className="text-blue-600 underline hover:text-blue-800">Umbrella IR35 PAYE Student Loan Calculator</Link> to understand your
                take-home under umbrella structures, and our <Link target="_blank" href="#" className="text-blue-600 underline hover:text-blue-800">CIS Self-Employed Student Loan Calculator</Link> to
                model CIS scenarios.
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Common Contractor Mistakes with Student Loans
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 1: Assuming IR35 status doesn&apos;t affect student loans</h3>
                  <p className="text-gray-700">
                    Many contractors focus on tax implications of IR35 but overlook student loans. Inside IR35
                    means automatic deductions. Outside means Self Assessment with lump-sum payments. This
                    isn&apos;t a minor detail when it affects £2,000+ annually.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 2: Not budgeting for Self Assessment student loans</h3>
                  <p className="text-gray-700">
                    Contractors outside IR35 or under CIS often spend all their income without setting aside
                    student loan amounts. January arrives with a bill they can&apos;t pay, leading to payment plans,
                    interest charges, and penalties.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 3: Claiming excessive expenses to reduce income below threshold</h3>
                  <p className="text-gray-700">
                    Some contractors try to claim questionable expenses to reduce their student loan liability.
                    HMRC increasingly scrutinizes contractor expenses. If expenses are disallowed, you&apos;ll owe
                    backdated student loans plus interest and potentially penalties.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 4: Working through multiple umbrellas without reconciliation</h3>
                  <p className="text-gray-700">
                    Using multiple umbrella companies can result in multiple threshold applications. You might
                    underpay if neither umbrella captures your full income, or overpay if both apply the full
                    threshold. Either way, you need Self Assessment to reconcile.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mistake 5: Thinking dividends avoid student loans entirely</h3>
                  <p className="text-gray-700">
                    This is perhaps the biggest misconception. Yes, dividends have no automatic deduction. But
                    they absolutely count toward student loan calculations in Self Assessment. You still pay, just later.
                  </p>
                </div>
              </div>
            </section>

            {/* Record-Keeping */}
            <section id="record-keeping" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Record-Keeping Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contractors need meticulous records for student loan purposes:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">For umbrella workers:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>All payslips showing student loan deductions</li>
                    <li>Year-to-date totals from final payslip</li>
                    <li>Any changes to umbrella company mid-year</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">For limited company contractors:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Company accounts showing salary and dividends</li>
                    <li>Dividend vouchers for all payments</li>
                    <li>Evidence of income tax paid on dividends</li>
                    <li>Previous Self Assessment calculations</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">For CIS subcontractors:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>All CIS payment and deduction statements</li>
                    <li>Monthly statements showing cumulative deductions</li>
                    <li>Proof of CIS registration status</li>
                    <li>Records of all contracts and payments</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                This documentation is essential for completing Self Assessment accurately and defending your
                position if HMRC queries your calculations.
              </p>
            </section>

            {/* Professional Advice */}
            <section id="professional-advice" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When to Seek Professional Advice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contractor arrangements are complex enough without student loans added to the mix. Consider
                professional advice from an accountant if:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>You&apos;re switching between contractor structures (umbrella to limited company, or vice versa)</li>
                <li>Your IR35 status has changed or is disputed</li>
                <li>You work both inside and outside IR35 simultaneously</li>
                <li>You have income from both CIS work and other sources</li>
                <li>Your student loan deductions seem wrong but you can&apos;t pinpoint why</li>
                <li>You&apos;ve received an unexpected large Self Assessment bill for student loans</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Accountant fees typically range from £600-£1,500 annually for contractors, but can save
                multiples of that through proper structuring and accurate compliance.
              </p>
            </section>

            {/* Future Outlook */}
            <section id="future-outlook" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Future of Contractor Student Loans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The contractor landscape continues evolving. Potential changes on the horizon include:
              </p>

              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Further IR35 reforms or clarifications</li>
                <li>Changes to dividend taxation affecting outside IR35 contractors</li>
                <li>Modifications to CIS deduction rates or rules</li>
                <li>Student loan threshold changes impacting all contractors</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Staying informed is crucial. What works today might not be optimal tomorrow. But understanding
                the fundamental principles (PAYE deducts automatically, Self Assessment requires planning,
                different structures create different cash flows) will remain relevant regardless of specific policy
                changes.
              </p>
            </section>

            {/* Conclusion */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control as a Contractor
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contracting offers excellent earning potential and flexibility, but demands much more
                engagement with how you&apos;re taxed and how student loans are collected. You can&apos;t just receive a
                payslip and assume everything is handled correctly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you work through an umbrella, run a limited company, or operate under CIS,
                understanding your student loan obligations in that structure is essential. The money you owe
                doesn&apos;t change based on structure, but when and how you pay it does. That timing difference
                has real financial implications for cash flow, budgeting, and long-term planning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Take time to understand your specific situation, use calculators to model different scenarios,
                keep thorough records, and budget appropriately for liabilities that aren&apos;t automatically
                deducted. Contracting rewards those who engage with the details. Student loans are one more
                detail that demands your attention, but with proper understanding, you can manage them
                effectively without surprises or overpayments.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Master your contractor structure to optimize both earnings and student loan obligations.
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

export default ContractorsStudentLoansGuide;