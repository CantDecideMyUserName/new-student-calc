import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const SalarySacrificeStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "how-it-works", title: "How Salary Sacrifice Actually Works", level: 2 },
    { id: "student-loan-saving", title: "The Student Loan Saving Specifically", level: 2 },
    { id: "pension-sacrifice", title: "Pension Salary Sacrifice: The Most Common Scheme", level: 2 },
    { id: "cycle-to-work", title: "Cycle to Work Schemes", level: 2 },
    { id: "electric-vehicles", title: "Electric Vehicle Salary Sacrifice", level: 2 },
    { id: "technology-schemes", title: "Technology Schemes", level: 2 },
    { id: "childcare-vouchers", title: "Childcare Vouchers (Legacy Scheme)", level: 2 },
    { id: "other-thresholds", title: "How Salary Sacrifice Affects Other Thresholds", level: 2 },
    { id: "combining-schemes", title: "Combining Multiple Salary Sacrifice Schemes", level: 2 },
    { id: "when-not-sensible", title: "When Salary Sacrifice Doesn't Make Sense", level: 2 },
    { id: "strategic-timing", title: "Strategic Timing of Salary Sacrifice", level: 2 },
    { id: "long-term-effects", title: "Long-Term Compound Effects", level: 2 },
    { id: "taking-control", title: "Taking Control Through Salary Sacrifice", level: 2 },
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
                  Salary Sacrifice and Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Salary Sacrifice Benefits and Student Loan Repayments: Hidden Savings
          </h1>
          <p className="text-xl text-gray-600">
            Reducing Gross Salary Through Pensions: The 9% Automatic Student Loan Saving
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
                Salary sacrifice arrangements are one of the most underused financial tools available to UK
                employees, particularly for those repaying student loans. The concept is simple: you agree to
                reduce your gross salary in exchange for your employer providing a benefit. But the financial
                impact is anything but simple. By reducing your gross salary, you reduce everything calculated
                on that salary, including tax, National Insurance, and crucially, student loan repayments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most people think of salary sacrifice purely as a pension strategy, and pensions are indeed the
                most common use. But cycle to work schemes, electric vehicle salary sacrifice, childcare
                vouchers (where still available), and even technology schemes all work the same way. Each
                reduces your gross salary, which reduces your student loan deductions every single month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The hidden benefit for student loan borrowers is that you&apos;re not choosing between the benefit
                and keeping your salary. You&apos;re getting the benefit while also automatically reducing your
                student loan payments. A £2,400 annual salary sacrifice pension contribution doesn&apos;t just build
                your retirement fund. It also saves you £216 in student loan payments if you&apos;re on Plan 2 (9% of
                £2,400), on top of the tax and National Insurance savings. It&apos;s a triple benefit from a single
                decision.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding postgraduate loan mechanics, how they combine with undergraduate loans, and how to optimize repayments across both requires careful attention to the specific rules that govern each loan type.
              </p>
            </section>

            {/* How Salary Sacrifice Works */}
            <section id="how-it-works" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Salary Sacrifice Actually Works
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Standard employment works like this: Your employer pays you a gross salary, deductions get
                taken (tax, National Insurance, student loans), and you receive net pay. If you want to buy
                something or contribute to something, you use your net pay after all those deductions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Salary sacrifice reverses this. You agree to permanently reduce your gross salary, and in
                exchange, your employer provides a benefit directly. The benefit provision happens before
                PAYE calculations, so your reduced salary is what gets assessed for all deductions.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Example without salary sacrifice:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Gross salary: £30,000</li>
                    <li>Tax: £3,486</li>
                    <li>National Insurance: £2,274</li>
                    <li>Student loan (Plan 2): £243</li>
                    <li>Net pay: £23,997</li>
                    <li className="font-medium">You then spend £1,200 of net pay on something</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Example with £1,200 salary sacrifice:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                    <li>Gross salary for PAYE: £28,800 (reduced by £1,200)</li>
                    <li>Tax: £3,246 (saved £240)</li>
                    <li>National Insurance: £2,130 (saved £144)</li>
                    <li>Student loan: £135 (saved £108)</li>
                    <li>Net pay: £23,289</li>
                    <li className="font-medium">Employer provides £1,200 worth of benefit directly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The Result:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  You&apos;ve reduced your take-home by only £708 (£23,997 - £23,289) while receiving a £1,200
                  benefit. The £492 difference is money saved on tax, National Insurance, and student loans.
                  That&apos;s a 41% discount on the benefit cost.
                </p>
                <p className="text-gray-700 text-sm">
                  The mechanism is straightforward: lower gross salary means lower deductions. What makes it
                  powerful is that you&apos;re getting the benefit regardless, so the deduction savings are pure gain.
                </p>
              </div>
            </section>

            {/* Student Loan Saving Specifically */}
            <section id="student-loan-saving" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Student Loan Saving Specifically
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For student loan borrowers, salary sacrifice creates immediate monthly savings. Every pound
                you sacrifice is a pound that doesn&apos;t count toward the repayment threshold.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Student Loan Threshold Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Plan 2 threshold is £27,295. If you earn £32,000 normally, you&apos;re £4,705 above the threshold,
                  paying £423 annually in student loans.
                </p>
                <p className="text-gray-700 text-sm">
                  Sacrifice £3,000 through pension contributions, and your salary for student loan purposes
                  becomes £29,000. Now you&apos;re only £1,705 above the threshold, paying £154 annually.
                  You&apos;ve saved £269 in student loan payments.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This saving happens automatically every single month. You don&apos;t need to claim it, apply for it, or
                even think about it. Your payslip simply shows student loan deductions calculated on your
                reduced gross salary.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Savings by Loan Type:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Plan 2 or Plan 4: 9% of whatever you sacrifice</li>
                  <li>Postgraduate loan: 6% of whatever you sacrifice</li>
                  <li>Both undergraduate and postgraduate loans: 15% saving (9% + 6%)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Someone sacrificing £5,000 annually through various schemes who has both types of loans
                saves £750 per year in student loan payments. Over 10 years, that&apos;s £7,500 of loan payments
                avoided while still receiving £50,000 worth of benefits.
              </p>
            </section>

            {/* Pension Salary Sacrifice */}
            <section id="pension-sacrifice" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Pension Salary Sacrifice: The Most Common Scheme
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Workplace pension schemes are the most widespread salary sacrifice arrangement. If your
                employer offers salary sacrifice for pensions (sometimes called &quot;SMART pensions&quot; or similar
                marketing names), you should almost certainly use it if you&apos;re repaying student loans.
              </p>

              <div className="bg-green-50 border border-green-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The benefits stack dramatically:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Tax relief (20%, 40%, or 45% depending on your rate)</li>
                  <li>National Insurance saving (12% or 2% depending on income)</li>
                  <li>Student loan saving (9% for undergraduate, 6% for postgraduate, or both)</li>
                  <li>Employer also saves National Insurance (13.8%) and often passes some of this to you as increased contribution</li>
                  <li>Money grows in your pension through compound interest</li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Emma&apos;s Pension Sacrifice Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Emma earns £35,000 and increases her pension contribution from £100 monthly to £250 monthly
                  (£1,800 annual increase) through salary sacrifice:
                </p>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Direct financial impact:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Reduced gross salary: £33,200</li>
                    <li>Tax saving: £360 per year</li>
                    <li>National Insurance saving: £216 per year</li>
                    <li>Student loan saving (Plan 2): £162 per year</li>
                    <li><strong>Total saving: £738</strong></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Emma pays £1,062 out of her net pay to receive £1,800 in her pension (after accounting for the
                savings). She&apos;s turned £1,062 into £1,800, a 70% immediate return before any investment
                growth. Without salary sacrifice, she&apos;d contribute £1,800 from net pay, which would actually
                cost her £1,800 of take-home. With salary sacrifice, it only costs £1,062. Our <Link target="_blank" href="https://studentloancalculator.uk/calculators/pension-salary-sacrifice-effect-calculator/" className="text-blue-600 underline hover:text-blue-800">Pension Salary Sacrifice Effect Calculator</Link> shows exactly how much you save across all
                deductions including student loans.
              </p>
            </section>

            {/* Cycle to Work Schemes */}
            <section id="cycle-to-work" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cycle to Work Schemes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cycle to work salary sacrifice lets you get a bike and equipment through your employer with the
                cost spread over 12-18 months as a salary reduction. The headline benefit is saving tax and
                National Insurance on the bike cost, but you also save on student loans.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">£1,000 Bike Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  A £1,000 bike bought through cycle to work costs you approximately £600-£700 of net pay
                  depending on your tax rate, versus £1,000 if you bought it normally. The saving includes:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>£200 income tax (if basic rate)</li>
                  <li>£120 National Insurance</li>
                  <li>£90 student loan (Plan 2)</li>
                  <li><strong>Total saving: £410</strong></li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  You still get a £1,000 bike, but you&apos;ve only given up £590 of net pay. That&apos;s 41% off the bike.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The scheme works over 12-18 months typically. Your gross salary reduces by £55-£83 per
                month for that period. Student loan deductions drop by approximately £5-£7.50 monthly during
                the repayment period.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After the salary sacrifice period ends, your gross salary returns to normal and student loan
                deductions increase back to regular levels. But you&apos;ve permanently acquired a bike at a
                substantial discount. Not everyone needs a bike, but if you were planning to buy one anyway or
                you&apos;d cycle more if you had a better bike, cycle to work schemes are excellent value for
                student loan borrowers.
              </p>
            </section>

            {/* Electric Vehicle Salary Sacrifice */}
            <section id="electric-vehicles" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Electric Vehicle Salary Sacrifice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EV salary sacrifice has exploded in popularity as electric cars have become more practical and
                employers seek to help employees afford them. The benefit is substantial because cars are
                expensive, so the salary sacrifice amount is large, which means the deduction savings are
                correspondingly huge.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">£350 Monthly EV Example (£4,200 annually):</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Tax saving: £840 (basic rate) or £1,680 (higher rate)</li>
                  <li>National Insurance saving: £504</li>
                  <li>Student loan saving: £378 (Plan 2)</li>
                  <li><strong>Total basic rate saving: £1,722</strong></li>
                </ul>
                <p className="text-gray-700 text-sm">
                  The £350 monthly EV only costs you approximately £207 per month of net pay as a basic rate
                  taxpayer. A similar car leased normally might cost £350 per month from your after-tax income,
                  so you&apos;re saving £143 monthly or £1,716 annually.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Higher rate taxpayers save even more because their tax saving is larger (40% instead of 20%).
                Additionally, EVs through salary sacrifice typically include insurance, maintenance, and tyres,
                whereas a normal car lease might not. This makes the comparison even more favorable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The student loan saving alone is £378 per year on a £4,200 sacrifice. Over a typical 3-year
                agreement, that&apos;s £1,134 in student loan payments avoided while driving a brand new electric
                car. For context, our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> has tools to help you understand how different salary
                sacrifice arrangements affect your student loan repayments.
              </p>
            </section>

            {/* Technology Schemes */}
            <section id="technology-schemes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Technology Schemes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some employers offer technology schemes where you can get laptops, tablets, or phones
                through salary sacrifice. The principle is identical: reduce your gross salary, receive the
                technology, save on tax, National Insurance, and student loans.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">£600 Laptop Example (£50 monthly over 12 months):</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Tax: £120 (basic rate)</li>
                  <li>National Insurance: £72</li>
                  <li>Student loan: £54 (Plan 2)</li>
                  <li><strong>Total: £246</strong></li>
                </ul>
                <p className="text-gray-700 text-sm">
                  The £600 laptop costs you only £354 of net pay. You&apos;ve saved 41% through the deduction relief.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Whether this makes sense depends on what you&apos;d pay for the same technology elsewhere and
                whether you actually need it. But if you were buying a laptop anyway, getting it through salary
                sacrifice is substantially cheaper.
              </p>
            </section>

            {/* Childcare Vouchers */}
            <section id="childcare-vouchers" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Childcare Vouchers (Legacy Scheme)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Childcare vouchers through salary sacrifice closed to new entrants in October 2018, replaced by
                Tax-Free Childcare. However, people who joined before the closure can remain in the scheme,
                and many still use it.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Childcare Vouchers (£2,916 annually for basic rate taxpayers):</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Tax saving: £583</li>
                  <li>National Insurance saving: £350</li>
                  <li>Student loan saving: £262 (Plan 2)</li>
                  <li><strong>Total saving: £1,195</strong></li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Childcare that costs £2,916 only reduces your net pay by £1,721. That&apos;s 41% off childcare costs.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This is one of the largest salary sacrifice opportunities available, though only to parents with
                young children still in the legacy scheme. If you&apos;re eligible and not using it, you&apos;re leaving over
                £1,000 per year on the table, including substantial student loan savings.
              </p>
            </section>

            {/* Other Thresholds */}
            <section id="other-thresholds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Salary Sacrifice Affects Other Thresholds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reducing your gross salary doesn&apos;t just affect student loans. It affects every calculation based
                on gross income, which can be positive or negative depending on circumstances.
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Allowance (usually neutral)</h3>
                  <p className="text-gray-700 text-sm">
                    Salary sacrifice doesn&apos;t reduce your Personal Allowance for most people. The allowance only
                    starts tapering at £100,000, so unless you&apos;re in that bracket, your tax-free allowance remains
                    unchanged. You just have less salary to apply it against.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Higher rate threshold (can pull you down a band)</h3>
                  <p className="text-gray-700 text-sm">
                    The higher rate threshold is £50,270. If you earn £52,000 normally, you&apos;re a higher rate taxpayer.
                    Sacrifice £3,000, and your salary becomes £49,000, making you a basic rate taxpayer again. This
                    saves significantly on tax (the £1,730 that would have been taxed at 40% instead gets taxed at 20%,
                    saving £346).
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Child Benefit (can help you keep it)</h3>
                  <p className="text-gray-700 text-sm">
                    Child Benefit starts being clawed back when the highest earner in the household exceeds £60,000.
                    Salary sacrifice reduces the income used for this calculation. If you earn £62,000 and sacrifice £3,000,
                    your income for Child Benefit purposes becomes £59,000, allowing you to keep the full benefit. For
                    two children, this saves approximately £1,900 annually.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Student loan threshold (the key benefit)</h3>
                  <p className="text-gray-700 text-sm">
                    Salary sacrifice directly reduces the income used to calculate student loan deductions. Every pound
                    sacrificed saves 9% in student loans for undergraduate plans.
                  </p>
                </div>
              </div>
            </section>

            {/* Combining Multiple Schemes */}
            <section id="combining-schemes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Combining Multiple Salary Sacrifice Schemes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can often participate in multiple salary sacrifice schemes simultaneously. For example:
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Schemes Example:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Pension: £3,000 annually</li>
                  <li>Cycle to work: £1,000 over 12 months</li>
                  <li>EV: £4,200 annually</li>
                  <li><strong>Total sacrifice: £8,200 annually</strong></li>
                </ul>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">On a £40,000 salary, this reduces your gross salary to £31,800:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Normal: (£40,000 - £27,295) × 9% = £1,143</li>
                    <li>With sacrifice: (£31,800 - £27,295) × 9% = £405</li>
                    <li><strong>Saving: £738 per year in student loans alone</strong></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Plus you&apos;re saving on tax and National Insurance on that £8,200, receiving pension
                contributions, driving an EV, and cycling on a nice bike. The combined benefit is massive.
                The limit is essentially your take-home pay. You need to maintain sufficient net salary to live on.
                Employers typically won&apos;t let you sacrifice so much that your net pay falls below minimum wage levels.
              </p>
            </section>

            {/* When It Doesn't Make Sense */}
            <section id="when-not-sensible" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Salary Sacrifice Doesn&apos;t Make Sense
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are limited scenarios where salary sacrifice isn&apos;t optimal:
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Already below threshold</h3>
                  <p className="text-gray-700 text-sm">
                    If your salary is already below the student loan threshold, salary sacrifice doesn&apos;t save you
                    anything on student loans (you&apos;re paying zero already). You still get the tax and National
                    Insurance savings, so it&apos;s still valuable, just not specifically for student loan purposes.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Near threshold and sacrifice pushes you below</h3>
                  <p className="text-gray-700 text-sm">
                    If you earn £28,000 and sacrifice £2,000, your salary becomes £26,000, below the £27,295 threshold.
                    You were only paying £63.45 in student loans annually, and salary sacrifice eliminates this. You save
                    the £63.45, but it&apos;s not a huge absolute amount.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Need higher net pay for other reasons</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;re applying for a mortgage, your salary for lending purposes might be your gross salary,
                    and reducing it could affect how much you can borrow. Some lenders look at salary before sacrifice,
                    others after. If you&apos;re buying a home, check with your lender before committing to large salary sacrifices.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Short-term financial pressures</h3>
                  <p className="text-gray-700 text-sm">
                    If you need maximum take-home pay right now for essential expenses or debt repayment (real debt
                    with serious consequences, not just student loans), salary sacrifice might not be appropriate.
                    The benefits are long-term, but they do reduce current net pay.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategic Timing */}
            <section id="strategic-timing" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Timing of Salary Sacrifice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most salary sacrifice arrangements are ongoing (pensions) or fixed-term (cycle to work over 12
                months, EV over 36 months). But there&apos;s sometimes flexibility in timing when you start them.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Timing with Pay Rises Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  You earn £26,000 (below threshold) and receive a £4,000 raise to £30,000. Instead of taking the
                  full raise as cash, you implement £2,000 pension salary sacrifice. Your salary for deductions
                  becomes £28,000.
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>You&apos;re now only £705 above the threshold instead of £2,705</li>
                  <li>Paying £63 in student loans instead of £243</li>
                  <li>While building pension wealth</li>
                  <li>You&apos;ve turned a £4,000 raise into approximately £3,200 extra net pay plus £2,000 pension contribution plus £180 student loan saving</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                If you&apos;re earning below the threshold but expecting a raise soon that will push you above, setting
                up salary sacrifice to coincide with the raise keeps your net pay similar while providing
                substantial benefits. The raise goes further because you&apos;ve deployed it efficiently.
              </p>
            </section>

            {/* Long-Term Effects */}
            <section id="long-term-effects" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Long-Term Compound Effects
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Salary sacrifice for pensions creates compound benefits over decades. Not only does the
                pension pot grow through investment returns, but every year you&apos;re paying lower student loans
                frees up money in your budget.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">30-Year Compound Example:</h3>
                <p className="text-gray-700 text-sm">
                  Someone who uses £3,000 annual salary sacrifice from age 25 to 55 (30 years) saves
                  approximately £270 annually in student loan payments (assuming they remain above threshold).
                  That&apos;s £8,100 in student loan savings over 30 years, on top of building a pension pot of
                  potentially £200,000+ (depending on investment returns).
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The £3,000 annual contributions only cost approximately £1,800 of net pay due to tax, NI, and
                student loan savings, yet grow to £200,000. That&apos;s the power of combining salary sacrifice with
                compound interest.
              </p>
            </section>

            {/* Conclusion */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control Through Salary Sacrifice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Salary sacrifice is a rare financial tool where everyone wins. You benefit from reduced
                deductions, your employer saves on National Insurance, and the government provides the
                framework because it encourages positive behaviors like pension saving and environmentally
                friendly transport.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For student loan borrowers specifically, it&apos;s a hidden benefit that many overlook. Every pound
                you sacrifice saves you 9% in student loan payments on top of the tax and NI savings.
                Combined, you&apos;re getting a 40-45% discount on whatever benefit you&apos;re receiving through the
                arrangement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check what schemes your employer offers. Consider what you&apos;d benefit from among pensions,
                cycle to work, EV schemes, or technology options. Calculate the impact on your student loan
                payments using our tools. And implement the arrangements to start saving immediately.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Salary sacrifice transforms how you fund benefits and contributions from &quot;paying with after-tax
                money&quot; to &quot;paying with pre-tax money,&quot; with student loan savings as an additional bonus. It&apos;s
                one of the most effective ways to reduce your student loan burden while simultaneously
                securing other financial benefits. Use it.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Every pound sacrificed saves 9% in student loans plus tax and NI - it&apos;s a 40-45% discount on benefits.
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

export default SalarySacrificeStudentLoans;