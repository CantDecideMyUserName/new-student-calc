import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const StudentLoanTaxCodesGuide: React.FC = () => {
  const tocItems = [
    { id: "what-is-tax-code", title: "What Is a Tax Code and Why Does It Matter?", level: 2 },
    { id: "sl-code", title: "The SL Code: Student Loan Deductions", level: 2 },
    { id: "pgl-code", title: "The PGL Code: Postgraduate Loan Deductions", level: 2 },
    { id: "combined-codes", title: "Combined Codes: When You Have Both SL and PGL", level: 2 },
    { id: "number-codes", title: "Understanding the Number Part: 1257L and Other Codes", level: 2 },
    { id: "emergency-codes", title: "Emergency Codes and Week 1/Month 1", level: 2 },
    { id: "wrong-tax-code", title: "When Your Tax Code Is Wrong: Common Problems", level: 2 },
    { id: "check-tax-code", title: "How to Check Your Tax Code", level: 2 },
    { id: "fix-wrong-code", title: "How to Fix a Wrong Tax Code", level: 2 },
    { id: "multiple-jobs", title: "Tax Codes and Multiple Jobs", level: 2 },
    { id: "real-world-impact", title: "Real-World Impact on Take-Home Pay", level: 2 },
    { id: "understanding-payslip", title: "Understanding Your Payslip Deductions", level: 2 },
    { id: "professional-help", title: "Getting Professional Help", level: 2 },
    { id: "taking-control", title: "Taking Control of Your Student Loan Deductions", level: 2 },
  ];

  return (
    <div className="bg-white">
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
                  Student Loan Tax Codes
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loan Tax Codes: SL, PGL, and Number Codes
          </h1>
          <p className="text-xl text-gray-600">
            Complete guide to understanding tax codes and ensuring they&apos;re working correctly
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
                If you&apos;ve ever looked at your payslip and wondered what those letters after your tax code mean,
                you&apos;re not alone. Tax codes like &quot;1257L SL&quot; or &quot;BR PGL&quot; can seem cryptic, but they directly
                affect how much money lands in your bank account each month. For anyone repaying student
                loans in the UK, understanding these codes is crucial because the wrong code can cost you
                hundreds or even thousands of pounds in overpaid deductions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your tax code tells your employer two things: how much tax-free income you&apos;re entitled to, and
                whether you should have student loan deductions taken from your pay. The letters matter just as
                much as the numbers, and when HMRC gets them wrong (which happens more often than
                you&apos;d think), you end up paying more than you should.
              </p>
            </section>

            {/* What Is a Tax Code Section */}
            <section id="what-is-tax-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Is a Tax Code and Why Does It Matter?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A tax code is a combination of numbers and letters that HMRC issues to your employer to
                calculate your deductions. The number typically represents your tax-free Personal Allowance
                (divided by 10), while the letters indicate your circumstances. For the 2025/26 tax year, most
                people have the standard code 1257L, which means you can earn £12,570 before paying
                income tax.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The letter &apos;L&apos; indicates you&apos;re entitled to the basic Personal Allowance with no adjustments. But
                when student loan letters appear in your code, that&apos;s HMRC instructing your employer to make
                additional deductions beyond tax and National Insurance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your employer doesn&apos;t decide whether you repay student loans. HMRC does, based on
                information they receive from the Student Loans Company. When something goes wrong in this
                communication chain, you end up with the wrong code and incorrect deductions.
              </p>
            </section>

            {/* SL Code Section */}
            <section id="sl-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The SL Code: Student Loan Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The letters &quot;SL&quot; in your tax code stand for &quot;Student Loan&quot; and indicate you should have
                undergraduate student loan deductions taken through PAYE. When your tax code shows SL,
                your employer deducts 9% of everything you earn above your plan&apos;s repayment threshold.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example Calculation:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  If you&apos;re on  <Link target="_blank" href="https://studentloancalculator.uk/plans/plan-2/" className="text-blue-600 underline hover:text-blue-800">Plan 2</Link> with a tax code of 1257L SL and you earn £2,500 per month:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Monthly threshold for Plan 2: £2,274.58</li>
                  <li>Amount above threshold: £2,500 - £2,274.58 = £225.42</li>
                  <li>Student loan deduction: £225.42 × 9% = £20.29</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This happens automatically every month through PAYE, alongside your tax and National
                Insurance. The SL marker doesn&apos;t specify which plan you&apos;re on. That information comes from
                the Student Loans Company to HMRC. Your employer simply sees &quot;SL&quot; and applies the 9%
                deduction using whatever threshold they&apos;ve been told to use.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The problem is that SL codes can appear in your tax code even after you&apos;ve finished repaying
                your loan. If the Student Loans Company hasn&apos;t updated HMRC, you&apos;ll continue having
                deductions taken until you notice and intervene. This is surprisingly common in April each year
                when new tax codes are issued and old loan completions haven&apos;t been processed.
              </p>
            </section>

            {/* PGL Code Section */}
            <section id="pgl-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The PGL Code: Postgraduate Loan Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                &quot;PGL&quot; stands for &quot;Postgraduate Loan&quot; and works similarly to SL, but with different rules. If you
                took out a postgraduate master&apos;s or doctoral loan, HMRC adds PGL to your tax code to trigger a
                6% deduction on income above £21,000.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">PGL Calculation Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Someone earning £2,500 per month with a PGL marker:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Monthly threshold for PG loan: £1,750</li>
                  <li>Amount above threshold: £2,500 - £1,750 = £750</li>
                  <li>Postgraduate loan deduction: £750 × 6% = £45</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Postgraduate loans were introduced in 2016 for master&apos;s degrees and 2018 for doctoral loans,
                so they&apos;re relatively new. Many employers and even some payroll systems are less familiar with
                PGL codes, which can lead to processing errors. If your payslip shows a &quot;postgraduate loan&quot;
                deduction but you&apos;ve never taken one out, your tax code is definitely wrong.
              </p>
            </section>

            {/* Combined Codes Section */}
            <section id="combined-codes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Combined Codes: When You Have Both SL and PGL
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have both an undergraduate and postgraduate loan, your tax code will show both
                markers. For example, &quot;1257L SL PGL&quot;. This tells your employer to apply both deduction rates,
                which can significantly impact your take-home pay.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Combined Deduction Example (£35,000 salary):</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Undergraduate deduction (9% above £2,274.58): £57.79</li>
                  <li>Postgraduate deduction (6% above £1,750): £70.00</li>
                  <li><strong>Total monthly loan deduction: £127.79</strong></li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  That&apos;s <strong>£1,533.48 per year</strong> in student loan repayments alone.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The combined effect means someone with both loans can face an effective marginal tax rate of
                42% on earnings between £27,295 and the higher rate tax threshold. That breaks down as 20%
                income tax, 12% National Insurance, 9% undergraduate loan, and 6% postgraduate loan if
                earning above £21,000.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Student Loans Company allocates your payments between the two loans, generally paying
                off undergraduate debt first before tackling the postgraduate balance. But from a take-home pay
                perspective, you&apos;re simply seeing 15% disappear from anything you earn above both thresholds.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800">student loan calculator</Link> can help you model exactly how combined repayments affect your
                monthly budget.
              </p>
            </section>

            {/* Number Codes Section */}
            <section id="number-codes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding the Number Part: 1257L and Other Codes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before the loan letters, the numbers in your tax code indicate your tax-free Personal Allowance.
                The standard code for 2025/26 is 1257L, representing the £12,570 Personal Allowance divided
                by 10. Your employer uses this to calculate how much of your income is tax-free each month.
              </p>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Deduction Order Example (1257L SL, £2,500 monthly):</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Tax-free amount: £1,047.50 (£12,570 ÷ 12 months)</li>
                  <li>Taxable income: £2,500 - £1,047.50 = £1,452.50</li>
                  <li>Income tax (20%): £290.50</li>
                  <li>National Insurance (12% above £1,048): £174.18</li>
                  <li>Student loan (9% above £2,274.58): £20.29</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                But not everyone has 1257L. Your code might be adjusted for other reasons:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Lower codes</h3>
                  <p className="text-gray-700 text-sm">
                    Happen when you owe tax from previous years, have taxable benefits (like a company car), or
                    receive other income that needs tax collected through PAYE. Someone with code 900L SL has
                    £9,000 tax-free allowance, meaning they pay more tax and student loan deductions kick in
                    sooner relative to their gross pay.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">BR code</h3>
                  <p className="text-gray-700 text-sm">
                    Means &quot;Basic Rate&quot; and is used for second jobs or pensions. A code like &quot;BR SL&quot; means you get
                    no tax-free allowance on that income. You pay 20% tax on everything, plus 9% student loan if
                    you&apos;re above the threshold across all your jobs combined. This is where serious overpayment
                    problems occur with multiple jobs, because HMRC doesn&apos;t always split your threshold between
                    employers correctly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">K codes</h3>
                  <p className="text-gray-700 text-sm">
                    Are rare but indicate you owe more tax than your Personal Allowance covers, usually from
                    company benefits. A code like &quot;K200 SL&quot; means you&apos;re taxed on an extra £2,000 of income
                    beyond what you earn, and student loans still apply on top.
                  </p>
                </div>
              </div>
            </section>

            {/* Emergency Codes Section */}
            <section id="emergency-codes" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Emergency Codes and Week 1/Month 1
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you start a new job and don&apos;t provide a P45 from your previous employer, you&apos;ll usually get an
                emergency tax code, often shown as &quot;1257L W1&quot; or &quot;1257L M1&quot;. The W1 or M1 means &quot;Week
                1&quot; or &quot;Month 1&quot; basis, where your employer calculates tax and student loans based only on that
                pay period, without considering your cumulative earnings for the year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Emergency codes typically include the SL marker if HMRC has you registered for student loan
                deductions. The problem with emergency codes is they don&apos;t accumulate your tax-free
                allowance properly. If you start a job in October on an M1 code, you don&apos;t get the benefit of the
                unused Personal Allowance from April to September, and you might face higher deductions than
                necessary.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For student loans specifically, emergency codes usually still apply the correct monthly threshold,
                so the immediate impact is less severe than for tax. But if you&apos;re moved onto the wrong student
                loan plan, you could be deducted at the wrong rate for months until it&apos;s corrected.
              </p>
            </section>

            {/* Wrong Tax Code Section */}
            <section id="wrong-tax-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                When Your Tax Code Is Wrong: Common Problems
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wrong tax codes for student loans fall into several categories:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">SL marker when you&apos;ve finished repaying</h3>
                  <p className="text-gray-700 text-sm">
                    The most common issue. If you made your final payment but the Student Loans Company
                    hasn&apos;t informed HMRC, your new tax code for the next tax year will still include SL. You&apos;ll have
                    deductions taken until you spot it and request a refund. Some people lose thousands because
                    they don&apos;t check their April payslip carefully.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Missing SL marker when you should be repaying</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;ve deferred repayments or recently updated your employment details with the Student
                    Loans Company, HMRC might not have the latest information. You won&apos;t have deductions
                    taken automatically, but you&apos;ll owe the money eventually through Self Assessment, often with
                    interest added.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Wrong plan applied</h3>
                  <p className="text-gray-700 text-sm">
                    Your tax code shows SL, but your employer is using Plan 1 thresholds when you&apos;re actually on
                    Plan 2, or vice versa. This creates significant over or underpayments because the thresholds
                    differ by thousands of pounds. Plan 2&apos;s threshold is currently £27,295 while Plan 1&apos;s is £24,990.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">PGL marker in error</h3>
                  <p className="text-gray-700 text-sm">
                    You never took out a postgraduate loan, but HMRC has added PGL to your code anyway. This
                    is often a processing error when someone with a similar National Insurance number has a
                    postgraduate loan, and the records get crossed. You&apos;re losing 6% of your income above
                    £21,000 unnecessarily.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Both SL and PGL when you only have one</h3>
                  <p className="text-gray-700 text-sm">
                    Similar to the above. System errors can add loan markers you don&apos;t actually have. With both
                    codes active, you&apos;re paying 15% instead of 9% or 6%.
                  </p>
                </div>
              </div>
            </section>

            {/* Check Tax Code Section */}
            <section id="check-tax-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Check Your Tax Code
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your tax code appears in three main places:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Your payslip</h3>
                  <p className="text-gray-700 text-sm">
                    Look at the top section where personal details and tax information appear. The code should
                    be clearly shown, usually on the left side. If it includes SL or PGL, that&apos;s your loan marker.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Your Personal Tax Account</h3>
                  <p className="text-gray-700 text-sm">
                    Log into your HMRC online account at gov.uk. Under &quot;Pay As You Earn (PAYE)&quot; you&apos;ll see
                    your current tax code and any upcoming changes. This shows what HMRC has told your
                    employer, which should match your payslip.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">HMRC notices</h3>
                  <p className="text-gray-700 text-sm">
                    You receive a tax code notice (usually called a &quot;PAYE Coding Notice&quot; or P2) when your code
                    changes. These arrive by post or through your online account. They list what&apos;s included in your
                    code, including student loan deductions.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Check these regularly, especially:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>In April when new tax year codes are issued</li>
                  <li>When you start a new job</li>
                  <li>After you&apos;ve made final student loan payment</li>
                  <li>If you&apos;ve informed the Student Loans Company about a change in circumstances</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                The Student Loans Company and HMRC don&apos;t communicate instantly. There&apos;s often a lag of
                several months between you finishing your loan repayments and HMRC updating your tax code.
                This lag creates a window where you&apos;ll be overcharged.
              </p>
            </section>

            {/* Fix Wrong Code Section */}
            <section id="fix-wrong-code" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Fix a Wrong Tax Code
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your tax code is wrong, you need to contact HMRC directly. Not your employer and not the
                Student Loans Company first. Your employer can only act on instructions from HMRC, so asking
                them to change it won&apos;t work.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Contact HMRC</h3>
                  <p className="text-gray-700 text-sm">
                    Call the Income Tax helpline on 0300 200 3300 or use the &quot;Pay As You Earn (PAYE)&quot; section
                    in your Personal Tax Account to report the issue. Have your National Insurance number,
                    payslips, and details of what&apos;s wrong ready.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Explain the specific problem</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;ve finished repaying your loan, tell them explicitly: &quot;I&apos;ve completed my student loan
                    repayments but my tax code still includes SL.&quot; If you never had a postgraduate loan, state:
                    &quot;My tax code includes PGL but I&apos;ve never taken out a postgraduate loan.&quot;
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Ask for backdated corrections</h3>
                  <p className="text-gray-700 text-sm">
                    If you&apos;ve already been overcharged, request a refund for all incorrect deductions. HMRC can
                    go back up to four years. You&apos;ll need to provide payslips showing the wrong deductions. The
                    refund usually comes through adjusted tax code in future months or a direct payment if the
                    amount is large.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Confirm the new code</h3>
                  <p className="text-gray-700 text-sm">
                    Once HMRC says they&apos;ve corrected it, ask for the new code and when your employer will
                    receive it. Check your next payslip confirms the change has been processed.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                For complex situations (like discovering you&apos;ve been on the wrong plan for years), you might
                also need to contact the Student Loans Company on 0300 100 0611 to clarify your actual plan
                and balance, then use that information when speaking to HMRC.
              </p>
            </section>

            {/* Multiple Jobs Section */}
            <section id="multiple-jobs" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Tax Codes and Multiple Jobs
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having multiple jobs creates particular challenges with student loan codes. If you have two
                employers and both see SL in your tax code, they&apos;ll each apply deductions separately. But the
                threshold applies to your combined income, not each job individually.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Jobs Example:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Two jobs paying £1,500 per month each (£3,000 total, £36,000 annually):
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Each job alone is below the Plan 2 threshold of £2,274.58</li>
                  <li>But combined income of £36,000 is well above the £27,295 annual threshold</li>
                  <li>HMRC should adjust one code to BR SL (basic rate with student loan)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                However, the system often fails to do this correctly, leading to either:
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">Underpayment</h3>
                  <p className="text-gray-700 text-sm">
                    Neither employer deducts student loans because each sees income below the threshold.
                    You&apos;ll owe the shortfall through Self Assessment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Overpayment</h3>
                  <p className="text-gray-700 text-sm">
                    Both employers deduct based on the monthly threshold, effectively giving you two thresholds
                    when you should only have one. You&apos;re overcharged every month and need to claim it back at
                    year-end.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                If you have multiple jobs, check that your tax codes make sense together. Ideally, your main job
                has your full personal allowance and student loan marker (1257L SL), while your second job
                has BR SL. If both jobs show the full 1257L code, or if the student loan markers are wrong,
                contact HMRC to fix it before you lose money.
              </p>
            </section>

            {/* Real-World Impact Section */}
            <section id="real-world-impact" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Real-World Impact on Take-Home Pay
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To understand how much difference your tax code makes, consider these scenarios for
                someone earning £30,000 annually:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 1: Correct Code</h3>
                  <p className="text-sm text-gray-600 mb-2">1257L SL, Plan 2</p>
                  <ul className="text-sm text-gray-700">
                    <li>Monthly gross: £2,500</li>
                    <li>Student loan: £20.29</li>
                    <li><strong>Annual deduction: £243.48</strong></li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 2: Wrong PGL</h3>
                  <p className="text-sm text-gray-600 mb-2">1257L SL PGL (no PG loan)</p>
                  <ul className="text-sm text-gray-700">
                    <li>Monthly gross: £2,500</li>
                    <li>Student loan: £65.29</li>
                    <li><strong>Annual deduction: £783.48</strong></li>
                    <li className="text-red-600 font-semibold">Overpayment: £540/year</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Scenario 3: Finished Loan</h3>
                  <p className="text-sm text-gray-600 mb-2">Should be paying: £0</p>
                  <ul className="text-sm text-gray-700">
                    <li>Actually paying: £243.48</li>
                    <li className="text-red-600 font-semibold">Money lost: £243.48/year</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <p className="text-gray-700 text-sm">
                  <strong>These aren&apos;t small amounts.</strong> An incorrect PGL marker costs £540 annually on a £30,000
                  salary, and much more on higher incomes. Not noticing for two years means losing over £1,000.
                  And because it&apos;s taken through PAYE, you don&apos;t see a bill or invoice. The money simply
                  disappears from your payslip each month.
                </p>
              </div>
            </section>

            {/* Understanding Payslip Section */}
            <section id="understanding-payslip" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Understanding Your Payslip Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your payslip should show student loan deductions separately from tax and National Insurance.
                Look for lines labeled:
              </p>

              <ul className="list-disc ml-6 text-gray-700 text-sm mb-4">
                <li>&quot;Student Loan&quot; or &quot;SL Deduction&quot;</li>
                <li>&quot;Postgraduate Loan&quot; or &quot;PG Loan&quot;</li>
                <li>Sometimes just &quot;Loan Deduction&quot;</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                The amount should make sense based on your income and threshold. A quick check: Take your
                gross pay, subtract your plan&apos;s monthly threshold, multiply by 9% (or 6% for postgraduate). If the
                deduction on your payslip is significantly different, investigate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some payslips also show year-to-date totals, which helps you track cumulative deductions. If
                your year-to-date student loan total seems high relative to your income, that&apos;s a red flag.
              </p>
            </section>

            {/* Professional Help Section */}
            <section id="professional-help" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Getting Professional Help
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&apos;ve discovered major overpayments spanning several years, or if HMRC disputes your
                claim that your code is wrong, you might need professional help. Tax advisers can handle
                complex cases, especially where:
              </p>

              <ul className="list-disc ml-6 text-gray-700 text-sm mb-4">
                <li>You&apos;ve been on the wrong plan for multiple years</li>
                <li>You have complicated employment history (multiple jobs, self-employment, periods abroad)</li>
                <li>HMRC and the Student Loans Company disagree about your status</li>
                <li>You&apos;re owed a large refund but can&apos;t get HMRC to process it</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                The fees for professional help typically start around £200-£500 depending on complexity, but
                could be worthwhile if you&apos;re owed thousands in refunds.
              </p>
            </section>

            {/* Conclusion Section */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Your Student Loan Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your tax code directly controls how much student loan deduction comes out of your pay each
                month. Those two letters (SL and PGL) might seem minor, but they trigger automatic deductions
                that can cost hundreds or thousands if they&apos;re wrong.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check your tax code whenever you receive a new one, particularly in April. If you&apos;ve finished
                repaying, made final payments, or never took out a particular loan type, verify your code is
                correct. Don&apos;t assume HMRC and the Student Loans Company have communicated properly.
                They often haven&apos;t.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding your tax code gives you control. You can spot errors before they cost you serious
                money, challenge incorrect deductions with confidence, and ensure you&apos;re only paying what you
                actually owe.
              </p>
            </section>

            {/* Calculator Links Section */}
            <section className="mb-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Want to see exactly how your current tax code affects your take-home pay?
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm">
                    Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/sl-pgl-tax-code-impact-calculator/" className="text-blue-600 underline hover:text-blue-800">SL/PGL Notice Tax Code Impact Calculator</Link> to model different scenarios and
                    understand what changing your tax code would mean for your monthly budget.
                  </p>
                  <p className="text-gray-700 text-sm">
                    You can also check whether you&apos;re paying the right amount each month using our <Link target="_blank" href="https://studentloancalculator.uk/calculators/paye-period-threshold-calculator/" className="text-blue-600 underline hover:text-blue-800">PAYE Period Threshold Calculator</Link>.
                  </p>
                  <p className="text-gray-700 text-sm">
                    If you&apos;re dealing with multiple jobs and confused about how your student loan should be
                    calculated across different employers, our <Link target="_blank" href="https://studentloancalculator.uk/calculators/multiple-jobs-paye-split-calculator/" className="text-blue-600 underline hover:text-blue-800">Multiple Jobs PAYE Split Calculator</Link> breaks down
                    exactly what each employer should be deducting based on your circumstances.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Your tax code is your money. Make sure it&apos;s working correctly.
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

export default StudentLoanTaxCodesGuide;